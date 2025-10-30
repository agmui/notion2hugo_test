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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QLFUJI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCeYiEGsUwTqOzrcQucGthCQ0WFoX5k5FU78uyWnDhoAQIhAMbTNaQNguYJEL83DQm5igH8%2BlJU4%2FyhiA%2FD3WEIWaNDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM6EYhxYozbiLs3Dwq3AOvQQXfWAtt2F53frLYS9rJoO8fnlaRLgT1MqxzM7vJqOpB810CBVmkplIiQMoGBkSinca1xWEegaqnP9DINb2C7652ZoJIl7R71C6fDTpUj34VuiBt6G9vT5DGIS0RR9X345XqMjT92co1G%2BXXm9QNAu6b5IEplEJe2QBrhIXotAbdccAodBd3Ud7JnayBiMlD4J1nl7xI56C16ZFFM5FCfL73diCoB%2BVwk7bhrrlP0ilhvnNP4Mw8CLxwCMy1iy4T9jrsAEWeJCti7zKPhcH1zB6%2B1EVcjnfx7pjdBRCvdJxOlq%2BmPdr%2BY%2BkUAKlWeQOihgWFBufgKw0ZL8ueZ5epnRj2ymELmHcTEoJWBm7Z65iZvmZik14TjQOgZ4xunxn1iwMprMs9FaIfhySBnBmPKIA%2Bia4Dx%2BxjZG%2BR44l7HX5OrADaRp%2FZv%2FcqsvxOpRtO7DJBEwrUAkivYI5uNNIQiiSqjCaE2pXeAETpJcpRUqI0V0E%2FIPmrKN7iHKbMgh1K8%2BSZ%2BcuHdQNHvqQ4CJkSEO8sddBPjJ%2Fb4%2FzJgUk9rei4pQ0uQFOe3B8PlskVgxzeTiAl%2B796Mhc3OcTyQ0qvnJMT0%2FpTHqX0qSXvZTvS%2BJ%2BKLtG%2BuM%2BM%2Ftp2xDDw9YrIBjqkATnH%2FFYcO3QPHoLrDzzAsf9H%2FcYf7auoGHM5McxHqW2L0gg2hpphK94eHhP3oOOBh1S0px2huCwxSsOgzUgdY2NJS9%2FqXolGjQILYMT2sWnyBQiWzp1MSemguC7gHvfR%2FEn0WUNHzICwj6jlchlqo0vaJ%2FjLUhJziz1vqfMRrhxEmKGdFWgKe%2Bj6CFm8E80jIjjzKZCmbGtxa4kzd%2FYJUKtI9TGJ&X-Amz-Signature=ba6481334eda6f235c80f2b5769cad8a627862280e162bb62b5ca1c15bbb79b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRAYFNY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDztA08N3v6qTJR0%2F1s%2BFm1CLCsleUqlWexEiWeaVlnYAiB2UgwdcZeHHpTVR0LcRac9NUp%2BaZ0k7kBckXltQWXe2yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLVmnQ1uYvjkAXS9rKtwD6R3In3qRfJYOoFpeqLKV8irh2tMhms9t5zDrKVEg9xsfXEYb0VnaorcWkuhxVu6p57yLtS%2BmAWljoonyHmAXSw50wT2RewJMZ3mVMSqrmA1pDs3Rd1C%2BgMmyvwWVvqrtPed%2BTMUfsf71dFoYIcaFe%2F3TDomQoJE3WNi%2FBWiFJ7DAmi7Wu6I3njmbftoWU87z0wHrgtJv6nRhrY1oSk6vsCy7537JjUkfcq%2FZyoNJcYzrdQPqacIIRtxF3TRpJG9RMe5kzBqVjc4Biz%2Ba3TgOafyFgLsWGm4H1R%2F0hfVeVQ2yNUGCFMAfyd3SqH4whyD1LuT4FiaDGQw2ksqfswNvmr8joyV3nDJWOhyMLInFU1vjR2PaoRSMAuuaODYNFX8ioMgoek5fKEE%2BTPEyRXvWX%2B45IsMyIKGw8Nt5vnbZXh8R0HCat4%2BcqbsZYvA%2FvyyngF6ztuQOp9P1vAqQmMsGX9fGf5Va%2FQy1ex6KjF3pQPr3vXVH2Qdeila0oX6H5Szs7vwjIPAPFr7C9OUWuDCyXD0SJCeKpVrLbee1SasYDXyTS%2FW6fpL9easfcV0CHjFx0fJc%2FkJSy9n2x5vwLrJU8DRcRYxYttKL5AMCbjZknkHAHOTD6QqBBA6eo2YwhPaKyAY6pgFzgbNuMf4bHWtv%2B%2FkYSPi6OFn8eDNPkv%2BVCNpzz20%2B0QNg4P%2B24%2B6N1mmWFqpH02wyudkKPZBaNQInnWkfoHTKTU%2FPZuZdpo0lwft%2BdOnHqgT1mRfdgOp7%2BNNYR43C61uTwS9NU8PtsIO0%2Bhb4A023%2Fz8RBWLcbppvdoDX%2B1CcX1%2FzLvJrNC46idYLOdOU2p2so90fb556KBes3SqKOFXqse8AwEUf&X-Amz-Signature=c5dff6fec71f4af9d5be1b0e39cac74749f929c50d19dc917de187a78ab1613a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
