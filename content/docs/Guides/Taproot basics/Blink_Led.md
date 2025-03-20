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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLGBHCX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGVy5edJHKOZOkW2AKITTFQfyBGrgGsC29YAKue3s1DtAiB1vvW4q7X8A6Iv0A4VeAOHkvZkduE79J4Xua8HnOHm7iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYncu4heYJeRr1632KtwDd2fXh21PWLGgaMxiDt7q69ZTEjuMBfYLW94Q7OGswjU6n%2FtrlHmB1z7ADqq2tT8DBgjYN6LgjLKtnY86GA%2BiYB9IoDXr31nFbtw04gxsQ3XcoTGSKvXF%2F4RUNjl10sC2wfmEOLwjqjnvP%2FSchO4sClaK2By48ruV8lyOy7RJRhvrhIBQh%2B7zwgh%2FlenkDjA3T7BhMLTJdMDqtpgLs2oZ4RAsOJX72YH4TiQ8W88rcT%2F67A45FcSAn8gt2BmmED3vNAg5KIrz%2FqjfO1HA9KHTOxzy0yQq4RrUYJNqS5XqIZb6cbzdFvj%2BBFDyy1RlTV5n6U1HfbNsfsgVC1WxVBNeq0i910OTTaz22%2B5bZHEibp%2BzGoYgiTCDnghMj5SY8ITTsxzNaHgOCzkY7qTarUt%2Bl3GoLq19QhVlQ5vwu7naX%2Bpglcz1vu9AvZ8Ctzdw26WuE6aINdgyh0QEwlF01WRjsKvQ9GHQO5VQcDdb68u05IzyhKHFG91RYZBR0dKkOs7ihVsAfXGBb%2BegVYRNkAB1npXcBUSQ4syAy%2FhIWH1VIA7sOjb4j3dNWSTBOEvrqbi1%2FDxyYu9ldbvNlFTsa2UkiFF0kr3RhpDcFERRDFYUsQR9Bv%2FypJ1yJXqRwqQw9%2BTwvgY6pgFXms74Do4kwVTyv59F5MTvU0UD1Cvk1GiAmNY2cUc9eB%2F5%2F4%2BPFSMxg4GqIhyvXhN0wJrz5gk3ZzLgK6iaBrKicdN2OcTpN1KnXLkSeUuuqxK0l%2F5M%2BVRDN%2Bo%2FoSjU%2FQuzx8A1vis4iUHNTLambuIaPSInA3BIoh2eoAI2ljMPP7e%2FMAv2f9z3DCfqqSlTceizOpMy5E4CwnyId5ND4pPwKU%2FesG0x&X-Amz-Signature=077eae31ec58570ce750311cc194f192334635694eec09452944d1e61f862bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDT3ITN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDBDDMPGjwPzcKGJr4UAVw3JORaMKhei5t2KV1K4qntXAiEAqkqa9KKO8TvKWFODZoVpzTUDB1CjRIbJSGxGeE0S92AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED2ez9jEGt8%2FPfbZSrcA0guXV3ctY5KdGnkc0fTjt5pZAUC9OOxNB8u2g4wFVGibq%2F9P07QZgO%2FkTnWxhD8nQfgg2wvB8kuwahqRDUhpVnyHlpQoSSCbdr5OV4Up6Jk9X6aW26NxAwdzSuzn7nbKICoHXvJl0Pdm2G1UoyQxoFlK0%2BCZEfuGH0Nsv3wzIozPJVCRLwdePL2SZLjmJxgrj1WJw9AhtZIratgWcDKq1bi7oRkOb19nJq84XCAdSWcgwW3sRmyheWdrtjRFOq9Sz1jiL6793UfoWwsov8RbcgVZ0HH24aFIp4a1ges7vUA%2FzSq5VamPyMuTRqm5Ukh6tIC9n5JtPvAGqOFyHeialOg%2BMhdbQkybRL4FWHfE4%2B8nxfbHxjNpwXsOpuZkFNnF2aWaH3kvGECt1T%2FsIBY4fyRHX3Lovw0OlcsUciQ2SzQycTf7XwafclzuTc9VHR1Aib2eXRsPWDqdQVCCJqFmEAZM%2BJ%2F2FhZ74D8UO2xFKeIPUb5J38KP7be%2FqnsiDsKLfO3vQC1TIxf0lHXL%2F82C6WTf2CewNw%2BNAWqvE9FwdLGjwLDlBBdbIgDtk3r2QSGxezsagWrfJChG7tC7cwJ0TKuvrLVHc8ZgnE%2F194vZegF%2FZeUJL20zh752FEQMO7k8L4GOqUB0ODWWikn9EiEaZI7CP%2BTp5HYR5n21Vzfki2gS59zhDadLaGEtgKs4Zeyjch9IsrStB%2BesTWvM2W8eGMnL%2B21H4ZswefudVnzzWBeW5hq40m06U1s5KWltqZ1c%2BtEaNcrqPLiSWfd%2BNHP7vSF4zeA1CJ4Z61I%2BichbXDMuQjLyTmWxRS6qk8NKWckbtlIASd64hewKtwFyy8oEz4P9nQP9g%2F1BcP1&X-Amz-Signature=e6760d0f7d6d7215f2a705ddf4973bcd99cb97e4eb697a2e8d7dc78fce5fb34c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
