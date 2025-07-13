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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RH4QKQZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIJJERJkuuomE0otVld43NHHK%2F6lL00N1wSidu3Qj17gIgE8LKO%2F2Vet241%2Bcme7rFWIiwsUmHZXvAHE0ljjlcRiEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDArPFnYjpbSWx9ZvnyrcAzJQpORFxU4QytfyNirUYYMUYcjNDn1H75gKnO90D03vhm4IOFnFpTNi5ipEdHeNbXbug00zzKc55TbTosIo03OOA1SrCjIsU5PijnPKrpROwrgp7LTNSXyj66gptDvpZlW1MEcJ7w%2F4Ok6BAlGK6i4aut1qpAcdYrm1NfnCuurRcYOPdABxch0wbx7kM1PmeBk6jOcvTTxNsa5zKtQsNTS1eS7CEfLq61DpDvA83TS0QhjBcXj96ECg1ZdPCmLeTHunz3NJCCALJpOfuglNb%2FFwKjLCUTh0yoH5vdOwbU8W0K5Lx91Oi3rBVW9z4NCEfIXqboBBHV82x2RIAvdec7%2BcAl0kV9ZCkj4PPDd4K7OgID34nUlVsAeSyanfJv%2BIIXM2EnmNmjr8W9cLTXRuNzMmHOl%2BTCHT3%2BcbXhrnhgPuc%2FScgVMK%2BXAWuRmLj6l7mFhTa1Nohf%2BPyn%2FVaRKvBsjxcpYZogR5jdfByrcEuAbQ7wcx%2FYxA83cOOtJbYfs5ahWu7uUUs7UqkDmOca70yzTOOaV71kB3kY%2BDV%2FCW6coJ09dgOC6sF5Soh%2FJ6GIKv7sjJD2huLC7ce0MCLNYyceCyi6JDn6mYlhJMFcCbB2SL6FRSTI%2BvjmItYlFcMN6kzcMGOqUBw4IXIQo7%2BPHJD9ytiMxSEKQl2YGFgnaYTcN%2BNi7wYzcSpouKLHONztt5ilsThiGesdxGOEuVAyj0Lggaxp%2F%2F%2Bxhd7GNwoP1XhGBM%2BZ%2BBlmxo0t4q99J8MqiWjvPMQ64f94TWt84%2FDW7AQmwTnx3RawrkkFJmOBEUGCkUMVxs7w6WVrcgfrC6tu%2BT2U0SxPlfpXn%2BkW5PJCkj3FmywipDuQpmqR5T&X-Amz-Signature=20e47f980d9ea82819aa297487df5b82262315495d6f1ad8149e7cbb006137c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WBL5ZB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoJvhFVJi1tuoW07fkfGKQw0TP2iiaDp12%2BbN8fZ17sgIgMaJu7qJHl6MmMckdXteTnl9vkf%2Bd4pj%2FNFtOyohSxEIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCWVqhEstrhZIDiVvircA4t2jWXQ75JA49ZViBWMQPehT%2B9%2Bc9kSh54WXR3cwl1maGc%2BPfA9T6peBR35%2BgB84iu%2BFvJibqAOMZwmds9ku8M55NF00tTm1Dpao7l8%2Ft5YXCawQCsgPuW2b7LRqy%2BT3C8mLBfUDUyztiVGPARMW9SIOqt%2Ft0HtMdMi1%2BBLwbKo7DbJnZOBCF3vI02V5qFfhf3LySNgmSMDVtJLAQ0JSRHFmMUUdIB5yWGE6bKCMZo9FNuRSK9IRin%2BS5XjDea84UDEqLv4jwmC3zIjyogh7sCQZOK%2BZrhuVpRX%2BgCnAz7Hk%2F60OrzO5IQMq2SgTepi%2FujVm%2Fdb%2FA33hdUCAj78wuiQ9SrtuitmWwxPJMtaEbgDywmdq%2F%2FVHvsXzdwaUgXCZQkjbbR8Kr4j4h%2BHh6dIbVdRTxvgick6hABMr4mT5sGPywpBPKhIt7%2BbDPNws2c557TGUrLw5JfE5%2FA9W0xwFVTO8%2F9kcl6u0%2BwLL3oFDu4SAvl6UGvRAWLxqKk1naY2P85hj5AWZR1MtbYIDSAyuMnfCK3J3cwVulTQmQg1OOd%2FoBGDzMZpdDPP%2FoGQxA5nkTUMFy5%2FCSQiBqxmnWhWzGsUUzONvSovOMtQuiyg4XinTcNeQo3%2BBCJVl4M5MPWjzcMGOqUBnvsLoTZZ70Z9uw59cG2FiK14QDPUJeH2K%2Bv65yAh8H%2BWPJZ2Bk2VSv9UmUmV3eZa7dBI6PyoT9dnmY%2B3Lz%2F6%2FS7%2BM56HkeCBwTHCF4BkAgo6sVoVBLf5kqEPYp6oovWpLjd2jW%2FU1cr6%2B4zQx%2BWilvCDOGMF0neg%2FE6AEb%2B4KEEL%2BI0xvxgUmD39Jypj%2Fuwtlcp9da%2Frpgtmrzj%2BRbwdAH9No7MG&X-Amz-Signature=4b7491398426ed5e55fe68a2b73e8ec6703c743d258b284fbe8f702490acf907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
