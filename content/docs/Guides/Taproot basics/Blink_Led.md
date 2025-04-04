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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5YPFOG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGgIRM5HlnsJpPOTDW609sfs6tZYONytxp39F9ed%2BtrAiAgq2VIgEtlEBB0g%2FA78lULVN0bADYCOAjP57JrYEjIPir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM4RkHT2pGvgJqyyR%2FKtwDY9Q%2FG%2BHRVxVZ2fHc3Nc%2BuH2WhxBmQoKJfQUrB5fWHeitDxuSm3RHAZ5IAPbtO3%2F4kIn4poqlS46vZmN7OU5z97jkXbsauUN4OYSiGV%2Fz5lPkqGX%2FyN3B24G9fmyrjO67V7cjtsD6moCKQRZKcOhF9t8m5f2ahRWgFhSAEnhWFatW2p4POWgQYkHI4kUT%2FD08vu4mvj3VQXw3Yo07yCeYLAR86ben5uutvIqvhkGgo2L33CVOVPX61AmQQ1QqSRqjuGMl%2BOk%2BOa%2FFNrdVfcMw9S8dZSZhhGsKtZa3EtzjpWQCs2IvJay%2Fp641SUuOU35cPeJSIOW2x8oZG4Rg2y9sAdddB24PJCoKHFY75ezWWK76WDqfTts2cNC3myiDrWpEin0sWwkpVVUF8LkJKjl25WHvSS2ZjWBSaQL1pwhPzujGysPqLyak1J65SHymL00PFTjQj6XZt6a6bnLO7OZ1ncPXM9rnbdF33KakqDeboOf2ZL0OjsS12Lm%2Fjrj5oGvH62ewZrjiZBSjIVZbU%2FwZZtNzUoG2ibZkdNvKC1yBOjSizuTwujeEhfod%2B8OB5ihKmzFcDL60FdCJFic8w%2BjseBV02Ox01HFlcdERklPImFEv3n3kS1p59E92S2kwnrzBvwY6pgEkFjtCUYvGe2BtGra7DuIArB44%2B1z8fgQOCRPHO1W2OWoMuGzfiqYlc9a96GVyI6uK%2FQqyERUQ5C2lgEWRvt7slYpF6mlitfTU9a5tAjKNSGKMWbMAevk%2Ba0yLpo%2F9iLg9tmG0TIBs18y1rCzI%2BEzj54a5hPHfPw5xkTP9DqBdQoTx%2BYKYBnRZAJD2MLL0Fw%2Ba295tAsgQAg5sbr051JOdiNt4AKsi&X-Amz-Signature=b1379facb7304d426ee09f31c06630520e450c713df311820f03ed8aaa0363a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653ST4JH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA4IFXHmtlfsU6XnKfdxxMb0nKXbVpRrlVHHWV9GkNDAiBowI00wAqfDuARbGujQocz1xFgITzak1EvQuqNjWomFCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMz0eIbHpuhA2RsEUJKtwD1q6onxi6VCrp4IA8BOpLS3Vihop6%2B%2Bv5C16J4CGCjaZlBOalJINdXTiZrlClH88TpgKNxu%2F4da90DzGBNtNzKjSOfhwm6PG4AoylhFu7O0APOrRD2zerJX24lxQzaXJpv3WFIkUvkce4XR4udrQStxQx7228a6hEd16XOdeIaMQDp3IeIOhT5u0plVA9Lycj9toAAFOrIIuLQ8b9wiEv7gO0xRg63F0hwA%2BI6RQCWgjaK4sg4p0BREqQUXIIlmb6FPtAq0lLC%2BzhADaPamNovkK31zrD7CrER0oHbYqdoO%2F%2BCxLls1%2BfmOtoTdjuPwC7VA%2BtpsbWBLZzXfpsVHw9OG5G43BwDfyhYqVby%2B8APkxQxgrJ%2BUaTiNXTaErUr2JUL7qyTOxxIPCYV2Uokld1ZbvGXicsox1Vajatc8JpnI46S5P%2BvtUaxxEo2J7n%2BYOxFw%2FjOss2ojj4ePc5%2B%2FxbxE9CIJ3rpi4FAPe4JUrS8QhA62pmzADeETjOTtzT6Pr75rJHbvWE%2BnIeMzhCTt7In8i3q63MBl0op1ssEjUTaNYB4uUEnvDy3%2FkDoTl9R2tUC%2F1msdgveaYXaaFqz7KLxsaPH2V5k37hu4iEsnOrCFFRr724%2By6XwUG6ZrMww7zBvwY6pgEnqGT8CJA9QxzmAavbY9XwR12uAswzF7QWnheiO0B2AmY6d0Hzn9CLtYhxG9MRFAcFlqVltN9kf58rKKwYcSI2wfC07ebYaxCu689Mc8Y0zB7VXqFPbXlRAyihyg%2BU%2BdAnrYIcPPXoFxtMaGPutulQUwiEK4ZK7WI3HnqwbvCIqHFxbp2MXCK5Jyjf44Je9aHIt8TIUUpqdtWb8g2WgfcbjtQzb%2FzP&X-Amz-Signature=3329004761bac33e47fe6728f3ba4bf9d57a579e55b6ad913f67068ae405a4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
