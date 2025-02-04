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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEHNJIR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCk3nmsy%2BEQ%2FX27SbI%2BDxUzhUArD%2BPpNc1xS0G%2BHlXNfwIgRt8ng8LdvJB9kBzv4EedkfgdjAYNIS%2BC6IFkRrxpyPEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGSDPe58T8k6nw8sFCrcA3uIyxgRgFC2SkUt%2FnF6Zi5JbIg1yAo5eeLvEIq2K3PBWHgLEfXWoA8k5t7tcdRbtYoi7OLU9AdZdc4LFG%2BYlBtCVo2U4NBzQjDhExZ3aujpjvRWmz1q0EF1asxuetOorea5fBFm1LxJFtb8ShhEIeoFtk4RW5LH27UgKvrGkO6fj5HtVMR8AcpZGWkk2zukuPfgLCgqOxeep1q2ylYK9VjmfXjjYpEg0%2FwKCXL0MGCJYpidcNZ8rV7cLFVr6I3uNoCFQ8izOynlUyT1jEB1MwgmUzxNcHpbWM61RcHWVZXnQXpDLhd7EJ154Rv8zh5AhFpj3S9EVqlAJI0i%2FeE4NB5JrjzhToVZnndQ%2BluQ79fOOGmcogHh4elYork04N5ATsyOrRERas29AgVtAVn1AlWfWYiNbcwnnroITVPP6VQqbXae3TLFqXd7dHe%2FnXKOHFXFeHbFtGIsmdTOwK9L4GDksQv5xhlkTbWbemD1nSAvC%2BOsRslfEsBPV2lPffS2YXr2cWDd%2BAivRzZnnoR06ZV38YNZilnlxrM96G59p6JoI4HClSGVeEOQsblh%2BSpKG0hz6ylVUG52EdRGTjb4k7cE34rfHW9FV63h1LR%2Bv9vUbKTUPI9lJnpGXbTxMMK%2Fib0GOqUBgbYN9v27pY%2Fz6pTaADji0RNXISMzMZfaz42Ic46lCwfvgWAAm4TqhkjqMiD49pIgqrYTcblItWlkfPoCuzrVoNkS6BGGqhM4nQTo1h3LYMkiGh%2FI80IeYv0gzJp%2FzE6LNZFY33A2vE4jim2Tak4E8ZO9O7zYCmUGwTGiK05HUaKMeW%2BcQLrJNAhVqshsk3Iplb8Kp5%2FHZ7FTMXV8yDgpUxcOu5t1&X-Amz-Signature=63a8760463eef4e46d20aa62f93df1c26f44cba1b5e3966074ffd2ecad0b6798&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3632OK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDe41R%2BKzZIWDUrfX%2FX0OScDQOJF9uZ9g4gJfmL1MBNaQIhAPmTQD9MPY%2FXyEozIagtlL4JG8MDZqLpwr2NkMkDB7GnKv8DCDQQABoMNjM3NDIzMTgzODA1Igy8tBl1hG7ql1li%2Flcq3AP47yG5M4aFHRjFkvSp070cDLPduR6IOXX%2FLbkJE2zHuDYhaCFvjtPQVtgIrcGfTTp7PgupvwwiaDFjMkyg2fhTkGmsx1G5hOHRTT3TQOmFevtXOCu1QXgey%2BNmJvphMDLlXJJHIIOX2MDfGmEk2dND4sCg2wwgYBM%2FKNDB2fv68j0zXNOATitfIHL%2BuHPVUw0I1Ral3%2F6EULU2m32a0R3NfyWZXXTIKNnmnsP%2F5bEDr0yUgreKrTYoxjzMLeJK5LI9ucXVbYVG78TCqqW3D9Xhn8hpUhaV2RLzi0rt0ZRtRDbA1JyZpS1DcoNLljeBF0viDack78wXEd0urMlH0CZReA1RG3nQC1KLCxR3aayfADcXOCFQUdmbWE8TSK1o6GNnQJliHYP9IcBaEzreKpSn9nAqhlEMSEnegZ%2FDkVmnZ4fqruSma06niFxM3UUc0aku7ftbsKl8jPnX4QlOplhWscMQgeNP1qhLblWswo3Q%2FXetZFpZ0xATh2CJ6gE1Z%2FRWHhVeBtFAJrgwPwUfV2wmjmbk%2B4cd9JdapQ01fnmbznysqN64jWekNZwNwnc7j5Utz8H33G7OiNATBZ1rc%2FC%2FtvdivzxOVFufPnsn867NldLdircUQ1YpcgYLPTD6vom9BjqkASGkHPpCs6maGwyMoKRLtaxqZxnkdAfDHYRncCIXYbQJuY0J1xIoMxc9K5htv6Mw9%2FbFOZr7Iexui6A%2BmuGR1Kost41zd%2FEpxH%2F6ezwkiFGFjkLz6vZ6L8TCi%2B8qW9gbAZny99q1Ui%2BFbbMrCK%2FuJtvVRPzbcd3%2BILsGminBF6E3YL60jJnTQ5g%2BonQlXgjQzIbQ2jyCrvIfZD36K5Y6gaJQzfX5&X-Amz-Signature=0bd38afc9dab975780dc321902cff904f88d127e920e8e395332f54ee5c39603&X-Amz-SignedHeaders=host&x-id=GetObject)

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
