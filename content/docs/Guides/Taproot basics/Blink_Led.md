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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIT4BFI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA2hKIzzEWSzHikw4yAdGbvIUUkLGdAzVjZl5SdkkypAiEA4YqNJfONHpX86ejWZGvLpjTr6yGIEUSWiP3D26pjr3Uq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLYQkwOeuxVCnSaQeircA7s8M7TxkHiB2AhNxAKFuTEA0U44bJhyGAeM2oIV%2FqNFK6OgaSIj0IX7kcnnlbLtSdwh5NM%2BkFhAAaRDyy30AtH3Vb6SFt1gyeYsyErbR4a72oK%2B6Tp1wlvw%2FQDTqUTrXk6Ppptpy2TomU3P9FMTaLhpLfenIZ6M7h2xfp2%2BPsy3Lv248c3vQ41r9B%2F%2BUHIxJ%2Fq7KteLp%2B0xzZQLiWkIUN7iABU2caoVGVouw2S0A0EgQoAgLZYsK%2FhfeZQg4q3IiVsuBuvTXpaSOkfo5CIQpAIietB73BBqbNr0JZV0oxogKvCkxSiHmR5vKwdit3QeUBf4HTPO2UIJFNqvluAyrney0gR8IA4LNr2ThN%2B8J8dxsfslD5vuwUjA8WYSWg3H7wBrKdbv1WQAKPQE1Ja12Nlh3qJP0MrbSeDMrA24N0zL%2Fap5%2FVsCZo%2Fjeohx2mQlapyPHOxkTUnoAamMO9ykUAq0C0HF9UoZ36%2FQTayE%2BI3CZejhwq%2BajUi%2Fz9ExFXxX%2BlYahrhXQuMlqqrgTXgq1dtnFXyEtY5SxyriNoto2lT6pjYvWWl0hgEWxlE%2Fm71DTn%2F34UcRnaTU5AknDQRKoG3hO2Nf2nz2o0JmET%2FUSjcA1h1uzPOcNL%2B90h%2B%2FMKSWz8MGOqUB%2BY2IM9KEeOP2xJzAbQ3XVDtKq30suAVbpCUz%2FbgUvbyXA%2F%2FWa4OGO%2FocBM52r58Kno%2FqCD%2B0vHeFgY%2Bo0%2FAxqXEqXs2jinS1gsmw2QxaUJlCcCgODuWpNBjwICIrykYSh3Emv9eMAmZ%2Bdp2XJxXXR65PAKUGbYLg2GkZ%2FsFX%2Fdj6rIW7YtLfLAl5kWdKr2YTdHovr9GphXMfF2f4s5oxZqojwLjV&X-Amz-Signature=d7b0b30b315f84841f59613bc413cfadccf3670106eabf977259229f485c0130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYTP2JQP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5vPSLDBof5m07OSi2Rr30alG%2FfOAxFIybI8ZODC8B8AiAK9XbprYhFlL36TL4vORhL9rijAcGrVPtLSgXczi9xfCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMQmsmRMk0nSKppY6DKtwDQ3eo%2ByUR85vVp27fEMGg0%2FTm1%2FVijD%2FyNSFYJnGWm2KYR6Km%2FNELuYkBdFvNZZVf9FXejH%2F0lH8qsN9jMu2yjZbtdDaQuDLzf9cfHtH2UCAwy3FSqTbizzux%2B08WC2CaW%2FezS5zmfYi20rimgpCNYZQ4CAPeWZeSHQWEDQIH52iq9ciUxPMMXB8%2FWzNglj37Rn3T%2BnChzRQPVRQ8fHsDiPJmFxxjK88Fcus23O9ZHWeV7mkCirQ7LoaTN0LzkCEzoHHJj7UxaNa2L7uoVRJWw5hq6uIai5G7AOi48boE1Rf3X5L%2F%2BFK2u%2BVbNZjygKmBMFfPVZgUwb3JGSf2zd%2F%2FixguldIZli%2BqcpobGKKfcTLOvUTKxoXqlej5PpmNXlunKff%2FijEZHlyWQJ161GlhYCVmV08XnZ9LcNuu3WZEOzSIXfCuZ1pP4NR4SZxCtWTTYQuGIP58UGBNUPtMJIpL4VMON4R%2Fe2fcwmuttI1meHLdbMoJ5CLxj8d7wOSI%2F0j9v9kjNu2KMZmvSClsCyOTETXiXRngYYH9JKnMpuv4a%2FPpX%2Fs7ue3hxkcFfuwdBdIU0rcBQmJEDSMn%2F2bp8DO%2B5PyrlUvOIFiHe4SVJEl6%2FEV57S%2FgBOlEFCvxgDswjJbPwwY6pgEgp%2F2lP0RWKtc7MZYEI2c5Yf5vTlHeV%2BLkYw1yNxbvxVJEY5tlTXgknXFOHwUym3FgKjHagBfx1m9Ke3%2FXyGkjviqfA6A9cZVf1sGZ0blGXR3j%2BSJO8a8YFwb0lZJTNCFVXVRq7WjYXBn%2BwhFycTfQaeEcQcqpstqgDvPsr0NyfYAKJGCJOu2qk%2FChiwWwHjVUFcmXJ1ZzaZo0VSbJKMfj2WXsBoi8&X-Amz-Signature=2fa51c69ace83bbd75ca08527917988fe510ac101449b044697c9385946871d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
