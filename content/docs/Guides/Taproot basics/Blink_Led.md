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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GIUFO2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDc6BO1YECbPWeJyA2luqaemJU0FC5d4hsxwYPmBoLggIhAM8WpTN7q%2FaYxyDMOlMYAe1OyNP1DukPCfEAaToB0EA0Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzLkKNjqpkj2rhfUjwq3AN0Od3lj9asyrmLAIgK7tEd0H3%2B%2BrWyl0sI7ojy7Expj%2BoCBbBRIdOD51b1u9%2FN1zV1uG5opRYgP3rW4QwxS2Pj4D76XURLSckQZWx%2Bra%2FIC9zI3DOb%2BF8KwuY0fDB%2BgrID%2FAEVTenz8GSS8IEtShNjsAiyQ%2FLChd4tFKrmRYcMUqlUTw7Lm54EXRAsD%2BA25gVRp3HfYsfmmPAa1n0TLdzMK0T6DfaEwilMQ5EP44pe8zGs5gSySXfmNZ3uziSDxO2TtnltAczYF1i9Gb%2Fs8ajroNTkMdFqvS8JrRguEcHkaYBjYYC4ibqM3iYhZyIwRXeTlGEuJ3dD8vlF4iLTJm7hAj21dzvkLue%2FbC%2Fbe4PB%2FqKMPNQ8uhyZS3s1VzMCCuV%2BieamE8m2qm7AQPPuddRYuu6SRDEPpOT7Z%2FKt2zpkbHoIDp%2BUiQaxzs7x4wb2nBpP4C2kDDt55MSQJsl4cpNUy%2BiGMKi4Qdm5muXTqsat30e7hBxktCgdpKIxb17OccYcCtqbMMj4yQhozYOGZvZrS9UDQqPaS%2B%2Fq7QH8ZEFnGoWUDoZlkGJGFUFeWkle4Lz4tsc4P4OlMnbu%2BUr40I%2B1yA5juYmYMMBJCvLzeXYVUFB4qKGP212IR2POwDC3obvABjqkAS5eDIYfKm2iNiBDb1SHhuB6v1jS2SDSg1a4h54aovLZNSk31V4Q8TLGyJNeVzm3PwkfgsYaA7sDRIeyNMwSqDJLgcew%2F0YpLO0a5O7rpnsmJoK0LBkcLeBUjqOzyuY8k0nxSfmIfj21YirnlevILPx55%2FHhfvHyggHxzHdpyMGOjLau8LfY7DuUMHTa5AlcytsIxBhHYXehaPl9vS0ogxpXxEWx&X-Amz-Signature=9501e7e7b5597e9ff710e7514cae7aa99dc51b8bf780b930fc1d9b2d43bb5ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAAM3XG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkA9p4Pm%2BKnNJq5RXHRyaXoKVQV4iAei%2FfJeiLzFXqAIhAKpfG%2BIFnYfk6kJ4HWxjJHmIVMW1r7Ev70pXSFe8fwbHKv8DCGoQABoMNjM3NDIzMTgzODA1IgwxqJExgx%2BaXx9TBOMq3AMOdOhKtFk4tKXLPpVE7ngWWqYuMn8Ub81tCy%2BFGRJDWUgonImMXgiVDbL68g3cuhJMwlIqAV1V1iVVSOgqpsoAdyVukCoCJEfThcaZLKANheOajt6mQ%2FXL0tST0KsYM9JHTu9DJEmV7rUtdBAmOLQatv7kE%2BKfV8sF4P9mqUGBl%2ByFBDjyG50vScYxzv3WQYGvthT%2FnEc1cN0zR54pV02P6vwG%2FYXwm37aiqpk5JzUZ6b%2BM5Ye1PhfFzFS3kgkBMPTV0Uzg94FjrWeFpUkId2WayW3PaHXBNx3dSuR2APlKckm701lTsKNvs0j5eLCDAMSFwxZ22GWY7ODE10qc5cVaDz4z91e%2FiW4v4CnUQqpvlgTBAregu%2FCeQ3iWxhD0IkShD6xgv6NHzmeT%2FQxl7P29GBo3H8lhDv8Nvocbr%2BZv6VG%2F7XGeOJ%2FER%2FwrYec1WmWciWZE1UVbLCnIHo%2FttSvVqtTa%2BnPKd%2FYlRifNxKvC1oWR5WWYEBnA99FpErJVJPs2Hns2DE%2Bf%2BZ5hMfWoyqtRfA250D4tjJt2a9Hv25bEsAbThf7x99yKkwN%2Byr6rQL%2BJzogAWDkUa5ljJjpnfZPB7c%2Brdnn5%2B9isNxCFSrWp4%2FVxEhoRZJTclD1YTCLo7vABjqkAfWyyu2OMAFWUZxx%2B22u%2BVczmRDvRX9GnwjMT4eYLwTfvnIiseOSLmMJiPEbZ0wr2%2B0kjrSUq%2BGfCyziruD4QKsl2Y5qQrckQtHs9s7uSRW8K2kFdhtZHWNtN4Ixr8Fh0makGFlazwxvSi5%2FZCaTWhGf%2BEvEob9Day9ILr81ka%2Brughczf9pvCB8wTRgDPrNfY%2F6TXyFaNPPOKCAbZg9%2BM3DQFZm&X-Amz-Signature=1a7cf4d231621b32e2cf1f2427ea855cf65f3cf56f4ff38059e47d7a5abecbd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
