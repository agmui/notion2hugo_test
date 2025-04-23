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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ2FOAJF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAH7d8zBpRhjDlQVeiIrMEEsLNrOAUdQkoqzzXz%2F4LjJAiEAsE2iX%2B6j%2BokRYsALoseDWBapIQHsgd8%2BLymNCp8ToP4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhfXnh44iGvxiJmrCrcA88O8DdDwGlfFsYAq32bS9EZ%2BfBqor4HAuw8DVw24lwy07dbtb6detZcBr%2FaYYIRAwZyGXgV92ZOhCnvke7zy3tSdKTz6rXEQ2oM7WA0yA6AOp4DDbv8CuKeV1CBFQhprdqqv7LM5F2%2FUOdUWCti83YCTfNTF5JjV2I6hhuhicVEHWM80oNi7yzzXdg%2FkGnBg9M7cJsoopGBDFQhh7YMvfp%2BxgV%2FZ%2BPLNv3omIGrfUkCqK531LotL6M6pkI9v%2BvXsmbB3N8xtIUd1iOK4vApAecwOk9bs0nddUFsXWwYkWuwIVlooW7%2FwrwJ5pdJKBallF4MnrzyU9N1Q9i45Sy2e9fshRrjESp5QwBQyv6hYAp3OPHt2rEeHns3%2BDBh7HkGDVFjBrJcIylYdamvJpgIo31av0b%2FjzQFWSk3WuhL0BtIAESeDsD3uSK0FSJIrGIMPnTji8%2BFoGb0xm%2Fag8sIUJjnqTXPGYPav4aI%2FKGBZ2bK5ofb7A%2BU0Jzbsz2IvQeZ02tsx6vA4OxXfSisoRvz6Lr8tcXsKL18wDrBFTAbhwm1eKyc5oopbYZ4Fyk97IgXjnA2Ue8SmcWDwN%2FLa72c33GIwy7obYNwrw08raXGsURSuunyytSZNfC%2F4ChcMNrWosAGOqUBKiDxSF5WIy5uddFeDlEjNN5nNSUJV1tHzKZnMm0TtYMANXHhdQjoBRm8eDzXMj75eT%2FdEz6iLwiHD3i5ZrZZzcPGVHK%2F66mFdVg90HpVQbD9MrSd5HbQJGKgCF0Or7cucfYAvfjJ%2Bl0JqhyEFkwPAoyGiFbQ71o5nqePi9x4f4MAAEaFx0gPXQuu4epVnqOp7evHmmY1mLLf7SpjibujWvBpBtQc&X-Amz-Signature=67148c862417c714fe154ad5ddb97c1401e256b4e0086de0169c7f70046390e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ZGUNI3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHG%2BdmkuZN7KKJvImBjl4aoB%2FkUSPBJURRsGYCJjRi3zAiBw24pChDTNuGxnZii%2FcP2wQwb6EmvLXtRxNHrcl3kVgiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXRCSR2X%2Bop3aFEtyKtwDgB8pykUdV0UPECsD8gzYx5cGlklVt2X8w0ViLqf1eZiSqEbHrXRjEiKfQL8pY3qLxoDM6t9GjFmNCBKPk%2FAyy4kfGRoF4e%2B45R3lB2NQokAy8K5QZx2KOVPZa8sln9L885Jr54e%2F4e7eUwX4mSoARLSzedjeCZO9wr13TRygAKvN4nUW5xnC3voCNCESjG28hu9B5g2QoSFHQiix2OSnqzEeYEYfoWzpSZ7pa49C6ZPQT0ss80TnLo%2Bj05%2BHaIL6PtOnuODsdg0NAgPm5w3nwCCv58ATJi73pVYFGSTrLZUo2qZTFAuTVV%2BFcxgygrqXBjz5Zk8EVlwctKhNuPB4tMGKQAx1RI6ztbG8623RCfHFMSTsEqIysEvFRcyikj2j4Io7ffn0JRbxRJMSeoOK4zQ4H9KtwS1gO%2F46RDNoHCLqQfMYoTjgQb1gAnj4XjKFZeQrsZn9lD6CVayHGDuZwq3iKURGB6mIAPpVCDpwWBv3c0PwD6dNHFWBbQ36b%2FeONAWH9UG2OKVeRlnJoGg1MzNFphqggbcUdE5ykbPMKjIf24kco49UQ0ql7gUAbcSwiRLE8%2B5xqrxS27y7SxHjrX26Tl0uUYGij%2BJUI4XxeyUgQErkqdor3u%2B21wowwcaiwAY6pgEaim%2BUBBdX%2BHuGhXPBhy7iE2Yx%2BLphKh9CI%2Fk7Ts2uPw0vb5Rt0mROVxXsDEEZZVhp8wP33woyCGoqFoB%2BZkR3Ofr%2FViSCRrT%2FdofBjXqJVaGTBMBeuZMgVJ%2FVEuTWjnf5VF7e57iZkmn1lfGNzdfEWWYNuUSCP%2BU45PNn8HTc%2BNafx%2Bu9shaHvKIWvolOroYrmAMNLgnqJNR%2BSkrVj0tXT%2F1bc6V5&X-Amz-Signature=86d954cf3ec645f5fb8849d6a05681587fb707b95e32df708de59c26db6b9e04&X-Amz-SignedHeaders=host&x-id=GetObject)

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
