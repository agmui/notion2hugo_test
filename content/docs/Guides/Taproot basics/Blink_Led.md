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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GVK3ZA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbHFjozNaZFzdVfnVm6ECfhqGupacQKaimkw3LTQSoKAiEAnMjP2VgG9qx3EsX0L7Ap%2BX7qhn6VQMVOrwwMWLPs9akq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDM%2B1ETa0E6o54nUFpyrcAwEBDMa0ojcyKekU%2FwLOhkZER1rRQeWZRZmkeVQIKSAwwMhtpSe9RLXzJwPpGto84xcj1FzvdsLWJ4PMzHEh1LBMVsMvhyQJsQbLLgfyXvRVSt0gvKUMvDCT3C576Tii5q1VkOTxLxjtlTpUe4%2FK8JQBZ5royY24%2B6dVgef7vG%2BDLTnk28nvSgt3PTe1lxK1MQzk5gmFxO3NEEwhBNBPE2ooWYmQE4k7X5EbzFVzZUK%2BgZ6srlusd5VcaVwLzcjXtm0UTxJUer6F8Ii0Ahr9E%2F5Q6dxnn%2FP8aimVRhQOiHzg7f5UUrh3JfotGX2QnZdDt82NLo9k61ktGUlsUwRbCsgqVLYVlA3ozWQAolA5IJNawPb45rjQJ9tKJ1rx5dkEl%2FoUYZbK1CnNVDlvMunwsWVpI9euEpu05BXPV%2Fm6bZM8T0sVK%2BIBlL1vWudugff8758FoNvzVSW9Toxo7yR1ylXoHH90NJpva%2FmpFl8N0XFcQGnryIn9PAf2mFbVoLJ9%2F7gqMh%2BQ3wrfHaW%2BYGDfxRNCxo91yASBUyvTbviZ1ojZXgmNXatC6BmTKUd8r53f%2F3FJUmz6gAZFJgMXQQUVNb1T3fnG%2Fffh4IiO2%2FW%2Fmc9lAdC0puSQDQOH1oHeMJ7Dh8AGOqUBQC9Yp9y89B%2FJN3Q4MvexHL0v1bV0buz3iSEJOf33aJ5NROWNIZVmM8AwvidZKjjh1lSC6PdjEky8DnhbLqk1dpqUzVZYtYVwjZIiRGnST7n4%2BQQSYpEG6gE59c8Qu1ahHW8ohgrF%2BPRo6XgWD7wMKhQjB9qTPwA1ht033Z9CD6lYNVeAsYiukNNu0uBdKOcFYfcjW4AwDjrOBjVTHTF208vYMeK3&X-Amz-Signature=143fb491d37ab8428f836c00f9d79a4ad35fdb48e36106018658cd97a3227fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOD45KY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbpwcqYDQ4IK7pi8vARhREPv6XOydwUrt7Zu58uOHsAAiAJ2Q0jaVGw8zoiF8VB7nonISAbZ3OmFr0%2FKr461XxNaSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM5gPu0RkPTtUKruKVKtwDBqPnSPPgRoasfK1G6soN0l%2Fb0yZ4zPsEnBleV9vUzu6HdIxZPKFlRGJXt8DHViwWqsLTSApz5PtJgf21XFzzC7UJOz5gcXM311xNLs8tkRbKJUFlLKSP91%2Fhgr6FxxTTJXc0NAZvwppPoPuF%2BmYxwcapiKWib63aPRvEMeO3OoLTSX9dTzsOvXov%2BfDAlhJ3qQSofyngkobExdg9%2F8jDyK7Pcx6MWDPTsotv9cx%2FLE4XIatGber2WUTIvhlb4Iy9fUNLqkjjkIB3DBaF2Naq1t6sEOAhA0kETTwXSK%2FEjnj0X4JQA6z0PuDCZKZoR54XQc8lL8y0Y%2FziYrH2o%2BPTaQXjChP7pIrbAF7WErAYdx9vjYqqQ29yve5rgamxr%2FVNufD5PM8B8qK1vczfhmlZwx2MC3yD0gVWMSA2%2BJvZxnmK%2FeFYGVBNkzdEVMW17fQoPHEflrEwXIqAgNbTPW7oYWVKLMvOZyNUXtmd%2BKMC9fAkeDBuPq6ZTJd5MEozDEBgb4fNQtaualmh%2Fgg0DeldasOHHmTyfeSVNv2ZI%2FcVuTO2MohmYnKQ1dWcvgMGjGLPAgJ0s7FI%2FOefDutEbx6mq63mJqBFMx7A%2Bsd9L%2BTVJnPl3bHZhiFALDPMSJkww8OHwAY6pgGfne6B%2BY1kO3fsWbdOdHJ4XV8ZCkpjOYp0CZMrZvpeTuySJf1efqPusO%2FrOIRDn%2FDLd8SAwNpMxwyU66JZzC0q2LUp0ouD8tdTVD%2FmpawVnM8oB7iG6EfuvKsiBeiSFa91nU%2F%2F48YoQNI3E9QsKMtpSCWI51hdb0nsYY3JiDdUmSgpoIqWrH6ugP4yQ9vvZ5TU97U%2BXJwWfld2CsRpoRmxkNQR81XJ&X-Amz-Signature=c826134f23ff78cec2d03c3f87888bab828f33510aa214a67ce4d787a83e7a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
