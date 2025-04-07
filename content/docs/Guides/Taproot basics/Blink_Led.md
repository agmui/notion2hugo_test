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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QUD2E6U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA63DAFX%2FnA5z2vul9nFMqyCN%2FxwRSiqK96x4xJ1a%2B5XAiEAsSjdHSiteTrzAULpw5mEWJ1MDUoWsnqkZv8S5%2B0fotoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvxellD%2F4O0B%2BUe%2FyrcA3UvHDlIIUWR%2Bcn2ldPKCu%2BF0L6JgbcLVip3T%2F%2BjlZeLmy8hKt7zxaNLLEXKM%2Bc9GY5KaJqunl%2FdUGalgUlbrbPhaH1JkQtlAHecGfcxF8etSdg7mXrBuVJy9FnV%2BhqlRomWX5t4VjBYAaaBamc%2B9FPmWxixa0ARP0Sh4qRCff5F9tQZ0N2O%2BIOfOwN%2Bsy2aBDg%2BoJn97KloTVVxs7foHiD7TOJ10TY99N%2B0QrCREdEt4y2995%2Fh89BOlOKTrdz2oxHUq3eB67Pwz45qDDUPPo2PaeakaVdtir6%2F1oK8BjIA1oRn2eyCSy1xFE4nBLmgIBfE59HocEhis%2FEydiZGTh43veecIBwtaLFJUUUNmUKdyIhFNW1OJzNniZVSN5wpmCd%2FCG4iyfk%2BCdwOP2MrA3kyur%2Bk8XjG69GOJOb0zDiqdkvackkuTx%2FtHNAOMRB08m9D8%2BG1UKLwvXGdN0XRsiVYvl08gHp8db0u7nFYN23BEqLKSoqRPVCVt3JntYcq1%2BJMHsw51xbIeMfUuEDmW1SkxqhPWKOrIu%2BprJp00xivG4iGgzemT5OCx9O%2F1CZ7b4sYf2VxtZP7%2BXbdW6Nm5IzVHrjsfUp5B0k9yUHV1iSWmoMKkuMYobxGxkr5MN%2B2z78GOqUBxL70StMVAmOieSHiobYm87gJ28hQ0%2BAMRSc15F0nXqO3Wkm%2F7dH2S6u63jHC%2BbMkXW0rqs36ZqnYrNy7HO5NPqr%2Fnmht6PuXKsmO04Bujm4yfqrPrNHu4FB6AZrvIwaafjteFj5ae5CTr4QP2PV5g2Rs8hsW5s6uwmro5F%2BwBfRSc4xAsM8avjGDrsiMoNxTtS%2BHZ4Z%2FClUHswfCxd6ImvFM%2Bnh3&X-Amz-Signature=21a8fbfff6bb38f8fde36466c07600cda5152ed5b8be042bd9fab5f121b1d50a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXAGZEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwsnjFxqHcc3fjtyfRN1TY%2B0I7I12QP%2BZJ3ZRH6Y3PCAiBQwCuac%2Fk9YIoKirOaH5C8yd41PnhieeSt8xls9ZPQuCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMRgcMX%2FokUVJoD%2FiyKtwDbgyR%2B9dBf2RsFGA%2BSICovpoZXML%2B2UKhzdNhxStciT8OKsUMA%2B2QIIUnJDvlXlgFrKpYkZirrxHPG1DZyauqkVDOx3R9utLRBsZbc%2F2TnwoQXkrJZmHbIcBZkyJ%2BXdupWIzaitFXJdAQLjeAhPzVPHgjxtH7TJwb5f3iTH%2FZzDhCTWwcHs%2F3r8oFO2nbTsj2TGrX2OkGw%2BsvasQZNJeDfYi4Oj%2FVattfqn2qoIa62tMH7xwHJX5N5zvUrOxv36kU2m6Fjd%2BmNkvGB1H5%2BHMkZ%2FWydKOIjKpCNr3PM79bUn0Qw7VHMlE2PcdIo0HbwRK1k%2B9lFA4A0XGELX3gzdpNyPsFqXkhqgjgDROuDZ5l72ubJzyL11grVKVo1iwtcK6xrEq%2BNhMGIIsW3BQ8v%2BsfJ2PiJYXckpQlGLwhyhaYPDZEjb9hvjiH4kAUclGOGxSdfz1a%2B0TT4b1xoXBb73BKhYzrlMKzi6BABE%2BAhGnpCGeDRzBj%2F3ADUC1NeQOqy4BUiAkA3GQR5LQ5jfnDRgMEMpJHXnOTyPzQcmx0XdJEskXwN7FiFZia%2FIvy1HvRDcdWLxRVz7it8TQ5I44ht0lsfjG0AbAUrKjwOTeVZUhIOH0aFSCl%2BtATBDid0rQwrLfPvwY6pgHeeadWUKpn80VXrKBnjD6ZoCqMILkkiMeRoAncvOEUZP9By4PgUGkPpi3HLHkFE9QUwf66mtiT9fuTR0NmKLvvcmDHsDZ7kj2GBOMoJ%2BHOH%2FkE8%2BnHN5xtSD%2Fu7zwemgJz0QvJTjqkcl0RkPkG1pARoN1TbpFFpzlwYbYpAshLADx3MGklUF7Uv2k0qGDK5SubeNO8Nr49qF4ihdyhsgKoPpaHlhOf&X-Amz-Signature=1557a41bc89561a04cc9d061aa8a6d46eb6dca85b6b9fb1eed86f3535b95609c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
