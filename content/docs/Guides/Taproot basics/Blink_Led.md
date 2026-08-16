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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUQ7RK3%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJFMEMCIDxvbXEeHCp0%2B9Azfx63bk%2Fx3NFnGBe1uwuu7kf7SU9NAh829PP90rt6%2Bn3lLULj4HyYsgq2K6UUTx0kb3c%2BCexwKv8DCCEQABoMNjM3NDIzMTgzODA1IgxJwaAokZCcbY926%2Fwq3AOYUNpR712E1vi2PWOVW3MZEgwunic52W4%2F%2FaXIpHlE2kbUzWE9JrbspLYZBHJxwxwrkvIGMs5Nz2ztmpHdHH5nm6i6gXp9PqANC4fPBnU0JhurpNTWeUtUlCw0ECZeB98logBVWxGpLCuJ0vwZ%2BQbSBEYKVE31QnFnQdkA%2BFDp4oNhwnbrunq0QZOnrqibR5uuWfXOd4X9mj4n4cuFxGfJb49Qm%2BjliC%2B98fD0aD5TFahYPeQAZhNPcSWEgsat%2FNUg40fSTX%2Fq3ZAIkaH9n61Jlfeqo4K9MHH4pCrnpM7IL4jGrKiENW0TGX1s2z4CemdBU2C1LRTuJqFsiscYk5xNfEvo8CBWB2D7yAl2sk%2F5KigtSmdXOj7gy4otGpc8BUg78%2FFkEKnzn4ruxuiy8w8dkBubf%2BY%2B2c3KuQonTpNJVp9GclY3%2FWPylTs88rJRbCLiIS9qlS1xX2EotQxd6DusQq7CPLR0HnIgUlmALXlj%2BJdkMBKP35sZ80sET%2Fhm5thcWabiObJFkx8Qat7CKXhhzildnX%2FTORMVs%2F1%2FsNxV1xS3vWjuZttkUYeZ1zfKzag%2Bs0eN0Wjy2VpEiYSFdMtecKx%2BUpdowDjzWcg8pajOA7ppnviPkllzu4%2FbQzDw7YPUBjqnAQlN5r%2FOKaHZyyjMYk6JfaTYBwOPIzcl4al7Apwz8jNy2brlQVbjDvRwCl%2FDo4yYVYHmRJ7sJmMfwVSg36SWD%2BlgLhS4Esm%2FXM%2FIe8MhkSzqPoWlwHgxEEuYLRtRN1B3Xa0B7c%2Fdw%2BkCE90WfIbSdpUecYzgYmNMgoeYtdBu1%2F1s%2Fn7QUOuq5z4tWRPWwCfCBDn2fYcdQ8LZZ5tQxi5GzuKeCAVVkiLf&X-Amz-Signature=beefbcad7c64ee7d94451513c2a846cc2492c07534f5c2daa82a9e4972cfedea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMJMNQ5%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFUhUTjnrHabDYISE4ARiHZQaH2g2%2FyuRJB3ml0Ghy4%2BAiEAlXFvLvOPLxJcAmU86sn5TbgpgqC%2FgAu3mYxsj4Dt1ykq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIc8aBr8IoNya5zwzircA7cIuYmdosnOA0wle4ySrZVuWYuTZeo3EYoTrGuejsVPA7p6Vqd0RuG0STEb5EaINZ99JS1FVcKuKssp3EWXs3uAwHE%2FdaYRGlYdWkW%2BFaSWHlRLeR0neTEPtdJwkDKAv2oKCJgDO5l%2FHygXUie8jqicrWMuJRgMdGCVw1gjNa2OdbErnvX2A01KyYqMDWzhj2oDWy%2Bj%2BAzBHlac2bg0bSgmOMKU1PplPNQiahtkk59RoNSrd0NC%2BP3ZoCDn%2BxzWEAx%2F%2FlPJjayrvI8%2F4ia4X59I52xe8vbXrZCV6H%2BuLds5ewadsYQ4TPGFhx6O%2BWnr71A34xuwO7d%2BKguHC3QjTQLGopT8FPKB5PYyR3x12NdhXQZLCnj%2BH94B6i3xn1uUylEzjkHO20XT6LDzDx8QDnCd0x78o0WF6%2FHHU2C2m2AgUJZTL4V%2FRm8Aa3XFGifEHpYSYr2Jw8a0j69DfWgTxNutqVPiivERZ0l6q85t%2FbeEpKU%2FDLbc8G1WklInWPPGJdkgPsdiu%2FV5U3%2F9xKf0zsa1cwAYb9UVh3fgqnwU0CDl2Y8h1R8QbVaEBhxYUi3N7GVOq0rnrIFw5wfhlfVJ00OQJ8oXoQ2PYldkt1Ep9Vcg%2F0Tlqvlo97J7lUaSMMTrg9QGOqUBqcG%2BNQPIS17oVSa%2BGFYcOTlrYUd6oMJ9swuuSOgDTze1a8A%2FTHiK7TpCtgao2jb1NRdpm0BZQF8If6TyWNX0RfiUEkwH%2FreerhRKJEdSYAUi1EmYaEg5RqI66AOTt2Owzv40JBQVyxOXTIQS7MgvDsvfpY%2BjxejVkEEnoG59jL8FXu5q%2Bpk0ZLJHrvcDGL%2BEywVaprI66kZEq6fiYI%2BAnfvyOsT6&X-Amz-Signature=12b59a2780e5884f0e37c991bd040576dd3f9b7722e84b66cd37e11809dddfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
