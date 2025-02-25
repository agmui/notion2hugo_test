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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AKKZHHS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIATnNgzrixhNgsYpEZI0KpsJKvyd%2BzKDjcXD%2FehfqiFUAiBhbMqgDTe7SBpcAnPuSXeAv7XEq4YlM7sAg0CLkKFYISr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMB9t5bcsemnXmcKUzKtwD4tktZKKRi6v%2BJFeGS18IAL34J0ohbGMrRKNrHKU%2Bia1K7G6JFmqSG1jazY3l7pVbIh9GptDlG4HonygpiwU0JKCI9sq3SwE2n4IXqTLSOpHwQajW4qq9ClchjnJnwuZbSP%2FgxuWqHoEEjUkEYrJROPD0zI4drrDZLWpZuL4TJLqQ%2FqNKE3qXxTt2XlSQMClQun6ofe3UFEGty9Lkx04%2FmiomOAPriAIcnoYCtbBsgEDysoOVx7Yrdu%2FmDPRls98w%2Bd5VFBnWRtbMsykEaGri7%2FuoptM7MrZCrw0q7rcqyyi9M9iD0jPkdZDFhR8qMfwGrEmI%2BbwqbG6%2BFtdV52WPLL6yy79G2IdTY%2B4aVVAo%2FQ8HJdytmkMv6DhAtNBicUaAhTZZlQRgyNpDsbXHC38sumdMDsZ0wYWPOKXfsEQrmV%2Fumi1HejkRPaOrNOxLaqr%2FKoQ3PXRWNI8m63nP1oPMUbMbFdb6Ev1DUZPnyJmOtA2T2s%2FxHXr8nNM5Lmfdl%2B4fj0GC9LTtdKGKDvhKwEtlZGHQfJHCfIdY8yP045G5THl67BC9JUTwf%2BebhfqB8PKx4RuXxmu%2FwImtXYO%2FsDW%2B6PN947LJlzbxF2x214TtJeHvWxE1OoyVlv2zIcow0Y%2F1vQY6pgFE1cUUlolLlUxlTZRo0UPgvoFdADECFHusLooWSdHqxsLPKZZpvNwYVUCWJfoxWHng8QA7DTuw%2Fyd4XY6gxSa3VuB5vubcffYQQsATY9HO3ghfTD7JG0uvwmbLxR3im%2FV%2BGQlvSsFFhzIJUBGeF7LzqAUDaP%2BhZATYwygksOViJMLi4KgFbT9MgO4kuPDRgF7Er8nOLaW6hky9anjpIlsMT7jZnQ6K&X-Amz-Signature=bc89038e14facf8a50ec774efe6060be44d1b95b475d4e9fdc203e8b2bd5a13a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSIEOYY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIE3NTeQL8RBclLiXWT16gSmNIkFGCu4YwG5a%2BMpQM%2Fh9AiBSwR2b7LwALZQ7VGDks9ydJBvZ2XIFMh%2B1CCiuv%2FxCTCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6suTsFIcXLjNvPrUKtwDB%2B8qzEhi71PeW022ojtWSrUxILVjH5FDMofLn%2Bjn%2BG94vxdOQQf02pO2B5EalM3RlSx8JCTLzErrrJZ2d33JKTGlTD0Nrc1xYEzfnAMrMCR49vP49F3Dxn%2FUMZYaNo7Z98Zi%2FeNfozhquXF2W1yhSxgAt3wOsFL3tIn3LNNpVkBcp1jovQH39SrjSq%2BboRr5shpPZGQv0ArkVTBq1J82seBnrUD1Us3drQfpev3LfGNUD%2FYwYHMPp9bJmFwJ6FKgwWiVDOvy5ZXA3E6smqyu9xiDg99BHf3wj%2BIPhKdLU5K2XuhU%2FeJsc85Cq5dapPrgyfiG7QDB2qdkaHvQ5hjwA3sOfIDUXHrzrfPLlINxBQEx1dqh8Dd3ceOgtKJztIlG1F3QXXCWcj397kZz3IvsO0%2BFWOB3PqpTHIANBGIivEz8znjba%2FllXFt0BqxqlhcRvIsKneY9kAJJRrdRj4voUFEW1H0GGdQwQBcFnJx8USma29XdwXId0uBtspPqLqdY91%2BFGG%2B2yngGs%2FNbQmh7oKcIv%2BKuaWLwB7tVlCxawSTGnnjUGjGxfAOfH1Qr2NOtRahArhr0vr77EEJRoRKSkmKPwEL1Y%2Bl%2Fp3kWsprAoQw2cj8yUmZm2Sq2YLow8JD1vQY6pgGRTnT%2B0oNo89tEy87DGrCqZ24bNG5RsR3Bpi7KWiauUJantVUbRxHwMyIASQjZ5x0TMIo671%2BHbVoM%2FOxDMPZlPRhg%2BxYTAsSf5dhrm67PVqSRcBKOYq37nuVzWEHHmlbARh6KwjwSZrQklrhv2tWv%2BogHRVNfmuKxO%2FpdBDBe7izK30DpLdiuQ%2BYIw86%2FvcJetR0Cv7zNOUH7TooNL84ebwI1vc97&X-Amz-Signature=9f6a6cafe99f73897d802a4611997bc105c5bf419ecfeb68687dc430ba9f23b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
