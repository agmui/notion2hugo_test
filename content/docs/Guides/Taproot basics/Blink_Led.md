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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QFJAG2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BdjGuDPKWSV5DDmz3Ul6VS%2BCVRnCEnWV5MQs4oJQwqAiEAslQ%2Fk1yEgwav60WnccAg0aS7tMtlB16hno1z7du1jbMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNaJZQfvnAXzMaT%2BircAzl92aSVoTaOjEQ5pvqmO2VWj43euXApUkQ0olv%2F%2FgwKmjnZiS4sUtEx3LjmDpyJ%2B0RxvzYI7ux0o24GMYJEFXgMdUmd9G4St0E%2F4MMTX5VNNGuR7cCSWfW6T21VTfGdYah%2F%2F24q6WtyFoua8e8K%2Fy02i4s%2BWGZKWv6cJa1BWfaBIk1CbUmf2Af3TW0q%2FXt%2FN2sawraCFq%2FwVlZO33yD6WwQcl63X3UQeGPTw4%2FkmcfZsY3ucjt5zY2eDiuqmV%2FAo7mnSAdZPSZpg717tTiJ%2FnwEZHtdwQoaM9neQNlEtcJmsRCgcAw5PRGMFZQtdmqweaF5egV7CP%2F%2FoXr%2FvObPCMJQfxWHcOJnv3ZwmSqqpu7bIMnidZG97o4qs%2Bkd0xdrYfNJZFMEyhydtU%2FqW6ZRwPfSwpQLS6hyuptNq9mVDRcWLfTjZ7cFfQJTh3mzVmKsSjyP7Szi4M1%2B2SbrtMvuOJCqkGVtRVXx7JVjxnVHAiEhh4PFEiANI65jNI7Pfds5kQuE%2FthzEAVdFv9jiz1rhLh%2FBGr8k5jsj8wByzmaNZxVV0vMgaZyfv5h7xYPPrb0p3Gm4GUo3Jl6UEvuyI41Fmmt%2B3ov6JYlBTGqD4xxFE5pnN493NX5I0GW6QgjMLPJk74GOqUBouYhAtmhSOsrz1WBMMhTB5YMmMlTEU5mcKhPDvLmRoEpzoKWL%2F6671cFWZhzfmusBQ2Oxg9SCbri%2By5GiUa7fs14S%2F9cRar9B79739omaqI0QdF9FpVApzb9DtV419aE7FVz8GHAzQei%2B0gYExv%2BDhS%2F7kBRq2uG9%2BGCfTHZrkhusPG7TPv4V25Cy%2BE5vIfcJuMEpymFLF1ANlf%2FZrSBgZVE6mcu&X-Amz-Signature=f249a7448265fe7c8fd0c0f2d94611b34a1d9cdea04c9063d0dcf6c6c6f9e14e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBH6UQL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0QfTwAa9Ou3pu%2F5%2BvX14vzdM02lEBig6AzHRTo0F9YAiEAwwi5hyG40qQHR8HuekTcHGAlYyX6VsTBfaJN4C1W6xEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGWawZfrBbmKKQ4qCrcA%2BgTvITOSD5WvLrB8hmVYJWh4b%2B42WnCgzC2jFtBKkMUMhcJL1mbV%2FD%2FFHKNewIt4k2sICxxbzknBxrAjvT5I4VljcvfEKaw6Ls8fFqzhkfUksIICQAU8n7xPa37eqt5PESQSdU8ZKfBjAgvja%2BTPaoiOkzOIxGMNwafCM2hjLir2294g0j23wU1D4DGS12kODYnmYockEfJBVpqLLfvWGeusAnnpz%2Fw5N0gTN1SIO%2BM5ES%2BdqW1j6l1FIuGAq06zBDckjQALnBVVvsb%2F879Giql0zpyY6e3uv%2BUzsOwp27NdpaV5GQdTZcRGyGyzatl3O5TrGwfCnBuJXKfLmIGzdvB%2F7Sgdu3DcxTvfu9it2tY%2Bwqiqq5MsJu%2FTPMOKTk3EMiOJXv8nu88HpZXRjZOf4f22pgjLKS8L0SovfayU5AjZcKeYLZ9jqvLD3%2BTfBL5wenh%2BjMQVkBPSHS5ALo%2Fa%2FVq8mnGr%2Fh1bRJc1FNpmt9asHyDxY27AzLGXjiSAHvmPk2b2nahUhzQN1w1xbrKEE5U12PzwYItGIus2S%2F8l2gOH57nh4%2F9VAhBbnEctIXYiUHDMt3sLk0mWTlF6IzZZURz5wOuD92UGj3mANcRQJzqLf0hmHLl85Rfv66xMLXJk74GOqUBGiGTEVcUp9LAEOR72lQBzFuGEujz4PXDQ21CYewjNCA8w%2BYHoSjRxJa2lMLkr2kAioLS6VlnAyiRbPrus8qr1VGDqcCMyA2%2FOOPdfRYXC%2FK5FnRuCya1eJvTctZvTEoRsoik1xYNA4G2tdaz1XYM2rCqby8CsPSHucIEK7snh%2FBC1B0XXIizzrWttgRmvm9%2Bn1dbcFxGiyVzAGwOzVNr5MUsyqqr&X-Amz-Signature=5131100f7f9a407e1304f8da059cb4262f63c88479c7624d5e4296fba82a707f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
