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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQT5LBRS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjJPD1Vxy9RkaQniA1DCkos1USiH1p20PdkKsjXeNoEAiEAnm3p2MJz6WCHxlXrWQXuWNWW073qo3%2Fo3%2FWrzp1vb%2BgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLQ5qbyalCACNw7sSrcAwS%2BlipWu6v2d7HH8qu1PqzWQJUqe8HXlaMaUWYInMh7FiWIO5RN2nJWtXYBX0zSlYT0fR%2FTi4SwkyCxhPWDg7OiXK1rTvlZaiikYXlvcvZpKqWZOhfZbHQIMpq05n4efMLnoOoqLyCc4y6oshw4BHmbLGv5nInCqZNLkMwLD3wIzPWQGnJNsNYPW1YKHU3aHiEmiX3YR3LZXvSHBfTCVbdjgOqL%2BFU%2BnLLBB97NPAyLMtGuXSbg9RHVr0x7REzir7Sg4Glv3%2FoVrw71MPE33hSQuJ5qc5FPSc%2F92sKMWPj%2BNRRitMszIdIphZYP12GWcX%2B3Tgyv902Ct6488yidSiw11PvbMRb3XmKWPZmlebydG11D7HmDRSlp5xfXGkOi4Z2faEFUZIV6dNrXlhFqX2QTjmhbe4fJ4WDcZnmIrzHsitF27z66BcipaM%2B22VqmUVcgoCR9LM7VzuQpoJi5ydymeIj3JZf%2Bpb2HXet6Y3S5AxamqDKidcXfkJEnhR67LdrR7%2BvacH%2B1ZrxexHBZJyzxMusjUUvs4Ixsl6jnkeq2L4QreXTNGdwpf2kteXl1XQaamAyFX48GCRHuUTEqVe82kC%2B8390lhMJhyedffTsPf8N3p1mqKo8fizfxMPil97wGOqUBjyAnnvbRveVY1dCtley9Xu2W0GyX2RfIuK2HhY8k8%2FIU9znytlNM0IiSoyuohr%2Fb88i0RBI8JV9vDLa6y%2B%2BIiAyzbHDq4QX4GnmA3wK1facGZILt%2BQP8zgd7nPpWYOhergOcs7oUVg9vG955QN%2F78K3e1opdks7NkuxqrV3G0S9kCcx9OATTQxx%2F907hd%2FxmcQMGfbnL3WtX8D5FrUkj3p5n5Szs&X-Amz-Signature=b45944526c34cd2e08de369a941026f9567962d436e5f06747864647b998761c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJHQSWT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBF7jrb9h3zX3iIq6vKiTNEe9QdJBd%2BRl7Be%2Bgu9M87UAiA7DQdTcaaCacd%2FiVybkaN%2BZbDN3cSN7BRy24ysYrMTLCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nT7vTntWVvCGgoJKtwDDmHEBfJ2Jcdlw8O2Qh1w2zjmYHDl7Ypqidh4nHckIaZzBIWBdgjkhI6V6X0L5SoTOhxGgGndKcUZrpXPDQKOPTUnsRVv41j8y%2FnxRfjx1x3Rk2kZrduS9u855WDWgn%2FIdAzb8J3ABSsDpPK5EaF1W9wkzM%2FQkXlo6iEcoUm2WD65%2BEeboaDLUTHtqPgLm9QlkR8kYnVZ0%2FxHN%2BIU3jp2zNrfKra51TvASzu6NiK5VcSQP9cb477gQJO9p5tZCgI%2BmPOyRshqOAgT2C8GgF7gzl0Y%2Bq2uT4kFPHtWiRLrI7wgkFoPBwoHrksVSY%2Bxf%2BTvC6kbYs%2FQBUF9jrYfp63VdrCJld6JskSh93PEHFfRMnuwzx9OeqMdPSUWhT4dL8d7JpqFu%2B4XB4BPhh2AUfsArOQdzKTFQkzGHcZFv98aXXPhxq57OvKLSyvE87Gd%2BH5qwc48jH3DT6dls1DizPjJdHsRhpNGuJTN1QmvbrZcDdQVBu8jDjRc9prGkcOrWsZ2XKAVMlNKNI8CDOrbdE5pMbkpNCCBxt5YEuXOE3R1KjVXaO8%2Fe%2BBrHy89KY0R4ZC0krX7PMh%2FMjq7RcmJr4EY3MX%2Fz4YcF5jFUIF0j8rW%2FJOueypuhkawzM2f%2FGEwn6b3vAY6pgF%2Bo5wrEu9Gu88XBqwNGdI0nqImu7T6TqrPmc%2BpdEbwrfSGJLAWWh3gs7119nCILhpd5HExfycttKcxKXGfddnX0XEL6s8%2BZxBcBN7F9bntcF5RFnNyeIo3Zd%2FG%2BN4xzzxKQ1T88rYY4yZaxvfcFIxXf76KV9kCARLf2POC%2BUbNo6I3zWfo3QlACfUSuHWqkR2jBDhWsKYzYfiu9mVz1uj6SmAP%2BO%2B9&X-Amz-Signature=3c7ec22ad78157ab6ecf415186d788e63a40820815e9d3409e9f7062c6a8fb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
