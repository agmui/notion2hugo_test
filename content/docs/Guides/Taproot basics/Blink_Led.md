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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUBXBIV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfmSpS4VSA%2BsTUGo6sdFWij9D0u52MSnXBciICopaIsAiAEs%2BOeDJQuCGw%2FvSeD8WCQO3pIx9Csb2TzF%2F%2FcHm1cAiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbNkzdH0N1IuZZmYUKtwD6p8X2dTvYXOoUmB1s3Z7xHo2DXnodiSH5%2B8esn2SQcCXsm%2FeSjEYjLdBupWCS8vLtBC53w0R0nouFXvTJDIuHCE5MiEAEhsXnfqKcgWnFlZ%2FqbiAV2lBS9E%2FkRVdWmY70rT39SXHbiKTqRbJYfhxtEUWwb%2B%2FcNfeWC98K4HD1YkXN4rM0CIqNbiFZjiXjRZQFl5AQVML2KoDPRURq6ICgTkmxdnYvp02PRYoSFJm6veRun0PJ1Q1XYBKbO2HOQB%2BCvcDfJpHfK8NUOkSxRC48%2FVxHtSiQRk8X8lRcRSBcya9GJQrPLPolfB2ChJyURTHUGc5SKHWlAtUHf058xT0w4tF8TZl7O4uGltLb9z6ZnlIMc7pRFqbNYWWx4AZYER3Y9VjDeJqZFVUMMLGdJHAI3v%2FZTkNGIwg0%2F4BnDKn%2B3Qltw61XJVFkcFz2Zk2tPCHJwAJpEjEPJjv%2BnQ%2FrjVa6YDKDAmZQ%2Fo8TanigI1vwG7TcbNUjcOLXglSX4xRVvtNffYuhbwWl8EmpvgJZ6RD4mc8ZFQt3JG%2FJLWYQC%2FitACALFAbkGZftzwCEq2HHcKxhdhLCZob7OwHXh2X%2Fa%2FURRhK%2BlWp%2FjQVJwoFUum%2BuVc4gpaF089et3xgOKow%2FI2xvQY6pgHamOfZjcMHMvrK7OIaHbbT1dQNQBa1IO7tom9SYrWy7fHr38pfm6mOunTRllrlUJb7RkexoH%2F5HNWMt0N%2Fazorbv56z1DjMbd36T22nuIzcqpN3aUtP70HlLjn%2FX6PqGyqOfy1j5GUC4G9x8ywMz6djfq8o02dS56UzYCfipQLI0M6sRQc2konofHaWEsmhpV%2BlF%2FJLIPoqxOn%2BS54bx01MzII7jq7&X-Amz-Signature=c792996a2b23737986871552dc79fea2e774ee5e19c362d23533941e26a77ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYMWSA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WOsVWnLEV%2FADvyVaddKnlg9uU3%2F6Q6vowqZSplNLiwIgH8eTYZm1RW8D1aIe7ZRKDc2ApA9uNzNRie9ZXwr%2BkU0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FjSIuTv984tE%2BavircA0O7rBPRR7mwOaG0prtnH5bLe%2FG9nQqcs3iT9pZqFpJmx6cjCN2URop9PpTHS6sNXQJsCEahm5Yc9UJI%2FX8n0Ja4IJLfznj1zqJR49%2FMmcRIpnn7CkeknxRmNJTr6VtEu3ya9IBEgiKaFUsC9tF%2BZIsC3XJu53esSauDNqmsoag66n3aG%2Fol0CVYqhNG2OV12pZdf9ps7I2OfM2tRvtv%2Bj9wdWOF13gxu3%2F32M5oSMBE%2BZZpJZWT18Qe9MQFKhsjd%2B3IoUjgJiYgzKYXJ86aEt3ixgFt3dBH7UYpU7fx1O9HXRQ1kF%2BxEe%2BVackFuBAkNgAl8T%2BK1eyQ3zRP3AN4y9rlmQZKWtH6T%2BRLYGrIWVN%2BQBv4pjvS7QOBRUSE0ebZH%2BBDcER5dlQotOB8m%2Frmb67EEtkyUqwKtuIbjHz5rctyH4lH5NiYOjPkPQkL2Xvh%2Bx8ERbGStI68Ho76d9RLZwUrYnyeVceAB1ttYYI9bYkKpTnqzoFYpqOdf3kepEaoYbDotqjZLHleDvExKi2cEPLvY3X0QUkb8yvdXRIp9LFjzGIWLssLELLpAhmtb5c5kssRFV3oLhHdvXHzMzdHUSzqHV0RXkGl8lfPwRuhNtKlmfr0UT3EKymm4T5kMJ6Rsb0GOqUBO4ykQboTI19NKPCrJolQKIMh3TSw26dhdkjl7LdNqJh3j8XO9M0uHMyZsWpMAXA%2B5zE1jjluVuShSTiGfkXuRKFS%2BbmbuHXa%2BDDKo2sSFtXL2IwTjZXx4mAXDnfDq7ftzMZ%2BopHl6DHSODD%2FdnPrvCr885Ux4tDVJHYW5S02d9No0FWAvd9MYCIXKI5OPaqNv66Qsm%2BqaimQFUWygfRdjoeFg8n%2F&X-Amz-Signature=dd7d753b3cd5bfc35ff1bb5285dbff799a2096abe6ee1e3ccb7f690280006f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
