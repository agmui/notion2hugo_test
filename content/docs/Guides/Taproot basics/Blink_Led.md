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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRNWZDJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhmZaNFTO39ngyRUVFcaQXO1A4%2BnlsfZDUWvCVlpL84AiEAsGwcOgG4%2FPowDbN2BCFnGAyUq4C9Dzq6Fz7hRIEk288q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEsSV%2FXM7GNCAT54iSrcA5pdcFyzgLLGBwY8kuIDxo7wy1E3Gef%2FDfvvBdGrbv%2FqcLaq58%2BS1onu8dZcWrJaB8jMRXDWLdLoToFZVEoU5XtWm2YATMQOrXnkQVckiDBN86ON272wfYglwQuHsBFnjG818aXHWeBHffYrnfRV107y7DLO%2Fwi0sbv7rAIF7gocgoJRS1On9cmNnQpfxJskyyTd4C9ir6Ynwpcs%2BaA%2BLgZA5Y%2Bu0whL3GHzATkxLSpuTd2HK6YIYAZ%2BY2fY%2FxpcoLhWrR09s81l6bmbFeiJU%2BapJqIFsfijggO9mNVn83b1igRsdfX3wOND4mN%2BRKY%2BAfUPbQR1CiFbBY98izeyuHVP0yd3JjbhPIhI7vYqdpV3Zr25ZQf9LsXttWI3Mmgm1hmE9japT43O7qH6lqKFsMzxELuOxpNHTUrAOcaAJuhxYXfYEOxCuqPwuvc6EYDIfA6DnkF%2Bt0vG6ED6VhE5SFqmy1l%2BtPkdF8fK8GJS%2BQy8ibVLFITF1RtPPmZQdn6vVts1%2BqEB%2FbEg%2FtLZ%2B0SkrD5bfY3vodSIDbIj4mgpf80CR%2F5SPGOESwAAxZ1SfRHT2MRpDQATu%2FNpSydELA6PqIANYnjIxkbeHOzdFjcjPKxIGkwVst5rXu024mp4MJG6m8EGOqUBhMi5WPAPXTnALt7nkWpXEi1ems5WU9eUgKeS2lIMb465Vg%2BH70OuTuy%2FJVB3wpLgs0DaKnhiHt8DfE2cxavcXjRc65%2BsZDZitM0QESyrIQhU0Ys5JkghncayoRgpD49JgEZCOFyuREfEHXnMwRCCEEGaEbs9SVdPyFK08EX%2FHyyx4yZOyFnDmRwUhxbE0tlgCahU2SnGzJSZC%2FyvcEmYuFHxiQ0q&X-Amz-Signature=fb3288c832217887df07976fabb0785944226773b00a7ccc8c6c0d201c405b56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUNGSR4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj%2BaQVIPiYHwmJHMzA3uZa%2BH0ZbbEDjIQlM6OA8ZfGgIgb%2BSYcBl4TWzJlKCnXTihoV%2B9bC%2FSZYpD6z%2BCLrDh0IUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHsoyxn8Rt4YlPikiSrcAwrixxfXV6Xlb7wtz0aD%2FRa25YTLryf094%2BoYAf5q4XfUfWVyfqQ240j1XrlCfo6lDazdh2BLSsx%2FCMJhNjopvvMTShPMqOQVx3wIOihHUtzb0KZ7eK4VgadFbsZ9FbCHk5sSKQx5isCnGvr7jqTgHeqoBa3cycayj%2BLY6woRxHE7qbrB896H9bAMejU4jtvfLCt1f%2F9Lv3aYR51Jhqb15wn7hD83msq63o6GjLWd31dpzFAZYgqfGwOvGf0JhR8FRlE70R0%2BIeA%2BSU14q6m%2BfC27AQEQDBSG%2B8k8wGmuZEaROQA3VsJ4phxdLQaODKsPMVGBwYRuimh3MlQh3l0U3IXWoCdr%2Bt3RL7jSqYvok3EipGlG0F%2BpoC8l1Lcsnt2wa6k80p4CNNAYy11jXfH2m8aO6HwWbH3e9KIDDqxbRR1NfdDODTQaDWnoO5tU6gHmURpXlXW0NfWOsKJFZo9AE2RMnuSUiX6yN8c7mLdin0oQgG8U3U0%2BFRPd5Q4JPETEpDMbfmXwo90E4sFZ%2BmoVSxQJDOaqpB9ccLF8JupzJak5Q1RHqhybvquJhQuCwsQMqumUxJgkA9fts20SxnDqwgjqmKnoYLPPmZIm12BoGN6rOC1BlUag1cKTCPaMIW5m8EGOqUB9IZJGbQBuDkrAumQbZuWsW89SzVvTHucSx41J834bpRgTofT6ZBpic5j3q3e8bhLQDG8DXzuSvUTixDgaG585rArmi7mM72EfZZQgKKMchGROhJ1HUk4ZPidRcHqYSnRRyiYF1%2Fa7Eu4IbxrV3bIpjkn22gKUDGNCZeSctEnsjXYb%2FGwIJFjrlpiPKL7yyKqvfVmylcFqLN4XShgarK2ARn5AL8d&X-Amz-Signature=0dc10ff83240a2ad57202e45a83388f44865da0214918cf34cdb6f34241d9e84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
