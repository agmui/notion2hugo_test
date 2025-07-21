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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEUIOJF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNcrkx7z1wU9uSjzGoEBc2z4tx5xkIXEHLpx43PFRvnAiBlAw8yBnJ%2F09fB4JyNM6K2AtjmCMvHc%2Fz76NZjuF0E2yqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7cCtTTphv%2BXL9fBjKtwDh2aW2YqVS5GgQ6hlrXlxqtWKe%2BhAqPLjqj47lTvYDukRHu0C4S%2F9nNjC7KImN%2FdJ4WpZdihYRA4oUOp9bLW6Ael4Korrbwas2zG9bO0p01NncwBt1HEPEPmsK0kBzEGEmz5IHSDSvs2QfR4T4AwMsYJzM0Nv%2FawC3KhEjfNilPTFqHTW9wwGNX4Lk%2F2HRptylZEPgq%2F%2B7u8%2BHoCPka2C2oSKa7J6ldkeAh2nR8aMhXndySuNKtfPdHpXiBvSjKVUMqrWfnABw7y0Kh2dQ1u3LHr9LxjjTJV044T3LdzQ4sz2hIhZr8Up6eKxRd4anSjtSRKLFNu1Sa2WEQLvsJEwaxd6ogaCEq%2BkeuElGdwe2B1U4jWOyoSMdMi%2Bc66begFIL9eP1xC02qU%2BBOZ2qnHCCs%2FMoErVLKx6lJ46%2B9wfV24ASy9m%2F%2FUssXwulZrIJPbppZBC8DBdr2cHL%2Bmu4MTdeGb0yW9pTNxV%2FmcCPPleII67CJqmD7YeyjXfsdovRvp8vcIBYpj25uYSzDdrom7eqdnUTC3DRKq5aM5ZsqQgluCdEi566Vec0zDpfkBWJP0zcFOTChPa1moNrYdrV%2FcndJ6sjyuuES7H%2BTXRoalGi%2Bq3yPhRqB%2Ff%2BPF9pt0wsI74wwY6pgHFPwRC6I1n0kyj6MT%2Fwr15%2FEtVr3TIUCTin7vEk%2FGlxSrGTTOTp%2FjDpzzpbizbmzHSgyrelwpralYISfSIDIF9YANj%2FPV6xiqto2J4EIcwMFl6YgtEE000agGdLKLrtCHC5mQLYafMZyFo8HwB%2FwQFUUHgHDk3krGQOezhhsTbqG%2B9YK0VQxL%2FqD6D4uyKKkoSkKo2P20LKBoutMCv79arcnZbjU1w&X-Amz-Signature=3e2fe84e1177448553f38b87e614d8b160a1898411298128b2b04da3978d9ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPWILYJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6NcmRc0HvlC6sic21e7JiE4ezPi1xHvCJr4C0d0RwLAiBKGCr4Hc6M7eQbjCQC1bGmsJcWR3tyqhMDu1yvEVM1tyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU7xW16XLWdFiWPk3KtwD45HsR8fjktbzo0BzA9geQNVZh5U9i7mK2aHT6QVVxkbepoCklrT2U6szWLIIckjlZMuORfCeWB9unYGRvpsNSAGHBifqKMK6bsMEgp%2BnDSKxdgEDjLaxHoLJCVJPptNheI4kIPm%2FWuT85qawnMHSNSBGea2WDd%2BZz3MTx96MGPrPc%2FaL3Hrg%2FoFZmsno3r5msQl2JeQ2nVvUVy6f8VRJXfAshDgCoT6ZqUm%2BCqqncLCNzndiviMiaG1A7XPABE29CtCixqrHIPwYQBVmmuqoLzvHKjbrqbrCQCxqZ4Ns0ujIgt06Hhd7UKLYzPvrtJybAyRIC4XHmdU4BQ5gBzkDMsaNEv%2FR9rjYP3yeJLhuDm%2FCXhcJ0F05xAMpkIY4xhBQM22JZpmTb7j5aAtOXA5KhmkoBzJU6oRNj%2FlqwRhN%2FjxN6t6kyP%2FMpfEjMPgE21AB7S9gqwR4a2b9DfMmdkdYifSJpXdrJqMVdIJYNipk1g79fGQyM6ofgpwmruGBuARaRDUhb6uLNRhvV8WPbAGNgFiesQ%2BNN8xWnFuOOZbYYYk7wNA4rk%2Fk3oouPglwruOy4WiH%2Bx1fg7WXJIduKB%2F6fkrXYDkCElQ1cgE51KsHN9gQMgKL%2BPFDkgZWFOsw%2F4z4wwY6pgEAH9PEDrPuS32CyyXhZUaN9E%2B0RAK6Ik13ReysbNNtEEr6GK19oLcffibt2ruYA%2BYus1viLLJ4E%2BEogF92vs40sbeZJa1oztU5fSXqPIbKPjRuxn491I5osIQKm6RP5YLLGpo36KvD0IY2w0GUG6D%2Ffdu8F%2Bw4zi936rM83oPwnpRjUq4RA6leB5eCkRaLuYHeZCPMFt5CxrNExYfMhkDCIHrxp3Yv&X-Amz-Signature=8d6ab0f124fbbce2f32006f45ccedbd121f776522135c52bd03207fe400f54b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
