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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JC7XNMP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCaGJ3DuTBbFIbCUk%2F%2F6aqfbTYlfYtoYqOcq4QssZHqWwIhAK8PIM3xhTx3%2FaetWyyZGWGjg37xe7Z9GnebqqB2vn0GKv8DCBsQABoMNjM3NDIzMTgzODA1IgwTwXmyTNwcmmisCDsq3AMRZQGb7grwWC67zSYd%2Fa1qiUNVNx3%2FUV2uAlfvSDoWVmuV%2Bw62iqkd83IY0tg%2Fftwqxn9fqxr4%2BaG%2B%2B1%2B85FEIyjO%2B9t7TskZUWiDS%2Fj9NszIqRP3dfzOs%2BuEODU07nKFWu1N0mNnd4zLpF2qRE5PwLjuHguxO1jootkY4gbuZ3YX%2Fz9CiehM6r07lf5PJfWpFVVrGR0B7bYrunJ2Bm61TpOL4Mv6uFBz%2FhiFW3qovdme01TLRue9DsjGfLlROooLY85GnhkgCURPDTXr4jqZ06OUZqEi%2FlpTg2xQVzKhQmeI5o05th4TF6THdwhl8dBjUxZINO26uOzVOUh6FUd3qznSu4xrnrWR3XDn6zjkgw1kjBUyWGP24fZFXWBZA8PnexStl3Qqq7FmtF72Lrc8QobZO4EWfAj1yTcuwjVYgC4JcVRF7ioNSWBm8ARPV%2FoyUVTUdnzSpZf1MKJVmMaBvTnMt9ue3BejQLhUv5etmyw5VDWNVjE0edh%2BwEl4epbrrKs2aybDGBl65lbBbw7oWTFw1fYoxMU%2F1l6n%2Bd3pGVlXKwdKUOpUxq5uxj3uoqPYBMeWRUl0iCmeqcL87rFugc52C3XFKi60eZwXST%2B5hzAd%2B0l87Of0fCnCmPzCjqubCBjqkAQiUrY5PgSOyNwmmG707CnYHTAgyIvnxHlb%2FEXNrYBGQoMVg1vYMqEJyQVHB9Mh%2BNyn62QdS%2Fw09w30TPehDm6NN0wcmjhEasezdvdZY%2BtdnZ3VCGelRD0IBdM1cIgSlC3aGICXpdizqnZ4iJtk724iUoO1XWCcRhIJvGmNyn%2BRHZLRIXSLDeS5JGESQXt9asvw13t8aHekgjAzbPWaqL%2FatdRLe&X-Amz-Signature=99b35ee2d28392c3108a46997f2b1cae2e946f684407d5360eadbac7578efd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTNGSR6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCs9NS2oiVg7k4Ca%2FGouMMFStpmPVeSslIuatdo4hpW0QIgFiLYPGGDhvJ197fR3G9M77CrwOs%2BInlSgh7nFr11RYMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAivFpGxyOBiEVkcYircAxZr1cNMgtNdBUTs5emk2PkB7uFWgmTBdiMBV5YANrsYBKEPwyzcXrDcbiDVonH8iHQDK%2FESMP1XY7vznZAgSgDouwXlpLkiPVmQMf2rg7lzClg2Nx%2FzgmTawJQXupUjN%2BfkZ3VLyvuQBeGnCYTygGHTkcSxX85S6WDX%2BWIAbmtcX6mHWe%2FXdEk2nIX6OiLCpvUnuukbbZFjHeCbU%2ByykNzOO14VJLzBNzyJih1tGuid4nWC7o8VEn5f%2FRwOEWqL5wSuaMQNEAms8u4nvDYCS%2Fn6%2BUYpFaQYKkrrGTbAoa5zToUHiEFhVjSZ6bIPMqkB%2FFkdia51SugpIq5us%2FcfLg90Vj3jCyDcvvtsffa45mdt64gInwyX24KYstsZEQ9vukBLUdQCYJcn9wiEuVZu%2BcVYKLriH9%2FU57uNUPp%2FhcHqS0oEA3eCBy56OCzeerQIIMO%2BVlO3jOywWBzsucj370MbKFm0zB9MQmCpXMMhqP5bdiq1j68bA7kF7eIKRu3dVoqoKwDEXV1OORtmmKmsNuenlcvdHhDDCC3LSZ4k0ddhO3vaRI4LptKR0KpoBXZfxXQcpVm24g4JJ%2B7WuzNKkyoCDQcRd8q0cTIO7k6hDxNxkyJ1Qcdea52F%2Bu%2BxMKWq5sIGOqUBODRMQJ5U6Mg%2BDo5tdfPlCyebqwY4rsCadHWylTDVKATyXr7dX3RMNH8Tb3jgTVU2Xa%2B9jCW3jKwKfEkDCT1XtZQPKzJb1xDujv2NCgKDpiR8wLaEK1v85NtvGsA4iJM8wy3X5gS%2FhAYtd%2BC5rlg3ZxZUR5rF8xh8aFWL7wggq7aaxuyT8Zoj8rIAdwDw%2FqSCn30UKf7zmkMsL3uGXoNLVkl8HeQU&X-Amz-Signature=d43edf2470e995e3411779f9ee7be9df03f40129327d3fbc319a6a9519fda436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
