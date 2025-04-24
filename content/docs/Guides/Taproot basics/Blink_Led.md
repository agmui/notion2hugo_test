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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2XJE7C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrgcB1zQ3WS6PE24C1mLnI4fUo7SRFNxBQW%2FJBG3DtfAiEAy5bEsHQaM9C2Jk91vb2oZO46WHpieYoqGPn%2FeeACtp8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKQUZwdeFcjei6cZCrcA%2FuEWpBQyiSCFY2g3c0t%2FU6%2BvVcaCJqzzkPymF%2FA1y009%2BhkWKaZjJOP9uW7Qne%2ByT1Lt2q3zvsTN9BquMZTmb9Y6LTs4G74jVlYQsd8JNha0ZD%2FJtS6v8bAMFDaggqk9KzKcwn%2FPNuNXnh5%2B8wQ8dwqFgSxC11ceceXxudfwBbXQPPklbqb2nkCpEtA%2FdeSEgTtMathp58IQRpa%2FpuT4YnxpWjnDoXDYtAK0GDmFdsmt7v4l0uYerXe1ABn3tmx%2F8tczGQn0rqL4n54K0D9BJYe1OHvvoVJ5WyOostErzXHOwqFvmblmRcB%2FG9ogzdCNiD60ycLPAc0eAU0JwPsBR5t4d4bTU7tPmEcr664abeP7oL8mQfj5v%2B%2FAlFIkR4VkGT8E5%2BxN0uQHlLNv886WlPDTdammXjEFFl1GFRvi1nPyXD1xsiGWvgJZCaZ5uwT2oP6gt5niBwpOJUjU4Jvl5kYziTt2T2NZZdcgyE1AHg8AjEEPgA729KDcL0BDYmiQeRVBh8bSofo80A5FXIGUQYTrBvO%2BGMP9U6HrR3ucFJEJDuqSy1LJdvyddqVA7auZ77bMLsFG2V1GOAWFlV9vtKpTnhxLArrTwiOwt5y13UJxOAMZqpT%2BeRrnNJDMKyAp8AGOqUBAHWv0gnEzOVv4vuifWteka1pGFiST%2FLUn%2BYVJRspiqdkC%2FpSnmG6kpfwLOBo86Djj5DMBm8sKG3CYMNdRUdchlwk7cfmOV8z0uWJ5gRDh6yL52vrgAFXpk5NeDfXuTh3cqdqEXe7n1hCYChbibIec3ULGPUdFucHklmvdoCIWL3yxVCd4qbxRZvK%2BODhIKtdliSEeqysjB0gGAFrnKsyruJcQu5g&X-Amz-Signature=4fbc71272d737886157cb738c2b75b0d1798eafb0f9f960ba485e9fafc16827f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLD3P7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD3h3BX%2FodA7ncMSaUsnj1s0FBZR5whBhZVQV4zewVgaAIhAKUtJdLseX3h2sjQZA46Qe4djWl63FIhVM3Z6rPtTAQQKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrbBzuM6pMZHooPpAq3AP06ht1932SQwOVsMbJngbt1d5kHT29ZYeMw3e%2BKLE0DDKYdIweJQsorMgCjAo3YQm%2Blyoorwz%2F1sLLa49AI%2FkGp7yl1FDVjRLOR3Sfyokc33rcELtJAGPzcOyFGvM6d3YzyzIPFhKO0ehm6%2B%2Bi%2FUWjJTO7q%2Bnn%2Bj0x82rkmYlSR1N2xxVcvkdwczoUqoi6TuoVUQxqIa78%2BiRi9l9ntobYpYGoYSlbBOafUxspxdqDSSo%2BvKvOJhtMQAWPOjbQKjZ9p5MM9ir0cfLDTGEBcXXjV7V6%2BBjwAuGDXDWHPhGVRM1HqESUYWrkmvEIbdSE0%2B8cRdnqccOx089N0h3TIQ%2BCg6KO2p2wWb8Oujw4ISBUDwsv8tkCvhIYoiTBKC%2BuMCOjJrTuVSjloorjODrrUvvZUcoaMklCZgYxQld99EPnxfUfC9olgDQrZa0zytN4fwmXn5KTLDifnE8iIjZM6sxK%2F1Q3gqMx8hKhT1qFdP1eNn0DLMLUla8MNwo4Z3LJ3oy1mDCUO0XVNgOZcqIaZYQQOdJcUWZF7BNXfRuVBaCuyON3dP2ryQaeHYqPFtrHOL6HiO85Ktxk268Az3q%2BzuizZOkYBDS9u67%2FMw3jIOySlRBd438bfVXEEk9cnTDD%2F6bABjqkAZz0UwNBpvjJx1yrMO63jQwnLcuLqQSZCVt0JBfxBb9xr0x3GZRiHB1Lf7aPzAGZMd5IdhihRyRDD7XWYn3xamDIyBYefS36We770vSHZOINYHUovjFnFhR%2FGZISgyvQN7i5JUpchjINQ4vZq3hR2p9wHqhOZOQ4G7XIPuTzGGKunW%2BwJFn1e3NiaCK5y%2BXA7kovJZCkCiqTxKBohG56zXVhEF0%2F&X-Amz-Signature=d62880861d5ac7853bb9dc75a5ac51acae5cd15bd3a242b178425815fdca60a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
