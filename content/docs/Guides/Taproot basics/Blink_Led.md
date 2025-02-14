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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVT3GHC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHIABkcU5Lzl2MGNdV9Lq0HMEDRkLwmLuC5tsOjgJOAIgeJ3Z8xCDd56R2fL%2FigQ2MzOos21dkKksBKAcGI7CrnEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEqOayli%2BZo2SlJpWSrcAxEuhGnOyrgmPkFCJQwJ6ihKqHlhJ8Y5GzaMqOEAqLvubX2zvqh7HG4r48fP2N%2FXYv5LReuc6wWWZsrn6BXbZ20cCqFYVwB1uopQ6SlSAvVe2v%2FJiRNjgJMh1Re26B5Fa6sNUTLaPD6QVQOfGMeBlZcFQClLS1N5qM1NdeZNqjrM935%2FpaDzZYJylzq%2BdjPKdplXC%2FMjxmt8cnJZpjzXWiZ6us6A2GZlsiF1likua0Sv%2BovUusHS1dB0TrL8xB34rriMb5HsfJ8XXM3rUHvZ2NJafHcCNqfrIVys3g7klY4NhfUV%2BA7WXFmnIzppn0WHgQN4693rNN7U1Twnw3V29D9HSHLSWcdKvnLfmAoQ1kvs9K5Azy7FrcBQbbwADgOQXhvagZvf4%2Fppu5VIB12q2APaeD9OoFBhcn8QbASKjroafcDv3BYyXe8J7n2jjWEx%2BDsBSWpf0j7QNmuLiOwBRg0SZOyfyPcnxsjISy5KFbzkJFW1JRdNC%2BmeHwYkw5f3mUa8SgSwv8Z3rg2gMcVo9ohynNN%2BioHQKmqOTY%2F8mXDefw2Bgcwyg2rccD49G%2F6SN%2FmyJ3LQYYi8FCIBQHh9giO9R6BdXfEnj2Dlw2snjJ5AW3fMCrREQnMUXEATMMXqur0GOqUBn3m5ZrV2XR7fRnFyEtcgTqNQKwCfoaiUWLA4idCTt5ythKYrmOMVzBdGpmw7bIXPMmgqrcur99FPcUy8uXoKz9jYsfMhOknpiWmpreAO27NfuFhrncqPXd2y9gaK%2FOXK5iOGxgaxU7XAY023b%2BLvYxUDyqaDBy5ku6XzTFwzZWs8i06AzopEE6Bl%2FbfvIfDJnf7eYpuQMqQENeKrX4PPd4yji1%2F%2F&X-Amz-Signature=ab82c0ef2b78a7474593edb4fc9a153562535a0fbfb82cd68a596c38bcfbb7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TEP4TCH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA32u0oXU%2BDaCudqCt4lE6Zm4%2BAO8Xxfbhewx19abo%2BHAiABYut79opBm6c8j5WQ%2BfBUf9qWbW0FUxTLGuzovz2p9ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMO6KF4n3ho0TeVPC6KtwDSweurRXHgw%2BLBa75y56HsGPq%2ByLycH4%2F1z%2BVtHGL1qg4qGdDkEGtdHrZccVqCU0QnuVQx8x%2BW6UxenLa0IoWxVICW5CbwH%2FXtPwtQWd6NTZetzP4qIfKJH6lfIbG9InFnLEkyGGQST%2F4%2F60mxEg2Ktjqy4hAsgIop3587BNzKn17VCvaJuaTTA6Fn19fXcmr7qWBINdmMcm8%2Faa6papH%2BuRPSWnmw83DrI7xDyyJAyB4lIaVR3OwdYeiDfKwv7PFpa5MkUYrYY8gZsJdomUvBuDaDFzCpgrbQLXTj5h4lhwRfwmw%2BgnCtGdIMKEXml93KbymhmgzbgrRmJ4TpYsvyDb%2F9lWqWvJ4X%2B%2BWXsw6%2BQmLXRJ4WhR2fwiVgwT0ZKjg8WX3kOxXYsvWheGHeZ1jt0sQsdxos2HSpYL2Hy0ij4tujAsSOoaoT36xI9%2F90i84uWfHBSRYBeMtv0se6Hy1QAQieBhMEth25I6PX4BJAIbqpuFNV2yGhTt6qtiPvUiO0ssBCBvmFt5FQ7uuEINesT%2By%2FhNEWNfHGH0EWpb1jMQCFnoAuikWM%2Blmed7M1OIHseDTrgX95xwRRMR96P1A%2F7YZcaMiXxV5FR%2BBntFKcXd7PIjIjC2GJbFls74w%2B%2Bq6vQY6pgEDhUl64pOmZHyBwXbagXy5rEzZJTzJ3CvLG6hP5MUDaMS6p53Fteobg4YXFJEN%2FvkYUIrmcqa8PwixQ1lvx1T88ynsIKrhJUluP6NBGq0EvUosGJAdOzVdIgdb1I4dRPB1KwLD5xROeavcuqNknqn986MqE51Xj56PyluF2%2FjcXlI1ESERwT9Kd9QywBqSxFdCardAF7m3BW9%2FV5m6dDaSa1YNpF2o&X-Amz-Signature=f2b071118911808a1edf75ae951866b622ab358a3ef2c53768b721fc425e3f47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
