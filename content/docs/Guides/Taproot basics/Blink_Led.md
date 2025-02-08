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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6X5QBPH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDvfqPlUbiv%2B7mm4POCuRslXLNljBz2RVzvmiVphFbxmAIhAI0sHg219hSN%2FH%2FLaOwjiYjpkvoaTiGj3V%2BVc0%2BJ%2FCniKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfqw9%2FsLkV5%2FBp30gq3APhisAUKtJo%2BM3DwGzqA5tHKw5t4Lqf3OHQvSM%2BpydY%2BqjrD6VQRtg6%2BdwGs3hkP51J2P8c8EF4mQYtp81p%2FF%2B5TgqzUq4eAcYcdI2tAybNWgEP%2F2S277Ptjd9qV9WHSMbAlslFuXgj3rjhD2qaX8oSFdZn5XwR90hSsKlVhVw9RNh2W5uzviIMm8xvI1BBcsbmffWGna3YzxKPdXl0Z7Q8aEs%2BmIA0Mo9NkPh71KrCzoyCMNRizxpjhKREDhK86%2FzBD6e0aIlQAmhvAxQ0rJ8T9Ex%2BnjLtUNZjYsh%2FFOhC9Fj446dlHSp5AthZ2ZGJ7rgULbSvV6mJdMQHrXfuiVlt3c2%2FE7VkbunzK5veN9SiiMjvJRXbex1T%2FGMS6wEOBV6xh8VqbBA3Jat1zq2HZiWg4ospTaeluPLVk3zBRfkctfqLk%2FDuTwnxY%2BszW5K8rzQPbsAAgKljw2zbxtvkGnW%2FX%2Fiv%2FO5dkdAf7HvcOspUXmeq9LNx3a5U02dEwvBZqid8Q7UafMjWA2rX2xn5V83w%2F1lHlZ7wibQZCEsrbi1LKEwaRBXUx7vHNCvT2NMt8Mh0pYuF%2BBJ6K5sfMp6Tim9L%2FgBwyBGXAwr6VCip1GWQnmOLmUxJtJWC9KSQIjDOwZ69BjqkAY25ShwRuYYGlGOVDCA0jaCgrXIIwwAasK976Qao4N5KdBIzKTUxmxvITTKK4etIlTUb2RgYXknKgsOe4Mq4HgX5xGcjrvhbZeSRv3dfx59O2W5opY4GGnCt19vL50SKvr42Saef7bhL8e1wl0i3InV7HeILlIAl8HBO%2BeN6Kex1d8EWjlTIb%2FlT4E5ofAgXHeNQy65LL4RieeRIWfHjyZ%2FpD5lu&X-Amz-Signature=73782eb8d6b60c4b0cd87f08bbfd2058266911807d67a37b76aa6883f9eb52bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNBSXEQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDuenTKOrO4qT3eK5bH8upPDnyUsPFf3NIqxNr%2FkUvqdQIhAPGoEdeuWEq%2Fizq8mU4mQGt7NwMtC6j0lCn9t49J8Xd5KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAmYSb8MZx8VvNLK4q3ANxFnNlXwwV07ohkASNJlrW9IIHjjWYPk1nQJqNNyACFaK%2BvPgIZZhsP41Hwt%2FJ0Wjc1%2BVp2wIgM07KyWi5dJyTQ%2BU%2BRAWPjQCobJE2SAX3A0SlIk%2FjHIUzbnzTRTWBghAwM3U0eH5NkWjGA%2FJIqSAbNEwXK4u54lUwF4ealAeRBSlEhPWOTlyVT%2Fmhst7fTgPvEcLBiXF8dpJmpRHOaSbwHbBg%2FWBvDyyaVKn37tnafrZMUwlV9TfwwibJkuNJXqiOGKoo%2FPrTkB9JCBsrC7MjeQ53vVYKKmJAdrZja%2FmFIzCQeMt%2Bbm%2F%2FazPf1gkqMbsxNDLW67TU8L8ED3xb0UaFn%2Fp1JioJJ%2F%2B4lkkxBX9OhcIags70aJpdjFmu%2FpbTJgODFKz6cxImtPgC8Q8VMcCPaLzJnp94tfiWq7qr4hYQRRKy4R11nsVlN3CwhhYFVwToMgkLd4wyZJS3pzFHPtj4IN8j2ypG9BL94UkNjhm451XTX39EOmR%2BtrOTGsZcmWyLUtIM7tW9%2Fj3vx6%2B%2F29vJrlJD57BmWDun3RPyPN6NncSdmgPCb9cSj0cMYi%2BJ86rvQ5sV%2FuihfL80TerREHRvyIJlqnjol%2FbJ%2Bk8Bkr%2Fmve9ql1L7zJwrUj6HQjDXwZ69BjqkASp0j%2BTNJD3V9NmVDpeeUKhGJq3SBUPj9%2FNvAbg9jEIl%2B2xlxgBaIQbrGdZUbTZh%2BCxb0FOOv72OK4Sacm7%2BAEPeO8CuFzjXfzOhZNqgIWoy7tpV0xSDA3F%2BSgR5gPUcawNBvuCUbWrFWPsvdBnTQfO4jvBWTsj2Xy0N5bi3P5TfYZgZdTLhj8U0344AwxxR7CLBU3xcOKDBLI0xWxDD%2FmOEY%2BAM&X-Amz-Signature=49a994c943f9ba0469569f38370571d4e7553eb8b75191a88e508b3ccba787df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
