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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTAIASW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDt3JzZS0hVTR9gZ4NGFETTdW5I9txj6P30KH2%2Brv1cgAiBQdtBM2%2BR5lgEXIN2oICpbN346gmr%2FXrfhluctGSwRQyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMED3cO7HQv8dpNIUoKtwDPF3Xr5tpwk5cWYhyNGB24nqlXAZW%2Fe6qZE0VwobN65cv%2BMg3l9sNu%2F2MZqkaULRnRthTF76qPMBU%2B1dGZbbw%2FtVEStINWYB9fLWbEzOzLIOFGfXXcUij%2BP%2BbvGZk0BSaOQ%2BJH77M%2Bjk0%2Fi3m3Orhhjd0tJlbPSFoKmvSBTnZLyipMsta0zaqi8XgtVGh6sZ%2BCdjbbwCqnMAbjJoR3l68tNrg0nt7ASUt7I5E7rhB3haTYaIqUqqLUwuSdq9TCXdndl1DIQPqdjsGJ7Wk%2BZlyFLwJmLO1xOJpiIRnSmngvSxtrXGvvtgElr1ERMIPROkrj%2F7ZPBEEzsAS4Fca8xRiLNkVy7dCIGRiPcKc8s4ylgg4ARz%2BbSNJVFqMuOylkr0YwHT%2F7rsHGJE0nxnpN3q2d6wbSmBaXpFv1yF2WNIRcbddDiVLHcWYCX2fUcPCGVajzLgTWZt4V6vgEi%2Fd4ANRUO4xNwrbDXwzVPZLEE%2Bs%2FhGq4I0MGRI7hXeADhMBVxairwXTgniA9B0LF8zjdiuKEaZ2UVX4NpGD2NtIV8vPQn%2BtgaFI6SNYuT9T%2B%2BKjv%2F9RMbmkw9VfysP2NpQSpwnGT2%2B2nieXOx1YRqRZ2MW0xR9NdLgRhZxRkRBKProw1fL0wgY6pgE67da4%2B6cl7HrbN5MzZ2%2FrCp3ru9TdExSGhGTmsDQW1WDCUyG50kej27ju6oZZJIuEk7bCbqPh8DZmfH6vFOzqP47iLvaaaDLHNmDjsp2DRRQDFQQy604MOQLHxDyEZw%2B27OFMCd4mIBsZvEBP52aIFOKM5S6H5UlU30ilXZawk8i6uW1iPRt6JgPIysz4AWdFXb5g5LPLMh0h4cVwQGf1lv93hdyH&X-Amz-Signature=cf9b9f689d7497c95b83a5bbde385a0a6aa8b971c47b89bc0a9694bbd0972390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2FCODE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICa5G7hntn7hKXvnnIKdT6M8OYfBYJLuq6p2FAH0s434AiAGqlah0GL5MLyCmZwOU1W2ocojLLXIHyy1kUjNMfQQSSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMUkdE1nSRfKwdJd4uKtwD2grqfaAPxL8zBeYCLh%2FlpaNoIfKu8l5wGeZQEDw1ZpkGTJXvhJlNOXR4S4Mz7w3ol50IlbkSsr1ubikiYnKIX0OLn9t0UvMIE1hKkZ46NAN4yrBOCyxgVyPYf8%2FMfcCzoqZtWmt2or6xP0l5LQ56cv%2F7MB7xfnVuJ3CCO2PGyJ12ywbAgCifslzjuIwvz5nRDJXt1msSLKtDLQhz4gt0lVTLKsqLS6cM49sma4dkGisY2YwOzdHYASeUVcxTRj8ynBmvNqJk5n0wlvFHdJdLI%2BNxuwcaT%2BbRxDoRl9P3uzd1qedx44JRIFyzzxnHkrWNlht2r2RbIJGzX23IAmnDZ4KxxletEbZ7o2sLNeJ6FlwPyjX9fY7%2ByB9zOMYqs97YXvvgUEEM%2BNMldeEQM8kNYw58BwCA6JG6hL%2BePHMz3kWNM4uhctcBD9uDIXnkhCYSS3F6NKsbmGWbKNnjSPC0CnHFmn1fHetjbuXExMK4CCbMgeE%2Fm7Q%2Bs472Ec7uNJtIt9K1yU%2FXuSqnyZ2Pi7RL%2BT%2BMKkPkn7B%2FrjiwjHV4u6dclkszlRqpKY4GR%2BDpKRCDGj6%2Bm80c9buzG3cRplT%2BjTD6dz1Fzms2p%2Fw6BLxyDB1XwsYlfa2uQTdDpaswsfL0wgY6pgHgBxzLHdOUtcRfBHXRJP2g29SXSwSfLVMNeSc34VQI8k%2B1nheWT7YnXqOqAEnrN7tRWhtgbJZ1xw200xGo0%2FYk5MzVqExCX6h%2FUZYYP2ECZjzxTF5DuHKTtMefVwS1eZoBJjU2%2FL7Sz%2FQZWu6JmxKOytYjVWgwCvZFF2z1OWICxVsV3KqgBIZCHFQEBS74FTfqRnBKWlRg306KEcwWXGzRpg0zKbmO&X-Amz-Signature=a11442c77e97e4a2f0a50b35e0a7839acbdc11a63b89f21f78259806f26fd75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
