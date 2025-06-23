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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLXVTGZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC58cRO1fMl4g7dKbtLczW7P%2BsKxVTtn352GV%2BwAjcI8AiBJQ%2FM%2B4PSiaj8oWcFoIagXTdmUN2PxbMfO8t64KuXq6yr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMySBnjiGMiu449A1nKtwDldQTK7W2MDSbf%2FPNKCo9oegHZioHt4PCzA%2BcHJZDT%2BTAfqnM2ZG5WU8zEeX%2B6GoDPJfUrMFz%2FgIR9GgJno1EvDM5878aZC79a%2BuVFTCVrjpJMYS95WyCcDNHzEvl37vn1owQGIEegkUl7e6wuzvubC6A6AWzPFklzP4kRjvXfTufc72GgftLNgYgNwf31CRQsc3bDjPxVANMSI98JxVACbEOmt3a9itJLQislaFLqBZkCensXCoAAdnj0vs0h7qnJzk%2BqqNXPBqUHDqhmF31cfPdvl7jhrcon20c%2F4CpgzwWcUIH8J9pyp865gaIaaYEp4EWCmy8ncISLi637KQtJxP05ywpFCKANmxnmjxWXZd4KFYAGcmJi0eEbBDsDg3FOHRCPRAVdGgoEhA6Ci%2FEP2%2BKfZJiQDPcGi11DduLcRF22SmrditC6jq9ET5Ed5I520sWys5HuWW8ET%2F7hn7xDxiS3UvIqr4z8zG1OZXadxR46ONQervHAbEo%2FFnEHkixrVrFyG6HeeWOza3E6B8IpIxeetBhkareqeQ6i6Bhip385gR0BRAGgDgNap95x3f5Oc4tBM3uo7Pt7dICMi0q6rP5h3pkOHrdLOmrDSeQUgcR1nf%2FxavCxEXuP0kw8YLnwgY6pgHENrlHP5okRKbh68ONZ8BTViSoXU0xIo6VJ%2BVv9Ob0JAMInjYzEdkEcvj3bCkvNZMLOtPyv3b5Tab1eHihCZMl4g1vdjjN5HqYWuYub4lz0%2BHbz8SnaXmEI8TuvjhRipHgmNiHIA2dGh7JG1%2F2wH1XNucyS2pu8Gyg3NrV2AZKI8OM6bArufWtyG4mmummsH%2BU%2FPzPytCKjLTeUvmd4NBiMfJs%2Befb&X-Amz-Signature=befb3a353acaf89b1b3c49724c79916250151d9f4dd47067ecfc6a0577a874ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=aa9343f02026dd503c6f6834b29a5b4b7a9b43679f974ca4dae2f4a62cfb46e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
