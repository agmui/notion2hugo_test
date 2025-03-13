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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KIFK4MI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDJcJSomZhjpMD%2F7bGYHhzYQcr7ivRoPNPlEfl1Rs2kwIgE%2BJOXGCcnsTRwcokk5eMhVsFycsfOf52CBHilDe4NEMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZ3lzXYusUSm2kHNCrcAyI5HLfoHYIPNKtCP93TkFaIw%2Fz5WGJswkMURjafcHECBYdgBfeT3YubZu21bgHFnNS03ejhw7B3U2JTepbIsXRzUqF%2FI4I7WL9aIoF1nAJ1SStbO92Ea5vyEcWQqoOZc7%2FsKaTSYA18%2F2MF9aYPM5rtRRsx2aNWQGZB%2FySEFB%2BggtFT5LENvuwWnBn%2B%2FIlOdKeMDJlcLFiaalkgoaKt4ZCnRGJiCLKlQMHezI9FC6EBk%2BpzsOLEXfFIelMbo7Kfsyw4zSgh9AsMnP8edmyaJAmEVN3EBvH0ErUqK4jpOpkq5Bx%2F1hyDbuPQauycsXLArbedvQ56wpWkO%2FlDE5ekxPLM81R4%2FKAvxJbYKd53GfKSsCurU%2BXfLCTaSw3knrVIYzUgEAvTL1faV32moYaWaSR%2BUBX%2B2A0B28hy2C3pQAnomgH3PLR3BZBdVJAAxSE%2FHbJ6CadeKc8h9f5R%2BWDFPInzovoxK7gFF2mjIub6rFE2JS4p%2BUGPYxOj47tIV5wxf3W0MKAOp1V%2BBS4yrULzLjWdl6Kv%2BazxpHh5Q5KRXuEFhnBWFLCSrokyeQ6QdIMwFuxboB%2BB4yYynlfQVkbTCIXAl3yUjtK%2FglFUo6LgcY5G6wZ5wEgqMMo%2BO62%2FMLmFyr4GOqUB7tIge3pYNqiRZYwOoNFmah3Y7U3sAxJa%2Fl5pYOwU%2BE0718wzVsej0RWb9nMRrFfJ%2BamsSxLbGid%2F8fGMckCTYnFGi8Dv8lcejZ3PMT%2FK8EhE2ao7bPoi%2Fbx%2FX5u%2FauopnFpivRZ1Q9IwGYIw1zUjnu3SFB7tS%2FEG%2Bh%2BDrnVVkF22KahdaZDEUAeejclWPx1sul5uhZzbrwVhOLbkDTGlCwdRreAj&X-Amz-Signature=35b01ac45acae93a54347e6e00b9df7e5c13b1b27ae5ea5d4d2c027e5e8aa366&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQCF26H%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDphN7rSAOXe5fXpH9Yk7WW6H3WOykwZ6%2BP9vzZTG8WggIgCV%2FpDDW5FRWFg1b5h5RIamh8XZvePQIP%2BVfWZDRbSMQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZBR5ltB96OCSbB9yrcAxwBHuGyjCGMxmU3rUWlts60PJSl4M6xb30Hym837jRabMMww%2BQRtkLdHs23DTeUWBHRHHFi2MR7lDvxgJLhleKb%2BdLM2OAl3SPGod8dEvRZyXdKEapuzBOemXolqFVV1rMhX%2FIz%2BkPllCX%2FqogHakekQrQy5Qvg8YrkXQCfAeb7m2D3rRnSjXnCMDSYRSFjjKfEJuZ5eFxSFy%2BrC4G9e5Z0eDJRAo3v23buJqmkVBkeO7jDKFtkiJfDRbJ43mH84U4NKEergPnOwrOsj42dSCFAQcAjbLBTVaE6Az6cJE99UXy6TK2ec%2BLPao2h8K9JO18kyPzbqY%2FPfBprdio0Cdsvfyhg5OchhXlRmU7e9RutUngizWhrECQN3LyCLIy3hSbyR5BKjP8KjiRbrufg0GsNy6wqSieZNzY%2FzlM9XVo%2BnyrNwmHBcmHogqSvL0G%2BRliki1bpQJKXuZ3EfxwbT32%2BW1vpXJYQz0iyACXT9eHzE47mwI7sKJ08XCy5avKngKMEfzgh9YOwunZ%2FZK%2F2%2FcWDevdTDgQnimixfhEPOcOVXihYjzp10kcjnvKDOT4yNKB3FqquN%2BsNrBUdVc63O1mt3U%2FQgkVrN6sA8Sb%2BuYvLxxjOesQHUakNV4WgMJCFyr4GOqUB%2FRSN8vJjlRyetjFq3%2FsDzXibPpC6hJGwV7IG5M2joCvWjAp4EQoTiefe2FepMJRsAbN6C2M3dOpiD3lXW7DBZdLaQqlD4GyIO%2F6JbbBkxO%2BvnEjhjnbSfgZiXDsiiF3nuplZfdap4nhCOzUZREk5d9QaGhKhuacnCxIqu8dUUx8xgilFEiaLfHmE90GE4zO%2FxryUW8a2v9sZ3RlcfW8rBx2s504E&X-Amz-Signature=915ce955cb94eba08b1795540e16c4853a5d60a482a3f14db1e408494f4ae8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
