package mosig.cloud.store.notification.service.mapper;

import mosig.cloud.store.notification.domain.*;
import mosig.cloud.store.notification.service.dto.NotificationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Notification} and its DTO {@link NotificationDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface NotificationMapper extends EntityMapper<NotificationDTO, Notification> {}
