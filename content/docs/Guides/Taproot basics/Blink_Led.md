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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q5K6OFV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9yvA0f9QHCpyQzmzR4i10oASG8vmtf7yddkCl4L9yVAiBEgjK8%2B%2BJJnqt4TGlaogi2KvdP2rWTqj3GFMdh8mtQ2Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMSxu4HUBTtrWK56xBKtwDnPxKSO5fEmP0F0%2FsDvcMrhUlXCju9gjCjzjR7TDgyM286rLb7%2Bwr3DmFqwSQ8BO%2F%2B6CDnXxd4G40Hh6Kw0LaYS1FgpEZswfSIeiqCKkfCn5t4x2%2FCN9zVIjz70k7pov9Kj%2BGIWS%2B2AbrAGryHRVf3eVsQzS6KN9bUXoFCQZHxfLi%2FLQhJIufTcXqNgYgbc%2BIn5VH7IKpzvDIIJfXiLboJTGH3jOAIyIhsPZkHVHSYXyatR20XhYvf8F0515e0oK23jggaRCW%2F2sukWdhyLtq5v34f2s8ENtsbqg%2FER7cUIjW4dDGbMZ0kHVWU5QpEhU2DQBotkUnfZC09S%2BIB3TerP52rQDVvKfV8oIeYG%2B30YmbUNrRT14mNcrn%2Flw7p%2F%2FU%2BGeu%2FNNkoLjveMMxdI%2FHiQ7jz4gdNOoIcQqGcH1vKVF209gW1JsiG9C95eTPyhYY37mwaaKD3Mbjq62r01msIWmrQnAc4tgnlyNlLT6ClPf5QaDZ0yGYIYTsZbMurxN44Lk7c0tNa84TTXjwI5MQzVcqKcR40Ak0uRIyArvpNpLvGdWUuwsfIDmRhrH760EQ55J6dzZXFD5LCfkGc4aSrzB9h2vFZ8ZfXTAwAd5L4VT4KL6zAw5eB8cZz%2FQwxpn0wAY6pgGDlUczHumtjVOa5xsp9Od1mmxXjS7gUkAb885cYr%2BTHq4COePWd2TtDyyUgFpyi%2F1%2Bln9dVY3Ws8rY3jBSmkI8QU4lrZvE0g%2Bh%2B0o4CAuRinRXJ9fIsb%2BZ2gBloyuGXs%2F8fKBfxkKmdqFDVUYzXexnwTQXGqmwmsDn6THlqAzhjc798ZDExZ5joWcqnSMzVpb%2FgyUB9yWsSZkvlOFxiejHE8y8feQn&X-Amz-Signature=211a6a94009b25d41f54bc8e7e5f91742e4572988f95494e12ecea446c93c5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMB4K26%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPg0vOspyXeHCWgkvPObvjAO%2BjgAjuNY%2BG5VxLAMedYAiBW7bHkHHG8zj8nsfsHb3%2BkXh7UOPtdIN0z%2BFvWX%2BKWvCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMB8KbrszqrOYMK1eQKtwDiVlEhRjdwOmuHKzTbCwv1O4LkZ1CIm0mf6f1BD5xtbeV6%2BUg3b9VXnmMVjTMqYUX8wRbVUsBEFAQlkxXTK7r9EmubzGmylbK94onLpoaq%2FaKHyDfpOOpSd7pm%2Bu%2Fvkum1loi57VYX7S3dU%2B5MOaQQQ4KzqN8P6iXTmJlcStgJ6qG4PLbHw8lnAoFxqvLo2YnXSuxuAqIC4uP2rrO6dDRRxl3o%2BBg7iDTo6jIoq%2BbFbbJTen4fsnee6EOGK63gj4CcMcfxSma0je4dGaa9SFDn89JcOze2yEQwlsDDaRY1Ta1%2B%2FXky3%2FwvlHXkX2yB4RAnwxcxJ2G5PlxGJdH1ohdflULBWpysCrUZrk6pcNAJOmz%2BTiRJHT5mNqSsSTNmQyskdhwSAYbfqZa6qAAHINk3BurypGwo96d6ICjDjjzqat6MOz7kEqCbOdPUzW2uvMYLPse4ks0ccBuD3rm%2Fu2wbc%2B4LMvAR2LBhg0RnVo%2FT02R4xKuMIHX1wiVM89Aq8BlhIFE6MLisUy8XWgQ6apkUCG%2BiLgf1StaQMIR%2Fdqv%2FS%2FmhDEH7W86j4iN34gpkDZoqNinqSrwo26LmN9r0lptXXE5HwIthYEYGozOb2EOYw01JtMw1SEkr%2B7bxn8w75n0wAY6pgETwZ77%2FuIMVyW%2FH6EFlj377gMMUllrPDTvfXbxmp04RgMA4ETB57DZhoKW861pyeHcE%2F9rggXb3GGZ8w9AdNFQZqAy70Ch21DTMt2rS08wOsZ3pFJY6WSBjSBWfqp%2Fvyny2nYe%2FS9fj4wneklGR5R2bBLhc5%2FrszAZXRyqnaT1BHIoJoiiDWY%2Fl2Pw8lW44kzEPx9HIJEzNWqmKOVaGAZ4CUisyyV0&X-Amz-Signature=fb06449c8cde66a10142e9fe8858ebbd1c75131cbaddae7b55051e8dcdf541e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
