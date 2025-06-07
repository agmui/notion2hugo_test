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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVXVWFI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9qb5UT5NkzuBn8K0XsB1dM8QVAWnqbpXlYgz9%2FqiwtwIhAOnN2W0bw08WqclwGe0wZ%2BMZdG7S30YUb%2FoGKzMijxBhKv8DCHcQABoMNjM3NDIzMTgzODA1IgxzFMRdwRKNmuXxZucq3ANlhdDmsP5evWzsG7%2BaqXy2PTndyS2RpIj3PHtMBkw%2BdWqRrnm%2FCBuUvzc8OyckzfxMg09fWSSd4XQjVoKbP3%2BE3e3fjo9Ay0YvlvfD%2BLMdMtQmGD501qrkuBu6LUcWSmquNI6mTyybW6cxHw3AC1MLxqPzNow%2Bzib%2Fr6AaJlVfJ9kEFz8jx4pyGl81w%2FjsMFBPMdbIHQNS8tZc6cWJuyBkFWZqTFTG9UL%2B0K2wdN37LaBBI0vx4pvulaUsoX8lXMd1Z8Od0zrUfRDWrpDPF5XAT4P%2BT86JgWhreYyY8lrjRW3Kr%2BlQzA%2BvJpZErpwBxAcZXtplSCFQTQLfjYbfX5dCo40GKY3QopyXCvS3qBlM8uMSyjpfSfLc%2BcpKKru3txHpJjb55zUT1IVdXjBtKwux5JEn7EZz2l%2F18CU%2FHg9BsDpwqEyKFwkDVXI2Z7dKOqF4FCsXPVJaHd5XKTYZojcjZ4eJCZXBON8P261EOOTbalOBb1l43WRAH%2Bzi1F%2BfOy%2FJKroIdv4uT08gZfX%2BKopKNKTdXRVw2l40iAlU7udcUVZoyf8L7pkVw2v9EqY9vzC1OS62ykSl3eW0AAGS7v4Xu4idxc2dqRLr%2FZUDmosXvdk7x7oVJXgJDJEnXDC0gZHCBjqkAX6eC6aK%2Bbt7%2BCWzrr52gornhY%2F%2BUHK84HW9CoASUHR5RTX49oEEAU9xipDPUR7qur12X0F8hNktPYAXkIBv3AnJmZmh3AmR39liGAwzdHBaI%2FUD2HjtKqj%2B7MJcz9UpJcX0uwfXxRU1ofLDig%2B7%2B709j0Gz9fTfIf0St%2FV2jiKwuKOZpySLnQzJPpS%2ByjapQCK2MryQaZ12eZtBiJT61cqZIjcr&X-Amz-Signature=be673b5af83594f76050b0904aa6fd5dae9b6ad6ebc4c8dec9475c33aab3e996&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZRZ5EHB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ9DUtflTbTBil5ddEh5Qs7EsA8lmAgFGZ14t84SfHHQIgBTMnso6m3n7e%2B4EI4J5KitSLS82igd71fKlQA3rAfLMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK9YdzoYN5TiHkRlXCrcA1tMSsGBcmFRoTkGo9yjAhhhhx2B2GJQ7%2B0KuafAGpRUHktq5QR2r7IQnNY%2F2kEvmedIYUul93jWnPL4XtEO960M9TpaiHj%2B9k%2FP8L3Z7%2FM2zn6Zvk1jp3dF%2BwmCazMLoozWRpLkJeSHXltIXvLmI4hk5z%2BNbAKUGwY8swdnEMEesGjXh1OHK92RnWNdPNGENF7Rl0j7OxoUo78SrP%2FEgUFftE9IVsHAOUoehNDD3qMr%2BJ3%2B3ooCHYZ4IE7eXC3i3rQ2KOR589xTwhO6IjFGwNlnw2OyaFXIj8CigjizoabFzPN9IvYi7MI9wvB6VedVSTLUNx%2FsywUC3M4mab6U9fEriX2Ht9Ffy2z3xMSBfE5Vnx29a%2B%2B1f8g4jN6Q217J0TxyqZ%2B3et3WencffeTmkZNG92%2FtgZ82D3%2Bx1GWVw%2BmPRawToaR8DYz3zE9Ga2Rl1ufySXlRvv4Bp9GdHymHapwgMEmFD6ogFHd6R20Zdon0A2ObsxegZIJbtblGs7b5W7izH%2FSpWa8j2zMRVT82iOTKeesgv1lOi9HGXJGUnHDGBe%2Bl3PUUhrOnwGXZDMA4kcSTmdBXjXtcJ3xtyRPfVh2st%2F3ufohMwIIF491JsElpKu3O4DiChSlLL%2FzuMKKBkcIGOqUBSxruL3bPk2MViJm07igpSe%2BPRXVRS5mot2t18G%2FBATP8XEkdFp88p8cIzzNtEFq%2B7EOKdAorW7rQ7nllal94zgyvCq5DtWYCY8jii4c5swdncs%2FP8NghaHSbxuqr1bxJBxbt6VmwbOty%2BeykC9PKyiVW77iWLfqZTtpbBJ2sxc26Sc6z0rzUjBTU71lGEAVNp5WWH7kG2fGm9s%2FpNh8VQ5dFnz5B&X-Amz-Signature=5a497868e46cf84c499d3a99c6e2fa73ddc74aabfe45c01408cd3f125561354b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
