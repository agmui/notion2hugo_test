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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ML6ESK4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCLZ3dlvLPXDk4sxam7XoeeMwHjjvrTZqLQCcLnapjLXAIhANE1GjSzPYjAmmUmzsf2cYTpZ3gms1z9DROJfiiu0Gl%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgzZKIypu4%2BoMzOvRTAq3ANXpDnnjow0QZ4q9xADOPJ4dTBTq11ZqcF0vwNP3UH3mEpNwCndOUJecR9CMT%2FTvnTC0ajHaYREThkICSPauOD36ttDJyEZ4plTUlSoi3Vo1GtCbuSSOWi4cfEFlomD3iaDnlcVI6uXYZfc5P%2B0n3UQgztrnnc9bEC6niGSLD78bIBDkEXEuCPCuGvPN8tpByP01KlviAI0aQkT4SR3eKTyAUe17k84t%2FRxN9WVANYwY2MLvVY6alEl0%2BjuK6%2BFGZ2WIB86MlDM5gGAfXjzaPi3CvXQmV0iEq3DTACWezoK%2BlzFfjNfstcWolGeWh%2F3PNDXTHeCoeXM04KCYcwi2pnm%2FQc24jjQbTzSryZL%2BGIYpAOpTRivyZQlZXBi3W4ybwbxlBJ1qnf5FbRUBcU9DnPMmOVHnqxEQZtKzIaDmoE3Mn5tZZcr6aSK6U8nZUwS27QWF9LI0X2WQFCUmyOCKbvMj4a2rn633w8zhzrakLquhe4apeckUXNWjwCGfcVAzC%2FINNbo%2FmHv6sPLjIV86OgtB%2BgcYIxV1lSs1rixmWRlatJdQy%2BzVtVZca2EPl9998xee0OP%2B982X3VVerAnt%2Fs6JR4rerdjDULl2oUQdIvma1OqDiqemL3E%2BX1rTjDFtea%2BBjqkAUhWclGiwJUXraxPvUJ1SU2bFNIWrKjwBmsPbdX0SYlEs8n7M8RdAkCg5IosPAdEqiVVlxr2EW5FobSbB02aXbxee03f4bsLcPy3lJkEcH2hII5z85ws%2B%2BOHfmO0FhSt3ucoGobgdnGi6TyeTvbM7jpei268Q40cxaYVA01k5U4YLFl2Rw3ARPAiA9EUUYAY5TA9QfLQAga4vqmbgh%2BgvtdSYQj7&X-Amz-Signature=93c12cbf4e16d5c39f3ee92f390169daedf794e56ca7b20b7b996a6f6f3c1085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKWSSEKT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHlWETrXHTW0oTjOo%2FD0Pz4JIvxREZVFE6xi%2BxOvGwErAiA%2BVyrDLrX9PnveRADHoEh0bFeQVfX9bYDi%2FDJu9oIfpCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMiBwGNONtl03Cmc%2BeKtwDcPoC0LrybKmkg9QNt7DYUZ9pgRR0dKs3kTHT304QeILTslogeTYdwGloNU5l6EB2c%2BJm9dc5EOowTY5mUpp4chZVXP7RoE09P%2B42Lqfztx6PGO%2Ful1W7uI9XILsedJlLZZvIoInoFGS3Nj27vWEUwPBnmeDGuQaWTQPFvEOQDdv15WCDXHChECNkJzoaw%2BqtNdXFHmhGMBPffr0J%2FLxM6Sah8U0fg227ROcyrUswVTwA29ewgSyk0hM%2BgVVuBb3pZLo1VsdcDTSqyMYnyiGRUrClKh6T1x0nYIUsmOEBOjU1YT1j2Gz%2FgcSbY8W7%2FKVp072UUmcxok%2BavMOAbVr%2B%2FQn%2BBQoec5uiqEFVf6uFLpMansS9zVILaybJIXOJCjGXhVqeauy1j2vKahKZZ0e54Zf%2BCWsflxDDm1fub2snA1LjW2%2BawthdSw1C50edHY0kaw6tUbcFlqaMMg2weYfiOjuV8Yb%2FjR%2F5z7D2QS5ksEFe8i%2Fu8f2cbYopxp2hYzFANEuDZNmH7dYWTcO%2BJ1BUifTr1cwF9TmdAAjKM7qtHjp272DbakQR1RhhFt4NstAT2mVXfoWF8OSySby%2B%2B6NkST4oQmKXnzPjpdUjA%2B%2FyVwbRjBW%2BNgIYZZJiskMw1rXmvgY6pgE3Rn%2BU5wLF5WmatecpyWD%2FyEi9UhGt4u3UD4tpMaF117kOohpvHMBRp%2FWWpPXEo957Ghr74SIHqnGTQpWrB5KWBq6VG%2B%2BVSVPARYSvcsJ501c%2BI8qfOJrUBRt0Y1pIAQJWQvYoor4%2Bn35SCMwsxFBm0IipkXETT9seonT8hjKEt7kIw4oIcjX39pr7C9Ca4C%2B5jhuqa9icX7FV%2Bjhw7xagtOhyZqCv&X-Amz-Signature=8bdc240bf78181b5be7cc1a36009dd3ef27817d653621620d9a15929fcdcc79e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
