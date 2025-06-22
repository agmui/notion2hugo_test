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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENP64P3%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuJROVn5TnC1JIK2eyBOa%2FKiwBP8qJreGCpRLX5lWlZgIhAJJL8iBCppaYQnX5GFk9DywhRpAuw%2BzlDrVKLk1OwkHkKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW0mLzmXBQMxI2Ga8q3ANtR3pguvvKAIwY9SpiCEonSSH%2BacFjaB1BTi3%2FTHXn%2FrU8VMQayE7WnqN9xrBy8KYk2LXiHc9jfMX%2B%2Fw%2FyoOGRLeNeccTKx33W%2FipP9KmNk8f%2FP3N2DMvSqka%2FBcSQgA%2FWhkCntiyzPkOUTbtxkMDYBSlIQ5ZPDU%2FYE92EHG5R7LlXRoIb2%2F%2B1J68nF%2F7Fbvjcw9T%2F8sAiBNzb5DicWz5xJip59wu6KB7w3pJlRnxqpMSSNBNcg2bEbKeBLXIHp6jFm2IWb6FWA6ELA5oXpkxkwSu7CVrDWcVdQPU0Ivk771BroUmrrbGVWzC6VXVxsG1JwTHgR9AZtu9NZWC%2FAwmrBfa6NgGQM136aWGRt%2BB4nt5xW%2FR2dPk2AlcdI%2FpYcGdVOeUGjDo%2FQwWkFbacrO7tvBmk%2BIK8MRKD%2F8WGVSUk49crVJSAgCyo3rO7RdUX9aCt1N7XekLAjbkOsicIXGAlX9uViRpo6%2FXawHmUBNkpdMNpfKBFvlsjYvm6UW6HnhZeha2nH%2Fr1egyOmpUyQJor3v8M9GOlWz3gAWy3j587vh4x%2BIrHY5MLJHn%2B42HQpJGe2C6aLZ4tmN2dqab1GPipjKP6F53IYXYyM1aZecF6zwssMC80tbW5zYDD4zD0qN7CBjqkAcqJqfY8f%2BNG5tPV2rANgIGon3nKxSCL6l7WTw467TmvonUzwjg5fcUqe%2Fl5N3lowqw5636lCh2aMTXEZ%2FmYADlSOcaSC%2F%2F%2FsYMzrLGJY%2BRPBn2qzhcpYTxfLzBjCMTb7pk5VjD6HaLM5PTSaKua4tLRMmw2FbQVjrbHpn8Wvcia2b%2FeGwDywl3Eg3oUy1OaX6Bj87EZuxs6p6HWjKD%2FhvY%2BLR8A&X-Amz-Signature=62d47a2c7377ba147ae81a7e1c4dbb1d4f74e3d8b27c10468e94959009212151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLWSUVP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDK5CX%2FfGuVR8J9fjNqM5vnFyYk4QMX5TJCmHxjtPT7QIhAMuvihPQEoNGl1gSL5cERy8%2BObORsRC%2BLYazDqxtqrkBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEj1h%2BNq6X4lE2Gmwq3AM9UE%2B5XGJL8Yo%2B%2B488uybjAAa6xo7WP4ETECXrj13TM602k16120dCqrz%2FhI%2F1iOBkCWyXVYu%2Byx2GnC2%2BDOFXS96cFVvQUDH7XtOpPkv%2Fi96Tox%2BvuQKBVpXaXzWOK4xDocwE3JkozDoCPyCfWoL%2F%2FqkVh0XhE0Z5j66lC4BpNZyrRbpb%2Fgl1abz9hi6zXA5n2c%2BazjBQXobLswnvFHR84dFUt8WMBKD%2B9Siv6jkKF59zRbx11OtdplIHwMtBuU7ciKuA4S6zefEiMCQGdp33zr1CypxqqgRlzWWQum%2BvbxEa0xFrDtCQeOZ894J0V0RH6wJQtDnkZqe7CDCCno7DPwtbb7egpMew75%2FlBmbfV3vbtYiZp1O6U2xSRCLsme3HRT0%2Bu6ez%2BGKuaTn4InY9%2BzQ7syY%2BjCpjRCfkJbCYnbPsu%2BVyJuEXZECQ4po6n6NKxiUra9yUggPqecV2VFCawz2DNHGRJMl3EJRyugAIJC0xH8bxFt21IB4C7k3F1CC7gIXTj2ded9YUV0pRFMaKxXo92A17h41yvkPvGAHdbSeNW17hW9DIUuZhjbG7Azo5dF7m7Ty1VhOssx99Ey7o5AcbJtDWEHvGdcbWZdmlNG2juoFrOFGeql4yfTDqyN7CBjqkARXW9fhC8GQhPUpEXLpmfIZL2PFu8ayl8c%2F985TK%2F3ddICore%2FVZjZ4QUnco1iHfL3DHIT8Q4Yup5a8pMShExjsNoIlYfxRKrTd4E%2FajIPfjYtrbEf0SSbVdENxbeGVqllyfZtJPfuZIcLX%2FKCN5xveQX7dGBkb3KIBydP3et8j%2B1Wh%2FPaURspZfVLPAY%2FaMO1GWz4omFPIpjR%2Byl73QzINdx7M9&X-Amz-Signature=f4ab727de6527ab9f7145807c0951c2719289cb9a327887fce72628d7e06b490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
