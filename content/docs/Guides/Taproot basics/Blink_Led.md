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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTDEREVA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3MJwuDDmcwjv8ZQpSSRZNnXB2xshpm0%2FGQvXcBQo0gQIhAOa9icw7EAvR%2FylkjtYVj%2BYAUw9eWeuWV6dnJkXQIRANKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCV7d95P1ydOokYFQq3AOdOu33HsSyZq%2BpCzv%2FqAfxjvC92%2FEtxom30VP1RccgTp%2F5I0zicBIiwhUsU1pwkidKHHOAsTcXwQO4EhUN%2FXWXD30%2B0YdsJUziAqZ43PRZHyi1rO7kbs0JjJqdl5LK102Ubpb2qGnwcQq%2FbnhGOyJ6VdQpSgsjEXzKELrtdziLJp1wSzlEd%2FPrKLpf1gVm6QiMeT0LD5efCBNA7p7Z39zcVd0KtaN6ygl657DUMHat1OHjtwZmbaQIS0bCYzdN%2BLrF%2BNm9t%2BKE4pkD73baClHOrYkiynR0pFm9qF3Gwd75MF9hEfhMg96MadhkdDVYvaBTZPNKI%2FoVuawVest6N1b5s2EyPD3cSMuqlniGmuMYTg%2BEUidHOetNUIOWdTrbKfuNPB4Bg1C7C2aQZ5ogi82kl0LoDFjg3IVYUJe%2BiaHzoHLV%2FH%2FCi2iDBdlwnkiyzt%2F4hLaS3i88a4%2FGzHR9gEO0xtHtJAHeFhaaGxehvIq2gWBRT%2B2OxTO6aGKOv2vkVcWi6j4j3FtdDyhIQq5Sjm0K65xEeIQS4NLMf6G0uSvrzi5uUOWW6fUUH0ib4quwjwr5v5vS%2FBvlIxeJT8VZo2m3tvQACFg3jVllbSa%2BBGD6DHohzRoI2RefCaqMfzCjvIjDBjqkAeZkGZ6RgCPPP%2BysP83G8316Ip06qqmdOqD7FCtlf4qNi5Smt3zflMIKpGx5P%2BYKbqP1S%2B2IY5VhwUfhEnV9RaOek8wL2UqlH3PDy28VdnzDAMQ1AhddLpVxDtysnBJjHuC8ow6XQEmkcMkaYIgyv1XJthFgQQbhSL%2FRqJMXovtX42aOk4dcQ8WJhMqse13Y%2F3g9H2xeIMSxDFW4HlViIWh5ii59&X-Amz-Signature=2301e008fbd6cebb676c071f54032f4ac1e6b49c7fb98106574d5d5d547612f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6RODW2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiKzIR9ayysbaEBs%2BEghIWFdbA%2Bx7WwtliPVrAAnn2mQIgOqxZ%2FPipAgNv%2FcGI7B5ErTjymEov%2FsRiBuFNSiZE4ooqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPss5E3v0Y1xkndUjSrcA%2BmRZVqLot0hAZ1RF1RMM4g2ubNpeKYKSNwa0U8smSQD%2BiJk0rSfW3DgHG6LP4A7owps8H1vDseyFvEnDVFJ5jqQ2njp8EiUfG8Xm7dQs1i7zBodCsJkDTQvByLvla9aFEATsxHn2JETEOko1gCYTY%2BxsvlOZHqRsk7oaKTeuwwRV%2FTAoaOvQebyrlH3UvXM5TucLpShmSEBVT7WvCO2LhNgyLsZNH5XInNb7OEZzxeX26Kll4EOFHiUWW5QWlRSOnQWeNmu2WQumlQ9FQjz94jZRLRcNugMTbaEQcWkoqul4%2FMQvP5jCce1bADF4M5KS%2Bvi7YXKJAsOU4WNCOk2tnL%2B8kw20cGbennGIurBRQeF9AYbVGZxHIHRepsrcQjJuBY0K%2Fnl0P%2B9yng6aEG5OBwBFYDkx1ppLSir0V0ruclURZ5nB2Xy9iOCc2UGuVJu9n7RPG68iQNqz%2Fub9kJdurb08boMsZvVemZpdWPiJwrlFTpcw4eaXXyNq%2Bwovdyy%2F4myrDTMusDFp3C0Ui1b%2BT8Cjgpy%2BzEX5IL%2BEh3KEfAgBzk5awMF0zB2O4Yjq%2B795TGc1LJmlMqWMR0zoyEWTNkv4%2BIe9DLminiT0g8q8tueoXmFSMqsf%2F3BOMupMP66iMMGOqUB%2Bf3MUqQrj0Q%2Ft%2F99EyP7fOQmunAcrFzedXYBCX0DHYGa1AZSfFmRdU9okoNSMHivsRuXpQdjTjGg%2F7B5l3WTJXYsZhXDlDnVbAkYJSVGzMvka4tyyFUwRKJCUaddSrLGOF0vtCiapxTxLC4X6z%2BtrgzJ8LWJJ7%2Ff99KWE8b6u3DpqdvMxN3SSHBCsb6PH3e%2B2FnVFp94NmNKNOTi4WF9qx8bPcDG&X-Amz-Signature=9b0c83b405cc2eea670ec58e26a7cc2be925bd93637b965d62254febc911d60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
