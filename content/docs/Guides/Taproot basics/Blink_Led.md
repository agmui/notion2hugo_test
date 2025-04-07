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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HVWQJL5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJx0gIO8V8EJDg%2BimWbB2r7mmVB8jAYAyP7I1exB88fgIgCzogv4ZQYjd%2FVR9yT5TaeqlMFlpm5UhLZdwY1s4%2BCIYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDceXWT4E5voy7v19SrcA3YHnwYhlE6xoN9aq3W24txaJTTUpZ6RJpkIJPqr6dmG4StqZu1M7%2FOfdinkR5hsdmWxMtzCxlSUjDPylfNsS1qRx8lqFIAAoHw9hG%2BJBpbzVsORmD5YgA1%2BiLGNKBXIzIIE3XW6sENjeA0u4Vff7tlegDJ2fz6VcB4iIxLArMJhzwH78tK6dV6iBBEHpTp%2FqTsHkJ8UOj9OOegsuMO%2Bniv%2BbRr10DhRTBLZXO2Brf8r5gzRM01F6VdGV18rZ7aHL31nsn%2B3R0T68SpWhSndDjiHvVQlVSn02d1SoEQEmdOmNVLqFZz70buiYx3I%2BOyPVYEnkYu5EbNZWidu6u7Jy21Shpwq4M1qc3LSnXg%2Fi4r%2FaO%2FmEn9Plxnl1QoitdV32v3pi%2BPbgwabEekPyG5cpgyvb2aEJxYTHwjDEGG4FPz8rm1K%2B3S9ckNSsZqHTM8b9jd5ijw1JQn%2BNUJOTnRDAPWjAns%2FdO5sxKsgNuWTXLQIuyrrCrWWyEzUkzhVMXluVETEd5ZolsBAQu4ByY%2FoND7uKKid0ilMkPFRKNVXcTRIW5iePayK233jyMGe70ewTcT28%2FO811tjV6GY9F1RCbLO9aYpKf3xz5dM%2Fvl1KLrB0OzZ3RFay7%2FmLYrdMJ%2FpzL8GOqUBuR8C89kzxjL%2FmqPYG8W6uUjpDNphEjLjWJhgz%2FddizeAKgOoXOffcIpVZY%2F2h6cEpDis%2FDh8ndbnXp%2FBSU8SlcFKh8RSW9JDygpBThQUeR28LLa3JvUtfiVGdvIhoDCCkjpMIk4U1flso9OYJ6y6G0owfKfclfFI51%2FRHCFIsvqslbcWVTId%2BLk6YG8%2F4s%2BkadzW2vRgSNX0WQWDqH7dDovViE%2BF&X-Amz-Signature=8324deb58f9d248939e6461e11e1d8e408107b7951b102a6b84bf63f0b587658&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMFYL6Z%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAzDL7FhJFh0yYGFTY7LG8jSE5Xml%2FsAN638f7b7vjRwIhAMaYuMGn2AjGhSrrXWvBpAxGnj2qvOXWl9L7MK0KQu9EKv8DCFMQABoMNjM3NDIzMTgzODA1Igyp47N0obYuQuMlRmQq3AOhN%2Bf%2FloO5LGawg%2FI0ZnAQ%2B5YxNHgiNUK6SO%2FmOB4G7iXs3LjBGHb4di73vtaSfnUHt4k2hhTupI1Q2gYkacdtNujgEqK8ef7ur5K58BRwUtMFqrLZ%2FjrnLBcSnRuwjczoyHiUlbO23LVgbmkWt6Sp8nDlpf3Rj3pM2r5wuZTa0S1fBZtTimFsoitwefmXLs%2BkCZgNwxhrd%2FN597OfmiskhpJMraQvCZp2U4p5F9X1CI7H9SGaMSptwS0m5rDt11aFXiNF8dWq8rPyQIEq60WBsVH9TOHXuphr7eZaSzyKaZNZuYel2cXikizJ4jaFKncrJy8ZN9ufetT13voLtonHYBVjt998aU%2BT53%2FZ%2BygXeNd8jeStVPwQSk72Dedhfz8kcMOEWkqHDeEFEnL5%2Btb0IHkZ9oDXIC9Af2%2BamZp%2BJwUjfDE4qmZkOGSEFNwQSI39yercknbRmuqWWcKrc31zUCBfZ1zM802Y9OSAs0HAs8WdLuUEmSFFDSiLPuAz6D%2BiuUIP4q8ltGW%2BsiE2BYgWrlx2RYfAxdAVmTlU%2BOiCWyhdxya9Fzx5%2FonGDSey7xVGRp73v2ZxQB1CL40KzrwPY8LSQRSbXkJigy3%2B%2BexL%2F7vwlsXOWUpyHdslEDCx6cy%2FBjqkASdXronWGMqB3bSXXES2PgX11JDHRtaIIKcCHaUAMVmu0PzVcqN8xTTm%2F1w6yhRoQJiTdK9AGQ%2F50d2YqN0qIroBFQf1T1SYCO7fXxbaA6KvvUPY54tstliturjDm%2BFRQ3yZ6xBlLjXvXxT8zWrUxdIRuVmfsqJ5KYeKYRigmN8bCvl7BCS0Swd79q7Fp%2F593nSXL1PRm4e5qFQo73XDNVZccrui&X-Amz-Signature=d2d862051bbe3caa2c4cdbf322e5f57f264c04f88e01f8a75d070e0b87c6f876&X-Amz-SignedHeaders=host&x-id=GetObject)

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
