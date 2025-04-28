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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFVGC6K%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnHUmUXb5pMnBfAY2J9IoRpz9SPFyJOHFjmNF6tUKH9AiAOLA7aDmYFYmiVCLwx77V64zl3dF%2BI8rCQ5u6%2BIxmZRSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMyDzNthd%2FrlYHKwxKtwDQetNoOrASNiVbndWKpll5M568CEKgn0udGwYz4CctXgaq030an6yZ%2BqEc8NlIszl2dIqml%2FzgkIWSPXxdjn7%2FQ3TJAlqJPkj8c%2BMz%2BCrUQG3QMkDWhfU7NsIe8lVfuOCQTq1ebDnLgi1FKjqPmR0IjQoTftohJHzSbvykYHIef%2BwEfBBwrpbXpfbN2iMwoBzSnkcI4YENbPl3JJhZYnZsC1%2B59JSEp1NDJSWUKxj0KtPIYw6OAT%2BbJgm1Ayb22h5YM0Ro8KmQzAq2fRSmUHuP7AtsbYVxBFexkgNKFwteKo8VeD1Qo4jiWKxpSl%2F%2FJr%2BAKti1CZ3RuJfn086Jru76IA4RINflM7UpKdOoKCp%2FTZcE3uom2k7DTzNjvA%2BYyR6SJdWtLOPJujFtpfoxouRQ9gFpzRsnS5fZ40KxDgpasP7rpf0eae8HjPUtlb65fUpOajGnVso3tknMuI%2FtvOmjsJrlfS2tHYpITvMME6Ths4I5pWi9PqfgymgeOfyGDkUVOMVo423KG2PdU0iRghfKCdT5nKVahN%2FmpO%2FuCsgMF8nYpzTs2fl66zhxyDVjGu9om1Lzb0%2B3dsuoV8Dbn90ssuadPoU6Htd6FwhNcM6L35UWCWoPvua0hfahZcw5J2%2BwAY6pgHf1cqYSEfRfFL9vx89KPa39EYv6STIzXTz%2BXMQ0gf3Aj9ARRU4nL4zbLhpRHwZo9kB%2B7sT%2Fv5Ji0mxMZiaZESZ%2Fmwl9ifO2ZYGl1MhetjmH7Ugb6db%2BQ%2B%2B1AqycHK3FsG1VF9PO2GwddzQ9ZmN2sBYMyl%2BSGGUerJTnaqdjbLIuCtQ0kQFccofq06Iip8YldNoWL289NBSy34H8qbmB7HeiX3Zhb6s&X-Amz-Signature=a298beee9246b3c9a83279ccf85520f5af34da74e64dfe316d16487482047786&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SVWO2U%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcT9V1j0un4C8J%2BjGiugYOaByqCB5sDRhSabva2cP8zgIhAIUvWb6UEDEltsl2Y%2BFlqXh911U%2BgDAGVcePtir61bz3Kv8DCHcQABoMNjM3NDIzMTgzODA1IgynW0l2NTnx8pP%2BRboq3AMXjyChNw0Nnx2USB4Su9CaS5mtEi%2Fe6waxmiVLs7ywaDlZjM4AF421q6v38EFmAkU04YVD6fSq7tUu1JONN2AY5CUuF1TZAiOfuwH8J%2FPKcMKlefYiLIKomroUuMZzARiUXIbz2sVDNxtrwt2XeIRR%2B3nYeVaGgsKpd7ze%2FybOGq8vZ4OevdVa5Af5eP0q32hPFU5Md60dVa5dP42rVQnRuYYMjh7YNkYc%2Bg%2Bhbb9pr89EOtAVChR5z0lPAg7K36pSoteQ8gpoaIALccFUoUB31jlN%2BCeNmi%2B%2FWYpsgF3U7CkUm%2FaRXL46DXgs6mlEni9%2BOIg0nSGlKbW9XIdANYFn5W0oAOax4LvdJXnnKg2M7S0LtwwILbOkTE%2F9fGts8rDLWlC6usSE9wfWzQbqq%2Fp0TseGFY8LaLA5WVzdGF5d1qroxFQUEN9orfIWYmNRjICBEouuDscd8228kp%2F1bBmk2QOb2dfO12rH7h8NL%2B%2FgCtBM18nqijAMgrhHSOTrsOh2I0FYEZuBTM8JQ4FdOiq8LKf%2BaEj9GtDC2WFTmd83jp6HOfSLeB826G%2BXpb%2FqaxFRwpvFb11unzJkX%2FYrk94MgssSySLu1I5AkyyY8zsphitWYyNxfjcobg3fXTDDnr7ABjqkAflE6ZWBxMveEy4KtbeokLcSlKxDeqRQFayYZ8CwpTxn8L01Tqzv0Splm5Y4djuyM1zTYEDu8t7nXYLhq8cjsB3fXTRQWiDE3R%2F58uNxcT%2FbNxVPlsu%2BHI7ncjByWhC0WUesSaiSdjFqMdfXR0QbiRuf8txVnnWNggPZvj9QEXur7vYXZ%2F6Uczy29fPFETKGjzjXkzD3ZRj04l0XjHLf3ePLSZIb&X-Amz-Signature=61e7447987812333e4ecf09a189ba98f19b1ae73e523b0638949aa94bc63a6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
