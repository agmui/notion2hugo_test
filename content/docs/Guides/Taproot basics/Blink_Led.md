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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622XVSVSA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVAOqbpQPIVO0OVzxSh1Qc0vVwRIeaqbYmtQwMKKbVEAiEAykWLrFdpmCCq5Lx1PhLiCUAxp975g733vM6FQk7wBiIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvAOcO3BsynynJWiyrcA7IpwJsM%2BpZeDHRktMjhTkwSK8psCghSj7OJML7RguB6XwqgaUOF4NIMtxJEQulQHSabCc8l0KaltEVvsNOZo%2F%2FKJo3BO0rSOOdwMKKxrRsmH326sEHQO6hhmNrinciEG%2F7uut8max4NF41tAH5wj%2FVnYUQLgKw5RlJ0Qd7pfmXSdTwRLFkBQMpc65vMmHKbULxqYVXgVRfiMg1vnkYKR5AtNOGZJ%2B4vN4n9BPmOFvznh7hWTJ%2F5dB7xAYViIl9dWSm%2F4XxYEsf2U%2BHOriFRTFNg6Kb%2BJP0RKy0OE7Y1EbeFtkN4qsEN69yj3RnEhJlxlBlORyQLAZxmQu33weZ8FJmXq9nmygRCY1AU3tAmrm1NJsvHEPXtv%2Bd5YojNbUv6maSyOpTWM4%2FHxUp8Zp%2BP609jMzGsnHov%2FYjZBJdueDrEmKSHyq3KaV7HQ5YMR%2FECKumTc0dOj0tBzb%2FNFpo1fyAeVDDeM06xETbbCCgsWhTizFqGgnJSY6nWqv5erBvIXWE%2FMH8zhVUYDX2nPk6txYKaIuNAt9QhOyEKtbTVIE%2F1NOyTTACO2blUfrbmzCG%2FYUwyX0utT9%2FBdN%2FTDQw1AFGs4GTdjTiXQEVYV5HqqMXIucmXpnZHoe3EWE8%2FMJPFu8MGOqUBKDUKESghEnSISKwfM%2FSCGLlZnX3BnoaDmF5oARs2Qh7%2BfnaXdDHrGsOPchnPIRDtCPY40iCUdcpQBb9gkqO%2FA1EhhxQSMDDl%2FwbSRy%2FFtXi0pN5pp3nzhq2gISNkwHuwViffyzpawXAsqatws8Q3dLrydIuXdH%2BoQoQZ%2BtPdei0QuMWS1UuR%2B4CDdocz%2BxShTuyXipM2BvupMcDVUAMFFIWzIWRQ&X-Amz-Signature=10571398619c2b9a21d54fdb1b99a6b81852a0b5e09989a8521db45b8dc198ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72FKV7D%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgACJVRN0amqQ57RjB3G0PWsWSRYwX9PUULxQSZAK2EgIhAMULVUg8f%2F24nqynGNGsLDw2fNLLVAds%2FWOwy1RvKHS9KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTVsbXWkrP1ribLCkq3AM2dkIdgUvY2aeiqH14oGN69OMpKBJuM5Q6uVhcwpBsAvwPRMfSU7E1okH2CP%2FmFffphaEgPZvMq%2FNdN1hva84Uj%2F%2BXJ0zNwV6iZoIZAbQ2BSBhvDOdtzfnTUbHqnbfZjYYV7j0z1LeeC2GUkRH%2F9ZfBpJZeo4Huai47Si7Sc0hJVR6R9zyE9N1z%2BvPqAvxXAqwF8Ga7fIIkM2SxPSb1r7GwnL5ai46chPcEj3VUlHO1YZQ22OH4UMiL%2Fe6eMt5yx0dEzU%2BPk2VyHok4V6qwxNHfGaqB8qmFzFpaMQ19Ag46DstPTC%2BXETrVs110eS8bMbPcJjyTrijjTi7%2Bb88hKE7c49%2FlmeZilcv2VZ54Mw6%2BBNtxw1W%2BQv03WEXNmlVZjk8%2B8ikkOf5rHF48XAD0Kxssblq4%2FeZ4KRielWwsRApvgJuqGJsmmuYNPqZFdksUuxadDB7dDxnEx6QCC%2ByRv11VwXNBkc5bZhR1NqdHW8B9jn56ZIe%2BFS6V%2Bmg6t8Yp2DwkXAgU5%2FwXtnG48jnhcN0WI0aWHB1vDz0T%2B%2BrsCDylTHLaKckRs7TLF9n43uOpMRvahCxoVZeOpIxCR%2Bd3cnurTP%2FKq07r%2FKWbSpn9DdjcVb3oWY9TZUlCU4gNDDQxbvDBjqkAdjZycGHPG9X8VPzfXC1LyZ2gBUG4b6deDg706CEoyINgwWAEcTC1wuFeS14QxyP1f0kMbc7M7w%2F19rJJ9OvAABIpIc8weVNankx5aqb7BN%2FP9bA%2FFQoZhE0mMr3378UsaE4BVw52PFbqAmfsn43NPYMrkfJoff7V2VC3w1qRJAnzRhIG3LMao88ih2uGZpyH9elWdOvFBnabWHeb24%2FI1AkZ0aH&X-Amz-Signature=0d520f536ef56c7cc239f50c390dc3861ebd33c9d485c89ecdab7fc5dce7fec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
