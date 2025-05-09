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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25AF7WX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTltEYJJC65wvpKHLZY%2FtZboAfB0tYldB1oQj5nrxYwAiEAyJsC7bQEhU%2B1iaB84plzSIr%2B%2Ba4hmZP%2BAAZQf4B%2BQy4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0AbYn0oalM%2BCqzWSrcA5Aen7G2vJ32vFnLnRxqqGb%2BOLOKUsevDFpbmu%2B49glk5LRQJ1kOXdV4EcovOuOUanQVAql2FU%2FhleHTA4FOqUsISm06I2EWKxi%2BYOxSs%2F32M9NxTDxMJGy%2F6TFJ%2FyP5NvOJp9Avhj6UPhWnPYhbY4ajJ5NeYGukRIWbguS7bQaZqISuyNAJ5bnPFilSSoMu39iRZeaobnk1YWNngXYb4KpDlXm%2FLIpRpNrtkbHrvhu25Qq5shAkK1N31eU1CRQ%2BqSeL7gl3f0RyBK%2FCY6wkbRu0cB2rNY2osr6qbzApXgey6pkR2vcPuj90PiGSGpjhHh%2FfdxARqZ3bZvlGZHufGPcJeIMqkpTh6QiPU5p5rJ%2FwS%2BwxcbgX5z0HH6FyMzagRRNELwlI%2B3PcPKQ8zNt6LJDF0RjARd0%2BhwvRk8JzhzDtib8%2FRJsoOMswC1FyxQO3WINePcWUcQma1lJrxB1B4f7orclINa256XsNjTHVlxMZNDS%2BIUytlUTNLAN9oTK8XMt2orefEdz89DMAvDZlJNoqEqKfDYVdFlqmIjasjYRALZ9CVqN6uvVQpC6QN1bjliDMdh6fYhxzbephCvUd%2B3vGyyy7x0OxmjIyulh78rhOtu%2BwKil9ARg1kgKLMNir%2BcAGOqUB%2FjRQ%2Fcvq2zTFpBcO6iRniAMiPAN5BEkgA6JdbVg0yidMGRyrC2TvdxNdF%2FfA2YB4tYKvRcNzu5Dn1%2BXDWArbkkyR5mHQVgy9qdF7yPDv7nRR4s8fuH1URU%2BGl8RkP0hOMUbp2815%2FbUrlLtwUpTz1yUD2jWEHTwEQlplxELsC1xmrHIOgSWrr3DehezdE3zxAJ2n1g9F%2Fh%2F4MNx%2F%2B%2ByhSzqTDENT&X-Amz-Signature=06416fd6ea06d0389304b28057a26acb89c191f8ba5111771d8e2a818bdbaf4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLKRWIB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN8xPlcqdOuz3shhupDBbjOOa9ZgYeksJpehnDQGDN3QIhAPriQWT60fPxu1BrzuccSpNVSsSyKuBC4xZsBjm6umojKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPZytPvxov8tvilVEq3AMEhwe3PxMq2XCKBGEkk%2BzD3IXim421zoa5t4pz8O7t8gA%2FRIVY0syY%2Bj%2F3WhDJ%2BRl16VaPxU25fjVqHOwn256f%2BLOmoW6li%2F%2BmObiKU5W3s8dkz1tsOo7n2wuthEKRmPKVc5YCf2zWD0XTRHEorxtQOcP6%2Flb6ECA4Whio6rpZh1YYBEXsL4j5C8r6mmhABHTvDuxHp1XhRGBC4GRsPVPcKGb1ZW5GhWHGwXh0SuRYL45%2FKh%2BmDoFLrq4yuULXSB09tGPlBUUhjQduVJ8LRabKLGNGejdfEvDVLl%2BnHtrGfSiaFKL7uBQEa0wr%2BTUDWPhHNv2qsaLXr1mrve0KBWsWWA2dItC21WteYg0gVs7YTeLTXUF1EkdC72dLK70Fo5YzF7CUJiz87FRZ5oEwbILaPDqvhTU6BRRBV%2F2D%2FQngTUzeRpJnydGTq4locqxnRGlGKWLTQvoJn5YGgX6JUnlG%2FsEaL5cLYlza3Tw6ndLv55WeeKl5SpwVsT6JuiKvoW7kV6LgOCffeIgG7nsNXMSr6w1YdSZdRMGy5x%2BUZQLFYfOqxXvdXW5TzRGiJxQaCJQLxleVlCpCsWmeSIjNP%2Bpo2Z9DUvY3kduKpoo7r5WcepyseadusjMeQQ86iDDWq%2FnABjqkAafGS%2FfeiaurvBTibgyYtF95ycJ0opEFRjESNYzb2%2FrmVvVWL1kP0fOhZkgYbnhxAIA%2FwewjEXwZwMNa4riM7NSfPrqRqBuCn5SCkdxpK%2F2hHTUDZ%2BunPWF5A43CKHPyRbeqrohk7VAKeh0%2FfIO4mxPj5fAYDSB6Lwq4aW2GVZG7y2X7RL916qqhlUq7x5e5r%2BBOC0D9pOS3J%2F%2F%2FwaEm1rnIXNxx&X-Amz-Signature=0e440fb7ccc5a5d20c60467e56a4da2b4e7123a5ced68d93a422f2fa65bf94b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
