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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRERV3XR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr63bNSt1iWiGbZuDaOs4TrCnslikSHjcOxa%2BOBx%2FRSAiAYafcRNGdtAUDPVN4rq8tGaOMXbW%2FuSW2U5fbTaEb49iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYCqtGX9mY4cRjFb2KtwDcv%2BCBA%2B6%2B7kvUAwi%2F63aGEI3k6Q6%2B1b9DbkEG4Bo34Lr%2FTq9eA1vR5upYJdhuwX4ppFqXmmgMwjzXP77tLtc67Kz0Y6WenbJ3LXjX068T61I12YOMez52mtf6x8pcpVRE%2F0c0h06a8FsJVb%2Bo8zGpc3BwUdeWuXziIHj2cEYQ7YHCju7ow0Dc4pU%2FWDZEsPZg%2BgGdVqnAQfxO%2B8g8d8%2FJHf6mPc9dDzX09C8uGE9F5hvxQFvaYjy1rNCKQOiuaaKvFwwfooi6ulfTkbOJ4rO9BtcHju09QQV8pWaWAT8TguQtTuvLiETa0T3Mgtk7ak0GvEPm%2Fn%2Fay8lJ00BByMeB%2BGhbj%2BozxMG7PYsFVBRoZyEi54FszUH5ixBYayGHQHtbGYnBCwO35CDzDrBENi%2B5aUxJbaNRrcNXdJT2mUol8QqeMa2d7bTAn5LXZ8YXWCSTLs4gbYC6Gi0c9pvAhOlLNpYsfPp35A0t5UbYBNMjqex7HoOXzn%2BDVCXJjqP%2BDhdGMS4n3MYoVQhf%2B%2Fa5Sk1yOETxMJPPRPlAg012zisPKEp3QcBEw4pvh%2BVYj%2BmYa15H6p25beybeC40hHtB%2FpARhSOXlN%2Fue3VCrNpmFKM5GwyQs0eNRA2L5ckgC0w96DIwgY6pgHJ7CxTyLyzMQaj3ApxOfs0FWO4FM9TKn73oLLqRybnPbfnbuirzZzbqwnd7iKz%2BQJ4SSeCoq1%2FjJsyzeQ51lwVaocQc%2FJlhMcCpvSUxLR8n8CypUw5i31aYI%2FtcRQYPL3UxvILvYQm4K9e%2FJIkIhmopI7z5QEQ9utprG1PpZtvrpgqNe4jKfpaOl7l7OfuS4sEFaYymW1xvDayxHYXsCwGYW%2Fj8fei&X-Amz-Signature=457a2ced635093b35edb20bc2609403be06234a0aad235a99f40be19ed78b454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCXZNX4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPFqyAXbt%2FI5%2FsMDh7EazGWP%2BnxV28QYjwP%2BeOcmaIjAiEAu5QKq3zPlViF%2BnWfkuzN175F6jNVHO0dN%2BY9FGEwnVUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzmwehCZTPrlKEjbyrcAw5xZFYh48WLbG5cPJPHFhg98N1LWbadOMb4d3yW2Wjcm%2Fs2Nc7p8moHQBim44i79yRC17MMVCKtsifkZpHHD7qk40rZh0wV%2FuyS8aKXZlawlrX5k68V9LUpFYUCV%2BpbwY907Mc6G8hqrqHY5Ae5A7Z9nvoVOnA8MXpfKuZ4EWjYIwXHNaeq2ifJS5QfKhg34lRiLL6o3poYu7cE18zus%2BzajBHv7OJZaOmerMH6Nh%2BjinWSpAzASyHNggKA6v3eYdCEGExmb10GzPIfW%2F33MejB0ppJWKd5KF%2BNCnqYm8V8zGNCMSMxeP0nVR4IGL8nnfbEu6J78T0muRI4mQf0tQVln4z35VN0XjCzesg02UoRwMRNvLUo5JGsLY%2BshQKF3ZhrawrbquaAV%2Bl2B1x%2B%2Bl2NSDSf9IhTTi6Z53Mjn4o%2FYhncfx8VEy%2BUBo5%2BJ8noYFJHKSm5%2Fpv4xc0IEaFQrAUR5MGik2GQtUWJmi9RcZbO%2B0mnqOKzQqRVkH3jJmAao6fwgONanz4fnIaVuN0OjFRn%2FtwgwaRklN4nmrmvO%2BjAlusKxlzaPTsNlY0ZSSz9S0oEAcIoZSAcPyShTEj%2FADsSUxwpp0aeEzLDxIPgBfHxUIpUJP%2BBj3u6AhFuMKmhyMIGOqUBpNryFZR57W%2FjyHU8BMZmKAmOTFT%2FFM9ZdM0k%2BCRBo%2B6UDnKqfEz42qtSnv0tYJxU7zU1EwQtZhwnUyhf7VQYRZk54MlVse4aZJUIybiwuie87s2%2F3SnAoMlv0PjBeq0QkmF46rsMvvbyqhyL1As5SktJP68MjL5S8mae6zYYYeptoOjO89BahTpsQwHo8%2Bz0qO5nB78ouDoAzmc9NOfrUK4ElEcm&X-Amz-Signature=d42bcbb6f73a10bc903eaa72bf79f0bde52b61a2b4b58bb8de291d97a9fcc33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
