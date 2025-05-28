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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2SAI74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApBlylqkaTVfF%2FoblKV%2FS7Pccz5XA%2FeiswSRflI%2B17yAiBmfVtKSvYnUzkXYg6OM8XLRdlc0VO1z%2BmMJ6j%2Btn9vdCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMyMh1IRboU5P37INuKtwD0F59GVjbgPDWnZw01aXX%2FaV4qGZzPp2ZzTfhuvYJ7PwaNo3jam6nA3NtDKvRKh3BrKnAsi%2FRcCGtleGt6TKydV1ooD%2Fkw29iKJxB2Ydig6XZZ5pNV1Q8mFV1zLjNSxRmprxBJik9IGciFxMTmVkpxQUs9YjTMO3DBxvWOUFeZ9j9lTGVQoJNwLYq3%2B9PgVmLRzEPX7%2Bp%2Fnma3EbhqyiSg6NOnJLsxsRWi0Q%2FONF51v0gANLXHzNQHMOtl2MlPFwK8O2hqSO0SzQjBia9%2FkIFJknbcmFBW%2B2hbTpe5ft71HimG%2B%2FnXyF4BzC3bnBMWbAOq4xFA1FUeuWCAOG9QK8j3s9lVszjUUNE7ZL89ZMFEvrZsgYvdQG0JqzX31iT83nOwkQfgRv1eBYkHrGDwnGGWYtkUVKakv%2Be0v7GkYwKBAmDq8r7z5AE717eYa9J4XPHfdw9f1LgNomJBFFxJRXhNFMx0Luw08QALs7nqsdE6Yq0kmVeDctSAL5zQpztmcwADweMyMD5T0lQ2I6ySQZs4kxYxM9JWm%2BvL%2B4gcVGVdmVuWwWTxPMR4CplhRjX96IQNcLVfhD7oYS0Kutad7iIDe6fyGH9Wsvwa5KYVPsdbgyDRLLian2Xae5ojB0wuMPawQY6pgFGYO%2Bd29YgcCAtkkkOhpVKhI%2BsHPuJ7wvxae8LM%2F61EnvtZ9Lmnkt97B1vQL68EB%2FMzMZ1sANQsWhVb2UHCMagVBnb%2Fyz3ZwKTqkb0NO%2BdKde9nhT83tS%2BVNbohDqIolnQm8g0l5kOxP9zv%2B8sM%2BRrzW7bCczL7oSjoastuKLyaluwxANNj2Ki7vMxg7FTK%2FuOqifgnAXLyMie8jGTiLlunX%2Fo5%2Fd9&X-Amz-Signature=051d7c965e3aadca6fa8b7d23d82cd000899fc93f9f978eb98962733e167bf8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673X5UDOL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe%2Bt%2Bn2U2yfa0m5oWeFxUuG6LjeAQD9hrZc3SrRUeKFAiBlDTP6hjAUl3%2Fde%2Fl2Y87XIKwf%2BTui0TXvL431kBx7eCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKMujpqkvHQ7ByXSKKtwDuS%2BKS%2BFvSNqASVkCRo7hkJuhHjzTWSIFsnBZ7unCesHAgviKeoyIa7WivV4%2B5oNoDGbGCgdhSFsAYfShlJdvFsse4FUGsMX%2BgYXh3er84C3i9WLG5n0kiiWrZHNUtElAKOg6yvCS4vzaX3uDswQH%2F3ZnwAzTM8OQMj3vSzkbDxyjy5Rv45owByA4CLbbZ5rYO7CDT4V0%2Fgor4jgj4owjZJbGxauslRfuBOqQ%2FPo0XfU4Tnh6WHqYlbq33jEOCv8qaDVUgVHAq3V6RK2XN05s2Gna6CawpTPo%2FFgcSJcOSO2Pho06H5AbYGew9RfDBROQQOj67k7LjgBbSgaaiznMVNHWfEdCd6oTx16VzOoA0qmN9vTiKeoz%2B9DhzBURmY%2FIJDc7dBVHc1KeK6qiDSsf7OmMbXgO8xUVFxuKMoF8oa5Xe75BpYaGL1lg3wFZ%2BspzPzF%2B8EI6OuDB3sG7QeuoGGT8dkH8hlQ%2BcJnKOmuqus1DuRYb%2B095xiiZnEPbii7ZkQUgida6CxIFXUWmlBq%2FD0cK7OK7HJnVKelWBk1AwSK%2BDCWCNuLWNgLy3xnN2xG5ncttwtbLWAQFhqYWOPIW1DU3QbyxYAdoTHTh5U0hBHihVsg9Co8wsvuqCegwz8TawQY6pgEcHY%2B%2FN36ul%2FAM%2BBeBT9sE1rGn6UHYeCF8c30YlURmD8il60FDk7xokIrOE6o%2Bj2ItYyjiejd%2BoV6ExC5uCMgAUo2hpgnbZNN3DkZOPEtDvNg1Qx2Wkh%2BpPCBv9T3l5IMDWx82nzZHkh5%2FM3KLqtPYb1H63HJDkAurbbdloNT1ACzOpjUemwPTTPrewTM6q6Ziua%2FKRtyeIJRzwAeH1%2BtH8guPXny6&X-Amz-Signature=2a554ae806cea0d047dda049ebdcdcd9b4fae2bc3eee9fff701cafba7212bf84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
