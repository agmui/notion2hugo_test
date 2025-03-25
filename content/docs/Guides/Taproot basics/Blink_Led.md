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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3TJDH2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrMb1rFLWayDnz2MEm6EQLB6QYPDLmpMP8SXfRhnix3AiEAwVU%2BXa6jiRFWQA6dhtn%2B5dYw03%2FFo8W%2Fn2Vyr9QPbtAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDExtBq4lbSyP0r794SrcA34V%2FvbQoCdoIp1xS8IbNTxC6QTDq2OyvNhK9GZ92iGidVhCOM1JjTdichg0FtUnLFqqZJRVOsQnJ1m1K29PbaeXcpubOsf3AYFczkf9M%2Fu11HZCqCdABAGYw1edzXGN6aN19IQJv2Q78%2BiAfYFvA2QA8g18iVJO5OJi41UkVeOcZaYEQr7wZb1%2FAaofahDMYOVxe0u37jctW5n4lwJv2WabUl5v9xSDwRzxfUHxQ7IxNtKyjZpw5quS%2B6fSL5Q2ybLHQlIwkjCh0Py91R1mR%2FyEUR0h15qY1WBMxyvUSQ95FkMGXbJv%2FYAOHD9Dzsk7KZzzZvC9jiEgsvAXtqAVErYdOq62Mo%2FhP0mCZzXyOkuqg5%2FkNkqMFk4w6mFt0P1bFuX86vtvddomRYeiO8aSwnlKZH1Iq%2BQyBjMzBuDmolIHUGZm1WSnOUSW1ZteMjNvERanb3na5%2FrjQGZ8T9Gem7OBgpUCNTlXa%2BXkWaHGZ4DoGMWSkgJVg6IIIC9rt7aD7iDLl9%2FMefq5oqFvtKjeTBCbkZeV3IQnxmplexQGzEV4dIQgAwm2kzlnCtcWb7mMrNx8r29je4lqNiQaGsuhlGDKF2%2BJ05K2yAssHvBkCL%2B%2BVXLKM7PPUogv15frMOSYjL8GOqUBniOIVgG0DVx8Xqv1I7SWhMW9LnZM3XTbSQmcD1Z%2BpDrltQgwhIuauzigiIUuJTZp0xNbflnQKQ6Bt7USOnDqWurNl72US1gqNuOGLTGDbOtXhqDIWg%2Fva3468l30rEQkgZ21QiAGDqylQ3EW99sS2rFrRy%2B7XXPRYP9eXup7jBz3nlRRdG9EVJ9kqmQIEpDI2o8O7ELFuaQiI%2BHIat8%2F8g95Wlxf&X-Amz-Signature=cb950ef757cee6a6ebc576ad81464e2a9dc492eaba254b9e868dc878bf4f54c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHQ7ZCD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh41FVf7WAGMDYJWvXhtnv1rTIU1ngxj4aEj3a4OdzwwIhAInlytZG8JJtUkdP3orY4fQiX696YONYEnDN7wfytuz3Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxiznpPBAXK0dl5bJsq3AM7UWHpBsqq6H8HAQrinqQbGAdxzShwRT46rNvCQaeTrC1UpSc7HsknyKoMVoSqLpWKVwQIzNcA0Non69qPmZGunMEPhdh94AJC9Ts90grQ35gjLVJmljwQTmsUUhwnbtef6s1wVBoeoIJWAV4w%2B0u7NAqdRsQrAilNCN%2Bv635USyx6Tq9m%2FS2AuB6bFxn6rzbN2Aqn2u9Esrg58kyRTbQSzieh28VZANOcDWRlDl9aosTd83P6%2B0zgUW1viCSvgPkJUY9xqoLWcXAWK2ThtlfkxWVMU5C00qbTdEr3UXci4WJe1hYsZDaFTmc1G8fUC8wyWM0aCASk0egEqM6%2Bi9dWCMVjhOv5Kd3A8le9fdoKrQimTipGDG%2BZFfEUJx%2FQkui9Q8r3hPX6cVscQYhsITEhz3nMg05U7VMhp0EYTgtVZnGqjSvI9kwreY%2FZCDNdgmVcIW%2BfO%2FQX7AO%2FQ529kGLE4EpPvXBpU0IRl%2BO0MDvKvWZ3PARoBxChfhdzCn1AKLCJQDr6jMDLKkWMQ2HPBJL37ndGyddvKFqd84ShXk9by%2FruTuBTvJjw37QFfw5yqymcFUYlzq0ruNNskr3Q4HxrsxOtVS7mlh5m%2BDMNz9mmxAK0eOXeUxyT8A2O6DD1l4y%2FBjqkAeCdZTabVQ7ZH1byZrBhSwm9DriLV%2FN8InVRAh6%2FCrQ%2FmwgTy121elb%2BuVcEdrVoB2vW%2BH79azyVcGB3FqloZxbmdFVetkkTDbcgxYHQbAvZ9ujpX0lRUNakfJYxIlJdmdoVIAWrdi2T6H3foyFTIfpSyHlupWYLPrSaxhmgcmKTaim%2Fh0WJPw5vUXB1dQAcXup2sGKYt1WSggPGLNrUsl%2FCRgWR&X-Amz-Signature=76a1bc4864d7906345d39f7e57a8939e92169a4e315c6f9fa6bf02db5322f6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
