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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEETWNXU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZaK4NwUXonpN24AQ30pM1ZVIl9sK9lLC%2B1cP%2FdUJfDAiBfc4810surKs%2BLNysyWXpl3UzdnMSa2xugl%2BGfDupiGSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMhBz4VO69YRs%2FbzwJKtwD8iDVG2AJa5vMWll02EGyAy52z9gPTmjscdydI7U%2BXVCFuWV8LVAi3r6kJJRrxSsgqaWIeAYIY1JWV0o5rgqFvI1Pz%2Fnr0GaJpAuvAGBQWPvguI9Lchd0ulLaJiwjdLdguFiACnfOvJeHu%2BhRxpZ%2Bqxriasev32eSsZTBoud9CEGUY2M7YgaaYfcuenL%2BWiQeobcmzsyGiGXb26gEff8gmeroeC1yqOKzk6qiyYdJs%2FBj%2BDJMuiHI%2FQRKeryH%2FJlCpKdiumVTxjoxZ2tmUoetexbcy4nQ8gO16J1SGDykeb5NQa%2BknEkC5qLvDkLKZxXhAMl10jYSuF3fwYpVgHlWJc0WKEzbH3SHD9qmFkT%2FVF6mhesJ8PezgMlt3mgvUhfrmgxquRVqCuug%2FXUzQMCO6QfLrVPre3RLeMiZB0wg6Vj4UHuMj8z3pgzlZNWvLrIe1SVhN07uBhdrqauqCt06RlNtrvZi8wnXZsb%2BKGQIA%2B9IPbxHlN1a3kTQhs%2F4e6VKhDyQceufj3uJXM%2BTMRq9U8nCfLpxdUN6BsNo8end7elEcdi%2FA87GTHic%2FGcOXdTLRdK1b5rD4fIduy3H6BdXlhdTlFwkhMwFBvs9bv3GbbASBHKhwpKjGAbMoBMwiY7XvgY6pgGYbtQ8XPhWaGv7MOJ6p3jlmPbE9FWFOXxXe9OOY8I7qUZRfYMQSGNnIuYwsZ%2BOU5KaEQltnCTi%2B1Xl86Ys%2F2EOF2UjDKewjuPpH2C0VexmIVfbGfbyiDWWJn850jBuDneR5iOwlcjDLH2405jXyTGEBkibPT%2FrJVAPD%2FCUoP2WkS%2BiBk92CtJTy8MaTKDvxCC2cuLUcnWden8%2BkQKCDOGwOIeOAMtc&X-Amz-Signature=bcc2c05dbead861c1739225130c9054f71cea41dfb76e3ebb98361a63e96a3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3WMDSK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaeWc88kNRCw1ugq42wl1P02zqXfUPiyeArd8YnEmA6AIhAJUTI5OqT6Qd8dxTLEPGqU1ConeF1SEQC%2FoVl0Z%2BAcx0Kv8DCBwQABoMNjM3NDIzMTgzODA1Igxq46ea85TupQ0pgdoq3AMRkXRwzIBYY4Sbvz4l3pDDtL1ATybFNRaZq4Hq4p29c7Fw9YxHux2UQP1Nr7XHfGpHAdnXePZH23i2XsZJlGXIWDf%2BP5u4BGqV6oKK38UA6QAtHUTbJbQrrXb2BxB%2F1QjFfDpsxHa%2BhU%2Bsb4BQaPSCBLoB5l2di8tv8cS%2F%2BVhF8tKLn3xefnCTZAojAzHa3Oz3Yy1QWNug2Z3ugf4CQz2zjPzDwNGTxeYKgT79NGrZeKcYqUqO6X6ZCaOCevnjLq1qtZ5IDdX5SzIOVS9jhgP1KCF5oNz4HfJUCfyYCiUNMauJ6s9IZKy6FBcpehqOj24DwIhcWMgVPlxkDsAuHYijhLhjyKe%2BuT4K%2F51Xcl%2FSMsJOgqnrLYRsBJjDrR9rsKtYEGdr7fU%2B8nuCsxYJx5%2FYpGQyOqS7HSHI%2Fea%2FRcghLVTaNXJbThoxTAzNFqZRN8W6ZGuGaWmlomLGFgNsCWtBpif2DfQKsS3VZHCJnc3C9PBUtJKnHVW7qIAAuE5I31iVEVtl2%2BlOpjDadT4OAbCtRRCXb8q3MnYq0E%2F2SgqkY5yAMdbwU%2BJseLt0qq6Z8qZb1tV3vPl4XsG%2Bebj8f5FjrCdsUmLX0UQ01zNHI58%2FdO9gZ6GwMRtext2OFDCHjte%2BBjqkAUfhxT09YyOUnyiHJZ5irlbpaMc71KN38DQTzDcYggooXJckcLnObZHwrfk2NKpdKvsCdawAtcxKtxGPD8ls%2Bl0fS%2FP%2BVDgtA80AnNGvRb1vI6AZ1IROGfi08SUrR9ClhAmF1T0%2BuGk7xAs0f39IWSh3GmvbMXj7tgryswPTpdcqR%2BJYwe0ujFtYchkRlnqqLtWFoYFsfKVnhSZWQCddQMR%2BcTpd&X-Amz-Signature=e0e07a8a076a9e280d1c43d9627ce6ce2b0eb7a113bc5ed7549ac147196defe8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
