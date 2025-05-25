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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ4IA2V%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvJRrvap5QUJzo26Fc5ICS%2F2GYrmxu5UJ%2BOvoQqMNnGgIgNQT8ObVymslmmc3u36s4zPF2W0Kn7KCi0TISKRYtIKIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIn8qqz41RaH0voxTCrcA%2BrfNzrECnkBpAnn%2F2nZ6KIuCqYpMMzpJnO8EYRcBrnLb%2FGDOz%2F8Z1LP1at1BxUeU8s06ao%2BvPcbaXoF1KNGJjRpFkL6NtsZ2yivzxUZDj0rtrRnu0WnkRtVtyUyDsj9rXbIN%2FnFC2Zp%2FJ9NpyWOBisT%2FwuM6%2FWVH5JsK54%2BhvueS4YtLzE1GASkWa2DFG9Kj7mMDhgAn9AgoRB%2B3qwoR0Sa4sgaoqRnmtqf0xYciYJ30mthQQ27PN8FYBOy5zRUwt6nPWRi1v6G%2BQvacsFyltZZWijOIa%2Fguyy5lpGiZKKOSUMhdPUGmwDBAGdgGF9FC7uvMCw1zlUmR%2FEByQJs%2FZt5YdorwJVtoQVtKsJaaRUzPR%2FMlfKzrjF7kf04HaTirvU6%2FxqkxTVINhA8Gz0FXjs1QUjMA6u%2BpIguJvGNMgwbPLLjUyx4wbKjEdwEyDeLLjgCu6Xq1GS8VG7lWNhsDXH1eDfQOEZ45VnVwZuR7a3h2SehO8W49Z%2FOrhm8qf2vdOG0LrFKn9IsFHUP13hBUBZie2HQ9tQZ4muHj2CL0ZopE9BadfNKHuxhmkHexxSRrP03IicijJLcuHcYyCYDVejvm3OKQ3Wp5UDnqVG4E03oZGtsC0%2Bz3yQivb%2FmMJe5ysEGOqUBhiHcWiJNs5laR0%2BCB3L3iHkmM%2BMwtmQqlElVcRMwEdnkybSFlVDiWYMTQ%2FDGgHgrtp94IEfF2mOKwalGvChPhy6W7o4I40mQTjGFkLx%2BrfngKrSyXYx6QwKtquqpWC7Y%2BtT8%2FIJ8HS%2BOMms6c6COSz%2BCCewjjydEg4NzwRcevPZ1NYazHw%2F0fohpA5zBRAWJkrDMLLxc25JOP9wLVxIz%2FnqYt33T&X-Amz-Signature=106e9746371bb5342604a79c9c2c1ff49bd9b7e92d44f595b23d35fffdf4284d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2EYSKB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCIDrGZx1xxRPiWjyibPPtdiQ%2BAiPuMqofRBAcYC6UndQIhAIqe74TQKyzM3NslYa4u5Ht%2FXkUxShUM5PnuzzfoZAklKv8DCCYQABoMNjM3NDIzMTgzODA1Igy5f%2F10OpdEFtpJxHEq3AMUBE65z18Q4pL2%2FCvQiTWiBJAz3vWPHqeFADF%2B98cL0w4fFTez1suzJzt3Cf5YHCcuehQIfzBxTAZRewZl2h1PTTDns8tqKBBX7XHUwm%2FuF0CeQbocHOYsDerBnOrPG1s9bH%2Bk0x7HQqP7naRYSmFQ5CeNo0SD6IX45wChXhmfKJjzF1fYsSAKaQPPVTq6B7UBFhw%2FjeJ9VZglnLCZ7%2BG3B7u2iw6Furdmin5CefNaZNjkNfrvHGpMRu%2B47NOJYUKoR7HIZjzAlxB6VmTAHe9%2FLDkbWBmZw6bQatkvISD4qd%2F5o35ibPLP22ZCdZbnBoa77M7Z4Nsd832Q22fF6WAsDN4dGqtpn20vhsByQXgx52fWLWsNlwgeAbpcDYqqDAqqO3S%2FvncKM%2B%2Bfh7DsPMFyph1%2FKxN5TM%2BoJy2M8xEpuRR79ek0pbqU0tKyqsbw168YdOhJNe3ThtUxZPM7ffz%2BClhNDFoTvVh586PMuka5HMxrqdTr2rJNh1JATUvWv4c3KwdXhCaNbQqHfO2JRhoYaRCv9Ibs5IVrgKYG9ofxuI%2FubOw09CbTTlnlOh0kqB9QAggysV7gJ0aeREFp1yhPOebTObWLLExCtn1PBR9OONLn08FhLt5Cz4CMEzDuuMrBBjqkAfWiYX8qCTjkRn1%2BsGUHHEXNnIdGrpAwTUS3TS0iiC9GpdbarVffB6JEu9nAlnhGHn0pgbaZ%2BA53aVI6%2BY%2FyDilleXIZeibuTfushCUs%2BIIj4MVlPH3Im%2BICrQA1WtAZg3jv8ONvwVgoKTqEe9dXx8wjFwRTi44YM%2ByZza8RHRTMMi7mfM0NvhVf3JRNvKeBZI9L6KV7ow%2F41CDwaIHbv7JyOjwh&X-Amz-Signature=8a91ac15ff31dcb97417eefe727d5055d775e608cb52decdc3c3a12e54c90108&X-Amz-SignedHeaders=host&x-id=GetObject)

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
