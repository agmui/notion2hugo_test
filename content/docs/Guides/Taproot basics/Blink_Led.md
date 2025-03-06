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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZ4M2QF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID94xY4QknFtrzuJQ7CumPyzSUvqXyfgB7AMAiYkzj0YAiAk8b7NiebF1e2yqFLwFd%2F30jGnWJXWhmxFYHFLMZN0lSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMBhp6RaSLry0rsYjlKtwDCdhQDHjUUtc%2BzhBteSCloLsNqMRfOjUgtBbJZw6EdeIl7Fg1xyOTN9I9mGTFTPYjV6CODhnECgGh6WSG0AqUbmiXWLi8sgW6hXOBlN69TvZ97KsQ1IrnfX1OHsLiNB5VifK6fKLXkVQrk0qnI3XYOb6WZl4S5bYUCfrSywe%2B557lIIdbw5zAy7eX%2FBAgvy8%2BHeQKr340i2uxTEQWctRczXf7RSQGSL2d%2BsdlpmxwDacdA4FmR5wvUMY%2B9dgWAIYt06xnvNh4hvMisKbybbvdNgek1NV3MlQTuLX7iFfGiir0Z72KZglmib4708%2F1%2BvBwstlBpLBpBwIyYb77mBPJVZHrnCENYpZNeSHEoYibrELB1jWJQWmxT61XbbEwbX9DFKrf560vcwxEfqZjp7I4g2OoOUeGtUNQwACzZKnHn55xE%2FehDDG8P%2FWMcet8QYWYFsR2l5jISW8tHz0EfSqfijXt0XamZrYhCxVKwEqFV%2BRZMVY52CBH%2Fg3%2BKkeO6p5RExLkwuqmrMxSZ%2FPB2W4Y6RymtX%2BoFETJl3mMA6Imc2Mvh4eXxVn%2BEwbIIORFEtT%2F9cPZvXcejIHpDFCiwq9bpt26kHJ7gN%2FNYpECUFCajX5nYTjX2QrrVSK3Z6gwlcmovgY6pgFPRjyF0byguDnopovmhxxd5Hqqb6JB7ybnsbbuz0dD1P4kkBN0IhSCqbkqnNNVlzsd31OaLQk6ArjUDu2dwWDnkirtolGJSOqQ7RInXpdwv6lRcsFxqPgsrPw0YGEjxb%2FvZrXfpNKykqVvBSxqlY8EhMB3resswi9D%2FhlDy51Cl6FozRAZ7UQRQS9mYJHYnb0mpiCSYpYD%2BmkJF%2BmQpvj%2FmAhRsNM3&X-Amz-Signature=bbe7e6803576cb8d3a5fe18b14db8a38819643aacfcc98b77dab08823158818e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HLINPR2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFotZUc0pKkgSjo1g4ebjrIrpKWxJLFTNCOT58PW8AQsAiBwlZUDCasnhrE8P1oLyNdkQ6dzcBRXjG4RkukSXM5ICCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM05EPFLS8jkFiSNcvKtwDYZohdCECW9d0ysqh3Ojt5v6SZAEU93nRABSyqSyd%2BFO4ok8Ieevv0NwwqkfhBXjmOChbrYpWxrlnuebnYGAPRDTdB8GX5BP5J0qu%2FAxxXyTc2jtUCPsI%2BBLFjBvGTO%2FvvgFzHjJuPbIPzgJ2OioZwN2WjYLLCxoDUI%2Fq4oRPO%2BwsZJYzGalPC8cQUrI0yjeaNblWdvM%2FlxZy5h9H2nLQloFJRd%2FUT2XGpLgSsit9%2FD2ptHDigJj%2Fl3pqqhcVldNHGIDYvuMozc53w5%2Fgdw1M9J7lW21PpPLrDkHE7jtqEJobAVe0zQGbXt99Ztw96VptuRbktUWsOO6FSmEHzflwNC%2BQ5TL8TF1ZG2bTs4AV%2FjcgmxuLo2FqV%2FLyvcrXRSf8PD%2BXHdve80huA3MzrAByG8KfaAGxPNzPIMqUiMCg2JXso8hZ%2B7NMotkqnumca%2BMjWNPK37g3YJ2n8Lvzw8Rhw%2BYbJhXi00iJmWOQEsW37PxGR4yI0qvczFUA3vY6B7otE8mE2CvH78IZA7D6wz7scBZXd6yFl0j2RJ%2FPh6ZtlZxzKr4X1MOgjHzyx8wLFNPyqVeUMEYvDoPuJpgjE126UEq9izlv4lR1Fp35OUsusaepp6jPAXRGGClBO%2FQw5ciovgY6pgEb2jHLHeIxwgyKj6%2BkeMEFaUU1SfVgnumFS1SwwTfAmH0wSNVYxLOVoLG0hWnFATNpEkXrDOhjmV%2FmUtSMh645%2FE9O9aDqRaDuWtstPsHVRO%2B9VDXO9452chlJ93uW4cpUrgkt9MzTU0uecw8Uumo6tU%2Fo9NSRCNxD6RRLDZz0A86SFQk6dykkLwsW3V1oGchE9Rd2xuW3ROYo26UMRd2fN9OFM9k5&X-Amz-Signature=aac09fe31c5debbdb7658451ada5a72b8f8ad738152007ed682b4c633696beda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
