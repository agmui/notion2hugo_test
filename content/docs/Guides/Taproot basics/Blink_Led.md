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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCJ2I4G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDvkHwi3ApWDRX7dtBpfBv0je5SaENYF5ClkQOCIvl%2F3AiBVisOP7Xi02xnMdMMBltZPUmK8P2e4nHzGqScA3AMboyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMctnKwKqgl%2BSSWHv%2BKtwDVE9Eo0C8zoRlK0Ix5ZiMYD5VCctP9dX9w7MTMOuNJMLrLxAl%2F710MYFlIKs1DBxuNleFHv9Bq8KJkaBFxlioI560hlNn2r2eEkWqFcfbJeOsREJwCNpQRMc2Xt7sNp3SIMDFs9WCuzhddmUK3gpm3D4%2FAbnQvhy9cixcX5DhRX428AuJtriPSheg1OtMNH%2FUmN46Mb6yQMJpfqTwn8TzG%2BUi5pBE7veyGNgCeZjyFl6ZC3k4V1EuzdFugWNfflbPDbtz1gEXLxh%2Ff5vY2loxW0vBLWFMPCjh%2FHQE%2F6hxNlHNONJKhV%2Firjwx6qIkHiuQ7nY2jvddJgiZSuA%2Fu4HkNTDhXoUjTvkpvMrEbhJIMvCNuFzG9YRqZ6TDVVqodDFhFhS1a8MdjoaD56y%2BEbp3JuMP9TLJoMps0loVchhA1EWvZdqVfOy0YcOJwHWdtEyXAgloAZ9uuXfOw5m%2F2i0%2BMwhUptP4x4E0q1bUPLfUYmrwtwEajyGwCM4axI6YdeNn%2F%2BYhd08wfU9WE0hbAL2aTveUGo7hy7GMBrrdp1B9dhcGSb95dtDy3jd%2B6jFfAkAoqxXxhvyx3dTIoHFKskmpcFxxJNMuZqUSucw7n%2BzoGPJN5ECLUcibkMBb1NswycnTxAY6pgGjON8h%2FGc1SSufuF2T1nTJzkuyZrgohrbo5cGQWVURIA%2FAnzWh6eIiQ2huq2dcgAGhDeiWjZZYDJLYE9T5i36OBCnOpK2CAp9XjcP2ybKhQ9rgVItPucIY1vGQSQjpeuLc10pCH1K8nPi6vozGpU4de8qPbbwMCIGmFEq06u5LtIcAEpjKEE59AdNuAnV3zkV%2BQ0uws4KIF6ZqehHsahpoLwZVeBQx&X-Amz-Signature=f15773c31d34a4b2db2cc38f0af29867a6800ca26b97d4072d9e1ac42f12a839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBPFCNQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDXrDF%2FGd9ZmfwE722Bkh2VIbSBzsgVTOrZGZiHh7d0tgIgJ98UDscF%2BDaHQnSao4HygFLPHVn811F7NxzVOFIIFxcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKT%2BOhIzfypECS78ircAyAXSp2bNLfHgye%2FAwzMC%2B8Y6VTPZ4pgbBSCD%2BcfCbQMfCIJ%2FjiI1hD3yCkLv9O6ENGpCKosoO%2FKVn8wyLxiyUL6xHy9dIV9wpnGXP%2Fw1XvVBl5MTfu0ny3x8hqm2k6uUEvLXp3HTvv%2FzdIziggmPqZA5SwAwc1rj899bKQ1zpTaKV7%2F64FifAZmZ3t0XY7f9%2BYZjd%2FnZGMkdco%2FlnCR7MFAtjMSa5ZEJLfDRMQ7gu9rhMfpMrEkei5iNY6CYR76oUeZJfzzkrSQHif%2B28Na2xiaSdV0Bh8QXvkYnOgHmrtOW263Rlv3O5S2ZLn0b%2BDPRSEIq5UcrLCHZIv6q6b4Fj7Tq8ztZPCevhVqjKRO%2BonXdzoThBgGaNkyE2%2BtD%2BHDEW%2BmHCXt4N0%2F2yvhf639Ih9SyZnSON%2BFNvqdXGoJEmWt4LHUbm%2F%2FUMZxKeRS1x2GVLxr%2FQKyfPjHXZf9SdvCg5xk7vGbLigAqtRaLmdqZz0ytPiAcd%2FVnlcTSCFpruARAeRV2l8JRuIg%2FejogNEhwPooCu7UKSX8vyduECEkldEtfe1mdxPeiie1bVCXY2fWBxjPAe9rtkV9157vNIIo%2FwCZtZsGcv2IiBFmqhGOwxy9daWfhcGHZvNrOyw%2BMJPK08QGOqUBkxQcx12pyewT3B7naILodDmR5MRmhdj1mLAWskY3jNToKPXRwnlJRLoVjbXtzXaPYICwnq9h6yyzIMUszDdUl%2BYR9aKBkdAvTzNHMlFLr7TmOnvjUNhU0DmmCRLrnzEi8eF3nfFwEYHsW5lF06OpTvY2LwrKyeVHV1uxn5rEm%2FwHReUduDKmv3khTaolMQ9pnQIbuBvmUNLAZ55TKQsVotpvoavm&X-Amz-Signature=4bb6c383e1c9aff8df5207d259fed6c9112cd23d3c349f9b0990a7dfc44413dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
