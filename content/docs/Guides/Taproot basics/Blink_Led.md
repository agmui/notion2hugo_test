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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6A4MUM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCniwNOhei1rkR7iDOKMwbRjr6t3CZInzppz7l%2BNkWxVwIgIDvH6x10MyLGjaEYNJZ4A94SGeBCoMPo8g5eG04aHwQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOrnOeR33mjij%2BRznSrcAyNzJQqmFyDpOtctgyYZekhabSOjBaH8oLgu1B3SlG2i7%2F7YZ6REbRNIXiET42Dgn%2FJTh6O1c91MvKxnRbIdupWU9eShYyrDlU16YIeDky5AJd45tyRFlBzh8pPTvB1IEkzwWZDIaVtU4nQ9IsO8lWu2HI4zim2eX6I72b51KQiMdfvYjQoZ3%2B1CsDvjE8crQWMDCtevT4pcF2iLulJ8B6udL58buIfcIAdWaE5GCKulyR7UArH%2FqIyF7t9R4GNBWVEItBfQqq55%2Fmf5fLSitkQMvAfxAl20%2B9VCxQByYkr8ihUanouEG2ykCHoRBAI%2BvqfjxPQLmi7PwGDjgLdoY10yhp5BY9ujODVGF7QYrdfL6cCN2MXIX95ig2UAp0i1%2BWMML3%2Bt731Q8%2BGuTDn8Rdph2uFwIvDswOoJFhPH9jMCnip9ZpPVvCoHIl3OKELuN%2FLAFoWdftD1dY16Xg7eseeuvVCkaty9UM8HVVa8TGh5puIfRqFuEZ%2BGF3AfMqSCZoj3PNJNhUd9vY2GwPGF2IP4Z9xBujdCfLG%2BZccZw0bLloKqoXniP1gRUqF1L6kX2dHME8PVc%2F7jjASogbiFgddTlbpAh5aIrY4l8vcIxIOq6fl%2FzdU6FG05y0ayMLOr08EGOqUBsdYpLiy38wcAardekDevwno%2FNa193ZXKPYys5QeduoqdPtcjxsto2A%2BjZWbGX53%2BVDX6KF3%2B9wxt9RP2A9z0JC%2BLoeLfu2kBD22UsOdKesnL1GafayRx9TC79jmrYcYSIgv52DNW%2Bg1wvy8Ek2Bhb4RCU8ttwMF9wk%2BhH5I88NYalPyKQxt%2Boq%2Bq7Hgl%2FXcVFf%2FDYrClrDSlX7rKHu8UR8HXVBjw&X-Amz-Signature=59b32ec46ef2ff34d8984b4aa4d2997c771be9e8ca3cdd0b250d32e621b6f415&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QCXPN5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpC3nmYVH3l6slSsEPb7R4kkMYOV2btk8KaX%2B2qxZGDAIhAOQzvo3h4hDc8jadbKXHLKgpEXz%2FuiqSUgDjni8fuKsUKv8DCE4QABoMNjM3NDIzMTgzODA1IgxidAs8I3YPDYEwZ64q3AP5oKkyrTay0gryIsTc8fMKrTmCFmnzyNAUnoVqjqfwLzF3QD68pQapWDzuXy2qIcqpZQXOzJ%2BmHwNrvtYZFSyj%2BxzdmUb0rPYHpn53sMRumOSVXjSD9kwDztpLzgbh%2BMnVuN%2FGy4FVx1Ntyggo9O1yQUSEy%2F5woPHROVXU9wALK2Ppimowkj%2F4IrSW%2F3AvNR59sKhesy4IyQ%2B3qRe4%2F5d79OLa2rlPflnN1QEXqlThOm9s7PGEZRWTks24ZyHsXdh9f%2FNQl7Wz4WKtrZMTUSD%2Bo1KjfBlummo5S0%2B5lUiiTNKJ7hH9mRqbaxF1YjfO8Rmj5ahofqK70DdsZXgxGSLXFdfvVoLggwA8FAPv4diI%2FKoodcD%2BirvW3TFGgOTcLVc5ZE4g5G4ZJmEUSWPUw87Nq53CQSUjdHuLJ5rvtIVAkV0kmmld4%2BvbXwcGV9Qi0YTwP%2BSFjVAySxvRSKCOg2gcd%2FplhBomsa%2FPn1P26QwZ%2BlVCq2%2FrvNiUDTo%2FOv55pSaDohyeWdt9SbUgCS8j9%2FyoFAApD8Tf225p4s%2Fq2vI2%2BT%2FGIi3yzlgnD1HlxaMHOUuANAQSokuu09NscqEs%2B7QdPuVSmRfVQ0lit6PAwhovrkswyMudmy5yzs8dFjDlq9PBBjqkAZxZ7dz1g5W6MWUE78HbAIqyYnbi01r4LgamoD4GWg2vJcGcmdiWSvTj0UKMPZgqsBM4YNTshOZdxGqeWhM8zywAAozJL1D7Tj0HLYrawKBrsyIMGFjSIVBpGTwhJjJ3yZE8esOTP5zRwEUJviW%2BBAGmQFqkqdp4MaUSavjg6i8ajC0hIAOLpQw6zrcQ7RMM6x7ezd3eqhoUSPZJWfo0MyUoHN%2Fk&X-Amz-Signature=19e1a2c4aef37b9ce04aed9afb24280c47d49b1ae6e562b34ac5c146ede16569&X-Amz-SignedHeaders=host&x-id=GetObject)

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
