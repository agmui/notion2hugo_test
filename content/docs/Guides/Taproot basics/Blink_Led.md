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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UKQHSZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDeCuwz%2BtBMj4OzNaNtTzVb8NNw9PoxjgTeEC1z%2FKkYxAiEAi5BTl6%2FpXEig3X%2BKAeA5Em5Uy35uBtizs3hytaVSh%2F4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDN5SueKNHdtNb7j1PCrcA6zPRk3mEqMFmZNUaeW2feqtRlqhBhdgGATJJZNX80TyiBd7S4rG5MGX5ItnxEjOe1q1Q5s5p4c8Y4vaIpJCIpZLL0o1%2FX1AU59xevOKC6nUayjpzlngGrw9sEWxHlIszyXWpg8g2qrBTeFCBkwhp%2BYSb0ic7k%2FxEapUpAvcWHcT%2FfTIHOCbktv3GTeoW6PHEqFe0q50J%2FvPOBu8loUrnqRp0v1Wxa%2BJO%2FXXIJgYceJWeT6VcoV%2FO9omlQcRqLqGl8uC%2FRqTRON20XhSau%2BIMXWQzMn8Y%2BKbrQHRe93v3ocp%2Bhgofi1KO39QFhNtYhTRGwyE%2FVSLsDDeX2flYdzWHLw7dIkgasGewxKBpyPx6FT%2B8IBypZEjKm2PRGWvKRdtHQLo4nV9TcLDHsbhhizfAGSTxMSNgxlrazIYi5wE5KYKBWphURzUsljcg%2BXis5d8bIkUDNhcC5KaaMb9NVAs%2FgyNJAAyqUpfDt%2BvH2cdEDPjG0V7I60N%2F5wMEN%2FiktwHisfiQHXAIDK%2FEvUa%2Bmy1Sej6xg1EUAohvmt%2BU0v8oFUIaeMiyjz1eVAKC2mxsplh4RJfNDQTKyzNLup7xTKc%2F2oDZ5fLAhpd%2FV2DNo018zRIbIBoW%2FwHny9I064TMP%2F91sMGOqUBaScbC%2FDgXoxRywPGFSsjjE682E6vTeSLAJnMXH8CR6L6Y582tJXnMkTzPWfFBRtmCMGG6tD%2BkoBtfPnnuB8yOKSjGZedpePcDRgD9iB6C0od7uaR8bhnGPs24vemjGlIn7lbYpFaBV027%2ByX1K5cRZACC0oRLcViWxNzWtCsFCcxzrduMll4AXDgcXNtFlQknbwqPz7QkgKFf6pnBuIlCcCQh4Kg&X-Amz-Signature=50e557575d9117de703c1bed0615293c9e214418f8c6bafcc2056a2a831baccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTQIUM2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDyAcf%2BINttt0XRY%2FutZiHglsZSU0Z22F9JQC7liQEbrgIhAODrjJw7ol%2BnzMdEz23D6eL7W8QatqzykK1aHbxz33O1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwhEvYRJ4XaiSKImhYq3ANYFvFiebi9A6sZMX0Lnf3QBJ17JGndUT8u7Y8OCKy%2Fj55CTlX1Aw8doW9z3rNCU6Vwk0YXIRwbfX0t%2BZQ7%2Fpx0AspVLZeQZ9zBMvKNO%2BTRidN9U4RP%2BvvHhakNkPGnGcFghlDIQeIK4OvJmRiKp95VCygLAReK2cxn%2FRIDsmTue05im1srSBsSFsG9IAI3oAYTAVH3PzTz91EODLGwpqgdvjPPAahJyoIZtSX4hjvZFdWV5DUeH4emHyXIcSuEJAWWqSfiHPWZDtt5V9%2Bxdn7AwuJUaIRi8YPHq8u7jcO%2BzUPCWwlCFHWAhDYikPpnaEvWHmC%2FN5ClNeogw94Z4KJBDRIwvv70UvVfDRQlha%2F6A2mBdyY6xakqtHqprpeswVFLogCyzU%2BTcEAxn2wN4%2FecBgf22OwVd4JjBjyUu936rwy5FMZqC0A0wsN1mMmEqMNhMkDM94vOEf3vFJzANkupuuryuffVwgIk%2FWD0eX88ZRiKNMDHCdLRZlavyzn9zZ4Sxh1gUPsHBhydG9uMl%2BbOQhS6fsK7vq3fBN7AdKS8hVFRlZWQ4AhrzyPY0EVe6pTJLVTUCctsydTGrKYK%2BZNH40vTnv7Nznn8F3L68aoocUAOzF4A5sjkwLPcQzC%2B%2FdbDBjqkAYZEyf5iY9FHRHWWiuFo38qANJeHJoR%2BfN1Y866I9ELr2ToLZ2e4ibfo7BlL9nwj5RK7yYvCkhY%2FzTWojIuP4jYAh9oTUwdgw71t4e0e0DIvIma%2FmsIUm%2BWTFBA2hE1uQC3QY4twu0%2B11BSrGSunRUoaQQt0DylwIOy3u3HOe1p9uCQKtfrDujQeQhmGe%2FZknLDzige7CorFW%2BIZcSYRY920GZ3w&X-Amz-Signature=2cd7993ff324935ce7cdf6a9375ca960999c31bd7df0f35444ede5daf124a195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
