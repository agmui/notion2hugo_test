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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3XBTZB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIAYzKKAp0aHq1JO5eAgJ77oFSeHrummhHOBCuHmlEazeAiAMnGd%2FG0Ws8f6tv7Y44VUHwe2NC1Xh8jfik8204z8%2FLCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQBBLPCPWIQQB5MrKtwDPUv%2F38tYx81LySnloTstiFFQBvzf6xzycelYy4LOZw9whFFJXjLyjLwuYrCHUxO4yUUa2NT9iY4OTufgGXiwiRUnEny6T6xkCDi81h2W1hMugvRNJC3pGPYPMYvsB%2B%2BUK7KZjELOrOom86dv5lWYRFW7veJjUqBT75hA4w8GrVswrWJCwkPyd4%2BC9zte1o%2BhDwxRaed5Rv5tRnR4eibBBBtK%2FZPpPGDOWJLwyBiq8dMgINy7GCBnSO6OjjdVVSgxGI5OSq5f5inedUmOPnBlgyZVwNfPqUzZxqjOMvU4TYtT89NS3WblMgnPn1XPY7cY8GvLYtqVRKPZ5%2BjuLCCbhrKJa0r%2Bc4ka9%2FEhdVMla6LHPY1IHyQcguIX7xfDwBirCbEPFjH0zQj6rSW%2BxeWIjc%2Bl%2FQWocx9QU%2FxPfaf3cUlKi9ic4nP3WgW6t4vPLpE7RzRcbKvchV528fZ2w5Mx0rUrIs3zaD1bx%2B7Fa%2BYXTjXB%2BNSszdPlqvf0MwBuIDMDVkte1O2pKiYBFa7%2BV0xKriv3ukdM%2FWWF8vBxxU4FPan9MaZRbAq7nAPARTstAnNdRrSxqr8Yk%2BPc0BCSdqI5W0d9OP8eI%2BaK2tcLI3M%2BQtKjMUaEvQefC7h35j8w%2FtzhvwY6pgE8L%2B4TE3ZTzr8bfBBIrjKm5vEN4Y5hS%2BIpxdSI3vtgZeWfN1RlgHYAiiJrUOL%2FIQeHI4zYRJIEfwMG4yUNfU%2BmQfywOYPQ4EZ4hOWRj1mQCfdZjmR2teUgiv6%2F7WspP336QxJqg11sSTzzhUU67V%2BwII419zglDpPrOX8JqcNpJkd%2BZjVmRzOVgSSSzsCfSXEC8iNtd29cl3aEFqmX0se7Tam%2BW0rP&X-Amz-Signature=cec9f8b994212ad587a6aab53a3b282545366e52867e8ee0433740b4360ca4de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPNHTPJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDB%2FGGuca%2B%2BGshFfiZL7OBpdgaElwfmLBZeSctSUy%2FdogIgYv53BaB8%2FBTAJ4iKf%2BmrckdOVVn7bnNoj4KcktabHDkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLojcj9lP8T3P80TIircA%2FBvPJy5qeb%2BNUI76XUVairMrBpblqfWvGXMrap4Y1EY4H%2BSEMZMwwqvjxOcntPh4LHWOtUe5xW54WRP9ZdJu9fhRUCH%2Bcb9aEJKfmPal3X5jaUBtrF9bkrNb%2FocV5BiLrM3UE4PyC%2BF1gFW%2B74QiF%2FT72n%2FJiAwkFkyzfVSxUzCIUWKPFXyJqw8jdeO0ZqVHJZFm3BmI05OHN%2BQ8eCDex1aDQtPN%2BWINQcNOGbPxdsCoDwRgkVF2mdjOiTpXFPdADqBNltdyHHfKDPxrkYQ6Qaa5bnxvUPSFa5fCwl4%2FY9YrISGQuHI6AnvxTF%2BF85neZ6mRb9px%2F%2FwJsdWsqc50gbxmwVshOgyRTCI9FHUuckEwLMBNHQgukMtWgoP7i1%2BQG3G%2BlR%2FwZ960WqE40xQko52dw33Rq5cXKyjS230kLy76CSi2Rja31nqqMR%2FMYCeTxBEnO6xQQe5YUfM3UJ14tvD8HfxJmQAsJbPVG6zV8BvicZjDNiDslI5c2CZrWniaPLonr%2FVC%2F%2FX0TBQ0qJt32R%2BN8%2Bmmq4AQPW%2B2d%2FSruvldmQSFu1OYxqP6u%2FeC910r8ZZYWR%2BSbS%2Bt%2BGk6F9HHqdaZP0ZwFbz5bHGc1hZH8%2FUhL91a9Lf%2F3iyA1HCMNTd4b8GOqUB1eChYttPLIm10nyjuFOoTAbpxXZRuWyWRQ34V5nHGPT0VOuoRyKnc5hdlBbIPiojwbOtb%2F7GVJtPZrd%2FsCbqYFakG1wa042F8l8xgsQp5XSxmK20TWuk9k6fP3aFXazh4awQnRdhCbjmtJhdMIyf4QUWFcH0FHqwbqjuJ4dJQMANUZIXa8wokEj20A%2B3UgebmYc%2F0bSU5gaW8UrPEk2l%2FXlV5mLN&X-Amz-Signature=4aa5042d593e24c90366db7366285be2936749d7faa0e924248f5eb1fc411b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
