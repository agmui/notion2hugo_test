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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAP2BAPY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCSmxqrn2CZIwSfruObq%2FuYo8iNtM066YNPfwyRFdhuiAIgRRV485ykKlC7RUDJPU7vFfEd%2ByW%2B29K3tWKOlWfLNWsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQgjeHz83j16ntGdircAwpE3uTzN8G99Mj9M8my%2Bq8N2YoIMhfsLLDJTXZjRWn%2B8Eo%2ByQa12mLUQKBE79EhsOnQbI046xV%2Bvrq0bv2O4k%2Bx2kM782ce2R8by1508%2Fydu8Y9o%2Fp0A7TPMgrddT6%2F8njladP6uiOON6%2FJIDm1bR5TOlkeCRXiXigLgKs2wzLQxpHovYpDb3dfcaMtxQNi1NaDxmguFMgs%2Bw3H5Px33WM30%2BInBqFl0nM5DwL2%2BPAhKndFP7CsT%2FX8AFFgUpuKc9vP0pon5Qyr%2BpxGvVkQd688%2BUOHCM4hl%2BvpZfO5R7zHVOi0vVbECir1GJRA8uE9R0w7%2Bg8KGbhF7MSNjVIfX6y4cnzMLwVNh5Q0ELL5o%2BWE44N3pMVLwGG34FETSQMblOIKMO3wbild8uFaopDW%2BRl6YCrJhR2NEIYCXQAxrIRl93EBX6bONJoybJmIQp%2Fu47tXwlxzjln2h6fhRjrXfyoBrkcq9JSnghEGn10FJuO9MLHCUOiv2WAd86GP6LUAFYoghYviywZVXy7i5%2FYmMcvN7yu9fOOGGBDHWMh%2FJ2YJTY04iUh%2BGcydsWsF2Ro%2FMrwkBenEyBFGURgXCx3GqqVcO8rn%2BZejII1StsDb%2F5ioHoTPvteGWPf24AvGMPHTycAGOqUBoe1QOEVe25xpzmEdpngfnkx78pMFPSzgAGFVlUaNfkPhwBwhGJ9JvVIqyoH8QB%2BuMGiutlZ0VG1XFzdGMvisxZBlAVsjKmJhEQID5y6Vjxx4aeMjysDRGNi38sB%2BXHVh33FSv6p20o%2BdDTITgHuR7rsnb%2BSo9P2LBt%2Fs8n5vhEW7odAh6mVOo1D4xHWpBpefaH1QBHacK3tTU48dEU6Q1UnQrJ6l&X-Amz-Signature=dd5269c70419f4b0aab98420b631ace26b8785dc0facbbf9a6a8b941a2ad6e38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2WZE6M%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCpmyP8ddVGQ%2BDs%2BAp5Jp1mKkgj8jEeUTUmShP0k192SwIhAItcpjLXB8B0BMi1EDovxXpsqtU2S1T5G6aAm9KVXCFXKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH%2FYYlBk1swj1%2BycUq3APOqnltUMv7Cj%2FBe9VYhMHjueratK6FcoKNdtOD2s7MwNRcQJpRJFRr2jaUFAqRexGQM4YM0MXBeNAzlXX5gRbBAe7gftBxIUbmYEnj%2BjsvueumvipLQpglum1NOebN3wqnWNizfuNFapj77C7rAZsqrIjwvvL1T6%2FHWaOmVgpn%2BrxeWwBZ6jUG6FU1DpoMa0qDUHX95BTHmcK7yXsz1JTwdTqM%2FJ%2Fy4W6Bg75xfmQQbkMDt9uZZsbfgwfjnLpeha%2BgY4sJKpJw6nvqaaot9Qqx7dsKQfknXx07xn7ipnSXJAC%2Fm9dVOUBklDPuN1e8lY1imfg%2FypMfEftaZ5q6BHE%2F6GdWNYd%2FSCP4cprzzHwbdqzz%2FmIImgKWmZ6uOtR3G8Xy9jxUkMvSvbzwL%2BQytOwKt65ITJNM0Gc7zYmA%2FcLYr3qTJe7wnippsXBlP%2BKZqrTi36zEYbjmNYpmewxwKUsfcI9yXQ01yYgPnHBk%2B%2FqJAqMya3kBIBDH1MSjK%2BmlUsRbD8arlPbKpmitwGqAADyotxhVwlLavrYvusI0qy%2FP%2B0YeYQMHeNrXuogzKKE4O6hz8iQeTn54HXbcC4%2FsryMJtWDlE8euAuCVCBize5nGABCQh0SwRLxBwj9VzjDX08nABjqkAZxehsR3IuOpa%2FHB6i8s9TYHQeQJBCPSGPx2mss0aH54U9d4WquyjT5nx7PUa1X08%2BnEDbhdhpWnZAAlz5nRx4KL1Yi5t5H5HOU%2FCEz1US0uoI78WrikpBCitYda9LQ0iPu8Q6l9nQnJQEuYN4M5Z1kYCbKkuTm3kkIOvP2l0J4DbKL5qKIwuFaXM1R82gJmCHyG4VP2iP4bPZTFEX%2FShoFnlL4n&X-Amz-Signature=7a74147aec3b1e86c87bb41638c82c82ae2c72acb773c23808505353350bbb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
