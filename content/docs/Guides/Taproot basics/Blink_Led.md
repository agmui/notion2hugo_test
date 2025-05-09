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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSPKW7C%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBQT7IjWj0dW2uw9JX9H3CIiDO1QvxGi2TCP0HM%2BpcPgIhAPmqFfU6i589Y%2FDpLsLBI16Y0IUYSmVbfOKk3tGzSnfbKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh6z6IYNVsMzlkIJIq3AOqFWCe155gMARMnBXw1oyLKWZH7EsThwwJueIo87VYnp9WOBY1ESqu8ZR7p64dcJHiE3IAhAlRNhf3NAn4LHckGQKBl8EhhuODOfF97CdV306RUAvn8cYPgaF9Wa%2FpR%2BgNMFiC1L%2F6TZVSp3Aq5jWuvAs4h9c91NXUrdcBN3wJVXvG9y7TupQJN9OYbBSUjumfhdAAdV2iRVEdfXvitYcMlTsVqMcLOFzqGNBKqHIQONQJS3%2BLDcwREoydyCaURZIi62SjPtStgQis7svjFlIJfrvHwUpG1KZ2pk2UmkdR6Im90Ouhl3Qk5OKgXuXFBlaZiiYV71OWzlAzqL8X2fdVTwHqJ2UdrhjWd40joosyvZR%2F2toPVosdJtyuc%2BjoV%2Fm098UYFLY28xmI29nBv6Ynj5LHIVAH6WrrtaZWgoYrfj9tc6dbWPGf4%2BW7l7zNPkWo7iffiPwQowLWimmWWmcbPiaDtYnVLUCfhGMIpJ4bSzBS4EyeOeouH291pQeRDnDPYz3ujBBpXTtm6Ll9%2BmYLeBEyKLI17hGKrAVpZeeOqy1AoqqtAGwIo2hmIWMwp52YC8GJGqH9B5%2BewsGGVNrkd7BIfuFG6kEd%2FxCFZNRebgvms7IyInlDLmiftjC74fbABjqkASXcTNQDVBx5Q1U0JseqP0f2MpS0g09N96vQpD1kY5HI84FjY2QqJJe9X2leUp1nTBQ%2B4aPW3r5n0%2F%2FGXLVSP4tDPk1e76ZbP%2BuS0AS2IYVi43DgcdZItdPTH7T0vPvD0%2Fo4oVpCv%2Fzig6fEclLnOPgzq0zFLPrnkQv%2FYB0Vq6npI5iJBaSTfZWC1D6Tmp%2FPf%2FUhCFDICiFK7W7XOR60zRwE4ANj&X-Amz-Signature=e51901a0e31b2ba99794b9d844f295d580ef82cb39a656358a8463529f21fc7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOZPXYAC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7oAxwCzK2VUYC2A7Cxo8XHV5ATwA6%2FyLRu4qQyzZHwIhAITkvWPRWOwGqKOC1XsPzoyPfyCyjymcaoORraPVIGkIKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS81lUbGAleNplI%2B0q3ANw5mEBIXgDfh1Yy6GtFvmE6ATupUtB8%2FeKUX7O85WyFGHQNAF%2FvzT03dnp%2B2W1muHqwxSLAONVHMtbacKUlMUsBK7w1V9OBNhZf9OWFVzZbvbHFB9tl8btlh7EJ29D02xz78VU7RlOyZnlhGtkGkeltHM5O62Iw9p7XG%2BEZmLpcojwMy740kYYXSHYLYS93TUJ0VEgC2Xw%2BbC1TxOTu5SnPkAJe7Cc9%2FL4hKo2BJ5b5sr5dLoigRZVqEO5iF%2F2ffpL0wHOPC3R5yCfi0rwqm8FsoREoUNTi3HcBoh4o9Dq86e%2F08uLhGhEBdcrv9KlUs2oarUDfspGBQEcOk0j4mXeKS5PUtW27Oidc4MKQqtb7O5gBfS%2FnW%2FVNRXBu9AAkNPu0IBJAVljviMVmHZeHo0oMLxfyflERJ%2ByFyvjwCA0vuIJ%2BxR29PVORdy5oz3mNYtae5GZ4bJKEOL2boJT6SeHO8ar9iELaLU0%2FnZRlR4UhBoNqpx6Q8F%2FkDc7E9tRwLD8khQ73fvVeEd08Fii3M%2BfNWB6c%2B38cSIQFHypbmOyIZakAUCA6eAiu0itResQPF92WGIxG2M5sPcFIsWgdZ28CyZNqzw0wN%2BjlRv6fQnob9oPMpA%2FrjBrPYPeSDCO4PbABjqkAbY5icKcNgVcA6b%2B4oQDBD%2B00UBEZ5sXjvyrPavfh2ItxBwXnF%2BqD4cHaYPaWgJU9%2Bri5Lll%2B%2B5na5bD5hTnA7EolIQ7XRARvIDSMngbQAA3xpOFp1E4k0ibe5R7cbfsPjHYyw14HQ3NFhHpYDWhEPs04M1xgucDkn5zFb%2FY%2B2gzFPS2HNLhPQz6wTaxFHDsHVGVyZwOYf61u6ENDxAdI08DnHDK&X-Amz-Signature=29a67c0ce2628ebbebeec895784a7b2fe43ec48d85838766d2f7c2503b0900e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
