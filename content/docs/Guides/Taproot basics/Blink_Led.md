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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZUBAVT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCFzYCJFJghi59oCOJCPghR%2Fr6mhqKU32DOr9YJEr%2FXQAIhAL3PKnRh0NDFnB4Z0GOPx8MieyNTPLXtpAopPNlMgOluKv8DCEEQABoMNjM3NDIzMTgzODA1IgxIqs%2FYNXilfCEiPVIq3AMpZ19efrmqSIYQu6CHC7vsQ5d29P7KG%2Fn4qbetWSPZHBvqNUHRdyfiXoQS6VBst1zdwGqeyb8OALfTDbw2oApAddZvDDLWhTuFsU7A%2BOwFJ3Fx1mQCzpwDw1NRzfeHnJ4uhfH8qNnyvjmkIDRsLf0t4uxeyY5sfl8z1YvfUXrzain0LoK1ghGshwhboXKQFT%2Fb0i7RnFJZ9pO7v2Afs3deUhvXCoJTFW%2FAr9RnZOgPbQoP45uHjUAZwhDJS57m%2BoUTot2qXyOPDmYqvEjHUclH0Lasz1vGtxIBwA6fnWqvX58tk3no0iBGCCGxAEYyZsaYuzzIwObvN2wcRb2vtMA%2FGDEmuVPAy%2BYV0b03ZjDSXmI5qdKM0bW1UVuHL%2Bn%2BSrGTsbv5IYM70ay1JJRySteULu1Fc3uXrmCC4CzrdqJEysEBKV3oYyGQQKqmVy96Q%2BfuZIWyKb6StHT6X91vB21pJ4Y7rc%2B5sub4%2F7JDU6nbmPI8iAuRbWgygDHo3jemwwuBNYPFd4lFZNkhH%2BwX7RSPciFGDVhfN1c9dA2NgtaYSNvrLkMVIAu5LdkcnG1X4MfPSwBySVAdSAk72Zq1mEAwu4QwsBjyhkcR%2BA%2B6lVdWVi42WNhxvKA87lWC9zC%2FtIy9BjqkAfO32nuyi5AMorK3O5xDX2lsT9sGvLdQ6qlIa2JQcCTDJo4iONFtmJr46pi4wKhuR9Owb5cvkgkAH3LVNnl2ZUBRqRE6p5%2BRCOf%2Bqpc6doUs7fkxQ%2BmZobneGDZW0Xp3%2FD5gffBVXJbqLTYKGDnJosQMWMXhk2tcd%2BLqEttI6CoeUxvjUG9FDqnnT%2FArqRwCQjEqKhexfwZn8dWKOH1HKqdCF23w&X-Amz-Signature=8173366174035fbd2dc70f7994b5877a497d3593b282d81d6baa824a3d7e2d62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666COPQJI7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB870YPGB6N23UypiyuXjK4lacyXKvTMraTMMTqRg4GzAiEAxnAPOWodfLEKTPST84SXGDIGquObrB85M6efW0TBzpEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFSO0O6yHrtvAPdsVSrcA0ydOArV8ucbdTcq5gk4FKdssJHCxXNPdsOaF10WhIJPLj%2BOrAPxbcLXYXXu8TM6kxtWtmN9DiXmGIaG6mJWj4gl3%2Fc6jicjuG%2BCaaCYa%2F8Dly4khs6rZxEfnyvjeSSKzMjfGVB5y0fQNQ5nlxJ08mcCRoA77g2XDTBWntBKbGFVOAzvWpuFVYYl8AIrKiA%2FWYDHnA1bzCfUZr5Rfvyb7yAhwTuP%2B7K5uayU%2FJVy2v3eoNAHwNvHqle3R5XqU3jUDl8P05V4eO%2B7KjORtHHsWn9cFDHvbfwPTZQL4FiJCR5LdIgLrf90s97o%2FcT8cUSPHr5ckE3Q3Ng2rkUVzq1Lmz%2BvyK2KH%2F4mF9XCvFP7CSEgMWP5D8vvO8SvBnh5qdJbAsnkxi9d3%2BERUBqkEbyTqjBq7KqJ738xfPNA6mmRVZDQ9YfD6LLvOPZQ1W7ce1rsou0Y5BxEx5y6xsxpfMEsJdY%2FJ1P%2FpCpKy3UFpTTChcIdyUZBZev77Crrg%2FtFVtLTS7%2BTxH1TeEa3BAWSwWvTwc%2FICOnR0%2FDs3ohXaRz8eL78aZiKjdTClMxPCLFBJWaJsFZhdBDeAxrZJHB82Nr5DkEDq6b9POKXxY2%2Bm7ofVQ96rFiHtxsQC2tzSpQcMJi2jL0GOqUBCKwwQExvkb5QU%2FLSPzslAi7I3zvRG71W%2BnQzNaUcvVmVgGlyOAvMPGNMCkt4HfZwBYknyNB7Qnuw%2FLssAmsjG9dnElD3wyFHpYky39iFjn3hzn9Ugiw0HcpIgYBGAdqI8fq43zD%2BjIzGNQhbhNkMafDYbdVEgHbc5j%2FvenBnOmcoT3DdvztZqBi2FBZIXQqNLxXKf1UGJwATZ2K6CuyCuBY7Kka6&X-Amz-Signature=934807222c8097b2ee2136f63053e4f7fb9ba2f67efe9947b415cf6bc576ebff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
