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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVZFQXY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAzcyoNxpOvBs1%2BDG8SWgM2NCX3x1jzZNXtZgeh4Ju68AiB7otybWKlLXEJKJR7F0mMKw5qcyLlqICld87bO8WjngiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlhUxYyjLgWIYFwFDKtwD9%2F2lJA0vfgaCdpPX%2FA5PoUPedM9ylzdkwyrnjV9kWJeKZSEC4tEmkXocwSHwWx1S1HrU%2FNinTWrL7HHqvzaGEhiFqBFsGcswIIOkNlDoDp76%2BuzI9qYYYoZ6HGTX%2F5%2FeZkSq84w7iupNGXLptcX9a%2BD7RPXmdua0q1U2U6cMF1jSsUKFOr0Bw%2FLNdAWMEBxbvz8fhR1qsTkJIvYNH9xp%2FGo19qeBIeioTGP2XLSFs8kILnKVtCsqczIKL7dXdy1EKYWKTwYKvgVFInZbI392qeI0ScAI8X3Zt9hK2VfzAGdLqlu7gJWZbhKgzAqlyH6SwVJiuJozVtqTALP%2FHz9RtTVrScsN1hgWTba%2Bq4H3akeBGTTe6MWRguJJ0Q8nIPaMP%2FDnft0DhIkKKvInuxGMQVv%2BoO6RRqQBAmifDQcjj4mqPLyakMpUF62THh4mFeLTkJR3Mqmb9H8OV4eyhbJpTSw2Grczu4gwKWJCc6jdjMatz8lRez9%2Fz39zOyR2YVHdrjdP6a7Loti%2FU4VXi%2FP%2FFDs%2FqWmj72XTmkHXUit1NolAmYmft3QVevPd64I4EXn4uGOOfvhpKaVibzu2R57VhFZdPFkb3Pj6FkifsGmcpDLtB0AgXRpsDvldglIwpKCPwAY6pgEKG4bMj6cJqk7aIEhIKcKhya%2FbvIwsR2wQ%2FIWylnv61kmn%2BGNQ8DCKqRpGoamyAN%2B6PyafB0%2FnlxZAhMmmSkwU9f1wb62XuxPIIc3RNHPVBwnNGhK0ok5T2LDsmPIfqbUDn2WKZMrFkq5B%2F44d8%2FQUrtbvMsxeQy5jeuQQV9pvdNG5XCM02lM19oNBI4J%2FBrHE%2FIDq81to%2BXOTOhc133y7T9RWUpNU&X-Amz-Signature=24e2be93d8590240f790c8f0d28d03cdbe9ae92a3bf0790caca4074344671445&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWL2FDV3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHwy%2BJ5FwYl%2BOdCb2gB8JJs4iXzjejp8cWAox6o2B%2F0vAiEAvqi7ayZpN9YzZ5rk0bU0YyQbA24syaglCv0N%2F%2FEx9EcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXHYy3Gcmtgg%2BWYgSrcA%2FALs%2BofOpx4r3M2M8%2FT1a36at7lyI2DlA4DyK%2FSQ9car%2FDXHD84df6psCrhszCRhYBOdcdASEcI4T9v8y1deHxDBT8TMlIuZ1obgnsd8iPXmboTWYsjAgkjxwjWM1EUqFHYQ9rNw%2Fs3tywWU80T%2F0tG4gOxXFA7A5mhfH0jaT53CE145xl6SXG2NqHhUWaRARTZfaQfkCWhVHAAqITQC4ydTQBcnGxRTVqQ20hoqr55XTAN4kaGd2UPl1VG8MDLjWHnJMiwbyI5d35Xp9pvKBkBjV9PvUg61kKC85L3yS2OnAU9QbD9jHwVgCHtAs5YNQL9FD4Y9nBbd7Fz8BpQOgI968bMLv1V48ZwKgNPc2sxU%2FyLby7MVHAcqOWmTDwAn4ZjHU7ngyUYlD03lGTFj6y0TNz%2Fbf%2FF9cEh5RefBdc8fEU1VGV62c50sBij%2FSO74%2B95meuulMNZqogjdJOHLye58Pmn67%2BHcQTv5grbVK6NBjRutEouWjOna4V%2BCibaAI%2B2CYF%2B%2BS6d8qohX6nNjvi5bUIE79uJstus7CKc8GDbmrNUZTIzqGUjbC2D0Zh4ggK8Ea0JIzIL6EwbE3j11%2FEs7jC4slao2aQyWaf33Y43KA5QW%2Biu8Ra8QkH1MNTBj8AGOqUBqi8T5p%2F1oHtSwhkk6pMzzo4SXh7mMJu789uUipmfskq%2B5duZDr9UT%2FnYGropiZZtJpPYOULKxbDh0PfyZd626Yl%2BLV2mmY3aYFIqWjaYaWiemOqM6ObXuCoK%2B%2B1YPNnBztqg1ALQv5qRhYc%2FPhRdgVoJxF5JW7lCFbkxnKjzRcqS3Wfv6941CLBHnFjncC7ku3Phit5Z8MXSpV9BEuEYUy2%2FGnDe&X-Amz-Signature=e54a4171f4526ddcd20b35024b9119e78e0ad0ebf26f4f9c6acc12c602d1cda1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
