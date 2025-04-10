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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7N5BDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBDuixf%2FMiPtKefXIy4C8epXvQw%2FoyZ7xgDzgr4ZTiiSAiA58ta3OfxjbFOZWF3hmkJ9b3XBYlpTbhbGJJZCzvWv6yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLnRBoLNr6owBXIVOKtwD0Mx2N1fiQhqaXh%2BBxnzjtczHp7inpVIjePhJ4jb91vT5KTw%2BNie61B9a75ioY0sTvZRyQaP3pHo9XXSOOu1QnwY9vgOQ4Hf8JZ45m3qigYeoLiZY265xXgEEncjOhqlZXwMwHLZ2yrDfq2mMZprgYRZ01rIsYbzgqq5hb1y5NUa2eaqL7qPPHbvocgnpW%2BaJy1QLoWT5%2BkLGLqb9dK4lGIcDgWKVj8z33q1qT6bcnM70S84f%2FFaKiPLC4Wk2qSY1fP9eK8HpXQEjQ8kA%2FsxeJpEe0alb9O3zt54xBmERZwrjVvzI0sScR545zUvxwERNdObsS9y0UU4wb05KjuiQgHINaj8qoJ2pLE%2BTqrnWTiU9p%2BV45n5zU0K3%2Bvr4W3ghjOOr%2BGUoaHNb%2BmEr%2F%2FfhpJnoVukaqmO6PGBE01pKU16Gcf%2BNh5%2FM2PKzb%2BrnEYdzulMZ88AE6u9MZ9V2FtNAv2rgOL7kIIbdLMyU%2FIMBg6SHdlbbhetzK9hSNqn9la%2BiOAH9RADZa09lDOiWocCd%2BSL3lmFkX1mlVqAHOxwL%2F7UWfsFJQZz2QawoLWl1g9n9lsvUx3qFGA%2FQvJQzKuiVhByKS59pz%2F%2FuNOgmPKoGfJMv7%2BHrGGgYzum4pOww3d7cvwY6pgEt%2BWmcYCurMxOIkxx0sGv7rupgZuYS%2BLDTQnQ41fGhxHIVrW2iSQH6Ago0mYwG7qDIsQScfFTLDovu28cYsA7RB2lV%2FNG9NO5DzzRqqmowduoCp6z5AgCTtYpiSOOruVQTSB0EcYYXf60yXp8nMKh5mRTjaiTYqVHiJA3rypvjHDDaTurUlDBtyAiojcebGxqTWvEJgiSNvnZh2JFs0OeaGlG%2FUglk&X-Amz-Signature=94f28bb411f417b38e605eaa03ee78d7f3bb865a2c8d11d7ae732e45a817f5df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMHMS2P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDgPN%2FPNrMclWclX5mfI%2BGEktadJoO9yQ8fN6R3KW0iYQIhANntmNZwCIWuXXIN65WBbd7GnLIuIVn3hprgRquVYHizKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze4lJYuNVABrdj2voq3AOjRmVOC39msO3ywDjxynQjTrYO%2F%2B25sSCfSJQaqcmDsARuCeylpkWcTKyhibb7vjwMrUaDVY2UK13ZJx2GdJhc0DgrXS%2Br3G8qHBFs1ivv8LdYqSl6b02p39u8bbmxHlyoLGzKgnA4q7n8hyCqXakae7wKDikCm7Crkdpu2f6zkkARB98SCprrNkRNkOUOSfBDtEq1MzmZaiio5Ta7HXp4JAETeVojDznP%2B1FN5cY3OGcTt4H6CtgKLMupph%2BdXrzYHm%2FJLLyrRyNWSv9xHWgS7qVN2GxUmAeyGdCwQLvtOH8Pg3S%2F%2FoaN%2Bz6GfH9ZW92inN2iuxZ0dMIVrxR6teLJQ2gm9nDs%2BpyzoHRxv%2B3qS05444w%2FgEkPV8FjIOs%2Bg2nWkNSU9YASBurY6wuBGcxKfsR9E0wyQJAYrq95h9m69Wlc2j2fAfnSFCD%2BfGtmyqkUYlSTPfEPFo%2F1pTLx%2BQt1d4nmCQodAhZVuRkjk8FhZVN%2BZP9vzxRjgqydcpWGKppTFHyJxcxnVR0rR%2FtLuTN7xZ0vSZgJEZXwUf06vL2p4KC0r0q3cuY9BnPqWU1QelcF52mqtZO7tkranIg5yXabmFxm3GcrJgAMtrFT8YKnBjrHRmJCyd9326csCzDM3ty%2FBjqkAYh%2F4DNFk90tjjJiCHI1WcvBJpdQKx2gxUyXhQ9lJzljzZxmYwlnc8D3hShccvufUvGgsLeY55Ok88NeNQoWTwiNXmuNeOTwX87jnfPycIDbFewQSNKDdLTBfplwBkPSp7N3GRats8rgA0ZwJXK9Ybhim4cXIisMxQk3tavfN%2BxuW%2BgZFv7Aa7kOLNS4KIMhEuD8LMVMcESUT5kzU%2FJ0gwmQ6qiz&X-Amz-Signature=efb53725382a3fe90bc63490b431f8fe19394ec24e345b91cc0be74506ea2639&X-Amz-SignedHeaders=host&x-id=GetObject)

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
