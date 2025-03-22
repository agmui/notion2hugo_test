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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHECUWQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIELy7aA66EBECBZHdcsjRlf846JuXFZdij7lBXZFH5USAiEApnMzR88v5dBjYg%2FGIfAVoJwrUX2bvslCo1BEp2m5JckqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPYCFINi1jCRlBSDircA2NZt%2BKbd8LOCPS6oz1hv6aFeRoFZfmKHYqLnx9xQo4s1QlcJxBdCugxgfAAa1wP4GMJbjNcqcSXvuClWZU1WjblgLVinESzP8dis4RuwpXyqkQ77Zvsdv4TEHiqS9JGNcKnY4k9K7FNEMovV1%2BWGk9fIKwIKoo21na%2FUBSPq4lTF9Nf5WLOoN9%2BpYGqerSrkPNiXN%2FsrFmXsS57sZiTLxKOuu3TovQ7F9BJqgAxzWazsQs3sr4gs4wVLK9GBnp7lUE44dbBY%2F6U%2B74skQSXmnP3gN625sVWsyHs4sSXHK1JPsd99PjrYvzkt1kN0ZIKCC%2BrO2rWesSs8bGmDtQHNSLONLjDU5ShKyYxhPzppXA2wkcS0cPLi3oYlDhzGBOXY1uSNULcVHdqAu8w6jG5gNUdpIKc2uP6l0KetMtapSEyi0UaJ2onVLK3vJHxvdeectop%2B%2BcCBFY3HT5L3ZLGz7MYpKSgMjLIs%2F959W5vYni89gqXzyF4Iq0AnabTNdPO26thgCZPg7cyvOPpyvw9aDfEq3D5I1RqRn%2Fg%2B8g64XWeASC2LiTrt8wkwkBp4ZNUXZMyGhzMJ2QzIJQ21137a7O1Px1n4JM8tDD8rr2gsJDvlVd4mjs7qAbR52HgMPX1%2Br4GOqUBnaP1ztGBilX8IgAu6a8%2FW0HSO%2FVbQm6vhqcyKL4laqXsyqn%2FJrL2tXRQe9WPRlnQyshA8rEwljLrXt5J4SRcy4QL0tyOv9qtt6nQ98Ya%2BUvOxrEyOnoxz4VWA7qNkYTGT8qPR%2BWErKHX9BSTrFoYccY603FelszQwy5vcgcYCyaX2yfO4AoP4tc9gfQCEztJQgOjEC496OAQZA78%2FJjlV8%2BAfcZr&X-Amz-Signature=4c4de554a73b752c013e53fe86fc96b7bf3ce1e258bf7fab3d0b88919730f3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDJGO6K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDKtUVGqbsI2KJsVZ%2BjZBGLyP1rWlE8lx3EF5R7EjyPqwIhAN8ErvEO5XlRRtuQ%2FwVBT8MT1rdKIJ27ppxPMQuYwXvNKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmHhjYPU0gkydA4PEq3ANISlhUnt4y%2Fd5F9tuDwZAogY6%2FNknAr%2Bg96AcC8GELCmUkX24xY1A8aEO6qyhOJieHQBqaOftRTGl1CI%2BEm566czocjgMd0WdphyWJaHlHvLNlIYMxd1mg16VKWm8Z9ydotj5DcxCyammeA%2FgQPz5grtFw7RWoMYyjEIFGPjVs9FJ2LE3uMIgKRgylHSqnITAShIgEwtDxF8Xd8gA2bZeCCG7GPo9%2BIfuYQeeguJ3H%2Fpz9oymfB1XjuB63t%2FG5AhJnvF4n9uQCnHfm3xhU3JjnE88qq2AfsduDjg0yzxSvV%2BOqFgxlkDDFN9njtLmyd8nU6SLpEKC52UGxWnpZXEj6JwyaANU%2FgjL3Lv7MfNH8brfFrOTGbFCHX77Lx6YwV5h5H1GVAnUDcmAaSBT9fAKcSNwkpw8YDKUZlQrwIG%2B5uuyNsWQCvBflUlD697yZhaPd8Y01lnzR2rmPKjkh7IVprOcUpfyiAET5NS4Ma5DEjtBYXRxK2k67nfbAKmDa9bWrFiaN%2B3gITymoSuLngrjhvDjDFDPIp9Pc97%2BP6VPB21Og6yGQNFmMnF%2Bl8VuwyBK8wHcbavcFFreIF85CfKVPq2kDpE37A%2BS8RhIfdEzjhO9YaAaFw%2FAnef3JtzDd9fq%2BBjqkAaVC7BYR6%2FSiB6oSCOMpD8r0Y5hEdgi%2BCgsh5ovKsJ%2FtV3vRFAtmHNQhuNy19JZiOE5ivAlW9jxNoYYsdqcHbbBn7xyyW1u%2F%2BtYtKs5qTgirl%2FMJtK9J3VmhwkIHPGBJZY39HLxikdvcgArwR9OY7Gpbs8xLvN2SNZHX80t4O8Fx1O7TS7%2FDd0UdWZVBwfPDBBzxUxNP9w2O9A4l9fQbV7RD2Ogr&X-Amz-Signature=87353291dd095f2adf7766a05c88fe2a866069e7b2b6819cc2333e0149485143&X-Amz-SignedHeaders=host&x-id=GetObject)

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
