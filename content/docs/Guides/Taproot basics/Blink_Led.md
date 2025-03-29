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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AQ7AYC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCfKQGwyN0kgyR2YpbUt22fF%2BbVKR9DGywHSpyfEcsCnAIhAJEcXrGpmG3RlA3YaM0AdXJiIlQ97ttOHIa6jGO8cYZxKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwUd%2FHcYxi0h5Lq0sq3ANOHmAwu19cde3QlFKnCdERrtebF8OpvTiLkbgVOilpHVBLMooaNuRKH8PyGkZ321hCAmDQtGNmSbU2A0eU8EbetNDtHCM6KTq1TI%2B1oXBlv%2F%2FGd4sramTVZhCQt%2BVw6CK%2B4cwyyzTewTyriKFRLBhIerGS7bHVqh9D8fw2IOg5B5OyuAMfrW40Jy5XDs0U%2FHSElYBVJlK3PJUwp0CZE44BAfIHBIuVGZDbFFGwe853lJ%2BGAdxADyl13pU%2FGv8x%2BcaLFWOExy7%2FzNED%2BS0Auoy8LwY7orMzGkYikocFHsm56DrgoLJe86rZSoO%2FP15Vt%2FsFLe9CxLlpikXqjcSPMA1gg8yQaSPNxn%2B%2BowNJHMpcbGU3k1YUadpkU2gMWCUwPF6ciIgYs2YszF4j%2BNNG8Qq7lxmRzXpf2zKvP40tJlxtRGPBENjOoCF%2FTcOWeOwKfsT8iovjvX1cR8LUDttALCxTrOQcsyRgm2obdmONKtDryNS%2FrvsUHerRxR%2BFM4aPCvcPdOsmA0qbLECLkUF%2B4KqUdPwVyF0e32U9usYb22u3KL8bjp6Rxf5WtzBsOoaB2zqTrca1mOc4cswCxO2v6xdEH6Q9ygLUDQYTC5uokpVO052dO9TBu0zbCWvi1jDJ4p6%2FBjqkAWH4aZlMctSHOkrG0vDkO54nXX6q6eRa2Biy1xbAdb6dOv8JBfh%2BGah5vCAYGN8%2FuOa1RV3nW8JeceVwEG8G%2B80OI0aMr0xGRVzrT5eCJ0PNPywPzsLWvvr01Z7wjz7beKwzfHyQ758A7ynhbytx9z1ARhwS432hbbh9V9iLsJuusd4v0dHh5%2BPq7WS3UBXP4QOBTWVlIvA1jZlGKFoZKKf8hIE4&X-Amz-Signature=49c2f1e1a19ed3bd307dd2eabf2cfe27f96c2c7014a52f9409f42204ab5b9eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAD3KZDV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICSv98hi7eLyMu2ngkPbn9wB4mIHnu7Bs5diu6HA6xCtAiEAzfrMgta9xI7Mn12ZORJc%2BtxGVxcfPa%2FKKT27P7uEC64q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAu007RYE5AWKS1b2CrcA7UBxUuApNhCNQb7HE40LNnkEH%2Fzcc0wvKlgBbxdnJ%2FWsJFHxWdQZH0KtW3tGFasEdnBnGCFhUaulcWXM9dbbtzsJ9CXJvfO9h4iEWAHqfWCFwCLz1Axt0K4voCQRf9Rn6arnuTGnWqWKvzxYqNdFJda8o0PSNGrU7IYTxhjutdc4NRZ9%2FZB52I9ehjAX0L%2BRO5guZUbXHpKOow3bung%2B6Js37R9FxLepoSBd7qY7z1X49GOtmcDa%2BkNJo%2FIZBGCNAr%2BzEySthOEhOLxpPc3ifGwZ7kHJGRIlz4XmKN3N3s7zCGkeSOftXgPDBq1ym%2FdLjCNxSmwHViyVt2m4UFmMzEaUNirshMtwK3SL%2FQ5pfTmrvZP2cnulb51E%2FoiPZ2MUYGoQU5UyorjtigRznzQ0hQHLbGrRjCoDb7oFFEh4L6uYGWRbOxS4NmMdZwhoeGOkKhO2%2Fqnt1SsCJaDCrlUrrNWEdXdn3E9oelT7qBmr%2F2WR5CPMomJT1PkBdQ%2BlI3uO3ZhbjmHdKO1FbOw6gPrje9ddlMF%2Frvwl%2FADtprinLf62yFdHhbahP82K2sFmOd3i0E1qQ2Z4NscI5MGP%2F3d4%2FX0NB6QYk00hHnox15ueLvfum0rvqZA56deH0CkMNPinr8GOqUBqIfQ%2FLxw%2F8TT7PPJ2w%2BigsHFGHpenjDgCIxcvND48lzpwnn%2Bo4RvwwqtTLZghgaMl0MIzFr3PrBfwAmxJlcSJDudSWgDrSLnfDM%2BVCq3itRDU595H0zAs8PQGecEKY5FiCg6qXyGH8g2YVqxxVfdnZ%2BvOpm2PblIRohdhZicI5wz9hIAxHn7vXl7M21Mj11fftWFLWEWgdUe5gqtyyu7VX%2Bjukam&X-Amz-Signature=43ac4bcf6a1c3a6cd7b8f22e6b7f0d2078d0e472d5395dbae4ccef0dea044e59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
