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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBX3L77%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJFMEMCIBkVYocEse6ihPhzohpGXqvVJEKfWvzEf3HgZlJLLw0TAh8kqoDr7gJqdOmeMz1uTTcw7DrujDIRhXJGkcEcXhLGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6IZr3Z%2BLPIz%2Bj9Pwq3AODKxyxlrD4YAgtX5DiKO57iWU5JA2%2B2mNp7sm8xbbFOqajsQBaYNftd1eenHtrJDnQm9wOceroWzGsBw68YEcx3M58ESBwXyoSqrJF9urpMJ%2F6y6wdpjLCqrMn%2BRtaimgEQ27nR30F1Glnhs0cITdXud5XR9kD2iLiSnq4uoV9i4FQIf36ZiV9CNYQ9QPDI0IG1Isa3nxTi%2FsypfFzMjHPXkEKKn%2FPXG7cy1YArzUHN5O6Hh1RzNo6AnQe31pnRqMRfnxwA1DwQnMjn4oNxKLS7MbA0Rw9E2jF%2FBrYImXQbcgjWv%2B5QIc5ZeeWazcy9NY7zB5z3o3jtIJ2EC2y1XwNAXEoLii8SPMOwF0O4EVjUnI7d3UvYdYnHz4uECuiiRM3jdDQTp%2B4v9jsaTR8fg4LAYnnWnFq1TNa%2FbyA1EcIyZKfJ1azzGScbKW2xoZJPcJHTlh7%2BBsuKZYPFc3bHeNM5snEQIVVBgl4hvpeix9quCO0noK0wL6e%2FjbK2N7zJLrFPINaFTvyyiWV%2Be%2BfS36KPuqPPgJZvkGXUTKZ70%2B5rzSvUjJw19cHJ4ZnBwHvTLShuYpwgVVKnbk94F9st7JkpplyquZdMu2AsVCsQcetxc5BMj8My6szGhfTSzDN%2BrS%2FBjqnAS1zvCHHbI8Wj96vnz7dh3mjdcu3LqJvDsZJpCtuCdLoG1Fa0UGZZwxyN%2FTwq9NIsrMoyedqKq1BKEFgsZ7SyG%2FM%2Bl8TkkT0JmhYdkTlHAJPjuKwmjmflOEfH%2FQzTOovZ2%2BNqEj752ACDbnJN6xWoZYztxS9f%2Fh7UIbBbEy6RcdfL8flMe0WLUXwG9eGeRU7MUIhOs84xkQq1W2EPp0HliJkOqE%2BCZ3i&X-Amz-Signature=24ec1cb6ef74430fd34c51a891ad7b938ab63945da0c5e9af45b2629e763058c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JVODWB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFGpIkgmaKokh4mHBZs3wl6dpDM7MluimP8OWKIgiKb%2FAiBRrNolOLS3V2uz99B4g8sSaqr2ckTqz1vr5igGUzStyyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMclkLECwGjBUX7E2AKtwDBVvWCxcBIlSKXpnYRHyv9HFSV4m4xWkJ4XEjCeazdWqUykDS%2BiQGgm7B1CkzekdDQRgLm1G152%2BkhF%2FsNjng%2FXeKOloqg%2Bo%2BPzkzfwY8d9Bx4TctViI%2FkqULBRypYDY9AbviFccCK3r8qtKCUmTChiAgk53D1NeKPLTjzoKSaAk7hzS9BLyCtSoafrNk20kGNWc6OimnVn3df2nG4LhJhYwRrSweTOarIymz%2BKAeZHydZQvFbvU6NRJ%2BSLyQPu6JP40%2Bff6mYXFR%2BziDnkJ3XVfteUxyOdS5cuak765uSncxLtrd%2FL4ZXEu5RNd4eDvhGHl4bVF5WyjravGwuuUN40A%2FqxQqAuh%2FGUCVq902es7OKbWQO3ABAjQkS0JWda%2BImMff2VSUqxc%2FU9lKfSBH%2F4OeSADszt9dp1ySjJA2%2Fgn8J96rptK0nLcl86pAQynIh4NQ8npzzarS%2BJXwUYdJ8849L1RWTQ%2F1AObCk2i2J3yYUHkT5NBhVvnmL9PngW6e8BDvyt0dQItfttUEPXgcnnLDX9%2Bk2n%2BwzI9%2FFxSv4VOHebBtpYk%2BKOXRTuVc7zUbI09ZMr1Fo9Mvc116rIdpLUshtl12%2BzpJWRr5dC8nx2Gf3svXcHDw7kErn8Uw2Pq0vwY6pgFv1ePY98WCK%2B3i4XDRz5L8DfZ8JSZamr5fjxzwJORwuBAoQ4UMjs2Ersb1Y4vfkOAqGPTtWpsftqhLEhgZlxxFoI%2FmR0T6DWEmHHjpvlTIRutjKqzzYuxZrfU2YHxUjZeXBJtdK7JwFKAY7LOkmMJgRtYrJsgf7B%2Fr9%2Btzx1YlzU%2B0S6Afa6aqKCGrcNPMCWoENha%2B%2F5zO6EeqzUqPsVyUE3lb%2Fokx&X-Amz-Signature=20656f8600634a509fb2acfb7d1fe994432de85f95a676c6e399dbe815457415&X-Amz-SignedHeaders=host&x-id=GetObject)

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
