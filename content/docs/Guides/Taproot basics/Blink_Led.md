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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKA3AT6%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe42KhBWUIJ7vLmS55cw8B%2BHIi63uuau9KXoXiQpX5lgIhAKcp7fxxaWwmW%2Br%2FDqlkeM9iqhlryXhoL9M2eADHGrtYKv8DCHcQABoMNjM3NDIzMTgzODA1IgwClje5L0egqup8xqQq3AMJ0N%2FqIuRKXh4Eunz5OZ3x%2FIkRnP0HrCsCXEbvlmQ%2BZuBAg3pzUExUXN7BufmBFOPnZqjlfiP0%2BvI8htDt4slKNdWwGvHCZdCsMlZtlsgczhcs8yiyzupkKz8TkEpUp9Q6Wa9AO40b2Z6qe2hrTrlqPXBOz%2BJf911AP5tfWC%2Be0LGRS5ACvSo%2FtZack0koXBc5pXyHfGA5hPRTHdrLt3GJuU7K7IqAyt95vhD3Rv32jlKxgeLyQWjv6ogBLzAp1c9tzTlQaZiUDzX3Wg2na8bc%2FJrtdkqvsMbAj17Q44%2B5NARjDBUh6TbxGIeQ6bCo9mz54ML1LNMKtjrZwsp%2FnyqRApU91V5eLwcISqY4ppPZM01Y%2B503VNXDPbxSm1YCQQChm9d8UBnhrO%2BiRxGuDOuuBr9YdFamvS1golEMnsF%2BiTht43aIHXhdukBIyVGcH0Afx4CGUkQkd9%2BzV%2FZ%2F93iSjZ06zO9T%2B5ZK1flSbsqW6RVvjgeP9oMA7L5lSp45L2ZfWVdYAmVcSozMKZ0Qy76864RLDahtht%2BN642QFvXxFDZJODum3%2BxN1srrWa7I1z%2BxNLbGyGMmFB2y6DDMQseDlq1nBX2hzGycP7Wjs6Y9Wr1HGRcHDiYXVd6PHjDg1d7TBjqkAdt2Q39XsHMGroWK9CL09p663lKY783lF1NcSFqNsSFOnbWpdn2a8n1JF%2FAUhEKPM9RClZu95%2FdZn%2BBgV3Em96ru0k3Xmo4yao4HxtgZ0%2Fhg%2F4%2Fl8j%2FgKQhVwH%2FKE2iIg5aMnHthm3j7WJxFh2LMakm9OyohSmw3HBMdQFSzjXl1EBZVWzpQUiAlyrFys9Q%2Fb6K7R8S8HkrMFxDNtih17X3JFzfX&X-Amz-Signature=228fad0a7994a95758d7c9ebf1eb7cac91fabfd31c09b0a85380fed359994f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7MSHMI%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPPnPq4TqNDp6NZ6xtmokorvpNi6t%2B5VsohPVU8p4zNQIgKFNzjpns%2BCFZI7PRcdfcWj%2B%2Fihep8005NATOjDNIQfgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPi1fx08QpHkAS9l9yrcAxZ1AhL51tanHLv6h3fy7Gpg9lPJEJLeHuZk388bHm8JNDWJyOXZR3aSi2WiJp9j1U0MJs0cYzF2paNeQXJx6hO8Gvf0tWqqfaB%2FbvFembC5cZinc7fHug31ogy9CZ4npEBWgVgzOY1ufZLRfzjtKnAEe70x9GYs%2FZeMiew%2FohPjXEr4qKR21R51oVzrh7c143TWE%2B4u5JWQqKX1nq59XfOr7%2BUJ8QsTPfd654%2FlP2274Y3paGuz5BD3EQMAt2sMQoXZK0f2%2BERjTJZwMI4PqjUk%2BHilPHDXzkCn7ZLSmAvGUTLEfDDbtJnJOVu03YnAG%2F%2FirxQ7VAe%2Bwvq0IkG25dLLRu4kL4Vc5H7QZmnAz06PFqC%2BhzEA8rcbhKTbgns5sbpv9VA2feUVfYF5bVvsT5GRFceb5pG8gvsq%2FggS7E9vIl38q2riQrcUTwZUNkQ%2Brg00ugYigI50YlAvwGkKijDFYS8sJEAQyu1nBoCdsOIHkAWll5YVA3Hso%2BN%2BOaJOYO2bhxwPlWlkEulS8NxC4gBvN%2BfYgD%2FUYO%2FiSotO%2BAUhiJQeBEW5lsLoN2fjGEjAzvp1ZZID6I%2FfRKezd6BXyQMPq4usL1bDhQ71NMG2ZWTc1%2BnnAEiwEXFzAGuDMMHT3tMGOqUB9DlGXYbrpsNaWMZZ2hL1fguQMtAZpWFcqzap6%2BlvZ%2F3EDFWyX5WrrigzEdPkheG43y2beaHCw%2B0kV1sXiaG2a7Ynv8lYXMTSJOfNa7LrzCQwKmrdNBJVEkui5BEJ%2FiboQGMjNhj6km2wWLr3J%2FzEQ1vVHwbiM2C76noPsKV%2Fegiined%2FtiDi2Qi7Hl5uX6gAQ0N%2FWvkoL4wps7ZuH7kIibndeiXC&X-Amz-Signature=72214ffccc78b77b9a509cbfa29ebbb4a65883e9aaf5b2579ec1eed541e08956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
