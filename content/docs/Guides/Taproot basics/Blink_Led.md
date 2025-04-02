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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMSTREK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFx3gwloJnJVr0b1NZPorrBYR5t5pq%2BG5ZreHl%2F36rb0AiA0ju%2BfP%2FzDua0FwiVkDN3axTNw%2BFudUONN2YMYKKxI1SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6atClHRD0EEUG3esKtwDLw1Zda2ru5L%2FfEfRmq4V5P78REg4kvhgycfVbj%2BJXRoRH6pYKFqtqnp%2BkiRsEddffS9p5AeGyWgZ%2Bk5N6gtUvnadiYjRDI9mMNRJTgeJ0vc8nrs35FHEmP0HmBChnWPtsa56A0vbrLwjApV0SD2SBdZFzJehUvKRzPKhBtdgTsHiu3DNNIL%2FIS5CjfVnZV0AUlAJmNHGniAGiXf%2FDAL4OX3vBw%2F6tM2HNFIztALg1slgxP%2BO2D26bYHgFQ6JHG%2BsJKTVttKHlp3OIHBtf9Yb%2B6CuxuiaLSk5iNF0immBubJKn5epMfzGaVXnki%2B2K72p%2B8ua8F5L7q%2BjcvWajWZos9Qi0etsmObnVFrCxy9Ng1SHVstyjfLYkVwAniGbaeMbD2IoWmbUfAiOdr7xbUfY2nW0%2Bo3aSypTmO%2BFOWQMX4xy8i8gGzOoAa7VoRfCX%2F4w7hsjDTEhPe%2FtKuiaR%2B8eVdEP%2FOCBMkyJZ9jYCkC93tTK1us9TtDpj%2B%2FykoLd%2FRpBXhkkdnfkDaDpNCu0o64vY1Qgo%2FcsnWMkIxg6OT7zajkXe8UrPZ%2BsBtg%2B8pwfqo9TwYyukEJFz6HT1vi6xJXP5Y1q%2BneHoN6fuBXiznjC2jyfRYySUuMt7jUCa9cw5NCzvwY6pgEiOQhzxO7lgr8jI28hqk%2BbbnbkqiBH4tFf9ycPHNcwpMs6ylcHDPgJHmdfuSyMtX64v6olO8WLqPgLSRhmIr54xxt8xRdIuFM0JOk1orfRiSFbSWy%2FAFDYt8LJt5FbeUwPntPzl3c%2BHhVi0JyL0S3edZ84kU4fsHC0Y1IRZFcz5iMZ72pIiMvV%2BQoHijviJC6828G2F%2FTn3ZSJVC6j%2FE1aC1wmWpJ2&X-Amz-Signature=716d29dbc59749de295698df8507a8eebdcce3238b351954438a3a78cbe20d84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAC7GCO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIEL3IAdPy9ksHpgKOoctvmdyO14MYouFoaHIr%2FGnZrIIAiEAuYvfPfbFTQur2jAm3qPevu0C8aw%2BHRHKe%2F9z62CcB1UqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4Kqx4Qp3TW%2FSRzFircAzg%2B%2FXhifqEYTLf0mpTuPzHXMlS%2FVuV5yM91CXoJ4ZqFbk02pgDs3mI%2FU7i5Q4GRzle3r6SkcqXSaYpVybGi4pawvl%2B8qR8KUCjyNSL4DbFle2OTWZp7x6DqWtRzg71h%2BPSkB7JK8y4co4FTUBwaQKBidMPfMgOEVOlhOgNxtrJeUcrqCqHOGRPUazvIJCLJOORnoJOwTBUZf4t6l%2FcXW%2BSFVzERFGSqDmVqEXDixkSYJ24KFNSfOW6STIv9vTqnDJbNwoF103hl5fcfbGAqTAye1pTg9RpTxYiXkSiObpzNPYgNhGyuj9iX9llG0NzEJNw%2F8kjh30T4JazJrZRUwsAZGxp8b%2BW7aUp%2Fl0Q0lYtVR9qO7Spq7BCKvyayjvqFt8KoQw6AC7FW%2F0%2F1aYO67NEETGdUL%2BXRj9Zh2QAXHs5cunKbQT78sovVezx%2FUpFu4yBIDDVFeclGPnm8fIRcy%2F%2B17reHDE%2FgS0J0E5uO5O08ZME7mhLlrn8PD22XH51JIsFFGTcx8V%2B5fyJza7cxG0l2pmrPCYHt45AOo6hQIGLJzeugTN%2F1cSXZRzhkZI0B506AnErLcGK233JxDPvcpP%2BdJxV2rjgels24dhLAqRAcnmjl6eZcG16TRIPOMMzQs78GOqUBQT7H9pASxq3LBUUVoyvRaVZnaav7o8yvzwaFxmWZ%2FycLLEWLNJvqfZhxfm6SW%2BlErNKpC%2BvQj%2BI95OgYajCXjMYk%2BkvttY1AqxMaH3EyPT0nWbKfwAcFatIp%2Ffy7AWKOzPRU%2BEBo986nWyCvwZFVGEmrMKiNk9WQPP4W23BaJb0CIUnGOeCiDMGJOUxWt%2FKqoq4DFf9CdyK7EFE7QdAN6QTW4atO&X-Amz-Signature=15f224d120ba5a1e1c7090c29d537300b5e34cf0ebb8f2efbe63223e5f9dec20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
