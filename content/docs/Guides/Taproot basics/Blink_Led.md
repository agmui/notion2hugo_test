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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSIWNX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrtKJ4LgdDfTM8S0Eh%2B2m0WUqzqcpUKIynOGGzO1zIwAiEAhMGfS5FFlep5t0c%2Bmy1%2BSeem0plXVybbeewSaJhZ%2FzUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPxRQxuPgeaJ7tBiCyrcA2dLOX8JEzOQrwJeeYwANEEeL8FfBcFUFnade82MZP4skJ%2FWLhlbRs1BnBI%2FMrU35ZaLXgU2j4UxIG6XQQ4JCbNwt1LxMMey15JPv05yxSjdjeMvqgPcMXESalUTLYBsGPZB9%2Bb2DL9P7sjW9Ms0PztRfawgU4Q2NEe4fxbOU0R4IgQ4GoOeTBKNXHRsy9cX5j4EirLy9pJUkCgPrhij05S6%2B9ff%2FNMIQLS5QvfoCsiqtpQQ4oWnc5%2Fuo46%2BlLIw19M7fFo2w3FfiJzJDeYL28%2Fw2gngg4E2TGQm0AywTuo0Zl3XXd06fMCgoZ1ap7Jluri%2BGDme%2F93q30oHd7GFSmyR%2BDvQc15X4ckUxDn5vDn52Z%2BtjD5kCb2QGFZZ%2FQjcUhTJNxYtYbtPCyujZ4c2j%2FcNZU7F0tgBiF%2BwDQPkCIQ10rX1Yl%2BAYjF95XPBH%2FBEgoDTxrtqgvImaBYRz0IcWKYKJlB0ottCYpVAaSC1G3zuvST2ehYVKOHQhM8yTaDlACpL4l8Vm5YNgkYV7iVdmmhv%2BImVFawSfi06M0Jo3xTCWECTw8H7NuQRcfS9ydHGx2ehom0xgIGVNRkqahBF5XZlyiVh8QBxPJgvrhcrbVKy5k7WP%2FdlIh2Tc206MPCVob4GOqUB8X%2BOSPJ5uap1fqMSOXyXem7xqrBw87syEj%2Bizio6PRGlDX2y8AKTPXDZcakGCfdCqaoZs3dwjMjmGN7%2B0woneQzWBeRdCkq9MyEFdlQuwPmrPJAusyCtgr5xSb6yvc9JpBYhWnHqYOWfFtk%2Ff77%2BwjwgTZOcx%2BitD4xz%2FtJvLNJeqRCkA0nrTFm1nDzVwGjpQbr%2FL%2BXdS%2BpwFOFkbrzVzakSnSAC&X-Amz-Signature=c978de4d4d45ded1ad318b3599990f3ac48e7b47d3013ebbb6cc0fa184b421c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNXRGY5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhFkAnZWATGjSCcjU2UMSDFaCotDGsTYBXNXSduo7PhAiBrC7Qw9mzKrMSjvfHF9YIR3kT9eCV%2BWVdKifY0mDzy5Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMLlFCDWl6BA3X3lLUKtwDlXtHNUGeWKuKeMi3bPcf%2BWZsm5aWxNB%2FSpVDtcBD1dRJNitIkfA4hMdi9D5pSH3DLWKm1kszKKiz4wc5E%2BXw3YZAB84mXl%2FquHPi96ov1NwaIpuVxnw0EFBlNn5AzTOJSNHzAfrPGhchtEr12HHZUZYwuxzujYrZC5gdSJabERi%2FOzucC4M8gDPkC5Yf4waok%2BI6XjzVss%2FvvZbfWfbxSUyktOP4QqIuIXA8XvkQ%2FThigl%2Ba%2FJzsR8QZM%2B3WnpgvOCDWBMI76xCUwOTJI%2FfaKtmOzfPRpyOYieI1OoZEWekgkYTfROtpCRM3HqqRa7o8RxKTaEQkFGoy37v6OZLA4S5e4j6ojGCspBNfOxh2%2F5V0V1WNJfgS8EolmgGcpvhAPtjkQnscF8MZQVsj%2FWYJBAx5Izic6oGVWW%2FRI7glnLdpdwUHyPM4GgLSlCEuRAftd8KUqU9jYUmk5H8fzikryfFnkLzuaFE%2BV0i0jeHuVGg8cCQqxPWnPsivyFoaFeJngJDmfK8bkODwfb%2BGz5bs8I1OBKVc0Cx6iV1lwJ2DdpIb2EE6xaIYpjtx%2BxdNbT5L07IeTO2EvKreU1kaE7jDBzwN8tvCvhTd4CH8RZ1ivJNhKvLZslMUbo9ekscw7ZWhvgY6pgE%2BpSno%2BK1OuC3hTPjWlkvX8O%2FVoMfQb44RF%2Ff6W4wHjVelZCyr2DzqmejHsX2vF6r8bMzgV3g8Uc1C9XFBQD%2BY9rwce%2FFEkvEG8Qm3EmEhsXW%2FY2LVDdoWByuhRIXZazoIJRYo7P%2F4LUleRxxBA5zyOdXiL8941eR76yDLIvhIivqYax2VuDXqCFNAFSmzbxweRtC0zftNmLC%2F3h54pBFkOjE8ETNE&X-Amz-Signature=1c45caaf28fa55b4e79c9853eac6b61f9e81dd86eeb7c231f8c9191e7ae10d98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
