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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3R25IE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2FsOIvdvmNLtLl%2FoHMzuwViMAHk1ogJaAC5C0V8lsTpQIhAPF7ILBoDZAbHAzA266j%2BKsYSVuuMUHhe1a%2Bj1Fs1DgNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyFSc5VDApU7jtOhqAq3APuuhU1hHE9N%2F79p6GciPL6%2B6wUUShMugUMLiQjyeaQXboUILRPlQhGjcq2Mq6fbjNIYI%2BJOMFMggImT0bbdGjLb2UbQyIduj1tjavN7ngEWt0Y7IoOfCLI0zOjB0%2B1r3afZCH3Lbrz5S2SkkVkiPFkrsO5pCYzfaFpJ8uIMZDovnIE3R7dxcw%2BakdzEcw8JPWbBOJxB8eTgyliCkIYpFBk94xSg%2FSj3bZjzltlnYJjX6lRp9j61FOVaTOTfsPtNUXnA8y7khnFTlA7QOVjU0pzyd40REOp0eoAlMiZumWZrohgcfyeNr9OVCTRQMsEz%2FeWbOITeRc%2Fh60OqbafDaoZRaNM65FUNpeIwlzasX5VZe7UB4IARbhsS6meolB0wTc%2Bmry8y2gpu2X%2BwsLGICEgWSUOKBAeYUZgFmY4USTqZ9eN20SgZ6RKKP7t1zwfGM%2BDCj%2B%2Fm2haTkolDf0p%2Bpsg4vK6SzShqkaikW5n0Lz7XVviWPL9E335bZv37eBfF3qUV9X9WceEwhL0kCmOXLk%2BA0l9MDuOEYAXgqlxix%2B4wk7yLAj5lKURgGb%2FBDcqgRVYF0rRq0rxUfV%2F7fLuUJolvO292B7r0fPlrJf6oLDHRjVpHCpPRTKvvQ%2BgiTDb%2FZjEBjqkAVUwUPz49%2FD7khHxWwZd%2FBReyScumxVXh5PPFOjWCSX5bgWkwxNmyC3VYSYY3EmBddV2rqZfDFgEJZ5LdPO0fnBQHbv6MctHCSVLxkO9ACvlIFjYiiuksvh%2FkinA4lNlatqXi4lYPPXBMEm25Z4GZAoriO5Wf59Lgf3i%2FJn1lc1Vltq%2FNAULXTKe3vSpuXzeIxkJOMxOhdFiWIUO%2BY8Z5Ka%2Fy%2BvT&X-Amz-Signature=35a9ab85444f2295c009e2e2d2a6dd023209710cb63eb86f7fad3d17035670d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5ITNFT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCClx0H4bfJO%2FARA1p3HtoRdQYMfYHgwYpPW0gXyA0WIwIhAIyoWl5Fy4CZdemNf7vLk3j3puvUnHm4u35CdWwgF4jVKv8DCHgQABoMNjM3NDIzMTgzODA1Igykobzi6rjcJU6qp84q3ANe2bQVu9rYW867m1S8rwO1wYH%2FeBahx2yhwj5LFHdjMopPM2opEQeiygdCMwuYV%2Bgus2l7hbqcrPV68XKg3mNIzUl0M0r3knOC6PUaqPdOacopSs%2Fuxa3e%2Fhv%2F%2FgJv%2FvJx6o%2FavLAJNcAnPTrmhPoTv9tGUeVIh18mnR1nCMqDQK%2BX0LeTydfr7UP8Z2zlwNMPhQzqLxfue7DZawdoQUckcq8cHZj8BtCxS%2Fq%2FEpMmjHzcC5OXfWkBgLMWDi0oideImgpdSCiFrVNo4kbyBBFFfCIH1tAKBLAldhnnApy%2BI7hWrjoA3hVuwhkJi6jF%2FqQBpb9ZzVayqPfzxpHHnGGlwBBtZ6zEA0izVTmFlnMHDN%2FhwDVBWRv2KrDG99CL1YiPHGP8%2F6dInAdTc3PcITB0mmXdXuYjrOrC1FKUWPAVQn6PDme%2FOLlwtGxrgH5FPO4kBy%2Bk0Ed70w463Hxt3drqTeVh8NpPz87ZNPc%2Be6%2BEQMtz%2Bq58OZZPPrNuhGW3S%2FUIOfNYooquTtgXgbVHZPcs2Z%2FgD5SygTsXCcAXpYvruaVBVDg2l4qjUkX7cdAFPVAcQttL%2B2dOmOMreP1thB7uyRuzaV1CnnLzStLuXQMyIRUH5XjWaavm4JEuDTDx95jEBjqkAeaAPCdZIRfM8Xlt0nZcrtxbAOUw%2BXf4DNqY31Vf0xBvdqeFOcCfkHdC3DVAKQ5YqXbyI08faqusprz7IM1zCvY8JOmzpbpzRUGckBzAylUBGduftnIN9vG0bAtFYaCU5DDOdEbJp4K3%2Fi7kr7OYWtJGmjzLtV7JYBIA5wHCbpmtwgb7r0%2BGV1MB3%2BdZEqWgx%2Fj7cnky9%2FrcLDD37WNoC1ignDoO&X-Amz-Signature=9e99092718a6c79bfa82bab367d3eb13545a433006dca21f6c84a727d33c4210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
