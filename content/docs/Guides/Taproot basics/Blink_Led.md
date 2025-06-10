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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFHUNYM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhtnuau4%2FPWidGmfBBhnR3fCSKdR%2Fp41dojg7xlvr4QIhALfa3q0Z6sxb22dj%2BERz%2Bvvxlh%2FKwnbUPmTMzM452kcHKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz49DBgVws0m7wZh6Mq3AO7wSWR4NeJos%2FQyX2vrDLT0vKEVOEHVp6CwYj2fTyaOCq3fkMXY4OWsXBjqvQlKy97BQMJEW9UwMcVvDKAiDkqvXeK8klFteJ7uCHulqd6W7pEqv4Vro7fFLzXL3cQQ62wbXleagK39vu8tJj2skJTeLe%2Bwp4W3vYGRfU8ypLmBsHbjBNT%2FKm0S8mIkaWXwicSQj4QXd7D%2F1nEk1NsS1Uc1FQo4uf7vfPQsrKVMJuCiK5Tc6wr6IMplvThfOgxr2z%2BqC%2FbUlEsBkjo%2B7DwDvkCta3NS5Ex%2FROlk7HOm1hsoS1TLVns1o%2BvfIYy04ZMIMw7QXE2cu%2F8E54gqM4xFbBefMWIe0zTborHi4HwF0AS3NGNTobVPG8DWz2JN5opBn3mN4RtTB6xdyYPLiU%2FChuuuT6m4pprcgLC5RHEsyWPmq0G%2FlvdY4%2BGps810B23zHAk5%2FK2bvvJkVT%2FVsXfSbQiPKTX5FOg0BkWLCRmry%2BLHOpsJzxjYKTrSknwP35pEmtWqMOVpPXu%2F%2Fx0YhWQbRM8yp9jWoo4EnGFqpep64fsGDENuGkXHDhm5dtKvVA2vt3BlmwETl2oto%2B98OciYTSnOL%2FFqKE6xjRzhR3nDykux8oomwXxfhBLRLi5WzCuv6DCBjqkAeaAV1hn8OLQl6Lx7vbiUlekSNsI4xtXyIMgYvvmhlUZ4xinHdfwkd4SkDwnjXrAz8bdAXx3Bc80VVZhtt3tB1Pm8a%2FgxJyZFB%2F1z8DiLWyth2ylOyHY8v%2Bl6GWPwvtkX0GTQctI%2B%2Baa%2BpqyBfLSTgtdfJl426PhDatD86dZGLbVYWeBt391%2B4WQlCZq6RtvO1pycg%2FszVbMPXTWJMRvuL%2BYFKwY&X-Amz-Signature=ed35dfffafbe07ef46fb2ab962b6bfab83a322891262b2e7459790cede3a0d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAX5SA7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcFsx2LqaSey5LBA4C1UdcRH9ebskarM8ZlYQSa4RifAiEA0pRu5xn0UU4GU3xXOlcpLLQZnU6LovU3wPiqMZXrZUAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLkeKVOd41U5%2Bzx%2BircAx1LXIwlRxbwLyKA7eOjr2Q1u5nPtem%2BJnDCA4BWYybe8d%2BRK%2FOYoSJBIV9cV7tYMR%2F5AqUVbMTp6jfao2JsvZoR6DNBjWjQn8JBt27FyVrUouXk8zHLFQBMSJY3cs0vztu318fXFgiBsVnhKxnYl8M7zYkoTXkDi3oyREgIPvRHySbG3xFIIySseDsOTUZM%2FqQyo%2FhF9ccMKnNl2LbJlzurmxxbHEDFrYska%2BtQaF%2B%2B1pM1x07ccGm9NBQJcfaGdDRGllXwssQGIEs7honue3hUc%2FGXyvrSuMhb%2B%2FvAuO2TRXxFZ84Kb0FRw%2BdDdLPo0aGxigL%2BMBpCYRUY%2F6B1Ca42iRzWPNRfKTkxSNQjULhRoGG2mcaj%2FGeAFYDEIRpaA%2FUB3euQlYbsstZwm6rIjvRGXhCYF02E2MvsH8SPKO7Kugt1iXz82DbHF6Ll1sRnL9AZhxniU8MjWP%2F4ZXyKXD4BP03u9VyR4YEMAN3X%2FjnLzXLIMd4bTB7p%2BTgArT6W4Rf1%2BSJs1xacNsulktqPh4j%2FB8Zs%2Ft%2B8FiXHBfVOtF6LpWMpUCmSPx1l%2BfN0j%2BXOVcg1h3RQ%2BBdIwRBNL1BaMZ98D6b5BYme1zA2dQWvY4WZK7mIBPGCvmJRjy0oMLS%2BoMIGOqUBm8SIua8vH%2BWHMKM%2B0%2BJaJ1TWZZa1ih9EeeHb5kI2471tchhnH9pBa67zpOps%2FuRzTKWeAqGIP%2BoEAh3rJ2%2BcDhwVEjWyXTpvXjD2UHftW97R9lcEE4JXHzu6bTxMULpDcIw9B%2FMXFXDoZuAK7roNyDf%2F4PAq82WRgQIw0hcBsdAYK5J9Yv0oXSx8irSWD5tD5JlLmVEok8iJUZXlifYd2mFPUOxY&X-Amz-Signature=830f9f1b552af1950e5e12c523d46e09930e82fafad4c4354c134d03fe39ab59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
