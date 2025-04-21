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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5N3XKT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEfsn4rDp9EJGEGLFR9gZRp%2BOldf4baCKE0LdyJYkcvAAiEA3Ojj1BXVtmQNdbjJezocIgyPloa3e2z9sB8SaxGtyhsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxRH9JvkVXXyrlfFircA1%2FfsYsqHhltT9ojwulvDQe3wjuKxjOWRzedvnne%2B5mkNkJ9q7m51QGrF9Cez8vYVHw%2BVwl3dcbmoiq50KM4hY14tKSIO%2B1GGLJoU8vOSzH%2FTerqyej03HkLUAY8XhmCBWllGnM8E5D6BJ%2BmN14jVFTds6H%2BX80D8%2BI27FLUW0SmflhHBlAQ0OF%2FfUcZUrrv%2Bzl%2FyZt4jibXO5Wd6k1GuNOyqchQNcERi0d1gSj3YSPTENVI9VbhTHS9jGDoyl3OZrCGf21njBQiiExySTaLD5ZS%2BUKKlse%2F%2Bw6MOAeXLuy5d9YZYbwdPLc3Zm2ui7LnqX75IqyOoWRbLruaS3d7LiuTzNsmiRNV7dflSdoTAFPWWPbo%2Bsj3E8OaXFNfW6HB719R1kFoj319kRyQAAqGTj%2BjS1IGJYp9XcAowfJBTl5V7u9r9%2F2ZmZjzuy3ujMPHftdKnxfAdVLC3AbyvuqQFWuz63A19j69jdiQSc151vQUk0EP0uHJpDCEUMsVM0Uko10yhyZMzb6o39cHBheL3flJgh%2FaEQZmwtZfUDl29yExcEdxVjG5JSwqV3JPdHpD6R7IHxTfvW0hLZ2J%2BXdrudKTkfulmTV5OkzZl%2FqjK0vXlWGi%2BRV%2FMf0jS3sbMIqjmMAGOqUBSi3nuhYJhWIApzf%2FacQEYVlHmANdG%2FgbvXrxN7rhMQ0n8sQVTBsfxRpj3sKT3FMK59%2BEtk6bD5%2BpBeKuWxK4oNSucgDxGuV%2BTR3stBAwoHEMeLnr3qC8y6y03Rd6J4rmokOr2fM%2FbPPHxT9Hfoc2%2B2X7I23I0XMdH9J8sybbktQzCFTTPhgjGOaO%2F5FnrHUrqBltyJQBY%2FhtJyHco31x%2FyURnt2j&X-Amz-Signature=fe21b726500b88178ece3e35283e71ef87d98ce166854daf087695733874c7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYPA5SQW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCu1qNNzsaPd8kUPdO%2FaUqZC9wEUTP7%2FhzD6EQS7nqGtQIgbKUjp%2FRjKDg%2BjEbgPzdqEwwYSwUgUhNWC4xw2y1F2XkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCDMaqFQjcdBnUkJCrcA8gC1sJh3dNNS5C0UKx86OXR20g4%2FBklxyEjIYd3PJP4hNa3umLBn4oo87RvQF0u5e%2FL8zI37n3cop2o8FFON4%2FOZ8ykUYSPhO%2B5dGAJgSl4sNJhM9N%2FJ5PysEDP%2FmAm2FKxwQbVkUhHqrzWKy9Geiz67FU2ht76rgX5vZKGmJ4C9m5gelqv0nkGzjG8bmOoLfj4Rb33GFMSjQStKP7oMHuoyR2Ck%2BjBbsiop%2FQEssam7%2FUYXuOmG6qQCKTdKerkuje2%2Btjso8UtSXrK3Qyco4UgTQZNjrqESeGes%2B2u4c145Btf7PdacZBgBCCWgL1palZBmXJ3K6sKOQoR68JEgL8bGDjSaJMBknfglNptNrTtGkb0vs9ARyeFnAA8icucOI6JouOzsM7lEsP88uK6KaS1VJ71hqOt8UnxxoaJgVmqqU9CoJ%2BslhhdPFGOvy2ECk4ZkNxuAF2%2BcMYCwdilVxGyaqr9IB%2BVXtyKqHjs1w5IJ3Xky980mCBf3WgJlBywpCmoiFrr2hwbCgi%2BTBGjMQgWmLvkiztsV8y5hHCRLHq0071yZt%2BMZI89xqAlxSMsLCYLJTxhpDUBezaw91rGrGFH8TMvkysxXrM1SRKnw4BsBv3Y8wKvwJvyvgNjMKihmMAGOqUBykAek7BylfZ8BmlMtPvzPdZ3Htg%2Fd%2BnkAV5fMJaaq%2FHv99hcM2atF%2Fpq7JYg1Gg6TYziZW5TnQJGsNotrIz7fFXwA0zup7I8mTKtV0%2BhFL2PA9RfrWQ3AoM%2BytWyglpYwAd8dEkNfuEcCgSZhFUfuZ%2BvXVgCGGUlM%2BQreqopza8ehQrcG7sxpKLlEV2uz%2Fhjgnuaow1WmoC7fbvtKFiZxAU9UDlO&X-Amz-Signature=af4a51bb8adcd483952e36311a470ed9747fa1b728511c5203e61dd75b763b92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
