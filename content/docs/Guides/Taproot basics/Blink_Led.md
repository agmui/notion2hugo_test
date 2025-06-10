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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZJ3IKY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQRT54OvQvenTEXmw6Qf6fVLaTgEGjAyUxVNQodCaefAiEAosySXdi1JIc%2Fu%2Fi2aE2ztKALE6YdBH0fy6dpkDVddTEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq67vBHr227aXHoTSrcA0qQksdC3EUESzt%2FNPDCQhtzNOurGbWFk1Mbw%2BcMNG1ivBmX0buF5pMCjvFA9X9C20d6S1tzYM3pjAAXzwGn%2BmOoi4%2FxdZJAdOsLU4DawEu1aRBBU2qHJRDjxVKREgBJdPn7rv3VjsvnUczxZJFQFCyCaFqc1%2FOGraCLrmgWf7LHtH15F54IuA29amTs1tTLmtS0EWxR033wtCYAXtbmyP5ZYQc8RRHJGFpltJTBhmsr13%2Bvfa6G7rBbJFxQPHoyraeoC8d%2BP55WvuhR2x8EhETstdN%2Fd8XWCFJ%2BvnmCwFkjPUbrB48U9Fyxcx%2FEoFxTg2cZ85lza%2Bb1tQF6WsEiVerwqdw4Be8JgnpNnv%2B0K97yb4XQaIx7c1%2BmB5VsEKEC%2F%2BCgvn7y5cHdS6BFvpnOka%2FxOiDuWuvS3sfbOZ%2FpkzfHDShZIkIrN6THH9t%2FgOeuGdm1EZUv9vFbR%2BI%2B6%2FSasVDqqc02UNRwCqo2XWOHEcBinhQZ4Km5WRDvL2j0kj%2BcdwKG%2FUWWW%2BsL8H6CAHXmYVpqM2ZJhj1wUkZlwxlqpxXUuv8ZEzAyqKTQ3dokwaEtkK2i4cZ9XKPW3gEIdnrCfA0%2BumEqWklHJyGQsq7bQBamr%2Fhg2O6tSNJLLGfpMK%2FWnsIGOqUBNK0f%2F7h292Jdnm%2FvmF57GeAvwhWvHTh6o18gDoUaZYXkUBCje2ukr51BI7tbWhdJBVD%2BLqocywdgboGFH600d7lG78vjYQVfC5j2K20%2Fi%2F4POAfbOH3W%2BK7je3pmj5ldsO05Qovyb4nLKY%2FhInXuU7vJ40%2BwbaQcOLIu0U6pYgduGbxxKyC8KSZh0p0bpWIXhMiv%2FMBN3clBYibpec6ld6IstWUl&X-Amz-Signature=9a2cd8c777d2fcbb98a3190a4880f32e474b9f74d12a9eca0ee2d12f47e103d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HBXRB4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxQ5znjYR9tU%2FSG8MajD3sWfgZzhr2Tdt287ZLSJnUIAiEAt%2B5Jm3mbxwn%2Fo08m2LaZx6dqHKgbLbDS6vCrnINeIEkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs67AMugnz0%2F0zvuyrcAxujhjXNJK2jnKxdGRZ0yMqEIvTSY1NBBP7G9vr%2FJ0YPb67HormqUn1ePJRuwZT2wU8ImAzCgUSeQ%2BBVemS7MsdpA%2FhVIxdiePx6cVRTDZpdASfethvpsj0lDgjDangsGbnOhKHES7fZP2TigyKxkqLsR5SQwdP%2B6dtTO2pE0jqu%2B%2BqAsNvAxtADeluLA1VQJGRIyjjJj6qRVMja8XKPFvO8QlHKPvKMQRPXQYJcqJU7YGcUJQ08b4P%2F9khSXQx6z%2BknqzmqNdWDLqYupEZx9uJsk4HNDzKbZzY7GO1DKFNKANouMzY7lPfPcbydDpcveOaBFOm6MVdFnGgmL%2FCUi0v5h%2B1JGIdEXiC74gL6s1tCumrRmcOLIpRkBpQ8HrbprE7waCBBv1f4irX24AIzDllPA4AuiRdmon3bonZHKitSPSBmUonsz7C3ckd7K6qsVoIWdudBI8RmJPlnoiIo8u7xQ7NI%2FcnSn7RHeRBeRjGZZn6Bv%2BLExlgXAdpgd4ujANsEIToLbpScBggiayOZPG8RHeUtkR4ylOxT1xlI%2BsyoQxRMF3CpFSOQsO605SgMln518x19mQMHDbqxDTqysfFghCww5iQIbx7%2FmuhQ%2B4ODUVIJ7%2BXspS7%2B2odOMInWnsIGOqUB%2FQcdYMirsBpkuNhCPt7%2FD8z3hT0TMxu%2FZVkK2i%2FXF1LYU%2FZoCBiK6V%2Fmv0xeeByW%2BDE%2BR%2Bs9x56R6AGkEIVo1z9CFEclq5KOWbhZ%2BBTLBdhj4DK8uuqoH2i73BMr%2Fb4sqyJ%2FgVKldsX89v3nU5jOILEc7PM3obmVVDhYpSQs7G6rFg%2FmamtjeH531dNjSj1U%2FKxkUgqwS%2BbGA2SyXR5fpI%2FhXZ9W&X-Amz-Signature=949601cf35c623733db2612b35cce2db77df1f19006b295ea874141a7ef6c9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
