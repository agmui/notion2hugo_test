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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKYQQFD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwIGgn%2FpE6olhPgXIgto%2FzqmHZ4MbzdwR70jr%2Fylnv4gIgfVsqGEHXmpcaaWP4Ga%2FI4IhQEHxUJ0HzRLUg1cV%2FjHUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAD3u%2F5MBLtPFiA4qSrcA3PXMYZzFWYT1mKhqTAkqnWNw3m8zZ5MkE6BcfBwiAVcYO0NIrhKUSVM7AYkPJuS4yQS5fA9iSc4CfvGK%2FC5vAzezbLMB5xGk3cXV8i8td%2FL7feTcVo0sley%2B94FV0TAbsAX%2FXDAa92AehJ4vd3RtdWSMC7v1olSenyQOElBvTFjTAvhwyQBSL13c1eScDLTQvhfspmsWU77VN4pgWrs5Sb9Hbbt9xczzJp6qx01IeBvzpTsr1iElJnX2zeNhwcZ3ij87JdtuyAFZU72SAo%2BHNOhLLAgc3U9KKMq3ik7pdZbI6Ig%2FtnUaMpSztcDfNauHsmHSYFZdXPKzxO%2Fm5qPE0ElE9wOgV7y5gYpga3PH9jJFlq%2Fqtv7UaoC1QxUwznFrOToVKr13Zf2nSjVVSPeabmM%2B97u1%2BMUPVu9LnVy2r2unNgNNUmdiV027AcqtqlH%2BdY0tbK5DgpYkkHFB1QgjQk%2FJXbJKKpuVLRYfHMqblqH6sWgXo6hCMCa8Wodp%2FNO1QkkvzRmPNlp01hbNCrx5Mio52P3ud3tlDpk6WCd9cxfZ1VPRMmPKAsla712x3axjpJEe53VP77byxgVSz3WamQ%2BojXr1MwhPzF73RrGAwoWKD2bem%2FzMnklizp3MKuv18EGOqUBL7h6mjG5Vz%2FIOW%2F3UBMpqGCs7DElkbrd2e%2FAPNC5qDv6qj%2BPQ1RYerOAlHxg9NFPfuZbX0SO04Lu0ZHJ1wSbEbZW5CYOH9sxXd6ZN9o1Iwr%2F2e54eo8W93veY66%2BmnUHn%2B4vIyxbbqWHxCe6lEaR6pu2L4YWZ3XbwI%2Bpvd8isE%2B7Os%2BRnHJi37YVIKN4RM96fDuBBimoeevnMZNUc5JH4pgQkcXl&X-Amz-Signature=082fc34605f8427fd3f9a1aa64404f89507b6eaa3bb46264825c8860b1e615af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKWCTLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaUY00Iag8g%2Fe52edTF8COxzpiDNFwXSc0ql1Y6k1uQwIhAPeBSU5GAhi5nzc1CaHKYMrpHFG0jk%2FMA6etCcPR%2B7HcKv8DCF8QABoMNjM3NDIzMTgzODA1IgwYByHVDg80yUlYln0q3APAI%2BA5RG%2BASTNlCAQ3XP9Z0zX%2BifUALsyw7L7PFq7RstFbwY01B3pym6BGXR9rxf%2BtiuER0h1sUIj1ysC9mjHbGaLiqH0EgrZ6D0pXFzvhuz03RJE3B0JiR5ArhbDri6Gakn2xQ9Pd9ST4XX8td0P5%2FOAlmAdlPZFHNKBt8LBbRhCZdJIEByB3%2BmG5b970SIY0XnkvEfue5ii7aKnGTxHJ8IIG4B4lGLRnlgHAIACcRMW8kl%2B7acILA7HTh4DSM2n%2B4H%2F1bncBq4WeEtGOfFlxj93PcrFzhUGqvk0bS6AMCW8aic9hEWit0EolbLubj2wi%2F03791bDjNlRU7%2F%2FPcog6MI6X%2F9KjyFaIrNtRLguxJr%2FFDTMITKFxZXz5UDZMKsiiB3D%2FNX7FyRRyWs2vJ3YEq%2FHbCRBVBXfTUcDZeVtMDNqFzmfdNX25Ps7Frk7wEmklDdpX7X7GWSRGtUx9cNxkzUDKbkdMFU%2FV%2BeduJrWxXZwtPvirQdhClYyzw5csGXH%2BkilCOr2gnb8jbPw7X%2FWvyFrx78ZKpgga7QlYCNyF1KyXJ5%2BgR%2B9Ev5NDtABMbSrI4oNZsV3PyNrRBPcrDYWe9j1YMouA6Q0pPL%2BkE65XER1ZgWcvQu1AUuhkDCW%2FdbBBjqkASdKQhMZNQ5Jd27Jn%2B0Rdh6x9650fTiDd%2BRolG33QIOVYd4dTleqaY7IPn709VMMS%2F%2F4cWOE3HI6HgNNvZFzVIYTL0%2B6Wc4iDz3%2FC2pdQRrW9FrqsqG13fAbQ5IR7p%2F3c3UaWcGVeENI%2FP16XelD3m46Yau38Tn9TFYN0uGz2ocHENjrcIzxa9f%2FtKnQ8zoe5iPtVn%2FwDBIQtFQJfOCpLCw34G9H&X-Amz-Signature=d990c138a7b67d675bcbf166d131330efd0947eacecccf053a44da53597f9fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
