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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOUFUVFN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmjgXjYty05815E47DQuGJAbK6evn8aif%2BRx4p4ifEjgIgKFbMi1IJPaVdPFIvL0HJjWi6jO0U3DtG0fjmBmkPZDAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBHfT%2BxcvojDlhDKPCrcA9sMsTbHYXZacbf7MM6JcMIrz3couQORCP2SbFW%2F10cqAknPMfPISlgBq4dJ%2BK6cwwoOjiZXzs0XnJzYfBIMzqTnNWzwtaUu71drGIx2iEwUoQqaLWcrxy%2F4b9RLEiTK2VVDnn0fpg9MscGAZ5FPIZkbUVqofg0kXAV3FaZMOFnL6nUHBIxhUJqotpX2S%2F6Syl7oa395RPmgwYsdRZ%2FzHwIemjC2Ffdqn83hkH1T97pFgtUx9%2Fej1K8nIPQaZYe8U81BdItN0ht2yKTO3m08kDiOlc7Ut98geAiMYj7UH%2FYzjzOE%2F53vygWQGCR20XdCOhGfc88bR3vgRrP%2BfRP6A9IxDySGJZyyEBT2BUW5uASM3cQXx%2FJS412m7CMwhSGYHbfYA%2F6%2B1Ema8zwmphdHrzTdDrafNtbD7bPJhDuiKHUK7ehODeWnar6Dis9LPhdxTrdDjl%2B1%2FUC0G26rbfK%2FDHI4qjlfgogdwI0PIVtIod2NTT7iWNo8bxGHSDLknuxo8G4iZsO%2BhP20eprw9%2Bv4brPBWHdzYsNwxno%2FHkLRV9gV9zV84GausbEQEOkvsM3hTx%2FfDiaqxOqV9LS0SG0SRiG98UGbtcq8c4Ivmp1wd1DwrVFgYU2GU%2F4Iss%2B7MKqvkMIGOqUBabnodM%2FVObkGoQuYmKtMHAnOoaONoPVGhEGIHQ7HDwn2GSAF9TZLrX8%2BLc95ctbGybpsVlgEeLM7B2mJNVlNlm8cpsyzotB0Hi2YLFkvPW%2B340FwQ0NlOaFGvdQ2cR1JIijGHgLoIr7OXvUWYs05KNQkiap4Wn%2BRKvhnfC120da66fr9xCwX7gvug8%2FQJDUtgsqLP5iLT4KeWL19f0ZGkXPaRb24&X-Amz-Signature=e7977f1a1a1ed1634eae19b92d35c9bee767397d7af7b06b05a5467a91d8006a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GT6TGX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcAzEojaTB80F7%2F%2B7VxDtR8kDuKx8IIwRnMyZe7NWBXAiBp0f9UQqTG1VWgDFerzjL%2FvayUxbvrLNBS59%2FYcPC25ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMbkuyByClhZ6F0RS4KtwD3jfW1UwSx44617N5eYuKxaqicF0zBuDGE%2BOJBFrbovv1qMy5Co5XD386M2au4Y57p2LZijJUYtgNCICl6D9TnbDTV0NVMjhfT50UIcpclUXVA26VC7d4TwnK5TmvmhdMm5vMnh6A2J8rXHDUaHUk1kKBkd29xRLjeDrH7leTfqmt3GNd7v5k7ew0ddscF5wY0CaLxaC1nr%2Fs0X6Ui%2B9iYbv5znT%2FaXEwraI1aZ0hrXYdWDBROHprvF30Jwo0fshCJFaHY48quszeRr5vVtkMkrswNK8%2ByoWr0Eq00yik6gAXZ44oYOxHCn0nAVWjoDC1dyJxl%2Bz3S%2FiBNu1yU0bTGUjZJshi1MRaHam7Tc62m7hfZUtW7YHxyzrGOC2OHN4BxSOol7sXABrg4cdXVSpaql0x4D9CtQrvzMr5aStLBDPx3zuglMoZFU1%2FVs18%2Fy%2BCoSfDRPdD5CROP5FJ%2F5fNy%2F48R3HHxTigl6dyLf1bf3xNrX4DGPeUBtp46mZkFYalFb3Fyp8QeUJB%2FYBJvI%2Fi3kfAgz7Caks5WegHDT3Y97GZPqE%2BEBJn5iULqlTBgXiHHIwsOr9thfAYXm7Ez8k6X9JGnjzbLpLfl3XtzTIsPRRpDE9%2FE3ClzEIvfOww2%2FqPwgY6pgGKdVGimBr7PQDX4rR7nGbk2yBp3U5FPZ8XvKy3ZSTBHa5oOwUcVERcwQIgqcoRrJO4m3Lzo2V0J4EQoQLCEuBxX39qYNLbox%2Blx26AWURVhLNFbSs9PHv5MQZLyn%2FklmaJXez1bB%2FHIfgGGmYfRJsNNNRGwMh5owPzyuY6Fo2LyLNvbCekkCrdEhc0PVKWUKTlwFTX1vtX%2F8c3nLddZwHDiHMmQHou&X-Amz-Signature=1e01ed8a8e56457725e333b1d0bbc327be2330fa420bed71a20b0927bcf86b10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
