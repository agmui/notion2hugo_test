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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666E5OQPK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBDMGwHDU1YaxE9%2FH5seB4voObnKBHAD4P%2Fnw9sFVD04AiAdximSW2wc2HoyqKfdqSM1XMOiVAgLSUpZ%2F1s7kkcuXCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnTAnPuWOlT15VHeKKtwDxG%2FJ41KWVO3W1bIqdwCVSCXjEapdLGQlMyZWQA6RTfMqjRY55w860bK0opgS8G%2Bzm6heGue56iOWe1kaAGBwIELsbBxRlTYCvzE48jhulmeAWiKnX4Ch0uQ8pL3%2BuNXymUVeUJg9w%2Bd0mtscYAOCRyJvREVCF6xdyOIbRO19T3dKCKg2erpBmr2hae%2BEVSVu%2FeCbgy2Yk%2F%2FEJthKPtBkv0BswKtjnsvKvUCL0tFjV8dgmBlOtF5Zhpl1vk%2B1laon52vPsFZcA%2BShcOAP9uRyHWM%2BHLjg77%2FTaSMJIomC%2Bfo4kfmLUl7G%2BIDeOboDfKn1FWQsAm%2B416wYHIGOewWh0dpV2KlQPGcXcZpdro%2BCaeYxFFd0xmZo%2BSlcRQv6366sIJ6TGmH0F8s4woORpXIwKnMd6dPKz1k8GFHbU2dhEca3oDMsz1noVBVJiKhqwlcKbyPV5797VvyNWRCSkjTIR8eBP0P2FJdSNyrmAVjqU297QqzFNF9ZfuuA7%2F7I516B8MlM0%2B1I4UnDqe3kLFdqQWXWCbHzjuGZhLb3m6VPmD2T9j9h6kzoQ9rWwEENnQwCPptmflQLTMNLc8ZnHFaiRagTC9gLe%2Bl4ACT75qLGnPEq3NATAFSUXu6%2BSS0w7e6axAY6pgEwsBGr5b0zg74W9M808mIcFPEhvhJUDH4yDSydPwPwTSkNzZ9o7sv0RRZOkcYkfpY8y0MLM%2B0sQhRMdnIiX2vp4GTjns6828aLvhHPsiklCEgagJ0x6MRr16FGu0R02x5oIZJmiOQQ%2Fa7ScMhEPF2SgZoLpbBURcYX3Jd9FjnAXWdggFfXfz1M7Zkjwenk5SVLQ4ZU4qk9FWMbm4nJ3pjwPWguSEM1&X-Amz-Signature=7a4bf12882b8f99896dbd934e17a3bef3ce9ce55f135857a67143bae2f00d16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DQI37D7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDAYWKA8qVTulT0JwnyhYkfuHOEne2XAGxLmLrS6kBo1AIhAOA6pT0LoSJXjwjWwpaPTUW4x5DwamOXTzonm2foTc0sKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYNCqvvWSv2O9qMWcq3AOHcsW1W4wFyu1Us8GhPYXK9nxPRfJMwrYLQAbVQkIe2hgj%2FBJFkDRj%2B0NPDtvThqmVCCivOEe3xC99ZgiAutd7IpeJFQeHOndV9eb1VxvfzvQNjm8ZNyyD5PvxVBKTQdUv0ZSJ0lL9zE9%2Bsn5%2FhO1W%2FWpll6MxUepJCHGHVyPujksD0D1NaTQzzOVvx8hMrDzceKEenEDh8stZ27iDQKCwgmfffjmR%2FUZCH3aK5nT%2BvXRAk91rJsRxK54zoedRea420eOxR7LReShFKHiRWonZJrvn7riWH4Is42l%2FkjxraY6nLsObilFeFI725UPFCfUH%2B%2Fxyx9lTtP3D5J2p5F0%2Bu9w0yB8rVudenYD5R7WGyhz9WvaAPqBUe3lDHsH4gumzpWRgpELITltFd4MZ4PTcfNOdwPni3u5f178zr1QX0HniMa1NxM7Ih7HXIw%2BOrxbnWmfH7Q9nP1cjiw%2F50Ntu6ipM8MoLBmjCW2M1E01YJIIgN1Q0G4u40SdqlUGVG1mlXwg%2B7NMG6oqM5u%2FsQx9cbJZiuAtcQRetDTtv4kllida1o%2BeBwU%2FnZIu4LckLXcz%2FxhU8mRYfAnJZdCK0IkSRkyvSdyi13zN172CSPzDbBVD6RVMIlqZfbYwcKzDE7prEBjqkASVwpRfhMrcXfRYYKUNTmm7Al%2FSLa8JQV947MQjH6bCitgltaqxEHmSieDtZMawy7LSZjcrL9ZD1KkqYkyO2vnpbIWOJp37Brihg2zPwySZH5zFYlou3dQTHL1rUxXm7DHsMiKU1FyzHPFswYQtWXT4Pn5BnjpLOAEheTAzLBgPrvDQ3Y6VfeqvoQ1pjjZ%2BaAASiBXmkxYawZkJSYQVCrL9O4MJq&X-Amz-Signature=4212aa76bedd521878ae952880b1111345bf5b13f732dd8f1565d3018ebbb21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
