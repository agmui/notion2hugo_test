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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCG2FACR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDjvUUxZSTWZV3Rw7jyGkAymmdD22wGmsvFkPMN2IJkvQIgTS6oQin%2BJJEzCtBR17UN2cCKLvJlk4p80gjkTXbyHboqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL2aUxyTNUVjV6R2yrcAzZ6TPTLGbX4N%2BEg8YH83BWcqkZx6nGMCXdvg9Mbr7nvI0V3qfLuMmABt%2B0f3A8Fg4HSdlRzus42PIvIZGDhoBYnkpfIlQOevQ%2FaFItWWi9qC6Hk%2BV0wkQ14GnobncjGsQLTHNYABoDNM1d1wFxBmKq26iOj0f%2FYe1f2ScwDJLl55nRRRsxL2kvGgs4CJc%2BxT2uhTr%2Ff2QIE8RQpFiaNDPg4aeu0SpUwkbBSawepiogstIZu9lyhoN1tNZYgmio1%2B0z26kzEdXvZWrPUtdrr297GnJdZ7JDaCRIFlRozERSHdwhWa91cNy07SYpgxprkbS4ILV2j7qAIDeR3mgBp4T45kMk%2F%2F3sUrzPl%2F%2BZm0kR%2Fa7JKRBxAiZd7TfwKZ5aLwORNAwk9hRHIKaeLAPflOicQEMoe%2F1HaYKSpFG88BApuot%2FsM6EoDTYwb4hYVE%2BsLWAAiDQMukZRYiEqd464so132Rz%2BSa6ShJ0IyRyL5PnPCStLDJP6yXsaPSJCPvuYi%2BAcb3Ye0r32hG5HnR37lM64M1knNl6%2FyQWlni2CmGvxlHio41JQxas5GOVO%2F5CA4tK4RnMpAubflcGIUvvfBt6FO%2FawE06fpp5KtwQabMam1wGV5fzn5Yv%2FH3D9MODa070GOqUBJXbVHhQ0gRzLy0ENRLSSOnebarN2IqrnBpgnFh6BID4PhpBhGsQA1KKlt2SIZeX2Vp%2BCCMMzUG1DJfj4dM4zj30Be8cdqWwQLCkeAm4X4ebx21K7e5SFQ%2Bn5NwduUURy5Ltg4SZLqBzOha0dp7RNdf5rFi3YMZYOt423aoAwGt8PcY8BCfO2CmOcOlD8zzQQaOcC5VVnIej20oy3Yu6MTFip7krN&X-Amz-Signature=5c3f9629fec31364666d9ec1214468c23b1418c4567d111cbea83032f4c6bae1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKUVNMM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDDbawuk2n25hdJpu5EXXO2l1coiLg0aAfeKInVs8MmygIgXxpoCH6JAhGArlWAgo0fyTKxf4ExdtJ8R2AOwE0OJvcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJFs6uReOYhIU9rQyrcA4rwhBd2%2B%2FvsYhYZNe6ZWdxe3zfw7NEInUF7YAeZQ3P5aupi9miS%2F8mbxBXzkuLeQQqemRv7yjQcm6QVI2W0%2Fow6GwzBh4jLU62YvKty7dG5t%2FjeKTCWBIjWUE8T8%2F9pVOngLRWN6hFFBWeS6xI8uqf3WicnLEF%2Buk9YQsCSo89cfRh%2Fl3Qacluj7kkUCTH9WGEw6J4WWOx3EghDqWQhx1lNl5a9%2FCzeDi4jD8MpxhJDLzrgmBUMbJoIXuhdaU3pD%2BK%2B7fy8gQ%2BeLgR%2FNrc2Jw3sNu%2BuwWSVN3MTqbAOzM7JNTEXdWnL10%2B47O5%2FZinF3LfUbK8D3prghGpQDeT%2FX%2BAR7j6VPNlC08J9KD0ooUNUWZleYz7X6VLLMqRZQQYc%2ByBrgPXjKyK8byvkjeuhpg6rgW7go8DJdmQfCdSPBhnfwTKDM4fEhgBSszURNudrDCsNvFD4OMoxF%2FLFA0OKmU8MPIsTTkU%2BPbbLpcUDODt7%2FSutkCNfdck32bwDOR4hFJ1cbNRFONnGeRUqebKaX998cI0PMjhcM9rScKCjjx4CLl5S4bccjbkCWZ0UEVffNVd0v5ETqKbI7L2%2FVMTHMiR%2BO%2F7BSMe4w%2BcLP9rRMYl13ANclFI6cYLV96dcMPrZ070GOqUBWp%2BSqVRqRNOt5s8XD2g5vHtkKC8%2FE7Y3yBEnZDzLuTqt9hdOI89NuQ8Wu1SI2902gXdpgofT1GhhaNaAMVPrUosEd7%2Bgw%2BxedLHobP2cSjrlEjWCHgBv1vQlOvtUR3isce8MotAUsaAjZ6RCoiLvN6W%2BzhyvUuAjwAV6hhfbkQa15Qo%2F4%2F%2BfjGbvzYXLC3OpN5ZZsRlk1z47ytKEFwaWWmi7jxm2&X-Amz-Signature=7a95efc88b36c0bc22e94f1ee0568a674e62ae59722f0096c67850c991b83a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
