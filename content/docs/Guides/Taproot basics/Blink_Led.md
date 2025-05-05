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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEBMRKP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu9Oj6OGObPLhqEV1jWlejGXitdj1SQOMR3CghuR6NbwIhAMKgwQuQIA7AmHWjS2RMEKwmZIHBOqIKOSVuWi4GUNprKv8DCCsQABoMNjM3NDIzMTgzODA1IgynPfDFs%2BunIb4HlVUq3AOXX73q4nn7OcrKzX8j5s0ymphIehsHKZB6vY585OLl0UqhkxUUtaoLGgHndzwz7Gx2ZWcxNPa0%2BSME%2BOt7b4dSh5RCsWx8z6IgZM8bREzrkHVrqvAN9S2xnSVXziIvaOfRu1cMFf52DSv0%2BdOroTqBnRzXLxmyRuxsjDu7fipYoiJXpDI4TTq4z3Fc7qWOnHbt4Qav5E2W03AkcbzFTUVPiCV9bWCpLBs1ut8Fl42iDfKPdqPDU9kgdO5Q8S%2Flf%2BOK8UxzVN9GTcnCJuQSrtBx7urmq895cmDhH%2BxU7300ZZYw32jAJt6wVxjNJXu1%2FDbOXrwafWkKrkro900gHEZMXZ2kF%2BPa6o%2B6sgxBlvZLmCQZ9V%2BMCQqpVUFcqGlxRVPmGXPtr%2FJMNM5my%2Fc%2BqKZRxxr80bk6I0lXc4qc9EtMKDaTID0A1jK8sdrk0gFmh%2Bfa5yZLQ5R1r2u1UCRuKMuuBtqihFhzKlInTmmZE6AHpN%2BKJVckjaX%2FB48bdxy%2F97OvNPZZ7C5YDFbCkTtUFyTeH%2FRPSuZQ4Um6viMRRFbZEOaPz3Jm5rXQ9jn6kvI8OtFwovhM17s2%2BzZnBgEt7%2BRRtzh6kmU7IXh2K0xwDS8KLvt0ShO2GahVGW6rSDCkluLABjqkAbnF%2FJoN%2FaK1rZ3grTLXtXq2b8k4tTLdVLXFIKcZ%2B4jA8gVewpYi7MBQPyRxUdMRGfa%2BEdJJc52UxfXFUlFtLkLzzGK7D4f2oo5WdhyuM3DRjU2i639EhWDoKEoeXJLXlR0xK2hf9AZxCgL3JnAbPpNOPZDu6aHikW0mJOAu75ndODEF1fpoN6dS1QNRJvb4rFV4UZUgNDe5vN9QDwzBmxQny6K6&X-Amz-Signature=6c1336d8e7e6337406b2d5bc80bc6de05e425c563ea9a9a8cc23c0cb2cec88de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QY5XXHP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFEEuFaRg4nLnfK3ZBSoRFA3XIZir2QRzDLqB6oGcyQQIhALPrxG6WTQiiZU0c7l4reKbGCkXc81eJWj1tfGuOjINLKv8DCCsQABoMNjM3NDIzMTgzODA1Igzw54hbBcJHOGtXT58q3AM8g2drCI50rpkuUCFmUKQb9H7NvZouE5o2HkWGTrQVqmV%2FwP2A9WzHrcdysXAjr8Lxv3NsBKc1To3u8R0EdvM8TOS3Un89uMfx9VKk%2Fyli6S%2F3gllsk5YBK55qyyvAW03zYU3JgD8RMpZ%2BdJy%2FdtTKDnkjt2i%2BOx33ByPEqGBYHgy6mXn71PTx2qvG5wrbXAvBMLRxgNMMMbiniDmsxti0JRdb4XijCEbftWmx0iPhAkjbGEnUMj%2B5W8vMqzr4lwyQR8LIYsfYaN7G%2BbxOsVJ5kvnDidpCtdCJ0us1R47MTB0mDXN9SRDge4yPvuof77RtnGFhIoldigspQKThFrIq0uRuQh4swgwmuuJFfaioA6zE2EQJNEx9FGBUGyFTwG9jjDincv1w46QXgIu0VOFVeSC5ze%2B2Cl8Dusl%2FmoY06khtFgqmjv9GQ0xEMW9nejRFL3bhEzh7dIrkb%2BZUhJlFlyLZLLa8bpnMpkGbFbZClIMZJuMyhcPZanb%2FCOPSWaZZYUX289%2FvKXNbHY3vAfDqZxq1gydwXEKv8uk65%2BzpAsEYjOIE%2BFmDXm2xYPfq01H1Y0MEPA%2BqhICNgICMyt0d%2Fik0qwL6%2FZ3fOJFvfQ8qP4VgtsvDu7OdNPfwBDDmleLABjqkAZSRXOBLSZ9gfAT0FO23dIzbplz2m7g8vpa74KplGMPvvrpAvYKaWa%2Bh2OsjHPCYZMjCBzscUfqZqO1%2FkxRkSs%2B2wWjZc2UdDqrCINJsq0kFUJhRpj4kTwD92xeanKGwR5MR29KlQMewCE4FobF7qkezGVCKignI33tiHyg8b5VoRuxWj7ccPwR7abPknIFQH4%2FBA%2FSvWKTwDwoD%2BOsTtmk3zMm6&X-Amz-Signature=aac4fc34f682a2c467507dabc9e366fc204dd6a1025ef1d1736ed2bcc8c9722b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
