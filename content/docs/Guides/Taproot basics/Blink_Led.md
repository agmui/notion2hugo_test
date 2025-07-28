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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWLUBN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGmKYdtN%2FtL5A9Nv9db9hBSQI4ysPKh14gxicfH6WrxSAiBnl5c7Qy6%2ByOPSgq8tRFe1c%2BiGrZtFAUggeFPK7qC%2FfiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsp%2FUj%2FeTU7CEketKtwDzvYg7PQuI4ZwrdRB0rDjV0yM7BkdlK%2FL5fPHUrKJ17Vwx2kV9cusW9Tybvo6fs4VuJ6hAOI6NzNNDun7N0y1ymRK0rAfhJZXw2UscPi%2F5Hd1oOTvp3dOZTaDNNzidsoyAGlLF5yZMNAGUuLsiuNL7HJ1Tby5oWRkKpaecJLJp6t1bbWsxighesmeYVbSGXJeFezhW3YDHhrZCenmDoolLUURjy8fRpKo2w99y1lENE%2BbW8dl069PZgxlhJhsjFsPrbAcz81AkqgWddDdp7XmP5%2B%2BFzd%2BlhY1wCY3weO48opj09ra72VOY0h8BvRNhKwEr38v1qovSVvdacMRa9SF4Q0phfM0gYrqYquKVmdq6Q5k9ddY9%2FJ4vJR%2B8i7sxqbBrz%2FlG%2FNwmPIZHuep%2F7kAC4X9twhA%2BZRPMT5KZFtUGdmUxr%2BQ8wX5MIqWnMwo%2B7HIg0P%2BAKCzQdc05yDNEz43S90jTCWLaaIn9MChtXIzEigaY9ZYvf%2Ff5NZDyziq5Y2cYiRJ4XdFNN4KCtrDrGrbJw7JzReNRwU8b%2Bnm%2FFRjZ11IWiIO4gh4YHWSTWzwkm0RLs%2B%2FehJRogvNazAXuhM1eZa7i8WWFJ5YnCX0HfZzIV0fo3lHaY6ubEKuWxkw5aOexAY6pgGQkT1qczgpJExOP7Ja%2FY96KMZhVBGm%2FGnEP2u6W7y8cvBv3%2FfsUbfR4lGlNOp%2FXImeVsj9tXvXoVGCfqBs7ZUkJAQq8HKSWqM0a1croY8XOF%2BfxL64gLFWOzh%2B3q93%2BmHJ%2FjBjGECcBhkglgHZMeP%2BKbukBVjfyJdTW7nhULo8pSz7G3fZ2CLP9%2FLDwg766OGC57rPiVxRVLV1D7vFnlbM%2B5qxNxYh&X-Amz-Signature=2a89d0d5ad7c9cabce982b93f8f155569fc9ffbff94eab342ee1f241997587ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKTUXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDtGwYMlBA8Z%2F%2FQDtm5tMUG28cpBwNSzUXCnu84IzSZGAiEAlheX0PfP7sp5TEG35%2FmXmwlTxBe59KrpeC%2FB12VGiDkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOECCQyHo2eyH9xNdyrcA%2BapmeCcHWqOqaG9wa0N5PVynzu%2FL2juMCUzLW9wlPbgSUiq0x1h4XoCxT6lPC2EpT86UvYtyVugBzb%2Bfk5yav7MXMsoKd%2FBg8tP%2BMhTT4CYw14fkQQJ65dBb%2Bbqm1lHjxix6F2YQpvYWuH7siTPDJ84HMFlSz4FHhNJH%2FKI7M%2FPuk4tUIfjKskacXT%2FHHiPjf8IrSIX%2Fk7HXC%2BiUqoJ1QtRWb3KsVYUx7nQ69nYAKaKTf%2F1q32UGMMU%2BFldULonHrdM7Q47M1hcrmg0WBAedsgBNTkRivt%2FCIJF9kOxxuWCFffi3ZoBJCffdEZ3DaI4wrfIfg5zged9mS%2B%2BX0Ysm5OBeNoTV773B2e7vQELqr%2B2L7UrThV0pqIj4yDtg3LWs0Jh3mXksw9HyNyU3VqR3lUtvJgK6%2FZ3%2FBnVUaiHjojVgHZbiiYemoFmm5rU02Zfki%2Fj3Nwsr9%2B7rS7OUj7uRuJuytWSWHmyFBPLZ5z%2BCfF8SVAHd5MqtSClIWMen0t8w12Pp4Xxrv%2BnBkfZxSUdBigB1gGVhuzsAQYUdeiBqSb1SO%2FEgS%2BYcD1T4tYmJbiiCBqI6xeYMQK64N8JO6hV8Lq6OA1jQJnvOd2UfbjypozWHFkSSTwqP9CW21KfMNiznsQGOqUBV4IH33UhIAhLkoY6yA7NkwhnmLUM%2FNMRfEyIjig1kLE822pkPLZMKbPOKWVvo1e%2FRzm%2FdfCFK1%2B10MRJPLvoZ58NIZ77KzKbm4%2FTzW35wLdSvdSAGbYW%2B9ezHom6KG1Pu9XcVLWSZ7AdzMj8ZCvSXPTdMOlfxblA6F2o%2Bzng0E%2BJGHpsB8MkQI95lvYv7RB0i9Fb8rygz6xlsYcAJb4X2SMfsSFR&X-Amz-Signature=6edd4d1edbaabcc23bf9d600ff04ba75b00ed4693c9a577074a41e8a4cf6636e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
