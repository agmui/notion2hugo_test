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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TJY4365%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAY9d5xyoVOnVsxD91muE5GK9I8nWQph5f0RIK5cmCKQIhAO1nl34I5l3a4eGMkOIQdhHoMfmEMlDr2qmbE7NpHVB5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyIkjvxiC6yjNGPNocq3AOXcPVbgrDQNjd4Rj71AVvUIWUFuWElYDj98wChgxsRpRL2PkXMnTr%2Bpw7Ly5K29PF9CW4%2BPV6GNk3A5UfwEYuY6lNE3dmkOFOadiOi6FMFRY%2F48%2Bi67WUwAM0hMTh6YqydPVQ3Nr26uyUSpS8OkCp6hUzezTuU9NDk%2F1vxpnmOnHtcN3YfNp1aeYFAntDLaRpWLc%2FDPklGF1hzEwp6kV9sEQHe29dzOf4p504jpUSk%2BzTEs9Lpde%2BTOPXZJhEd9koqo8A8fk%2BZUwhlXvj6fdQIrHh8GgnLuPEhaqJWhlcA%2FDCGrIGPGPIrOrvlf%2F1%2FLD0e4h8gZiR6yCOLI%2FI2rxPJBhDGq1tuYtSWvB2QuLTBb%2BVWxl7rNG3yj0kncUXmR1UjnLXJC6HQfDMR0tYwkdbX1Sr18AtjS4Sry%2Fykmwg85iLtG%2Fz89hZosLunJL9CjmJyu3CzVPIfRDIOryOdHOoMWX6pL1UfEzgCbs7n1HWt7%2Bx5oCZ1MZRIbdapSVwzDqhw%2B2owT%2B2Y5oEllIn%2BbCFpnrgRc4K6LmscLHnIUQoX1qrzMGURk26q1Nrdm%2Blx3lJ732bUSdZ2hIRXHhbzXci5d5doUkNb%2Fn0aE6OXXR%2F2b5AY%2FB6%2FRb3QtzsDezCEk5i%2FBjqkAb2OQVNfZa6TCKtQvMsuC95a7tK4UZ4j2g4i63NwUo75ssl7%2F4gV7nlXp5sXbsWXp5gItuTsU0VvcRJdx8qO5J6D6K974Wmp7hBr2Mgv9eKZ4%2F0xdBYCze8YJIwZc4KPbVk8NgUuoBWyFM%2F%2FEp1dGD6b%2Bl9QHFpsVSMjRMGrlvc7Ka81B%2FU0%2BevpW4kRel7nCDP%2F8v%2F8MUspH39nPior3ODonBaL&X-Amz-Signature=c9a9dfa16fe0965fcb7be62b23e16fb09b642b4728e38fcca7bb7297eba7aa00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFEGLVJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQfBBiTwfNZnadrSn6dusK1fNXFOo1R261O3Ql%2BY16oAiBLxyaxO4GuNMQf2U1mrxG%2Bn2CVbWRH%2Fq8W5ImqedDf%2Fir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMNrBN9HepvX5nur%2BdKtwDpkTXeU%2FxAttHCjZQdAWOyi520VLc9cDhhQ9hs2pBBSIzq4UvaYoJkyDnNge8KBV1UqKEwr%2FSlJlDHpEI%2BnT%2Bz07ixDIXlhmqjJGrOmw23YAFvN7uT792f8Pdrq5wU0md9%2FKsjehaUfdHWhQYNlbflasmjYDtc%2BlhzXmbhjcxM3qQXFtLTnDYroZC1C7r0oQu7u9WXFp4%2BRywANqhEUlrWpRRYdQ1o5nQ52Us6E1W8HeyDBGqz6jZh7N80TpweG3ryAJOz5z3Vtsjogyy3mNB%2BCg1Y%2F0%2BfzXrKzuDB4AIIWlAms%2Bg0FCU%2B%2Fqk%2BQpY00VphVzRW6%2BDnK0xV3RzO6PBKwdhk7FBWkIqX0%2FzWlPbtlYWcrma6ejBMwtlSokIUE8IXIzwZc91p2%2Bh3AfTiQMhIZKv1JGVjX0cRD3z0ILPq5fL3%2BtHukcyI%2Bn0C%2BwCCfxEoylD5VUaLHJ6YU8O4vryJy3aZvNBpFkeMiAWNi04n2KvUXhBkIUaVmXy7ZsyzZT%2FFjkMDs8rt3Be2oFl8E%2BePpxN58MveYDJLvOXhu5TxzkktPbkRS5gaKNeU5fkGPapz4MxlPJtj1omTzZes5ayvljEQQaexgqIw4qCU6zPqe59eZHDPG5ETjSVA%2B0w3ZOYvwY6pgHsa4x8PwiFvfOpMZCvo5d6z2m167CdFmms%2BalQ2mSDoLLpa2Krz1LgzODIQgiRZ8ooYwuufHDed5RevFRaO2o4ZTZSssc2zyvvf2BiavtZT90CNt3%2FamCAYpNCPCez5pvnpGq2JjLFfDRPvHEN%2B5VS%2FrSCTM2EGNMvmbJ2qEUxXbIyeU3556uRf%2F3cGpSlxPTAx37sNJZO84WipNJPLnSDwXlJaf%2Bs&X-Amz-Signature=e1296999166c4ab3ddaca476ff2015157840f8bfb9ff958888fd123750ffe6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
