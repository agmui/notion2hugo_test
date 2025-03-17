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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZDCD2E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJ7cscKEvKBcsL3ZAdoCrfrCPij4ehdTf%2BH%2B73eIwegIgL8md21Yfqo9cv2zH%2FFtpf75DwFI%2F%2BkMMyMdxmcBxwfIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFe8qoRHThE8U1%2FI%2FCrcA3kAXyl2lgscAzQjlZMllswlQKav8KF1YOSDMqBxtw06ttV5bl7cKXWunp%2FDe3CX26J%2BbTX6yBtSe%2FDPGeNJQvvavAEgjmcHonGXZE2uczn2Kc7a2ZJaKXA2oriEqSePC22N18zKwNojk%2BX3Wyr%2FCm3CgDjqHcVsrm0USl32wopBxs6MsZbalnJLng1nRyte08Jd9ShAgHzOaArTvZO4wQbZY9ZUs%2F8px1nJ36LBGnIaSEE9b98Q7VsuqgrGWF57kB1IGnip4AhBTJK154eqOakYJOU5LEghXb%2BaDTdZwR9SYg%2BxfGyn%2BaFpFJPWTKSkRdRuS%2FM7%2FprY7rbyk3XO0fRxvv10cqQ1Qt5BhsXqWtvQ5YP0sRHM1JN2E9%2F75UrUrRA3FE87Efbj8jet8igfaBIvfmYpTjUkVBZi9YS6viUs1rSEeB6NONgTeqslCHCS8XL%2F8A0cRb7SxgXYuQdarHb6Kk1nepWwa0pTLJQdSK2U%2BCQfsluthqRuKVaBIBmIRqtNcIYpU3%2B8Trjku14y5T0NZjn76qFUJI9QVfkJ%2BakAhyAkNTylo925ezaBVVL7P1g8YCQ34S3KuJO%2BK9hFYQ1%2F0niHlnD6oi5xooxVJGbnuaad2EYX2bqSCkkyMIyS374GOqUB%2FE8lsxKHebmkPN9DD8eeIHYD761HAPtWXJfgfR0uVTrsbkh3DBn%2BOd7tG4TbSmNfDBpjDXpElricSpJs2qsjes9gFHZTMrnr9xw079FtuJgEmGeAa%2BzTqX8LUW7fb3ee33%2FjQia7mx%2FsHltGZk3%2FmzkNpRKp%2BySTByAJH5LrkyotH377qhZOVEx683iEL%2Bdb%2BpY8atmXBII8t67sxvj3z%2FHNhG4A&X-Amz-Signature=3aa5ed52a2dec795e02fe1df254434b74a00a2a6b3ef1048ca92d0cc4b7e8f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7YPEUX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FGYNdlDAsd80dXVwXbhiTuk9iGstgHblZzAbbI48alAIhAODrEyh3JVNqVUQ5WWY26wou6Te%2BvdgTej5tUIE7sl6xKv8DCEAQABoMNjM3NDIzMTgzODA1IgxPJ504CC6rvUYjpcYq3APX%2FM%2Foc54RY0Vpg0mCvmj1V50by%2FGPc8yiGauFbd5ZrEl909kivECRdaM5sWEdMXws3d52UhriwOCnXjO1jzp1HNwpunUc0mers47Gx0lHDLFRGEQdEVXbma3XwfAochD07c0trWv2qRambfYPFDXHEB6pfWYMKjrRWl7ymXh%2BHPkd7TEVA1UGb7UaK%2FR%2FU8TtUqoVBugTGxAdW5ViScoC1MbtFlL9VzhPKYo9w7NGQVa7JivxbDZfJZrqMnpPm9ohamUPKB6OkZ0FEUCQHwu%2Bs4RT9QB3Ar5mSVqycfT3nMh7WWsPLwKOa0YEtyXKi%2FWBwHYyGlZd9dYxDpYJFe1PQ08d02Bej%2FC9j1O1UtmuvYUSqMbajg5HHDz1KOJ8bnJl%2FZW%2BjlBWnEQtOrEuJLBjTQPcl9GHHKz8ZtNY55p1jbTFZoX4DF4NBO7%2FjGt%2BjIZzdzWaf5886hlDweRUdnf86F473tfZp4xvXnZt9EgQ3UzYAZtsI3MRYYXKOqM8YluwuqMsFqpZ8Qr9mE%2Fo30xaU3nE8AmC%2FCBqUxsFuHvSLWIDZ%2FBMhdAxgJM%2B%2B6nrQnCkEo5p5JiCMnLkjRyRgUHWdcf%2BJb6cYZmrlGVb%2Bxo3L96XCJvZ5ds9aVEOUDCPkt%2B%2BBjqkAewnwMb0tQwZp%2BMumu%2FVVtomXyYLn1gwVijrsvoslHud%2FVhQ3E9Ko8KzSpB2vWbd3YSbVJyJ9Uoy4y3I1AD6NhUZSe9lD2mz1mysIjGVIoXHZKFbJSZUWnaJi3ey7P48gpFrAalvymiGUV7Y9qcFhk9SF2m8HwtxYxLK54cGeuuDA6rGFPaPxqgRTUw0Dbl0ngUHa1q8kXt7j%2F3x1mGldgeCijiY&X-Amz-Signature=6f470dc191dfedb508fedbbf0b7bc08621ce2b209db09ec1678e7131f3c20184&X-Amz-SignedHeaders=host&x-id=GetObject)

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
