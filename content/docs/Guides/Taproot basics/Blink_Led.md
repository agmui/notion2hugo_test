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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CHTBK2Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCUGNr2uTGEDCU%2B0jpWSr%2FNF1zEObj8OMhMhLbDjrIEuQIgH4yX1Lkwc4xmG%2BGXfkKXoZ2PVyfKWC%2FQgCe8Sd4eD7kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZkzjKc5b60uXhKCircA5eU2zPQTAlkzMyfmomHFe4lNv6VJNlxYSaFnB214xHFWZJfaZuFc7x5dt4%2F6mRvfODDt%2BEp4FXQkdW%2BXIN6RB%2BgN79Y3TA%2BT7GXBuzwEQUt5gNbo0KGN9RKsZlbIvUjse10g%2FplL%2BXgZvcnsqOHuZlnB2QWwi10tHD2wJw%2Fr3XCo6sRQ%2FMHIRlQWp4cy6ry6RUF1gFgtC2bUcjfNvjy24oc2aNxqSHZHZlCVzzwWcbwe7IAoIx2udukvP0JQaEysKAsV9AtX77zNDGWhptBSz41LMf2hpKYv4KyJvnJee5ODnS9yk6KrG%2BNWvXJkC%2Fvm53OQtq8CGIWjACtxed6s8PRjpOHz9lelK0jsK3RVxhRnvKW1noFlQ%2F%2B7riYMGQy3CtD%2BD%2BAtdBxLwmPXsUtb9bVgyrgEuqSe2mQ%2BGbPxlBk0BEp3%2FEG1WeVckcV55EwaB58ltX8EGVDU%2FvAZbSWbF9ApzQdpIIseDrk3Msjs3AiI6uR7k%2FH7hv6c%2F9aJkpG1RWgBPHrfAZ4BMA8Rf2G%2BNzvON4hIwJbFCTk66UsVIJMsgWcvyXfJMQJZ6NWLQ7tmcttMrSQ0otYFLGPr%2Bb99K557DAepYu8e%2BQGX8mRN7M%2FxZfoejmgdlsPu2CqMPDZ9b4GOqUB%2FjS3qpiT2yls9UvvXI%2FCZm4HjmrC%2BGovjwhB4ZatdGUI17pfIpObJlxsicavLUNaxQBOeUK5hpHlZKUzJKv%2BM9SzjZZTOGCH3%2Bt%2B%2BzzyxgkTJMMBqR4nN9LzeDeKq14I5kPyP1Qmw81ZaCsQd168aIFCjv545nByQZmr%2FuEoXRTaNXTaYFQa2A6XU35tTvU7o%2F6qJixDN33n2SU98YnKcW0K2YQ5&X-Amz-Signature=febb74efebf0d1d4becdd65d678ebd461b5281c9d93b88531b0f2acf6e5c6a21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67Y4IME%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCqymTfzcHy%2FN6u1I2R2gSvZ9OTyWUcoTkxAz9bvmPzRAIhAMJM%2Bqu1dSFaJKF0ZkCBkXuy%2FmegI%2Bfpjtg%2Bpz0IeYitKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgpH9dnBrn6DFYaDkq3ANq6t9YjtKJ%2BHW2Iy5QyHEDkB3x9KlnEOK%2BBoaU5WbuJvtSRyzLXnGRKrstNn63U5HwtVmB3sgAB%2BNvrmgtFAOz1Y8ZX0eciseNNO%2FXs%2BEMYDm%2B4Smr2Q3R3A4JbW5bw4%2F5eCAZuDxYcMBamDYa95AKW49v5xvgSisslFfWDd8fvk1cGn1F96wD0R8jlx1DqScGxhVMxdZfK9E1Tw6FRYPiw6EMGyMQSa4tc1JbQUE2H4%2B4WTEyGCqkms8%2BNj2Sw9Vhoff%2FAwjMkXmz0I9QxM%2FVTY33ORK5Y1qp%2BDsam553OBMteoNsUzr8UshEF393JuuYjuQA%2BMvzKDtuCV85yQz%2Fiz2mNay9NmUD25xF0N7gQAwU7uCFgwsWpt5MVQiTTRJomVGHxlDcvzecFLcedLedM9%2FC8DfpYq0FTli0e1i%2BDp30WslYQntVRT9V5NTx7DBfauSH2LIPXndhU5fhVbg0ZJ8jQabiI%2BydILhcwWd5H3jEusIxopr%2FP9yQVGT4vacFSX0c6JzSazJLci%2BVoBY9W%2B7FxfvaLKouisLbUvX95CiGMNw8kPVmJv5OegROrBcNBJoMST%2FetlY1GQNjdYcK5ROXpDVlftBBEq5zfcK8PVpSCv%2B7ERPY3kZwmzDy2fW%2BBjqkAVG%2B8aSgeNUmtFXKBNOFJKpB7X%2BcFIqGosQXkueVD1eJo3Ac9KH9QF0%2BVjhdhXyNodkVilXqPK6rsZGIzEv78fzftJ%2B%2FYozDYAUN%2BUQ%2FP7yqqpPiraSnKobtgycNtsjoAkxILtSBkfssS9X0gaNi%2BPu2Kbe8JOH9xX8Wdscy6ZNBrA7acpJAt%2FPBuTgnM7T0UsyVnFMfr6%2BpuTOXDWXyLCDxwToU&X-Amz-Signature=d22de689fc6e8a3e00ffca928617693121e1a34e487040a27cdc703369c8ef05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
