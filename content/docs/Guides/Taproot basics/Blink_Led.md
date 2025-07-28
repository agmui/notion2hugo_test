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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3EDTVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7YQjR86wARyg0ZJ5nGTPI2SBLevCirZgcFpEIW%2FomhAIhALcA%2F4t6ksjw11iYHy%2B0XKmn%2BA7R0e2QZpgcSSmKkgZlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVIzHhZu%2F0Y6bVlDAq3APEtnp2JYYggdOgCksSo76Zg95PSRbQxJX5YtK8glQ5OWlVmonoPpHf3VYYX8ea11dnJ8uvzdGazQtH4ftQwa326uaytPO0SQJp4sGGadF6uZJbVmGPbBifNNTej94OGzyhiHMlZVc4zklDlzqILx%2BSNi0O5Kv7wiYqHAt0qbuPIB%2BUZVrkYEMaM9r%2BbPEow2bIXcLbu87D0aeZ41mlXT6Tjg1E%2BgXUNREqSkcOVN%2FjD%2F3djzuqb4JvBG0rgqSwyql7LXuZWXEw0j01fTM3j8jJdQd1FFGunCRAID7ay02ucYuOn%2F21bp4%2FSmGw6ZQR8GOhb8d16sDufPyLdqXdGcKV9KJwghV4aqR795Ztph6P29YLm1gWx8tNiC2nK7HG1wgT1gzzQr0GOOhjfJblsnbJZNynaYYXlA5651JFuUr%2BAmRqrqXG7%2FTM7OQNIrcOSik6tBgvPpAvgGGlf3IY5VhSxhTVSxOkslkP2rzX3PkRW063kDwg5rrIJi4vfpyujZ9uJdMxcwfMms0yvJZdWTotSN42OxtICp%2BchypSRFXXh6972V%2BeMomzPcLWl8SiqnlnksFX4y7Iqy%2FJtU69sM0GZ1zK1gp7tSnC1INsZU4ElVwK0hK4hCWXeugHejCjj5zEBjqkAXDfzSMrvZ9z9o%2FaW%2BH8hYjTp5Qs13GASzJoCpJX%2B0nzchUsnn1dsZ%2BrojmzhmcBo5u%2F5iKsYhbnA0qF24VTDeMUI8n86K6UIWLpq8CjIDi9%2FT1NWE2BCKtzQbVPfCZu3gcCqCpb0qEmf2TELxjmjvsOUKPJHEnPK37HFJ9bWMqE7wJXkdfoi%2BlT3G56WG5rQuOrUT7209H%2FQF0eFjD2N0YFpmVF&X-Amz-Signature=8be40c234dca640426a855d5460e8e6fc5ca0647bea5cacb0fbe4f174f0a2cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROV5CV5D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBzdGe7wI%2BQv7b9Q0yuBcBWwB8oZM%2Bl5P2T0WuRg0MkaAiBUg6OxcK8g%2BOnH2HJiyY4ZGhm563ms%2B%2BinYZoMeC%2FCcSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcoPVzE6xZyeWAGw5KtwDdSRORh%2Fw%2BoP60vJjc6mAniMDHPwaViXyP7EEB7kn2QUe6DloJA4WRLGYX5AmK6xEV3kzE6sdOmIDLmhULQ9vqWUGoO6na61gHxa%2ByflfPPkyr9tGt2o0XExLtZaVy5hFgenkUStfu%2BO460wxbe1DVxQ45zY0XAhhiRDd2nbcfPQr7CWQwTN2XQSC0CiV9mm6sMvHWZHOc80ttvSIBELyD3aE%2FYDpYmKBfD7m07XksE2EjhATT03sJT95aax1b%2BupG5CCCOihWFwrOufn2f8Ezk8OQfcz9N2eMAEGvIjvhokcqqgDL0AYcyhNznZ4Hl0Eb%2FkHR18IpThwIegu%2BYkscDDY8xtRlH2evtzt4igXPGO2NXcFOfRxswitMvzaX73ZBLge6Adi5TEkeiwMSbbNaoJ6bKjTwI9oNeex9i6d7QAK9P5g%2FOkC4WMXmlhis4jYnxazhFdabh46bAfbbx2r7zdeNLC2MlVYzm8ekx4EG8XNuH6REiVxKvosTrSdZZtUfNNocSN6i5TmaJBcqS%2BFo4qSPlEQPuJoLKA%2FjqgriK%2Bacb6fw5T8pYOdeq9XXoxyahsyKP0Ua3r2E4yjEPI5w68T7pExxGSibyhnOQydB9HTs5WyMveBRYj3ac0w%2Fo%2BcxAY6pgHl7tBghTbcMH0%2B8iDA0puDhC7lSd6mKxy8Z5GPGaQS8deyMZ5l9qZ4HvTlXN8QdllhFlm97Ey76Ve8Yh8RjC%2Fli3ipIMcqFiVgv%2FOXaCbtapKa2VWr36lG%2BMHsih2uyl158PqXTCL4v%2FRASvmlCHctoDz24Qk5jEy2lSqiR4mbeAzL855hN4o7822HHS%2FOEw49GjCECnsBZ1psCzNgDRvVuvz4l5Q3&X-Amz-Signature=d306229c2ed444d2108aeb7e284f2e4f3954dbec1d5b672fc564cb691c2dbecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
