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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCWQR4W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQChImvnAtoPZO%2FUGqkfCewgLPmcBzDNOdOw8Jo0ZrIYcwIhAJF5B9ZSRkqTzt1jOOk7QGZkip8HF%2FUzu4lhBs4uOkVsKv8DCE0QABoMNjM3NDIzMTgzODA1Igyh66ncNsvm4vspYJ8q3AOqmX59IxUjB95WQfJz8XB4OwBssuMIJDDLlf%2BaVqgR1wgVLOm8ftRRTHzpQEbGcJAADctLFlfstXiftqeWSZVIMDyZEbEFEwGhiobcg2AsUi8RzFR5eifkzVw9GnnxDMB%2FgjtFsfrZEaKjY%2BXEp%2FY2dBRS6gPSErmb%2BzuFJGh%2FsHuyXwzGKtv6fvB6k5X3PZ8xOkquKQR1aSiHpTQ9dcPnuUA3Jtf6L3qph2AuvQCdgjyq%2FOSjitSvA384DwQO%2FiE%2BinZ6TIYU08NEfWVrbTlKOUz%2BLodo57c16hgTKBQIG25GawtuOw6wSbkaGP1hqLFcN4F7PEqpGAP8Bwgu2%2FG7d2aK6C7qT6IRNdmp4RhyvyIN6o9ZKiTQ4PBLVVsj3RX9UkyPiKAyuERyDF%2BGEG7AZbxr4we8dykTEE3VHcFwKwLKf0fMZu0j4ZZnK7wzTfRpSdjcvN2h1LmpqchXtKeLdQiKYr5E0LcsBLN%2BLLbG5R%2FzwSpEQ01vQEoOs30NhqeSrsaLaAYQQ5BC99xmEC7Kfb%2F7vt9aqN%2BUinX4yq8RBtgMOTeMEJdfqYtHVCsedGLlqYAaK1VS7I2UPleXb3Z6Lt20E3Ffb9uxytgQHJigaQY4%2BesPzqWkpYQuQzCx0Y%2FEBjqkAQU2F%2BcWilNYte3h0DYgGWTgevYi0nyAKCmVd4%2FFjbn%2BUB5%2BWD%2FvsonaOQm34BfanJVT0582R7tfsOIHGkhM9ihq%2BBpwkSywuUCmRGWcrKppjsGnHqFOZsSt03eSUn2IJXeyOCphQknglYphT04PmEmWpKDGFIZ%2B05%2FE2SzIslK2r7qNP1PMxEI01uPwc055uG8TLBKbHZrNAoAiRGCLmRR1NDqo&X-Amz-Signature=359c6fbc11ef633ffc1acb2dea48779fddec1eba074678dbffbe536552ef75cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWP3ICR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB64wegGUZ1Ce3h%2B9yVOVno0jaULaAOBMq6Kj%2BuLIkLkAiB17eTHD%2FhBYDaGu2ZbGYjfIsTmpPaaPryiI%2BuZL7Nlsir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMjZmz3hKqAXz4e2XKKtwDR2Ewdyka2pHZxGhOucXmSkJn6NP3rrxN7nz%2B9gnSc5ToRRF%2FnJhUHRoaO3CJjbaIC2%2FViFQmG0DgzGNj4LsAEFUfQb0HKEnL882kQdO68NT3hoEuBX%2Bu8TpWLnubtL9rfw4a6AiAJQa52CJvgDgK0YrdE8G8NRPGa%2Bfn4Q43De3VOfT5yewqTvxqOVVRw8ZZ9yBLhtAgF4cYNJ0bKGun6mCVwFL4i82Cd8ZT3MaKLYtOP%2F4cd63ebjWbT51xflYo75Flw0KnNCmTu4N9LvxzJ3bIbilH%2FJa%2BWe1c0MDesHEiXLtSqBgWzdER4iBo1Nm1wmJJyc%2B02IDQyL3u%2FD75CQ4wxaZ87i%2Fe4YXFxvkMe3%2F34SVZD0j1SbmiZOZlYaz3Tl%2F1FV79dHfPmuhD%2FJzZDZD6Yg4LM2HhYqKpAu%2Ffw1JmMjNfR2d%2BNpSRZqSMPsfvfFubFLfeJ1cHsNbsMmdDac7YER4MAS6m%2Fg2sIU4ei3a2F%2F3O5EptvxAtKuTCAUlTlkgNxoHte6c1pv0H7fKXPhJALRVtXS9T4VMdICAxcMwa5yxZGJCTRV0FHI5Lwz%2Bvf%2FGbyxiwtqzdiQXdWtT8D1PwYxAf%2BPk33NA3UN%2Fjxo872FMpVW%2B28UXJZbQwvdGPxAY6pgEPJtsSzQD%2BoXCQiNANEqKtNcfZVMSXrcSYcXlQdgwZ9nRBMo5Ri3jl%2F0Hl2pZvqIXR%2BtMftAZMMg%2FX2pQFnDtbA0ZFx7LK%2BjQWqw5bd1I1yFirXCAQEzIO2D%2BK5H%2BYL3e5frD70RKzo%2F35%2FZYgv0%2FDet5q4HoReUtS42LVdKZUs4o8D%2B3seMABWved6eNDD9XZR%2FN9uHWIrXXA1CF3xHzSGLkaD5dx&X-Amz-Signature=3b3a31b2279869a04d66054245b3332e485deab11242332ba8e1db3368cc7259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
