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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUTLRYN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BBmcD9i9cfJxuX%2FnXTpNdLGGmV8lJzAPRFuXXZ7HY9AiA9hjZwFA5isKwDWmKJ9t32wAvk%2BlYPyzQfZaz%2FEwF7Wir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6el%2FFvKFc0b8WvS7KtwD7V11AFTD7ARcX%2BVnMpyOweJVRPUORgFqixM3oaSoVIEQoKkGS4PvTM9rJFeS4rBueCMI0Ub0QUTuh02CZrAJPfiff%2Bf2IIqh9i5fR%2FcUnmnpL8DjyzyGvKASfb%2F1LPFCDgfT7n%2FtV8SNCQSFE%2Fofw03lcFLXO4Ns79PbWyCRAGBjDFhdJRfutNTRox43Ocs29jExDgXmiI0dCUT2lKv6JMvDJaeaczNp7agxhhkD0%2BAQG4lA9T3vELoWYiuc0jvtIEQ10WFuyWZzqdTZ8k%2BpuewmXE0W8HK87go7V5MD1VNi%2FuO5QFurcOSyydZZmQBRltS%2FqnhWUyvFZ635ItrHRVauqgKoCwSmWWgyJjQ8ycZd1P5tf0rs6IUcsFX0WlL3WnJo5T4Q8h83u5WBr5iKJcOMxVPWxI%2Fx9x7oDAaSPmf0QrRdWE3hnHASVTermJh6H8cmApwBFBDaiF5S9XZ%2FZM%2BpJYXZAMcxeucMqbtmdl8EZ20BZX1HQKrUKkue7fu6c8%2BYWhxiF3wXjV0yptZ9SchrpOR7p62LuVukTJif%2B1DuKG%2FRC%2Fd%2FvcwPA4BHel1yVj%2BsKTXODRmzO5C4MYUAMKQKyU892ERa0nk7OmjPoDOlrGHpu1HyRlilQg8w%2FOPiwAY6pgEB%2BKAiRf64jwUbVr1n%2B6SreaM3g%2F5gA4ocXc%2FX9Og4nS6QxLekjyy0C4JnoImecn%2BnLjQ8xgOpGgzubFRcCBUuQD9Sr97HMaUY0nih1SdRte7qfm3s4jlIGZ%2BCetO8rf8u4FadZDbjVWeZhCiS5Mwo5GHM1bcAf%2F%2BbXZRdGSptUVXCUwM0X07zjlg%2Bs0lD3o4%2B6gzA8FMzbZYsxlt06YnfpVcwdw1%2F&X-Amz-Signature=171061f049358734fd6de7dc87a013b8de9c762bf7dc1a15e4c78e38d44b8c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPFMTYHC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqx3T61Il%2FDP9gECYzb98j0%2BVLYauqyRYDyHUtnl%2BByAiAL7uljHkDnkjoQpigZbcR04llvTF%2B7NX%2Fp9eIQvu9xCSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMnnDOLft%2BFeb8Eok0KtwD4XC7a3qZuye9JYQJdq%2BSN0lqTkHkcIIaYgqEfXcTV77b0w%2BejHmVBUOp1W3QmWxb8TUYr8ZzxG%2B8CVmsDFZa3Hzh4dsqBFLky0j6MR3Y0QFIPvtGBYXJh6HJGBxnTJIJPF4BMDvSRn%2BTMZnvTzE%2F57qUZJFdU3vaZNjrFHYW7H1kqS8tX9bRqlBSyLHUa1pWC5DP%2FxRodiotGa5P7YR4JZbCHSfIoeYqig0C1iTDgp8XYwg5TnWq7Pk0RNI9ql1qJpC8KvSjwiPB4HI3PqsPQv2yTRZbu5sKcaWRdDMrIi5CiOB7gWFFNAnRdaq%2Bmsuj0SRHJbl9m%2B%2Fb3JRB9O32BZLALVIbgG%2B%2BvWfG9Z%2B0HnNLPW0VG0qEXiyI7ZF3kq7DTqhRlb1gWxUzlu0Vr2xZ4vXGmJRymMDAKwu5IRnDwh%2F6HA%2BJCn2Z9FQ7j%2FbIzQ5CVNDFGCcwgHWfRsOuX0IZK84yPAOYYQOZdfOcLeXSkJoyN1FWM4f4j0rNpsw1ofl%2FJDE7IlEso3t1pFpZfx9b1yvEFPFSTWInNlMC8Im2RroIRjXmpMoSi81CvVUN4%2FPDVYfWJNhbIMmKf5EApC%2BZ3H%2FvOLafVnopH3b%2F1tXUztnRdjyiVx8sqlGpNlkwneTiwAY6pgGvdALlBRRFhHJyfNQxVn0PxVmn3Betc8wRMgacNu1Mk9peV56nryOgvzu98W%2B%2FJgy0ujNakskXq%2FSCU1NggOvOrHyT3hSJUpgp%2FV%2FDGSkNrR46nDtkEMeUo2rBct6iBNrCsb89ZfH5RsgKzHEiTEnX6iMQ0DrULZFbAucBDiSGqcmKQ3Bq4%2FhGe%2BH2SCrPhyqRfDN%2BP92p3GTpVptXMGYK7P3RuntY&X-Amz-Signature=4e76f564327d0fa926bfc40018f0176136ec09990f4d5bd57521c0cb401f1657&X-Amz-SignedHeaders=host&x-id=GetObject)

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
