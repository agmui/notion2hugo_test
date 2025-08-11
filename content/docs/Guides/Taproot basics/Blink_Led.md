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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QC4BKDD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6cJg8DAAJxLn1HOZtlfzu53TRcJ0kyzK15MzQzoTptgIhAOi05BGZl4yYsDQWqc2b9l4o4xDo%2FYBbzxSBxmV7QNmzKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7gri48sw%2BOr%2BOel8q3ANjkzrjwsuEO7JJX0nIkivm5dn0i0WVjKi2FPNechUuC8XYPF6olFbIeA8HHzW5r34tHzao4ncfVSE9g4k9ldwoiWDbyWDngthBOzjMvYrYhGsfnDyDv3sRrXOcA9JA9HwHrtfxi3GA06%2FcKyFyJMfhPpgw7nDhRzeAFncbiX9UwbD%2F2QVrDcThTZh%2BzIf8fYVPcUZMElj8agvN4YfkhUhH2lgSQZpPIU4IO7eepf%2FHHa82GEzwNcnzbygYZ6%2FcfWX%2BG%2BaAbqM%2FdGJJnMcbtUYlG5uxZKX0eSUsl2upDLhbJjEf%2BoGrHdmYRaANAfdzUBBIIuc7WrnBdRmO%2B9cJbzNJUzTZ4D9ELlgVas0M3A%2Bu1iyXlps2nct4DQrKGclB9dv8avaezfvi6tcIpDP8VRXwIYV4wF7AxlnLN47iJqYNdOjvxASrFlMmbkVt6lNtEI%2FVgO4ge0Y52dOAbUmAl8XfjbfflJlr6u7XvRLkX41ES5MnLgmxeysISKujAmJEtGCQFrpb1jaTl8weCLEpmkCAOC4Dx4p22Dxm4bMJRAqvg1nEA6FkXSihBPzOgzNE8cSqhS4mGcAT1MZ82aOzXV6H4UTjJ4RGtGOeX%2Fa6vtizo4co53Lvu9G9hqNQeDD8qubEBjqkAV4CbA586aGtMWIq9hWuQTxSXTYlRU3i%2Bpy8Ngr2rK9%2Fo9ili5ISgx3gYJxASxUR2YA0KpAGpmtSFmDXkI4%2FAR%2BnbUCCOy3cLnW67XJzcqe%2B2UqiH4bNNVV9FL1FhkLK9w1OoE2oaqj%2BZjzIYEojHzqbXep8oGhbgc%2F%2FzmKgS0hE3%2F%2Fn9EP54NwVEMx7%2BQ9AMPWd4%2Fr8t5mg%2BbfjT0vxMuAe%2Bb%2F0&X-Amz-Signature=8a8eefbf7fe2865392f9a86995b01cf70042b2f13f7764ac2799263848e494d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4T5RP7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPMnIJE8vFx4ZLegfYoXnT4FLfRDMFgXQMdy%2BjHyGZ9AiB108fuapFqwmaEsIqDV1VXmp5DYRrMy6cETixovIbQliqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM59XqRr3OsY5FW21%2FKtwDYxbUzCCHZ1reZULmkL5tkgXdokjhPOYdmxVj1R4cPfcoq3KLmyAsMWNFweTJmkLhi4XqOU3QpDLUtMoUCJiKph58%2BJbVEeNqM5oKdZLW9ZJjl%2F8%2BBbdihkOu6%2Ba%2BbNW0pT%2FFzqLZutzV9V99csY5jCa9okT22nm5%2BUdVKH%2FysQJTTy5eqm93LxJUgKPxYSSB0bZj1gqgFF1tY3ibWZBxPzh5VUEnZXUBZ4M1quB18YdOJAclBPX1ooarrbq1WJ%2Boe7uEr08jcfqAQaPmNE%2F2i3FqwnBfk5F6uRO56kPVBqlP%2FH7B1PpFfOwKow%2BlnMofRgLDt81ag5Cfn6Gi%2FyzBoeCxGUeOKK8GLUtEGQrpNi2hn9%2BsvUPp2Z5vtrROgEC%2BjkJsYstrfvM9fctGysNZ%2FNjUp42z7TW8pwICGIn8ijZpkr2Ulvw9%2BY0AgCWR%2Bo45Wp40OAuYH3JpDunlduaeSawffVlRFLdArixFV%2B8R0hWABMhJ4XW8TQrj36OikhCNYvVl4BbCwmMruGgTFN%2F4eDR%2F2Ec2THEkAZYkRXWA8sREbTHS2TmFC3EQcffb0duTAwkG0h0KDnMBKqxUeUoFiMspAwH0DkQKvxWAoiwxDhxX9R9H0GSbZzLMS1Qwt6zmxAY6pgEc7n5XDLdsjz8udXnTu1JrLVDKoI4MDMppJsg%2FYcNRNRT4ZOwGo4Tg9mXakrrYs1yuqKnO8%2ByYKYmlqQ3Uyu5GQZGTNAYfEO5OD%2Bb6WibmMVbmMlY9fklikoAStrgmn5oik52eT%2Fv5HWLz1eZYjXw%2BRTz%2FKlHSXbWUfd64NrMfGUSXWp%2BH0CA4bxQXCopidYdmp4coI1s%2FeMfypsTbNp9dVMAjQF7C&X-Amz-Signature=071d45ba76341fd2e35b0483aafe21777800a55d292330aa4c74f1a7ea42eaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
