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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYISIGJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDV4Kzuk7MwimWiokCKgXcypEPp2FYfe2LR50Hg4WSYNAIhAPtoVg3nVHi4R7HHlIgqqTHXX3vCWpMjvM8KsDxrTef9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlypEwhPPu64QxG%2B8q3ANAaV54BzQ5W4rnf%2BO0nbLt%2Bbg0VxAj1%2Fmer%2F6KiE2uxPDzBN8RusC07%2BVhWX6yvN7FX7YIz5S3Hj8enpd59HZgoS5I%2FCCTY5iNvUezFrjR6KoWaWPOQxUov9Jz%2Bvzp0UrlkjNGQkYmIw0IG4wBPRCkZ4RmPnrHnTT5PrisLoZ%2BMUiz8hcNl1hjZioDpyAOiXUxBazXT5CHT7yUKQpRgD7GLBxPvILvpIrhTa6nmGfJNFTvbM6B7f7BAfYfM2oE%2FtRPUOmLbwv7dOgqU2HjLYeRwZBvd5nbTEcJHigAyHEPVxbLYhEwUU9KVUnRnnPlaYutcY4UxGtEgHEZv%2FyA7YWKizMPNbYkr7J6aQUAC9ZPzm73GNCWd5Ov6gKT1Zcx3y%2FauXPbIeBratB4XWAm3IKRFFQ7OLwxTv4%2BBpOeXhvHoYK2CcyDFtFlD7pna59ioUhnsHnS4JlZcwdjXUWvjfViezL2UAEtuEQPm1oOU7NYwDTMkmt5Z5HtWq79J36Fvthji0zmm9Fi0p62EeNRYqI9wlEB%2BqjTPtZLhrIHzLh6DomXxRDVmSKTIANUsfQHkXA9DMFAOAXiPnf7uE4yfl%2F2L9CTUvTx%2BSOrhSNrNWs8B8VeRZvYIwW3ldYF9DDkuZrABjqkAYVnrwT9OjDUwaYf6GJ%2Fsejwh5ZJXtmRxswElCgzOx8uowonII32geRRK1Zc14Ln%2B66jXWUOT9KkHq4xmP4wM2EeXZGkOET1iOuKm2jwMlZBQok8cPPIKUTqMuUB%2Bb8RmUBX5txe1OUh0YE2YrAvPOLAG993UTa%2Fm6n5EDf6SNDZCBRH45B8HSmgmRuRVwkHECMffck%2BtnjYiRea0FB%2Bul9otluJ&X-Amz-Signature=a04071c4232614dca93af18f79d30ad75ee31be2644af1e58711245b302306c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTYHIXX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEnDWXgdevGh71WnOgAvZzmHtHzcYiJD%2FyvTj%2B2KetGUAiEAwXwRc%2FiBwy1WezTcu9Z0%2Bn7iFs58yF9alYr1rVyMEi0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRImqKpUN5ZzJK3ZSrcA0Quj0mScThZ4JAzIuBT9aAfs3c1tGy6RualfP9mwAhcMNTjzguwUS4NY6w64kE7DJ5XksYgWBtxdmX%2Biy8s3gt4gzv%2Bxa3X99exhR8cnTs2HdkK9CXEyR%2BBLWMoLmdSzLIhYUm2FKvgNs8k4%2Fk5a9lDq2kSFv5u%2FK8Px4WHri6Fsai%2FTSW4sY2rpQn17zsLBSleyJzDkJsET9FAjqe1eUsEXTAI1XpGGKxTwf2WCWrTI1OyLH0Yb9N7vbORwRUeaHiKxWjGt7lmBBlQWxN%2BtyVYUeQaIaXwSEekRZVBOyNx5RNdGSLcq80JRSmGlIwq%2Ff5Y%2FpcYyqyvXuUWyFGdpS%2BoKEgcqvSc4FhvUT6AGJiD8m%2BYSnqsZDVeBMW7J6chPya%2BHId3luIZcndqZ0sLr80SKzILxgzFCHial8hylCSHDfvYu3zRqogE0DfRWt446VucnqAHuLOfDN8G4iNJOZZF1lrAF6Wtm6tzL3TuzpW%2BJ99RBLC%2BXWK%2BEGOFplgkx7bXWJN22mc0MmhWBuLKr4mv8J3mc6kTVSNl%2B%2BEvkBpX4bHCTnixm%2F5K0DKVhkUtkr69Ktld3VHzuT8sj5w0u3YqimFvw3v1EEC02cXY7kpOdEUBosgsqd5HIZxqMNy5msAGOqUBbtR6mV5Qxn5swmYGh%2BkwAqpCHSSjhaqldK0CRGoEq%2FIuwWDJSgpWf3bFFAvbv%2FBMVUK8edzMOE0EviqrtoPoDgLNFsfpaBTZ3kfJgqC%2BJLjxh1ETO%2FoFWfBJQFzheyz%2BKa%2FeR%2BBklzGmc5Oe7Q0Zc9p8dd1LlcXpOY2hS5mDIyQZfbnXiNk6mXJkLx2iA3lf9es2dCDYje0FPeMsaTB72CsMQLvA&X-Amz-Signature=c4bd84c652a8d51bd550b24be2d52720295a4cbfa12d3bd9a8567022a29b5141&X-Amz-SignedHeaders=host&x-id=GetObject)

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
