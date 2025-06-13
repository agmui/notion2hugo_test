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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWLPV2EB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCa7DMn5EjVcIpNn%2BdRolGXlhnEA94o9etrecnjZjaiigIgYgNa2JEwGdiQNmCbQ39x27AvJ0OEcvKEUaooJiBs%2BDoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr%2Fc8DtbGsTwolKvSrcAxmb2ibWVS%2FqFCtifPLOKV9iPiVjKN1LkYMtaMcT6lPr6iOwiIt80KgRj4hA9Wo0htomoj3BFRIky8WpaZl892w9b8oTLmU9xJts%2FIY0dUFExRTza3cBlmBO2zO1j46yavQvifipO1RsHCAT50tSFeZ%2BA1Im3d0Qvz%2BL4AkzNdk4rIYPufy6eXSS1%2FKBg%2F7kDJHnEEFShNDtXzt%2F%2FgV3CKmtgLDCBLbpFjgeZysIeEe8%2FtRVSP4cRmPUyhFGbu6%2B6FFT9LHpgfHXTPaAiToxNSHQmfzI42kR3FCmHVwhbNu9M6H1CDMQOla31Ghe7ikBCDp9apOy3C%2F%2BciZocMSYhznhMEf%2FmryPmdAIfmivnTIj1QuYMulD011rpG%2FzlyqSPZPOGppXrV9kTPhkL9HKrKbz7n8a6%2BqGMR25h7an1DixwRcxdPfDKBv04iuAw%2BsY0%2Fs9%2FlK9MM%2FibFkMtaEiwqSkwl0e09AlZTCj8qz9oB%2FneO0pafL9g2C2wUAyH4zPhnoA2cl1Thsn%2FlcGxa%2BqOr7fssbJynSB1bSe7%2B7rC3iM5rUlEiphOH7twJ92712y07kIUMuKRMBmbYZboNadPmQiV7C2F0VV%2B38RMiLj1%2BK62On8LQcGsOuOcFnGMPTTrsIGOqUB%2Fyl3fi%2BvhbMcfUz7XHcgcONy8Y8UJi%2BqxSJUjt3%2F2Y%2FyUadIXL0%2B1AeSYAY8c2eEtsaMCQecuvO%2BpG9xo7I2rHrON8BSqZ335mG2jD225Qn2nTfJ1%2BjCfqz8S08sVBExWf3Cc%2FdYo2vjs5Tf2Oh2FjH57VgeQT6O2Ow4R7Loj775e1GAd%2FtbO3WIfzqMhY64rOjrE1P5EWCReyoPuGacbAYSiOaP&X-Amz-Signature=a82eacb3cfa6c34cea48133fcd3ebbc21cbd4fd9cf4220f94bd75532070d8468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2LNYKO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEoJQDxwOtUmXxkhq7x84tsoI3pvKKYCr1KBaVmflpZYAiBCdFORqRAl0pC83ybg8rM5XwPkD1UU%2B3Jy7nkCSIyTtiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzsrWpC7jElGdavuiKtwDtiySjaRgv6PxP30s%2BLBxwbZlSqnct8B%2B056ddJ3pvfLyINUjKowIfAi4e%2FR6QLhLoWkXOLblL2BvetEdV5rhR5baBMPoB6Y%2FUBzwE8BpqNZEpRAXfNlxLhksZ2bBgx30cWjs5hhRncGVtXOg%2FFNprbc1MEKESaB1m1DSsigzJE21EKHeIhXTAB8QMClqJXfZ%2FY6qWVp4xSVy%2B14tOzflaW9DfYiqhu3wlBGENH%2BI7mA0FLyUYXNZX3GFdCN%2BxsxgIUgjwUNPdmXou3Ct%2F9pCSdOruA6Dy48Gltzd%2Fl5p8Utkgg8kWLmkdw4FrK0Wj4vGAydMn9RUghvy0s2FD%2B1PlQmPMxIXCnX6x5kt11rF2BQIHdwsKt%2FjdyCjTbI7NJrfBw7VlebmCjHLRRqKT7kEbuKxf2rZf74BnDuzWKOP3%2B%2FC9nJla2kf8Xd%2Btai0DBvnUZBaEqy3rwsMwC2jnlVAiA2OWfLGsGgzoaxH%2FmIja29fJ%2Fcd%2B9q9iWfusXhRPzFgr9bGZpWeY1b3JXXg%2Bp70q41WRXNr5rDlDqNTc504cSTLNttFZNiNhyRA6Qmg6ETePFhg8zEISlPBTQdhVSGC4MLwsSaMYWmYDLr4HQAGzhO7k1kuix7lHjU7IMsw%2FNuuwgY6pgFF0xagnxplqMG2DB8WziX58scrObYIH2g1gtJKQryYu%2FrGCPdcawHZ55TD0xVT6sCI%2B%2B6U60Ucf0qzsSTA%2B%2BfaogFr5z4z1eN6aCuNdl8SjYMkDNow1K2oe3mYca0MKmEBB2Qjklk4HUAo2Bq27T7owJT%2B%2BO4pjIRQ%2BKG8o5WiVxr0CsTk8t7bgtlu5dsSqY6aIHd94nMgWUr4jXPBQVXwBvDDl6Gz&X-Amz-Signature=ba6fab601ba5a4f7950b5f0bd513a3e2401e22b718eeab4ca555a44d95b987ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
