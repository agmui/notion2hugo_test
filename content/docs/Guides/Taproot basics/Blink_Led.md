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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7UKG2A%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCe01ib2wthSIazep9NaAyInoha7a2ISUktj8aUBhmnEgIhAO087NwmCdn5eDBlEWsRJ6M18oWUSpb9p2UbfZyK5vooKv8DCFAQABoMNjM3NDIzMTgzODA1IgxX0V10gx5w8x4pQjkq3APiX6PcaYaq%2Fc9ZPlCcX2AyxN4KtYyZkGq%2BOZNq7Q2WlK9L1ZtK199h1ierNouXfZ3nKkqVwLwgPsoxZqebWUr7TQaEWkBmDzjyZVfYfgmzydfLL1YPfA%2FiBKLkZtOAftsNadX9zKnKa9VhqvYDhx48tUbjk%2FW1UyynSPyGQRC%2BY0hl7sOxjkg525frvqrXrjpYwKKDMee%2BhchZsBr5W6%2FApf3BF7KlreztCcn9yzWWT%2B0s%2BOIhSIe1sf8msnc758GlItfiNBBhC%2BMrh0qDwrQKyBn7%2Fd6brWJ9stGs8myyPRQnOTwmLYWXiFqDOZ23v43BucpFI7xL1A8qPu8mV6eeMdeKJ4olSK9nzRMp%2Fes4bjmtTvaLqzQnsfFHGLB95WAxhA8hsRASY%2BLcqZvxED9ZwlzyWBTdcI629VCyLAD6m3zJMqBRMhE3RC3iejoejmwVQy6EBEzcyCBorgtjpkasfRC9ucyS3Fc8pqSTs%2BA2k9WpodMF%2BBXwjBWRcVHsyBk02ERDDQxWlZpipfgVypk9EUf0Y0D5kbrfqWWiz20KF8qC6%2FJ223xrN3mdMZPQ4kYtlN1N%2BM9gmDY4SyHQ5WErHphlQhxm9%2FvcPO%2BIGllTTzKxoXtmfNTv6uzMnTCtrsS9BjqkAa9HVQBQbXOBFm6heD9St8NVqowuITCZjmAM9l5BEfYjrJHhtG7opqusmSdqxpQq1kqZpdCWoEYWBCk4yMgy5fNtzUW8l5FKfWrn2OS7oz6QwPUP6vP%2F6brivqoLJ31nSXaBi6aTze2z3gmrOlOPFFR8vwBImAgCd9OhZwOx9e7vzlaHSVWv5auBnoUPxw3PjkG4r%2BxUHeptDGf6yqo6Lj8RhT6V&X-Amz-Signature=30054a9182f5aa807dbc348664394e0c80beb19b7506ffd468f260484836cab9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJCN6PZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIEGK1y7d5s7f9M%2Fh3VfgqnWZDrI1nTlpfqzb1jNvGTLgAiAKHiL13yQtcl0xIQO0HoVZPPl2Nrh%2BFeAs4L1ccye%2BcCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMz4Trj8MKusRsJxN8KtwDl%2FhUPj9s%2B14qY51WDwddlDBdSjgYD9yQ0llsEYJr%2FW9XsYjWtOIpLkCGbmyqZGDeFdqKKU9um5Ix2mROx4HdruHzIcIoKe1HnFTGo5i%2B0sPa3K7tm4HQRVT9NcD55LR12G77O0mo%2Fjw6d7%2B9MvZllt52U2awae6b%2FCA1jdL8zlcJNntQ9WzxhwT79GBDvvv1ZF255ieC%2F2VdovaQzd6FHK0QbXqV96uJwL3UJ0WyohRsopXbgUB0Md84nrBZpdYEZt4Wio1UM5hXhkChARQu4i04WVdBldzjRBTlWOWr1sgrhV%2F2Iw6fPBVlH0rxkvjZLU5b21G6CpkP0jc93tKEBdVly441cd8Ylgkie%2FVAzybBfnZ%2F0NPaiszzvy5GlZUUxZA0MMDSHZWd0oB%2Fi5F%2FdcLHW5viLbzQ9XSE2SND150j%2F8pRKy8VDR7GLrIyX5Whkfozsej%2BVXonrWx3iat574VCiCJj4hjXo4iTsrO0Oew5uHs%2BS0sn9zZ84Xmap0gBtE4XcEuo8tAila0JVhjJWRVbaAenVSPLX%2FWxwbhSnQaOcCU3340QHTnAVTfxWdMC35LwoAOO7vYbq0eqnukhWUcS4Q5rhHR%2BSmePLremrJbksm%2B1J8AkebGA4hQw%2Ba7EvQY6pgGUoXcKbQeL792mo1Mei4vPIXBttZXLEnvG9jmqd0pws4EPVFBZPTKcOMq32PTMB8qEJydjh%2BqdCA4Z%2B0pIF7p4oL6HXNZLcF8Gh9sQ4pGUqlVtprDXuiPdGONZnS%2Bb1peYa0Kpx3V%2BZU5Oqhs8JyxJzT5uZUSn8IOJkcXOEV8BcrxLdPMLE3uLnMeiysFrtN8tz%2FwEm1KH6Acpj6%2FCaQDTmJKXrba8&X-Amz-Signature=07ca4a8aa6bed43622592978177f398a24d21d568536ee76630ab4a8fa01ee90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
