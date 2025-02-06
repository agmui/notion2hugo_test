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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRHA4LF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDoC5huGbdOslPJ%2FSo%2BB3xNEltdJNELunnwIzniaM3TRgIgT1BwJ2H4mO7YnBgkyGPf3WX3pPS4FC%2BIGeb3fO1dDJ8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOnhDrRq2WSWs6bTvyrcA%2BSQZpKWOO720%2FTdcure6k4HqBJP%2FdzCQZU7MfbgGxqhYqclNw8Pif6auZTXoR9PPmX3gjx9NtSEVhhzRWXZNzApBj2BXXRgcNQmTuy1javRSMiCX%2Ba8%2FcfGif6RVrxWeUXR9oX6YvjIkXbDE2LMHauJNPF3p9NtFCIhRhSepzhGSX7kpyPOzO4wrISlbgZHvT0njdMgusPdkOYBZV3b156txfZSv53n5a0UMFxxTHefyqUdJcK9LysMSoMyKD%2BELwftwQA%2B42ERbbx5L4JEWYa%2Bl1RgBWnK6QmQDDCfRMFPZ094%2FF0kgTXH5AWSjznMGdHQLqDlugLX5NjPd1nhEK8WqYOYW9g7uearOLWKdTORrs7gNh5oPyX22gbxYOH1YdQIWITbcCZyxdNvHP8VWlf3NHkBvEXfR82UaITXq%2F7jc%2Fx8Y6CLbe6HQPYZ4XFvaZ2iWaC5oqY5nC%2FL8a5gC9lGMsB1cHHrXzu6EGi1W4Mw2XK%2BqmbJykHRGWjaI160VJuHVnRxbMbsvYidYq7KSHm%2B0n30FsT85WYi%2BsjAZHJv6Tv%2BqaTiTkRSkxuFe9tZrgktQ7TZzKS3MUgAjWkd18o5AXlOEHpw0eCE%2BtOSFkSvay4k%2Five3a9PZWEpMMmdk70GOqUBP5MF%2BydET12GMPQ3iE948Pyd71q2eKGR4YWv%2F7VaYujNibVGYJpVwfXLJHloGtnhNZ9I4ZucF8e2Whj%2BtEoR%2FSJHUlKx8mppPpJKryFjEDtLDZSD8KjEaDn4x%2Fh4sOVc19I63UXsDm736qNhYeyWsaqybgDx9IZjy2SgALl0Ip8UA%2BYyXK7ab46e2BFn5xfI%2FgCEgFlGcTDdCzJUEFELnh5A9SNg&X-Amz-Signature=4e712282e9ff01d6c2d0a4a491f380c56bd1d26b84e96176d15c4b27b6ca0365&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QAB7DTX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqf30uHszfQpmHWh9HCZ8Jgvd8b2BOA613xciKkuHNAAiEA0AP3Ufi0PyxweTOLLokXhRPaHZlzsWxyeY%2F2n3fl%2BE0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMsdx0%2FPw32OykHRRircA8tsXC2%2BISnFV%2B5Un2kqyGz%2BIHBjd4bR2wz5wfC6Wa4okt2y7%2BBgelhZiwBVEmo6KxywNL2ZKu9NHp1CZacPqd%2BLkcAyF5od5z7UJuRbmnuqsy7k4b9C7v9P0%2BsUCl%2B5ppRwiomCqfHoMHH3eXM1WNDrAHnGxcKjHtIS9a%2Fdtsm6GvwwemUTxEPxGBZmTvY7KAybrCG9GvzeaSHUlEvC3sDwfaEsVZGY2wN2SdV%2Bxk28L8jJ7fM0%2Bk7w6xnG4hemIKet1Zo9ucrZHypA3MPMq0ummnCB5PL9Kd93QsFNc8uUGpOsjq5cbaLNtxCDgpwmLkMtw5VjxegQHpGq9vk%2BKbU9dF%2BsdIeOdLozqizD6H19dW3T2VmFvopfc6WFGEJZmN%2Fjw3yd9exCq0SmfIUS83lwzEoOlfOHRsaNc2zS39LkCqZtTmkphWogtURrX6DDnmiGqwMEPQAuNNTZtj9j6lP284y3Dro%2F8JJOzwluUiHn%2BocHcxvY6t%2FgPeIWqau7m4pPf2LWGA6q13cNgLGF4cWmnbNK2Mpgd28opMEk2gMw1DFM%2FCaQXDrLUfwD6ZaKDZ9FPb8bsm43Vj5Mm5Tws97Te8zwY0SUUgp3B%2B3WM1k1AJ8jFFSc%2BwTLbGYbMO6dk70GOqUBOKukgrL0CS7RBngvhYXx6xuMMIPZopvSpTsNFV7uNhs26ptC%2FiuiNJgCWY%2Fpx4V7uiYqk%2FqxuaDz1g%2BAs5mQaSA6AkcEo8g3%2FSQxY24e5iVKPTKyFv5WmuGGkl538ETR4YfugWda%2FxwraGG2XB2iwygCJrX%2Fz0MncX95MaYNGD1VOMYrI9S%2Bgb5iYQQ1pd%2BLjOBKUuOQyxFLKzkUoEvwLgBf2iv5&X-Amz-Signature=8d4ea97f50ce26aae81a0ad7f5360e09f0fe1d3cf25cb9e63b3a40417b4ad03d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
