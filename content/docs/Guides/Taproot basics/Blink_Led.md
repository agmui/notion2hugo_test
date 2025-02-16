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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7DSQVV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCxEP16ivziN65qvPiSEBnkr0N8LpxD1BLVPGF%2BGnJkQgIhAK4kIcQr%2B%2FdEY3cIIc2d%2BVlzawlvgTO53h7by9TtC8ypKv8DCFcQABoMNjM3NDIzMTgzODA1Igw3ky8Fc9U%2Fgv24q3cq3AOylfU2qPgurlMVHnNqdeRTeX7bamhUooS5PRXOapQJdTZDZOEoCDTwcOOgLH%2FW0At3tko9oYQHvbFkATLevwL42ZZArjjuHecTm%2FbnhTyzQYm%2BTrzCUfLo2nRVQxvL6GH%2B6i%2FaIadKpCzQBdkOAp2YlHIajIJIdV5BwmWZDGIRBlJsL2WYXqFtCb3jOT6qpXHd3G6BrEmtnUc9d5zX%2BF6JDFbqQYYgC5bWOBvoroF4kIitjN6WkwV9jleLv9gqIyYyYPpQO4W%2B5%2BoapVi15r3OruJExncJ0MhEAp6hj67HM4MId1Y6HQgQgj8KYkL3KP3CzV1Mh3YezRMhSDY3e%2BXkREfz%2FnYPuYZtbRmcW4zTcGJxaA9fs6E7phGW5jR9TvJuOLKMl2%2FZOdlwDT3ygK8ODnx%2B7UlOKaA6D%2BRhkOPgIpl7GQFl%2Bfw9l5E7d1duVc8nryGODhuDSfyzfVMwY2ODRzqxGkrWLbWT26LC2Q2L3QQGPGtT5nay5QSKzPXqBtdyLxDzQHxG536d4VK7kkKoRz1XULeHRedyVl8xKt7JYxagaj6zYMKYCkxT0jYKEGzSPNWlbce8y%2F3sBjoDXbBFjK2c4I8%2FOcLXY1s0bi5M3C7CYowtKfWX6ghB2jCe%2FsW9BjqkAaon%2FXuPJjm%2BbDW4F6y6CbJkAFmkqldIQkMKNfU3ZEgkAec6XZvp2i5qslsdFEofwqzhx2RRkrhqibSg7kEZKGOQDuUfqtl9kZnrJEeHNJrw3mruB3RiI0RzhANlkmy6fH%2FWs5TPHxs6GP1tBwZuzGKesyVLBdsH7tfG3ClIfPHrnBzL9nxnc5M6A4Oal5AxdyFaM0EwvbCQCFeZ6CAn6qE0FIUH&X-Amz-Signature=cc82156c1df19ecd2576f91ae5925f63bb3e40604cdd403c583d69b224e0954c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLY6WZY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIERnXCiOAOcKOIO3aPTgKgVPzOivgEOE2vL4wP9Ia9wzAiAHHCYc5Q5uz91qim2KqKECbzT2hsB%2FyQN4FShE7AVXRSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMSoWF4Knm9effQfllKtwDpTx6B%2BjeXjIeYwieXs0YsLITTMQVj5jxK%2FjwKpd%2BFXuJqZeAHo2yUk7yVSoRtE6ycP3QzJDNiGIKYKzXBzQMHV7gw%2BH81UOV1og90Bukw1Z%2BD5icvj6yAAAN2b4zk49wqLcz9MKE%2B9SJPW1Ps2RrF4CAAFDkZAaWzuZEXrfZqnnoU%2B4irkvhSe00Z0Yy71dj%2BexmKNH5tHGfQYRw358DlXFsoJ5QSZOrDfwGSGk3ZPrfDCpU0eGyOxSykdPBeEh9sigzQMWsvVaL7hOo8%2FbofuvCEveScd4FWJbIb6mS1%2BFW1HeISHkOPYLm1%2BT3miznORb4Uwfap5GmGULxKUtebUbxWUkrgX9bLduzh%2B1SwN52%2Bo5Ot20uhGqUaWAjOo1QdXk1y7gJR88fvd6sRMLA%2BjjNCS7kbJHlkMpstHm2LndC8cRTv9Hg94%2BnUGiyV0MrueXXAgIG%2B4Ib1SioP%2FwlGHdoiICBnnsGUnMqb%2FjtzzTxD1k33a2KKSjLo80NWg%2FNA9Ye6NHPGiN5dbGlWP5hd0foPEIIhB4SujX9cWJjjOUBk2nhf8fdm9UxQ%2Fr%2B2Jnupn8nfc8EmNBgq4JhWzr4Bg8J22zxir2GJqldngbDZH%2Bw9LeYDZFBr%2F4tdL8w0%2F3FvQY6pgG9sJJ0H7ykRTpJL6%2FrZr6O9v1peDPE7LRQ%2Btsz7PEUH18ryga4MEh8MSR%2BKX260ZT8foWqPnC1MTX7SukHoPvmz2poS1sQrfLwUWxTNyuMFZIbuxzYc1igNR3GpG681JkpqjL%2BgltOrEvxW9sPu0vsn5gFk%2BtW9xGMzQCtCgPcDylUDAglDrdDK3%2BesMW7DxmUY8wqMxKaImJYhQ3b0yd%2FKgGY47ID&X-Amz-Signature=3a2110508ce7ac29d593100e0d7e0282fa2e77f770392b958d3bbdd3de5943eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
