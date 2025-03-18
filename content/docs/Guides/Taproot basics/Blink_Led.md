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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSDWVQK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDeZ3fFF3s66C3bOjlMky3E4ITcHBszIbcKfngAFhrN8gIgW1HdbGgZN4CBpnz6ZIXNHrRWDnuLDU%2FaDVpIDs5frtYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHCzgZqNc4hTqKrMkCrcA6%2F6IIvqQu56Y7jkMQFzGTokncjJWqyQ9z%2Fbn7i1BqlGh01Rp04YsNk8LAopTyoR17EC3ZxPzkPvtHAY3aGIID0EzBJKeEdVqAe1Zvv8GOFZqw8Q6JPMj7yzMM8aSzHTZqTG9KxSJzw80IBGjE5ew8y5f3FJIsE6cIa%2BEeitxhB%2FnGNqyg3xWqA%2FUcwF8n8mfQEbX%2B%2F2e%2FQvL0PYqAy9pfgUXyYmV4iEAUtlriiIqd8GeKkb4JmYJIgKXx2h%2FHZk8RyNduyAM%2BQXhbxA%2FLo3PV4HdEG4i74590eTlUYit2fWq4yAiGacqjjRG%2FVTY7Meim43KkpWBQp%2FlxPk9ljdW%2FGidA2aSQqzSWJD2T4jtq8%2BnNG2aU1pQjyBq%2BKOW5Y6IQscufUTilUN0QRy5hmNxSfQDFIHSlJo914xo%2F1HtAfdGvSufCaHPnRSWKhoxwNo5l%2FTSDyOyHYxoRD3zHDHjEpX2OkzPFWtGjrhuMFukqGw7EiT0zbtnADBQTAfyb7fBOzPJF0heVrew9TAvB2Ox3%2F8zRBJNCTAA9pBOec28Q%2B3VYGglV2Bi2iUXguND4HZtHAHA64ydqzg%2FRABC399EOWPMCd9V0hgBJNK%2Fy7hlXn3glmqeEKq6i8wLt65MIDX5L4GOqUBDLvpCYbBAw%2BZ%2Fx%2FTCcJgoW9fvK1phowF9R%2F%2FgDyyIFJ0E48%2BnkaYtNcx6Qlvraq10woENIf2MN1vx0Xy7WqS%2F%2BWlwBff78a1UxdXHY982rN9Gk4C1hiDC4M7fN19G%2F8CjYA6uyTYpbyHFJzkJ8v8EqWOBnL8VYsd7Zu6j6nxvzZTmvaJBe2rTj1v1dw6zkBgNIhECrQTt3VR1ZJs583RID3TpQe%2B&X-Amz-Signature=65b3b784883c9bc3deb8993ebcf31003053389170ffe7dc4b355a02e0759523d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTFFSJV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2FnEe04LLZQm2J6YabEEU5zRY%2FDdK8tLirVrQ9Ax9XsAiEA3ln0sP5B2ShRAf%2B0bFXe1DzpTx6q0d%2BCtSHVHRNuKcYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLF8XLiZGBgT4fWvUyrcAyROfu2OVQgFOlNRq5m1e0pb%2B7SBIkJUb3faJ8jpZHv%2BCYZ%2Fjc7579wXKSQYsV3o4XFKUGE%2BZgzmzveM0d4OA5C6ek6s9M3IyzXrGPJd8d%2F3l7kwEvlePcDRjedi4eM%2BSVSfzowYmYy9oEolGgJ89bcSKyPUhN3%2F%2F5xyNNLS43rLdq4FyfhAO1uZh61dlIIDqQMm990qOYYOEfmTVv8W1oIg7bPXlvimPgY1SeVT8MrsRNEqXmOB%2FZxuIHggsMwe0QpFNdsOZVqy2GjW0ZKEGlnuFQ8LrI%2BmiYcSmw04KNK3Y%2FeaGJtPxiJGISbZjP5INlalo%2FZ%2BSgIUiWAKaECmzE%2FoHO5lggkT7MLKHIcGtNpq8ku04epyRiBPVBNLYN34MAgOJNylI8d9wVjZ3caqcFb%2BvTZW9mxS%2FD92OwHNGT0fLu2%2BNYtZq2PqpIzT%2BpkMmnkf17%2FFy5jjlXULS9vS2T%2B6MqGxBpbGPsq5glMbIJvBL3BTk0%2FiLWwpHFOidlF6a0rJe9Jo9nB8FTr9VmSyIXygQzwZU9rrSeUMs56bMy%2Be3gbXlmvMfgNd%2Fi8E2oGS%2BBaang5LM%2FbmhvFc7k45wS9ULOetg0dj6ay4CcTgmHkiThItInRoJLbK44Z0MLLW5L4GOqUBbquFGOx%2BYeCQnynSn0r8dhnpNSUy3%2BI1S6f04kzxMdt8vawmSx8HBBJ02FQ%2BIvAvAjOcrFdNu%2BxlVZfki9jCJep3k11pDO9GNrM3EEEHoMlacmo1YK11NXr8WSQh12n4mYPYUZB5aHWlGNSfovtuCo3s70fuXpRkUBCfiGfgZQN96hft8ULyppYe0d1iwF86rxHOgWHHjEVwQ2IEjKTaTh472MEz&X-Amz-Signature=aeee5fd3a036c884535b12eab3b3bd26b7d6b93232957e6e27946b91f5a43a29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
