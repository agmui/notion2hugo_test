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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCIT6RW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDRPjCYuTNNDgh7HQi5MjZw5Pn4JNRJgxOuBx9exfoyFwIgMWGo4Ihb14KQE%2FOXQou3Cngh%2BgPXxv1QX5xijkYRf%2Fcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOGIbCkRq40zILq7CCrcA%2FadvF0yhwRMoHeqWD3JpUIr3C0DoXaT9TOipDuO8efAD4WQw0cwUFzwe0OH31mOGTsnhIom%2B1nEkK6VrbdufiAcCjdno0CpBXl18cZ3SujhLXH6uZb8aQ1Lehg1hzPHGAKRCBHm7KssyrhTS5hdmmy0fXtRRURkZj1wZasuaJf%2B3mMoVtPAMsRYle7bNE%2FA%2BBD5DIRUEyE713Yl2HEPEKqf1b3fYZJ6AeCbEbHDod8iQ3ahV96cwiiCDCdRPNx9ZqhsCUm31q1UWAB0kq4FVN0%2BUquY5Jxn4mgJOz%2FaULOPJ1g4DusgG7uyH7EBK5hHrKDhX6qacT6Bjj0ur2eDcLwbvyZmg9zM4rOrU0AbVZlC9AUI%2Far4np7ACIp7erMAIyqjUCCu8%2BGlDEgBCIyUVpX5C7fnV6TbQdKseqsRwzOHa1RKDT6x5NibMDbGwYy5NdKUGuz%2Fk54HnAo0tjc7hLLBV%2BTAw%2FzC9NXBuDGDGNssy%2Funnd9gAwR5cFomjnTiO2RaCZKMywH18AuCtk0IAdRSDev%2BcaskzpW%2BzA5IWlSfbzBGiZqPPgHel6NpdiNK9%2FIiTur6RB3A6otqSCSFHyfxk%2Foq2VpnpdugsjNGOQ%2FQOfXRHXYYiBf92N8yMJ%2BE1MMGOqUBKILttRlCKWqpYLgiyh5URVVfqZt2byRszDvghIjzEun%2FEE2mXlHyYp%2B8qFeYwBlsAo47XAomKaOhUrKjzOJECXWb3RT3bwEJLkHm2ysiibMPeuT3juPxBrmF2MX4E13qFSIARm739t7SQ9elSctWCsWGJkGx3hEHH5XvSvEJwuF1mZ3c7uZZsvzQNREp03PqKV4csfahOGkl5gyDabt069%2F5e98T&X-Amz-Signature=2033b2075884316cdec26e414565cdc3da7f402b7385afbe56ee19635f66f8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRRLYGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICJrKB2JzdV5k%2FhsyEMAdwKCERlGd7LU1TAsOCLJXI1FAiB5KaNEgeih7fHy8yoDCklZpAj3OT4LD9QYFcexPzj%2BIyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMgU5T5vk6Cutmpxk2KtwDKrb6m7MXWtYn8AulLRTCQ5pMg2N1BsdaWJCnjhgI9T6HgiTqvOPAIdifH%2B4VCxa0oR8KOXTehwIFF0P1a2X3jqZihdannJdn%2FgBK1Ni7VEA6O8FMVRh%2FPYGSeeE2SPAXNQQjGwjFBZ4JjRRkjODB5qKh7IsMBR74p0yn9a5T7QM5d3F6pIG3zWSB1NsxxNKRKZn%2FzrClL4kxVE%2F6d1bxpErLnxF7kuZ8xs7lSDIlLprhWKv6ohJgb4GFbtKLPITircQyAxiAvP1yKlcCOaFMMAZKQFeZT6WaOxLyNlMOomiSlNOuJgMOuYFT6%2F0o1kirt4roNf8vf7%2Fg3l85jZOD8FzMIcNOLU06b0ggr5D85x89%2F6Aca%2FX7hLvia4a%2FyS4hDXnDjBMImXAMFzYhzcG6nFRuIGCi90LrFNH2zRidf9b8OgnDcBa6trMdQFsnxrZ15ddW59yXsWVklujmVpYPVHjtTi4TB8qWcEwLCO8lou0YxXf6MUqtuEjZW%2FdSp1NuaT0ibtMCBcBvjdojy9s%2BU5xC4cPU23BS%2BEi0TgiOwnIMMy8r2Eo2HvQFTJyUwtdWy2kkhEI5EEYmj7XhCh7a4d1QvbXffDVadpu%2BeMyybK3WOMvgIEm9g0B4zfwwn4TUwwY6pgGLuwI37i13%2F3Ca1FESQMsZkiELdqg6Gwd2zMSBCOvkgzNVnMTdrq1UUwk2ZAzSjRevBCrwNigew87b2wcBnXwBoMXWv0%2BKY1vgcVYZCVplMdHsTfegbmxyZvfq%2BUovMQPepFAQ71q3MUxN%2Ba6rr5XW9tIrGSUH6hglJaVto5CUMl1RCKtsdzRnSjLYO1ld2m4fQ4opnQGKJiJBfMQmVc76Ovcz%2Bevy&X-Amz-Signature=749b5e9e07fa0e813509a4d292705d37d24c03a77f14efac421ad68639290f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
