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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJILFLNK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHGI%2BwVg1HYVtfGxwZO1fjDPsJvli%2BITICV1rY1SWWSKAiEAyHz6MVzdw8Z0riy7eNiRr%2Fl5LbPvlS6oKR2QFN%2FOsckq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGSWt41iyzCyJ7kHyircA4LZslufQhFclCvBSXmuQyZug%2BRuJlKpKfoP%2F8rA%2BuTdHXSxlPEPPWQJTaPHiK%2Bh2YAG6gIvIiO8d6WWaho25GH5NQ0NakVigZsVXLuHuGS9SYhUCOIIk53Y%2BK7qIxY5BgP6EJ8cbHJ3h%2FCCfI3wf9THUIf2PSfUxhgNRlF5c0xffzE1FPegXjnoAMILEZ9jmYBLe46ctuiXv92yGDosCrkeFFaQpwnUuqT4FNwEsl30NfNScMiU0ymkQRxOtJbdZQTqIScC25Au6XH39iPKrDRLs5IOLICqUpUu%2BIojM%2FN7xBuE0mtQJKaazhzjrgZd0%2FMC6l1QLMD2bzx73I3YTjqGGKeK0s%2FC5oynMVgX%2BuXGvV9feJVgqEj73YpTd%2BHzfF8scB6k75Ew8zdew6OPZ81GE8YYPZ93uO11JD%2FFjqFPCVBBgMG%2FUj%2BekezCt9ng5P4P3gE3BXO0kxbQFUlJ3Qc0gYEG58Yh3Sj6fscrOCPtb4qpbQrTWo3jHEZV%2FLMTA5%2BT%2FhVz9bqHNGgF3hJx%2Bm5ksq1pIlFa4ceehCr4P3RUI7HZMhqjTtvUTyo0dw%2FIfYLZi23Ea%2FS8U9Z3b0Czk3sJRnlvF0muCW%2FJxB7mnrX1loM4GzGoEzT7Ug%2FsMPaj%2BsQGOqUBN%2BnX3W%2FRCnOwEa2GfWxiQy%2FiCZCNQn0CgOe9XRDE1TRj3JEM7E3Off%2B0AMJxU1bGACA9A1%2FwDb6V%2Fzl5rnVMWmqgo5Rr2p8lgstKiIj26XUIIbv2O1UplNdSmdQzTb8URZluj2ww19OlT5vO1aeW6j8%2BjLxFhWx357XR45sCRj7OabxBGccPw927rfDyhmRbNLc0VWowbtXEW4hz46cVfb%2BsF%2Fkq&X-Amz-Signature=67c225507ce86f9767b00d8f65cbcbfa56df72668d6af4bd8d8269a7a7b4e16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNZUBV2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD2l%2BWzyhgLMzix8vulYoXLOJrfvIbt9aXkrj3%2BWg%2FmcwIgSIXdDUgwYQ2dRf%2FUTOPQVA8tU6U2pn7d%2FGA4SsgUCmsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEvdiwEFH7D5urYq1ircAz4w0f1JDBUfMwjc5lcioCONPcSfGWDVnQtqteRSCJ3UjaWi6eIHNc0nYLR%2BVJFc%2BMglAfqF%2BLuE6vb16fZ%2Ftk%2FzLk%2FpBVgF05OkZ2C0CrmL0iZjWFoWf0vVkGJbFDJlDq7fA6K47WyWizTY6dsoxsRAlaMV%2B%2BD57XvM5uhS1YDgoTQ%2BFXY1XBLNKlbXZcd%2F5jcvTQfPmXoBnHA7jPCv8otGqRccNEtgc%2FlS04EgFH6gYXAM3hn9YTghqqFDAFvcT7K6U6yLvkd2KAHD6hUxGhwHYQdJd4FG2IgzYRYqX6TOaH9xRG%2B0AYF4raZ%2Fhb0gyxPHNffSqFqiCkMirCPd6r5ThMm%2Bh0w%2FkFKdKxD5XJTWpLCjwkQAsg%2FnbFuSF2rKkJrGcVfs%2FCBxRPCKReqmdnqjn0HhTNl3FCMF9ObkbcmGhyCX3Dia8gZWHK8AZvIRhm8lWb5bgR3QmWOKg9xasWv8NIPk5xwsBhnm4ZLb2lHKYe7Y3TeYRNkoD8OuoiblgBz8%2F7%2BNFHwcBfkAFTUjEVlmnJ2%2BW6ajd8b6oUx%2FNoM%2FyyJHi4pBu8WKtnDyl2En3vfyL7igr0DCWPS18k%2FIyVZBVNaaf%2BhDwBLb%2FKv1lj8evM%2BOFW0Z6c1YpVzsMIyj%2BsQGOqUBBIQzkynJulMA33mXp2I049QY09YN8DIQ1uJC50Fc3yKtCZ5QEAuZvfo6NjxVmACpBtlsruLQEGQ%2FqWRMTtK8c5bTvBDerwTa8cx4Q%2BIAK6RcEXHPt2a1Rh8C49upnohx7%2BnWrmGcBUjnWK6rKDfWOjIyONWoGQ3iaZFN9kC5n3UdHfWEa5egdlpdo3hamDYLkdFFAKhC5AvWQcpmRcALKIQep1Yh&X-Amz-Signature=d648bc90b41ab2a3f34cbf5407a287c395a26ba8f0625743881abba80cac954b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
