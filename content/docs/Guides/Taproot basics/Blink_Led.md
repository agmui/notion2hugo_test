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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPUB7SS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwWi6%2BYhEUAdfsGCVNK5cCCSXj7%2BdejiotH3rhRRAePAiBlRJHF5%2FvgXHN%2FX%2F3weAY0B2zRUQhfiJ4%2FwLIEjylVRir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMftBGYWB6Zzxf2og8KtwDTAK46inRUOtYeBFNRMg%2FUVS7sZU99sa9Bd6LaRZS7DkujOPQ90%2FrVLLek6Ipzvs7fdLuQth8vVF4wNwFPh%2FqeAVqNE%2BxEL12waV1xrcyUUNGLD56VRIRwXv1RWH0S9YN5dnIFXQH8Hg6nIuqxEhtFWwdKPwDkxQMm%2FAPSfjOPKdhxNUn%2FHerXAy74uI7gpgEz%2B%2FGglL%2B13K%2FUkWeB3JPG9LfJdgKF4wr3x4h%2FDS3Zj7n%2BQjdMhN1C%2FVDtEbfkWF%2FT8wWOkauhbAdmkWQMYQVlUpljtYqRsg%2BKs2JaS7oj0F97egANxYUFrBYHR1RWExUEdRqnFrCKMX8uXeH08T8o4%2BODjbhpII8oAEcodc6uOBtWdefARF9mIIJ8DjSEcTsrf5%2FPR5yDCb0LQ7Sat4JXU4ej8jNTuh%2FmSKnGHu5m6S2ZohLfmY672QM%2BEpyno8ZoUL%2BSAyr9ZnWhSaXqiEl9%2F1pgZ8e%2BBMmcT7YchtxTx3QfYtEEzA3LkQHPgH4IEzd6kxN9%2BF%2BywIOd3fPI9gK9nH3AZgWYWDs%2FNyJtJ2UuGgNiCiA83DD%2Fz4HRbKCyit1IAvSVWx%2FvnMZCN8VJlcUVoMJMDcReovgCpmY8y819iF4pAZHJxJYE4yQ%2BqgwvamrvgY6pgFcrQN3H2fBxsdnWbLN%2FbmI0aRVbqW7kv787fitWf7%2BjdpaDhStbWncfAX6ye0KQ7rzM8AF0Qcv8BodPcRNEriG1e9POsQgHJl6oNxhmHME942GIhpAjiMqEJ72a1gYbuVJSS9l2qJZ1lbJBTLxJs56c0W%2BjypD2sRLZgtWrYjcIOn8nLYRZ6PSGaPcUIQnkqMRjNt0WuSinyapdBu5sGVpLE21Ti2l&X-Amz-Signature=4a2f85573aeeb2d822fb6254b614369131c46c40fc4e573a89e9d2691e632930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO5CISO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVhdceMHoqm5zvlrWSAiwSXkMK5hmRd12ovzKbBcxUUAIhAOJ8IyA0gfx4OFgZfsJ5qDaKPwcCzWL7oaTjT0pTKwelKv8DCEQQABoMNjM3NDIzMTgzODA1IgzEgpKANfM7DwIKijgq3APQ9wh0O1dY9GLs%2FBup4ufmYtMYM9OW5z%2BN6%2Fszj32N3QOnQOBG7MyBHmlkIN7AAVDA%2BGKwAMZOh43vuKvJ44qU9FT1rYgbhEP%2Bu4miIoTz0XpC8BqAyu2lvZ1yVsY49U4Pu%2BZqzY37uR9kdMFEiyC640bhrCwP5qlo4EFWoX0PaqP2Xg3xLoOEtZIL%2BfLM5Sd7F9KN0eyW4l02B6kY6F69V6k4CVS3lF22EIO4weu%2BBDTq333xIdoMgtuwbdERhP9A8ij948eD3rYG5yqstHvACd6E0QCOlstgoUvO9ynlGssGcBRQxjWjYyPZhWeFXq7j%2FJwdAHPJ0KcdPwDRQsCqRl7Majp3quJdsgym0NaW%2Fbqfe%2BhpmdSULZTJQwIrMXxhrGP7y1z7vGHtgRvKioLN%2B3FUBSD0dWPB7qnLFNoiq6pJVt4L29J3fNstYSEEaynl4q4By1l9LAg1hbCcdh7FsD4DcxWSWzxXpejosuVlkiHh3tlGgyBfoyg03%2B1EgxcMemBUiZRlPM2Lulpe4W4QrjAbPCugoRm4Z0F4Lmhm%2BS6fKUxUFsPSzwwIKlkhfoym%2BBW2ZYOkBorwdqBQqSSPsrca9eeCl8P5ON3iM6aDOU95ihaj%2Bpz9i5t5TDC4qqu%2BBjqkAXRmJTkRSpPgyWvZnHJoiKw5AdEza%2FSb5eLTHO5wvgypWGchr9OxPjeJ5f%2BiQfqmMtCoQ3dvlZfK7drXBDTgzoX4iq%2FcgAUzE7zvk19mKqwnpCLje27k7fTZdRrOryt%2F6FDg9nFGJW%2B7h0sFQTBOSrn9jtf8SpWjxcsW7oVf3bETL9XKpiB7evXtUb%2FKTjZoMaWzc9mwZeupPXvbAQqaL0v9gENF&X-Amz-Signature=17bc6acd3c694001919c8fba55dac962ddfa4f34d233674f0b3f49f06ffc657a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
