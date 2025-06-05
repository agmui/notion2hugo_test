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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLYUDCB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCt2iCdCr8jyXbfEy7lzdtk6eOWtNYgTjXiEaZSiq94ggIgCUlbXKaef6KDiRItPOJf2%2FwtHR%2BwyUW9bodXzilc30Yq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDDknJPqY%2B%2BhxpkbiircA9NnOx097ngaroKt7wwU6MxzW3pjHDobeMQkO3aymyyCu8CC%2BKoJG2xiztKrA2U0szJKcD%2F1DaxeEfcpoYleL7q9V3JxhjL%2BNM6jD0GYrwX1PGAqqoZMii0LekzmlwDt6CfTSM5Aumi68mOBsO1xLOJRC%2BEjmFo4XvOIjnphjuyJRr9Fy2I0j5EJSbO%2BENUQPrYnPFaNpt2xaqBIljNYom7o6Ei%2FL0LWE8NyVMAJMyZVHwxVbjMt0aHfySBje2PB3RDAwJyQ6vOumjaNXSDXjiX9KOISAueY8%2B1zMHSHzJKZcn1J2XZPvpVu6Yo6iMjxf%2FEUDVuc2z13a6Ymc8ihHSSzuz%2BimRkg8TYZ%2BX9625A6yclf5aNHl9M4Vfj8bxT8INQOppqQ3FaZ%2BwytF%2FxLqiEd%2B2AtRzskRzNdm%2Fok5xcNkxrrh43g9e3TQEBB54F%2BHwuakUpp7ucai6IRyq%2B4O3IQuIgideF5hKInmt2OE%2FuKP%2Fq9v1x%2FjNJjIlmjjdJmupJi2H3OBZsIKMK9Oog0Q4HzkNsAagrNWmhtlT%2Bsa%2F4UTxel7auQVlCwLULssGOz70VbaVFIi0XnDoM%2BB1bWcuBi7%2BXjHcYBQouMQfUGkzbfBojJsRBuBjiHgfb3MLXmhMIGOqUBOgozFEzZp%2FXrA4RZKigOLj4iAa3QCMgNSgw13rMD%2FdxFPf2FhoxuUnZNzi36YTa4mKzYJ7pj9AXRcGjUUuErEkwM1P5mLY%2FjEOM2OTzBd6S%2FI%2Bkrmf0L7p7y%2Bj5Louzt7UlGkJi8ZNFIJQ%2BvsUamJIRar93ECZGMVswsUmt0jL%2BKlAwKvwM0Mhgqy%2BMI%2F0kYBKGZj36CrwR21aTs8p%2FAJRkZstCX&X-Amz-Signature=9184646796b392c88017a7e5104fc0c1753e2caaef0c1dbe8cc23321b6d43150&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI3NWEG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIG4xDTcK8elEK%2BitzwilglwG1jBKmiY9D3HlvmBtdyViAiADJRdkfMxF6SITcGDCPknpKCUZ4b0jz72BU1f1ba6a%2FSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMCh6MWDlbMgO3dFPKKtwD6dU8zN43kcotd3GFl25fFJk0McgKfEO%2FG%2B0W%2FaVnlY2NrAEkpL3K0tha0JvVX%2BWR65muHFDdj%2BnzOEfPvCxNz0qlyfCxu5uloM8n4Zbhc8q99HwdXVqiLNOE%2FAjy89LYdbQ3hfmjsBPoDX4P49ZOZ%2BaWGMXH3Km5wSjHUxkpuOO3MVd2LwYMA%2FSPbvtUI4TccMR1uER20xKm1mrUo3vzcH4I%2FDjRBANi7F83jnEIRAZem40xj%2F%2Fi7yXH4CAZO9U%2Bpe4cqhcK812F6n79MC0daVtG9TK95Skd9yjWC9Iu0j08EHBlAzQF28CiJLmWIepBPtVODZ7CpJJDEsGM3ZaP7yqbLNTGwCKWNs720gmPfxBRWqw36MPWpLMCyokbYGAHN3BBC6NO4t8Zjhvm1uPwS2tyjVuL7Xd0tT71gfpXwcaaIgAYMte%2BdEM68x6UpBL%2BupTUUOctXfs4N5IZE3zhS9t5kWlLmymst06m7sjFJyzKEldLGgUhHI%2F3%2FovtOGAQGJ6FLkgD8pQDjtZ0YY0ZhjkQqG1WeELdIZ01Gyyi4I2AB9mKwOhB%2F%2BGDZMF1hcA0QIgnS2f2OJBYsSRunD4Wp3zr3%2BHsxcC2JDPxyyxZy1vN1m%2FnmMLM%2B81nm1cwtuWEwgY6pgEDIfqNfoRfoG7EGEDatt4BpQQS8IYKf7cC3W%2BZXLvZWAmn%2FvVaKFq2%2B6UtNXMt3JuEDX1sEp%2FqZt8RoSGFyz7VTi5qj4JHFWPbe3%2BIPvjHE7IFoUM29ppFu55li%2B7KnTHZ%2BN4XKq%2BWoCg7Dw%2BJIz%2F%2FDCwFEDUJbbrbNQfzGVRQ6twSTF4gmmVr8lZroBB%2BGwD3UlevWGqabLF2GW4ntCB9NofOOMlu&X-Amz-Signature=2f538394fb2ca30459e4c94778c8e7441b93d777aa828ebfbb2bfcee5088d704&X-Amz-SignedHeaders=host&x-id=GetObject)

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
