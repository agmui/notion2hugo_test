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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZWV5NH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1yqUO%2BfOzQNWIGHmvJiCHWRtIEmsVGT8D3oKja78NdQIhAI9TxLxzMxppvnYpXdfxJgGe5V7hKuQfEe1c42FXymKlKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywTCOL2Pwf3qf%2B%2FQgq3APe563oAaR26KvKRy%2BThirbWByNjlCgoBkCAd4xqWOuurybjZUxOECt1a8orz2LrGz91R23YBKmnZjRNdVIXZxqRQAo0zoNqVwZ7CI8EK5KwN4Kiv%2BVjAQutg%2FkMMEx7Si4Xrg4O83jrXErJGrE1sn0UlmptY%2F3bY0s8tUeQ6rj1VL4zXQGWYIN92%2BirAzIPFwsbeeWO0dkeXLC%2BsANjuBVRBL8x9pi3zQMy5rNY6Nfak%2FUFgy6buwSNoKWqR1znKPAQ009kz3VVUFplFtxYI8aNlumzoTZmafgkw0aIz4DEBbZ6yUuA6emkkRCVLDuJ1WvRx4Wv9LLI%2FMSrpZNzrhXqlsJI91gNLzui3bg4US13uuL21ITOfmFi7SYJg%2B1vcUxZXxcHH0GVRDAWjHssRDq%2FIgObezpHT6dbGOUJMe9kkkCx91oav0XSO9Zd3%2FX571IczmHrUTPslGwJYLyDauHz6%2FSm7uHcWlcpWS83qVB6y4%2FkWyF0CI%2BGiwTrhVrG9SH%2FzdblUjFfy4KiOttO%2FXy9aOJAhLyrA0uExdkA226hhwvIRLQPmSRSpFy190Vq%2BQHHbzrvPhDQhRfsmcNMJfuBaNr8XnlIqwLUNUaRmWMcyX28Q2usC6j7QT5lTDK%2FefBBjqkAWqUS3SB%2FVPMI8oSOZjDO9BEHv4AzSmyslF9z7tfJUwOfvmkih6z5HwpYWHCTz3fgQebZEmso9WpKdtZBfLttUXRCF%2B837Ng0LI4ium0xH0mUWm%2FE%2F%2BuZHfAWPFy8D4md9hNLrUhB6CIARVlcbQiJDzzbEjs%2FCcBgZAx%2FUMNBDNAwbVmEMn9qxIpT%2BtMCR%2BcV8t9cJjmQg0Js7SBgavA1UmwPi6x&X-Amz-Signature=de557d05c18ac9fdc7178768774cabe980abb8e77bfb36368e8e69e474c889c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52CBRTU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVXMXlRRZ%2BZpazT%2FfeJ2f%2BxATOrugBQ6NNRk%2F4taQYQIgdy%2B2pwAJO9Os5Hzis5gvuMrtC9awUDAjC2wMY2NDidsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY4EGYKrm%2BlS6V6KCrcA6lTp7Pn9QGZlLIxRLgKBwWQrhNv4HUOBCIjHuLwZGl6Ux%2FgX0Lri7PP2XXZzhTBHgR4U7geoDKOEjFCTePNVfqCLzqGIIJCaTxhb7K8sNmJLylDYaok8oWaIHMNYSDjbgMyfQSIp%2FO7Z4kCD2m8Tq2x7YxjaLjyFbHIqqdMil333dUIAJoW5xyEUsbWPd%2Bp%2B9j3cioF340KZj0lxH6uKBjdbm6G6AmTQSDVCp40J3YVwzy%2FhxUSJqnNiCAo7IyQulRvZuQXWIGETy%2FOEJpi6cmDbzj2YKrrWB5aXR8U2DmuBcxE09elEW1G02uXdtlt0RW5FdKFcFQjwhfIKydlnusKhKUuXlUBNpZpY9Vh038YeQ8B9J%2BTflrr4xk2i5%2FfKkyiQK9JP5DJJHf8o1BTmaan1NrnSOA5%2BulfrQ4%2BK%2BBhuVv1doGnbAlPcCo%2BVTj3qaslj20XgpxNk%2B1z8oRqnCVsR4%2BlJUlQrQSHAKZyu3p8eHKGmsZtxQheVCwcAZeu8tRS7NvGxd1D6Z5bdnUd6D3OhA%2BhR5Uok6NZSoi6AiVeqVceRZv%2B9hIWMZ9autPMegUWYcdvUjM2jmqIKFtowOUnhJKDISBEfzDkgn%2BHZljEIK868WvNaqhVL7xLMLj958EGOqUBwZ8C8NsQyYkkr6uiiR5xiJa9oDXs17phdnV%2B2rSlCyLLD%2BBEc6VR8fFwRlSItOeLot3Cbr%2F%2FjTyEZDJ8S0DWYh%2Fqc%2FC4tW7Bv2ZPRidphHOkXBh56ByfSSuKLyeq4%2FqUTYTWriN92cQnL2BqO4plxDZy37R5OM0W4jeTSzK7JxjT5kkc%2BEIWgsXHxoV6C%2FhObJx8e%2Br2CO3rI1w0R9USnxsAjM04&X-Amz-Signature=76f17b124fea5df06ecbb6e28668f9669c3c02663ea57952cf274af7fa14cdad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
