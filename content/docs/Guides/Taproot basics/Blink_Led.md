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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZPKADZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbcdZ8WBBXxeufqY0en%2B7ZYycj%2FPAtuzUuBrnDpp8esAiAHqDs54kZpNyIUBZ6HBpvmimhtCcXNiV8XN3c8bugOOCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM4h3t8mAQYNV1oap5KtwDgIQMws5tYHnrN99cvwJ4LQSMoHqx%2Bb7TBusoXRj%2BWapUKe2vdrw4Z9h2pyOJ0gUZgSRNFMzYSUiEtcXmEuo%2FijVz2dYUJ%2BKYKH%2FBea6n6bGkccdlPuJG3yoXBoi7zpFlfKS3gb5QUjjWs7q1xvdAFVQ0YDz8I%2BAk0G5l%2FXXpKQURnJdhcva0NOVhokNzE%2BOXMYWL9l0x7oC5Pbqlv%2FuIjQvA1nhVONCF%2FfXo%2FB7IwPaNXSGj7Yr3BnzTHbjnB951StfsbgE%2FrGJGRFsSrJuRDicpJBnBe3iA51GvlVlz9lpLs13etycp%2B6zsektTVDD9ttPbrQMj7EvPK%2BMPau0fH58RRbTEKNHbO0MMMpjorWdaONvIvjzGsgMFja68M%2BViLK0Yp65XjhNVinRXFTjx%2BLGsWd68O%2B5NRT2yyKgOzddRQOGAnc0Mc3nUOkcJyPyrmP3AEZ4NlPHv5mV0tkqEmGABQv4uuJ%2FZXrX9zwa1ovMhPdOdAndEa2WR5L1zIbrexvxu8iuKsNEehB8Yk7Bo%2BcE%2F%2B%2FfhanPpYqdTO27kw66yGGYjAZlfMf8U56%2BJl%2F5%2FWui2pPnoa5GyvG8v7Tb4ES7cc6WMgLOGsP%2FjRwBeGa9qNlHr8QpNEzDJ50ow66PKvwY6pgFBtZkFIIQM4rlXrHuKb3F6Zya4Y9TbNFTeOACr2tUkVVXPFg6eaPdY5fTT7uR76EyIG4vxLdVzesKG4ay7JWO2r6d%2BrlQnBG8y3LKFsJSis2KbbYTbSzCY%2BX%2Fjqw6PIjiXjzNoFfJyVPBk6LMsjHDTkbvDt9782ucVJAyaqW9jtujzRdz2QF2VSXHJGwNez1EnwtnyhvUNm5A3qSbtXGxfBrl17HmT&X-Amz-Signature=aae2f01baec471734280051247e307ea325d7ce9a99d7d3c6f70d67a729b4f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LUILLZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVFzyNFNTu4MIJi%2BwmzVobCE%2F44Ekp4q7Yu1meIc5KjAiA%2FVYd2hY%2B93juu714%2FDFN1NhUmXwhnpm75fAxAeIDqxSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM4vTzA5XYRmq9HmiCKtwD03yNFoAc0Gtoj5QIQ7JIX4OCqU1gta8GHu68YlYMOQOC14LaKX8p8L%2FfVLd9mUcF%2B15E%2B75wQVLXd54gaACthGOW9bN2bj72AMxUPWEFyd4RXY0NZotdcpSNBHop01A8J%2BA38p8hMpktFhm%2BywIWy6VAbFGgTDE6HperrkAvJAGRHvkUTJvQ6rc3PqGHZLyNmBgI0ALfh2diEMJ2TkamvehD6cpV%2FfknnqexqQZFS4ALgl4CoQOvsKPNZk%2BHG9hxDIFTeVCk6mI8F79ibC0XziEJT5VXqzF%2BFre8AzHrVr%2FD%2FjK3hM5l%2Bt25nS1wm9TmXfBcfSRPXTaTKs%2FfN4Zh57Dp4NCBg1aWdYrKnExKCFjItdGqXIWxINoWAQQsK3hBvVRNGtEjJim138tbPLEwGl23ztQjQ3Jmjq4C4PgOkdw%2F%2Fnasvmudw6ffJH%2BXquc36TkHe16f%2BkSIoBXOgYzdzxMoHwRCMpRdqgkwmo3q2ZJUwt0G%2F%2Fb0ZyayUfBpuLiJxx0KUsl20OHomjQdA7zU8C5Z8k8RsOuCj44xR%2FWrBvjvqcL5BDnx6nrPXX%2Ft1EDUGvQY2tP3NzQNnbYY03GtJUSQmDldgp6VKLpLcJYsQ1nDjwfXJhLrJvVVciQwyp%2FKvwY6pgE2b%2Ft1iOGf580b1gpN6UUClGPz1Del6scGNHNWYzg98kB%2FM3bm8SXABTc4tGAEvd0zk4%2Baz6PWTjVNCbiTrFo6tAw%2FL3kz7Psx7WOWDv1vhVg9RkywsQM6W2sueUJVkdmD2Zpc3yXJB76Vs85IDYPJoPOkDfkjSomNdfPuVis%2BY%2B%2BICnCOi4T97shGaT0Ek6V9DPPMAvNz%2B7hXcKAjV4r6XjlD2QPI&X-Amz-Signature=f5a82739c4ed8b1ee7981a2db645d52f631eb9eec92c9d94b50e84f349975ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
