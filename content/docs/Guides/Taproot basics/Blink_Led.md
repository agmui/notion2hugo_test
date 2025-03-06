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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKH7XWEV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT12L3eqwFsflbaHmJdLgb0zgwe75B5Pvk4NU%2B5aCJkAiAqN7Fv%2FH7pGeAbaAncAxROTqKadVdk44sW0Vdp5U%2F5dCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BOtPcMlSegi75OlqKtwDCLQ%2FIM0lv9ZlZBAdRkQecBD1S7PbejSWfDx1VOagK1X8w7zMo1deunrGUTzoYtLtlFlEDzZvwGaF0S5ELMb47Vq4Ly0nQAKP47FHGG8L0xvijLWcxZOYkldHhNQatr%2BpUQpfWj9gbyjn9qBDg8DmBckUlIrWmh57uk%2BIm%2BtXUKBMhkQ2Ip090%2FpFSolNkGx3yTZoR5IJijr0XewvDSMIXS1OcMxDuYch16ayLkM%2BwiQC%2FnjeRJP25YzJRoJjJijCW2Cm4RE%2B9Xv0M58%2FIOCWBFaqbuJDT8XgGZMJUx1pygkEGorQqNYpzUuR%2BUr5247YI2yZMlkXJNDas%2BhZX2fcASg7K%2Ff0ZEEyyO5bPaJWtIbabS1hKSyYgawbtfL6BTdbw4zKbzghGWuoHOw2%2BAx625Yi21FVArX4yf22DEN4l3mGDZgNx4y5UCgDxvcgPOg6ohL0nLqMw%2BfqownQQAL4hk0RSWnW1BC7Tk593x76JPBz1bWSAAxVwX9G3Mup19RiYUbgTCAKGHSFfTo1u57ce6OhQEjp4vGokdHBzl1Y1kE%2BC898RUJ%2Fw%2Br7IoGXPSHut%2F16DtHFszrIlLys6Xl0iuoweZ2o2Xwy6phyELc8WltRI0ldIu0ObRgAE0Mw47SlvgY6pgHl1jyHGQ1dOqHyRnwTE4s6OdbYLrYygSE%2BcVofwnp%2FEi%2BhQoNCW8Uj0kJnhLhib731If0lmG7TC0Qtz34emaze8KVgfabrqP7JET2fZR%2FvwW%2Bls0HkdJNBEZzHw2hahWA2gZ%2FK63GuphqBUgtN8Chql12I5pMDJexmXC%2BK9U2SohVr2r0v7zSg8IBUxdNusE7nsUizFQ9pw%2FtyJE45eEWXIgaMXXFS&X-Amz-Signature=be73191f7c046843c3c9feb1c04d09d735cbac5f230b233167cd563fbb08df77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3SMXJO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQAkZ1EmfNIqtBw0voS2eK7APnIZPtaIMx1XFtpVPYBAiBvKzObJrMA%2BecpRXpYhZxFsIdejcz1q5LOrNEoji6c4Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMi%2Ff1oR7DRAClZUGmKtwDfdyHdK0KUBdvB8xVaf%2FVzvQisYz5j5FotvF%2Fpa2qrxa%2B8CpkdcThiuBoB%2BsRENNaOYZvepSsfFRzimMOT1OyA6h8BFI%2FZbkvnsuj2RsLjRk8rDUc%2F86vb%2FLCpZFdq2ukrbL5%2BMU1WZl01sqR41H6uvQhefD7zZ4J6eswLo2Jio2nTT%2ByCZP8iCol7Cn6o%2BcwcxqgwrmOh6Q3hCdbJWC30n4uLO9Ksq106ajRqqZV79HZnXfANg5kGU6g115xYbRomDx1Cy6dzPXriQPf6c6eiKQvXZzoVULpLbLGFwekOV5MtKZVL5iQQHb8JqXxEoZ7%2FmZkx%2Bs%2FSMUZCJidHppecjz5eNj4Oz6Kos%2BB0%2FvwALm9DxOgS5O34vzkzol6qnXYR4gz6WWyqnQ2h9aKPVoX%2Bo%2B%2F8phn6YRskvsef6Fiu%2B%2B67YVd27YiVufkwOm2Xf3stVKsLxywvney4fsxtUycECYCd2GDyp8jr6vIKYTC%2BrELRsIcKlHf7qZnAPVqo5m0jr8qOa3P81WVCtMflgZGsqm1zebsU2NB3T7K0MJifTh9DzU0RMd6SIaLBBYOLxK%2ByyKvQl2EA46i1kDuxc08gZuRul3qhhF2C26ao7NU1IT9%2FvDUKdYtQajpeYow1bSlvgY6pgF6iDdpfO9C4AtRC4kRevs6AKwH2ZQLte%2BP7KyDJ81FLrO1CzvuzS%2F6PHXBYVJXpGAI2iA5vZCw%2Fy0JvAWTRuW4YSRoUqmG1cSTUEF%2B9E0wORYTVmWyNylZVnwprEfeZ6kOy%2FcLclZfyT4U6yja1g9HwQmih26y5LyUruMBq%2FKo0Ao6m8iT09NO69Uf72Cw3vBtg9%2FFt0CaiMKlzi12kK0Ynuqel7O4&X-Amz-Signature=10189ed88d02405781032d18d02a256812cc401f7a2d3cf9dd4437b22511b119&X-Amz-SignedHeaders=host&x-id=GetObject)

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
