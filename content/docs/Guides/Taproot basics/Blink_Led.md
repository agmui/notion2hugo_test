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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH22PQIM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGeIXn4uRVZ2l%2BYACsWRiFxbHQiXNJWk4t5bGnGh%2FaUwIhALQ8%2F9W2LO0f0BeSjQm%2FmUsD9w3M%2FD7VQJ1eU36NJhwFKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpaWpnlG5em214nQkq3APOkNrpgwM6EXrlaeROj6OM6j1co6NBIigN1UKJigtgxqUWm2iPD0UIRjU3gOrMwLAlCC9rz7aPcK4a1nQSQ3TJcF5mmAjRdyEvcLJP2tPtMS2%2BMt3CKOC%2BK%2FJpzkVEFHyjxMPv4gdqx4eOjCaUtMEfg77vH8quvp%2B6Q1uCtQr0woW0HM6WShHf6nqA%2Fo9CAxDU78O0ZrCSytGGOB3YTfDZrmej6m91Bc3T2gw2ogZ3AtsnGinAY9PmUAUUo6KA3V3ItzyKdY33hwHkYVri6iSeNwHFiaVBdZTspSfB0ywtfK%2Fc29VExgiIDMDUsBopSqPw8CN9sPvK%2BoczIjwpgo4DouMmptEWKcLDCu7cJIOEe4zvdjWuLat2YOHlaovMdr8tjYo07haOEeao16eG3okdRpS07u43QFhpmS0maQfJfReKB44DrGMsT%2BbwHx2aegggg1TF6xgx2%2B5rm1O%2F6raubjB%2FkLzhvtu%2F%2B6PMgTNQ%2Bxm3xPlu5E0yKDZ7s%2FQkiBfBRH3H4moUYZ72fyKyqTJ5vse28oXrkAhjGPOYRiifWA65ToxH7fDG3ZM2tf1CFMF%2FWOrIPociJ00n8PhyaoLs2JmFMBWPxdKOv5RRH6snn28lOLPssbqwXEp20DDQp5XCBjqkATPPbKw8ubxqiOuWB944TdYt4xJt9GRX8Vl3FBaCrI48CeSLWHZVZZLREQ%2FB5obdGFCrLXplV3IHOIYlS9MmweNdumZWgHr%2B4bvkm%2BI%2FRKfntC3xpAx27pZOsM%2Fvi1XwNQCOX0Q%2FlvjQeCrvaeqlwz%2BuA8Qeu6vadtejVzQyiXfxlGQ2cYc9JADkQIGt5vJgLPkv7bRzwFMv1yeJsbT%2BltPMsEE9&X-Amz-Signature=d5603123542465ebbf09b4cefd557e53ec8b98c444a5f55ecdc7568220817ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L3MO6JI%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCigh99Xy5BlYU2GjsHoaSxb%2FDi%2FY18tAeQPrR1vB53rwIhAMZjqOjkR9DdyA71P0qvfedo3bAEb0CpxWamhhkjw7BcKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbUIJki8JLtHwYilwq3ANYoWvQp6S2X4mo8wAd8QnBMGCuuFolFKrgBid%2FJ7Lr5Ow6A3xwDc7nUaB2kvX5drcofniZ%2BaTeZZPd%2FKAcyPXYw2T3jBPbMBBNIqiufg09Hj7v1MfU3wIiPpsXGqNmZujpC7lH82HANQ3uZsTUNDUHCRgT5wLr4GpTtaEbEN9wSvpyhCTvHBCM730M4NkgshTLxPiL2scD0YZPe%2FM%2F4D14iKDLjgpAHBXNBhCcgiK%2BEK8ab2%2Bqd9UJcLBANohzdtQbtZfUz5prckACLNesDVjGNgTGn06sB3Xfui8E5FOM%2FeX3PRMJa4ZukR9iiRPWIPbqSkdTr%2B0LKrrWKjFZNFPx%2FU8Nzi%2BYDnE7cy9MEcAIo7aLyVHx74hs6%2B4cmJqF5vIxX2Id9UwN2d%2FEhWpvVa6LWaR5%2F%2F721zNzrQhbdP7cjBLh97eSxqsJlNIdms3Hml7P9yGEjrj87wR7aUhCE%2Fc9K6EfLdjtfeDWWllgvruN4ZQIqNTdhT2%2FSYUqvuiHHEtK7nLFxiac3BdbP8kbeZ8xbOpywKNL%2FDLRzfosjdv4BaMGpMEjPqGVKh8rEYfWZegpY6fFhTAhKSlTXW8sUKNcTH6Ay6tSp4wIEkZqN16bWZLoq1GPt2u11r3XgzCoppXCBjqkAROeEgYkrbPY94WzskbVE8ZvzL%2FTyCNxUtJ35zx04wY%2FS11P6xljX3uq3H%2FTf2ClJYUDc8MUYdcnZEdYOCIc8hgxpzExGhpRJZA4xRyU2Mandu8T1ZQILvD97seYB8%2BSn1x8ddra6Cf4ZENkCqU3Os6XRHOwRZhE2FI01tLJkapKTTVATpNOHwbWld8V3F6rbrNunf9wfqVZrqiszRut7c3klmvy&X-Amz-Signature=37335d4769bc581fb7f83304967fda097267947179cc48b526ae4e49e38fa87b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
