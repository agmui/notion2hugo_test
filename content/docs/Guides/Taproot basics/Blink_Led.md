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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBGWR4F%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJE8jj1RwslgihgoDs97xSTYwpSCn9axF%2FHqHmRbL88AiEA9Xc86pQ95%2F4L6eXz3jrgk6E6v4%2BbMtuCVnrqWAc5%2Bakq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAaH%2BZ9LwkuZibtPRircA1BWxNYWLi7H%2BQcYGpVuHeoTHnapBOMs4Poe31Eu2Klh7sVaMjdP%2FDVTxoFo7Y7ePYGYfguf%2BrQqrfv61TXaATVqZkflje9HWMHSeMvtYsm6TpPQY4pgbV9MJtxGKH%2BpuhVzW0HyF1pq651h0wRcZ7pHz%2FDz6YxrzXcTBMk7mlZ93XLLFAhibdbcLPRT7KvTmvTeFQ5Olo1H99u2YcM06kK13x9riWmA5QDtDnwuV7HWL5uVGQ7Zh9We3KBhC3TN0DfZP45E%2BzWjGONlz4WHt%2BNhzNzb4s7NvZFcTwOt6H56lLHD1f75ooyDSEuK%2FUf2PZ9mHzChX2E08vrp1N1RFdZjQweAEK9oRh8X1izbkuLOOmUsU3OuoJet%2FeLl2Vh7u90u1GQ6tCvDB3RX4a9IiW5Qx7DL%2Bkq2l7ruEqzo5TnjQxwKDD%2F7uqwWzQP6XmmfuuaxmFVpBFUnK3GwJqBdFXMGFVltqRyCPt7en6p%2FmndzqPyeGLSsk7d%2BOgvlA759IKcomB9rtVX28WiXO2S3FRsnR%2F9EmVtzvdFaQE5G60RBP4qLxMm3In5Rn027zvr7yD8%2BQJ6PnwqPedUU0b%2Bar0wNgENGh3rvk26AaCztZdvcXQlqWULGsJvmfLpdMOnl3cEGOqUBtmvkAOQ4jgmBf87CB21rhYl6SJeJZGl37JLj7F1rM4UTHe%2Bu6ETOi4naizAz6KNu1jIdeHPfBjTArZuz%2BCcemk7w7wb%2Faghr8OF%2BIgMnmwoykVYwNmcHOsPN9kzBkHjZfH8FINABNQ7CL1iVaD0NfCwCOnmsnZBNzGSjJ42MaWw%2FpQmmRit2grjTIgNX2ezfJleMI3IeXozVuqkgAHIIfXp2U0%2BF&X-Amz-Signature=674ffc824723cd1a9614764f7850b8bef8c2907d24b7d3795b1dfa4c1f5fcae4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXUQHQ4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNkXz0L6XZpNktDbGsfdTaqP19%2BhJecweuf%2FOsi3%2FGoQIgbr3uQRpeqWXtcG4r2KAbQ%2BRbQpR0Qd94VNt7UP1x8okq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGUtP7XN1eAsqQL%2FByrcA2CSc1RkpYE2uy2N4EX1x1DIX3vL%2FXCf6AGAwkLkVZIgtaHScKF16%2FE%2Fpuf6sJ7ywXoBIhF7Faw866UyyAlgs7peR8nF%2BiczTkkn9yNFSLm12U%2Bbrqb5CKUr2c66O7QMP2YQ%2B8RVB3FU5uUBHh7l%2Be7Rw1Cp5%2BLCdg%2Fbmdy8MTgoVpeBjmT7JnS4biYCRSg37%2FHkvvZm5Nr%2FoUnfMGoDrTkQUCamKY5%2F3KDpZ8MgYcOXGGn8qB6qef%2Bz737xA61CVqTbvZg9BaEsHDiNgjlRV1qacP%2FNjubjoZ8Bf2gU3Wwp9cTXqQ7z2%2FMtfV0DZeB01fED5CkHL1jEgMIUf41i6eSpLFzfVX27cmszJ2kS9XVq5cohGQMauMSHP180KeZGVgQFQHHccQr21p1dYc7BrlhDwI7mxVwx2cgg8pBaEFnoHxMkAPMwcbJQswVYiVvFzZrK8wl%2BT%2BBasVqdjWfJdaq050Ms7b4j%2F%2FXAeT1OCrKnjxO1n0L%2BB8WNsXacmIjkRtY0YhcOqhmjtf2ua0%2BWTVAz6ujjwjNFGxsDyoXTMTI9xepUWojURNuVPemtreeSXQeqT2m25STH2g%2BCN32pXW4gx9zKXMHXfHL3sUiS%2FKHauU0USKwWZjdWIOD8MP3l3cEGOqUBeyPL1qTXowZG4wqZ7d4Lqxnl4owTwIdNvxtaxgT341j%2B93%2F3B%2BW9ZAdjkgQOaRkGePDvnGJbIUh86PakZDX7uILe2ioYV%2BE8J7R4g9q6JZP9M9T2%2B9e5MLFC5ELTI9tLXLztfFWF9lcQMw8YPbGth%2FQ7nzqlHd%2BobYaYS%2Ff4Fi5MHRtjM9GwAaPrx9HzrOWFIkIIcNqL%2BRZBPT%2BEpR6sNaxcbopZ&X-Amz-Signature=2ffe07c0c8fd262fc954efb58bef9f5d44bd16b4853d9c428ef0e8e9844c08c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
