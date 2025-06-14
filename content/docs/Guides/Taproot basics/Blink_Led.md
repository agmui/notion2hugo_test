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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3L6FQO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAqcCj7HI28XF2YyohS0Q%2BCNIvBzPbWEdfR7TzKvIGNsAiBRX%2B%2FCiWGJdRQta%2BuGL2IeBnQ15K8DFMfdRBr91kQt8Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYTEHp3k4pcB%2FVzMHKtwD5t1PnDcNEZGw5d7v%2FH9Z5LjiTfsUJGvmZov8jqjwDgCuTBCRSkjKIc7CcriepvSDPZ%2BQel9Y5DC5ou59xqD8abhDpUqCI1sMnpY6Mho52U8JmRr%2BjcE4IcK3nLPo6bFxwe9onw%2Boda1mBkbthoyXCmIFi4W1qatr5TvdEA5H%2FHjHP3%2BLtEVPR3Tc1i%2BqiNBW0rgFHv3IodKSM7b7Q5%2Fc1Fy7ethix5SQvhvYQrEv5MZl0KD47Q57vUSppehbtCySF%2Bbwuya88nqHTXoBolc5A21q3I5WYFwZoIYa%2FZTqgxVg1K%2FCIABKKzsrnHl40HNjrrKXFyHGRm3GpjoRUnwznP2V80OsVZALZrt0W9BK%2F%2B00KzPal1cCKwNhqKNH0m2xsrrgnlQ%2Bp7QjP%2FWlWBYdCxFODUJ2W9yZBJvM3gzRXhTCjaQkZDUtfH3F9ODLET2hvF4ZuGtaSa4kldR8ideRL6LQRug9VOorQdkTGLOstrB2ACuUo94i0hg1LsGM2VA%2FTGv%2B4ECj0SUtkuvPXGTG0l5JJIFgFB0aONj%2F9mCZadVrvR9zxIhPukPU6b6nL7%2B2sBye2lTS7kjzoDsu%2B6daA37YY0WwokojwhZhhzUzVfbzmTikp1X1TdlVXvYwur2zwgY6pgENKEiFjQ%2FVqejqFp0XZch8pfzLXPehTYhk7ahqYK%2FbFZfNDpthMn4nMxrsV1FwVzhHCDxnb%2Bw3DRewQV6xVij05AmNB6JRr9HLdjQ%2B%2FIxRlllXmET4noaKL%2FZes6C7M4V3wqbdgLp7fYefmUvADOFNKKVzbinU5oPRp4x7pdM6DFNqkC0Dl3pz5ukdJNUUBuPrbYeTqPHEpSnu8JllGjGmP4Sbos7F&X-Amz-Signature=4dc2c0cf69ee2c2a4a9139543c060780761b5be6be26d65ff9c17bb1654d9370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQXNLUK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD7yMgWZdzDql4Rbz%2Bjd5EkQJAK8jYusloRplSjDCBWRwIgUfNQHw1oKb7PtTQXkX4IT%2BIKMpVJc%2BXe0qUHAXeNMX0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKON2Y6k1AUjhCscyCrcA%2BHdqVbQ27cIgIC8LcAaXrSwiWEQUWunevZ8n7bnk6iJAtIsQ8hXITuv656JdNZuHkOKhDsMz9Cgb7gAWlgIHGS%2Fck7YGTVhQC8dKPVpO2ksnrsOXee6mFGP2Gr3ue1NgoNe4uRt9nhRaOyg%2BLT8CDCINUlJYl%2FNinJbMGqYEuQJir%2FUUvQgmtCCiVkI4rwFb0fGqeAnlKxsVv1Lw0oZPO1%2Fjx8XuTYgjydbul%2FvtL86%2FFL5ZHFh6V%2BHgusczexEp%2FGcxIQ4tigZPouB8tAWhEwuEYuoSMEah5F9tzo6UhbD9UT9wymldkkR9GLWl0oimPK6qHMV8nRqt2vkhBXb38va8V1bjzMP4VRxygKsdFOKOEtGetX1l9aPOhxzXh8xmjulF%2BDS1G6khFA218p8HNsnTamKlMrZYose%2F0Lgotpp%2FC%2BG3fjTpIkFTUeFjeowDP0G5QfidPiLynnziGVqTsc81uYhWLVaYX%2B4%2FfxGD5Phl4sJ8%2Bs%2F0Pv7QrXJhomGL5VzEpBtaEmGfxhHRsXWk8RqVQGXhsRHiMjBhsgGG1PACn2K0RnYxC9L6TwKc13v7d1C1PqFPsamS7JcYYWGOamcT7UzOcAtCYJbEobYxGhn6qddQ0CTxHZjPDGtMM29s8IGOqUB7dooQxU3HVoDjBw1LOvMRknTJUt2a8C021rxUD54pXXVeIpGxa8sdJle35w9PIU6RRSCtaJPzGNw2RYg0sVzNIy6KELp7Lb3HIntBhUTclPpaqBOZXcJqPzMi8MyviU8Kq1eCFI9rUfAndGZFilQvtDu5d4FHN2UbqvtKf3cqwiG30euIodQerwU%2BeiXWW5kIuwz5IEG4FMki5AXZJRY8sJYd1Tw&X-Amz-Signature=b35f0f7430e96bf5a2ae15dc30b2681bb8ddffbbe8c91d4e2841fdeb1fe1cc64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
