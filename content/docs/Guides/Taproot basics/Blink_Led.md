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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3NRIPZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqs5k7U16lu21sKNjmLt4A9OzV6sOubpwHZbezFR133AiBy4d3uJyFFGHCWHaujSnQXY7LLKzAFTrdcLx9lzpiguir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMIpfR6ZSi3zqWY9YoKtwDysVcI1O41d%2F4HuAxxIQQyf0yBKDzPmMGmblb9ipBvDOK9vptnbjEqV5yUks%2F6LjZkfJnCPhwrrF6qf%2B8hc5zDdeDK08rQq%2FAjZR%2BbsOQWBbzvrNWBKVwaB9M%2FgpE%2Flb3fsoK7knQjl0B9eCTc4cwji%2Bgw8kaHR%2FMaO%2FAZStuC%2F8gJg6NOVHYueuuYemZScEoVeXQxA1SHMuU%2BVAbCRjpdMQA3HZ52XrpPn7ZrOY%2FD3n2yLIgncEq080G22qM4Pb5ToT1lE%2BQ6E5RXKyRSLyOcV6OeNmhRa%2FdWFY%2FO9v5D%2F07ug4sIfzn28I%2BUAWeI92XnYvTWRHfXw2yD4dR5ArhoMpvU5WGIefaLIO9A7Tahl01BbiXq6c9EkWFrlwbTrUcToRhyWcarhF5luHcnuzuR8lFBpHyTiJLaMx3F3Li9snqp0tThsBkoyzYV8ilSpUeX3Z%2BvSeNm1TBwDiByCiHsikPetNoBpPXWT0F%2FDXDuFEcFcS7JR5w0epYqy5R5DZfVMrXncxgi5k2T%2Bf2w7vLh1hEGrmImpC5Z3OesTjwPDJIP1AJ0hehglRrusP9RaVEX2tNAW%2FESbPCNrD6lmoIDF5%2FWgX7JqzwozwfHMmnMAomVhMOWfJgUWGFhPsw3NXzvQY6pgFlISthiqp71VwwE1j%2FLUUsjfqz52taRu6fUaOoGDmwA%2F5tloY417IeKJ4G9lyTswDSp4PC%2BK%2BgBkhpHsUt2UuC%2FYjCBtbrRKw5F5FMFLWaH4dfNNSzJU48FqhqaMFs7L%2Fq1pQQ2eFfUSADtsTMWv2UlS7AC1cAq4S9p0pUMrReXN5nSGApVE%2FsPygFY55nLpAMGoFrZiqwoy%2BulZnyJhdHJOytanIv&X-Amz-Signature=d3169bc1d9b6099931d51089216a473a0ca98c0fbffa4bdca6eecda03230bb68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKUE4SDX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC25HFTJHWjay8ZyX8Ae1EMbEdFxkpgg60lDNTFJPb%2FNAiEA8Ttvl3PeKRBxGg%2Bioq0%2FioC4a%2BB4JHKUKlxEw%2B%2Byse4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKHJopLUr3vDISv6FSrcAy0c17RlxQ%2FtyQ2oQp3cTkb6GcWFUT6UjkRNWXdTIi9yoz8LoRECKezHngBfBe2bz4q%2Fgz1t%2BiulS0XbtgQrT1ieoEAv6kPepEdWFmr%2FDzjb0QI09p6iLChubgfZd0sqSY8UF1aQhcLVo8nUsi6f7kv2k77808T9J82CtEchE7UQ5uGJZ%2BVaeELNwuCEpknGFXGd2kpIbHUZD1l%2FpuPQFMliSBO0WSoa6uG68PCfncPMPJrZBquoj2zre9UyokuNygwQRsekpyjSgrLW3QpfB6GhRxAntusNa4BYZmqFyX%2BcYvO6B99tVxcA8p5ryts7hWhgk7Tc%2BTLdDitgn%2FtvyZ2cS%2BsaNcIx0fwP83aooD1n%2FmsdTsz0Ye86IxMN7%2Be3rzONCeTy4WxrqMNuUrKZQS%2F0TOkqijk1lt2RZQiiNYNXgkW1oZWzdW%2F7jI9SONe%2BxgUgj9goMjmgYhcn1VzOBbM6sbn%2FIhevtsbv7xJkqfk2B18jIrBCjRkCZLzU7%2F1w8si%2BJLKhYqVHvXVk0fv2t%2BRjZOTNOchN%2Fy%2FCc3WlMK2AoG%2B%2BJv%2FJCF2%2BwJvZkgFVXXzHSr8DizypIbjenuQ0CPZvcZNn02NH2eQ91ZHrPIp3r6z3y%2BXsrsoQD7gdMPzV870GOqUB0fZ0jzKnzvBbDUFfIUlb0yLE9I4gHc1NsxHYrVGl33UBoz6akdsESqDMfqpjtZlhAbctW70vTpcRbq%2FuesNwGM0RVHb6AqvlTkcF2LjPTTeyyU%2BmpSfTvQRVRDpfZYfDduj0Lj%2BEMavCvzMCjz5K5b8RMKu8HcNotk0ZVaicWqDh5PLe65YY5qslP80ZK6DVI79yUln57z0T29ouLhjqkHfHATuk&X-Amz-Signature=98153d7025197fda385fd07f27b5884b44ec95345638a037a030119cab8287ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
