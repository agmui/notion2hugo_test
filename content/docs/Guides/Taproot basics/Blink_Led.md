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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXJRAPO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDInKJ88kGG11rzIza8qufDBQ4mcjqAama3L7v6PoDStgIgMLXrUEbOe3y%2F5RBwurVKqjc6vpZ12Q6F%2FIi0LfO1IKYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDhWhBgzKVJ4yDcNEyrcA5ycLXE537q0KQHrthlrG10lKmPV9jkd3dXfktzZzPUAOQc46XifAkIqER6O5TUenpSeKmm%2FlLLmW176FJMfUQCa8TagZG1wTjQWAoOUF4exXi988VfrHbxtaSWVBfzVoiPGBhb33BGtF5sBBiq1RWOrp6fXCbukSGwR3Nvu3xHUcQLQXie30V7jxXA9QGWASyc3Nu%2BmQfG4UtjNSNWx%2FIuK9VEglAhfYNa03CKWWPXc85%2FZpEuiBxrEF7KXEqgZQiSuzCRiZWKbYeljbFCUQmpXmmQLlzTNNcgR0xvZxp8XUvbOL%2F%2BzfSJyVVOWppYklWY4fLKkgQ%2FccfyOhSgUYPbdutXolyB%2FDeOjEVV7eVQ8f7lBjVVlqF9UUfkaqGLqSoG1xSegFQfShtVUO3eMDGrmwwyZv%2FQVNgNW84t1ZStKIo0xqx0cg32dzHFf8MWtuxTs4hispZoABuiie9%2Fk8w7Zweaw8%2F5%2FbQ8VZtlIwXyYZmPjVhLQK909RvlWVrM2Jnt56Ii21lijgygnHy4lOYACyV80BQVSdOFXOvp45RO36EEpeg63v%2FXgi6kJNkQSIGabkN459ArgXMbXMVVQFYDd6ZJRC%2FdldxucBuWhQda6HRHW7CA5xiF74gRcMOuV1MEGOqUB6L45kBCDVoANYLiwU%2FjY8iBHFOUsJ7bTrbD5d0Qkll%2F8HQUe0rt3u%2BL4pkXRhZXiklDKymQ1Sw%2BOLT6upP9O2pAYdMfuJ7VcCbGMIPAWJHXgCHU2N2D2EqGTegLXDkJA8FvClm9juHeX%2By23TgfbJzZfzbAdckgddmcxKFEoqgancKXVqvF%2BxkcLmxDFrFb5zG1U6pOlmHsmGvCUgF5b%2FxlipWde&X-Amz-Signature=a8b4f01c24036c937929fe078d67757d774ad59fbddbf7dd4e0d055ecf9e7395&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWK74OMR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs72fd5%2BfV5ypz3nH69zIldeeQ7DWkznr3A9ZHioK4OAiBxr7O5%2Bk9izmMeVBGbbds0JmNOSdu4PJSN24chaksPUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMhYchvhgDrqheRxOuKtwD2ZrdQnoGc0ZmzRVunes6DFNwwbqb4YtHxvaOPvSuE7A%2Fih577bgFZs%2FHoybM9%2BWCkLFX3l4a985oCBo9w%2Fr%2BM8SHys5yXMOSESPZODrZ%2BVD0RK0t7yE%2FciW3lYmgSuys1Sjl2Yajz9zWP2DxIKFM7PqPcgLic4WYpUYCNZd3arZw1H5zN8DFcHKkiIrMueGzphgMSmwYHBRt3frSDktBkV%2FuasIV0cv%2BoBV0qfpAzBAoWZH8HttMYrGz2KqUj78yd89MNOwTEOKOJfvnEgZeBZr0ARj6k9rrWT%2Beb1NIw87a8xzj0gxrXV5hiy4quEwSz3t16hGwEWD5y6PopSXpdtj8C9pk2kQUGxmPWyYW6oIlZsLalAtOO8mFt4XTVnnZXE8kBjr%2FFSfZhK9vzyGNPiRLt6BZ6CFqTkEGxfX5dDOR9ZCu8TdFYGL9b9CXxulMlzCpfrNAyfzGYoZtNZcnz0cLuTZeWgrKEyNo%2FZbxWFwkZcOc0b9LSMRCuW0y%2B7Ik1eBM%2BYNAlk43RxnZDnzZ7A9PXki0XQk%2F4UfeBg8UGux%2ByzSa5Neh2mKn9mAyTlpTFvgUEIC6iGuMTzbzcjdqA5jy9O6YfVyw%2B2vxo2zzPPveiD6ravQ4dYWDmmkwqJfUwQY6pgGsxieDm6ZnPtOIXkgWMEArdi22revh28jS%2FAPx0r%2FZXOW2eZa3S61T6XZoQcvPYHj2uqxVBY5pMSwDFin%2Bcfk%2BFTfieg%2B%2BLBD24AB6HWrlrfUfTY3yzLW2ThE36s5XqWP92zsNNcq%2BpQ1E8%2BK6mIRI7LW2RR9iZqnJfHSbHf6PJoDyKHBDmpii2wU9EZzlOagrFI%2BwZl9W4TbRroAMzVSQIAzfAo7Z&X-Amz-Signature=6eafab7fbfc16e36ba278639e687afeea3865891d9885f42f8e23aa8e1ad710c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
