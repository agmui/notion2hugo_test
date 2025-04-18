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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDWN7EW6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ciQh53y1asZ2UyMRBazKsnzyajyYYO%2Ft6qN67mBf7QIhAK8afKPF9TEDMs1swa45019ERlIcvGejMCmNEmuyEAgCKv8DCG4QABoMNjM3NDIzMTgzODA1Igz3VyGOFuOm9fjhIDEq3ANCjEukjJQFk9fp41wchyub%2BkdG4Q%2Bphlueco%2B408%2ByqDbbRUVquITDi%2BxUkoMM8qCHNoWboRTAB6sZiw5W6rN5CLZYaVpOisTlzPjhdaVTt9S1b%2ByzTRb1Zrw1K%2Fnw5Qj1lA7C7NYucRBOTWgkASpRT120KW3Nr6CdBgUNURUgADcHuSVxPTGLtcVl5tD7wW0Qb9TBHAWnf0XgyYGNFNIUMVNWR3rQNtYk6NopvWy9Hsj5nNDcrC5BpcWLEaN2zuelRo8v5Ik%2FeNxXHZX0OF%2BPloW6kiiwPvtNkv0UOayDdCdSN9SJC0AGdhVwJ0UqyqhgbI0yj6wWmdbOlaccrTZ4FW4ZYQmI5xRlZkmYbrMIV3O7XncjNj%2BiWKDirDEfkGrWCnUcCSiG0VZfCxLHHcBjXOXwqfgf3YxWcq2H4GVStk9nVTvWhiHqOp7Zqdo3mY%2Fudo9CqInM1pQ%2BOzlKIYHVh7sYYi%2BCXZhcZiNuLGJuM71Od8NeDMDOo3YsV%2Buqpm%2BrymHiphypiwkWvGxxRW0eTbOy1xKgV0bUt2hi3ps81Mf23Yd50%2B%2FKT8fFNi8xss6QyfM8tAL3iSpLRiodQiGbxFJdNfVp2BYWtGR20bzIHGxdmDgZ9IVP7v5XJTDFqYfABjqkAZ5B2pRElDh9djLECTuoEHJOcxRfAAKnZNU2FB1shFNTBcyhzRCPL27wXuhI5LeMFIGWJHpyqpWp87rY1PyEit0zlc99BqMtCdq67F4GIrQmaXkomQqUpaMrlSn4k5UWB1oFGQm1hYEPo1MrTnwatO10KfIihQE7OPMemh97hTceLufBcvJt5HEjZtDaNl1A0Dh1ragR14BL98eXbwTD4VXujBIe&X-Amz-Signature=fadf75ca50126dd8c5cd8aa0b97bc1702960decadee4b57dee4fabd89a207f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KKO7M4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw18x73AFy1a7S4jR6gi0jDfFlDDCr4NJKaWTRmDI1MAiACcAXa280XneB4NiB0dHZdtQ99PLkiKsLB%2BpBqry6Hzir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMYCE2DQ7Oe3V8ELSBKtwDif73qRf%2FJO4RG6YYVMSk9kilTVZGkylQoUUFEohEtfBFyngjERQm4hT5DRGrwDQFyC%2BedOYGA64uHH055VcjSB%2FVenxe1c97wXLIwD%2BaqJeNGNHOHjby2HXzPsf2qhdB1Zpt1%2Bd5OppEnTuUIa%2FBjpcttwLXJWom%2FDxzucMdIJ262AVdphRh99omokfGLfwA7Hd6E%2BWdVRKDPkF8AEfWg1Wq3qAkPslfprmeQypzsk%2Bu7o7yPxcBP1eeJJrKlwxpASBd9PWU%2Bfou6mKDAF9rNn%2BAHBA%2BzdDjW8e236ta%2FwdwWAxkxBeDU20OnPlESdUyUjPssi34IDR5bqMwpwd5xWIPATfHBnuIbCZJkG7%2FigYJ23ihY64IvqSKaiwRXByCr5%2FXEdIDuLjwEuEIU%2FCaxfhCD6qMR44MDrmWTXqOz276vgBBZ%2FY%2BaHNz%2F2mPk%2FEKtI8HURvbs%2FcvX4P49em1a5C%2F2u86X1%2FBlifK2KUooGJ0QWzcXy9sYo3izSL2od3SMIE1upJy1Bltuj5KNP0ftwKiWsYdcSebVIAdXFVdXjDy4CuIiSyTF0ibkJRmc3A11Tz4N5Kuu%2F1h5oK04sZIEP%2FuPwwR%2BLo3u6eph%2FFfabBHjnSGocIw8T2iFvMw%2FamHwAY6pgHD5a1ga3EGyGnAOBQjNtMxzR7p6JwnZFa4S3b4%2Fu31xt1%2FVB73FTQv1mAKUXiQHmEiEr7nuB7CzjHmYyl72xOD2QmG%2FGIB%2FnK%2BUf0NuvPRc2VCy2Gm3dPsb6rT%2FXqWJ3wBi45otONlNxZ1ESZBgAJDcTIdAGS7yjTpho28meY%2Bq%2BGQrrt5S3s%2FydNxpCg7Dk6Nvs%2BHENP3nSYLRFl76h9oft4qF8Hn&X-Amz-Signature=79b1b797f86b58053eeb7a71cf483a050560433ca9694a80b169e84a205ef8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
