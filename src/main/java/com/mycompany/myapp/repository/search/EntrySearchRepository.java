package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Entry;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Entry} entity.
 */
public interface EntrySearchRepository extends ElasticsearchRepository<Entry, Long> {
}
