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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CIUI5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMiEf1shKsiug4I2AWyYsbi89XuqBQIX5958Ds1aXvNAIhAMsyl5%2BfzkUh1coUliqlVJIASfJX21Ti%2FgVnXL5AR1czKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8DHt0a5BNje2X0hUq3AMNSROLYdLmTMMA8Nt9co0MK1yXc4R8NV1l2vmooyx6zyJDR6X4S74vfol44Ff%2F7eExsbJIiEGAI%2FivhC4ygem8HGZ9GgVIbSwPMaZrz%2B1x2FMUOgTizKfye%2FLXKTAF17HYgmxB1KDvLeVmN8fBHyoKaopBhEZf%2BShhJID%2B0IkzYGZrQr2McYQGVjXoh7u%2Fc1i4VKFfGG9yR2%2F4BbDnHRlACylxNborPop6Jr8yvNNaeOaXUtCJblVqgH5eCR%2FzJfwPSJkyv7Dwa8ksescX23DmFny0nluF5eNqYx2kNN1I3CNwARzGsDTBjVuV7XQ8ryQPL7E9MlY3IIauypKqSXdJr8Tw5OkvKot2LAKhRucj7jj6PsUTsY3ZrQFSjtsQAtVgGjlbr4R3iGMWCPjyWR1v5cwPXS0P%2Fvp%2FmWJ0eTv9g8RG9fFQk7zbEyMiK287LYnw%2BJ8WLzO93XezRGzqIfcUftiBVbTSE9iZ0JaGwGFJubG%2B05yMTtiNQUBsy0UAc9pwcyfbzTsQW5Anu22IEIXOvgPwivKGkD51eHUiVPc3BCRv5ClExOkY2Q3ub%2FyCTQ4IpeI%2FknWh8N4Ur5xpNnnPIS9KNnzfOmX2u0%2BiPpKjZn1jbq0aR9DnQDJ9QTC%2FspbCBjqkAa%2B6leF6lzD9RLgJphu2gBjRIVLSikHd%2BK3XrTETQK3GXef4sd4kRYYb3FwcQTot6gEpsogHGXtVdMBKx3%2BueULpZ2WL4VELfbiyS%2F5%2Fu%2FvivovDkSR4ByKh78ozYMhFW1YfDTtDboz3m2czn2f%2BOFWjhNJ6Dp5b2%2BS9HLGA9V51zgg5Y818C3zrwJB4C7ecd1PwdL4Th3Lw4hkvmU4cSDRSIA2B&X-Amz-Signature=e4224db2bcb7080c7a3fc87433be3bcfb778be5ef0e693b3f2361e30a7d72c94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRYQ3DG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD97ucq9jAZbwlLs6YIuch7hyebACGdEL%2BBQM11zj1N4QIgHbuJcTMd1eCNmAnSK%2B%2BcDGMpunnhGGyWure23sMrleYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM75%2B%2FxD8cpDqvcdOyrcAw%2B4JwwBLvobnDz07hnXG%2FLQsXRDo%2FdBRPMsmXpbMEsyTYlXNOPCRnYhHkAv4qZphJDKPt443h5GWSAAQCKYTYQ3iwPYLmdhMe4XOQSv54PHPiAp1y5EQ9%2Fuu1gdxUU4aOlA0OceL4qWuM11w5PLuplNSySWupqwpSB5bNKOe2WxjhBD1nKUS8k0CB6XE%2FEzjy9bU2TLc2Q%2FJyKAlVC9aft%2Bjucmnd2LW7MZV0MdmLQLNGl%2BjRaOEiYU5RnD4hfFl3uzsphy8M5UmaqC3Ni%2FACRKV7DhAq%2FiGAqbNQqm0SrEbhKWeFFo0LPX3cM9qEH0oImbujX2lyFPXW1yV4GJ2t2EZ12ERMKplmta992r5uiyBHQOmT5NF3Omkkl%2BtCzYXcSLN65krf8eg3TGvYmLWAH68o%2Bg2xJZbQ44jWln9N3OArnrr44ao2oJ0En9bVyYmhSfIvUerAkYeiOgnHSLFKJufwAIlT8x8%2F0qZ91ttMknyvc%2BDO7LUFAm64VKC7DmHxtdgOxi%2BIhUQRYHe%2FCbftScKTDXg8G0O2UZAPX436lKGTHTU%2BofLrimznLyC4psFus%2Fhh%2BjkfSwnspmAw7OexyAEz%2FCNkE4dra2Tafq9UxOASEDjiW3yZkAQQTrMK2ylsIGOqUBBb8SFLh6eovUG7bI955tvxU4wDsKoFczv2jbC0485JE7r4fetvmcNdXJPH78%2FcQMQ6ty1Rzb%2BJNO7KAv4LXSzAIsLpVbct%2B%2FbyYyinVqUGCBO2q8vrnZl%2FdoAq08SghKy9Xe5VVzsV%2FUEsmLHO3eBe98mOj0Atj%2BGp6Krr%2FoDcXgoflGLqBwnHcCjFPDiZRkc8p05cz6TuVO9wcw0Yv5AydyWhkm&X-Amz-Signature=961935b9b225d7ec318326e18867fdcd94537e2bee5d1e6f0ff5b08eb40c67ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
