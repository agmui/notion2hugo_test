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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCWV6RE5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FOO3ToQkUdkLY27W940Z8Tax%2F9CYHnXz0gH990D46wAiARxOcMfBsPCaXy1Fq%2BV%2BJzSia%2Bi3PdeZhYzt5gSan%2FACqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmvWDAQTzzPI1BschKtwDXl7LgsVykEMyGYX3Yb%2FUxqI05fDwTYnSPB5EqoY02ODYwxtV%2BHOQ1P2%2BspakT7Arkq9c1sg4mXxBH76bK7eBjjcqgpQsQAlVbCDUXVLvB8qM2oR8IYEpQlnbe8HsZ3IKBpoHW6BTsSCtlQvEvJhNN31aHw6OzmpjFIpWnPT%2B9WDAXzltcHo62inafyi0YKjb7VQet50fxNQJkzIJKJjyHrjgsDlB7ZYXGZ5ysEvAkYz4cw53uPB3dNnuAzVPIRWUDen00hPkHkNvURGCzz%2FV1qH7CK8ylguIx3CM6DTMme1eaSImr2xrrBBgLSEPcmpIfa%2FNMNp6AUZnuhth9H1aHa7RTNxhZ6W%2F1ZpvfwhTma%2FMnqEu34YuS8v3vEWhWWlrTKL7v%2Fa29R%2BUCtJQo%2BERLnnJv6Zy0MXAqkatPXaxJc1JqzlirmDFBglvpLgm9P5MB3AQMmxZGCBicLUJxYBuEZnNh1OMxxcVEfFH0K%2Fe4I0hT3llQ04xpOpjfa2biy5a0t8Jq77loUalKLmkZfVrP55vTmSRc8dR7zdwaXEh36aXQ1K2CdmAx%2B8WhZq%2FTP7pK8vxixpYgmgZOF4pegUC5vfNnhqiTFllNOnSYpI3ojm%2FWkuMxU5GL%2FuWS0AwjYaOwwY6pgGXDLBck68cbrKNYPSIY%2FYLrk%2FfwPZnBx8f5aJf15L05RaJRe4zAJWlQwdNXjoUzrNfStzN%2Fg50bT3WfORBHZErjugm9WL%2BYhl3J1O9f68rvJQX5rIQsT4ESt5CzgorFMsGvB%2B0umh08392rgS%2BJ9UGKGwIesxurq%2FRXTO57sg4d1ySWDtK4ZmZSqlqu0g%2FPQaS8emnKAH6mQC0HfjHjPrGsXFXdRfN&X-Amz-Signature=aeac5b54b9763c6a278bd6b9d211c632a5420ab053445bbd2ec9f30c030f7766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPVN2TZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSIzdmZKstDuGEeYSYcx2Le1BZJCaJKVAvumYiiVTCKgIhAOPYSxldaxm9JXRN7pZXfSrltsLvGqE7mnpi%2FVj90SZnKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYuZM5ZxBfs8RlJ4Yq3APL%2FkRwZi1W42GTOMqHXQKf96q7yFgC8TLVVKE8%2Fcygzf5MKfB5Agm05PRMniXCeCKBafq93575dN6is5Em5ebIvmDJyrYk160m0k4lVHFD2SNEMxjHiubvRnACCw2oDnm%2FAvCFTEmehFoH1EGNtlLt0wekAmVzda%2FLbloC2RmK5y15DiCQYK%2BSF3qmJJxjdRN9hrRq01HuxnPBktXvQO0zvNfGwFJnn1%2FzIrqYSTdtb76JGlgdirZ%2Bm7VNvBPT71TTJGR2meDTS0wZeq6MhycFm%2B3O4qHLFpvLtSD38kkzRLtRBsB6XiH1TQ9VnUR01wFvyXMQ0VN2ijV5Yk8CuedDXjSIiCKXYOJ5b4oyLzjllY%2FNHKvKpZDzIYVcU6mrtB5PHZOsbb8lSA9ToBhHxbTmxOeyj1PM2zJeVnBmuNrjS5InoiDA3h%2Bh9uacWfLuNV7V%2FwXNoaYEveQ%2FwxwD8fLVfcvNPv43858P%2BBqXQ4%2Bjb0TEp%2FD7YhCtxdkn3P5NSRFGA0NbT0XywYJEEx3mv2YAFqOiw74bL4NFUEiVcTWjtVi6tJsdB4DK1hR8sjsJGyA7LbYPVhPd1eGyVzM8P%2Fm5LdDuZ2DCpUR8uzEClTxVh%2B8IKal%2BNk7tELqEgTCstI7DBjqkAcKHQ%2FoRE%2F9Sd2UazqyFakNjlwymAwMTJPKJeP5rwoEzAFHCm0uOgfkA7B0DgfuOXpPqscR2PhHdIfFgd3TsdChSLNHEjBOA%2Ff8y6iLOc7eKGuBzHnDRKETNOoPMELZ9%2Fp9q2XT19eTCNVDObHDvlp8BGso2t%2FSzlNklWUEI9WBGEYM3b7eakbtxyDgtUDBS6rUeji%2B3PZfMo2qbjQ%2Fe7FAE1Fs2&X-Amz-Signature=ec1ab429c394831b0006b5fee9cd09e92d0659e6a17c49acbae5d8e5794b4d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
