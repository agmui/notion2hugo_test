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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQTWIRU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL64lo18LNVo5pJ1kpZL6AyNJlNWU%2Fq9F2LJF3axkQCAiEA2qH41aIhivx%2B82fE2SoyFF4WhLBqjXt4F6odORlzXEQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM42nkVbvR%2FXhm2B8yrcA5AazcPP73R7Tv55u8yTZ0xOacrVomQAJfnF05kJ1Tyr%2FF6dT4OGOaQpZ1%2BzPcTS%2BT%2F3BuCV0C92ZSFZXGkOQn19QWgi5%2BsJaU4a5QMOLsJO5IrfigEuNAVDUmFOStFEBgE5iAKpcWvJZLj%2Bhypr9aWIRCS%2B25aC%2BjGHPYzAFIgQnHJuLzM0a54zfGNMpkQ%2B7JTFi%2BnO5pMNiXI4AV8hu5L4pm1ceiCVwpMMp%2Bbupze%2BI0QE0JNlG5jhpHlR6Xq8Jbm4szaq5uW2EkdofTNjIrML%2BU5RyMRXwyL7wHfYlF%2FRB%2FD8FDIA%2FPb4mdNtOPLs%2BgBr7YW6iukW2zP6fHEfyb6X7zQgjNR7bks%2Fp%2FWM2Oq3H8JVK2mQ6%2FsMRF5L7p%2Baqscr3nCqRCkT9EYbyMA8mLup8UQ1YZYZ3ymFZh%2FhWPHTfdmVSPEepfMl5zidBqWoe7oIQm5gWLuT8GV27PmwWWXUpcWLkpX9oyYbNp638N8wnCZ3oMMkN0iZ9%2BT%2FsCyxH3r07PKjGDP84eJ5%2F7YMTEGcf%2BYE8sqFj0vDcgvupvxFZ998hYemXv7PgWzM19gQ97t4JJcsXtJEDboNAUweeBx76QMBR633iW1EOue6%2FEsc4Dy9KFEtev6teotQMK6nw8MGOqUBiP%2BvtvBmLFVmaf3oMXYrZBHnwH%2FFgclQPX0zv0V8oXS%2Fq49vshoQrrGcE4q5wfKeTW5XDEYKvtfjt4fK%2FJI1%2FeoQb1XXA1BdzqDsfl3onuIy%2FC2KzqM0%2Bc0yMOztgfLqq32%2FLnYXVjMnJOSEE1VkPnglDsYljtxmwc7qqRy0jSEbjnmvdvp3hf1TymcsyXGAKwFFTqFAKSJoO2zR8q%2BjmuSN1Ord&X-Amz-Signature=9680ab19d4db8d8a25abf24efc1a6e32c61eed136525f9ada35302ed4be095ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RT7QED%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsuArt0UD%2B34YZu%2FtKCW6PCbudJAsShEdIxF4zPiE91AiBzcb5tOrsZiZ7rcJb3irKLJTJ8fi6rhecrjxC%2B45K1ICqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6VLVGtsZTIyPLDTKtwDkxOx%2F35JfIF0GQvn2HnLhs2ujzOmTY0sMcEeS0HXFedAtVMR%2BRRoZpy7zLD1hAXPDmPxDW6X%2FhLbWIod2spgKMWcqKNY1dLO2P7AMGrbLxnGj8bFyvariRVhOjkuq9d1RyQ3e5skSmJj9cGzt3lzKEx4MHzLf7CiCv0fPEhkN1AWh6nlJzCvLiKrEQwhg0V8VERnPSzZ%2BJxS2Jdes0JlO1Y9It2YL%2FtXoLpQcnGnEveDCmizdx5zR8Qby7rmC61E9%2FAlxuIJCoLM819w1nxLZ8g4rv%2BcUV%2BAihrmfTgi2hdGpVUXW%2F1sqtKpHbNK9aexj4wrxi9surbjFRAAH9R6iGRW9YXrAtcXc5S6qu9Y1JprtHuLUTVOzTPEq9LAwi8c0R0cbnfqDuCCQXg9OGW%2FJBkYwacODUZESLGK36W0qmLXe1ZgFxM78lF4gujj0PGcGig2mdsxDjvluA6DwoDgMOJxqvz2jv2Ud9tLXMaoRKwiQZJianWhXu4Whap2jqsM7IHWlx%2B88YA5bMP0mBx5sQCKPBspx8zbh5Qazs7PNS7StkwMuCegOs4Ukpzg5TCxZTvm9fhJd6eZ%2Fkx8IfNTyI9bVLWrof1C2ZKn9CJ8Qgl69aPze5Q0l2oVFbYwuqfDwwY6pgHCkG58CF44AcWWezLwrAzyMIuopLKMFlMZYFr9seE50Jqs%2FnNTIKBsePNDtDStMLM7p8j7lA8kpYk0Pu2CkGYsRHBo%2Fows2vPHekifwNlydkNbsNdbuezHu11ak%2BHoRsgj2EUAM2tMymMZAyII4p%2B6Q10FQZPSh%2Bvhl855f214ernzqeBGH2tLjkbyRef%2F1TT9NupMwVDecLaHy8E40ynE0HE%2Bahe3&X-Amz-Signature=054cbceac117c3eeb77c3cd71b4a5997951fcc55e843fade05cbcb33bb746de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
