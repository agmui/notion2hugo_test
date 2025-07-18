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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHPK6SKW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFaYM%2BJV16fprMOxGZT5Bw2G3iweQ5HtblrWHqmXnQxEAiB9QxqfpKPJNEibE6mmyI1D2LRZXPMS3tEQf9YrBI0Y7SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMFVxdLsNOpr2HcuKtwD54yJjPdGy7wKN%2BlaogwVyP1AQTXl9rttb1U7u9VbJ0%2FrsNB2f6rmxP2Y%2FoLlwXQWf%2BOz531PZKIahJxOnGSP3QPn1RHiG60XA7%2BgVDCOSzmNtEzDk5cvJCGp8ntY54yAtoWm1MXam6XYDUFOFQ1ae2OuB2o%2Bg%2BR90IIZle5Wwo3Egzd5ctqwisjHrNOt79ZgqWGQO6nBEkGdWyHLYiXcOtcx%2Bq8WPS4PXIrNY0pf4wDOLNeU8d%2Ffq0jEVnmMn0ECzzDQoV%2FutFu4%2Bpihv%2FbrAigzoAeXjUmhgs7%2FH3W9MgIjyS17pLuLYpaGDuXbmuUkIleAGgoytZY0yExXRAS%2BkZiYA1Jb9IfBrmAlTd3O1oVzvVf0yyJmPGH9BAEf1EHUfrlq7XIaMPxW4XlXjvxMO%2B8kiHE1lNtDBU4JGtykru9gkkJzO8lwH4CqlIZU9Uve48OSXpD0JwZk7BYn1dmCwxP49kBxm4%2Fmix%2FWeqFfd6fId5E99pPnPRCQZSjs8KfHRtKJj8nv%2FbBLU5U8cuB5%2FOtig0XT0DZIW4bX6yE%2B54CivLSotD%2BR2lH9xqL8uTiGVlUIydLf1v8jICKQrVpjW%2BTLvnnqv8P%2FWFkNyIbqQwGFvuvWA2ocqgCGdN0w05nqwwY6pgE4DSZlAbLvN2pjy93bSNqkeRVsWLjCDTQWDixwcQxmvFUHc%2FEBhRoG0EMDwgWjZI45bC7JFRPd65CgMkl9PE7wCUE8jMdBrDSVBHCgckvanVXIVhRKkwFs58whdJ65eYiyLUEfIlP0Za%2BFksZ98fLO3IKaL8Dhdt3pS8IRv7hyBcW8n%2FpTc3sRfVgkPQM7K4xg2XPJ%2F24WdpGfN%2FQ2ZQ33AZ6ooxOC&X-Amz-Signature=e545297291da41652a4675c0017e7db1d61adf7827dfed571c130b5ed5e1511d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAU4QN5L%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDPFuNP8qOLTz%2BYv%2BuRkxj%2B40mf3MlsyTlSwWpd2csfxQIhAIJ1JiMT706KXE6K0whHwfuFCeNTOqlHbm%2B8hVQSsjXnKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsT1zgUTr92fbOP6Uq3ANY0CuuIlSleP%2BJmdIlRgNbqEglbYcwbyX0H%2F%2BtCKs%2BWsKjVMF75QIgnErJ7lhqZLe4eLbRAZq5QeXkgPUgMRO2J3I3IKgP8HfmRcUqx7S3AQYDAGCoo5mfWphTkrYZLxRqwzHTzR3%2BqxQ911w46rwUfXzRptjxrj6ZrL%2FpcwZrMOqb7qLEGqA2N4foZwjoygmNYuk5mIdb5vhw25RjjAQOajw8ntaBn9pJIZL4qYYdZOs%2F7qohdKPf9%2BMGlSYsGdOUP%2FLg7TJQ%2BuuCXWRXaWEpmmDvT%2BfFSScop1pud4k3aNo8Frdii07iRqYlg%2B3a38d0vYvHeKvL1SlLSJI3NWOkTv1PdKm4Dy8Z7Sg4VDW8slXZLxAkQbSkXVxgSC%2BghczrhA8DqnRf8wX2Gwn9tydWHhUcABHCKjdUigQ2KFQvqog0sFTvCwYTi%2BTr175nNVYIxhFtwUOylfjFZoIZw%2B8EYvYJj%2FuNXXLJTXZxNeq%2Bp7GFPMO3mIMnwds14OoZpRrGLukH048c76B9%2FPkESxu1e5TYV7JDTJ0FW9H2%2BpmfXJIzSuKjkgYbWsgGUZ3ppIxIBZnvsM1CKL7WNKaYj1CLHJvm8%2BM8HRu10CKUSK%2FIiQqtLQitNLaqCEt%2FMjDxmerDBjqkAbGH26X4z53V7gLu%2BL8ueyhuFvb0DDj4bO6rcJrPyhfH6WUfEvyJWYG1qF0O8OICCqXBgDFIWdrV8RkaQrmqdj4O3V40xVdoGMoGIFySr3U09ZEKzAtwvLmV8sf3c0MmlQmsCRRj02CVm9WbdmaDGDK0E%2FO5bjBhspsF2C%2F9D9SWv63u6VAEspS4xWCYOgddN7GuixSQ0qKLCtaEU03OKqgE654H&X-Amz-Signature=48f46a1be76a564e64a964977c17f2da19c834ac977d26466330a47ee50f60ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
