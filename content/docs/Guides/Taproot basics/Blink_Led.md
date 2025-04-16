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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFGBR2Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8jWK2GBL8ji%2F0SU5GK0jLwITBDCGTXzVTEqpvdgHAzAIhAIt25f4xqiIyZXnXP%2FVjTute%2FcBFOvGCzNiUJ9Wg8iBsKv8DCD0QABoMNjM3NDIzMTgzODA1IgxPky1fI7ECpr%2FUR%2Fsq3AMm0YezpNKPrKUF%2Fk9K46eLDWobHC%2F2tEUJbzCl2BTeBx0J%2BZ%2FQKu10sO1AErsyPcWPkr3zqAElV%2BL%2Fp038jQzkT%2FPLUdPA1Xa1F2h1psqpCupHdBrHAfyNlVY49qlbDwDZETIKMYEDWEYCOhwKNFFlrzrvrEi2GBL1LSSRSw%2BPIYPMFOUSZPml1nGnfnfgP6fmBk4JgjCvig21jKGU4aZCW75eBnR2ywrqUy%2F%2BbSGQvX9xpwhV03AXPW7yHrA%2F4dKr7BwVnXvJ9v%2B5Q%2B7TNOMyZJEvEq3euf88np4UynrNX7HJh2WNAI%2FOW3e%2BVgksE0XUn2bduMDT72rDf%2BYNjbZYD%2Bxau89aShnS9TN1QkhCkcCSwy6CG5lB8GRF82%2B%2FBH7w%2BlodehsLs3Me8fAsedLis06VWWv0h%2F2c9%2B5KFbXzpGXZhplukYxWR0E9YT3zs3qMzKMwJJc%2BVthhPzpVLX2s5v9KBywBP5VwtA%2FUt6Hw05uN6eDSmGCJbMYJJax1nlT68wG41nl%2FfHAPs7VJviKtfc2WQvWySP%2FYQvsGlQJvCigBxJS5I77BqejOj7vwZ%2BqNJ4oGA8TLwlpSSraLzcuYJrF3%2FChjGf%2F9ukHdpwClfyO2mRutExY0IhGnpzDO1vy%2FBjqkAXogwvwBIuqLLEHtegYSl6sBfLz9niTQWTW2zVmCCQp8%2BXNRe8%2BRuCGRvw9bNd5ns0ICBK0eW310uAj9FKpWHMvHtBz%2FfdvbSt8SqIPizw6l1NRIOcvyvO3bSCkJPU61koZNi5njmISTFJsfQCkAxHrrR4SEJspYnDBZzYW%2FtVBw7iOxU3d25Hu4euM3s8nbZgU9yCd5NCONvu6SGztE7nH5f70Q&X-Amz-Signature=8c50804aa360f79e9c140c159707acb823003aa9ebdfdce04dfdd51948f08421&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43TS5A5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFnVr9P3LakDHYICQq6jSlQ4UdQANYu%2BwnF6CrlPnh3AIgNXvEi7WCDcmToI1L5PSL9CXanGcbaWHxfFRlSOkt7ecq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDjwc2wtQ0Pdl5sUSircA4Ll05oStqpuOBVYsWfrJWed2ne3tBVZXj8g65Ss4pnQaGzfiYAxSYKZwARC7tapvskjNzlN7JiwzyuOIbtEiMgvkQf6gKK1887emV5kkcOibZhURxUPqoPn197yaarRup93JSXYtPVdp2hzwCRzyP8dcWB3Qmmg8O3gVyKNQR1u%2FzL5xfIyGaU8yMk6aJk6TGT5PKIRYLYFLi4G%2BNjjX5ayq2Eswd%2FKxAV1Q7%2FWxTpOW0sGM0G8mBGt0%2F%2Fez98Sinv5mTzaKF%2BkS4wAcQD6wO%2BN6oVgaV7JUaLQ7ycBYCUPMvUGFjnuC6fNZZyyXF6O%2BUNt3klGkvNPobyW504jfvH5sSj9EXS1uvOHwwwrDqtnkU%2F9cPsg60DY3qyp6MEgWf5MH1Up6N%2FCjZMGfZGdPKHUD%2FdCz9Q%2F7WiaDQv7bQBUrHN2L1bIwGvKnAXYWT%2Bj3KHprRW%2FIbY472MbgkyzJRxhCswis9cxG7%2B%2FnMDyRGiGY%2Fj8hJjZWvYtcgcr7jd9tE%2BMwq7g14zYvOyN1DNgZ52DryCZoX4NDlzRC%2Fg0XVJvY3r0PO1cOoy9u1ZZO52iIOU6DUmIEeHjdrcn4kPqeTmYgZW4h6m26eFSDCoYg58iYE87D3cFnQ%2FKZa1wMIDW%2FL8GOqUBlM%2FCSKkLVmPzV2g%2BnAMnp3LH6ZXdvpT3jG%2BKIAJxfDeJG4SIEZY8b913aHJGa0Qa5Qmfn5JScw%2FuLG7w0JkG4I19Pvf%2FEgsn7lKTQpe2%2FG1earIQtQ11B6sUsbJtia9HTWbIR4UQjZF1tOrXr%2FZ%2BMrcD1%2BqOlsExPvo5sW4yyZrhWRFdWAobF6Ys4sA2mUp29RtdPdHyr43c%2BAHP6EgT7UpsPwpl&X-Amz-Signature=9dab172d6648cb18754a6ae0767618710f3ebc1f0c5deccf45641558639fd861&X-Amz-SignedHeaders=host&x-id=GetObject)

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
