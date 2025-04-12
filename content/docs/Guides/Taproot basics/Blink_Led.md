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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7VTZUNA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICIg2z4CUT7kVSNFpXJbJJA99g4NxxJt5drBGERlxwQtAiEAyyeDTnX0i0TDKnJkT9AjtcjGq8MtEa5lzB6WOWUWLRsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs%2BL4zojS%2Fti%2Fa8YSrcA0pqRU7Vd09wcGjX0uOK3s6k7mPn7WQJQvsFMHaliXjkLzqzMX%2FNI87rmxyTlXb2%2FL6LS91gUDaGnsVS6AC%2BM1ghABIMZrT7rExwtyDlHWHI1sBkMrwEJoqWMTmOAmx95VrgSgL6BvpBmbQtRS8uIVsxJqdN5x91mXcQTVKJCFdSt0L5Tc6aaoclf8aGY2O7of17nInMPepLQnjNTfI2EiLxh1nI4xjtznqQITVZG5ACqWJe%2Bs2Vv5dyANHc7zOVQlQk1LAFBSazoJdEd4xWx5q0XhxnHGjM%2BnmbhmzSN%2BsvsCQW7dAk2%2FUo17t9r6hhtKkip6FJFLP%2F%2BuQ%2FEzngtZWf0fVYZBvRthlXeZ8WLtNHb4uM2Sa4KdJ6ELhwvFJEWr5k0kJNLgbbD6t57crqQjnuLUyDUIqwHwB2uIC2vc8yIJ4wgZ5YKjWuYw54p4LS4iGQwyam7obzorph6I9AdlJH2V5U30JdWyOcHOpX%2FojPYT1TTI1r71irXBXn181JqsYRClzBCH3YRszl8if0PO0svxvhqcmdFVWoiqNiJM2hBcB3eGiy1j5aA0DGo3289eI7O31W2VzN%2FsZWFmachvO9lq%2FwcZV%2FnnwiqAl%2B9ZFVGKkze03peGj9KzWZMI6o6L8GOqUB6wG9xQLrU1dEk26wCu9737jeijEsxOS3LDPkVcMoSdxMjmlvc5mlnA%2BvCsclMirncNd3%2F5NThVi8s%2F%2BFTgxExzNnUVsWV9vcpDsCHfXuFB2wl92WHs0r%2Bwc%2F3VetQrJjOgMlcLbHjrRfrTmZzfaHGL7R%2F0SyNcqc1bW8%2Br3zIkdEfdkULhZig%2ForURubS8uoy5EDVz9gFwHabYfZkee2jZT3s2XW&X-Amz-Signature=6f69783c3fdbccea227fc7dbc28f50716e43757a6a095cb599ee0251f12ca8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGPAB7L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEn8sH%2FVla4q5ies8zv%2BUGu38qr4PIdOT3fB7Y8wUiYnAiEA3r1Y8Mw72qbZa0Ijn3a2EH3myk6rdYOavaHe1b2jkZYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWpL28pcOgsLHup9CrcA9yO8KXeodvK4%2FyvSat69KAkzDYo6lWS57sKVZ6CC35GKq6MyLdLYmHpSSq1f1%2B89eyKBm4RpmlE9UONFsd0YpHlpVGKaO%2FFz4hmbVMtVxFsAJ3QutcU7UEWoGgrSyWQTRvYS1merTooPocjdCtU0touHYghO7yeGpzsOthNPiqL1LLFmXs6ekowuI699sLpOwEBbYZmsSlrPrllfwCqpScGT6h06H9dshSLBs85Oqb4ZJgCvkf%2BFbdw6%2BI14gV9pobkiM3%2Bxsfq2A24zZmpVpsuQKC0uy5SXHsDX2hWeAy%2FxUBFoHhDCm4BodDl5EPKsaP3VhHh1%2BaiHrt2cUhpbTDBOBNFFDcqGVamlSLyWVV%2BuFAc7Af72U%2F5q8tNQ%2FwhDCcm8Zo4YX5WiFlygdL68h8%2B7PXlQnLOigXV3nDXhXbAuMTC0hZ0e8e9sPQVNXA11mFgKbBu1ubdeCH8KmayK%2BMeJyVjpXYjkrnYH5y1V2cT6uv40q25DWEbPtGTE3hmQyK1LIYDnIvY%2BqcZBRDNpUnfHxwnLnPZyp%2B%2Fiqnx63EU90MjoNpbKPX0ZFsgB9HXvBHyw0zJyM%2BnbuK8q2gzSudl5FaRMnFjKznK7CuS9UoH%2FW4q%2BP0VnSI6Aw0vMK2n6L8GOqUB0SMWV4xuv3G4LwP5wCIwZON1tkvbxtS94vuNlpZ0QKR0eX7GJAXU%2FraNDB34i2wBnBjrhyH7xc3nnt3HkyJsUe6WZ%2ByYHnqiXLCuJ6BnxC8xAxaQjFkooU2rICN4n5PMEtFH7q0mq3PRzcw43fzctDKdPJsCwncmei89X7HLAGIKpN0G2%2Fpx%2FNDAVMCTYxL9YyKcyPAsRVAki6rQGTRmmv4YGXQo&X-Amz-Signature=0ef014060d827c9a82aedb9a7392148a557c33aefc0c596cb46ef7d5732451e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
