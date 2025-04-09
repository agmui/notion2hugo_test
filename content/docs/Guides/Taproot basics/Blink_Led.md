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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBJ7RSX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHvVqCazzHnyG6MYfWkthQcg4stNnZTXaZcM1VKnOWAhAiEAr2PiLN5c8HTEIWYl%2B6BZJl1typ47DCJDW%2Frjr255HNoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3b67VQiJE3QhyxrCrcA%2B4Gihlnk3ex7VSHq99g9j1gKY7QOfatRj7OUU0%2BCwP3w6wXQoftu1dBzd6ytkQI%2BQ0Y0gPc8TP3IDXXaGR39tJay5zE9AFUN%2BVu3s%2FgPhe5mLRdnBTY7PiNEsGwiywbZzuqMNi%2FVqBKbQCkHqASqhjZ27Xg58TugaCgSvRW6CnELind0jgon07gQ6CA8xx5Q52rMGH%2FG%2BYwQjhqKB5oMhGg8A3xsEyGvHr%2Fr6n5NlD6LPF0TdcN%2B%2BRRiuEmpJM1TdOnCV63W1rBRUeHKQ179rbrRpYlMHkrz2iNW5j07p6bGLLBJ9uQQqSs%2FXrdikBuILR5cw3Lq3xb0WmUypbCKTE1tcxhx2lyDmHUMQUg9%2Fe8r1Il%2BPp7xsCKcWqYGlkBJ47uck01Pz1aYE8nc0G3P8tA%2BoLWzXADKUdp%2FeW2U9Kb3fMM5VAb9IYHh2Uegr7KKESTwlYhdSyx78dNEIQNZj6qrBLahomqZVA6Zux8iGdWOWxx9MpSZ4VAi3%2B0ghu7QAKyLmG3dJqPkiYPWBBX9KS9CqXrQRdCdeyrGTiEpelQgez5TKp7HPgUCmZuJanEEpJOPJutvq7YiiHHEcvGJpfosBk0IsaRNfRQWA%2FpHjL59kPSz6R7%2FwCCyy6lMMyX2b8GOqUB16wnrfJV5YwuMFJM7vxb8J46Uu9N8%2BMQScDZB2YDmO9FW5KqIQk32q4iMlC1xRA3iRSKGfmp404E1ozlIxu%2B3qteCTxpT4WLgF6GuYZbCTiE13oSdU%2FReyOtTLNup5dUlZU4Ew3a2cZAqWqV31Dtf3%2BE9aJgrQDQP3JFHn4AlHg73xmvFO%2FjDNMTz5QF2dU6LsWS2IaEU7bIrwAP9V9AEPWNvjQK&X-Amz-Signature=f198ba8fe81421a9aaa7ba1bedee4f02d989d24872017cd62321139062cb61db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNBEYBI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzt5q%2FqQHh9DVww%2BjHbGuQQ0rw7hx7IC%2BGxbLQcTqvRAIhAMzEg7%2BboVlYJGjQh4ppBsxQA8pi6ZBLUHEJAF4o9mipKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYXTTa%2BLI0LOey6Yoq3AMuKNHAtaaRyP1z8wehYoRYqj%2Fmuquc%2FcZ0osGJfaLktDsFnEOvQ4Q0h0A1tTVzKFh%2BGnC2oo0RgJyQplI%2BSeftowWk0VSKsc%2FlvRdu68D1UZHGyXhtrxsuSEzu6Di9k%2FCe%2FCLkKiGL4e%2FsPxB5vmHSzXEb25tWesnUEzqsrqRUZpl0LsAYKsyxlJ8dK%2FmJbmvM3mJe7QFdpZRahjgip4K%2BK1RJnUSMYqtHQ3HTX9kiyWC6fPV6G0oVT0OjZX%2Bam7y%2BCYWBBKP9633fnovHld5TvZYrwwEnC6aWKtvGFisTO%2BRdzQF%2FoyHI93bw%2B3W7nBNKff9V1%2F%2FRfGn%2Bwjo3BvWJmD20VgG%2BvAD1aJjtBCNB3q9yvgYpUYmg9ZC64i41grI5Pe1fTQlLLEkm9kPg7HmhL9rgDc7EjYKDHH107nbN8vvjXqq9ldhCycml%2BiyVTE%2BgGcDh0T81uidemfivcGZbSDeFgcvhYHUSuxDjqKmtWCN2Yu3Gkt1GAnjK8knB9kiVY17NwNU8%2Fgo6jGd4kfKkXKI7kdqaamaiQfsaE7npj17xQogOv%2F%2FJU0C982Prs%2FcqviYLGjFPE7VractjeP%2Fbkj4um3WS4aXLrbOnz6luJXVbbkUncHs%2Fm2HH%2BTDUl9m%2FBjqkAYYayDr8tL%2BLasQAkLWYqI97BqsL%2FPcbmGyRXzPez1ftcLdYmlqMs4r3NVdszSCwWLftANqg6Y%2B6DbIOEF62cyzJAvWWqfUiQLoLFlv0iBG4eF%2BZKah%2BDP0XKNlBukMiydTJxkStOFch%2FPN51B5dx4UbnZbbaPp7%2BLnMEW0iyNHKizRGGk8g9Co9JATtnSGOh%2BfzzkQj2n3MFJel02hTqzvnzaYK&X-Amz-Signature=bfb9919a40122adea4aafd8a37140b91c01e52542845ec381b0d12c8eb641509&X-Amz-SignedHeaders=host&x-id=GetObject)

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
