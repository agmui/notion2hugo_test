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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNZUH2K%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgK2IBr9oCr%2BpmtrGcqj%2F8k0gAIPkIIYNXM3WbOdcX9AIhAJoIFqld167qxYfIxNx6KOth6siNpw5%2FMjQ9zigekZ3yKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycelhmKNkIn0z7eBwq3AMtTOZRkx25%2FDnzZsvxWgJQnFavWKHNX0ajS%2BhGnBj6scs9NiHGRWBA5Qk%2B%2BxOUuGKCqj8Fi2j3MdeDWs%2FxhUsRtwb6mvg5xtLLkveO%2BtAWSw28S7cOHZ8%2BGtrMLkcg5pi73sEC%2Fs8Dl25PlEVgdJK7lN7TE8rsxV8HLM5Jq93JpH%2FID0y9r4qPtgTfmSrMAPtMLnBTJ87LQEu31btNiQWNUth%2FllszYeIXcomOa3utu7J1KHOlq2SAKcKzAeEVgNfbJRQjCP5Ki4gz3CBAMh8BFLe54NJCinXZfq97FOgFMuJd73LuSydPDuUnAgfqshgTQmmmqxTLxhN9KGqH7RT0BpEcDX4E9DrUY87PLoBSIiefNkAfVpy4%2FRDoE2AzjlhSiXHR20HtMX8bWS4T8LsjCPQJI8LBoJPKSY42hsUzSNijdTEPfQT8%2FK4LOBLnmMeG80Q3FF9xBZM1y2gtaHsjd2qf1iKgyylYpgIi8cUx6OPLGoiqtK4d1t6SsQp62CO52DlKTXuUbVh16riLZCPkjFDlzToJ869hrx77ba7W%2B98u2IYlsRvzzYyURytd1SQ1ue1iuNV%2FUBWhFwaXZivQ3xkWcx3JNzCRGi4SOmG%2FjsLFvPIgyeiE4nkcyjDHquW9BjqkAVa5CKk%2BxtdW%2FH%2BxoVxI9mlH3rZ6ObO7IKEoCZPDrdrH9AmzROXchHdRmcdF6o9GCc5Dh1%2FDGPjX9%2FatVixm7Hlud8NX2dDWDrTI9v7LMzPeG6e7iG5gn%2BAwetCpsQ8W%2FpUyOKRD1%2B8TBwaDAR0TKmYQfzmB9cn%2FVQ1rD47g%2Ff%2BfG3zWfzDb7fL250ZCgNzeeJ5AlSmKZvIu%2FGQz1JxSi2S91OA4&X-Amz-Signature=c80725116bea047997dbd4508ca69f3d035a8de86ade840329d5187edf1d6a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC3XNKJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDb27WOZ0RFvknTAYs8jxaRYmHcXetoA82U7MIQNPvVUAiA1b%2BK7OH0Q7MdQ%2BqDvdJVbFFNLA2B3plcrWdDAkZgS2iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjUUnmMpRLHTSdGWYKtwDNzG1FcAHEpZOSeT37SoC6Liy8XKjMt2hXq8rIQB5nF3eLVVQylVzayWnr2yeGuMt9sPeVAj3k0IKNbEk8q3uQt1IedJXswEgM84P8qhgB57BWjWih2F%2FTOi9XKwAISe%2FMLsKYjk%2B4rW5Jg7farWC97ZM%2B2qM7%2FwEeTHpPhaY0rKe7ikDC43FEUG%2Bq03QFemnPuwyedXIOx0mPH5gWcF6rXwQihVILmnOnCjXNBCCSKOrKEdayoDAt7ileZ5h9BXfpGllC6LO15aalKfxrOLvLg8GpZAELI3ldz7yqVvc%2FaAT%2BFlZXCBQ6X0aWkRF2nLqJ1U5aCsvemD588Cvx69PcS%2BghqLjgBBS46C4VUAYj5d4aRzgrjn8lTbgNsO9GOisKKUUCmECorIGCFmTyn3anTt8bOMb4%2Blwa4XRMHMA%2Btacp2pFtE4lzdFZvIoD4%2Fn1M0QY5Dxw5pMnb6kaCEx%2BN%2BJu%2FDK0NrFHWNK%2B6vSFdj1qZCiv4HA%2BZVszCdAJT4hDQVd%2FJTY6fCLpLcTSjoLhAd8Z%2FG2CnMhK2lPXgStjNdPSm98pmegYY4DozHD%2FrEiiK4uZRQc9VyJdnLAtK8bi2zt%2BRDsZDOaM6Y7RZ3rbmtS0SKliwyTYKSttwUkwtarlvQY6pgED5noK0RXoR2WgpciXdjpYn4IB%2FAfQWfUZgV5UR%2BKwFZU4%2BogBaIyqD7Cqf0uxUM%2FSF0i4UiQe5nuGr7I20yIKwgAxq7HSl2ZAcnaXAtXZ38yYPTADmZIHnBFBafJq5OzpiB%2Fv0roIajC8BJSuag32U96xpBo4JPIGF6GLKjMB5lWyNSB9DX5AaIg6J38z75zxFMLZg6%2Br%2F3N5jjBFFTRbVubQRwW9&X-Amz-Signature=1e549b90a75d74fc29cca3a4190cfd284f3d3f539314ffc1e63a22a3f1b71e14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
