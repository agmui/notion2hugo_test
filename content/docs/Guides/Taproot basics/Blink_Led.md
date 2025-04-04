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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LP4COG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYlkR3HsGSzFq6D2cg3d1jf6hRQjjy749zSaoxh1RxTAiBqPfenyJL51WIoMGJ4%2FEKepZHFVRtQbmDdwXcYxxl1cCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMYE25s6cQympGc%2BtEKtwD0OmDIu34xJWD55ELPIka69Ekj0V%2FtuhF9j62XCg9n7gIJ69SY5V6UTE2W7uff%2BXB6a6o1DiMfJdiNyonEiallFbFXKLY3SsEpwXizQTCBN1RQt56yDlpwhvt2OJAgIQX4LSyoYm%2Bmn7YkZHT8evOnxS69gtt%2BNwp5NWUgvjcGD6jhKaj33QkFwgY%2FvTl63QZehqgFojh5Rq1eUJ25nkQLQ%2Bzp9tF9CM0OZ3JP%2FzVlRngitRazkGOdnmC%2Ff%2BOIzV7cgmt2SxrBDk%2BxLv65cLRuMft0pbgNLCqvTPFiJY7wGOsS%2Bc4IHOfqKFMmVa3KLLfQm50LjZTkDzoa6%2FVDvEqF63PQ%2FIIYjTh3cFmyInQWHMQOThElTL%2BEQhD2gunQPuEsVbylGpPw4O11HrLnCShU9ZeInZWQf5oTVrf45QX4%2FhWzBIWGD%2B%2BMowIT0%2FOtdJwG37LujYRTSQ3rTFHUSTgItMqWoTUCdRcyqE8EZfiOOUf9QvwekOSxaiIfG7OOdw1FVFKHdEmclDJlrysHKLyGthPtq8UbwntDINQC6uTXG30XgkHS3fyxaJOd9ARbpfEAaG8601J%2FdZit5dJQaSzrAST%2FjA4AmgBap9AQkJkPUUOaJPvFKSkq%2Bjm4hswuJO%2BvwY6pgHlz3zJq3a0ClpW3w0OsQgtmCwfmCnXLy12RB%2BZRBPkKjSSZE98MHLJAwoP%2FtTTK7LKUx9D6Htr16qAGJjFFu8jIf1t2BMbHufQ4dCb40Ed4St7KQRJ6rUeYTcZa5uis3n9WrtBDRixWRmL8VRSZE%2B7YwZYyqypqVJWvm7s9kFcfHbKQbQxFynXUgxv3M%2Bh0egL7eCA4EQnNnI0Q5eb8RwTMmaf9BEQ&X-Amz-Signature=fdd91fd0def839eb8a7ae04bd177a2061de3dceff9895b4d808b17ce1a8d54bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PKWKV5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK33ZklHPjPEPClNNTBbtHA%2Fg%2FCDtTTs0LYY9AjS%2FkJgIhAJ5fUdBeqSzVVjsxEr%2BsuRmRr28g4IyOf%2Bl62z2ezjB0Kv8DCBEQABoMNjM3NDIzMTgzODA1IgzqiMHOq3m7GvZebLUq3AMqLS83TpK4ucwqS2XDjef4h9gUOA%2Bat6L9cjTHY88N6cJky46wixg%2FHLii58AUgqP8kUdnI%2FYgcQ8DQa%2FF6BSvdHh2B5zx504TYjL%2BLP56XrffIuh%2FgW7LKudPSp2NpL4WiHBi13ceO1uebaglsv9ATSgq8LtsyYEw5YThYVXUD0t7gZ%2Foed3spdPrdDbokHGHWBxSnHa23aq8Zg8Hynrwh7Tzf%2F%2FHuUQKUHOGj8RQUnnHtS3jYTmpUBcdxL1HDZLXS9kYEdl0KymeAcaOXTAcxVMLJpxVb4GdbBfUX2XUWCAh9KxgY7eXC5B3qWnIjayWUGRm4rC27ies9JQNA8u8G%2BjryDQqIW4k%2F3QKsdCM5tRljkO7t6LECK2%2BnyXwyIfOH3z8i92CGpOzlk2UnpUMOZUYciSU5nEudV8mQyQt58vLs%2F%2BhkjtaTazjD3zSPZfCQprQ5Gzu8RtWFEcLs%2BC30w3V%2FQwmjpqcMQPnfbbwCRc68kWcJNCJevR3OFvNtDPvOWevqG71XwZWWFPFyjUwpfkTnw6zI84EWLUIRix4KndVa%2Bn2Ja4CdpMCYlzLDhizkBs16ueuV1QX08gSAZYa8zaZ0fglTAnwNfRa34MGzM7r0IVXVG7AflH4WjCGk76%2FBjqkAZgmYxj5arzaK8uL9kClOw4NtoaYq1Gm9WXQJRxRmJ5sTl7zIModwe7Z1GushOdELhh0o%2FQ3DuaOoRtdoOOfpXU%2BRq2S%2Fek8In33KbJS4oPGw6YYYMMN3UznLtt1jrjpWfCy3xABVDYa4RKe6Vlykb0o5grDImmTmml5H5bdh2rAIAO1t0bg5nnDjhUvZAVQiH01hKdagGNP4EV8ThyWut0MuHSG&X-Amz-Signature=ff886dbcd82413b6224300dcc53a6ce1c45ca9f21975fa57cee22bb7fba1e11e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
