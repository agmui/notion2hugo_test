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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBRRAUL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7dcHGYniHwwavxonMzYX0bjrEzqoXs5JvPRoW9uUUzAiBjZBABw9VILO5usjunI0maEsRVLwaEC20mQPcwuiVsbir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaiCBFqwXRNPXJ45zKtwDutmsFvDWh52UUmfFO3nEVisI628HXazop%2FB3gdsKEzrxfVS%2BywLSA%2F0bTSie%2BYcQ0edB7TxlT%2F8mnVKepikXEijAf9CNw6tPlHE%2BLdVQubpC4k1rj1nhJWFWTBcSCTFkV1%2BmDC1rHn%2BkrNKxFMyZdYQ%2FtE37u7r%2Bqr4S82lvdG9a5rF78pMS6IIAcO4TCyfbXua33LRaqdVuq6DS8gnqBYZZJ6VVu4OAqs5yH2r5ZGJGRiQsOG3Qb4JHt6ZJzvCb5fICRDGBT06VYbAf1He3l6gCWIHTRTTpxfyardleP6DZXRF%2F3m4QNahfSEvdOToNfuToNIkCO1h%2Bwc18%2FZ%2FeKH0Us95NIhw%2FaF2D3HO1CuqarifYNxyAhCc5EfCGxGLFNo6nhSKq8RGIRrdwJzCSWSOpBfmPx3dMiA%2BNEEp9D5seU4nDKz02zqosl49afO%2BsCbtxX1Z8Q1jugWniP8AMlsvxnAB55wmfnWN2qScw2scGSJvOUMEsYZwbVrgMeSWs5bqiisGbFLsMQjs182UXpO6m9B0IpoKe2tIWHoOUezVHzVSP22jUUFUt9SNGyM9ueAKXMaePsHeOt93gj12PiGz8mTLt2k46f26wRPz6f5foVqn2P0gmRqh0nkEwspSnwQY6pgF%2FIFWx%2Fa6djfhetXcNzDCToSrModZrIBtybDJOeiNYffhsb4lD6crzOwzvlv7R9Azuf4eYjFvKEqrqVvIt%2Fi%2FXi44IdMAGgF6plvOUrbh68pWNhsqSN4P0s1AsD%2B3miNsVUdWmVn7ZMqvD5o5ss6P4oZA8TNBkc%2B2P9d%2FJ3np5oQBgSSTDZ%2FTT36bK94IgD%2Fr06TPzzPv0i%2Bdy57yCFepNUhWNsYxz&X-Amz-Signature=badd1ca8cdc90007db31e94cbd0e2250fec48f717fed3ca1a2aafbdc6bcf0295&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLQZ5AG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeNNnMPTk7H6Bqce7eNkHhmgMkacxxSWi6msm5BldzfAiAYypruSwKe0J0kS5dptade2Y5%2FgUe4BTuzgl9Yd0r8fCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5PPVPJbFGcE%2Bb9VOKtwDpZfblcC3DWw2TRhHXS1U5%2F04%2B0kTZZPVT3Ev4io6m4FKa%2Fs3nG2uuWrJhCJKkKdI0CNFzS85aw3%2BTLDohP3FWqpMT6UpilBYy%2FMiCoF1YFFIWo7AkoP11F3yJnY6w%2BbjnF6FX4oP%2BR1h7qiqgtddNJfIwl6N91vuxfYQysTWZYkmVLGLlIy7xVOI7GIv9cau%2Bg9s7b3gdUJ75wU%2FVyaKAePSMGr3vtARMg3QSXv8EzrEZs27Ri33r3ZCoGTScKjux6AI71BGx0xMxOKcHQhV2VwAZfk6plR5HHjE6wEgR%2BzoPI8EC6XMycFEWBLmhIjGZcVqk6mxQ3HXzYCttipBr50f6jCQNWr%2FeBmHHoCmc2urLcPn6F8A4FVA%2BH%2BsXAaS4J1N1QRQkQ7GjPUE1JQh8JpQkncmbF861VKtiLkysuBmes118ZIoylFxXie0LoD6UApo9Hkc2bht7REVhbdF6LdC9JAr%2FTZ%2FcvfKg8gqzUFnK8oBzHjfvmBQOaSiCZQSr2CL5Rk8o64JH4ez5cxBq709W3Vu380cDUWJUJh%2FnrZqJe6m1pI1Sb4LR9C6D%2FsFlladdyFNj244K6WMIzjfQfsBvA2IW5I3pOYJvsdJ3ObYwYGVRRSbwGHJLBMwjPymwQY6pgHLsrL%2FvC4BZezaXbbP3tw5RDhXE3QB7zEM2MYzjR0pbYly1Tbn0hiMspw2S9qpelT1o88DYW%2B3yGwdOhD1sgY8Rl1Ku%2Fu2Gm5UjZCB8fp6QKU%2Bkf1Pq1UAp4UbqFsy31rVGoUb2hvphUDBSGa8Y0aahxKeKyTv9lkUXp1%2F0%2FROcm1wRahfDeDr42NoNLQvcNJhaLa604vkomxpkUc%2F5mxZUMPf1Xv9&X-Amz-Signature=af529c8ff54863f7c3909a9f0ef694c6b4ea95ae9455ca2d3fdea72e761db03b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
