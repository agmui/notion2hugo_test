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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUWS5R2%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK0PRZEq15y4f5lGNeEMO8qnJsXp867L5OzKCD9qHJfQIgK0vluGk3zgUnRp6x%2FN8X8uuizmRTHHH3yBKJfKx9X7cqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHSWeJiEhwv56uNBSrcA%2BxVjQP2%2B1zk6BFlKSr3OPOJw3q991UD4dGX1D3EeorkoPHUJ72aQI7mqn%2FNdOcj4ENFFmJ1mwaZ6IS1ANzRMLiRZTzuVebGnZmGWhEJP32mxVQHqdJCUpgZQnh4bm73mQ2%2BmfYdkdEU7Sg0GUzYWu2OpH8v1cLrgjcP9MhTErTJUIDaVvli6sMlN98OPVS8QsvDCqvS80A9UXxey4gxWrwoRWyWIgNOIoDyrmrWel9R7%2FhPWCsTefReffUl%2F5b%2FKDSRTEvMWbAIv%2FuBarqpRy2rvKtONi%2BVsoRx8Fp2UqPmHs0tbXNHHWsEt4SdkmSY4FjpyKHnyV0EDwzIWs0yOWJPT6FI0JctWsjx4cTqLmm2xS0qjnHewEnpv2ExKBEShWjBz49%2B4bNrR65bVbdo01vM%2B2779ilpWd3PkAq42Arh94A31doa78A9syhccosfFaO7KmQz68FQxXl4409bcd3sLTXxPBTyOzV7cDh6Esdkfv%2BnEPjJnmlQgw76Y2IAwXIZo8MHZHUnISpe5j1cMsAWpaBSPB%2BRjaJwtUvNt%2F9vn1E5VbzVwgTuPbvgmzPiiFzJjnNGs7BVfh1Gppx1WSnp042IAlhMk2mJLKMBtvVorRzEWCcDGqg%2F7%2BgzMI6xgr8GOqUBIVPjcH%2FU7Squ5yN8iPkEZqgg8vzMHpKiDjwN50dm0HTRiN7WipBL2BV6FjqpqH%2BT%2FNUnbC3sLXqdt5%2BA9plAamVmVk%2FWMl%2BH0S%2BlemdueeRFv2UfMpa1hLJxSbOIQ13hgMYarXuCgEU%2FUjpSDWt2O9jo8Z9luzgPHdLLh63XVOUA46oMUCrfesyPthXYInvnjl7JABx%2BZeIQmHyoDQSnTxB60UK4&X-Amz-Signature=d83a44f3bc06f96c6a076af1a68cfb7d45af42cc3f10ed34d169359c8ec3f8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBCK2MW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAXc8IFwKWvOlcS5%2BqZg24Ky0Ii7Rh2K9%2BwzKOmNakBQIgV1RPfTFLjP8uj90KqrryCcgQMcfloplKpUZ4aaORrpsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHJ4zkFqNsdx5mYUSrcA9hjVNVuORR8Xkzf5oojfj549TnW%2B0thzCHlSgnwL1VnikxymfOb72jniSc%2FbHn%2BYozduGHpOoj2iYYar1HHTaXfiYB5RbfFy5U%2F8QalwmLxd0HQV98mQkMmFLG5Y6knhwY%2B19sq2YhiJJzAC8mUSOFMXkfh6EqmP3GOzUTreLgst39mBYSUOf3wemfeJkJbXXz57DGTYz76xIrPx%2BCCRCAJwAkniOKA1XpSpeRrceEHAYJ2zYDtXZkEV3jtFrlRs5BJwDE1wVu8PPaMYtZv9b%2FwMeAEDwPTAZgAfS4pOIMYyTTd4%2BCRuo2imspF1nbi46BYnp4gdZErOUelavObajgZhb8W8YyFJUzNeaDqaZt20hmJ3lJPAvP5z%2BSHqMb1%2Flq8dUfh4GAWk3oZ73jSpmohIVewCv5LiIrdpcV2r%2Bk%2BJYilxYSgWzNt4tODR6E6YaqchobFKfv32RIoXn2o%2BAzD3xuJ6iBQ0s3nyj0zgG0QodS%2FDdDHBYaSqqmebe1UiDWLmnyQZlTQ5l%2BTY2fPFBWWoq8Ke4yceGTV4GSvFps5FvmqNiCgLJuPKbJ1ojRVIBEIWI70D1q7GtJhpiQGbARUfd%2FxPZwyaODFaowYhsNLpexeczSMQetUMzYgMI2wgr8GOqUBXovv8gH%2Fy401W6rhnlGXHk9EClT01ctrn9O3%2FfLh2IhTT%2FOyqKL%2BGuEB%2FOAxcrHRlwsST53CD3Kl1CSi%2F%2B12XGRfVOeeLxfLn4BG%2Bn%2B2KYEU6ZTkgCc7UmGyWxJrDoCMpqcWwhPIX%2FUMZzP%2BjI6PyZSFR5hDcmBqnEbg4sb43U4XxWpoGEgMS0LiRgYuxlcwDwhe47J%2F1AQjvnxPT6OnTYyiLOeR&X-Amz-Signature=78f660923310461d05f52b948168e9d0d94264fb4d1db97591efb7971978e4f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
