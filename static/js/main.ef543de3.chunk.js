(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(66)},25:function(e,t,a){},26:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),i=(a(25),a(7)),c=a(3),s=a(4),u=a(6),m=a(5),h=(a(26),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={queryString:""},e.handleInputChange=function(t){return e.setState({queryString:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit({queryString:e.state.queryString})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{onChange:this.handleInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(n.Component)),d=function(e){var t=e.image,a=e.onGalleryItemClick;return r.a.createElement("li",{className:"ImageGalleryItem",onClick:function(){return a(t)}},r.a.createElement("img",{src:t.webformatURL,alt:t.id,className:"ImageGalleryItem-image"}))},g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"scrollDown",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){var a=e.gallery,n=this.props.gallery;return a.length<n.length?n.length-a.length:0}},{key:"componentDidUpdate",value:function(e,t,a){a&&this.scrollDown()}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"ImageGallery"},this.props.gallery.map((function(t){return r.a.createElement(d,{key:t.id,image:t,onGalleryItemClick:e.props.onGalleryItemClick})})))}}]),a}(n.PureComponent),p=a(18),y=a.n(p),f=function(e){var t=e.onClick;return r.a.createElement("button",{className:"Button",onClick:t},"Load more")},v=(a(44),a(19)),b=a.n(v),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOnOverlayClick=function(){e.props.onCloseModal()},e.handleOnModalClick=function(e){e.stopPropagation()},e.handleCloseModal=function(t){"Escape"===t.code&&e.props.onCloseModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModal)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Overlay",onClick:this.handleOnOverlayClick},r.a.createElement("div",{className:"Modal",onClick:this.handleOnModalClick},r.a.createElement("img",{src:this.props.image.largeImageURL,alt:this.props.image.id})))}}]),a}(n.Component),O={PIXABAY_API_KEY:"18287920-2c6b357e03b1c2c3350c52738"},S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).PIXABAY_API_KEY=O.PIXABAY_API_KEY,e.state={gallery:[],queryString:"",page:1,isLoading:!1,isModal:!1,modalImage:{}},e.handleOnSubmitSearchbar=function(t){e.setState({gallery:[],page:1,queryString:t.queryString},e.getGallery)},e.handleOnLoadMore=function(){e.setState((function(e){return{page:e.page+1}}),e.getGallery)},e.handleOnGalleryItemClick=function(t){e.setState({isModal:!0,modalImage:t})},e.handleOnCloseModal=function(){e.setState({isModal:!1,modalImage:null})},e}return Object(s.a)(a,[{key:"getGallery",value:function(){var e=this;this.setState({isLoading:!0},(function(){return y.a.get("https://pixabay.com/api/?q=".concat(e.state.queryString,"&page=").concat(e.state.page,"&key=").concat(e.PIXABAY_API_KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState((function(a){var n=a.gallery;return{gallery:e.setUniq([].concat(Object(i.a)(n),Object(i.a)(t.data.hits))),isLoading:!1}}))}))}))}},{key:"setUniq",value:function(e){return e.filter((function(e,t,a){return t===a.findIndex((function(t){return t.id===e.id}))}))}},{key:"componentDidMount",value:function(){this.getGallery()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{onSubmit:this.handleOnSubmitSearchbar}),r.a.createElement(g,{gallery:this.state.gallery,onGalleryItemClick:this.handleOnGalleryItemClick}),this.state.isLoading&&r.a.createElement(b.a,{className:"Loader",type:"ThreeDots",color:"#00BFFF",height:80,width:80}),!!this.state.gallery.length&&r.a.createElement(f,{onClick:this.handleOnLoadMore}),this.state.isModal&&this.state.modalImage&&r.a.createElement(k,{onCloseModal:this.handleOnCloseModal,image:this.state.modalImage}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ef543de3.chunk.js.map