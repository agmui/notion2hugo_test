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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBPQEHR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVhovaMKShHw8Yn%2FLNot3oQMtLf%2FdtBpC%2FqG9iNAY17AiEA29ixFOeCTkOepzgf45bQuUQCwPuRKsglXf7JsawBpa4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy4HlSukm79W6vLZCrcA28280UTI31lLlQlXGccEA2tqvxniAADa%2B3490U2ojWINn7saBP3guZ9mc8xUn9k67qOZEkQ3QZtLJuB6yBjMPB3ycs4vW5W7JqXxJGJfXEOAFpu%2BbmIrUxv524BMfrpa8pOigPffMfGr2ShHl7XeMT62atOJTo%2FNLL7NalNXnvKoQEOZTM09xJimIpS7ZEeZdlmubTpcHXeMlExPoJJbfFxHSGWhF8vYzp0GVsKPAk0odLsK8YtrlSdJjC8FMqRjJwcw5frsGP%2BJQjaRyiQeQ3J81BRxbw38n1AKm6FEtxfZAlo6oSKVWF2e6ujAwj7n97EuuwwfEEPbXOLZ3ugPDQ%2BjCSKkVYhu9BY1VfZYpdDtrI%2Bf457yNDqLBudAleWd5J6GI8IHw8l51ddUQyTV4cyvyrgPse9%2B99d7dJTQRRWxp7aqSbJ8Tol80suLBW6hHsehzzY2A3E5%2Bgv4pYOfip%2BHMll8eJX7xzQKo3GzWSK8SkTNSi7AUih%2B2jP%2BtFt7x3GS7m2tIXvXN013kDhN3eEHUZVT1zJ%2BJwnwQDelU0iacNs1fK%2B7NW%2FujqxQ0o3nNZD%2BdmpGIyLcTiQT7tmllhgkmKOzxiqV%2FVoAnQ8l2cu35V6lEPPZs1zql3yMKzziMMGOqUB4r8%2F%2BaW%2BBH7OaiTQPrW4XffgovnubXRU3kYm%2BSKxz46X62QtTN6ZdXexkEt2C2dqUtH%2ByI%2BEg2QAJAHuB4q7WLN%2FtgNP85HuXMymKFYFVoSfKfqEXymJlthuG4dby6RWYrjFdoV5MQO7GDv5WWJ%2FG3mbVSwrCcmThBIGXhGVRRs%2FNNZTga0M6tj6xSONWzaLBJDd08feuX1wKXqx4SQ1cg4jxJ9x&X-Amz-Signature=e95d2b4da97d9e67fee7034a61c147f46151d1d8bd331017f6ebfc19dcf5ae70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXPQ2JV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf8H0n0RFtsD5vSX6UbcWpJlfHCJ4z9RykXYo4CLGHUAiEAw2RQZpuQwzrVjpUKQ7wu3%2Bf74dCRstMdWafLqecuYjcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjMyKtjCvpZi7DUgircA%2FJCvvJ5LbV8cc2H7ozrKynU%2FRlbvPSQcwlfi2jkxl78DRvSAGFTXsf9cVAL9clRA9AxkRPkixfK%2Bydsu9JLtM5UCR7%2F43HzZBVcIZsbpEGTC1ClD9NqWHdxTNHXr9P%2F576T5dfvYflz71kBmq%2Fgi%2B67of9LRr1QNCc%2FfOEtU%2Bcwl7lJyXcXeVxg%2FpGTLj%2FNdf6Bo1lsFrje85x0d%2BFyCyJpi6dMWlzBFZDLC5k9sVY4NAzZaJSJiKuq7mAXOZIMEl4mCLT66zSfiANbWKYIpmIiMsafNUIIfd4a9nTs%2BY5qGwJ%2FFfS%2Bg7rGZYPnLWoRUod%2BbqPOKlvD1Bh0Y1s%2B0xo%2FH%2BnMIVJPj4dtoIlEdO7GCM5bpCc8x1NDt3J8AhABrVfHQzP%2F3I7obyMQgIaLzcObGI5RlZN9rW3lcrZ%2BV3yUJhftX9YRy%2Fn8PdPg4qpuvmA9w7%2Fim5bVVE25IZbqu6rIAd%2BFYRHG3C8zIY%2FpwXHktyLweggwFslno3rAncV1Y2dsr4mfKqfOxBiiYGH2So3zvkSGjFPiJ%2B6yeXFxz0snSUVsCwixvLfURWNO2mQrbqxfysK5R8V9p8lvBgXZM6zVAPu6RqfjWQ2XX4lTMUUZMIvEuMItBxhkbQ%2BAMMLziMMGOqUBhJWT4915GOXhdOmn%2BRVMkbmHDSLm%2BiIKEc0UQu7qXZR3iBl5tZ8y6Tsq%2Bjm%2BKlPV5QW3W2kh%2FY%2Fb7dB0LZYL5BuEByQ%2Fpf6jr24%2F7fgWC4BZt69Anh1zjpf3hgK6MBQ4c51wqSaisqQKf8%2FBgJA6aZHegm8l95MZp6%2B7%2FILfIYiIBqoBxa8WhH1hftToHdeiZqWuXRiRHFQrTzaQSgG8zEHGVceR&X-Amz-Signature=956af3e079779c373c1e1495d0d98c35d7faef536a0254dbefa138fe8d56497b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
