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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7DXSL4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC05DNQa%2Be1RSo89OKnT97suUGTswcHHkehQBgkljJAlgIgTvpMHXu%2BXMPqAecLv5EDEdMnnzljm95kFzXLtfGslqgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFlwiqCm0MyQHD9SQircA4%2FtneNkMIwxT8jvzzs%2BvzTOUbWO5HuC2mHg%2Bt1%2BhuXbFT5p3CJf5eh9SjLU1lGyHUtagXOEDtnq0i6mQx79SO9zGHAlQUphLrO6MEt201FOTwq6RGVAO6gEzrSqhYxvxLhkUl%2FdvNqfysUQLFi8xCN4gApV7FhFNbeL4DrM5v0XH3%2FhGOh%2BNfbBQl%2BrM5DZuLsuO4j3ydithDAYoZGUcuzTerYAHfE17WFEzsLaYHWlD83EALAEM4zciZsoXntgN3H6%2BNiAOWB%2Fw4o%2Brjh%2FpMpGsjBvX5ta5Vs6Phq7zuhi8AsxaF7P5NiotP2ftH4ZtIrhCesR6T1TBU2i59noSckfugwi6RzQ7qmUHaooWyzgaYm%2BHoWHtdK1n0%2FyUl1B0cQNw6ssjYnVM376MzvZcHaFRGuLkX1C6eB1CIvb8wkyKv1tHulpmb2Pq6r1jkuDLZ1PvSKaXkKdVWzzn0bJza4EKfS1vDynbTpXLWUsaUP8mudSgUyBY7Ax5sHJns49tkKZyLcVplmkjuYcBY9NiDp59eP2cXAOzsgLcsIxTF9O74WnqgBBnDs31JC%2BtD8b6elPdkCH0W00FExSj%2B8dJxbLNX1xc4olimKtC2rdS89w5J5z88OVZCQqPFfaMM3rkMQGOqUBHA8G9RslHp1QO7PXlk4P%2FCyomoebwayrKc2F5N4KVL7IucpekBGDUPVEV67AEHa3EDIZqMjEXi2zMj1XgotOBvJIMKgQNfOBKodcIDotlSDEOl2dlz%2FHR3WPgUAtVvz6QymsRivZOIxjkY1K0KKcLaojBMIKkvXc2qtpBqUQjnNL1m2YPWQt83F9ZzmcUqEV81qv%2FltC0MIMnsYvb9nYOkfScZRQ&X-Amz-Signature=60df9e2b6435e634b99e7911415f44530cd122cf830773343e4e0498730736f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYHS5YR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD%2Bbv2L%2BxNuFBiq4n1zRuTt0lV78VUOFBb9o0AD%2BxBb1gIhAKjtVGCnnaXjAUDyXBK8%2BJc6b8cu%2BofuRkDpe1nih0xeKv8DCFMQABoMNjM3NDIzMTgzODA1IgxicfGXhC%2FwFJ6T%2B3oq3AM3j24q9lH1JuCLSA3cQ2Wce4WBX0vymvCa5X7c2l7DJNTVFOWDV%2FWOim2GVsq9kSdXdjf5Um7nyTGS5YmOPQ6BGSbq0ABiR15QiwH1Q1Y4RsCJVSevI%2FRdJdNezMaamkR4mWdTy9uXIZ59MEnp77XsSYlgRTV03QbxTy6o2O3MUUJ2yiVfgwr4r8AJHO%2FaBxBtvw5oQOvB3xbqUWWC2Cnp7qEhtH24ktEjRbBPSJxftsDHZeQ1zSV7Mi6KGzYBzU1lOvptKQrGozZrd3NdvZWVN76Fh6OI%2BKbGfWQN3OAoYUCVhHYAQ5GF7o98exZuu8oD%2F2gy28bM2RCqRs%2BEGqymzvun0co40DqhGsH3EB13%2F5YRbKyYmxlJHB6IRT2DF7N2ogazZdYbASDp87uWOjfpRbbtvV1QMRg177YL2iy2Ju8Uk1cxHLI7Sc6t714Oy91scfGxao84cRuZICBNn%2Flp5WYjztGGdrEyfD8P2BJf4xI1RRyBq5%2FVZFY7FSVmZ2KlIsv3sZA0ZSiaSRD3OqqK3xe%2F%2BjPSQAnRTPssc%2BQdEpBdtHaIlGqgI43uUQY0Sfwp4oPis43i5%2FMwFOxJte6khW5%2BZ1NGHWdevY9g3i%2F9vRJyhxacVXdi7qSMgjCt7pDEBjqkAfHDtZ0M2J7aYpErkVXgb%2FUrrzTuEGcMT5HpaWtgwx49SOh1B4SBTogzBYV%2FCBnbBJHcqUjKWEyUpzbHHu%2Fkh071qeAkwJfo6CausgxpjzkvkGcPDCMWFRQGIyeuUI29PdFXwEuwjK5Mbo5I4FB4bwg2%2B09shFPleY70a0ao%2BN7oFSiQeV4QfQjaILNrwsDVn%2Fa6LaUTV4ZjiCaoafmbYuD1aFcy&X-Amz-Signature=d4358328c1c4ce46cf75f75aa1dd0bfb7ff67471db2c1a341502db9ebfedc62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
