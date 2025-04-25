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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEMAJ77%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Fk4tjNn0Nq5Ay%2F5tX2aukEU0u4gJ1d9Nv7RI03cTtTAiAMkW%2F0RSiqYNnMpixKGRCyuldYQEA%2B7YiRyP7F1%2Bpadyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMA8KlnQGHY0pmlsY6KtwD9zH%2FUHL3vyQyAQDVHBFWDD0SXwJGWCIfXN9lb1XeIIdMfgXdj76mdxdrae%2FiprQCjW2F3KnNGh%2BeX2fw2mtev%2Ff%2FG98D1024d9vrhKFPsGoJH1ZOkDCEBlWP3b38SOd3ggSi58gct62%2FgRs3IfFAYjnX%2F1tWzlUbDj6wg4LSGtCajom%2BCh7STjQvjV89W%2F0dRX6tanSX7bXSdqwWrEXJS2%2FC0QJWLZaDd6he%2BMcE5dBNjLdFURINxztfUQNvyVkJLud5xxMhYUYiz%2FPdCPFgTgYzT98fza5e%2BEFb9lcs%2FSWoR3Uwyt5QfY%2FC%2FsViuqffQr6nMmeQy8BssYlh2TzGuwPnBxaIXxb5vHPmPmZt6hFZXsgtJ4Gl3LYIuAIfEEqiJU%2FHSpdGFKoN6AlomZW8YXURU3ghrEQx7jAkAAu8QMAGSsBQpkfge4MXZORoiu3VcocmMRMObrs1Y0%2B%2F%2Bl9lJIX85QxZPiLWnZ5BXBNYLVn%2Bs4W6T2G7DBW%2BzYttUS95k4LcBgSgERBR%2B0qhE174EkZ247k3fBp3hD1UYjeSgmklU7XdTx0hIn%2BRXPZbdT21EV%2BiUa7NM9I4Top96zAAagv%2FK%2FEGmzK2QWLI5PKKsuhyzVcanxYr%2Fdj2CJ4wk%2BaswAY6pgFlx%2FEPXEfkYGRiNnwzZspjiPrRPqOjVHDKlDMjUc423rc8yLIf6MpIgxIiOatspY40cagdCZtyhTXXfj3yy80gJdJ8%2BlAf73d%2BvW%2F4khI7i4TdhJWxslypPDAx57VjTaNZkiQ%2FdnZ8JSqqp8kVblsGtv7llAWZZtvk56I16cqArjRWkgTlCfOs0pF7OcS40PKn3ueeZWayTJm84aUT46iwpi0WxvUn&X-Amz-Signature=db112cdee3bacb053a354d5785904b9c481fe95482dfbb251fb46e0c7cc86a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIOZQXSH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbu6epl0WfJD%2FgKJvT5RApOq2VVae44tp%2B%2BJcanCl7wAiAq%2BSCjN%2BNbc75AHV7petOvveHqCFDPmf2OkZqpQz%2FeBir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMqzLSKPyn2CKxpHP5KtwDzqqeAMxRIbsYlNB5yAlQsiNF4KHI5VeQWzw%2FsZg1lk%2F4gRiw22ydW5fc67gsYdcOQhgRtTI5J8LBs9YhU3L1mlN%2Bu3Iac86yGy9t8MTMPYmpm%2FMhfWabKg4WtR65EbpDZ%2FDb4J5A4jP1Hl9ZELIJPkuthusHHdt4eZ8%2B%2FsOiTEf%2FKkJ4KTeK%2FphXre%2Fu30qAMyiDI8Ds8FYi%2BrGmyjjnvFzLXqfwIHj%2F7%2FertQlDNQGBXkBlWhh7WtLtZ4Lc7Dc7vKnZiqLUhDtRpDNYevnK%2F0QwvcZUlY9VAVPASqO%2FZIPJBH6w0ol%2FjII1kC4S6pZknwgcZXpaX9zo76KOCTlc7fVLtvX%2FDIrY37fQTC72sKCA5GsWhJr0%2B2Vu8QAIvulZLEQLUlTX1DTEjaZY4lLOzBXP7Q%2FVICAcfQP7Pm9p864hZad1H0MoBT4m%2FqkAFq3e6NZTPxLkLV2TQ71GXZbxjTnGv4XE4HRdVPbG%2BKlD6PbhUy5oJ6Piib0pQm2N2WbWYo6nl9QPB8wry9%2BpAwljsRh4coaMtVES5UrZfGERqYr4Afl5kE9fGoS1yZbG6g487PV2gHeXDV0x%2BGHYbomvSyoAY5k84fF9O%2BYee5qg0QkgTEthlL80o%2BHJB74w7uWswAY6pgHegUq7%2FBYeuYHsCmACoChbymQNjgVXJORf55xf04mSkLpbuQzyrOZewxF1majx851Ko0FeZ9RCtr1FX88Gb2johU%2Bx5VK3MaPA2Oi0DgjQjm%2B5KEuqPROmaLTgcvaLLpcMPvBTYBdZ0om46GqtjPLAqRQsvtJeGfkk%2FpiSLeYYMNc8mHVmQFUmvILLgwstmw8Cetne4tMoEwT1i5rzsCRxQs0Qk4v4&X-Amz-Signature=223a5a4ce586a35c382465356913a30884ac9fde8f98703a98b4d27b99e4b40b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
