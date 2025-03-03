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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIQOL6Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8xQBDvxbFgGnhiwj6jWUoRoyUs0Zz4BHofcPzBRN9QIhAI81v8XhM33yS75nf7k%2FMw43ww8kOdwD%2BXSS2spjlvxTKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvvG4Cw20PS1EdPfgq3APE4egssD0Jr%2BdY185cWpJiRwGUW1eEcJIGSfzy9NleSIrq2P4dm5U1tCiQYmmXFSMcQz8363BAJRtW3v9nx9mszQuMqztnG2jj%2FMACm7PtwQfLIlPZsgYnEREWDohO1M%2FQNkk2p3PTDy9vu%2BRptOyGB5hpa8WTvymaA%2BlIZUAX29Chdfzrz8P97482m36f08M4EljTHO2uY4rGkhP6qAX08JE3oxDsEuX5hWfLnwyodZ3m8rBlFXSm%2FuXjxuLJ1KdII6FCQ5f%2Fan1w66%2FDb%2Bzei5cGgRv75ZWIPzk00NNeoVKZ00GaE4byAGJNiIZNmoxd%2FLGDb3LTixAuTyqQnvHO62vmk3eQGhCXzRJUT%2F7V1mA%2FZHLqnZ6uHkY2gZW9gxsGlD8X3Q%2FXdS79YJt0XRQCMUJoPCdOrFzg9lii%2FK%2Fq5GxD9sA9iaF0GJ5JLYgePyVwxh3Li2wOkRdnMCFpZv9Xjmawok0Wqk6ysnpkMbMrWj%2FyElb5FJb5LSrrW7HB6TrOGaLugWaIIX0mpKRskuZ9ekqaILw7WChmvnZIhz7SE%2BR%2FvdZAjAgZ0WmhotkS%2FKqXkc5mWDtm70Fb0n0dGhaRUoZcO%2FUjSc0lnBWjDCdolRyOvueSpcnPkrnF6zDm25e%2BBjqkAV8%2ByBXeM4eCTO9c78gvfWNYvUIh5ToBxV3lqiEHXqQjrG6W%2BoBNJmXELJsmdwL5SZbf4RNw4KBtpdRX5UvE9du6Zgueb1jrFIYsDQ80X799pIWB37w6%2Bgtbi46%2F0vGVmE%2B6j26196wjEkqrTkbRUG9kZdOM8d0O2YRyzucuIx7bociMsCV%2BoQj9SNNv4bVfadSGFzeJ6nLO7vCwXMNfTGLHmiwj&X-Amz-Signature=a7297237630db93999a3cc0396f552acd4756266dc048de7ab1094928a7a4c56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO4VFASM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9UOTZ8O1gvjWKzqeJZFKT8QrRpB%2B4g5zBk%2FoN52mSwIgYMz5gwqObyDSL5ID0gYJZgLCkNd035WoAJUOiwj%2F61UqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmzvVg9WMfzJ8xdSrcAwBuyTuJPyCNewnAeCs%2BQ61n7jo9LCa1USLsBxOX9UwVv%2FwZAwqqheHIfvIHKiB1ZfqOPFeN%2F7I7mjUihrgqlSvurX9mBpaz76meZB%2Ftvepplc7nORrhdp7i7MIAA16Ehn%2Byw1HriYeRhavmYgejS4lxB%2B6dOMF1qmNkrErs3yMT249DxuYg%2F0t73UuG%2FL4%2FvYaIs3BUdRHNqXcooRan%2BU11E3Bi0XMMhcH2HrmA05PS7P0rOb5rLFtpv1Shg52f%2Bgmk5bEC%2BrmO6U9OZkcFTQCroVbYKRfVikxl7T1gRribHagII0n4M7nXRzPFcxV4PpMdmjnrslE121gAQEaysUZ12gW%2B%2Bf%2FsVXIUR3yMOs%2BwG%2F67mITbJVoj9FUzDcK5qfolfelmbffYe2%2BgVb32FXuJ%2FngMI8SguOProYgZ69cI2jLNP%2BbZG2aWc2iDhPQONFwUmKlcn7eWEfKqAaTm%2FjQ%2B38zlTTribkvND%2FIbBHuAos3OtSDhkelZdFNBi%2FLPvr%2B92JSfqRGop1o2bO6u62GF6UtaDxrfgx%2B%2BSusiAYutYhaOP%2FxYmwZjtLUL%2Fl9aHqHRk6D66OMfbRG1f9Qh7fu6eh2XsqPyBZqyzqawauwuzXbZV5U3b5zUAJ9XMJXbl74GOqUBRhkGK%2F%2BZclTBtZr4nSr8Jp5eEoGwtIwQmT7ek8nq90rHwVRbw4u1NADU%2F9Do6QsCfj%2FyaPNQhbjIUnwuk93ehLBzrv21z9xZAsyn%2F92IuDS5pw1HoTbMK45qnkxs5qIQvo%2FYeQQASC2z1ZazimBBRBmZTpP7Wh4wrGipKrAW4S3W6cqirX5f%2F%2FqTr3aSrYzHqT%2FmCWTFGPGercHZJD7X8cGjeezh&X-Amz-Signature=280a722c3468c1af8ede966b29f1ca2c342cfd73b5b3b1c933bf4fc71b33dffc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
