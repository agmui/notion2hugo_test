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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3KBRWU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJFMEMCIGUkFnRKA4%2BbFhs5KNu4Uic%2BQdg%2BwaGBrSSgahNoZdugAh8urEwvshXi8k4U4Bz9X8XY8H1zxStrb%2FWO4bfT64c9KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyti7FKnOMeEMc%2FA%2F4q3AMdMiaWZPCqywHIQ93n%2B7Av7qPNd%2Fy3AgvqAK9hoZBOXYKt8fL1F3SSZT%2BVJM%2FK%2BTTdmDPpv7XBeXHZzKyY7ofFmZCDmkW34ypV75joMZbmICsVYfeR3TxHUj2wnkG0cagjYIaizl46tjdS3G2wMYbFEPVvvA8lKYQNv%2B4nanK6PNKJfJMmsIfA0ARnhZWz4A0s1h5ECeuoiFSnk0jGMn4dCiZtZdBh6nWZETI3vXoGDaaAoc%2BzwleuSA43GDHjSUirqqdsmaNQmakcIvPxd1rukw61e0KpeGB67et37xaIg9jzp%2F%2F0aUDFEerbreMmkDJGWT0K9ehhKYZYgRzK2D0r%2BOywP%2BvEww6%2BhuhrRJ%2Bxzj2OiBblneq5CcZc9hkwpKuVh4zgg1DdJnLO8%2FAL2OQh7fIY3ns2v%2BFlNdiMVcZ%2BId7FIG960fSukPU2mtKn4SwLvyMrDtjrXRPMOagxjLYPmYWpNRNpFyKwvQfk6TXvYB5S1yQekwuULq6%2B8blmXO0yrAfkfN0V3uB8HdTc%2FSXwWGigWN8NkbcBGsfhgMmLkNrZOVe%2BIIKcdfdJOwkAktQsp7jpBVb8dBhnh%2FMDl2EceANFxVQLmWST3ZHousIBuNjEKgiFnU5HIOMCmTDPpK2%2FBjqnATQ9HVJgwJeeWGRcuxqDmt65LW0PFBNQJ3qSr1U%2FnAPExmgQGeRt8T5DXwrf%2FpPLDTKaNVokKOgI9T%2Bw0LIKvS%2BJspWnj5I5htYfO%2FhZyJH0uJ%2BKuaWCg8Cha87YWjQs%2B0DRiFmcuZuzDV0N9%2Brc6XiFvKUuLnfjnJntZMnZRdd%2B0a7smV2rTSJli3ntpIJ9T0t6w4TuKvwQCsHUcAFy2UMlKECa0cB5&X-Amz-Signature=90a4b63b87b50456c66b511c44f770ebf972183d254fd4f4123c86de26110e02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPJZEX2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCUPLUmJA6XcKRPk1AYrQ6EkucBv8yQGOboYI5y9rOoBwIgDocXe1epEBIbWJqJUhwFashRf7eNCxeSsTTGMhMoyUYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFq0h4GyfdwhekFpyrcA5ks5x3blPdg236HRbeZ1ETKoqzYzYUNm0Y3dGCJ2XaGnMiLH5SgqcJIUkclowl92f4Fm1eZ2dKqdHLi2Ph6pInYEwaee49fWaI8mL5iEs3KXI8NVWHiQ3XdtuJdCgrmrbCh9jL3yfUkQxWKIXuj%2FQ40dV86r2aPAzqUTUpF0d3xgRqZCMrEz4jPTFpxap3uLUDdDTs24qXO7k5J04%2F1XsytOmg3B0dmu2gYJ4AkkbMjei7QGZXPce6h3sh5n7IoPjAEa7HjQ525UaZGex8WNhGgQNdM5wuX%2FgFM9112WQ3QjPYxNdW%2FibKYPWQrsVTfub2Gtv4%2BzS3vEgITnKTwROEwyLif4pemJrXR9LfzEeWeLXEHbqdFHjuetfPMtiGRPxjFPOacdC%2B96AFrodkGmgbWvFMEUtzBUjUKgD%2FmOuD6UVdREFwY18e2PdsZ17F87BLR5C7QM%2FFZiBmqcDnH8V7R7ctRhA%2BkAWzexP17%2B46lyVdZrIJrSsRhWfY9asbHra%2FXEcn8JOKbFNBqViIB8GcC%2F5NdT7%2FtHC3hm6YXTbdsCgEZiEKXorPDDqmq1u%2Fb6AMcnn%2BDLQQwcTiRfsAbPosujCFvAHvRn%2FG7b54ifwQToMRktrPu0Fij9Q0BMLikrb8GOqUByJzFbK5uoMR63T7bvgG86J1W7DsvWt7glAk90A7JTt8T4bWIzr4SIJAfkxKnchEOhg2aCEGaew6WsfV%2Bivov8yzDNSSWG4DDlQpTjnXcBOPdG7d3%2FrOD5bLQDUBQ2aeftCwimStFvtRW4yve%2FsfrMLbpN7H%2BIQ9nWtGOy%2B3Q4IUQlM4Y9qSF6rPLn%2BRwalVAtdrOkuRYx3coriNvoXHMI40T5062&X-Amz-Signature=66ece3a23479b6af80f06b42c36eb91ab9382dea73c7cb60ae133ca3724c234c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
