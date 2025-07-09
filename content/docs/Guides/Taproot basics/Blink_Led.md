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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46OJKMS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiZ7CDTOqAlqyajrmB9UaFUBeoWyRfzplxvgFMLIFGyAiAtcK0upwXZpmmhhnMKGjun8R39y36rdqj8HsWTG33I9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT85hjJ6tglLG9nENKtwDvfvVcH1Y7YQm9QIPFuJQBfuLTq45hjuAnsj43iAV6TtOXMEtVywq47IoW%2BNQiaXS59Oy0y0jjgbO357MyzDG4Plg1FYuzEjb%2BiYJnRMm1kNjwgNhawiw0W7kEcrekrY9iGfmnHUoW%2F2Vp6wOLS3RBuN%2BvRLXdcxqBpaIVHopqK8NuGfQPOWqekxVqFVYL9FS5ta4Fh4YUMfAD%2BGEPIoB%2BduWRxgdMqUa4TuYD%2BWkbjYvrsc4JKlR3q5W5mYBFyYHCxbhetjguBIYOtfFPh4Cmfj6xLqf88T29r7JSedg05m1o1J9m90s3VS5Er7TLf59CS%2Fu%2FdRLTbW8%2B68r1Sl9muGoseyd6AU8IjUcDIQ3ycSoYc2cfL7QxNSCfsqJNnjIHVIJ89wyiUl6OpZ%2FP7Rm%2BR%2B3%2FlNRW8Uw0flWiab2xc5sb4xkQs7WQXv8XoYtSGa%2FT3XhgkfS3ls4WhyBrsrqRc8nE15edcwtACFcKttJ11GmppJ%2FjiGpRWJhIoXvCxJ0j3KTLJ%2FrLwzXBAU6%2B%2FgE%2FthrONd87BxeuPCszAl9pbBXtTjUWt2Lj55L1FvwQL90nLysPf08iXs1bkVePthCnNhaEp%2Bmn3kvReZjVBPJk6QtP0DgFayjCeaubVswgfC6wwY6pgEDBjM%2FiupIA%2FdghHsO6xGFACqKmdqzmlwVaCispEl47qYEXhaZr3%2BHLAQTIYnYdnMmETV8fdHWEung35ulEa9rt7mjM1CtOgPS3jW1LlWe2okWqGM4LhAXrbYaSq1cE2jIntVg1td%2FgB%2BWa%2Fu9QVRL6I%2FGH2ynlxk%2F45xhENBMafU1pdU9DczKq6uyrWNtewK14YrSCs14QYvXjWINoffy4l9xf2Ph&X-Amz-Signature=676fcf2d4e989c41edb4dadd8a7df5755a80cac171b5ca0770b3d19152ce756a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U4PGRHA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdvbJTRWD%2BJrhjhb59yM8Y%2FdPwYc5AV0E32lVTGkd7lAiBky%2BPxtUmTJoxJsxGvvLw4qz%2BO5cxGewFUmPHf1f0zOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM88008TFlvGH%2BrrTFKtwD%2Bc95I6tCYDaA1vuIz4%2BJHyohnUOMmgjLTKAAUKdUp3%2F0qC2KsNMFhqUsvy1olUCTJwge3Yct2fwEzI2QqOctnI%2BC3EJ20aDUXq4pU7zZv%2FU7Kq4YrjsanZEICHEDJagDMgbSE3c%2FBnrmeMfvwybIOMFrYf9jv8ZEYmkbblY%2BUhZhqU4yhuSc%2B81J30uupqpSC%2Ff1QP5CFujVLprOYIKo0Rj9BNDNjbJ8xq4MZWL0D1y6MlRljAgmAgSVPsJSfhOkVg6gVo2vLHYh3AKz4qhtbBAvEyGMMSGbCjrsOjf9f8Mcq221hnoZJ8uhnCBKLNHv%2Fg4dmtyk26mSNv12SKoTixcjKsnyCM80cC6%2FIyqi8nHniuqiMiK%2BYzQfGhBdjfVRrzW%2FtGp46a6X3EpePs0f1mVa7uG56WSn4Yn5fVCNswS0U5uaU9NsBgcaQpuQcbxhxKCbhmSEivcKHfF%2BtVOrN6PCNhmLMrDlk1nz%2FwCjtuZRSa4d8AlO1HmoNqh%2BKkHlUmujaLRlK8WwT%2Fc4R6zujkOSUp3wG1dW%2F57UVsqX%2Fo0kJfN8JsPP3tN3emmbFEz8RqS8Sb%2BuQslTLUGfLNtgraR%2BDLv08k95kPvoKP9Erovpb0QTPnq9fGKWyL0whe%2B6wwY6pgEKqsn%2FgWNfi9wd%2Btkf5z5y6RhBwSBRn9D4Bg5S%2FRa2h2T3o6ItTM5pIPaGjVl0rpIcVdnGAlNNLfTDB0nmmTjmB2mzEZ%2By38TEdEsl4niGqTSBNZWfa7PX6zoLrwwVmCSl7SNTAD6Yq3%2FDINmyufijWLo6jAUkUj5%2F58ShGmGGrRFzSnJ0U4R1jeI3AnZKSXW10iZ40hHLzYEO8MAKZy%2Bs46LDHapt&X-Amz-Signature=eb738613565d630b58d0b87779dad8545a5c10f940b2c5cabe9c73fde0ccc568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
