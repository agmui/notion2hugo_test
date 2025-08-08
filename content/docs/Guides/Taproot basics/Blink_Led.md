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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXK5HS3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCTxnggjpHwLCdJTNC9WX%2FnI1aOXy9N2sar57pA%2BO0s3gIhAO%2BhFr3WYuDnLrWta9VfxUeGA2uzLkNGxtpsa3FypbfDKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgL8jzqhize4Fy%2Fd4q3AMrQOmU03jsqUgatCbwVf7QippVSG0aEbyGE9XZaK8dz4rSGpRxKUHhqtrjII136FmfYyDblu4AB7Gk2%2BtezsYdCHBEEPHCDg%2FOPpfIjXaN%2B8rTJoLSSLxZfSqYzgKrt1Kl5evVBlNteb%2FZRZRz%2FBf5FLPVtmznToiPWCSzgMPvn7rBv4TJwU6qvIL7LsOMeBnopt6dVswYUpM%2FMr5GILnnBZ774sXbV4oMQmIff6mCEHY%2BCp3NHkgyizm9b2d%2BQEZQd2%2Bz2lH0wP8XZcIX%2FC%2FqYtfQqIn6k8J5fiBIt3aKBV%2BU3MWlVB%2BAHO2wBwLIN1cCdXEFnBRqw0yLGDPitq4IXsaTrcFSulHKFx65Be%2BXOB9R%2BfmQtQEZB0og9h7ZA1pW%2Bc2HRmGqevw6KD2sTSALgbtcomcx4HIwyyaZOUhe8KKnQvYqEFVYfXhWKFRjil5basawx6c5Jb5ZuRiOnyVE9vpmTSevrowjdmtvOBRDr0ivcvDYgVO%2Fv7Scl9Ay7wbN%2FuTPMGMoMYcJ%2FFxXGs3i0jeWg5VSXq%2F2LDsHhagr6VGTB9YAz42uOl6T2nBsv3xVjkDIX%2F1pNkBzFWDWLp2RQStCgLsO9Y%2Fo%2Bp979M74OCGiKuP9cqf18Oy21TDbp9jEBjqkAWBfgg58M7TcFDtZ5IfK5vjiDEtoujOAwSylutATFQ7bpv5qICv8rx1V0oDM1AgHo8LQ5uNC927mM35DUNEEWc1o3C7%2FE7fYcZ6FLijQqSkUEy%2BBUZWetY7P%2BhfR4hx46gpHbT1l%2FdIjgOa7aNVi2F2w7iUq9KPvBVzadNhozA44sqMU8ToH66BLLkAtoO9dZaseJt%2BvlYT0wiofljFWJzRn99yw&X-Amz-Signature=f6ba4e4cbd679b593159e467319b72a194c06bab0f5c5bd93972c950e274fd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYBECBW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDnjUdmd88N74jbGfjZ2LrTgmM%2FUphEDSRFBPaqFcgXTAiEAwD8tBlM9RfDIkqDkA5d8F9ye6hAbazNh3vt2BnR03t0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlSr5V7mrbCfuOwyircA7RpGdsTh1I7IjxJZkiVrC09sTYpGvmK0UEeeyyMVW8GvHILTMsvS8lN5tjcMKniOLrTZUhlZ23E3otYHVAxDoeWGB9N5oDZ%2F0v%2BvL2TrB2zN9XQKpS0c%2FWTvX2CCBxckED4GXwxJym0FocyAyVtfEj8JKfK%2FqX9SqJvPd4j%2BRBfvnRgDg6hGJ96k%2BqYoNxnx4%2F7Ne%2Fbmkc7xutQl5GCG03W5cFYhnuMtVsQPLdRiRXBWoPl8FzQqIw3yv%2FMbLvsLvd7h8dqOe4JyIjj96z%2FdZU017zngEMX2jC%2Bl%2FL9ELQJjy%2FpQJ8m5dWxabWTHCr3MuyAtThJw%2BstZQphUDYzVdJdywk5Jy71gFwhAFBkSLNXt1J8uEjz59ovWK9uyjtvg2s%2BrlqZHrmcjIPmolcUR3sEaIiD%2FqnSfuXWKcZepZHdttIOf%2BpgNEj5g4HR8rVChkYGGudXDCJwwixS2vP%2Fpg5hCgzfkISg%2BnluxT2Nt8p%2B4z3rZexiOrelGcf4ZPaMb5AuhfRDy1yE4sdGfL77zH%2F27AyNFfcjrKGSWVeaZ%2Fc6c7g%2BLYFz04sC3VGBjc1cMtH%2FBU4RmOar6%2FSgUKRdxWcdCw4XEX23xeCzHHfhpsRClESMxIhDI8076M4ZMOSm2MQGOqUBjMpVcVRlwbxEp9n2fSDNXXFnLpuAOhKpV1JqkcMMNozWC64wPp3Ss2m8OX2epIz7gN0d0F%2FmHj1NCkECYXVCTvDoIyulEvw1kA9kOWUvWFsckeG6i3GaP9eEkd4geoVbFprvHNHN%2BzPyhVEIRhIc5C5jQGyqFEb2NuDStTgmLdOrtWKgnFasYJn%2Fc%2BM%2Fc50MivlVw%2BeuHByAZ0dYkE426JmAqe9o&X-Amz-Signature=a7110263293da97df810b314c93f978ebd481389c2278c99b2f9009cdada2601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
