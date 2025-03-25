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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5WU6ZV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQiRMOtExC92PRVjtJjguvKjT0i2wHiMixVfSk0T4lRAiA2XIouPibM70ebCo6rSg%2Br41kyBkm6H5%2FGUr5iqBwd%2BSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8uaZM%2BEWCeryjemKtwDy7aiOtZVAlzfMJq5QQ0MAR%2Bn9rOYOxiJNZIk5od5R1amitwTLCFPzZoTRQ01dilnfiCh12CM4SH9TlJFplGrdFP5%2F51ZYpyusxHHVMwCWrtWWux3FjVVbYSK%2BV9XkhD8qH6Yp1KCNnluAhX7x6SK%2FcP4GZT9KoMjXRSlnCdFNqL%2BWpYXBPiSlhI8hx5ThFn1LZ%2FqTnc83S83ilwlvz%2FY2f005yMHDQf%2FutAHMa6lbQzxHRqDQXUNSa5fNQcyRclQGrgAZnYGaZ%2FX1MmZLExkRvgzEYsznx85ID8TxbH%2BOB8tWO3rQHqUlxh8cBQMrv4SyWGltOWSBQFbygpFoEV936rT0mkvxxTxfUxL%2FUg%2BDJYd%2BgqL3%2Bwj%2B91mSgPskiTqpMrBJPVCt7lNSzJOmKZjp5xwTNtP2o2KxYzML22MObaPu7eP113EeLcnb%2BJkuTu%2FfGBtYgSobXKZ0Jju%2FYDTVr1kzcYYNpxchUO%2BX%2BttXVO9iHrmOkfycHnNNIGpVEea4R5h%2FpBmXRDvLHTGp28rvySNx45%2Bl2XLnq4UoSTP90gsnpFGY4TveLBguvxaovu5d9HeK95haAiPmST%2FsjUvlaPKu23hYoZY6GHrv5nXftiBLwqt5LH7W29Swzgw7tKIvwY6pgG6tV4KWQSM%2FV93%2F17rHjGvxmPKXw08%2FFfzcJx6XAq%2FDCZB5uM%2BlpaFwkTeziaeLf2j3Pd09IY07dBHWNB1F8OZxmMgIGKnfHXZVMsLG0l2XVcXlhVAklH2ylWDm7Qa%2BO9gtoHb%2BLbaZZVSaOYnQ%2Bv83cHAjhcgEOiQqpwk4rziLo48OvmTLDm1g8CpIGF0EDh02JNVw1Pg65BIDAoBWRaaVpZo1WIK&X-Amz-Signature=fa8a6af79d38decc2b6a148fa536de769909fbbcc7019f04df16754660887503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EB47ZYR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwM%2B7DKqYC%2B1fi%2BFcjXd4DZYZFYUFmvdhqkoQB80uwxAiEA2E%2BXhE26hGOwnuVc8dcuin92CBtr%2BQtIUUqeMxSU%2FisqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKt22Tcb2T4yDT6qyrcA3LfEV9CAemxvkxYrMPCQbsWa9hOCYaU4LzZlwZrsQMy5b4hZWmy5msnGBjEUkh7IWtKKxGM1%2Flh0xI5s%2FH0oUCuARp3adh30TZmQZdatioRI23t41sM68n2FCW2DfFutjqrLPsAhRpEk5CMNyGVCm973YuNdOi%2FbenT9mI89KB8ig5PZsCSxDtvPdnwUipP79CuVfBvnPNj0oZg6CUVSbmZU%2BK8vaWLg2qJIZOmSvCsjUPH1unhnGMd3dZO4q%2FHq%2Bxl5LROOVO0TUiX3ZwMUAxg8VEWVikM3tt%2FXZHeC%2FMbRc9yqh3COIfMxKJ7So1CIT0Zyuoza22R7ucA9Woq3qMBF%2BavAnx8vyvO%2F0gvfupYUbnYjpObtIWnI2aRqDpRWVrHwNLrMvmXQW0r3WCYY9eVMUQJqEO5mGrBsIrxyFaSercixp8hD3Rv0PQY6sw2SFLclJWGmdLgLQmYBcFBORqNmDYunJfVvkXFKLoiyQ7ePhLQwN%2F4E8HP1ufRDdii8M%2BGu1834ImToICiuNfY1ZkwyeCNixaGBer8rMIkoq2QL3TNp0iH7CSsPyxNGiOhbdc%2BMkRqn8w6cGuodkY2zYDr2JscswlnTkWGuu4i7RWfOBtpa31xq0vuSmM%2FMOjSiL8GOqUBWDsP5KF7WqlO9w0bYbBmINyE7LGtYnadWql2z6rnFvgNcLuiL4bzizB25lSJTsAf5X31R8jPtlXNFnDRo5CercGUwCeS4JYnlWh%2Fa%2FAvlycfZuGAsVESl26u%2FmNHi%2FWlAvhlIWWuKKjCx5qt2rHwg14314R6wK8LRupN%2FRNL01ZNFKVX3m%2BHom2SEfqlXoEGVrYZBu%2FBjcavPu%2B%2FBVng%2FTNEepSf&X-Amz-Signature=98261be9f6cc5ce2f0c7f36c840f09b188ccf5527be94c2b2bdf2651c1b10307&X-Amz-SignedHeaders=host&x-id=GetObject)

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
