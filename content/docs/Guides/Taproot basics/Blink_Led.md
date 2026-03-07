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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GSDA5M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCy81VqMHASVFRoNtyYAuhDSGUM0IKT8m0zJfNLp8HJAwIhAPhcR%2FnDf%2B1CCfqWi%2FTvCaWwe9O3Mqx1wfOC6CL3aKEcKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyElfBi7cYU8kCvckAq3APJ7MpxKCAkAd0jYC0hQwLGDHPByh506B8XhJsoVC4b6QFpmfYQiOSIfo7YSVqhohOUoIAOwR%2F8gLUz3f8lDvUVM18Jl6mpVVvdSWBepzBt0QAECTwRJPbUag%2Fn4xg%2B53naTDdx1ISYlfR2Rt%2B6%2FS7MDOKq5vMKWNbcHogVJ9VABAVs4x4zAGWDoZgUTKVPT%2FnsYCZEnKRAXJ8RvBdvufEGksNsH07%2BKX%2Fn2YoNpww06M9s1nU9%2BFK40EGpbdmwYOp8S%2FWvFLspTQNSixd2%2F1bBQ8BdluahGV2Ri5m2FBhvAxOzzZ%2FIvOK%2BLmIhUjMAbgRVIOYfBpxkenN%2FHSkonxuj0sy%2ByTiN0Ly%2FOB4tlfLYgYZK3HRgC4WL6fLrdbVA7vlFU45Anrk1PXeYkwp198xSsdBVJKvwPrThBIlPcXQGYvrx5PbeGFBV3mWYsM7f2pF06LBA9wiM0o3%2B2UOTws4EZAvSp3od%2FFtaAV4wwDOsVr2ytWls0zeBH%2F3u5yKnmF8mYUhMdDsnU9OA7Mx3QPIRIkwKvbIUtNsUhn2RF9QUVYCr49BuHjcpKDkA5FtM9GOrLQ6ibq%2BTBGvRz4dzVLWyAy0%2FibVs4GdUF544TXiwEh0d1yZvYMlfoB8eFzCy6a3NBjqkAZooa5tbXX3AKBbNrbqA%2FtVMmtcGA%2Buyk9Pqt7n243fCChJQV%2BP8bnS2H2%2Ff0DnxqtmC6L2YcXNesLWXRLpS1x3Kc9WWO%2FuK%2FBZFywWK8EHdwO9dfAYVq89tbcTlKtvl9XeGC1XsVlkLCejNqnUsE%2FPeQGen%2BlUNIue%2Fg0y87GRh3Ko6kqppkFX7hOquf8UrfQbxqJ95aLwheTWjlKVzwOtvzdU4&X-Amz-Signature=1bbcc384b1a2569f787ec9a201312f39f4d2ac85932e314418e1a7e379d142e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOBD4JD%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICMJ1t1JCvMzVpQDWL81sr9ICHVjw5v%2FVxdfkAHxlbyEAiEA%2BddmtUoO%2FTN8p2JC8%2FiNmGzEtGUlhmuJgZ4KYwkPMqEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bm9Fkj%2Bbh0daaakyrcAydZRxwU2bh%2F7iDiBzTRGmpmgujK5SUs%2Bv8IjuYByNUi93Nc8dT1NGikb9%2Beh3Ah3ASiJZpRz91PxoRDXvABNnsV8KcsahVtFm7uZnBS%2FFai4AfqVNAu77%2FaAO7Li%2FYJd0WF0RPLKSwRRi0gGuYUCWVXZb7FsSc6lPrAca75ZkDeOetcDBVK%2FqTUgSUqo6tZ05X%2FZXth2We70pnDB83axuUxB8UveXvTaXiHV8uSK9AsOgN4R6q%2BkTmzegBd5AW%2BU0qxx7cWROyIAFreeVcRR5QkW2MxB8SiB0qmDpOiVrwymFzcI0d2LWgPxl58pzvB13MJ6GhHAI1H64AAwGqlAlit0H0ED%2Bj8WdcyWIFxg7ZCcTx1bi6D3bTbjDK0ZCZtMRWgfUbr9xeO6K4O5yHn85sA43b87iWg7Ja8GeJy%2Bb3hjYkIaGfiai4y8TmRrPwX2K7cr2%2BczZfDrlIglGChra%2B3JTowDQpdHoKnfaQ6SWRq4NFLoOEIiOJc8tjMxcn5Y5aQqNFQ6uFmFcKqgmxh4%2FDMkIKhxcD26UOn37qHFXrb1C6iXRhFVvBNJIex3JWk8zZNYJ3n8d03rX%2FpEXsrUUv1j%2BmNsJRnCH%2FFb11P7EUuNQnix8v%2BBvIV9SVCMKrprc0GOqUBuvpz6n6RMDZgbCPbaJ0zMgJQOT3QKcsMt%2FeAZY22BXbkuoNGkf8xK52BOFiQUoaBnIc41v7Bj9t4pMg8d%2BtcfMDMmX%2F%2FuweAmSg94kgheI1QDPu4st4adpr9PBU2vxdauRye5kFS8y%2B9TiswQ1fUlrt2vtWe03WUhl22xL5XKfXAPw4VnehdwlS67HNi7ltG2krsYOGzxcfx6f3UJpC5qV3iveYQ&X-Amz-Signature=b66821bebda147cbc12bcb475c8d26ae0a030e6dd38276ad8defac89a44bab3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
