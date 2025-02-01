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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMVX5H3U%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNQF4mFpmpfODBFg0VUrqSf9RKwPA2MOKAjzhfCbcHFAiEAuRHgPDq78sceBp1%2B4n%2BushmnP%2Fq4M6CRfsDjHx86HmMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMKPw1I%2F6dg6zKQiSrcA54v6bWdBU0zY5t7k4qMQ6dVLC3p%2BILjSioL4i0Rh2b4GilJNehUeMulodzwcIHPHH1heKxdGvggawR74kmsBh2eA1%2FClS5z%2FSQm%2B5SUGaDQrAzCbADWBx%2Fyc7uNw44Z1xuo55R0plJOFv7GQJWobOT%2FQBydMWQg8NUFBVS5%2B0PrMLtnz64ufyJPVHNH7a4Tud7x%2F2djyHeN08qR5UNg6d70CDBSIqCDzxpKdUrGuajuTAJi18gNqlujyogk2KDKRI7z3TVu5V4CWhTo1OfzB710mroClLZMyKBuRNVoivli7lh%2FTyKXBqK8ARULbM2NkuPEhawNoslXClGt9%2BDuZ0s4QK9YTnOm5EVezu1QMm8h8DEbe1%2F3uJ%2FEiS9wvdnJ%2BFlY%2FcsZzG3cyX2C6vGWaP1WvqELXaDOMIcFMAwIR%2BBPZNW9lZaVrpostlqsEB8dLlmcfTQJc2K0id8C56wfYEJMNBdlBwrJb60B3laZckr%2BnmUzNfZ6sLwxiUUBmWE1AcYLCMlWIpb4k%2Fn65vSha%2F%2Fe4MlKTx9Dw1eJ9FBDxlp1DIZeafKuWZKLe7dGLM7r7hBqwyHLY7u1VbPH8Tql5xWXS%2FpMJTDUI8tIj5wnwiVLiNPCQeSdF56N2DKAMKan9rwGOqUB3NJX8CbHB2suyfeBWIQ651VrZhKnELzbb%2BnAvizvXzMJalAEvQbtc4owKZ%2BHdOm7QkRqxrqKErELz41t7FtJilzOAfgS00aMKanwq7aLn29QWAlclSkHpTxdVqxW3htNvOqNlYTVeIjzhepLPutCHLLiOTz4%2Br1dvFCD01uBIJSzkSUpoJFjJBMniNj0J8TOu9Kzjtni2h1ED%2BPuPBTTHJylbtiQ&X-Amz-Signature=43fee73a0db2b2fc86341a12836b4424a298a13c2af35974aaed6edd38f449ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTJUUVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIDtoAb8hTeffHwAfg%2Fdw58DTRLcLsrfF9qcr4zoW9gAiA%2F%2BtF9VM82SfvD8DVB%2FSRzedxA6wMIzePHtTPpHaaY4SqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkQDxP%2BiieQl7%2FwVuKtwDGnRD6%2Fx8dsv5wJgAWbj52CGgSoyPKpG2uO9QqbLGdv7Oz6BT9Emh4Xx91F0MWWPgf9j20gJ8aT7zsfL%2F8eqABd8hOGU8dUadX7Woy7VE8ad8%2Bj224KRUoffkuXwN%2BXyWReBEG7IfB0KS7LboPSEMQCCX71dRiLokjQXRsLXwaig3lJc5LcMKGroIM4q6VRzqwE4jLJJupeDfW%2FZltPYWz54ZBSU2bOMVE2q6XCQnNYQ9TEE9t%2FuqK2nJzGDEDzkgpdrrTuJhxcTtkArzwyUoGMp0mNLaT401FaBWxmXY1sXZxoRqhXptr8mAen36uPSvNiLncXNP7T9iGyvnoejY67Z%2BF%2BORjg6uZcXWYVcQr9TGNbQpOxZAQsl5n1Qt2cXUz9LzXgv92lk5FGSshCcYlzaVr4%2Fscc5aoJcGNCbuocUNKSWXBLNZ%2B2ce7B%2BVlOLWQbWG1cG8LF1csLZscD%2BXJtMYJCmyeMUw4cmWQxJXgbVR3Kk3e0PvWabzMVrxS5YGzhlIFnLJXijx6yT%2FIitvnder0eC7RoqhWd3KRAPLQUvHztQMv4Ll6k69luSBvZkGeAPVpKrmikkroyQzjpTQua4BCb%2BuoNt0mTBoITbE7E6j9P4%2BXRmFIlfix2Uw26b2vAY6pgEmRRHhq9q3768r5E5H3MVeoroFfVSKogIWSvI7ozEp2fnW5o6oBONS%2B3GIUN7wfrAm8BsqXvY841eHmFbBQ72J14IDw9tKNeuLr7ct0qq7696IoGVQBecHchpQHeI6ZTX62SQd5SEdBtJirA5j4be49LwiGJjsepNdQoq3G8yYAlB5iTpxNcZMLmpYjMg%2BxsXk9jUMLYfjwofXT1duf5BIZeXPFUDt&X-Amz-Signature=5f2a633c433cbdd90dfb8f3ef028ea8b5160e9fcac9e325e366cdba5fe24ffc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
