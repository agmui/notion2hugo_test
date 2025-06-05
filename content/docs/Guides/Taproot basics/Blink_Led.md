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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAD2AHLT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGOR%2FXR1TprjPj7oAPBfX0eRaVOBhg4qiTb1xKRbZ%2BayAiEAlbIbOgP2RZKkHC8dYJ%2BDfaMhD2rovJHYkE1Vni9dtPwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDKRGu%2FSqIknUxDzgircA3KYq%2FyojDa6Hbzk%2F8tooxXO6t4%2B1aNQu%2BtzrEY%2B22qpgd%2Bc2ngt4SXqxkoik8uyrvDjPATgdLEHxvdPNSbmuWukryh7r%2F45vJRgVCksDt77Hbuupd6Ew1LT7k%2FKNrSPBF118NH7zI2OYSR8c4CuaLP0%2BiPit0T%2BIP26ns393H%2BxMTFV9oFCrvTEv9G9MDDc0bRqUIS%2Biyi7CdOX%2FQU1TruP8aThK7EjFljygciFvvL4G0AIy3iAxI%2BvKWw8cC1KqKHkUzIY21Jybv2IyN%2B0GzyGv4r%2FT3099Y%2FM9UCfG%2BlVlZKgayGkQ0RKXIrJZ5jsTy4T7ldymjA%2BH5MT4B3V%2B%2BVTZPyF%2BVT2kpAD8Xor2hZJfRlpHMLMi9G1AnzwKWkO11ZVLJ4NmbzNM7vDAmY3oTlIQnf0YYGQLmCs7mK5SvtDJz3RzgvaaDgso84d%2BiLFYuZ8G9lZ%2B1CvQ01w8fr9xG05LP%2BH%2FfZivrTCW41neLR4%2F3fxkSFKYBnMbuUhczCJ68K5gNQqA2pcJrKKIplQzsVQKPlaXI9wdXNFywDf3F%2Fh4ZLAphut3Miw%2BBYXfSkQIb8kHEr%2BUSTwC84syNDbFrLxxpTlTDBa%2BV6sYrfD9fVS7VS0q8uiXX95bpmxMJ2nhMIGOqUB%2FL03H2eu%2FWMlliv1iWnlRSvdi3Wb7%2BBR1Ds77aJbrHb5DZB87riUesBsvhwPfQzgN8wkHnztFFnk55ZSHmDpTzZ0vdn6Zp2dguHY6wkUTFMx2rl3w4bYZCNmgWVsQpcf0c8t5xkgZ5aLCUMpZoCevuJ2vGhJQnZpwf04Hs%2BzQR6C2XXm4WDjeLjS9DsLDb1K%2F31zJTptrpMjR%2FnquqL34kUMr%2BYH&X-Amz-Signature=9437c360c3a7ea8c80ca19033f9cebf00e0b86cd4b719dd566b055fffc662139&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW7KPFU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC%2BWM63sK7f6oziMQYJ%2FFnUQtbBbQQxXK0h81DtYcEIsgIhAO7%2FiRRk4aEM1GlBG3z%2BrXvIkDtdGe%2FcJerxgJpmWUMqKv8DCD0QABoMNjM3NDIzMTgzODA1Igy6mp%2Fy3cIMu%2BDXaJYq3AMa1eygBE4juDOigFl3Srz4myT05jw%2B0aDJM%2FQ9eTZmlciPp7YstZ6EwpeIU40bjiqR%2BhLEQOKzdauXqvL6Tm0ooSjyJ2QLRorimMTGgMJ7TgQqjS7QULaoeu1wMQhVEjZyzJWQ35%2BJxzGeWB7TI8hej%2F%2FgSVALo4Pp9o8hBxBC9JDjMq2nOM4lvU%2B%2BEZ4lh9vsaeVktO8V%2FoEYoS3DYifSKG6EBbFV8%2BHA65ckGSiOhamsSfK0U4KnJSTMh%2F2baUFkIucceD8oEl5KC4dO%2BQP4fY1hVuGD9k4QkIOdyiziQU5p%2B9gTrKH63%2BLk8UqfZGh3X7XjKrVHqkuYRAu4Ed7IEho1j%2Bp3X%2BeCZdbcopVBXRrY4yREf4M8yJO%2Fx%2B%2FP8er0TjOKclehqZOhx3PmUWp8KEC7%2FM%2FhJiOye5cWbIi33iJ1zZ%2FV2%2B4uLSnPreaGE5iCvfn6uk0o2%2Bf%2BzG6eiIy8n1ZZj8IneMyjJ19q5EDubgdAAdhJqQiss8st8n2Ut1CHoqRl0WZ4p5f47kXE%2FCTRIN8VpeezaF564%2FrHWKlQLZk%2BjwLw%2FqYXisPM%2FF8JBgk0VEhEOCohuB%2BrsitfetLUxN31cw%2BTq1mdh1TQzEDPXlWuncem3uyu65oDHzDppoTCBjqkAZSbDqbLKgv5m2B8k1XCIETHrEaPxgmtCeedxlzvxj2VtythI0DP7zHqjg%2B04y6GAnpec8DO3%2BBdNxn%2BQmyOX%2BS%2BEaqypFtzGmZPXAUn%2FE1MkWid4CY5cs7cSYo5Tw6rOjvUn11N2M63%2F02nQbSdeD%2B%2FJPGV8vfKAWtgYPVStsOa%2FJETCton5mnRrpMyW9k970sPuLfVw0A4tWdLxvsMjfugG2fi&X-Amz-Signature=1c95a6c5ff49016500788a4e825c413bfd0e4dcbc9fb617ed65571c839db9f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
