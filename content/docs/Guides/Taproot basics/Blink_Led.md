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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAV4J2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPlXvjNlxXcDP7PjOJRW3FJ05wLV%2FQP9Rb1a7MXL1JAIhALOtiw8GDxi%2BW3lmqNfe6OJYn4Oc6nUnEtfVg24MPqZpKv8DCHAQABoMNjM3NDIzMTgzODA1IgyELxAFlnUYlTuBwfAq3ANesFfDhsbDM6ZH2ddYW1bz9L7ir0JvO0dZ1xTVYXdVppdTR4UhP5Um%2BogRNXGkUR3o8dJP%2BpRaewyo0byO8qfEXmJgEhDC19z4hrSmC5xImIoYUjgQD81Zryg2pEFuA5GOqNi5wGf%2FsoI%2Bac%2FSoM1UIDyvao0Ihr2kPL84kP1HywCjU4gx1z9TzcgJzMNQJXnfdbeh2LvhKEnAr5%2BDUHVAQlv2Pwb2zV%2FVDNVKv4Zsi5akOmyEkUTueXox7K3BEoO6%2BTX%2FEpXQV0%2FGFvC0IHIM8D%2FM4KdS7E67O91bDZl%2BHVtRoFF7kgaUEO17soTdZqbDe3VPflaInz3eNG0as%2BtWospT2Gk6jBbADHfTXylyB0gmD1drgBzjPbUTgHIwGXjKi%2BHJB%2B1IM1FaaVxK4cvCXD4%2Ff9YSRrVOtD%2BNx3CRvyfz3l2t6Wb%2FL2X7mstATi5z2TRPdvbg04MZluwZ0DeaHc7tHoLNxbskhBCHEcxngTXeu1Es9jZGs5bcrO5qDkgI7m6VC6skMeRz2o%2BvYT5eSKlVymIMHB3G1eBnUzGAvteCImbEjMsGDwQQDdT4Wp61tdMWgQyqid74aHcJOZeEHfb47e4TEkfZ1EEzkZ5VLbfM7Qxe98uhARp5ZzCJ%2FaXBBjqkAX72RQz2jkt0fhIjX6IMPjmoCu0iTN0%2BN5UkPoANdx1jQ%2B%2Bo39ZFSFyrQfDTZWBCb49QeVNDiic8TVSMLUd785OcWpxuCMXdh5WeyRTRHVnN0yNA1h%2F3pRUu%2F7nsMKnkiSgN7EVqifJa%2FWtjfI%2FmCLjg4VPzsAhbM%2FhK8YG599WWXe6NF7lYR%2FaA23MjKNaD4%2F1l2qTU19BXIfrev6BlzV08UaGk&X-Amz-Signature=029fe167747af96207ff3ff8d95efc188f6713b1ab64f0f88da6903efe215b91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6HIGQNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEQMZ6IdsmA7Z6B6RDCMsRS%2BlbxER09BLsEaLE8Of9pwIgE%2FX478uoX%2BmMJidnrHHNIb1vAf5ND%2BTCGGIIJctG4Vsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLpcwwaM1BGLKo2q%2BSrcAyRMUXRIphhPl1ga0T8w70mQWMwIQupblAlD1QgTs%2B3D7fj6G%2FDTpY0TfPbNcci6%2F%2FnHvau2kpvnnoAVCngqm9wH0tgpf%2BHyJfYyqfLuZ7tem%2FARWGoCf1PQYLt2Mm0i6ijNkXgCMfwBKQVEgWUVTF1yDiY4iOFJ1EvyYXNXT1R%2BtMgYRAVkyxVFt%2BsC51e1gt1VExSZdNAnA1qMA2%2BPF39LRPBD8tM7x8qXEU59QIEXCDQuhJScn5SBa%2FYafZJUxJW707c8zaN3YvcWWMBR%2BZvLchx9p9PP38wUHptnlfKeREN6qmrpkYGcAhl2g08JliiZCYj%2BNax39a9dukWzenNTOdsJZ5RS7z8RO9rQxWgAIQkV5r6IeCnzhYE3X%2Frsf2ADPsf2gqX4y3SKOrR5SuW4ZxstucNc%2FQ8bzs68IeDAGHe2Uc%2BnD%2F9HBDycLAmSzUiKg%2BCSiLBQaN8e3MhEfEgQjiWTOA%2BT1rHX%2F3wYepAw%2Bbrayw4tLhg%2BJxqCLkZNeqV0Pi%2Bk7Vwg9WeRzen0RU6c5we%2FNSxYpsSDeU%2FfSGJe4%2FNDGKImrLFhc%2F0kxBwUuDZm%2F1z4ZvJ3Sbl%2BhgPtPHHdbA2IdEcfg7pb4%2B%2BaSeUa0bbwHEpkWCWh8K49MKz9pcEGOqUBcgG%2Ft5MssD7boyZkLpiObbtQuKagussJMrKwE4XjYsPmzkfrzniIEi29h4G5qn%2FDGHFmRUSMOkHxsNvQGdqbi6V%2FmDwfHKJ0fFExqQCy%2B6nNAeYLbXasTuFbKp9Bvr%2FJhRg66n7pzuDihA9H2gHlz3uCetkiM7uBKMUo3vGch4d2VIXjBXOMNKuZcojTNhi%2BHJStupbbDcqXaEageNMQ1Bfi2pgL&X-Amz-Signature=c9e0b1cc747046618d44a9e1e5ccec36eb896cb1b6025a51633bc9d2d9ce0472&X-Amz-SignedHeaders=host&x-id=GetObject)

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
