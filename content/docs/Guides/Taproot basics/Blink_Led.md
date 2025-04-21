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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFM63XN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD4KzWlE8uzRRoD3%2FMSD0I%2BEUxPjv%2F10kU2wkt%2FWoyW0gIhAN6h%2F%2B69ybKlU6D%2BIgs9%2FcSRQk%2BOM20HL58V6dqSjfOsKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq%2BqoTUp8uQi3LK2Yq3AP4molFP4p0aLXF0htXT3pk17Xj%2BJWxHMzUu%2BOvQQVd2na3W7mVj7P%2BnegTRmi03ggy8jdQtppFRdizncF0HfECcUTc2iPevKPg3WK7YghpMnZSgn8pz8hrau7JQWZ5oc%2BU5vohlilAV%2F3cCuspp4ze4BZYk6a3jTiciVZg0Qkd7ZuTXE5BhwiOmd1QYE4m2FvD%2FnaO6eZNameiPKfp2S8QuAQcy9HwXwi4kimSdsWAT2OT%2FqSJ4RlI%2FEdRSXhjxrH7ppLW1lSOi16QZhtq4P1QNgB%2FijpaXWfBpD0LU%2BGcaLjaIjRFT9sif9IScyXF7V3rD5PNEZiH61wqqcqalCTqSmathH7G0TqAdf%2FznBRvzn3CS47al7QL7p%2FtGk1VTmr%2BCOn1zKG9UYq7bWQ2rHXiDqSeqiOt9wR5HP%2FSPKr7PVrblvmaurc1lsxtXOdkX7bVJAPZEvYOaVZ%2FRsuX%2FfN01TD3wrlRKxkMWxGBS%2B2dZfnnOlGWJ3AKb%2BrVyRqrf8Bf%2FUKehD%2BS1HBFhHcWR8lko%2F29B7uQB4gyLbbIfXrzm7UfN0Y%2FHDAAwWtOoigsqPAaEJNzVcBSWwIX5MSnhvjDEDZA2suiVduiy7Zd6xas0UOGSwO9LfXoxY9K2TDy8pnABjqkAXldh4VjBKLnFF7dXC%2Buo0ZguJeLJYHDEmPvstJ1gccv6XV82qd9b0wq5pSTEMmigMaRZs3hMpEQCd6TFQRS07lhNdBTTO0TK16aVXu8JXgCLOoGIamiJtvwGtkaO%2Bmfdp91ji8R5xn8%2B6TF%2B7656u5uRwTKhankMFNAKKkJzjhjKa%2FVmyuKS9NQm1cptLsst0BMZiazxjoZFoHEuiXbihYsOYHg&X-Amz-Signature=f534dc43c6e83a56804d529c03cd5696e6a4b3e10404db3990dd8bf014d8ef77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWK64FPE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCiA%2FvZ%2BRnRu0mQsdkBu8GEnZm%2BO5W6gDAPxovqLhPJdgIgco2bcxbJIjHdeboEKAK0NQDLAgnqDlL5MuamRCQLZEoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBwrLuj7WXGP%2Bal5CrcA8OVVr33J8YQ0PxQPGD2wZDAaP5iNfWuz%2FUGbqDh%2Bh9MHuMVE7FpedmYL3NcmhOHMlbXWuGlyH3Gq3v%2FfPThjY3mJ72jyGuZmC%2FxIRgpFSUM5qmuOX2NOIxWhH%2F%2B02pBcSQyD%2BvUQj6MdV49bJD5rTcOriqPe3KTp6xyj92zi9wWnPe%2F6RowbYdDm2oe58hP98Gxd36VASZAcUkdzkiVg6x1F%2Bq8OqAi6TD12rnhTgPfH3pyt20Y%2BPKK3LUe0Z%2BtmUqeFUQ93ll4xO6mLi7MdAV4NIbEKShOLYLlJbMxFcORvQHgfxQQcyGuTUCiP4vyl8vuxq5hMBpTqMwsiNnh%2F4kThCmPdUDjnr9WjEM0ZuVgi3eKM7vv%2Ba7hEH7BbIIWP4tnkTkyAYioOVRSQbVmMQuVEVbkHzzkhHpO%2BV3lh8WIlwfS%2Fd8w9P5gBPoKAeDLnhRci%2FAdSahSe6XuWCNN3b2nRSKdUnGhkfndPWAces7GW0DhTDagSbsML7Q1F9%2Bgek4edEQEZmJ4jv0yZzY41wzh%2FTgONrSr7MzWqEthNM3uwnffgnVTkOyptOndKK7OZOP%2FhN4PCctMMDKMo7qYgodOEYWQ3eUS8e%2BEe3h4VQNoAKGR2yCbIgrxVOhSMPTymcAGOqUBmH8BWSbxbbOzvZfkVPQkIDq7348EUgTGldK28xdpl8Ze1TpI7ofOSBkuZflmITwfrj%2BZ4LbpP2pRnSJXeWoXU3ChG7HTWpUyujLaeYEeosAUs9kGiX2PeodW3wJXAbANGL6aJYWfSUHv%2FKRrN5FHCLr8ISqCuNrVNU6WlA4wu0910EEYQIKJSrjmyT%2FDUdPD5d9lcFB2Qd4Qy39ZULU%2Bzuy%2F8v5e&X-Amz-Signature=02c38242e0ff149b0cee669d951a801a7c731d5dc127acc964e469568f47eb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
