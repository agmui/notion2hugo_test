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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJUUBOF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDIq%2B4Irm2bt5IgkY33G844AGSUwacRZS9gc1q47XGkPwIhAPH1x2aKpLYl40PcKmpQt01%2BAkMsvAniRSPwec41uMS9Kv8DCBAQABoMNjM3NDIzMTgzODA1IgyrseoV1zCQkSy1hdcq3AP37mW5%2FXpFsdB23YYEKbS15Wcxynid2t0N1wi3BM6vcA3gGd0uMLL0X0BoyieEXdfmmDHuY6xFtl73ATP%2FrIQWJ69xtPxvdP2K2Ji9%2FIKhFDwkxvhEDa0B2WP%2BHvCjjzN4e7ChEFdcQSyXIPZRCXqSLRjtlIDo9YXPOAoD3eWdiRv36n4AGRbmEwz6Q5Yt%2F3kAWnSx1cSUVr%2F3PhrsOlRpEjXwUyh2C6cIaioT5AVqhmdnqHWHNZ1tn9vYFG17jQk0EeUMkJ1pcX0rvblyKLNqrUelZqEO6j1WD1GmRNb%2FMppPrty2CFdQI7kr%2BvN987qdR69vuKGQbVphEGAGeietiGB%2BVL6dILaUkC5Eg33TYgMEaiig9lrpjnlY%2BCEZASD2b2EW5JA4wJRSDjPsdRCQu1424qW4JWAUXYpg1Hz4yo3Vv1PEAgOF%2BYiJSNtFWjwI4vkXr7j5j2OtiToJiKO92pdkKblmeuo5S6rycgCd9n%2FLSER2a%2BYwtf%2BQxT%2Bo%2FRYKeH7yq3ReRnDaJxYZrBc5V7LPUvpF96qV4bmGAvM8wvu%2BY49thdfsGAJ4ZufNXmHIPgEqCJWAgXfvCM6J3Tv0o3dfJ2BbcwtXsnrUrUrutyAUmaB8QHa2ozVqSjC6kq%2FCBjqkAWY7vvElcYNX1XiqdGV1ImlT719n8IUXz5fE%2FeKcraFW0yUTKq9DNET%2Fd0HRbzqK1ypeSIvNJTwPeT5N7xUvFaPDaUo91NI8rjM5KKV5axJrXjcHGZisywkMX8mfST%2B%2B5Z%2F8GZSsa2r1l5gPk6SONWhPgVo4k9WX2OkEHXSOPSchCg2enMQZTKRXlN9Hs7QOE00pp9lSJ%2B8jmyMlkygnKBaorLZ2&X-Amz-Signature=2b327bde6c3ba5c9840241790e16fbccc079709e39669e9d812b2170670f8d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4KKDUI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFW0vMZMSz%2F1NAd%2F5qSswMB1kT0GZyqiPX9zvKBq1IdEAiBYbFkF79aJ7Qz304P2F4T7p47Tr%2FX7%2FP8NlgVc%2Bd65ASqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrFgBkWLiqMMv3TiKtwD%2FcdTSUknRFABl474RQjQFgQqUsPWtCTAlF4zvFkYVoWWV%2BQ3zjJp8zLQh3uiKEkKXYrnH9aYxgYdsNZeNLUbzdkrVPRxv3jKTVOV3AThGcgEJ1fPj4pYbKMjFOXiHfRZ%2Bht3G2kCIxx89w0BwmmCp%2F8ocN%2FVLzWbygLfCM08swn4jBLH6eK%2FmDgk0bhXlqzJVDEEOgss86eCNw8V3NVRHAxOjtdF1Yf3JsXczP6Sh7TCRHfFYhpzk1F2p6NlLbqe5Nfj2nzqBcWg05VeSddRXeGzJ%2BMh%2F0jeqOu2eTTmA4AucSw%2F79qxRncu4MMgNAJUJl4bLdP3j1aiKmbDWckXnEAQBCxH4z%2F3mZ27b%2FZGzaTGMt%2Ff%2F73JwDNyZgGMGmU3ryIGO1u1webKfjQbM8aZmV8xUucPNMVg5mD6cGO0e6YYrd7c9aSOHQ9QE1b4fGpF%2B6dzBHLE2iy1jM4Sqpc56EgLvSs1nPdDYEHrBLGtg2Kb4vh7kHOf0S6m0oLu86nZqO4Vte12MVJ8%2FW7%2FVBR9uO2AkWqdMSL9pnidHM%2FZkoIhnJQHKRpkhKN0RoXWYTO1tNfkA8hmEh0LGLRuLtns55ihcFbZiKGgtayC3O3Y5z%2Ba2eVj4LU4QPdy5tcwvMeuwgY6pgF6b9QWiAZ1Gc%2BaR%2FEXV%2Bsbs44AyjMsGB0GpKYrwqOAzL7vFBkmumoRCLyxQZRkyj7JjXQVBmJgXD1gyDIqGPGet59PFW0P2lzNuFiYNKB95ii3HrB9BNCQDQIE0LI6xMNXQ76ZkdWwC%2FoDNQTThwK4t8RZuWndw3bYPiJvNsKQDgiFq6UCKVCK%2Fhg6HM1sc%2BjvqppAzHYHU4d5fn%2F1Bv2TSHq6mdc4&X-Amz-Signature=947b8e573703de00d3275792274f7ecd0c40cf671b47e8c546bdf4313a837886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
