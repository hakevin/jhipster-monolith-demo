package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Blog;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Blog} entity.
 */
public interface BlogSearchRepository extends ElasticsearchRepository<Blog, Long> {
}
