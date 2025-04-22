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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFLDQCA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDuwlU7fZo%2FUWMhAbTo9C87UwnKyoGiiHFjPUxXoJYZvgIgKN9LNDzgkGNSK8wMcG059KzYXS1L4LDDzvKiPD47yP8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiztas%2Fun5JMdKW1ircA1pA1lRxMLNCKhLMY%2Bk2rzjnnE3tEuEHmrl1ECpWswG3XYu0NMP5uTAiy7MKTR3n51jds2CgpuyxUGREZJVszMe8xZs6QJNi6fGTUMmlP7XUIQNvVrLKP41j6P7tdQyLz5qoPUN7jI7y7bIfyLmNgd5BW%2BHOAWzn1ryZbmEardCe2jaKQo9OTvt6%2Flrtq8Q%2Bfw39PbymSXR8gzuwhdLgDWqCJfXPa8PSbRilaNc7AgHKjW0ooafKxC%2FZ%2Fm0K8htjCK9EKl3pxfIxiGr7KUpP6UdSm%2F3WbpnLan1PfmQsk3znDhill5WbRIXbDmutIJK6I1ucYVKn4HCEC3vLYBMdO4DKkbB%2Fl3TTk0AmIrhP3bssMXYigfDz59NajF1z%2FW6Np1gcutFmP34YL9gVPvNlFCavFMQ4yP%2BrviXGFuyMgfj1TxXGtVbPJhnLK1wrED13XyIxTC98AoKC6jq7M5ZAXjF4t15MLCaOp1VXDDEvzSbJ4%2B07ismb5azL954rPNKJ%2Fo8ny%2F8PCHWe8Pv2jDB6QhcEGlwtCgEJvph6lRpUa3PzX39QUwP%2BPgl9FSBnWPumLy9A42Z5AM%2Bo8cxEP7XMPJFh14JNDFsiGSrwdmcJKpRxHl4hryFo9qZs32mnMI28nMAGOqUB2WstsbMPdF4QQlWNFccHCcvJuHLnwwp1J317MEpxPVBnZQqydXVpTIs3A%2BbISsdAuXsD%2FqunjEXj97L2NhoO5FxfF%2BxUMbeuEdxkTsM46HJqsKrd8ZSD3jNHnHHJ2SXwFr5gayF7y4qq6I9%2FyEtY0JxO9ZzEYvFqAb2vI1XWUNkQrbFyxNPo5r2Z8xQnCy2ZeDeIig3%2BUwtIng%2FvnFTJhzAS2kqd&X-Amz-Signature=1ed6593db9528b74d02a2bd6c680aa06018922b845f0e003f0f8008d116866f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SX3OSJ7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIDvI%2BPkhBe6Bs5irpKU4gnMR3vKCSYCNd6NsWhrNWjsDAiEAhjpckiFknCaHfdi4C4jjfL1JxC%2BDxIBc7jcOo4auz0EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECH5s3FeE7vqSIbqSrcA%2BJYmD6lfIDgYGwXfvO50%2F7YN4S8sxk16gheLvCD20jaTLxb1H6wRjGusjbdwShPuCE5J%2BWPCoE8NCFQaUP%2B%2BStblKICmc%2BbFmQCnGLr%2BO1DbJX6IBBKsX7kMmXVAx%2BFQbWz40wQ157mLjRgcLxPwL%2FJhh94J5%2BWI2N4bl0U0WXUWVEWbXQ5vdC3p%2Fc77Mq3mBd6Xcj4AQzIZ%2FKMt%2FCoTfIYE%2FnAHsbe78xFkagmw8N6MYaKWYMk6uUf1pDzSXmJimwXJUnaGJw8Y7v2O%2FJF5e%2FiXOVatZ4wc9PuxwOinKDpaE7JMuToLsDobcjBFz6CtZ1ZeI1PMo30Ap8Atko8EZSGTAPeBgxRZdX97Rvf6pbz1XFjxd7kCL0nPq0tVNCfumV4s7dodgpl%2BdZYiECNbfORqbtUSqVhPgWYdq4MfwrnzumGyYCldUfD3J7LOkQ7dWSFzuiNMgY91wiRYLHp01JJem775Eedq0pHAXcK2pHynxFK6GzOb2aMlu43efgywaQfFg06vSs1Z3MLl5PISS6jNJbCvf2pjZkQESgMQMsZ92b9TK%2FrPsjDfIUQNFm0yN%2FAVuskJsX9x7mlEejaKHteESzpwW3boIXCM9x9XZPLunL8VLTQSv%2B7Np7UMLi7nMAGOqUBD0QCR%2FnFh4ShICVJZCZgDPk2s6JWcbhMbw9P8nnsG%2FIMIZWAm%2BsBm%2FwTYUCZcvZQfN1KPu5TZynmSQjuBaWIxQOUsBUiRggeEHewKbftmskiR3trUP3wUyF8z7Pmj7MSLd12ddl%2BmmVGm6TvzRFGut5FZ9uNBYHcldjE9mkpqn0YnRYz%2FiUUp%2Br3CffBjD9xbCI0s8AHktpi%2B8UMlKPQXp5ANDx5&X-Amz-Signature=6032018d0cb03edb59e83f01392a62fa26fd78e9dc55f33af8e6f6f4f0c29a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
