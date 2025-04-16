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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTQEEVD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvSV6R6IBzrju17%2BQZ2E8jvpwdI%2Bab8s40ZK2t8SypZAiEA7AxBju%2FG2L8meFJDkKrEYfXo9%2Fv%2BPulj3K4XRtpacNIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGme1lbps2Z5dxhjOCrcAz23LHQpt1UOWSoRYi4MfTJIbpR5C%2BEnD3eBiIdmz44m2n%2FZ9xbkkaJzqrOcPSCIqeMBChqS3nH29M0JFj6IozgqwCxdO9l1a%2BpoIsX4P7WbUQsFKTvQQy2WzeebRoS0npGLaur57TDsxjR9Nk2I0pvTdSQNgzYeSvHSoYYTvu2o4OnsXi6yfkz0tpM%2FwaY8w42yUi6X9N7LOPiLrx9v27No6PYUJoFig1cJQ9e1eGe9UNVtCC%2BTRxWSwNLYw6SwX8S0E6WmXyQxvIZ%2FwylAoEcpN8XhYKZx5WUpXA3k3Y%2F7sqhfRUsVUVGVqSNhaPqmpLUpQOUW3EGbeme9RoYzisfpfdtn%2F5yKN79ydVZ7tUIRiaDvkjNiC11xzP5hZza3ZsPqIej8zIzrpjEpgilfOPUmHcOArP%2BgIFV6dSdZLE9dkK8Kp6em5ydazCLEOwFvcvmT0ZWyjVzEvy7DRmpZjoi22Rx1m89xStIf%2BhjVrafVyn2CC4DbVNtwEwEPCkqCIiAo67P%2FEsOospmnuiWS1KcshkNBlvG7YxpQYZpDmPwRBD6Q9g8b43bz0SeLoT3BLHnyHGrq%2FoTo4ETOT5lmEAkA%2Fh6hSDhx2FZH6vJXjKinUSrBxE68e2Rcve6tMMSr%2F78GOqUBZvLxAPSo9KfSICN7qyS8smyUySsj7ESpj2zfZ8VZCS0hzzwJs%2FL5SmzjtsBYdDaCUI8GCurgZlIWJTRS17tkAyr1eIwOgRgBFDXq2Iuo7bp4n2QMthWxC%2Fd31VQKfn6Isr%2FtDCruAFUQGuOgjmXM9UJyaFR%2FVAP%2FjQAQ0AlxqBy2NP3ji2JyMY1LPvMjayS0umqWGuKjyKWrJ9kGvk1spn3qokMz&X-Amz-Signature=f833f6baa4f8a2a72eeb906de8b8a83d5f38d8a913c3df49d88b4673bc42886d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBFP6CRX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB982eiHRKP%2Bg4llXiWgWeMk7wf5WybqU6c7wOfAmYUkAiEAw%2FWG4lSnxCCxK7jiUFMfceZ64rW9jwSfwWWSh0XtqRgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDINDblhLCIZnoJfggSrcA3DMeHF38OB%2BZI2TocEmg55KYxX9tDVz5T6dP5MG0RcM6XMk%2BYE8UbWwUMyC6veNpOnFKRI9e9j4%2BvNZdYhxtNKRG4gdvKyQhRfPi9C6VfuMHFCbJnGBZL0mUTxdbM%2FMfc%2BPxleTnkWRt9PxWrQ%2BfvryALdUuWlLuPwSCKUVbTVjvwPdgoikGxsIq09cliF3PFmWgIj%2Fze0r1BVQ5VWhb925GzwmbYb2u1PGorDJk3hdkoeX5KI4nqXOzSi2xdJDNRhRu1eMCeRygKOCavEsCytXWlLT5GTUG206qM7Zu01omTDy0g%2Be5aLQ0ubzgA0sHdnnO9eWH%2FZc%2B8qzmiGLlDNOGuMnUB7Dn3QM6vzZBwYcqkkdkHV6ggFsiATNyyXgndYqSgtykIQJrL5oxGSjwrzQYobCk33OIOLZ2BHq3qFcZOEZuvQYQXS%2F%2Fd5onCULr%2B1fW6%2BDQEVNBtD44P8RzjnsPc%2F4iHoY6Jz%2FJX7OGZfq4qrve1wFYgjn3pb5AV51u6nmqDt4jRxx1nkzW8UjvzYOS6pGmyfKeylugxywLtIj2clRo0hROh2QsXhYzycg9hlW0Xxx7V10zsmD8ZuV9cG6N4dY1Wil82icj869KKinDryotN%2BWJTvohqfKMNGq%2F78GOqUBRGbJ%2FjQRzW62eGnUC5sOjYXH2o62tRPoiEAYdJuNOATN0bEEOkmNQ66DKGh5cVs5rmuZzAVcTglk9lpAayMBmu5GGiRlD5xCN40WL%2Fq6NjEh3WuZvDZxk6R2GSzkwYd9qULhrlXXY2l4NY6QViWxcFjmF74VZBrz2Elm8TrYZTlpyfVpP8q16fBhVt79LKE2nwfEtq23AwSsD1edlQZweAZg0Eub&X-Amz-Signature=1a8a52f0e194cacc3d151e08a629e9af0e8928ed63a7bfb1ebae2729a362e4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
