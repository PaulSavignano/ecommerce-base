import { BrowserPolicy } from 'meteor/browser-policy-common'
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' )
BrowserPolicy.content.allowImageOrigin( 'https://placeholdit.imgix.net/~text?txtsize=30&txt=320%C3%97150&w=320&h=150' )
BrowserPolicy.content.allowOriginForAll('products:')
