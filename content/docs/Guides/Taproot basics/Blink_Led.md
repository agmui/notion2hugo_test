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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDPAEQ5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIB0Jr8wDpVGbADgVHyVdtnHZ%2FPFh0BXd9%2BJK8k7xdHWXAiEA1pMlumtlZya66wLNkGch1cuvSN8NpYaCBCs1x8CNCioq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHMXMd2PCQGOCj%2BKdyrcAzuXFpEgnsKBcxMCtx6tTH7BgPqqSaCve3WT%2F5W%2ByY%2BBuMn17nXnwM0i1ZD3XSDisBxddXDf4XvnQzbqxtntfYWJ4KTBRKCL6kXG023RSKX7jqcxIP4DOjZ72yOnUHpnlzFuwEGk6LRHrKIUv%2Bl0zRiG%2FItF233PpTK7lKXzQ8a8YY7mBfbGOU60hfnJsQIWiXbYoNHCBoK%2BZE68wrGkh6yfzgILEIF13v5lCT4F0WZLDWrwbxZDYxtAn5EEIPrXcw%2F0IOGBaJIPPwZff2h8fMQ%2BbD74n49v%2F2kt%2B2%2BVatzSTmmZuDpT9fh5KMompGKP3UfLZ2MlIkf2GKDQ6UGexmim8WXzcYv32vs%2FwiXK%2FpzZVMDoD9WXee80U%2B3dgi3gWw48reUKDm59brk%2BbD3tfW%2Fom3%2FCFO%2F8bW4irSHb%2B4OJ4BuT8l%2FqJVAfDEBVKaSZ%2F2%2FUiBc%2BsfPpWRMWu4kkx0Qbp8oudtp3OxOw6A9m6vkESgWMd%2Fm%2Fc2QmsCCu3lismSuFuNtJyKDI3Bn422A9chYcG0%2F5skEGQc8gfWxutwIuPSNYyXZZz2RPY5TSjXWoJ%2FdPKrliRpp9BnxyAFwDmKUXhNhP1mmFkYqrntfI4b9h4DM7nzkHfEkrWPXMMOGj6r4GOqUBJuhNm3capV0S9FdQc3QOIbhK0OqfpvcO4ptoaBU8MKJWrkC5x2GJrpfbcXKW%2FzWfSwbX1QHLncdUpZ3LYJKVryBuJJTSokzNDLj3AZDg%2FLTx9%2FKo6vp8pPOrk%2BRK0JMHvXLqifq3Lfwn6qcgH2dzhG9vG%2B7IQFJl%2FMig7Jds%2BS%2FZd57uOIIgmF6m3EHeab9YIo3DtuFSS5SK4qqTvf7wLlbEZttK&X-Amz-Signature=94aa9ab4f5b13c7ffa7505b8e803ed13f828fd3fdd2d36456e76a5e7bed27e59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4JMSBX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFHkdvxm6V7Wflesv7LfpKvDG77njGGj%2BWK7uUMPXKSsAiEA16iyWXRKdUq5iQ5QlZC7uaQvwD7mCOzUJjozaFzGZ54q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBsDT8CWYt7RSFYtsircA6YPoYTj7QR5MLr79SAcpOjXDUz5U4h3JJSTEErl5Ta1%2FvEUO%2BtkWQtznKaY38BId006ppBGAAqc7lPvMiLIMaN7QbDALDpv3s3yHYQYkPkjWRjWGLPfA8tr6i1eVeOuBV6kFfoKD4WjSfuP7jqqHgBDMMqos9v0UwXq54NlcowmHxlGmbkgRox1EJ0fHoQxP7rES8r3JAl8YRj8AVytMGX3erJgENq7h7saJO8cccRaDEu21lgw7Yf3cYHk75o90yNsscs3gJra4IihyDZjI5cpvvVUXMH3RFGzsdMFDH2emQCcbCtV9WM9JCkRCn6mPnoN7%2BG7nm07fUU9iwGpM1ribi4PtSJhysCnBMv9HQIcUtPK72PYO9zRqYu7Q8w7LcCJYVaXrVJiQye%2FBZT26qtVMD2XntYC1g0Cg0pd3SssK0KqvA6H83qNVhdYC3xGoZWYdzMswktJzSLzQQhkNTgZ2r7nWUT%2F8%2B3Hj2sb9kH%2Fnt2DKWrZNdxZ9r%2FBEtcbqYo31KuZkuKUmyEv9zGf%2FZk20LJPd%2FUdeGVMHBI%2Bs8g48LxEGQGR2zzqGVqiqQJFYJlycgh8wea4xdGHRl3uVSvVTFkdX%2F7KnXaO%2FHLEcDcgmiEgWwfWMv%2FpTAm1MOyj6r4GOqUBynEh39H6tivUBcBN6YvJ%2BpfjrMo6i5uOX%2BDdjP4%2BFyATRPR6kz3fFkW6X74aoGNupEt0UpMy7lHDt1vLYatT3XeAKdILhKcMDsS%2FyV%2F7j0d2Hq%2Ba8lJuBmzEpXUvqr0mb4BbBcZGNpiOF4UZd76Ua5zbwvJHuBBYlRAwtEutQqij9tNFSTv8miXkeM0SJag1HtjCQ9wP7mnIiZpqahDuc8qbT3sp&X-Amz-Signature=f9a272174ef712531c3db222e67a8312ae3bbfa4129cb5a52d01c31aa4de90cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
