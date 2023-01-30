package mosig.cloud.store.invoice.service.mapper;

import mosig.cloud.store.invoice.domain.*;
import mosig.cloud.store.invoice.service.dto.InvoiceDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Invoice} and its DTO {@link InvoiceDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface InvoiceMapper extends EntityMapper<InvoiceDTO, Invoice> {
    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    InvoiceDTO toDtoId(Invoice invoice);
}
