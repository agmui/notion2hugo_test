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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFDN3A4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfs2DdAWsrtwKfjx91n%2BdT2Wed7LoXrFW8hO%2FtyHGj7QIgOi85wlieiPN6G8%2FFQCzx4Xn49vFGPFlspUiZ%2BWLauXYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIm9g8D84BWkqbcQCrcA23F%2FqG6ljt6IenlaOeoo5K6t34tjTnEZWOW8xNYzLr1%2B2tLmC%2BwzNHHJCS9CzHBgT3dOJ7YvcsfEMBceF0bo5tKiTlOiyjapJdPbov2S1oBk9V3O41Ztpbh1%2BcgcsLM%2BzaU76AN25%2BJmBWrUtb7jTnjZ8lNPqKq53pD%2Fe%2FTMqn7cKZv1l6gee1Me3T90ulbPLFHChuZL%2Bi9og79lwfL29c6Xz4xZmaGCXm8FhUGNsU11OKwpLzFYWn3KFZqUuzvsWK6EdTQdqZ1PdePog87KsJD4Mc0Bgf02T5odpB63CwNU7l8Txh%2BU8ah1Zl3LO7%2FJgRpOqIOKGq9mXP4mmdGcpZWopxkNkUBYNzdUGQBNZcej6fbK7PeF4dYdCzE35Bsdl0vF9CBeElNE5Qi89YyN9%2F7CwLRyvq5wYO2PMg1E8xiOYKM61dA5JsZqt3G5a7OsyTsdYvD5Lik5maqOQsCEBmX0%2FPlowykt1ozOvWEU4OfdWtM3lXNzsBrI%2BGdEE2VrhjRe6CfsTPf87nbcMXmiORfUa37Pj9vrDoIC07CrEnuJBHkLbTUW3g8dW92ELPHInLmCQeZsJHJ0wJy4w29wnt64OAPO0JG15HEibDVzz4o8DuRGE5ItCw5ZBZ5MOCUs8MGOqUB7%2F1J%2Bm1ptYG4ySPX8R3znIQt6h%2B1V0CUg5PCBDM22pekv5WBxNwtslTUg8YuqDmL2EOP463YRigup3dwxzdghS88hZItCWDX8ZqJJUx0d5kYKVjJ5YcmF6aeYbBaAqajjGvg6mcfz3xR2kSIuOhFcfBgaBIpRu1%2F7%2FzXuIpi3M9o%2BeZMRR3gsLz4UpnwSFtXHC7KkjSQ7%2FtzMdCVu2oC%2FiWsUlGl&X-Amz-Signature=feb99df304ae32f061756cca4aa07ec9a0ab9b85018c957006c6a49f0caba985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZ3NJ6X%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpXskGWRFW3Jcv29YxS0%2BS4alzoOFCdFNMVjBmRTDvaAiB%2BZG7q55Zomn%2BJsK0%2Bvz24ASFrCNWLNE%2BTRP3%2F1HLqZCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDvO7xDCpYLi6ZxupKtwDpCW6%2FzBaj5uY6foSlPR4XM%2Fy8olt5TOzmYNvEFj40UQgQcOjK%2BvKcbd6pKch7YXJx47k0qhTtzYAYHV823upJEVynsrxl2PXBhxd0dQNRJuQAoIxd6Sy%2FWmyfOyMnAK4W%2F5nDdkKCWqc5fIou3kDDdohEdkrIN98LQ%2B2SUH54FJi6OmEft1BbGq6RwS6g3qm8IpJtU9JLlXXj7mArBtXuS1x9wu3xzzWInUrYwj0ybbAuvXGSer2RPhgFkTp0QVGYwISz6FZ1F3BjmMjrjttof5GCLPU5%2FW8ZF5Q8ZNIWhNoMF%2BlGssATpaI3eCynAksA%2FrIonUypZ2%2BInWtJY%2FRwhiohAt0MhWIHrcMxCNujNQTRGGwwxCba8VddUzS85Ld6P8cSj8aiCDayojro6czI%2BF5rlUnnu9oJS7ahoQQnIvwea8vh2Enh05gEjZaA7v1ep78%2FqNi0GU0Mwaykm%2BLjQFEmXMnuK7%2FackQhEl43Yd6QRls%2FDSuPqkBmhFBRguaNgNuLSn%2FzP%2F7nI40W%2FRUkJZzODFcS2fsKLfRWUK0uZ4uHO%2B%2FIO6GWGcCSF2lMWocZoHuwg7tQsB%2Fg%2BcNRcefvZNDIB7MFwxPmSK2uxa9MhiqqlAhZhmMqNvS%2Bl0wlZWzwwY6pgGOpjdLwHVMpUSjdZ%2FFGeacgt7MVGStu54tGUkiwzQGNg4cIg3RcSodE%2FMQ%2Fzh55qfWKlPlN0Kqsb09u2jdEK2CKPhh6cb%2Fs%2F2u7v5Dw1CjdF38QsUm8U5bBERL7%2BoohGwSSvh7QZ7ls2r1vkokGnd0DdLffvItDkCvC2x5Uc8DZGcA3C12zot4C0Ssjvjl%2BKT5p4bo6%2FSEqgWWsvIjIlTxSWSjc4Bn&X-Amz-Signature=c9da1a2e71b4164e8a89a9666125c3705621cfc1b2747c48e3df88d442a8a9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
