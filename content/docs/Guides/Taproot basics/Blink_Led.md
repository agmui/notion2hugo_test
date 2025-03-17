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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWNLP3D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgsNqaUpF6%2FwDNB31IfF%2B29f1iVTjXwWJza61VtmguBgIhANNwpgwg52nhJY4z7xQMq%2F9zkW06HLUjd5q942hkOjM0Kv8DCE0QABoMNjM3NDIzMTgzODA1IgyrMlLc9aPNF6Avjboq3AP%2Be5GRJ5lTVIll7mwAAibfInIq8zadyhWsJBssA0Ja0LZOzM64EvWLE%2FgctgIjbTWw8qF0wusq%2FxwpGHPSYgRXy6b%2BlPBp%2FS7%2BGBiT2LXBjX%2BlxAZn1c6rmjC6S%2FJzCsf%2F3Ok2t4%2BMyBzrL7BGEfF7R5zYX8VGRRrLG23lh9tRBA6wBeZUUfhv9qwRKNhTI5U6laoqgDxh6HBzlDJyuGTJm%2Bs9wK4omLkXtZEg%2BIrodYJfNdy5ji0qh2MhGkvoqEE5VMI5wE4xteUd%2B7jSqm35FmrlzMbq6r%2Fu56Z59OgKtA%2FNa283PHqimcGVZRGiMD9HuItSUvTR1MTpiWdgYdwQpK%2FnS6MlUh7Voz%2FRggy6oC7QJwpCBHfynESiuMaJD%2BpV1%2FQU6Te%2BKOVidF3ayD7nsDi8oM3ZXbeDYeJKIoyiEXTp%2BagNgMKzpUGY2BZ%2FuQ1DK4ftoDTm5rFOaGI%2BEmIvaBBfRsUK4OaE41J0enKPhfQMiP%2FRwIab3YPXu1YFQAvYAAKX18bdu7FFmgh9pMjZlQMisa5DDuIBrLSwdV48rBQjmmg4l6O0l05Shb3vjUfEfiOaWlEwlssiescNCg%2F343wMuT21mGZY82oQfI7nAuaiZ3H1a2SWcf9ETDDJguK%2BBjqkAYNLeaKDZy93UelGOzA8%2BWMEhpPlPSPYPpgIdJK1lKsG4d%2Fc3Y9ovR7gJLglXxSVCHKpOMfHEW6Sii99FL%2B14NpnFqx6%2F3uEeVeQ0NZnOlyuoUwX3fTPkEpAzBwF0uUGQP0mRf8u64z0E32RhUxrr%2BoVY33ILYQzpbJMcxOpyUJuwwKfrvm5fAfOItfIo5mU5pXPitR0EGXbhZ488ee10ue9c131&X-Amz-Signature=f66f86c95669274659eb5eb26c37c4f0adc532964c1cf776982faa6a5b7c217a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODVGG3K%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdhBhnxUfjQLVB4Dl0pKD39xrNfR%2F%2FUduEu3rRAgZOQAiBNmcXC0zeBOcpdpN%2FvljQynzFS56g6SZWRoZftjqVM5Sr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHVdoEXsJ8SVfSd1aKtwDJwncJIfzlvnQBVOQLbQHrNPfkfEsVPmNlgyQ5JIYP4KvcLptjFoht73NyGKNQHXexqiu3UkT8BwVvrU3IGgyIr6U%2BoGJomtrywJDq%2FshM%2FL7Q1XQPHIi6CrdlN8cTAHonuCsSNcsajyYjgAtmtkT6mudmTlmaKeP%2FZWx%2Bb37PdQUF5kD4ndhFPnt%2BYm6%2Fs4uvC1npX8B0uu%2F%2BkGCb8O6PXNaou4liBG0JV3KdMzOyg0jy%2FF7WcsInJMEJeKsgRet2maQReEoFXAx6WGk8RNiC7OGw%2BNYAcC1nFkMc1rmyjkurmnRai81fT8XMiBM1QRBMugWeCPAngA%2B4q8mzzRkdJllTp0%2FKvc%2FVfp97q2pj10a1PiaLSciCTwg76NcD2OV3M3T5Xd3%2Fu%2FNptmzazZpJGeK%2FHiOv9hpnVpHN4el2tb5ZKSnGTIjJwwQY308KHRs9FFkvlUCpjZhdnvBkXdR%2BFTtRlAp9z2rOl5o%2F8iBQ8PKyO20MUtg2K%2FFchitlNvvca%2B0u7tnqjha%2B5IuV7lTNoHLWdt3Wxy8M9K0f%2FOL%2B4Q%2FKyH7uTqN8u1qp2JiJ1XjLzRB2MXxarMjMJbF8fs3Wceg5IoPDjIw18L91scFUwDYwMyIDgU9ujuYiLsw74LivgY6pgGuCrrXqVxs1W6fS91rf2bMLEYWER9vjgago9xSiLVEcYQOj%2B3sFEPyp2cKu0fBpLQpfB0Lebl6Yi%2Fg50pvWT%2FamFLvjz%2FIdhnpMV52ISYRXJ0stp1Sixno7Vikx8fHMoAyiYaxs%2FkyD4ArkCtWPQz8hFyCHc8xhmF9efn%2FI3aykCHqTOTH2SXncnZVjedzcx9EW0pXTh3bV7CJbbD6Djnx07p84v68&X-Amz-Signature=5a95472c5d1d46eabca277a6761400496ea421343b2826ac0f3f22266cd3f5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
