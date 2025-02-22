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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVEPPCO2%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDn%2FcdpWh6XqdS1c%2BTuY%2FdBq%2Fk6uNal19s65A8MLFSgIgUmzeAUYHOM7rRHu1KozrEssgOXbOVC3dEC7vzW0nlzwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs91BzQhubpjWky7SrcA3U6a2fa%2BdxizCoEyV%2FlI7GRX6I%2F%2FnZa3fQIsL9SXAZyEK3o381Msu9W3Q27Efj00gCu7PW9UM0Qz%2BGDltTx6M2tiZtbXt0Vvr7nZunzYhsc9iGOnS0bNRLn3cH%2FEpNC0FfCVffqyWv%2FwRPqhrnxI%2Ft0qNZhW1irzekEui%2BDYhoLpkvZDYX%2BQx%2F8u37RrIsRkvKe%2FVYZix7D5Lyzxw6dwLc72sQMsIMBQVKXOmO2nlJDw7BXcV1lHJjjWafSmmGJi0uft1p0cl8QnMBKKCtO6hyfqZPb96zcwoRlmluTQD9Jh21U9NNcJzyBcOguzCNFXbkmyziFZlDJjq2lweHHLZUwJ2PNQECnCpuE%2Fm1F7tlp%2FBLmJvSr%2FWpgBXKMAwsDJhTrdLWWMA8CxuSsQ37sU%2F3HrZZKloS3OIL70A%2BcNEjQJ7cUItQSWNLItLHJkDwbNpafL7BCCQm6zAG5upEPg818ibUyd9D5Av8SmWOEy6gBOYLcU%2B0GvEPiic2z2QSJBHrdP6bZNB7Yts8z10bk4yn%2FQglIG7BmmIP7ZTZfXlC2tYWOVaJ3DUuMhYTsOUWA1xGt2Q1ePz94e3quV%2FxYjL%2BdsG29RTxL4CeDYeXk3%2F1D64dCYK766lEfjohhMOmG6L0GOqUBcp2WnkraWUBLw3ztK8Y7e6akZilXOJnZ8qvMA2Y61jKtJBE%2Fg%2FOGVQqPcWN8aSfIaQd7CmAhO7xR7vTM%2FkfZtwKu3qb605eJ8Xi8qhyhV0bOiyrRKWBxbml00uI5K9i7CmuTXiayTrbsKZqunTW3ctiCwff1cLP7nmnBKqUrSZlPN6nGyOq9AxY2lGhqxttLPQxnRaHGTaOb46ixeGPAHVUOCab3&X-Amz-Signature=4f586502dd20b7ea7958b1b7b0ede9f277022b21f035d1738b46648690761fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNDDE2I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdU8diNo7Y57Hp7qcoYWBSFvuE6Fwbb9eVauqb%2FNAWSQIhAKJkictaAMpc2EgSTDKNaOh5YCE%2By9txs9jmeq0%2Ft4iUKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrMlVEJ09Q4FsnCH0q3AMNPNSOWbRNQT5ajUgR1lOgdZk1wuNtuDeYW%2FpMle1JRPeEo63%2FDi9T0apteZm36HyPrWERC9SqBFURX6JytlqpodcWfNvcu6wi1W6KcKNI6Ijl9ZBxUmtfylFlPHfPlCszksUGlIEWBOH4ivYmGG4AGxb%2F5DJ79Es82WSCVnC1S10TKAHSBuF4ufejG77hlV%2Fef4MjLmnExZS7wZ5lsgQwOwokSk3zCjo%2FyRjMoUPF%2BuivCEAJSfvZOiZfSrnA9T%2FAxshilubgTymv94aBPHdbrWSUdHiVLDVXs507f2atKGtG76wN%2Fm52vAlvBRZQaXsfB%2BYftdgnn4TJQkHNmH0p2ZN7CN4Xdme%2FESVK9vhHcg4jHt8WYY9AEjCbst%2B4o6UwVKlE7lazHW1hxZ0jlYi%2Fn8TQwALTD4QGHQEJjIWU8T%2F%2BYpZizSb2RHzzfD8xh61%2F9rF5r1G4MeznP39jA0pS5NKn434hLIZwS%2BNEsE2SrY7VmQs8HNf20wDxu31OjTi%2B3yJcrhG6wIrv8WsJrC%2BGjJfkoMZPCLLtkjzJTAUaPyq%2Bv5yoqyMSH8Un%2FLBZQ2mh1XvOmgZWQPJ4nFerS9BChiVpKXA1hBS9MHf2RT88q%2Bks3SE4BoEWjgsILDDz0%2Be9BjqkAYqcXnRk9Ow8U7S%2Fqysyfu%2BrbPOwWL1m3nOgtbhiVKrJOr8owhjaarFUr42m6lX2rm6TmhurWzz2RjTHYHbgwxkLJNHCH4Lvwd4qrD5LHoPgJn%2BqyywIqjGFmdjLiMZ42CKtwwvr7jflQ4mqC5nmjGHLOYM7tMfypo0Bjw434r0HWAXmpmfoh5Z5hhX6fBgv4P103HVOGTOQzoMgbf%2BQmX0zTxEX&X-Amz-Signature=54003835611738bcc5d121cd5950f29e4e0b15258d24755822cc3edaaccf6d94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
