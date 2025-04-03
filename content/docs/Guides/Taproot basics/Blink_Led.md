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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WLXNGX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeCwOCL5LTBKrq5DD0ysuxXk7Ztlx4Zgyt6EQTyBJZIAiEAp3oKAW%2BAMXKhCnqVJwOLWdH1UA9rzP%2Bm%2Ff6Rzkh0Tz8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPozRFf887JR5%2BLGAircA3Qph3PmSBc8zmd2nEJ6CkjlFIoIi4jNoMfiNBmMmWate0j4RTxHzshQud44WUqpDKCLqFERMcAozSWFbACHdae40mtg5anD0i%2FrhEAXO1ld1kSUSyplL8DqyUkDZSAAWUuAAhcVVYq%2F39N43iZ7w9A9PhLHEJ3Ow8GlgMwdfZvGouycBsmraQjIVSVwkEyu22tocwTC9yIvsEkCJAnL3vPS9dwM33BK4tFHIFjwlxp66kP%2Fr%2BRONC3cxOi797ojCL%2By%2Ba9TrlnrOykyGvyoF%2BHkMW4yla2RuRjGdHKIuP0ul%2Fnt%2FssZADseK9iRogVzjx1NEAEOBv2T5REfHUwz0A8CLXt0aU3cL0%2BQCQviJZ%2B0xHfQ2J3Wilq7JW2DnM1nDYJpjNCrIrkf2FBSddU9myoDYByl2Bc%2F5hFMmzmq40W%2BuQ4MhG4iiGUOm8y55JaJKsvfkO793U3wPOXGxDVDz65izmlKVExW8UaQkLjSSyxiOyCvMutzeN%2BL6PUda6V%2BKRx%2BetE7DFUdMB2gT%2Bd%2FGLyBxv7GU1HzxizdQFM%2B%2Bm8EKB1OUDZadrq%2FOs2ZksO%2FJjZmidBIuCYBsI8qetMnCiTT3Vtzt2vA9NUJtzyKZx%2BcVnx0mr3nJ%2F6I5ervMNicu78GOqUB2GeoKH2oIRGILNS%2FZheYiejeLRdOswTZ2FEVVYWImdfMfJS%2FCZR51LRbgItV2wSGAbA8svGW%2BvwFFFuIebPLy5AQaQnu5kcidU0drVlxfxiF8iYkRT2qCEojnP0wbT9xjNBg7OWKrX51l7iGrnb%2BX8plM6t7pMhBhuRl9%2BZu6sSOBhmS%2FNbO672S3ONji4pZ30zX1m8YmukulswTZGZiPIL6w3Ul&X-Amz-Signature=35b5099fb43495017212844207d009f12b7214a1c81ccf29069526366480b8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMT6MI6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDABHyHqLkBYURzRVAjAHPrHydojBWs4nw6dBDBIPE9ywIgRfV5o5nZC1ZuHCjRrLwx0srD1GYZkk4HWPRCkgK0E64qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2RZKH1d0Fn7JZuASrcA1Upbq6KSAvROpNUkDj07v%2Fu6ktU2qSE2nbVVpLu%2FUSlW3conwg%2B%2FljsDP1LFggle5p6lmFVs6twcC78r%2B9RdVm5YnWhRbKvN%2F7LWVzZR1kgDCvj%2Fbbba%2BfZU2NdwISrNJTRRXJc9RBFhfHfyn0GzQ97I9tBk5S1HrvUuwKEBCdx9wcDRaJBTFwHBi0FoVg6QvGttxNsBd2uNE0am7y%2F1bOKIZ%2BumrU7qv4U5p%2B80E4voHtzKf6TrvdtlfMe%2FIruEseHHJEyefOPzQwa8XNkobJZVu2q4ZJsd9JfO2VQnhAddR6K5gnkqiAlSHJNUx12hWOGD01PxQZI7syavKsUipmID4adxvatZKj%2F1MS1CuPuh%2BH2iQt1z81tVs5fSYNEQJcEYg6TR2Czki48Cj4bOx8gP9kaSpMqYTN7uTnDfy2cf50uMzFH2mUxFrLMqRXO2XdKPq8Y3rdQPaDu5Vc2P%2BAxOZ%2Bw0XqqjFo3keWOS7pn5NeR5a4YRyY3jOqLI0jwbeCWWviIT%2FFLrEUxpd3McOESICOB1WZTXsjhuAvkLwZQLwpRcCu0Q5R39cxdEYwAzk6bQSt3dGLKA9TH60Hcah8VH9kkZoQiJhdibKW8G9f%2FCn0PlT%2B93fyorNxTMICdu78GOqUB82zeppK%2FTMgUexaQr2kaG1eB%2BX1M%2F8MNBalTqE6NshUKt6mXqXxGE1KlRiNEhFUZhJHmYA95g02apzYP%2BM5uPY8D%2F0lYoFNzo2phYCYEfeNhPnlXHOwZQ7K64SKFzlRu%2FCIqZA7v%2F%2FBykDp71hpX5A%2BOri9jWfm42gsY8EeT0aI4nBLEeyiB6ZoeJiHhIxq9xbLqxugGXS5Jv6I%2FgqZ1y64TWtry&X-Amz-Signature=936137786d12bdeb5f646421b3d8a11d9299226ed5002240260518aa418c2cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
