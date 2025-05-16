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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUBJLIVS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvGsgSefnN5Bu7%2BFQLg6soeiJ67mrKhMujAQTuE2EKIQIhAPje%2FrC%2FATS8Wfm0Hi0o09axVaqPvzu1A3rY9iZmmcpyKv8DCEUQABoMNjM3NDIzMTgzODA1IgyHjMNxdsIkhzCp%2Bo8q3AMgT%2B7yk3uA8lK9SRf29EXX9OwQEmmQwQ90KT1YkjApb181sQtS3VbQybdgGTQhd6dA0%2FowglAnhe5dqdPsc%2FtoDlGk4dyEN5hiZKuEjR3tB8B6U4L1YCrxSekC18RRrkgF5DXSGfMi73UElwqw6yP71JiliVf5jU%2BcWC4X2PNCl6PCEiwKDTIqbPiTF%2FJCZg46aFR1u0gjHHhJ0hI4pixqR3ES9EyAKpEYxi0tmBeSskvbIuNRgZ6eBtGbBSy%2B0wimHe%2BFCNTJrYCc3ODc8FQuR%2FXgK2GpJ4eI3%2BhE94%2FgO3Uy2kxiHoaeSdjaLeeTF6KrvrX9WbVczhtl3OHs4YkArS9iJrbtOQMK624otSoI9TZ8w5gTNc05nk%2B%2FjS%2FMFjSGxJDXWYKvSqbCPkykT30P4GoChG5R%2Bn9Igr6vebVhF8sdDFmz8Qo4Mm8fsjUKj%2BrDc7wonDgptksr32C0TQNrjT2ciLV6rBc%2B%2BUf0Kva4b4oHTof2FKvnh8bt7Gy7%2FxGX1cF%2BMW5PQZLHoIzKuMgiaGZw1Z%2F7g3HG65WpM5hvcy8hcP8CMIArNgcyAMq%2BcnLxmJ4%2FRm8kz3uV8PRY97dGH6S8w7B7zzf4gdxg5%2FRer7rSIhHStZqGzJBxfzD625zBBjqkAV0bfexhyc%2B6l0WhuPZptBlsHY%2FN4wwNIB7Am0pdOwg3Ec6WPhfper4V7Sw7i0Ov3xTd3n%2BrEbLyKbPBsVgaoEp7PQX4gIPQnGUGwFq7ob%2FrkkHWn5RhYBrEkBEWtQfXyqWzhfAqy6aSsF44nGOOytvxKsk2Mwu0tV%2FjKla5jHp2RSKv%2BdaCoSwKDjpEneh83DU0AmGOc673DSo2QVtY2mhq5MAB&X-Amz-Signature=88c9ca97c05794643192efc670a982fdcb3c263ac998f4422d2fd8f516a3e394&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OERLABK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzB76fCxUK29Tdn4Fof2i9loNuq%2FDbsivaC6xpqPb2lAiEAorexgLOn9BG9kYs6CxAvasN1ZFVrzvHBftlbCRFzSVYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCChJh6C4SI3Y8at4yrcAy%2BbalSQQ1BnsBaOtCQ9aK%2FSkHyHwTLoF%2F8kKnwpDdUFOYx6nPrgI44z8o6%2FkujY1TTNZKuY8DeHAJZLI7QpfEhqRmqFxwQHjIfNRd%2BZj8HKm55kc9%2FY8rkDbw3%2FtyurWItnAmK%2BOj6uZdbDXwk5bfEuRhisTvgIA0vlWTPIlXTp81H30pgFLM0%2Bxfwo4cHb0wp52Nhw%2BKO6%2FcsNNFjwZBnjskzZomBgcx8SxZ3epiXvjuiFdMOreJ%2FwJY%2BFSpUiBWw%2B29aVrFJt6DM%2BercSnjinH%2FYXS%2FJEyb1VTXnhIEnKLO0MGFW%2BQlnvJDC7LgV5%2BCv3WE2%2BQqUkbQDa%2FdXnXukc8KMxzshH%2BuOLJYQ6DXa%2BgYfqPenu1l7v97ROiyMG7BCJySSLdpCxQteLXsTK2bnlf2zSu9z%2B%2FJebZF3ofAyrrwy4%2BZLST9Fj3h6aPjGKHJ4jhFpakEsjDNKxXFJF3t5iu5sVExoyPHrOBLhGCBkIpC1TWncP3LPi6NwAz0DgP3VEio8NX5qRRHWp0tTiuyaIkG9K95rZr%2BMlM2TxqLYfJ%2FjIdvH68GPzltb8RH5711StJq9PFmmQcEPCqJUTgWC3j5JyZ97Z12DT4pfkKdoG0GcB%2F9X3J9DqfjDUMPvbnMEGOqUBkOJ37i82JE1A4z4XtPElivSkV679egguNOKF9AEe99vAOl5N%2FzzbytLarzhV6fBE6iQSKkYCLsmEJjGb%2Fpj70JTYnhVvSXfSdkdoK5%2B4Vurq8bDEwAQpaZF7e0mF%2F7zRNKR5At2fN4oNntLrtt0SPLwV2MJBEtFcz6%2BHWQRprZtM58j7w5bK4BGLiN2aCK%2BlzySm%2ForKLif7mEw%2FhBAVIOAKCbBX&X-Amz-Signature=848a30eb0882adc6fc62486e7a34bf0a91918f8179b9d5ff8bddcb9e18ca7247&X-Amz-SignedHeaders=host&x-id=GetObject)

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
