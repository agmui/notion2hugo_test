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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EX3M72X%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIE7E2k0Kd%2F1kTG69WSZ%2BuiUD6lCsmPNBVbSBUkFoz0RkAiB%2F0Lb12Cxsih4WGEETx6%2Bujn%2BM1EtWJkG3tSxMc%2FrLsCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxBJ%2BQj6eIYg3Hw46KtwDWLkBL4s2UIvmCGjp4hFUY2SvIm1brBg1X5Ox3825kCBpZytUuX9h9D2MVYHFRqokDrGRwmhIOaSCfgqfHOH25XMmxennP5QsmDx%2BYwMYhyfxuafJMSZLj9%2BgWeJVriJT%2FRn%2FK61NElDJz1TjOhalLuL3uWQqB6smefp6nAwesJogaHA25rqlr%2BWUKh1Om4HfpeO5Mw%2FAxMDN3Qwz%2FEDffjHkJEjAmML0Eh%2FVf45rcEU28PBaRnn21cUHrQ7PwgfzMR%2FKfn3CTlTJpYF0rKgEnoOoDhNl6USTXe3qx6qzAYdNnW5SAYGOD553P53HWKDrPdO60qoBJtVCSSi0zsReS4YKg6cfuZUtVRsDhGWsBVoI1XKtI4nO7nugBXIP5uBhxnFP4%2Bu98sT%2FNAfeoAhKZtI%2FNnIysc4JLCkUpjuY5EfpOjSM%2Fdwz61I5xzu3%2BCnmO%2FKZYJstTOQsGlwMys5iIUZEvRcYZVVWDkNOS22LBWADsBJKT4HW90l%2BlXCXtC5Bo6c9SvlU0HkJuPUjI26vEdD0AjhTW19%2B8qUXj1jpHXYS6bIJzF8z9TN%2BXkEK9PZDH619%2BFLZjloDNzlQgQpGQ0QeUqFEXh4%2BTRCk4UfPzlb4V%2F5x5HBxlZMSrjYwxPylwAY6pgFf8YM%2FgCIexoWjd%2Bwz5J73H2Ogtfs1Ix9vJw9jqlZuW%2FJAAXnaie%2Brtpzo7XY7SquTQ1ChSrfHBS8lhr%2BSIRQWQecv9S2F%2FGXBmcAoxkH9zbTWaI4nkq6z4NjMNbeO1b8ZePD6KmB6xRvdcICLw3yH86zhWZ64R5FWRb5m8awzFWCnKJXuiyax2rAtA4tnwlAIrvwJ65l0qBUi4JvZ%2BlxsG5i8U4vx&X-Amz-Signature=bbf9cc5069364fc90670f69c677a6a023dc3b163242bef202a04848e92569940&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDAARDC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAlLoSoDhdBRvO792vE6JgwAXVhwy6aCh4dlW8FT0uBMAiEAxZTjC0nohHnP%2F2wzyx5QT%2FumoYzT%2FL%2FUPzFkwYicA3sqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKzu1Bi%2FY01irX%2FxSrcAyd0MdTuf%2B3tgXd1OZVYXT0og%2FnMO%2BvyPnejZA%2BjzUaOStYczQ0BaXQtPFZfDrsTrgamx8FkkBulEW9OKNpkC732F6XXBDHX%2Fdzd6%2BKSWONZ%2FXh4gjz9OGaAakM2JYMtfZNh%2FU4x4PTaj4FQfkQ7lKYFdgoy%2FecmFePWzkAiu5%2BjGyPK8gCQ3HMVd7%2F57DLUhmyCXIoqA2ZR1FfLODmJkUVSgH7r0%2FDd0%2BNK%2BUxCH9LkhEz9aa4xh7LnR5zOF1XWmtZlQiggrCj%2FxePozpSpLnmJn6dsqh6%2B8bAEr7oxLBwZJmBhGKkHU6%2F74%2FJwQB0aQTY5auA5UVbkwcJELApqdEMRcdmdUT5R4wnXncg02V6CiJ76%2BDiJme1TazVvX%2B1mw9rTmOA2mdfEpK7jk1%2BeKoIicmjLD36q1v%2FBsm1jwqcpqcU0%2BzQyljEaFWUcDI4dHCUz4U6WykBD2Eik3%2FbwdXfGtfiOMGpfPlYJhP7hcR2uhRQ5RMbbTScfdxEompDpIvyM7QG%2BMB5jMD%2F2mjfrA0rWU4rbodLRgl7EKwl3jhCr%2FzwIP7iUMl2Aj83Pfq6Wl15esnc9o%2BpDK5pU0z%2BhzipXTb5cbLV3fwSxutTHAKeS3RL9uXaNPkVlLDlpMM%2F8pcAGOqUBkU50Xhw0IE8aRBzKAh0xFMMBufK74i%2BFdxApJc2d9D7FZp4cZqmtIaH9LdL%2FvzmyA2qx8x6KdcxsgpDX7jdAFIVIcjuLytDbteKbrVABbPrmllYy5%2FYEKiHY9w%2BRGdmiHtq%2FYTqh3zhkU9RdOngBwOUovpVfqT4Tn5Uzh4iGMc4tK4ZGuqGefP5dIWiZtV8a4%2BjxLlbvOai3F3nt9X8fXUKGTGaJ&X-Amz-Signature=d30f61bc1bdd32eaea389f712d324571c43002eb265e16a4f07de2c96f415350&X-Amz-SignedHeaders=host&x-id=GetObject)

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
