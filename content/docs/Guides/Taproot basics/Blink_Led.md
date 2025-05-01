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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGRXGBJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCTKrTc1QOoGeUTB8lfTZ4oT79dWPPdBY%2Btywf1ycstHwIgYBC8eN7LqzuoDvbZaa2H9CihslogZg8b3BGaVRXGibUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1Ie0DOsUR1b6cJ%2BCrcA0sl2lcdRdwONvplPq9oHsJHoBDTTz9f%2FlAmkBQiVqWWIGiVS5VOuVCdnBhCQ0rJB%2BMYX4gyN6rZUQUH3XhrE7M7FMx75VBPMwUbr%2BdTKXJ7f4xpsW39poImSjxuEPUIa8wxqotL38q3p85CUkj3HG9BFYDuLZ9cdbZ%2BILTwlYKW%2BbD6ZLS9Z%2FLUpeds%2FD0MZfdsTgb2ff4gSCpjfLGc4Mjp6owqjBA%2BT77JO9UrpE7zFlvC7x%2BFbPUWnhaa7Z%2BJBPPAawKI2UcfI0f7yJf6%2FjRhMZrEIMoz%2Fmog6CssENUSbuveUAtHOBeuhcukwVnSxnA2wAE4LWiYyuYhuYuDQq6BkRQcBVFXHQvxXV6gy%2BW7FTZwp9xcKC8uYp4j5BiTONgqEBFFZ7vvyKAYhk%2F8Cov3CBuoDNxE7wsJ8PYxN2gbL3CL1LZMoQ2Fpr0aicWT%2BJJnLTu7uMf4LfYgGRemVrdkJ9kFE%2FSItY2cGii8Sj8lJcd9OTBeEohE%2FSzkImUS3a7lsXJvC5ItZTFoKrIN00T6WgfutlZ7sWy8v1zZX3aoluQ8OrJWT0%2BdPkkSTRXZ03IYFWPDH2IBAKgf23cku8cz5gpotuBw4i1fetI3v3zIjuu%2B6hGWAiyrLtUfMMSRz8AGOqUBY79PhL3R9HG%2FuDNRgWdj7aj4%2Fk1LX9Hx%2FcOxwH19By7DLE99zf35bgXsb%2FlNZtNbc1XcoqH0dX49VbtR60Eptps9bNGUmZhmqefNZMklqzlSNB4ed6iUPR5uTEL7bSZyyPexwcNxsY3Pz%2B32KIAyLHChI1oIbyyvwCy6GoJ3VNLrD0D4dYKrf5tjgy2lWD7toTh%2FBb8ukfkoT26AGgklwuhTcxw4&X-Amz-Signature=2c731893174390cfae50c97cadf4444eb8c3753fca085a34045523057ce78c14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3W4UUOV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICbKo2%2FRICfLJRjYI34jnKPbHGganKSDkM2liI9p7YPkAiB6EEXxQE98MZ2usVj11Hgx39RnUURurZ8Db9VF0bQBNCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhe%2F51XDHTGr6lkX5KtwDMfDEDetJhjStgdzQI1vQhYGoPHIxH4dE6i%2B50UhNUNYTq%2BNmOdxF7cKpc6ByrXvzuQ8z3GeCdAL40Dz1IohwsmD49%2BhkFb92x%2FZc9KrsSS7D7yk9GlhqKbNanLKTaOA38NWpGZfsuC8sgrCSJJLC8FLTWflFEK7qvvmnvC0OBrwZ0u3%2FenaQqw%2Fo86BxTZV2OUneOnhsyWhOo18E%2BiDfdbFRkWgfP6NzKwT1nBzYn5HbEgY0%2BDCsHddzQszo4Tig7mOa1Fxr6ArPZcIfW2Sn8CS9CFajQDEzGMpRaT4tCMxjHZkTnfttIz%2FkSF%2FzAk5xoeN8%2B%2BifPcLV%2B%2FUPXHq%2Fn2owZDSuVzsSSsEBnT8qaYr%2BnI2u5fvpfLaownhVbfN3iQJSy6IChDzWTa%2B%2FUGZipzySETPJO%2BMTVSBik6EHi2PkY7dyOPXIasPE8843FVPd4oIEOlukYj6iAe58SgMWeArgT%2FJyXkpxGTFI4iWCWEIyLrTzrNlIIeuiwGQ%2FBGfh8gcHQQFgXz5YEYhq088%2Bnl92xZUbSqON5VePoLsI4hM0SIgUN5ISL5ecRPiX1gAqcdCK6iYhHUW%2FEiFxSuhbQajAINtDVPuWr88sFpU4sThLCjjSSViwDkqy9%2FUwh5LPwAY6pgHs6loZutYsdKB0uwUf0fyA0cw01T%2FuZIcb2HatlHkF7%2F9f38BCi%2FoXXaxrIMy330ZYkPbnEj%2FoCaGcc2FZejoijUnRnC3z5AAATfW0a4NeMHfghvQfFfmJKj%2BzXerRiFawm4K%2BevYJJBo8mILZESfYBrmPcIFOvQK%2BIBH%2FGUTX2eizUJuX6Gg73vWAxlF4u5eJNrge6DJ9R4dBnf36ls8eMnMsFrO1&X-Amz-Signature=e65c3498c3713b74e863d925f10cb8302c5f8fd9a290a733e8add33a22cfa188&X-Amz-SignedHeaders=host&x-id=GetObject)

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
