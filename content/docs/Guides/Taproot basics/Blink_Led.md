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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNQ2UN2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjxfmmfrmPFzCc2M%2Bt9n4szAcCyJKtapgPPHneL2f4NAiB13ktgNQpSs2ty08CVgmTapbQ1qQ9KDrfkco%2F8PdpPFiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCC51my6e2aapZcwiKtwDV1NRhj21YqwUwHp709yyomqUMPGsGWpyoDLB7fw37rc6xT2fcMPeCKHpwM4%2BVa6lCZpkTNZe7unqL%2BKSHHrv92YK05wEL4lC%2BOl8mwh97iw8P4bWlrMbCvAl2qUQUEwR2c12TkLeBD3JjBXSdR9y9KgO7yWyoIQ6Ub5%2BfcpPbD%2BhxNNCKy7R77nHYp8oGxOJpv41olsvxOi6e%2FDggPzeuHYZ%2BFj0DPlc1wC7J2YlJS2nUG%2BkSW2nN8dhNTGpYh2E0kfNRkHBVlBu3oVndsuk5shvDNhAaCRc1ek34MG83s7KHEGY2gaNoOG1Qg827koYc2mlHCfuMLr20qou%2BG2Gy2bNn0eDc6iOqxJaoBdhAkXDWUlVAX9wxkEKpt30gNlrvqgxnq9RXo6LKn9tV4Jp6jbBhaW8UY6lPjB8E%2FYDGL0we8IJdKaY%2BsCWs4HVA0m0d0y1RNyMeSv6OwlnRz28p9depG0YvxmezpHesdGAJuo%2FEoPN54vaX0ozjEZo22h1%2BP2B5LB6PQmrOPDN5ERoSUe35aB0X2yKid%2F6GcONgODy69K5a%2FrbWnZl0m2jgg7xkinRyGD5kOrX5roGPM507DSHk%2B%2FEDV9CwgPdwwr%2BPJVqEaY6AOWqp7uupEMwkuShvQY6pgHdl7Y2we%2F8PAJl2Bfx9QmXy%2B%2Bolen0FL4GJ8bHiTj4VN3Vv3i8UeQBdLsv6UDne1%2F4gJ16OFMCjdPY1TY2SO%2BtAMOQkKiPZqU6lvfrYBIK6L02Lazl5m%2B4JJ0aMo4zM2f67EhGMY%2BrPhvQhLok9Z4seXNTPpSKsrljqsYc8ooAFUQgO011jw%2F%2BUETO2zQoCrypJ6jsqKRO5t%2BgUC6%2F5KtnfGfw%2BZxP&X-Amz-Signature=88ce1b24544d4cacb8e4c2ba12d85b31bb0f2bd8a8365028968142912d4f6e03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466622M2ZPD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYm%2Be6G5xtCfwHo4G%2BpkO18qko5kovRPCX8x0ewUtNJAIgNOdz4j%2B049POuOID7hjRQ13aqu8OnHd7SNdb%2Bw9bvs8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0kb1hy%2F7ZjcUzU%2BircA1luCW2L3qPpnD7p8VUOPkvuzJMr5Kb267FKlT0%2FAgIZJm92zwEqu1FWAoHI0%2F%2Fj7RPQYikbF5JzydNDjSpzvS3CcM39Zs07JSl7fD1r1dfAMJ7jqvhTGBuliLtdjFpUnVnh6JBTRRcz%2BJntkz8pUs8%2BUcAwf6U5yNxtRn6X8EJzKOwzrTSUV5sVpUauY1FaNvNYA3xe340cEiYbUefhMbsF0kapns3Cxu8CLhIELd2acnQ1Ytb56%2BKHVE2hxpZHkfNoYT22eLH5ESi5h7LxVOGsWe%2F5EpmgS7uqz8GQAnJjmyyWImtyGwAHQeR49Xzd58LYl4%2F018rhKCn2ckefoi3DdpbQY3RQQHgaD9sln9KYTuAbmDpy146T43PHGPM0wnr7KXxQ6OFFlnIyU1N5Bw2rQWWxw%2Bo0hA7oqzOHFr97BMpRKsVeIGwfNtPv7dV5sfefumOQjtgjrkQIVWvp%2BEbVEL%2BMYGiewdeB2%2F5If%2B6%2FrA%2BV6kcIBUxUu0XN5Y1Rsi09Z4WuZe6QIdZ7xqurItlGlxPpGDD61urIwys5voWLgEO0T66PBMZ%2BrR9TMKpOM63ipsIJhXh9mlDJOZmbcDrZkOEszMZsnYzgC1u71ob9mi2dPXj%2BxrajI0bdMNnjob0GOqUBZPE7wTRXk7VwRhjmcEjRt9Nqsla0oq45RFCliT4JjCVdrbXVT7YLZ6sxx8FHfsTsQB%2BhVZYuw%2BtMSZ3R70cSUIXnN27bXH5CzMQGFwIMCl%2BgltdmC4kTcz0lrHAJmQ8wtg3duyODOX9yvsXgYb86ESLcG3fPI%2F0t6gW9mH34p9guN3ETux%2Fu2psRkaCmPEuMx%2BZElbqbtVtX9%2FNO16CSXx7Y%2F2BC&X-Amz-Signature=311cffa1bdca15da80a4bea751c6730cfdafe8983eeb3fb3833b08f41f97551d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
