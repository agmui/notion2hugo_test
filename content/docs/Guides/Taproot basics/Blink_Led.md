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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZN4SMKF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDggAP%2B41R%2FwAtg7a%2FH7Rdn%2FpmvSTs5Tz%2B3zqOnaeDOqAIgQxnid66WPGNH6iwpYT2l0qfDsost507yUwt4TjAsa84qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaun%2Bxg%2F0V%2FjzcCKircAy7RxQQnhC3ifnPEpZ0z5%2BwhcjHghwy5xQenxMRr4sbjS2ZACNP9BDkBCDFEk8AkG0Yvbxu8rYzAEkQ6OqnZtrYDU5JR%2FNr%2FxrP7H3qKrsvpEYYu5FJOb2lbTJv4QKm45zxKF3wyGinH3E%2F37VFblIpvtFZhUO5kyXWT4l%2FKRNv4gN%2FF29J1Rjb5DWftG94TylZbO4AlqYvR26pA77H6wAe4g70ou7uTJP2lrFr1PGNcfqM016VBevqjT%2FqFQEnITExXmw%2FDRmLCiNlD7ysmtwCSYcUPf7UM7bjPkW%2F0Gm5aeLA00WiMuRxFZswRrZ3Rkn0fXWISJ3Tz8QLo2kaZe%2FJroxnbKaMXy3Diq9wUe342MnHoeIiK%2FaejI9ntVYQOk05nGoNhTpyxExRi8jYWN0fxoD1zibKZnO7pPJs0K6NuL3CDL%2BaTBe%2B4SDdC9IJMPTzULRRFkyRLMrxLDIssSqJ3Np%2FJGe%2FSXBsGnae1Hz6F3%2BeehUEAX4zLU%2BCz3TYbB8Hx94HPc7nBRvjc6QBpl5o%2BLoi60xfux1Hy%2FASBx7vmIFOma5cF7YGNmOmsdfuBa4kTPFo8Vh21t%2Fod1fCo8Ji%2BWPKJXJw8zOVRMeq%2Fa7YX%2BQyLC%2B6Su4U%2BwzyFMKrvtsEGOqUBH7U4UDqzz%2BBgDziKVlcghIeb57GiFv%2FMITm4%2BSyZvUWzpHXTSTTTwLTLEmOIgfd87P0CENdSKGagw%2FbSijMCRetHq8%2B7VmYsnRgjIJdy2n14FJPecfq4xXPRVSNKgsphUGsbk5%2Fg%2F%2B5n2Yffi0Oufsmq5W8P8qF%2BFK1Loiy%2B%2BD%2FS5cxKS6W24k9uXMCBDqOg2A6WdXlm6vGsBTDmFS%2Bwj7A6giBg&X-Amz-Signature=1edd6c73bf2222451351e5674bbfb2a78f1f76b8c8f6c927f9271a4c45211705&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZLHRXI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCuZGKlmHe2KELjz9mWjUJLNyV5GErNySNtqrlBOdlM9wIhANt8JPb4QtTrbhJjHRKw5lZbK%2FVyChgPD3HMC2m%2B5ln6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDe%2FAPKwEHvH%2B6m3oq3APa6dNuTfzJUbH%2FtNu1wOkJbpEGGmPlEZIw9ThhgB%2BR4kNKEbpEEnl7ManNhZemy2dsMiMzJ7MfDqFT45ZdmJfafJC9gHSMG%2FLcHlgDgi01p8cPbp5Pca65n5Xcr4BvGLUulTkMHsRvXJfoVo%2FDT1hWOpZ4UDRy3wVbf8r5OZqkGUW7PljQIUqTk1KyFla9%2FxM8O%2BvrIyggQVbNnp5qQ9rZxrwtO%2BLLBvmQ438r1jYsoxv1CNo6o%2B9X5M270wmHeFSwzGhVNWeuYE82DrufLKDgezf1rTONt7Np01B%2FEk8eH0GttIF7kHs1GqASfu2Tg7W9gdSp0bX60w4GZCANvdRanoYemLe5X8rv6heJrOl8Az6IoHmjabJhYR1g%2F2X9O4hmTKsbsUZNHEGmHZTIkO38yn4nMYYesRWYDYzaD8j5qrLUoFTuCnjKlakN4EhkzkwT9lDrYvnv%2FilNIv%2FNnF7G90L%2FBEPIKlXIwRXqORsmpJ%2Ft78XTBzBy0rxr%2F3ELo%2FSS%2FC55ylcKOcNHck6Fz25S6NTIVapagjh7N9sbzNYbuQxBeVS1wOEFKzswwR65BwPrp64XBEjzJHE%2BiDu1Axzsfbi%2BOz46H3dNwn2DzIgVl2zPt01kUvxZVHYuoTCA77bBBjqkAXvYH5wpt0Gnl2i90TnU9GEzzTxdsO7hCw341CV%2FZplbxs2gfS6oiVxbaZGR670uyPbu3haaHOkkzcWJ5hsE%2FlEwJNa6ZyXREcGVlWwF%2FxdcBfBFDXb3o7dkXRyqTJUI5GgjaNqfxK9Qv2Soz7ijt7uPP5z9hM4qGjw081XGgn%2FfZ36nRSbZ3C4U2YqZdKrWI65MeAAW1YIJQP1rAzeiEzH1QCN7&X-Amz-Signature=f64b900c4eb5a7855d4e2bf7f62d90bb333430b7be7a7de68f0bc668c4f7f3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
