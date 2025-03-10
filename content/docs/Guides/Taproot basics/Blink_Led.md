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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664322H6AH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDStGuY16RC%2BySxPPSBSXkjHI9u6J1G3IyKteJ6zBqVcwIgVmNAVEFEhImatg3t6RMLdLd7MFs0lkYuPYRkrqd0n3AqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1qn55DHiO%2B9lwhKCrcA4vsdK3GyLHOOlJsGQIGK9mjp4LAbvYAXn2DA2V2fBga1FLfJ9jzLoJJ%2BUGKaECGU6fTwzHzuzfKBv3ZgCY4iAdh0p4k4MM7aFL6%2BxgauTDyOOsQpUhW8xe1GLEQ7GkcDmj46Vdz960anj9LFABBmVFXupTR1G34ulBtuGwVzMFnliEnq22tNqYpUhRTEt6tosetj69dZmX%2BScDSobP0xVWj3XpWo8Us%2BOH65YUx3PDcmNFbhIDfQz34CU%2FRcP7FurwOONze9htie0ghHU%2FLXBLn3ArZmpWyWPH2utSk58GBRccxDDmVm3onttMGa2YoaVLBK6oQ6QZek2WtKxjc5KGf6rDAliooDBOlBSxEtSOXc0SfK8n0TNMLe2b8PrzaBzL6IrsEAiG0rw%2FxVx2mlW3ste5zn%2BTdT9sjc0Y7jqY3kOUzQPdIEb%2FtBzgdVHkLF1weGgFk5lBXzuYGOXGT9gKIiOjAdPVuxeqWuu3s0cyxBxQVzV7C6dj8mKEJRs3tAqisnIF6JNFs9mmFL5WdMt243Csyfg8u73vnVxLvjATVxxFyPppva7JMqpABYM8cXP1hIYJXzz0%2F6ZSGWlkh7LY%2FsvV5twe0lvIUdqlF33UA5%2FzPGFxEiRtzM0UkMPXLvb4GOqUBWOYo1QsChdSsHThfywhHQEXEnfL9vVI5nMA5RDnHkg35a%2BcsfIAi2Jyi9Tq304iqHlOey8LC5pONHlm1QrMpi4TOCuG2lW4edi0deQ%2FEOxEvkE%2FhQwFZg92q4IJo9ZFqRCyCBoc%2F99OA%2F8Hotg9Aa5sjGPGR18h7ZlC3tAkgkWMPqYKQpbvTIx7BTJYuJpvte8HnMg3JGb9UPhHz8wO9LFiNGc5E&X-Amz-Signature=83494359ba5f6bc9140e09709978931bde1d75a6aa3b75146761ee043145d5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E26ZXAR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDd656duQnIyiL%2Bk2agfnOJt56ewcCPArBxIsr%2F3D2uBAiEA34RAAhBFpvjxr%2BsUhEJqux7VFDTOlgKXG70kTYWAlKwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BPp8lhjj5KmjOkfircAwFGWzslZYUSxQI60LIn9yuUJt1TQyiywsoPBrXrMoKfMlD7Wd%2BigCg%2BMbhD%2FMsKfQZDHLAXbYhqsr6wUW5c3eDBSGEVZ%2Fuv4GM0rf%2BzFMRcelX3oxpJgzeML5MSo9QRGXol4y5Lhs3vTFXvYpaI0qnYE7xnzzySQofB7wi0sbngvyIbC%2FdVJsg%2F%2BRJi%2Be7vsB1rGt68uGKDNcb3CANSESZQsksRL8754YD57iVrt9%2FcXIsaqEDXY%2F8MZXSESsTfFMAttRSUVYUfsMlAg%2F9jHB7aTYbKebQG%2FTBO%2F6%2BOjyu8F33ZPOupy9g88KM0RiVdqd429MkbSulKLcXAQTMNrGhRC2IYOdkJ3%2ByHj8rbQT6l8a4l3g99lq%2B3derTvUTfac1hHKT6nYxONtO1FTpl5u%2FlRxvSSJxdSW7iwqavDTk912Zo2PRDy%2F9oTSQkml%2BlU5PWFbgfmmaepiZg5VyB0sVAL34NZ3q4aUI51vz9cB8QT%2FTjcHejwj3hLdkl5gbecIml0bf31GRzsUXCRfFNkNPo25h9b7pPPtjkSgKosD9CVrr%2BfrxGTC0sCIolOO7pM37jjkYDa18YL%2FS39aciZO%2F%2BoZ74WYNrlz15CGE8SEWDvT8p4TjuBBxTHjGGMJbLvb4GOqUBa%2F35j8khPsd%2ByHKF80k4C4eutC6%2BzD%2BEfVpdywmGUnukukACLpOxJlfIlruBepmZkYkbGuB%2BJ2EJzZEF7gnuaq71lxFYr5tbYrpMhmlc%2BjWbArSv7WLKeZO8Du%2F9vwIn9AtHYC8FRXWWmWYwWiuyy7EK2V0LL0DIBQ4WzzjhQvbZyXLHy3%2Bw%2FeSPLurZWivwG3Jrbn%2F0i5llQ7%2Fn4FGPRsGusvk9&X-Amz-Signature=fc9a4cf4d4b45db5ec56237461fee775d8cb3039ae3edc67aaafb97054f30d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
