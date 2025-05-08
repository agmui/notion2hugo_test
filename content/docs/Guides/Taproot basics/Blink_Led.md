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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCAP2TP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUPV%2BkrCFfy%2FfMbu6ah%2BwD6z2EYd2Cb5elX%2BM7U%2BXIHAiEAiMJwAWB4LVLWguCXq3Xvbefq3%2By2wrBP1vi7zZs5OKIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCnTaV6Amt5u%2BXOA0SrcA8pxR%2BVYxDsiLRNYlEa%2BoOs%2BiLCrf0sSyV0yL3s46JjpxfXbfqt8IH2rVw2Y8ucaVX%2FA5ZM8r0sRDFHZqxHPlhpXdhrScKzxsqODqhNRHkoA5%2B%2F7VnLY3jJ8i%2FtpoI9EDBfhYA%2Fjpum0NPEWZzxdLK1gF6erFi0hBxDdQ5nrAmm06CPMpx63L1IlTxqvQZ%2Fy348oIT8WzqssRafPsMJWCq1HYptqYTZURhoRvamPLyUp2xPV%2BhCQFb6f8FtTPj44ywGVHSUZkeTsvNJhs%2Bq0OJ5xvzZyvLlVcfUFDtTIAAC8VJkugI%2F1cFMj2Ea1Q07O37yyQcu0xTF3AUABLvh%2FAyC%2Fy3YekzjX2xK9RWgtaDyQsCPEVw1D1yIje8GIMgTi57kORE3d6%2BMYYQ8kna5hBV%2BSbAKnUSBwLa7Fm5jjKTyC22F1HbEMh8BCkg0kW4%2Bp%2Bghlx3bZANRHeufxnzled8JPNYaMACJ8WegnVyo36ms%2F6GqRaTvNygqQJ1VDWQOZdthSbMuxRGJXdarAfLbeaf1vzEHR7%2F8HxQzVlR1FsvzQzsIvHHzRD6Pomo%2FpUDr9jZj8St%2Fnx0nSD8ItP%2BDNwG890dys3W9k%2FU%2F3BUs6bzTPvsP2sQUPNb9y%2Fm7PMPPf8cAGOqUB67LQQ3HKZjY7uJ9e3BO2hnNH2IbmuX20a367o%2BNwJOnZYY3qf9wkBTcyyFoxWplDNrZKNqPajAsz5dZiFIOWPt0XUF99eDx0yY5p1kVOVjzx33ChG5ixFN4WjhHhi%2BMarWxVymHZ80zdFWyrxhLrxmfEj7RoUrMJp7Ba7z7Y5y47%2BrGNXQsyVjX4BTwfPCtq4D2DZTmx3rek0MtGpn04txXvWzhU&X-Amz-Signature=b929d4f33129ebbdc12679032df2890483b8cc3cd1a04aa5df7d913c58facd99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZTF3ZY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG1PpzkPzlRZgkEfBic3YHyXPRDIC%2FgMVpX7C4%2F2St8AiAPWK95n%2FZBHbnYu4A6Wq7un%2BOcwlAUFP1CUkoMEF7Eyir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM8Y2sTc20DI%2B9t3zrKtwDKJDYxGkm6N5%2BTjqEKVfPt0JJSSkv%2BcJ6AYXA6kpJPB3X5iVhhotzyxdgb41CPMqFqshDgAZE6vUpOUreA1XgM2cNtutJPBtZ3XGK%2BKUCL%2B4Nk7dX9qh5enWpJevDpK%2BrRAcEfnJIZVmSC6K%2Fv0skNqiIkTwx0KRfDWu6iWTvnoU%2BTM4N70Y4JHG6H6%2BRlL8MsV3xFQRJvXH%2FBSK3BboRMfi2O1LN3QylAM0oCRTpt%2FgKg%2ByX1wqTtPLYxTCIy3I%2BKXCrXX6vvHZgRz%2Fyp1lg2bCtu7ZYgEQXM2C1rU8XNr1MSqUGbQ2TLM5ALbZekIYpswHLWZyrHMlQNyrz5EfTaezebSOC2hY%2F9OYpnNjxqlD8LcOj78%2BDSo1UTgHPliPncMAaTXyNh%2FD8egeQWnIrbZyNgxAVcpEGxYudwdXFplDKhTHmutHlgBdQ3a2d3MVlb8u0OX3Knln4r%2FCgk8HFo8qMIQG7T2i6%2FR2qaRucaOEaIQPVYA8FjCpHWvYOfKpZ9OX3VEH1I3Z4UP5%2FsXbEMpRJy7Gbv2UTzid6Qc42J0iAbv8NTGI%2Bm0DSAbCx23XPPCJL0D1%2BiP%2BL3C03MHD1zddVNwRxq9bO6UlR8%2BCYQ8yqBjhkDafIqPB61aMw2t%2FxwAY6pgGAdpBbLD7Id3J4Q9mzV0rmYB5c7Y64LQCZyRSCWwXBboyjf3V3tVFRx6p3k3QUehdyT9ovkYzbsayCMDw0%2BuNErC8j%2BnjdrVuZvaedgocbIzs2LNnfSTmgrnYl%2FRwAuvPBkM5t4y9AvTt%2BWMvSkdyoSFHF7jPQsJeg60RJQz29h60%2FOWfd0PIMbs32TumJLJrYS5vEaECpH7MAGqFfKGzbiOciMvC4&X-Amz-Signature=a039c19a1a18e6715ac12a6c4f885ae1f495f171786d1ba681a16f88846f55d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
