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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBNLOIR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBaY1zqmniSVMJO%2FNDWvldUY3E%2Fla%2BUtolo3n8FLfI%2F1AiEA%2FoeW15tmDSYQPbuVllu%2BVHCrFMcp6XDUofprBW0MUToq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNvd34igL7C9XHvxuyrcA6Pw0jqA0taQfzfHRH4XucqSu2xYdjG1g1E2X7SHIJwrPKzBkKUFyk02Er%2BM1geC972ya5Xhj%2FHuR%2FdGYAqQE2gpIHfv%2FtagZTjB5nfQ0n4lee6rcIDiLEyIM2egBaxKfkQ4c5zMAtkIVCdJOMdRboQJid6ps82YDvgSQCSROTAiKG4xSH88YZgwZ382dAPdbKRBcG80gQR3xUJOdJmqKVtXLRsjViRQV80u%2Fgy9%2FG4sSjk7M1mpy4WBBLSm5FCYXYJKngv16e4bkYDz%2BM5N0Jt2nOt4hpKtSOm0ZdVvng1rLIQlAHkm%2FBvhsMbLUSVFqhTOyLTXlQtrQGw7%2FoRggSNE4bswK6nITnD1yx1anZx4Cl2lNlVCoL4u7TQc61sT4HzBVkziJHednucuEU3DPqdta84CYoBzSZHqobD9zrebS3KA34ZSCSRVk6cv7WAGemTsU8WH4pQgwJepJrhj%2FCEQW2kQl5ys69jfJ0kl92MLbHq8TZoCewH9OfFPgHV8LsAwmSHSX7K50v%2Fufx5zT0XxnVaqzb8eUf1Lg1BKxJ2jbNJOI7F11TZbED47cHu4siODkncGLsHavF6vYg%2FsadWvZjQTAP3%2FXGzoB0mMrhYDe7wY71YvbaNb%2F9qyMK%2FKyr0GOqUB7Zma6qOiyyfhFGtRKb5ZzjM8Qwfol4uq0N5mxZSZBzO4Bd4OcOI3E96lpPGSzEQfZ5aajbXBUXnIXXfN%2FVQuBMAMyHMjIJzkRvVi593q6MLK9mPy9TYn2y0vD2kk0DecQcnzA%2B5pyKUIH0xDJMPtT7%2B0MNuRtxDUlAQn1iN7b%2FdmHAkZqHJFOrgb0PwOs1cpJjH5wKmsfs6TVzg8AFGMyXd1cr2a&X-Amz-Signature=f9bc47e90c65a613c0f9a1fc601b8c48f0627aaacd6afefafcdf92dd3aa57076&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MIUQSVW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDfDIfHjGbvJkZ5z0XuED4dwo%2BIxSnqKW2gsmx7dDwjjAIgH8HMRb1D%2Fd7WGj2bqVbLZUmBjcd1iFm0JrZg0is1FHkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOJzbgGGzX9KtxC3TCrcA%2BSBa3q8mzZ2mMvPGxGs5KFzpmcYhtOwD%2FXwz05znSQkNGiN5W1NDLIt1MPEazlMEfTqL0MmSXfL8oUdDEFPAp8hY8PWlwJUlPL7zkyaoWY4Y41VhinxMabJw1ZJtgXqfMWiceqhwxvY%2FAP2pPagnlEDLhu4ZxymFhvO%2B7K4U%2FYE%2Bh2v35X%2Bg4AzCWeGB3WvKuRMwGqD20IIPdCdGgCExUKhTeA8OrSDmrtnady30SoPQfAn4CSWn17DwScJntyKKk%2Bb69UDy7mXyx42neLOkMjJBO%2FOuzSqbiUm2Z%2Bx5j06AIjhtjZC8idvlCMwKcSRi%2B1HL3bNFGJoLXwmOjTnZDTcEMfaYgxeewocr%2F86rK1f7vfvOwX0oggQjegfjCo98A5N3UsZed5tiC7RKYatfTV4PkFhiRi5OMmeYUeg%2ByeO83D6NDeTa1dR1vcWg4zaZgXi3T6QM2EcqzUuixlpZcrOYrjf2slv%2FVHg7rCVMIyhrrDnfcfn0sp%2BtYXRT4A7L%2FOG6hxEG0DUjMIbeizBeCa4%2B0XlWZI2UmyeM2uOjMpk9ixxxX9haRnM1omfBs229Uo7itOlLArINfUdAxzLRsF6tuwRZBAygYD%2BOYZ2pe2y9TtnMUsj%2FOlvE7hzMJDLyr0GOqUBZvdp4xLzo7moJVxUiEwBAAu4%2FCy7yA1FbxKcqigbR18FEJoAixfROLEeC8c3BKmkyH4wBkUebhjiMmyNPFQ9wjbTSntMpkv8Fb7gvS%2FE6hcCfdSHHR1KCd8B3xocDTKaypr6ORgnIgNz%2Bkp%2BfqSyBoXKhojnxtSgI7QXaRFdNn5gruzMGHmgB5sLCBIJfftc%2F0oCvmsfLMqBImd1vnyxq%2B5VTUi5&X-Amz-Signature=9cec72bb0dae9ebf17447fc8f6a8a358d946e6d8086ab4a9287003872a84b0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
