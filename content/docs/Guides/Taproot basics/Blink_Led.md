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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBFMWBX4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrDENZt2a6Rj1T7PPalwqFvN1wZX%2BvBgtVjl%2FXF%2BCG7AiEA4w%2FNSj9YD8NUxaZCUTujZARDoTyRUwSRSkM%2Fg5OUSksqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd3HpYiaSsUNSgfKyrcA3177P66%2FPRbR2NrRc4qKeCzERzM5qc8YM62mzvC%2BycBZVo3bcO1U2Lwo7l2m7%2FPbSmsAYgdEik9xbjCJnxDmilgDEAoaBhYOc9JXsJH1S7bRSlGv1cEPf8nAKVseT3dX82zItZVkPnN2kFLq9tTL8PEU52YR67kcaf0FLENmmPgHkoXlT85QnEft%2B1vTyjiwFf%2BR8aWCIWvHp%2BpxmD0zvsI4w4cy4JMv7%2BVV7WOAMZ0v0N78EfjiS7eNIXP%2BL8d9BL3nVwb2pUGCHWeg9X%2BNMB%2BAE3eR7G1KsozKIIz2BGJje61hoFI6BII7EOMAghTBv6kpX9nMELJ8QzT%2FJl5zCETrXXTNDpg6djg6SyxmmaLwTfqr0PqhhDipOrGSkPAoC3Bw%2FmjSWix6ATAdKhFNl6y9dm9tNPP8DXtmkvq%2FzJ5uZI9nPwCGdUlXhqGxHy8EbATXjF3Yw%2FMbTUmWerkAXbtOKApfDRJpGp9dL7NoxhtxhrTtBQJROggrt9ythmae4GlE%2FSwpCBXnvsmJGrlaauPrHsxmy0UUh%2Bj3kEAD9nSFk0Q3EMaNM89x8C3RO1i5qw4GByY0aFAGk70yPSbvtKXXf31hxxFlpbJGB%2FEmnk4Qcly7AR2xd0zZMx%2FMJ33y74GOqUBLF7VHuUcf6RFyftAffpCOBB18Ujv0kEoy9b5kEzbSFDrNTU11U%2FXNteh%2FB1WNRfQXamnLfekvrfQG%2Foya%2BHc4LW4rCMV7BMxKKm6CD5W0DMjKAs6hMwfUaysczOSQTkD6PDuKFcfn%2FqEqB5tPLdk%2F9iV00qyDpHATvw%2FjORGkYcjof%2FI%2BLlSBTOw5QbFjiU5HodctueceGyNVm7avFb0hJJwO00K&X-Amz-Signature=79ef7511a30ef29db4bd7baf004aa362a1810b9667d830f0f3e674f277f9acf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD72LAF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLyXTtYq%2Bh3%2F0ECCGC%2FzeQFOrLZgbwLSLpR2z2N%2BSR2AIgSWv8b542fHDgavIo9PZGpHJqfg90Na5%2BvWPXzL3l4ZEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODdjXU66FqdN2AwUyrcA1ZkUlNPhpf3HsW11z1M8B1%2BSImzqiNnmyRdmiyOa%2FA3ykMW5NLsR0LzwE6scsM4v8Ml0hVeftns5NGt7zkt%2F12ag3%2Fqrj2DH%2BScrNT109sdg1YtthmCmMJwyeyo09kzGWIO3EsRAEVXHTFX04p0HjoroG7vp0NXD14stT73Zx3H9vbMxnuFMNvl%2F0uF1hppyYe6t8k6VV40gQbGQBFjPfG2jb29NIG86nB8WUQP7PfvKUDPJ6Ulm7WWKmWPFEvYRB8Fd6nNABBIYTE1kcDDI3y9pgVxsgdcqZzp%2BHzF37kP7jkhg%2FfV6rUfd7d3KkB1aWCPJW8kAbmNfxBD4UNClORkebv03NmDCi4JriaxeCH%2BbibZiiEAS%2BIvCOT3tiYUL9Lyx2hbJB26m4PWjdIeDZdqNNrPConsNsc4biMd%2FO9ShU9epFayfHXxfh06NIZZQMgP9LHaodJZ6WBltmHr3v%2B8LbOHFJOscPavAiXeDJmVdm8%2BLauMXPqFBSktyTnioo%2B9Z3Uamhq%2BDkUqXarZfrxNTxLNAFQxE9IKs782XDo1ozB8FMfvBeiPscHSwfkZx9y3WMP2uZteJzXvYC11kzF0O6%2BXU69mh2zUNnJCacjE9aUF5zaEZc56d1juMO2AzL4GOqUBXvCHm4Cq%2B5nLG4netUEM7Csu3yZba%2BKhIOwoBJCSf0Wd39HkZDi4QcLwGAn%2B5%2BkCaX5v4Htq9VjYqodckr47UubUftoOC6G9O%2BXbNRAtoUuTg3b%2FL%2Bk%2BItRcfiOs%2F2kK4l2xaqqKbN6VprB8uvC5lXkAI%2BPPPKSpOstedDex%2FLG3T4jtsJR5NP1bqxfSpN1%2F0S4eg5DeWnWulheO7EVTtZJ2wg5F&X-Amz-Signature=5d8b1a9fc7fc0fbda3be484e1be59bca9a84d006b983836edcaf947dd8119457&X-Amz-SignedHeaders=host&x-id=GetObject)

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
