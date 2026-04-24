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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RCQQALV%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSX0D%2B%2BmSXlNLmJSPThnOoZ8yNXowEg8P9oUeXD7GsgIgOh%2FfeAyMFdCnGhShlIChbPwl3%2F6rFdoHtI5G%2Fq3oDR8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMup4DEAz9yyp764lircA%2FELrXLFpTqE7iIbTdudmySQnTBibVHBWJLUDIFRBfhTMoLda6pKr4qtnVAHap72L3XX3qQ85mGacAAz0flvE5MNc%2BkaOJMTDXFCL2uJjOM5uyKKyAEo2UE%2FcNFPm8TK2obduGw713RalxdJ76Y%2F9C8YAJdCXQdqbBt21UJrD68Ve2uS%2FjJzbbMzqiK4tRV2E9xK7ZBj4PQiwMwE9FSMH9HJ6vaPcoRRnoSEJb0D6aydWi4lqg%2Bj9ZBXasVSOL%2FSYXYWdsurDC5mbK8Ol3bCISDdlzVUOHsh6e8J0gp6Z0SQNGXkG%2BpM6IfQ9FnGFfnYSzVYT1XdbpSvld%2F1rJR4Hm10EDO%2FvypffReczodLZ%2FdqHcuGAvcuV76CoC8CQXkcaIbCu9axP1MM236gFi9zo3%2FqRFVJJbZ3tcG3o9DnhTQXj7SzxGR61SpLakEw48a3MxSdJvBMDLCQCdOT5PirfzMX%2F8gYGRd6v9xE2Niuu05PrtGmboY4DayCT17zFFdf%2FnpT2QHzFCmZN%2FM4su6ApPeCuSBaZcD%2FF8PSfZLighTXtUzKLI%2FdlAhR7ZtNl6ykOjtoUwQT4%2FTeULf6adcq9Y9NMxc5Unak41xXoP%2FOlL%2BWZhPM15eUEw63NdBwMMexqs8GOqUBVIrKfSVmc6cv%2B6NTrzuISRsv3jwSrYrCaYNn6lQr205wyfnxAx1pdsHtn8g8w%2BOcfRuSyn2LjTeGbrR7CRbpqhb%2FbEdKHOgivDn5Wtx65%2BbUD7E8Ssel0u1qfUuvJo3SXENuMlPDXY%2Fx%2FzXBZd3l3PkZtXUHNDLTfShijHTmPLhQz5FNKnXrWyMXuH87pbaiiy5twK%2F12cr7%2FO6bFkxsIjT5G%2FLY&X-Amz-Signature=a93c0e1e1d657cb2514bdfc17aefcd0012991e1926c8d974875ace0c3de1d871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UCVIN5%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1SUr%2FSP1jDT97vHcCj5vkdyHuA7wWeZlBj0AHnenT7gIhANBOfIs2ez6sn%2FG39DvUKH0OEpy7UPjQalgsQkaHNrxoKv8DCG4QABoMNjM3NDIzMTgzODA1IgzbQ7RtPLZ9VkiNcgsq3ANl607upSKxQ8qGdrkMwfUPQl5neHqRsGZoiuPyYsWZ5arM7YZAiGLa14AXqfPHcEGtCNyvrt7oGVllQ%2BKmdTzlP%2FyWKSfMGVE%2BxuZ1HzucG8wb2BCglEt4mKD8znOI8iu2v2wFBkTVMqkEF1iVPzOyZjXfNiK%2BCzrvgnScr64ySoRxGIcuc6pTcKmX%2FqjZfFA3ggbT4oWBIKz5qTcoZZxGLaAsXLFBDtPFeE0RU%2Bg0thPKm1gQTyHwgiJ9MmMm3Irx1baRDC02DDoH5473tSZ8N3Ncmg0OoteohN6bD%2BZo8T9CU%2Broo3R1aEAhZsr%2BgTtVFYyg%2FcWr8amHSNuL2Awyyyx2x7XFb1FpPdSbTpE2AJj%2BfGQZFh5YjtmMil2srhLeoS1fFUnxkE%2FYsMXKULgPIs%2FrCRfyDrcuo6A11ww2%2B%2BRAdfRvXnF64CP99laAGUAUHA8xUqZamGuWIw1nSz6oOGziDX0n4H6f8IVd9%2Bqy%2BHm%2B6I0hXvSVUekuAFDkBQOoAUCOd1AV84DeAiAegD%2FDRn2CjhmhlmwFRu4TH6s3%2FpjFI500fkZB5Mn5BED9aNPy0wWVkGqToNbzp4XaFWIYB9zG0NB%2F6sn3sBxhFAh%2BH328lgQ62nl3XSYVxzDejKrPBjqkAdX8LD5rmmSEKcgI62uLZyAcd6qEPQ7YRpWUCHUeyL6g8ey4Z3Ct3nX%2BaF5eZBjW%2BvUnT2ZfbX9Lcr0Hu2LEKfhRh6CGxdrH02hCSWlRg6d%2BXRtFINRiGrBqCwCWVFz9UVt1fcv4Wrx5rYM2FwQGKHOhCNd7a71ojDwenCAxrQmwaRZUIfdZ34erJLg3fTn5BMa43k22Z9lWpkG8RIVXFuf5OENA&X-Amz-Signature=5a75a582743b89727e445407b61d6472ad468f19d8db9374768d3ad37e00e7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
