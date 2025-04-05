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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUGAYSY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW22FCxFf8pyQM9LMAicHyZmO4dAyAPAl91y0eBygTXAiEA9qCeLypQyYrmJTk2wLYM0VKZFjfJK8nUuL6uykCHqAwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFhzHzAfkGE2yHaoVircA0MYXm5kSjOQRIMsHH3F%2FXQeP1wDdwoa9kwitrtFpnFXtKjzLuUEG%2FKd%2FV5FYqTqAt4cEOXXwDDDe3DrQaQ3VDj6KM4rYJThpXqmtxwopBI04o8E68wbKKYtA774T5Y4kUJBs3IC7phCdEuvYrd%2FfNjDGVD%2FMQ8twEWzXyR5cqQuhAeqaQk30H0vXBzAaKvVeeY4GVC%2FUX8SrhSYjLBJfYxXMj2bHYeOsyG8BD%2BW7BjYFvsqhjSe9yUKhqm2Jt1rFqgszDE0MBulYqBoNPVLp012G3wB1G0aS5AtUnmegY8R6xyrHBBIFfXaXKNbyyFgdc8bZrQVGNDQG07AO463MWK3Pw1shVyLXvk4sSSghS6A5U%2BMWuZZREMCe11Foi18XRkLOyKBHogKKQOA4lDTHHQFJl7%2BlliWbfam%2Fw6DQSCsK05aB2T7nkNb89tcz4r2RnaBN0U8ilfUkKj%2BvMqwr%2FPbDX%2FatO3%2F8aFnbDnqcsWU8DVCXYjonmB%2FzC9%2B2u0V%2FF5s69Ce3sEIsbv59eU7WBvwDle3mGbkwinoe0Y2iyWfjA75yTapbPmomxK%2BjZLOv7aWqe7G8xv01P%2BypX3AjNAI3gRLg2iGZkL51hRuzCbA%2BITjVl2hk1uMrWZ4MOzvwr8GOqUBdO7DOLEgqZCvwtOPbPQ1khNob9fu493mmyTbeDMx3Akg9xi0Wyh%2BiHYcr1rr5TExXf%2FG1OaJhbxH8tJvxngFntg%2BOKkD3oDq21wMlazU6ANy1TIZQ0D2XdP28hXmyZZDQV7z5k7Cz1a%2Fx%2BGN%2FoZ8VRowwo9xeI7oqIaxX2AmuUp6EbXJ4dhhzfwOmKU3G8Zt5Jf1LRGvfiIaAJOaUPX6l7KsUHeW&X-Amz-Signature=6b4ad8bd92481ef4bc156d0cde87f2ae9c6ad7d2c733e3942e6ebafd878c4e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UMAZGX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6E6UrB5dYCJnMr6SkDxGQyol0ApnxpR24zgNao6xy6AiBgfypBNJ%2F1TFYZr5Pf%2Fz88hdbD7lxbjxJs1nb%2FK5DB5ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMj6BfX7ThAyoghchWKtwDM6NaxxDmr74yA%2FqyZREFcljSAYDZ6fCmRxEekDXDKBfcwBuVEMozBra75LykskIuKR%2FJP6y%2BomzVlyUsc7sulPD1vEDBijBCu4jskbaah0mbFCBNsMHxOJ4DR1ZFik8zpwY1mIhk6PlpQtVcSXbt6h3xvEQuADPkPLuwh58ejIJxtWRpMuBejumczxK3nXFxuGfNnpTS6Oudsgxe8F44L1pFrKJOJ0qdmZjvCXx5dRsuhhrqnQKzaSB0E7UAG2k1yViCIx%2Fdr5azR5J%2BbSgz2WibtOxdbcid1A0wzPWjjuh6iQqbmoAAdB6F9Ea%2Fpd5VpU9rCgZ9KUvDrfyUwukGous4Yfn3gcO8TCj3W%2B64Wtwt1IdHXaqsXmj4i5EgDMPKywqbIPBfKo2ADaOvSBSfW2pgZPwtDT1OeELHul3m6xgiNhZZMb0Sd2B6Qr8PPX3yib%2F4bxtcjL7Tgc5OJFm8lOhZ0dHd1fE6WfrokEOTExDuX1uyqDg9Y5ao3k8rBfDwm8aOj8tXe7HZpGOqI7qHXPHF7yf00qPXwZ3gPbfbLCIAkQDtWo7joMYQqCMEjK%2Fll8fZ5CJa8nAPxHi1HlKPkpna4AsHelSIvokg9%2B3nVkNPOAnkZvmCV86Ut%2BAwmO%2FCvwY6pgF8sjapQjbW0pIUB6lXsza3kLGUn3w%2B2wLtNh5%2FoxK7b6zoMBT60qqV9gew4TtiWIdRdzLtZkSL3EsMPqtKnU6ljAvyPobhQFLgk%2BMABW0EwaxixC6l8ldULVSbTgXD16FF079oRonXCfVvKIhp7d5oDrMcqby62OX%2FX35YP%2F6WF9%2B1zi%2BGccyC4Ypgc%2F19lf5BDmT%2Bg%2B57hnj475KJTqo1iBS6%2B0F8&X-Amz-Signature=773d7a4cb3d97929233026415f54c237fa842345765c77ae30291c8cb972f297&X-Amz-SignedHeaders=host&x-id=GetObject)

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
