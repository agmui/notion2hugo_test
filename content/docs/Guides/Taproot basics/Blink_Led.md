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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWGQSZG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs3t4ph424H%2BoN%2BNuPsHwPWacoTHvTFnXdQlEXwsNSHgIgNx0tLoP0N2S%2B%2B3ucJSm3I7Jwcd0pi%2Bs1F4GQaJM%2FisQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDCvgnzbmyWj4jkGtlSrcA2F7sQ1dFgppvrcF5y4YeICHF7DiaG%2BAAqdR3I%2F5AymX%2FKj74bedUqwDRaTRO9MspRI2XLHPOJNzaoX5dNztX36vj3zsrsGrW4Spvmh4URF1gXrSsOdJlbneE208k9byp5QGRLgoIvnJ4pdcBTiu0F%2BHLDMHyCiqIPNJQOxJbLIgJ%2FqHmzyAUb7B%2FPePbHk%2B5h9o0amPFkyC%2BuC%2BieZZPMhfIwpqNinh4ZXymBRj5WFoWXI0f%2FELQM6hJkPTdyTZGCCpxWUYZhrp5wS803WDy1ggW3B7sZ1M2UQpYSW%2Bc%2BV8%2Fir2MYEmA9fZ0WOraEumB09bpwAc9sQ5vHP3InRK5jbsMKukflzhxl3TX0%2FIYj8xtZIq5O0rtNBmrzUzWHF%2Farelg8UYfWMhKV7DBKSS7pmD8ebXqpylClaDTZ1moxGYR2IKeY789EkynsoUiQkLZuETIl7fSCoKn%2BBPmcEJ2BuB6cdy3tnwf6bNhJnWi8StvTe6IHVKQz3%2FkPPEnHBh1Jwb4ciM1haQNx58VLYH1BYUsN%2B%2BzTvzpTJzKgJZ7Wgxi3EZs25oy5SydP1tMU481OFlw0HDWflbvO3Te%2F%2B0wxgY5XchBOoDYIc0KkemnM8fxD6l8jUZk9iX4KDfMM%2BLir8GOqUB7F6ikue3XWuRFzXHIcg3O5mJD3Xji4FHHb5qXCOsO3K5krED7YhMJmL1pfb%2BjHTHZtfdbbujui4IaS7HQb%2F3RiZRz%2BZtHyyOJv5dOb76QjZQto%2BHcQokOBuBHLPw5PVeaEbSa%2FRBjQU8MnZg9eKrRfJ%2BXsLG0gHAejfpVIH5OfMTzlAxmyRukMNVi6Ut4Coi7Zrx1AwOnVAafEh%2FRgapdoIm8idR&X-Amz-Signature=20da935c28cf80ff4f54fdc3980a3043deb00867fcfe61e260605068e7d2db05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPH57WC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFc747fX2pJHuxmkqnC%2Fa%2B5BkOsbzVpKppRlMThSy1pAIhAIjnGIAScTXsP8lD0y2bLBkeoAC7WaBhmvc75S317QuVKv8DCBQQABoMNjM3NDIzMTgzODA1Igw051FcI0%2B%2FXJ0L4FEq3APu%2Bt0siLUZbiq7hF6rLY4R3L06omAuwbeqE3zPDf0uXX9op414Mlge2Li4ceIYWMb%2FD0TI7CgVnlZ3BZAt%2FnVJV8zJb3ZP8XbovzevhvCsU3%2FWqI6limCu7ieLQLN7UTfcZb5SmQz7KXcoxowOCfaoYQfii7J1yB58PIanC%2FJcMkX%2FAvC7jGbspGMVdZdSaHtHTI5U1EIaakXNtucKEK43g8KhO1DBzJ67bB1tguQ7%2Bj%2FQ8otcad9Colu85Iku6willjh56Q%2BXAea55iWj0quDUQbpp0VpfQqzMRZUPOOG%2FPW88dWEdETTiAlOP1BjAhfQCB8XDbrmyUi2Xb%2FetosW5ujmT%2FqnUZY83eWH1VOcGN4Nt2nkbZDGyxMQlDJVpa1TCGz7HJ%2FUy%2BsKmf0kpagUVLsNghtZ%2Bitk5%2FQ%2FICwj82sbNUAVT7mrOqVUhvS7nom7n3HU%2FahCN0Bes2HJGFpkJ7%2BtodGSiwl%2BHMmLA9A%2F1Zaiiu0hAp7Lyw9SbA%2FLLC%2BPZGA%2BAR0BJt%2BXrtJMZROTFlgjD3RtgQlkB3hKTgpvvCynOWZku6lre2afvdyl4PcHdx1H4JX19Iag%2BcPAWSXCKMf%2FRuPOTJdkc5o21Mb3gJ9DYooACjsKmCuX5jDzioq%2FBjqkAcA1hvF30SvUXAStR56IE20dzu5%2BpLh2HMfayktVF4rWUui7VObp9nzWrfVMA4x1f4hhGozYMqOaOUD3yNaE5Wv5rMd3fuvOQ50qXO8hgZyPiljIKy4huJL%2BLH2%2BtYGuTV8iNbNk3h62PsM%2BdtE%2BrCxoDJcm4oM9cXyVcXaZF74%2BQEnWvciZG0GghIvnlgWT5j0Qx71CtsT20uC%2B3sBGVyT%2F%2BDza&X-Amz-Signature=7508475f7370b3902d9291f15776102d60f8c4f02792c42adf1de9e98c166882&X-Amz-SignedHeaders=host&x-id=GetObject)

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
