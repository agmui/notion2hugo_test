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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F32SU4P%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjw4AUDY71b5AI0DcyWCqnRqnSUlPrMaesGdvxtcQeqQIgaxUYJmKX%2FrCWUrCeFVx2ABbvuwwbHlpjlnyjKUPufAQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9xpnwAI%2Ffk7%2Bk5fSrcA6GIMCul9VaaBZrsiFQ5aujUvc%2Fyk0GsPPxDxMXwpB8XD%2Bo%2FCcr7%2BmMWPddarnKDKmfxEpCanBbUDCY4vmBw5gYoOcpfJgJ9e8wlSAsmAWuw7%2BxH9HpTyKqbJwVmKhISeBm7hiioSxbyNwLNOlMfnIsAhE0eHHkufEKJy6MdFTzf9v8%2FiGKoZMkXNY3emQyqdQsTURbpa7jABXvaheec5KlVCje8l%2Bf54YkrYyjuGNyPYtILuwNHIZ9M3UFLj3Gj5%2BPyxGfhShc2OGworMXQlIrYQiff9pj5Ha1RqLxfRqSsx9SzxqpW8%2BQyw7SNMmMrvPtPmqBsxBq2pn4WTQl6Gam3ZpxY0SwxpSA3aVzdZn%2B2393oTFp3dnj8gyrZOwagNiq5AJ7wWcY02vt0bwgiz0FS%2BAlwClscqZUrGi5y%2FMuUurxJNs925m0P5NV3V625nvuu9dA8wcBSpYmOCWplxOWD9gKS8y9nS1AtRvJjGKIr5%2BRdM3W2ZvEQEftXhPol8o%2FVlD4ibi%2F%2BlPuxb7R3AgjDOZ1OsO9TRvJqgB0cM9l48SXCZda2VVDDlY1BP%2BAUPg3s5dzEOZbWhJ6bwXRY%2BW54dHmSapvGv%2FeaJsiyNoHaUuVZQIDIk4qiHac%2FMODZ5b8GOqUBTpqZuAIsYAM4gdR912pv1N9IdNr92yio9IE1MWeqWaYGcihpmyuR9PhiOyPq4sGq%2B5EIFMlZpFE3nqLIVDlj7WaRRGxBmpzApKSdSoNoZ5%2BPmygnUI6%2Bk1FAgWrVISywuQQC6XJnZKnzZmA%2F91ECMV5SD0oonvJq6le28CvyYbibOFxAIxIWQC%2FDikvK1QS%2FrC%2FWKXdNgHHhZYHqYAmplc%2BZ%2FXSL&X-Amz-Signature=5320dfa7dd9715dfa7ab092859044aa526ef755676e8e1dae10a86b77a73785b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FYPMV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDslLD7EuZ%2F85AIk03lh6jkaTZ2jZKfKbyX1zsEtNqcpgIgbAg1b42zlUxU4nJVZ7h8xj9dRyABL5HYBAecHMub9hMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFdEMTjnKWtvhEDTCrcA4%2F37TrpoLenql5BYUzfl9BT3TRVhyTzDSUeOo2r8dWM9So8Ehxz7bSx0OooOJUPEz0XIc0Jc0ik3L9WDBojofuzoSaDTRGC5X7Y89a2dxEbM2rccqxah%2FgV%2BdFTa6bCnwWFHNzupr4BDiVPdadOqv%2BTpuhV8RedNoEGq9uHnxQos6o5LbJ%2BV1N9mGcrSGoSt5nZfTBY3JxisOYZKtQ0IecpS%2FeblUsGSNCDiOEiPB3MWSodDRaRySIDioIHiaFFQ6EH8UQ4tSryz%2FE2yPMrEnFWb%2FruxaDKoqfyObLRpI13kxcNQcJs22n5W1zP0ZwCxgZbK%2FQq6iG0sVC5F81dZD5FwcHBLq0FVzu9%2BJjETbpeQ8KohenkBNz7Wqx2cH692nRKaFvWSDaLxzGvIujzz0UFuhk2HkCJVv7E57q8h2ciciA6A%2B%2B2I0mdHFzPvJeEbL1AuQvfJVnvH12IfAWScSQL3ZilQafmQPx4wxkJuAU7l34LsF0uHFUrcvLUn6Q%2BDh5VWlmgvn3E%2BqrI%2BbKQ9u6WmyrFv0SfyppIahYgTDxEOG%2BwCHSRswPcNmNsrSv6FYB%2F4azR4mIEwMdogA0%2ByOhWxtLdjia%2FF0b460H7Cl0Gnkuw72Y0VPjHyma6MLHZ5b8GOqUBQXZ3By53QsKCQqZ9Q9Qu6R0Pnig99Q3b7Egj53f8Y7b8HsGhk7myNGi%2FjwwDwnB4e4P0WNMqZd9IQcQa8bVPeZBOmeBdFHpbwp5KRQdoXtUuYK%2BikUePCI%2BkJ%2BMC8TJ%2BRTXOeiSkvnoRchl20QTPfCgT7ivpSA3A9lrNfHNamdt%2FbjV9H2nCO9bIorkkKhY2Cqu9y6OU8yPK0%2Fhx0BIYVIVC9w%2By&X-Amz-Signature=4fce3473220b6bb6894abb5223c6b0d7e01fb14d2dd87855b38bdc72715af019&X-Amz-SignedHeaders=host&x-id=GetObject)

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
