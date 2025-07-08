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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYOMK6H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe1tET8djcXW4rsy2dbXDMFPLMONhzI85aTBBo8KFv0QIgWJb0Nk9UfXQYO41jKSRkLt2LsgN%2FbZ0aZG3xZYFKwBMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnXfl6JvykHdLgeVSrcAzF08fodkn2SwfDOicANChNuwCmwJMIEWLF0RLVpP1hSjfz2nLg4kpIX4CgjIyMSnXZTHDw6OIl4pax7kK3iBAPPm76uU8r0BrkBWRvbDmxliBEqu7pBOA68VaQ%2BgXlbxJK8TyjJtUmU4LcXSeQFfjIR81yR4wnZU0BeznrpnYDdJCwp%2F6hi8kVQ0wTTbVmcDNKdZM5oundx%2FIKPi24W1Si8clYsDyX0zflPgWD8lfeV42vG03iSKYBhq3H1iSmVT1zTYntW6rZf9hiWZZYKxGI8WXkjoThXPX1bXvPVTlaDjYtARCmp1yKiCoHgnIxtEsHpe80UP2KY7%2Fvx%2BuOl0TBH6V0O9F%2Bu46BGcTWdH0gdvZ6mMgCLnLWbGyxuSANFlpGPwpLBPvsqCfR%2Bz0jC3aK9AzZREPja1kcgTf%2F0cKD6iUd7B%2BChXT82ZQ43QbgVyNcpxnI2d0N1M%2FJTyMr7XpLuChymJL%2FbUnO84qd2GqhX3kLt6LlBGD4GJ%2Fwk%2B0uOIBT1cl%2Fhu9%2BxhAbO3mJCyu3PpEXFba42OxOhVO8xgb%2F6wSOjoT2%2FdZ6rV6XWzZZClKT%2BJ567KsaxjGY0KybbZuVveU7llTlXw4PeoOBbKDE7jxnTZFMSXVWplFhvMP%2BttcMGOqUBLryM2vBWdGKVQV%2BbN9u8Vxo09yfdLR0yNci3W4b9MJ6IzZxifGfFLNKgd4hGjRIg8yUJptGvZBg7gurfj5ILhKYYsDqKIp3IkGYKZgc0HuaMqDgDDtLHfGT5qMLZX%2FTHhGE3zSJ%2F%2F0HoAQMxJvZiDgd%2B%2BwZ5BJ%2BeI5LRzw3O0Y6mcsOcddl8s1CZPNR15aTHAYjOmbVnC%2BPfVDwMfNkyrlYG5pvJ&X-Amz-Signature=bc1821e4b861e6def810f9320933ffed3ddb1f7aaad330b4567460a48c4d6803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEHWOGDF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKBt3SXIGapqwniTu1eWFNnTYt8K99MS6cCK%2F4u24nFAiEA4QdkmPVJkDuWzxTMhgZwteTTjSdZmOxuIaZ%2B7d7bZyUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIj1xPDgm43kpD22yrcA0A8S0ydC2zcSSf6HTu4MnB4BEbuGFId%2Fh33fJLnoFrP%2F1PrR48MC8LzCAttns%2BhseTL%2FYDpKsXStg4XY3cEI9wNkrJoEsyXlSbrNiRgWNzGdfLv5ocakH9e%2Bb%2BcqO8r3oRlPaw6q9AiyVP%2FyfzYVtaMQ%2Baey2n%2F3qWcjCDCKrV0%2B9I0bCdAx%2BzgOaKRdhLkGfFo8mMTWp69h8LD5HTkOSkFFyAlZoHhSbqfqrzM4%2FZ1EU0VwPdo5nWFdF6w%2FjQJkLuTXsr0mAg9kPIlaXeKQMx1WeNg18aDEDgjGdEdtq%2FxqEKSN0N9TePY7hPo4edG595%2FMU002Rks8EUOJ7KBheifbSuJmRiX4nA%2FyQGgQTk%2BZwnmtM%2FDtDIFjt%2F1zdZZt62NZZ%2BIiuBZ9sEbnspCx6%2B8ba71zSkRZ1KiV55s17wXFcjKfjZpxcewftf%2F5MtQf6ICwT2hyRRjJ2lhQgu0bsou35KoVi%2FIi3NTQhw9sudkqnyJ06EfA4JA0VNr33TM17cbliPqnyYMjHVJeVvYJZia7KSpI6j3SGoxEqc7rweh9XDCFuHYMBk%2FqfZ8%2BhsqradMrdDctejQHygUwaJZ8i5D8CKJnleUyPor6NFOjNa2xTHx7eQ9H8ouNhRJMKKvtcMGOqUBz%2Fv%2FWAKiaIlVtSYciR9dnvpJjBOa6xMKJd3a8Bzhd4NfxRI2vL9gn1vsWNUDZNmXqUBuPuXSQ2dwAYsB44sAiZjtWxmRuMBvQ8gSqhwqUZxaZuDj2Y%2FpHhFqiqzBRLWWW6uiXOr2S%2F0N%2Fmr1w2IKnBFuOozRoRbPTJ%2B2OPp3%2FbO5uoJkaXa%2BazC2xqshePfmgnbw2FEYwS3Sw7Xjn%2BbB3866jcbT&X-Amz-Signature=cffc61a2186558898467b742de75a5b5f67540b065efdf8fa95fc6468d70fb58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
