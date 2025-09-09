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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXQTMCY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGbUWPy%2B%2BLKE78M33GNSg0%2BWmtUpygfEd5szOXo5wu4%2BAiEA%2Bxm6d3Ve4lIQrOlAdmR9DaMQjbTVfPRwa3S5EcM9KXoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiJM43rWyR%2F6wkEGyrcA94N%2FWS7vZ0I6x2m3fbh6wRNvWtFgqeiD9xygQHbbx8TPhvbVAJPV%2BDqUz%2Fp1zp9AMu1e2LX2C4igQaj%2Fy6vCA2GiCB%2BxysG%2BxlkbNqQ0QM%2ByEG%2Bx2N3Y5v6kKnEeKdzPreJeZMN6WlEx19XjZDdePH%2BKu4hKdkVv1RVuhjjbWvntPW%2BtVfV5m9B5OAKaYmgx8yBhD2bT0oYaCUlGT9keGBwVwRxQFTjXMWatBilVJkjIir6wStcmgoWG4iEUwlIirBWuC0iZfmVLrEfm9eV4QUt63Rn3%2FEqDwYlAXZ80ce3fYqnsP%2B1qi%2BgMCl%2FEkiH621VZLazdL239%2BziBp53ytv4phYLZpnjBbr4LNSf12qSr1YopzfQ%2FsRVXBoAFKioibR2KfNkM0qBdDJL02XyaOK5l7lQFn8XQGJfxXXFFLq7bWYiQSP5%2BZ7U6EBIS8VCFmvPFiTEWgMaSw6Awv6kW09UK1gtnolhU945FcqA90T8OnJ3X5giCzoSzRXZCKwsWY7r29O3LUgvxMr6A1%2BQLX6e6PIR2AIzaiVz%2FtH%2BaG%2FY6cAvp2KBdI0vfw6ARkwP16aI7KtlkHweFyt83J8KiYU3sDWnshgPSeIVXyZRN69hpGc2s2kPQ%2B7iSeEKMNLy%2FcUGOqUBjXxXeVi30hbQwm3QJ8ZU%2FYqKrqAfC9VZR6Qyzc5jMPVV5nera3%2ByozEHH5T7Kp5SOX%2FXgmKt5ZjTQwQ%2FkhpnuBJxijanyZEJnxZ%2Bv%2F6YS9RkwvJAGXF2q9uibJmUIWAtR6VyODEdil2byfa4N1BO34VR5akXieVfYeJwRi76oYn7h6AzCxbNJUEnAFcubiiUzbP7E1DEc1wT4PSqI9B5gPoq0t2K&X-Amz-Signature=ba1c557a1a8c548ec3634b7f05b4ccf4d948a79093f5fb4d87213d5482b0f8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5JYBO47%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDuCNG0cQsfGEgrP4SIK4X91EHNdhaPCc%2F%2FpAbQAv%2Fc%2BQIhALOAgrrZiXiCqHuoIPHGYWnMg6iK5SmhbpR%2B2JZ9Bh46KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjf9q8%2FWYYqxzxt2Mq3APhFQbQqr5LPZYQL9BKobAagQhbHCcMWxJTz2sFA%2FQbr9FM%2F4eIpliCnZ0sHgu3bOwMB8t4WWrc4exVNu0gBSOkv81IpZuC4EOK5Jfg9QElrsnSlAXVoC1RHp4pYU70C5883Jd8EMFw4Q3P39aTnBW03B1MeriHcSabjbnm%2BergPRwtSw2GEIWboyPjJe4sIXAosrpeFgofz%2FkSw8Gxcm2pzHKUT80ABRIahddc%2BvvFWQwoAIfk3joUtY43MxPxs1X20EX2BVybVewDQxYRNn1mNcb6hWAfzv8FM6AL%2BRQBj1hz3Ins4g94MHF1M60Yckj1Wk6tnWu3jPI1%2FrqUJEmEBwPYS7XRXYtiNviwMbVXm2RM8oXpmLR9IR81dst6o1DjXAfI2eX3x8%2Fc10ekZGlKaJNRsrkAAkZhdExmN5NeRMro5qiQEfpRF%2Bgyrx%2FLyGOd0QA8hrCYsKUliXChZJ404wI2efKaG1Dl429Gztrb1ggiN%2F9xcyClie0CKcMioRNt%2BFsBRsGQh4FSTBAkeIqExQKmMvRrarGbJP%2FUc2BYfcuTfnaAObUWhq3W0luYblmxcwfK19vHZrUf5gxKeFT2zVSkqGo5JWqzhItZ8VFgBkPWyiDrvhSAY3ZymjC48v3FBjqkAVXiB7GTDfYvWWLY49ywi0HDRdbBXWtVQItkojgtYJqDnXS9kZAsz%2BxiFxZvtzguc46Sde%2Flrc2ovf4OtDRWGq2yi0JwvxFAfF9Fs4upzvQ6tPACnUFqCJwxXdsQFTKudYrXOLtGrjR87xsNm7iuplwe1jBIjxfrjqUM%2F%2Br245dwB9b4lzmQYtMsOITXGX8CSur%2BhzgGsCbSkuAZNcr6AtOIEj4l&X-Amz-Signature=ececba9f30cc1aa6b1262cc7047acd415e6a5e394fff4b5c22807b17d8646f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
