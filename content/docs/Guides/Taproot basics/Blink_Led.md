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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKENJ2ON%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD3hABiT7L8j%2Bh1iGIhcHpZ8m%2FpUfKASPGt%2BCrPRbh4vgIhAOucVlAVDJREMZdx6xhTv20JcYlMRRSpQRQMNXOO2VFgKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdY0zhsafnvpZoj6cq3AMpfv%2FOayagxLUl%2BQXO2m7DmZ%2FNiNiKR3QMdw1fZZGNnsWuugIJkqkbNYbCupSBasmmoQ2um0LLheNp3Ur6m6wFjIRpHiVkQ3V5OSXDbXF5Hb%2BX6yUveKL37EB8UhRCKCGcGCS%2BY%2Flq1zKIh4Fpyrs9de52jmxW6t%2F2YtBBUP4P3o3f7fAnpNgMt7FkU7EntLisbvme%2Bvz747GHRLhuysmYBZIE6WEUxONFWtoCYZKyxQ0vjRKxmSbvtoQwOluGdLwbceihdhfV%2FwkMviC3mTYNvZtT8xhuqdZEQUcGZVVn2BPuiLnLQtyYkOkCJzRK737xIn9SkYAKmXJlokmXfVbTrUrYWlhJ3TBL860c4frJoH9z5QO%2F%2Farw4bhaFmWfLflZ7dd5J6HuMkoyHh%2FrGDvXP2UHj%2F%2BJDXgkV9ZqRNaj5oIi%2FAKyhOcXQ%2F%2BbLenfhwdOcu3pLsob52MFH7v%2BZKprUyBOvYy5x%2BN5WvzjOBmo2J5dErLyFA6bwGUImticVuBhHWJcMIGJ5gVhveEFledTW172PJaDaTsBabV%2FIAvFvmAGYRhqifbQ8csQH4ItUNRuzcjeKr4XzghVMyF%2BFZXRP1OFIaw%2Bi3V4nKbkR5ZmpqeU02JO%2F0PaNWASADDE3MbABjqkAUWPDNAg%2BXZIozAoPRVKS%2BTkJhlWTzP%2F9RRtGETKB7AB0BNur92dX4o3a7eVflMEpB83avd4nzP3vHESsfKT9OlF1kITJOGXq%2FXe1Us34HCScdbbGgWBFC7iXs46Pk%2BojIdbjMEnGV7JOi3kLPvQk5Jv6JiWefdrzBxC3M6UorpPYoulTLcZXAw%2FmkWbyuJps73neWkG%2BUa3PRPdE5rPHqrvo9uS&X-Amz-Signature=b43dc5b11bdef58561d55b87dddd2abe473f88a3fd30403da512d816cafd6057&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD5QORS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBroVnKcLh%2Flii1OYjbVv0HqXop2NFuUchBcQWu3YLQPAiAfj9Wuqn0c7dwUpxcBKX7FC62UUW2XwbY0EqBO85QHliqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqnhiLieNo7PetCb%2BKtwDscPR3631sHfo8%2FtfJdK85NcfR3xDCIeerYvDMilqgTd6ufs6LN7uLyqgbuPbxT1u2fp5wadtBVUwQCun%2B2lDar%2F8zZDSWRQNqPLc%2FKvYq5IhwWAzJre6NUIbH%2BJH40xXXYFsqeBW%2Fr0yy%2BPGjsYF9Vgt%2Bq%2BVM0eRxVvPducp2rrRcbWC7XTUYLVK%2BTXwTcoktoJR%2FWP6czubnpsjIko4Lc9R2YNcw5gaNL0PBBFAO%2FYiLcNPdMDmcp9qoEP%2F5Ak1%2F%2Ffo%2BuUiSa6SGxUopAjY%2BMLHQUFtUAlUGtroGV8fHaNsMumtj6MDraIqiF%2Bj5ZGHHZmJp8%2Fl%2BU5O6YdUwnaHL%2BsFGKQcGxwgkhEjOwHZgOWuIa5gO7Dww0HE7HsVGaqtyFT3PRyG2Oje9cHjz8N8o0x1g9zNVXy52f1a6gxAE%2BvpEu2QnP%2BCZnBiUpZhflBENpMvjKjCKF2zmS%2FQa4bH5taKZ9Ac6KJL%2Bfc31pmqy2XVZ11C7swDFLPf7BjpWCM2cfPoQP9AIa7Bwt0ReE7mEnfZ02mxvRl7n4DT9IBOgjgyTcPKhZP%2FSthHKBGx8yxsqhgGNGnasD2GUAJxte2A95NRld6Q2XvqpIZXIOl90KYFVZxZ179D3vaC2NkwktzGwAY6pgExJQzIdkYsme1dtRH7jyCKWB%2B3ZQx0ivzlxLqdfBk8beMWhIAXpRY9zOUsBiBH%2BgiCq2n3SW9cm4Yi0iIGCU51IKY%2BJeR4DxQ0P794vEZJR5wp03soPnxhTCoa9PVCQwQgK%2BNxzFkd3RAaxgPAYBfCIhkcwlO5A3kB55yo4OSK7X50F%2FqS2RKhIUpDYN%2BpSI2lRycK8yaFil2fvi70OLAL4TQXzLxN&X-Amz-Signature=2bf6bba19ff8bf4699848abda72046ffbd6e5c863dbf5cb02ad8ed14b0157a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
