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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR55SOH2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFQ8hRTZHmAMaiM2PFHdUwr%2FmPsDmuxu0txyuu3d3IZXAiEA3ZR%2FUJyXNsfmeMD6DQmC4ooyNVUhmzf7GByVk1gy2q8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA7IK32S5ei%2FQdkTFyrcA8fIVm3tT8TZN%2FGtAXegSbR6f9gEkB5ceAhSH9PE9V2kUnyQAIZ5g1DIlWI81DNSAysE06adLGzZ%2F0x5oj0gj2odZIbw23EojG8kPZJr%2BE0CeDAC3AWJa4UXnNL%2F3zlOG8raSSXTlMJQgekn16BgdTaaqvVwMHW5J8K%2BjfBp4sNdn56iNDq6h2vPNSEy6DxPo6L%2FuEemN5boG93hCcpeIFvj2%2F7DOik2Q47SAJkfPsqkQc1g4OztjM9s3GXgFhDNBokDAQb1vp97%2BrbBkT3JeNMQV%2F3NtLbA%2Biqmy%2FSh%2BRd4sAfhUny6HFh5J1FegoXxHQKLqgJnHxhUtQpVTAXpU01p%2FkrmIqNxHPQTZ4xgpbSjcOfKDzuLuTvEFErZzkdTdWYSheA%2F8P62kuxiZyTabW9X03YUwd3tLYmEvYKAgV%2FCLxrJJgZ2fXjQxdyj4uRflfoyz8b6o5V8ELTvLDaNHM3uMzQEeBvN4AZPVMDJzuFlUOSAEEEGAebHYH6oif59DH3WcDaYGadjo6%2Bp321wzEhEO2SpU3cKAaNeG5YGvMfwBIn6CLqO3SuC3T7s%2BgLM0emeucTHTUZ30kbWqcfYZ%2FH8zaIiuwoNn%2FOtRnL3ZrMsopwNrP%2B6ZB860uVRMM791sMGOqUBJIfE0hC7dXDt%2FPn8B%2BQP5dnYKRdwPEZiiWyltdu3NjNeGTIC7inWNa4uMGW5KE30Gj6fGcfa0vEXXZa4r%2F3gFGmRuck%2BxpBIg2aJ4U6AMSRdzZm5DM82bawk0ZKMkW5mo3GwkiaT6ctUmt%2BvR5gShrml2qAKs9MVKyQp2PambXvbT9LeQlyI99ZAMP2HjzlTuPNQ%2B9b0NgOpQ4RFlFDPho6%2BJ0ZY&X-Amz-Signature=1378ec8ca5e48486a8aaaf711f378dd62db67d5c3a8f1880836d1bd2b6028897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIKFABK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDurZmUAX6AESVs7Pd7ICFEMk6OtBbzlI4UT8mDzTFivAiEAs4Dd%2B8yH2iruRtFfIh7ATIQ%2FGCDtlYk%2FULmoLvnWDAwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC6CtTH2GMQbzuVtDircA5KTC2gx0wC3n7JezvGZOB64dTcRU0AmIyzXdkQZwImtmiRsiD2mBtKtJv08guIWeyU66yxzwO0tIC00aKKH3nyxQONbn7CNqYdIUlDoTLswx%2BXqx1PPj6Qf8JzVdJwkukzIhEP%2BRD1m9JxIToBI8sPygARbngQXmOtjQXVDR9PlDjHVyWPw4cBcHsds21qbwFLZQPfvrb47DN0kl%2FD18aPNN2L7vwnyPoYfwM8hqbf66xyOk8a%2BZZj0AUKlkWq2VxwYJ8dt86n0eWkx0DIy1hdta%2FNCKDVobEZucqNk4dzWv9LC%2BzvVipbbzXrVOBOsTNqecQWUhl1tcphIaGR1LRzqR5sqJeYs2rQdvO7y089Ki5CoF34Q3VdBuvw5XdgBvQ%2FxsakfehAxfBXm4ZClEEEzSMiXVD7HvntsA7%2FcZ0ApamtS2tYofy%2F2LJL%2F0kzsgH%2FbTLFR9XYhIecNAbRJer2CPKG5h05%2BaGKvbzJgnCniTBdS5ClkigXlU%2FVK1Qhy1vNrFo5bgXjEwWjeqkqI5CEXIP739Pzf9OTUHOrQPyeOOVP2ufQub30j9ch4XcU%2FM9inLiqvdatStf38chmVZGJ2EQ62joPAryDgE3n8Zzl2jnb6GZfRW4mVg87%2FMJf91sMGOqUBniqH5%2F2Oaq9vpTWry3XNbdCBY9B%2Bno0mPpKJ70PwOL2B5PXIlAqXRVxe%2BAZ0zS0Q0101DzjlK4RiS4GTltestd%2BZu7zSCMqmVBHMCVgP3%2FFzRRx1nWxRskTfMk2W83ZVloYhS%2FefPgBlhr8QPXHrQwep2JqOoJdpp%2Fph31CJ4px5fyI56VEjCp7Y6V1sWSNtv2I727ZDXeUbfLkDv1Og2jv1UAnx&X-Amz-Signature=4c10805ec83332272c31eb5e624daefff0d21103916abd188ec5e19a1d2df5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
