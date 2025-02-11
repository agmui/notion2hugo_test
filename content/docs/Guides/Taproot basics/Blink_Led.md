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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLF7DEW2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BpqGK3%2FQpxLcVdKYqvuGghlIwiYuR%2FnLAYhyftwhfwIgHAXLI3oy4xwEhiyVS2%2BqOOZ8elxhKJUPb%2Fb8fgnUy4YqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqL6EhKXWbN2ul41yrcA9VMuYyhFeQ%2BzI6lFjxLzA1xC3vlTKMDUULyyvM7bx9nGYo%2Bk4sBcrhA%2BOiC1QOMK2wPdFecuyKw%2BIbudp1jnGt2jKAL7HT1OJtz0X4gzGjDU1dVEdCp%2B9YEBm8x8HnVZwNIVOFzNRS5nFvpxN7KMo4QU2nuIWdhQgGvvCNOGxF%2BjcnxdrHAq5gNTZNCd7oxkiK5zciEYadmVLxMs7nzH6Oxr%2BGRbHAQolKYFPF7qV6OZ2483ABg3bV%2FGFpl4YIvo6Yxch1Qih0Im6eYBzEb%2BfwG8QuIumPDk0RlFeUHmFS8nChw423vA01qduIgLngODPXJ6dtwKMmea3KRajf%2Bw%2BF%2BI4eiCt3YaWQJ6n1MhOml7yRKweL%2Fu3KlvylV6sz4liBMp%2FimvMx%2FYOfCSMOcuRDL6VsTJLdVw%2BiQsB2VDs%2BwxK3dQilKHDGn3QRZFYmJxp3%2B2lwaXWPrxjJC0T%2FVbfhU%2BzFJRTrOCmHuURHw4GRaUFXdz8o2BCuJ72fRuA8vlcDyJry2yjOQ14eLXrsL47TGn3WC8HZxQQZhmmo%2BKQi45nKn0SnYAtKk0Jevf9jyqEzP%2BGodxAGangKjPxd7aa7Tg6s%2BiLU%2FLKSWD0YqYQpaG9gVt5xkfEm7JzgMMJGTq70GOqUBJ%2FsBQEvUuOcp54GAG5mEfWRGO%2FNQMtXB2gmDtJvgw%2BVq49EKMLP5rAJMxH8RzZfslh3XTkr%2BcGiBh2OKt4DQsaiVv2K7ITU%2FG1PjgQy9ayx%2FTVgpXucIPyTlWVTMmIg86Ik%2BVdujIehYg4gGZsHl4xWfMk8JcASTAFwGxd66qsYtUo1eW1SdF9vW7JIAmJWSmDizgeVaIRIyjrOmpcaiOnw7GZjS&X-Amz-Signature=20333d63e22a0335ca63c85c8af03e2245d1ad1cfac34e577d40f07da29520a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AGMZU5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUDvWC2C%2BjsxPQD1%2Ba2jWrwQquysx7CHLW3%2FZDaB0KRgIgDBvHGCInu%2BE7BLOAkc7HO3%2F94umFn946eixo19B%2FwyQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbKB%2BRj%2FEUipfNfWSrcA1O48SwPJqDpRa38TTPq7TmvE3TDNiEBdCVdQsfVtofaxoWG738%2FwvGvWa11nQzDwGIEIFr5jbC0mjMsQKyEBFIV1jCwtq8me7kxXPnmvvaB3vG3ma9TL%2FBbfboIx0TgfNJPZ6FDedSgd1xIMr29ulYow9t764Lx01%2BnMDEV19eeccxSojnUE99jL2gm%2Bgy%2Fb031BgyumnDBayXoboee36yQsNQA8XCkG1Uh60ljVHRNwrjESnCvQIHJPUQNUWwEWkE8zD66hHAl9gUcOZIWEUBRSanRqN6sl0GuooGvLBZ6TR0cDMOn%2BIgJQm5lk078nxzNj75MmBetaT5csXjCLAvd4eKoDAaNpe%2BgozDU5xqEH1hC4z0DTnyL%2FhRF7FvKiiiHeR8GpCI%2FlULM2Z9%2FMT69LcZ384THi%2FQx%2BmRxLirIeTX5Uf22naCuGfgRQVnbvla6B0v%2Bdh3STPqzttdUJGZvbK5LX3LT%2FYwKaDPcmjxUCAZUaAmGfEzdwIXS1fkcKqY2HqAtYiJ6CigebZVg1awIYneME0v8hMl86y0ToZdHvC5gA5RPJ1P%2Be4PbhveNyOe%2FcOZu9SNFID2e5JkUAPIkoZjRk9GM4zAiajbNIbmKYbkqo43byBQSnWdmMJWTq70GOqUBN0AWjy01U%2FtiHmmjonarSyMB2xbacoPhJfxcsSIM5XVLUkLkkNOcuLw0RFtLovlRoR%2F9NKM1EEanf8lfTOR%2FPEXylH1OX8QsQPj4WEqBQbCjVY6ZOc%2BV9oGoZnmhJH3m9IqiWio1wkVxicvEgSQCT1GE9C74j4mqLUmcW8EWYHMWSiScK0lhkzs7EvR31jUtyAgnR055VFcpOv8XDfIP6eK%2BM9Vd&X-Amz-Signature=4f4f6f073478e1aae7d2ddc9c2c613a9948d5e579162e5e54cf8bb33e2cf30f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
