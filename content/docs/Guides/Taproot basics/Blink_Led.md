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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z372VTS5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQdx2rj4c5RGhwooag2BX1%2F3rMJ7XkqVfVxi0qs%2FUVFAiEA2xcM%2B0DPqrPTg6SE%2FqN5xeB3FRi9c3KTLYbWHtYoL1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQytAIuBmpTzt3ncSrcAzAwVb7ZWet6UvqqGQ%2BGyraWn8h59BmtDS75zRrzFwadYxhzPGwFt9uz6slfSWP9YZ1dJUzH%2B%2FFGNcVmXhc5Sae8Q%2FNPUhodBG6piG5sJwfw3k%2F8iMXGG5VHoY16CrF8cZfMXGGqYmLx31K145c6FduE4cjdpGWd%2Fn6idoWASuNIJUiFwUuN%2F%2FlTv6zjMm7AXNsFIsfs3cYqwDtd81ryVMZQ2NB5XqkCIiQ1WCDMLpb1LZm%2BHNE7a6Q2lqsfjIQv%2Bok2Qz6cNq5W217EAnOetliNN5nhKVo%2Fr%2BFw5ilFOSkOSpWtnCoWkPAxqgW4KGSVMUW%2FyEsvsDwOan%2FoTzIirbWGnwowEjS2qttACtxnStTGh6ZCmddEfXRFNgfNw2UVI4RidKRw2h6E%2BKNWF2YeVtlYRRsQEttMcctiYC0MiM%2FBs5h1FqQTIJ1bwUvMXeeCDfb7iKoZEFBQF0hnugjWWHubDxszTAxycYQdzZ4GtTKaWtQZJql9YMuaf3DOID%2FC1W05SPSODQC64r1uP%2Fqc7KHa%2BRM2npTdEVwQaKtcgV%2FJYkGdJwvzVnyKDXVLxbINNehvDLTRyjE7itNZ4fvtf7SJUdBX5K7tzkq%2BeNiMWaex08yPOLHT7jRewUQCMLXl5r0GOqUBVKivUiXfRv4Z1AxCAzTd%2F6zrl%2Bcs26N0%2BltoR1Sur8MQfJMQ056KDH5GA%2BWjSMfOraNDjKx%2BjnU4kDzJyhqovrUl06XoiREYOSrJHtK23xyPnFevTV%2BPwBezhZW%2BE69ICMaZGNBNiYYZ%2FM1qc50%2BMBSLwxanMYhVWghIUYTX%2Fm9%2F0aeEERyELEw9d1D9SaxsjCPmi7Zlu4%2BTzHiu%2BdoTT4vaRS4G&X-Amz-Signature=8004d79c1f76245f84924a269923fb8a55ea3844cbfc2d311bed849e3a74d8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKPZNEZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQIs0xAB3TR0dGLUc%2By61d4YBNCNqFWtCRxfNqGup68AiEArkc8Unp%2FqTSSGIQPQQDWAoIrCydve3er6eSDGywSXsUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOGq6EP2a7s7fzTfircAwSZqILdyn6f4BXhHy9O1KwHuTD1riYcMC6Ybii%2BGItJqRIdRC7KFJxZ%2BVeEEMpfHMm9T2yNwV5jRxKPI88SPikCeoMcGhPmPuIlmMAI8jBs3sNaPOFuvjg6xUpw5%2Bs95HxmRzJte2fqcRI%2Bz8Grox95lLEGlMtdbasEDYDqjOSgijf7aBxKNjriI3dSu%2F7bfahf%2FHK3x4Thg%2BULDFHnbCR%2FlrLlj8fPZM7rlTaP649eud%2FQ4m093vme0xqCVMWQMk8YCItoDJqDusBlhm0BldSoz2uAxD%2B48KZjpbiKT8h7AUgASn%2B0vU5cvk1sxCLbFW9g8VagF4BEEal6eyp9F1QngnSIpeda0sQeH8b8u7sxcw3XZw%2BI4YlyJDnF1KasvCYRuVohJaAnXKFcO%2B2M4KnNQMUnsm%2BlOQKD1CV86d1OKiSVqg2IFh6g47Zo2DQKQ%2FAIhbRejeZxdgCKakonBBCwr8LlT8WN7xgdnYJSmSd%2FpQ3PFtQC3u%2BYPiSCPSF8gsmD2edIEBPHRU%2FYj6irA%2BvUFz%2FTJTUf6xiF8JlCZAxq89vSpJ2fGFqMRNjeaGQGmivEgnXnKz2qQTYolp5373db75ne97qm%2Fyq%2FqEC58qLvg7bb0N5x0iWz4sUEMMPm5r0GOqUBW3Ty5pHMjLCNGXq1NBxSrTG9r%2B%2BSi7GCigzGuk4J71DpGvatzPwsC67JR8Ky0i%2FgHit%2B4Bm1KyKboKjIfbIwZtpq1hBkJDbxO8OnGcVMnQdc%2F5XDI7JJfopZtxbt%2FuhOIaIvHkEAnR3mkjzHE0Omb1X43NEPhp3Bl52y6H7gyJt2a1ZxH3P7aQHougycsFNoTGJUiL91%2FMrueMzarPSzXYn0jZfw&X-Amz-Signature=dc446fe129f902df1235450839f4c0e31d79e9dd159372fed9e7d28454f11404&X-Amz-SignedHeaders=host&x-id=GetObject)

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
