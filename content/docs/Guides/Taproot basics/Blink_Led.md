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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ERR3IG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH99i7czdCTyxwVUVNiiSlD0vjJvIOsb%2Bt7L8sOEtpXIAiEAtXVe2uq3wMprIEjA5T34jqDCZ4TWmb1XyriTDE3BPZAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOI2KekuRkhTrQJDdircAzv4yhro46WPQYE3%2BTdLcI7Gr2UzJ673cjmUhnGbRYOqTi%2FwGSj8iEGZSEk6mIzA933%2Fr0gPnyBinPWtxH5S3a64K8QnKcoKFGRG8JvsPBJmkOmR7Jw7qdm5R%2BOfGkA4vo%2Bs3HtZ%2BkgADXN%2FiKOC7BOojQ1grJZTTqjCQd%2Bu0ZqUmrZfFakCCaKEZg0A9%2F9tHX6TfniRZwAgC95zJVigMQ6XkppcfcaJ3hl55yXLSyLfIt%2FHJgz3GtwSwr6LvPvm3IlkXA1MVHfkmXx3Iw4VnkwpWvkYEtwRa9DQzKhCVcYtiiuJN7jd3muivvgsJI9hWCNMu8u7jr9QSwCRXDaQKOR6SYdUpbcPvrJWqmuJejRUPm6L1iLWBc7ycdRsL8QNqqTrUvQ3ZaocpDad3eGPS9gzvWNx5Th0ZAHVdbVfrws3f9sR4N%2B0Imx1XmHxtoMn4Lsp1vD%2Fo%2FioqDojLxEPbN%2FPPCB03ghZ1BTIeSYiJQ9pzWyddD%2FfJJUIfrikU3K%2B5wkq8CpIKpov9BLMdrW13LPihyjy1zLZH1PF%2BPudb21LI0lmNoVOk4DqgTf4znElLC5XtfdY3vZmpychcsKGo7loQSyI7zHJzMXkY3GjCyE96bEHNW0TE6j%2F6KptMLSb3r4GOqUBEvFvOIvpvDyVE%2BnLtPBdBnpLE6tknKXj%2Fw4Oo5ZcgVdrtsCjygNJFAIn1qgYgeE3rIDNjG22NrlDtHoGAYLNsEcKtTJk5M2lBi%2FHXURt7553WfcbvsrR0CUNL5kqMXELOGAEmLN3f%2F8ylLsABL%2FhGT5d580JePsvg3TXPStHROmYJEzMPOHgfESGcqhTlj%2Brth%2BtaFmW0Mu9k7MmFPykGY07AhlM&X-Amz-Signature=b5e1707af00b4d3a3879b65faf52df32a018b57a76bcbbd35cf9d18693573b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDASVMJX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEf0WOmvvO6WvdVIKVJIexAQ18vK5NAc9hSohHM5WaI7AiEAs%2BYRDMgY82EzX03v6b2Ec9NV6422YkwIa361SFfI%2BMYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHAIkNh9VnzqkHoBGSrcA5XeuN3FRvmGMwQH0%2FsRIHyVFflFdFaD7IUaVIaaga7OQZnBBNqo%2Ff5As0oshHoG4Jrm0o280RbR1%2FdehwJAXyiFrGvq1P2j%2FY6OkRMcHGaX5h%2Fy%2BbpLU75%2Beg5a%2FUreA6Khesitwmk5FM7%2BsjysXLltO0EDjIw3JAGJiD7dnAK4w0sRl0jQXQgHJCG3r%2Bqjh3UCPjm%2FH5WKMmOU%2F2ZAqcKITiIvRqwvJ%2BvoiTKnmbOS5%2Bhih%2FCQ1blgPSFHBOxKsW4GBqrsLdrI23O444%2BpSjZYAcircI25f3SI0lwxW660ujD6Oo9WpUahqfaVtD0w%2BF%2BYEpy5a%2FCAKVY5uejBTiof7iQD2WGWVLvW3oorFospdV55DPsXJw5S%2FFi2Fs%2BlbX%2BvpttnYv%2FeyWPR4Us3yu7knqhAfI%2F%2FOYa4HEIP2nxllIWdeVomnRLxyiId2xqWK%2FDxe25s1DyWjx956hiTDqQZc3Eu2Ysdh0xz6DDIZnV51722%2F6iYJLeC%2Fa5KGJh3WNtV1RdeSJc%2FRWfLRK2jNBXiQ6Z056aU5V1eefc%2F8ZzdpTnVcar8Vin26MWaSwY7OE6NGWFxhcPZYNQuA1V4cQcPdrxpF22qWRuT7HJF6OZIu%2FMZpX5lsKX3QzJcMLSb3r4GOqUBQMHep7Tw3hPQsArd9VsA2jP7xYOqjsAtmNmOQw%2FanbbEEgSdCQyYhSPYwrr42WMA%2FDpXMnDuTBnXOadRpfB%2FCNIEN%2BmHamlNB4wLnWchw%2Fpn1cfmI8GTgMCXx%2BD2oIZCjKAqCCQCHrT4yOjxjTnI0p3cp%2FOyD9Fp5lNSfyqMYNq%2FESO20oHdz0m5QvD3OgKVtw1LiWGhxT2fdQRUC4NKAlBFddcb&X-Amz-Signature=6f133fbe35a67e124c0e673b76c55826e05ef371b3af81cf0ac25cb2e33b8b13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
