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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4O7CYUN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBmE3BsHGLWS%2BxDrbojfdgn0lX7okVAj%2BAwtdn7UiLvNAiBIlomztSG74ZoJlt%2BxGUCJVE1%2FKvtUPu%2BhjE53qAJlBSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjHD%2BbIXfqZ8bs%2F1pKtwDoYsywsLHlEkHSKJXDdG7BPAnsSPZi%2FkRB7aUmIkhZea5wBaupfe44jL8blcS0oHy7nPXFRd%2FpEISL4yhhZuWaQL1AAy7xRVJ0WKndhEMzaqVH1vkL9F1t1%2F3NYOm4BTVkhoRklOden7x36obaPkzYJg2OoJWGTmMD2J%2FsUw76%2Bjlh2HIfUEz9kKEN%2Fi%2BpAUVSjNG8gmLu%2BYEItUK9kqBKaswWJXooV0XsZ4QxNX5zSa%2FA32hJfhgpPm0GhYQxlnjEqh8p%2B4BgqmJkpVsW6T3rltas%2BAbumXLrY8efUWFFkO2vhyxqcl%2F51r0p7YAqPtLeLT4nnvmtBYIOId3J1p%2FjV8kcr4Q1TfTT247D0OWYFHVKs7J8OBXVs71EjmYN%2BNFVEcCxQHI7%2BMMVdjEu3b1oVn5DQlJ3S1QWTuLCVqmc4imvlc9sW6nwwurXnY2%2BW6%2BbHaJM%2BgjC0L1dh8JOvd4lT0INkc4Zn%2BUUMfoj0SKusySTKAIgLgFZERV25pOR23bOSqKcDb7V%2BOgy5692%2BJbJiNNVGex2oPpclxtKKYtDbQjdJ9VDpr%2BkqmlGExgh0H14tb8mIfyv8LdOaVKlB12Zg%2F1vW%2FC3Jxdof28Jqxw3NglbmYb0HKCH6UKJjEwyIOywwY6pgGx00OFjz5iR1PWX5yejZ0VjtdQ6CpPr2XTE%2Bz%2BNZ3CRl9zgk06%2FTvW%2BW5AJxdffQLRDSZd61Hu6CuYbCiRWVt1DXkvYECh5tsh4cXKtNJNqkCua%2BDmLOUD1Uh%2BHPlGIfHxh9ukllwilMfUQawBin4RN0eyphveONZgDAdPyfqPwZ8EUreX9UyR1CigWR9SobyNk6HlOnLe3UJmZrITbahevMV4ofRE&X-Amz-Signature=71da3030656623db01185878fa30251e5a6a79bd3fe4caeb58d24c42e9b9d8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJROBJAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCnURbgsXJpSGVkG0u0AwMiCByllSiz6jZaGJd3j8VAugIhAJhCIJiaBbevq3Skqir7k783RdXhSP3GwWCA6B5gV9MXKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPeLUQbJmrhk8AWAq3AOWPPsr2yQGlySRyZbUxcvBWs2Zte%2BKV9moaas%2B2FKrzWcm32UTGvhZg3sBTiOmMC2Bz4GM43%2F%2BCxuH%2FB9myGvIe6%2FqFn2OXlap3v%2Bj6AuBf2W4ZL%2BdJrIw49Ede441QNYdS7ccioPrlfq6RXbb68Okd7oi8gEkSC4i7GvX%2B98II0NdzKudlg4gjfhYVxvYOcuL19RgT9Rrld8LP%2Fj50uZOvOU%2F25d8%2FRERFHLhYt%2BuKHEHsBAbcHHeRY3IpxFGwcv%2B6%2BAK4jTfhTb2QEvgNqxjulIbn8B6BkqHDXZySoHx4t3sYulTxoC3vG1%2FNw8a%2FJX9xCiHUzdPfa5RWXRAH4JU%2B1JQVgKD1m4lhPuSJbHMnvavYb7y0Pnst8FL4G7%2Bwk%2BMvlp8VfBaMiw7ZdadQpALSCjfmHLTGcji3pznwXme8YwYTJclpE8ATv9ksQghLzFFguKDvlwM9kGREDFCkvGdV2rwZW0kUYBt%2Fn4B6AIV%2BGQL2wqRitbCQaS7Ar08kl5OS8e%2FqzvljMNX3IV7zgRmziRcE3oMAWNM4iFH8Iff2C5wjl9rQdHlWNwhkAI%2FmazPTRTBB2XnKAvTjYvi7aFs7MC%2FWT7dxLBfR901ZhIODkwoS09hRiJv4yHqnzDNhLLDBjqkAU7p0B16nWzGjFot%2FK5PhNhg3sB95Buid4Je6XO%2Flal3DLZ%2FdPSHyZvAhhmrlM48frfLA%2F0DAtm32XB7mGGpzzg4RfvVSHOxUUHingsl9b95iar63Ptua3wBgC7vyc1odDhN8tT%2BCawR1RCfWOhFYLHnrbyxEWfTKytf6%2BaAYvmnG8SOsiy95fnC0x9M8lhXY5j7SB3%2BD29WVMmCa4Y2FqHYyuZG&X-Amz-Signature=5a0dc6d0bebd23a4e10cfdf9a17fddb15892190670dcb9c2737f5c96db914099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
