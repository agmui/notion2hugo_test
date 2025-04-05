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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUY3P7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtoTYLROk7HA2J%2Bcg4f8tMO2rRRjq7Jcd%2BSwlzJudiZAiAoE7TLvSGcB5l%2BzmEvfL%2FX4%2B%2BL8FNF9zHHMNGLUnLxESr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMyCHBvWar99qfV3jSKtwDOCahKGqJDBvAg1%2BZ%2BbAbirdcG6KqMS2T7JiXj77TRrTdEecRPjBnYkmB4xWrc8xfTX1uIbXUSBLL7BfKBbQvj2zFoSJu8d5m1L5hBqcswgjNJpHF2IS0EtVMmsMWjZ%2BaBOb5yPYBok25mgLNp%2FNNpsUMxTxOVuXv60wufzehQZ18p%2BEz3pnNpJtTYv17CGk74Z8O%2FlYKwiGHRA85CDa9mlfUjqahsgQ%2Ft9D4ncHxYWxm1j3MyVoNUciwv%2B02KuUJvNwv40QHWVHPRlYyY6BlZagehBNuETSpn7QXPReFw%2FGh7br1clIursVrPBNBMgAiwMEkNSj%2FzJ9WwDNapjcSP3jbiGwCF%2ByavjOVLQJKmyvEYgoqvQr7TY3ePzQQK6RYVvqTobjNcSA7hg90b%2B%2BKzmXivvmBPRLRyOnACCTm4GrFTh2iETWJZsA0lL7jvCFAgjiCns1oZ%2BVHFfiaLEGMvTKgKf2jG%2FM6it8gUelYgXKqHNcCV0sFszKt2DFs1h3BcU4vRmC0Heduvh%2FonO9y72bn%2BISCZeLOuYKSOTkD2Pye7XcF7S5ZEMaSGzxVy%2Fv0exEvmJGFOZCku8jtAVzmesXRaCBebS8HmSh6yz4DDvZgw92JVeLxovH6IBIw6cjFvwY6pgHlxQzdbLSR9RV6r2AUP8NT5wx6z4LmDMbSIwOzYsNM5bY23F1tN0V3jg8R0kqXfZZpgrmorPMsNO0V%2FCQdBQ9E3aGz6qleQkCCCzG9ARd3TVXO6J3tzPob3eApRWSv%2BPeMssiQcQWlhxFWndA5uW9%2F6VJtgEO4x2dlCjBGtxHkwWcjqQPvuWiCgqj3W1KArtyovUF4tOZjDf%2FSIsePuk8qAh28tH8%2F&X-Amz-Signature=eaf8daeda8ce007f6213c490ba6a354eebdacf4b9d6d8a1f66ef8b66a756a656&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQAB2IN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUjy5Ei5fTjPtBp5sB%2F69LU9y%2BN%2F3lzGJCsM4PI%2BPzqAIhAOI%2F%2BVqqPdVtQlBQSzdJCCYqS%2F%2FOy0PG%2BS1x7BqUbbDAKv8DCDIQABoMNjM3NDIzMTgzODA1IgxDBrHsyxD99Je51IQq3APETYmEsTxs7xlvriUs427VQalRDC8JJhyNqmwd7K9lrGZS4rfa8EdXp7UPjAI236QO900mfPIQKUUqOMZIIOLBJPmS8KLH87h9aywU%2BiAbMCcNEKHEHI%2B90cVm50ywqtLRbqwJSMeUmIesQ1EmEBMlmXNr59vVNWgxcUnK85k%2BVlhY38qbfDiXc5uNYPK4X4qUUpgD9UKXiXTJwb9Y9Yr%2Bi1FEDVE2WoXlqYQJq8mHFkMvk8ZS7WgzbWNfaG9ZA%2BqbE0fBjtaP5sNNVt0OGS7lSHKG9ukNvpf7Phdfc9zAIboaKD5hqJhkPXDSOzdcyBJEzrjicYOd7LR3Y7PBrJ%2Fj2SXXT9%2BpyIldQwlingx1NlchFOx0yS%2BOdssQGsFXdIGG6xisx%2B4BWFCgVHjdCXea%2FknNQhIKufp3d6ZQqtV0E%2BOixazYweypu88Oq1XVA6UuVqRik%2Ft%2FTm35%2FnnF8ptLDsO0NpZcg2unmuGBbIch%2F8%2BORklzDRvaGTZVo%2BKHTonEpzXsQFL3Npb%2BsvjYBsdbQpdux2emHxBIdyR4ua%2FkNpIbcON7AkREuLRNDbrVM8aRpnLWwPIe1XdHAt2GzAHIlHUGi9STSNw5UHChdilxVlslTF48FAENGlMIRTDLyMW%2FBjqkATMMdTN5Yifj2aLYkKZqyFy2FxT5M6PoddkDxR%2FsSLIHdt5AFh4hRCgN%2F9r41%2BujYYE1990dVHBGVOrY40toHOkGXlkohreDXk8IrCqVAcYjAD5Ui6P7ukiDOpZAFG%2B5H4bIezbtCz2pcDU9DZ4HjI8bFpeYg%2F78TqiI9TRGVGSV%2FaRGwg%2F32zP2WYdt1VE320YYD2o%2F%2FIu%2FXJm1ofBTAfatTysQ&X-Amz-Signature=c83396c308cfaf5c57673cba6751b073c57f2e0e567b7457b2fb72dd165c9192&X-Amz-SignedHeaders=host&x-id=GetObject)

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
