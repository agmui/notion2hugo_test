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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BFMDM6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHh6vHY%2FdYyfp4GqCIJ8AOBhH0HO2DxFTLuU6JypjQDQIgA2yYJLUFzm4AXdCLZ5CK94ll%2BvsKY9rZs2TxwQg1mqAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNmLixds2mGLqmqeEyrcA9UVYDaVlWQaW15CK7EcQW%2BPBuhKTR5%2BHnhPsf%2BV4V4wFNzphlCpVCl5sfKZMdQS6LKyLW4e37iTHBZSyg5HM2N%2FyzkXQ2TZ%2BrQ9PNaWUxBWNopiMVLn0BYFTbfOefEHxXGe88Gd1aRiO7UK56nVJTQSNJCO7aJSz1%2BGCoYf5HlemgtCB63EQX6J8tDnHJspX6PbLjnCHaOt8gZEVifeC1vZSPx9k%2F8840MKb71t0Lb3G05CW4zxBQv44zdDeO07AtDp4GOjvltRYbQoKm0hr0TF6TUCSapB5J%2FdGNpKL6COY2Uvh6XHKLc8qSZS4Z95p35wCJUXYJKWmtC0v0qcYkFo6LmiWaaulzlhmZeZfiwdu9CUaIHkU%2FDZ3y%2BiqUwaYGJKhfS8rLobTP0jGMV1k43dw%2Fb8szfShcGTn%2Fm30dQE%2FbkgUmU%2BRWzgOhvlZqzS3UX3hBgsTmYeYWlhmtH1zL6jLM5H8X566u30pzGUQK0NAAsOqtSI20XHpDNSthUYUnBTwiRxgYaDhL4YI5SB%2FBAvphZgMxmiP0U4P2ulu6IEerVEwfzsoQi4EH9Dfih%2FlqnSk5V8B5y3jTgPbpDnws0N2Eqrla%2FRP07xUMj%2BiYEZS%2FGDNnNPxb7dBQIQML%2BvrMAGOqUBv%2B12UFqRRL7vyatSRSXF2eFG4U5e26AF8tcHUaPg%2BMvXxUKatS62vP5LX5FjmEzzVzCjIlHek%2FVPTA8aELuyZOKlTzWVKfe6ikYo%2FwV6zyvUlHz%2FKI5tPuefGI%2FX5HM496ouvig1rlXC4sLz9JqiHl3CYtajOdp1hClKV9UnwfCHklZgTwRTYcx4anRz2Hub6zef6OH%2BQV7B9SalWnJrzfsgSSL7&X-Amz-Signature=1b104c79c58615677516fb623c7e37f80137c31663db25aef953dba27f700beb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IRR7OT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG55Fgstt7C50fuuVaVes%2FOuf5jPN%2FM1dGcRHUYD47DEAiAaaZ9VncEa1IpXd2c4nrJSb4kzqG%2B3SlckddcfP9N8hSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMg2A8I7KCaC9dc8s1KtwDmUpybSOt4%2F5CCnSnwAOvlODqoXxhNKVNXeoEtbMraO2NkqdMaoAhI4wdq2ykcStDvE8VP21X8d9HfY48PUJKHbQXDdKxewLvsh6F63V%2BLcave7QWdg6h7ghrmNm5kJKqZvQj54OCyREVZ%2FSAZNZZ%2B%2BGlr%2FncE6kLEwfmXt4RbjMAu46%2FRXSLf6zVmkMhfOx8SyVXBDfkzLqYg%2FTL4sxvMXCBhrBloSK1nPGxPDVpGs09CcPHSrcjM8%2FAoee1fMJ1%2BnemL%2FOefqSgqAfwEc6YuIUeXqFkJIZtMPdECfzFF2ieFK8S3wvxmV8njrHNrY%2BqqNqEhYPi2UDRUCdNxT8q0eSX5Zm3Ha7hu0f6qUeZRhsvOFXSKhcfRg%2FWyWE8622wQGb4eLWI2BCNQIkR%2B2tUPoihwHzVpHPYOqtnkWvazHQjgUZ%2BH7AYr%2FxrNVG9h44J%2FvuH5j9z01orEXQJFlkgpIqLlh6ns%2F58jrchOeH1XuLL5m%2FlFO8kxd1QiHxaYbXCR3U4ZvZehkXYSASjx14%2Bho0QShJ4VELfuQl22E7FKgkLubxU%2BDeS%2Bbtw3cKVOT%2BJxGbks4epWUjJ%2F6zs2pI8Bk%2FCRS4KvR%2BeEnwCNoaWFXDMtRS6yqn6AA3WczQw9q%2BswAY6pgEEm5ngbDCx0t5MGI20I11rbcAdWEHj3Ueb4dxzuqjJAGGeDtXeOdxAD1sJc97ohrS4P0opYg0IZj1wVQXuxmRwWmjissN4zkmg6MwYIHhAncJf29UTmefTTU%2BSUzFc1I7u3fm4vm16cpc5bfukET2fSSHyPlghXPYm37VJCCdo7N%2BrCnxGYnBxbFA4%2FAMrYGzwJ%2BEYvBKy6OeBfGTN0RMUygOf%2F39W&X-Amz-Signature=887bd9d671d20e7f101954626fe513b08b8fbda4778ba979d020d835ca7ddac8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
