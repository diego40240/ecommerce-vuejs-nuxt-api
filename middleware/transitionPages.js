export default function transitionPages(to, from) {
  if (to.path === "/") {
    to.meta.pageTransition.name = "slide-right";
    from.meta.pageTransition.name = "slide-right";
  } else {
    to.meta.pageTransition.name = "slide-left";
    from.meta.pageTransition.name = "slide-left";
  }
}
