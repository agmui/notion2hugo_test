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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRA5CPQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICVoC3FTx3DusEvk8wSv0cSTjO4iD7Gkc%2BasQQsMFdQfAiA2XfS2faI7Ud8HysWkrUS%2FdFe35lYhataJtWkpsIDdFCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMK5Vvi2nzCd66xxmCKtwDvk42DBL4a%2BCLKh2XF3WpEiKdgGaFZNmXK54aWywlyH8IhJu7j2xiI6Ba5yDc6g%2BnGotCplPcXdIYEudQrvcUP3aZ8N63FWoS%2BUAPrwCYNnLl5ty3RgJQcRK6GQgWX0PTS9UOwRY21LAY8dp1xyOLN%2B5SxDjpW%2BY2mJRW%2Fmfnpz07%2F5E27GGhQQNiV%2Fq2CGjQ6O3khWaMFdgHrt1GeBPJqXUQs0VRXCO1Wlm3YAIhZCdLx9%2BFaKys7UJC3I3jeVKjdzGIwYehXh3OUjldbJX6fF9XLakdUDan2opyi%2FEafqDC6jS%2FsOB4weTYgS25YNVmEv77X3PapxZvjC%2B3nloHz6WeKVAvIQL6J4ImSag6ho4vXfshYjN0XIt9cmGAU9zkzJEkUbEW9qWIhGtgqvsXtx94lnyMqs19Mss%2BKkJ%2Flp0WRGsfCiLfKgdUdi5pZtuKpcivJsQPYEpxJVeeoHt9J3JvSdSL%2B1s0Qf7LfR8ruKPMSkVde7MON28XosfMbKkIlPOnPpIi7JCIcHIlU3U5iaMDOXZclqz%2FRefniJes0ooA2NUUcGktm2UKTl7CzehMyEFxHZ7sUJWNepWEQ%2F9CIcMKNWQMyiKgD8emUVFbL6BBj9jG5vv6Rx81dyow1oKyvgY6pgED386W5lLDyQXRRK7c677JqPwQBvxzJOHPE367w3RzZbcqngdwyvVn00%2Blv8hSGgjujIRvF8e1T3sn6qEdW0WG9IEiZFBsA6qjq8JO%2FbeRTFVv0SYQIn9F%2BI7lar4qfNoXYj6adp%2Bq1QAhkbMI4o7cgltt03WRHlICEHQ7yv%2BP%2FOAYcZI6SubjKPsPOZofQt%2Bw1cLTCzjmf4tSaObPywshb%2Fomh455&X-Amz-Signature=a01d9eea3966503e880c1cacb12fc21e9b509c1f814b316b8e625a1012d70d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34KGWWI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD23scLunbPN3BZ7ZcH2%2F9jTqDUfvYr0Hl04EOrsJP0sgIgQDU6ZwOL8T0yp9drCwGj094EsEcUFxOD2TG7DEMdz68q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBvpzuZYlvqkFGGHwircA%2F0MI92tDVwr2gQ2gXYJCKygbnOntJebbZQwbhbsblQAlayXj2E7qFbhKGlhJxB9Lpsv5gmAdTYI5WPECW6zg1w41o%2BCUMU6ev7ElxQzeX%2BmpNaOovBHYxOWVJO6xC9P54KtdfecxGGT0R1sodg5HO88vKGzgShJ2kq2xP24PVQAfzgh754v0IosLYAvYeOS6j6WRzDQfbZT3mYcqyBHqCClw5lj%2B2WVAKNEQ%2FvSpsNB8QnkiiMI21gmpxQYhSnWtJI0iqpkFlMagw4wbAyKKfTEEu4BzffMl4mwoJjpxl5rq5YnbQ2YAo5fX2OkhdjzxfC4zN4WFipyUCQkvfO6DVLG7SLDXjWrfaR7uqwODyefT%2Ber4bVCIVHbEaPn0Ea%2FwZcB%2Fbw3y%2Buf5K3ifPEs8IjewfcKGyCEqYP1YVrE4OXG1Mj8rrDmvelVpbB71BpC9EPVKrfgLSsDoUQT3spoQBgDSJQzAxO%2BN%2BxRzWRSNp%2FJ2B9qh%2FNfH0Wzn%2B%2BxvX7o8Hm847Z5FO0JLRePXhj0kQ5wyD9wqskSFk2qjac8FCyuYcgKFL%2Fdy5xB70nW6s8zqnJi3io%2BaB0rCN23AvJZOqJtsSbgJItuD%2FxMameATpDd6A7tM9kzUVMi0InEMICDsr4GOqUB1p%2FZB18842wt%2FwSMO%2F6DP8WUp2v7Gbst5imfZQsVT%2BAb%2Btdix32wxeb7nGgMu21ThCXe8qk3mj85Km2JhyqQeDHLRguQNSBgw227OXuLcOOw9jA1Hg23VsuDBFq46w%2BhGkuXv%2FPUxx66Ngf%2BmZyLj8V9%2FG8BmXxm%2BLbxuIkVnQ87k8RmuYqK39Vk91fSUCgM%2B86AZ6q%2B5nimdDSOwgBCbIxN6gTO&X-Amz-Signature=6e8e01704b16a6dfa6543a3421d288987b7ab0b54dccff74946fd820be0afebd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
