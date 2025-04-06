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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XDSBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQTBgGIpxWDY6QPRmxdH75qKurs2lI8xiUrdICVufpDAIhANh0foJZqhWb%2BSfwuOleWLIqgINjzqLres34pzG1QKrFKv8DCE8QABoMNjM3NDIzMTgzODA1Igw4PhWpU%2BjdrrMTqd0q3ANx61GLmrcHrMC5OQ%2Bm0R%2BWd3xo4WUJ4FxykJGawQ%2Bw5MDLKCtzcudFQ3Zf7n9SMx7tBnwwFlGaoptQtKh1Ct%2FD%2Fxbv0RAutca%2B0HSDJs9iyNsKUlTTlU2JJlRfDR3V59m2f31Fm0eREx2uQ5C1K6ahnQV%2F5KQbUjNAU23Xa9y027zIbeDzw91SrDfeiw3qzVMgs3KvtdFgmvq%2Byf8w0D1Qb1OkUwkg0BxCeSpKpimRhCLhh2mR66HcqRv%2BcoqCYwYaieAC%2Fg5rsNB%2Bu3bogZabmxdwqk3oSYSVOOLx0J09btaxJjvdV5R9Bg%2FO89%2BYYkTYRtMd8THT3SV%2Ffrzu6IuhLJ%2Fm2BbpewJ6ORb0Y1pGpBp%2BLKxjIHFA08TmYcYZ%2FUU%2BAs0HHEcA8VA0wzMzg31cw1LL9B9EidwNepAThF4RutRMwcJKRfbhlGLVjefSF4sxeaYdPuxDe%2Fs%2FeFPoFlcuydzDyFufZs5bn6lcQoh%2F7EtsEZ1IEe%2FptaEu5JDgXIzjM1EsUgw5IPqrhJH3HFmXTn%2FaBat%2FlsM8iH9iPyLMsSc46PMb5I1Ih1a9YVPuHH%2FHRuLloqDMFHAP0W0ryVV9P%2B9Cd%2Fz7L3btCt2htvsNkxLfGPUTvulfHYa9CzD%2B9Mu%2FBjqkAQKTHpurccgEmaScg64V4mNOy%2FxmleaPxdrfql%2Bvo8lG%2B%2F2iAf77T6ygbpzEYZexri8NO2%2BcONgCwYnMeZpHCz%2FhWAE9KJ2TtU%2Fzso4lGmFqLjInD09HgmS6upAPmAyEjFnjLHIbAQe2c0M%2BpSjuvkKshoMcVD4OEwogT3RYSEeSFLO4FnpbFRoN6ltejpYMpHj%2Fv%2FvwwgS%2BeYexZrnvtGwrRmJp&X-Amz-Signature=11b6f206d406b9a8ace250f265ded5aaa0692e6720701316a673aa16a63886c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNIN5T7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESUdZdBpxHTfCnZCffNpf3UrL3Pi5dWtnmBtqKNBwIyAiAy7etwoUmploGSn49Ym74HXVzUbe2i9SHedjN%2FqMggLSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMpUbl1b%2BugiA%2F61lgKtwDBs%2FJM5N9vsAlg807MUT72Gwp4W8uAtWPOEKKnX65M7lpfP8iDODB4mK0rteKrvVEqeR9Ej75YbApBU4n9iw8MMQxOh8Q4t1ksXfaBZXd85OfS%2FJxpijt8265%2F9%2BA8cGBU%2BtQxUoHL0OAj8WH4n4XaXfEmL9NhDmkpoRg7bO8lSZbn8u1TYCjC5js8qpYHkGmiIA2tFmEJZtpZPB0%2FkKohsC7Gm6E%2BGdaCPWClfrFWaMZgZCfgqsimHDAMNzbFD9t3yhiRK5K4bL2TAUa1paAjtgPhsWVKOlqXCCfLewtjnQvkGcLbqrBKOzhIkxFCQREVuKNb0%2F1NRZyLKO6Omy41RFzh2i4akaNkK1F2%2B5m2sBNU0Bl1Vq5BzRksoXKKetL22YdbW5DevhYdCqTLzfJIoCT99J1y5qqIvEx1gev0Y9Wfv9ffkgbTpT%2BQ5fB7neLxzZjopqOE3QZIhQiwS%2FH9GYHK3%2BrXV4WbzZ%2F%2BTzWrNOEgP%2FokjmmrIbS%2BMHoxoAVsWguMQHaArvxxRQAn6lYRXechKFymfNVOLBnUPUbi50Qepnv37kNm14FPENQZZuOua6Fc9ZsS8sXx6p%2Bz9sk6BZ7XX8XRrOXKDkOx9%2F1llJSo8qvEERU7rhmvqMw8fTLvwY6pgF3dywyT2L2k5%2BHpBTz7NhmvG%2BjK7%2FDlTPboo50w9crEMQuWmh9AmMxBTL3I%2Fv9FZRpPdmWCVMmZF2djE8vq1KKgtf0xNPkRmpS4Hbz%2BpkDl%2Biw%2BHSuQGzMwEI8C3Z1SsUyswhQvJuNqbN2t6Mqclx2cvoZyuGn5fWEeixbg1ytwJ03jruJ2wRLeypnuC1Nl4LNdVCDwkLEsONpV85tt18sv1y0hrq8&X-Amz-Signature=a2cb816fef667cdc32ec58e7f2525f75e73f02eb1ef616d282c803f72d804c95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
