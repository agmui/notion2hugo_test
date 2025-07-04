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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLI7IXP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCeHJW2Miwd20HpZm2c1leIfD53ItNb21ji90iLt255TgIhALjJmasioMhz0zTEIK0hFADJQ2UkSY4qeWgJgWuNqga3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxteQTzvks8vcpbpNMq3AM2WGGLGmwWn3kL%2FXctFWZ44qU9Tziq4wS91oZd4Kuhq03WpFcbWU7h2zoCxketdPelFC9NEaPNs0jTWw4WWnXJEPlSAuvrPZcruTA%2BZaP4sDQNicAky8VdEDEzxCUtTVVbtL3lHmMMSmvWWAaRPmAsuLVLsDXTpuzkcpY5ibVtpTY%2F8lxJU5nLrHXf%2FwfPndc5QdJO8vpKcxDKBMndV05PrJ5alHe4HBrPN70Y80q5yOULCoT4FppxBvoYucIQLadLNoJ%2FaVAHIFmo16LzRsd5x7N5wlxbZ2JQfn8vYneOfCi6xQ8VB1Z%2FdP1Qa1qwSKzfSJ64p8%2F6e2%2F%2FxloYr%2FoGDn%2BWY88c%2Fq5e4xfHq8Yl8dSozJfGXoF5ktuSW2XotGn9ijPdInRhjUGBiQC8Bz4Ft68UjX9fD4IhkFF3maaS7sIinV%2BRRGsZdB1OOEONklCVBUbdDnagMav7ti0hUz3BcFvkWg4XKowX3YAUSWaen5jywfo09QD2NEL%2B9od3F0MueLwigS8OTMM6NcPIUmWRaSzmTmg6e1amzu%2FUXkyztK6nvVMXvK4p%2F8vEM1JPm83VlU4qkg5yva6Q3EzLr6KuAzfyhe%2BrQjaV2KkR2WARg9pKLNHIiP2yHxqPizCe6KDDBjqkAQHIyx8JVJeMH4W7On6SbQMb7z5QeeK92E1szAGFxtznn9n2igKETMYE8aiLHCWHamPvHeeQuUyuRISzftZO53nGNo8%2FC4qECHAAmCN5oJL9ZoAkGjVqSaz76v%2Bm%2Bws9pLpro2kjYz0RnDONCO9uGgDN5uGSUR093eYmqzoV9WrPJnrH6Q9RyV%2BgZu2dJ85HzMq%2FxdOvRlW2rLi25mYdGzn9LVAK&X-Amz-Signature=04240003c7a2e8f64b6b05135d1b1cb6ed56d26a32a44d671732d4ac237c5b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TZOFBZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYojit4FLABHtjBQho6qNCLgu2VQBKRjkRunzQPAJiDwIgYIWECP15WULhQC5ogM6IzoByTWPK9rFTrFGmHx%2BRY%2Fkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLvj6%2BtrYvi6H558MircA9sAPUq1HyPUHnXz07RJxMlQCn0FR3ZH07aV6DsPigOmSAJ2%2B%2BLM%2FJGI%2BYOP5SSMK9NCkjpBO%2BH1g3ypoMBFknQWEW06IDqfo5d%2FRgbuUmt8tz3n7TDyt9LWCXPXjLkTt3BhUklYFClfcUhFBbrU9fxucyosAOuNM8vTr3sApMJGM12DZKaJZTEiJZI38srdr6XH59Y8hMHhagxsLzYtyTkkuqZcYMj2eieyyQrGYSaUGBlR2zol%2Fkgm2%2FxjwVxxrNKVQU79Oq3NsQrW8CcAKTsQvzHPhgd9QmaB4gxLC%2FP5puBflOO8M4PS4mQiq%2FRtC%2FkO9tK%2BPrP%2Bu2m%2FwM9KfPS9EjmWmOPltV4mOY%2FXr%2FEhN6I9uVAL6r4WVQneNzcxM%2BFuu9IfwzXyiQ0iQQB%2Faya01xoDVyBo9jHaiQuPLxFPIlHBkrzy8IvFwTYq3xYvQnXwP4CA56%2BS%2FRFZhclLhHXbhn59cpK0HjNe7nMP9Axo4jh%2Bf0o6myTYlPmQULxBLmQbroRA2CgCFHtclRMH76NphL1%2BzqUj6REQh50rStxL9yUF3FvJriPix6ymoWaGDumZ66H%2BxrOtUsPzM4PC%2BwijYEdG7LZfUa4QhtFGG7e8MH%2Fb3RvQIE0nPsZvMK7ooMMGOqUBM3igrvbvGOOi2kxIkiwI0TQEdMi6rTGT2RGUWU8LKGUIi29LIAnv590bVjnK90cL2VWMF18aeZp4qBzO5RtSD0v5DYHOOizNmk7jeNHCNKBmQJCIBXNDmWZz8r90sGKakuXyo6SeyK%2BYiu2FKpaVAuZQKVpLI5rDPIiJOaDwQqXj0vGEI9hOK%2FNMMfV%2FNlkac3Z3FWF20dxgWjx2oenv8VTrlP2a&X-Amz-Signature=d71e8d773c509d1acd200794dd733eac0c88dedcdcd32bedf56b92b5318cbc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
