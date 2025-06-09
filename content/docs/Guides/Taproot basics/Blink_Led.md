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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGMWVMFB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2ojrhLhweztHjb%2FgWdHVmQSrSdfu%2FqcINGTmQZd8nywIhAIukbdyrnmhiLL3guTuMePSwCVLYAAs%2BDg%2Br1xgl9a8ZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwX0ziayIU5Bw%2Broq3AN2iw2BpLGF8UsM5j7tynIh%2BHiJVil6XvcJkgQBX203DQdkuR1qBVA%2BnAa6Yda%2BRdGDS0IVzsUxbgU%2B6mEScpF8sQ%2BICMWQoSBZTjT7PtLd1qmTXeIltyKt3FvBQapLUM%2FvalbT%2ByfzsK1ovr4c1J9ORLQiZoyoev8cncScDh8VL6hWfL82HxX%2BPy%2B6jB275iiIJWwBQCtn8ClR8CT1LRGB6cBw4dAgcKD5QnLWXc5rZOuDy%2BcOnazhzbBgNwSFGoB0k00h6%2FnoiDA2iJ8QDpcRTx9gBvuyFSELKi8RsI8LxHgXYQPKhHTHEGNBYLUef%2BZlZwLjqr7YvRse%2B25WFTLW%2Bc86uB1zkPSI4p6osyGMuPSghBv6G1Z%2FznFoX7pgakAWc9%2BmhDDm5WLLYsWWSibBMbgBCUOQt6c2xECSPUDuq0hnKkYRNzC%2FZUa%2F%2FOIlgpAl4v4HdAridHBrxv8MbqwK%2FcP5bPl9l%2F32hy%2BRZk5PvMtBf2qSeRV%2BN843joEJJj95f%2FEuONlCmd%2F6PdvhlrtfLAca6Z0RZ3CRlRB1tIfErcwaoafqBeCReJX34LAdNnNHox%2BtRECen889sjStCv4KRU%2FGg3MdOOpm80MnHPoS77eVC7nIuvBoRJd2YzCJlZ3CBjqkASzpj39yCqq760rEfdN9UrDy7gzwiu%2Bw%2F6H1spozl2mQMBOIUFd8DlI9YFXwAvev%2FYGJBuZ1wwvI1z1fF5sjixIC98FwjKPUaz6ZcaWNoWD4t74axDXpW%2BWcB7gwdvBsQphWVvYTgQc%2FouvPfLSlu8Yaun9LzA6cx4as%2B8YwM2Kb38qiDWzp0SALe95JiFaDpLD5T2WZptjtN7dVi%2BiNkIoJtzWU&X-Amz-Signature=c0ead6c3e2c816acb431787324a830abb092a17c6bdd610cdbe7e11bb704140e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R363STCJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrf89mcCUEnjxjDVNl2Y5yXVE3hxN5aKK9PTv49fOUaAiAGdg2jYLlHsQVQCtntNHXJkh%2BARFXagz8r4p2TgEwmSiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXPPdhaBowDxlybzyKtwD5RfWUB7mdVlsyge8V7Y0%2BhBbYK22WK6dY4EhlyUBKcsdfw4os9daiv8V1fCSXA5UkWnFgam%2BLU2jOlJXZwrAeeiRxLKGrpxrQlogzXFX9NzabTUpfuSSKNX%2Bkb8izpqdx63IZMSGutps%2FkDp0O234psE78WnRv1JHFrJ6wcv7CxhmU0rsGVbOT7LlVd%2FNILuKIeWguOWjX5aQXhi7EiWOHzCNhAUYZsdv6qZv1xT3g1SIuQQs3Kmj1V%2B3g%2BtofZGyNneMFuPHv%2FxwPW9IWpfMgLV%2BMX8mx%2BFDr8bqbRsY0G7QtDHRtsDgj2KeewPEPEsiJMpnugPmDcPCRwUos8CK%2BC23CkYN1z%2F7cpITTzuSGf6v%2FPNMlQ2m2D%2Bq0gdE48wEFhkue%2FsUukinqgxlOuGZAlL%2BYbz%2BjN4Cg22L4WZOPNoRixAsgC3lSBQouqxvHkd7zVXD3tn%2BqrAqLgROumcSW9yniSA7QrpHrwHo0VqK%2B4vpgaw%2B%2F4tndkApHALLbbXlPvwAyPzjkIPYp83iAWhXP66QHiUSXM4vM6egDpjcCO68gGIExX3SsJuQwvu5CU23FmIzFls0QuJKRxDw5MpQLaoxXcTnuLHqf8uaShgGCvlQZs5rERJH5C0g0wwrpWdwgY6pgEHfINnJqGgMbzEVLZt3E4NixCpfSIw2u9aRUqTZbqdIZPY8TAqt%2BdcVHRP%2FfsA83lWGbkTShmIYyP1gtB9QwylWKovGVHMgESi7tbZGdmystorJIHM1pH2o5nDLU2UF5nA1fmJaDsPvL1zwgG%2BHBQaePyZBN5b6YxTIrv8Gc6VTYuJUKnkSEWdpjwQQTVCkAicrPIPPdn33Dd3ngYtDKd4rhF%2BopzJ&X-Amz-Signature=15261edb1bf6415925d05bf58de3af51a1af908cea5a36246364832f1ab68ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
