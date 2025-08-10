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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLDFMAQD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMApcqnVnaQnew9HZVYOLLeFWriqJ7U6Yu4XhUn055MAiAdtt94PiokIfENFkygvwUO1%2FPmaieP5aJaAbOCwtxCUCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOMw4TOwNLhhEcgrmKtwDrjI3e4SFuoIkwTFQlNJbf1uSChgAFFQct77YixGD0aycSe%2FTgyaWEK%2B%2BR%2FK63VdUYkrSJf3QXjUlfm74goAt6A3PKZy3mCyGUcq2LdXe2Y%2FvPAJttZfbK5G858ZJCt9U4I%2BlqYBSETTP5Ab%2Fi72Y%2F928ibX%2By5vc5yEQzLKax8XLxEXdAh3fUAyJItESegHXXeChkBIOjgdBdAlq6RJD2u9S9XLDoUYrEFDYP8AUU2DOsFQSqC7l%2Fz0Lgc%2FvO5ZSpckyPwzLwHl4yKK6mHMbjph2S5%2BWcK2h8UKqNY0J1X9BJW06n4Mkavw1WYPpDOdHDsPbXK4cgfEZARYg3fZAMUYyLBt2%2F8uyd0UrvlP62FClURKQOPxbiXEsm7RD1e8ln%2FOCgUMZGhtVq6lN5DO4gePnDZ%2By%2FFv1ehakkoZLd%2F9M0sG%2BhTQvdf2FzgZqXfMZul%2FKHETWochDK4l7i1VQhuJBDiGyzi8lPgWB89KP9hqAyD%2BHNbnVwO2%2BY14aQg7bIV9Tsnc8e3%2FuVk5prYgBC4g03QfTGmDwL5C5aqYaKSu4c9aNQSxvVrBvWI5Cqd5qU9GoFDunp7J7CxBoHgnXl4qi9SIc7wOea2tDpP%2BtJAmbbzGLcpMGIrcXA0Mw7fTgxAY6pgHrawvEHa4Dpp%2BTsOBUAz2T1A5zvKDgPLj%2FFTrIrPP21okrttGkwvUt3ofbz8q2rwogXZ7%2BmgOl1vzWZ19eVCRC%2B6pPwhm4bZs%2BPgyl3HgixWZ%2FirYfIZjydKhxEalrZVNhH%2BLAVE05zvcXRxyzZm8YSLJJBdpQeg1EH6UMrTexXlv44fbAaXL2Prj0k%2BfBvHAisLmjIHU%2FiWXVh%2FIFlyPCwvQ4BdlM&X-Amz-Signature=4a26ab905405e01bbe85ca444c28ab89cd63b2b08357fffb35f4ecaef4176f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSNMQA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGueR6Zo6XrybjM2%2FrbefeHuYS3HGDzvGPoSDndKdTdyAiB2AlU0JjWkTNRCi0Ixq48dTJz5YToX1LGACi%2FvjvlECiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKaP7IToBPQMJ1LbUKtwDcZlCkc5U6uK1HJjoFyduB0eYzluLwtOaM7yvVO68Snzb0vqm6Uvfu8tLenjEMdsF2BxlB6zWqVWsoky6bTa2QQk0jfuJt9Jeb%2BxY%2F%2BPLk%2BTCNuhHBuYku%2FmcKJ%2FFeWwO%2BgGFlFmMk6QnPlfoVP7K7fSsAiJA5edcWPVR4hs8UU79ovFHQhRKvuuRjV3Mas0nQU2qnxJidq2K6KbCTFag6DBtIlwylQfNF%2B2QLYStk0ta8%2BcbaQeDM0wAdw8u1UjZCicZWY505NLEBrVx5%2BraeW%2FEA5wtqba4kecFtEzbjUT1qr0Fjr4QAoUxQv8KF2uIqBmugBVbVGpGM0t4SeKosONfwxaQiG2AdaeAsGqj4UHt1YZPNAvS9y%2FU6dzZvwsF22edQvFdvdhBdQoOZGWF19t9IN1nvCdfZ%2FccVrA9lTiRVhJH2PCAT1EpXjBF5n%2BuKn0NcoHdb3yi5a8vyCB8a8AP5XG2IAYtvD09LhUmQMz%2BeBB2xSx18d8G91UGLJ%2BjWEYqAXgbLKBIoB2Qsi8IDvBxnJ4OP%2FICSuRTJ%2BxxpN1ynrI%2BOeXru%2BEcmHZfBlDI%2FyvFxuxPg5WdtrmVpfoK%2B%2F2X4axpMAWH28zf9BsfPQemdlo4rDwwttauON0w3vXgxAY6pgH%2BhGhAklBd8tbzMTv5N%2BkfFT9r2%2FF4v4JeokQBvpRuREAhnZMNnSHr%2B%2BADFL7Z4LKXhpxyVVE5NWjF1ecOGP0rm%2FE0sZlclfT3lXcDlqfwWv87wyXdLh%2B0Sc0OVvsJOX7aR7dNFOESxfZFKFcyD3vL8K9upw5hyP72y6VKW8lQxGoFVV1Fg%2BV%2F%2FAMA01mOlsGBmjQrSvMFDWJA4lsukKfY2oG2FCZm&X-Amz-Signature=cd3f9fbec15cae232fd30cb558899e350d91d0d39a42fd21e06fdfe2cfeb1652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
