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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQQQDPQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDks%2FdfSe%2Bsf3YM5129gritLhcjUL8LmrNFTiCVGRkCgwIhAMTrrpD2AJR8MSmTyVxoPfEqbE2TdnYzbLy4rxDEvhGXKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWxaErnnfte2yMJF8q3ANuaCDJwoIyPPP4%2BKZTUoXyfsA8MBsZSg2BqdNFj%2FQCJ3CYf057VDFtmc7H7JOs0OEN4LqlLXPjXvv9374Ov%2BuLic5%2ByoUQwDZ7FH1fKKlFsxwEdvhFDa%2Bu3w80YKYxLkHi8VNeuf%2B51VoqSdMyGX27ZrMOiFyikhqfZKkDxZlNauLRfoR0WZs7DHEeeZQKhqjvC6bkFU0sFM5X32mbpw7m73BdOWG3RKRRK9TlJexyMB%2BJnZkup54GEWSKbz7HWq835XO6hxjtU3OViBzf5c3y2eNkBvRKwsBqVNOg%2FV%2FApL6WKcuk%2Fx0cXpN6FS%2FUHhnINN5SEcQEVzunnDgTg9M%2FKHA3uO32%2FGhCG2EAwLB3goy%2FIcF5FOFpR%2BeGK765li4LmzN58tyrmWcxJjByirr7ueKK7QX099GgYjKe9amLXEWs%2BuWFMV%2BAZLmI41YlHrqjM17IdhF7%2BVXiKTykbLJFiMCUmrteU9ws4O0PZTw6TXIRgbE9yaB7Hupm78aif9NkoC4f0%2B8zVOi%2FkD4iOD6nrOJEZPcJ52Dr5CSSv2QsVc8G9IkJiB38mglgF0PthVW510lru1DhsSfU0Y7D8MM1EIg8OyWWFpKqzbN3uxWG0m34ij%2FGaEDY59ydejDwk6nCBjqkAUHAtYNa%2BoZkoeOOCs2xIK2P6%2FUzua0C1XZn%2FU3qdYrrsjIcfbD5DN9bjV%2FhDzJep0DfZvCzFSfqhYCSSba41evG%2FdzYKW9lgYzXRn3xT8N5Cjf94ckD7e9wyTrXdu5y1MX5MJLx%2FSwSW5Ic8Zzxlba7JGDT9p3qw5EmalwwUXf2euJZ21KYu%2Fl05VEOTLUM%2BkbU%2Bu47sP%2F49062lj6DRv%2BLOAft&X-Amz-Signature=ee7b4dab8a24bc40dc7f00dd8810e2448b93a84045a9e5d9d1115c0c49318b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZY3GFR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDkCEGI7DLkLSvze9gn0shj5DgxOOCyZ%2FDpxo9rXooDZwIgGHcOWDLrmqHpSFfQq8%2FC8q1UFF2x7rCqhna1n6fRnN0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV7Rjgq10zojYBzjircA9BG2OZiNz50g92qQ2Zhz9IynDLLe7T%2Fad2Oy3x%2BWqsV5pZqMsfm86YqLkwWw4ECAh7TAC0LXd%2BwlkQL%2BEfAKZrPcDIWZ0EnnX3Rmkg4F6NlisX7qgzF%2FqqGzQMeE7f56GMjWtiOk%2B6uDYS2MROZyG6vQd7dNe8mV92DGI0ONBKi%2FkIgJcSUPBy6t2p4yOBTXRtg50MyIxjyTF5r4jaK3cRa0E7EsV3y0rL1z7n5ujvhK5eMhlixhz%2BJT5APd0b6twpdjyfWqTD2FfOZmukcfb5SJJvRaiAo9rC6WBwlCZrpYN7pawiiwfGk28Tum1AYY2ygFMbHXShOU8xfzJy6GZ2kmOeqOvrz6o429ePG7qvsqUj1G3o00VQ99mRSBj4fzu9oopeAaNkySKh%2FaqRCS0CXFvgwTEWER%2BJkh8bEz6IjF%2F7W%2FPhwkp%2FQ8ARtIpM2bpCxR3shkgmm47rakcuDb%2BtDKKbQcqWbDq4yWnOK97DqGu9JK1ERYhCUaKeT1auxHouJzuhbJ3UJsmvecaQpP5RFBshO36d5hEpbx0X9hzVLlO%2BF5S40LK2YbO0DObFcAccFgsOoR%2ByG4DLE8Qvq4VXKBVasPf4DsfX6%2F6tsys5vmZ7ffrABrdOzxOLCMI2UqcIGOqUBRme6iAAUbDQLhipODMn0Xtz3X2qhdSL2dVdb%2B%2BcL8BdwXBICfz3oGt4Cwl1C5JepY31SlKnoitjreSu%2BlwEELtOwN5PQM4oUdHWZLg6M%2Fg%2BniLIWk8MI2J6WrggGTaA0zU1yx6hphuXV8tL0qIDN1xOBNphn37MUCmdjxSSJLrZbEoYate8gD025jPnBMTkR5ZTNXpYfo8YqHzCkmdDR5vHfdclH&X-Amz-Signature=dfcf73462834ebbbf401593ba0e35dda9509ab99ba1ca64fc02130884608d674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
