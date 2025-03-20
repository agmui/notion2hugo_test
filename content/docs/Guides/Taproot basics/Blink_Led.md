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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B3JC2HC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCcmdCLlMSGu3MH9mM94TydJmCuxjNUy%2Bc5DE7aYG2OIQIhALA8Q9rpUczf7rLro3MFYXC3urK9XXAl0hmmnBfp5sQZKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiDFEDCon5mZ4%2BqDYq3AOFPukRjHjzwTkw%2BuM%2F4t%2FmpF2Zcn1EeaBLhpkUtV2gJT2stj2C54VlhvgDahcFn7nXJB2BKkal5fdVkJ1cSfoC%2FQ7Sfo0cxImmigUvAMGsieIR8%2FqUHSRs8zk%2Be6gOLhDipcOFe%2FSZbuWi%2Fwu32fHQHe3fx2DMmVdpiCFadckf2FxwNYrgFSLnOM1pNYfLfz6JpBqzvg0z6eU%2F4nOqFD5x7fJakw60eMBSexGycJeWBOVSQfrTkHtqs%2B13VvPb%2BFYIfttksYTFnfkGkpunuZQOBQK97ZYIcWgGJvR8ckBsGH3GV6vtXth9NM5saQQzZybErd2947UUAWq%2FF8VKAs4SmEz%2FAsGm0waQt9pNB9%2BtIpKieJ9swZnriiS9Sx0aaCeC4bfwunIjKdsTaRDcY%2BrOxEAkrs1VCyWgTNR3Kc45FHDoy29ivFIuNgCBNSpSyaE79nrWhdJ%2Fm7cDkDmC1i6uGMU3RVh75f4HHddclAgBnppMr4jK3tLt%2BKQA%2FoSGKgbwQM%2Fk5SrrhpoydEIeBIEO9Q7oz9sgVgc99Z91ifsN9X5kOYQcG68lDmHgwKmY%2B1m56kSBXFQVoiOho0hPvcerzH7w8ws2ak1PaJPOudyLoBZT72I4UWoHefG2tzDzse%2B%2BBjqkAZX7VgWcCkGnA%2FQDMw5UovAeI5PzeHxZkMIVhaeEq2oRupqBMVhuD14xAr98aPAAPjZIdVMM8nFTJfJLdpU6Sh3YJCOJfMaT%2BLK90uSoSSFQbxhnargeadMieZ0%2FIHurkMwJltDV7Xa93RrRF6eYsZOYm23MmsEFfyhpiyZ%2Bl%2BZDVj%2BKSPJN2Wp%2BuMD3Gd4YilOsb6iazmSKhTfmNc2bTEt7xTZF&X-Amz-Signature=2bdcbfd52e191177dbdd9e0418ab2acc55fba2929c6941507e7e660e34636333&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T34IJ7YI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCNJG4Eo7eSgEYFl6PwLCIxpj%2BmhgiRrLGje%2BLfaGT7DwIgCAVx7%2Fgx83MJcNrkuzp%2BvT55vN1%2BLDEDbY%2FG8debR1wqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQAWL7islAs5kaCCircA%2Fbt2YCMemUynFayKmIqzxA0aKU8EOKMEv7x8rQZnTUAeVwAtxL1h5ngwAlFkUag3cXUey1uCHBIkbbi3l8vpeHOPBDYnrqfFBYxvtu4qgYWyOBke1BkOkTPxyrybU%2BK9QzFh29lQfSGbQCDrcbu%2Bj20J3f65gWR3gbFkmSvMI%2BZXSrxdKwQuPevOHRDGWB3xZ%2FGA8shQ%2FSj58n9PPOjnQAwOu2OgvM63mcVh2C4mi9l66vIHciu7hB5TolopaT0QUd3u2HIb8nkbSHJuT2JYEHmyzTOUi5rBkNQtvLAQyg0wxG2oDtXFzCicHYFIOEo0NySLCXf57U8lHfuseECqalWXWiGbI5oRDh5cArTpxEsBHwrbfnawg0dmkIaj5q0mZ7pW27TS3J76Q1tgG%2BYl%2FgeLFVIzbYUdBHsmk6HGUvoWo47q5AiBZ5ZZuhx4GH%2B6GYqTPbhXcx8t1hplbUSW8BPpq5Ijcw6tAOWQwb2WRrCDfa1hWddNw5jLUDVjgFN9Tyb%2B3noQZn1GAlq2pjmQhlWd01bFWI%2BF%2Fw1ovKIED8kExinqJ%2FmkpwoztMNcIipK1U%2BrWH%2BowOw8ze9dW%2Bsdrx8%2FU8tj7iZDacXbXT0v83fGlExGfzIiWosqPwwMPml774GOqUBsO9Cf6aTn7eQqtYL%2BlemRAQ36IQZxqHGEFfJi1OGLJzlHktMv8R9fdmQatUXYos%2FXqtgNTjuQOPE%2FBGTTr2B7jv7RY8V4IG1hOw5YSc9th3VluJz%2BIsLUYr9xB075O4uyzOJNHbBy5osyStWNBaOl8YjJd941Hz42DpoStU79AVsvGeKr9JNN%2FyVVmx8WkHojnZvIc4Y%2FLBx2jiuKE%2BtthdvLUPU&X-Amz-Signature=341ea5e95cc112b4b8f3e175687be730ddfccd5556900017bfb068c1a07a9ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
