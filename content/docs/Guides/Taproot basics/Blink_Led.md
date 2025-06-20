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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBHOVPKC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkFVR%2FSXrIeX725EMWVv0SRgAR901uc6d9W0D%2Fn%2F7vwAiB4KTZdxMxL%2BLQOpHwkgPvfr6JEKsbTCZmbL0A%2Fh5bcfiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2B3d80sQZK0pYuu%2FKtwDh%2B41%2FAdg6XwkeH3skqmKINEusyWQtfCY1bZtUQSwURl%2BaPuJWOHFG7%2Fi8Vbrq18ATALnBzqyT9Ju3XwtdMSJj2EuYcqRq9OIV4YjaY6Wvcy3LogrnAK4I26iiDTg5nB3MZSV7%2B65522vN7nNUM5j5wB9DnxvnfB04Od0UeQ9DbiORddSLykTjKHDI%2BWkSs%2BquAnSUFCH2RRbR7Mz0Rh9aJzeR7Wa71ldz5uo6F1Zx5291JfFihTTZvU0k4JIc09nQ5xBvZLjj6uZO%2BCTXKUBzAlEKfJRmLsddRe%2FZbMU3c0rYA0jzV%2BEgWPZphfwp9zkjUnTtnS74%2FAAnZyIsWrB72WIXpELE4S0GbcXz%2BFgOuukNJHFOkzmXjkJAVZbZczvt1%2BqCln5RhR9v1NrEaiTf7GFAskD16ZLg5Oxh8UhAnZaz8I5Bm8zDVjG2Xp%2BPCraKwP5fBf8t8J6s5%2FmtLHk9Ev%2FBOTg2cvSuIueYkokPQgLX4rVXSCBYyHqAPNl0HIHg4Zql1qtmKVW%2BMkQtMcxTE0e4q5XNeEsZZOzx1GlAcIH0c36KssvHPDCbqkNrdPary%2FNtYFGAW7i2THG5P984F4OM2zavXuAPz0GNkGVlMgJxs5NDaGGHrqsQVcwv6TVwgY6pgFJmAzhhbhetUjB%2FrFHAyKCG8KuWqQMRrlHgCVKcNNTPpn8KLJUFwzAah7y9P6dgo2R2ROJ95WPqT%2FEMiFkoasa05eO3VBdRMD%2FPybTQRkolJnenzMDi%2BmW%2B9jC2ZATJVmhAxDjjLIBS%2FVbU%2BUq8DVMIUE57%2BN2WOYSqnFBhqLd06NiwOScdh8J8TH43jeeGbu%2FfsQfMY9ojd8ImQ8XyWsphnFVDf2J&X-Amz-Signature=ce4ac14db1eced0cd8ac97286f6e54ddab9d520fed73fb3d1965f10bfcad78fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOJUZEA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUFDSWE8QkplqsMJZ9ys8N%2FaDfQZJOPswHJE9TFdDnKQIhAKPPvc0P6S8Xijryxf%2BtVo9XcckHnranQMJjVz8%2B0Y3aKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhezU1f61UqV%2F%2FOHoq3APfegjRCPh5%2FCKWVuMAR37ZhEn9G%2FOrDRXGpXva50HMwC6cwuH0tM837bDLqxnXh%2FVY2k8p5KWsbUzEQheQYPablYo%2FAhSTEDg7VM%2Bkq6kbF1wlF8lf5bU2fe%2BkOuroccZncRu89RF4wKH%2F9WKVYoobyb3Xzi0o1xr2HX2OwZkijMVDmWZfC1weGyRc2Qrl5Am3z6t4pblh7sS0t9p%2BhUGt4Kl96F7lpn1IpzS3Qzrf2mTkGw%2FZvSqOVT8km2dyc6IxyhrSKbusXHNH1crG%2FbIAyU18IKGDjTEp8XyXxlPgFp9ZYmzv2AuVDU%2BkaH%2FrCcmVytnbwcEBDFxgHvn6s5a2wEr6l%2FSDQUqn57dfQ9cWOrcsch4%2FI9n3mAIUygwkkKuVeH6ry%2BL1GfR7MYquuegPwxgNedse2YhKKlwpc8zIsz%2FCxWhYlKy7YyOHNKaX8thWJ3LFFusKyhTuGpAVowPTwXbVJlH%2F8BH5rSW6IQ2jlzixIhB%2FTCMfpMoCqNv3bTpM5RhG8QH6qURcdACKRb9%2F8jatBemGv0Xc0yIwNrPMvCZt40Rk6VPaGdB08c86VPBoi%2FdDjvb3O8wg7GkuEb%2BWK19JLlPoixJ7yUVZqx5xZpZa6lib80K%2Fw4KTOTCGpNXCBjqkAVGAX5RaqxDgGxODGL4RzIIJSAo%2FuC1qs%2FWtVZNg3a7HwjSm%2FLNnB3UPeNzMJGqCOf93dbQJD1l9XirQOxTHea083Q6I9Jip4xT%2FV4M4xEjwfw8lXLet%2BBh5bcUPBT2NSPHw%2FcNw%2FJlLRhoYV7s883hvO2IempLhX1btZpiU6i2KLYVyB182dOy7UhExOo%2FcCr02ce7WQ6mp5F%2FAHT18PanQsuEL&X-Amz-Signature=053e136eb389c2455e5e36fe71edd62c62a1dc2223fb64f3c64977a06af777a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
