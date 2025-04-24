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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZM3MX7H%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXlbeApxSjTnvJuyKw4cV%2BFf9b7Zm6zDeLRhZkuJUwzAIgV47%2B0QTrc7LB0OqTQwLsdvx8j86FVuBssxrDiEknUB0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPB4IXZ09g951jCv1CrcA1P7bP55KVXXmBOnf8rbuS6wcfgmJOQMWjt%2Fa%2BdulEWu%2BOelkc0Qkhy41INDo2th1SoDn1toJvfwrBCPnNm8OkXlD3POsJqzMWafhXJDdAKbYvuMD7YeeJIxeXhbYO7RtEV%2FZjT8SBPEem%2FisAHjhZsDaIMDEz9sq5nHQGeDfhJHeI58MjCKnH5SFLaDGdhqdNozTTx3yin4MpLZad%2FesHeDcGhiBNXFt%2BSLZHIbk0pqPoskq9UjbDILA9JVwPYyRYKwsPuG%2BOnG%2F3zidFqhJVJRmk4FW8Tq4lGZL83xbKUCDFyV7mxdhd8g0SiRQNd9pNAKq5FB1k8zafg46SO9GrUeCZVThMXLb1f0dsGR9OJrsy%2B2KP1pis82H%2BbSnfQSQrBnLYAlrfeJk%2FWxhLHu%2B9rGJ78HdaWYve%2FlKdW5euq7x1hhJokfb9CNFAaaEYtV0FOVq0nEjJUQ%2BpbcSABnLRKoJzTr41i4BSiDbb%2FZva23ID3Q2X%2Fl9MJ%2FdqW6DsFLCI5xY0TBipbTJrgzHyhWDlhkX%2BNpZZBs6wu%2BM22tttTOeTddZNCK27jzRnUI30apLcXd%2B%2BkTeoY%2F%2FzMlPuou5R%2Fblco25MPEWsh9vEAI8vAq8bJG2G%2BPGLazUVKRMIfVqcAGOqUB4IIvuxOU2olZbaj8TAeiaamtG4AekAbct1SGXUZXPs1GvsidfLeCuKQd1%2FRO1gqIC5dVxn54Uqdwoqe89B7JxPh3z1MdWsNbqRNJDsPcLFfe2txwKuVfjJPj0MPu%2Fa6spfwmxgw55xp1i229SuthIGjPPea9Mho1JR6XhFc1VSPBbIlor%2FckriCm2Rq8RpoYJjAOR%2FfcKxhuBpqGZfFLG9KdbhQN&X-Amz-Signature=ba26874197d581a30c0b6c1fd026e7280dabdc6732b4ada56650af3b437e8272&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBFDBEU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcTMp1sNfwH17%2BLlL6qFlHen1EjawerJJHIamuINUYuQIgGpw8atgPRMIvIsqNJBa0cCrt%2FvTZ4Lnu7FQLEuj2KpAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGHCcKfKHFQ8nFIVySrcA93l1RBPXTT30yuGLxJnyC5ce8kTQWyy6ccE8We71CMRT3CO%2BuXavkMFHHXGGelazQBcROw9LH%2FGteyUUtN6ExPsgXSP32jltXh80kGpGqo0aIuxAfLwF25S43WR4w%2FY3Sb7%2FRE5Dm1%2FlrEXwyuusbk3SprXA3dzg3%2BjJqLwYjunXVgBvu3lHaGHBFMXHyrOLY1jpLp889AzcBbb9tjsRK9cIx7T32uavAumopUHtz8bpsoNe9ARA14lYx%2F1TdgNOh3uyIyQaeuAGhI3BgW%2Bm%2BodAh19xw35TEhM8F%2BIReyM861qCDLV91Pql4g%2B8CoRNlY5y%2BJ6Da5UCVgenjf2HYMaQZ1IToQIRDSaxVG3tIh5jm%2BRmCtpL3ETOxFFPUvu7SlXLNFIx7rBwcmmttwGmEntDzyp48uo184OqOTwxCBFTPybvbqO6Pjd%2FSUPkoQYXWqIg4EfYGPklrgbvR0EY5d%2FeEVCkIMg0wgtkRRqwM5002XJfopefsbUPXfG3V6l5RjggNStrT6aR57WsdWzmpH8S%2BN%2BPQrIe%2Bnhsn7nBNhD27imZadfwiZcOLmJLHG4cYqotjEvClw%2FOfFDwUTMw%2F9m7tULgWOhAYEq6EAPWOoiEACmxGQ4LjW7yuI8MJ%2FVqcAGOqUBI0vGevlvT5S3%2FKV6ohdw1%2F9%2BHjiuwmo9yuaeW%2FWfaBOfaKywgxE8JdvW%2BtgKeOG%2FTTj9LrrQpe8cshwm1QOsWSGK0hqZ9wnSKqDMwcyV8M7WVMYU3pXRZerSh5IepL57FDujOYWwjE9IpzDQIOFiNx1qM1GmOiYW3DU7klR5RAjl%2F6OmUoZGZ6fJKZY3HtF0CxrV%2FhqydjQ0ZUaxaK%2FKlUAUJldn&X-Amz-Signature=fa577bfd9ccfb2cb3f72084ab1668715ed7414892b1b2b641c994a603224bf13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
