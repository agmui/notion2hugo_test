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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRNXMPX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1nkzFYsI6gvMNgqaPXJF8JoEoMH16mdWYP8j6Bf9vFAiB7M1vho84jAjFIn9gLKSj5r4vuFkkxn%2FpCdoBhsHJg0Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMg4ckDJOiF3k%2F9LUjKtwDs1gSjN6kCUg0oNYkFJlofDAWJfPoCoaI38NQe7CcRZGXiFvOnKvVwXvmWXogJYM6BFItyJhWM%2B5wbRbmoJo9FJSt6jmDeA%2FDUsIsfbNg23Jq79yWijZPSCuVS1%2B8xDB0Tay3lt2EtzCttK5%2FvMS%2Fh72fxTHSJ6AavYm0ApbMw3xjXSrTKIAftHsfyisM60W%2Bfzxdw9Lxh3E0qQ6um08mjtE5tQAXyPTTv7bjEjoigvs%2BkQvPkQ46UebhlL0mhmnd82wsJQoEsuo2gR8HQRgQRdxcslk9A9z7c1iGG%2Fl2wfg0GOAbKPAS6ClN3zvbnCuDB0NzndTpKvqzfiI1alAeMEOlxU0O3rH5CBSd3uIoWPiDCeMmn4g2XyO1LkUuod1nXGLMj%2BKN4mt9UHoy6umg0mD0iHl4Y1Mje%2Ba8zTH%2FRiU7onajTPdy621mJ2nNIPl0woRAkirfcNBM6aVxeZ9v4qc4XLqVSQMDirc7bRXa8Zflt3qZ4r2XVvNMJqqmqCMacwnNeIQgTI0Vx5S6RGviuL2b%2F%2BSv02Hb6tC8MT2C4%2FKD%2Fpq4RIwHFSmArVJvQZVsdwDIN5EtzzTshMJ3RJmH0U5tYPl7yyPLQgLXGLUKhinp8agRHvI%2Fmo04HNMw%2FZHrwAY6pgGVvmufKz7nZRu58j7OBlSKu5p8Or412uoVcDoYumlJwZrj4c5CSJklxFEt4jrTMwGL84GKViqmIkAXBxlmZtlprGkeXvmXB5burcHTSeXK29Vdv7n1rlNodc36jY6vB2wkW2YSxtdyACwlZh5NmTthFei21ZCZdOrCAwgVLKj3eskVxMmrfpFNhZ%2B59SVIzm3Xr84Dkqqs5vNEm15LAd6GOSyX4TZ3&X-Amz-Signature=3f751b2f47e50a16115f78fe447049698190d52a6c8777729d2d4206a87ff407&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOEDIAH2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6u6MA6vmd4Frm%2ByRSaWrFaPyx2qH7xu%2Fm5tw%2B1vGIAIhAPkFHBeGqgRUP0JvUJDd%2BblaFd9Tzkf4Pv4x3TjMRa76Kv8DCFQQABoMNjM3NDIzMTgzODA1IgwWy2Xtp20K5Xv4NGUq3AOYgkolE3uFdwTdOp9fRU03HYKGXq229JUoa72%2B9b%2BCs9ZhRdsi1RyEMrj8k8fvHUwtg7OXJmj8u4%2Bb%2Bitw9zYNqvqkKsC9MCVweqPUrqtFzJ3fKpIVGB6UjCNw6SX%2BBD6pFc2anivRMap7fpE%2BnqKf%2FF2rfbkPBEft7hBPEaaKW2GhR5xArSQracieG02ENIkUrkwZi3fTF4jOHcGknKHyQ2k7159%2BtDfPz6oQZivPimLO9jpbonGmdfWLeuAYaQXfUKAzA%2B49P1LVUPCuraggZnTaBldeEVpE%2F0TTK3UKp5hA12NN7B0WMqwwEOb3%2FW7qXJvc0xhX8coxtD9%2BLtmWyZVXYmtRaiCM%2Fps2XeXRbniOcJ4m7p30LzPZ4Rb6QndO3YDKp8XlBrjWADl3TnjSwQKIl8fiN71ozG%2BrkOC9voy5kmIOCPYASiiHCuJlOmQ8DIxmDim1A8M4BRM5%2F1Bwaa4SaiNZ%2F9HqzIEk21SYJnbxL7iiU6mNvOCKmXamZXKCHowgGYBnPK8tOklYUxl8KrqlRkPSqbuiTmSeZvxNpJi0wk2ZCQ4vA7EAJ2rEz50izOA53rMSqcYBMGoAdL%2F82FZbJ5ucmQonCRcWx0TEhGwJXKDSkaZv6lJvjTDOkevABjqkAbJp6gjLtl2ET%2B4qSA%2BvbeKO2slkgN3MSbh1N3YWWcYjtAcXfewgjyCS96SwoXcIbzw2qauFu6fPhSZ7tqmi4BlJQOeAKRG3nUMvunRQAyyV4OA8M%2BlTPJGeBDT8H8YfTd%2B4QmxIeeNliFHDbg9Ej8OLm9xPYS0yhCcAZJVAww7efHxpYTO8%2BzvTH63zWJ3A3L%2Fj%2FYpkav2O7Bw02zfzIwlUYR9O&X-Amz-Signature=98b8c59288022a3a1529d91ac1a562f05e86b48dd87ef14b5af2dc7ce7e04ced&X-Amz-SignedHeaders=host&x-id=GetObject)

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
