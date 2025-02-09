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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M34BM2Y%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf3pqQAUQp2kwvTPSInHuyko%2BGyid2FpuDeCph2HbeJAiEAqqU9sgtV0lH9c0skaipYJo4m3DyM%2FYFN3xp4%2FTxxcCwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCzO0sZqwlV%2B7tjHSrcA2Asa9K6kd1b8%2BT6n4a3LJN3SI3wCWR7V0eg3MuATgPZlnkJLfxDEisShQf3ECohXJN0jlV5cznINLxuQPzrKKTI6XX%2BNa2s%2B831t0PRx6Gn7LWAdquzhr7yTNEXJ%2BR%2BhR1gqvQVvDCE782%2FzsHBRnX9IbLuGzKkcwdnM%2BFuHlxlqtlZQJRZIXTtUPKzUxKbeM7NdFmfYEPzGQSz5FDDzqOVxBuk45bTtfht0ymZ8SVBD6mJnmfM3BmGQsBENd0Ei89tOFc52XiyeMc7%2BkqYjUJBNRuUxwh6iAXJnjJcWfuJ7GPnOn8Q2gb62g37E4CS%2BiefMc%2F9yAlL2SqOUaRH9TjzM7cOte%2B1MLSeFAvb4UpqYnNzbuWFgpanlF4UpWGiE8mIWguZNLyeNaGoBi9uYeLCDFTpMd1N5ch%2FX%2B8XjwM2nNTuuiyfC%2BGZga9iRT754jj1TH4OxjvnI29hOzJL15zIB3Crneve4SilN0gfHCWXqHF61r5GiXitPIsmE1ah4s98RtP%2BHzpMcSDmezoZBPTYycQh8LlQhIpR%2BeIb%2B9q%2FUxNHIW6bc2Obz0JD2yG8FvsosCa4ySIYTpiM7CGGOG%2B%2B6ulQyGFecdUSyxYa0qRbq392eaTcdYz30HykMI%2F0n70GOqUBwW9Gv6hqQUGdP%2FrFnL4C367EH2YzMzTl%2FIhqGbqWXlSHjcPdVKph%2BRmPwP90G6ZZj0ouOuFCqxTt1QbWo%2F6F0FujanVGAzOBjUvt%2By9BbHBnsVyOsUk2yDxgkfQi8sXfCvQfeR%2Fs0uQb2FFIF2J5VDmJLGxPdra%2BwWPTzqYZDoE36VmYXV0zkGgu0rxu3IAzYuyqci3fz5DxypP4kLZCUvDaJ9gI&X-Amz-Signature=b880104c450db29e779c6fd9b029422c3d071747a18bc5b3b868cff5b824915c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMSNVI3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExm%2B4u1zzkeIYAh5P3yF2om5lnam2aGd75W7jqfacdrAiB96ynP97PUWAbEq2O9611Oh63guuZmu%2F%2BV4ecxu8U0TyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6PR4F6rndujRMwvqKtwD9uC0R4eX5mYFxuFwBBiFWxKSYfR1vxkmIwptClqL0PjmfAZdnm5VpVCTGC3w79SSPrzZ9UyJyujVJS%2FlXSDzcJkx1B1u7O8iz7p8TiIrVR8e5Zgh1uDrdYs6YTDNVOKYqoTb8JvRWL1gRC1ClB1Nbl7T3mN5Me%2FxMhpiHoYqMFn%2BtBG93tN3FS5cMd4qJvgqOW6oViV5nMBxDJB6MORf0YM6LhreFlNfYUmYdvOOl9hb4ysG4h4zNHqaA3pAC7gBL1pS01nsgi0AekwYHwBUN%2FUdOs79z00f8ezATrOlQpYSO8YIKqovudzsa%2FdAGzIcO%2BzjswsMYhDNObrEdsfqhI5qWKcU%2BfcCYoM1f57NYmXTYELfhccngtp58g4TC8FefGC%2By%2Fhy3zyoQYBgSMbjuGPMz%2FrSwGKjsA%2FaeO83%2FoCFiTiPv2oa7K2CjJOUp3kjjVsOAVM476aAG5B15Lbv3Aww836aTUbeQXpqN1h%2FrLmHpZcHai8qjr2EkkGrVyVcnyfkMDEe%2BXjQIBnoVd3BxvqnONkkBH2r2NLeTodEPqlwNvuCzy3hGkMVu6ABFKtvXMg16G7k%2B1Q8bS2mu%2FSZzPU28y49EQQ39%2FtvA%2BexdBthBAm%2BNlW1cnnpIr4wsfSfvQY6pgGo6TQ72kHYgbCa%2BZmtcj10KJ2Xa3taANbWqkkzcwp69nbLjsa0thGtq2tU9N1T64rtiYL9hlN9n9mih1fMa6ceuncJVYjyAwwftt%2Fe%2BrjtS%2B5XEsWjMyZvjyavnTnJXpXA%2Fwp0Gj7O8D%2FGyf%2BmhLdX7A%2F4SSQc%2FGL4WH7Asj%2FaoPb4WGvGPAS7s9IyfnCJflNR1YkFdWRtuPbv4dd8RDunBVbpQwtv&X-Amz-Signature=90f639fa1f03153ae5ed974f757dd28bdebb049dbb3d9c54a3a3098110a12cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
