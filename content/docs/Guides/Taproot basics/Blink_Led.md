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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZA6RKQS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHvSVxmsOsy0fe1zsDSPFFy7%2B26ledia2nUHIFpTclugAiAJjK1PDQfQQ3QhN8KdSSXN%2BbiV3xyKWe8Jjh59drGlKyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDp8in3v61w6qxxqYKtwDzaJBFzro2ofz2bHVhctdP7aUJyE5Z0aZOwlZkBgyrirx54w%2BzGeWgj6SFrJHxTYaiXdx%2BE0Y%2Brdho0CYZMqdHKHqYoJbbOf1MpTS7QaOWTIwGOFm3hdnaNPnCHYOmr7%2BRSholiIMrovWVLeq5nKa6oY8ajSp9RMt%2Br30Uy0qU%2Bh5VhUbYj3qRV7D%2F5uMZxZMEb4a9nCgxBOSHnByT1OSBb2wLOpEOE4sMD8qZqYdQRDOxoRqlS98%2FLG%2FyukqTST3LJDLyE57EroWIdtmy%2FSVVrsLqiU10AyUnhbEyCijwzhk%2FVCxTxOmzq8%2FVkxQXKqbXPJcUQzUQMPGWu08oCJjoafmhQq7AnrTlYiytsNN8qPE3iKdauZ7%2BzIJOgZ8hzxPrJEjdiSb3CrWAE55EG5wccgjVDxPw6Etv8B34rClJMSHRZsVwx0rfPzEuWxmYwcex9PVzrUwhS%2FnwLeMlPyBzITFeYY97d87awMVdXFl6eazhVfC5dwSKmet%2Fo6l6SOKdtoptX7ZRjVj5QmjKmxwo6jHToY1BmxeqBEaF%2B8HnzJD2LpH89SQ1U%2BjntF7o9YnlXRE8bkT501KivkDaoQ%2FrG8lRFOiBavSMkz%2F%2F1bE%2F2b1YlBa4nyuGtkr%2BPYw0tbXvwY6pgHsuIM%2B2ZXOJ1w77mPRVi6hdfCEWqRWhUcwKxL%2Fmi4FsHiTnDzARDwmAX%2BV%2F5dtb8Hab7W4ywV4MFXsq7wqZMd2LEQTFPwgnJIhdvsqdw%2FOf5BiXd0uRR%2BieqwPNz45H5IcL94Oi71UQREwk3Je3gY694fLjAHcBA83%2FTL0HxLsITgd79%2Fvnp0a%2BDab1BZCkCGI%2FNlYZ7eqboWxzKU2U0JMCjqGMY2Q&X-Amz-Signature=d5b6caebe1d6ee2a0ec5aa9c2c6d4850d8a9631ac40959e58558fc48d8d92da1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVKLHRS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIE9PwvyqS6eUFZSenXezauyi65rI5AAv55n1SvKxmhF6AiBNvGtHVD0SqLSH0xZ79UreoI8oJCOcmEIRAdxnVMolnSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZrGTHt6lTUK1JvvKtwDWMFqef0tRDfxuqoK%2B6xjK7dU8T3%2F2OeC1utVGkC36RjwRh1FzKLVd1Nmh%2F9g0rlzNVGD20Yps0lcr1zFpnR4U7E61fDI3ihEfvBsqaoI4srhGSgmno93jiovKz6GFIcY7BkrKF7ZPKZVxCdDpRtxhQSX14eu4jmAj3cJjkoEwTY4CDY0%2F%2BMlYh2Xmi%2F4Q5P%2BCatHGoY81T%2BERe1DIu%2B6kFlt4Vrwk98p5UQ3GLEvCBnN9%2FdhOVLuQWT4GLy8K%2BCMUGT3HaUXcLB2rlwY%2BCRiltJyk2WgrD1S5yRSX9gXf7wKE1kshfvLUaQjN1LXOMpYwDT9Kzo0BWJoCJEgXl%2B3JVf0pudfSJUVbQ1FxbI%2B6AGxhrfTCUKXyhk5YthkmaA4T7%2FrRTdlIVLf7nrXSU1O%2Bjsl0boY%2FFEffrg%2BfXh44Eludl6NXk1YW4foWQ%2B8s1IG8hVDOgso5p6%2B016dMO2vo%2F8EnPaQJ9Ruhef%2B91lNoS56NNEEmdGvdrpEL7VT2UD8sai7G8Ihj%2FrmBaEadqi2qbS0lX1sy6cwUXtmuavYh6lAGmgPzuWXD4p2azcRV6fgY8jwobjBf7YxzCjfvi67iSoMZJrvsWROc6bJkLnk5YTtjB2Fnomy9BEMhw4w69bXvwY6pgE60JP7V0FjGF4w%2FgqIolapPvXe%2FQvUdQreGxI4BrgmYAWNQZOnJjy2apGFkp7Z7uuz0r108dqCEugxmanjqIAdS1IF8U0s9wR04K%2FXtuHlL3Wav0I8iMtHEMy8yQ5sf7ofKSOWPRa4laKIRXxQAaALKYNwA3yQlH3WOaNrpuqPQMbGwvqB%2FxXbmbTTk%2BP1gmB7OcaRyp2YC%2B3xyp9czEVARtZUYT8v&X-Amz-Signature=1e9f8ba31336854ee17730ccf6daa6023649e1bbe27e51f576b83578c417ff42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
