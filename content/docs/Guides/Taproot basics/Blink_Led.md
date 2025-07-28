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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMFOR44%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDhDMDkXoIiU0u%2Fitxtcv7RsItjZpoKjt1Bpcd9x5YMdgIhANmR%2BiF0KP4mp%2BdudreMGx0V8j1BJZeKqLLzHUkRLSnfKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9otnaFvSm1PvFOQAq3AOrrLLGCClH0%2F8QD3CkljoXyEAPKmuh5kPsCR3xNBGGa3pXasmLj1AhhVgGC7JS%2FHaGvVaeh4BTHVsTIaL%2FFv7nbciIni8JdXAv1sAcBYCYYGFZi2U4VhOq5iGF8msJj0M9cuM%2B2ljlJSSpLTZ8plQfjABP4xl%2BU674I5uBJDM8fs0Yd8Aa5tuLds8fMIcRDbN4FPnuQ%2FFgvASx%2BC0oaSYNTxnzTGp21ZtrjZn%2BW%2FsPCaZfllgecl484wsQnkifSH8Ab3006xsTYnvWC3d5PHp450s58T1VLsawrHjT4qmyJOHmuzmpGJGuHtRWHJRPqpkFYqoSTFm21MP07fvoSW1ZSEnzXfUF86WqG3jKJSpc33E5qIqxtxNSBkzcp78rmMRWKbAyFVfu3hE7yiM7wuZtIncOe%2BDB8orFy%2BG0eUV3xeJ%2FWZB9svoJDJHr0iufxxGL%2BKIDnQWZF40CvB1n1QO0w8ucr%2BFZOXPnJCr353Pbms3XjQAeZBPUhZPxL%2BlkG1g2zVRsm%2BtYNIVS8YePaJtuAcINMfIycoa0WWiPu%2FG4MBN6Cu5htQe0WFkGjWZiG4cyzg5GMjc7z1PynPClYXvm1AGCu%2BPn%2FDrL35vOi4fqdvrHt8HGROHILVtrxTC1jZ3EBjqkAeLB7Afvs3S2fik%2Fi0kHx4Ok2v6XZWiNUyKTp3D%2F9%2F9CWw5ghq3Iogt21wFzQB0fr%2FHPrx73wr2MTGtb3vNFvOkTJkmeT%2FyCMzW4laxbTWodLtozhGxwxCNCC4IklfvuAYlzLZBnbzlbZ8eGtZ9cotnNcNqHeIJMhWqwo6q40csqZ0q%2BFKk7mEIZ%2B%2B8Ay6Pd1eLvzTVGEwzzXWQzoTJrsW%2F5piaR&X-Amz-Signature=247ddd4de53b0843b26fcce23d9416b69e8546423cfa107812e1d4c652bf3557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZW6YU34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGCFvdUBaAOAYCiCZEnw4qeetF%2FGNyXGvI7c7VBUPywFAiEAky7luJZyPutqiMsPmuqep%2FOE60jxoiI%2FF92Ilxk3RRMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpIONjZnKwYHuogvCrcA%2B5CaKIc8aSJY98Wkudwn0yjZVNqWqW9OJxGY23M%2FtOq9HbBrYrxFAoIGa5jgkwbqr75a5zKPg%2FFCCwS3nxj9ygq7YWO88IF5OENcFjg8gOD5uqboB%2BsYgDpTEJkBhWmIxtNjVibuPTUoKy3H%2B0aLKw%2Fh3%2BoedJFOpSaMmdeYncme9x%2B%2B9djPnt29%2BEmOmfoNFdBNXghlmCgsu4OJEQUIrJ5v6Ox%2FngwQcKKhqGzNeprmVU0xYRJipc3jWDP1f%2FXdWeqaiOQ2EX7rk6HdiRtes7motHHwdFon11on2lU3tyP9vJuwTC6iAUkdxS4zO%2B%2FL2J6IRgy9i29qNTSHkEgQppDAF0gxljrzP2HsEI9uKt46USNfp2oTD7XI59cO6Air9bhOaPoASQ3hsiByAlAfjNzKqYxUtOBWNBu%2Fur75o30la2NfcOzazZcYedvPTV%2BtbpElzXZrlb3xgtaFaCf4Tl5U%2BUI5hmT7A8JbtO6zY3og3EdcPunsZBeM0AbhoYiSE9bzaq4A34n25e0tY7mejYcvZfwuXBElGF4L3h2BqwbVUwyxSYamMigWtd8y6ZCd0OgjeTKfUc%2FVUAO9DlX%2BEEdJ083O2jXfGH27b965ubUrG5kghe9enWFxgCdMLWNncQGOqUBQKh7LQgbhbVT7y2R%2B%2Fj8f2IGeS1N%2Fr8hMl1Ao6z4SW6noqTNRgxTw1%2F%2F3fnrbRgjFrRIuM69mu4Ct64cMmH3Kv%2F2TzJje8ePn0Tgu3AMKWy4PyAA5Zd%2F109SJSRpVu8roSHB77A5slWnMKE6gFu9C6v8KkEku3n0BVRhlq9WrndqgubDSdYbr9HILLtKRroP0L9o1t9hAmTMapvXCUDzRYptb7jJ&X-Amz-Signature=b107e43dad8628a10445b4dd6394a31405729762ed74547d4b4ff4a361a5c3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
