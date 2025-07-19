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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDMILTC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6I67fukc%2FPqykSd2shyx246kQbxYsF1tjg4BPtL2VNQIhALtOb78vCPQFo84HCdnjXsF7S1wvRXdpqM6fvHxnFo8BKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyahzqpjMaofJwUHxYq3AOe49PRT%2BiSv2CxR6yPjL81bPjuzpPncTUgk64SPlF%2FIx8Yeo0JpEnCkly%2FQ5YPM3oVAebXmUT%2FPwLV%2FPUQR52h7xy4lE3ZogvX2cyXRVCWYolN%2F06B41arHOpU6zi2rwo8Waq3PADisbJ0EetKqyhwDsJkXBy0%2BqsX9asSopxEmAzigwlL2tPj6rL%2F7vNfK5Lo2mBLSTwdUx6rdC%2BfvUPXdM8%2BKMWfmZEr4VG8%2FufozfFTBA7KFk34FCoTahtrvxsFOZhDAvonRzpRnNi%2Fep7K7lpWf2wn1VwEzgVvM5m53FW%2BaIKWRFrkmWuT2PSC0%2F0rBsMGUG51DTWCyHzotXj3TkAamQQ0eNh5Ug63Mtaha9D2LlEdu94gMbJ6EnbsOZQuRR931AyKrcdQzZ81Ov%2BX2a2DiY5O%2FENoqa5e1HUnXbxtIoYaeFKn8dUCv8lj4eLEWJhj2acf5PY4B8tjnixWKgKXCs%2FvwunS90yJUGoD6Jwzm7fbbN0lN62tnmFXPA9YciGqVnelvtiVzUgeWLUI0nG2BMlW0Ovu7vIps5xN07lR1bVC%2BfyGtQoPMXE3S0Xj7Jxo1CJO0AxjHBRJoMpRG%2Bey6gxVOH6gi1qIAiouV2U%2FNd%2BG0HyhssmDMDDToOzDBjqkASXkuNWFx68bmOIEo2BSo4f85tnUQSkzV%2FBHoEg0PHtgtc1tCAkT1ojrQMMtbq8cikCezReJawlywl4jiieRoyf6tc5GpdNM8Aor29nt%2BbaXFsTD%2B92t457smJDJ5TvUPVoSFx%2BmP3%2Bt%2FNPCejKY9ebJCGwzSwr40uJNHz8kvF29XfFNo8wO5rkjjxIFJsBHbtvHxxihSEAIlKxmUrNkwvEULmXh&X-Amz-Signature=5676bddfd0437930a2508fd281cfd377885bc53374b67fa2ae622e1e473d9c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQJNT6F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLoUhgGtpltshnjgicK9GAO4M3k1gETuOn15lY8DEmrAiEAtjoWhKmW322phTc9A2zhjT0%2FXgdwX2VwNZNZ9Xm9rjAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwZdAKCJ%2BUWhkcTwyrcAyh56BLFPC4F%2BCQGPuJ3Hvel1FKHoH1s67kP%2BsYFE%2Fppqi1KORClzbl3r59yq%2BRjCggF7oAEkCjAV%2Bb9cIbfzqkkcbxkuOxzODzpZegLC%2Fi2lTe1xYHuY6iRwantHNJZcpYFyvRtKal7Oe%2F7lEDGnGJbM8YxIVtUcD3%2B1bt5pC2M%2BaNqimQwz8bv5nTWpUD6Yb71YPmzSqBsyTc2m5rYnN60%2F0mbnmT2KxaMT5qoWdqkNREdEp7gOYBC5ALJiu92U6nCIzaGXmEtD6Q02PD%2BNFsqz5AA8etQa5t2lWkYjV7k%2BYcTvByNI8%2FyKFUaVrpWDmk1AHcUzSadlEpoIU3J1sAMBrt8O3jUuDM8CBfmVeY9AoHbukYUZmafOA%2FmrxcCJAdHMzBSamYUt%2Fwyq8WIcrMJb4CMqeMvG%2F3HlrqmKQl%2Fxtm5LMnyTdN0IQIGsdFv8V3VERgkEYLcv5Q7lyXOvEJ2b3cHaJLTcAcW3%2BoHHap9%2FI4%2FW8NlFizM5WuCQhvqVAwnPq%2B%2BVS9tTptXsrOTSzqrpwKseHIw83lvWWvGzVQyvxSY4mqBG8lFqqU1cFhwhV943arBlBF5WchtpKC5Es2swrA8OccCHXESdcRdbMPAW4ux%2B5JhyGGo0zeuMI6h7MMGOqUBjvwQ51hxz4fa4HmjunTxPuO1h1V%2BzM0kQ%2Fpiby1km%2FBHV98h8c%2BozJUrhHJ87Rv5QFlPeGLNTG6Pj21aswtcWAhwinLqR4gX%2BINKr5oJRr2kvUKgry6lHoZjKOAy87dRsCpaA30HJduOp%2FQFu0hjTblS0xtQP0pjOFT058tDJWajrGZiCRUk2HlVS8SsYHrEHafWIUd1orUuYCHP%2FgF0A72y5yg1&X-Amz-Signature=38ba7cd3174e3e7a6fb69f8d89c027637ef03d91bed26603d47103d96af06a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
