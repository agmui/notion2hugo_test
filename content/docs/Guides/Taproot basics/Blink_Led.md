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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624QYRQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGJyoRnE1QFAAteuGTchfrAenIDDyhVzwWS93s%2FIdGhwIhANqVRnY9jHmYuPl%2FfpnrQmlxMWq7ZBrvWEBP2DZsPN03KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUeULTckDgRd%2BOXN8q3AMHJUL9XFqqJ4paXOik4WeE2dpcq6wK3YP4m5ebVrTiinSm%2BIV6qlybPlo%2FkktVw%2BW68TzZOCVOcc5JbcAVIqd3K0NWDnPbgAJ1twBcbTGjWWMU66v8ATNEOUX5ZOsfP1Rx3doZVMVDfVkqn2WDo7HWXKa47U0dvMExxXoLzAQES5iuSODEjXiy1Z9AXUk7rLOPdFcx4Re5Avbt0fzcr04DZw1kCbdgef1n6Dr4AgfZvV%2FDnZ9ZbQJCS8PNZJO88cQgGoTaVC%2FBQpsUE1tsxXusLt%2FP8WZ5hZ983hW9NW%2FCHkRifxhLOGer%2BEZwrInJTwWk5H8prS%2FSpOWgq3qq%2FX0EPKtxWOkE%2FBXbnG3nnBuPNJyW8PrE%2BuFwvRKyooLf6K49a3Yb3ASJ6Qz19EvC6NyKtMEuDqo016TA2aSVxQ3frD1JQMaHfjbigkDUSfJKXGDwF1%2FpJwSFxKsdG%2FVUW0jF6zDbrSj2AIQWKotgHxIZ4HExzb8gyqV%2FMswjcYKDBXRmUigrO9Xhm%2BTmde46YcQ1%2BG%2FOVqPhMzdVNTpvX2JjRgTYM74Bg8vm4F3M9XHciXE5jxfAyYuZCktfBaai20LonKZsEk4M%2B04jSnNZpUEnIMFwKdF09ZMJMstIajClo7TBBjqkASWdOgJFjyYG%2BMlQaM35wUg2ZeCC3DGhhxr1mhQHf1l0jrkfKV5qlnDnB39zfeJGRIWJ8tO52L0NRsz7TBos%2BOjtm6uAq%2Fq2n2HOSDZjKBCdEzH7rJ5Ci%2FC1rd8tI9KmZk2oPUJfQFJUyL%2BxRWH7biJqkSJnDviHYzxOnKwaHqfoU2Yp7vIGKAhVRwVTqgIlVVTHJrkaEDoXOjPiFaUcJtUKdUkH&X-Amz-Signature=6d4c139822454bdf7db9c89164a0c3f691f0bfd47b6c330a4ef57f2d75d2d825&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3YZ47U%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8uWBEhKWGBfcYYXAcsAlQHJzJnIZ5TYcVy90ZloMYQIhANsxOSyWAt19SIrYy%2FuNJQAipcg9VY2%2BlU9qE0apsSJLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhHF2tOoda1j3U%2F0sq3AMWStG0UWg18katom%2FRGiemlaTgfAG1gSxh%2B9FKzPP%2FCWQ3oYIUPszu1ZhMeOcQkEuvxdQ0AKi7IB5GoHzkKO71IKQabnE95A9rTmT3T4ejgjJT8EfafIXW7G2iDZE1g0xc4a4vpIY%2B9nXuNzya%2Br0dkW1Bth6TGsauEDeRAdAqcblEcI6dGpS3%2BwHDhBScLISIGr2irMWDjsbQy%2FyytIyH3mMLtfM4jnez8oXBH0fI1q8R%2B6pH7T%2BzFvHioEuJgZzokcLSHy2vx%2Fexn62OnrfTfK7I8GWUWtAS9lTpFi1wvtAdAXq%2FHtwcSpZdTjoavAMzkE7DI08tDXwMBMlW56wmZjIUGwOiWN3qgPUo5Xu4qqW%2BpdIGnnUVX6hboHWbeuEVEC0yLQa6JT8fXzElmmZCvWR5Bwv%2Bjh8UUknNfXam9DlUISi9bBgCtDW4y5KdKOKk98vsjH5lpJdH598l6KpyQaMeTd5wJ2CYNiCa8K29Y8OerMAEQW48CHmNy6EF8vJtbkwb%2BjzU%2BMyLOGUdmDjbBVlSHY5FwKbBU%2FcseWL9nBIXGiptjeM810sOnXHEHPIn5BmMrFJmaeqyrymlszBLARZUETnXM6qnYCWFhFfad4fJuWrySV8QKcMjTTDforTBBjqkAUi1BaqGEqZ0LEuTABei1X%2FF0ihkydp%2BdF5fFc5c19nh243Ff%2ByDZKsnAlSa5333ewxvsTF6%2FbN3vPfz%2Fs579rAu%2FzUIZEXRt6XISb1S2yjhiqGMOF3hEFqwmFyCb9i4zE8xKcGUWl3m3UXv57jTmiTsBxkz8iCrpz8HWy7xY4cmVYwHVz%2FjCrlXunl%2FCCrYGQIpto2o%2BuYcIeCOamheeRzhqfeF&X-Amz-Signature=50c8da8bcba7dc90068c186e2a815d9bf55b9d304877bec7cfefe98306c04451&X-Amz-SignedHeaders=host&x-id=GetObject)

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
