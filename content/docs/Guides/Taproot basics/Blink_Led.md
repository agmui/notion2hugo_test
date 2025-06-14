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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3BS7DVI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCo%2B8QPNmHSiXaiHdKIwxvp45EYchZeqCJoNL5dTv8iVAIgerukmS58fAuBmpRbW3JORYdPwMrXGjvngTOc68JIRrIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGxI4mNww5PJULfYtircAxW8h%2FZ6zUAWHYifBsKj9KOZTvlpIAdoGhrcpJrf7bu%2BnbHUP9h7I%2FM1lBd9Z1ag%2B4B7uT%2F%2Fnw1F8vc50yqqWIDmSU1W5EI8S5NDwj50cKxup7flYNdg4yLccdt0L3f9b1nJnSITJduh1dn0PwpMKFq9TfZqfRFIUOd8htuBZCd2Jpgqv6f7JDqr9JmYQSu4%2BCvTuDQ4WLTw9fRPMTwPIb4SF3AnGgsV%2FNmDyzYFxU5euhQTg0l%2BWUyyehYKO97ZEuD3xG1HYuMq3qaXLsFZmaalNcw9CFTWSgPX15oxjSq3rq16jwWys%2BpcrCadBqgLBCWQ10HhCsBtvY37al8NdOmcI0DO6jWFHlIgd%2BeHRoGJ8jxXaMjrX9XHjHpktbkFVQpBMz2QJpTSAimbGM3rehdKq5c6ANhkcXTxpxd8HajDkQM7p3Z18Nen4AbnKcEHIlDfbEP3DHZ5eeYu0FYfge%2Bh%2BuWK4OK0Nf4GpASfWnGtGFieNBth9c3VKduKdnzGz3e7b9HX8ad7wQGYdHdpqd3Wrk%2Bi3pbHqG5KhSBXpNfJH3usmU%2FVqFYfEZA1IBvQDIPohnyhFyPEJStuqz3b6G2VNAuYJ6afHuB4lWlJBYZRGZEY84BQgfeavbuZMLbss8IGOqUBF2%2B%2BNhPzHoT2xnXi0QNs1LngboyxS3PHEf2rMhr4BTGtT0w32WQtoTMs2iuezbAZ59jIjlspqTh4yuin77yX7nb8uHp%2BucLZr6Lw%2B7%2FCQnaQBFMhZrkxMZtjjXyficcUEdIlyIGsboV5O7RjOt9WKnU0Pubk7DMmI781LDZOUyas5yNQu%2BAO%2F%2BL1yHvTCSuEmWRYsxlMBIOG3gHqlJ6aWLTdl8kf&X-Amz-Signature=df188c1363db72fee425f43b4f91650f55d3a61b3a6d4a229bc08a0aad46b62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJD5LQ3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHga9UdufqKu3zZvK8zahuOv539Pem84bM76eqWkzWNbAiEAn8xlPCgn4gKbhZl6fvj5I%2FwPJGmz4hlleGAlkG53Tvsq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNWKYaJeIauqAka0nyrcAxElSq2fiT0m2BAwQl3%2BBtIQc%2BVDFm3k7nzj0rxFnUo1J4X8YPAHi4S2G2cY0Ankjo2wGPoX%2F0jxy8Kj29nq1Jinkixrc8dPqOA7O9UhD3RH%2FFGnvhcjqKan8Jld5JSZeyiaxWGpqQyXYSJMbX2fks1VPZ%2F%2BNfnaoWrFdGlFcROPLUgytDTEA1AS%2BPOW%2BG6pIqVzMVgbbLN1uTdHbjh%2BFyXFsofcwD1kuehh2D%2Bthv3awOEtReldi4XHKAj2KQKoZdxg4GlIOIRku0pfAw3TC5Ae%2F2NQzRm7Rt%2BocxBh1HoRlPNPza0oTruz257wk1OhmSB6IVTErObJMAdvV9%2BTX%2BnLzSl7FJjdKh66Dv8fy7RoO1%2FzkE7Lf7GVGi2ag0wTqJCRApEkASfcIJy2vqIDYBo8iGXqurppX0qr4KaHwMWHkDQzJvlZ%2FiKwdGQmL37frQHpo5C6vxVy%2FwdUVO2mvVPBelseCItGES5V%2Bfl6rY2Vxc8TBbEq%2B3MhxJq8eXz3vxRcj53mVzr3yILKA9m0al2JMviHFYX%2B8AvyTwaZ9V0fmW7W4WELQWsIoE529YPwDU%2B%2FYPQjSodIf6WkJxw6cEoGvyQno7aYkDltG1MTAKbnE2%2Bh6cSZzqsce55VMNjss8IGOqUBP3cIRRDMx6zC8rj6jl3ZrhPgUTBWSkAcH8Nte0jmbyp%2BFFc6GWYWKnyhTn8lxO8a1VlQW2JgACaTFiO5nrW%2BPaBpoaclg77Mgjh%2FCsv4HFcR1HbW3AQuxt5x5bcRqD7sL6YGzikJQa6qJvC7N7c%2F7lsJKb%2FrAjUURmLq2o1WsGLYSCSGEiZFvzbbxTzdrIDULN6SMfhMk6fsK9OF1UXGefKiog09&X-Amz-Signature=bc89453fb6210e42ec6fbd0dfd5ec7f8c0f77932bdb6239a6daeb803b76c6dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
