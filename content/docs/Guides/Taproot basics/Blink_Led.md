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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I7RFGW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCkoYB7YNUEMLRINC7%2FRarL9PK4fzpdr%2B%2F6Xe3Gx5bneQIgQNhnDizpiF27lSlmiB4ldluXN9QYMiVeLUVO6%2BGqQtgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBMfGjqKswcBUYvlTCrcAwn4wZQn5YeGXkPUQxC53a5faHmRGN44to%2FOT1NHhNkc%2FB7vsdxiRbRmcf1x4vWfgUMCmCINs0duZrBoR7BeIQF1pgAxqSmBG5yH8Y9zhb0%2Bd7rQdCsMNWbG8Jk1PPeUe4HA2UVVviKuM7031hdfNqO%2BKFL5CDFAYVsB3rnG0%2FlAdm9fi69Jif8xGKe%2Fr639H1ImHhTH4ydEzq16YfW9Crp%2Bu0aRr%2F9kQ6gb0UIPBz4OTYELTrErwJkl3fqu3dnwF0X9pqg2nXvWXPFdrWkLw%2B7seB3EsDNISoTLJA9cMTFQp%2FFiyLhDsEXQYPZRRAAjpmPN6j8Tw5NylOuPbJbH6HT1ovxTBTC0ACgZ4piFVD4qQzhX1UTYp7rA2iAK%2BCHieGqckbW7f4FXX4wq7CLt9mytvEmgYtsHXQ0J6K%2F4O1bVWmmnAiEFz3uJIuA%2BWPwHzHNeJyco6YT7PhdysU%2FvKX5PQw80LVDan5hZ%2FRWqwTdMooBlazxQ3gQYOMHY0W9Wg%2FmouoKk6zys4PtN48U%2FYxNwxZgbAFnrSSVKaVBU7gxggoOwxIVkMExENlXtT10Pmwi%2BNV0bzNTbIDpQujnQCwc8WUiY6GSC5Lsrvc7N3mz0E1Pwt9VMCBkBqfUaMNTrtL4GOqUBPJAuc5jBrj4C7%2BIgOI%2F4E9Ww%2BWDZb10oQ35j%2Fk3EUJxDIHgoiqixWSaKMHnl4CAdY3L7IWQGzQbfdSlSIRLVyU3QTQ0Ewhbd1cQ%2Blg38zxUh2G%2BUTj8ZxmHIGlZ6k6gCtR4X4VpyVKB2b3J7swYMHOh5esq%2FyjA%2FB3q0qmto3LFNd%2F8GWVcxznCx65SPfabrs8AYoTPQbgeewdeBQfRxZRxUihjk&X-Amz-Signature=c25583c7b737860fc5fa1cfd1e62901cfb8db13b28d79e8aa687e2b5ede6921c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7CV6JQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC%2BRkVX9TFDAOS7yt%2FhkXxPZDD0T9x0RLNzEyw%2FkonGZQIgBWePHnjdc5DFYM0Bz2NVQzWbFxTdB1%2FJDNCHdDQv4igq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKIUCW8CyCiucJyh8SrcAw2cfyMk6S9PswIQIT208VZrbuamM1StLHGYkgBGayA%2FqGyVA4VjdyhWjZWejhBeVBkTNcUj6cHpmodrXHLOYicZKiExzDgA5xk5rWsM3QNiU3ccyw8mxcRmL908TrffUpM8ZKRP81iPz0SPJYjQ%2BuOibFEo2kRVxpaEOjNHxqGb3em%2BNFvZ%2BPFDEzK1uIGt7QN19tFNP4VMLrjaJO2DY3KzYfVhWQtD%2FMat9s5oodU6bZhF6oyZYWL9UUHu9UqZENl%2B6g515%2BXLYTfOHbZD5uf2IgZy%2FnYX1TlullW2ZmY8nXgYyumuj7VzE6BjblAnoydKiDlUw0%2Ffs6BRfQ2hNSi%2BblbZqYvJmGZhboe1l7QqxowDYcMvVVDyQ09WKZucTOf83lSKEu4OM34tn6DoGIIJcWjNfWUJhACPbrkIbKwqctNd5%2FQ%2FEp1srEG7I9xs59YEI7nHMvQh6JxRsCN97TJdyKhnann3XR%2Fuu%2F%2FeStvBZWDasDPAEJZzQF8VokHwvvG5HK4oPD86qdw3vlCz%2BKLcM1O3ucX3yCPyEXxAiD%2Fip9QFza2hD3aCwfTDCk3gUd8XFeD74FwtUFxnmyS90H2Z%2Bef9pNmh59gyp5sIN1lvmCfzmg4yRo%2BXybM2MLHrtL4GOqUBRDgJx9b6SIO3mpONLMjFhIQvBTcIweL%2BkfxXiDeieIUI7LI%2BmZ1Xn4Z78%2B%2Fb91eomSUMDmV5FjwG9JxWQV%2Fz9PPVAVm1n2iNuCRObNp%2FQiU7ZNXAh2dDnZznnVg%2F0x7SNmv00i%2BYhwKARseBtSYVZXWaPM%2B6Z2gNdsHAgieDMG%2B5ZfEIhiqS60kkUwgwta7Fl%2BAI7GTbT9kqnbxXMc7DIjnt9AYx&X-Amz-Signature=494bf9178ee712974ea9a6b3fc5343337a076229aec3c6badb466c7821b3aa2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
