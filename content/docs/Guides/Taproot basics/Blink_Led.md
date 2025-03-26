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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEKGVAA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3x%2F2Ll2ix4WGZq%2BO7M7ZZWPvPSfss0LoPQsnG1fudJAiB2Cte7GIRwR41OzhV9vfEGxfQ2Y0z0SrKdsdNpQvs%2FXyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMRJbNhXuJiv5Cbq8EKtwDor0s16yYgKyLK2wm45P4Mm5AvUJ01JG7lOaVfJlwYk3ZVF5YWsDfVfOIo%2BEtGx7DR61HNp4CNzSmlrXuzmVEf8pJj01IjNFSylO344q%2FPz8P%2FHQG5B%2FZDa3GQf2%2BeqPv57O79Z7EMxbGRsYI7UT8YueJEtNLufzr%2BW23%2BjNtUwC10vT5B7sajs1yFB1YemkpzjDIWDqU2aONVWsPliPRqc5KitF%2B8fYTPc6S8KNWeElVcXK9ocZ9bxmADhVWMQKOb8QiudVbVOpHEqjwya8CzAATSwYXj7LnlY%2F6zP41L9CudoXvbAjeqxn7jfIR4oudg7bB3AufEomdmIsJUl14w94cbd4zo2%2BBfYehjE6ShfKNCnUBdaFoQ6oZxh6pBeIgWkuwiXvBdeCshIUr%2FqKHkpmkDwVbAayAEWLacKKjqAasv7GKmiFHyT%2BVdWp3uTdkfWd2tEbMK0P1TPx9XPxn5eTtUe%2BUyH76ucaQI%2BvgBj4vOpdb%2FOGir65PHsXDiI9NR5feVUJN9fPlBUYqWU0ryYTCdxMmMKzQdQq57T0gUuTY0JMlGXTaH%2B6wj00zXHrFqatWPI8x37w8VDuSxLwUFySW2XZJOUfU79yCam9Xmajk9Ep2UC7Glv6O9hEwrIqPvwY6pgHAgGKWKyZ01%2F2pqjWnknwoHun%2Fpm6BnIY5xc4YBYSCdmTciDlOYEgoZxaMaMEhNzShJUEzNXyVZ1bJGsRo9eHxgr1JBlrShWEpD66Uwfes1pj2OhrjHXNIGjNEa4FqeO9uAvAr1RFs2dcQhGtsR3u2Vd7XfytyINNqCAcW9KVb%2BhnUNwbRbQ%2BJuSH8wh8JBLg9SHc5ro2SmkppdZdZxOyiRBDMf5Vh&X-Amz-Signature=482827112c0caac2918f804dc2e17595ce2b21e3148e779b23005925b1c2b5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7PX5TTN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPeJDqoU6NEkp8mWerej2Nrynv2i7BC%2FSgASaR%2BuWz5gIhAMprrfD7d07z38VHlNLcGLvhy9VdDZd5Q%2B7mewn9VhKgKv8DCCoQABoMNjM3NDIzMTgzODA1IgyJIIz28A1xFnEIltoq3AOUDq2HhyAsPelaOqj%2B0U7O2kKRlqyatHQd1sddGfQIMGllhZgtnydSg4%2FZMQSMfUp3a94GkUO4wfWTSb4gT9l2Rb87xFrJZAWCbtmLB1TCzlGLKfXW92mu1LCU1QotEngEpp1jfL18ztAHnvjWifWzc19dE32ztHpaALFOwE%2Fh1o7YrajRZtEEmMbPo%2FzIkE17TyCnbcBRlt5WyyDljI7BRjCWBgf%2BH9y1i7uPB2RePYmd2pHnuU8GF4iSYAO6c5w%2BuH%2B3UHAi9gQaS%2BWIxNV9NaYn%2B5QVscxumTsfAKgqAk1Ujfoskl5X74ScHGHiUCpEk%2BjZTZZFOEHKJqR%2BORt6%2FA84PrB3Ttq0ZLxJVa4%2BiRXCyPldXxLzVqz8KWn9zfMOMUyMCTXKLttWyec%2B1CpcvK58BkK%2BThnI%2B6Q5RpT9wGn7e11Qx%2Fnb86YM0xkHKsaujTltFy0YJHYwF1KZwbG1mCNZLFnghw6ThoV%2FcEkzdPxhbEKewWdwuwsGC3dl1rvBI%2BBxv0MI55shyNbog486Ze%2Be8Y3TyaU7tMuC0RDHdj53iXKPhO0fzsKnnMS7JjxiBW%2BPLivwcJWIVxmtoAh60IyUj0UobFvePW2t2pLwl6hw8YNyee%2B0Fb8m6jCuio%2B%2FBjqkAXKc0hvf5RN5rhg5pQaQfnkLeSmPMtUdBO6cRJYANLdF7UCBLAajHXJkVOJN5V6L3AgPxy1Hy7PPopgbAXO0LbH9GF5XnApecFRGTogTvzda4x8nlDIORjvcaps1NdEJf%2BLvbpUjNd7N4zrzUVIDVxtkOlEs%2Bsv%2FIPNR0j8iStSeu%2Bax73TdzacdxDYGAdsTgdmnzlPuU9oUNyA1Slv4zQ09b5AN&X-Amz-Signature=4f46a353cf161712409de028513e1c2f9e345d76ab6e5dc6a028d8a7d6f01077&X-Amz-SignedHeaders=host&x-id=GetObject)

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
