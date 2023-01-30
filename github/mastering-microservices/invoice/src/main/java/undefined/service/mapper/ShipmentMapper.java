package mosig.cloud.store.invoice.service.mapper;

import mosig.cloud.store.invoice.domain.*;
import mosig.cloud.store.invoice.service.dto.ShipmentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Shipment} and its DTO {@link ShipmentDTO}.
 */
@Mapper(componentModel = "spring", uses = { InvoiceMapper.class })
public interface ShipmentMapper extends EntityMapper<ShipmentDTO, Shipment> {
    @Mapping(target = "invoice", source = "invoice", qualifiedByName = "id")
    ShipmentDTO toDto(Shipment s);
}
