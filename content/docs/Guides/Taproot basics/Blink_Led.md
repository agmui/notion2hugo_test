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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RDU6TV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx36AqsptqT%2FI%2B%2FN7bdsi7ccnJMXnl3yTU3OoNpUwt1AIgONBc6Fd0TYBh2FVPAL0ox1nU4k%2Fy5tW6ZApkL3I9gecqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQu6z6xH9fDLMZoDSrcA%2FpoZrFqQ%2F2ExlT62zrIMsH1N3zqqwYSMls2yzBWLsaZoCpDpTGykERHgx5KVBMz9U%2FiGgB%2BXQWuEI2HKV%2B9x3qLi5UuHibTDIJpS8mH1%2BAZqspJeQvcnKcLL1WP88WgkGNMQ5L1seMbt%2FgCW9363r684%2FFr3TsUsaQgDaaf%2FoVTHBsTxbxyu3GrP53dIHr38oGLQYIfhBCnIgal2gwEOfrkqfMxoFLaHy5fkLqxJTy9tZVwiZ6zNhixdG3GE1BDSYWTEV6FB5wSxED%2FJygMtb5mo1iSmT8Vi00JFuCSfn%2FyCp3MwE%2FgywkZzDLpDXFP2gX4eGmrp7qDFflGEBId3xPWkiXWnpwTAojJuLOSqii3ljol%2BMGM2Lg9Ig%2FpG0E1AqDC51PSWf%2BldJtr7lz3%2BXqW%2FLmwCm8b4x4lRC3Vol9IdA7RlKeWefvOqifGlqosmeKtsuIOLdVY5LKZc3bZpwI7r6Jpjo35ifWWiKc0xYT9i4ejA5DLNCjcDNh389ALwHZC2x5wpy10SxDZPHafAdluMgBd3u5oVLB7uOim76%2Fl0HMu7HVXaeJFpl9oNGkSSU9ECRAFS%2BwcyhoBH7JftRruueBfMjjvh5y3TFdN84oypELNmswFrsx1rGYjMILI9sMGOqUB7b%2Fyc%2FVgZgo1ZegMGzDLOxq0fMUP7jN7nVk4CjpyyB3dX51qTT%2BmnPId4qqGTjjvsHZuRzacbirb8VCNks3og3UpOhxLyT%2BGOHULpPBa1i0Yvk7eO61GV1yTMpW%2BPnWdliHAcYU7fi6zoVoH%2FHT7HfwwbJ1mnzxNeXdxGWVbj1ANAbyxxvtmJzjf7xwfwE1e%2Flnv%2FVjPDihpAbj9QdY7vEAfY583&X-Amz-Signature=bea09a6adcdefefcb9df3fe2e497299bd5a2601e533b71a10b1574ae378445e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3SK4G7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkQGj9KTUVehqJPQO2h2SsO%2FvWyXjF23bSTTlu6WN%2FfAiB5mUdYLGAxqIriX8It4Q7cQzWZ3lpESMY38NmROSwPyiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZJ30qIoWKFrk9kzKtwDmrSwgFfkLRD5uYaVwSxIChm2EZInzubXnYsyYlXjtony5YLNDolmG225zcSloGzlvlM%2BrBciziIfKHcV4VKerpUPx354V4kGBkjdlEf2j41EbOvwzi026HB72NyuDgZgdfB%2F1dqfz6b%2BJban0GsvZ4F3Qx9sfuabee%2Fbuln8sphRUvJiBTBzpQXoM89AHhTMJnHiLdcttRl1E2Y2J2gnNl8DVOjDqDA4g9M6JojQrfX%2BwYt60YUDmfq%2BwvWraURIjUZbKccSRqGxvhTyBS1sJ9A%2B5b5%2BmLCNw%2B69GhBgb0cOVLfn1U%2Fqt4cYB8AYHPGZGkJfT6fTmmYVVjDucb8zC16LDtg20bixhvGD%2FDAcnR3f08C996uX0JkE5PFh0oyL%2BKo%2Ba%2Fw7vF0nCENcugWjDp4NIXCN1iLtKVgKzM06MNj6k5KwPv3YwHZ%2F35IIhiCBvVt7JoH2IoaNNqELc9DX8vsOOdhB3V9DA167y2HJRdg%2BCWaauqFjZu7QRDZP3kZrjRoco6ntEiNpDMgX6%2BT1hlOi%2Fagmb7xXZm4BdX%2BzDTO%2FYrhllbxQCnzQFyY2bVigRqwp9mvG9f07bTXq87mUMXGa99jh37iaVtH7EHpja03KYDelwhnB74%2Ft904wn8j2wwY6pgH7me3VVWJ4ra6GQhKF0acrYxg%2B7qoOS0f1k7uJso9d7CkQNPvOnwBGW0sGDi82p3K4T0dDcE17EVaY4GTd7HuA7H8YB1K7j%2F12Bxj1irlMI0iLZidFGdRYxWyG2Zc18brUOTXZT000kxWgi5%2Fa%2Fj3aXsLUi3tv5A%2BX78akmFkZhE8keDj9E6PZp%2FBpSITfJbssMBiDY9tHyZJKQGZ76zA%2FndrynlGb&X-Amz-Signature=fdb3006d0d5cc9b3027fe8bf506fc9b2b16da4a41d92bb1bfd3ed2c3f3382b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
