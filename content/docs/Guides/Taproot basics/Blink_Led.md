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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IXNO47O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjjzmHZG%2B2il%2BACmOA29NP9fIwVvin0OsCn2nzpxwsbgIgZhwU40nmvLoq8mJwP4hiU765eWROUOss0%2B%2Bd9dgR6voqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKubOQoBVgqhRD%2FvTyrcA49zg6ZSmfzwfmdC0b8v6vpC7iBrDrkOPxN%2FAkLC7qTF1NwC%2Fpt4Cz8KuxRfUE2E1OCvFOxZCJQtHhVtXq5zC7miZ2JSG%2BgS3u9dII5vWVIstGw7bM8lNgS6n9pgJDXl0N20H2ik2tyR612E91kJP3kqpieLr658ms37uHlDA4kJvYYYrjaeeLbwDojJJB8Vasz%2FxamcGF2TKr3NPY7LQs5hmOfTXnB1K3OTBkZfuoAGf40HtJfzzgqXT1QBOH5NkOuacM7kcNlGOa59TDOKLQcZsVUrrqEIlJS3QEuFkhRpGweum1ZhTFuzZF5J%2BvL3m0HfSuyefaQ%2Bd5kHksT2wTkfmxeBYkzBuX%2BNxFDfLwdH8sVlLtUsII8wiVquEZjp2azjpRELF3qtjIXjNIv%2Buc1rGyyjFuus22MtmaMnFq2WiU8ZlcJLjg12cY9C0EhDareSjcgoMn4rhsN3CW%2FS1e3eC5BcgJ%2F%2BSpI6UZslcOfpvKF9EZNB5JTHzBII4jZnUT27hvgOTttadqf6vHYwdWMAdgFi7ROipDmbcfXls8rHKPrqelvv4HfAHE8BOV%2Bsk4N7RcRsJW9rlPd3Orf2bgphVYd%2FjQRqI9r24bpAmXyW6D7JlEZF1yhsj1W%2BMOeLwsAGOqUB8E9uHy3wQ2rgCBlbY5dLvtahzkEFlFNnfjHS%2BT04qR2%2Bu55W%2Bs2SF%2B%2Fww243e6d2AnHwx45oMSkSgzezMtr3m7evmDBeP1DZyh3o9XIctIabNQ1zrKfMD5Us5rdsJyDunuOGjSSLuhh6mKYv7VrAukpLJdguFVH1QEexIKLLZOeL2fvpayy2jU%2BgR4NExFk%2BJT%2FzIpjMtdetFfPEgqFSMdyeEthw&X-Amz-Signature=588889e1babaee9f88b052ab8c5815fba4502b462ccee005f40d2fcedac5d923&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVGDI45%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjM%2FSSPZGhg%2FYO4AGzWd4dLHWDRUOD36yRseSejt0UlAiB5Me8lKoItl5Kma%2Bhp%2FHzd2S9AKnryr4rUAksqx5eJbCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZaqUJLzL4ZWc8EgxKtwDBJgrTzYkHaKNkTVgIoQ0oURI%2Bm72O2ru3bNCUYwG%2ByzcLpcAAJhelIE0GEMbdaRHJwDk7IZUjEjcktfXaX%2Fu%2FBhAHHbEUw0rliqJcIfWaEN0USVdY1pKyrfj1Gj4qWegz6eHSdj4QGm0Hq%2Ba7OAl2ZDlsWiO%2F2vsbeZvlfsM0%2Bichnqqc0ZWqYS0VxvNSZvsozcksYpdAyy2V6kMpnL86STDtvoz7HHwxDblkmjNgYDILU%2BpwaHcMTVW8hAcLZpOd0L6PUgP%2FEdTEYSZpebwtpY8qgL6cbQraOg3IyEJwoeeitsR8Gw%2BwuzD46%2FRAkv%2F4hGGTGwvEjwhvYH44Uz%2ByBvgQwHWNKq5tE3JwFPEzozfV5HjjcNriRbfTpiODAielR5dKcM0TmsLRrCkhOhop9VkuuC%2BFd1oDoXmct5Kn1pXOuqo0WroKXy4M65v7b9xqvwTAQg9Gr%2Fh%2FSPn8qjTvGZPhw%2F%2BgGo7qhyk8d3yc2VnBg2%2BWUroRKBUgXAewVCd2VgdjVeqjTFfCYCI%2BeKlLTCukqICco1so%2BHq3AmZkleoPR3nwYUqt0J0wbuvknstFevuGd%2FEQ7WqclHuQgPPgPy3OUX5Lx7kIb3W%2FwfFJrhHmsbFT88VYngep0Mwv4vCwAY6pgGypcT9GR9t%2Biiow5Y4AUFRIhR5C3A1rjlCTgQlYgdzxkGQyLjJ1Cx7RTWXcwN9LKNGccZOImyCIHejCC6%2B5byXxOkRwIVjJZGoml8X0OVslfyeGifTGZwaYuVrrVIie7X9rYIcXQefUEnwmJMvim1znlRb8uXI2TuChhuRBa2sDpYFGF3fXEvkhatePRWuqMTrFv7EHkmiK9TYubf5YkXlbEUN2EfS&X-Amz-Signature=908fffd2c747d40ebf8221074aa8bcf47ef64d9fc6f0c21ba041f6e78666cbc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
