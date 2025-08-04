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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2IFXM6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGtbM7iocZRKyl08omFw%2B9V42%2FtxFRZSbgIW6fudOdkRAiEA4nWapVhFQDowLqbtrrM3d2nD%2FWScv0qwguvWT%2By3hAwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIYBelHBZauk61stdCrcA9oM1qEgdUjzAkFvtwXjH2Doh9IrzfDYuw6PnkiKWM9nNKRn3umiWyONOdRHOPJC6MsFsXyXYfqJgFQ4gcyp2220gTV%2B6RkaSCcRTrSKKL4DrudTkUpowpN9sjkvm1b75TURd2%2BpH2rbFiWwUUniOFXxdUsEiXdT%2BpY4Hk6DZFfDFxisRvn6EvBjXlb7KmVkz25cqYuWoXsOBkMqYSbn9qlcnKwMINhfX8rX3PhvIaknCX7B8sGVrMCZ7tBe3hBufxV0PJMt9lRqeeyl7NIszDnmEC8yJ8c6BKZFJi9Yfpls4qvq6y6gDdS1LzBPDo8edIPHI72FY7zBSeixbA08Q2LUPx4Nq1mygQMz9L33ErRmxAMikfTOpUWcEeIaMpTfqatDgqc3zft9Vs9cfAoZmIQYv3i5GgoKoaJHD2d35cDhc7WPM5RmEV391g1hQtLeglMugEqVZInSctLmiP3bQudhPHcVpOSAHUyYseyP2FtW3DASm3LXyCO1xF37jP1cMm87nO0hz6zc%2BKghvCLL5oc4ymczfB4oI5XicCfxpp9EV2VDPeT4JYqUZKs%2BZOt26c6djsThuNhgxM2yMKL3BRIoYOS%2BhUIyN7naeGciY%2BC6ti3rQPU08WwgpE7aMLy2wcQGOqUBoKHhVuv4c7DLMI4EJwV%2FXCCYJ%2B%2BIrOkMGc%2B4COJfua8ySz17etA%2BN8UBVytAzaETEimdmxn13OspHXypVLoX9iP8x1d15jG5wUn4Fdp0eUdnlVfz36VXDTKwYXfSkJVvgfiHpV7290h%2FMS6U2Kq%2Fd8vsLl8F1Oo3l57h55cTqYEzyDRmvX9ypUqTBT3oohDP9yQ%2FvjEp4bB9St9kuIo%2BBp5bIA9T&X-Amz-Signature=6388ab45b79c3b72e3e3d480e8bf412609abc9c3707a2f0c0ad962e049e56546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7B4G6R%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEQcxu9UDbvkYuLSl4yCU8F2lS0CEZKkBHa6JS8DTGG7AiABpy0qFuJOUVJ5ZefB8e9oc2P3d2qngVgFmlL5TxKUVir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhGEUnuI6VH%2BHgF1dKtwDjzABar0fP7xOAOWe3CEsFFj%2FFVACP%2F2OODTJqN%2BDxFTF2YUV%2FLbMDA9jrD3RRtH2hv5eE9c1oG6JwZ9NGO6OAGmQ%2B2oFTeyX43OA%2BCdLlmxTcGTq9E7dJlnWDWkFWjAbjcqK7FPdf5aYjL5dluYp5zlEXRHaafWhXRTPw0QdOvTjGXpA39QukIZRCih%2FLFp3cOq7qKt6e2hrXu27Q8X9OO1kE%2B0ORoINCRPsREdTWy3NOfX4gSp5KhdcpTv9hZA2b3rCGFEb8aIp05hHBnkJFsWLhcTjhgedZ5%2BlcrKMBaF%2BuPb%2BbsXOy8B7ULd9Uxuft9dCbaRW2%2FDNiB0Pes9SGBde3HfX4n6pEBshKp9h4ZlgJushdHkkNfwAo0pV3Bd%2FM9CQxA8gvyS568AAsiagAwDfeLBoVJSTddVgw2%2Bvz39nYD%2F5aDI9AF4WHsowq7512wpj9PBkozYqKoWRuCrqhCIvGBOw3jkkpNsRhIJjFlxHqgFJTKxOfliRx1lELdRt9J1tpndRPgCFrD8FwNrKlgaJdXeEyHT18kx1Ahh5k9M6ATMkkIoVSnLkxqwo%2B4q49A7nYFF5RXC%2BGV5zwCh6VKeXn6aHdPwp0lyhqqfFH77c2WrHgZHbrKNOPF4ww7bBxAY6pgGB78T7IBHgnao6nCLc7HQsvEJJSRcYVTc0wQtYG0mDLnYDWK45NEjJAo9xuU08bvIiFlTCGxlENPjXNklQ%2BcGgLoaF%2Bu4pwqzaDRFJqvaDhd3zjFbO9OcEd3uJ4pcW3WY4%2BvhsTqfWOB4ghNKu981SZd8q5GHzX6oZ%2FHMjZynNXfH6RmQlCQoub7h1gVeC%2FKPootqi0Ny6oz8KqdaJMf6BddgrZACg&X-Amz-Signature=70787d1c30acb3099af3d35fe1d6304a2acbbb27b50a200ec30f287239a6faf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
