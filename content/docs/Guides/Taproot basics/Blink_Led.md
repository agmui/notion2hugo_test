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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDHP3L5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM9KXJDDitmWq6FuRmhre49WgZdvZcOb5bWNn27v4lagIhAPfgrvC3xfdG7rb8fOvj0RIM51pgyn1K1p7PiijlbksfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKAARH5z20%2FXGHK8kq3ANVWM2Diy5nNRj8GGxmGjUV9dXlfCfjymiC5pjAr%2FDYL7liu0GX%2BPeAzo543uO3JzcUitLhA0pvQcyhr2zPcE%2BGq45wS0%2Fk3T6hfwnMjuQsFfjGyNZaazQk9SMhKXYsWEHd2xS6pN8vGWn3MTKb34gwWSabblBiFHP0gaoCBpQbac2FoRuXU3EO%2BOCPxyikJseGytW6W4hw2cAVTDFj%2B94f%2BU%2BCm0W2IeY5n0QmkSIJ6ExivPyifnc68%2FXsjo%2BBUgRAko70ahRCMRVtjPVN438Ex5Z7e2xcro5TAQEF8upwTSkTTG3%2Bs5pqzP5lFJWvdQcCZMleeQVxr5qwIung6CfVVI5zK6w6vIiNKdw09KPBSFxrjAX9cjJW6RW4BncCLMv9KlBlIjDyMzOm050pLag7fXtB1ei1fAXdoy1jdJkAGZlDWZl1MwRJ2T0GMokH7kmV%2BQEjrS8RRTuVkWETt6b3E9ABjC72S%2F2cRA25dR5NT79GbbtJgzGPaudTDelUVX9Ht5qPBv9mpfzZBNlIWRl03GCpMkdcITq62rPy21dCOaZm7OAsy6lc%2B9bO06YejW68KzIGPdso8uyIsPpNcI4rJ2zXwh8%2BlitdFPdmujVRwy2mzAMZj3zIYshIzTD7zJW%2BBjqkAQ4Wtede571ISuP1pQfIqnwgW1GdqFQPazLA9ya6SPzC7pNfrxDNcMLz9ZMFM9NND9bKbxXTZCcQK2xoAIs%2Fd9ZagMpuBsyISGczQYbdezYOIoY5UVilIetJQYG9BURmmvPvaFnRTkA%2BQsw5xwo1g06sogvpwtgZY1keK1v9EBuFTYrfo%2F%2F5e8893FO1ugDhL97bfeYVTYfRYplMrqDasPF2yo3Z&X-Amz-Signature=56ed983e0eff21d7077572391992d708435cb915e4bc4fbdf697afc4a0e34460&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHNDEAS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXbkpL8FGKMPDTwS3N9vHvGtxa4FEnjrGXK5Xf0BfXlAiEAwRl0jeNuzN6Byf18E6NPWzjPLQmij38nHnUdbLI40YwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPu1SjOY0X6xBc2lhircAz4UmzzZY5eAyJ3WfNNd%2B5xhyZsGz8x3EVSS%2BL9dmP9fvx5tM2Jmu4k%2BnVjUx9icNUBgpA%2BtpTsZat1kECicd3VyZb2Sm2BPJpbHekvKgMqH3KW1yi5ZOKkGijKZfFfk4HiQ%2FnGhOKfV8I3q%2BdbisrNs00i1YPxLD0DXdHkYibZaAdpUE3W%2FPxGSE1IFci%2FfMZp4zosWHuoaE1RN3D%2BaXc0%2B41THycOA5rYwXZQQdi5g0sKGV82kUsXTsJZsmPXwzA4f2k7%2BZ4Qf8pAy2YE2Y4iItMuAgjEUTN8v4vVv4ibIocUTAsujK8ULLUtqb0IMuegx8eZVdlY066yFUb3pt5WRw4xgztYmvkfMkBC%2FDGPyyPm7iVjcfUHmCzVMMllT4ZBbESHa99MVTAJzJpTHba2pVag%2F0HcZUOlEf%2FaTMXFJKj6bykqvGjeYUMDQ4DpqZR%2Ft%2F8gvDVzb%2F9s2BQb9Xz6i6szG14%2Bl6v9aOiNRhDu86MPxMkvp4CKr2HzxspxUGjPW3LztMfe3ffKitJ4AcsPZR0mB23W%2F6Ku9JN5raaIeO0pxHHP%2B5jQGquLy8ZSCyG25L8D6q3byG9AlCzpULefxlnmwKEdP%2FYl%2FukXRpGhK3i%2FPszcWdC3%2FcCIWMN%2FNlb4GOqUB%2Bl7KHLoPntezBQbjnuI8%2BaSDUYYmBFuRe9AsxylcUduJE1hDAyGE%2FYTB36FEF05o0m97gQXH5m6Yzer6k9oP7%2FD5Vu9zs4R9PggxTPYmFmm8F%2BuBr7%2BUJGqmWl1cA7Q98KgqxZsBaYGAdsrUUwmPhIVASxWzXMj%2FcKOTRbPogmokRQ1Avbrx%2F3IhHneCInZM1ZpMPa%2B5oKnEcZkpF0cqWBbndiXP&X-Amz-Signature=984659adc7fd85cb8b04fd8ee85bf201915e362ad493e2ed8e9a6f0b35e716cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
