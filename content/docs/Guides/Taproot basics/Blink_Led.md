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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYI5G5F%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE9PJrvaYF6KFggc7sDvISukTCYshp3TYnOCfSXASIHAIhAPPtWY%2BZ%2FPGtoRTqHKnJ4OdKAomevuGaYr5rCNKndKNdKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjREYOUPd0gS6w2fMq3AN%2FFcAdpjNV07l%2FxYbkSbgq%2Ffx4s7LxVb7BDd0OFlolx4rAjRj7OJ%2FpDRffSnLRI9ytlx0kQ%2FUw5yETUCXb%2F%2Fc9MxVo1tzr442hF8XvNM19mqfkY0N6svlXrg1YCAHnBeiV15sWdy7OUy8B%2FgcmGOjikY8kwtaSYwlYUhLHA%2BALdesswQTu4YTOQcyO1a7LgZb1CaPkRm9pvkCl%2F4CbHiVb6fY6jp%2BBIpvk6VaWHU2xTYGROC1CpQHadpmqaZhsF%2BGYBYDDNXwOdvj178oslGliCaoar2p1EeO2Oh9hs%2Fhq1%2FT5ojU%2FoKaqt51qpT%2BrjlD6vFqRT8tLo8USq8ZEjltpI%2Bc7Pynz3k%2FCEaA3gPrNVFIQFWAGkHmylXcWG3m0v0VsY5yDWKQF8VmXsQ48y4xMKN4U29svzAXqHU%2F5z59reJT%2FxskKRThAmrUN%2B1YPO4SYRbdEtRyeqaVQ0opd1XdXyr5TS0ikOebUwParASJKQZ0iiwwk%2FEjzp3qsXaghLOIh%2BJheMadOd%2BIhr1W2QI6d8Khxhx6f%2FIgtUtbeOWUWDne2a8D8a94t632qwNS3gKjYl05xhkzzEkG3jUWoOgoCZ5mwEvDWHH8C6oD31hLW5DrDknRbfqUSNy1NljDc3ZnCBjqkAUUybx%2FVXofJ6JiarFb7fn2kb9UaCUduynm2gYuREnPubkbRKQmrratQ%2FLOpUGZ9vOLXdbBStFmKmw%2FtDqQaHS%2ByIyO5HG6o8RUCXa6wnYTF2C8LZG7tIA0JTDZtN5Z4i1EirbU8jG7k%2Ff5oMSQuvUIriFIm67G1PRWEp9X4UI8VyFe1o0%2B801K1rMXMHI4BZhZZhiYEcPKGq592lYlaRyfUz%2B2y&X-Amz-Signature=3ea3d3eedb55552acdbc9afd408d5736a316f17f8827e4afbe14633ca5e3ed59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUOHBB5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2akTGTZji0oEPGOyl9mOsb0JmNsqhMnybJhbeqMtogAIge2o8W6cqwyNPTnBoRcnsMV9HG%2BrE6RiWX%2B9wJZ9hemYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIpAFpjl7CWA8P4MSrcA1Q3342AplcadPnGIfExBGg%2ByxMkDmfjyiN7hA98o%2FmiDxml0oZwTtOC83DkoyXwby2Yh87bHBrnf3ilFvScL6HHXAN8EUsbjpKBrC3FmkzdOnjV%2BvJOo7JxKkL7SlneV3jL9nsuvTE%2Fah117se0q73C0FnDVBWkGJidxa8dJcOeWZLbZs6esHfRN6krr8aKU2LUY4Oh1Hhpf5l7S%2F2uDJexcHyLT9gnX%2Ba7p6Q6ahJfSUkHdjaiPaVMgsmpBOoQx69GxeVsQVgd8fgOPJimY%2BOfcVPy2SLKftCO0MbcbxGSYYwH2RK%2BE2ypYKAop65WAfGB%2B%2F5XDXpq%2B%2FNrMWA8MrYeVWaPgfNKVL6VZOeHdIwV%2BdrZLXSRGgtAQhXOFDDLv1sK4Ezl%2Fe%2BDP%2BETjPT1Jkc4LDEl8ZNsU6HJgLfKRmdLYf%2FVJCBdqzMcj8OLggNIKUfvwNVixKBh37DLYEGObZfjETFMdGrwaW%2BMvF0EeeAatjWb1zb09tI9YRqfuPiM7g70U9s3AJ2yFAgXCv54La1dxPLcmrclPx2iJT7Y%2FizcC%2BsWCqwQ2boGwz9IXikIA83CXFPqvF2smUYygOXNipYfY4KZhkxS5ltJHq8AuLsVIDriE3IUvmxqReRtMOrdmcIGOqUBIfiW9spjtzcxc43wFcoqAyEs0FeI2AC98wgjc67y2f3X97BFyfBIKXzH3jcK7Gerl%2F%2BALnsORQ66291GvMEAVWps57mM375xamXsEck3XzG2bxGaDefbMJkX3bl9uk0opYXSWHD%2FTC4L0P4XNDCs%2BmB5Z3Nxl2%2FdOe%2Fj822dgf2IBwlma1VxJ%2B8EUxlbmZPSfESIy2bL1X16rBPFB%2Fkjp7guUgWS&X-Amz-Signature=d7c6a64d78ed5f27c79266f36a219d6597cdeb463a3040cf0a37caea32fcd567&X-Amz-SignedHeaders=host&x-id=GetObject)

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
