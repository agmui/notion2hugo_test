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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2LTF53%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDchSW4TPLNcuRttF6jDIV8qSvPnz3dMIJu8tOZw99WfAiEAx61h9vwn3rTFe9GHy%2FpdUWuFDpjd1i9Fsb8tN3KyfIIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc58w36joyASMP5OircA05RvgCnrgxTz7msDmmPY4jjl39qcwKHE4GVmVEQkdgDKLA%2BT5TLeHb3tVFjUgy2FGeqPc%2BOIdojBPBLzSKuYD94wzxUGZJT1cmREGkqK0i5LK8Iz719ge9ELBfxfM7uKkgewFl5H8kOlqaRzQrx1o%2BW6N7PImszIF%2Fmo%2B2SNfJoJCUSeT9EHuLGEAVbwEpd0RfeaUnY%2BYhX7s724sP8DsJ6xd2P%2BwJKwmx9iOoZVAk%2B1owMegne7%2B2rbQ3yM9kVZOShgXHYDqGL7UwC80YF6GY5AQ0HS8%2BlopcN1Ek2fxt9x2M60mqrb7aHWt4SY1AVou6KRZiJ0%2BD1aBbOylJ%2FNS46jOEg6UlYBdsEIrYXDLPOrwKjwnH2i083m%2BYb%2FGH%2FBPt1T%2BP8PJQ9EI4o11vBQJWqiiq36PHEiWTdEgmAoxZg3d9v4UiFnQTujMeDw7K8MDG1jMhtz1urRBSkypjp9APERSyapC6LfFBIoATLER9oAVdCew8IfKn5y0Jszwce0NIZuO8MB%2FdQMBi8vorNauARRLioQegoSN9llki1%2BEQL2t0j069Ef7JQuD2zp5glvgwFuQamDEpRkfCINYUqFIIrEG5aWFng9tXeDW7h2nPi%2BRZ4HsQcJqhLLJXcMOG20cQGOqUBLeWeB5lKycVpvY9LxdX2czhFasFHDdx4pVfRbvdhF3Q4NWfJjpbYVzQvrpEAcGUZbYToS61mR44GuL%2FKNr8%2FHfZ242VqqXAKJFzPwkJ3EOw7DHodAMb3ryICvAVLuGGvnd9ZkrDOATh5GSxGSRVwLaW7syiaPowOhmvgafFss1rSsFfvk%2B5jBSEbCDWIo14TfP9bNbsznBfkZF1plNks4AxRTTaV&X-Amz-Signature=29914dab0d00f8830004a952dfd7b9e353e2297746e007ce69c876569e306892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTPUIEH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHmF8wr40Wf6lOA2pxZa63LYD7nGqZCwNYddc%2Bg2Z1y%2FAiEA2WLJtaJ34%2FaFWgq098hUnDn0Z2%2FtzB%2FRpAuSx3c0egwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPV4riaoBjp%2FLW40SrcA%2FFwvX7BQxb3NgN9MHRnrS5Pguy6aTwB7NalDKPEcCfS5sekOtAim1uv7b7x2TdO%2Foj8glECVUpoEi4E1mDz4fjFFjYNR2nPG6Pk24WORZ9Z2HK%2BGZhALQAR%2BtYBstszoCtcpK5wTbcAeuoki3avSlofO0we2nzOZeWZvgvM5zwAtVSLr9PDWDFg7HlrEIYp%2FKkFZhcBL0y0kz1Uf%2F2rLTnocPpZkG9P1qE%2F2Wt%2Fb5cBs7Zzat18YkUJJ7PXmV%2FMDZla%2FuIdsLcNDI2Fk6m2JSUy6mJjs38CRVAD47qahLqN1n9I7oF39LhSuVm0RQswHRvpHrh4XHmbfi0TxDxPjzTjzJbikszlxrGtaSZJZ7yD8wplt7bZuZtvlRZ2eK5PLAGhPavJQBMDf6sfbiF2ZjekUJhecjzajbKbSQl%2Bto1ylipqgzJ6qqLpG%2B0zmnYJhI%2BHoOtJ5LI%2FdB6MidH7nvZ9orSfXOLJwFsP4HbePAYoeXODmhLraseqccURfw0Nco4nM0%2BqDguvvoH3hLNoP0fu39E4DvHX%2FY9Pej9Eqr2oMPUxbDoGHSBoJAWERTT2VBIFPPQ7yEAq3IsCkF9c9vsoC4iN2IWr2WmTsvoCA5DB3XnhRCeJbxcJGkzYMNq10cQGOqUBQ5AQQHlZYT8CEYpZy69h4%2B%2Bo9Mm9VMNZ6AaQByeKCkAZZ1XLuxFR4cy9yu33gV5nowZAqlonXMkFakysBEaBgf9DzDVuemVZAOO8%2F5y7vPAOM%2FeKLm%2BEYFLdOCUTM2cvF9alFUV5DdEejWRGlw%2Fob1V8wIPr8QSM5mEiejgu8QxkdWmkZKufCivTXtU889n%2BsQ3SIy1%2B1nrpyE0EzQktOhkhh3CS&X-Amz-Signature=738df1d3dfd5e80c61efd4a065a08fc1ed48a6a1d8cdfa0d2ba699d7798867cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
