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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBOSAC3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCGQQy8MPie3x5KAUw%2BuqfYQDVlTYuPvpn59oOxd0p6gIgXaydLRi0%2Fr%2BcRK8tWwNqvn5z4JTs12F0UDiC3nUKMtAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDN9rdSmf7RFPMfCiWyrcA5Nzpt5K8vCaD0ocJQo55xRP3%2FKogrxMFsRFdLTpTWQIQVc1%2Bq4Suanf9FujUCYgNy6Typ2s2Le%2BZt4YOhVaPni%2F7zFJzw8XVsGvJ2BL7qp%2BRvaWuOgefmhwrfEteagPuyxKYzc4Y5T6xXHlZxYJUVoSueHWEYf0mHP1ApQ%2Bh9eDebePa%2B7o4v8QC6ik8CP6bSzbEfYkuSzgpl%2Ffx6abWW%2BAleJ9ehpHxvOIjPFG8XmCZnvnudKAoFgk4cFzoPa9Uf66va3rLFmZl96yiMJqcx9WHR4%2F3T1Dzk79ZZo3sWF%2FNFl7WwgeyUgKiDuaOLGX%2FL5EyKf1iSDfECXP1A5%2B2N1S%2BYyyMo4zAcktfWAQVnQRB94iNjEo1RNa8vmIjSm7FHA4SY8IrOsAQiW6Un8YM2c%2BlJbK6pkLfGwKDub9oBidxjClraYhY7sAaO17mWQuJkOgVCzaamPBPGS6S9QQCkwiEeoyAhBaQ%2FZZXWg4vDRsfR9Y3ecXjDAYceVIrlQiiwbln0B0Wh4XN8dhcY4ddfdIAZXgSQ7TPi2OYxvABbz0alGzRWB8mPUWEUFI3Pohi1pPTbfp1pPCBk7LUxbQvKdT2yCCnJjXkD9p0LtWkxl0Zlcqv%2BPinhpLYhoJMNmb7sAGOqUBXdQxER%2FJHc1uBCpYKV4yF6K7QgBR7qbtIl28p9XydAWSJRx98RMD5weTuStT987NU%2FqlcldSeRxbwbs36hLpHfDBeIi11mlLbMjoVty2%2BRC51FrZCJgTZO57T8ajlhseIA7fU7CcF3Pgie1bW6uY8%2Fmjk8CcvIPY1ZTuc72ELQKIOAPTk94vBBeKrSM1TTJRJorRg5f0UXVWkOyPDNCfxgYEcqNk&X-Amz-Signature=f6079ad3f0f52fdfe8c5394e3b54a7ab8c3bf3e54893d2166efb8af15d6d02ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSR3YYK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1XKSA3cWLaLVCrvIGSFLpYVzNWWaC1nGmZetvE7%2Fi1wIgaDleNZ1e4A5onnbK8%2FF2NjEVnO9QvuM0JQyCCau8Nvwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDu%2BRJZSOsoYTidRryrcA5DiC%2Fe9Fk%2FWUeZPdVBouHTT8XUtttJZiq4DfOTtblxp8RPOD%2F1MaMST08t8AXwikfIFUEI27gqV3yCddExCq7%2BYrB65eN6y6YeDiCAHwt2j%2BTEeVfyaCLAraYNcgqprdRmwjVI02mfNWz0qilW3mgyJmMUvE3Cojr18gIhVdzchL9sqSksh9jWb2L4MJvaSd4z15KSwUVN9ehvgqqsEv2%2BpABtEKkUdxDvhfBMrJjKxE3J7lloz8%2BuQTKKyTWV1z2zI0WMlQ3wjLSD1rVfZZ%2FmS9ZlEv%2FnejlOjaGaJq0SlACaSomzuSi2uhFSZLpLNIf3lDnk0bUbuZ47rFBTetjc0jrS%2B5DAKFI2QqTNFbY97jUu5tasFbobsML%2F5cKQVHUXD6%2FgtGQqIKFX1byVWA449fLzmGvkVcqO5ktibh06zdI0VoAGujLs6hgoPHVaVoQTd%2BRbpgjzRympy0xwEXEYY%2F3tZRoGKGy6rhvOh%2FIr8pumx9%2BP7cc%2BwCXHvnVqLkwVFPxUdWPMf6AhvjZ5MlkJOsmTn7rYgugGDytbkpW5NPL15%2B9tb%2BURIywPoGlBV0Kf0lvIUveTcw7mEoHo%2BYpNCwPPvCPLBEtvM8ap6qsiXrdz51ZdJEENloMOpMMub7sAGOqUBnQJIY7GKEaXzWnFqM1upfN%2F94U%2BqA5hq1%2FmuFAGQjToHTe%2FVsANGUjvBuIKjCVvah1Ewqek%2BLOQ9orShLlMw7TrZsW1VYRB5OqOzwlPko4laDYFaehwzK28Ia4268UC%2FbXo3lKO5w5ZSTkleOqRB15QTBnj5mT9G3lhPbK5OIu3XYJVKTVxV0NcEy4l7Z%2FS2T1vTh2p6fhLNCUItP5TPHRQOxJDS&X-Amz-Signature=2c6695047e5353150c2f08faab0f2af918deb6d4f5f42b288998fcc87a3f9dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
