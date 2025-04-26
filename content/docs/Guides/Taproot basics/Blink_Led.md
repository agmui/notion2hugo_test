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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQOPL4P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0AJLdVUCfEpksfdG2DC0Mq%2BYYMnDZqtdqP26GmiYvgIhAMlAa3%2BV9W2goBygS2VS5OniGdjyebLKKFdaLpaFPHHHKv8DCEAQABoMNjM3NDIzMTgzODA1Igz%2FkwYMA5P4iT4mNTUq3AMMco%2FthAoIqBjQ8CKhT%2FTLXkzezeIpRKlbHXAGB3SAw%2BpucXnSS0X8T%2FXU7w1c7%2B8jd9%2B2XsKHjBgSMi2yCu8uN22kWhhn7l083rOKXHOC%2BDyjaS0kPbS7SEIHUlRdKN5BdFnW2WzVNNYgBX2gxoHiz%2BnRfIscUfjoUPcp6rDtg19xgS%2FbEx0GQS3toH3A%2BY1DpOuBGPgTFhslumMa8Oi%2FMzhbqrkAcFRqvKEKJNhz6R0ImFDimk4hlo1eeyIlfKeR2FgY96OrpaMMD75ZRQ3hghH2G8ORZ2hjHzZyWRUkaFCvNjisretpUERf79r3GwVaPvrY8Y6UAL2Ihn7xKmr4a86aKF0rsuci0tcGmkA3sCtY3g172J4ayklCTe2kHwnBixqbPeaU3kt59V0Qf9FrKKx5DYy9JbDVkPO%2FLHDOju%2FMHdLymz%2F%2BAcueiQhRGc1OZwaTFtjzB6v2UQGoxPbfix2qzLkzW29Jhm9NQg0bw1N7HLt1sGCHILegtB20LZZz0xb5PmtAadl8Ua%2FWYNLc0xy3E1zkPZeWyImPnjGpkh56PfPDhFGE5Ckpy7gS3NjLt6rta5rIIWXXtMDw4gl4JZzu854kALyn1wzk%2Fgu0DIzUR94932WlLWbmuTDIhLLABjqkAX9a5QXS7HD0HHpGbRjQP1Gio0baR3UOUjWZDDLVMEa2xgmPhXjlpypuRiofwBUxSNVMsTm2xI92Za3KR9b6DcBaXUjjIA5gjJUvDRlpoaoWJ9ZYHvf4nUboj75WB%2Fwid%2FGRQJSgBtSRPEMZ5OXJJk%2B%2FcWiFW9duEc3MgrwPka1DgEkfopUz4TiKAJi3rIHDeH8zrT6K65iFwg%2FCfn3%2FfSCaw2Vu&X-Amz-Signature=3f464d5591ab285fc43de1e1696548a803a65328b9d3c45f883ce43049f69387&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPPXSUN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEITB1WYKOBQyGriVvRkqEDAViMq1wPl1gH%2FKD95%2Bhp2AiAWb2dc4xRGGlrKeFj%2BwgzZrqcVqSSnHkX6W9F%2FcfEk9Cr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMMwJd9Bemh%2BdxI7EKKtwD9WjJ8zOMnWR9n90AnnsR6UFohtGCg5SCC3RXsBUJm%2FD2RxmbN%2Bvavp3nLz2mOU0VRxU603zZ4F9FRdQtb22%2FjP4xKTLFkYwybeta6L8qEOJ8mcPdhpvLB01ejbZsnNyzaI0IGqYJMb6bGSCv%2FUIhSqef6Rao%2BRP9CYLMuUNtmxCAiVtuRGK8zzVJtcPEl1KP4Q7XaSob%2BzUhWM6NkgIMeMyoDDTKvSufBHTghJQ1Bivt9Bj16b%2F5T%2BOV0vuCXnxr6GIU8HBIgbI9XSf5v9ZqW5gJHtL8fDyBEMTplBnX0eKIfhM55E2%2B5T245fhcwFVrqgkNko3kY9fRIREEb7wmzd06oSY0Y53kEFiENhvDohMDKib4nlJL7J%2BSKST%2Bl4XierpXHa6tdNaRBlByeaMCDSsTiJ7GaL75576NzXlEI67opOEDIorqcLOflDjlGR6CqnxOZsvtgvUvlOZfQBVNTEkIq0Xm%2FUdkB9kFnW%2BEPADXG%2F2aN0q%2Bog0NSaBWRYpelLoHvMBqV%2Fo3Y1R0kS4SyrZvYHKlJL3HvMXNinnVeOo9LQZCRfMnZmrpRppT9wdjdNuNwvRgXt3lpMj7nC0TFh7e47ldDThmfLsG25Gdi1ovvGtXWDdQXs7kquown4SywAY6pgEiMKIdlhnuIF2%2BnZtjGcLkRYmifDP8kARGylyxQ0I%2FMmAsVqv3B6DJtYPM%2FbcgY41Q48%2Ffw%2BEmK6ggfko6B3QYqYH7kCBawRrfKi9Ue%2BSy29MUetIdi%2FVav0AHFm06Xz%2FF0uHVGa9BnqRkcBV4pt8pACzFxG0IV4G9dQwvo%2F2c74IhRZKm23Pyv6pObl%2F2gqnQodv6iIIXKs5qhQNcoeX78B7tV7zl&X-Amz-Signature=64e90ea2ea45e2f68418326a9263037578f7afdd8c7f7ea3ffb790fe5aa9af33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
