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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3OOBZM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUyzzXiiHswH%2FAyypwp0GfknrEA%2FHgdI8O%2FvmapIr3MQIhAJV0mVi6bhzJyqFZYqlfcnlLp6XkNUH7Fkqa2S1nj4lXKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvzMt6V4YRkrhtfM4q3APN1PACRgRhlPJrVWOIqRB8FUDSwUpy7LaQ4brFgbgWiUt1SnReRvBB93EnPAFqKS8%2Bd5d%2FUY6b%2FiI6SEseGqjMqsdt16YB7YT02zEqY683aMclbYgeRvGtduvjqqnq0g5%2BHutnA5OGZJ6sKZBKTmdSZ9uFNDw2xt76yLqC9yoLsjl0V8s2HBeWRB%2F23anRu7Higmfn7dBrOSrR7RwMWRHa2qM4s5KXf57wl5q%2FqAIlj0fztwYmv5UC4lMDzYZY6dpJXlAlOQZx287Gz%2F5nkQVZnjlogPljBFVnlhm8xIF22UB3Muq%2FpcZzps7kCZ%2B02%2B49F4Xu7mwqfepGEm%2Fv7KPzl9VBr%2BnRcgGRELGgun%2BAh6bo%2BiRSXGMJUO6UkjuCkNsyQUym1t9XztlvhZOyKLFpDA0LFg7lzOuR6AUWWkjla20jjJkR7vJlrd4uc92FIrKzZskfrizdm772wlf5HhW7Fi2zWp8214k7yNh%2Bf%2BCnG0oJMV%2BtiosvdZP7HDZWGJ%2BguoVxBLbtQOEfR1v%2Bu2sdt6eubOqw8SoXpETKswLWY1Nlm2uYdqTAYaahijZTtqb1LKhpoRCZCy78L9ZfIFjszBpgf5BQkRSO%2Bq7J9QTY6L%2F84%2BjCeh7mZpp7RDCD5cm%2BBjqkAfiqZTSRF66RUqNvr%2Bh%2FgfM%2BktnIyeXqX21c4g5xoDAUmjhgaWMOkbgOxzOlIuQvByjjKZWhWxPOs60nAyZlxmGKcMwxeGSOfN7U59SdeNScYKjWQ1HNq%2B2EhXTPqGWpFV%2FCDuQ5lejGVxuGZFfAotEFAUDmrSD1GsV7ZEz%2Fe9KmmO9ucxigewGltSd2316feNAp3T6bXpLJrHsGYNxg85Fb0Exq&X-Amz-Signature=0831bed8df217f1a9217aa46357c21cf771238f1bdfb14bf19f0eebc0becff18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNXQIVXT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0EHzKfovVkhuGNKkPwlKi4T8CctwAt4ogVxrnzyebuAiEA3wWQSfkGe8l5wKcqruDMDmHeEqG3OJnMHVRbKhgpwmkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApYAsch51yHpUMSgyrcA%2Bxse88GY2qmtQGFXrlrvCqGAbCEbLG53IqlU8cytP70MDKnbovr%2F%2FZQceUtAJLfML37gZeu%2FANxVW6YQSemsoujt%2BGQTyLT2vaIlv6%2FXZZEs%2BGxlweYqi4YMCyP2tytLnfHGONvrQPSlKiNvgI7TxB0crarwQgj7OR9gTnJrUx8n4h27phz3KeZfnYVQR6RYq1z8HVG0zzWTFsgmZlNqglDoBKA2Rp5RLpBaqraw%2B1iVn0LgWH7YHIZ7CRhuWSNgdgVX5OdQ1nzSmXMYs1njWUEQ1dMoTAnSyOSS385804gadQFdwzXqrDs1SocJ2ORx4MQ3rqgmqKQ7BDUmc7CqDVPIBC7H7FDXEqf1Jmjth7mRLTn8D42261R36KCdDriiwiNExfH9upPkudnngMdM0pZE3vc%2B5CAC3CfVTkgyt15f%2FOrhuCP7pZ44ZqzWHIiU6hSl69Vb6BTrRlyL6qoWa23Fi4fyM0X2S87RPSlwdg1MEcoToZPv9X0B7aijCgCeNqTQeHwlLipggZKVZ%2Fzo5%2BzOitPfYi1jnnXU%2F6tDuUS%2FTf%2F15mdGnrBOPDICxwxPi8LnZhBImpjgoWz1YmpKYInQrOJ1o9IOhHvYwyaGJwTorrN%2FG8mSjRklhU6ML%2Flyb4GOqUBEZRy6ulM6n4Z5NaEe4OKtZlIitTWsQeiQ2C8VZIr%2Fp%2FN%2FUalCbwuit%2BxqcbzW7DZtY7rODVWzuB%2F%2B61Pu%2BTasG0qrd%2FRgwz3P3ssEbQN5c%2B%2FQdfNrqTAe3%2FaS9iaoBv7XSQY%2BZt7YTSnTn3JH3mJeqbWRHqN%2B%2FPZcfc9POHm3bJUVrsJxu8AdYbbEZuEFmYEfoD1VF18WrVuPhHWyh2dWmR%2F6BoI&X-Amz-Signature=cedb75417d4e4979254f2253c0e177c8324aa9f643a81bcf23a18f3b36ffeae7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
