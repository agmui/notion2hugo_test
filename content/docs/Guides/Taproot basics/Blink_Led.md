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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OAOE452%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuhXkzVzFsfDYAPjadM1VB5yqoMNvWlBJRfNf0vqD8wIhAOIeoYWyuzpbXKZv52jMIltBSIJ1304%2F6Fd8Sx2BTbY%2FKv8DCHcQABoMNjM3NDIzMTgzODA1Igwl9fQ45MZH43aHwuwq3AN%2BbvHc69o95oT8kYd3qY5fPmhx9ud1wlqmoKTB%2BqOWfZbcTsCjPlMsafz3dyFvj%2FABU6AfbjVo3L%2FFu83l481V6T9cpke4nfZpzZm3WJWp8XTL5amzNHxquWLoX05mSutJwcTLZXCJw6XOM3T20f9cgdujUUUmaOu8O4WwH5KJd%2FH7aSXSKwwJksdCocpUhvSBHhQ8OTcP%2Fss0fbn4yeBo8ASaBwPhY7GybqtSw0qaBhB2Bd%2Bl5QjcNWsnn2YPDng6wudT7tg6iPZKz97ZHzBqUfVY1c%2BsVZPagufgkwdbdyi5fMejfZxFcZb%2F2Hmdklt9WnjT%2BbOJA7MZF69TQaU7aAwtkFx6OnzTPPNWh5de2o162BN4RNoLoVQxy7O8%2F7oOSAci81W%2F7D%2BSr%2Fv5O3BRJR2TBG2uYFRp33dLAaqKEVbJG6cLBlxFOVZOzTNcMKHtE0Iu0xDxKVLcm2bPIvmx1rZ0SCM3bnOl8MJCphp8dbYbeoX5Yz004NJiOe4Aa0clSJkDdcLC%2F4OsphnV5NJB7z91Ck4D2S%2BsUgSsaU2yEG5mzMR9S3fD3lbZkWTy1mYyxmMAQFtA%2FP7NG2JTmvPJYD7nVndLhuMWxjFyVtmWGGzs5sSmYGGTPomi8jCNgZHCBjqkAYe9xrI3MlBvdaU%2FxUGq0t5je%2FLNHsgwgcZ3RklsOtagu24rdPpnOVNu6%2F1gF%2FZHQYZ4N6yBMvQR4TeAHA3LBRcwqx%2F0cVYIJXoBiR49RxbT9oRYLokfabtY3nxuD3gW4A88MpBuGZh%2BGkpXt7fhuwOgI%2B1Tm5l5lSWH2mgcDAkUP0dIE3KdloWNbfAhe%2BNsr2UTsx62ZACiYVGDR7R7QQ3c5GEW&X-Amz-Signature=7487c42326ad204974f23d93ee1f1e61fe94be3ec8274413713c418b2949a9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YDEPOG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVCMwxIrnUIz%2Fj3xZD3G8EqsAb2eoeR6Q7u1yeeLFzbAIgef0IzuXZB8f95j6MPmS%2F7G8o0EjIu1KmXodCkB4W4T0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPBlGsR0L%2BPBvIm4MSrcAzAHIK0p6J0dr3ZQB%2FeiNMFg4mljuubzvsuRxHwrS0uGN7%2BF012iJ7QDreWBUz6NzibYOX14lZ3sTdhdUXU0Br%2BuxTTaTCosIbg1bgnVkU%2BBhux3Ni5KzTsvq%2FnyRpOid8mkMSz%2FLwuUWmahVGuf332lwP6POyze6DIfqq3H8cdVxl5EWeQjHS2np919El6sYFB9hVXYVjBj6cYkWw%2BNDcuiNTDFLgQnVcxvjVupCe6g7jf5T5Q2eKxWxxOSoTxGnTbnsO7ZSjY2IcmuzKD06tiT6oJDv6rEwJN6hdGYwIttq61GIazVUT%2Buqtiz1eG%2BCsTeOuFzaOG94LrsqZtDtVDWqQCF8JwNEW3mSQVCvbTd0%2FWW%2BepBJfoJ4UVpZCrPbjUKOpHlqv57bZOfDTXw9PSwAblYLL8rNW17bZY6zqf8nTuttDVdnoVOTeLMlTuA9fADt0FANm4MwnLLfB6St5m5IVq9kRXeNoRHN2LszPXixEsiHmqyjRxm605uHbJvGPYsq7G6I9b4JIN7mwpPFyrYmgYPDc1MVP8jaOE9485X8TtaLoXUdCh5ZyxMcYrJp7rDJrkjEPL7QMtVqwqlYSa1K6Ar2LkcEcL3IoSvMC7wVq9AN5FnyxV%2BtDQXMIyBkcIGOqUBHBD3qjY%2F55utWatrFNwcw37dO8cjxQrtLc%2FU4oFm3TIr1j%2FbVhy6YkRfUcKgZsQU%2BXhTW9tSFo4Kkf44umcp0z%2F54qMzmrICPPgIlAyKdoIH2ujhsjbqn9IcHnmdxUB50VMYrAouolAEyll8N6USexs5YnzzTh1xH4UoM9qa8Ifi0jgeH8pcIlPDi%2Fg%2FxnQOIHfPpYf8eTeU8K3rBLpdE9R2V03B&X-Amz-Signature=2bb134276b67aa2ece0288e6a594a13d0207283542b55c7bd57ebeeaf22b49d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
