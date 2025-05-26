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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SY5BQ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGerPAShsx9ln%2Bw9Ht5rDxOjWhCAwl6FJtaRqfYE2RvUAiBNj3oK14b5E5S4s0mMDP%2FOwXujYWRjmX9SIlWLCc%2BXrCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMEqpEpFFTGYcUqxueKtwDj5r0iqDauC66DdTfv8c%2BaSbtTmkPKP1fgmXZcnsZIUEuk%2F7HjJSDwPB%2BbAHmTHUwOJNmsuVao%2BAFxi0v%2Bpmr%2BkEGsQAuIPKf00D28myumTC5FGfyxG69imnL9%2FjwrQPFKDB3CSgW0BIP4k055g3N8UL7LicAifQ4AspD%2Frr%2Fgvt5RNBLoRyVuG4XNDN0qGhEz4bUTSPNVGEH9u%2F6i05G2m8MuQE%2F7hNHMgxLivZ6U5SeLr%2Fys1eCHmI9qYf76OWtayf1WqkUaZ6bYaFhYDBJxa7LIhbrFH8myNnF3sgt3CGuHraPhLm%2BMsVRZaBZBHq%2BlyppHjcFYhMoj0xloMebx4PbySM3lxc7GFQyTi%2F1W5EQrnHRPYB%2FsVP0wENFsjYrzCushILTdgNBptrKrEhwg%2BNgd0e1fm5Tl4vvJWblMFL6fBHAQgcrVMbM2nLvu3BhLT%2FpZ3My0xUD2FcdoVECczTaJ0xhvNYoFg6BTwiUuzEHacltUBbn3zuTJaik%2FYlxMFc%2BOWeSzkuCx%2BBoS1AToNqFBZP6o7QhmkRJzSp1oZPmyGp2mGQflYjC8zxLofLAGE2HJC4FFGwktKW67UsX%2FEk6JjEoLrEuLL9xwxRcx1eNBozlSv8TfddUKDAwz57PwQY6pgEvyANE0d7%2F8SFw%2F58rEpCsBGb1YQ8F0p53cqxgV5sO7jgUXZMy%2B5gyyB%2Bp%2FGbCJyJYB3Cieiq8jV0UbBs6azPdPY65uB%2Bl8GgkYUbVQaB%2B7VeoJuH0YqLZ94cO7xW9MvBUxJ93zmO3RXHo5ukyVGr9l05AAdiQPXCZSyQeXxtzxtX627aG0SwlS%2FA7Enbo96idpULh0QoJnMmCgW4sE%2FnGsOYADvIZ&X-Amz-Signature=f483c8d7057cc584e18965c9c45f44f5a829bd9f414bddbdd6ad73745b2f1dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245BDDRL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC%2FCsq%2FSi4yU%2FrBep2EKkrB7x9%2Fp0pk7SIcQPEswyH7igIgMtk%2BnoHh9orDY4skdhuK%2FSRP1SD1RDLCpOwxz4oc%2FRAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHG1t1mSeZ1%2ByasIuircA4XqcpMkQ3U9Z0%2FS0vKYKrhb3mQoy8cggMGnMbwRNuQ0U2TB1Wj6ZuUN8jfxDgAawb1aDv0a03jHKOEs%2FlmPfcqWGNw0Lc3cSq3rlYyQfQzyc9y4bkR1uehlRrJ5%2Fj8u5XKNVDJ%2BU%2BH%2B3pM%2BBxWljorkZauz%2BuigbotUkkkZnyNCXKcKE15HNUP2DsaY2X66aYLqlYCcA5%2B044bJirRWBBNgaoBgEASlbbW0a2GZhjLkiGOOjl2%2Fs8NBMwnfKFpo1vTdcnipw0U0gzPhM6HQLFwtHfxrjzD%2BOPS8JCk6InAKmo4tnP1lJoxOc850SPtxG3CaHk8f30rPhYHHbMjfP2r4WBmhCxvJ7EX4CxD9%2B1c4cgZaBGXDX063PVEhBRBHUGsn3rR%2FIx1otekfj%2BjL3xlcog6QvwVqzJ0EKdvRnnbkA3MP%2BA1ZYimV%2BOQzO%2Bt1jZV4kBpXoi8M3H9TNStHTQ3XIj88SmhJKyBGtZlAi3Xrrm4Wi9jXQM0AzclfAnnUYUl0OhD94bmaKv8koWD7Mn8WRIGXeePaqDfusoOIqstSrsg%2BRuCHd0n4KpumMiVFaxQhrlo%2BCPuxd8qk5Jwza%2Fgz7kbxneXchh1rmQvtFIab%2BmH%2BMUxJ7hu2yl94MOSdz8EGOqUBwuR762WWYsqkNGP4ZM8BP5XE9CX%2Bl8%2FsdMNXUalA%2FJunxjii7miy46GqNwh4QKnoIzd6dY6Kzpu8n0F6pONBIlJvdQ13m0ItmR3IT5Cm1perJZSPdwaB2ZAllMRNUH01eQJB%2BMY1V9Ig%2Bf2h8btbi4sZz%2BYTuoIvDnNqtkiwR4hVVP7DceC2tNe4a1TqWZNajcSMULO%2FJxrAdNd5v8h0ADWCYX66&X-Amz-Signature=10014f77d8796ef4c117301ab86fbd1d2abb0844000bf8396fd0bf1e9f806fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
