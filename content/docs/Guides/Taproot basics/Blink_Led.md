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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQW2WTB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIAXSSFWJaeTEngZAdlBt68FiMbdCb6950mCF9PQTRMhTAiEAiXob6AXFh1ltfNxoB1gYamSViD3HQw%2FN5YE4sCEDQugqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWcHop0cfjzOaTNwyrcA3LmeprvF%2FfFh22JPqhxGoWM4siN2wq4IazLNx%2FYMvrEzqy3eD4kf9%2BlSCRklwE4orEh8%2Fkb%2F7ZgzybD8J2eiptT%2BJAVocWjK5fS%2BB0n%2FfR5rjcXJi3lw1wBJsEkUHKUNzoe8gvkZN3g%2BZCAl680RYz10%2BxoZ2zie43PGJsPdoSMKxGKQy9YkoOTwRlSM%2FLFzPHYQ6miFUPsUVhVXagiYir23U3JOcWy6BxdWO4OBKhGJ783m4vFDNrQDnqhGQErvK33SE%2FXiX6diFidNHMO2ZQyR5%2Bkg48q90XA2pfg30NgeQJLVOARgouNhGyT1pwWRpcXcLYFGtnHdWXvnpJ3eBlZMbUSicCFmbarZIxpJEXQjf17Pm8HYR5DXJh%2BUxZvBEvcg9Pg89bO8OKkiJSbk6hPuylw8m%2BATy98Evmph%2B9hvbEpdAAXqEQ%2BdA36TD4xs9iA5IX9r0yekOaO%2FIILOAZni4o%2BFaPMgVF6kuZi3WaJiJ4HwOoms%2BGTV7DFR7GjAgIgJqdnhWxnKSCcBpV9hd6C3PDQkQmBkULt8%2BcmvkO2qdDcPZZVNdp8mUmYv7KXJ8niuprlYQHDmzIvUz2OZWd3kr6g6E%2F5yB5tXexC7bVXq5mP4KoZx3xZf4jDMID0zsAGOqUBQmpDhmIa536DdoByxiU%2F8cQ7xjx18TvzW3jFfMYTtYRWBjh1SB%2BOrSSvgylV8HCg7Z4okV2qi7%2FNjT%2FZCPaRvud0GcjwTc2K%2Byiv9oXmXDLpAAl9TX8WEX%2F1JOEPPypB2VbFCF4z3A7jSCpenU35%2BjzMBmewfx%2FQcPcnvpC9KxhW97fLV%2FT%2BwlxRKWRyPglmHGElOkT2Tszux9T3R3JpTZRUOrcV&X-Amz-Signature=ccbea41ec9a278f118d638a92b63ade38379ad60de7fd45b0162cf62533cf163&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TJC2NCQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIH3UDwoGsEtU3rOCYOsnfC35DrKzWgmPQ1k9LuPBr%2FReAiB4Jufn2ObxR4F2k1moT4jiyZZc01tI%2FLVqL6iDB0434SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsS079a7jjlsyg7x9KtwDG%2FCaL5OCZPknBU8mHP4VJAFh1p4sEbNrlbHYthKbihYms1BsqdpP%2FpNUrm6PJ3cTm766FsFncnvwiTmAhJBoCVeqmZDXVKs4DmTOwsaWDIV%2FOxwS83%2Be5oQUUe5uzRo1%2BWuT9RTb29D6kYv6JlmGFDS2cNSG2FbyY5WBGpz1oF5m%2BKWO8x9S1%2FVRtCZU%2BWiWSGPUS1%2B%2Bj1EBwVzSgrxvCPu2iR0O9UVRS6mBeJafIYtopX6o%2FcTVX5SWA6u5lN7L5SbXsyPE9TDZiJj4GQ00CtGtowKutz76IA0HXXvQE6vGcLoX6MmqFfmz3iKgxPT2kgxhTeN0MfFn1brMd4p7p%2B5hdgxjNdjVdCQycYFLvt0txAqzsfOI8m9uU5Kaz63E09SA5nhCoYQZJVAH4v4utY7sQXNmuvkWP2CZLRrwZmCxt6eQf%2B1K2Wkr8VDDaqaY4nFSpIjXYVRQhWCmkHjCNzO0kNyuEWPWwcYFJBT53QolVTy85fQFPNPn4gZLyRq37p%2B6X6Kp6eBdsa38fo1iajTuxBNvKFRpAOaX9dYBldb5X62EoWjACw%2B%2B8yQyOjIF6%2F%2F7d6ubpRmDCZDr9xRGWN%2BSxV1yJFNqB4J7O0HZp6H5qKwcr%2FiqsgRmzxIwkPTOwAY6pgF9ZMVYIglRCAK9mf8%2Bfq52ecl2mi5vrPrwAfxv3uOAWW6YSo%2FfOKK31x6oFBiwKR61M2dpOEZ%2B1lH%2B2gJh%2Br0ClsfLXxGQe5K%2FdS%2FoWokTsLUKPK%2BkInobGJyyARZp8v74xHHxsX1mPeSmJJSxYOR9YiItqbWRZ1ecAtwJqN%2BDl%2BCnrBVCqhneeynrWja5XvgF280qoNJEFbj6qADkL3%2F9t%2BIZbarM&X-Amz-Signature=8c4bcd7f56137bbf5a881b9c2362a17a8daeabd0ce0a292499bcea83eb375062&X-Amz-SignedHeaders=host&x-id=GetObject)

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
