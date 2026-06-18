---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYQHWOH%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ntLPF5gM6iuo356maOCcUML3aSiEX6rrlG3IdkehHQIhAP5e97a7CnK8%2Ffo51CoqB5imiryKn%2BxSSv9YPJLqiwJoKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoLU%2BupmiaRldtZGQq3ANlSfjBdM4dxKKA%2B4n0jk8d%2FOkPeZFGms8chnvu1318EyIlR05cws3SQeX6dbsqpY1XybOJ9mSnbWULVfYZHij9bVTsqsXq101KbZgbUvz33tUfaOFVAzLf6gwQGs2fU%2BZ0JKpOQs8AtBsK%2Bz2KkQk2fsXUaxiDS4CVOsEimO5Vm4S5H%2FOoCJo1oxij7RUCMc65%2FSGIYUxvurNcXw%2FQ36RhYrm3iX8azfwmfkvdIbyaI3ZB%2BHurCKfb32%2Bhe2%2B7P5354SHJvYG9gUP63TYMYPk0%2FxJXtwznD%2B5YpcKKgoTQ3HdNhuiAlRhm8MJB3rtIRMLxeeaX8V3h%2F4GgxAOr0zjW2bQEY8Jwiz56xp0w0LRIXFHgVdqA03n1ZtRLgzvxcYVBOzT0d7vpReSEYOq10h1rsVz%2FR0izegnvlGvKWpxarc7GcRVxiaDkYrGIdSEjMLbNCJR1oJrQ5UMn1%2BEOSBnHoUNeYTXWx%2BhAgy3842SIIJqdtlNqslFTgMC3uvrUbpVpoU2O5mPSvwobocufpcsqmx8RuiVSgcwNNfoIiyr8Reo171Ci4UhuXQRLb2VTblHeQlKQBSZywPHd7yvE6CV0k3okE2mRZ6uYyLQXphCu6MhNVGkYKnt3xvg6wDCdsc3RBjqkAVLD7I4pf%2BsvHNd%2Fuc2wCPQMvgt3wpBlX92Pdm9vorCg7ssUEvnMnkxTbwZyJTx%2B1OoOqX%2FCcS2%2BCfXmoETk8KEZsNtzgq8X5hMyfeXngbQZgLj2eiCJIGjkNqyUGWvUz%2FlDERtZNYkKhbapc0fm%2FUnn7v6aNe2zGHm3Bp%2Bm8iT8dD1dsDvTdAsTEeMpFpw%2F6CPLgcCtAcTWobc0goPaetBimEJH&X-Amz-Signature=f877b536e331b445ab23bbaec6a3a7ac4e9e36fb130f9510a2f348450f6c94d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV665V7M%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPGNaRX9KIRMCnr%2BydEGXTkDYdvH8y4YOSKvq7SJ9IAAiEAh5HQ9UbtbmvY20DeyXDndQUfaq4rqcH2rNznukwJQtkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYW8cr4PWYaMLFTkyrcA6pNcL7PhWGpXF6YYUhk8BQvV3rW%2B%2FeMcOBSXLq10nu9CbPOo3schig%2BY48Sfxl98X19z%2Fo8EsndoKa2%2BwyZyzeNT4yjhFdpauaE%2FfXljlE2F2gux5Dirrctfiz3LpxpySzrFpjfSMmHa5u6pZ6tOXsmC58uuzbuSeIHO8Ty533XhNEFjqUXS87L%2BLoHWT2fI9VYHea9qDbWZyHc6zVh%2BUzliXdjBSs2xJENQ00Nv%2FVPqvequ4%2BB%2Fnu%2FZHlqrDPMGVI8KjjYcgMxChruGfOQBJH6ZKlQIKyTCvz5wE1mdshzT5KlicA%2FWActEOjhA03lWUe5yHHLCUHjKRr6UT52wXZ5IsjDsOF8a76pz0fiaNQfBI4L0QGa1OPnuEvFJ5fBRQyS%2BCk31F6uxwO%2FRajVVwf9Rx5Om50%2B7ZzgGO2OoVL9f4iMYt3Jgj08ezp6SpJBncuRZEJFKNBfcDbH1u7Nw%2FR5IzR0WotwjE%2Bm8Srhu3N3QyeS6k%2FVJ3PnH8knR5nPQafe9QhFqkFD3EsCw9rRPE%2Bqbv7GoWsj0Eyh9BPXN7q%2B90L6NbJGuJjNJYW8F3UQsUtKEq32F1hQVJ8%2FYJzcqIbKkH0yStf7fKIe2OlMneBwaU6dPCkslPMON6RzMJ2xzdEGOqUBv6jjJP1nCPJUqdJv0Hf%2BDoVzeGNbdAW4UfdzB3Y03gIvo6dwvHpq4NPC2oAC7mRBoWhMvZEA9Vl9J1p7onjmp9Rg21loRcDgIXSqFNS4v7uai9wepwsfyKPC23%2Bs%2BP6BAx1erXSyGDBq90jFukyN4FUANKRBBqiXjT4QXD%2F7EWVbZCtscndYMcHEpfWtjMN0GIX3jZMM10X5YAqB0ifoUT5HYoGe&X-Amz-Signature=64a0becf5be4df8b37dd530fd61a5238528095d98d7a3ef71b12bc3d9574d2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
