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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQLPP3U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg9znpl%2FujRkb2vZVhUJTFQS8at6TQlwxdBPZZuHbi5AiABos6lQ%2FT1bOL62cdgF95ZYhCHfC%2BfcDx6biFyZo4JWyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTNOKKfL%2Bw7qGfXsgKtwDNt%2FN07moewdBHHHQsaxN1ZdEpmbsDje4k%2FnsjAHozKO5VMzm8lcFJoY1PekqfDffp9rlHTQMc9wTglH4R6GLu5BtyMi4SvjTmctrjkbSjuNPcZKdtPHLfLenHKf34yrwEE%2BHMFEEkbrONxMpFmnw64Je1MrUdG8VuBrb42tSkB7WSbZyg7aqvTdzAG8giKGwF%2FMHnOdiOR%2BF9YmxEnnbla5QeqZQMm5JkBaO0fdetg3XJdcLD3QAxXlZ2KcGwTQiEQ7%2BPru0OOCGmnCMG2rcUdCP73PJUUNL3b0dm671%2For9vXZA%2FT73QBrCOx8wZ%2Fj4y1LYY9XN0mmk8ZMjD0R5zmmq5sDdBq%2B0cRsLzOMfnlev96nBF87myRnZpm032YFwVmJAK40bnsphg9X2gcRRzzNR%2BMyK%2B3%2BJ2l06nZHW5VN%2Bb%2Bpo50cpTmPupbHbBEEG%2FqWyxiWDsRNHXlGH5MFPC21ibPeEXEAf%2FdYYkW2PzHWXG7V9QXiAPu%2FjBU5XiyD6PwnO2bfLcd%2BDfgRRPNnFBLrEs79hGiZOUbzDo9j3OiARTLyWlC0hc%2FEfiMHWUNgOhif%2FgVVpkELy9rF99pKhO0isdlbxWu0okSNsjZD64wNbzUcFz8%2FIq4QXLmQw7sqrxAY6pgFwRTsy8q1QydMvJQ7UU08nDOfDKpsYvkXoHlLCH17z4v0mn%2FsGS%2BJTNiyQFkF%2BrnjHUVKexCZiAi2tubcVPPuDzOxG%2BL9rAvo7W4g5QYO%2FL0rLnbT6AYg3JIZtq04vsuGAjUzRIHspU2QTvDaZ4jwk83KEWYpuz94vz9JyY8Xd0%2FuCTH5tbmytgdGibVWf53XWv7Ys2qdJdI39rmGASgWZxmY9C4Yi&X-Amz-Signature=10e17bbc9c37bec6300bc323dc5412a01f52bbe99c3b0bcb6fab2bd49038bd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBHKNCL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWbFgzVnKCIP1%2Bm6Ea6giUU2Xf3KchJ%2B5ZUB54mGL6hAIhAM%2F7rxCHma7eyl8QAIV0i0l%2FXtKRFgueO9UyngSc5IHnKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGCL2u3h0Vz7DIrHIq3APgxfRfx2OXlyQVIM0VfDjw0Ukn105FOkVE5GRjL8DdDPo1x5EshzpQEK0Ltnu0sxartNE9mSwlqkXRmZwbxQnOMySFUEAvfWE0KyTZkCVwtb4gL7hTbATzNGRqzHOlV9QJ%2BRnF0N1a79g6Cin4eb6RmDEt%2FYtutPethoMOzzaLglR5jI9cVsLA92HDSJirzTZHZoVGsA%2FUTWdjzr6e1ekF%2Fr3QpyKK1j15mbdAAr8ou6VFssMYd58IYT8X7dy27fYuOadmX3tR9clQlVos1IfxZNIHHfTP4pUpgoa%2B2J4%2B5kkAEbvpkZEJHt3VhlriQJ1h9iBy3%2F6pd%2F0li5uG0LAYkULZW2hV2JZkHezQjrykzo9UGVkaiDQTW4%2BntwMXh8r5fs8zJ6nHFVm2zh6PM9KI%2F6YwJJVA2bkW38DRY0IPVWz%2BI7kLIXXFP20jbfcZJzZL%2BvoSL7KhZwAwdy8EITYoRmuNawrTjh029KnllOWqdD%2FntjSdPxuGQ0TR%2BWSsZSEPpy35M4OUpTDNDDtu3uEvfREfQa4wMOgkrC9%2FDVudls6EacYPujE5SwisEokWXXrfS1qksh0tUJCHCYLYzVEU7Nthun1UPow%2F%2BKR80gFI88e1PA8hIoO7XDIw9jCyyqvEBjqkAX5Va8hKNx4nJ4rZ8jU8gvoxTDtmUoBfS%2FCKpeHuo456IiJJuhrKL0xI5vYI3vZIHFHksXcK8bRa4BZlUuvY1k9EFnUn5XLHlzBEA%2F8fx88vM8BxsqiechDpL4UHgO%2BMm0VYNCsipff7C0SQrdRhbfUDPNruSL61C2g2uyGGBjIQunbWBhqNaUMeO0bvLgDkjnoEM6vsA3Tl4PE9tgmrmJRQE0W5&X-Amz-Signature=9dd5c75949f8c940abc82d17e8f4665ce808574bce889034a8daefb268b7873c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
