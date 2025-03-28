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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SJAV5TR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFyhHHAwS0szQmu%2FQUMEXRt%2Fw2EUlQo%2BDQg0%2FK%2Bv9DngIgaNvZKrIXtZQ0qBNQAod7cLRXA%2BiJ%2F0iEYbmfmOeMAOUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPrjXE5M%2FF5y0NGLayrcAz9ikHLAKrx8RU7nHejOPcyA2NBYW%2FNnXCWjmnQqYrzfOPPGhJ6Cl4081Y0ody6a8oPA40inh%2BpMDcuarFPKXO6i%2FGip%2B%2BwQhJtCjR8eBL5wrT6Itow5Bt2lVsBOCX60izWzFQF3rrrbim8BA4F3O6FxYk51u03Da7REV9Fq1SQuNhHI3XLwdTytZ2fl%2B7XWAvwhqggDulzL36R0JWd8Pu111eJcrskRzj1Yi1nLacwqwBLJByamTJD1GwRfRemXWlx9rFj7JdtbTFfmvEI76Iy3Be5GXfaxMP86ghTzQBYIiXbvvwvv7J25KjtXPVQDtWy7Bv%2FnKZlTMHKPgOmxarlgIW2fM282zBU0cALAwXujWbPfls0L4HNwoZBLW0MHVF2Yd01gZa2dKImniKxi2KdT99AAxgoeb2SJULxWwBlmFAkoxCIo1aD36qU4Gim9oqmOgRK07mAye6b89WfNPEqXzYJjZlEZQPLWmMr%2F9U%2BKnfEuS3Ta5Jm5tJyB68HiJ7tQSNLHvTFsrYXB6Z4Us38Z5PeSuyc6Lzi9Ke%2BXSONllNm3oPU8%2FwCTLk05uNEFm8QD%2ByApk20ljXhWj74fCPEbFa3tJnwhozoa1NuN%2F5xYOX4qC0EAuluSO7MFMP6Im78GOqUBTDj6uKkpXjz7EN15oY7WjQw5MuG0aZcRmbgV%2FjdSgjC8TamHnKMdMn6Vx%2BMx9qpNB23WrtOEJL8g7jaNj8PvORStnIq6oyAKNqhoL%2BPSj7YpiffqWNRERr7hiDGupmGP38wHs6QJ87tbLOPfeKW0m31dRyGrnmoBA12MFTta8IGYfSPZKYDlwFuxa%2FbZuWxnlkBScHlps9%2FoAbss%2B5N0tnsWuK1x&X-Amz-Signature=08a928845ff363cc12f67096b1770cb0a48d76cb244c96b4df0f8ba8e39ede38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MX2MC2A%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqneeG0oObg73CgeWicCfpt4IE7SvH%2BdYP1z15JZWz4AiEAyvP7v0x8TGYGVuRHVQ7ZrUSfzGA%2BOhdSjE95ZW1ctlUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNbm1jW5WhWwu4b7CrcA6yy%2F7YOrHSgdCrJ9okVg%2BY1loPyBj3VNc71jGSzvVfZ4Vx3vbAyv%2BHItcD722s2009Nl%2BAAnWMTmKtXAtNtUsNUdKA43%2BUb%2BKfMniKm7RbtpveRefprFuewztUuqTixJuCsJFYNNAQwxKPD1cY%2BK9FMaixhPLiBQaDvqDVOfJgHeQDy535UhCG5sO9T8VRgjlrktVi4rTBDoyVqtyzZVPyuYXYQ4fCicC%2BxBiUGUoiMo12iLQJa%2BC66zTV%2BrHXjUwdfYbXhpJoZa0yDRAeCm7HCYD%2FdV2NvZDjc0KsEYctVoQ1dkVvkgKbhr%2Bu8C3Ev9DgNJsk1BSawErQ05WmDyiRae9cZ%2FBUU9L0D7ONUBCqNBZRNB%2F7d7Qk2HcEtS4RvNnSsfaICdPo9K4RbJIwzIaQg05Mt0Wcb3c8B9Ng4U9tYsUDzPs30EHSFWL6J2b0uO6gp%2Fc1tNn0pLJhpuoNmTsRVDvSQ9La3d9gheaPqDGy6nrG%2FGsS4LugEcCI%2FdOGa0wLATM0d5IdkHdcBZyCtpPc8q8YHiUmlwLzmH8ZRzVkeRNV72g%2FoZVNSaFurIU2GgfEWNdTlvZotdBy1%2Bm6McRrCO1PuxjxT%2FhxFmbawQeL7bYOfx%2BOvcdIKpD1iMPWJm78GOqUBdx1jeuaVfwc4rSQFqMXvVV8QqPXjCNkd2gBLzPUDXfgVfLf36UQRjlIi6AiLcUy4WNZwwDWG3AMImdLdlNe45WGytJb2e9y8yTbR8UMbYegeJSIy8%2BPJGj3FRpzCc0Erb%2Bhaq4vPc1Xk0aWIApciqUPDcAYTVCv5gGbvrVqFb0b%2BuwEVc%2FowBe%2FkoZ2QmnavzQUT7MVOJTCtcyfxK7D9uJ4iJ9rw&X-Amz-Signature=fc6cf1cab14618a455d49bec61f90dc8e6167c3b8f3e34e11c68cb91aee2b863&X-Amz-SignedHeaders=host&x-id=GetObject)

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
