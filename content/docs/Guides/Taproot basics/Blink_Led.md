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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXEA5NR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGkIB6f8Zq31VJUvZ5%2FJpj8DNp%2FWlDodPCLcfN9Ssu1xAiBo%2B3apnUaHEKo%2FsghmVGlOtH9SWYmGbdcFHfh4yK%2F62iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvktdrfQfoBVQ2i55KtwDSMwnZ5YeSTKCPotIWSEXoSRkq2xPitDgdiwK4XyIOHOXpnWk0nWE68dT4ccu5kBMLJjcm2vxKSyMTKmXgTiK4C9AO13Jr4UN4FxzplVfArd09%2FasjKkbq%2Fd8lq%2BGfA1JtaByWzoZdBbc6w4YHLWlmyXlz84d0edCC9WbEwWMVlX58OtUH95uUDtyFMhIjYHzQiq1NRoI1pbvsXffVYTzHFiGOGoerdG1XoV%2FNz47lcrg3mLwJPswbsjg97dduxFJlQ14DZ%2F3LdPxm7P6Owpu9w91N4GxEMUoO851KAJS11s3P6MQOnMjOPtN4WGqqFn6h8Qtq3LpKUqrAOCNzrHvE9xhCkrxpAAXwwybiuPuWZfKZfPxAqprCK%2B1FgqFgWHwC1St9MfUvklE0otm0mZnDVzr3Twb4d27H4vIIvK8ShvGAcsgLnfEebFBP9lI706EmzF26CygJu686I40PEONxaNVTLled1vzHVd4jDl8XL2bwRYqaDfsDy1dyjvKU%2B5avpebTLFiMAXqZzfXaUSRyvf073NMYsPsW34z0pDRlp17QyvzH0vofhHzPfbRcrJDLEdlQwhybtvDLPovBlFHMUWka4kkYJOcUWhShuv2T1IfzZ6Ismk%2BHjcY24cwqeyYwAY6pgHUX6SnB3bcvOUQD6MvJZjfdi5tcvxjdC7HCRAzhuhIzanULxsndYBDtGKxMsMWcNZDRvqFJc39nx0cHITX%2FmPjEAWceN8PAzpICZXIr2d%2BTJXnFftc9u8q3p%2BxLA63GenfAT4bAwtYAAlX%2FDQn9MlDSEl4OmLGbb%2B7RBiMSTrO%2BCUQZACrehH%2FN2ygdbTrnJHcfQuYhHusFvMVNU4XjOx49LfJgrgV&X-Amz-Signature=75f7487c2c9d97818712bfc5f8d24b3e81fc923f50f70bc4f994333096cdf90c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTV5E6E%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDsKCM4Nf8M13VuVCgUUX77d6uTwiBufIvjH0iTdBE42QIhALc%2BMW8hozSKwl9QmzaZ4yO6mRvrYfmbRblm%2Ftc%2Fsjh1KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDT42ZeIYqqlqfUIcq3ANuEaA4rIOip7invxNNDAPQgQMImVyQI%2FAba2Y8x3lsvZ%2F6QIvtnLZLySFmw1TPPiJIvPGukVQZSWjrb1aMAzKLwZY33yVk3OQdhfyqL60aJaF5WxOlpDImAke9lVNnOKTRMBJsK5PC7jcrrPB3SpGZIBd4yKBu2gYvgK7VQKO3S3opMy0AAUyHdiVKRgP%2Fr9oyuMZ6jmJHofsaDuQnfHXvUVa7lC2wbyJkGXDdLKbEF7As4rOfVyBWcuyOaZLlY6xX0G7LhPPkQeqYvDhE%2Fs8OJFr6JIiwXS4JgNIHKkzRWJclx1CVxv9bA2qCFcP6RWTFcQ5ydohdjIA9LcT1Z6isKWi0DZP9oPsNtuULM1kdFIoGuZH2nBh5tlLNQx2YFY2q6HGtRLQX21ii3FjMHXhrRiJpNYlMCHz4zwoIFyD4XejgvscDlLNPkQkuaGj5pweKOtWQGLZAszhmZBc%2FgVat8jXuxytN%2BTbfDVwvlGTRBIXXRsCSW18cMYxDeJDejwhEsHacZLEJpMxD2w5I8nEMeTkqOjdrMu4w%2BWJuzAqW2pOkFdu%2FV4y9h7KKc6RzSzkkTowObHi2anOzWuCACJ3RTKYJXWSKPnIBSQRgqxDoJ3pPUrY6IJ9Y5KEA7DD11JjABjqkAbXaVi1pABBRCM1nhMkIl766rxKYkyUz0brGgUrLUpsR0oJrHs8LNMhuXRji9k%2BLQapRwsjZ6FRnwp7WkzHxNw%2FwMEHqRHFehN9gdqwTOUh3LoMo%2FOI0beylhyqBdkeaTy7WC%2BmOIZiztzZ1%2F%2FRbOtQ3%2BBtBdL6XMlP47uK6RrfyGK%2F56Plw2bs7Acacygbt8bestMj02rErSyo86DmEuSr8q0vJ&X-Amz-Signature=58e464af6d2bf099819298a5840e63b995b84c306db357c7e1f5335eb68e42d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
