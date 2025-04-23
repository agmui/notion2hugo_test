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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QBZUVX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC4pnSyv6WhOMekZNKTQF2fhfXTTZvj9dJPG%2F3VCtmAgAIgbrw2rIq9E%2BydUyx6D4VXbFvog%2B%2FZSLx%2FGUoT7sMQwWoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzkRHwkJmlUBROMuSrcAyhqLQ28nVh%2B0sK3ykRlhDzaem5fFLyWG0BsS1EsiytUj%2FKDIOm1b504S3KVbgnqhtUO13f1i6EN0CRe9Jb%2Fot%2FXx5pLskTkUAF2UImIH9qyy8cm7DCxoR3i8MvhrvfWKLzj8c7sw4SbCRDq1QpvIDlArWW8jO%2Bx7zWFN1rJzkGOLKgAwncaryyuKQkRz3vZsz7LS6sjwgSIGWBP1toP0PAcUxZC29HVva9Llxpbfrj9nUqHKl9vaqu%2B%2FAhwDyFY6YXWiZTiddr8eGqY9mk%2FCu0nDIOK3OalD%2FKNM1RCY8kHQvbrDTgmck%2FRrVR2r4zBGT4V6ntZzcBb%2FV1l%2BFn%2B47A4pjtrdbYY3HHlCTDWnsBzs3EQez%2FUk96Se%2Fx8J9H9IkArt2e4LQJQVkwneR2WHGct5o2Gir6hVomzTqjEbIq4fqvNcatQhqkcW8lgcQj6w11IbHp4LmfU2m7f37o2UDJJAQg2jmlTKGDmjKLF1%2BQ5BGmLUUr9j0gtIQMjAj8dg7kCreBVmPlB%2B2APpLsTTOIxZmKksrH85JgBpgu4nxamVOnuLVE1ZPsEahddH40dIdNNZ%2BZp%2FvgEb36kQ1r605aKEOvd1vBLOrZSC4mRBeMEgxLc3Z9GGj5UFNB4MP3Fo8AGOqUBPGZlXSzbGrxrbGR2HKT5Ja%2BfU0nvMVhbOWHErmv7BGva3e5l%2B14fm%2Bre1AEuJGL4vK3sembaYoRXoBZ3nDb69fnBr3FsRwJfXb9XwN1LAqLnrh%2FRFoLdJpL7%2FxJ6xG6wGNshlaw8AAg%2B%2BhK58IbN33sqYpWWDUpvcy3ql5bYSuxThJAEfAjEZGmigduvApexKToBPoBtVY9lcCZNQPsynaXGGvCT&X-Amz-Signature=f9e1db597134468c2a13bba38235f15440d2821a41cc8939c3efc2e878bdee27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4W4P7J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGOFI0Cq%2BI50c4pPXQMOZPv1t7ZvfKKXbluOrXAUMiyhAiEArLMCN%2FbIH1SIgwfTPZ0aug4gfFFUoQl4kVMiTyJ5se8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnXFoRXSLhERqc90CrcA0cZwjju2bHWmgquGRTjDmNMroIfjKA4ashHg8VSjfSpzxASCulKo%2Bx21qfCwYKnYxOzKt5NlXQVzLNf21zUV6BsC6z7KzrbNDQWsTQnBMtwihfIHMVmzMw%2FYUQX2r3mivP9SxH0izuU3o4XzkkjAIxwMWu%2B0JASI8%2BpDXrWnkkjeQbmFgT1KdfLao9d5Aeoc%2Fb6EHxdw63crh5I2NoBbsXyghR5s4WGWfK02gHvVFmmca7QUzHuFXi0%2BCZTtFDMap7LCCXTj6LXyfdE0H38tLDCqMqITvtqglogthVW6HqFYFHUm3712NmcvMQQSBFDslLWfgomk8TaeZ0WToTNy5OIZvYLwsl6b74tDHF53P6QkxAMlRC0%2FAZLwDuZr2Wa4Wj1BdYtFsYT4RNaNBDMuY70p6z%2BVsXiDShmtMBHajY47GRrKbLc7yVQ4pSjJyI2WXbVgS9ONWf2PlGh5EKm%2FS%2FnMmJ29mA67IPOBJP0mIrQPQCQJg7yZBaTKkhtSNVVT%2BhcaWuQ5gs8jqyGHJSfQOwJtoeikZ6Z%2BfLGoYR%2BYMo5frvGBxMSkLszzfCjpSSu13QOuxNcH4mRmxPHYfDav9UAsN00E15%2BriOL7iHRvmt6nE93g7KUMDtDYOPVMMC7o8AGOqUBtrPRebh%2FxVpr5gtk%2BCqReQz12uIVAzG790dgvic7hJiH6yis1AZ3GOy%2FyKjzdytidZL96ZWGR8mP2FDKsHGCc6UFs68BOXFmKKi%2FAnUos36iQOf5TyB18YADZKtggk5dY5wxviFPnojw%2BmcrSIE3PAFqiEoln%2B3PwSmkZQsgpQ%2FfTMAX660b5u8ey23XtUSLemSyVcQPgru1WCGpP%2Fp5dQHYwwM5&X-Amz-Signature=d3ef0135a480a4711d0ddf35ccf513ca4f24af7c2b5b555dde911a4ac62e010e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
