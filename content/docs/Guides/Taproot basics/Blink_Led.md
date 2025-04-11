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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJUDKKHS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCM%2FTJtqfbJ2ZxVT5sXo0CA0EjG24FcFf2dxFcUDTQtfQIhAI3ch%2FGBxzsC9yymtTeliPnDIuZDUvRNWhCuNwQJoxOYKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhYGtKdk2wWgQdIdUq3AND0TPvnidOZd1eFTllIyViG0vPeFhcSy3JVCDeQP38pbC1H7MwYRP4KTvlRAqXHlMjh8FGydLC3OEjB%2B4NOD%2FiaGjdt2I%2FwPHRB3aSf71Qz58%2Fa5oWeYJrp3w7%2B3YcsTipOUlkdhT8VnYNcRhRqd4%2B4ZoQ5b%2FfVNy%2BrOp7nGK25lrlf9JUIQi1E3kKszZcfp8QSvldi5%2BaeKJbI7%2FEDJcXBagjBlEPcr28a4p8my1pyTlAK4vkPFhgMvZcOmEEG%2B%2BcH17GKNwhf0vW4oSKRwMT4faiidZhuvePSxELLYquy7EX9dXTg6plbrslQCyDKO4ai5AXQXl9t%2F6YGRqZ9FSRXDyKDvstW2jVO3Ehu1U8lnbVpvec54TkBgxEKx2rxRgvIr%2FNpVG2%2B6%2Fx1Rnn1HCh9%2FsL0bIdqNs9UTNv3FqYh3cEKNp7UuLxeI7yokSA2oYwrPy06woEqiCJCPdlSoNbbO3SpCkPEf%2F6rfoosmKJOdxjA7HHF8Yf8JtyO7h3Vz9%2FNwcbd6JMUJ3xHHQKKbwsIl%2BazRzTQ7szIMFLWXhlfZ72TssX3iEv%2BRy13vmxM7zsY57lzrBX04JgC%2BRy82ZnVdI32rbqyCPBkswVWJQU30XPsbdsmO4UyEBvpjDBm%2BS%2FBjqkATNgpTOiQPm9S5p5OGUpHdOqou31Wonx5ZyaYKw9CpuVQ7muyZVys3ea%2F%2BMeIYJjqPrDGlbuth1KHDxC7Jj9%2BKt0OxHnXi5MgbJaPxTZxAwIQVW9WW0LYz%2BuatBVXoiEyhqxHeJxf%2Bo9ZSrKI%2FC34RbuBj%2BQuRHNeyAmRIGj%2FyjJ%2F48NqL6TL159%2FeyzTPWVNsB7Kkj%2FlHe4fc87%2F098xDBYMA8U&X-Amz-Signature=8d85fae97275b92c7feaae4cc853472834d86f4ddf6e7626aa58b31435fd0e44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MFWLH4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhuxuAD469d8tf7%2BlGopHCQItwkQBQ4Z1A5Fl%2Bw8F9zAIgEbXb%2B0XJ9iT1Lpck07ZY%2FhM%2BTMkhE%2FjyutESfzepWPoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk8MT2Fohq%2FaxFQ%2FircAxeXwnlx8ikjCGLvUmJ4eAZzlh%2BwLnlRfFP0z4TTY8KtBqc3tlc%2BjQ388GaSjYuViZ9%2B2vHsFBz%2B7kKjbpkeXKM0imNQKybxgwLT%2BQZyFRD%2F28MU7YxinEKEhoRGSBU2um5EY%2FHw7QE28YIDid8yBwxDIeKnRimsyGaGdChKXtTHDk47WT8FDwWLYgDlFxhfVa5EtNY4goV%2Fr1FW0zWdVl5snqhsqRdYIWgQv4atn1%2BCbM3z2UQN4%2FQIcqYBPgpz5X6ej%2B0WpxRy6tG1aK8uer9xHe%2FHqLeA%2FN%2BAH8%2FDcSFyDpE3sx4As89FAAiF1nGyfBRnIID0TRyabWmnrv8LYMXIYkfL0umgzfhYuSkrHP5Ewa0DpYakVkqwTH5A%2BVPDlDJiuO158roE4jYeA5HhUVosRCGQSfVvsq9%2BFulG0qGVaJUmYpkc1Cg7EOk743GHGEpKaY7jY%2FCPa%2BDNjlr11tWr6TYMz68iEY6hkShYVfrYHXo%2Fv%2F1Mr9HkS7fF%2BP4c5O8moHfAMzSdoKnlmgs5m9WBPkt5kzt7TSvW9VT0QywJLKYOtIU7v%2Fhq8iAIa6I6IS3MgY5JU%2FkMZyKZ1Q3VuUG1KsClG2T7hSKBqnIP4jJjrW%2FCwxT9TLOK2m1uMKec5L8GOqUBQSrTy%2FrBv0nF4e9qgkIu2gWpY3JziX00TAmAS04IWfqlNcu5LE4fVAkvll6tLaH65jGj%2Fi%2FEomF%2BY6dd8MW8E9Lmn97wcrWIMeB784eXkP9BUX2TaaMB4tHFTq6Iq4NYLjUjXriM0vVWOfL2ZuNLqOGjkf%2FONVQikSr7tYLN5dvmps1ktKhUOO2F2%2FRRhzRHPIX2bZyN8uGr5sl8QAPhbb%2BXUbJx&X-Amz-Signature=ee127aaad20d949b0ea46ef4a08e83a7df5b80d67caa37877d04cdf93e4eb4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
