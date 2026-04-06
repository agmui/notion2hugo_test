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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKYVWO4%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbp39ZaDI3G6c%2FG8lYlnPoqZRcb7k3HMl8vxeM9ZixnAIhAMdlDH0SdPBhpZISsf%2FDykn28U75j0JyJreINQyv8O3TKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3l4nx6NcbHD0GJtEq3ANLeXfrOK1alZK8IC8aZG6Ji131JagiFP5ZtfFx%2BrWtuB5Z6zWn9AA966XJvVvwsbxgHHbP6HoCnrLMf8NmBeXK4MOj%2BgKHVnyMPjTDXR95lWrSi2YGNJthEANLc3Y%2BpKshqv%2BTM5IhiT1EaY%2F1UzR1BdYSOvZ9bwkAIeseRwGdCdrqY50xYk0jQGOS%2FaRCfqWz276jVV%2BzED5JLHjcQkLIDrXnhSL0hwh6ZeSIcsjCsqDhuZPKgGNkkIwWVlbNkyOu1EjWYGR6KHl5YzDEA2WEGL1YHabvkY%2BtXS1CaG3RI4sICL0kuFAJvzDjF9ym0f50lOau0gkFHK2kAomW9DWyFThQUF8VJvxaKo6P%2BcOFYAkX%2Bys%2FJWNlSwctVznsmQ5q55a80fpsHCmoyVKbZ%2BmYBzSE4%2FBn2dn0u4hfoqbw7B19hYRFrAD62Ifjf762KCtglQ5HTWg2GtC26HhEaE4LIUASGiZatwIEeWWRqpCrncmdyukNrWtmK5%2FTquFEpvv0o2VeQbh3THCYHfVvgyn8MQtfy6CioNWE4CKCw1ODOidWy20LaqyT8m%2Fn9UPTLqLzelgm7IXE9TWGzReUkWzu6tDvgYZ%2FMStCW8cRoFq1XUfgGn7Hq4ljt7m74zCyr8zOBjqkAXttBgy4Y75%2FWNNZ86%2BlXlqeGQ56Zh8%2FEbhFfXkOeWCVdvHPPn2kWv8%2FcSM4%2Fln%2FzGitR187yaEf5PMFnWaBL31XrzyPEOSxAWFAsjig97eC7CLZ5UqpfeziTMnT0I%2BpmH%2BVTR5CSjEn%2BfkvHVFec%2FCMr51E%2BpDK53u%2BlRyi7pa7pIpc6i7VgAV%2FS%2FpGvh%2Br5m12B9ca9PBzHz%2FHCuy8%2FBgtR3FQ&X-Amz-Signature=90ebfc262bd0f07d60dc249ee631072a228d8f5688c46f1facba3239e0e9f194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VG5FXUZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyJTReEa5puZehpWXsQvukP2vF0OlQ4bu9uqXcwC0XgIhANH74qaX0DgVFh5XBwXESP5xzJrs0YYA3XCCVpsfYy6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzksdAIOG6amdxTElwq3ANToYuHCie9piWE0QOC%2BUMz%2FEd4sM%2BMRnEgWs50M%2Fqv2N4fBaB2lSE22OLH%2F1X4HDw9F9n6evCYmvSYRpGdNPDX0sjRmUB5QWFKWdR8BtAz0zSTDqMlit0o502dDB4%2FT5logQ0VqGdKf2VXlk5kPuEww%2BOsEC0Zik3BmywBfEGiW7tT3l8a6SXSsqWXu73lOHKCWAxnHRm759rAxy0HV7xUakbJeNMVFU1E0mjM%2FQcYJDhLrzNN7jsD2FM%2Bln2rZ479aFBIqYOmuhYXbXwniE3RWUoGHtO6L4LS19dBOjbh9yhk5vAfBRmiyyJDkQvLG6vZXvo4dKyqSjtTfrm3KEss2X8triMGmd8WTQL1Uhfx5giveW8bqOS6WMlUlItP3YRzC7iTyE7FAwQNq06mCHDLFGSMRD%2BC%2F9j6VMY0YRwaoa9ygkdJl60suz3FVD54udHwSA7BkI5Ptk6U9g4oGWoTXo8dpcHKFo9S7%2BP4H7ukIn55O%2BbHfvrdfikDxmmW6ea2ZLHfYzwArNaOcpubtKBheYns5A80QC8eEvdwJhv36SDoum2O4mY4iUUAlLKV3IhzRHwMHspM9eGHouyW9uSx54LUsV2kwbyOaFSqkEoRjfa8w8GLv5PpXP4TmzDpsMzOBjqkAS0c6RRg5YRqj5%2FczzGPOex%2FtZNs3RXWRtr%2FFEWFMSkgNPPPvpJ0XZN3AYF%2FRg1qfShIPlBLdwdjgjEcRbG%2FBMsEu7FgU5mU0JjUCp7kr4tKyNKoTVjfY43WHIs%2FtjQfnpqzTO4T7pMcxO11MJMULLqOXnjw9d2MnCKqQf8Hozngi9TsMviXyUhcpo1XP1ybMvKD0Fb0JNfwY%2BKLpmgYvO9ui4ZK&X-Amz-Signature=c9eff5a0aa124d65de3038b3757a59dd79e6b1f4b17e21519ad996b39d742076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
