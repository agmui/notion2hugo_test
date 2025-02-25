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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDH5PLQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCI%2F1TLNqSxZp%2FqFtNes8KiJugw3JvQzipwX9PQWv8SKAIgB3xhbe%2FaeLqNK%2BRMjp5hlv1Gz0KSJLtFATRU3ZJJ%2BrYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM4gUkyQ%2FCjFLG4xGCrcAyO%2F3oQaO1Ad7JrrACWfJuxKif%2Bt0NaevHsvKXTXaOoTBwLgs%2FtMQfEhG1rBnfCRRISNpShscGIPfus1wEErlYdOytu7R0eEt9aiHd%2F1Rueh2z9k9MWkl246ezPUf94xM5rNyOdIrVX2hfoumzqqDEzxiGkX5GLfbmYWnKaxTANIoW5VBXccjzM9t8BO4jJUPfOMKRFyda3x%2BTbxt6FHbaFMeOFZjh6wGBLJEwGn7YNoJujmUQ0PKvqi7UhzrvvWtFl8ZyktYk8aZ8eiIfVvp%2BijZDTbB9%2FOLI1XHk9XryHaR8PNAxgYg4oEImiapyKArgmRREhHZttr47VEiQnQ6Vq2tnU5SxpStS2uh%2FW9F3NdUr4Zi%2BltH6hiBHyGyiamPEtQeUM8Sf7rEW8E%2Bt%2FLDUTB6OU0m9SvISReCdT61a0qIFCv8Sl0RnNadNTGq17WSeAEoTik9ewAKJOOKRo157p4gmSVJtkxBy9HqLjhfbQdM8OJgwqsBdnuVsBS0TW13myZvF65mkbL9nMyMYVOk%2BelTbJoXVaniXbinw9JyFC5%2F35iO%2BsBAZ3%2FhzdPA5Ll6%2BPp0zbxXCRHo3iBdcJHeMVclVUOCUnJ7LlaRlGvALjpUi7Ztri39VwolIMlMLWC9L0GOqUBOMy0%2FOMyCylSoqGm0HCKB9LAS0D2d%2Bhiwq4NJMUmFVPv5PRZngr25JJqm7OJwOTJtf7js2%2B%2FW1LaQHbSi2tEtD0EiR23fPLHH9GbAPrdXeOCvoFXOxVpxpomy%2BZ6IGM%2FQZl%2FLoDPRAjR%2FOjoOKYjCTBXjet7cqIB90lVFG4gXPiwDdf0ltQG%2BkVa4C56NlV4XauTlVAp9zzkWgpyCuwhIGFT45vr&X-Amz-Signature=dab242d69a8e1baa88b170e457726a0c6721ddaf1ded6aa30ec14852bcdf4223&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKKEOXN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC0WCUMWNNpYZbConl7X6ZVjYdFXH7Ms9Ej5mclTvEnHAIgWQEfiQfBkNYP7P3SwGiweDi0f%2FL37GibH4XMpUr3SJ4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDObET8%2B7aNYMiDvhfyrcA1wtJc%2FpcH%2Bpak%2FGhIjzFtl4644u0X31jYv46oVjemourbBTrLofbrBy4qfHGNqwGDm0lrCnWJdLTB2GV8jxb6fWArWxwXkQ%2FThbiOrbTmdhw0DxbBmaAKpV%2F0f4vKKeFPBylsdh8LJSjm9EsQqkzeUIvyY9xeJoAu%2FVn6lrNYVOb%2Brop%2F2FdvfernLa5yBn62e2hx1UU94J4%2BMVwUV3X69qeITCVHmv9O5RrKzwnwC2oMndoXkrA0%2FL1pAiq%2Fd3%2FSUjbN6wpoekvWiR6YdWuTFKw4Z8SL9Im1QV95jdPatdtlGqC9zSXplZQZ55V4RJis%2FIeXl8Pk%2BANQjxKVT2c42Lt4OOEj2QmargmLU1h8K3LALjv7IIZnM27YQ2snDwwLp6FGXBCyM20L1%2Fl5tuEOjYJ3uoTwVoesGJsVyJ0QeCy0u%2FNWR7vGKejS2ebwBhksEzoxcFLYQ6Gfi9vcOf8udwIgif5Bflxb35Pw6VaYpDgD1yY3gFQVZPfPLGo%2Ftdfabw03EPc73HOi7AFmfP0DMelBFVpjFSMUZ10GR%2FUoAefR6IZUj0rbcQnm9VZZdj2hJsojpooXDgGHFnY785gE2GEJ84gPUR1gatOspg%2F9NhaJAvFMYLEoGvAjonMIuD9L0GOqUB6zSHPkmPUfeW1vzOo%2FF9%2FbEGmI9yd5V9W4OfvNjjuA0Uh2mOb43ZH1x1LFlH5N1ui3ZWIWVmiklYQeUQzsiu3zOnNK%2BtXHllEPKVdftdhFliofentX8Fh%2F3cRelCGdZnFDh2pPNjTI7oesYijpzYcF0KU2N88ToLyzhxwm2Bc1O3y6Xfi9hAu%2BytZ33R0YQGF2tW%2F9Jt6MFNJ2%2FvQ80ON8ZbKbJl&X-Amz-Signature=c614d8114cb824581778241ad420d0f723d16dedff87a887cf456e6f38ff6936&X-Amz-SignedHeaders=host&x-id=GetObject)

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
