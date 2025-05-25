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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFBFMLZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEZCY%2BCm%2BV4wz5WcUnuCXoXNY7D0UJXZaboCg7UNyjfoAiAbFJW5wit5ektnveqqUMon09TACN8GoyhObceocN1ZUCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQwUmRJuSE4YkXNXbKtwDsX6i6gbd%2FdXZ4dWjSe65EtpFtnDCyNTd3WTl55hns8f2coyA1Jg4YCxJN885bGrbI4Ach0T8Q2P6AdzbBz1pafAWWw5%2Fs2A7GJJjJnVQoN3LyhXcQNNv8Jipl7c98etKnkgXOn3tosjPXJCoEFObHGnacD2choJ14rMWkERbUTDi6UqHE3imNRUjaJ5xTO7cdWX%2FwYkI4uQKSFH%2BeECDC2KkcQh1ABX6Q6tvBgJTm3W6RTtn5R6EL65iAMW1V0%2F7BjAzCHcvPP3LP4pge0uFmjwsgEqU7PAHHCTL2MbnZLWA4fjQltOuA07itx2kWvMCMD1qBbACb6O%2BAPL50d8qel7km3MPfRhJzSah0muTvdxbRegvwq7CfMWOgHbm7B0pA491B9rnnNGy5N%2F7HlbGE54Gkpx8%2BtiArr668BFFigBujFlU5Tnk7dVSh9wsFRzx9OmJrAjwg9mN0L3DMHcvHPAWmaqP8sytnnMgb74YS1soGJ%2B0tThG%2Fqq0h%2FQynb2I9RYX58FY18WbSPdJTN4oY3r8JfEA5vnTtyiwmLz17ii1Jm3Mw5M3R5kBsKLYovZsr54FTZabBCdE%2F0wm7X4YhfJahIZ1%2BVTuvtNVL%2FJp1nVpP0JuXKvJHzjhI0ww9rnKwQY6pgELXGDB4QeQEzYe4H3kl4fPW1ZjDusKDMi5stmDwGBAnlasc%2B41M2UmnIOfg8GzMgs1VZjkalM10VeyK0EE%2F1bU5xlzOsICDjdR4wyhaaXw2jADpGM2OZEUueCeegMicmK7w0U9oFpYDrxYPIgX1E6gUmJslIAq4m0bhMLQ9AIXlPh91tmoklDFuPZvFmL6o5GggT3MhON25vRljT7zwv2DqWVlp1Qw&X-Amz-Signature=3f61fbe06bec6746d61b49b8ca6dae27f674e7def84c20671c213922b5979d94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZN27IYO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDymjnEiUS5Y83EPAD4U%2BwSXPTgbidpLHpDrrgYf0VhQQIga9hQ4lwm1NJuLTfezrPfOiV%2F6Jz9%2FR5JlitSKEDZ3ugq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHG19VnakDsCnXAwtSrcA%2BofFt0jv3haOAr8t%2FNZx35D1v3nzSwrlR3Hk5OPWNMZ98JbMh7vIe%2B1IMmRWaFFaVuXl5FL9dmQxxZuT0Fj8nG0pVHfOVKfS9jH1rmQ92cBdBiC%2BP9lSKQFsw6vsXJ5dKH2MQltiZi2lYzWahGMCj%2BpvM7%2B8rciyRt%2FDJ%2BgoX4D1YnTtBSLm2YMp5z9tbk2Hc4SIvEt4JdDAHvaCnMhWBdFUo2cnIywEVFwofWm4z0WsoozOtWNk00Ato6IEaBFgLzjUZ6LfSdY9Vx9K1ZBgk9lUYjrNy0VNvCydrARBHlrbLOMpmC2RZVLwDQ8rgiiAykHgQ%2FH1kL5byQgScytlnknC%2F8QKUKaV5ECCUexYR9KTHEtPCbTYnEAN48Gd5740gCgkOwLODRr5Dt1qc4ZYw%2BvMpVEtMQmsUEQh2rhVowpPmOL3ARRZqbhln2JQGeRhJvor3YfFWyazn3UrDpD7m4dPeHWWunY9C7DLw3dbysK%2F%2FHocOAZgb%2FEBzMeap%2B84O3fdGfz0mi983jWsmmsbuCuxo2Xdtycs7EiHju9WpRfTGhDBUg1jrBgALXaCxeBLEOnXNZAIKvQfpprd1%2F7Hw78GUqrOGSc5BSWPaBhZVx1obn3xLMV29XL5IyKMMa5ysEGOqUBfaqkB6nvtUwTrzVsp4WljNO7eCR4e3Dgd5BbTRIcoHBdbK8Ry16pm3GoE45Go%2BZqP%2BEg7LLt8q8E%2BU3dNNY29prHjJO6ABzZEpRBkI22zWvFTuuGkZmWXIV8vWxBtnVTvCMuc1Y0%2B5EUwiBWnfbBT3ayqfP24iGEjTnaUvtOd8BvYz5oH1n6kpI7lHTvQpb7fZ89OyeXKvJSRR6a5BDFYnN28uEB&X-Amz-Signature=a75ad4a945cd2060ec8029486f4015fe7bbbbf0837e5fbc17b99f56ce5c25a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
