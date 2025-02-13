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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4AHAWJH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBviw1zru%2BCV31DxiN8SY3Zz4U1KZ166NaJy6L5CCMt9AiAOfjJ67S5aWCRz59vycVIwYF28BTjvhG4yPJhmTtAPSyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlo6aWHWdQPZxjMg2KtwDQF44QJpiCWldkRN5xzfuCypfCCemj2SeMfjCubN5XZHUBjB3uGu1JGaxOqxJXaHM2XuPFjs0MD%2BUn6CcohFXFsNZCizUXNwObcyqfcaIJk8062TU85cxj6%2BNGOCSv3YILwr4EOh7xVg9yyol1ZFWGromHrh3vh4iDGjYniq%2BBu3QYxZnGgqhjtSwu9AJ67wx%2B6xjWQlPP%2B9CrbYM5Rs98JKqHF4LpMLyl1C8FG7l%2FSpB5yY0ouLwK7dzWv8r%2Fofr3aY3FS39ZDBgZswov5z01JwRzi0FjRp2aeaGSNW%2Fxc59Y4n6bUWXTEN4qZwveFxa6sOKcsJJGt0eJ6r2qYzL6WtmcTBAs%2BCyoIXJrqVCmj2FKCZhx20euQcqZ7R8%2BCpoUiJ2uqBt%2FA2MwPPzuwL1gObQsm3JnKqwwMxuGORLtXcAqblgwl2E86mjwuASHjwU6S83Rlp7mAlf%2FLTk%2FRcQbmPTHRySQXIAJ5dZfJ3GkGTm8ELiw7%2FQeebVGaBZan26%2FCqaAgyhak6h8s2FVZDaSQ4VSzqPPIMFptZYkQAD6NMgWtiCZDuHSNtOduZvFjiuOjZjHBXfq6G%2BKFX4sYV02u0roa6GEsYYL3cuPxSb3P3fOr6aHfsqGZIfUoQwp5i1vQY6pgGdaXqJxHt11Vz4NtvMEnHNFFcjCZiwbwQueQm%2BZQ7pNkPk9y3CndmBtVVBqJTUull7FgNRHoX%2BkNZLbxkemyySkh8RnliEAVuGFnvv8PMGtcQuTPQ34%2B%2F0WL1njm%2BAlmKMFRrgEglAfGoodNrMelFwVwP1i%2B9%2FErDd5CrW3XvSc63MtdYM1gqs5KLjDQ69YBwFKJpoQy0vP5%2F7972WHwWn4izIuScY&X-Amz-Signature=7e95c3447c365ad32016e0da9fdd67b79b65039bc15e28ad94242bd6dd1d238f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PML25AR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxKEl%2FXOx68JArmFP%2FPZahhO%2BUoUA1QskE3CMq1vrO%2BwIgT2mQpcWcvsTaLP9aU3Pz8OkdrNYBLbI43tqdIgP5%2BbMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxqTJa49xDrDuU%2FkSrcA1X30qQX3rfnLUY0ClI31IV4lck7mGHKEg8fszW3nXtc69Nah8yrse7U4hb8Ddjf3rKBkTFXHNxh1tdBq8RpxoTQ7m6RqoCP68vlARp0DYESD92ZVmH3x1ZJ93aj4TAQ4U7HIwy8eg%2BFqhkGvq3hEPJne5JOnCMUeG%2BQxb%2Fhq%2BF0qfRoLJNwjwuwENEtXZ7Y1w382irXmSG3PCp8YRBlMNTve6RKhEs%2BJB85t0AybPjM%2F8F9xVkJ9M50Whmcc55F2BftMk1R%2BCEA2axddNJ6aTS8ZALdywEGLTrAhsUCAr3M3IiODEzj7La1ein7U56lQXsTLfR4hhhWDDzSe1JwnFkRCYP7yyoVNupVECOG9JYwKP5DTHVreRazzdUumNCqRHl07a7skdSYoPaWZEu5N4oSr23VNrdyWZhdwH0GU%2FEtAmQymSz95uOrGrcbooq54iYdwZo7XcEMR%2FgcUuQ9Sc%2FZSySzV3rcLH1fLeiDdFLX6tUfsrX12tQgcTnfcBcoEmw53W7gxMRzWuRQz5t1%2B%2FV7UyopSZV%2BoOqzcROFNoaS8GrkrhKFQLSoaROVAPxbdzB2oqsaaJL33xl2X%2FhIcBwB7BD0STmoJlZBKabq0cvrsqEvFouwkpYT966CMImZtb0GOqUBSqd50AOBpR%2B%2Ft2Gf4i2rbYCCV5KBUbY%2FJ%2BYLRmRh65WdoRlt8WyUcka6V2jK3OKjJSTceDbpieRk1xmSiikQFelL6JOG9hCQdPpOJ2fOUV3LsRreMHN9snAoqaefq9ceV1rdUH5ubaWFyD%2FnvQ6s%2BirAB9N%2B2Txe2hMHqPGnXhLfYjbCt9LbtVbvk9CizKVhKPZ%2FBR3%2BJ8i%2Fwx%2BOFEGU2VHnaTnA&X-Amz-Signature=3b36cce4c3a23060b16ebde3423fdb2b0b03fe8b5a829307bdfc08bc66f544b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
