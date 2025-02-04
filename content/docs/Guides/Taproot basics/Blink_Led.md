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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644STIO47%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC0McMh7umjbrq8DGZFeVcp0a3AwSOpUnIKGG%2F%2BPm4P9AIgC0%2FpaA1qpZmetN%2Ff%2F7mMm8Ul85%2FKDefSk8SAoJyvSuUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB6d12oGt%2Bn3rIkp%2FyrcA1lyjlrOtFXuKX%2B9mNYgRV1Ou1x0d3ScFNYy%2FVUmlHSOa2TsOrzCuhF3EMWiTI%2F0uRpC1qc96XPKSoNYilP5zKnewF8ZmLgeCUEohi6DlZ7%2B3w9aP6yMxuT2tDGKVs1bw848HssPPgaWcFxSfJb6IKX8g3WOSEXJmGRJpgxCOEallgi4RPSZr8cCTKLnZlJ%2Bv%2FOfE9SfnpzMvs6F7AAjgji%2FOvWn27J4shzwrO07xcC%2BIUx1kSpSCf7JnhsWxuR8pmDs4d8762%2FKrsKhZyh1%2FoqRFS25cu4BNqi2DX8igQizCOX37noTJxwveo6EB%2BoDGUShO1svvxnGhtJGVq5HDX83MBWMeNyIjoZEP3LTa3st3kXqyo0WP%2F0lV4Iz%2BBAU%2BqYLU9qyEAHoU6N%2Bshb93EFTUJu86OC6vVk7VD6vNM37qDo8PkUiM%2FYy1SmmojB%2B0Ti0BtS2LUjFhZRnZhH9%2BHNrzvFY6zF9zDYYy7Os%2FBobE95JsFs2EhxlzIhjoeWuf70Wu78BHL5KcqAK3jrPnSE9zq9p0C0QURbewpC9fNuwYSubWbvnXjebXqCe8sqPNOzcediFaMc%2B5LCnl6d5Xi8SA6bVAVERO92Tie%2Bi%2FJ0m44XuVY%2FENTUGmAl2MKKFib0GOqUBHGZF83GwK4ehRxIWsIf3V6aTIebJ8sjfyY0ciC%2FSeo8BmDjsbrkqu9ELKIiR%2BgymRjrw6tuC9LGYZbxbMDzmkRwc5GUdJlEk8SmmV7Y72iRQmyjwRxFqJkG7gBm4Jd2oL5DeJJhFgvY2LM3EkjwdFhAR%2FnZ6xEqQf5EUFdmOwe6SdXwCl2%2BKpk2ODkLpjGqyFBI0Cu4LP6LTFGQ3ydZldc71okHw&X-Amz-Signature=d55000ca4355b5b7a60dfc6df4a0df8b34808b5c0e5087e282282bab78146c09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5MGAL5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFd%2BKZzw%2FLu7iFQ7gaoj%2BD%2BX1aXZvZrVvg3ISYhKm3KeAiEAnZNTN0ucKJoXifRKmw8IH2IMCV%2F7drqznIuVkjAcImMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAH0V4cRtdGmdv0X9ircA0S1zIfHXhK7h10wzA5xHaNMc0Y8kbXRr8ctMVpsiAnZqYluINGQYskpW%2FeehisnHlM7%2Bf4BwqEt8oIn1gIssWWjt%2Bf%2B6GRDOVkHF6M8HNWDLuOMeechMiqhll8SbQVs06w9vlgP%2F%2FrUh7BZvkKmLVOQkvtwBaz%2BBLIXsFXG2CbuOAuAlADZwCJcm%2F83pw%2FK%2FhZKtRRKZoBNocdMLtqC6w26z0d86k3i3w3ZBouHZEG67AnWerex6j5qgUq7Umbz%2BTAdUwQWrJ8s6kYnJKuEvjZbmuZWV52rbotj%2FcTHCCkaCKlmnF8UwHGWw4yCjBLjLogwyhis8ynq7UpmgyuALvSHi84bG11WWLuzxO4HCBxwPjANTmm%2BqaVRH49ezPd5b%2BRASKlxvPqHUGcSe0AxShSvUADGGKbNVl0sUG6oN0Nnm9nYyZCZOT2bpBhYCvdNH3ebPjgDv5pz4%2Fl1VLP34grhBiiQDjVmmesOpV8HeqmiecPItZIMZba15lhkhYIyYaP%2FAcAebKEyyAIuWYBh9nPqierr%2FwLrR08j0U7HkAvQ0jl9t%2FrAGoVaihtWPn4XkMweJpg5ZQu%2BsVRxfN5dB9eRwEG2mLmFhtJnP5c1IpUQ%2FFIoqpzMFsz5C4dkMNOFib0GOqUB9kCQODaxC6QcskSfRfjWYJudySLs%2BO11pxjIWUdxHonV56x0FKNzzIuzqwGK8u5tnYn5T0I5ikacWzu%2FIhU2WEA5EfjCdkLaKBv%2Bmg1M5lamBKAxp9ZdyrqpBjRLAod41UeiV%2BLChZJyAr9T2KjIC0tsRbeaBT3%2BXYrj1c2V%2BHHPEquQelZsUxjIOEkfD8b2PVaBCwRn68mJzSYISgrKgki%2FNJxu&X-Amz-Signature=113032ee771d71ddb5b21cab58756898a2809a06cc045d0986207dc2caf095b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
