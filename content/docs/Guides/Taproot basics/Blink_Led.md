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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYO4KWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBrnmGNsZzVs9MGomKhtyJjZjvZxwF7TLKSH%2FoFBFV1zAiAhnuGIJlqMZB3XxdiONUlcQqgsvx8zL%2BgwSIchYOJpzSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPirtf3qdmZuYJJhKtwDEuATQ0ja1VFM%2FxUVg%2FloBs1Vyb%2FOPDDOiBfWGLdDPHIk1TMsYnppzZlbdVCVxeMeN%2FNH2WTLT7%2BkAZ2puM5BC%2FoUBk%2FJPKA6be%2FNbBKd8l8NJ1aCtj3ct%2FyOm6OtQeCXFhd%2BF9HAPc4lAaC3Gk8WwhDxS5Qez%2Fr3ePu%2FC6ss%2F5XvUrFpPmSVrhTngBy0Res0%2FCkEuhnuiSGahQT5X6Ke2YdZYfDYa4s3pjwc1t84kKUcGhKaXy2PJnXRPU0UfiH0uSYJuN4IuZR7WWQaTf4AE0qp%2FQvN6RyS1Qj96d%2FcSg35HaHi1otnCPSWPeR%2BrX5AHQTz4ymHUNl%2FQY9dZwXhMjSLL%2FQr3gvTIavHh2pgLLJDjRNALGQtwzrv8uB%2FQUgShAstuv5n7BScgYmw1J0FshVqLynBsJgDvg79LJ1l2CQPUTgN94saNGr24iXWLE0tcfaAZqgtFs3VkLTzb1hRVWShKCKcOgHmR5vgb3%2FqTx6JmtooZ0icNMgPj%2F8cgBGvben9wscqRhTv9RuAwVTpMjz5JHx7IN1TtvGwX6QhDdId1ZvqpFwBzdMLbDkeGJ3p1D3O9usIi4rRQT0kqitlzQl%2FAouvAPM7uoXymF81RUnvn3FWaoxLX8Lt%2FqswmtKEvgY6pgHmlxwB7mKQHyiaf84hlAIHWeeh8ST%2Bf8S4aXDli2M5JkbguYQb0FX2zmdefJd7QY2Mvev51lIeldNUW6ty5HSi7wVgdhjvDCIx6ZaRSzBf0%2FcBrIA6Usp87N909qfaeXzlyin6hsCDkcUaQQErnX4dueTYSB3kVX1LMKJk3PDXrXnCiJYvKWCHRCf49y7Fr%2BkjqH5QtOI7fIfV%2FsvWmc5bWgGb7hE8&X-Amz-Signature=1ae3d5fa57bc011daa52fe6d750c5215544c6367ab0201a04e9eb95f6ccd7d88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLK4NU5W%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIH6q%2B3ofmAED%2FX8LfF1Nwgckhnea57GFHb1DMnc629NVAiEA2h3D%2BIOydWs%2Bv%2BMPg5zuj%2FMVy0LRlbI5HpncU5o9alIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdNGOfNcVPPmjDe0CrcA7tI1OW8LboV0S4bZCeduG62LKXIgXyPyczSqxGc5FSfq5qUQp8zx6ZPD7e7NUEOTDWmh0g2z7uTVWbs%2BRzszE0YR3kDKcfP%2BjA9lVp3o%2B%2Bsy%2FkhxkNA6qzLnfsh6J4RLjm1vW3cyAfuW8ARwkTaJoWwAGZrQ9OXUdznWU3j3o3rj2ouTbecWMKQdoxlx4ugwOz0ID0Hgr2F88FSUyV5Qs4Yt%2Be6h8%2FTouDteGJ3GiWm5WzG9ePadlWY8vPrPJgNh9gHIXLn8LxJJg89jrK%2BgrwPOr856hAtGBPnFwVRA25eq0wdk5aIZaZmwNWt28pmOhO48Ywy5MsFwhTDDKmKtLgpfKqHrcPTvcQ42LfUqaXxxz0FJ9HPEs5m9ybuPKZIY%2F44XPnGdCAzBK9HcdEJeVBtc9b4Hd2PmBQo1Dt3CCR6gf70bP1%2Bhak3BxtVzoyjqKvTKO%2FeMQk0l0m%2B1ii5YCFSdSjjJqW4doVpdhK8Yppjb8y0UypHuZnsY1TSHs2%2Fhh0lFYr1DD3IKihditw2bW5KvqEjtdKMFoeFjVWfPjuR5Q3CSc6ayI1WGmCwwr%2B30eAFa%2FpnpEMjiQ7%2B7C65x6ztFUYZs%2BNQC9dgY%2FMWDf%2FM8RgXO9SgMOTqb3MpMKXShL4GOqUBuPE03%2FJNQEW3ZBnYHKhtxMpp6K2eaACL77wjeDczMbKEZWlY666pMu5%2F78qdMhajYv0186%2Fm%2BRiedGrrPyLDruXtL91j1dzgcYZVtT0ZuFKarZbkkLdBeFX5pt1yHiTNNY3guGo%2FNtBXbdgAFKjd0hPltju0YrL%2Fh3RLOuKLLEzIYqt7nDjx4bB22mQfY6qWoTyqWnWrafHnFn2h36FE1Y4aQWHf&X-Amz-Signature=3919a36d9206ac6f9980738ccf29d9bba847a0a2084cffa871149ee88276deaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
