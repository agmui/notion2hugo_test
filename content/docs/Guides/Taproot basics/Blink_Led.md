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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWOK64JD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHAmOT0cvIcjDdfeAKcQnc9sOI1uE71aSamJFTlfHsmgIhAMXZ3w%2By%2FbmvIbAomfnuRodNuMflqaELqQqzTXXr%2F1HaKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhNrak%2Fv%2BR8y4oEtEq3AOjseDhVbjicKZRKCJszK2Xt8cp%2BbCLk7ynO%2Bd82LdOw0fhMWf7KQ3SrsjUtlKFUIFsbhIeWiHMtQpukbKudjb6ryU%2Ba5EYTYbThx1zjfO%2FXT4Y8nyQhnOafy9%2Fg%2BRIeOAwpv819txmI4BiJ8cUmYZ0yjTHHoEde2m%2BakTjYSKtpEEbZo5kbjUb2lvkZgzluL4vWkEPk2Qn6viBV8em2o6Z%2Bqo7Ql2QyyIH%2Fqvfjf17luUXeRiZeEQiu4MYsPRatDPXGY5IMXYUUE7esjYLXCAud9x35S%2B0nTUKYiN3%2FPVlD5Y%2BmV9QdSq8fWk%2FRamakWidbJMKaGN77XVzQ1M2z1yAV2LJW4%2F6chu7SNcXGFq33F34%2FqLoRBZiXEvkF3IXm7nMaAAxxX4YPSUteUIJOGhHNJlcnlmLs6frvBACHCLjrwsKusTOf96KjK99ukxIZVQUS9dhWupK9nkTpLBXqREWMByGaaiKxiYc8lMOTu2QzXdQ6Qy0l2%2B%2FRsEFLc%2FL84c%2Fc%2B2CO1X4ck4rKfsOxUdfYz82g18QzLs6mfgAuGoHK2DqMffSjuBLHqLqSK9cLOvkxSidM8lbgKQeLSBGkbIqQUMoA41S2wperniziIv2%2FlBq7%2Bxa4p0IOqKJjTCk6a3EBjqkAfd6snFRbvlS%2Br2%2FX%2FUQ%2BeGtSIgpP9CO90%2FUbzRX5xTnFgOHs0qY%2Fl1ZQFkw8dKSxhOfiQTraqKyDGNJRoUKceTndO5PWWSFjkI81Owiwtt7tW%2F0KShabUOZN3nWPrYebJkVUFLG3ENMSOZ8BzMi9XW6y6n%2B3GA18BnSuITVzcoPYosvxCnEbIDXFLf8b1JnknzoF59NmHSvpcjjfdceiEB0n6C5&X-Amz-Signature=a61b6e22236e8c009bc7d45271e7e390f0d7f0b302588952ffb74398432d1231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JRKOKJA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmlP0qhNXz4CcVBMcqErrTVytP1Vj4kGlkOChssW37dAiEAquuXQFcyB2nYrLC9OvyFIXiNtBj6Xo7dCQvdDX3TvTYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvfxF3XSZlAlISLtSrcA7qcZrQTppW2RHFxVgRFQllBdrIbyjiCnphDvUFrru%2BSsvIoOySRvUFuP8EZANzaxdM4tgaR%2BBKKEbVTPfy144s26qaSBzq%2BsxBdjIc2QkPumdYXYwetEhGTJAGzDqPBbU8Jf3dAvVWUMt%2BuyfpOoRu16klBEMCXuasGPsVvSYfMssX39%2Blhd0bA5cunaNQk9kgtybsdMHSsE3AepvXhcyjtjT0OzZV6T8ReFWTL1iZFFq0k2c274mPy6rHo%2BniXpLyr9Mm4vRm7ysScNURnCgd7g6ik9bnCXjZovKs%2FRVXVm2JLlFxX68VMYfdinv7KdtvmhevRX8hvgOiAdNMWJs7%2BXWwI%2FekgDVgjTe5n6Hc3UijZDsyWqhBtR7rtX4lQDGGy8fYAKYB63udf7oEpHuifpI58lK6r0KEMOY%2B0hgviLHAGWpScYic7ZtguaXB%2Fg6GVvMrGBinPXoSO%2BsVrYjvrgZezPGKsjAayrX4swmuwp0Gd%2FJCGNp1zmlGaXHHgke8A4bZmOe2O8yknTtcHaiG8imv5doFY0D%2FJHjtwKr74SSf2LjQvIOpETAwjRpe7Mto0C6NQrGVaxpL7Xwrkz4wCG2qSV%2BWijcWubyEZw2aPsH3IpJlagC2mX4RkMPrprcQGOqUBJCSQMTjKaqmC%2Fobc8xF9zdgPO6nitiHLJkiZxyZq%2BrZ%2BFszqvIotPFuzY%2BuSa8JjedDsV%2BMA6BFGHPN3mA%2BuhJ9AW8uqG5%2BspQsEydphHLlfEjqOXaD6GulLZ6SC%2Fvhi2AAZglwk0r%2BWNZU1QgAYvcQxqifP1qOh9dkk4G%2FJd31UuKiN%2FyqsTqI9Rxgf3mG4w1bJCCWLfAv5Jr7xoDM0nlQDjq7t&X-Amz-Signature=fce162bb0bd4a5f7641150a1e320e0287561fb85253b06873f62fe3465d58557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
