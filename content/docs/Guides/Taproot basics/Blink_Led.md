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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZL2DQ6X%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLULZN4x3UcxPIsUQVIL5urCjAWlO2kSf20s1hPgACdQIhAJmsnf9Et1ypvkHN5GZrRWX1hXPw%2BChsF%2FBz2SdAdHzJKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHaALl%2BODi6pTYHgwq3ANIjsadKP8k0iAYIMsseHk%2FoFuoaJAiwlnnWhwQgEBGLTb2Zs%2Bc5aBXSkE3BgnXRZTK2hXtM5RZAKxO6VrjUHDZJIYfjdYnan23fe9wL3oQ263Dt9BIN8OLgM3qLrz1WIUUybGDH0GLq1EJiSnRxjGaEiuE%2FIoKljNZTHeejOLaxzxk5LQyF3dQBwiodjm67aAue91hR2SuS%2BHAGx4ICNq2Q3v3GmjVgL71XuGMcXZnHDKYz%2B2aNg4MeGdrUGo%2FNMh%2FgmpDZ5p5PgxOfHI0ueFTRFkKcj6xsD0zLoZSWn9uvhjfuoVVb9neBth7lcjpNXdrF7UrNLvFIkkw0cHtOyCMvyVFmZqUAJhLcYxMFOHqJ5TCsMeVyNDWL2ySngZPgQohAewsA6HRZy48kb7ARwrwtcF9vxhIET1SwOrjxvqaMlSBRvU8XXHlYlegZ%2FCkjDrGSqA8vtuuzboXJxRp33JJ7w71GBd755SJ7vIEwBCcjBasWnv0ww6toqtuYBLpZZI9WRMM%2FMbRIzi8kgAm4kppy2xd4NU1AUVniIVaPqAwFJYRlqVW16OdkfoEGG8%2BbNW11PAbF7Q3EaA3dn%2BkRtxr30sZM7GSznJG6HCZ5j4B4gSUA0JWkC%2Bzuo1EITCtzci%2BBjqkAY%2FS6whelL8%2F6A%2Fjm8FbuxYUxd7eX%2FZXpVlsFaKsUIDgiBWEYkHbQeslqH7fpPQqA4Sp%2FGlh82IuVJth4UUDC3kWvXk4bcltShKXXW2q%2B8AD%2BGj9%2FRj5O77avaZcnrx9W8anQ%2Bd5eNsGUeltBem6hGG4LaXN%2BUc2OiX97TaPRnhbX8LuRx5oqteIT7HTJYbT9hX09QuvVhIwzFNhXg6jkxyFMbcX&X-Amz-Signature=3d45de9b1fe1393eb04ec9114529d3ea54f067492888b73f8e4c5e20f0d2b143&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26R4GBP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDx9mpfRjsJwhWj7OHjYSb%2B0g1s%2BFfGFCaHIOdS9rV2gIgD3HbEhw94%2B6MNEeOpu58vexEbC6V7th0Fe5TZuaa43oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9r37m5cZg%2BsQCTcircAwsjII1xrIH8oIuTaxN4nhNKwmTbxLF65xWJozgqUJMaKplxmU7%2FSSNCc8Zc1ETrDQTFRDRer8Dhh%2Fw6KErvLX%2BWCACrBIx2M8SXs6UcuOkhj20kdyktTTfdogAxBfjfBqsT6S7E37rXCMvmlFh%2B5PVkxIORPVIUhqZMScN5o6Fju51BaYwuwAZhBERT9nRuaN23K8T%2BxjBibFbmmntiGy2ZmizskS6jweVTJMf3PxCJUQSRBCcef8JUGrIUnUUAsKazWbsQ6bJvM7j%2BakQ3hcwvCl02yinxi09N6kskWTUJjtD7LD3lxkvYJ%2F%2FRFW%2BBiotq9tnaBiEKb8EHgsyMSEhrRS%2FsMVG6TRB4ohOeNrbO7I7meTeGh4tUr2nkuSOSWEGwCcoMx6jwrBm8ifO61w3%2BrnI4Yi4rLw8WkuCK3UZEwjK%2BXoLERV3wJGQqBC%2BDHIm69M0kYd1qbcO%2B8N58axqqKkYWTjUFIDh1OtXjBbkq3nP56TAqu6sYYMWo%2FIKttw8OXuRHMlzevqdOk4H0G9PLxC90ufEGFo9C3LPvUXpcyH%2Fx4XDx7uSxVvk4uaVsBrxpzB7EIbpxkkeZXlWu3bU%2BQwJRjuDp%2Bo4r4Ibe08NR1XI1p9ZFJg9p6XaRMNHByL4GOqUBsIZ%2FIWkdS41k9v9mh0yGhQDVfUYVpba1YFgcQ12%2BMbDX6Xoe9NgasJhUt%2B7RzxIpfP3X5i3iO8kH0V%2BELTUsaEeIuy92LH7KILmnxf4zRpfmBlb83i12yHodvY2aS0PN6SveF3Y8J3Vg4fHV34rWfj2yg7fFwjaKO7aeFN%2Bj3dZtoMptEHYrRWh44dquH1vIJLN5SWATgS4TS2d%2BvXurgu0kHqZG&X-Amz-Signature=ac5681ade1d1082bc54a2adcc91603c0f4bf5178204a9505c14d64bce7dcb387&X-Amz-SignedHeaders=host&x-id=GetObject)

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
