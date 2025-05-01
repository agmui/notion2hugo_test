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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FBNKRUU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC418tW%2Bu%2FAIj5OgDaSTDXiYPgp7%2B1QH1u1sZKazurhQQIgQfCPTRAMxykRC6HCIF2VaLAjs3Ac%2BNGaUAemaXwmb%2FYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAZLWG%2Blzq1BBhEXircA%2BfM6suzrI1d6tiIB91pQIqVtRZ99LDNNCTxKNzdLrVztLxCFVblg7chuOrkIPncMurItzwEmdMS8mhOGR1W3XB0hDawAG6o6ExZofLZOWnqz0RGbfRmXAEy%2BdwYbtVokPpCcW%2BbcYmX8crP61HU91fK5Gy%2BtFywNeeMpCw2ls8Hkw3lK8j%2Fp8mmJSGSZnbpQTGi%2B685CqHugvnVToo%2FmmV8vmB%2BM7wVyyi5j8sc7FZXx6I%2BOrhup5hsqub%2BrtCDGcb67YVwQUB%2Fs%2F4Rbo8CpJmROGmTDZeO6YLEY4iLvWSTpnG5E24fxFmJVQVUv%2FcczoB%2B7aRKF6kWqjrpxrp%2B8wVxIJQcj9SfUqTasSKYnu%2B%2FxAuI5M7e0%2FCpj9ak3aCERS8vJFUoi63eZbjSOZHHNUC0JCZ3If3RSbz92ejW6LbZhqmifN2j6gpLJkKonJHl6ELmE6FSA27IFAycViRiWtWsrXBt4cq5h%2BQko7gmO8aZcwTV5uYup3O68ja%2FK2HZmlIBAqhGmxp2Q%2BNlOoK14MVs1zOa4IdMPHkC2qb7wkJHO3YsqiqkKYaz8yJcZ3v0hrI%2Fy0OW7%2FfFA9r8X1PzTlH128zQMhOSy0%2BCklg8MZzgx%2Bl3ekzXEXooMY%2BNMM71y8AGOqUBTsO8uXgFELu6tUWv%2FY8h52j8WyxfnP9SQSQMntMtb%2FazoEnz60GnJEcvNHXWLtaQVfwWYu9F65ZLFj9fokBjUreZJMEdzVka6rlKPptQo7uEHTCtm28Haklkel9OnvqmiHdcxzPom9KgBxkcBt82Koue6ulIVzvVAIRprXYSVyey6PzyAWEUIMyKQn1BXPC0l5vobNF8Ze05hkrPQxVxdFdK8N1E&X-Amz-Signature=b20dc7130df6243966d0c445a98c4fbf31e64c449abd46af134b81787fcc0423&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXI4IIRK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCT6AFpq3xLPKlf5FnBP3h1mgAoSXnSIXs%2F3o6A%2Fv5wWgIgAyF39K%2BXFNaKy0aLEqXP8g3Ky4i%2Bl8xvWIMIhCOSMJoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdec1G6wvwh4oUnASrcAxmRIJjH2yrkpaKV8nVrjUcO%2FuFcZN43BMVtWZoeKEOXw50pcUITCr8puQCxPuE9wnG3c2b8%2F9JBjTneZOJGbFdT%2BbBfwmZFsTrXfWah8oX%2F17M5O4wnFYV8Qw1rtjYKXEtVtFiWlZmhc8LoKCdbhXyM8JK9or4b%2FBR33XpNUnByUh7H6T5F2RNhgdJgvgDV0NM28vzk2sGuebF6AJlTZhRW82e34xWuFaZFR3zdWDMAPNM4dH5wwnbDFU%2F%2Bon%2FI8R%2B%2FK0YbG7tXcSwYDRex4vOOfEP%2FQZStyw4Jed%2Fqrvzwj7Srffcj4ujtAthS2rflAb%2By%2B5kGrRy2IzMoAfTXKiszj4SHsyrzmGN9g1QO30fJOheBHlAaXnQOp7FQ%2Fy5Spwr1P7ZYtgoqmIN97xjRreQDqoz8qfU0a%2B5eG4lZXtCub87zwC2pjGTsjvzQ2gilOQMySiVabNcK%2BgsC73juvQkCchrzExpENXz9wz%2BhtsOgStE%2F5CIzgUfq%2Fy9d48EeAfmly%2B4RPx889bwuGU48JfhuZwM2rMfhPjMTYHS0VbOJmSreFTjD0gm3uBhWSliDceRYlFoGRLG8wEt0a9BW6NsGCWprZg1y58Pgg0LtJLfiozsJWoqKWDieBzkTMLv1y8AGOqUBzVfcyPYJRvLsqVlcnKIUdNjZ8wqOGRH7xP80grRvcqSedBY9H45AbIetPdCg5ezQY3%2B7xREc5zk9xDI%2BTTM5lj4dc4zSdkDRj8Tzwthb9cxSWRZWqjHDzCcj4USaCr4bpSyYFFSHhL9a3I5p9LLYwSTiB2GME471Um5smgFuAr7WZL%2FRR0YSZr6O4gf6l2Ttm1Np4mWQ08gcHjUAFMsl8fDAaTej&X-Amz-Signature=a2f6c6ef28a3c2a069b6fda110ec8541eeba336487e914f640702eb9da5cac17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
