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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZS3NTB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2Bu2uHqbACuqwr0oA2%2FAVOBrD3LB0Crw3e2Ya8bgy2CAiEAi4NIdg3zSR79XMzjvUgA8jqyih%2BJL9PyuF%2BkeiZA5Ocq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDO3oqxE%2FLgdJgBMvGircA7DJz6XWMVe1opzDkdVXq1ZY0hRzPlAKMOyW3aecoF7rM%2BXga3KsdDXg3u5auo5rOizGmCL9aC0mdXIoiotcZ047DlrplGBTeNiIeYQ6n8MLymqm8Bl9WHb5lROpv3WP0PEuaxv%2BdbsFKAYTefLFfKyM7AK3jE%2BaMnNLpSXbRJVpApxflx7MnXG%2F8NV1bj8ccCbbQpDKPRNWgVUaf6ttJiY6Z1iBXhiHCVDUkE9HQ97p%2FvREvhNih3vykHHcWcQIXrgl%2Fp4cT8wGTSfmGjhyD4Y4u8P6DNRluI0T7Tduon4zCkD%2F9RpBuUAfSz%2B0sE6eAMtFf8iepKnPIVdZwUn4qRklQM53xZ%2BYva6X%2Fhd3%2FwEBtE0nIFZkKsRXZE3jqPKFsLyQxU8GYdKAvAdNmsGQ5nyyw1SYFwUnayXl9bPgxMTi1q1KnXEgMuqhyn8jppd4NksRrBPlcfqXRU9o6h7b1%2FRgCSLDoPg%2BE%2BNgUOnMrCe9A4cGR6GpLQLjz6gHIb6B2CihhMu8972WWXcR0hHk%2BPBw4LvEMiCCihVDHgHPkVfA8Te4SuNsbuu%2FOhJUWGtojoof44yUgCLRG0m3xvToWRT3HEkD4PqYDJso3rIXGqjwxHz5eTwdDNrhZE%2FWMNus8cAGOqUBxgeA0KdOaAD4Jw4ZTvKRl3gLj10FVSwKwFowhHnm4eaeZcMk%2Fb9kOURf7QKxsnVtu1GN3afDrruRZhOQJnxBpzcbiPFWVc8OGJ21N7m9j3ks923%2F2XOECDpIErZYJF3AFOZNLTAaWyXTVv1gCtIjNmQt0THTBS36J0HL0Zn5SDHekY%2FGfk5Xpm0601I4Bv31KsuNvG%2FFpAqUaZlE4e%2F8zjN6MVyx&X-Amz-Signature=48d68e834605f2becf1b167819a781b13f0f095316660bb3ae44dcb55883b065&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRNKX2W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbOyDcSBqsuf1oliUTDnsuef8BEY6cnLeeHn4YOh360AiBJgelC46WWwMya0J1Hvah%2BB7LPpsrpTMzhFQlH1xEAhCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMYLTi%2BGEIZYTWZGxIKtwD497xmBrbuat90tSb0fTBYSB1FcuJ%2BVjeuf860kKSh5doEzQOgl8dOU5EpwOipGl0hqlXwfNM34iPu1p1AqZ%2FRNH%2Fx8odIp30wlvwvCbB8TLubLUgi11lx7fqyT4yuOoF9kkpRCIaL%2Fi%2B77uDY0JaxMXfenWyJmW6bd1AEBSebhHN%2BjMXiLivvI6rloX5IFagFiZSIGlUD6k%2FO6N4%2FN1KgDrYyj4bz8AZmHZTZNGVvDxIQ2S1rj3P41oZdrzgCD1%2B%2F5mYWiRVLCImLdZSTzBBLcWlb2n6%2FKsUPdoVC9PUtXE%2BXeLs69goNENFHYmSadm5gHZ8hgS%2Be%2BbPS%2FkPdXGo3v0Js1DIgOZocGVpw%2BPWn%2FQORXbPh%2F3ANE%2BIpisEKqXSb5pxSBOq5T2dccPjj1rBvXXkWRQ4YqbU%2BAjJ2P2Af%2B3agx5jIgaawLunp5WH9dlWA%2BILOMfHOLCDrUaBmeWmIZ317TZW37D4OP12%2Fqv15MWa8EMaucPJWJvMjxD2WYihCuxi5EcNGEOL8Ix75ev8qqmn9AQj5VHVCgTUDjBrCQbOcMglMJw3Rgm0orzydHATP%2BLcs1CeaNtiocrFo9zV3N3k4xC2jnl2yVPdYi4oXiN9tvPcdW1WUkRmF%2BMw3avxwAY6pgFyLr7hA7x8G2J61KWbu%2BkpDUwPj%2B4Heyi%2Ff0yhY%2F0dE6IYtoL%2FTRNYX7a5IdbcUZ5F%2BT5dYUzbI8Im4C6EDPibI%2Bf2GoXEt4ZbyN6O3lD3hYS4GSvMf20ALNr06VEzQQM8%2Bf0oR6HcUgXN%2BBl4fHk6NBIMNAAn7Qd52subtndm0WoHrAvtlzV%2BbwOX6Lh3OeVbOD67wScQbarIHbIA6XEaAXisk7AH&X-Amz-Signature=52c1b538a77300441a4bacf24c0a9382504670f3223dc0270c52263d622a17ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
