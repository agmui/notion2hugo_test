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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLOQ4UZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcrX6DrHWKxoJ2xtB2DUKZ8S1l2QcJcCTVm%2B9ZyBT4JAiB2SBVg0PCK%2BTXtQvAjs6jfhqMXKDFjUiUojvTZKkIaOSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFMlitRnWOsSwlDcKtwD9DaXhXMnsV8zvJVjZOH8zq1aQD5aKHATPuctLcZnNpyY8h1b8AP02vt9KT4aJWG1yg%2BrT3%2FbM83VdzNPEfFCD39%2F3D7r9cahjvxukBCIAjTeuxqwk7N%2BGqdMDPFXFcGbDjnrYpuBxJ151oY5qh7NIqLd%2BXN%2BW58dg%2FAvamzkqsfGv5%2BD0D04fHR%2BG1Ok3eMn5p%2BVMw0TfA33FJtY7EFUFRmPbnbqM7Tya2pa3mKzhIHDctdpTYujbqTBXZ%2BLaOGcebVJpv1vJVP8%2B%2B0mb8LzzkF4mg3KArIV8L5idyfZS07b7hM92RvMZOjVPQU2tQzn%2FKoY21Cxsw8zHgufpTohMKKsl4kdnSB5XLowYXqxBK0ZvFgH2m9dJH8RzBsVSklgBco8kaV82PROmIgmCPCUqzDTIy9vk884xH1FJjvuaTfwajRfdYWoYLDoLhDkWqlSRfnsVpmqCENAvvPZCLkxYloQbQMuEyYbCOCk1EKoejYKshjkbpWuyzNRRT4vr48CfyNnaufIBx7KmCwQb0uX%2Bgx8PAeY9E%2F5Fhu1Z7E9XY1A4wiMmXGnGMECj53l4cOAIqapATcRC6bT0lxKnGTh%2BSROke9UsTz4N4VOTl%2BfCG0ucx7zPuqMfriEm5gwkaztvAY6pgFTs48g0L4AhDQdKxwhdkRtlTYpWCV6d%2FTDt1KjSziXMfFvUSynv6ujTfejbROi7RkFQewW5gD%2FUIllynjBErBqjz51ziF6FjldJCsNG6UcQSTNFEIXHqX2N2eYllKmGgvS%2FctA4rEVjEvrn7FJj2%2BE1xMgq7H4sMaCdpnHQNxLxD1j0FvctSKFG9C%2BQWcufc59oYCLabLK4UkB055rLWLb2WOGgFpk&X-Amz-Signature=29b4a838f36695d6da970b72142cdf043d8b7143241fa87806e1cabff0c6a35c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YOLNUWH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM75KE8JVazXA9u5xmHsiQMqNAujtgHKbVrcCSBu2%2F1gIhAJMQpjUie6NoGnSy3Ud4RqLTaBsCSbg8KqH2QHIDEXq5KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGe4qtiG3QwaDWoSQq3AN1aRFrCTWl6JViQY5lJtwI6qxrpJ71h7495rvTlJZ4wh9sCb7WDZLQ2SJTdNty0DRYmmjhydPXwAW74qa7HIMyKmD4hBwbsVIxSADgstQLOMU8yTepMm%2FFDnaIa4E4X%2FLxUig8%2Fy9MPy1U6hlmwN9XYjBr%2FaD1Yoc4m7rpp%2FwDMgOFw9Lhe%2Fcwh%2FMJe%2FErOMqWxogHlc3%2BGwXICRcsaCRjSKeYISgOsUA12gXkJPJbn7smmwWxqMjE4BKQDBSl9sk4ehHEVYL26cGRwWW2Fps%2FcuFuHY16bpuHx%2FQ3MJ03alfDOdUL%2FA%2BIfYCWppm4xK5yGivbjc%2FUZw1PgmUdfe4D6brdBJXl7tkHI5FAG58N1dkGj2JQPWQLdsj54Th%2FIJlYBWKaiOhv04Hp%2Fam%2Bh9xaejab8tpZIKu2i0cyh53w7DCbAVDiBN2JM5pscy5%2Bfs2eOAOIvme0L9oIa6VZV0Hjh8i7OJq%2B8UpTD%2F2JiadLxcrSpplb3cILNptib1z0CkJiplgcA%2FsOzxCg5h9Wv7C4Q%2BvEVGRWLyD%2FxzUX1U%2BcI05tsf9yo23A2GHkN1H4Wow26%2BRgnPmB90hLXxLR9LxZMvwaICfyvdnG%2BRZvFbJDEGgocrnIQxEI9mCz2DDlq%2B28BjqkAQB30xDNpJowWstjBeYaDulmxaE2oYvs%2BPm1Bmz5J%2B1zMxZD%2FxKXDfuq1ZkIWQjuUt6eYTGZCWW3I%2FbBeD%2BKt3O2JV4LjkiDYDU01CZh%2BSQj6%2BHvfX48F1FBD30SGwGWGEZ2ox31HkUmp%2Fgk%2F0bgl83%2BZhFiuRKpPndxLfBTS6or0V%2B27kaQOqTGcjZon8Q%2BXobLTmYg2SlHR4YMfdqj84WB%2BZZk&X-Amz-Signature=6329f1bf385bccb68d8283c41275c70ccf13454dac8a264a35e54af4272eade6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
