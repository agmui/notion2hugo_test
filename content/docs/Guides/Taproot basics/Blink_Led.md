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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZAKTJM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCninep%2BjP0K99Hoe9o%2Fi0mMJnswlG6Ehl%2BaIJxXVsOvQIgRbMMzgRZRyyB31GwpJK1XxP73jKZWlFz3rfEA9qqv4YqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDlqP1km8rXo1g9eCrcAwjJ0ayn6TzAf87KIN7JtLsNunx7qE06Eh3%2FXprAVNBsGwJU9nSKl7quoBL9VPvSZ8Cl7H0geWZc0d36U3VDEWFDG0mlJmwvmC36BOrKjbFABxLtjNJV4OTCo6Tq5VCKiEt8WMoNenPyENbuAckWNF0vq6U4Havjf8s%2BMZkgE0F0o6YS7VPpHEIZXA7xUsgaQbvWsnvjXiZiZtzKH%2BVjGpLXAHHh3WeGbUpHOvmceWWh0pTpxqE4FC20V%2FrGV%2BTWsONfuuGG4Jn4tKX0tpISnkiXr%2FI0qDyvDHRsf3JtESsHB23ODYEa4NS981EM4S3dxUvGZ4ntvOyZEW4YfLUMlplJyNj1gql2s8uSEYyumI0%2BI7dmVb07wjC%2BMADGgx%2BBpS1LReQELetg8U4ausq%2F4yxjl5U9P7bOcEZ9bPuLsx8YYyIEilihE9KNVb5AgCv1rR7M2sYAp%2BBlHJoOlDoz3vBtCTzNNlG%2F0BR%2BZpZdKl0zwbKvXK8Yy3ElItXTVdawE9rJ02zMZnwAa7Yavwq9w5TCgtd6q0zL47YuU1YcwdHcw0HeFCh%2FxOd0FEShPh2eGeXzJh7nucEFREVW3BNyKQ7EM8kZKWVOKJxd%2B3a7uUBdi0%2FjZbGs9r5ls0b9MITXpMAGOqUBrU54UnGbiHp%2BwUwNFf1QWaZSOhpJfVJgXx2SQ%2BgdaKhs1LHkZQ0A4SwiMJ6hDcU4bWveXc%2BBx8IiUg2Yj4dn6MViCf%2FppX9zlnnP5MUjmP6Ta22Ihljsi1VbDRsMluMzGz%2FfWT104Q%2FIxiOnWH%2FoqSaKQ3X9t3X9FHhVdAQChMUW8uzyOTY5UbchHP1yDEJv0xjvSEN%2BBi0Jeh7Y1gg8ERcBX2Bt&X-Amz-Signature=5695c7aa76c5116764fda500b881acde83f0b1bbed47c7a781dba78038c8da3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7MCDE7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCID4BOQrfy9vEEsDcgZTQGnbA3mWuTeq8pPP5KUJ%2BAc9yAiBCDIjY%2Bkh%2FAuUyQ6T79VUIldxyScdG0IX0RHgOFpHEZCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrHnDODRuGlz0ecTiKtwDl5ev1BmjK6R%2F%2FbqQTrhP9q3gyUxvE%2BeZ8AOATJpsmM1Y8urJs5DvkBU%2F9gGF%2Bd4HNl%2FJ4L7GfykccyxOhDqaUW3h2APht7Mp5Ef0VbhlYapnpQ8sRZ%2FqL%2FGcnIC0l3O2XAHXx9c0BFf4%2BamiycDmBHXvgS4iLXG7wtHilQWK1g8bw4401ZKcia%2B8UVpDA6fDKolx9CjmObMvpBFwfFu%2FMYq40UQ%2FceGZyknDjGF6d8Bo5y2S7ctTlBHKXLchw3Gn6x0qIOJYnr3%2Fy8uIzLbIWQUNztpmL%2FrZAwN6wF7DfVDkY5NEwUWHXQNDvjjinOt4WYZYeytXm78x6NrPKkI28v9hN04aXhlTS6eZkZKQX0%2Fn0uFnSZg1BpdfOKJSVVHINt5Sy%2FxCyounbbsLxc2ae6mbsGeJgKRK8i3jzT%2B1iMYNA8eAugr61HzGzn%2FBneUwKtGET7B8DzNTUe7FusYi3PjT7tRzJBLZqOyleIX%2FM4oOcHJdGmE%2F0wesD9D3sGp0Zbt7zBPO3Tye6NTVadHbdkK5pMj6iFpn%2B3r4BG5rr3l8KOgsQLhi%2Bnr7vQlGtl%2F0VdwGDYslr2Ucx1ODYo5gYKolYSfTqF1xNUU1bdB9m%2BYxJORD%2FArRWi3OTpkw8dakwAY6pgH1vylGPSJoMCI9lk7D5EMkLuZUKlayTeBMG1Vi30b2XEdDvQvIA4EqxTm16qYk2dzNoPISdOkeOF%2BBg2Ms%2FVd2v58l7SRLN9sLAi5egjKock6Fo2V36TdvzDe7L1PUPsUDxFDgLLHbX9HS%2Bt3%2BV96dlXpoqjVvLAwq8%2FQzrq6YwUR41tuT7IKxfeOUsylvPCVFGWyb8nHvxwofYvtZ6%2B2eT5kURO%2Ba&X-Amz-Signature=07c4ec48d7ff560e67b18566c7ede0394ea2354b49e9e5ba09d33ea650282360&X-Amz-SignedHeaders=host&x-id=GetObject)

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
