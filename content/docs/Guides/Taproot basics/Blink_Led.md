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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQTVIRN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUt%2B%2B3gj%2B4fcCeHRbO4EzbLzUed8ast7mCy%2FjxSsYcaAiEAmXvjp%2FCdQEtZHh6E0u5Rd40XOS9%2FWwXHvll8a3a7lQYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMYpfOTkq35i2yiOIyrcA8PBFaPvlDZLPg8gOo4zPZTRSpcqaKmPgaPsgabPhx0Rg3Oc7a40gmEdNoJRAJageeLx9I6k2rKnKalDkyG1aZO7gfDAIosXyUrjbZG%2BunDXARYOjHrj1TQyEwD5pacTZyELmMChHep%2B10A8d0K97ki8jra9yN56HWRE8rljZELkEsfhVvycncMUQioRmUaPnrqAVlZnxzLNKBNBRGEMXAm3JAOnvL9QBe1JgEpxmH5fVTyeLDJwYRw6al%2Bq90EkYSTI1RfmUZ4cI4aFKb5rL%2F1vUH0PfOBwVQIgpnz63jaxUSK%2FX%2BZqXOfzwg9XnXKLHvn%2B%2BufkZiGgX%2Byqdu6D4zkv8owFBo7fBPKJCG2Qkq6IIwJdFjiyuftj3jkxROpEJ%2BfFHbxud7Pnmej1hic0LMAOHp9bcTfT3eWhl54wbnW%2BYhfF3EdXC8cu2pVAsZqZz27zr31zx0O%2FyRh8KXkgNwCT74ak4IpeRRcX%2BgsghCffxS4Jt03VHPr7YUWAeVkv4d3VnHduRO0eQs%2BW%2FaEFyGSjFg9ZFbKMwZXT2TcWFJOYhOLfxnlgD9ygHZdkn6FTV2aorvQV1dV0YUxUw6tDWfizc31dCY1aTOjwFiLeV3BEmcdf%2FwjZ3jEtvdFYML3hor4GOqUBRD3rKrgOhrzgTR32bqHyI4v008s042AblgXAUnmcg5sVlGONEO%2BRHFkOlI1iiNLZAiLXYD8sVwl9lTsDO23B8q61hMO9FxCWKYAzdXTH%2BWcAFfIQqeXyZMYUxQfMaS4Y1Tlvxvi54yZl6apwhFn2SPH5hmjlwdDWhLTeMnS5GmHuccFMVHkYjhKWehtaAl%2B8EBvk1U6dtBUCyqry54WYRQBJrqB4&X-Amz-Signature=a16da4e990bbddf9e1f85a8e20de8384116b1001384f9cdcb708b9d3a8ea7995&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWTJ3DI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAScjOIBbC5TXF1zrx8dwJ9f6Smlv1fhfqZ5AdCae0%2FcAiAJ1znac3ejpazlms6FdEQj85YKKZGp%2FA0q9cq7Ox5ZWyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMjfb2vQbDBX0133hSKtwDtbu6ofOYYrM6lmPL3QZIg6vGVor02SmV7prnuVQkwKq4zCECpwJAapZAhRPTu6EcullrxnUZKpCkb031fNje3dZJWc4%2FE2iB5FIozJBaU%2B1uMRLUH%2BgqcnV0K%2Bey2Fp44jry4KMQuubnufmZmfgwnVEaN0rKOL8%2BtEm3fzYp5tImZtDcs5Pn34fjU8tOrERv0hkN9aMf4lpJp837OI9202yOM7Q3tBducZYwDs1uvVwI3Sv6DNZloJpCrMNW41RuJkHsVk%2FiZoFl3zkPrLmuM2exuwBQyB4lcsveqY1rYB4%2BBRHI92XWvxpEPEOAm%2FHGJn1e92FJtkRt9LIIAeEOu1Uy7fxHg32IirejXFJhHDGuUoan6FALa%2B57fNUDTE5WKfv7OfNx%2BHOUoOjddQ5tGYoXPb6WqghYT15%2B3dJYsqlLUv4HU0bs0oF0jq69nXQdAov7YYBxqZq7D5XRhe8%2BHpejKBBwsQoI36Jte6ZSwcBySsj72zCLwd3EAjXU8xGO4gPfFIL5mvtzSPGIa1ZKXUfl7fP5uufiLkmF0iK2mG8SjHGUWrv1OQaTR%2B0ht5kFaZ5JpwPYp%2BDX31K%2F%2FNgu9Vu13BXnbg8MI7bniPrMLRXxu%2BeYUo10TqJ8aZwwz%2BGivgY6pgH8cF7oZn1qdT%2FUVJFZzw8ywjkLvkzl5MmkvSxIQmK2R0fR3oj%2FhGaqKiOgu3PJaOAIiX7f%2BpWbg2BMx7e7g5ambBeGHlu9UdDnddcMoOBr3ZF%2FwrlQKPYzz3xmbMD%2BYn4E5KJLjdcZrsdWUIKB34ca9VlDBne%2BGpekpuS11umiprSJ4%2Frz3HcOtfsnZrPTjqWi530U6HFP2JII%2F2NlfGrS8TtafHHe&X-Amz-Signature=68f4f2b0479483d22a8a637372eeba83516b859cb0769e4a4a924dd2057b45d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
