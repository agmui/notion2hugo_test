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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWBMIX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnu4h32EvKK2AyTExeAa%2FIMMXpf%2Bz%2BKNUq1KuD%2Btj8KAiEA5eczX0pgcomejF7sUj4AKAmNVbwYo8K3fpZp8FM7uosqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN4SdcdquHy%2BTnUYircAxe9xoRPe%2Btj061NLlfRABrogJbAaO%2BGoZhL49yDHMXFJYjrutAr1m6bbhitzFfXiqozgxJpsP%2BBEPrWCLovqwXTsuMt%2BsPd4WINA7R9K1H9GE7lGwyw7%2FM1VBGYgLgi3fA%2F2rPOZx4Qp3n5Y5mJO0hVGZwipvE%2FzGy7JHHQO4xMETkOKM1Hybi4fdRPk4LcFfOfI4iyMaXAVWtZoHSgt8I0%2FG057h1JbyiGoX9uHYF5oW38QHSrJUjS5740XTzkOdXlh3yttFtPJlvRqlZG2EUQ43ALZN5OBxn1VseMCL1hGAQZ1iR4AV4Aku14tRzBoei1O1Jba6dMMfendHh7%2FAhFVy6vC08toMISXWnU3mpRB%2FYC%2FJPcsgmC2tjYWbFBBA6goTqJfXVJhAK5noHVL%2FRI9GjEq4M5Fw1Xc5Hk4gOaURWMvxwWtBDJCPH%2B%2FqQ0S5GNG0KnEwIa%2B6u1puIKxQ5qpjtmyBDKSwl41ytYZNSGxXQKNl%2FHAFnRhZDWUCZ47samJdGz6zF9mx0FoRD45NxU3SEHW8Xy22zNduT73vcXW64h3rIYhmZRLprK3JBFi2J99I2BN0wxAh5Ud%2BSzBQicQ04Ml8CvY8JmYEhxJaBNB4%2BEF0kTGsTRwwWHMMOX6cEGOqUBs14VEbks90G1BSMRj24m4AT8tBVHR61WjSTAFQsU2vjzTo24YXrWDkEy%2Fxe6lT%2Bx4kUIIJ3K3qWapu%2FLdCaT5K9bjYJvne66iHn1cxvXYrnxN4VZ2NwCOJQ0favZn81gCDCeTtT6MK7i7SWl86ndB1MeWxTHYJS%2F9ylRmCO0Mx0oYinXEljZ4yziJX1NVD%2BOcB9B2ihmx1arm6IUBQj14Z7NYV6V&X-Amz-Signature=3ddc6f342a859a563f223b17b4bed0965b9e0322c4ff171d66118299a48a8431&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7CB6WW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKs20TWFxpH3WW8%2BMH1H8t7%2BeBog9o1bnbg%2FcyG846qAiEA2dZGMGwjGZ64hYvxnOf1D4WmkqaRw2It2mL3X1t0q%2FEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8lQ3%2FW8LCt8ZKJ3yrcA2uU66RI%2FFyCnmPUSf8ceqMdzzWRQkcWTO9YzaiTwJJZgar5cLab7tsoG4xhNU3xmT3BzSv57DIyss2o0o44gKAaVxMUWkG267qkniAgZa3Z6NztDbdlkWjuDpfZ7uP4qBP5%2FXAmvhZoXVYbRpUU%2F4kg7JsERF4TiZKRP4QfTre0L8w2k5SsJlswZ7OSsgw2rwY8D9eN3lvtsf%2BST5voz9X00Yjvfr3fJbpNO1%2B2vq5Zn2VJ5%2FleKB%2BFjg%2BUrxpHCv1%2BkbcKL8bwktVdEcdnpn%2FJ0XPaYg9672o%2FmvExXc%2Fjma%2FXWMWxoR6O0jWKC774v2Kk3w4%2F3FL81UTEdCFD5y1TU1EytWU6NUoQnAfIwB7nK1t44wwG7gFKDXeFFcba%2BLX7U1gfnXsRn5DL7wUkAJlDgkFU2S6hPmEHyGYkrdcrMf1f0F9YV4kKgR78FS9%2BMmH76cRqydAa7OYQndiB%2F8pfGGMX98BCXqSxU5%2BPm6I3%2Frc9PSrvcWBTDIkGG%2FIL38MkrAuRxUl4MFMgcQimbCnEAyfMdLhgYmRpc5ha%2FarZ%2BFU8%2FA%2Bx0DoVe3m53BdHprUPKv8t1%2BxM88%2Fg0TUlZNvPRaUlDE6DbC7drp6s%2BNVA76%2B%2B10g5UYxVmKF8MKKX6cEGOqUBMRpao4aeKlOt2WNdxHS1SEUM86IAy9Xf9LBjmd8khFhw74d7pf4KYrQIML9VpENzRr%2BC9K50CnRKJx1hiZDr5OT8pbfX%2FbN%2FxXnDYPe8Y5Fkbg1%2FKUYHG%2BPr3tY9GXYefrGMflf%2Fe5zinxdo0tNngPWq5xV%2B3qedDqx%2BQLTtcWovr8m1Iuq%2FcS9%2BkkVk0AFg0R3Iqwaw4mlN2crmEtQn2LnXXOdy&X-Amz-Signature=b48a7ea6477b42856d4471938415be5b37f85679d7ee1aa9bed0663b71c51853&X-Amz-SignedHeaders=host&x-id=GetObject)

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
