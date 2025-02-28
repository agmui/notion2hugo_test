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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDTUAZS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDq%2BZlCyOklroVRL5bzliwtxmtjxeIHRpYa0vDMra1U3gIgFVfiMy%2BS6ahC0i2XvFKtEX1%2FYJs%2FCmNWufY0Pm6%2BRa0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmPbaqVrsk0%2Bd%2FDuircA1B%2BzVQRGhcD%2B7IkzOqtXnkv2fuYknifVyyiajO8gRaQ0F7aUAaIEAsl%2F8ivYDtFPfLuLDOr5nbzdbkGSRjt5Y9uO0AY4%2F2dkT%2FMAGVZqT8e6DZja3OM6NtUnryF%2F31wU26Q9KtYswL8HJRzCIrqvoZaONOlvUVRZNeUBIy3ofpd2QWDppWyL%2BrwDOf%2FBQ9nqUvSubHoyvQTObtlcaB2f%2BHabBe%2FReclj1QXKrbGY4V2JzE5sDBWhzTbFteDJbFTD6emkD3%2BW1ohG2JwdbTgoODnGSB%2B9mjLTVGW3jrL%2Fi5OCJZ81i%2B7nkFz2Yea54wBpmLLoi84Kx3dhANWSiu6yKK%2BNVigATLbdQWhQHKqdcGp%2Blg495SB6feZQqNtjGlmmWAhmomfk309wb6DCf6%2BVLyXsuy1NMY6511v4d0cK1WpyGJzm3dhUAA%2FgayC7PL4TSEPk%2FIbRpZnrHTYNpHe1vj3dn26sqWH7kCkHjFlQVLLMU4DOBsJc2O3RwKB4oyye9dOyBzQJBfu1gELB%2FZMdl6UL2qtyuEp%2BszpJep7BWHadFbDAXo%2B00HmLRIwjgqqRlPlGr87Sv4VskobLcD%2Fkh4YVV4Vci7U3e7x8lTApSMEFPXcJMDh4RerluMgMJjShL4GOqUBg0JiXYlqbYOrLCx3dZ6d8Y%2FY4oCPtyPpYJBobJyu3UJV%2Fwsy3%2F2VgXzarziablINJrQoe0jzwqC%2FCv5oJZ0JAldnSinAm4a7uApkRhJmTvSSp7lodDwOZf%2FP%2Fu%2BvFLDl2djCMhc8mci5FS1rXQn3adXaL9qSzTBgWPnYN%2Bze%2BQQseoOLPC4lQ%2FCpaKoVYTfg5N4hRA0okCut5MUBtv%2B5ra2BFyGk&X-Amz-Signature=9fc6381c7b9d13a91fe125c93a7e8fa2dbc3a63e69f1fabba40fc372784e3102&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWYDJKO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIH40Bfy9twMmx4tUEFS1iVoUgONB6FxUCIG6Qs1k5EceAiB8XNqynk%2Fp9oylc6qoshgqxuOT6OkCny1pSr9OrgPLYyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3tF%2FM%2BxHfZeng29dKtwDu%2Fxt3jZMQJEqgZeVUedC%2FjeNwMY%2FF0YDSbJFEdGm5L%2FOz99AWXswZDUbneA0T7t1StzRYf9hURDJc5qAU6wDdGMZWY7dIbp6Jz%2B2zf00F2Eld%2FshMZHXWTuo3tavVoWd098xAOSq0cIsRdqjvWHVszSqQrbm3RDvszADvKDrT7W6nPQpaNUIV9wn3MG4mN6qd%2F70GDTYQYLJL%2BxuuFbccn%2FUTzFDiolYjp6%2F5JTWThVw3Cuhz73N%2FnVHke%2FcSMSfNMICx04CIi581fMkkBzqDXhH8s9%2FnJ%2BmZY%2FyaY%2BdaOFRjJ%2FORGGx1MkcXfuBj7zSFSDyAK2gf8plM0EKBpm%2B2hJikt3dQUmfU8wki7dtzup8OGKjF%2BplKKOeNbVhYXcFK2QyboR3ZuGkq9dQxUSYCO3LiqUoD%2B5znACvf%2Bhq9e3V4XUKd8KsmoDKuCfd8LGcUU7ewhmXi%2BTly7Qkt1vAZofLsbiBn2AlvsWETeCI%2FhwppxUlmf6QwS1ZD2dNdt0yEL320Zs79l1mVoP6u1%2FWoD7NfmZvk%2FJW1mofB9bL8xtPESTYnRhKcXZvSDTASbo4Eztp3tXjnAiUjEsHVmyUC8Mg1juxD2%2BNwAruW7FaGbL9RzWEE2YGEOuWYncwgtKEvgY6pgEeS2n1pwe%2FVrnni6URaTsDNKUf18B8ObZLUidv2P6mGgRAUgsPO4dN8%2F9W072lOvYP5M3z8sJnXafLnJC6xtWpqKvKN%2BU3usmoF4oUPVIehmXi%2FgKAs9vYLdTWfsdpavhd3x5HM6lDzmUg5NEXEyDMKhQWGf88%2Bv0ILpXwqfoEe0FM7AQ20NmXNZBq5ysuYWinj5ZmUzH6c%2FeBG%2BQpSLdCrzSHgmM8&X-Amz-Signature=bb86078f7ff2f588ab0c9aadb03605028035c0ecea2aab3e448b252eef2c0d48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
