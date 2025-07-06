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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGHQPYE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICOW%2FQp87F4vYH18kKSIQjsqscxjO703Uba48csaPn2SAiBzPXt92vkpntX1w0%2BQ8xpKd%2FAvgW2QOoPyfQx3BTdjcSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMd8fkrJ4LsKS7nRfrKtwDcxFVNknmZcJaqmXYtdj%2B0qKsjjo8hB9LbcNJ1nhbL1%2BkJOFnq%2FFaJ9eJ8bKN0I6FDiyckQZLker1jDrvfBMQDBnLlMd1P08IJt4N0Ym0EGrZMHpJdKqno3%2Bxx2LNA9KHIB7puULxWGU%2FKUwPE8S7MmWRIZyH9zvOH5sw1%2Bwjd3f5ZvRDBloxm6TBK71Y7B6G5E51E2b75WSNW8GqvfRmocv8wQCUfzjAVy8Exx%2BJmU2tQZk%2BLv4c%2F8fyx%2FC7qcSzZ5UUoVXslo%2FiYgc644WALdhvzW64tHxWVA1BLdl8FGv69NRGQ4jmR4pFiX6wEHoLn4lv8USZGwsUkj6Z6O8gvIxq7lQADv1LvKy0y%2Fiqcuy6sM6YSZ%2Fq3ROAKcRZesa2EULRgnkIYKO90ii%2B2pYUNCgWiYODNvqOdcIDefO7V8WhWwezEmHiZS3qeUMNal7XM4m2htQNNhH6hGhlR2kVsimHQs8ezrelZDLKTDRPr2MH2%2BYVxWG1TmdbUM1MsNOKZwfgSmKQiIHg9KyRRrcM8jxcxHAJYskMfqTg2H891Q5aEkkRSZRzJ68ZYlVg0SRw1b1JG%2F8BTGf6EtDcgwjl%2Bia4MEvpjxPclUIl5h%2FEJWbbAT%2Fh%2B2BTCbFKRJMwppanwwY6pgEJ25OTsG8kDfZ0YhtAP9CHH1Wm2rBMe8CfIWqYN73QdF3YGtEcMMCW%2F8K%2Fiji2w0eMDzREaA4SNWKgpMz%2F%2BkgqlfJC%2BLPjHuESkUTNXLh04SqxfOIsgdyEUVid679GKY8oXyus81wp%2FfMV9PyzPyT4g960OoKJpd1NT%2Bi1G%2BH6GA1HGqpQIj1TxxU1o4TCllPbdt3UXRSVW0sLAt%2FJSsqgzE9hXGi9&X-Amz-Signature=74a0e4cd8700aa6858b0bfc9b077e1e4d8518856eac2bfbc25d764a9f9af42a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4EXVJJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHLRDOuHgXZGK3hKD2FD8EAL1IYX7P4zRlAbaiNjwdOiAiEApiVjKliAGOM9yi4DT2W%2F%2BEEoYygm9%2FQbZ0lr89UwCmMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOUahtziMfxVwRScvircAzd%2BItb44hgsx08w5Q2%2FEfKcQA5Ckn%2F3swY4SkjFTUj0%2BviwEK%2BXpte%2B5fvgYwNUHWXvuthEdo%2Fn2E7Sa4Uqxbgjuh0hJAmq5AZxZTnGS%2F0NeTx5Fd1zqtv7KJvnGDO0McQkUHE8VqU1jR%2Fl4e3fyWpczwfn1OGuL3gfUGdbx7M29IXzhDyyhF8Jgzz93L90eE%2FUOiG3DKVBSdErraUs8awbR2rw869wX5wJHoeF4%2B6iFhc%2BsLgOlxcpJpKWLJNDoBRwDP1mGJc3eGzczxongmO9ntLPa%2FcrWIpWMvSWtLWhcaiDlBKQQUJX7zrjxMfqW7QsjJfBSCM9hwuSQdyYeBkSqgUTtaRgAG8AVc%2F9TsxfysAQJnhlfNIeCrijuCH8niwNNswdYEr%2BoF2QYkQIEPFcLNjlOCCfmEGqv6zIkmwBy4vP5gpTW7X10G9pPkNP9SRuQwzn7F1rfYzmpXhnXcMf2%2F5LQopnbrIeaNmTJwVEKupcTEHpiREV8Sx1TNdjxLpaIPsru4vKbpwmz6qokJE%2FzSQfytbKe%2BbEE2uiqBi9ewlT448MMxnc%2F7VqnsMhSx0wT7GoUqsAAhF5b1zDEiechWhQpmJ8QGigXmmCGhUs8pYgTItw%2BNYShJfgMNicp8MGOqUB1oj0cTPk2t8Xnnp9JAe3oJIQqsRcv3dqFsl0vswRR25C%2FLUCA%2BD%2B3uhzoT1uAbO%2B5HnPIVmGoZCBSs95Y53QfZoxn5sjP8hT4PPEsEsOB9bDzlDtTmnN0jxfydDyiqzia4iy2QCyLxW84xW7QPv3xSuNsZBcsd4nyel2rNrRdT8TIsLR9JxHk5LK%2B9brcz4E%2BXUrOncI6%2FgxdV3LLQYERevs57ch&X-Amz-Signature=49331ce821a70cc7267e7138d9198a6235595f30a99a6f445b623a757069e5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
