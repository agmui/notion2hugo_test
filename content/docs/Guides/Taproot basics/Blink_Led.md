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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626P2AELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDc3tfJGU0SCI%2FN8W9dKGqHJ3zHiczl7pF%2B6lRfrjcx3QIgaQmeKuCrH8D7Lb8LL7ajx9wCxKyNFmW2u36Nb5Q3M8cq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLxXVjRNg9%2FntLi1MyrcA6o92UbGDtakbfpz41FL0BB5qIimbXFTIlUso3A9GJqf14cA0%2Bh5wpbxHQ3ZsdnkSkqxL%2FHb0R3ii7g%2FJjDBAl3wEoa4sQPOHxGik1z7ElvMXKJg33TD9GeOAaqzgAsRGKUJdvX%2BdcMjllOZ9it7nXMPVkoZCmwuJonfOMvRR00TeyCs7%2BXsS5wmz67m81zYrLXANNR1e6FRTn6XElHH8Khg1zjRr%2F4%2B00dF4f%2FYekrvoQl62XClZeYEcZ7ES7TXtMZUp33YQN0pxOdD97IRgENyY55YbccWFlBhNUH5AwUSGnF%2F8a1H7vEWxXxktV13JQ9PP5%2FuqafNt45zz6WBQWnglMyOKu4WK1hT8tMco2z4deweHQKwqowymJOKt97P1htJ2HDZAJSVLak7XUNoKnEwznRdtlXftJh0noJ0lzzzI0nRzCXL5VAgZ7dfRy4PNdPeJ1LNhi07TM5JUAus7JXGvxyTtjoIMwbNc4e0jooR17XXJOye5Z5IRX1cnTh%2F03Vi0OgjN1nMMj2xnr1z1ExbI4lTlo3lCIVc3yeKRKm%2B9vvkzQyOM2%2FQjsRTqxTH2k7My1bQqRCjWsFnVQfXJp8RgLlkQ%2FaVjoXCgFKjZmS66Jr72dOj%2FO2VQl1IMLSMjcQGOqUBlWiDUtmYKR73r40%2Bv5M8nCluWomMLhD9O55A0RbwXdNuDMFku42u6VDGLCNg6EcGL%2BBqKYnrNdXDEreb8piro2WurBGxLiQ0AiErJ9dGaiNK%2FN4uY5YtaE5P6FVZipN90YNum6yLXIwTzkD0%2F6HRP2QaC6sOvJd44BLs6brHUvTnysys6r0KygkCZGgXjOqbTV1LqExAZiVlQJIV3A0gzrE0SBB1&X-Amz-Signature=d1f0c4ca81de809b2c366f83448de42217296e7fe5bd821a10fe0cdb16da697c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557NS3I6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDqnJKAB4889vFLo5zWz7tXoYCA%2F2QK3qLrEdLBQ4Yf8AiEApo5HRDAY%2BF6lPHd9cZlUmDkA6LDw7fqPmRbD3PJG8Moq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO%2BNfkNFLK9ITKrxdSrcA559GN8YexG8G9rmURckOm1kI19EL0XgAcZZDtbOEaU6iTPHogfKfCVHkfKUfj6ruYS8j3B7LHX0Np2ze5dt4CuKzW0TEEHI0blo0hAqHPfk4ZKpnvzO7KxOckc541iL%2F4OiG1%2B7DU3HQLIIZswl8srdhgQCvtwQn1qIhp2qEIl8%2Bv7cATQXArHAAiGii%2Bj13idmly9iMIKNGmITHKcF2Paf4wk6m4cRDRA027b8krydd9o0ruF09LCQ0DUhxjJdbsJB7XWpcSQKifM4exNL9St4n1PpXZNmUniTX274WNb9pQwP1znOSErA8oeakZK7ScvvWaHVadkaeprtus1FxcMGGcqD7giripVmHgdDqSRRUHlEyM2WIEiN4xcabhAmWs7V2U85hprUtKgPuPCXnlsfzTEW8tQNY0x4k7PGET%2FzNKYRShd88S0ML5%2BSStnx0UbHncFxk7gdkAtCmhEUyfodxOva8lSkZRN0aJzfyojeGXrgTF5aeTs1K8MMCQqKmnUvfKv5LvSLfR96VtkksaUtl0mxMlTI196Hy442R4R%2FgDu6GQ0HDMpUB6nl6lqVDnQYX8IxVznoN1dhdQ8pLl96YiqGiG1sgGelhUPie40FSq619ApI55x%2BfL9wMLyMjcQGOqUBz%2F%2FYQkicEIVpAJoqYk975smGcPVs6ePoTwtMCrzGNOo71DEynqNJ%2BtWTaDcznqlGW%2BSP6jdMWKf%2FiUb6ZbX%2FFMjH9puQlQf2lPsO0mAdxmgZG2wvRq6mNWiyYzbXuTz9LvKnd4rn4vx7sUOunSHdiW8QUHvEZNaviqISKcBcG2mp481QE4COgbXVWPSfTQkofqSW9szbYqnVpY4FSSaAUyilYJIo&X-Amz-Signature=c784d958b7dfb50e4c823bdbe3d9f24038afa8bfd75a84723ff1740d7c01f7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
