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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFC47TMV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBimNph1UEJgZz%2FFlzc7IJECjLZjpOICiVU3sb0lGuPUAiAvS8dOdxN2uOWBrXsYhEUNMFBpLhIiChQgEl5FlGog%2BCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyvrDeX1J2EM60%2FqzKtwDucBsHplsQGiJ2YV7OJTnoubThBmH04NJqrys2HTVoXS7TYWn73KpZfT4k5y7aBjrIVOf8E3ih1JVg%2BC2Gaw3plouifsbywyiumB8PsiX2tmPo5%2BXFVgpYmGms48gcACP8jzqycgMz%2Fdnl4xHfmHDB9cfFFcdXxHAWLod2Y%2F%2BU8u4ejXqxivIguZUWZ78vacG34RIpHVzlR8UBVakBTQs7oL%2FoaDhXVdTx9RmMj0JBRpd3WgMLM6Wq85JZ424%2FSMjqDjn1sngh%2BWrFMxD0Xxs2g9IiZhkuBnTRCGA2iXlSFSKzVKLW2V2wTfE%2Fk%2FDKMJaFqp1JjLte1GCjWxa6X95XU8V3lgwwwbabXGpPr0ADWkl93zaEmK%2Fs4ZQzep8wDG7LmDupMikF9KMm3Y67waJ9v8NwncLq85fjxXotHueS%2BjX%2F%2Fd91LV0mY2zKhMkzz0GniaqxmGLfvqNazukViCbyEPoso3ue2jDVPLufjiqAsx28zNjMuPSf3ozCNm113zC1e%2BHTMOmD3O1h4TYnMSjflUVfAwvCanhfTLVoVoICVxk%2FKfeTozKqRP7BvsY4rTjUb8BEoQevXHF%2BrG9jC%2FG%2BVmOTrlkSuTB5hVN0vI4Mv%2FprfqQ%2FWIfI1LF%2BOcwtKbowQY6pgGxrwprX9wF1rAn8AA5EbdiVopM40oLlyoySp4f1xFD5CW2jYUmlkB8qYL6QccyrG8V5SIlCWVFNMKdwlJEXKOjJ7fUQDn7KZQ6WWPIdB9agtQi%2BI8yCssLkjXsFd%2BQBtgUL3ZuL%2FUzgervqgAtOXc8lytUcKJHeK1C26ShWHZB4BSl9kMwW6r3SesW0Zs%2BpMiGyN%2BurnJZVAPZGbVgpd3%2BOCPTo6oN&X-Amz-Signature=475f1021c4b30495e56ab377f9284cc2fed93a93a7c9b3d1333c9a5bfff80d31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R45BLQYW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV4NfYco%2FAT%2BN4kTmVsu9ZtMlT%2F6T11XOidP5e%2Be%2FQbAiBGcedcRojFiZCriK%2Bhkg97VM1U8DRz41ZPmz2u1lBQRCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5XXvFeG6I%2BKdw2fKtwDFD7xxgGK1SNbpxUhQqZKk95YnljEkiXwFmFB5cdAwgN5G1EHu2pf3NZcILWZVWhSA4P6w7azXQDKZm54Ud%2BmxgTDzCy5nCuqAuLZNI7ULs3jkdqPyfHQmpY%2FbHmC6sKGh3ClNnhLStfB1NmRKYJ4xmmAnw5qHS%2BMd7dhhZUdZMc5gWkwIWv97exL6tYHaIPipCi7el9IShsoy3BDjeLD72eoqGJwZ%2BZ1V%2Fc5elfxP8eWu4ZCQXPRLMtqglyJHMv66LAOG8hifxl%2BNfVE3v7t6TrqDrN9SpfY6LTLOi%2BBrt%2BHvpFewnlzcjUMwKtbt%2BNcnaVUvpcnv6Ul27r3Co6JLEGhYLD0S7HRwxrwpBJqUSfq68oHWQW7%2B5bdwDP4EGiDBnohiMXoHh15eoPzjLAm6p4QL2VXnHnWkPxbxUTHcBhWpQsKNMeIr5tEpfj0pWNMuhKIUI%2FbYdFhaxwOXVA5jPjtnbYK9822vIOhf0NYrmyLivyR9UadS0R4dQOgEorGAI3sL1VaIPXOizU%2FHY5wSD6o4pfFDpC7dDR2NwUF%2BKuZ2dWsoKIhktcDn5RVbxubkV2GyLyopRbubi5H0v1cxLgRjSJoLZRSzKoZyFTS6YCQFJg5k5SlPBHMRJswi6fowQY6pgHqEfEbUZ%2BEr6n6%2F4AH8p0sGaCuY%2FX5Lldn5EdirbaGL1oZLMlBAFr%2B5MXifSu7bLrBr%2FSZr68w8RYxOkj9xQJzObqjXYoLt2eS6UoBb13F5e9MSkpa%2Fqu3Zffw8JgrVIeXXXj4J4YZZ%2B3HDPVZ09tYyjxPV4gYSkqHMOR65Sf%2FQaNfyvXP4kr5QkCCy8SIfdahl%2BnNbbIBzUsfOIVLkzahSZhmE7s0&X-Amz-Signature=19d17a238530c2ca215c4ffca58202eb499c3f2c0ff679b45350011ea1dfb451&X-Amz-SignedHeaders=host&x-id=GetObject)

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
