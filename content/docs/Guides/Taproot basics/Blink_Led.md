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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJAUSXA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHTUjGUwYm26QJaLtEMmwfWmSm586UHQ05UTgobQIcJPAiB4Ue6dc5n1S2BrB09i3vlP5vNpdXixdNiKnz0MrroSnCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdEP%2FPMUteqxjSTTKtwDJgnrv19WcWOjqUzxNyX66FRQtGCXXitFwRgDPQKEzh1c0e7obGhcbs8dXq2pqcBa9PU1q0pIvjG0jwZZwEUw45Vl2P%2FEcI1w3VMEYcBZqPc%2BFPN%2B3ra4F%2FNWbsw1LbTFXd2icAAk%2BWkEKwPrGL0fXyNPIrXUkehHFJipx%2Fg31Cb5wB0DBoIvmcQ4TLWKFbFHPP6KZ9i7yldPlfF25DPAd1NFj2liJ0iVPYhEOthQwW65N55vPckgyCROaxgpsxG%2BmtuBslSHYwzIIaC1DWTC2RVJf7mZXvpWFrmeJEdLBYWUnKkcEzzGgUjSMpJaPwMn3%2FWGO88XCY6AJCCqMgNEJ26lf%2Fn3oQNuEtqJQqPCrEfZlHKU2mr5ckLJnbsZqwbLRZDHB6WusU4%2BXPQNdcqjs1Eyp71MRntcOZv2gXTiv%2FSv4NOpq5%2FgXwxkrlcfaZ%2Ft1lxcqSXfxHLfOK3L6%2FEug0aSU45lz2QQXbmpV0VjgH%2FeyJdK0kGbteyu2y7dAvOQsugC%2BHfn2XUZGTf%2BVhzxmBI9ltbpHqJNVCTVN8P2abNlNZrE35k6RSRCitX1SjyAqGyXXQv%2FWJfkbnCAYns%2Bmhzdw4z%2Fuo2XPGQwH6ni713Q1%2FZIoSFiXmgCcgYwrYzlvwY6pgEdK6R9Il5FwHKwxx%2FmAjs6nHtxC8u%2BlgyJniyYV%2B%2FtfHWgD4xSVD949kf1LyKeQ8Ub6xMEZbtEIVI12sFXF541THCaQCpTQOG%2BLD31%2FfH9SO%2BoHcuuwApWHy%2B5E3o%2FgT5K2KhCQoo0DaLh2uE3jI8yt5T2b0wPWH1QEt9NueehtF3MLN%2FZ3oS8z7NevGk41QdPfFxgj0U0VrRVKTGdUKE8o9ostHJn&X-Amz-Signature=4eccb09b630780386f1400aa2b2e4064b253dc56149fcf1c42bd709c5d9251b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RRS4T4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGLP%2B0A6rUhYsvQrLdMVAxVlH2UeHwQFx0pX%2BJW8y9fcAiEAhjrb8XiJkFDT52L5dr84WEFOF2iH3wNjVEilsEFWB9IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8jpuQC96qZErD%2B5ircAyabfHftpH2OxnuDlwluBzfzfeIWvNpKJINcRctb3QaTEm53gwvCaoy1Xa4nShiA49AVxtKyYSfUAvsxwHOpy%2FtnvnIjV%2B2U10RETcta7NZ81iJUGcIPFMk4jqGmRb4JeiMC9RjNsaSbHisvVeZzX7D%2BZZ4aMIVwQ9GaiYTKXOueXe7Z4aceZViKIg5y%2Byih9%2FfFXJIzToyFRgwIS2KJm4dc%2BqHXtsXL8MVjN%2Fm949FdLPlHAz6YH2QdaDTtId5CF2mAuLjKTl7gIBBihcquJ9SedDE3GAqoNpF0Gl7y08YZaCsFNbAG7Bwjk6GM2smxJyrq1tYH%2B1im5FWfRK2nWHpDRqYmmNxQd92BtZAIsIxEjuzTRTw67TlGfBZv4VWV%2F9XVXxOajhY8JyfTSmyCsEi99v5HIU8o1FovlYR%2BKAowrtus65D7YsetSE%2FWr2QJTDho0pFxVeXLVYOHlTUldD7A2UciMYF1Ch2u%2BLybXm%2FWxKV1Fevm2R8g%2FfaI75VqRq4cDX2a7PVVSeuMDTDH1otTdBH03o4hdC7j2El%2FgR0tx7%2B8pr0HB6TWOznbKzrYqs5HJD%2B4CiSTLK3gSSRcuL12D6C6gnMNskADIOnlN%2B0N6kGqVIByMIwnshuuMPaM5b8GOqUBbj1zrugOMfd2btTzcDjFQdBjdFtXdrDpkpcyGrV7Us4dMZC55uWZLoCmr499ajT4XrrPvDF7pcon4fCGD0GMHVnvmbOhIUIqOBI%2BXy8O%2FI5DfdiYiFS5u4ZGhofNSz%2B1jRkRyFHnM6S8WRXiZqyIMyS0ytPMwN3xReh1P3WOMe4a2593BbcOM2bWhKlSIiB2pjVY16%2B0vXLtj601lXCYWL10qV%2FU&X-Amz-Signature=f31ac57f40e247fa9faa1a045e6d53c931b35a6cd2673661980e3f111d8f8157&X-Amz-SignedHeaders=host&x-id=GetObject)

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
