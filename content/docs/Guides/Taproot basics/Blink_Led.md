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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWE5IQUP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwRQpeOjJ6ErsCyWNSEUGU5zGcbQTtAxv1KW0gFGA7GAiBu5mFcGrPzTN4IddVB58XoidPZEHuGEr5ueq97Lpg61yqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLoav24zAwt4yiVwFKtwD%2FQU6Lz%2ByWIW7vwXGcAFZBWGHjaKcwW9z5z0C77v0pbm%2Bokqx%2B1cJ8EQKb3d3t0%2BWFSF3OMustJmMyLr0SKFPzfXNim4yy0TIId6vIFp3LwJxdEeDy%2BdA94eP3Ox93NSwWWYpdUOboph6YuPLMjMUiyF1BGqe%2BXZeXy7Ru0zfOVzAyheJtb%2FKI3hD%2FPMg6vQht9V56kqbHXQHavhKRAsSnrsyYKadBVFo0E0kl2KBaliDJ2214HugIReka6dt7iZsYcEQmZyFjM7IiEFUyVCrYNQMCUdWohq%2FhLcc5YOSyZbBT3b%2BHTTxoD6N15MXTUpu4ZFdb%2BL2wIykrM7Vk62IMTHP2toxU9oKm6buszY8wIMDLGAqtgSUbRleT2T8n5ntY1tnSKEmyKc%2FRO%2F8vswooXb4vMJjkzi3oVXD7Wt%2B2cDqTKvBarxgNgnOqxsPsuU0XPqFIwg4lEgTpzS8jZaI46BFbgWkfToVlDbAiuRAJdPJB%2Byumumfb0%2FWGbNuuGBZ4elAUy0DnlYXi5iE%2F58DmIFKl4rjWWwWJLPvL8uPWDToMNlG9UCCGnTy6t4Z04Y14mRqbvWmuzmrnBHf9JiNFRN2NBinsZA7D4UNgKYY2njZTjZEpQB2HvhgM6QwmKnFwwY6pgE38upvkJzSOA9Ip0tjcI9KzlFuOBBv1MpL831NrTCutaVklGeSwT%2FR8HWIgwMde3XruYoUrl6cpBm7F%2FXebFMGaD4zaLVq%2FJvwDHGA47DaAzp8Cr%2BCs0jX5lA62hrRiDa6yy%2FDIVtKryiLo4gtQBOkhuNyeb%2FFSqsBU%2BCWUqdWKE2WjxbSc1sC%2BKNtFSUDiszFsJ8ok9mhllWdN8jenpEnhUdniYlJ&X-Amz-Signature=981c80294097e1bd0c6f8c71a21e1646403be203e3f825fc2e39f193f8a94642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR7Y6P5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK6Dge8ZVLCyCW%2BzJHVliYf3J16NoNBagPr5nVN1%2BICAiB9psy%2FeExKFIj3Xh0kXVUvk3E%2FJf3Rn7hv9l8HHegX1CqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf32vg9%2BOLQaq0YUuKtwD5rfbEm%2BtI3lKODVEl%2BpTaP1FMH7SCtuMCjr7Z4cS3RZrUEi0dozMwg9pXwPOPq2DImuZVAGMDYSIT6h24ZcFYeCKF9c3TvHJQRmriwjBKv7mcUf%2BRQHf7ElCfn9KNcxH%2B%2Fhgk0xIfw%2FEPVbPlM68lwdyEK1uJWn4uzhUUqqcfXEpIrYZI9YSzqiQvL9kafzpUgfBqUmhyBU5VsZtx24%2FnsZqS62WzU6%2B8gFmici%2BfLANWdcL23O0lFrofpJjofkvYxBdOGRYnfv3MLptv84hwrxGy69q5u2CYa6ZbIOll%2B9AAOUMUQao8u%2FsNl%2F1ZBS6lUpoYbTVUbsxtFr2E6uiffXdIXPo%2BGIeQiD8xuvUIvrj0HBnhGH1g7YPAEQplPDmjnFAfmC4X9i%2FS4KsVG5x5HYFoRPiSIR%2BwJCTEpKEgsv62rCDw4ReS%2FYSNkKz1pixBTjJoqgyXr0zeM%2Fr6GNISKzi8AqfumMFp9uypZj7Ane3XETwZF34FRocm6Gd4GRK2to7Qh7iIl7HHdW2R7aACA02iT%2FIS7upYp3jf4snwLDPj6%2BPtfs5lDGE0WdtlwdNUz1z%2FqG3fNejr5Bo4AKMjW24yCpely8EaqG07KYehlt9aTTxnaW9tZERuZYw4qnFwwY6pgGGgZyPGyYYIDxzrmri9t%2FhfUCrCu4zRoB0DhCJcizliyK4WcKRhno6dQIm%2BNBis4CaKt7UyBfMmAC9LcLzr9lDgDdGv2qP6%2FCKJHIggFs1rOpwa8SgNxF3JsTAG9GkZH5YNMNZdUkfdzCvgt03j8jrppWZtd7j3GFJcD2tkCY4GVtuGj8ykSsvwmVB%2F79vZdSm53F7wCn3i8mhvyBHMr758c8ah6ss&X-Amz-Signature=4c92e7f63f05fdf7d0e9773777b881dc74c57ab586da63a36d03caadd7fd2d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
