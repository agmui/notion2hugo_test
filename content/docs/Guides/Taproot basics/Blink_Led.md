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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWN5I2BW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC9ouorhdZPI9r1L1oRtDAiOKgl3dJcOEWD4dct4fEXDQIhAIMFkaCFrmK%2BgYIkJq9zmI0oR4%2BbbUujoMRaobBS0rZLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZMMaXtQOWcIV%2FzxQq3AMqDBE4ItFUlbAsb3uMijS1loSaF0ya0dCTG682sdLyMdhbw44jlNDK7NvdVHGg9GMery14QYRasne2mqdpQfQAnFLue82QUKro0yxs36T%2FgkzoiZUDhxn1JkzYR4jHhfsn6%2FSFJwvawJzLNsgE8hnQ37cy4dM7pYTBf44YUQGU3PUywmJMmQ3ZGhitixJPb%2F%2FJQzAr8w0eHkdMx79QXOXdays3Vy32ZFRDd0vG1QAxCNuJfxHfUSWh4ysvge24WrMTdKbs%2FPW%2F5hCa0whcRmIuKGqQXBWJTPBos6qTizBR8lwtNido57ACwc6zF08ayhW%2Fo8D7rwQdf97E57l8i8lmZnz3tmcGEXBAoFywXOwimTsKALgy0HhXm%2FG5yjN1SZ7Mr8jkOPFMKahEnMddi%2FLer%2Fk7SnoJTW%2FDmWIZDcg4ZO6MKdOiNY3Y5XwJG6WgR3hD9hu8r31KWiB8gXpDx2PaHLSayXXrkxjCrbpY7nfzx6%2BkT9wdKuZo6BZ6lm%2B1B1BBSGhWq7XSUgtBqwb%2FguHfoBYpj0dZkn68fNTWd75VMlUZR7mdrv7I%2F3yK15n8lQU7eHKTPQai8iNpVhgqPrvebjC%2BfQGZYP4SitJhXbw205fkViD59hRu68lsjzCrz8fABjqkAcBb%2FG9YISTcGpRcYmXTBKC4wv7Ku%2Bw4upfnm2cRd2n%2F5N05M8DwiDgeRot%2FwW49VPORjDi2WAkdZ4%2F3%2Fm5kSefL4slfxDVSAqM6mc1cY68T2xhdcugr8s%2BCpZnpajln8FcVSuhqFafZRWOsN8B6opIOWJN%2BXmctopRvROjNOjcFIfVSNxPUIR1uHc9kCs47mXvQ4aC1yvQ%2B2UZNMKIDN4N4PHm2&X-Amz-Signature=ce555eec90a5982f66a06211004af3e717aac6d2b135257d35772a28e847642a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ47TBWD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCPxe4KFXyxrXGAbyfd%2BL3MUB5gJ8YttkGGEtQXIG0C1wIhAMsHfwMZJ75zSczMHGZtI4nxxjdnG0C%2FF2RlfauyJs4QKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSeo0ehCNiYOW07wMq3APmmW7CeOSkRmjhElj3Ym%2FeRz56XISP6qHdHuaPaDR39kL12hCdDQp4jH4Qs7YdXlUNJuWl52YtFHewC0Z7%2BsJfFlVYxBADFo2oj4jf%2B9eD3HVPy2OZCpmQ4FIJU6Axr0w3RAzQtdduvzx6jwFxtJvlDOAezT01QLP%2BpHRuZuaOwNgWFiU5z0iHGZGuzzCx4vSByeVNKiFOodG2IAXlkDDa%2BHeR8o6F1TLAcFYeIZzXAIX%2BU7h2D0Y8KMKCKCt5ZE9doYxNkovoF7RndPOKfGYAHbKamoGqtoVfo8j0vL0HdB05fDvFr58XYXKdehPWALzJ8RS1maJbW93cSepWXd1%2FtOR2M1FJhdqfxqelL%2Baj7zIODxxmSyua%2FUkiBqm3H96n1rAVQNASRSnNHnnPeERZ3UsjW7PBmaVFgUWhlhllfQJEbzlBM%2BYM8ympwJdQiOGIq1kP4tY3Dy12QQJDrRuNNnYpZnB6iquDYojUzEvychK7009FYSeC38HwT901DtUxeUZsBhsqQEdObvr0HPOi8qkqV80%2BWYKWA2mvUKuuMqBDY6kN1Wf8RL1DiNfgyxhjQnwazpXJBuJdr0jB5nHwHTAevuQEYXUBzj6BH3LSI2Ci1mbKL36cq5KNbjDUz8fABjqkATBxwMC9JOlbmPTuWkXQqO7WaOABdfcr5ZztRwS3j7mZ9X0EDJdK41ndj2W3c6H20ezYC7obe3%2FQPqmZOoBYNA1b6n%2BjojmfOnI4gsyq15oxLSCGoXccyOoWSFCDb5H0MFvjtITkVP6gpxgJvCDZgfxi0VT%2BaTdRaypwfBqzwHh3byyaOGoThDZgUOWtrrujaDtkLDOjMiOWWbjgzcsUyhhL0kIw&X-Amz-Signature=14fbb98f7dbc0c465a4f4d314644ec7decca4bdde3329ca113a99f2e69a06dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
