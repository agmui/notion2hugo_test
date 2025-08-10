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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIHTRJD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyVAkoea52k1U4n18DjpkXwEno%2B5RfTRFKgx1cWtIxfwIgE5aDE9Lf67z%2Bd6WcUsf88y9gbKlI2B7HKZt%2B936yv%2BIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYw88Q78PzTUfMsLircA5kbtkR1%2FfQe8WFMWyXAmncHWwMCZIdWWPKLvLoTJqTiOaRKvggSWsvlNVJOhU3mQDVjlqAWVgx1anb9SOPUPrv%2FghFHlUkmw%2BqniTAguySrr9XNrDpIoR%2BjMI3ZzpO2ATrHDmJ7lWZpDRduYV2cTIsU03dxp%2FyhUSwYyuNkZ3u0ItO8MYluLXzy9VuXedDkpL460dZNL1wMq33RoMtleIp3r1CltJw6776qJw9FhxdmORD%2FtInrsFONjyulCkeyw%2FiGED6bhrWe0Ip7C5bR10EFSD3MSmYEMZhI8CE6j6j0UjQRwr1cQ1KT7fqd9c%2FeSUc542lAeDKbbgYTwMNWd76lU9pvMtdJHjffLD53u2qjXuFA8e5KPayiy4UmHpCxrykgD7sYThxs8U5n2fbFGPgD3AlqdFrMoIreawlpfKBo6Kgf7oBvaA6XaR88PRpsjDyL5Dus82itF0Vg8qBS01X0McdHK4uvJVfHF%2FUue%2BAAS51c1m7xXO3djjPOFV4AMOPVgQHT0JvV93%2FN%2BDnik5Glf7api9AGsqUjDb0qRSQYRzd6Es7p0jDlBhBiKGpJad9jN%2FrS2pyqr11I0cVYZZsl2cuWfPSM0HrSCfOqCBhVtq1b37pQHo8zUIt3MK%2By38QGOqUBEvEdBJYcIGl5g6BxmQIah7FFwVwb2%2BlR0YjnTZMr5vqRbU77Ty%2BwnuB1%2BKbEBlrHuPAvSX1BrnH5Q2RwnmOi22xPkuw2Xc1oztuDrA5V4eZICTfTcbeSROnLLRDAW9DZZP1gLNwKoCQEi0w3K5aVKjcHV%2F6Av6x8uLzXjchv0SYAKBUbyB6nAlifryNA2fGj0c7VNoCflI9ZpSq%2Bvz4v00cTu%2Bqa&X-Amz-Signature=ebc59e9edbb3e649a53b698ae2b238a8d5b7973a8033e19e909cd5c3286cd46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMK5JSRY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh34NVyHGGnk9hPeHBsaq0rcQTL4tn82vnBIX4xdQZxAiEAyhVKi%2F5efL1QyU1ekxNuzzboidxDJAQaypXU7Z4VBo4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC3Gq4eH%2FozpUVA5ircAy0VawL%2FkXZcVWLoO1AKDftKj7aHwvxJCr41cVXqwgM27mQieuGMms8LFyW3%2FcfVhacicUw9UQDPhzwV7sYhdmZ1PVrXilQb1ieYWqQMuyX3wuGFpltTF7m%2F2M%2BLoKgYiAOKtcHWhFySC70wBp%2BocrXa5HqoV1LWMSeQSdQCjwgRQAr53C8FzUbSvHA94qQwVKOLY4mA4rFVBWNFLvxzoOMSLarrFYmXtoG4su9HbX%2BcxIuKv1q9NO2ZPpNwBeeqg3Bs39ig2jPU6txail6bdbITvz3kIrbW32T0i29McGAxn%2FZTwO%2BcQFcbU1dg56fajLNYGIC908rnygOMd5Gwpng9Q8E%2BYtY6QzwMj1KEe49kYFUD1%2FMwYUNWw3Qfc0Tc2Y8QsUbuphLIAE1VvzWaZQ4SHuijqhA0VzsOggxkWG4hDsV6G6QGzLDJcWYsXLPrmL%2BdHqJ%2B%2Fw%2ByMDkdJVO2gTkjiak3FWkbP1CzeFI1Ifz15cvSIunNpddW44J0bFzX8AAGAl0zvvCPFLEHeSNqDsJFFIpkVwIIC2K%2FHYvNCtVxMgsL3dS4ERGySg9CCoCjYkBVySKRS5bG7wKpPkzuJX5kS7xuJ2H4QsiA7xBXM%2F0zzZ4qtbum0w84szoGMKaz38QGOqUBFcZfRLHycow64RmhatAFjjl%2FEBUeDFAC7yLP58hS8rAsIx7WPd2Om%2B1hY%2FBGTBx8Py72%2BVLoXPKxfMlpSsT0apODcUmbsydaNekpz6yeOd8wJWlQS%2BgUQ76FDYi75vp2vty4G%2Bg0LwLgt98DkfWnX%2F2UT%2FVdXOVuhUOFvb1U2QYWpL9bgAoegIXMzalniH1X9ejpaPZuvxFTsBgbTyNxfnbzOe3V&X-Amz-Signature=3b20e229a4af6dcfe870b22bd2e46a76d0ec469782cc836741a461a0e4aa72a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
