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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIAQQMHA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDJWprjq4SSkA04WoU9gvpkrkS9m6JJEMAo8MHWDOkVWQIgRPeGTwOJ0F5CHVhysjcWhfeqtHHg7%2BYSy7IQk78pUDQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZazcZnGyzjJ9q1ircA3INrZJRNbx6MC1eSXStVAz9WdRYYgeRDz6zpdH7XzqE0JiAhtzucP%2BEW9NxjzbaehKPCa7cm2R4F76cvni4lT7mtgLINRgq6x2%2F2qF96JQMGfY9gL%2BkdEdWl1gM3tgEdRfkwn%2BXd6qrBlTxlzIZ%2FANvjM38INaBVC8qk90odGpE5FxZYNR5AcfwCpjc5XR6t8vlWM6WDQzs9hsgyFpD0kryEUnGq3lJsgBCS4ozzBAns5nrcTkQRI8NrhoHsqLk1RQQ1gUg0cQNPhvZFBwmlqEY0AuFfoP0R7a%2Fdq2iVL%2B0Vb5KDktzBxyOHKTtnK5cVfZNrINtl%2BQkVlR0QiIlwptquqUrclG37OPQ1VVnfIlm2IXPGpCd%2Fe2u25ihe9gHBEeppSf8K0nTmZkSkjc%2BNVhso8CiV4h9wuEFqe%2F1k3YJ1V8j70i8nfUSDp9025CI9q6p%2FAWSnS0Bi1%2BcH%2FakJkmtHCAU2LDmB6vE%2FA6cQqoEXCv5cWf%2BBMnThEgpoTnC8FJ19%2BsI9Au%2B88M81yaB7vyfhBdlBXGlULd8doaJ9XCBjbqr8iR%2FnWq78ceHq62C1tzS5lzP0tojq5J3S9XGloVkM6NH%2FzOH18mdV0DAA07jkXW2A9hELbgCVs3IMN3y%2Fr4GOqUBUYtlvhgyxk7wX8kHHJtsv4%2FeMWdoC%2Bc8UOYrLOMFNXPlCwLP6JewUAbzxbTaBYJ6QdRakkOrb%2F73lWWMz6LmD6P5yoKKdfad2uhZfj6ctvR0%2FVznm%2FkzE3hO0vxFL3MMEgWRvtIA883i%2B6S3gSYOTeoR%2Bvtk%2BwRZvPtHepK9Evfew5iKajWql9wkyZf4puCaAOX0SAalOefRHJpbHsz8e0vcXcib&X-Amz-Signature=d2bcd395f75ec4b6a759843912695b6559aefdbe9da1773166e86e3761009756&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMMV5G7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDb9yEj6cd1aIwSiCiJ0OuUeHM6L%2BEvxj%2Fa%2F1sAsKOuagIhAKuJqlrZkZhnWDTVwvAyjYQNrJRCistr%2FflB2T9hOpvQKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHO1ky2W2NeO%2F3EuYq3AOHKl04WuzqNEN%2FlZlYu7x9FC6WPwq%2FVOEdqHK2YmgZYAxOvFk9YPZ%2FOAx5bj6aKbMYy2%2FwCcap25qst6f6On4IpARloDM6dw%2F3AZGHXJ2wxmLc%2FUNpTbhP3tPrRTy3ab9DSB0tb0%2B9MoBajxiAS8Te3ia3%2FngvBW3w%2BiX46K1sMvy4IYmb9aFTlJAg0JdUzM9Cpk5wn1J0OEE9edREqsI24W6tQydvwx0b222Nb1dcGxTxOnnFUkl%2FekxQeBSxaG%2BleicApfz0GXaWfb0W12A9D13sXAhksnPkEDA6MtdNSf5eDeK1cYjx%2FCu%2BQ9S5nCzdyaQrTJN3%2FkkqLohVriiq3eCbp4yxFqlZL6mC6NMvwVGdNxWoGH2b9oSVHbyIVS1ubq6jx5lYTLxIndIW4%2BvCtJt0laY9D1SNgfmoA2PnYVSOKOn3pXxWFzRJd%2FT5UEygdqC6rKrwsFdzVGO8EZ%2Fd8AsdY9zan0E8SWcudSY7eWGWDvyE%2BeXU4b4o1T372RXUbHSg82KNAEeZpV4oC3hBRMlYlCUUrq8oDWnRGuAsNLDOZM9hk7vYnUygfsRi4KPGXgQsp5Mh2xOyFDU7GxJeuVeUqB%2BQZyuWhRYGuBcTomZ0Ubuo%2FRo%2BALuwkDDP8%2F6%2BBjqkAbrTAJfnUCTSokj3zrZKw5yoqGbY9CY2srwCctZBngy3srHAneo%2BFaYnTnBM5SmcT4W4y%2FiD0VPKmXldGB4XYInH6J5OGttb7pePAIqZhZzbhojS80RmlB7P5IoggQP8WChNJ6c4N4BlxGlo5xF7350gc084%2BlmILL6BDi1BuAlF%2FoqAORa9cVyOJivD4yUpURgYH9J83lWv%2BLM8lHm2hu%2B2WeSp&X-Amz-Signature=868aaf56e86d8de1b19788243644dfbb4f67cb3c04b3eca1e4901b5fc4367ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
