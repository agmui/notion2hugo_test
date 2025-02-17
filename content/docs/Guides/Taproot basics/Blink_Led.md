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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BBOCO6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD8Oc3%2F6fyMFq13rYs6PqBvchyD2sosR1YFPw57rT4tvAIhAMWawarhTOgx7qb20BYB%2Fn5m5pDVWesj0rJMerhX8kExKv8DCHIQABoMNjM3NDIzMTgzODA1IgzwZyJCHXCXuUAOowgq3ANDYqTbvZ4aB2veoLbOehGyC76lAJuIJzTzmjNuN4JkF0rZimfp0DXuHtJlBr1R%2FeO9knWUyR23jTt7%2FBDm8gpKJ95o6LxuiBdQbYRqP1%2B2xpfPZoX7WCCiCweVTSIOm3ev7b35%2FetwLUp2PEck6wjuXtuetpTXcTAIMY8%2BGftMnbYc1GkKvo7kY87HhmX6uZijnySoHk6raL9LJ5FmSIdIII%2B6bZMGpvlY4O%2FffeTPbfrK4SSeIdyHCQXga4HzLS5cMdBVTo%2FXmgJ5nwHjyVVGgK46UI04vwqeq6mTGTqsuvHR%2F2DBFHDnW3CZZ7K9l2X28aODsCfO1sfOFys7hzuK4cx9QV%2FXc14UOvf%2FV9XKALI4tG5kNM7Rx2rMIRKxNNjzBG0fcKA3k9jGXyMFhxe4rS2Yu1j5hJFCNgAu45mBTJXY%2FZIKVzeZfsh4Ap%2Fl%2F1HCdrOBfbS3nc1PaPHa%2BcJ%2BbgooFfmr1wf9VdWrlxJueWe72ElUD6%2FX1%2FWKUaSpgkaJfx8qVX7jYWgTf%2FYk3k97QWQMx3AIeliqQ0m0uVVPSrf8ncU95Ij7FBA0w%2BWh08ZertkW09K%2F%2BPCA0hqtFEqoNtCxQE%2Bnlz71T3hsarFCpTM5x%2Bj7nUJygHQyozCl6cu9BjqkAajr7xOnv%2BvA0PVUkk%2FuwFhbrWvNRz3x%2BHSZTJLXXxJfYAOql%2FGq1RX473ny8Xv8kOaRgQyyOCa8mozMNWP9rH%2Bkln09aM9hx%2FXiUO3dBE3cuFWcRhCMUbpZB53rizXfCenGzP%2FeKpwMebjpvasDNfmJnWhKKepjeouFAHhAgwjQ0tdJ%2FWgURe4mSi9cNp5Rn7iCYLuAXl%2B2DZ1JwqyxUc%2F%2B50w7&X-Amz-Signature=e8130c4973965890d445147c4135dc7a0f50d837d51f8134d51f1fe270af302b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLFTKC6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDP7Ky%2F1oirLk5HRrqbCCyC2KqX%2BGnrcHl5XHpwqSJ%2BjQIhAM0uqErBIJ0qHxwWVtq1VT7MlGyiVwsiliHAiQ%2Brj1JgKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZ5utgq1e7o2%2F7VDIq3AMFE7%2F623%2FAnrmHRHBMP%2Bho9o4c7nTChCd6VDx4TC6w6x%2BpdZTu68CptYAWr%2FxUYFngRrwvbO332DOtcQddS8%2BCqdDrRpAKII8hGqDQj3Nxv%2BLPsq9KAIi%2BdkbuDXgjkTo%2Bj9soLLZFJNm0A569UoUFwEZf7SD8Fm%2BEkkT%2F3Pvp96Vx4HFxmWsLTLx0hlqx5UaaBUDddcQjo8v4JueJqQGU0yMQ6enZR1xVLCTghUyLc%2BdVh1pGXSYT%2Bn5ev26tfLwl3ZqZqaqontaauCc4%2BtQWAxZbI47DiSakCwxBNEbk84tuCBNQl76J%2FjjmAYyPnTvsDZ%2B%2FAxoePECAXA4%2FakG9NdeoUISghbCHvtdxpWUEFGVf0AIK3qDez8vQ89xsd2Gdk9aW5y%2BYrXgocoazUbcwPOcitOiP7uHvPVdJ8OFstydBqdlKsZXgs5KjFOjJnlBJNR%2BW0asAoSfMdfN%2B8HXUKQiNoEL9P26dlfozOKb%2F8Okiu7cQbKtwYyN%2BRG0RPmVb%2BMv9kHgZEJChKtqJr6qe62ULIwRI%2Bx7ytf8ZKVTxlQY4OclDeHExwZ%2B%2F64eU93Ump1rM1X%2BdAo%2F3iifOZO4L8ADowKoUlupsqONOwemXv1H0%2BX9z0BxKOwmd7zDF6su9BjqkAbgmQp0032PwmH5Cl3GnpLDBuGnqO9iOqiE94eql3gb3oZaoX%2Fzs%2FZuZptbt4Lu%2FsFuckqfsLCBZOSxcUSeSL2dsZtenJZqowVKiTnArqY3ekiVjfgFJkcRl3xyKMCNx7tikZgR8TKUGmQby2BMFxPI4%2F2dN3NfS9rjdWhVLianP4GB%2FiV2eYyk0pwXOi%2FFuxFRYhCz1sVxe8iiclc474E6Sw1T6&X-Amz-Signature=d7411518dd67235354ab822a36c6e721867f43c5230229f503cc3929eafc6915&X-Amz-SignedHeaders=host&x-id=GetObject)

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
