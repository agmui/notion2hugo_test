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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRYI7HH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDaLoia2v2JnQTa9bhm7XWB3ZuSFdLGWd5iQ4OE3WKfpwIge6%2BnJqnAW%2BD3s4aoZCmdIkNZYlCO6b2os%2BwEpTHGEK0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiRIWs6GJj8MdAzVircA5kHfWGFjebcbMsPDvLWJTMbyVpprTy08OCM28mWdqXB94PxjLDNx4oka5U5VdmuB%2BMQ1dG9Lpsbe4%2F4GBNNNdiPwHwZgfxdkohI%2BPn7Lfd4SkqXmxWxQLVP7b3yc11H8e6hioMweQhR40hdzg7lemXmx7CAxqtKW%2B3sNqF9Myx44NCaF3gn0dhNzP3sgnekxW0nwuSw4bN%2FTbLkvQAmW8EIcJ7gLcCWSuwXx7OO5Q69jBmf5n2Ezbqde9A1iWZ4AsosQgSX%2BqO3zqyF758YETEH8CtYW1ZFCAHSSSarPPp70EX3Tupu40EH7tsnz%2BZhkV240G%2BZI%2F%2FOFigF%2FhhQ3JMCUt023ju7Te6C7963tjAH5LoOHyB6zlDzZHoEc4zXMW%2BVCERiH8kUvnToJiZ7K1SyNvAEkXfyryuEfVkbV7Liwa2zMxFjwPYMbM61bxHn1EjLZ6CXichdaEWCeMDwuZ5oGrHoZhDDryvDoDsz1w3jFajf0Y7bwwsdNbnSaYikxqRzLlXY5YXGcivXrQvjko1waCHBRT%2B3BLyvmSWBjv61F0Wm411R88rCKaia63dMyh%2FOelwgaTUl3dTQGE%2BLySM4s3Z0vmwnNr%2BP9W8IIpAnEdb%2B0tKiFkbGkjpMMNjk6sMGOqUBL3jonKrS85iZhXhtVTDXZq1Svoixn%2FWRrRL1s%2FhbuMLUNQlKg%2FNAebMlVngnp%2BF3Qq7q2gzyqNOYg%2FazWvD2UExhJlVFZCuRWPJNdD2CWSC8sfcMiIjbYPoRXueguWCp%2Fc%2Fo0Z8vbUvujGMP4nJrOhbZx81YyPpejiZsYG67Zp9fv76P7NkOqRf52xIqhMeODqWzBDPugYIjPWrAmcchvfdEcsi8&X-Amz-Signature=986710430e0a344e518a72fa7e9fd1a78d0b70fbf9ee48d4a8b8b50b95cfa5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOFCUQC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDbdA0zu%2Fn3ErHLa%2BUEKP%2BsTx%2BSFs0Vo8hxuZ6Yv6qDLAiEAudOmL6c%2B1nmb6Cskxr4nJoyoplfQfn8Dq0O%2Bcb%2BeevAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSz2nq%2BxYYiC%2BydKSrcA4yl%2BblMQUh7goj80FGnHizKOcFJL%2FAxAYvJ4e44S6EX7l9u%2BUZ4oeu5NK6BieTTIA2h4d3DwYuKEk9I7H%2BixK7Cynfgek3Yr5Qy8s9QmwXpi%2BkA660cTZEYvPe0r1HVwjErbRP81oHokCEPuWT%2FsYbxAIqY%2FNzPsxMKc9R81z3M9cQsdcg6Ex0j4hW02KiWoO401G4L%2BPMKOKrWw%2FGAff%2BMGT5ELvBJyelOnOuEBCmAQxfpK4w2GD1zqN0LvCcqga0I4R1%2B2DIRe8a3jttIAwaAUUcOQSpSvgCVp7V957LTxp0yWHmbPjBBHVloGkSTUMgkpYl4z16%2F3FcOhwOPKzggPX1Io3mhHR5hHqFtiaEr8x9m3poFU4%2FUstwSLf68khbk7DixafHT5nU5qg8gzLiFuS%2B%2FtVm0f6TuT6h%2FUg7yco%2BNUMXiBYbAoSFY5R0xo%2FBfMajaoMP5a1rKH448HJn1JZ4Ftk8RYmQK3M958Qqj%2BS2iPtUpKK5J8KXivtRVgUKSAnbIc2mgJgf2DfJEwmwMayy0eVMDuOOKkaV9G2iwmXp6WkITQ3TqkH8QWrCEyUoJvYGLKOMD1X1VMoesdwLgy1e0m9zTK9lnKg6SgkoM9E0Teecf0n3JvDznMNfk6sMGOqUBKwGf8grgcv4uxKj8IpxxwudlMyU7rOU1FM21eYspHPHLgqFNsstFXG1UWDTvXqP4WrK2zLO6vTI1LDevFCGcP6nzW1hDjUT4bb69FPdAbi%2BVg5FqjJBcZruCek7KzvALcbv7IJFhsbmMRD6t4chR0UV9ztmse5yxoBkPmytEO7VSwHwZcUnTlIDTWA%2BTCEwqj4PeKladw8447ofpVBpqSHCXFQ2g&X-Amz-Signature=67826522cf38aea86f36a192fd758ee4c65cfaa7caf7a7f20994505f9261e799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
