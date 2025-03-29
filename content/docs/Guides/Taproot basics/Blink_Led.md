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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORP4XDX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDqABTpP8vxr9qMXOvl0H8SA8ZDADXYy%2FTe8YuF3txEJAIgZq9IMe7dLX7CmJS%2Bqk8yyDKVmo231Jp1C9acID8asYwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNASpH4IHVLi%2FQaP1CrcAzw6qkBGD%2FyqlECPFVigzkjHKPF8qKx75YzcXsDShVExdw9e7m5CY5N2Kvol6a1BNE%2FkCVvCzSF6P7yeHaPrjP%2FRaOjkeZFJaK5fyPyCQToCF%2BsBBOE96P%2F9a4W4Ra0vliBtlJYq6FmSt5E7zLSE1tDz%2BHf3WAhJEVMnqsrUCJwqHZnZCN1nCPPryIzA%2BRZ5CyAbN68%2FMsRsS2%2FaBeyTrSgoXKdczPqtP4xXs0IY55kmmc2c7hi4umvEYG9sSLlI4PA83UTsGPn9hiJEaeHxNLIY32iqlO4DlXB1hd5c5EULeMr41M7yy5%2BDCHIhMBUHltcoT%2F55SHdcCU9Ic%2F9ksJ8p1GAtYMd8ZtZl6wnIbWzPVsGV4%2BH9kiUdwWWjIT2d%2BYcehsKpyu71hZ9wEMb8xjLITpRyOr%2BUh2W2LpC%2FLKu1xWMSMPKFoXOWyi1blMw1L7YaDXz4HlG4mtwJA0Hg8haMj5qtk2d4jm%2B8ICyG1sEUGQTdlIJ8J6972c64HF5HmDvF31wQhSdjJDVWXBhmII5ThYeHtj%2Bq0VTsN1oEJn2qQ7M2Op9bYXBuZSWH6Wc5taoLFSCsZH3NCIpo2VLSHSYne16t%2BAn1uZLeUHAPtepOL92RKBtvcGDWpoJKMKrcob8GOqUB6jNk4kTQctWoi5kzHIFfZU0jA8MJamzK1HSbFe%2F%2FUX6VmgDt%2Bfs3hY69vJ9OdsTxE5VOVSVlzyhV2nUFUlycN%2F7tCOwGP2mSNFA3Ak6m4QJWIcszOkw4epLq3qB%2FQVgf8K1peUcM%2Be%2FBzUOgI5fsErPcpXJhf%2BQfIjzZXsXUL9aj9R5yqSGntKGKOWWzgFYkmiggyyuZFiCmypkBo6za%2BkbJdzRn&X-Amz-Signature=d72f62162044bf065c09b68f66726547b598887c2c4ac2644b0354bead28dea6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMY6WFCA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHVQtfjBfObCR1sgq3%2BjQZgnt9fJ1vayhdDyGWrs%2FDUZAiEAohCESvS54ecJeVc2H5ILPO1X%2FuGTM9UDLkShw%2F23xaQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJV8oyMNrCVQIhXyrSrcA98%2BTy4YAHDQCCY2qfPbHM%2FsG7xMxE%2BFwuZ%2FlH2OTxJNJ6nH78KGcqWpa2X9K8QVVsyojIOcfeqNhotMS3V4VrySZlh2GDy9zIcB45w6OVfj%2BYr%2FKr2En0jkynbqVoIKNdSOYRL1qnTO%2BX49xI4a4haUNQQp3otiD2WI11hUqu52b7vTpoK9mwXo4rOlENWJF8lReHQNXmRDql3yH9d19jXUnaMb9CYj37NSeErf%2FSDkNTzNWO668pfjst8u%2BUUQGl%2FaJn2GZkapAtcfUS9BFqgA1kutHrS6XX82z58Al7nbFYPescpMwTj8lgvSV3PZeXcmp00yf%2FrTdnAxxvq5PZLOm8kUnK65FccENzngMRFKeYtWC2ROpEtmoYC1qtfzz2IkeKVExRBZfPQMaOipAyb4D6M67bZ13Ueg7szZja6SQaYJvrA8QYOVA5cSmRaVScbgHx8%2F5%2FROYWKopSueYYO1o2rPdbVNWf6ELN5gE40%2FFEXbvlbDSl0oVWmctaF4uHe2qC2RJitzmXxXbzxJZucOXIFJMvj3NW6G6GsB2M%2FMn1xyPL82d2M0y9tt6I3iSFKT9Ng9p4WqpxFxPU2BzE79KG2Lqpm4oJI4YBKABNQGrzcPBmmc0kKqpyPrMO7bob8GOqUB2ACoc0yH33cX1RRlB1v2QUpVkPuQybUyPd1%2BGZuXAXYXkNPA82tc62p2yt%2Bz0sW2bLPVgXUwQLlGA2E%2B2VXhaWm14dk%2Bt1ccAFok%2FOejSeBKsUEKe4EyKTmvGwl1wkax0NIK1xDIY9b%2FgT49%2F2yJkAuM0%2F97hObJMVP7lrlSg0a5K6RjBZi4onQ%2FehlXFK6s3VQARQjdBmyMbfA%2BSTAbxSNBfyj6&X-Amz-Signature=c8ed2185f0bc400f1f1a463c26505e96caf84400ca356d843f5d04e13d33ca12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
