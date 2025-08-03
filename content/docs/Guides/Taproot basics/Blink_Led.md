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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSAQ2HT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq6eUlRpjUAiMzHGk8ukzT%2FLlrav0LP9zkSC%2FX9d7%2FXQIgVZu937XS6RGEitELBCgjqWITTQH051QhQKPW7CMhpeMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPDovaNqR2WBQsG6LSrcAxdUttt576TWqjrgqLtHXjPiYeDbvF28M%2FFOZnQayAPdYXmXIfjw5sks7j3Sro40WEOX7awVE7kRYPO7w8JjBUyQebA1ma6fQsCSVLJzu37C1RW4F3Ar8k4Chm%2BMQvsQeJnQWoUmARJRpCJw6g3bw%2FMnQKR0%2BTl7q%2FVuMUfGu%2BBk82SZTvB4nQIh8Zi8frBkuEsjG5KdQDtbhtcBxJFqfJRSdDhFakn3qM6Tk6PpHkN5kv6UIgpmUMKNcqpK%2FHQugBdtnbZ%2FeTj4nYJEC5wN9Ox6QN5p37zITtK4vpPT%2Bk40EOcE%2BbJcIVvRZOb0zj6OQNfAOv1rAo%2BSK%2BJxNaImdKha9W2qUy5u6fmNBnfxSPIYxdr939KthztoOCyRI7H8mNyHAoq0%2BadN6r%2F3pxHunz5sVIPcdi1FUDmSP9Z%2BRnLoYMH2B0AgzqPYKu%2BkVXztScdAAEvWpXgoch0jBKkWg%2BPR9Wcsi5tavC2swxcbYxgl1W3uoF4nOYI4kztxxOC6KrJN9U2BwG4FsgQf9VuQU4YyY45H1s9sisJOJt4MkRiCWuYyFVSYQIxKgoPfgOQW0qbxXA9HRIHmmZF%2FWljNYUTjqODSdDk1syfXqz47tRzmlnRdobt2oRvAaCIKMOPBvMQGOqUBAiu4piOjF1daItbsfygNif9HWvoWPWPlB8lieYLEPIZcLHKSK%2FzQ4VJ5MzNGez1w6DOW4pjIC0URDrktBtRD26s1%2BeaL4OiIsxdtYPCzizfuvM0kT2gtwDjS2Heam%2Bmf%2BCqlQLShy7M6B2VtJGL35X1I9%2Fms%2FFlQls1bS8SMJQFcG5y0zTY94eQzv%2B1%2BtBPc%2BqgohW2JNMl24PHLDNvyTq5u74L5&X-Amz-Signature=881f6ed4f27a89a1aab6781d104373bf0b9e6fba961efd269ba2438f35f1cc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKA46KAL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEzobyKqbnyFanFB61RNubPdEEj5g4rjJF8WYvWNQKdgIgHHK7b9c2Vp9%2BpDPogU%2BUVNlw1swoNbuHlWFc%2BLQVZ70q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOze%2F5HMNh1gZnDqiircA4aLWCrRxzW6PA78xMRrrkI1163JfLC7aYGQutQRsjPDLn7HIVJpu4uESMCMcW%2BcZAglXkyiZ55A8QhwZSrJQfLkeQnd0CoZS14eaNyJSmNyhgc2r8rpk40FuwirFeemBsipn6iWDJazhB7tP%2Fp%2BjOTXNwdmzYZBOi3%2BP9SDs5IcscJNR0mPXpSmWmIm62Ymkq735%2FV%2BQ275nvHvmG7t1VZXX6R7MnmqhqGE1dl00anW%2Fn9agZYkDDLSCwis1rH%2By%2FcuD2F5lZqP5J4a4mUUSGgaYNVpSaIDadpXx0Eq777lA6BblqtzdIhN5o1rumk9f8kEatok9tY%2FQwtyaWHl%2BBqp%2FkHSuVTF9ym5G8NHVxXEbE042nH6t8q%2FbJr2Bu9Ff41OTT7lzkNBeg8JfUuqopryJGjHoM%2BN0w1CxCHK3C3JzUtos32ezHBvzRTPvfmeLMM%2FI63hogOEUKTFq2DcUT5k0H%2Bq2UudhsJ797tWiJyE%2F0rS2BeEXp2LE2i%2BG%2BqdERr0DExummgPocoa2xFcTimdmi7mxfMf5%2BqYYBCukU9tYWi2Mb4U%2F4ga7pijVU3d%2B8BShJqV0WJgRcVBCgoeJD9s889ppNqRIa8wdGgK26x6Ul0USF11lAmJCp%2BAMO%2B%2BvMQGOqUBPrKYN%2FfkEMDVyEVZNvFKtwYBXm5U85jRUxqVlXo%2FYox%2BxGhx4u0JHj7UI%2By7i3wX1VD5mcaIL5t%2FstQpsBi8vMBGN132aLGmzJi2WgpQQhkaMne2Bl0INdYIu4Qco4JHMswvHFqKLp%2BgZlOxAGNmvdtP%2B9%2FCA4fDubsnLcuPx4S0C4g5MrYuuEgiEQK1bergByIyrjxOmfSGoNdnQl0rPG%2BIN9zK&X-Amz-Signature=7f7c007f740a44cfdfa8435c28755642787ecf94f0530ef75561403d769b4a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
