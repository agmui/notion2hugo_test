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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNDYCFPA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANtRUeMks18MFqJgUviBnnyt9bM3IM8DpTMThb0XeDSAiEAxaWwFnbbBJXgnOKVMmpZR0hC1KgOkgvV5g%2BAq9D%2BFAQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNYLBuTG75L2xJaA9CrcAzq8JTiA5kU8S60%2Bn4xYywExFD3%2FHuatxUVDB2MbBSm0EfIGOcxrtRXcmNws%2BW%2F4hduEY7Gr2rbhTwebz5C2uz44vsDYCsstrvXuSFYmh%2FKbU3398DP2HgG6rqjyFFYUewEzPJSARLC5m4GE4dRU9rowTlk7csfFXIsSye0bPfq3Z9SEgffkLLFnXzdGCK%2B6tB%2FF%2BQ5menaLf9Rs9aYL6AhL0tG2n964WI7M1Q%2FVgbAS03E1N6H8m41xztHyVW31aanqrIjIy8HE%2BqqpzNLG728EB3YyocUrB%2Ft4Izzig%2B%2BnYXnvBCTtFhYPpb9IsvTlhn2NosoleSsqJJOvPNAjbMb00QtN%2B7f4ry6zDasS%2Fvypfy0zBxCjh8Y7j10qk2YNNrfdHPtHnYqaLbdgfqd57tYBkSXDnCdnlJ5JOdvkeAbwV01dnJYOdMQCc72YErdFBNIkb9ICCEBt9dPY87P48MRARlP29jVN4zqIAd4AV17hwG%2BPgxKXgvNI4rTIFLfnqpGtuKS5zJ3Yv6qBME4MRT%2F9Z77FEqrfcf1%2FHvUdefzF%2BtLcpAA5jvq7ooXG2u9lWSWBNToHX3u1eGMcQ8A6wokf0VzsbsM9%2FZqDYN%2F7sAVH%2FcICfyG4XU1xGnXQMNCDor4GOqUBZAQcn2mqw7OKj7SBC4chR%2BA7f7w5b8%2BdtpzcVUmYifYSUEOk8J9y83kd2UkY0YDHxSyL6f%2Ba6ey6ygdflX2Syv3NYJfUWGLvALHQ529H%2FFjgMCE2yjlzLEffM5IVO90k%2BLT89phwDqcZWWN2ScnleBvMmicBpLa0OBfDcs9QzkqGsGpA2aAzDJA5BLV5getLLmlZY%2F8%2FMUQvF44LxkGsBnWQr2pp&X-Amz-Signature=7e752eb902892d920b39a7ff6068f7a5f468eed8afd9328133e1580d4b81028b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM7BDGRB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOVg2z2YAzWpw9ON%2BadLgbygZ9GrP1QKuOZcKj0HoSsAIgEpZrFgPeu1TCcm7zkSfv0u4a8u8DWGwaBWs6tICqQE4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDM4KO1LLXoQBiFDm7SrcA4bU72SZy%2BaBNhF9O9PH9d2QhLCs1WzPbUimE5pRoM2SaOaC%2F9C7PLbe9oMOBBVkcEvGrXAlf2IODu0zWpUoi1Iddmis77cTjFYrRPkVHg6QESvFRLfPCx2gA7RH3qxpIaNaLih3nJLix35rdZ5kyK4o2R1nlGXmjYgsaxYNbPg0m4xlQLHgi%2B4yp8YEzyGamqdnEU6HitPeNdIn1xaSE4qnI1QwgHRqeAi7gsUkboK81uQy45k6HNKZLqEmiVkE9hff2rzjQgyv%2BNdaEpznHnnQLJi%2BLKwXwKOyl2hqCqRzjeDRnX2EbdwNqhH8bxwph5kvJGw5h77%2FHC90neV3sBEjKHS0ed2W5nl7FiGT3sUBwXgxil6K7zPr2xb9pDPoz00eLhs16wz38RhlVgwHDx5w66uZ2JDLOWuh88rINmBAp8A8IM26diaDuOx8gd6K6FR2LSHs30AFgcZWnTvJAaqbgc1F6XQ70nmE2ifCjSrRNNRq%2BhNTTdmgxN%2Ftw3fqWHMQdi8bl9TwGh%2FBbRn%2FoelD289EHwD7zlKq8naQkDXDSDNIU7vty%2BOjq1vVF9lGm1vfwH%2BKOaEmpMT7W%2F4cXVcPxQIWIq2A8QTCOSpNT0bATdtMEd5%2FTTUdXEExMM6Dor4GOqUBkzZbzME2kGAo0nLqsOek4Xda08yPz0Q4HbK52Rux6AZmEQFlI3ys%2FkdqsZYrScuZwoS0JHya2njPqRko%2FFdZJhezoR7T2%2BXEu3Nn9Kqlge08qZ9J4qeFYX06EIJZjfweJUXIVDJ4yNPKhH0HoV%2BVbSrmziNzt1DT3vznO2uJ15yOyfkEAZaBal%2BEdNCaTTi6HdU6vqbeTZSSXSRBhAdPNbraRPuI&X-Amz-Signature=1622ad23591c9862e83c5195fd89ad3e00655ca111e6302a69d261645ff5d5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
