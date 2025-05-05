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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VIMFCF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjc0r1OYHbRXwqlM7C8ZzAlkpXEwXNdnkuFZg10InojgIgdKtWK0Egu9i4z6E0JqNMyDAGN3K0RzeLhr%2FdsVRawLQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEkYlrkEQ5Iuo8GHQSrcA9%2BrNx2%2FqK5qUY4OE6y2BLe2ux0RjGdvN82QMDKXT6Cb5kUbo5omAxb%2FkNqU%2BF0Zqfq1i5l6ZE%2FNXN%2F%2Ba%2F86X%2BJIPp%2FkhjILz%2BiqLFX9SAtlzpIke8zDziy8WuNONJ2m4EiWa%2FuauzN9nGsre%2FYsnsD0Iy1YeSjqd2Lhp3vFacz%2BDLLKJIu3iFsX4%2BD9coauwkoN%2BrPHWz3NZ5Sp2uEsbthlgkmoBVU1rEBxbrh%2BUYzECQsnVFWxDQNW9xK%2FnPzSnwGVTGVRmYq9jecWL7gbv1mR5AimJ8eUEQ6trwcSKBuTUvlbLQsEwfcX0gFCfVT41zHej8cWbouSU9Jy8UgegCqvUckMimeagWQTVob6cyJUuPUn%2FjPbNMzZ8hO7AFTXZxtw1vuAZIrBAEAf8qT8yVWAtzgfoUuWrJ5z11qszwH%2F1aEnFIigRHMRDZkVlgYezOEq8bzAAY0dazexL8S3Vr%2BG%2BTQ8Kyt9vUGZ1JW07OgKsZcacrh8SSLks86NdVveSIFrOFSOgFRuCvLKaOL2o1X8qU45my1ODkUnwoQiCoaim66ce2giKLOeKMvSu1nZDVumh3NLGlS0upeo6GWglIGg3O2XN38nn1tJy6zJyuSl7xOykNW1l%2F0y7FEyMPzM5MAGOqUBj2CRulqgpVsM3GTr8Ux4veZj5xLOPANSQy5dYj3Czg4%2FEwABLN46UD%2BWDeZ3wBo2bOrl4xZ8Kg5AnhawfbnVJKlge5usc%2Bd2ElBEPj2Z8Ug4sVd1kEfCjGUC%2FqNP9nBvkWfpKtMq%2FVYqzj4bR5%2Bus8aFE8jAeUFeaQUFmT6qU9JZs1zijUTwVsY0jXHQzGTJtxHariZsQAQ77ww2Q2PuJG%2F1Bkpl&X-Amz-Signature=73f888b9bd779dceedb6839312df79d86defdd1cd04a780def026d0c7a1ad5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3DRLZH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwBldcLsio%2BwrJJU%2BWoeApuPXtk29%2B4qtQlGO1RqfjIAiAH9g0OgoNnZL39U1EVePlLRyb0DyiU6ULynFgnxx9AaSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMd8Yw5%2Ftus5Dmc0fJKtwDsiVMxTG2sTIr%2B4Rv%2Fac94D5R7NiUaEEvc1%2BvCYxWM0VnzTduRz%2FNo5PIw74gXLZxFFdgV8t2QZcY8E17Q8Ch%2FI%2F88JsjsHyT50Xhd20rDvhSrCMVGojFljBmNMNwsXxDZW45AP7R17FvVrSjXvhiZu9MgCt3CchEfAtzWPj%2Fc%2BDYbOPZYw7OxZo1eSCRZTnq%2BNDzpwg48t7BZ134ChMoOG1i0ZO6sfiyRYfDLv89ereCTW0POjdNs1MqSNDJz3CjuML3J5bUhdgKTaRQI0fDLSwMqjMpPkaHpm1gf0fq8p30zXg9kzjwh%2F%2FRixorTmHYiRSqK03KxfFIayruXhu9MO0zB5NcPXFwfW2XC9bJZaRYHevWOmdidm57PPBBkBxzE%2BApXtlSr5MoeL7dKfVURDGhKhqII%2FC%2BroIeUlfEoOBhS6wgm860amO0Q95XmV9Jn6%2BbzYPSD3j9MiznBt4n3btBGJrPrhcn4ZhislNip1yiPU%2F9WlLm2p5cvfE1Rr3lk4NVcmPShAxWfl%2B3YgcKag%2FWUhEU7EPevLCERHVJex9Iw2olN9BAao2VsquWobxhpqwsaxqpmxi2upYMG6pWcWoeUbtKMFmdnANd9gw8OCCaYO7%2BWxpj3PrkXkYwwczkwAY6pgGPVqG1OL8gx1zlVo4HFcWf40T%2BDKfW%2FhwJ195m6mg0uOAuOGN95Tetr7w3cM66jhkmCBkTcfQRCF9wwO7mRbd7IT7%2FXUm%2BLgu7ML7TZT4kiwzvb%2BvbzKJX5JYXS5uFgtEQvIDuqf%2FHTYcY4cBJWXR1TcTAuejyhNYQdRYVhv5dX3IuLF3uNDk0RW64092qQ3ZAr452511L3p8H9CM%2FOPakMD8mFR6U&X-Amz-Signature=f89a1ef6ac67f6697eb0d9365024ec746b2b2d86fef727f2d0de0b0331f81070&X-Amz-SignedHeaders=host&x-id=GetObject)

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
