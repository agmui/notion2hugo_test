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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6AUXLI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIB0R6KsuxOvxb79UZXGcZZhAVDD34Ftru3MullmlssLoAiEArIppjX%2BHzFThUzx9qXQ4O%2FFpsCGdM581pnbvtxzbMpwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDxtJwF7aNiwBKRN8CrcAz9qnDR%2F70WDKtpMq1QVHSjasepKESGwpQo6S7u677pf029KKkU6X8RqNI2nYpmKVkthT7eYxVdragYrdSkpxAQy0gJxsF%2BjDA3XtGcGKp%2FXh6DbQc2AIdXDD%2FLEw4JvldNUqRYrGNO72h%2FzVDKXUi3Ho3rUpgxUSe6LNniDcudT6zQK4MLPsVEyObCs9kG5ZNtKeu%2F%2BBRNyYPqrszTy5Qq6MFXrdDwcnG2rgd5dyy8pldgMqFPm3GW37k5sBHK3iTQ7rCses2Dpa43LBvZGoT24qzKg8xfXIyztHjYlUYsa%2Fc3E8Ai8LMdpS2ov1Dh6WD4D7OUjpls%2Fcoku%2FgkTFfybqZYfkU%2F%2FQnDzTe3Zx6OeOFdDirbcPl3WpknUmnYYMNNQ13DcHlq6kPz1Q0nKgd045jCoFCUbQcNVD7nUMscT5dq1hsQpcLakNaHRCAqyAZ1GBkQbDRFa56gKjqVRVF9fxXZRowno%2BjoOs4C1Saz%2BIQ6H61r90iNt7Mp9bJXlUfpKPf0AL%2FLV5fd0%2BtkvrTf0H0M0NaNUXaRYJbvXESgYz9KnVgSe06Wn3gQSW47mIagVy2Ff1W1Uu7zln%2F7UnWtjNRHQPAeq%2BGnNGGmBKtoBCRe1c820eECY%2BiDgML7Mh70GOqUBG2GZWyb9X6oeBL4StFaEokSQW8sPXzvYM4m6cIDNY3m0aL1%2Bq5iR65W1LkFTozWYwVC2gC1OVWiDr18a2V6DGGJLAft5nqkLSF1QIsMqlGKKmRRcYllwCU4CVwiKsUK9ih9luRcUTCDMOiwbFhkyp3HKlW3e7sI02HDKSosLmL3MhPdYkYk2wi1pqg%2BaJnLviNIvgVgXV3m2iv2aLsJf46qQ31uv&X-Amz-Signature=0d5684a00427afc2a7dfa2b12abd743aacff250e250b33d9bfe26db9d0fef270&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNC2Y5S%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC4y8sIhutBpToXJIwB1nwvbpLhJskpQNu2aZcEgHlywQIhALdpBHaZFE8bOfF9DWxgftkF5W7c6wNw781wWzYLg8vIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxZOl6Ky2DSIQPbmYYq3AM2L2zFC22%2B%2Bi4pYgV7pKbu1kJu%2FXqQjod7SDC%2B4i01kSxcj4%2BIN%2FsbJM0%2FDuv8yLJHwUU9HRFndsqbiv2r5u%2BOi2AEncZSST8uJmzeUU0xFGE%2F8CKPTiLCYqEW1rnx4ev5oklSxKcfkni%2BEizFdvBfMonEV9GtdramkTGHpmUalXJ3ks%2BSzx1auefCinNp%2F5NWhY1SF1sZCjlZQssRHYR5EuJi%2FlFTzn%2BNVViwakXI0cyVoMdAR0ExdSAv6bQtTbPzQrslsojcszABLcI0FiivuyvkiXjKPUj8os8Yz0ajGfuGsFaahgdWJUax0sGVSB4F8arLqv5E7t07zxt6G2ckGVox6iKYjGyQ7S%2Fs8yPUVhJGW2eBD5pc3S6vDjfktlRue4AZ%2Biv%2FyGd1SzwnF7sSa8gmGNxYhfX%2FaihjRY0xzol3n4Vgl6rIiJQ7qabN7BrKpfQz9tPD0qiOEqjWfCTwLdgpCJ7jDeYT5TEktnKdU%2BUQXBu5j8LIXDEB53%2BvtWNNiVudDzFL6dOT00JJXdQx9rHPSUTa7GSHJpuE7RDJt0k3ur5KicZBZY91oYCIJ1ZBA3f13HXxt3NsUAvKPFK1TEWtIB4djpaZXvAkwiZJTyVkPRpI7kFdlDSeWzCizIe9BjqkAchPkeaBjBXcbCAmGF9TEISJBtxdwe8k5d%2FmRDDC0s0K%2FWfy6lMITsPnZTArM4g8EvhcNsx4YGajAJ8l9bHm986jJ%2FP5imyGZn7an%2Fx5mN7Uk8rsBxG42Qru9e7DrnEtrg4iV9C2iKf4k4mPiao52%2BYaGAQkEDl%2FNYcZO2T2q8h0ItKp549qTgs6Vg0%2BtJ55QQnC5NT1LttzPnn5y9qVGIgHsw34&X-Amz-Signature=4a046da216dcd2fdddb34a3e8f29e9bf93b6b42b50d7566bbf98fc751b0c8b87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
