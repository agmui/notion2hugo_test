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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKIAA6F7%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDj%2Fo%2F3iF8fsdB7tBYcQc9%2B90TEYa9TUst%2Fes5Rzzj1VwIhAJrtHpdUsxsdSiffkQBUILPp8kiMaNu8wivwE%2B%2Bn6z71Kv8DCCAQABoMNjM3NDIzMTgzODA1IgyN%2Fx%2B19418LH%2FQni0q3ANXAQozSqeqiyuxwiTTOuAEn4vMOxdxgpWjGCT6bDrDiECiviYJkMiTv4jAdkEpGmVHPeSxQQ9gf3r5CD49km1RqAog%2Bju5r8d83UgZVVLXEvHak4mBAVbQtYAqzKvYn4qBpIWTYMrAuDLShRrhLr4PxNSumySSaNRTqSQMmwkGiCKJw7FSBBw02xAU0dtyVNNSSr3Dw%2FR7blSbtmXUkMmzx4dOXwX0rbjM2FQlG13YTKNScksxCS08efLGl9JJyy6i7amevFU3WOr3pHLPdJEf9GurpCAJVUkoPk8NmJu8UmW8ofLCsffYOBsXLv92jYg1NHU10IV2d3K%2F8F3%2F57cyjK44Q2HWZbyou7UhNh0EhliDeEgVTSt1W17RFiuaLG7hY0DLqoTqP7%2BHTcDhtDC9Mw0c%2FNvZR62RRinrCyyopCfzERuQbwcxtpFdiTT99ZJ%2BMHdbw1WNihkGtdZx2S2dpmmSN%2FoZt%2F0a4OU67oc3%2FMxTkZJz7NuKqKeMonnrpcLq4HVkszfBvg1umrlZMaMGRhjVI4P6syLqpe4w7eBc84CHH%2Br2Nb6BoDk80CASf%2BsLhKOEOBEzYbKbe1HTcNPJ3OrHn36s9T3Xw3cDAveOv1Ccn3MoxmKjqENbAzCl9%2F3BBjqkAblgMs6LaT%2FKPgHwfZybPCrP2zQczAiSXeHVGPlHT3SeP75qAAxzRNyiEzd8kHoZSLxfuQLAhzX4TmMchezkfb9BLWgjRwYccBSlwmyC%2BIN8AWPuQh3yCWf30mgjYA8%2ByVOPM%2BiDwXMALi0JW%2FVA9urJmPMHoz9sNyNQM9wdZbmhCtJMgYdFGODpLMndBlO35aMciy8mQlnlk85LRdRxRWrbrRMv&X-Amz-Signature=3e394c6f575e8d33b6dafa0ca769f8c47ab42eacbdd43d8b853d8ebad9bf2dce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2DJ2HK7%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA%2B6HlSW1h%2BaavZzrr0IDeOI1aGak76ZJJirOJAWZEHtAiBZvC7S9eZUomK63akN8g%2F9sOwjBl08teC8Ap7Vnb0N6Cr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMkVS2J44xl6rc7Qr7KtwDuDe9JZW7FtETD9bY8hlJHaO%2Bb%2B4pacG9Q1JD3IYm9BpQfpCO2o4w4mTjfyQ9u16i6oQD9IzGFww2fucRBvgIRIcJpFVpWjwIUqHOvGHmNVTxuXH0qOv3S%2FSXn7j44Nrsnp%2BKHHarVEIYSGrUp8m6t2paYBsnR%2F2haYcSkfCMkscgqTbhgvQX5fBD0xXv%2BXvHYYStZPBT3f6QR%2BqJjoeaD97RjHPXsvk7CBnKcNTeLS4NypG8fy4cPIMLCtK5DIRDsq841cD2%2BHVFomWI%2B7g88eXDF8r%2Bhd0oouz2vR7uFahZL5tEqbB0u6oWeyNVMdmoxtRC9zi3NDau%2Bs%2B0FKvQ3LJPKYOgcDQ1kYfmHo%2BEGV7yt7zI%2FJY4%2BdeL4XgwMsRGzq2opmPUWOMWMfuXoAqTz%2BloVbXxgv8MxdEyn9TfDlRU4CS5eSrUXtugQQfCFur80NCAhmJ16N5pKcmuMTvjYrV53eyTeFDtv4%2B8Ao%2F47uy%2B%2BQpjb1JB31vgPg3E240xYif3OSMKknc%2Fp4uSFTuftb1tgpJLTUgDwl73LZMoJdo29d9GX%2FzsqJnjm4rvzSiJlp04%2FK0LErwSXthNaLqFamwrolNLASVz8lPMdQ2RD58kejtxQbx6dxVwkl0w0%2Ff9wQY6pgHpXNZnGxwMXSypD%2FHpZjtgj5Xl8BH6cafj7F9iQ%2FuHJMWr5ebK5N3Tsg4meCGlkBnlXHZXHEitHqmBayF7ZKXEmBplSI54Vn95paiBXqyVLJUhw9aEed22GDoG4FwE4V6QEt1ntI60hGxtUOTLHOMFMUhhWctlXdQ2QrJa6iMzG4SaKNz6PAFhxGJUn9Thz6KK0byafVpNRn%2FJUBKsopwl8eOThAcX&X-Amz-Signature=d0678cdb8fa88d45b4d9dba7e8538bf501ed50d4002f45def8fbf13fb0b47a44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
