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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2GSKSI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDi%2B6gVqZSlmrVXgcDcanhyf%2FN9o3%2BiMmRBOPP7P7CY9gIgQ8pCw%2B8%2BGhJEd75y875NKCX%2FdGzdfxQ6knTTOKy71uEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPN64fJx7Ce8CcwZ%2BSrcA%2Bbhwe0fH3FY8sVPXkRo227C1F5AzrZV%2BjU3xEm%2B%2BMi7u9Hjgg9Yaqr55Sj1REQnjr2wNSxVrd6aGqyTCJ4geRS9DE66d2eWGHxQUuPMDEEaOwtpTtU2y5H3yQXMYMGIM7lsmpN4iUW3JFT3nT9evm%2FThT64EmHEo3MyE6IpqonO6hByDZxfiGECX3bdDhgn%2BzQEzZpuV8V2hGSxWRc8by3WU676vENujw%2BEK%2BM%2FIwFy%2F0OggWaNt6MJC%2BnBh8yOuoNtLSw2vbDR1vTQ1T7gdmxTjemwiyvavgFgc9JOBn%2FsilqmwcGvHok0d6pQ38UP4hw2kMiaVo0vFWt1h49xJhOL%2FT89kCvD%2FG3PMkgzLmxptZMZXjSu03iiMFS8mZoZdRHWevqn7H1AQ%2BBe11iAtqU2hUG2MmwbI0USOX17I40RrtSI37rSAqWiB%2Bg1KcQvXayvGQSkK5Fqezj1WIQw3dHrMzggDV4piI6qMTMvle7vLbukWTPsp%2F%2F3LNc%2F8papsnv8L0j7r%2BgU%2BUGloZR2vl4IOJemLlJ64%2FdE%2BOPN4U5sLx5OUY%2B3V%2BDpBHJyCi%2FbqpZgEl8FVjSLyf1FHbI8eyE%2BkPXlXBC0SZ1nc3I%2FJ%2FeEUapd4XFL7EzAAG9wMPCosb8GOqUBaCCH4HIjwiaFtrtnj7r%2F44EzEglhzW76ufZBkj9UmTTl3WEkrvGVhBFj3VH5aGPr%2BJcn0S3bcyqhI%2B4Q8A3lc2PgBlKtw6Jit2wNWUALK7AuJiLV3RSnrvOl0DDL0wahTt2QmsfiveQqY9IYVkvEjv0ay1FOF5w%2FnmKw%2BLYGWY4lptteOR5juKj9bxg6P%2Be2wkC4FSbfaG%2BXiNQAaLQ3WUATB%2BOI&X-Amz-Signature=1b92502651d977460e3221340a539a3fb360fa8fe0dc24e17e23dd062221b329&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X6ZALU3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFNHcIggtcenqqbPL24GM%2FrISfts8qtO4PJ5IIJtfLcDAiEAijto%2F72QnFqg1m0a50V%2FI%2BV2cd6UPyQYYEN3Kcp8txQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Bzk8YVPssW0a86QCrcA%2FikaYa1OEpMKiAGbQscqnrNO6qzxCXIACYJIp0Q6v8IPEKtiyU0qcuoLMtmnq7nSv2yeB434J8NiSZUZO1L5yAsollG%2BPvXvxcE4IYizBOgwnrCuhqS65Z27wiQNkfnwiYjA51tPva6RTOQOEmKOKkeuWIQOQ1%2FJHfD00tmUV4onWwc42zKRl8D5DMZnBJU2SKY%2BnKnMC0ue4h%2BcV4oCz5tuJqQUA7pX64bjPbSwo3WooYPtLWdAZICNGrLwzRbo6IDSB8Cl66pfyPCya5CiH3q80P3j3UFBT3OVNEl5CtIeNtIPvNcjkbbKHMB%2BJ3RKR4mXLHjvcylRztDQX%2FWe6SAOCiFZGUM%2FaQ9woZDFVxWhifjNhIS32YhCyDD3sDnMeYZu1dBL4AUFHTHJdYnfnLXV88%2F6hl4j%2BIiuMNxraUcVH39zsIfAvqhHknMVQDYUyl8xFr6qBvV0A61Lk%2FE837ZeFPkP%2FNGUw%2FsJhpj82yIgSunGObU0PmWCVwhNwLYqvMWfv3HIEMTNAJVeQruNvLrsIX%2FORD%2BC2W7uUpUntxxDlnGikTxWcbEXk4CPbmcQx7OGC7vbqBWUSmY4mAL8%2FEK2E9pxETD5Z2Dz6nRKSh2hZPmoobPHNNZ%2FdTkMPCosb8GOqUB2%2FgfLdxWO2tnP1F4zd9iINMPt2ZUd2Yv2qoFEZuH%2FkFsKu%2BHabl8mppG6QjtHVI57iiNnkPspV0VyxCDa8D9%2FuItKEEj%2BhXzu1Y%2FBkgzm%2BJIciwzc3acxn2e1WEJXMWsnPM%2BRhgek%2F7MpOD%2B%2ByzSnGlImu%2Fgruq2dofMwM%2FIU0VXpAZd5O0mhP9EPij1Iya7Xg7DiWHSQc4hKhpdAclJhUuPMkcd&X-Amz-Signature=965bfc47eaa7d30e36c3c40666d98ce5053b6d6a6be00252ea600caedc1c0a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
