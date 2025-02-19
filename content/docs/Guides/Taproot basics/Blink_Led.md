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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNO23JM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD1ZUlkaq19cahwvXE%2ByHkjYEX%2BzJVaW%2FFYiIbLRIHdWgIhAJzSffcStbfwJF8I0Mdk%2FQvCiwHNkDF88x6%2B3RN3baOsKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOJVwEeFpKlndjrOMq3AMmvbDJhMvfx8EPuPfWtZXaoAawCZE5bbNWzcUu6VLXUw5sc5iBiRO1V%2BCjq%2F8ZmIPG0V9uC9w9YAVJo%2FG%2FktmT9gngaaOVP4yLdoy12byIASyrAy3rfIQeBTAjvek61qMN4qtvPucK7mB5Zl2xJVAR0JwPs3W%2BlbLplx0vm3cU13IYmYu8oeIuRvIml7fxBdjGbihFZnad%2FjBlXQ7zpCxpbb237BDJia5JidOnDBFSPt8kROy8Xf7Ho1PbQ20Ct5zhj243F4BjQzVZ1r3gzDAOvi8b6lRIiO%2BmBknh79FFB9AB%2FlTReO8QXzhVZgomf%2BW%2FPJT0KmPC2ivzDr3gwp7sc2BvtsH6TfI6OgJVzvbsM%2Fcbk1sa%2B3%2BBDFOU9X1pTOrSDcy%2Fyg0rLs5%2B9XCbnQpISsZ0wQEdcsy%2BtlHKFsbhmYReu2R7kdTLic5ng3WCZfJG13%2FvIWGX1hv3ARFFN%2FfSbom8JJO1lsS6kdXHqQGNj1GvFjKhtswdgfLty2HV6qHK%2FHrKsYZYvxgrvCWSSwm5%2BNj3WMIe3u9%2F%2F%2FqzvBsInK6c%2Bs7FmRY0Mb7WCzqeOTJmXWYwQ5jOOg1pvOq9q8KUDoEMEHfCJDX%2BFfpwG1jl9oJbxFIPLF60kdgHajDaotW9BjqkAaq47Zo7wp%2BKrTIE8pYaztj9oPlQibqXpAaO3eItTCm4Xt413HQo7VTzgSs9ZzY65RBrklSoB2m%2FpLs0iPqHXBFKMxPl09ox0253g2hReai4gV3uQsB2yqrBbCC9x5uoH7d4DIllTH5TLFqShXBkUvE%2BsbV%2F6VT2SouhfuU1n3AuLVJauOgby%2FqkT%2B8ZY%2BFeuDJzJ9X%2FRKGZ%2BIB5iWy5xkEBjeLI&X-Amz-Signature=b59ead921d12ccf0a72ad67b1975425a0df211859f88f892f2c6fc26961e348a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345YLMOS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDuObrVxgpE%2BpU5%2B%2BxR%2BVe0ffxVoBVFXpzFWDZ%2FY92aRgIhAO8KHnhn5cVuHBYs0ss5cnshwkw6WNg%2BVhyA%2B%2Ft3M%2BEhKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqKErOgGPKrYAQMCYq3AMnO%2BK5SKU%2FJ3PpRSrBtFbCikRghDyNUKuxdozp%2BpvB2y%2BHJAi%2BB7iQyA8K%2B1cxpJmsqxCpk7N17MDMC%2BF87WpgrR%2FqUqjCvXfahSvcTUO31%2F2QIoz4COmIGxRgIq7%2FHcqVh9NxkhYBa8ETovj%2B1uM1zSl%2Bi7hCQlxgRQZSiZhGIGrBeIycsdkeRaXnzPIez5zHGU89vZHNPwfrs%2B8WZx7ir5cTLC13%2B5mt63SDeyf1L7GZziu9Hw%2Ba9RSDLCifGsjY82FcxkXL2jDh%2Fc%2BtWQJzqKYKN9D%2BC0JJEVuUU3b40nCnX5aQSwGBdhh2oi%2F9bdIC8cZ%2Bz%2BA9gCd9TAAkV9l7s%2BF8L4hUCDVmy74%2FJcpqUY%2FhTd76cnbvPvx7HRpNxmjf2Rkw%2BVF1u%2BuaBP2fFj8R8LJlyt%2BmrZb3S8TXCzVYGD1AvXvM0Mk00uH3e3rI0JM8Y7NjkL2dkgCkjNjDVxQeFXe31MYArNfYYG8iwmtpuzOTIdPcMiwnykWaJR8tofaNNOic5renLihDuMBLf8cV02%2FI%2FY9UspJdIs%2B8TVIa11a%2FXYiJQjKViRr4dk1QTUYIpoKy1%2BsSToBc5zNxb679ErPZOgZvpikmEk0C5nbdVRFZCNr62E%2FdS7Z8%2BzCQo9W9BjqkAXNIPp%2Fr0vGNZKrxKS3ww8ZaVkTPw%2FCoulRs0CxXjiog31ZmHSJCKBZfdrDbG%2BmN5VANxmRpTyBFS5q6d4tJ5fzbU9NRAASJQlfAXfYpovKucgIDLSMn0YXAbM8clJoAeKnPBfokuIkjEk7ievWW5Y%2BBrOAkH3%2BZHveIzpQKVK5w6LLyqRTlYXND%2FqPLJGrT3NUJn8T68ZAhV%2BoohcQDbfswi2Sp&X-Amz-Signature=8121481f559ed10cd71e3ad608ee86b7d7600262da10973fd337b42adefde042&X-Amz-SignedHeaders=host&x-id=GetObject)

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
