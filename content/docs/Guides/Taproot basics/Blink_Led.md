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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ32NLAD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFi7H8%2FBvhOV7rabe%2FOOMa%2FYN2RmwZSY5%2B0f1C2RDcqqAiEA6YJlpz3kyWecS%2B3HZTsP1dt43UVYflHkz0P3ksTtXD4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKJ0wv68d9tbFDATOCrcA8wDPbQforbIOxeCxvXab7rv9NcXAH4NxUsLgV1dhgVDOPO%2BRSi%2FgYv3QtBm%2BmgM%2FLozjsY5hFUWPMq4LarFcWolPfrYoh44%2F%2B6HwzBZQCB0FaXWruXZNicjKnXn81Vptmx9cqjmuwh7WFjtvyC9B7SN8yhfqfzTDpQXaDG%2BN9sVu05ArBmpuH3mDgEZQLSBgv6RRgrxu4DzdMR%2BI2ewVlU%2BxjII%2B%2BD3uCbdJq3cfC07Wk6A1laVHJBKV2arO%2BhGv245ctYgY79%2FFsLA3uh%2BkeJPhQVebOmzHsFH7UFjORp6h0nv%2B6M%2FIESpNx6Zvn%2FGnh1vphCE24q5%2F4rcRS0Jsx%2BO9NbKiC9RtPzRwlGAWeiS1ANG5syQ%2BDzrs%2B%2Bvvy4r3kOpShCoH%2F6ppmJmTRBaXxJoXa6IRN0XIKN6Wy7%2BI2Irrs9M%2B%2FMSB7b7mQT%2BPgD5F4dyoNeAAvhM8xTjc6dmmaRW8fjiiGCCIB%2FgFIGrikpHcmNzRXOjJ5OQP0cp%2FiOuWIVnSN9wCoC0QteZuPQrk5L8jANqrZUP6YCGF6F%2F2HbW340icO5ItZgrj0UhE1ilPG6aTM%2BYAzG4hjXasEHRu%2BtaMYn8Aj6ypFIBW4qXW2SVOOxa09h8TUW%2Fl1bAMO6v%2FMIGOqUBtymXY0I%2FtbhD26Sun7WdYi5TOT0VUf1ouvPw0e8q4gLBSdPVF0EPSzQ3z20ffOp8jXFyjWJJsnqTg%2Fbz7hl9bibQ3r1XWxU0K5RBgh%2B5y8uslnfIaHJOtwVjX%2FmcBKB4o%2FulvBaeCpik6apSg7pjCq31Zv3XWgIwwUhbYSr3iBmV3ib3IcC42l9B%2Fzr3QLoi5nNpcRwXFjfwyoodxoeqaGgdvG04&X-Amz-Signature=ae33bb12cd39d1080abaa4c804f8a2cddca7a1bc9ef2b330ffd78f0b14a6c4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7UC7TS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaugyUnxFv07Pt36GFkJ78zO79518mdz01eBmTIPTzxAiA%2BmuFzitFuI%2BTDdu2GE9tNVadBEJ4k5mVhAoXuxr9Y%2BCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMx5U3DYJm83ExvvueKtwDnO%2FZ3R%2FFinLuWssblMIuN5kc%2BH9xDI%2Bd%2BDy9yYxbWq3SrMkUBR8zZm2n56cdwKhj%2BW3kyL1ZXV%2FIHcpmp5UEuNYe%2F3UEU8wwdIfpJdPvcmRLGLMHQ7gH4hRrshhOGjkPFL6wZqGwkb7VKPLacvA1nM2%2FBNh8ytX3ckY4s7%2Bvktb7p8VxZ1C06KzfpZEjae0Np3DzNwIMOy0QltT4TAxlZUrQwlhDykP%2Bt4XzXspTgmSlrudMgqdtVxlNQ%2F9k6fvPceG3J%2BUSbF4scEd%2BS6XLVblDIBQucNWuKpZ6vmRUP6dlBKVcKoTI3ojkhS%2BBVHo7Z394DGWnE2fUFP%2BhdL3GrHOPb8%2FcRLTr%2B2j2d9%2FOyyEIoX0hl7eQSs5PgZGa4pJZL59zOVbWTNDhxNpL9jIRv16GJjZL2cYARgoSxJnVOBNeCsQsPp0cEo44ms5nB9lH5vOmCwDVm9OYpdAoXLZe%2FEGL9LBcAfEDV4C5Cz6UOOvT%2Bk32BbGDAXT5PdgQTppQQ3xUrrYUbWOgBrOWnUzMlVfRrVXAHJOLI5F7wdMaz3VyKWc7CJyZM90I%2BLoDt5nNHf5RlRIfsOaG8d7leViaH1zZdjRCkHCR0UyP%2F2uFqIBn8eT8%2FpMZDljgWDgwva78wgY6pgEIOc628nnRf%2B%2BfPHeIr6y3A10YW2XnI%2BiIrnBElMqVKDV3Xz8NAL11f5%2FeoT3UHirorRjFrFa900KOwKVTdf0JPt45VIQs7FAYhZCEujMk5K1%2FHYKHyMGOfybVN%2FJVwyxTZM%2Bxt0F3HhxSPSuuJweCJrqn%2FGcS0dLVn6SEzRkoroInbxJdPv08m0Ty4YJ1lBTh8Phb9zC1z%2B5q8pH1aoKeuVBBL7hl&X-Amz-Signature=b00ba0932ed52dc30853a4f8744e53be3fa577915429628847aa504cee45d063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
