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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWEX22F%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHBUrm4d1X2EGsLBGI0tYIHkL%2B4XiGWlDMtM7ra1u%2FvEAiBFYSQajhIm7JNScvZ%2BApxGHjc8s1FMgtmAWJ4%2Fnl36Nyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMZ0lRcPA13qecWnEMKtwDNTmGccrBqUSch0kymGK2I9eCZg1ROVuX%2B1lLR90tfHRsgz5nkLHpxH2Aox662Nqryn4FXICbpbTQP64BrNfqOD0svF0489oJRy0ChpgdkjccZH2iXaBkvYJu1f0edP7jEaHMhcLRQGULen3WF2Ic%2FSvmNJFBmwGHZroHr5%2FXlQUidSu6gq8vop0%2B%2FD%2FxevxBto9G2fJzVZpoK9uykLurTxRmnKBzw8YCZbDVnEpbN1pjaSIx8Q4cQ5%2FkM%2FaIyPCB26IATyCULeKS%2F68rDRr1ISwWqK5TK3pk7AZFKgxkSLmoFNgsGFaM6KZy9XLvIttPS4xsARTf0zUE%2BrupT33OzDS3ZXluV%2F%2FEHKQbkRVTTtqTDNS6DvyzieZOOcbHByjrqAyKCBPyD7qXEaKJMLqNgDH8pu%2FwvSml%2FSbK6u9HQHmHTsNC9wkclacAa%2BomwBmuP%2BpouBWwAu1RWGi1Np2yeCoVNSb8oqor10vzukRZEYHztp%2B%2FYGQPo86OeKkpe651JZ%2F0V5bO5GTkiZZi0hZRBtNt1qYOiMYVEeJ7djI9QcXuZxva79d24HgVwm51PZCP%2F8DZrs%2BoDA30t6Py9mYz5Zmubn8%2Bl2gQAN3kX48pevbjuPsr16v9hUKhi2cwm7%2FBvQY6pgHPvug6z3EWJEpuWSIcTXfn3klDKH6hs3MPAEaBGvv%2BA2YXgyBT0MjWcIAz4lxWAt3rZZjDxozr732NpZ5Z8fx15umOyPMXetOnFnfWrcgNkgcw1YR1Ax77q3icgmP2hbGyhZlbPPy5%2BTmlnJhB72s1Mj4Lr3Qs6CSm%2BTF0Il48guFGVDVfuTx0LRMPIpbF%2Fj7qDtyhEHS0G%2BKuFzPd0bOrJmr553fK&X-Amz-Signature=2b08c81b63ae4de7ed46e34c9bfb3a35139662ba6f0dc55890dc32a6252e5c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NEQNUP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC0eLKO6qfY9%2BKznStgNZA17OnmPysoU855fJJ0tcKLUAIhALsFLMz29HAyRrdIdkZcn7nSMao2XW%2BNxcwKPt9YN%2F6SKv8DCEMQABoMNjM3NDIzMTgzODA1IgylxvDxYPqBliA9EVEq3APzpdhLhpRx4mWkGR%2F0RRM4Rh5EXcqs6RDTa7EyrCYhplOB%2B4jLZowxIxikT%2BhP27GO39fRA0%2BrTZFNrd1trVvnlanw2p%2F0aQqQxOFjQkQ3tZ%2BcjTFPZvzxNJTH0F%2F08VCD1bqjKE3yByOcwqcsDo%2FzM2g1oTMHXOpOyWI0AfEh11zQZuKxP6dGYc2aLqyplttfsnm0M1bC7KhJy8LTKzQu3OgVbHaIKsJPEbUFuHMni4RzJ1m0L7DwVe6rCoTEh1KHg2fBFIfkZwhVzfgRDWBs2zzFZptf32%2FUZLbsaDvQDLV3ih7%2FWLXVG37dB1o%2B%2FFjKD6wTZtDB%2B4slmJPD%2FZ2RHO0nPYVumos4tLaxrrnbo1OeAB3%2Fbkp5JtXPLABeYLWxDZAzMQqxbeujbDWTyorPx22K8Mt4UWkXYLAinOQxvZegPrJhi0stdTwhzAUGaTkZwNc47HR%2F87Bm0ZrN2CEoPBmiOQPh5BoziMzW9T65SNfw%2FB8hTGcIQNHFroYAwIN5aD2btjAObwmstgdPkt2%2BHKYcMiT%2Fc1p8FVCAF2hOCNsJBG7K%2BIEZlodgZa34cMSILYuqFyYG%2FLppTm9tOI7I7RZWdjrr5AQKztUdqgXW6DMHQZG%2FLsoFxA6yPTC4vsG9BjqkAWOi%2FnqhhtelKPIfAnvVrD%2BldQdlDazOLdgocMhauvxJD69WsJXwKUk8tRB8bFOIlhF5%2FCfxV9xHj1xe2stbcTT%2FCSdr%2BPjdpSTST8dvvMgtN9IY%2B1Ix3nzlfXPpBxVJcVM88A%2Fo%2BNabA%2FN5MDcAOgIhFy1XNKc2BYv1oVoIZ0ARjJ2hz%2FX82BNaK6ARnMDJCSoM0IpxsfuBnaLhdcfu9VfS%2Fv09&X-Amz-Signature=dc3c5f9fd54c03b42b948df0b988c55f276efd0e24d945521b337d148e2fc7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
