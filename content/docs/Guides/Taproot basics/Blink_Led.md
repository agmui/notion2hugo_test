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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOLIEZ4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHXx5f9%2FtckQuMZHyh8cCG9ypXMsGxv8H%2B04%2BKUVAxdAAiBwQorFHMfy8NgMJscKu3oOF8odT4wQZMgz2%2F%2BV8lo2TCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMpTytrgKxW8hj7ow3KtwDuPa0FEIGDdAcxp7yo%2BdmC6kvfNV2LVhLg%2FU8ep2X3aZGIbckkMa%2Bs2BOQrQ4BprlUV%2BkMVFPNG%2Bf2v1C7x87%2Bp1y%2BDT6IxZu6ADT72WgQyDebFCWbwtwBDxzpnRNnNAjBuAEpnmBm5prSZ0Z8m4NybCKmVfDx4urXRcVukdno9IzSzBUyWM84KeO92XocnK0vMdjyp3FHHXOnMxXvllkB7jwcOBF3kde%2FONCqAe6XFvHQ6fuQeVF8uvFaex7aIQbKeTtdk%2BWsCOJRfFkOi09KJ%2FkPpMWg3WCQQyThc86gh8PfZnnQy36ms%2B5uQNlH0o%2BkgiEJ7VdQd5qJPhyOux9iUGFhHa21ourHEF2fYBUZr2O6c9mxyUD7iVvWIQexsNhClORaYaBXCArh56Q5CzY85rfzdwnPJZECS0YCuuD90zFq5QMqM180fLefOLDdqQF1pgok395iEBpM25VJNlaYgbDZCO0z8Lrp47qECNQsQpkZGZJPdv%2FiyW%2BVtWyl9iMnbmsoe02q%2BJweTjD%2FiWchs5MZPQxqtoP21w3Rdl63EEOWEZq%2B46QMNc%2Fpr5qF9uJVF1CTT52%2BYPYLe1CQOkAlc7xYAn%2FnRheatEI%2Bj4fyO5oVf8S5%2FSDzoGE4hIww6OqwwY6pgFlNTUjGv36KiuaevYgQ2t57GS3UjoIi3%2BpwYOXjQg9PqMXDZS28zmZIUiP5JMRZcdJlWR%2ByZdoSgCYKAWqfMC00%2BYABvSUZOCU4DmKhxoz5OgvD5dJ6gXFAQ69mkycSwWWaBPjtf0DUzLs%2FDaiQC7NCLe%2BwJBGFMlqxbNJFbMvO4i0kRp73I%2FyCaNY9hUqNwXuRj1EGZ0JjITtlskcj1l2VwRj06Mk&X-Amz-Signature=ecd4c079dd8ed35e84b8751c91d4cf49990ad73407f1b28f7c273d7eb8fcb54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774QN3XA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCLrupOBeMX7Vc8jgDfbUJs4ufTLZxrjsLfogsapy8ITAIhAKfdhnlVD3040B22dvBFaDXwKPN6K8uyDjhxxRnzy8khKv8DCF0QABoMNjM3NDIzMTgzODA1IgxivZz%2Fu5vhkhz%2BIskq3AOcsmk3xamgfZe2DSzwZWS188JegRHmG5h%2FUXQpVbzxODUz1%2ByKQN9FTi%2BQru0cnwTYzhRrzUfzmzhG0slDWX6VEkD1hDkQTScgCV7cYwcRb2QOdi1%2FY%2FfI0JWBlzVVkOs7RUVAFlSoV9FabOmMJ2Rd%2F15JWZV1yHKHDWUOICjQz6oNZpy1Pmij9Kt19ExpW5vF3sg4aPsJv5WJ8qQ9Za3A5gNX6xrLMpj613L%2BlBPnyki2Y1AP%2BXa7wpuE%2BjDTPH7hIg7PNVa%2Bv0L2tbcdJZHu%2BuhUnr1egJweRqbYR7DROw4KWQtYpuSDljjdtERxs4758Nlr80TLbhRGNPEsDoRY0Odd3Nxgz860OMbTQGqvh%2Bn1aqh1uUoJOVQIiwxHUWd4tgOjePUK0jzaXgjyErqNHYxrlOBVasqfdjjblRMprdrShp7xAwBGj6opSyt1iS7fxJCevtDOaWVxTAHDokrNGmzgSrxrANeWNAsisLQhQtK33fyEMF2O9PLVaskwC2YV4Dyfivwgneym%2BMPn2Rqf%2BBwDe3g1x0PCea24aT1AuM%2F4wrYSd%2FzUOZl%2BuK0Tnhgrz%2BvQOWvyPerWtQ%2FIu88WHIi0ZJFusAfc%2BwX89gImz32XNSgkPnB%2FCwh37jCK06nDBjqkAbaeg%2BKztpBX7xVnT11K4rawzO1JDtXkAZT2p84A0IXIwam46YCwL%2FeVma4r0dNtyLoeCT2%2BawI7rXn%2FHLyxYDRMAeTApQg3VckUfci8RmlEwKC%2F6ajSmJMfoBBFhOsDAPcg7H%2BdgV%2B8czQbi0MNmcJ3kgDpExnhiWlKeYV4%2FjCcPATeaQrywzcz2vDUsYeuZNBuVyZ5p5tGfZn7595gWq7ltwv6&X-Amz-Signature=2f766fad3bc07b5aa0ae92409a468638846454b5fe885c7799096b6cc42bb899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
