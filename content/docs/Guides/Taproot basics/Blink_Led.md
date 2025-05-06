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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFUVZAA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHabIs%2BBSfyoJwYfviAS1zDyKm0YF6YN4hyHR22HtMSqAiBHqfHLgpeuXcTCgPUP4qmRm5bX7ubeG5SeXqpcmeYIWSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM3V7vVdbGhIw3I0N0KtwD%2F54qhVEJPQKOLa8wOMJC8PXsQVeQeoaShk%2FtCtpMKF%2Bov%2Bu%2BZSNRvbtLhN7d8XZPDDwUnpO8ur%2BDWvTfUcvpEVCxge9YBNA5X9Xz2z7nYxSpn4ZCY%2FMs%2BJrW%2F5qHy4%2BgHYzA%2FE20Q4%2F8N%2FVp0iI%2Bx3%2BTvPIrjw%2BPbYVmIx2izAAwJr0AG7skyxzbX8rmk5F1CTOEBo2g5U%2FbMLz038%2FhO1Jqaf9eWn043U8EZ4iEEVqrhhsZziquzzH%2FKPmNpro%2FdcsjDHKFCSBEKC85UDQFIFAJz8LmkR1gq42Ai3JyZZSpOFD92RhG77aCu1ji7uTgM5Z6aFZW30t1JK2huwfbTCfLgK6uxqCRt2zf74b%2B9bBSBUILD7R9ivsD%2FvU08HkuksU%2BjbwTji2WfAt0ZdsYUKjhHppFgZydFk6H%2B0gcd07MFNjXEY4gm5OHXrXPWAwfyDoiH6BzRZ%2BuCitl8pmUfcKbzWx7OSbkZKTHGvM6oC1KfERlduMt5wGb8PNIxgmUeueeTTYI0gxCQZXxiOkdgAf9%2B9jWUuqKd2R406FnhFGCXLfEKLJc%2BtmlUPgFRUuyeBpysgs7Uuwo46gLyBQeVQFxCTvD6MXe0Z2Bfaws%2FHwlYnKZUaYovVXODQYwoLHmwAY6pgFmcDpETvAzpwZZSd7AeHyQ%2FT9oVM5T96chGdNgo%2FaLzM5E2UTsowNONrvbX9c%2FwSzjWgTrn0Brj9RcorvXB%2F5ATobO49TNxvtWgeW63e1eJWaerwtX74SGH2N8Evca1OKb9Dy8aAE8tvr3z%2Bm%2Fj%2FvUo6zyaUjhcoDQ7TNqNYUhRYkccfy8ap7PvhiBo28JZ60ct26%2FHSjxXPYTb0ij4vwGtEbw1vMu&X-Amz-Signature=2796b55434ea255076977cc5fa93657b99fb6e9441b053b993e01506a9b7d57c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJKE42J%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjnxgaIAko7%2FiIm96EHaSskNgVOpEm63RepMfnaSS%2F1gIhAPLkWE%2F8vf9e58ttMb%2FnbeVFIznjW94pIBXCK24nKBgpKv8DCD4QABoMNjM3NDIzMTgzODA1Igx6JQn4x0zG%2BiLuHooq3APmfbcHvEs7LRt4ETETQsVl2C08Si4edurqVUs%2FCs1NMCLJCGuXpe4U0HqMl%2FvkB2vA6O62xUgmbKrQ%2BKklULs67vcuZW8Y6UJkYdrCWYFz%2BRovAqGfrIWH4CC%2FrA6Sbi3Ei7%2B7FmfddkTnARBN8fhbxONEHwSO0s9Rvvp7Q2mVrcrbLkS5MUdEEdQWOzz1p7ng9k%2BhAtVtxEUKjhvFoHURvUzOuuLWNTcGHwhsCtFQCHZTQukGD8CDBoKVRqBtYqsgqxrye1rMkS98WQQwVocqNsNoZyLIKESRg%2FtHOl1HXGM0gG436dHNiqx0CiLgzCU4zYm8T1gbTqMWEpQTnhgu153Ud%2BloPEq4y48qm7vcVpyzj2ur%2Fsl4Aq%2F1GLt2%2FEtdecqbyAOnskMOt1%2BywIsE2HfaWl1VRp5BdKGIzKqJvgcSVGScZ7F0sXlNwTwkhqvFqMwHvwDBrXr%2F2F5T0zgQwgVsLNf9oRM6OMH8QNXrKZIe4Cqmfa96by8hK4GKPvOf06hYu5T%2FUdRadJxA5wm62hYQ7taeYW8z8CkCWtD10yvmvs093AzbXSeCkY%2B337yTqeLqHg3OemaDxNbnoheKJX6UmdD94rbZfKOLqD%2FV10AOb0vG%2FmdgLCTdqTCNsebABjqkAfP%2BGthMrycvq3Zd2UepLu%2F2AnG0AE0i2wgDrQSqtF2s4miq1ckflx5yUy2iQpwKPduWuK2IjNfllcnQK%2FqWz22kb0NwIlpOmIvPkYvaXM%2BPYFkaADtUF1ziC0F4ZQ0W7Gz5Z2ZNz6tWnMRQ7dxndSIvAF5xyS3lreRtdFWug3OS8aXtOH4Lfp4tsWTvWgy7KBU1mrrzVVc%2BzeeIAarRLsfilzHK&X-Amz-Signature=7f927120832c35d629a52764f319d0fa23f42ab3d6acf26bbb3ce76bdfbb97fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
