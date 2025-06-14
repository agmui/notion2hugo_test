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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNTVCI4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC%2B%2FcZTHxTgwM14sNuSzCK9t4K1CavUjN8ip4HE4F119wIgIcWX0W1ulbcyDmlODlzb2e5QBbuSlEcbLPnG7irEeRMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDB0oEioX6amIPhPUTCrcA%2BkTQAz5gjgYqWk5pAgKFBLjLsEkChMHBZO4s1RQD8V8HLh9KwENquvz9Y84Ep6ivsfvOql9TP1w9cJtVqwnwU3t%2F8cZ%2F26f1O%2FetgU05qx%2BNpbI78eErvAxmSQM8YC3AWC2N5ROm2oQwT7g18sSlnAaOIwj7fQo1visvQq4%2FusMnNXV61X1CRqF89PvQfnCakI%2BvdIXf3RURtfrjNYwxqQfKtPR9Rr2NEWMFgFouiFL6fiLFLxZ%2BSlkXMdo5A%2BscEI53AD8cL5B8R3ERfhywr7FE8iwYXwlbiN319YtUkNgP%2BV78AZExTIj11oKuJd6nm%2F97I%2BJ6yY7MYFR%2F6G7Sy86U%2BXr4KVE%2FFhk3OjRT3QAT2WqdVBqUfN1Yn%2BCuoLLXqztTKvyq3EG7VWuwnyyVVmHBvUt81OWZ66jQ03Yvg9PDoZiG8Wn3VBMZYgFzHh70jg4hdggQhjatMt01nDQ10FF4o5%2Bl3edNpSnKtRZPHNWldmIebCwkWuZZPiSF01E7qKue44jZJXOFRATNoWm9%2Bo0KqPBCtg%2B7cloquwS6BULOmb7eR6dLglrbEfTZU6uS2HU0dkQ7U%2FTV66Q1RioMsL2eURVTTDDNkgmy%2BZzMmVx6an%2FXsV1oraZc2RoMLukt8IGOqUBKek2tUTk9FVeuQrluNPjXsU4LTkNr76cdNEWf%2BUbtAeJqGuTBPamJt9SQ2JiEQhi%2BcIRTJPgGwELNw236hA3RrPeR9scemezeHzDS%2B0AWsocaYfxlwOVdlOczyfXQCcs10NdGX4eaMN9GYWr8qkM%2BunM6q3hdpoUSOo5ARgnaO%2BHJhCjKDRyYWdoTCpJsZHYutmd4%2FgVjpFO5hJSd%2B6VB8R%2FTc%2FM&X-Amz-Signature=aa126fdcdd3f30744d1565b1d53f1df7f1a4fa2f89ddd4c6423b37112086d329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UW75QC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4dobGcjTzONBQazC2QQHvEXKVxQkcjmjgOF5%2BHMAevwIhANqtFIag9GO2mhmBFi9dVBqVoB75Gfjo0XZTQrWXZmTwKv8DCDUQABoMNjM3NDIzMTgzODA1IgxlBYw0g946rKmZ4Zwq3APcYAQS3cvXqwAAZtDAKJ4Bniam6x0GoBujIH1qDdPjF1IIiDdWhPmqk7a5vuhsSb8cfiD64ez%2FeWh3TZ69mXTpCTRe6a29jXL5Lmyl2S4yR6AXUaceCLcfmOEapofuRGmTR6QBePLZMwpLIxv3YugPbFwpES4igfn8FtKDLxtPw4doL3EZ1Ko%2Fwia7LuWNyOQ2J3u4RlizOhiYhBXi6MBULL1QdKNU5TN4n1yeJF96oNFnxYhrDJYlvdW4jTWkMrg0HEB9jdQp%2Fs714wTXxG5ABwsjXIMBYA8Y0QbBU2JiXTsdiSrNB6S3n9TPNHEJGcKQVnRCqDuLjmviJbTt1C63XNpyQLx49xlmegctH5J8tK9dOvVJRMBFlOLjloULmc003reyXs%2FGn98%2FT1Yvd%2BAKeI%2FKst6v7K2B5raui7H37%2Bq0JN1Uw233DS66HI0ABgBT6rwcvBwU%2BsClSvLlP59Da6i%2BlxXlTqcKNRHvKV%2FzAKynh8M5e9aObAJCiLiXQ3rsr8IBns%2BaAQXWeZJEI7RkSirQH%2B4xBE2Sea0q0x2MiLkLjy3RUoostLJj9n9IILEN6yxImhKPW2qL9DOcSobKa%2BDDmgW5CQufByfqbhVPgti1sV%2FFqa1WeLVRpzC7pLfCBjqkAT7Cr3SFphvJg84dHWsDu%2BTtw7QUKFq3Z1tRQmj91cReVMfNl7UWZMCcvjMpNFXPPhhrK4DGQo7Yro7Zj0bJ%2Boic4bqnPcGLVAZkSHBZTVFj2Gdma2y%2BSsI5qLERZRQk%2F8tczVcX%2BBwCkIc%2F3jtQA9pMVdheoS9KSdWGRSLC%2BbVdcGGR9Df4fs0EawOubs1kQp%2FeMJJQZ%2FeXi2DtjVBpzzZnZ2GU&X-Amz-Signature=e52afa1bef2aba4ffe8746af2fd4ae3f6d94f041750326be07337d1fe71f6e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
