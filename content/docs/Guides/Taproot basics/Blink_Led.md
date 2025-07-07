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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LCTYLY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICX8IqBzXWp%2Fh1wptiyCIWcTnr3EZlWh6YBQcFWztRpwAiB52FnGnF4kVj6VfzfJ7CPVS%2Fejjtlp2BPvDAD0hV8jWyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMughQAUDVQU8aUus%2FKtwDH9iyh6bWk9ZC5a0YsiDsZ477oPzGVNbuFlYFA39H4CcbjynKp7B62GV3csMqqCRF4rsDkM1VzxackA%2FGsA0e37GlHv%2BygGHbp3P0gmgwcQMVrmNQxpEsurjHcW9sB2o8R%2Bia1f1wd%2FFqmNWbe9ga0AF85YT1YeCH75bETMX0J%2BHfA13LZ35cB9Fof9XaVdiNoJLLGHu%2B4AdK7NTrgq7YfOzHq8B1A0eAvND9bTBme2lHqVsBAyRcCagLvTrqhMhYdsYhnbk7C2jbCJb13y4DSKypcWnv6p28w31keHx6wZtCyg1s0mfZUmrL1qyQviaGRei74HTbDJb%2FVaULTzcBl1Upj2CELiS97Q2enbw4%2Bk7OKv8YXCycyqN3PS79tLRzzeBJqDUhDRG26Umq2fljYGeGRT1U3rzRv339RBUnkk0Y7uBR4sgdaYJN2HVlxJJucK4PXBQQPwjxA45nODSla2NdfQHVffT3g2lsJ1yqNDtxiciVMaueRucw5jbM%2BiI1XVA8ziDSeUQt01m5GYh5PYvTc6bmLR6Dhclqe2XbyU8m1W3SZJJf%2FF52GEF5W9QhojY5GC9UVjrIemgpZO1pbtE1tywPRje0sfvYvebZOjd2McghgsdPwGncyf8w84KswwY6pgFXlDlSIP0TmHJARPVHsMzN0iORt0EhA%2BQm5rwaIrDJ0LxQn4e1JPN%2BsbbvUAQkn3Xs5zgSjX10qRwhmUtit2eCLAvfSN4pwctJNIQXrNp8QNcWXQH8cCwf0MAVtJKVbvWZIGRy6tazUlaY5W7c1aleur3zm4LbqX4WRN0CdezPqB8KE%2BI1DWWOK9pNdq53O5lkieWpm%2BKfSuPz7J8YeVzRVj1NZBgl&X-Amz-Signature=509848c091dca284a0fd6887808b599946c1a87d68529f44484a4674287089c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SAXVWOJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDHtQPHdrqLEdsc3nmgPcl6WlIzSObuT3P9XkkdwaPaOAiEAyFwcMQsTwcZ%2BNDdQA8Br2EEnw5k6BWOxgi7FOpcAlfEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJXFmTko5vvd%2BmB%2BBircA2vKgyIvV2BzFDKi5H6lyy3cQgenA%2BT9SeYgggoKBCHahg9B9FDiUeBQoBW4Nuw%2F67cEpy6IBHHV0Nf7AL11QzE3s6G2yXsHCpmbABwLUnh0SRvpUgkJ4CUA0tfYs0BydCNfz969DSPaNSE4XIVAjjej5jXizRXjqMv42Vwyr%2B%2FYDiLEwEEqxcUJnP1M9jLJhqWn1fWTOKBeNleksJEzyTEAMEhMwsbwLjY5z4O7P9wZXZkcKdvvrkUOJ%2BvVChYd4INP5vtPkEp7O2vv4FPCe2g8FgPXFQ6gFijZuiK4OzBa74dN%2FeI1Xzh8aL56Y%2BNF72j4pVLYlwTmRT6fR3FCTAi33Rxogat7054FvFmuwzpU%2BcsQtsExHeO9LMHVsncEaFdAg5JqkAXari%2BxwRKQw6Qx6mxhmL%2FUvxCUm9KT7asLp8uN0%2FvOiZo1TKPv874s08se5NrqL597fOc7AqCDB1b11RUcUN%2BlZIILkSwj2AwZIH0sR2X28mQXLvlfbQlhaRYweiF6EJq00UKxZ1IUJTbl8vXIu2Ks3Xgyci%2Bvwi3Yx3yZwQjZEr94pAn1Oc6hQ0%2BSl0tsgNPiBKe8WkMqVBHapg4qi%2FFc2pTycnOB60xPNiPmA2t%2B6yUOtBekMIKPrMMGOqUB0gIq00RSh0C21y40W7k52I7UxhRjImfOSyj%2FzzlFxTi%2FYecGzklQkW2ues9h4zAPICqOKJXpGesamua%2FcVRsxC3fDXlza8knNkm0buuCmIxrJ1tpldEXicMDOve3esmsMlW63Dem65CcyeoIRC4pgzQE%2BYJHPGKWtLCc0krTA7g8PcUaMFBYDlqJZcm%2B65ynU8oVT2eFVyrkLdVjDYGhF2rvUTtT&X-Amz-Signature=0a4d68aa3dae9959fc630283f2b214c4978cee598d007c81daa65725b9dd837d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
