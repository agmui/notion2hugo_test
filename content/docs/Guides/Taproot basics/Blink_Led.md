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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRW2QTC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAqUy0t4OrXzg8H2nKCzQbxChb4Ge3wO%2Fz7IlyWlUGqAiBWuP7KbeIwK%2B1%2FF06b017mViyq0CwlNSWY22I5UUXbKCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrRSK%2Bbcq1tT%2BS%2BVeKtwDHLK3WtU2u1P38xmMZq%2BTL7rXt6f1%2F1yX1zpzLyCC0YWBkDfIIy9B5vWN9eFLcGJtIQf4yvaCYNoxWLwj6HSS3xFnIWUw4wrlNPyiKV9ruETSGZ868w4Lwvxlj4fm24tgNEg16J6u96VRguhCnbOBku2m47GED%2BjKNfzSrVJGoOs3TYjD9Rw6Otk%2FHwc8CruFXW8YWavA78Tvdf6pDnqDHSsjSoMsL3ihMdV5crZMq66UP6sPO2S0yaMYAaujltptQeADH7aZWFQYz6IFlicGQOEe%2B3%2F5GSsnUQrsh4ozTYi6mNt3MgnfwkE93nbbG6F6%2FqDdVh2zWavFbMnkitsOjmA6HOJd5KqpLM%2FEqovOlUGYekAAmfyg%2Bx3K%2Bm3VOX2VHlvBgdzxmSq%2FK8ijn7tNaIpApjuy2DSHfAKXm2pR%2FVlays8LrGZ4cP3riShpzWkC5XkGlDUf126IOgV0Z1H8I5pveK3n9ioVY7U%2B7x23%2Buf5vGnXBgdBqEzWPBXGXOrBi2kLkz%2Fk1OhBOsL2wpnevwHPeCuQauQJLfh6etIE56suzJRuNk6iLoXktZ3pg3SOxusvjUL71hNwT5G70%2Bh6mqC0EUg4aqgY8%2Frn8t295qzpt9XRLC6HpjCS4hsww8j2wAY6pgFQ4z%2BC5idU7xgGgxCP6ZGIxat28ZYyMEGY1PMzI29iPBKeoBe5IRShq%2Bsn7WSMAjkqkUlOmRyJ885weBbslcFOsiTJbXVuvDLnd13zBek4sCbcCkh%2F72BB4RYciKo9pvQu9jMhXmMDtd3j4oKmRttVG3Vp24Hr3f9crlBHozSx7zpkLXsEF2yWqnEB7Ngfuk52%2Bp4oKXZD0B02KRXKwXC7UclvN%2F1s&X-Amz-Signature=c003c6afa8792dd59701f96a3b9e8bbcfa7268a571ed02f2d0d4fc0ad97c9e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DT2CRV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR4OIR0W2K%2BtO2F8tRpLLXKZV54cGnmr1TejvCO6%2FrrQIhAODaojsDtCXvv72yKisTzwWKfiXvVDpjV%2FoAHnS%2FUnRsKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn3oYAGEeLhjg82Poq3AMHOTBrh081MBIJ1a3vKWPe7Qk1wPVUL2%2F4mJVAcswhfpF%2FWgU0a87zZAnE8%2BLVp%2BW6Qt9A8%2BLP2%2B4D4nDlpGRBSbHhNYvetk9%2BD41qkzNavZlw9SSPQJnDXdBq0OjBJorHHbQNx2eJaqDsaTB0qGbZUySc2h721%2Bs9LTHVfhS%2FwN4%2FRnYBW4vM8jN0q3KlefIRznJmZ1C9jiDxSNNoKhGyrF2QLmKUF8ZiG%2BuNlXARhIFLQ8We90WTpy9DVXISc0Wsu1qqdd%2FyGFR3PSFKauECmsueuU4itWqapbi9G74xeVWEnOTPas2fNZhHdf2hsvHmd497lu9J8X96LdggelsXQiefI8ai9kSosfPXzvUnQTM2nW5pOiGzK%2Fp0vIELTu5kM7r%2F1rRSZriHQFmgx%2FmvR%2BQ5WI7l3et9WPPlrQdHyDbuNvg5%2FIAATxSRiGBS5%2Bc05PZ4sGybw5yh59YKo05X3z6zSY4tReNpaR20Tjv3rk8ag99mA8ohyIE7suN4Mug3MpJPI%2B%2FhOHt26NnsXdPOq0NyaXY0phLRoWLscvgZ5p652ptxkLf2Q6vlgZ1wl8XVGmLgAXZVksrhTM%2Fcf7XtYl62xtljGjjqbvRWK6iEvXsFyiXDazyJxTbh3DDFyPbABjqkAbP2JWr3S3PUUPdcJzWuk%2BSYZtZxx5iVE84qxw6WeG7cMS%2B0SH6EKJZsi5koquNiAPWR37%2FM8PvGQPX9FIkwr2Bxx2D4awORh1NURE%2BbePcImra%2BqWJPwBGD9VRlV8rQsOu7j2cVNLFmInOYLHDyOFeqNI9NFKgVLMyUScVH06H5hjeeT4YL6UKag2ay6DG0rBiCZM0woVIxol3RXy%2B4dI6zxsyY&X-Amz-Signature=a942c53b257db2343b783be13ce201922c1f9b58a2d8a18265df3dd3ba5b1e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
