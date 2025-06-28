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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRG6EWDN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpWKI7DHHRtZljbYzEFZTqj7LukTw6rV%2F44MlsLeVcHQIgeKpr1IdrEChOqO6PlLCLfgdmYAqUKcN%2BchmPoy0Hk90qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKAcj%2FXEMc%2BdJZ1DyrcA4o96rlFNGHsgiXQGPSh%2F%2BFKoGnUAWWpH0ZKpJSrUKjUq%2BmsHKpSSQyBJRA0lIWut%2BUjkB2AMyyywwScXaISMO7vFlOmxoA5Cxj7jezWoEc1HthMOBjyg6AgJ1aGer4v2pcgmTzhitw9%2BTBay7Pu7SMZFj5t9Q71hvfSuEy1SPuqVDKs5V4PXxDfc2hFDYwa7akSN0YpLBmMCQkGdvNj1lRaI%2Bw06b1bmc6qDciUgXxHQMefn4awBPFZH1jZrJO3w0sDZFjNl4WtweujfTOjJDUjbhiy8hU8idVjj%2FL4ifKg4ZJGwIlQGtRTTE7GWPTDV%2FnkhgSa8nZ%2FQx2e0Mb1CVfMaEo%2F370Chp8%2BFmrQMr5h492pV516T1LP%2BpMxQUKh9PgTk7southe10P88i60qviQEMlC2UkmoU82DbQEnM2F5yCi9cuE3tmbWDgVJboVxsXv6uHULtpkhQ7WmZKP9j6pGihf66Q82M3M0Bh80havVYwQq38y0JRocznyq7bIrEjZIfxR9EojHK8xVuhCRUiiXHG2LdWaqlyT%2FevNQGXiCbHq%2F3xsqV378tNnhwDlfPsnGEZVep0pqMZ88%2Ba9CKuRrRD8565lntKYPXA9JIJj5J%2BgZbTVa%2ByWXi1LMJyQ%2F8IGOqUB2eZkFGFaCZjAJmlhTTVOObaojHu0JSeJzRNVCrdxHPiOSMVSOkXAyGeUQtnBcK4ANfUgC4GpbGrFtfjWY%2FpLxo05sxN13UDM3u9%2FJ9nx6zjjRSmO9N1l%2FVF2X%2BtAzKj1lXFtruSPFmaTK%2FoYZAB9DW4fHZit5KLDH%2BCVsfYN1vsm5%2F1Iq6jhoLe6lkAy7Cho%2F3dfGWCBYopNxBF7nNn9URK5oMVV&X-Amz-Signature=2a15b3107b317bdd850536646e417728be0df239aa78e193e206d8d80e04256d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZ3PCKN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICttgWnIWW1gJa%2B0IZy%2BjwXgAeW0Txu%2FdB4k1mUzwOuyAiEA4nANgFTckBSti3tOKKx7wG7qz7BwecJatLSSQUnyFaEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPdsowINUfKIafDuircA3113zXK%2FsRZORSktO33zUiDpqNGPRlFNt5AwCKLXADX%2FGAhYHVFUxnO8CbCbwztQPWnjU06oYn%2FeochFP%2F9ZBomlrGroIVR2oDKrmKOoz8v87j%2BACDU%2BSUpbMT4pkxlwDi4JgVEYs2bNoTmlPw2QT7FsK9MR7CjcRpWv76JUU9x3jMdAY3X15T0nfhkoDl%2BdGDvH3INCSEzLC%2FBjgPKAP80wJjfmZiUMDSwhhmcZVSju28VJgDIShdIeaXuYvuZ1e0WofJDmqwTM9rVJTNCRF1AzzbQy%2FiWj8tvYmxLRpV1I8usDyEcC2fcXnhhslrtRPQhqBRVg3xIG0IxY8mg9M5dfTDi2xquGccfEr%2Fp5suCly5uINzUEQSDsUoJYxQDdfFUOcew7lwwi1kyyYrB0HDuAovhiHsp4hwi20UMj5mvap80%2FReYUcVZu6qSlCKXzyK8QjCf9nkp9f771k3J7Eqio%2F%2FAmLUBKQ152r1jY%2BUbX5c%2B9vr7iYUz%2BcJutIooQmcc5M%2FUKDUctz2%2BfVRuzNiAqTkmNv12VIhmPREJmnmY7aW6P8Cjji1govgY2yRysQiSXUKMghzppvSySRgWJZVot5guouyksVnHGGcu6BYYQIld5ghazl5eRwpBMPWQ%2F8IGOqUBKr5FxYvSQ7Lwd9QGYulyYO1MEkdFp1vyukGMMfX%2B8TQLIAKExBOrDaEYEqf5FurQ3yO0vVEA4ebjNDW67Mj8iwD8B8%2BqGihJxQLB1LKSpju%2FVT7OzQ%2BMGL3nYXWuxDiMZvVQ8gsdiBhusc35F8xI7EMsNJPleaMvE5qWgIlJ412gzl6Nhc2y9TFWMJu60f22mAAcbLZQ6pGPdlJr5B9AA49%2B65v5&X-Amz-Signature=fbc2f12f46dc5f60b6180c8f14a382f6bebe86508f1b0330d3ce06dce99d0e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
