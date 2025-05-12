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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUO5TEM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCUd3aTEKP1uZPGVMOrPGeOqL35yIar0FGQqD%2FUswn3TQIhAMTzPhAJ1Kdm%2BSe%2BxKgMVy4Ceep3mflzgw55RS259eDiKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2p5BHWOmL2cNI7JYq3AMCkkMSwDGhxuNSjl3hIcCpvLiQVe1YpniJw2GKoN%2B%2FWl2RHaec1BJZqP9D%2F8TbtaDghe8DVdH3l3zc9KFo85Kxx9I%2BgVB%2ByrM7oeX%2BBNw1TWHsgeDU4PJ1KCa%2FxKYPsNf6o7Oc3slNlsu7deoFm22U9fRC0YMSLpQ9h3WVWQ3jwYJNIWZO4VaEt4OT7FwMLKM9HWRas4vmrLaR8AkQh%2FgsIj1zrCpbvGHCDuOQEI3kDUy1d%2BWsew6L8Gc%2B3%2BwGYwG13sGvkJZvbdkpILw3tMXcb1BKtDBjCvNafAbfiSyA1WVb2fp1uXaLIi0eUhB1kb0AUNeU2PWv9LsbsRjqN8vz8xVL0m%2Fo0y5vLecquh95hH272jO1LIiRYBzlFy8py5Z07ugF3UO6ifb4Vh6nYBxnwunhnvoo6vnDGunG8CtEz49lu1Mf%2FiGxWanSr2%2FQPjR%2BfMsew%2B86TbO4ej1rjcI0IBeSikax31%2B8hVdHasYrUpe32MYFHi%2B2UuAf2N6Dlb6PlCLV5SAXQ7DRKmVN%2BaZMHdfsQuE1oUNYC%2BY%2F43A48NV%2ByGNHXXyvnHV0HKg8VIBKm9kRr1wJI0Jz0cblwEMQGKvpJWpSJZ6O%2BlY1ZlNaqYZQ8lVkbbzy8vlXbjCbnYjBBjqkAVp8xVtmz1MhgN6rbbdriQM%2F9wEC6Xldw4CfkcjC8ai%2F4oFdTvi%2FiXGjfRE2Vg8jjRj0F92P%2FSjwMCTAYX%2FpTSJV2uY7W9cPd%2BJLcgXQSK8UY%2FOUCSixFLZ5hxeAfDPnxug59nw05I8KG%2F%2BE3IJjVBmERZOADRaJSViNCqe7ateS%2FQyJjrUbtoLNtI5A8cci5pZR4Vu0iTbNQRHm%2B%2BTI2kmfc5c4&X-Amz-Signature=a6e3e1fd0a1731f9993589ebb2b150deeef7d535d0b2c56492e5945b3c29a791&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLQ7W26%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBmnOWWxs1EAx0RgLPnNeE8bKD5%2BXoBZ%2BQ%2FVb2f9pK1HAiEAnmXp7JA87O%2Bz7Jzcm0lnqHWIYXr0nVvt8LcTV6zy1YIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLmHT8yBcdWcdSbwircA%2B1vWZQgFV%2BV1SCt6zxbbnav%2Fo62rcdJejz%2BmXAgDSSCjrXU5Mb61d31pgh7X494d0TNLaiLQAok8FMNQJDVBUmbZHQ5CC5rv906EZsA03WtqHoatLNtnEgDUi9sdG2iiuEd3z1yuvMjWYT%2FRSlC6hNQBbE%2F8v22gRt9ZweJt8I4KgQ3yrYzmil7XwaeTd8MtBOgebtAP4GA1fgHglmAM9GihnRWF9SbA8M%2FZZBr1w%2FgiZo9tz3jL%2BCkXlT4bdfL5QMCaThwDKSzcuURtKks35MkAt5PNSIYfTtE8%2FosXSF7l%2FcGbXcZFZ88bDzBjabwnA%2FEMG8dD7lYnYU5PqSZx42pjqhlYAZRQLOtzSLRFG6y3%2F4BGXNlstnhWhV3HuiMeLAVOwOFiMNpfIIq6uBYE3axrunIsGylg%2Fr%2FBtNMRsLzfEI0Ax%2FUmKpAp%2B4aAI%2FWdxbpZH9bJNge%2FZqlkP1VcLWvB2nxtCOJJCHUkmS45SGirxdVginTJsYgQK0XUBAC6yG%2BSS39ZNArfblxNWS4coY1kpGvnHXVP4sMNu5hYabxPk7bH9Mh4oR3iCOCExToObODvCXVGzssYCRYpdMnYfNMq43az2VcS8ql6Mkanb0RKW9JMim8pwVByILxMMmEiMEGOqUBIbxrehdWvS%2B9EIdjneLTRY%2FTWY9OoLqLrm%2BChKl6AFSb3g4yIA5tm%2Bg0VayFwIfRneq4YMTDtkc28GXvWzW%2Ftsw%2BG09boGoYMHLMZAMS5SJ8cplABY2jI%2Fpp2iCqcSzsta9MKWKZO3JKO2arCotAahiSaajvlWY4YnWnR5QrkjtaG%2FGVRxxCnNH0gDkkFJpxPNlzpOj3uIxERNIfTiAZgf6GFWmS&X-Amz-Signature=a79dab7b7a9ec997ab3a68fb3ec8ce86ae8d60c53021751bfbcd99afc3821095&X-Amz-SignedHeaders=host&x-id=GetObject)

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
