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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAFL4KM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDquMI9rjpzUgajBfweJB9XQ1%2FsTHkQ7hGHtMMhMXwxbAIhAL5%2FuZNfYPExwOf%2FKXgjz0ILWzg5h%2BzyIQ9UairxfJkUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3N4xJw4n0%2Fw%2B%2FF3cq3AOZWoyGyPVsmTCjGXArs2VC42%2Bfbs%2BBV2aSqjdaeFgw5u9pxVkoQdIZwUG0TmKMA7Tup%2BdbXX5ElXKrE3%2B1NTw6ybggj8plLfFHXZ0edC2QSv9CY9%2F%2Baxs7kCoFErmQzJpS8EGzNxTWmxcgWLUD1t6sVKNdXH0sFOhPQz0Zu4XfzH%2BdsRch6Xxripm2zT4FScXaJW28m2aCpl2oeV0yJ2RjsXTn%2FXBP3bpyZfaGEFBef71LGr5szExZdGatZDAyqgko8fElW%2BHa1s8p5tZ8unqT5j3NOS059usNisADS0Ae2bU9wwkeJnFPAaI534qw3fDylLR9gE9dUKxBnJVOpY0RpB0G70JJsobeDEHQh2%2FQ5wIuNd67QfumzxWd1jVgAWY7oh6ZDBhUZnuMnbLC1L%2BVpUrRV5Q9gw1d4rd9YRKFIsx5fMnotNQsGBRbtRHchCX2R0LZAtPC7vkv%2F6I0T6NfPVYwxZuSNAhLbDcmSLVOBVYnb5gcQDHquZz9RtVMjcMiIx56C7vOGB%2BvOGw%2FsKLeeKijnfP4BSPdlaknXyjFovWtdV1MR%2FtYV4f6wCr1%2FIIerH9klaM4spmv7kFUSKcZamCnuID434t5JQMZpouA3%2Br1semYVaZggcpH3TCN%2BOvDBjqkAaKOnlJZq4rjzKcfaRuHqddmOqawn4bYQmzot2TT8JB17nsYW3lQklZq%2Ff0jJJ4q8H4H10r7CInah9rb7GP3p2ymc9oMgxIaQGPoi0gm%2B4%2FcomjxBcKi4Pfu7XdHy0Fdi49eERslSu1MzJnA9n9YIOzYnaSfbJQBTyPQziMOkwqHpVHj7rJZDTBDjoAkhqizdDudEo46Bb1WN0MNLQg%2FFTZy8TaN&X-Amz-Signature=22429aa916fa0a631ac97e758187d9a9a37da34cb5778fd9c26e1978aac5ebcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQWO6JVW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHe5x72g81I0bsvmJtNWw%2BQrgJCVmDADTkgC0zHzMAmAIhAMnmATNBaWg%2FjX2z6Jmya5xVgx1Ay7MrRSSGcGPQ2NuHKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqLBYnB5TJd64m6xMq3AOCwhwp%2FFMqP8C1QHUz6tkP1CKV9u0WCQ61I8YGG%2FypDgoyJNMtSK5%2B6T%2B9XrZ1rY1c%2BHNaGu3ANVr3byt9%2BnmwiHMzoiAC6gSh4w8DO6aqAmM4pI5RC19Fe0JCOKboTkVYaqIh7FuShD9oOsGViGWGoonzdMziS%2B63IEB1Ildb519mbgepm0WK6vz48OmkqO8HfSSXseq2L%2Fh1t1ifGFA60263y9IfkOV%2Fheo7QGM6PXo2Q7JxcYN8ovf3%2FrR5qYZKoeXPwW6k2sTgAT4CHrH05ENMPm2blmcbvzeItoQd7sjAVEusAkSBPDqrM2hE6OikBVz%2Fb2LGcQzs995DzBNFLfTs1%2BkeRjiRAeqsfLuX2V9P3EIqyHcetFKNBaIBuiGdJIgpjCAjPCe%2F95EaDYr6Z%2BZJl5YUgD4fWg92pesGkt5%2Fs6PeU0JkxwrFQffvSVIW0Nk37SD0Vvbf1MCz8zkC8N1EZjNDjXQjrngg1qKaHg4d9%2BR79aklohgT9swU9V%2Fb4lt9QvcONvWT0YeVMo4zljBH%2FzrM2phVfEo2hCq8DrdG9HHI%2FblJAkXGBTdu6u13kS9TOd1rYA62sRF3phSQEJkagnswF7laNWL3XN%2BpqiTr0XfWS7smjWz5gjD%2B%2BOvDBjqkARSpXVrXI8%2FPDa9cyD9IWFLgl958el5CN3J58wHdu7CSVSJehvsbvL6jJnoEBRP5Kqrv4TMxF4xKpVX02AnHmBk8Uv5IQlJdI59zWeQ0W5xOQ8T6pUqdkb1puaAN9W%2Bo%2BedE2sgM7v2qxvLwwYr21mQiuiWi0YFZlgP1whu%2FK3MY5oo%2BdEZ%2B5cE92LB5En2l%2BiKwuH%2BPKbzHO3rXSA53gAvLD7LM&X-Amz-Signature=e5aa990b8604fd5f652094814e02f93a2a34a3485b2e756afe930ecd54a3b02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
