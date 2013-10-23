AngularJS-specific code

Files encapsulating cross-cutting concerns (persistence store access,
localization, common directives, and so on) should be grouped together.
The rationale here is that infrastructure-like scripts don't change at the same
pace as the strictly functional code. In a typical life-cycle of an application
some technical infrastructure is written early on and the focus is shifted
to the functional code as the application matures. Files in the common,
infrastructure level area are best organized by an architectural layer.