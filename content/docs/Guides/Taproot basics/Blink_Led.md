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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UQKIZRB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCuOHElPqxrT0Rzm%2Fto%2B7%2Ftn7mQIx1cDyjhdlQy1l95IAIgc%2FoQ50HXU8uc84h52LZXN4LAK2p8wOTXisKMm5HHLpMqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfcwTOaICKvWFmSNSrcA6VnBnFD2yT6AdPOq8CNH6rYxnoQ8cn%2BZ04Ujs3pBY91kmcM5PdLdTKqUaVRqLdZcqMqlnv98G533Su9n4Ct%2BMFi2UBo90pxFgAUxV6YqxVwEsQ239UO7SeuqpIMoROU6H1akOkU9S8Y42%2B8VLxlwMgAd0%2FKhLlpFndMtrR72CD4GnMPQnHZLIZdDbZWbcLON0Z1ef624gN5dwZM5s%2BAraVe9XMm4JTPbxf8cqQnrKMCGMAD4a%2BpHHzZGs8J9Du1Y5TBNJeXPHgaAZqzSIS4CwjRKNfRnyWoyarhaVg%2Bb6%2BKazNcOn%2BeVHjM%2FMT6B3mJ1om22HX5357sHYtVvf2W6q89aJ63FjK%2Benhm0orcgAHzazO0TK%2FOGe0nuETQTEqNl5Lex%2B5%2BeIMCPJhXISpTeKft2Mv9S4GHGYPuGw36HiKV6O8yhMBnUsRTJ44TFOAF9A5gshMttizjFe3%2BXaJ%2Bu8MDRHn2oTF8ah62tMijcRd1uU00bMbHCt8Kxa4jx5ETHVQj2nfq7GnoNQv7OOEtqC9Kw5VS%2BsDgMCk3XuQ2Uld2iDGyHQh1QAigm6ed2r67Ws%2Bcwpp7%2FP%2BCJudOWtPUpxyq11c3lpjZGRjPUHyYnkn7hCkLhvEXRUd8OFIcMNLAxr4GOqUBIqb7dCBrQoHGNGcV59vSSIxrcO2rfHXZB210rDpH8fAKyd3rl5Jret%2BLy%2FIEx9bU2m9lmgMmYescdE7I%2BD9NoRFtttndGrdnJcxNTDYkIVmfBYpgPQ7COw3959BqoifcszF8PNVB%2BAvA8MU9XDz3XadR4foOdqI0DsAbQhpg1Iu55Bjtr0mCxfM%2FknXoq9ctO7s3FP%2B8rSSH%2FGu0gwmbsyLLQUeX&X-Amz-Signature=c3e98c8df64b12250a89db79d3ea5263051f95025a042f2a6361cdab3e343217&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6WCRYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr2eaaQY87TNzLI%2F2T4yYYUG5eeDVjEMoifylZB1KmwIgEKgS0nT5izRcZCUGmekIQD6Wr7rtbrkRkwzSJsI3SncqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAC%2FzVa4Z3zKBvacCrcA7QRm25SxkbisyK%2BMDh7xg8lIUkC7KeoFoAdCSMivTys08YKjFMmqPn6VMnzH9qMSPz2E0QakzpPV5Fu%2B2ikX8NHWbGAVUqFPTXyqBr7ye2kNnPXlBWHji%2B3wtBT9puXM25Kt7Arccr%2Fymy1qOPB7rsv8S%2Bx0ve8AZEySUQGZKsbBpZP9XPwtAXVbDvffQRDptL3iT6cQqkLX1TnGo3LCVvxYRpQniPEC50Kqc3Jp7YNuO4lHtmq3PCFnax47US2moLScZ43RYlcKL4hph1kjrhdVUeZ0aMkdmbPpUv98mi1BfOaMNzPClc3xDak4UTIorQG45hU0AmehddEvDYixBDg3AQd1okMZslVPY%2BPoLW8vJA3Zq%2F%2BZ2i8ILPA0ElwASjlF%2FuBpX1CJeQwhM8R1YK%2FQur0wTZfOotG0ijaDK5%2B%2B7C3FHSrSxQVn8Zg4rpb%2B%2F2pEZjY6cgdUyeoq8ry1hD7o5Sr3mk%2FMeVKwbK6x23FHfg9sD1tioqaLRwI3vaO7Ugu4waGG9om3a%2BE33reoFSvIa22R04tIMfd7Pi%2FmDUv4STsy%2Ff9S6HdkXX9eEBZkg1Dfgc7Avyjk9lGt%2B5MIyCmDTj8s13sDWgOTnCVuxaKmlK0CiBa1oXw8H8HMI2%2Fxr4GOqUBAzN7bC6zr7Q5n%2BKcB8B3S53o2ZYuq91kriezC4q7BxQLkmSzG%2FkoaoU6zSjZawJgDJF3DFp89kYpqy8xTRPvBKET5PKEeV%2BMm3nrXXuzFhbASwxKcm6RHhYYdHzKtDUbn%2F1SlyoCzUTWfP1ThejQ1TPSII8TOR7Lp5p0MGqi90D97w7mu19545HA73cStl0nB6x%2BUFxu5JtvvmlWGUD0Lw4jfohB&X-Amz-Signature=648b30f5b38e12335aa1f7d2d5d302836c8ed39dd6b5b27925e89fb8b322bc58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
