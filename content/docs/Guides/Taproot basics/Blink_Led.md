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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SZPPSN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDg4hBgDUkxd4%2BQs1%2B0mAqFUvN%2Ftc%2B62PxF%2B2TenERZlgIhAPuMTB3aPXDA701mWwgLfImBo2yDEiuuvHAenjX6xHRSKv8DCFYQABoMNjM3NDIzMTgzODA1Igzumfi5UimlnJHbiF0q3AOoHW%2FQ9y8WbV9aOUnyXDCwH2u85X7evTSNRxn60pJq3wg2X%2FU18vMtbHOS0cnWFWtIz41V40UbNeM8njRSV6XWRVFPT%2FQS1udFJFa4aLlSkiP51ufjdZ%2FaqMBxmanxTCC9zW6nJmeJPjoD0vc1gPnaBxBeqltCw5W3DxiFaAhE2cUDSnsQocStTB9gMM8RNF%2BSy8W1FswhX3U2TaZ5EOvjXF92Kt7AHL4idZaY24MF74K%2FUQLZTR1YR3UDrl%2FO5DGlbGaFdIvNMgEqCmLxdcm99i1KHImrC%2F%2F8b%2Fu1HZ9m%2BpOLyUyOdBaGDzPkOAaHKguPLQjU6e%2B3mjR6t%2BIy3FacPbST%2BYVrRIj9VVQgNVxjULvTzzi5OEwJyZZBaqD27ToV0ML%2Fz6F7TBfy8ClqCEQyWb7elAYKK7u%2Bt2tLyZ%2BJk9ozUB91l8SICkEMEZ6h8JQcbNTtTB0x1nEdYQB1sj%2FijrBe5DA1hx6KpZJmgwmmACyFN68vj1N%2FYuFQfYgXTW0Coo0nuuuBoTfUAexL%2BVKy8sz6S7ADaqM8DqEFoaaArKletO0h5BZThtp97F7O0YTCRhNhMpJvGTsmWM3T6FHtymq6HGrNlxV38Y%2FFFvOuH0Hu2hbwoPmhlPghOTDo3NzDBjqkAa%2Fk02e14OMw80EGHVUtYhVm0W%2FX%2B9vGlzFMWzcQaiRf5QB1PTmaV%2BO%2BoRuNxu4IBCw2OMtkPwe00N3IUC0NBt8a9iLOH0VO8SElDC4qf0MYhfPjO03LC0RMNU%2FfcChWDQregLTAApe8BNpultn4HQkwBKY55ogG0L2yIB9IMvU0Ei9Gqf5JG3m34tw5YLcaI%2BXHC9FiyHhnZReU1PX99FpahZtQ&X-Amz-Signature=f3e8034aea67dd1fc26f09bccbbef3f8542dfd8e61bffccd741440bdcddd1e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VYXPPX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIH6yjDm%2BwfQEHC5xMfY4I3j0H81y9cCd7IQcQqtWPb%2BuAiEAxtZG3wSqB3sEboJPIbQqhxTIWn5tgK2ZI5MRRi7PfN4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOyyt4CS4oeKyeIbzCrcA8vLZVyhN4txrjnU%2FVVNHDd0ovIJXwfUyyrPeja%2FIUpsmbxnMJQbQ8f0Zlu9zTWoxUSnJquhB1XXcnP2YQ1toL4bnBSs5jgHONPfjUZNgU0SjE%2F1Vz1ZByMQ6edSozNkiFNPMFhgxQOhCGeCkILM2dHCi%2FgBO%2B%2Bz3nJQurn3EIStsL4T1NrL7uMlIdzfPXmw4ZlSsaB4iBmqdNAU2jRkWII1VL%2F1JIVBG15uKt7ukFRubHW1cv9y%2Bp2W1ag37NuFEtPzUaZcrxMgaKNS2UlDk%2BuHlW1CZ32wrarjfil44BXRh3q%2FMehc2xeF8iBZs%2Bt0Qsb3d%2F%2FPgAucFQUkcDZsY%2F3bVDnZtxJ4bSpHex%2BqUmkl7iCdXrz0NBrqr00%2FvJkL6TGGXKa3RB%2BdfP82hsHUie%2BuMFoorq43S%2B%2Fn2Na41%2BUvDH9jvVBpZYlMdA0lbo657jvfuzess%2BMPBiT8cxcCj0WdsxlU3OqUfbovVIDP95LWjFxinPniNwnLNQk57E8iiT9BvW%2FhMSWTYKTlPgL%2BXdQaeus0O%2FZ%2BKqqSl%2BbHhu98OPHu4NUH5Ug1X8D%2FbO49DK15IboYIP27r53WKqEwLipk9TpefEXbeXmmLfkVMiG26BhjwPsm5cNN6IBFMNnc3MMGOqUBek%2FADpxVo44x5asFeBlTxpXSwndFBcvBvijHUG0YugxLJEnL9EUtjAPhcr8mX%2BoHrLMFMntGqw7JJTOwkVbu%2BsJY%2FPv4ZIyGl7OTKFNsEdUIwMN0y8ABTsf%2FG2FlNS1jLJIx7E9LtL%2BEtuDYmlDxXOz8HbbkwnHtyABbU9131N%2BaHFxJRh0LMejg6e5JcDw1gcCBmrUUPaXJZkAOJ35Hp2WkkkfW&X-Amz-Signature=274bd5b647fe4114c9b7496755192c9b0d9632f0f9c636cf0b6de2d005715354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
