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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKKQAVE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQC9L2xqUC%2BjtYLzvq5d1dMbIb4KBMMvoIl1Hx6XgewpwwIgHuX9fSXHX2lGX0gpznVxYq79QFJtJApSO8mDJt99kTMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS7j6O6aooo%2Fpz0kyrcA8uzrNKAEl8jyxVRcMrkfPLevOFxjKjVWoIQBuYNd7LVaTWIGvn4DA05ozrgSi9n8YNfoSUM5G3omAs3FI4XKuBn%2BYXvdY9oLIn1cGvfVsKEzr%2BQbj94fHhXa66zZ4MfGLYW4C9NW3AZS4xDYCcrHQK21mfv8f8lwpGFMwB%2FEaTv6tuonulBDCIwyOCrAUkr%2BeREJzmL%2B4jUrClbgzfdCz7D5gKIKY3ZcyYwUaIkHaMnKObI52pxiYhyjVS1Pvr%2BORpPuUtEVVucQedEvW9eDgFFwCHVQScEYCVAB%2FX7JTFKV%2FQoKyW3E83JYNzplfhZDYIIHz6KASNAbwHkmul5zv2tQH5ImZoJwPWDUCR8%2FZaEG%2B2dhPtZ7yLl0z0zvdIT%2FSbFNcQwXG8Cf2UPgzwTc%2FNnetquwdAatGC5bwIQfgrzKKz6E2tmX7On7JqGwBXS9rA%2BtxsxS0sg89Yk1JLFzoLYxBgiq%2B7drEoK3bO57EEGxp2cR9bIQE5AXx4AoCVm35i14AaR3iHkFYvtKgimMlxSLyl2Imp2ZbVwbj1z9aIYaLNMl8hvUYw6ZMiIpujG8u9OluoJKUD3vPTZqug9P1BKtjwohL%2BiTN722A5kEhkJ0JmfTM6MI6iy9%2BjoMPXMkMAGOqUBcBGRgsR1on63FL2ycb0mPY4Nkc51LicCTHRUpVxKIWgb56Ry4i%2FlHZdqykKd8bQZ0f%2FWJPovOwClM8gOnTHTqLgdQgOMRaDYqAXOreEoQ2aRbhaafmhkqRJqVELWcSMUd%2FilwbzXI%2FefoffRZJvXSUh4JYUwgyzsahOKTI0rXl7iA0inxrbvQDYssCNRbJlDtlj4x3vjel%2FZRt%2Brq9KszGQ%2FTDX1&X-Amz-Signature=87e54868e554a1aaea1df2f4c72a61c1a771c3f33706b16e55666cf107473734&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4C34K6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIGupXO%2F8KbKvU7Mr83QVFCvvXVghoITUTqJddp%2BjrqCuAiEA%2BuiUGF7DYpwtKNxLwLns9NXjaS3Brk8Vw1MAxlc31M8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLQTFXCllvk8v0%2F1yrcA89J50TDh73DqouhvOWAUNcyyKx73riXisT7H6cEhVPZUNsHhV%2F8ox4qh6uxot8%2BDeW2Skt1pD0lXfMZYzXKDop0dW%2B52FEGNl%2Byb8WCaQgkxjpiCNJ%2F%2Fc15FZS4T99QAlj7kDAikI3HheJNzNbIXa1FjT%2F5yrXCec8fy5dl36w8Hs%2Fch2WhirGQ5hBmUuAxCs3f%2FQkn4P0jao%2Bw2H396ux5lz9Pwq3%2F%2F9l9urYgGDoUjCpsbLVF2onoMJu7q%2FI3mV9WZZvrjORgkNkP3IG3LpKDalWKyY7KfCLlCQbhAKZTb%2BMn3zEejMk5zND1jESr2y62iGhQrqZn%2B50wIyFr3ny%2FBSM528I%2Bdfzzd3mCZNUwWnDdk1d37fXlBJwl8WIaR3F82qWP7Vm0%2FLGh3lQLjvjhhxTVPAfOj5EbCpOKOgOU3hKKLcDsfHDHWJ%2FyD4c085OTuCCD6U7pwE4D8YuVpQi2rmvh5q4iL5WAQofJet2LmRkOqDWMFWpziPEjwFag1iDZacH2d0aXtLghiP57JkqKVgH5EtrBH9IanQgtk7FdXfb%2BJF5akWXQdtL8bmiCeJG27FKaoAV4nCax7lD0Em8JxOIIL6Jz5IUXyPLozC7zyPb5F%2FyC6O4H9D6OMLjMkMAGOqUBo%2FPOUZiSaOYMURFAn1ksoELT9x9choBIYzAZkM8iZLi82cM8E%2FkhuufYbjY6bYq3%2Baek7YNtQVRGaPmoGQINgTCBgdE%2BIl3QZzerMgW3Zbn8V7HTPAkVIWNyicIDtnaXaHXCUwVAnBY9pUVJq3s6agGAeuwtYeK%2Bjo63Sl4vgEBEDdXQZuwb598hmbUoPo6cuqDk03UvC6elz9awvuBudgJW0TUP&X-Amz-Signature=4e7f197a9e98122691485e394288f2a67b5fc7d0e5ca057e63410e4fd975b95b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
