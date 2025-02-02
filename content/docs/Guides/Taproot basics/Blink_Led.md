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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W74E7RR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmjjhBQcALiQAPWPy%2BAXMSdCdgMElZAtKXM2DYvtmYpgIhAL62xzY2vClRYxZ%2FZe6gZu9vsnU5ZhXmcClWJC%2Fk2DeAKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzemqmyQrAbQlxG5Uwq3AOtRRVXL%2FjiP%2FYLTI9cfUok8wadW6%2Br%2Fgt%2FOf0%2BZsXQmbCnM88iAwHeLZGVNptsSwLLoHqiUYf%2BOhKUZ4h%2FYeVZz6X5L0IeuPMI7xJ6lmfYAixhZ73vXXA6ahhH%2Fgq1Fyp%2BjdZa%2B6ryrVxpnBOxX1gc5bgTMz3BfcCnTjv%2FrzI7Pst7hm1SIDENdBujtDSQ3U2OYd93yguD5EkbOWflzZrBSRwN%2FY43yGjEN17Xg0kzOx%2FCUxgPEy33XN4FKzPuk9pjhw3Z3zOlQ5O5SpDvsuh0c8cifrHcVXSOfuLrXn2FrqI6SChk7EM2oe%2F3LJmrPu7kbJk5scbWmG5A0zaE653pCgW8sDYGtcq3jQKtpWdVzJPSiFvzkx2qkR0KMn3CUhAyY6JNnku32jy3O2TzJcU1ymfdmBjlOzKJvMY5GzcHCu3JgWM3vC1b4Y1%2BqQsdEV%2F%2Fz4ieXL3p%2BE1Zbdnl0w18JkmXdrdqmo7Z2wgEGudYI93WFTzO%2Bi5K94cKUSrX4cM9Awknuc49paqj7Pn8f%2FBK%2FWrLADAKXyV82879q5CHrTLR3K9QoIJbEAgMAWW%2BA%2FQaEaW3xMpeuOA2CwiTgh3RiOjXNJfAOA5ANhcPZs%2F8eiCN46%2BzLuVHfshVWjCeuv28BjqkATwhQ9a5CxLOr2betX1m7zI7xVKPtmR4dcuAEyGS7vzva98o%2F8A0LsNOljFuiNmjA0rS2EqKfdBaWaBKstLgYbQ2RlVbbZdvrNL9wnu7B%2BuZ1ZcKqwrMgdxP7bGIQe5WWIXYFWRbtjB6NqWLbxNZUJrb6b%2BtbzTQkMoYnxPHC5y4FDPO4Y1q%2BAhREp2IgF1eQsLUIGO5aeML7stWWt%2FwJeRWtJdb&X-Amz-Signature=29f912f6f9bed2a50a497656c0e5ac957fe77b934cf7e5bdd753d3bfcc94dbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FFGEHV6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMY7yqMd6cpHCBRsI2zBM2nzwM4WFOM1i460jNCmfpFgIgN8%2Bgyql1ctY1K26R8g6qYjw4%2FC6qXMHCqgf2XXsnRw8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYiONbwa4kqgNXyyyrcA8SqYmJMKtOUgtyKNDthOrBr3r4T2e17G3hrMJGRG%2Fk8R4og7DiOeNLUpic91gugH7sQLqiCy7DdnyMdqMh%2FW0wqqLF9jC7o3tSkc4v1zFZcxDY9DeGh%2FNiD8UA9mqfYCAGFSRQ4KjJ0br3YRlAexNpudIibNWZsEGZqReouiGrEAELhg4H4rf4870TTZxzYZO1its%2BSNs3dGxqKt2RuDVuYm19kf0ScZYPXriReiufHx8lKjV4fEboFPOOkxG8ORGOTeoPYfGC%2FITT4hbBpW7DFnmRPwAXfiDMOZzcxNmZHcfrZv%2FLuDj8Ubb56AUexjjDgaboSz%2FPn4I6ongZaxLyy5%2Bkfnmnjo8mMvmqV15xTNF%2F3FTnkfeHG8poFiTnLR93DDkjkpakqNSHkk6Y0BoUt%2BvR6sLOAA5bJIBbNvU5F9yUYIxueCAf6PN5ydsyLAuXxOyU%2FElTdQN%2ByQqeVDvjjz%2Bt9M%2FXVRNZuMcchjN2OKNXEwkQomGgNEFTq%2Fc3SMqN7lZY8wilY5nHEZg26dKpkApVC1SMIffXUQMsYBpx%2B3k2AdMEoTDOK7QplmQuT7A%2F7UuQHamZHGXPrY8HCvwKTvcpfKcOZoiuHtKuBUKStvqFVoiSjpz8E2A8KMPO%2F%2FbwGOqUBd1BMcCXM1V39H0w3FKqkn%2B3aJg70Pf9%2BWXOwfDML8efWkCIyUAt6QqDwk6pq2cgMhBOgB1IFpI6l8vBhzui4R0Ww0Y3lRnFG7JtDfMyO9HQAz7aZGK6Hv6ZKxq3KmvirN6qDY2OBwmWBbUe%2Bg6wSVlvqzokf%2BI7ojXBoA8344q3Xr%2BA%2B0pVf5tU5GyWQPPtoCM6aoHZBA4MMKTXqJlij5wUJG%2BOq&X-Amz-Signature=4ccb3181f23e484b1c102a85ba251371eb53d899ea49d445e06fbc744fe4970c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
