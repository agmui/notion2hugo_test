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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ZXV7AK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC6qXVmynfFGHrkKYNrDyWBv964TqHgbq9omEiGJ%2BImbQIgOycUBZVLo%2FVYzT1GT0KtwTEVvHmmaLnntsBF4LPOE3Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI70%2FnfTg6aDoHFBOSrcAxOuaX9y%2BmuL3zKz3mmd3i3qmDvAXzTyehnkpnRT5GSpF%2FmhGmajkS8K6Qqyk%2BZosrUQ21hOAOvKd9QcYmFDhMdZ7X73DKcTZCg4X0FqhFN588cCfDe2TM8jS5BaRYZu7j2bt14PCn4NUObIgNm%2B0d1BDUCYpibcLamucJhbsMDIGjCOGfVJm6kU10AbYUJ4NON5Y4OKpMmRVL%2FWPFhn6V5TdShU7ZuReUOPkgwoZBih35kfbrgkT5Q%2F5Ud35ay3NTvgudWl%2FKksJ1h3Z3DNtXhHQSsSIOwttAlk6SbEJVU4i%2BNQwjCqYNONaLUJ5ciDC9uDq2Khw4DDhRes4h9f%2BieAuXG2%2FFy0IUxuoGZckkrI1D8GcrtFy4sAQzab8zimJVr3X2JjHanDRGqIZejfdNANIgz6kCZpKYvg%2BTCa%2Fzpui9y%2FFnJFHqRsMFWSQ4PN5XAeX0ZYdolN11QPIP3ap%2FftJtmftrYePrZlr7zMyh7yMBTGsnSanu499Opydj2fjqqzpgAZvbreC973R9y4%2FMh3WrOya5nAkQx28RhM1hkwz3%2BVn2HCAaTQsNdwpkC9RkcyyPnILA09Wxn69MT%2F5DGKpa8iPFxc7XcQ4vlh%2FpWuq%2FRj9XYnDy1Sl3RXMMi7lsQGOqUBhVdr3Px2dmVeFjQ5%2FXn6tYfOuzDpmkG%2BBr%2B%2BpJFp1yQYZmAqc%2F5oHb3ADa6l9%2B1pDI92Tgk9lYEIyCZ7FRxd4iz6cabOmN8uMQjGYlIfyR4qdC0up4ZXMLayfl6JJrVXxCjB968Ssv8MQvTScvMpiOyjYuEEZsetMBiCsQ8SVo1%2FOPH1CmKZf9noo4CA7oDYtCiPnLLy4zkt%2FGWDK3L%2FWLqbK226&X-Amz-Signature=5b8422d592b0ae733e6c9b094ab49365edfbe213f0b3fe2dc895610c897e87ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJA2QE5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDMKoRHpoPQmEoQL%2BU4fdYwRN3EQIawV0oS3z56j2hkCgIgLblXa73s6VkTwyl%2F9697%2BWG2nA4eOQBfJM1AJpLcg%2Fwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLcWdSK47HyPvhTdwircA0s8uar37NjYjv%2Fq7kZOY7ewG10%2Bcv5YaqJMipZ7ZLADj0UZuUOKfYy0h8f%2Fcgl5KT5cQ2SAkglmHSTOhfocizrwNZetSG213z%2F95pVvJcFU117TxWFJhgEOO5%2BdS5%2BUax86uuvGjd5RTair27fCwlqfM14oh66xUsDXrL5Ksi0d9zXHMlm2HZWK7%2BpvMBaY9LUyPRQiAtKEQpIETCPeZ8yciJur60xIwVKBzCA8r6KjzJJoFsnY7GZgJDFEzjVcnY8nQDCBZ0Oi3mc3IP3DKHa%2F7yORg9%2F47auAF3Kqj8phAXeaKPcwznep9rWaWVi4rsf%2F4I5GVY89HmY%2BeJDXVgaOI8iY9YiWW59jWsLzSbuhJp1mS802QshTi%2F%2BRxeNCErVSb90U4G4Ra7d9bYts%2FKynGD3B7Yr6ql41b0N6vJf8zCekweG%2B6Re1zYOI2%2Br9HPTVM5CoYge391IiZ3yEVpR%2FdHyCYm4C3PIfjN3mzl32QUDQ8XaohUlSDjBdw249zNLFQV09qdICx4P%2FT%2Fi1AXL%2BMP4MxHNOKf9%2Bsv0Xx1C%2BHCpfO5AMPLhDSKtu%2FEkjvHhrTeRP8sXGsQcLNmwZLAC8Iepk8RZiA0BFLGgMre2V8nnhMu3YKdr97cfOMLy7lsQGOqUBhMcOX8x%2Fzwhx9yceuFWcOUlA0gkvD4q8%2B9jdLdN0qVqUlDYKuk%2FQoncw1B5O99HtnO1BkeihyJRXWK6WpDwP5sTA6YOUsKk8ZcPYXgOLQ0lyfxOcQ5gdGrXahyCYcZEhpMv0X4SHV4u3Nzij2rEbT9cPUPpYtdHARIMIQH4aEjreWDTSR1lDI%2Fw0hsDSUe3XQtvnfOPrmEzyZtDXr8NDTQYNspt1&X-Amz-Signature=a1d79eeaa58ce777cef6a56d64620413c49575071ebcb1eec716a6ede41cb528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
