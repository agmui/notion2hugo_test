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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSVRDJE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCNbIlAExRNdqhX4R3sbSbTZyO5WEkSOpDQ9pDFIdsm3gIhAN6P6XjFw5GVGATBghhULHBfdaTzV5RVmiIqV5QOqv%2BjKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrx3bK6C9L70ZW1Gwq3AP6QZAr6ZseG5j6NhOh8EvTTJO7u3QqrQmScvjulkdgVfDKsoZ5AO1S3Ado9pcO%2BTXmuzyTA4fx0vOpbMaGaHZu2dKTtQPlbdpPe1dcC6NjflVrQBmRZ1pI9VyB%2FSPgYU8DXnSPzbLGBz74ZDS8NOIX8cYbQE8GLITTquLXpqG9F4Zp4TLzDcSBir7VpUTzuSniR1H6aM%2Ba8hTXMo8s7ta%2Bf2X5r8ufEwyHnu01W8h7juKt78HVdUorWaEmi6DVZ0VN%2BPB5gW0vX4l9B6OsOiZZn4OH7aulRGzsJdmSk0Rh5sOkWSDE2Tyul%2F8Kq2eGqzlxUdI60FePes4ZuNSW4JLXeoG9VUYF1T%2FxQg9bxYANb49I08M3HdU3aWlqmHQeOpcG6ToOq9l7sJrkwb6m0I8TE0X%2BBc7WqtTDNMbobrOToeMCVEFxNGY3jEkVsACGeuDc97HSIdeAhd5g1mYGlS8QsfRRqKWDw%2BHvzLXn8XvvRvz5bznhJOyqc0VPpJ9RlNxtG%2Bp2baGK07rMbSZRCsiq8srnNXSHJIUZC%2FtNWDdt4%2Bo5DzI68lHoDGYWGgXakwbyLJJ1JLXrwd18CBVvMqegP7%2Bbz%2B886cln82%2BhmOqlzoNW2rhrufnPEZhz%2FzDPh9XABjqkAY%2FYN74LFaY%2FiSJciMmKMISYpz6qCNrZ9g60FWyGjjkDGbvs0yz36HHXeX1TzjwoUK4HyOtZF17b9LJqbmci9TNAIgys5jfnjsCgUby64QAohLIIYee018ZbaIeAUL%2FXwuALua2vxRO8zBS4SQEMMOBKugf%2FeMAHzPGz24IsMAWLW8j555sV%2FSZBfjkhnxXAZ4BUwKqpVjxsPRz2X9XcJ8axI9Il&X-Amz-Signature=5a157f96a505b4137e657ce10f062f3ae13cf9a4f00a65257a0c5e8ff1cdde27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GUULBM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC4qoOvujXj704vz5sd0vpo04yu785MGL7AWbJgQruFWAIhAL7S%2FsQWuHOxuYGR1bQ40zlxm7Q8u7g%2Fc%2FqQEN6Mo6%2BPKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0hYLUUXcV3lVgqo4q3APvyw%2B%2FsRu88eNXugGWKPusQ6wQpeHU3xIpU88JnvR4xPoCenNdfiMAB%2BVrfzHZbTMYHhodScCClk%2FYoKFDRfx%2F%2BVz3oF0irowthImdwb0M6F33F9iklFPXSYmDPQYZStiRdBHZk39wiWzAKQMSmoRn%2BbKM6GUUMO9SM44UHtHmNtQWMpazK3JwCf1t0Ujp3nh8jrfSuZTCnFOT0odqWtAiwpCwfZpczr3MncVzrjQy1lPmSlkdpN1CzElnfPnRxZ42hyjym57IBv4g5YDgKCVtigVfvNaNLot2XceGx2xvHlfLfYYiV2vMLZmkpmUUvsL90SYSoTGijwqAnjuToXdtf%2FrStf3vb1wKwjxYcoH1Xg2AIuehB9e9FmdMude4E3vrZY8%2Bq7oOvvtfpobxNwAoGdHrp0VKYJzjflTQQod02oMObk92Bg1rvQCAQC8lvO4h%2FoQzvg%2FnVQFN4qxkhbGgop80RWukZiBitGLwFmLTqeHUU4BKtoT2PGETNwn7aQkx0rQJlx2vN%2FQZC6hjvpKHogXOepCQR%2BwLi%2BpjP4s7uVmdRv6BVAgadwIgdeZiM%2FoEIbKsWWpSRzpX0aArLbNQaKZFRwQ6rCwXkcMK2oj62wM4a7zbHeao0L3MljDshdXABjqkAfXh0YhqVWrBxQ9kV8pA1Z78LSVanSZLbdleIHwsL1m3y2ieWIPPOLTwwtTOvZ0Tq%2FS%2BSAzEpVtjpIsgxKzre23R3YitfXbGZ3MaU%2FEQa5GwSLmGsYeM5ythPxRj3Rnc7mcJWAMke%2Bew2cIlyt78R79Q02d%2BZD%2BMPalzHHT6PDU2ab2qiN9HvEA%2B9LqFK%2B4IKeHUotOZ7R6S5AO7Gtl252qkD2UV&X-Amz-Signature=72f2f94b30537dd2f222177634aa3a006ffb209f4cc80297576333dc3573e0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
