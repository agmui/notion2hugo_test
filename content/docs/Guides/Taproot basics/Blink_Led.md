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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENDQ326%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYshrQ%2FHFPBChPV43OM7xKsxWa3S1qjrfpttvakW9FxAiAa4LS5CT%2Ft8o15vUtq0Bba7YrvzYXd6klmd1UTHrQreiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbRAZCfnHgKn4x2AhKtwDSWUXNJocnCFv%2B7icdmxUttxWOkUKdGnh8%2Fb7urPyCFJOBijkEJ3S1Q9i%2F13AlrqO1JWqZEPGuGxexT70jj%2FUwMmTV0P41RMifUFlxqCQe4kWQQd64kwLAkF%2B9DNU2JLXsOQZJ6Cf9GER0J%2Fo392ttrHNTNd%2BxiKNoxUVq64hWFeMjOHOe7xPDdlIZdAAwOkObcOKV1wSEl5VDaciL82j7cEr9aPJ521KVgdNjoeTd4k675ybeFPTT7OMq0inDpAvuvFJSVOb3gWaoB5re0b1zDRl61qoz%2FWdAn6EFxumWKTy4NDkPW0EiiLewRd0LdWRXI84G6aTTsMcIJBE09u80bnTwoAITA6LYF%2F1sHKBvH5Sv1IUGlTx%2BNOoVD5mXM%2BJBD4EO8i2i6zIgl83EouOdYN6VVcrmzW3cy6H9ruhxDeJRvDW9CHWepP3Z97EU8phDh7MexyAjlptGtVPy5pyddtSVyer5tskyT%2F%2FhQKcz8Z9Q8yWg39xdwWww8fflbVI%2FxpwCMeegxm%2FswpEgUyceS1N8ZbYl7zDXpTj6dUosZ4Ux1m9JCwFFfray0V3ogEHhkOP0F9wpoQSTBahb6ro09iqLMDpiSVSJD34xyqBdbezKz30iuq7v1%2F9bDow1sWtxAY6pgFRmU87p9l6QnBpQSWo8dboRY7H38ydkV30JXdHeSFv7TJ3Uck5n7Vj3ect6w9XoCOWrGg%2FbIZdwOv6xzAL2UYUPUErWE9%2Fk2VNBbkDF2sCIjLhJfInKD8mNqG4Gw9LQIu4UDb6oxmsdr1UX8BfyCVeJpLf6y6i73o8UmPSwQqxedVNRjsmimbQNv8ouag2WnMOXdXgovZiy0Nav2COlA64AChsNcu7&X-Amz-Signature=882fd101572578ab954759e75988559c9610882b4a691f3f15fd6660af4014c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JS2W4RX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGL7RdRT2oB93p6R58Q9Y%2F4FfGsRIalkCxrpNHEBego9AiA6LcviaUKa8Dkl6mfr3HXZuT0r1zYq0Dto13Gys64HaSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVJu%2BP5%2FLZfDA%2FNvKtwD8QB%2FmL%2FLETUc6zokkUuoUucCG0Tidmrvv4rvxfIMJcwg4suA6lAbHVr8Nc%2B1MxS0snbUsL1Y7Glb1O7wfigzyMOm7AbLkKaEcuQDuZEFJ4%2BD4L3UNaTLh26D0F%2F5%2FKFQKiUaPH5NoX%2FZMWMKaVsgLg%2FgY1VfIlZnc%2F3RP6lfyPrOcttUv2UfjmGZbb5uuUow9SlsTFASe0sgmr15wsEYsOZt6y4slwCE%2BwviUgEJ5u%2FkWzElbSWp2zXtHRwqlirnYDKGkJckJoGLutItg3zdlhAHh8e0EQeIL7ruK2brfUK8Oss3jB4PPNvEjUNNgk0gM3WmsCsaJ4lW0TwqaefgxxvdyrmRqJqNGBrrDNMLQx90Uij7ER1OoVSi3CF%2BwUy2gYcvnQO7VuJMo0JWA%2FiFnmzqAaeLMXdo0jo4k03SZlbK23Nu78wgGdwGmLiup7kjtITqc0l6PrnDE5rTkngoKonv8nDPkPOG1Mu7vteJZR4vyL4AC%2FPn4mvr7IX75%2Fc0iVUpQA3OekQn6XgAqKl9A3C6b9x8Es19DBtdAdS0ZJMMo%2F2ZjRx77vOD%2BmZS7LI1Zh2EkH%2B2coS5M9yi8cHzroL08ZPp7yOfUQVk0hJ3sDFCqfKiVFSqckYguNwww8WtxAY6pgHwTG9rFQIRKt3uOGCUZhINa3D6yRLzWifZIn6Es0Cpx4Yn3yGJp6tor7eEhO%2BxFYJZMrmosBlwn1GVLLNhcDpV11BQ8QvoqANp479cKFqJ%2B64GNHqd3JULI%2Fqx0S8Ic0WQJYX91pVasoU4Ykkf61%2Btlesb41h6By2qM6uE7yoXgOZqdZa8QLAHudyAPHpMF1hIbbVQBo83FZrSK6LWjeEavZLnW5cg&X-Amz-Signature=dddfedd08ede5126d1bb78c1f32585894ce68cf78ddaae2958a9acb30bf4cc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
