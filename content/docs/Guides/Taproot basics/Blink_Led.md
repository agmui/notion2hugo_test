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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657ETYMG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDfh7WODOBT7lG%2BR475PfFWG0EiHojfUywmae%2BXyh48QIhAOi8ac6If25erEWfI4wWHy2Ex4q5QNjhDLU%2FU9M9%2BZBOKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywvl9BZXgpalI%2BzwEq3ANRGBeoAngvRP21YMbSyRv7Bac2yCTjhzbPb%2BWMVQVTY%2F%2FN1GYmwF9scQ0WrJQl7cL6TFLitNy3LRvTwX2P%2Fo7Djsoz1bCP1OSEgo4nWizAZ%2BGI5JCHOoOg9N%2FYbZ2x%2FQBzXhd2LCFX5vbOPI8N%2BuGfVpixlsZNaGwEWq34NvBJ7EdyQuHSADR%2BByujrDMxK8MFtSfMdLyqvuD5%2Bu9BDOdUYy%2FmgnoZ5TwaurkNio1fc2szdoPZpVGb%2FhOpWKXlXRR8UKYxxAnQGYZQIC%2BahMLXAQfefsE%2BL0QWkkpf8az%2BALBVys3gFQKCpp2QykkLVFHBIfakulS15ncsuh7SbKlAvbsq%2Bp8KWIJwodjxCKVBPnJiBqjTc%2FgTfgjV6FaEGhzXCN8Q8ZbMPG0yrgH9KDTMx4%2BdC7LvCRI9esmXuTVVul0QWrhMtZaOoRkTif5r5Ro0XWKXZiVk5t3Cc8zK0IMpyPxlt8DrT9xcBp%2FLFiWbwhoUvFUPwMYAtGSgYRZCgIEXCje5d45DMMZr2QIaYSu%2BZkUPr9f6xAbJhzEc3UOcMR1RqJEmEHeyMd%2FkXVEg2%2F5L6yCjDRY85kto2Cron9rm55kDSuR%2BXjEyCUqBpI1AVGpeSk0tvshfdh8PCjCyh93CBjqkAXkVdE4PIkwyi%2F8HzBujoyvH4RsiGj4GKJTEHh%2FF8%2BUgdpS2v2cBmLuYOPv1pyNi2Dttjzy0ivmVC6j6Apua%2FMqkdGtsmG2vgoeOHJlGOACaqu5CRhWp0RhV9FcUyHqmJ3%2BY4Veq3OurFgb5DlfgC%2BPfYIV3Y7M67uzHXTR%2Bp9h9%2BbW16g8%2FXow9bsYkfjmc71TJ%2Fm5I%2FRGBMaA2Do%2BSdoge69Ui&X-Amz-Signature=2ea263dd02bdd7adf0af134603e3f47f0045c612b3e9edefb21e31711b81b982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4LYF57%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwc8OKbGSWgSgzQk8GKXwFDggFAi9IHN40WizS25zgGgIgM5IDPxARhMOL4X7QkUqz%2FszdfdfuC2EK63HpqkTZU7AqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLnuJddW%2Biq%2FZVSjyrcAx5vQKQNRXZgiZbZi1tSnOZmAdtdW79PkMnyTXuTuDok7%2BZxLXkgMcxombxr3nj55qGESm6LIR78dTbrjTsO6fZiz27Np2onOlqbPfGota9vEJF9LBlYrq5wFTGfR4gxALmKaAr9JkASfUkm5xhjiP3LusBzcIezqYB%2BsSG1kamG8Ps%2FNwUOlwqfiNZxDjyrQz8uDrHrphk0frEWzqtC48qBgwxFLCYcwjfZlqzYxkmZ%2BTUfCOMdOnKH9lUKDQs%2F6rV4NR6T%2FvUm5Jbk3Bvc%2BRixIsfgnbL2Ypz8HuRiAwN%2Fda3GFwYD3yN%2B4X2UexAD993vi8g3OqWEIp2BEnWctHy%2F8PeXs1BqVWhejMF5kZ22IhWytUZBJdwRZtvfD2%2BQPdj7gGUreGO4PHcqa%2F0es6eb4DUWGk37%2FXjTuLZ4cXAtkoh56GfXgL7pw8wh33SVJPy6xym%2FsvTYydMmNsY9Uo6djWjzqQuPPXuxssRqhRojxKLYaJPlV60R7kL3txePvMJp15HLBgjvSfheeveRqE81hbumCy%2F%2Bg3eJBQNtRS8MdbXK8RlyPAayXzf9iGwGRC6WsxDjW2a8lmQF3RMZF7wbxJruw0GLG6bjRXnIqyTEeZ6xuAp%2B5eoSUv34MICI3cIGOqUBp0mNVy5HMVJTz5izPZmDdZ4c7b1GhW3hdC4Rhq5CbcRtzSgn0d3HiThdajgLcpivVaZTbm9v6pmJv7RBfJd%2Fibq4F%2FYTZiYKEeqNc2vT1s2tFQ7yszY%2FEtDKHEiARzhMOtQp1n08r0omVDnBgX6gPT8eEeVW%2F8C%2B7thg8HFPLfRwwQSC%2FX99%2BICYqmCPso8oaJIBCJ%2FYXWcRllhF2IwBP%2FD6%2F3do&X-Amz-Signature=40b25d417f33a6decc00dec984b3bf3c94d66779e5ab811e5eda31d500339040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
