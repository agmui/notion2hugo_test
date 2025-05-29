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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCMDDWQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaCwp%2F88ybAiC%2FFthOPpHHgprkHATKPfjYkNIIOj3YOAIhAKaSTrS%2FWKwO4ptVG0UZW542GNBOG2qE17RpifaRaqNTKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJmlfSJhv8lFoi2HEq3ANF%2BMip6KdPx6yrQwsm2oSqst%2FPJHzw3XOOb8sJjrO9lWDZz36LYBAe518i01Cl4QrW%2FIwFiPLveSsutPLuMXgIrfHIE2OkK9OeEGiD4YYcaV6mh5ugcxHrVuuInmP%2F08RbXRUGZ9XnMzv3Zwop6fUsWT7gDpMKdWRnUyrVkWxDMswstLnwf3E4uA6TqnYaGs2F1346yiIfEynFhGvQTG7UXESCXAea%2F3FNmvDLOI8sYvPq%2Fenal3pQgbzkWknIy21bzDYYHt61dYhmo%2BuE9m2XwHJQfsGmxQtxBoV8T9OAX10NKz700aJFFFuFUO3y2nSrY27vgpI%2BOmz8fkQBQoPJEvIkq5WSHG2b4NHCjS4rmkcSPZtZQ0GEam5kbB2brcPJnVd8%2Fo2IGr%2BIN8qXrD%2FGIaQFRPs9J3kMuFBGDRzakPC4s%2BeYSOHj5JEIq%2F2lW5dIpBAvl%2Bsa6U9iU7V4N5hvVHnwWFqEXzlAw6CguuuScJT4hS4HTPOZMGlIcxoVE0USYX9GoMVN879aNqDqtANe8Eb1vN2LZZwAJFHLlbK6nJ1iWBgAPWGbeklckwuGjemll2pAuREOav1jCKDnmVcBadRWSxLCdXAlA2EJycMUmB7AmKF%2FuiI%2B7l4MKzCYr9%2FBBjqkATNCSFmbordLoXYc4S%2Fe6bQmNQlBf3%2FdMHe81yh%2BSMslyTndeP2Vzq8BwVX0AIckSFgYFkb8flrpr4Oqw0suR4LNN1%2BkFgXD%2FKpY5R6F%2BlXfEpDojVlA9TJ1V3FGJ6GPO3yjzufYxmfAI%2BlQfrU1xOlKjcTqZj1FbozvxIffUoXuJ7ZnPgjn4QqsxmGUgoLjYEVMpIkOqDSpAXiMBPH5ZGlZCyIY&X-Amz-Signature=672d9927315bb9235e60557954375e0c742a7bc89592582b871a0b33aac0490a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPGQ4PS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd3XbDgDU8ebwlpoy0sowJNM8Sm%2F7d%2F6rZFNXhxyPM1AiA4yOD9Od2m4QFIDEyyCFtSs1ex05jM6LN4iUtqdLlUKSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKo2fX9n%2BvyAWkEq1KtwDFD57MrAd8sFinr3AR%2FZzkqorCwswKip%2FzRpsW35Xi%2BaJg7JJJfPrhC8eEEOElaViCvIeMVJrjNhn90XqO0UAfrukrYHC%2F2DmNpqwKmkIHewelan6ndqkRw%2FCu2v3x6DYE5wH%2B14ETXUkA2uAcuK%2F4FqvRo4C67wfPh0%2FX72kP9I29PzrpaWzv65ft%2B2H7U64OI36OPZU4dymNyeLFxOYmp3lNEXlDICt%2FjU7yHZnHbkLk9PGuZ2H1M50QDm00UI6Ukh%2F6bBNt1efMgh4kmJkX1eUKonEbA0vNvGmlh2hQRs4dQT3CPRSC%2BGxP%2FBzH1dLBdwHMdySLnuAnNk1MYxnezJLKBGr7ME7YkPWxkcGhjhRFdMtiw%2BoZVYsW81NglcFfX0990sIEsIwIv5F8C25BjmQx6MefzYM0g2pDqMoXBjhKfNiJq64BRqUJvMrFEFx7zHgIBZ77vYMw8mNnHHk3UoZOnzNFNBIRHKSD853jKbgUNem0VpG8SrgzQvmmMKxbHzy%2BeY%2FV%2FNyJ4PeewIWURlwqEpzMjZGKM25cWee5bbsxKJTO4ZErMHLvVn%2FPet%2BJut8tciBKZp6qGmUBG%2BAyXmpeO%2BEwiGDBrE5xLcjRXEVbBK5Mwj5hoJkeLYwn6%2FfwQY6pgHTxx3WSus3awihgkVh5rSAj%2F%2FGvi40wid%2FcbI1r4uF8M70Kg7FRyd4o%2BNIZ3nu71gLEuSXnQOKl1MSUOBIb3Qy08DUqTGev%2FRkel54jV1i2eGvsWeuL5rmL7XnzMSLvoPvctC1IjGSj1VwzFvy0M7aoKihLY4cOk8cKqIChnjAgrjW6PT1yXoCrs5OnoKUAu4pP6PBOJT7SkqOnsNW1Gb%2Bm71ljKcD&X-Amz-Signature=5c0da2074343fe98ac30cdda86dd5b0cb18cc64ff9633e014482759e4ed946c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
