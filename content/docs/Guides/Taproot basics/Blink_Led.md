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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=f272557b2801c3b78c31b9912faada3e08d9064c9cf2ca5516f61a884a9415eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABKXXQK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCrXxMKRlfbGm4%2FMUUCtaiMfzr3sePknJwj9xGtA5JY0wIhAKiSwOpdj4XmxInxtOPzZVU57tSqIfz4%2B4YHiiBFYG7fKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0x3G6HEMB8Wl%2FTYq3AN5V4aLo%2FawcUcQ3u0MUgD%2FCXG5AaMwt%2Fq2zpKuQUaP4q2x4Z5JwL7Ymg8PMHR99Prm1PGk59UK5%2FvvLRGBRpdROIhqAyjKv5oBo2Wkh8qabqxWQ%2BKW%2BjahEcpawckEA9my6N1PxX0jbw8%2BCmiVssxGIh1jexiook4JyHdt3Mtb3MLyfqAj%2F84BzRjE5h8ohJ8BxNJ5uzYkJLY8IV4Tb2G8luWIgFDt8dOTpiRUApl%2BkS88bUMiAmn4I9AH8iQfXaC7x%2FYP%2B5FN8ZOkKvmqyevYseJ3RKo4IvpDLZfJYDJZlNM3puldBLYQ4ZClUfOmpA%2Be3D2Vt%2BktdfFd4QfvhWlLuY9g8xOx4Heoj4SBtKsdDShrI7bG2skqO1XrhMdbIxpFF8MXWPgxVD2hUBBHOuhXDtAXaLdmsyEP7r%2FGHWuzEZ%2Bbx5bIzY0Jz5EmLuKRz43wW1WYTBKScBiWLz%2Bw87aV6dZh9Q4Mxj0rBEQ3%2FvJOg6UKelKhD58qUeCyNpxeEzBhc7RkPx4%2BBNgea945SM7oQmgk7kgBza0UJm32ujD5fR3xLSkRmYthN9gbnXS1jOt%2FqbUOc1gp5TTG64spcBACEOGbd5uRy3b2FJzSey6sD1JLJ26PF7F8p%2F1lWjDy3tfABjqkAeCCBHoMXAuVCl4BoK6bR1%2Bbts6CfqUGwoDW9L3paWhoi%2FIvjwA90v9ScM9dcZ8kaQNRXIr7C0960ySTerQ%2B8iQ9LjxHhckhEY8p%2FRkclBc%2BGgx0K1f3sJesJqnxmxLP0WiDHwfzglkxgcLuoVSFya1gYlvkdEVGgP8gXfJ52St%2BjjuelNLrh%2BRpelAYp%2BHctjhIOqhqcIXGhL2%2Bf3x6YsfIV8sj&X-Amz-Signature=346480c25c16b5a6567ed823d20941f370bd05656c86b2f223be345dbf9391f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
