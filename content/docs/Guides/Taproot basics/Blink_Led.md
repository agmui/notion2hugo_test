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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZS3MCY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuvf9KeQM6DeCAIn0cWxenyoq5J%2Fr5Z31hnPTqytW0fAIgQ4ysEAi9ZnIwxh%2BktXj0khcfLgTEVVyWkiGy8WD45OkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FAEpJU0UJqLCiEqyrcA8GXQVSypt0mx5MMLaa1QJF85mJz3u%2FAZTtk9unrJaLWY8DyNXrfJ6BfNyS6mxUcvbhoZK9UY7g4sAmqczF4QPcvwdZ2YrADm6QDwJigsqVE5wH2JeRhXuunvjFaDLxa2dD%2B4LuVXGqiReUIw7cAzxWtQRbnbDq3Hdc2x7NdzkVlH8ap0V7Tq4R0cmXe8d0fRiCLd07ziMBlAFEs1cM%2FHd%2F%2F1uM9mZ7NtbJC0vmC95E%2FsFnFKQGgjmW1CZqCMU0a2rFGNRhQ5AiaJxgXu9w0P4fwrwKvODqngwoR7g1ANVGbY553rtIebJdOvuSSuuYfZU6yChnsG0HiAUBHCuN%2BWJHxV6ey%2FjJtiSOrUzy1XZYsg7xtjosvTsz9425Mnn5o7mT1wQWvPpxS6pxkuYQ9k36lLjIWSvgePUoL1Gmeurzl47hRCs4kKpIv16qBOuQqxwNffXq0lmtZBBgHmXP4UUZ%2FtT85%2B8KRYAkTd6Y6XicgGDB0kvcCjfz0dWP4f3XGmpnAPrxGBDj2cI987nqwVaUsgq2t6pIdHzzlYiLYXyJKyvJAmY6vb92SowMmgpHXkNkhCRmPX9K%2F4dSZ1gg%2FKLxjSMuKR0tEDvNQ7HwmKvG9ey20T762KlNBeJ85MMDXj74GOqUBpT0TsEFYbz8IR4N2VOWteQXEWSpdoSku2wykI0JmrZNpP8TRKVnuVCZ5S6%2FJuFw0tGqIpH5x8kCLU%2BVZEATJKOD5aIP%2BphDon2twuZRjN1FWaq9ag2KQrf04wlh11waRgdDJZQJML%2BwWd%2BaB%2BD0VlZUxmCzRvInBD0aB7sxFyzsoa206hn5To%2B%2F21i4mSttjV7ctQsa77MFd3vjxr15DeQh8nAqF&X-Amz-Signature=f9650c3fa225fd3127c2788ff72875222e6cce755e91d3b5ea709bab322901ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGTMP5JQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCLaubTDXyQ7gu9HVKgPOEqJj35H5CJIfhY65vvyaKOmgIhAPc414V9tPKMP1IWzK04P9mz1bkoWKP9EAapdiEKqvxqKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBh1fNn6eqhyGYcrsq3AMuNVj1CQMt%2F5SydzfGAeM6QWQDFq7J1Iyp5uW0dHodviNhQilyMjHU07tbXhJaxmQRFp2bM4Bunsw83ZMRaoR2tKWJYfgBMHspL2YobGjWOKclcEW4PXXpRowfD9f91S3d3vB7jTBjL%2Fae49YBK0jtqZ5D0rd%2FVGIDfRmIGupHVM1z%2FwPlTxH87IMrlkYBXP2GFIIDClUe4L0fSolHBcNpog1OCx1T%2FiEQk%2BKdn7tUD9PELZwhVzLEw9qCrJMwLdTN%2FzT3j8WNSbG7wwlK7rzfjHXvjXDF5pHTKcGDrKiFwDALXVa8tL%2Fq8meH7DwlKq5wj8JATvLrG%2BPEGI0ldcr30l2kWjd%2FQ%2BPY7O4U7t4TIFnHsj%2FnELAqw8vhpMC%2FOHZ7kFxq3C5VLdFwbq2DcVADg9G%2BN9uDay0rel27bbeOsD0eL3lNJnZ48Hv8HIemtelXRE%2FYNyyrS8CdDqZCsX0U5xuqQnji%2BRf0jN2xgkllu6F%2BVI1iCysJbH1PrtBzJrbDZ3SdFLvuLlAMG%2FvySNcDJ0PE8c2Zpvt5wzpo8Tbnh6DQpi4hPkcb1yeJLcnq4VnNxwGCha1ykzX3S65xM%2FmXd6cySBJAovq6NSEMTqSsMTCpqjAa943Xq3pt9DDy14%2B%2BBjqkAcoB%2BQhNRaYPI7lC%2BZUgK9HumUEfrRX29xvksawTZ37uEZOiuxjJiasJ%2F0KLr52wtIeWWjHwPyCBfvDDneKVk%2BAvhcQC5aFEhf8vvvYsz8w8tJ%2BQgzTYGipZcg51VLr1HdmCJ5DhAIk%2F46O9XQBu4m%2B6P8Ls3wrkomSY4DPT%2B6L91yEaBNjQTYVu5gShsvoD4i2Nx4%2FxpRsQbmhlkItxCsSFXsBy&X-Amz-Signature=d0b8d3cb3efbd28a2011f1a9ab85fd6bdec590a543b80b6f68957006e477cfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
