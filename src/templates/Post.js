import React, { Component } from 'react'

import Page from './components/Page'
import Article, { ArticleDetails } from './components/Article'
import Share from './components/Share'
import Comments from './components/Comments'
import Related from './components/Related'


export default class Post extends Component {

  render() {

    const { title, contents, texts, date } = this.props

    const published = (new Date(date)).toLocaleDateString('en-GB')

    return (
      <Page {...this.props}>
        <Article {...this.props} title={title}>
          <Share {...this.props}/>
          <ArticleDetails>{texts.publishedOn} {published}</ArticleDetails>
          <div dangerouslySetInnerHTML={{ __html: contents }}/>
        </Article>
        <Comments {...this.props}/>
        <Related {...this.props}/>
      </Page>
    )

  }

}
