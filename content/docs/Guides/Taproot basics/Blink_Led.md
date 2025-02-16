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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWQR2GO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDB3%2FOr67%2BSxeQfTzKhf2ACNws4bZe4K%2FFwXkpXKCYCFwIhANFUx7vjMfyRQB3xOc7Pv3zNcCSmMdMFWBGfkewNGtg2Kv8DCGMQABoMNjM3NDIzMTgzODA1IgxHUpHBhEwX9baBLVQq3AOmbEy1v1uXIWyJiGEizB9toGG83GVMG4L5Yf%2FFgKusWQgG92rJMEmCjjVegjHPlojLYkXfP5V1PoMM33gWacYbzZUFbYHDIzabLJsj7DhfjWNB%2BUtvMu2kzPTYArOacsVYTdyUxKdvEEFwjRJiYsvS8YIAB8w%2Fj36yJ6dn4q5WzodQuPJ5JdRUki3iJUI9yjWUqCSV%2BBvxtIwLjQcKS2Fcr3rwt8Foeb6vcb2rPsWZtN4xIaHr5dK%2BgfmPrDTcy9LM%2BtgQlxEj6X3kX9ajIdrzmsXUSLmzYpx28WNT1anBHuYFlIzxmAqP1kOAnE9fXakUQmPO88TSrjYxIbsdW4wRgcZ74TLCVuX4300wU%2FocZmq55qIjj0Yldi2EbIHM3jWVMcB3ScBJdFyK9oODLow%2F%2FFBBUe%2BJDMxhf%2Ft2KxrfvBhmzuxPo3VwSIwpa9kt3AGJmPF8%2BH16CH3oSzKTEVelle1mpm8WfWjNWmUjie2nZ17hKIE89e9t%2FRTG9A8cn7dVz%2FgNZCYkCXQITlnBWejIE80t6aVLrdj2wHbdfs5VQPOGmdJZXRdIvt0sJU4gsaK%2FwrOzOxPoZQnDnvCgRrkjXOOMqShzBx8iNcFnnNkimZu%2BQysovZvKcw1UhzCjwci9BjqkAWeBUDnDvASfApv%2FG%2Fo54D5HCLkdQ3xpgGrCWUJKyqHju6doo9oRdkqlQ4u1vWDPUYm%2BoYMW285vJ9ehzGjP83CzViHJSfAYjtV4nJI4%2FeuJGuC6bxLrXOAasapiIuE9RAaJHwrVgPDBttC1%2FjZWaftJryPyBR6gZYZpWEYa195Rg52TScLL0PFj5E6eka%2FskngBaGGEQBSjW4wTxeubuy5w%2Bqf4&X-Amz-Signature=1766febe540941a543e723949911b2644691aabd8397edb54eae39fcf8bf0d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH5ZBGX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBSDdpyYrRmaYk6pwKP53DRYIzhuJ%2BE5sUVBdbc1NxzeAiAeF6ZoBGkUbG4HBksi6N6IqQZ3MgpWo5hZcd4VRsrj6yr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA894mTAjZughw%2FSzKtwD%2Fs3T%2BnV72uOabrhS446aN6HryZgjIGvO3e9b8LBigr5mwBFG0HwQnw7%2FOHWt5xCqBtEbVbjC0pnWAA%2BgR6zanSpHdSAIgGmDIrDsKIxZB6W4eEfkENJgbNs1ysKGaGzofGJ3y2z8JYTn83i9fwrKghZf3zyVfK4xjT5UWDM3BngL6DsXF3VpUzcUpcANGKBnL1JTaI0gCVw2kj%2BTgml30VlhxIoi%2FWD4Ssfm%2FosQSworxG6tT5ELQBR5GejU%2FAOngJlttPxeHlPZ2vhIbULO%2FzG66u96zRhAKxnRkxlL%2F4pvlMKdexN3GP5pVrc14NGn%2BPL%2FdE8W5F5dt1nx0KUapoXxLGJ%2BI%2F%2Bz8YHoRlkIgzBQ5lb4sp8HSptB7NA6dc75D8sCsqkUUG59s3ZPz4w7S0XMoKNcEyI9Bt14MY5rLA0R6G1MBY9MZ6LM0evBDpZJYVA5UjEDFs8ZWhyr6yiiwdpYcA9e5Bn0Zzf7mYov7ewdPjBkr6LSqUu7kMZgq8h9fK6HYppFqVZ9DRmKC4Y0jGA3W00vILItO07dAY%2FOYnz%2B%2BBWu6q%2Bv3%2BJZ4RM4EfmkgwMtEACUKUCI%2F8RhHOn%2FgmqPqjaHBg4Auh8OB2ZDTzvQ9dP3iCgVSF1AiH8wrsHIvQY6pgFObeESVvrGe80bfJ6T5hVHyhwKwnMIilrLW5e%2Bv9pHI9mAlUgCQ06jNW9B9F5uKzGov6OF%2FxalNxtEGq%2BAeOFQHOCQsSQ7Fj4m4wIMQ0VQedBkhwpXuLILdQbQKaJHXIVsRrkRkfcwvVlIT3ylaJgIJwAqD32YMutDbn%2Fn63bK4Njgm5xVADeK%2BcaCGeDnMr%2F9YFZBZh12mB4WxNDaaJSDBNyeyaNW&X-Amz-Signature=5078e79121d86640e89ec67e5aee6467c5827807a0bd94b76e15e1bd6dde622b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
