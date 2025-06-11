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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T336RYI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiXXJL9blL0vvmNOm9SEDfRkDEtArOgKQrIqr9e1FE2AiBd8HcggMVwQDVpXk%2FRdQh6s6ZLxgBvecTaMkRp3MvAziqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMukL2gccHUPzZ8%2Bw0KtwDkJ5vRPbnV6k90%2Fp5Jve6%2FjOxnUKiKRnSytRgQuoZDTZNHC7CMuTFapy8WtJ1N5Kouf%2B4cPsACRqap3QgBhyUZeiyjYVOXk65%2FnEnHdVmbdhbT8WYIZ5E1BTZeLkK%2B27RpMB18pIafjxIRhKiEpat7UvZ8TYQE09tbEga8burQPwUu4%2FXS7wvj6nGKiuExh3M%2ByZoxpR7ojzAz6raxyQIWq03JASdKfTXUAkl6PkkBxDK5dFvHk6wcY438fYZRxrLjcKB6%2B%2BZvr2D5Z61ItyXlIWlgi0PHaFWhjs%2F9UxAHMjM3S7UW%2F6davXUgZ%2B40LceaNjdyrsmQnB%2FMXvvqCxS4%2B6Yr8bnbnp5ZhZvp%2FCRdcIUO7L%2BL1IUO85nxPmii%2B0ClS%2BMnDdPNYyniz3Oq7bs424cJXQCARBpmGFEdkbIE0DIVeY9fIjM2p%2FLzscTqYP8pHqLr9mhYLUSQ%2BXecUUt3cdMtVrOATvZChRZ4yR69tj0Ym1BEV626199wxeIRIR4KhIQe3GPmndybsLS3QrU6F78aNzroDZTh%2BTu17xGrYJoeHRj3NKG%2FRuB8aWkF3zB8Csk28eHe3IuiUYPWEn%2BKq1tEbYtsuq7ioxiOAO9Qx3yVF6XJkbzKLlMfP4w64GlwgY6pgEsjjiODyaW6IH7oms%2FPMw9HoEFPf4e8Qf3Kdrw84l1QmInpSfmI8kwF0z8Zq8AE7tClWouYfJAu6lewB9fukLYvfR9hjHh7XdPB0F7MKQKk5Vb87FwWnCY3xKelYtrx%2F7L4BiGfuttdv2PsrmKgCsCcpdZTNw%2FG203bf47pxSsqawzfItX8SQBv0k0HLdBG8%2BEUWKLRUeOi3uWOgBG0xWT%2FR%2Fc79GL&X-Amz-Signature=62de4f352914c5c1042daede3592c60e7388da668be45dc6e6f1a8f939ec2319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7QG2F5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIFaYsX4Ji5dC8uTmkYQZdGQqG%2BIhlfjoPGMApiHnA3AiEA4XWccNy44pRjfs5xUBdzDa%2BA514a7IJsD%2FcTgyKB0YIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO47oLwHrdiHz3%2F7eCrcA9%2B9qmOwrKsmpJPiRh569WBJzL3RAOEM405Nk1bZOzexGxWnuF4nwVlX9aW07vsatJ91laqh1O4EJls1dsARxYAh5kx3b3NCR32Nca29wEzG9RP%2FEy8NMjffnrxZNn0NuPwT9tvs%2BP6lrr5gVsJICwQbAyMcKOFH4qFTY7ozsCzxlWVX9%2BTl5vUlFx50X96m%2BBzOVtWQwhwUksWgfz7Ys%2FD7kTXn7hqA6QgWB1uqnDn5j6H5L0sYqEEGIDhyBrmu1AGHlig3ccZdqWby%2BU8jZmfDA524OQ43m3GLYKONIk4yDhb4Ey35LRFBGNQKaHfJ0foW3YxSduN8IzpSkXLJYGNWHmzgIUZg4ZkKXBsBQtZPZfOUufQbk%2FRfVux9j%2BhJJZH%2BN%2FfcFY9Wbc0yClS6fU256RctHWdcsyvVr4ga6Ye7eFrAu4gkN2PrkPB1TYC5uwfFWJj1JrmZjBGxWkcGPGKETqHmKq8vpWAfvCip7WxuXymFksC%2Ft7wwyZtr6c5yCyJS%2FFM1loP1%2B4zJ4SO%2F5nX5lf84NRJxwJnYbJkXFNcKB%2B95CricRJMOLLkigotgu6S4SJNxuDVker4Wy7OssSX1zRfMqJ0i638ATuG8njzGOF402dx1yuGEUYLJMMOBpcIGOqUBNsPhlCc4Yxin%2F8vZl2R9Y2OmisjOooqV3HtgQTHKFT7rL%2FmIXenDBK16HAdF3usbPeHvVA%2F2fbOyNUdHtEILNgc%2FEIRU3f398xgwE%2F%2B30%2BEYlj9RAegny3ga4xPeq0ENFoY70pLIIPfqxGF0S5VAbk%2FhfhherHJ3%2Fjk6xhGLrGBZIcaVpdeQxRy29bzQkA1I%2BEutuLcM5IDXpvtmHXXDyZE3MNm5&X-Amz-Signature=8d98333955a6642aa009c903dce6b21c01e1bc738530de1e5ca27b739dbe39e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
