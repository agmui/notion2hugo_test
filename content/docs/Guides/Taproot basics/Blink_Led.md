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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOHBJTV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDq%2Fj8j4Xqqr9A92wLm%2BWHe2DLITOY2y2e7Yv4evKW5WwIgP2lm5USTj2Afv%2BzXIR13mBmP5D7SHa44woXvRIWtH0kq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNKSTwAnjM15YeW5WyrcA1UyYai4RPt4ThhQEn9r%2BO4whM1mlkDmJalenjJS7pz3hDoT0hN1UoRD0aHd%2BlLbny7D2Dg%2BahSU9YvQDI2Bc8RY9IWsRVeJeK%2Fus7w04c9ihIXM1jFBR4sr7pI8dzP34tkDFgNcj1E9LMmMot1zNU57Pt862tMx3Un4gFgmpjQdh3b2VlvKlEEdnczKwwuIe3u1htotqhOg48Wh%2FKk9DuRZxACouGU1kYSbbtkpIx8sNqPRO1lWg8qqskt5H%2BH17jIGgXKpbrGehJbpcU%2BAOyv2kQQfEZziNa5NFqC2OEnLV6GXS9B4eRomJJzgceW5tLzlbeHgYjILYCbV%2B4xffFQpytWXlhwLuhds8DbJHr1OWpO%2Fo0S2LHwrnMGmV7JVkMP3dtZcPVUIKTET4sCvh7RSJRTuN7LKsRiAUpyo9rKsioV1vhchW7pnNXMT80AbmoZ9Nh%2Bszk4IFCNtH3gLirJIvdaG4Y%2B9Vs9t%2BMOEZsNu1q38W%2BHwG9K0yvBkm36G9VyCGyCYZNnOwK3%2Fq3pdyfWsNLDRt4W16hP2Z1xS0RSl8E0K5BOXzOdYXIHfpaMIpHqupABgHa%2BoWIv0v2%2F3mfKxRJNcmCsxdhpAJM2k%2FuD8Lelqt7RWWrhbyGz1MJuFlsEGOqUBKirABrHlTd31N5wiwcxoJKNeozk6iu5E7e%2Biz0DYSD6aTFA%2FEooWkPcHs%2F268BsDLWjJv9%2Fzj5wY14Ea77Yyh7oqe7zzCjjo5HhWRSHRXg4dJWMYt9WQe8UCgTx4EQyxfdMlYrkXUEW7xXsgtJw0R8OI37kveSwaxhCO0UlrQE6d0VTb21EzRtRk9uDlyMrvoVmLc81JwA%2FZWFSTHgogN4M46l%2FZ&X-Amz-Signature=b33bb5072f396834aee68e9260b67be9565322b51f0ede6e4d512a9cfb01cd2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCRG7II%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICcGI6EECVOpzNrnRjBs2xjNebIBrMmNF%2FG%2Btw%2F9dBILAiEAw0CP0hBaI66xsHiKWSZc%2Ff54MeXfVMFSv7F7AEiU4doq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPHWJnq1Cr34ESXEHyrcA%2B82vYeGfocyX8MYv2efEgvUlkEqZgEFnNZ9l7R%2Fi2HPcI%2FUJsYtPfaZUXD1vaVZMpR3EZTi2bB0SmotuSZRYZ8%2BYG2ZslBRfpdVJT%2FEczNr1tRbdqaWPJlf7RzK3Z1Wm7XAy2%2BpAEXddUXsYgtvksLJ0e91lRr8rKY67%2B3nwK9aoE44lwJ4BCT3FAi1lULy5aDE4b2IFfWmcXT1kUGxdCl1hj%2BpdZID9y3HFHfsLPbEZLgz972nlBQmnVG1z7umY30FNlK9IGdblEBxxlg9Qm4fYanDwK1PKDAOFuq8VUV5jun%2FK2s%2FLOLiU1MCHgzkHxK5lzCCgv%2BK5i9S7WtxRWWKA3JzIgPaZ3UbcPDCgatrr845rYYYu6EaW8oxAve8UaSIf1DXbvOU8XwKndNC2osX0xLh0P4AJIS7A9VHxRmMgTkcWDqtX7ZN0d86SBeDYuQBshpjhj%2FG10Kahh7UfUIYjgLrvvWCSeckEQY%2FrK6QPdpxcxkpPUmtfbxhGgee2MDENd%2Fvpvq4%2BriRusf8lKxlcsoGZwDdDDOo2YBHLDJol77n01dqxTkdVw6PIxBTkhmBpBGBsuExhCUN%2BVXi6GgV30FzN7NUih55TkMo4SJB1%2B77Z6eMTLsb7sOoMI2ElsEGOqUBgXASuJVmpTEBACOhEeVIjW%2FsJ92aKUI4IpbOJIrjlH71RbOOeohrPDZH3pT7Z9m3loDLlV9xUWTizqn0YfUzoTZGAHs5Xk8jUnr0DzdXdxiVLq5VNeywlPkadxIm%2F7hS8E0DDuCk0Rg8GFhwnTYV1JETzaaVizcsA2dB%2FV8I5QaoSmwB2BZg73pA1mp8xS7rrifrzmQTIbdut4QcYJkSSmqGAMbo&X-Amz-Signature=2bcb5dc4b534456601e73535adc0f259a1f15c59b374b8f4314ae6e47a75acfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
