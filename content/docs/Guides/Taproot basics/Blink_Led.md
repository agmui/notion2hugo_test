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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627C6YNJN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBXXt0ZnUgXhcwVgchHH3%2Fekw2S9Bb%2FuNYUuGLcpppfLAiB6PsYvKkB%2FZf7FFtUkIbRBtOd1HO3it7KmpnKOV04QrSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBo1bk8Ya1GMgf6ZmKtwDXIamObjDnuSDZj20TafGDdjVBrDt87BQ9ZmK3kJJQAgke1WpQi9Fp8SkOLEaZxcHEFZq7JW7ctnsmYytgzr0Tg%2FOPHraoYgnNQgbMChuF6QEo%2BmaEdoGLoeHpXlT2Z3x7kMPGfBi32xAaf%2FXQW0wnsrCHRXUw5%2F9s%2F%2BdLDlU1ojN4imkrU3SR5kPnebdtqwbm4CtPBHProivsvO44ONubzbJwL02WJHeLoYqSUIdbVVLFwtoc3ak%2F6Qzqej2n6it9HA3ZMvaQaP8qbrAvXbxUqbmsvJOC984FTz9EyDsd1c%2F2cUe1MpLXS3k4Gbv5g7UNLUBhNXhnxSZQFx4TfEzYF364pH%2BoAz0%2BH7IAH1llLjnR3wt5Zu7Y%2F0UZY%2BcdYIQVlOC9p2yBarb4dx9G31WDOmbaiFarALCNxyN40M9DnC36h7RyhrZ%2B3q72qrgsiLI6K0S5WvR%2FAUSI9gCiBo3kud2wdAYe0EzByd8dZLLOqoYpamme8fuS44OIpQQwYo5%2BS43DZf5zTFwdkYnbnulr5tL7TNvJ3vFkfJ3LXFcZLuR7FIGTPC1qIsbNW%2B6d2vtsRq29bfLRik9Ackw%2Bq9okBE1gcfM0mCw5Uge0xWFcAytmcq7fwYlH80l8YQwpPzYvwY6pgFDAVJZeig%2Ff9%2BcR6A7UqbOMtY3UmTU8gdgcXvPmBJKjtyJQUDsGxiLq%2FaFX0aPZ464nip0QJ7h37f2ZNq8bMz%2Fpt3qTtRjl%2Bvu3wd0s21nEFJ9gZ8ffesOzPoZKy1hgXnkfOw0v6HLGbqDJ5GTa9EFxHBnNRUTsWYGGSteHzoLI4TFqmWlhktPnMiCcYG1QoMouj7%2Fq30y1hTZqNv%2FOQRC57eJ86jQ&X-Amz-Signature=406e02755443488129c06f36f8d3a99069e3b14d571760cdfa267f3b0f247617&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK663RFD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDX%2BsiDPtb5EEapxCD3DXmsC5faDjmuWjOEzm9HAfCVuAIgCfLLOkX41JCD%2BllUsOWauWnbKpZlZNQ8TzutIvp35RcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzJmxJBQCc%2FkGH%2BeircA2ZCcy5Hn9W3oiSK%2FdrTBIbp8v5GROpOUD7UmylcZocx3pyvPVSdQyl69ZbFom9M5zRdLmXEePEJh7qn%2FATcU%2F8L9eZSQQjGoSv8BJBxrP1Zda8KMl34ypgYAm2AZDShDdYCft4wIjEWfckp0RNi8xQ5rayw3KbBDOwydHiZ6iSL%2FVjZul16CMwCdEYAbBI%2BFktMbqeWh4t2AHNjmclx3NEI9UVcvCZKmeZt6rXkU5WKDhc9%2BkI3eGxAWVWrQYwTnxzevz2RHtZJVssIipF1DdZ4naVoFNbP9JHyJCrfg%2BBcqRXqHk4VRovM7u2fdmNMWLlOjHRz%2FUowNAcL62DTDTXg2Zma5JQQ7ZCpanP9n%2BTEd1EiNntoz6HopqL99CIdpuGlJVVhV3svspW0wnPKYURq0LEu6CMPL8oWKWM2V5bwxg2RzxQYagQHSzRryFPKneu%2BtJ8QDrNyivhghUVoeQY%2FwyqMkzVE1rhQdBFVZ3t3ixRAGtWxFvo2MOlYqBLoyJP5I7MYN%2FYqh3%2FlyNN8pJS2uta14uo56rgVDZmDk4KcWiI9lsLjubCiFCKWFIOO5js92wEj7Uz4NnRs1LGEjJTPtorcHcePmuc%2B7pWhLifnMhIyl2WMew3wlhiDMN372L8GOqUB3D%2F93fkCutsv64ikv%2FdgIR2DoOez%2BE2N2cS4rduv%2FicD%2BX0TR%2FqPEqtw27khpjrIKsGZrzkqM3gQ7qET%2FtF7o4GbFfLTPVz6CKAn2ydLA2DCIAPWpV4kf7%2B3AW%2FSBIrgQ%2FzMPdaPPdYkJwmIp%2FF%2F1eQKCf2CjEaGo7NwEuZos1WNpG2g0uxFcPU%2BxleXqTWv7paSN8Lfmz7qwuoHZNFu3ai9uEWg&X-Amz-Signature=5e30af2e3a2623e4358b6690dffee58db4f352d7aadffc54549ae4c672e4d4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
