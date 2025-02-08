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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42PQSA2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGovhg68FyVtWe8QbVQbKQkUw1dY9KKE4VVyw3bCffvqAiBuSSR28aqU%2BHPc3zjV93b8PIupAu3INjyJIWVti%2Bu9kSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDML2LLsqFGQnes6KtwDgdo5VVED%2BwPf%2FTeA%2BUHF00uFf5tU0JsXj2rOfCNDOiWcQDboSPCD0p8dVDQQI1q69aQh1M2czVOdjlmX0cSTV%2F3%2FoOvYy%2B53JXyZqZToFhX9Rb5Cb2RAjMzbRWVYQalbskIHl6e7gkjITMIaS3oGqZhB7dv14%2BBLNZqYTX1mBv7tM7k2qIbxSS0BhGq9EviG%2BiJu2LUZ1apr3ozmNocRjeSn1E5KKv3iYpe4MpD5UyTJ0o50nbTy49ybgDGs3APSM0Xf6021BlAsHMvFk1zZ8zamzntettRW91R2B9UrBdUswVkiW5Ci1ImRTN0%2FRbS3YDAsG%2F678goTakgZT8vZOYj6DA7k9yw011gbRIC9uMC6g7OPoVK3gUpd3QmVazJYJHxHlYvBjHQu3dtcBkzYBjCtFJvKnClwwF4NkyxGruDRKJkByHb1cxeiqOfMVcZVz%2F%2Fn5te23Zh1FpbzwfhkOh4%2BQjcOHjHG1mCryOke%2FQsMYJHpNtm915LpSdqr8HJBZ428fxVRyGlqEMRyDJPcyNrI9CVurZr%2Bg4oQlbPGGQv4iZFTHLGfziOKBr4cnxuyvVVmOf93vQQaNouKpbXaO3V6LqbY4YxI85Yk6sj55es7nzjBGVu0Ew1v%2F4ow0%2FmavQY6pgHIrC4sGIu%2BDrjypbrjtRdSbGDui6qmzNQOY4Nnl6zPcWXTngYF%2B4%2BDKiPKcUmV%2BOhYX6V5bxVewNBug%2BX%2Bu0f89Fts0U2AfWyi%2Bo1ZoEXJ5rGmIELY374wlrvDnSJdJ2SWc6Emgoi1XreN%2BZKGYGN3O4I9yUU%2Biye88DzFpkv4gqVZ%2FBTBg0clPk5ucT9%2BvTGP43cLrW1oSt2XsqwVyqQ22JLRmyJG&X-Amz-Signature=6cb13598aea614c042ead3ba6a4cb11281ac763d062355577d8ae453fe7ec146&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7CUFGC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAJt%2BkBe4YgnVVSg%2FgTaP3cA4dzCHncMBmhUdlSJTYYtAiBE63w5hwq4jbMtgJWhcf%2FcwtvyZyiRo1YQWb7qKvFq%2BiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX4DiUIUPDHFEEAawKtwDsfO3di8L7hgaR%2FnuQJrF2Wsaq9TQ3%2FtAl1p2j3VcK0AYex2MIAKRLC4tH4yXuT%2FtUAmNVlC%2FNvY99LA74Xy6f4L3A02vDqBE6bS%2BQR8confTJvv5UmssaeTh4ubL80VnkmQAseLX0CovdugpCfqa6PsnTthiA8fH7eIWRStAgYlhi2kT4pXtZBzkA0oMUmWczFNKEn1QlmtvSV04y7YH56Jr%2Bymi7bqjdlrYYM9BbQ3Y0O3NjWizT%2BLaLeCb3SKGRKicOy3l3OHjnKFfn6ZQ%2BX9jy6dlqLlzrV5P%2FTBcYR5Jt0FLsH%2FvtuWyRdA0eTrOAXjcpsp6qTooTk5HxdUiiKBLYkVXVbPV4hwgKO%2BvjnxsQdDjaA9WR6nv32hveAw4q43tVX5daFJvcHVuPudu8%2Fj7JxTOFcRwOqoXtLKSHvQIeTtx%2Fr8WlldvHJWMVtkzCVrN%2FzJQNlgD0eGyDQGIzywJPqkGjIBpLk7%2F6C4Jw0x%2B7eFiACQIcUXR8wKNnaJe8ak7Kn5bWu4mNNm0hzAruVPUrlcyaep5YqMJFEH8pOngsa%2F2hBmFBqgpb5YkXbySso%2Bk3qQWYU1gl8ZTO6OxtItPTpP4%2BvoGkuUXbFtgWne2sZ3%2BsZcicaBWfqown%2FmavQY6pgEhrbYbFUHKCZ7sOBj4RWGCTLxcfXONbzK4Pbs9760zfeV25safD8hkWtBzWn4M1vVf75cJ1YlGhiVaSmgEQ68Ju2CDnzK%2BE6Yum1NObHTynY1%2FpE%2BROL9%2FSn3CrwY2l8JeREixTLvHWU2qi3WNNqzq2PGUtQf%2Bsfwh%2BxsT7DLRH207k7JatYbtYlXTd9VBIg3oG7bY9fOqG%2FOZ%2Bl1hXTEjuzKqy8zn&X-Amz-Signature=8a143c752a56619277ede6b52cff18eb5f656aa8142d9ae1006b51824dadf8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
