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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ESNAATE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi%2Bnpqtbd8Mou0aJnvbkN0NsRcAsJf%2FbQbbIZNZLQBowIhAP%2FOVrGJpec7kpAYsGQwaylXaPPJQcNQXCweJ5SgpJs2Kv8DCGEQABoMNjM3NDIzMTgzODA1Igy6puaVxKAbyuBVXxoq3AOSCUqDmbovB%2FHhHXheDLgNSeTd%2Fy8nis5NGcXpANasgFNah%2B1N3R5KTCajmUmD5NTK2vlinLJoP80sP%2FhCo9U7eiSYhn6XpW03O7G4XpTrZAXz6auXDDh4kAtQfK%2BkHWMGO8ngpaJb5BsrgSHSOV1mH6gwL1he2027qWX72qFwjZRA5B%2FQCqlv371%2BXW8o26bjf6US508K524Rr3MshN03Erkvr32lBefqVDSkBHrvrFkzVyap3t%2FesS5dwklOQCttSj96zWVpGQWWSpsXSAVX7sPq43n1xzdXFyRMpCbo992zP%2Fp%2BwPZxdQBw3fihB%2BaQ4fUZ0%2FT2s6223x%2BGWZgOZXAzzptViSGjxUZBPNZmixR%2F2HZHysq20J35TgtY6NW0FJJu9Y8GO2fYxlSIp0%2BEvtbWh91QOs13hXSyHoaR9zdEX0QhAa2UDojjUZNVZenhgNhHg1FRmEuY42S5jKY1D2Cr9aEWO%2FCxgMtHc874aK1T2ZxS83MPVSq5BOD4RR53B7ZPOdqPFxaOoMXe7Q%2BuHXIg2P%2BFNUGjVNI%2BSC8ibYuoO8yZiZ1rNL%2FZWXYw7RURequjadsE1Par%2BA4ADtL38x6u%2FHvHvjRKEbkPRQqq0tdcwrWEQ%2FhcZlxOUTDPoYzCBjqkAUSG%2FbQr2rXfVEg5RMv0iHjziuWNwpYckxLmg47ZLOs9ARtnTY2HAq560Q%2FyPLbmfaULw9dYLCVBKaz56h7%2FBlMoKeD0C70HGpvzmZOSuBPSyf7JKbZNRB1%2FSQiqYyH0pgC3zCN%2B1oHtXgyXeacgLplDyisDtTBaZpRRfXvyQRq%2FJGLgxlaITsBT%2BU0WX8fvjgx4oE%2F6g5u74drCC9Ma2TexSWdL&X-Amz-Signature=922a547630576fcfcd77e698a0c68e9866e68eeb32018339495d8de95f28c712&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CF3VJ4V%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWGyyhTiOn50lXDKuKG7Wnl625HfXOjD66lG%2BdaC6gQAiEAkyf9sC4m8GOVX81JMKkn47TDG8LrVHCtxXHo%2BKfZTiUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDO5B2Tu%2Bz3P%2FROKatCrcA0%2FADAGWhfUlfMuPFQ9k4nowvpMb%2BATajpkjwgxw8dIFQw1%2F%2FahyJel%2BSUw08xoLA2WVTvTYf3jDZmIXoJUayIfuV3e%2FaORTQDEO%2BDT2c2Db9O9%2FWdw3PtctSxa8363NgR2Q2vlF7Ilu8j%2BZwl1Ti%2BlASeV7mo5Ov2Fuzx9HxEw2LXxy%2F1wc0Rgkq%2FQggaQ3hbNv%2B21qG6ZmOFW9jq0uRSSktdTJo2tF0Bh7X3Jp%2FGhWTYbaqrUIRU%2FNjn1ajQSwrb99T9PdWagHRXlQIqxl58yhnv8MKm6ZQkH2V5hvtQugz5JynUhBz1b3cPuK4Ick3kM5VyEDRqNyu5V3YSs7UbmJhQYvAEJXDNK%2FmEYXyr9SiX1bAEbhGRAqnYdhGGtwegulygjLN9XRwpg7EzusGdfMzjsj2etjiKKHQhmyjToL5U9Sva%2FsK1I6NKNYlrBqrDPbTpy6SZ1S7xKmTL7q0GzBIdJt6qpbjhMb4K%2BV4n%2FjwbnqXk9r3zCzCI%2B8%2FnFPgrCt1IS9VcXYkKF1uJnbuerA7G%2Bnm2aOPj782ck1R%2BgTXb8wnw7ilYEFe3yaVVO%2BG66GsBP9LzKfb5iNWRJo68RYrglT16kTJ0g9gTsMR%2FAVihlyGFgfRmNnhV3dMM2hjMIGOqUBUhuqDWNiXJOLdmO0MVb%2FVtTckzxRwo4PpfMKmmD1LKU%2F%2BZq4INHsxOGTNenwx%2Fr4IywGA5eiv4cdWg%2FHYh5223IBXG8PHHR%2BrStEp%2B9AY6rbaI5nhc6a7YNnJqBfkb1OQnYecylu9XEkpiEPB0kr012kh3aFKj4eS0eEkyTwJr0oo%2BA4%2BErVFLRLaTQHVsPpPX6KAsxYsSoVsDrPSsFj7Zv6fkk2&X-Amz-Signature=a3c840db53f94dba6c3dd138496a4f75c00d4ee4e50ecbb19f9a5fb1de26485d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
