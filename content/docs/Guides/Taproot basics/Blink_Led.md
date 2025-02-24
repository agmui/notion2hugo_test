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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNM5BUL2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdh22boc2ileNa7z2t7K6uGXtHH7I%2FDS%2BWMN%2FEUnHbfQIhALTYq4fA7zt0ZRe7NItaGQm9yHqangfyLIjGHmodla%2BXKv8DCC4QABoMNjM3NDIzMTgzODA1Igxr7HtPyzY0pdPoZlUq3ANutv%2Fnj41zWk%2Fng%2F7Up0NRm%2F78noCKkU8gP7TohIBUQoeXTrA3iZorWcJPSmVwA4CVWG44zrr%2FM3GEEmVewYCU2H1pQg89FRQimaRdHrojqC0fvs2hmVDlF48Zk1KHPgpytivh0X82EPopHPrUEqfVok1N8NP43pYkTNn2wGkATlh5uDtS2IkrMUwhZYy9Dmm9hViXf5Ozz757Lnk%2FvAKXXJVn6gJh9yWYCa4Swh%2FQgRgxlLN3GhiJnF%2B%2Fkrtm4v%2FPatfwtZSRyxCOSGkXsbCUFzPkNzu%2BjkjWtJoSsJFFy3U6uVUrmZvI6WKiZxIBTTk0aUbY1POPpcSxqNNSyV9dAEAEOwyEhVtk0ToiIuS3XWMuM7sBADP%2FrnlB2nuolOlmhWZe0V1%2F%2BMM4sk%2F5lP1R%2F9N40ZJESSRiR6XnlczHOsA67tEPmxieShb1iFR47oA8mWZurkppaj%2FqK89zpbcd%2F8He0AAGDvnzr0ONJVCuFzPIE8Pk2G4GHXOs4S1lgnB%2BaljXhP3%2Brdlj7ygAtsYuHruQegWHrfi3f8nQRWs8U8zFqVX0NbTMxfb8%2FuaqyyhYweJVrMTLuCFCGx2EpT6sGEi4c1FKcowKYe7ZzLcs7vDgIAlLjtaC3ttsXjCE1%2FG9BjqkAVOhLtxu02ntprcOuE3gysS%2BobgCzu2M1v7E5fzA6JWjx0qN2vmArfu3lLBC26liFkql922GOh7WpemypK%2BFLZV59o3ytUjurHBMXTKoBCW5RIYzutdtwLpWPDBAM4xGc8Lc6VSN1E2eOKPinC460Lys%2BuwCSuB%2FvahCC%2B9JAU4Y4Ayg3RDCPEislPmAXLuq20P0a04PeOzqGwetkxzzSP8gykHq&X-Amz-Signature=496b4089393022994e34f9ec6c30245e3c1f7baec0c755ae6056bd8f774f52cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC6EIZI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpDprs5UqSA7AooyB%2FU%2Bn2x93F4WMC1bMrYZjCzu%2BTkAiAQG8SBgJSCMzfi%2F48BN2JJ0t6Qo4UDklkLnnIcPY%2BsCir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS0dKwzLUfSOPIq%2FTKtwD4S%2BHqBzAtvDfazUu8S6Q30AOVuO8Y557Yo57TQVPPlZQsR4ed9EEXTPaShKgbTXC4Gzh2IpWnJrR97yXukwsfza9Rq4PjsIKGmBsfolzu5VujZtVtEyjrtvTzDTmSsxDX6sXaWgafmPKIwXEIerZ78AAqjtW9br1leAxdWr2x9Ai7pMLhV1VvOeEeo%2FHEBedTROfQJP9PdBI0GyLBcYY6aojkkLFTGiCBd59ocngPQxZRB%2BR%2BUCAaIvmmyNj0K4%2F90ePZv7Uyi8JDhCx7VuS61UWuA70ztx3mmyo8MjpMvUrSrd0lIjSTpt006LjA2HTBWj%2B5hiFAZJrRFqPAHVl363ROw97qTSCuxhT8E%2BqS4xHOFYyC9jYturjZXTNu8oocQWRweO5hhPFuekzFqzt4%2BqiBYefgJ%2BwcKKbDqpFAf5mLL4U7adhVh%2FWuCIm%2FG3ISJEayWK3k3HDEzvca7tiSbIP0YmU%2FXKNlzLn0%2B2P1czhgr992iFKZrWEiofVzb0%2BXOcJAwzFodnbndf1AC5BGBLj1IwXeb0XmRwhCc0QvGBe0JeHQQilxM4RW63xMYMPgnrzNYm6dm%2BFkdRZKR7Su4tA6TanIL5XXYh494LY4SBNoIZ%2F21lyaYK8GKgwqdbxvQY6pgGQx0FONFRpAuLFBjwGuQ9zNH69e1w%2BcvERqPcdGmuRVl2jD%2BXSOJUoc7UqEpGY5BLCXFWijtgNkvSebJ06C1aOKuOZPRKOj3KyCGZGnp5tUN5cpysNv6U%2FJu07f00tRO0NURUeYrHqdYUrgaBrnG1c2IeOV3uy7TqemrjDPWXyOWmt%2BD0Ey4QAbbAZuk8PYWTBkWJoPT4S%2FJH%2BEIrjrPreYD%2BxHi1q&X-Amz-Signature=b09e1c05685b62ab653ea31fd7337b58da95745a0d031420f6b2c90b01c8c0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
