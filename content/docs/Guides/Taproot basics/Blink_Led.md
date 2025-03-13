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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHBXZCE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGW8mT%2FhYMKXL2c%2BRztu4tv%2BdSKEQawugtby2ROXHnF7AiAynoxcCdxlyLCNLEA3sNTiBZGieW9tMt0Y%2B0eBwFHtOSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTqJuL3puCWL9bwgSKtwDeeqIH4eTSGN6IZOuTV%2BVdh1q7Vy7ItkoNouH8XpB0ld5GUr7O7AYCMWKhXaUB%2F63f4d6sXZDJ9hjZPTpO3dNgAVHDcPv2gez%2BDZVXTCoz%2F4yDzdR78D8G46Cplq22SyPibdgQusOWq%2FTIzZJrPizI4xRW%2Fqw0Tba%2Fly8iuZFdv%2FV%2FUnV5MFGuWJ8qoLm%2Fo33y7WP%2FHKFk%2BpzxXfIwgAbS%2Bk8gq%2FTtIuS8JhotmP00x6uElLzHDtumLVyTMrNq1QC%2Bl6UejY5dwYY0h6KWpxYh6kIN1x9IvsQzw7VQG%2Fx9BrLXZDAzV8v5whUghd5ZcBSjcvtQkiq1umDWDgXKKp9lWHxxfkj0cm%2B7L1REE1mrGB%2Fy38e%2FPFVy8Vi33f%2Ftrb3hVZ%2FXwQzaD0hn0w%2BQJ4AW8Y95mh%2FcUuvT6VvDoeOS%2BTsjPEMjalCOi3OfyTMffFi8JuMlYaiUnV0Vc0k0Kw96LAch%2FqRbH65YAbFiGwFUeNMhS9jo6L%2BT2bNEvJgRsxvqdXMUmV02q%2FNi8kv2DRroTxr6Uke8tuyqrEK8nj%2FESgkSGMC%2Fx9MS4GavhV%2FKLANFxmyBBsnSzTrwh%2FFOXJwuXwvzgxm7UX2ipM8SkPkZHXKffahsWKiwNAG9y4w0Z3JvgY6pgGiqzkElauBTxOWsWFQzkwHoemfUuYyak3uXFxJGCnZ9jJmme2eqHN9YHcG13VY2XHZmAkqanbyFpVHh4soMww1i0Ck2hJhlNcw9c4ZaBzvvMIGBgpAJxbbdoANwfjLuqIh2rDx9n3kx2VPLUAS%2FtStdW5EHebKkonABmBFzqw1RpYerRZF1scIe8wqFaU5fFvFCrRUoMOSw42cAvvYZJd4e8EcP%2FGz&X-Amz-Signature=98155f21325b3a2276a91926a4eabbb8ad8868c6bb4c06e0859742c0a7f73b54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5FNBKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTryHBF5GLGqA0FHOc%2FBhAyaJ3%2F5UQugM2BkMV4Od1cAiBuRrIYtk3k4v5ESr9yy7xHnZQKt7iFU3y9pCnysITdsiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGIp8ZN3HgFeuG%2FkuKtwDRKyIym3qMVdvrnjhN%2BM4s1pqPXbdp2rDym29dJ1CfTXIAev%2FbxcHLuNuYolAS%2FmEjIknm3PiqlsmfcfWxl%2BZ5j0iHV9Tz05pD1mGM4Q8XOsJ4f96ML7ETucDvmCB77%2FNl9ggbi3absgpVwILjppGpjlli9Ewnha1E4MLw3%2BJwm0OwcvpeC%2FskaOMf3iWYaa9fWhkm7IQrSDLqh3lpKnrMHmK7oGUoOsYltQ3Sg58KCzXzhYBo%2F3jCsf0v5B2Znnc%2BdJ3ROdDy2CmD%2BEC1MhQlKVox1aztOw3D8BGaYtG78naCZ%2F6GpqdbI8banp%2BjukWiYgm0tf%2FI10aRhNV42pul46t0s3XYSuiqYOwqD34voy0AkGwIcPKB7DyiJ32Vo5tKlew2zDDEz0Zth1hLtLAwx01A%2B4Cb7g7b7E32znL4MhdJmiL0AuDpWzRQY2LrtgZXtBCaPK5%2Fpsz4krab75gEIaTlgo6opI0XUPkP9Mfpr%2FqoRCgPmyzO6r%2FQymblBH1k33jmFd8DchLN6%2Bk3Gri0pZ1okbJ5NKQs6jfREhvG3bVwvmXTXoz%2BTN2kd3yHQ0xf19k%2BCyADFePIOvUYwZqiA%2FuzxcEOD%2FOAP4i7axp5ctDPMdfK4DQ2yiHWWIwmp7JvgY6pgHy6Q%2FCVSe2Gq%2Fum5KhdjZ%2Bt%2BirozRt%2BuNpGeF7tLzozVNLW21P9pt2ok9rFIi2jug7ta3TXKiXtW3mEMETHMeVbG8EOjKdeLWIPYOItJxSHvONE4mBvljXRPFqvzCORn58d5dfL3D174IaLaK1Hs4s3cMssFasCDGb%2BqqWGpmFfQxaXqOzZRE0zS9apIVaTvY2dbHVEvF9%2B419UH8nzKuXzO4LkkRZ&X-Amz-Signature=48d4c2de186326c34f4c5bda9054c0d87efaa293e2dec527fa1b150365dc751b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
