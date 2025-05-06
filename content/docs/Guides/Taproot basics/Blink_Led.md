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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GHDWLB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx6hrUmcsa52d7sAxjeWIaBpP6%2Ff0HaHotBCFS8yL1ggIhAKcaQyeIiG75pW80w3AuNhi4nVTOoz8AV3cD%2BOAheoCuKv8DCEgQABoMNjM3NDIzMTgzODA1IgxIsEBd8tpRwjXi850q3AONh9dj2WJIRCZOyUy2hTW%2BNF6mPpgzDE5EO5cmxsr0qcwF3RObbmbL1WnULlxIRGF%2BahHjMK976%2FVJkPBGTXSODILrDjPuh7VgbzfEhx5ffdksxWAaqIpIVU7z6qBhC%2BZBlH808PytiklpR52pZ4KFo2XR6oZOy8iVB7KWfBZvkh4MR1LQBJ18IOV8YGyMDb89hkOFm1YuUtNixzlgdoeRZk%2BrQcN48niwdapWiIqX3cYU6OmM%2BIO4baj3NFXONLIq1GsGxPFm%2FoIe%2FiKn%2BckaPWYJ6AD6jEv2jpv2cjQltxBhXJbSpWgbw1ODKBDlkgGmNrpNhKunUyqTWEl52FQ%2F1epBnSQzk5n29JIB9Xx9GNpM6u%2Bus5UMwQKV4yfUFehkFOUjb4cdgXkhNZgcN2zdQzr74YBTxx0xiCqQ6mrZvxc38YF9XwUMLK%2BFagilUeS3Xh1weC2id8bhWbddna3SbkUtfj95VgL3FZpQ8NJfPH5TgWfsYOuZm57papWlXQ%2FrkVOV0Lunwrq5Uu8oIrIQnCHmq0Q0%2FaRkLbhB8H2rwIWb4Axr1W01BtBK554WMbNSZ26qh%2Fv3TZZYmyO%2Fso4vbvowiR55AhJsusg6v6EhU6fnk6Ag4QkeHMJAuTCAzOjABjqkASd7Jz%2BnvXNpnJDnkzvo4wq0RjI0SIrLqPlFE9YMy6GacJwVMZmUV8u%2BbtVSU7AVKaVwpPh8tMkWXyuyl8jiBnSnQPRjeX2TYhXXvxOmc3mPJ9kXe6jngloApQHX%2BxvAKwE1qoxCPVC%2BJsY1g2gc9r0i2eu7bVFl44XOqCsBoEMz2WUb9XBvZh6fCd4dPacGtrcXTezdb31Wk2BWE9m9QY28PCd8&X-Amz-Signature=ebe03b6f9ab9b2f47e5d96ed7d4b58092057d508140767c81400577f340a35c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWZRWLX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SC8jK7AGKuA4xJ%2F0CEY1jZrrNCfLVptNJ1D5FZfv8gIgRWg2ZB3lp6cZKByoKEjv3qkUWULkKVWjWah%2FW%2BnswUUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFcCKus4Qf9oDlwV7ircA%2BWioJ0Tu2xmJvME5Ha%2Fc9mniEeP1qJnpMkhm3Ua1Zzdbz1sN19x2wSLnBkITs0nnpTNkxtANjpZcFpGtOkzxF3AcMlyCMOwk%2FrCq0SwDGhbTHWLoW2TYvbqa9pmMD83gpqes7rVro8Z5gNIgyXnVbppbJqnMAf1R%2FSKdQD9vTNKIuItSUBL5hYtlvBo4RgrpU47cFFT8VuF5a6SQgeZwJkcbHl0Wwk2ghyDNHu5A4m%2BgREfvscyI6mJsGstWxUvx64cxuBFw36yNohxRGyEyeVZ3OnotVQNLELOebSYvxK9DwdpgBqw9vX9%2BWVvSwKnh5Ao6Bj4XKbvTYUeezq8ho%2FNmuGeLYE%2F7%2BNK4UK4IAlCKpgcsVQOj9FLxucfyqfhFM17cd7IwxpewD6o0tGbZMP1MTTwVZ6dk1PNxQNNgF6sOp%2F04pSwm6FmaMqlHbmkznemSMEESyLWIz5kNh%2FQex%2FPfBuSap3%2BvymTYypx5SxUd6n778lGgtqnD3oDVZRdWTbzeNdGhNvXTN0Q5WITCrpYMNYURKjQ2M%2Bi1pa6eoXeF5PBi2XS3g5yrEQzFF4LRMR%2FylAUDVDsZ9Hl7I7CWtNcwyt9uopQ4JHFC0C76WXIhWaLS%2BPtwTacxjrfMMuy6MAGOqUBtPB%2BiZeaLcAv%2BVeW%2FMvUbulsL%2ByOzEyi2YMUkoALFG%2BBMR60K4eL2Krw2ghfQ3qPne4drK2kcIkWK8D%2Fl3pubMI%2BveSnnmXwajR1G6XjKd%2Bq19lspOiR0vYrg%2FiByT5SOuU1rGRxIU2FIQ542laJK2Lzoz%2BZEWS%2B2lUdp3VETRNjwTKYlqwy4bc6FpRkr9NZk0DhYR7AyzjhDzjQjc4a00kO0mcr&X-Amz-Signature=a6eaf8ba40a964764d4a6a9b5351a8fc05863e84287d50be8183dd1bb6b23f97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
