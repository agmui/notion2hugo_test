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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEQWG3Z%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCID2URIgsHqLi3PsQrVz0LlSL1%2FRHT3Vt8fCjuvw%2B%2BqtJAiEA0vigtqfkRI%2BYdgSM0jB71wQrfPn%2FHiVs6uWyl8gdo6kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFw6DyOOfz3kO90KvSrcA%2B0YlICpFbrkIG9lZpmIjRz2h09fbptjti%2FIqXO5isgya6JaULLDFBj9qW141OIjR1WEMgNtWenR5Ub93Dy3RQKsIOgKQANlh0Jbw6VS2C1tmTfZjUg%2BGaZkBsRKJj0i%2BgzHXIng0HCRrIJY5XiBxS7jlqlO4hfdMonmsh9iuceVnzDNhGpSFCj197iY7Vc%2Fc28kO4Mm4yI9SeqdsY3Rdq6pJpXMIBNpXIQnpe3FrMD%2BWl1SiGNzGnuhhIbcpcJd%2FH9ZLkvKeL5KrhtCULtgHKaURJ9tt3v3T1x40xzODbvltkMzBGCFHG6cLhCMaepiRW26VHtPxIGYgpnFe%2FA8R239PR4h5SI1ShRfcDw5VuBMQZVcvm5o8t%2FE%2BdPUPdAdMdBl84t6ofdLyMxh8ld1L6zuTGvZGoRNJZFCcbD%2BspAWL0qlxOBKYzenGuv8ObLOUj0phxmmxiDJj5nuooh4vIEtX0oIsKRFENDSlxjY4E2g2cEuQ7iagsNV%2BmtdVhLngO%2F6ul8Io2prXI3Ms4ORs0ZygRxg%2FtDm2jwk8D8ctj%2FWXB5veNNGuz8%2BZSZaTbuwSYvgh%2BuIIniR0f%2BlZLGSwRv0B6I51KUYQ5DOZHja%2BgYFST6tWCFLmtxhGYUrMM39xb0GOqUBLOMlZfSCSjjtfo1tdfCCuiF%2B5%2FFaeGmFIblqprcdaNBPJzlCAs3vN15KoH6m9EWbtfYwSslX1TI6%2BG6%2BSwfI7Qdnjo3vfOD2ffCeYkzxSfPdLTVgUuhZ4GHFed8%2F%2FxlNYbhTFesUyzDfzQW8f%2BG4ek6lSnt%2Fh4Ocn%2FR20T8%2BW4lqYyOKAevilEp%2F55gJ1Ru%2FdmcrrMxRSA6SuV70H0yXxOVF9fKb&X-Amz-Signature=9c3141ca6eb3e2cfb76c321c29aef47e662282f1be06eb35da3062419007f697&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VB4XEMM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGJ6W3b6YZBlHLa63nWShTOH%2FEkzA6VZ1K13Q%2BpT2dDrAiEA919TBZQmAH2kfKgdd%2BmlJYTUuA2p0%2By016CoU1S%2BBgIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP6oKTcwLK1WkKGxCCrcAwA2yoPW%2F1%2BS8ovYNULtZeGLIZfwlSEXzBe6D8ByUoA7X2DGN%2Fs%2BneWwgNux1JfqnZTNJ7sBPJfa3FDtMeEL8dhE0F%2FeEp%2FJx5ezxSdEZBVdubkqftM%2FymL1Zw42n5QBh5DqhzcR6lljy5Hzw2%2BXfkF9oGm9T7uQ5A1%2BcJhYcbJADNqETcdfrkn3QUWi6kJtIRBnbEzBcjKI7BwRK3FoYMLCWfN0WnCUFfslotU3A2urw6Ejb%2F5bqj3X41d4MTy1RpbCIBJM0Hf%2FVvFgNBsOFleA1LjV5pwbMATR0r2fxSFpTKZef6J%2Ba3jC%2FbhzCsUUQFeKlm4831lZqBoicqDrKLmK1XEBaDM2PDQ8BhDqLV42YOiicHgoJbQOiNEoTFIVKdn1780oOs%2Bwb9cjI8cD3o%2BBIyAWCzZn84LD%2BcPai7iIPkz64hjedicu9avIuFg12AvB73fMvwnZrTilvkrBXrtOxa8N6RMuDn8a4PAxizcnoDDt6Oa5PVDCffksKp%2BnugKZbwNbgx0%2B3jmYZQN%2FiDwQPHVrXnGyhda52EHcTc4SXlAVlApYOYcjo4RP2TBxHO1TSqxn8RqrbcUTT%2FC4ytMxiAclTbW7HDrtIWECY6rGJ%2BFyrKDl%2BrEKk0mqMOn9xb0GOqUBU7dkU32e6Si0yBoVwC%2B%2B9puhm0C%2FGIOHHSy4jeoAWG%2FoqNKiGftEDgXIhTIjf8R7wyalO4PvHQkPlVx4uE0FPHyjK31Rtewckf1b%2FOa7VdZmbBiiFz%2B4FLvIpIoUDmzdmDqUgJJlGW%2FjSylKb7t16vAPI26ZudBiTccw1Jzb4XSJqHnvfNeB4NP0pGmZgF1blqX2Kb%2FjWvaAESRXitzoBlVdHT1Y&X-Amz-Signature=34addf3133cd8895c5e6d21b60740bf14a6bbffe7d2a3f7362e67bdb9d109eea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
