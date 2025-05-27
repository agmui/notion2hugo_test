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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFUPY5E%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpwFfSNihOXoxu1zTeATvQLhjPVlx3Vpg7PXxwWsHe0QIgML5wtSu5%2B%2F773FTTqvNQzsyr8G80i9Ofc9teKKixTtAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKfwhCoqnRE7%2Bc7D3SrcA6sXiznY0%2BZuFM0Co3Z5hfeMMhGiqXNjaFnDCTit0boYv0HUUbwDJJ%2B1LE4C1mzoOiJcciTh4V%2F5OXLfVVdbfx5XvMJHpmSWUAM%2Fn6ven%2BV9Ym%2FYShC1HEBlLwirx2ASJLsGvv2WMyoLxRpqLkgLv8G7vn%2BNBPZXfl4JtFRP3i1STAkyluQVUgerpfp0RgxqcjP0QozwNWq5G3StDklduCTnT5jDouv%2BU6CTTAqhQVjGle205LEE9Z9JJXws%2FMAaA%2Bo5pDb9MYPjIgzuWMmAgrZLXf7Pu5UAe0DXhapMfmXKOzpGrs7rg4ICuOCYJefTSezQuQYO5I%2FuZm1ykbXeykGjCHYaUzz37e%2FF0K4irYesuqTBstUtMrG3WIifm%2F0V0ENgQe33TFdZerd1pxAWlGAF025fuVLPt%2FUtc9DEoBYSXMHD8AVLVaH%2BeWoWajqhJyi4qxjwajSCoL5m%2By%2FiqDHrxkJniKBFVGaxMIEWN%2BR2R3eGyjPcz8EbXZk%2BlWj7AWwSuNiUOpqoKVhGtnE%2F1nO%2FKoLQpV8unRpu9oML2d0Q7%2BBd%2BjldQZF0oDpMwtAzL4v%2BfUS%2F6AjjxNYPhb%2F4TQLyHrHAsBJRJn7EWtFvDfiobieh6F%2FqAKI9sZACMITK2MEGOqUB88joGNL9xFEL%2BkSBggmCA1qVKTkZDsGjci8WT6OfqtJ7Q48tbGLf0EPntu1An4SW%2F%2FKr3Ll8uB9%2FJfhP%2B8ZTZk6kDsj0lx5bSx62xDjODlQTraXYGatF6vNQl0o%2BUN4YLcPbK1iRlcdFL%2BNbMag0aVjZ6WljOQgVy1HFc8UPt2KAOW%2F%2FTGQdQjQBS0iuo9dYMsqeqi07CnoOCOAoynemMXiPtlRp&X-Amz-Signature=e3dd8a687eb4d9564f5dedc2c47837050d7661f6417ed719fa3b290269e51ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDCJKU57%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmknF4mdJ9lHanbdhxSKBpRZf8orf7wYaKhne8cdRQXAIgFitNAXPXD%2F1fw%2B0UQxBAhZrSajTYnXbPxHYM%2Fsr%2Bmagq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKrCzg1Mj6ZyEfIAiCrcA1TstkQnzThDMeLnqkHKro78pyHGdEXtPXjIUC4xqICqHnA0vS1m4oKeqdyzQTXkOSOP6Z4H7rM1xAZWCl1CrBAXRbCSgaxpbHX7nKQSQ29cN4amdbocWM9Zkj0KTXRhOHk0tuA9Kw0IuoQriins6xqBlMK%2FI%2F1ergelvBcg0j7irg5lLVuuaFmiMnIKlF0HG%2FwRx1IgVpdmUsqNbJX%2FihfC8kVHb7slZBPlvy40De2uX1c57q7Bvii3qaLf8dBrnhITVy9GS%2BBdQJLcVdgRk41Bq99RE9FCSIYLgikczSNJFXKTVnYrArq5aCDRURTN%2BE%2B5LSwTwYOdxqdOZsR56IVGFP6dZYF8VngzUQQfO%2BDaOdhqZS9GZHap%2BeBdO2xWBVoAR6xS%2FF8f1phZEzRaExx%2Bg9D0k6USYujc99UsVc4Qd1%2B1StZjCZnSsxzzXG8pKKSVUqvzFEp5CFX71%2Fjrki7rKt7zvSiLYfm9GNWkCO66bc4f1kZZot7jZY5svJNI%2BtOGOn2Qtftr2di8u5ksEmsEk8l%2FEvUlXdSSB8%2Fc5UY0Y60%2BgCNo11z99rNuZZlQ3y%2FCJWQtqmP8bj38XPg%2FlLHID3%2FtmOI1xDUpmMphs2nVs%2BdgTkNHt8Z7ve%2BEMK7K2MEGOqUBXqXgL%2FaezVBma4L73pTWrk8Otn%2BNCl3Vt3F%2BlT%2FviEmqFVj%2F9M%2B4ai2cGRukDMIHgWNBHh%2BdZZdjmdzgempqKvN%2FF6mJwC%2Fyu6fFWY49pAbGjYIb0Q8oq7E%2BBVCFPTmXOELzY%2FWataCHxJFNv%2Fihh8nixrN0ZucQP3PqrMacJlk7%2FnxzPIb58DTtj5C0XWMzHr0wRsmrViFon99j9ZcaEAZxEA7h&X-Amz-Signature=caa44551e9db5a2f6ded7d2e8b9ebf6d78f955f630aed14061a7e3b5e4976dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
