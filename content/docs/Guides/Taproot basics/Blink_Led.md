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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HKY3P5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmjtfzWsPyAt8J9w7sXRHOSEtAbgeHWp9A5eAx%2BcmwQIhAKUhgL5w0Y7vnSHCUJKVYwyKhoIhUnUHyGl4xrbDYkljKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqIBpjQuOwbQt1YOoq3AMWF7QRuHlnlflnAfD%2FC8aVGT97tktES5an6gNzY5uoDyUIbgrVstZ8y3h1vlIAzAeMK1qd9Ni40qcIftXqWOa7X4h181jYi69csZNkg21dS%2BOA%2Fh4ZAjOILvaWPsesSLu%2FvVKphNeXNq7EdmyH5DZbgeR%2FT1XyO2jNjI%2F5XAqARwlemKE5yEZkTjYwImoNIQS79fvaWXc6h2%2Fxvl0JyS20GVlPZclvRXWyVGe%2BqYHh%2F%2BZYYsfQFj76uAxYMQfYYH5ZLgwmyM744l4O0QKf%2FKRQJ0wBLnNit1mc8bQjt0a%2FAeTMcU25PT78HcBd8CtqDQsG90IjJD%2BZSpzP19cBBLVrUHsVThKXiexHSnPtnnpiOCdpZ9omeGvuShypjZB374jlIF6kOa1kFVNa%2BMNrspydTLzmYI%2BQDg%2FC8Re%2BkmOQL43U67Z1%2F90p%2Bz3cIu2tVVeX1BBZjHRn02DAKIv9ls93ASvKlYbfleLoI76vReobedW3hrVvGLAWyzF8Qk3qsYDMURDwI3uw%2FBzx7hbukaRS299bDyQ70qDlL2ioYcfe3lwbXQoq%2BORVz%2BFyr8sKUb7ytQZPcRYL%2BzH5Ei9HfRAWDXg2Q8KoZXnmXGYGuBpLKFvcShTJ7eMp5uWemzDWrPfABjqkAcFXnZQiiPXrFcOkXx%2FT5AMbmYc0Z2v3XI4BRc4glO5OB0KeJGCUQjroMGQHScWpxzjEj4TGNhuJPffsv0U58nbXfveVydOgowXiWTsuxEfOWwnLavUk2mDGk1zHk9IeOYQ3wmEBm5WAsi3hithQXdLfhUz%2BJDorpOROvEqlhK8ee6S4jvGFadmPGq64Laae6O93KMnh3PGEPHSt%2Bz7Yt2nPzDEt&X-Amz-Signature=8915e5c75543889492d946a6173ed9ae0602467e7cf2714d600046ef21f83c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5PKSMZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2F3nsiY7S%2Fb8%2Fb3rXosefK%2FYeTws0KoM8Gy1pcqx%2FoAIgS4UNslTg2VgYCTNjYIkarSLcoqq8ubbFKTdySzQGt1kqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkK7ACR%2F7z6xyYh3CrcA3vc3HI3IuacN%2FkKSYg4dQo8%2Bf5wqt%2BV8b0nqvv%2BGcOPrBtAv8FgbhfSdi3retbudMR%2F%2BvdJX8JhuoDM5CSz7Rc%2BUeMz%2F7CyAauWHYIOO2H7FQbkQ5CHKrRPv85iI%2F%2F1FilWTnwEKsFpVhoN6k34lYpGdOb9Ay31NBxackQo4iEvbzOHWaWtoOIzbT9fCjSGvNJA8dLci3Mv8cKGSdSeEGfgL1nCtkSHwqyBppzGV7X7HEPKjFv87p67JkC7thJWS%2FTKZjqbBQ5WpokP1Xnftl7Ggjy31gDsVwPK3%2BQvMK2xZbwCwRuYZGpjTKaA%2Fewx6rSTKT8C0e8sXzYiFuBwH6aiGyKevH8p1NmhwDs8pcIOXR7bYaP4nh8z9NWt8ksHI7kLaH8wm%2F%2BxRaWDo9uhIwZTZn%2BXV1gTUWEgFSzZsXt2bAlpvs%2B4pslUtamPzXySJ0e8jz4PqQyyGGqiTFNmoJ8B65rP4zX2yS0S%2FjdK1H%2BcvXgbKekEIcnSeLW%2BSVnar2L4YjZt7kcIeNG5fmP7AqSZtriyKdEHtpzzd4grygcZCrZldq9Oe%2BkZHwUsjK3PE%2FalNx5FS%2Fbeh5hjPGE00HY1JZ6tVWy%2BKWijz%2B4cJeVepjHnLdS4TK2TGINMMJes98AGOqUBUrrPNNe0ohFsTB0t%2B%2FtTGAnJMAf6XpB4640%2F5VxMaw1s1mjRFtIitYFmLKYuPEIq%2Bk2I07W7lhs26l6hprvXyE4xSZW32fvFYAssfHsPQmatH5yrdbL1UzpqPWnGQ9luHQnq3DcdGZky%2F5U5eBia79uvn5KCAe4PQCsCRe6tQu7jSufgkXPN46PwciOAbYZU%2BK7kT%2FUyjWGg7eTV2P1Rmz89IRgE&X-Amz-Signature=4a628ed469433fe4ba1a884cf8423f0bbb0ef805316478a99f1b6a709309b1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
