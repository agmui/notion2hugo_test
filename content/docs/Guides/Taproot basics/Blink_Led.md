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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAZ7HRT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6YJ6FC6YZjmW9FOrdBatr4JTwT5I%2FQkHbTCRAu7%2F%2FvAiBWOHofKvoQNbr5QxCRZRNp4GDhhR8bbnJEMWqHh8%2B%2B8yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxUq2zyn%2BpKjRX21TKtwDrKK7MyST6WZ31PitBMy%2F53e3sY%2FdI3eX8Jv6NJcwddDAWt4xmpBwfczdAVyoIeBVFG0NsEq870xP%2BBUpSOnQ%2FJ09yRpe%2B3VeRElOccGNNk0TYCqqHdjGjEsnuLBp4%2BBY9PASepdOxAtSIIKJiiyvZ0QiO%2F4qxXGPUMLfNZxRpu9BhVopQeyaS52%2BHyAQgLtVWeRtEBnP9g%2BKxxG4Ri2CIFpOH6x6ku2Yjt58h11Eai2BCjuO%2By%2BwDOp8%2FwU0dCp%2BctXXryeNZEXThqsvIrWbBg5jOHARKHbzmd93biDhLWOcehP7gTDHqkJHq7qAHRP4y29gxA50sEVrDfRKBOL9t%2FtOlGzYpfuYtcX4LXQ9LnexDXlPiw8Ibd79cGyJYI3KmQSetL68OglPP83usf4FeHp5YpyIIVkw%2FvmBKJigy5%2Bhlph7z72Ruu38idtH%2Bt2zR8Gk0Q%2FpWp9G%2B2IAWBffCUJqODWDI22MXEQfx5kXt4HULY31RQEAKAkQRYMss7%2BX4yK6EFpfZn3Hm9ALnzePpeEaBypu7AGIXxGUzDzPllfFtxiPAybJZkjlmbkbK1ek3aVWkXc9V5KqQ4YsT7fOR%2BnjD8jRMRppB9KfbklRFL9pfygAO8FJsvzDLJcwz9vevgY6pgHWTCnY%2BkENVM4amC0SIpoQ%2BpHm%2BuJBlvNRgwd%2F4TAiOGFtu7RAIL0dbbFdsliLs4gw7vSZuLOpIwCQAcrqNZcDpCaSDy342ytBJkOh0iN7RCo4fU%2FH%2BhTp5LOFqC1k9Hl5VTIUoFbyu%2FbrziOvPcEmk2pi6i55tza1baXmpyz68Yz4B2K%2FBS3wvsJIKwk4uP6ZrK%2B3Re0KwuF21CAB3Yef8%2FCN3ntY&X-Amz-Signature=58956749d45cec769925cac8627e30317ac243380c2547afdccd9c030761861d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3JZ6J2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsqeWA4YOuNSvbM7ij1nS3GaUo8ZapWH83xkacHvMzvQIgQpUyeDcPIYu6aaZ8drF0fF1VMgSIiO2p%2FghdrIiSMLsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDL58kN%2FyZdy2fHaOTyrcA55FA2PumgV1ZQyxqZ5PiabQh2NDL9pCBptonMwo5wW6idEzkNOC0QaS5TREa8a%2Bnc2zobZ3exvcUHCNwiciK0hRWzpyYb3JwJxdGfo30Z0tlGj4KUzrP4vl%2B8nZ9Zna2lpijqIrN104uOd1jTOYvHxzXDNMDAGB1m%2Fdd66aq1B8r5C4MtEwBwDEd5UHHPeg77ThMbDP2Duls93ps%2FmF%2BGtcCXDDWLruXafrOMjSoJZfPu39YbQRc%2FunpYHvEGi3Dn1%2BcoHBeli%2BPz5C%2FZj2RiLofKp%2FizJtrxeV2%2BsspLrCKJuzLL6AwM96%2F2CXf0Cs9SzI3PoQOHoeC%2BTLE6bF3x6fwtAGQYNYjgT9GqTNGTeMLBixIu1B0dV9OhZZvrv8p5JcdNGTuywXkIo0bfX2LmK5TEdgTwtDMuemnlBrBz69fP8YSX17sYW4nOoS6HLEGTSvqgoOROSlNw1Sd5ZcRFRNqjfFM9DtJTJv4d8Lisyn%2BiJnk2ytxXbcOgr1TlTohiqFVhr5DVs6L058jZxgJ0kgZl%2B%2Bn44%2BqJnk8S82qQUaRkbFwFQ3gppnqpVQoLKH3Oib1%2F7gEk%2Fhx%2BIuhiD2EHCnFyYhEb37Fbf%2Fr67cUHt9YhdRHOcQGrnUuEnGMN3b3r4GOqUBJ3CgZS%2FNiGBHAVz08G1n%2FRq6faHj0YK4aVdnjNthSHgpwlJVZlkReLh9REE6LwW8eBT7itCJqSWmoeGpi3%2BcvAUQo4al8pyFo%2FcNt5pfXo4OKooGWLUYVJ%2BYI1IDWdv5KvVXKIbz0l9vIYlv4QKvzYQSwdyhHexav6XI8pTk6btcdckwl6ch3vzNFQXJab%2BSJ1zNK5UAvicMeTUbuGPu8YE7sUDy&X-Amz-Signature=6aff37f200d6457252a1b7ec98a4c4afcfc163a2bab5731b151d8d90d7f06041&X-Amz-SignedHeaders=host&x-id=GetObject)

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
