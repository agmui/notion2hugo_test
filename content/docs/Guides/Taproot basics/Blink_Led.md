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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVVP3I3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc3PGlvqAyPOHKkRVHVKqKDdhRax8Ycd9gYV%2BSeSn%2BZAiEA0ZcAYlYXzK%2FV4tJ%2Bb0KSxlD6B97kXvDpRwq%2BVR%2FYy%2BMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FXj89jeA%2FEyl8iayrcA59jC1QuXbXrXNauLHR7j%2FO9gHdwFp1VXwW4egqQdFv73U8MsKtOkgNobKVMt7MCZ2iwne0VZ2by20o6GODdMe4ncGOcN%2Fja%2Ft%2BeWJ2rEe1KM6jCQScVkEVO4Qrlz44qsTYPq6MvUBKe95hlKEQVTqJ0ea85A7A8%2FLZqkBkVUuI9bzyNN0V7W4ZJpP2RRYMfkcfAVU4Uhgj7TaaZOx0MzXf2vbGbwBQkZk%2FGkO6zVEg06j6%2F27sH5vefZFhVA7us16BdzNjj9g9zmizu72621gISCQrrBHVX1wRd8%2F1Ww%2Bkoqrko1zbIWuiAXTNOaLlypB5cf5SO%2BnYUjf7xuhWImJxV57ct533eZj27RaX64gqeDWrp8uRQs6A9xWQaRg%2BW%2BFb3wILB18Xg1YBndBNkpVIn7cpB%2FjMSOrLYHmF42ZEO4blqtHAEhHrlHNYwTDxXIBJkMuPh1oAGMkyotBGOV8TNNv44syFIKt3TKlvftWHZMuPr%2BHrylPeTl2lHzpSrXpk6AWbTZK2dxvoAsOpL6my4hgWA5s0kf%2B9f1p%2BI0oywWeHQLwy0a07evvoevPsoxFUWDx7oWvFgEOy6vPiV%2FDDnRfQTD4yE8xoWja0Sn8jcKtfLxSYDGtn7hVwGMMPrisMGOqUBOmag3QHpTakfBHB9j7N6CzJXgfYHqEIdgMyG0z%2FcJ1nEQ6JYYl0%2FS4CLwshu4KbPHj4OdjFt38l%2F98vEPO4%2B%2FExriMaXBs0LP28bm6yEvu8v9sFF3PdmNB%2FDoAnxt4NItdFEfMUzSm%2BkJXTAvQdlNe7%2FEoVjp%2FhEGME5CtPSXE%2FD9B5PkwRcKnE0ToC3hXMJwAVRlHbp3RryRquwTQJHpu22wK3V&X-Amz-Signature=42adb6bf00aebbaff744fa777e8d6a1809b928ec8e9e7f9ae49fa2d4dda6c4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQC6IF4F%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJAn8ILBib6Cmp%2FionyCYcYRGFv0uGfUfEx4JsEyAg8AiEA%2FSekPnwtRLp1h1vNgTzRP13GTTzXE%2FLsPLt%2BsROv6DUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKeLKnm2CAnW2agzCrcA1sqKbVefEIjhKiX%2FXcXf%2FTE3l6doj2c9Xc7N5q1YxhXq9P13U0YrADPN6gW5iu%2FcOONSfh9AbUprhmLjARGnfStFQiWSC3wj2%2FzBVbGJ5ZKD3iVatDZYBkYHF8pzCxvgrj4r0S%2F0avVa5m9wI7rSurXeDo08FA0F2Dvg3gmzPAljLtLtOjP7aN5bjlxpKHG1cxSOexPvA3DB23Ru0aoIf1MxNpjX99DXTBkNsnx0%2BP0Ga3c0TlCAlXE4n7q%2FJSkiY5b4LyGUaEjl%2F0e3hC5qcb8uSnRGnnxxBGvZgsIUIY3gzbqKUiFMAPQ%2F0ZMtsl4cC8R1aCPfRyGsjl7klzokpeoRwlUaHTk%2BTQRVPd103zcFTbuZZ7LPaUtriwDC1cPEtWQ%2FczRJDNH2d%2FaL0JdTsgBN7l9WscuYMULo%2FM1hhww4JhHtnBQa5ZuaBaiqViRzWjp%2FRHZ4uB5zTnkitHKMbjPZVPHANNFexcoC%2FlZi9qsSaKmWcBTp8ChJesNp9P1ZK1g0WjXjckN8FzoYwUknemRF8dSzoFKfQQ1E98QvkyzQNksuF3GMpdKsLdC1TvYq0UrHbbGCimvl8vKNVnXewng7CZlZVuCU70ZC1Pat%2B%2Ba4bM62vZNIYcM4el5ML%2FrisMGOqUBlziVDOtbx6aJq4JKWDybXVC7miaDBMo7UEoA9sulrWBpPtCEtGnRfbA0f1Mku1puqP2E32ObCErQ1wGbey54XntpiggGecuIVtjyGNA0THq7CEKJrh0GFMiWjOEe792K1Uu3r%2BO3Q2bUl3MIECPpxFZC%2BsDzileqFlenb%2FkcvCQE8%2F%2Fw9%2FtdtNA9Uq8ImhjwZRqzUAjzkgk%2Fk0Vei6VyipYi%2B1t4&X-Amz-Signature=df21e8969c438b55591226c4703c2fac538924440a4c0df6227ef0891bb2de74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
