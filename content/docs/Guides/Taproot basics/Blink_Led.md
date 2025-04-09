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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNT4TQTB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE9pZDSjICTbOLnqsaBz9mKHXasf8bzI5EFgXqmS0qE6AiEAjvMi9uaToeY3DkcPfDkhouchY2i4jYVQpWGj58KTNmgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW%2B%2BBUA6JzBz6GJ8CrcA%2F0IS1bjzMNmdzfMqA6GBw6o1NixxVV8bTZr2SnpEorrqnM52PllWQMcEPQTgQEgZnI5zROiv0r%2FrlG5Etx%2BHiN1SUyPonlwJ3DEyQND0Kxxqq9EHchnAM8lmUkZ4Tq1S8f1h%2FkyYtZKAKtX62wFyczu8NzHoktoLDzFHM8%2FM%2FYwf0gRPM7ZIzB880bW8LZ8sU0PKek%2BXuvylmoiPCPgmgIxZ7UB8fVtmq4qsxvOCILuER0yzoEFbD%2BkkMOtm8FMAbxNRByl%2Fm9O2gBojmlF%2Fcy0OQdYS3Zpon0UPyU75pduW2jRRJrI2Isc%2FwtrXqFtFm0TTg7X11SXt0gagQBGF5GKtz%2BzqeB%2BP6OOSR7Hc7iSdi8K7mMtSkOzKBpCZhBQVf5H6yPdfzMTc5nSWwucihh2SHTOJBuXjcvrhth83msN2eMbfpI14Nbti%2BJ%2Byb2%2BfnxNfD6%2B2ee46Mvyyt15j0C3%2FgQP2o4C0iGeFblgwhRjcckQweDa9Cxc63cp%2BhqoAisdpo8XsxluNlXAZ%2F25ej4sTVKGXifG7vxAdlOvq6s4UXmOLwYaB9%2FEaP3XOgzFotxBRyJHgMFiSocJbLS%2FvlnMHVAIfOTyt8DJvCtUK6AbzTa24RdMJ7z6RweOMIOX2r8GOqUBkEldSEF1bLKeeNtZ3MGJWU%2Bl3sNJv%2FWIPVvQnabiLTx0cjfOMX2oQ5k%2B7TU91fYdZjBaFBeLsIPdxgDBaulk9bqNhq2tUW1jfDdFpn2%2BudylpIOwkz5oDzntJ%2F1R%2FU8Xbytxz69nLhLjHEBB%2F%2FteuQquFtxDdGKiHqV62hQXNnPRCH4CzhlB5uhVqCAgsVKVouJt50j7O3T3xl8I%2BTCiLneaMUTx&X-Amz-Signature=16c9b4f238b9fd596056122ef8cd5757c398c232867d5196dddd8e13f92f919b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNL6SII%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDQ3Frb94ormdbBwwrp6391mR0qAq%2BWAnT4dzjE5WU5QAIhAPgnGtpoprZsJb%2B7ELQr3YHn6oKa13M6de0J%2Fslo%2BSl1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxubP6MAuTCdytzxi0q3APybXBqQzL38Rzzfe0aWLLgrx7PFC%2FKozeVSTGa2wsap%2FA7f76AHyrlxcGtfYLDZyJ6%2BMwTow3u2bLXfncHx%2FzTqD6%2Bc7RbCeXa%2FX%2B3I0AHdzJDisIrLRTnw73TtQiXLBSTeBovPiboJj6qdXZMcrCUEdS8dELqJsHkf4A%2BXGAIMeJFpUVsnRMJMsgGhq0l9jP7qWkLvQDjf3TeS6dgiSp3yh0urBkGwjYDlRs0Zf4TDMZmWNOOsu%2BF4aOn0pqMQ60GJm9S1zdT5HztP1KKIZQznDwGhn%2FE%2BrtcHlun%2Fn5fgqxnpHE8fKHy89jM54gyW%2Fmvry%2Fkmuwvc%2BbAxubIC58m8%2FZliT7E1wj3USYrgac8%2BFFVZ%2BAjc76hhtge%2FG2%2B%2FQayS6amEekiGkhHXvGA%2BcrRZLHFEKkWCuJPDGT8RvKJjTtscFqWYrec3TPPuAqsKzZ4zOI7fc72YTLmYBjR8gkGUKeSi15uIQx5pX4x66RcmfvTRWHaBtndbKHHkQaIfnA3%2BUgyv8cqqDr7PcOivIheuc5xURFIpYuC9aoj%2BYdqMPPBjQQlrslwqfo4fwm9v0tbiPmNz%2BZwBY51n1hHFkPxPvhFlToSVCUk%2FiSWpdIcH1kGklHnh%2FPS3QkC7zCkl9q%2FBjqkAewG9%2F0dl26CD1rHdwCkpQDJICLqkXChcDZ86%2FgM41q4O8Dpdv7I%2FyCWsYD2x9z82N2Vm%2FHZu7xrfAqoG%2FKwsJ0QcjswezUBZm8t0Nas5vLnj%2F2SdSZraNFFQs3HqpNEvMHJ6SBlqUDOEQ7CCRSRGKzM2PAc7ZXHAzjassl1DdToVSh5cdK5ANyOEuLMvW2omYqyzCBwuucciHhR%2Bnhiilpp1ZYu&X-Amz-Signature=e595832d15d518f9e310c83f4b113ee55487a37527c0fd89bf56dc42d5946541&X-Amz-SignedHeaders=host&x-id=GetObject)

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
