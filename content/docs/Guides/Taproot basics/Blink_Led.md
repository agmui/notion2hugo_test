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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R2CHHET%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC93b2RrTU3JWnL4CbagI6TodRzY9mYfafiLftvE2n2rAiAkTsd0391uf812zxCi5F2fuxGv3POB%2BnySn5Av%2Ba8zqCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr4qpLwt8A580gljXKtwDlu1%2FM5yWHD5i1FgkaZaTJ6iSq39lliai596Lgg9R7JKKOZH9HMSea5JaxYqNkVkJ2FYptCvnKWQByq5OWwpUZnlPLGuleHhD%2FeregRdK4hnxXKeUoNv1BqyNWSyj0aKKSpzK%2B%2B6zLVTjQgOmxqpyJejVTsNL%2FxDlgOMSE4wDMU59856hJGmXMps31lvaakMKIs5RnsOzN4QoliX8UqK%2BBMgYzno3ej1v78ThghtxuUbs9zRJoTIGOatDiAZKBRKlP96f8tmOIjFIQOxuLILzVl%2F12DIn4HchOmqEFZiA8UpYTpqxC3s3W5QMpxkQw13SCUzJYF2%2BokNOeN2bC4DVafK9MXSrs9PR8KzYEcJ686PJ34k247Mp6Q3c33c73bKh%2FUyA7nAmjnvaZB5Xmuxv67eClRbeM2sgQT%2BRo2DGf%2FA56WF%2F3TvQ8T%2BV72uDZLrafwsrEWFbkhiIos7Atz9HItdPNR7cibw%2B93XiTYbOBHwxiihs%2Frtm7MNgRKVLDwWNRK9n72y6a%2FN5f1fijy%2FMbOGTZvEMeGrhYvkr9Oqpg%2FS80%2BmsPvp4AreADFblrEKzGhSAreKIqrrwYB0J8L%2FooGJnCMG9%2F4sfdtc%2BBZxuJeTVua5I2KFbU5Yhe%2FMw6qaMwwY6pgF06AOAPO2uQ7vhx6Ohk9fp678qriQHsrUcGvN1yr6X0yzoiDSWFGddr4qWmYnD9WIskHRtYrUNAsFWe0C3H0pfFomT%2BpvXcF%2FqDAx4foiJrJp3PnGJeC6Y%2BCwY7zCkYwP%2FmNtGkxHd5PeKZ1SF2eGmqHJgpvm6dmDVt2vqBsNxzEl8nbKniMVX9%2FGhyI%2BNGz%2FKNeriXKwniuIHHWIyF%2FiRgSvJsJt8&X-Amz-Signature=92adced21b11b410645b0482391abcb9ae17372407065f09cdf42407c408fa4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCB3KUQS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOHpG%2BMoja%2FAsWovnj82xPltf%2FXCLNA1GGx0RJzoplXAiBgIcjfM0ovuXE35q4TNoN2Bka01Guo%2FmYdbDYoR76FoyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME5CYZeOw64xkmZMMKtwDnEHEpMJz4RGUOqJbotBOFiJGUaK7%2BiOXWm5%2FfS8AJpyOfOXFdtMOxbBY%2B%2FTQLOHGClSUWUqkD2%2FF3gqnDRJH0Q%2BY6%2BR%2FeI0dxjghEYoa59tKwVQ4F2doAjpIf9oDBxcPjJWBGaUb9mtbirbo%2FZ3DUb1Sp1%2BUc5cPnBylTkjcyIYWxyPZXF%2F3bpRQS1QbjU31ldki8doVRdoFLAGxoQNbltKVtQpL%2FzZQnUptmRZL0iclC2R16HWh6GG7%2BNweUO%2FmQhOWiTSTbxIn4al5jyxQHA3ko2hiSA9OLGClc3ztNz72c3iU0iHzFJFlDRWkrHTcTSdRLQUrG5bL28cc4RtP%2BoyRFmsBfIcFfLKzxfpgdK8kf4oofpEndZlL5%2BeLuDx1waxP7wjuxhy%2FtumMDmmYOOu1w%2FxDrkLzZ6%2Feh0eb265ITu7%2FAAON6k%2FCxsTHuoGUeqArvF4H4eGL2hQEM6Fe9INUhXnpz2fCPC8LpcfWcBbWPgn1Cmhj4xvdx7dQU%2B5DjmKozlUhz2l2i3huoXQSojlVf13Q56ihJZn1y9OgrE3CwkHlXoKxb0GqLh%2BzHGz9CgTpXsgEuOxdXow3oyeXUVJjNTEqYi6plOSLcY%2Bq5o8gvBt0txjDqn181WUwl6eMwwY6pgHV75MVVvdJ1okgAqFLYtl5KHw7dzljbDzuKb74LkgD8NcYf0xdj1u9ZVsAa5euoiJgw%2BTxD2z0GI%2B18c2GLg0KRA94NfHoHdq6URBHfFIFgR%2Fn%2BT3GeFrifIcErgoHWYlvJGqfB0v0PKhnnJpWTlOS1rUatlS9SH30mGhaF9QIEcOa3sDk7eNBo4csYJyqSYaMCYUbcvLLbtRix2P3fbUI%2FPTjYY7r&X-Amz-Signature=0aebf7605e0d6ca6b3592c05bc503cd56b265f94c483b6258997aa5c6e990a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
