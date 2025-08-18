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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSOS4TD6%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAOj9UnbMknAm8eBnceMRtYFGZe8b6w72vzOJii6ELJlAiEA9nzYgJQXn8KfobYtvhlxQY5HTr7Eq1KlPRxealvPIfAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhrCcCNB7TdaCUItyrcA6NpKdBNOj3CYZabUxdhjGOk05D6glLv7YuWBz99ygwJojDg2AnsVX9FqJXrH5HksW4u8Rk74oWdxwk2%2BTbjSz%2BeB50W7ax1g02I9Vr61tehzOv2n2DqPvPNPrI0Bn3tTxj2F%2F%2BH1SLqIqA%2FPibjG7cYP%2B621a0AN%2BLKH%2FpJBeARubXr8D5eR3o%2BL9A9ce7edNdfmXAacKboSAKsLVVcsznNYESRoLX1XXC9cRIS1b1CgxovO8OYhRO2%2FxMMcrP84c4mGKvINfbm5KQXxL%2F9B8xDeuS4RJ6xVO8oNu3PXsBz6MDd0uv0Ea128syUzgbzZZGRPNql%2BBN2UwShoPniJ%2FD9Nt5V4m7ezq3zwAX%2BkigyNczFz%2Fa2k1djdyaaaC%2B%2FESpRa3DpHImi8GkayxPiKdWOPmeMy9la8J%2BuLBp%2B0TvbYYxXQ%2F7HKx0EUOrauQUdJWW71yuvpxaUxwn6wgcKQGrRiCyfytReJspoBr9TbAKqNSh0ehA1CzgsIjJZqdCQBV8axnhSxm8rAhdUH4nd7OkXBMafPCYTY8hbOJXxItLtYKqQPPTCT4AJ0H2%2BftfYQnZzJ5v%2FKrp7dgpW6pLhHy%2FR1F8SDmUdqB2UiURnPOyppTiBRqsbBKlygk%2F4MO%2FricUGOqUBeWKslMYcd%2F%2BgxvQET6fnJFYsYaNL6NoBq%2FdJHag7DVaGrepxvAh5UwECtFRmYN6AvdnLMlxJfnU1n5POHW4uTq9bg0gXnwJWDdEmMNEckABMmuoRSAZgtBBKcqS%2F1ecryczTQEeu41Ik9qUs4OXnCz7pw4nCeuW5%2FIcQjcPsrSopW%2FKIW7sdNyRcrNuSpQb3R47%2FHETK6aklA384drpXGYyz98KA&X-Amz-Signature=f13ea21b62e1bab6feb9424eb049e17f8f9904800da14af46ae52fc8af423b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4GS3VT%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE%2BeI4%2FGsMbrgEM%2FaimD6C%2Ftg%2FRbgTf32qxGHwtAcUWEAiAB6S4B19urI%2B994zp3po%2Fh956xOAnCabG9Y3JQ1HjcviqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYZsrEJamhSl3nqt%2BKtwDuTvHG9AkwLfhHeIUvE2VpJRh6J5u%2BztNgSO9Q7X2MUM0M5024%2Fr%2F%2B81N6y0fO44L9kzCfb4d3SjnURKaEeXhmGFRZJixCAGxmJDr4wqhsmAeR%2FA5Mp0U4JzXtvHToaJeXVju015dIcQUzurob3xv1ZJOItkn2GbpXi1ITVGy%2BZOYl7Qsifm9wM2MRccrqgV7ywMh3wzS9I6SahvfjRec22QCY7zxDP8bu%2B75AqiyHGWKbzEdFxXk6C5IEe8%2F6rqmLf6em74CQxZMMHJrvMYAF1q5Sq0EzgfnokebACVY8%2BaCTWD5eQnd6Y2kBH6iB2xo6Ntwc4eEqevy3EKqP%2Bb2hQxr5GD7FV%2BhPBIN1brV5RAbnx0ClWTINqEoV8u84EbdM8hqkc7RR%2Bb%2BKXbrFDDHOXfx7WZtmZ9yz6SjKdZBrwjxKVq4rkc1ZnuGmWZI5HSZ%2BZKU7JrZ7hy2Mfl2nOePJwxO9D2Dg%2BFTcvFHyqBu08AizM61353UAeyVlBFMSIybmcE6dD5OR84OnDxwNkJVHPajiahlWNW2vuWXicY9mPGvB1%2FOFuX6FJYF9EzLqsRB%2FAVU%2F3tj2cPjp%2Fg2m78W8Au6fhqeMpeXyNoPRQi2v1tyZPCH%2FleBLssaCTow%2FuuJxQY6pgHjtYkNPb6LTziR1VralDIXeHz6iPLI3x5FY%2F5qfXc%2B31Pf79vUhm7LYZTNZNmj3O6AwfbEAZiGY1e2m0dXrQiXvskaN054TH1jLjV3APbp6g2HY1NNQqP8EG8y9h9sFja08CKJ%2FP01SHNpq3FDM9Q5mzAhDw5SnP6BRlsKmXYR5wYYEvhRdjoz918re4ZIlKxhC6lZkphpSLFvlFK2Oz8W5Xkn1lvP&X-Amz-Signature=9824faa720923fd32e4d2af607a19c6d4c002fa2c3036f4fbdf4da03058dd5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
