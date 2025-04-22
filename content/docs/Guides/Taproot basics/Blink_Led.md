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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCV43Q5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDcutim0e6skDw48LokB%2Fvss8IDSYuBbKkUfz0SEy9NPAiEAgOi3LPhdiawqpNBXPlettTpmybppVz5QApb65Kcf%2FdQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACGBr1YcCx9EfByhyrcA42Mb65kd931SG7rLemOlQ8SiZlez6TmVkbVrdxYu6wlaLTbYCYaZnHCpVsG1oSPO%2F74nwICwhi40wDWvpcrDNvpLXDziy1HhZHhGU9KW0Xfw8SgzwIyfkT7MhsZLCLzSEgveJ6ishKr6ehAxnWJGFhcSU470SZsK55MT%2BiybtMaZqPkLiYWfg1XnYcfUWqA%2FALXkCEjg1WJZlITfpbSQVzlUxEqx6A2m4Wx9tfmX0UntRrKj22S6Y1IK2jKkzBeb0m%2ByqnXVEiiZWgfrv1%2Fkv0mczgYTghA5Mmblh0dou28E%2By7XUwJPg69IWh6i2TNJzktQqA7nMPhOd9UhrUgSW9eJG2GbnIcU9FgouoNDdnmobi9iJFHvt%2FW3uHsrZs0g9NjQAbUOj1sTTM9XMJ%2FZ8KmXYKrpHtvuvSsZerGg2PJNqusS5ieywp1u4U%2BW2KRIqH41vOwlCQvQQhoxNXQZHg5oYfnG8gykt7pMK207THOb7z3S3Nkb%2BycZaQd3%2B0g45N1TiNcr5R1VV4jSjP1eo2TuiGooZT8Gte2JFxFh1Z5ypleUOdlQTgMuRo9yTglZukVQHgI65z3y50mIGnUS7SgGPkHynDc8HQahp%2FlaInMp2BB7o7lCeEXAGXtMODfnsAGOqUB3irYHue8n0RILQQ%2FXO0DYEbpSOZ6bfTpRv85Q6QxWBH7x%2BFm7geE9YB3g3GO0yg6JIHWo%2FY1b3ApWerHhVU%2F%2BixJNmEAHw69dXFAMtcC%2F1Oy3ZWH01Ay1ERhrtOtr13UotHXLQiaAKjy4XoqDFWpXunA%2BJYcBt9pxnyOJ5KP%2BwnT3dnafRZBO7umtBo6jQYaKX%2BsxfimcX3PZIALf1tnETf9%2FfUx&X-Amz-Signature=47fa8230cc9353e7ead89e114da4d7619024aa7f36bbdb880e704daeae82d927&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ46NYM3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCOZoMIN%2BI%2FUe9zZEbBdnXIaV3%2FRe2V%2FeLjU6PGVRqS0QIgTTHMrtz1CXtWcvAVaw3ng9%2BG1CDOJ8drtP31UsrEYqIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV6qRjdO9YZwg9YPSrcA3zwhLeElNTW0P1%2F1VilLjINB4uZ6%2BAgFEfEB5uh%2BPpqIGbNAEmBV2PLQ4c4Q9LGRGx8rTxrb5E%2BkXz0GAym2808X6PGVnu%2Bw346rNERCbrDGQRYXMz1kQ5Y%2FchG8oY0ZK4C5AwN7VSuTp5d7VdWo3ehR3VPxy7hAw4gJsJwY02SzxWYUWTqMDKGO2loDVfnOuvJ%2BfpUigu8Z7dCo060d0VZC39%2F0f%2FBzOiytnPLIm0amUwudS%2FinVxearhgTj7xeGhCMXZ4k4D011xGhk7aRSBNuOpSM%2Fb3ru%2FI1gZeCwIiBwvWLH4DHQgn5u51rJ1biHsVTTe4c92j5C0rgjLAIWo36g4cXNfwfyWz59XdLB3XARj8U98M0NEBomsHz6YdDghHx2cBt%2BMiBicOsckslLiB3gQI22EKNcNnoDOP9eIiSis836QwUmes9sJZy2FUbXKvvKNWqVNlxtak8I3WErAGc%2FrMjR17KssUEQZZ4eZ6A3o7msfXDDE5lUo5YjABNJ%2Bfl4Q%2Ba4kYhXGED4v69IlcOpfMyYKUTtHUm7bJPoyI0vrw%2BDwZfdvqtJ8oxfahR4mz7gPoxXGMEI2EJA2uR56GtSRYvh2otnm49jaSdCZ5R7RniuP0vU3fgqHDMJXgnsAGOqUBlo1kS44epRu6LEvlrY4DyyEqE7uLyHUZzd99AhrnLal61RArlQe0ioyhJpXExtgHu4eCh883drL7QoYe7R5DKb21kTQ1ydY4Bqh63zYyEHVwS4AjMs26A6pDeJbVYzESOyFhmDXvpKhQKV4ywk%2BAN6%2F04lVTri0bG%2BAHfjzZa72vbgRM9X0WUAtQAjFJ0wm5pshsVuujFnOAyUjCUfLbKx8UzeIr&X-Amz-Signature=185d88301f883f094b44b9318ade7aeaeefaffb367a17332ddafbba56e19b031&X-Amz-SignedHeaders=host&x-id=GetObject)

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
