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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQOLGYZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8pGI6BGNeruErBZo085ItIh3nKWUZCwzQns80Fv8BTAiB8elSMDbXEZGar%2FH6I3cqLaCJ9%2FMb5739fM2Vr51gVByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXL7MovDru9wQ3msDKtwDRtNfxVn%2F6P8wpKGbmLCLpfG7F2%2FnBoQjgdS%2FiMJMfqEHFu8DkBDyyhSvjVcsO0k4NEqkavTLytGNSdfmOCLv9YhPJGVLyQ1wy0d%2FAjU%2BBDsPFHLT7datR2b4BWwRxI%2BaiO9ghQMxZMGicPUlVgZqMP8Y08h0JIGY1QVqi11duwcJTeICzTOtJGlXGodKLyTu4m4Yci1GaFyFoWJ8zw1zi8xZrhBHxFoCXPG4J4UI4tPrxnwgynxZoFu3aYmQ0ptyUCJ6W7rb9zoDCS1%2FqL82klz%2BE5PDafNeh8YPoLW34tdGAafXgnQGJfk8k8XRH4pEXZDTjAQ9pT508p5kni4fsJBKHxobShbdHLauSefoxqkxjJc3SSDL3fUAz4GRVR22CwqcyFrtdFQlPVpTOD8ibTA6Olrl6%2F6C%2BMmKrhH%2F6VVB86Cv3SPuCB4qRRvTaEIgPof4ZeemPx%2BmjDrtIzNXEK8z52Vc56ph5rKE8SY0GlwCl%2Fivcwih%2FwZbg6MgyRuc6XyU0DKws7%2F17%2FVVaDcoR308cQUROoqb3wllEjOad8p6T%2F4KkbCi1e%2BHwoKZxBEUhyXDBjrUKBXwSHx2QNpUBdalXnZrRT5CdoNuuH2HpRlzLAK1v6hTAajOt6Qw%2B8CgwgY6pgEVX5Xu7K%2BcCDy3PFy%2FI%2FrJwOYorPgZc2aaqok4trY0Q%2FpvQ9Zbh3JXAgHnjkjSMAptE3Y%2FCc%2BzqDE5FMZ77D25L4429K0S46JHmgsnbOSJgBrU8eNJhgVCF7tqNjnXwAQIeHEDMqPER50FrpeJsgtzKSCJfqr3xAgefwCMiBQgtjZEcYrgxXXf38Ed9p8qgUBuGBQqdn%2FWbghdLvAYReWpudxwv8Oc&X-Amz-Signature=c4b0ba4d6c32494ad1334d5061f82cab83e6aab7572491541b3b0dae1f8aca56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YVRDXV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7H%2FmhknwzmVOgh0OMLxYU40kewss9yIQyhNXxcSOw1AiEAofOBuIcnmQyR%2Bi5%2Biph0zFwbaSKxaCpKqbLUAowqoj8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqfhE4I19TXPmwkcCrcA%2BTMU%2Fy%2Bf9r1jtK7aeLSCmPhkQ1xV1%2Be%2Flro8muxYjuH%2B3UXZ7ceJQpcc2Blef0GW7y5XMZyk35b7pIh%2BnykFLrBIAdcg6r%2FqNQpVenmMDvr6JrvPbHJNw9O24GNb6Vg5JX7SVockIJwgaZKign%2BV5ogeh%2B7aUMIZ8yagLIrYF9RTw06q7Sx4Pg3JPh5vmxYSsUqWTnVtNKdtPhX0zZhY%2FeYmb08s4uaxAW2bwpwLaBtKi7rqLSxdt%2BNGNVywIJUjoPy%2FoIT5usKh8fUqhorp4eAIk2wa%2FUladc%2FAO5PGdLN46yW5tH9WUke1wsUQbnY34ZcvFwLXEHu1QE%2FSiMFwo7afOPWuAp4V4Bnp9XbgALWOxH3E0L1FfydCnHKRNOyRZT6Vksyc7cB1YnNni4TNNWyaG1y6eqGsXtrICJx1FTXKYaNrUlNHFl73G6JhwEAi16fSg1kLoep7kdxPvkK65oIerkJcwUpUwA6o1m7KU%2FrUK%2Fhsr9kaP%2F%2BPntr75MtoBQfTbnf%2Fy%2BgrEDRoae23n1E58JMQ9nI%2BB9IeEfDmdUPpXD4LBZW45ftLnit5sQOsNlH6emq1mFdp2fyHgKh6TWYH2u%2Ft07s72o29FCrKVehvLzRPMJ5%2Bk47lRYXMJW%2FoMIGOqUBqhD1sJON0HEmmTXjsGRcMscsw9UyBlokRr0lgQYWlaSn3y7sFMUHO91KCjDPVOEzQKjd8%2BozwM6YQ2qCHVuJgKCfZAAn2uLsIdGfoTSyEJQFL2Q0hr5h3cxAorZr3gpFmtEk91uv802CInzmhoizK5mj%2BIgbVIB3Foz43eHgWl77%2Fd3zJgEBz9pPdWFGRU6LNWpEdyqhlUp15m%2B%2BDLAwVRKIVzYi&X-Amz-Signature=04e5c9c354b888e51f225946b53e4aa3f0838c820690dea1f1f81a19dad49725&X-Amz-SignedHeaders=host&x-id=GetObject)

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
