import { calculateDate } from "utils";

// Puede retornar 3 códigos:
//   1 = invitación valida
//   2 = la invitación fue cancelada
//   3 = la invitación esta expirada

export const validateInvitation = invitation => {
    const today = new Date();

    // Validar que no la hayan cancelado
    if(invitation.status === 0) return 2;

    // Validación de invitaciones de acceso único (tipo 1)
    if(invitation.type === 1){
        const created_date = calculateDate(new Date(invitation.created_on), 1);
        // Si esta activa, y fue creada hace más de un día, está expirada
        if(today > created_date) return 3;
    }


    // Validación de invitaciones de tipo especial (tipo 2, con intervalo de fecha)
    else if(invitation.type === 2){
        const start = new Date(invitation.date_start);
        const end = new Date(invitation.date_end+'T23:00:00');
        // Si las invitaciones no se encuentran en su intérvalo de fecha, es decir, que estemos entre el inicio
        // y el final de esta invitación, está expirada
        if(!(start < today && end > today)) return 3;
    }

    return 1;
}

