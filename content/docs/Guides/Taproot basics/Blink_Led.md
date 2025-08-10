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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7RVYU4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC488FISRDyapg2BjfMJ7kETto3mL3vBuDkWskA8KplkAIhAPQ886a9p8Tse6o2bv%2F49WVVvTCHsAu7GtZQ1hol4K4WKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqpxuwRK0XXWYZdkkq3AP%2FbjE%2FmVreXdHpFoqGaFud2lMkEFz0Uq%2B83hNPNaIjiSHsxiVlQQfrWKrwO8mM0U7OBCTwWW7wE%2F%2Br5DNcVkN7KNogIAw6iBGkv7YD%2B1Nnb29Awsb3fsqOxbRo5zZAjXy3C7j8Y7LbeAHE56nX%2BtPwqvsZrkOn2EIoOBU31zENFauaPz46nd5QapztNgag1a8P71yNUg17PL9IEgL9iYS4PoZNX6NH9iTk9nZ0eoxoYsRk6oTkAfyuHPWldnTwAs70%2FzgS3BcX3U1YRPYn4eBYAX5ZkNUdGjvDWCStsrJjjlQM8369LwYfHcuSQSqQmjt1NVXaYCGeAsJNEqJYBJAJGNpFlo%2FBqsIJocLm75IBhGOmaCbml3OuOUF6Wt3Uy17z6n5omSl03sVKN7gUphJbf3nhOSkxugCelosrPLzlHL0adNwbYIyE5fn%2BuUobcvjqsp0jPUvJPcXaOOWAS6HTUFaXMszZfHN9m0e2I60wiWSQIPA4aDOcL6T5RyOLTTJs6noC0cNHc5%2BrfgfUtKxaWXeabZpBCx2kquQY%2FzEzk95UqgtLWyd4%2FWN2AMeOGKgW2Dj2GMbetKFYWhJGEuPQqXk6QmfMA3HHraO4zbZFSMhOltwKTBWrJvQRvDDhst%2FEBjqkAbSU6ds6MLxGE3DYq9Rpls2ValQ2IcdC2UCzp%2Fbm2kXPGHxGNL0%2BzsjcLISWUHjc1MWRYjJeSyDfGlNJpIGgQEHf5jimGpB19tCRygqoMvMR3jjeNkvjvETMPwbUQFFIMEpP9vI%2Bl8Lwr%2F05xOZrV8ldYdwYTRjroqbHWvfLUewnGUk4BuPFMm6F3ma11QXHC9vC0kvPA0W1LYUH4NVofrw1BJ2W&X-Amz-Signature=00f42b0e5e020440e0f6b7f456a3b8558a64471d082485930ece85c1d11054c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6V34QEI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxcj0r8lndpiRw9nccl4eWASqXlW3lQSAoq%2Bbw7SD5uAiB252Cb6pinSYca6hX9CiLmj4RVq%2BB7Wdv3KcML3VIDxCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJyno2yxGKgHt%2BK8CKtwDRFvsy0NlX5zP94f1S23tmPh2wlagYTc9%2B2VBovEXDUFmtYiE12Rjquq3G0K%2BJGgiFatlsO4SBVeokSOVNoj1LIGYMb%2F7qM%2FuRqOVxkIQ1mFQCS3RQ%2BBlEWt7CfVLQ3xRbZY%2BicmpSX6NI260hAiE%2BQmww28OGtyKyUgXoBoSd84LajLDodTsn0CcYZn%2BsherwfEtOgSLXXEup7LrZPJBstPSnY%2FNFG83Kry20%2FmVP9qbCd72FE2Km%2Fd39BR2XJzDkPpI2lLtvYB33RPSec%2Bczvtl4uspWveNRe6SaEit%2ByYZkKwbNemtfCQStPVYIO18fZuJIgb6GygLi0a1S6Wf7Azgtfgsh4OGXj6Uppdi9VQJFFewhBi%2BLRubmA%2BtYVP1t8fh2UGSdsPHAfgodtY6gOwSuaquw38H06U493Lp6%2B8LjYzOzsdfO7Px81YmNihIXGxPEjnSDKCh4DaCrYIkTpKKNQ6lEa0sXL6NZORRVtRA5yYPY6EZPYguxg1JcIlvUpbiaUCASai1weCHAk4LejN7XBVFg0gdBeRSorQ3dVZK6DR9zMiQWfW65q8LdA1v699LHtMCYpBUY8DbtjsrbVD1p1TYeSoQ1eKg04Q7X1cvcu%2FVPkauYBRJDEUwrLLfxAY6pgGj0He4fh%2BhqmBaDsbZG1usXcTCrzu3N%2FydhnWDohjpd8VG9JaW1BZ1%2FFBH32D2Bxy4RQRGfAca33q6XdM%2Bf2V2Zjnf9Z2hpHRCuTlh%2BqxhfeJiV9a4pycrWhuMe4rS6evZ0vTkWQvhZjABviiy0zO%2Fw6jdDkefll6ANZe0BbtmZQLcTZkuc0IJPsYWQVdWjAxAFdQery0wkz%2BMxlBYNcUtm3Ebea%2FN&X-Amz-Signature=87a12d8816052663724dcc28eda076f3888833f72397deb47dbfeb45c9ca354c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
