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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=3a605b650003f6db740b2779d9107099e99aceb5f935c702c85c626cfe2ec8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVJ6UGU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj5FHxUk9xVYwYE5WMPVp1Zw72RGA1pDFFE4RwYJBZ%2BAIgc5BRT4TqCA0I%2FrW7IA1hv5qvEX%2BvltNcAU2497rRFmQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPB3vuwVAcxkha8wGircA0Uy7UMcVIGwCaGtrEQD2V798gBQ40MHWXnFVFNAEyxrtkBDFFERYJD2uRWNjiB7bEbQay4MORujz0bEssBL56ESqVKjCbZFGvU5oCPZdz9nNt8eLg8SUHXMQ%2B4IsGxI3N%2Fy3gABch6oNh0a%2BZBacTTQl%2FwqNSqOwcsBMVXv8lDqv5zrBPz11LJcKIkds8tq2iCiu1aZoqA3M%2BTciXI9bXqgg%2FkNszXrGl0lU%2Bcm8bmXUBflGJPuXdodfOvLPcNS9ElwkenHbOvyXbe091dc%2BBJOvoIy%2BAI%2FmQyF0zWy%2Ff5Q7Zomw%2BFLOqj4n%2BYGNROz1jHoU%2F5LRUwYH3w8mm0t7%2BIIcuasstgEQRtjsaqOB%2BA8ukpMGixXYBBIEKxLb%2BnkTtldyyBnynsfQ2UrDxyN0JzxOqRjKAkEzN%2FW3SQcBQgC8fiTCcFl7AEdrWhAzwPrRRggmsmyY9jkA5cR7YpMbsUA%2ByelRmp09gaX3HXQOVzi3IInQwCxZefCQD8UC2U7l1BSg%2BRwv6BgyLt0k9cY2cJ7OjUTR9hgdP5YIKIGI5v6x%2FHN0o1Q4w8IltwwTOzKtHpUbzOPdy2TaOP%2F6PJn15H1jETzh%2BrKLp%2BBCes%2BUN3qyqp%2FFWxePunJplxBMLGF3sQGOqUBbYN8CF9WoV6o1Qch1vU1eCimLojKD2lqq1FITqwjBzFdnd7Lnt3psmgGU9pOMMXAzGRiwpVDn5KBUbTwq7GK7EpeLjjypjnMQHJe6tm2%2Fixhu4AVGtb7Tr2uUp%2BrzZhpBBNql6sjRy%2F5zG8XShUAAH%2FoZmq3Vs%2FFMFLhTuJYS%2FgHpVf2dOHMb%2BP7b1XW3%2BRhBp8w07mmZboNkPVr%2BMRI6vtLZDsY&X-Amz-Signature=acdc84784b01f3fc0456cbb8cd52365398131a39c8e3c72bd1f0a285df7851d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
