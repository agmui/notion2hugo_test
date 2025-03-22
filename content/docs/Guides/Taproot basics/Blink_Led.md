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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCR5TXST%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBDU%2BaGqZ4Ri3m5JS2MHo6c7Zq4d4IGMz5rD6qg6fME3AiAhWvWCPXqUPD8GE40axK67sPMtbWasMGdXSjnX9UklviqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUFNeFlQBtiRkjzmKtwDMOUR2ijjzG4BuCLyrKnYJtZaZ6APgu2givpvyPYCTx3SeTKdXc1yk2bUIF6leEqS1t8fUgxRGh0dPHkNuPID3aJw7bgdEeJ1XA9sSSZEMf522Aw1WNA2H1poe6ehl8o8xd3CsqUSdHpKzBTZLgfK8H%2BSuIte%2B71ETF08NbUKYGpFl3wRWE9QsPTZwUfd2hiwCc4WNsT4rTeaJZrXKZV5jwImu0yWAZv%2FTl2lr9%2FzbaQCfIo6KYBMlbjn%2FRg%2FzAglpJ%2FXJhUzrflR0VCchos%2BVPzC%2FMvWb2hH%2B74LfvM%2FMcTI%2F9RYYIbl3Qcr6HNsnn612hg2IjXKI%2FGhwN3SZ4rDYynXBYUlPte5a6JShPpxzeTJluzxbnl911TqRHrnrJHnXYVd6y9HDGiooIotZ0tEnRVHANq3q7qrVCa64BsrH54je48pEV1Ed0T7AZ2SSPeu8x1U2sPz%2FngeAag0StYXz0AyMnWTAxBU9P5PNtKNIRFaGLhPzA0B6H9z4vwhzibfni6zPEj6gKjlYoJOItYO8WEH6rDmFtEBpmeVyTbJMzCKSSpbKyWyT7KNtN1Tm%2Bs%2FGOX9kqIJ%2Bbxj%2FFJOhBK4BD80kqwHG78XQM3UbZPlddCAEpnQLWXCroFVeWIwsbv4vgY6pgGwFmbEc7vVTSLgcryeaqobt3Q3dphk%2F2CWcgR4e0bhDsfC2Mpz7XfPcuFt8JucuzUBX%2F5KuL3olSoxvFE1tjlmizqBAKYuZdq6dkQSp4dDcyM9RaZhHtGsqGQl4Yn3I60stoLzZYtrnMte2vNQNzR%2Bo6Z1Slf5sDwTkBWJf2G3etbKotKT8IJPWH%2FbumrxnuIZXVoPu%2BiauzixDGs8foFcB35pKhGk&X-Amz-Signature=7ccdc56a06b72ecb9a4ee84836e362a9fde3a52539aad3956b2438f927b62d81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVKL6FPD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICewK4KMuuhXVCxLSgKHTY9IB4wkbcmJ1nCcpiLQkZDVAiA86UUr87RUE35aLBS2db4ow0TpMi9faA30ECl2CnO%2B7SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3UjZ1klbM7tZzFnKtwDs5dOuzFfVoDoI%2BANYvNKBxsT%2FJpjquRjQv2Kr8%2FwndhyYubK4OMRUOHtM4FjAZ2xmqFy2WnIU9xqmB%2B2GkF1BGhVgNJ17yx8xe7Y86TZ54LMxXBCP%2FMuNMVEXqbRTPZ68IYsWEpswuMCkFavqWCNX%2F6848U5nH0Rp9cYBzj%2F4w0FLYOnzrLo1Mzz3RLR5lQx9sTkMbrk0ofoegfkto4o%2Bp8KTcmWUi4Zy%2FIE7L%2FvBKoFoVYamQY%2BJbBap3qStdCSb6%2FIhaxJ6LtmROb7yNhYk07ksH0OZnA7jV4uXj74ATV0cp%2BR5rOI0%2F%2FkOPv7c1VL4Tzk7ErMvB973fbkI81rQwIgVEaVnUtti2zjnOJ0w1h9BM3J8lfAb9CEzneBSJXeIF%2FeHxvLi7ujQLb2%2BGhOdKQjcSqhNhd3wCygsjVHki2S7ADRcHIO4FuxNRsWjY8FGTfdQ%2Fr1LT2VW5Y%2FlBwHGEWmPvYNgvzhBYaY9oCY7qy1fB%2BBft6SxaCRdUepnQR85gq0%2FomulH7iO21I9H9DR79dtYs8N92st3i707kjZbYfqCYBQWq3Ka3uH6mC4RO6jUJMce0pj%2BumXfWf%2B19ffshDDOtzj5w2zcWkOlCfj50pNdmjq4seivz7sF0wp7v4vgY6pgHqNzN9gZmpOm7iBib02t%2FvLsSV7RtBOAxVAcTLnfujDuGAK4EgCwPAXds1BisM9rmN2fTPqsT2N0DHx9%2BezINL%2BKMiL%2FKAvOzDP1T1K7wu9AtYr5WOL4su9%2Bjz6%2BZcun8L5QVGluodWE4Und4XrIRDjoyhjn0l02pKYGc2fSaZ5djdEpM40gyGQXvegMo1CU1HZxm7yv4CgzensVSSwGCRWOsj2kiP&X-Amz-Signature=9cc1e3ff147bceb8ce746e3d51ef220d5b248e48f5959a9ef64729b320550572&X-Amz-SignedHeaders=host&x-id=GetObject)

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
