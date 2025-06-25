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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPTVHYE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB2yJjCfe9BxK1FnzzSHBGWM6AZcGXyC%2BaH9%2Bi%2B45JY7AiEA7xQ8gDjrpJ4QXcdiCPK5i7GMZ3FyVgORIMioxhI%2BJHQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHZh3DPSR5s4F1vn5yrcAzsYCDggNnTZKvDMCRjerh4vrx5kr5YbpEj6yOVxVTnjlv4JPHUiqH3%2F%2Fih0TvEHlfqy8fB%2B4jTpOh6tmb3AYGCYXJZNdt4DI6eNnqJ9YhTKX2MpbhANvi%2FWoFuPzmI7ZIC2PzLx77zpItuPmYkXnyh2ROpqwCr7Kvx4VVQus0fg7G8IWLjZB8LbgthU60EcCPhM%2FR83cOW9TMpdxezdyWGlk%2BBw8WolBmEqnYVurBREWsor0JRgTqEmjwAKk1Js53JJKwinZ0qObSo8u2gfzqE5Xe%2BlADxcN1ePJiTyAgrcVN%2FoYkqGYyvaT864NgDbYCqHnjBqF3p5zuj3K7pLcMbgC2thnLypRca1dRf%2BDROi4cX11mxsdK46izVFlPPYNCz8DzO3aYo1R9zgB8aq3aCOYxlk57ocDpXCdvNtulWvyxJJrx9jZ4Ca7yQoPxepdN639jf%2Bot50lo%2B5aZQrbHIlMdCrd4r2oibZq0RajR%2BM6nGLlPfOHdOYeIh7cJE3VzC%2BjPdXZPeZ0dUAvQO9FokRBpYrxGAoXizLOFSzAKNo%2Bd301n%2BrIDGgkk1gxvqWzVmEnbkrCG49rfNbWsoI%2BXaWqW6tYnNrvKswExoX1fjsRkxZYyCkypuTaO7hMPyP78IGOqUBj%2Be8nblAAHVPxX7XxDuw1ZElG2LO8IGyJ%2F1C3MccgxzluETICweGtezdigU%2B6UWyvH4dW%2FQQDa7ECMUkJZpPpNgN36%2FL7r6%2FGV4e4tx43ZSKeZya%2B4f%2FCpkUw3uBMHpN6r0dRsuWKKrHhYbO5k9mp5KusSYM%2FG%2BAV7Asgx1VU3NfOc5ruczqXpTljSuoh5dLZzTWiXd8bRo%2FPexv7ltzndxHJFRR&X-Amz-Signature=333cac2e3b60c4e7d35fae93bee474d4cee6c6890a1c7507f5ed5a7674f19943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEYCH3B%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQD9mw%2Byf8QnqIiidoHvd2qvrKCgrmi0vpfcaUrP1xGKvwIgT%2F6iqxppo3SjLHIHTAL%2BBtveip8fYh1tuFlbDIG31acq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMWX%2B%2Bfuv1f1rP1MpCrcAyYyc5wDecn2k%2F5HruJn3CsM2CSeYPVGHfBWuVBPZhGCzwlg%2BIBG927D%2B8dk0nugdJvatPWxQkBMvrU8L%2BtvBoPZS2SeYgK0OLUbbulU2SkChUwSoLEbkjnOo2I5BXD%2BddyPz8MKg73TJysufCDdmbpEZtX5cMHeDiZjWu%2B6mrE4Ua80SOqFZ%2By%2FuiQgdKauXxRMUOcVF6XRlTGK1kyoZSs7LZxrspmjLnfMHP4EnaXPJwqko2uKjZMzMc4cIP0P2%2F7BYcVzkgiF22m3%2BDUpLs8kk%2FHg4NCkF6mkm1TmuMHalUMadBtaV3LnNo97mOvy7pA%2FifB4A3PUAnoEsDrv5%2BtE%2Fl5VcVXRBKugWvcbe9vGkZSf%2B6LFKE5%2BwTZqg%2FXj678ucPnIHqWZi31Ro7vOrXI93lbvXX%2BjHoSca6oqqqxmrBb5FFFccqRjwOz%2Blbp7Lowyaj5kkqUGA9Sxg88ZcPoz8w1DrzxTye7GHVbSftSfmnDIgyCOGcTN6y3Iypnx3Fvi85%2FogtUB8EwIwwdXNL4i6hZN57fZh3k10O%2BmKwcrfonhuPm1sUeMiSEUbrIH5siTzFdeUfvuWvuBwqqbIUlipxfGCgETrrv6b7JSVJSsAWIhh0dqKvvn675YML2P78IGOqUBixV2VV8htDMfFIyciRvdkYiHEIGa9ETDVQZriq%2F2ewgqBdKiOf%2BsbHL%2BaY7mlkpJTh7%2FdVZE%2F7mspFbc3gGi3N18%2Bs5Ovd6mdqhhQ2b6yIUr2c1u1mdk0ZGFB55hxkhEheoisWJiwqVcpF82CQa95vV1snXtyamuJJ%2FdSFDeuZKEsPuAS2tAmIMtn5%2BMPDCKIm8k%2Bf1KKAQs7gr1ekOaQKWTU70p&X-Amz-Signature=fd8f4709cf4369975c03002e6f1b2af693daee88c6f061401182204511fedc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
