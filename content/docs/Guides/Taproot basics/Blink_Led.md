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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2TCMV3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDok1u%2Bwur5ezKTWa9aGIFBFyyzBLfRepzWD6zxjppssAIhALKyZrOpk7%2FwR2YZ0vrFyXDVrAo1dby7zNnKvZUMh5z%2BKv8DCB8QABoMNjM3NDIzMTgzODA1Igwur%2FZsdgf86bCx%2BR4q3AOiVPQ4rklzCS%2B1eztQYUIF4B1JJnX6puZ2BqgDBi%2FOrehIIiTK1gcbqdue1ejRjhhnVi3w7ivuFtE2FaQIpQMRZfy8fxO2v%2B73iHIi55wyxWY5METBGa1VutLxknAbRHxFt4zpYh9lsUlNqcbXSh8qhXMmqyUEvuNf8ePImNuWyHu%2FiaZOHOzYq8il%2BksmCFeJzK58dAm9xTqGyNEs5nhC6QOAxfZtP9nJnG7luQLkv4dNxd%2Fzx80uXdxCdG7bYKgs6syAgc9CVAOo5M3%2FkqZIsId5sNqiL1LJyr5Ik4EicTW4FFnNW9hE8bPqHxSD%2FC0%2FF%2BwLH9mmN8pAiFnWcDwLcoqhZSgbbLiCH6gRamWjqmSf9YBCbSVSdXbr3grSwGsthmbX9vzsKT1OGCdl8Iu3gqO1g%2FtSvy5SgWvOXLq3sU7GIxbNBDtLcrPNjfjoi6tU6B2LWWYbRjU9k6odtdVNYSmqiG0OdSnFgVpAxmmFFLOepjg%2F1EGq703RUB7AiIefh85tSkhVqUHP%2FybA3bDtt9tq969NBc%2FeOtF1yzz7n6K7Z2%2FpXJFHOLHjnnqkXr3Pz4WYNSmZRjVbKYCys%2F1EielIOY%2FQAqGmjW9ccXDhz1Oh6oC8y8TQ5M%2BvEzDKoZTBBjqkAdOxprSoVOP7J%2FlTsb%2FZnnsXYjg8UuCekqWuJhhiMU4PwoXbz1%2Fy%2F4V4RDou2ed0trUnCsIY6mk%2B0juS5yXLa%2FAFirzBZ4OFdu5qfvh0OYxr1gmM0ZoeEGnH3DMQpXZatpx5SmmJ9O2cjYUZqubP9xl21R8iVt6qwTFJs2XeMBp51hHDyz9eQGYi8iKSDBNSiIAQL3gZj8jrQXud71FOAFEew1H6&X-Amz-Signature=5d6dc6adbbc1fc467f1d51dfa6cf65a3b31d51491d2a246f854feb36bbf610b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEMXEHS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCzDpBFrlMP8nz0lbYGNqEc0P%2FKpkPdFDmILbOXp%2F8qSwIgMVmsZ4gr5P90v2f9%2FgAl3DY7q0%2F6g3pKGiwTmnPruV0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFoIlp%2FQ%2BcuCSH8WICrcAwSEE2phldsyM9TI4RmJoyPEWDpGHiUB6OQuCpijcaI0T9xd%2BiJYHB7V8HvQ93bsWlOtuElOJb4r1NNRE%2BQnbNUAxZk4M1E1ldKyZeDuGAPW%2BzJW7NxHX2cWezIe00Zo2%2BSi6cQPn1DzZrMFL7lt%2BxNhORBEIt2LCz1cXYdtsYfrC3ocN%2BIDUpXYmJkXHrYnOE0gHYg8MqpuGQt%2FqHcgdDASR5V0dcXJXNurLlacKso%2FFfIzRE4rFsgib7l4I9pBF8bMCIbcy2q0ZeyZFCKglFrn44Dtbax%2BLx5oQbV6fTdvCfdnWxqIDlQLFhtSFU9hOlnW9AQovtdTNe79M4AYiPDf3yY2C%2Bq3acVTqLhDCywIJULZYD6RxkSXQuUEmkADszP%2F05YR%2BlDqBNUV%2FyNwVYp2LcTARaYARsNIMypY1EcQ%2BBhXEyvHmXIIg7Ig3d8WlaWUhIPGEYoB3nGLbIhGpAkRqiWscAd0A3h3z34BU18dJTM09uJEVSrJFpBCfIargU3WF%2BgaUFylQhDnZB7%2BXcXBfraCXBfgfGfWRRuHKEtt4VGCgAvA4ZtuKM7gzGpeyjOegV49vw8gksB3YWvFB3%2BhpxnaXb87cjFYoaQqpWeYtrbv7ATnIQew7KeQMK2hlMEGOqUB0U7ht3M37AhT7NfeQOGeZvGWwzVp91ANNkeT82CqFdGDB4jjeTvvY1NSlcBcF3VqlAs6QuEjIdNErDzjtQjNdKYuVq2UOibXPd%2FIJNIWSPEWUa3YzmQBwCSV1fj6kzf5hSdiV4NhPOOFmekPxV8bWL99J3Bfiwz7Z8%2F6g6GZIZP99LFAnsEaRJUi1g0w5P%2FeZNSRtsMPAL0Hk5PAHMYptLh66IqF&X-Amz-Signature=dfcf2f8df15293b08e4e061953706c7ee584f2d6c73762f37cec4d74eb4694cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
