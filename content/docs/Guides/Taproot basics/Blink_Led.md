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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2AHSM5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDEFYtZRih0l0vRxjqp1l%2Faz8PGRT20RBDy9ITsYo0FnQIhAOwINLXiJXt%2BUEfLkUN18U34aVAcAO0FmCjuVGHtK1pHKv8DCHIQABoMNjM3NDIzMTgzODA1IgyOL2Ys3l%2B7AIIrewoq3AMjJFWAkE1EltP6STIYoAyGbbzcG7HzsynWzFoOrwNZrqaz7J%2Fu%2Bad2kJWV6BCEp9Gkh5%2F%2FT33ZtTAJVIRq%2BD%2BR7TfTlq%2B%2FONREyeiLT7a%2BXo%2FepSfoRVmcU8FhCHmZ%2Bx%2B%2FZdt7hY753ciHa93GG4Oo9ZGkCu8NQsFZdcCoN2K4sv14aJQPnFeojGlwGe9byny44EnKZ8bWgJa9NdNgoYrbFF5K5j%2F3e8%2BuABMwUchIlbj2fpUSEOJBWDOQaWCwrg95vabw%2F%2BZG7%2BsT51Y%2BCTFdkbsFXsS6bRQQ4WPxN3GbBpx%2BAo3iH2oWblhOBfji1qQ%2BKP4eeMBvKvJokCTxMIQqkJvbIf9r3aYIrMqIsc%2BcODFC0NUxGmBXzjEFHESquzx3hnpd7CT8Z512kUHumDeWqbwaEgdveMmkyVtfF7WhwJUGE4Y5kxxYmaFYTkBbBJ4NK%2BC5J2wwZ1gY5C2SzzOCzWutazzzdiNQzHRi88tRVrv7OqDlOXTkUWiJjUeenOygW6xRER1CP5DCbXYEXOfxpzZfwS%2BzL0ffbHItmaC7DPNfNaFeiXooGz1CQxVVdmRM11hniu%2BB8kUWFw0vbWZKIa3t5hcttgfzifYZcNzSi2HuRJXrc55FgJ2QkTCWg%2Bq%2BBjqkAboUPC7nkuulk40INZOwRRMCMSU%2FOlNL1678MEwHxzpb%2FRoo75kye7z%2BWXaFnmkBh%2FziDEIqu%2BR0O9X%2B8WxIaXK54OF%2FFb1cICKGrJepz1cKydy7nxkMs2suwDfSoqJ72VJsAUf3PIaF2qxXlkdcTsNari6RH4wuiOMA%2BOKjlnyFu26bR%2Fs%2B%2B9YxR%2B0LEySHDckYPpKknc6TJJAxnG93tcvOUCDQ&X-Amz-Signature=2d0939b70571a326267f7e0e73d78a9c40024a44079635b9d9a8f92304a0e060&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5XKFTN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCvZorlMYlpFzx2VoTHBzGEeFX6gnqNHP8vsHIEuFV3fgIgJL0I3VKmEAY0fx%2FJQ3MeHN7f8gWNH1U%2FdACuGyaC1wcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHBvmxLTA1CaZvh6jircAxo3SGN6U%2Bg6Js1u7R2aR%2FRvIkMyUQgvbeEjAILYixzSQZnAx9Vf%2B3%2FsnJaJubqOOty8LCEvE6mOcEoyBLN%2FUrDuzJUbYBacpzjvrol8K0q%2BRmfudVhxO04LtHsdeUhnfFSygaEg%2FGiw1jzZmBENze5oOOLC1%2BYjoXbwHKXM%2FBA%2F0v6OUGYuMgCRwq1bvdAgnn44lSJwWMs1RRFIhYSUksas1I5PGy1fvsFU1I%2Fq1sBz47IyyFRWZMoSsl6YW%2FUGOL%2FnC8i55QNvjrbKuC2eF%2F%2BC997YU4L%2B4%2FxtAKXZmpxyjctkBz1Yg3Sxjp9J%2B6LigDmRuWC7sjiFNJMzQYF43%2FAwGI7xDprqE8%2BF3UYSA8cdYMvJ5Cm4Mu6MvEe0ZlY7tZNV%2FK%2FOHUmNrFuLw8XVFwTde6fDIWFERMyavbLwpe0SFsc6OIoTgXMSdE9eXTjacnoqCqPoyyUT4%2FSuslsrxvE93%2B5kiiYOfJFfSC3VspZiCQzOcHe9zPt0UVxtC9u2zfE2dzEHe%2B6oK3J52lcxlrFG8lQu0crFwraQONZDPc0zah%2FI3oOr2wBviiKmu4jgFgqY%2FS9t5ywLx4NYfseuhlTOy33qNaATzQ3sC7NHIwUyG3BAWABlDQTzcKAHML%2BC6r4GOqUByz82Q8DuH2SzsuMj1fpaINto1InESaodiwzqg2YF9y5i44%2BZ326rEgoArol2SP%2F27dAoM36H5ztyAclbTOhoGDGHktfllVsP5j3IoCIC51mEUY5tHUw6QXaUZGKgNTmhwgNu1VcqaeZb9%2BMoHAzaiQUZo0bIXT56XdCAGmFyuvwRyHDxn%2BbLGgZyIwrfjx5P10rRrDefH%2F2QNzXlxxzkh%2B6s4OId&X-Amz-Signature=a9048364fcb59cf64eb38779a832f99a969e1a3afcf761e37140b7f86edef424&X-Amz-SignedHeaders=host&x-id=GetObject)

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
