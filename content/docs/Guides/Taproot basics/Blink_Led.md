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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TCDGZQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjPUJPZXuY2F6Lp4LvS03SNnISy1Vp5K4Zqag6DUhWEAIhAKbBUtB4xK%2BcQm8dxZ9LtTf0AbY0aJwObCtS51YRKLdxKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEw3cL5wO7%2F3Y%2BFcYq3APQZcSZI%2FlEDoGdKIq%2BdTUcwjWwd01cedCVkbVpPnbaUC45WKt0Db0x%2BEZm0KX6msztmnBHknYyglZfGp61QnBLmXDerVpzRo9cKDbR93o%2F2ktQ57RtdKMz8xjbdmVNrRL38KpCgBKaP7iON78kQUArpTUVUFMRnGurDxiUkR3q9veslGk5DbzEz9YZqJrk0VkS2FSUzzHuUlFbIJkbZHRcXrel7lZA%2BqkIXRpo1KzQPhUZfKlQNw8pOtr4slt7L%2FHrQ6RLr1Yvt687AgmhWG4ll%2FzKp%2FEdVcHK1H0A0ciKxtvPLGitbiedtj7lUpgzijYadki%2BL9fnIq4CFopN5GdVyB%2BltXISem7nBFDBhOQVpIHJWziWg4sFe6px6bV49JJqqa%2BoePEQByTa%2BxFR4GfuaHg6Fxudp%2Fgi4u%2Fp4QDTT%2BH5ceU2St3VzORPMQnSmJgKKWNCiq5j2eSaUSwcPcIwnn8pDLgEMwmLpwdigVR1w9X1ILIQqYZI%2BLfeD7JfpCgPZ4fm5bGBRu35Nal9cseA%2F9YvMreEQnJn7juocoXEvBDxcu0eiI767x8QUAck5IKl0YfQP0ljpwrZ2pFEv21S8P1EuLQuaqLqwLBQeqz3B5PVtVHz7X5SX0oLbjDzo%2By8BjqkAYSGsEiJwFYZgzb3Y3TRRok5UuwV1Zz6uESXFNy430JyZESDSEjf74JXrM4ZZZkpq%2FE1bLAz2%2BaApD1Sew2uy31U3H5R4lGNlSSfLlVs%2FbWE2eYNl3B8tKBbKUFjBSdfFaBafHPgI7J%2FUrhtAGh0RRnzVr9XgTYuKhrnbcbpmohLNzxNuqReRNEFERPrcSOBn1QDNG64t5Z3bTou5CZLx4wSl1nj&X-Amz-Signature=9eaa3d069ff43d9eb8655fde9f1de5cdea7deba2b04d0dc57e62edc12f5e5a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YVJI75%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdW9i84JYHHRb0teSlyD85JyByoQIXqisLamFvlw7j4gIhAIde%2BstATtDWVy0xikW8qHpvVp%2BEV1NTAJKPFTGuYn7TKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn%2BOifq1R0nvKHGqEq3AOMa7z6FgMOOfxoXVzrhw0YNAmo%2FhvnNIkqQtusgA%2F0F9BYeKJ%2B4EbG7MiYRUNNZAn4OG64kKRDZJ5q0OGGLYezAyQIJUfXwMOzEGjtjSaE4x9wgUAnnHMHCZWkD25tGzETcEcrRK9ndVcJ5JIrs97Um0DRkI9FMmBVSWpLJNVq%2FTeKEqKD9nHXfzt4Iyhl31xwvDkPENWC%2F4Phlr11QGxmPakViIy7Czb%2Bfpj9dgDPQN9t91swUTUbnsB7VpZvop3yqoLeBZdGnhQY1HssynV3fDN6E7utEZpDVTbsljGLN1ziLHOTj2ZmcspJggJS5uPgy65tIRnkQ5lhvlzxuPWsjSS36RjD9tXYZZGacHvxa%2BFB5aNGP9qkUw50A8jdM7mst8E07zp4wuzLLQ3%2Fso8jANwC4jE5Jt5JGkbmk%2FlxyBV0vwFPC5pyO%2FR9JW6OQBKjaNrzXmwAHYK07CiVWDJK2YbB%2BQr40COkXtDhdeQH4Q8gTpj8DH%2B3UOWQ0tkYZkCjp9dchiPPBbSU3gVNIDakSV8qCu1Y%2FBvjERvl90qMgunwAulKmBTd4APhSCGHghab5yHaULDBAYCKGXkowfQixZYR6FTEfcp7E2NagWtsO%2BrRgHIL2xadoLRozDCppOy8BjqkAbOrfQccBB7aGMg%2B32%2FWSNGOuUZ0%2BL2vZCaJepdAUxMZKLZ8wckMmAQ0un%2F7hny7KeGBa4GYFsH3rFINL4wCrEoRGgIQpQiwjE0tOCDg1u8egi35xkWSgL%2FrOqvAvhDRBRbZqfpJvk4krrEF0NsEJeqnniKSUKDCRlQOhdWgOWuga29hfD8PbuHzFid6lQxKoTdN1IFYO6iUUHiXZBW0%2BcQhRg53&X-Amz-Signature=7b64ae452f5b3bdce45ad29c15d760a5e591ef17341f1c426e304f6c84c58ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
