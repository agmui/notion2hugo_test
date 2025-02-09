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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QCKUXI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp16UBu7FH%2FuJPw%2BOoBN8o%2FXlXVJFJuWx12upLU5hCzQIhAJp9g03eVc3G77zOOkBmyDOsuw94F3i0o6Ihac4O5MYUKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2PSu79e1VJQ26S0q3APs%2Fm4QuIUTPRcRiSCY5CnhKU%2FsBltp7O93wSu%2Bkh5ENoUQr1O042eYxNcL2nldfffYHKa4aptPUod5%2BptDJ8frmRqn2iADEst99WNwKr2CCyGGpWASqnb8O5c4HAAzjfLJHQYOBfpeuuOYLMy3B047%2BWThnSQpPJwSpCOz5zTrhRj23omEmOvpFsdktz0HMW3ew5m%2F8gCnjww0YDL8qwRHN6KJXG7JZQEE%2BOL4jeTcxnhvInVsEjohISD3ksSKMYv84rt2FqvEQB8KPUN5VtUP6WNp14O7dlGqfWxi0s%2BbED%2FQx46SNPvvUr4uFc9pgr92JiAyhnvf9Z9AEdIpVmi24A2jW3Sf6tNhG%2BtsMiu7mUCcxcCia3l4LKGmAKTeMadnBNPrzlAdwEEGfxcn6BQu8CSLkOkxiWh8hg3%2FzVt58ObHhlxAbbFmlC2UxHaBfysDwSKinq%2BVLbwg0i%2Ftbi2WqNIjM7KsOPVoULPPFJYWfTS7DSMh%2Bv05FKHFVIvPzkQH9lIysxZ7z6HCFC0zH3pAu6MudsbHWRYtJt2O5k%2FTj08vEE5eOzoQQJJFXzBEH2EnB40z%2BJbih3%2BK1vEIkqhPs2V1e%2Fg9MzvAO%2BqDQg8rcBGDBmnJIxna%2FEES%2BzCBwKC9BjqkAZyScgFx541XBWdYpt%2B3J2bQufwmKTtyN6BpvVD2bX5s4sApPuQadPaj3gJ8uOMEMIpGmWbDQOhQO2UTkTSDTpz4Y%2FTggxjZZEA8zJ6JhPNjui59PyaCARmxYxN4pj717PlfwFIQLe5g1WRj%2BXFzymzGsa6j79V8JPHb0gvU0WmVZ6UuN0mkX%2BrECbWIsc5hFAZ1CuSryCwDA4VpCqvtj1H8nmsz&X-Amz-Signature=f160d4d61f5980d213be9a3be7b35842560eaa6388c7af113ce7947011c9801e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DM6UCO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrLHEzs0J30CDslVz1RG%2Bwkc0Xhw3Kcqg9MjSp%2FZUxyAiEA2HzxhBWPlvvy5dtxFWzVnTEH5gcqOAJrsJ3LdS7oMxIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWMpSzIHU3JsAPKxCrcA2pLXjFMgGIjKofqeJFZTBRddGN2r9pddiLbi042MbNjIR6teX6%2FmCE%2FEuZmV%2Fvi8bsnxDL369xtmZLsqHIZW12G4j4ez0OeYDB%2FJztFLOw8%2BSwBPuHIAZJuL4CXqYeforFqZBIq5tEhf5q70z48DYpv1U2idkybHvtasz84y7mp0xG6s3Pn3TgLOevojtSOqri74f3IA3ch%2BnLl%2BS2shLqkjgT0uo43noj9yoTht8BKZsKGmRoiWzXi8mO6O2y2UOJXsqASs%2FxZ6wWDZh1vC9aSbuqjguz7dqbEbF4Yalmimhvv3jFgI5GgzPh0mlFZG3s%2BVuin6M6PvPhzrpKbTtfGH4X%2FqxT9T%2Fupx%2BcNim8A5SSBEyNlzukWNVPYE5%2FXf68PlcdXqYadlz6mGFcvNRu7dbQN2HIKQ%2F29IfrAx3nvpXg%2BEEv7l1rEhHq%2BNAFGtdbarCyY6%2F%2FCCd7XwFTT%2Bol7bpkRfzluPePg1IGennVyXhO%2FOJ3cxTs6yZWCmiONXyMzgbMupgZWxUlboWALTsMsLiy7o9i25wWsbwricKWqnoqnpgrJ7D5Qwf1HpwNeasQFRhID%2BgvsD9wEC2p4gQ83D5J%2F68C9bZwBIGTq4y5V9PrHUW59mTwfbYZJMMe%2FoL0GOqUBWT%2BNuJm3dtVbpfyFSn3uxvXCmzw4ww%2BXjPlu41WINdaB1y80RDeuHPhofeLQ3HUe6YEqU4Mp0LeU%2FGatqM0PA3hvwjY23doAj7%2BaolrQFq1VdKCrdAC5%2BKsEFugwdKNwhUgOxPhueGKFLjvE1qE6khPU3bYZKIft34dMnnTNzPBHo7jmpPGQAYmNqg5asVa0h7bP%2Bfl56ombuWkt2qzfKgk8KH5C&X-Amz-Signature=8b242558c2c1c5a7f7cb15568f97879f47e1019c72fa51a05a23350f3d629fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
