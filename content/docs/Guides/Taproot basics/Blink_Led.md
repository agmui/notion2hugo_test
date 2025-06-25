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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y27BROKW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIA5QRoNYSt7l5cy08RrkSHcNFf4lg2IqzdObgGZ9xxQjAiAu2DrMCSwssb7Q2khDHFXmTE29HuYYgOg4bd25D5UX7Cr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMsizKc1lNhBLrfD9PKtwDxDpXZKRQ9Qpg3FsH4E6GHvKNlc6qjKwnTpaJ0GrEYAOsAVSKUpPwxJvCEPGgUQVXEkNNoHKNf7sHxg%2BauLew%2Fak0b%2ByuiRkHh0LPD43nb48uk4ukEZWukg6KKGE49LBmAv1zfZsfiIz8olh3kLmA5ADTj1QFjycLq5O6ZTMRt%2FBOjisAK2TA%2FzJjrlvWFxr0A25IsO3%2F9FFAL7ID2JnuTGKjJDhCxwpPfrzR%2FLbgKui8qrSCLoRTv%2B1UVzy72nUJg1obQ7Mo%2FKOKcnZdNI6WQOoA77rBolV99uiLJHV1j9%2BLYrlUr0X16FUD15V0LR3tfqMxtfy1q%2Fbr7AvQtilJkOg964Qr5da5MM4Ci2ZU9%2B5azCQ6ljLv5cJT1efbmgJxleZNeQ7%2BOFNysXcdhEONl7%2FyOYSqP6ObJbSG3BGQv%2BFw0KtW1duC6FMl4a8MJ7cAJTLT9%2Ff%2BBmjZMkNUFdoS3FqJ7W2q4YhHAB%2B4hnFeQf%2F6FB9%2B7eN6L6yrpYmAcOvcpa3Xikizy5F8bgGSgXNqH%2BZ9fhZeKCk8hwPdrJ1Aw2iQd60fQuDhHgd2mDfy94rDlBoIOiQ52XRYybNpAvzvLWFxDp9yNzRuM0%2B6jTGijg9SnyyP4iXzYRuB%2F1cwsO%2FvwgY6pgGFnjZFcnzowJMW3TpX1ARXjAbd4G2C1OPBAmgKw5GW09OUAAAw9EwMQZfEZUdtcEKz9aNz42ZAnwH27XmI5hklY%2FijugJrCt2lkmOt8qlvI5dW4PnrcCHQ8UrTl0l7145ssGYIZyVIWQm8dNlkJFKEXTqqxKpesIWCsJsNwjYs3xzQyJ3viKZdH5XGSNr9REAyiBP5qprJ%2Frh3sxNh%2F1t2TvyQjkBE&X-Amz-Signature=f333a112529906c0103fedc6d4fd0480f8741231c44ec0d984d120a44ea243c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SA4KF4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCID6R0k8dmu%2BNQzNi6q112l4svDhVRLxpbMrwiLvqfSbPAiArlzdxlRZNEWVxWyD6JXRPNAYP6ygWyE7Cl1%2FbBxZgSCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMT0zTomeedhjOFZzIKtwD3jNH1MYDq9n1DbhpOuhXwmQ8kBLcrgQ0JtRlfmnwPF7r5UFUKsMUB%2B%2BU88DxZPBJnmg7V1OCS0gtuFkL1%2B1xqGRMM%2BHZWm%2BOAYmJUh98GvauUGlQVMN6dgQf4GhGsq5sQqe2fvrs8oYPaxbR21TgdRKoPlLqcphKw770RCDXuoCl%2ByhjKkM13cv2%2FHkyZbtcMNFxeqL4w56pRbRuZSKdiHyeMJHL6yPoaRPMwpYO8LAHnHRks%2FtxGrqDW%2FSwh8xchCGhA%2B9M49rz7yruAeo1ubRA8UPsD3c8zIP7KiDYDJ6QM%2Fdd2liLDtkWEl4AoEVNw7EUuZz3r89%2F1Y85%2FAfrfiY8Wncw8vZrgazA9gqtNS6Y3Yu82XtSboLyAwhjpVyjXAe9YbQanRlEg3dElNsPCdpg74phhJHHNZu3scf7DeBJkjf5guuP%2BNglabwuAYUYefaInJyvlLc8gBHilz7PZMzfbFAIwbacdJIVUjo3jSy6aZ1UIkFHGxrUZouWxCua2wCj9wUje4eTeRbFLvHeWpTUht0ekzEm4WxPQG8pdEngF5Rqp6fxBYDuzHNeDmJGcGCeycRWBiulNrHtiFGngOAASDROuwcM%2Fmvnoi83vbat5FSqGPYMM%2FV%2BpkcwkvDvwgY6pgH9nKs0uyCQ2Oh4P0YKvZrtPJqlSUnIIQbo43KALp%2Bmh%2BNZfXt951Ppfkx%2BWiEAHAoPM%2Fv5hrlpFNkBtZtpCGUdylPlGrfdov537t8pCIVnl7iHiYpU7qoKC8v9HVlfSu5jhw%2BUO1b7Ihv%2FmAjccE6Cuy79cKU0mD5oLioK99r8fBky6On5hBau3ZEz0GB3nnTCeNi81qazg7YwOSL89hqOdY3KP4bE&X-Amz-Signature=641e844387d1abecaf82d4d887244c500ceeafe4cd923cfe9a1a0f47693abe21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
