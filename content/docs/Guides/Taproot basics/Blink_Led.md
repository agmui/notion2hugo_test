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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKO7LWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BnZAmTgkiUUkPki6hyJsNrQ%2B8Xko0O9rulyHFWVmwgQIhAIrwBV9LLsFomlj0BxNsh8H0qfEU%2Fv04Yg3p%2FClKsZZvKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd7ushnBN1MXulzd0q3AM0mXqR96WUITO1PQZwtgw7VKcsdvO9mL4m6YkjRlHiNKH8spPvBeyX%2Bru5Wj5nhPsmVvW9Bz%2FYwRqHSlpHd3cnS58o3TUzArTHSq5QTB4Mqtp6jT4R90VMZRKYLLU7ytZFRiFe9%2B49PKEBYLkxVbnA9lqI1dQRkbMsjc7kmtbRqtFKF389Dt%2F4sd0jkTJZUWeIegIyBOq2Tku1WTekryoNSC45ZwD%2FmGu2BoiduFta7j3eoNnDk5XoJ%2BEiJwABHfxcZQTrWiO7Ua7AUPd%2B6YrrGSD56G0OpWKYLJ7TlwIRNsNHK6GlaWcd65NJzP7zjp6m3acxA5DIwBqQ4EmfyTIBwi5hyznrCXKDHYxxZ%2F5o8h1eNHUp%2FzirENBjOt2pvo7aBrQaj%2B5em2WDZYMehHM%2B6vqrOzrezL29X8p%2Fqfqnlv8pGTeTlZmVmebws8P9h%2BabNjCdlrGYLIC9Ay0ToOhMVPMMXAgZCeSc%2Btxd6VOpvlJIUNGj3l%2BmIeihlr%2F%2Bz8AM04H5HIqqADiHgVM5ThiE7gadzYjAPzl1FGER8qkdYNnABx5M%2BNCOGVk1FoUgwNhfvkYiU%2FPR3OZlh1RwIAPrJ5cTVFqUx3VPjVc9WCAizQd9yrRfSZ2GJMEQaDC4jOrBBjqkAXTOIb2QRQTRaIRtJdLLX%2BghnVRtVgNXQ1XPXc6APN%2FUHFMPrSSqVSDU13hBQLoPk3Ao5fc08SQ8k4cDJDai%2F3Bl0ywUnmjvvNGI%2BFsr9OcO3UnmymyuJbQaMT339sMWFbNcBPZHHtpw0uANYvq44B0EBECzCxA%2Bjk1DrxnGz%2Fr8e4ucvA4pS07vsP7DhdLsk%2BqnHthv7jifanmE%2B1ToydldIEYp&X-Amz-Signature=fbc0921ee06411aa1f65a2138ffbd92cfcced1d747dac8cfa4ac11078c01c0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7URSXD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDieBDo91ZyXUTvNIAHQVqrA31VH45C5p7FlXIb%2F53HRAiEA7LxVj%2B%2FSPIBm%2Bl9uKBSR9Q7VRkJZzgmLfNMGuWPuhEgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1tPnu4vz9eF%2FINnyrcA2MSDT%2Fl8%2BxhD2Gy3uZXdeXqtdoee90uFgFsyyKmXxum7x3QDPejesGYd%2BOuLNPVRWX4IuAFeBi%2BT883C9HJyfn13c6J%2F7DR1uxV9wOg3ob%2FEsNy29P6MbjackJVM4wwnhOxkEX0zRz9xdT9aqlTiMXbKsk%2B3%2BmNxQtb5e%2BaNU%2Fw4cd7GE%2FEeq1aE1y5reJkmtPTxdPdaGV%2BteGt7f16oezeFUGBAAhuFX5kr3fxP20iiE4s3em2nfeDViDhkZ94QrcTRcXW8qrvU8Y%2BSge3QOXc6rBFtC0uxIKTPVc8nQzUJjroLKL9eEj9AITDAxgtqtRMU0BhH6VD3RLZ%2FAV24d0j8%2BNWPzUEgnGRJGSH7zswYK3UsvBZqWEvcjFgGzClLbPWKnUooPH9PIzao%2FeGmy%2B2mSGPNX90e49opUhbStMdgPge6075PTpI%2BsFsstrJ5UIpZ142WR7Je5bj35sOIC75PXw6GikMBaTipRlIrXzuHjs%2BMECTdcJyiCwxhVmlXDLGvYW0MR1CQ1g%2F5UbUMotxA3140z9%2BuWx%2BTky%2BYAPCAcGWhbKXQu%2FBTTxaWkixes%2FSNEtD0q9GUIg2hS%2F47%2FvJRIs6ivc6S2ncM49TzhXa0Oh4TbCyA170NfYVMO2M6sEGOqUBf4OzQrbd2kD1JJ3ZpZR4jGfjr9uyxoWWFw33C7ZlGQ3gpYI73I5OpHp1DxgiguBaqO0RTVxqP0SdLUYwEPFop8jXatvGMoo78AfLV7G96LTipoOQLFu9HvEC32Gd1mazlvew9NcyIMk7OP8odSovgtUZ2KRJROwOYqGJE%2FtqLbn6uh331nh%2BmxobsAMhCkfnX9oX6NczxJhF7H3cUOSPtZBgeiAp&X-Amz-Signature=6700ca5fa4f2d1951427b8185314f8076260eab04187eb5a056a4d434ae37809&X-Amz-SignedHeaders=host&x-id=GetObject)

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
