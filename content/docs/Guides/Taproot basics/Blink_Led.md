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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTYGEU45%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYZe6rAg5MeGERAoW0VlUdv20SARXYK5tvMG2%2FmqzLTQIgEqWCQrwS8NX9Hwo0rgc9fXcGJAgBCEyGBjTfJ8CBypwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD88jWCPgbFmJxIrJircA730C4OC5z6iAaGKIW%2F3Mfhapye5p5LH4RwG4r5qAwWFxt8CGF%2FCV%2BXu0dRfjxHZ%2By2nhca8BexvvtehPfm4V97LgZw2Eq9upabjjxVPYMqmFt0rZZM%2FBw3Mm5yJt2VklId0ynwgfavqVeGYzD51rXTH40shNvH8WO%2Bn%2BWByCkAXef8eo9PSWVSzoxgQgyeBHMlDee8VvIFWlaf0WWMxgkOUk%2B3HgxvNlk9Ac26QS4xGGt0qEmR%2F3fXDkz87rG%2BHYXuTX5iS1EbX8HN3Z%2BnSpZdsD5A3CRlOHs6l9kQBMfFBzpYnw6oaV8YIJWiSsOa4U2%2FownjKQ5I6NQBSO3esVc70bJIRFsmTIf0tTlmi9NvqHbiNF7wa4HRN018k7pSH5%2FBTaxEtjO6OenjRB2SpcO6S6688UYK1l6Hj0oDGbkTUZ8B2UDaDOJc16FsrviOyAmLCvoRTUM6h64ZZ0avz7bRSK776RRtSd4gc%2FFdXdaGK7Vyw%2FQI2zasbcgLQmafrtItt6ujTn1te5LzdgmEmoSPX5IeKM3CYGimiJXqIgMZz7K2wQxie17D7X1wlJ4HiLy5oK2cbss9knW0xCcsxEw4GJBpx5OJ71csPQSfRb8qAIwbs%2BMLF9vTQf1lLMKPByL0GOqUBzidT3N9jxNg6Q8mHe1rbf97UyW84qKSWCFU8hhBTbq4c1gDRGNGGCqWFkF0wRr5GObGBDetvZ5Lv%2Ff%2FH%2FZqbt2OsvpV2P1GJDCcUEqh97NJIOweVSbIaID%2FeSSUlh6fS4DZKyEY6IMJrKqXuM3sItUv6WpLOlzDVz1tUp%2FQSbnW3XoiXNCJKCRw2nU8QrWLk%2BJtzP%2F%2FY%2F6%2F8290SwM0CsRZRvVsV&X-Amz-Signature=e1791a03ace0381ff86eec909b0bab4ef344b126be8429f6f1e4ae4accb5df8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUAC2BZY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCgZSVAKxaJU9l7XEoaeTzLBaQeK4DOJb1%2F8irK1F%2BHwAIgZbDxkaP%2BEtWk%2FCD9DcOUgBWSxzAfjXUoOJj0YTJWkTkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDP833hLqb64hi4IRoircA7m1otwGiVFMMxhp8lf%2BYNmfzLeCmQDPJ4OpEgmsXpwyyFHyZvnnIub7Pla0NT4Fh062YCoGneLXAsTiN3vHQfiFg4ds0%2F3IN8Uct81cvVq8%2FObCeQ6IkdFWzSGWjtWRqDxR0iUsAzdKVlDy35534mggYaF%2Fw%2FoKVLfXPtdP1JoynJmgj7ybszPeKqOeo0v2Hd3C%2BVMkvO95%2BCI57y2EScECoPv%2B7Zmirmp5ODwaDXTRAqqwxMYz1NbpsP7xcEAsjl1u8wVQZakDkabB6figeeQ5h7MXwJFFNkymn4NqhmLpBzVAPYW0zIAmDoZrqBjA0pq6%2F4mIMGducFhmx%2FGxAKBWUpZVbJ3hnZ0iSMrcLAn%2FYVXt5c3SqUCa%2BvsPbykiyIJa8YXNX9IYXH3GMmvsSowD%2Beaa%2FX5mPFYxrvbJ1UeJ12YEZZECy2N7rx54f2Hedki1sh210cxLldw1Ww8odsSfoXiVEDUfyEK1IzNTxNpMkVmvXDQskmAYTNkDC6gz31gO00ifJqtUEKDEKbAcsr6oHeeBUts%2F9%2FW%2Fg1N64ReAIV4ILZpph4S01cXVq%2BmifO5X7XIZqINJuyRYSFWQ2eTh4Q0GkJLxROglQsv%2FwqPKM3TeUNwB46mExjP%2BMJPByL0GOqUBHhfyIVlM2WFlpzuq7y%2FVoSfM5KiOlt66myvueR08Ia%2B%2FWcTam20jjfgmEkM6nxBmlz%2BzSfDHQ8stI3gcffUcbELp6wXhRSEgiHS4%2FOeSNenAqaxjTN9KWgOtf2DdG3k5cwI4vJHbg296oexQP57Ix9j73hmloahZIo8Aye0ncMwMrIoOSB6btLtZmu5S4GnxDhz1I7DuNcWZ%2F9rxz68FWVWiv332&X-Amz-Signature=afae413915e34362913f0d16c65a7eb1cf461da41d24874bdff1ed12eff5e2da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
