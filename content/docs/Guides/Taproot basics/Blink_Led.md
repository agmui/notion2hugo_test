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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632CQAH3X%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWhVNaEY0f6LlugGa1zH%2FwvDTC6IaUF4VhmrfTNCqVsAiEA0ABYgRm4SiRw5rzTO48r6hnMybsbEZhHuCosE5Cj8c8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0wEJmegWZYBrPVSircAwaBYaKTjmUjZ%2BPXygB3FlCqmb7pkzJ0wbMAp8J3d1Ddp%2FB98eN5zax9BXfRqPnmBst4nUhxhoRw6aHegZeAkqW8Cfll%2FZoziTekLppT7pA9yZyEY%2FCv1uCeuhrx5UL4dd1gvagQpk8isZCTOAw1tOyO2lkGRauJLoZ16cHTXrslj8Z%2Feul7ahDdze9aeWgsvFUcpvTDXgKL4h7ahSx3FG0LuJEU0VcQLAT26SJRhkNmZ%2BiqCPXKVoqbPPYSByrNjw8iTFzgJ7JctPqLOJjy35KpzU%2BzrgEhL4%2BGazc52sQXwazj5%2FG647qQ%2BKUzfuHjNBeyVM%2BnX2LMw9KRVBDDHaoCf%2F045aa%2BJT35tky%2BWAI1vmJFqNyGwQvFeAhQENBZNdWbdThfsJ3TQNsK5ysbW8sCPaJiMjzCKhdb9SnNGEW10LeVCDfZ3ON8VeiiDggiugKBMWBiNck0F9k%2F6tBz%2FDrOzGZ7oc0EfCwWJBlvFuSrpq%2F3QDmdTTzIE%2B5rxEC0Zskurrx5H%2FW6C6enqi5bUQwipjfVNROGCXp%2FVtPlSvu9G4B%2B5qDVyjn7JEa7LlDLrKPs9JnvuoKeQMxriMBf%2FnhXiDLsM7rXVmJeMJEKyeZDhwDa%2F1uuPq%2BlSph4MKqJ0MIGOqUBreolT3VLd5Gyye1KMt7rk5%2B0eZvkFcwCyposc%2BDvsOj22xWQ7f25Ikym8qAnryNKxQnViV8fA6EuQlLwOJ7dbmNTE%2BMWSSHCrU5JqPnLQY7pmHgMBjsRRZQ9zB5Bcn%2FO9SlX9qAJY15RnAsZdqwx%2BZjGBjnkg%2B8%2B10HTaXitKzK0JT1K8GVZnAKBnlw1U5BSZQYdEjO0XOgyB2JTqbAru6CKbNAE&X-Amz-Signature=1454348d246c3294a6d1193691c0aafacff304753c01208caa6057c80e8de964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIASUF7F%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA9yk7YPszE7yygWCkzCY2nd3Fs8EJud36PxPplefN1QIhAJt7plf%2B9rdkPl3QqB5uNu9dEV0P0d%2F303mheIKNS5YMKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyabAfjWL4d0S8319Uq3ANxFWN2vEdrZAw1fDxGDI6Fg0TmiTCk48yxfNsnmYzOAFi0%2BeCx6Y%2B7jENLPayOHcoGi9G1xssyQ4XrFIfIK1e3KRUELOtWDCWVzI0M5mbIJeuhh6mOpP%2BtmBm38FloTG%2BJttQq76BoIOK%2FBajsrhiVAMmyVpeQojHoDXeQvJEANoy2SfflftkJg5R8T6ieIE%2FMaB%2Bg4JWCR27apnlBr6EHemuruIktThx%2B%2BMwD5a1epEMa%2BrNqCSM2WCjJXPdELAnVV9TZh%2Fdph%2FyJOJ1Qri0BARNCP0er1yo2j5xMA9FkqNhew%2Fndo5xalaX5Oj4c4ZXqtg9sdclLsW6rGe2950WENjvSsq8x5V0BSk1FxXcUAZlp6nlCtpi9gkIBdv6jEg1xl28iEcNbYQCtx1do3FVs5CbaRH5PnAiQPprvid7R6%2FYaQ0P%2FbZzNdhOImnRJuKG0aXqji3ctYpcpoFsZBEj7FmGm0fAPhn7C5Qhw2DCBsqA1uKdDWlM5b1e%2BKfaYdI3tgVV6IWpEKSkDYFU5AEv0bjz45vIjbdOQHDxbtQC0eezrjhwbpM%2BOotnxSkgIv%2BnMqgXAplqfRh%2BKpIDI043UeEPxby6PUwfA5hUSPg%2F1EZQXAxwdINEu5zzJKTC0iNDCBjqkAZ%2FAv1e9Sw9%2FSPfjJeE9%2BrkI3GyfBJJIa6PtAqRLwVBXDOtvQior4zePWDPrUyEDA1FRaUDz%2Babvx4sl68yJwouGgf%2FB95FVTbYfKnTKJHe6o3K72c8ZveWNTfpx9Cxm4F8nGzZi%2FL96ox%2BUCmA9l8KB%2FUmwNV39vaiPN3YovbITpUWn48HzuREwFZroRQqJwUD0xeMH1iaFnWEowabT4ES2DDKz&X-Amz-Signature=65cb4cfda7339060106b91339694c0bf997c476ca7d86cfeebb40514b063f9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
