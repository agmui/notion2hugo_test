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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOM4XPY6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BfdpWZTKGRp00Iy6RM3kBpBzdnpWDRmfr8%2BLGX8ujSAIhALz1pHVH35eoz3B0IbcdgABkzqYdIz1w23KnUOHxHTL5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz76gPqDN%2Fghr9O5koq3AMZ9NyTwQE%2FUIVXCffoxLcwstTxP%2BRpClkfhDdi%2FaXYgGZqffWUb5AJ%2Fkbt0hM3hvCkQBw6Pgrm5KhgpDwLnrsezSTuox%2FZ1lfUg%2By71EO0ChETw4Hi1d0Ls2eMvh7eykx4IeYSZoY2bPPtdluIbENHvvfXqbkfDP7BspRYtG%2Ft%2Bu1ifbvgKoBHDUi%2FYWhgMDUBLQZ2lytQmxwP%2BJdScrGQrFuOvUP5BUxWPjKvaRcrwAoZOLSo1vQa%2Bqkp2ulxB8Ja9mFz0tgLdML0jrH5JX03UyvRLAWTviijoDmIr%2F%2BSlvKb7UOptqbgmVpjyUftAxfmQ%2BzarJFO7%2B4GmpE9qw5kyQwMS8WTu7O0TQwLu6lcQtdNFRGHhKhVMd%2FWi0N%2BOB58BxL8gTOR2qL0hDn341uml7uGs4RM9%2Fg%2FyBijsREOS7XCaGA6JxUWxDVX4MNGyRwneCgEh16FsTIehA8DDcvglklp85QeDR6AZHDrcuVQ3w2Ndje4tS9OkcQpN5Uy%2B3cg5t9Noi4qmV4XmAephJc3n6glGMLzGXgZzYqSbtWzpSLhcdRgdnG7UqwnlpL0ZAJQsYHPQxL0Zyszmk4cRwNBPg0phCPlFt6RTaNipQziMg58qNx15hF9b%2BpXeDDj34W%2FBjqkAe4P%2F22DtwOBBOAATozIGA3tBU%2FIh7nZqFHaGbGyoe91O8xRxwZtA8bipJfb1QMTOdm%2Bokbk3AgQP6m%2B8N4S8BtUMjOZi0jdbfgRLHsVA9fdhSPLYFbCjUDQM02zHUqTjg8uLgP4gBGBoV%2FHP6ddCySIEOjrsG65npTwDr45JfksZPclC%2FXaW1Wjd0meHhwkunfjw0hDov0eWw7XJL0Y0mn5awj4&X-Amz-Signature=680f8af1e2c77e197f62015f4229ff9c11618fd91de74fb885c6ab63e6cc3f34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLKPKL7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUhlzFqtbOm%2FoUGpDNC%2B6uJPB0NFzaZ6%2BPfqyPf%2F9tsQIgYl09xDfCSwqJtlkwLwISeHKWcI8z8rA2e2K28mRDiw0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd96SuI57QOy4edhSrcAwBEKwQbH77XgXgskWf1uxI15bCOizLx8jKTLD0oZCytshYui3otYajAq8yAtbn8L%2BPJJ7SnwNqJReB7UAIToxJPY%2BZCoy1YeoJeBHVwwUwNfTovB5Y18ubFh%2BFXoWprFf0ljUExO8VrA7f%2Fapnkavq1nVTWVAjPCA0spjLbBnyTiW6T1uXjrqqV5Cqrzoo6ShSUgknR5z51nsTuMvWmIuzJStCJn5SechteBMgaI9FGTwZsFEesynNCoaqcucEAp%2Bir%2FL8twWeetfY%2FcJRYtchvcr6PbVW1V5cs5ndrAORcKJf4EF32%2BmOqfs448KS5dWGNRGRJ7w%2BqgLWWrnU2L99J%2FSJCVRmfiJ5E92WyHl7I9w4sYCjmZNuATnOc2DRTuU5KmaoWdpUQgDJEe3ON3%2BZtwm1ZhxdOHbqq7Z99fWGsBqoHWiUpu4Z2ukjr3yH0o3g95tEY7ePOuxHnoWlHQfDWl8EO63YBZ8z77F4yrLmIEKrky%2BF38XwEzMtaBJWREqZ1FpslJCBzKryqIFqOSVxKlVX%2Bvvgof44F9ZksKCP4TsW9BTBQu4o1aUGATxlb50Flz5mdLVlj%2FMUe4Xrr8hR5hLje2iT%2F7H9t9O9it49MG4aVV1o5lMt5DCteMPnfhb8GOqUBxt%2BtBEfNW6Eat3oz%2Ft7vjNA%2FNQyHn2G3n7RrfcNseV4xUwyU3031Wvifk3iQRsqx2b%2FLUg4%2Fp5%2BnG8jXr6T2OlxEQ8hfShDEmln74DEOqNsIVhoJuF5EL2cApA%2FTYnyGiEiAUVTvkPLUBEs6mbUEp1KmX8FSX%2BqpJqTlyiPXOgZpJjaw%2FGUIvMSZwht4BFiROVbBf8LPvfmBFLfxDKQwmCKMfIEw&X-Amz-Signature=c63fa04893fe0a703c38d2f05f5f03c3379532ae9f30558b065b1c6ff1483c57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
