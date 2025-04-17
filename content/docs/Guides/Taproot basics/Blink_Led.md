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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436L7QXJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtsEPDhB6uvf%2BhAoOQ9M7oLoFN%2FWyHiNv4%2FNd%2BkvdBnAIhAK4lRywzb16oC2P48rT7Y3xmiaYk8clPUpicJezE3iFZKv8DCFMQABoMNjM3NDIzMTgzODA1IgwEZxi09EahRUQUaj4q3AO%2FQtdatmJAGth06K3CUX3x1i%2BSCqFRF%2Fk870lbi4CDPpuVj1hmQ87Q97i6PO7wrMvF4z3C2e9BaFxXMKz4ck89u3giZRfGghChtPssfMpAdHAnaTm12e%2F%2FxhJFAv7iUYhzg2YFcXbti8nG9j4hx7ib9Use4dwZhMLSAPYB3LY2OLqIZjOQmrs%2BksckUrlLht4kCmowQtZDsW4qlBGXt5%2F%2FsuZi0ZiMVI9IuxkyhCZ9VnNdl%2F3lZW8QDTuR1s9HM6H%2FG0pUmMjCEGukbue5qpyL1bqTwbAO7sIZGMJ6DZpzES5UeRvIcO%2BMLwkYTHa4MMoOqItrUqiTEnTh5DaI9dJtM%2FcpztzT0tsZGC9H7s44Yvj53hgL6qLW8PdzGqT5oqcRvI%2FkDk3%2FU%2FNC4H3lGSnbwRJLtWWcFDgSmkM%2BTvXbIznk%2Fu%2FFPGuRvYXKW1Sbi74SV1Nl7h%2FWJ9ps5y%2BSG7Yogmzo3wxJ0K8eDouOo0R%2BQm8NEpK7bvCM5cg4g44QFoUPicwQQzLIvxmuYOKRnhLOT6c8ifIah%2B6LbpHKeMVaqkMszxdX5wk0sL%2FVt6er1aYpt6s%2FxsZB%2BJqMJu7%2BrSCPUDT8cEqBEUIvADTTZdOaqgH%2BYxLIHd16J3TM4zDVxoHABjqkATev6kbPHpoLfUspirYG7VSdeWh3meT8UzZnFfhdFCVE%2B4Nx1Q7Q8mMUJ%2BDNfVZlJM%2Fm0CmdF2oKXWonvOe6NoZZs6rVh3Tlh7l6NBIqt0iPUsY0lvboMCQB4mRVpEX%2BaAg2ucT27vc0SMuLPsH%2BdgL35j5fn4UZb8P8DXIXd0iCBJs2SVMBcF0DtTq%2Fyku4LNJ%2FtjjMRj%2BVaXLzYYDeNhph5sba&X-Amz-Signature=c8a427b4fb0e559a79376f7783aee2754539e2f4cb7a19a39aa044c95fcfdcb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3Y6EDW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm2PyRCV7yxu8fbp5c8LzvufprLGv7hdz6lng5t4RpkAiEAxdXvt5SI15ONxNLbLfBJ%2FOs6eZv8v56UQDfWDVIT8VMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP7XDMB5dR8jeWpulCrcA3%2BRUNPN%2FMW7qCZsQTCWHDc%2Bjwha7yeGpFXOiK6ieVY2hqdR64wAQpMgXbH4v3mcxibm%2FfSuJQWcfhB9phRAKXCpCgcmX6uG6uJdkV7Buu6%2FfALfWEXB88IFm%2FPEUr6QAEEMIhCm9lu08WYLI0WczsZQs4zwI15dpV%2FjXw1p1y8%2Bjfe%2FDLLNGJCMUbyfOy0mU0DGxk5KfcvjwYPbbV2QxB0%2Biwt0TTThJWN9XocewAlUofAjL%2BwkICsA5At6Fw0poRyOm7%2Bt7%2FNI%2FRx5G%2Fk8ST9lEsi9NsyCExIlkTb65NpJjOLTZJZ9CqlZSg5Y4kcOICxEYDBczUxUanuohOnh5cnNI2NfGfu4s94NKCWCq5Ux%2Bf1bJpETqSIpDuSazt5qbuQW575lBA1m6inSpconPLOrgANzYkJS42%2Fv0Gxvy3oO%2F%2BbxNc%2FYpU%2FBqMDFr%2FtypN2sq1NvS6%2F%2FjD9%2FzV1%2FV5W%2FDZVVecFxYHSjD4yPjoEoI1vq4KI7J0aCumln7UjzI8forcJevWKxO%2BZJOH6uOkGZDs5Xj5icGFpqTQVsqGu7nCM%2BPtZDu5NtfB4Mn4aXONSS4GCMrIfpXENVPkzXtqiE56FaIjgmJ9XVMB5%2Fv7eNCje0ZgXOhSNd4HIqMN7GgcAGOqUBNa4bHmXen%2Fj8041bKqncJkThfhiXlI4RlNI5va0wu7V%2B%2F7JLOl%2FyxBc2rVnDDiockDDC62Vtuuai%2FFkn8K6MQOORB%2BBRw6lX6B%2BTjiAuHZFtHRWxvbaWaNJqZfHdcAECfBuQ%2FUOWslaTFDKnjYAg%2FjwQXcP4OQXIBCQ5Yd3IREvLjx7%2FGXauV63zxoe80O8%2FuiIoTRUbPjuAR8i2eWG%2FmquSrbWK&X-Amz-Signature=64aa44a15ecf1edb63972d1034585f5042ac1b3177da4c1ccae8692b8b5b0097&X-Amz-SignedHeaders=host&x-id=GetObject)

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
