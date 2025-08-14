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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAYGYQ2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJy%2FAx48OFxNI5tR%2FSlzAH4Fl30HAua%2BjRwZxjdRj%2FgAiEAolM9j7XJEa0WHBfxohJWMLKUJgfu86aepme%2FQlsNgx4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMkm9QoY612%2B3cmkySrcA9gxG5xLFKI2uxYy1KWRVtu1HjJ8Yl8vR8eEjE%2F6PdUbSb54J9ZGv118HUZgkOzqichbZcUCb3TqWGoIMsBjaOarYKgRxVyYPbN0xyYCHJ7rOleJEA%2FdoaVPcd7TLKOnkGGhhiuCRVHsP%2FHqOyVODlvP%2FsTJ4FLfvKe18g75qKLf3lp0qqCAStOiotV5xh43tA3N9qmZeF2S35x0C0FiuWfVjWBp5fjR%2FfNMR7NQRePIEXZ3Z4ANR06y%2FvI3anBuU4G4BjjIUl8fixjDBp5nSBhuFnQPKXXpHmMPkUljywt5qRL5omH2CV2bKs1ve90nOvpE%2BMQe5OkZBGCi%2BFJMPMtqq2xtj54tm6et61Set0kvuMDlXwGhBg3yZ2yF9ZcPchPKsOpz9zN3EN5czroYQhDatPQkgTmU22klEmkjedy0IvOIzelx23KKrZqA70aTwP%2FPhhScl4Hj9ibd4YfvG40Ei9u%2FGaxjuT3MZDhYfFZYwqF1s0MzWuvoB%2BP3FT4UMEzZ5sluYQuZHnwb8kHphhpSArxUelvlMdDWWPtRO3TTfIi1BR099CU1zE67U43jEZb3Fbsd3LvFXX5HQWd%2BmPzQQFIYsciHHzkyJIaYCHPcbPLCT5M0ZIU0xmV1MP%2BL9cQGOqUB8nWACoxrxpeAeWQvTv%2Bxd1PLsXoAnGvnHSf1B7NGDc4g0tmNiVicOvytq%2FpjJHZpKtrnngxVUOAdWexwO2QfxEcN4rH1bJNrD2t7waO%2BNbnkWJj%2FW5Sej%2FPTiJXoFbhA5VpfGLplWtZmiBAeCV3dEvziCoyhk1G18r3%2BQepzCG8eQX5l1lMDakIUMt7KsXESCsXVONcJmz%2BYpj7e91t4%2Bk%2BqYaP5&X-Amz-Signature=e5b1d0f6d8a3cfacf0e7a24988e557ef410656f67d955cf5b17f30e43a84b462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6OO6GG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKuGll%2FzDN8MDhj9JXC3HLBx%2Bkbs8%2Fame6YIoZYCpdAiEAuP%2BIiakm68dn6gOj6Qxno8IQUdb33S42f47ytBi0sH4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMo3zgueQgBn6KbZOircA%2BVPpO57G5iEqatZFXS2qButFaZWHXGLp1aEWfrpYd3pYgvKtbso2fT91csDmLooNcUjxtS%2F1YCuzCy3IOI2Iu%2BWaaHdYhtru9z0iYqCM%2BSNoOnL2h2qDNWxERbLb7f%2FwfJCzMXLOn5hy0QP3MLH%2FkB6stZwNOhh6wYtrUtwWl0foNO36gEIXt7UGWAeVLgB57isAYrtaQD%2BitBZ%2FatkGeC6KvGEtLawrDq1XklEQfya%2FE0x9f5CjPM2dRRrwohWAr%2FM1D1xGDT8vgbT6abVwaRkq45Pn9fQi%2B54nj%2BLOVFrhAg%2F0cJx2ZEg3AYD3%2FDC%2BlBdz5HP71wKmd6Zmt6oWO2EMwU43bjUtjWhzLxl3QdAq3L7FwWscluaMGN4RCzFrScTAuMj%2FI3CVaeTsk1lcuOfy77Vm30n85bVHSKDWMAfqEeGiHV6z1RMSsau7%2BhTT6Ts3k9AEk%2FKCul3mYjjoRR6NmIBn0khev1yOta%2BKphrLQb7NhfEK5tzxnSARQLLwv2CBv9LJIE%2BzOm6DFdNYQBfu%2Fi%2FQNOyS3J%2BbkjgNs4ZlSrtjnf5n40V6oIdsZRnLtAjLA3uyO2u%2FGGD6wRYwkTxA0DKlRqCzmF%2FZZnMyUv3A8UWoBN7qhfaLssbMJeM9cQGOqUB407GLeEjIuVWUozcTDegQvYte4QzFyB8i0CGxlwwy5M71CC%2FEydcR%2BNC%2FDdhkFU4HVNnPFh%2FGqy4NF8lLCrcxmTQt9tE3gHdBENbXd3cd%2F7OgL9CZlNyyaLaN%2FO1e22x%2FA1WVZN%2Bemi%2F38dD88I6BZrCthSSQUQO0noZc9Y00GH54rXqQkTJhzPclgu1oHE1HpuQInN6UXfK%2BBmJtly2s%2FqVutOj&X-Amz-Signature=bdc37b648d71b061bee40280fa6c2c90201e04904980fc28e4f919af9c474f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
