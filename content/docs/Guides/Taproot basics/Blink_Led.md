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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOJGGL5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWk1GG4nQRcKy8Hkj7YztBtN%2FwgYpqLejNqEew5MYXKwIgI%2B3F1De5%2BnxJnpJBc2DZ98TjrADVM6c1MQOotfwi8gUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHv8lTel%2FHDZbOfOSyrcAw5R7PgVvUta4H2JQWMkdJ19hP44VWU4FX4dp%2Bn3wMNXR4Adv%2F6GdEdH2uRZKvd6giTzh%2F7QR1ug%2FKRAEvFaLErZUs0HUCxlddMtLOkD5Br%2FpfjZgOa%2F7Xg0I0DqijOTcQR1zgwmw7KJkwV7xNtKC%2BphaeCzkswA5eT7mv8xMZES04Sp2psWjhGbeVTTIfpjer5uy4bgbt7t6r%2Bqkbhw0Gyho81%2F3bCZOepY0AH4%2BtVZmL92a3QZvV6a1H%2BSwMbaFQgP9LZuNXns8YcXzbNjKQDQjbv5cIPwzKRz66tdAnrafTcKW8bWJmbDkhovn0GSLKym2HbQZICl8xmZ8oCnHhEyHRGJmdXI63IAkYWX%2FYnrnStYpUYG5ZejdxAPPM4KBq%2BsKB0qj5My8GMma88t4DKCUam0euqRvrU8XsNoWMZVmeKu%2FYugIAiRoChdG4h93ijs74T5vVT2EYmrkxynatxHoVoBfqybUnbno7%2BXif081yrZnpw1h11l%2B35dDFX%2FetvX3kmUh%2FomCfmdDz8B0e72ysZqGhLUw%2Fr3YhpZJniF5uwjI8fFMM%2Fm8jgZxSJ5saeedH5Tj5NuUnPac7YUAC0yo9Zt6sQwcIJBtthLqNqCkPK7aA95W2zn%2BjMpMIzvwr8GOqUB5rrC4Ak1k4Js0szlfnMJiyvSLb%2B45Q7DYmy%2FHgQ8dt0FlTv9ce2C3WM3FZmhYO2Uh4ROVKz2gZpm13SVMRXtiueJ8CLcy0ApyOrzGPPoVuw2DcGeN1iLyY2icBVGUixKcLeC4oEFHIhazYuZJxX0ttIHPsaVgvNFlRl3%2FelmSL0mCbGDqBAHQn60cVKxFCicVydb6KPKYBTGvkQknHFDfa%2Fj1Ii1&X-Amz-Signature=59b77df3283dffcf5f7c39ae92d46f04b17776082d3df24654f8e3442ea7f2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DKT7O%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMHjDhs1CKsEED8HLPlwe6shgcQ%2FjQg2mtcKvJ%2BOFMFAiAJbz0apcEpURIEEym5Ap0petwG%2FIMAti%2FS4Glv7Hulvir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMN1elF45I1PNisZnHKtwDuJtS4%2FyOr1duc9800aV20RE5YhGRu05KDE%2BJaUZ4e%2Fo9NK%2BXf3lFRfh%2F28OSEnwGO5hGq%2Bj84ttn%2BNALa4oo0Knv4fAFOfwN9%2B%2FN%2F%2B%2BlqLVxmt%2BhLiA5ssn9r7IUAtOBLncysjZYxxFnwzSzSou7CK2DRhQlsNPhIKf7ojy%2Bom0rV6T8kQp27kat36ygCfY5B9QA33xGF0R1eSAmotaVcAIn2tzGn%2F6i%2FMPVrNN1wNPDvf8ZSXwaekIDmq1aJjHni0axt5AI4dK6gFXH9MdE9%2BvvA3B4LkI%2BGzk37ahY8bgq5P46D07GyvbMqE6DDGTT36FkIsBWtONcRGFAQp69Oi7pRNYc7%2BSL61%2FfynJV%2BfxVmKzEFQJSVbM33fkopDmW7XpZh2GLnZ7twurQHGhap3otsb28a8m4lVaZvoVe0EYxR8PQpmEIGBdRv1E23gtL7wyzdEOG8PCe5Q1yJ2c6JjY%2FqVfMVnpNeQPXVgPJUTT5ZGA7G6O%2BW04c10smqFytPaLeGdN%2FjbXgKnmMAnyGE5oele3SQznBj968uKpiAqnxPAmTNwZj0frd8ZHU7083MSqpd7aQGCiv2n%2FXeD8vHrAE8I3zn2XtVBDahbs5hLSBV7zPzAqqbLdAzmkw3u%2FCvwY6pgHT16pWL05KykE%2Fda%2FIMPaONcvWCweddBKPuitNLIGtXYOXf%2FoeX0aoWA4n0VJbzBO3BB%2FibA9fO%2FQEULl7Bben%2FpPR%2BCz9oSgX61Djws3Vf21TjtXiuT3866dACw7%2FIDnFdSrViZjVcRi2OjkX6hw4eFEjRKIR1G1QtNCWXaC%2B6GjCP48CHq9ur7AlK5ZoPXcwKDtdl7jZe4eS6Gj8l3JvzdH8Sp6S&X-Amz-Signature=e36426f303ea4d35a87c7b416c87d66ce864701f4cda1eaea23cef51f5c2b745&X-Amz-SignedHeaders=host&x-id=GetObject)

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
