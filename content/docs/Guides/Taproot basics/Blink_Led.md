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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUKQ5BP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHo%2B0iofUkbnfCFGm6mtmpwUhDeRff%2BupcyB6Fw18xeAIhAOspIZ8op5Y31EztAn8L%2Bi9uR6H6%2ByJx2l5uPEdC9qsPKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSxAdTX6jomJY2XKkq3AP1ZFSNCM8QfaDKJJG11I3KYgAleRC2OnOIdY2HPYC4Cz9cTI53HnM2Jaq6LWbFcOGz9ABvXzVBL6AULNKRYCoAeB6IkpebrycxhH5d9K3d1w98MFauO69OYRVzc6D%2FsmY%2FA%2Bj8Lw7wuCbC%2BG8VeaLKRSmDq7ftjJumKKQLiYhztdRT3KXvZVN5qGJcZwP5srkBgizPy6ItYvB%2F1QSHBn3Ikxp71AZFn1ecFtE1VWz1NBdkaTB7kVzsti%2F8sdGpuTzZ8zfh9gk1cm%2F7BsVYL0Rd9pz4gqzIOk4p%2BsDr6sNzRJWvDbijYfji5LruNGuKjOuhejD%2B5xQaBBvOAZmm%2By%2BB7UubE15x9Nz%2Fb0ILohoIv1CS22m8Y6jDzAPtCVkYzyK%2Frd7PSU9CsceR4RXp4inMmv5nGyspL%2BorfXKZik0fWOpK31Kg42690jiBdTPclSKvd1JAskoVauyW3x3w4jt4LzFhqevk%2FdH5fUTcX%2BQltUguZaL1a2lKCPYC3xNq6gx%2BARnDWuLpCO3ZBY9MFvKpULHqG8%2BGLL4ALX68D7kU8qUUv2FZ%2Be4fUs0iai4UO9EoYlYiEn%2B09CXra6QzyK0LFjA8t139NHn%2BMIDv4EldW8G7k7g96V54CWR3kDCj8KfEBjqkAcidhsiShHGUyI9g%2BD4tp4Ccx51LwILF82kTlN7UD5tdI0rJRVYgd2oa0rbdD%2BnF9sNkfsxkyylKxEdnOpfnw7d%2B9y9L5phAZP%2F1rptgOST9aLIDL14Xq%2FZQWH0ytAxm%2FR57IfhDOlCDa1HlTK9BnbybeoCWiJ0CuGjz5Z9%2BKGLIFhw%2BGbANPoUDqabTDYmfhl12EdqBXSdnWtFLyAL4dMD%2FQuti&X-Amz-Signature=c962e31eda24593223091026a3aa5a3fa7bece9c54a36ed7e0ed71f4b2ff9492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFS357M%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvaxQaP%2F0o5QCtj2y2VuiQf8Vsmmw50WYhBfZHTkvyqQIhAPy5tgQUSLcCYGL4Q96CKJFF7zvHuzJEc3I1fWl%2B%2BHGwKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz%2BLCmKjCEC95NC1oq3AMZjQX6eYK22Cdllse7imnbC%2B6h8cEmWF8AlGRUgHbRwBsJ14ndS1jt5iv6o%2FyFp8Err7ZS4TJdDPG6AabJo5g4sCs0Sc6yi5VUD6WEPqjz5xwDYyGhw40Ra6NKRefyAk4v4TfmS6PJozjzlxwPZKEmRdMxQYSt0xG9j%2FOtlJXfvsSXup%2FAqCVdc7FXWgvH3h3CT2popaL9pXoOTfqR5auEF7iE0xvwK1BMFvowoytVOKPC8LWPHh%2FUpjOBuLF1c%2Bq6Y8xeM0PQ56ofRJ1z7l0Pi14AHht0seE8E7h9fcBR6l8xbDtnKxItJSfMnFJ3xHlbmV8%2Bc%2F3sWZYrCh0kz53a%2BTk1UIn7yHVxRR2yd373rFQH%2FprdTvWKVJXBWjlZhly%2FBJ8QNnBOGtqgLJzIOfMNnjuZPgwDIb1VUxRA9BjcuRoXWtHZrDlgowUCq9TMH8e4r4LuK0s4nqXJqCBfvGK3qtpoXrBz%2FTDST2kWtXJTV78aePm83rUD2R7FlsJUg7lbG5xvVylHMpS9bE0KK4qXetSiSV%2BVMP6JmqiT3lN3BDtS1dzFYB87vBI8HUm23dtq5YLZceS7GvamfopJfM9mzOQmcZLLteZc%2FadFwT65K9M6fBZLsbtk7mZFdTDB8KfEBjqkAdmh9F%2BWIk2PcWQJOa7cUPiM63%2FhXdS2wucuUGszuVmSKwBFZXfff%2BsTXQScmedo8rs89A0fBMP1zEK%2B3AC%2F6l%2FTsZKjRxqgNErjeo6NFQ8TnUhQEkfXQNKQF6qlUdPDorTBfv%2FqRzNhtwS9gWyerb%2BeD29LUwCu%2B1ImyF0bG5MRE7yfUefe0jYJIgd0s8sdm2%2FL82HzWe08ETLIr9r882oJlPnG&X-Amz-Signature=f768f82bfaf8ec748e4c58f50b1fe0b9a139f5a4c69b390bc5679d02e3cb09ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
