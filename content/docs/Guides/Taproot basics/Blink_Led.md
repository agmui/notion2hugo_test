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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VJ42WHP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDPvZVasf7a2ZQ0MQNrt4l%2FaQRKciuuXEakqQxCEMmKSAIhAPRGADEu0LcOUOGoA9v5f0%2FrGCec3zu3SrCvffrv3jXoKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb71iZmihCbCqv0okq3AMXGOKjYx1cx20ydsFgKZKL8xvpTk9nyoFT0ycuZs45PLimqK5Nq8A90K8NgrrAZKZQW4wjQJmqx%2F%2B%2Bd9xXik5dcuxo1iznZvvpDhngXX7gqqTnknOMfsHQ6yBNbSf2bD6Ph2hUqogTdVa67BEPPUAuX9ZmKCiY%2BggH2VZ%2BY%2F83iSx%2Bz84tjToAhugcWVIIoLprMnyQYDE9%2Br4kJvUufGalLoxG6Ybvn4A%2BD6IlC1DWKRs5cg2Yx7viiL9pz62SI6yUNxQB2P2EPOgaKgvBYp6Rw6hmsrjsnLnI0EgbGWi8Ke3yeSDWUo1QXS2q05dj6mDts8co92waH0iJ%2FY68q5FhNKW%2B%2B8MLCjm%2FK4tDFjxJcBOeEgHsoAIOc66pc0BfCGEPgW%2B1M48uwgbfHZ2aMSwM2EcBvybxw8st%2FB9q3%2FZqg1Qf7PY37r6LzEtBR3JBHGaHnkBM6ZOKX5DV7SYK0Ltrzc4cbAC3AHxokwgtEgG91b%2F2DJYfg49u9QhglEj95sfAn0Giz9UxTXKbPVwi0HOYr5e2NVJzjKq9ZSJi2Rj5QepVlEMkW5rf%2Bc3n1XdckzuDKOTad2VrZP8TcI0lPMIP9hv%2FQOqvJMM%2FqQ%2By26e28vj0fikxASTYfYAdazCns9rABjqkAevhUmgKstAWd7apF0WFesOO1ZCqfn6oqVZhKHf4dRQc7bHSu2C77sOIxF88JbpMqGGXYqs4NEsrjC71Hys1fhkv9dbCziyg54GIjLBYtgXqRRcElTSPYZ6ePNKg0yLHhHdobKW%2BzN7olkKCDCtcLjVN7NaPlG21cqzVpXWr41K6h%2BqCc9%2F5TuQlgPvCV5wdDV4EwrE19H7n9YYJjhZETJ5HOOAd&X-Amz-Signature=ca7126e7e39fc1a633f41eee6ea9026918f1462ff5f8580b8787bdb6fed29b96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVTV37T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCXRwMVHI35PjahvWAGsZ87SOMJSqO2l23l9I7Xq9ecOAIgfnwGcLVVNKxa7QZLTGo4b40oDnsVckdhB8xecnHuwewqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpZEwaxYmwPnzcPwCrcA6E6t5u4ikeLKczwJ10yU%2BPAfQqTo5xcwrcY6UX%2BgOdFlQbdCmzdYiYCrL92ToRzDBlS98I2HTSWjBndqYuVNF55UmJdbx8qQdjtBjxVfjAhAS8T79Zo7LN6NzLYiGfeCua3yZmgh4EN1%2F%2FRd%2BLz9R8v7a0V9kPeqN%2BgqAtvRQhWwBfccUX%2F%2F0Ev8ap1y4u4e1L439Kktqjsv31diP8B8UJyB52twOaGzB7sCB5PyUKj7wXdRQdyow7eFK3rc%2BceI8bKrJmE7iT6nsR2VKxvkHQ07erDOc4tGWujYe0VMKM7y18m2WIyLpu63XZy15f72JJCi5doaetHgwGxxdxbjCxtkUAt8bSkWRJd6jWR9%2FhQUu%2ByC5dbD2baLC%2BPAN%2BHFB2Gm8I87EaV3Z8dX%2BPoR2tm0%2BEhMPfJ1oLA582PqPqHPYi%2B%2BE2BlQ6r2N%2FwGncP4uh%2B6cjEPPw4iMhA99gP1u4Qvi9fDyRnNBeDOJAZzYaxegN4Me9FRvqUQQJBJMcYZlBCV1ZfzHlyjBwiEqVMliVAA9AtRysFxrmmRSL6AtLnZKVeASt%2B6e5XS9UO1ZsUsnvX7oUvlrkcKMBsXFxIrgVDvwqnbyoM7jn2gGJJfVvGxhSwib5vPpZTXhUkMLSz2sAGOqUBBHvlHk0SRozhT25UF6pCXhb365Fv%2FP59eY%2FA15kgcplqHtUNk4%2Bn3MB%2F82%2FsHAbSxjbIUV2twh8AOS8TvE%2F87ByQ33l4XrNmQrqQJN4%2BRGdh7n8nSTjDJ%2BqSYEklSiSiooj0Ilp%2BgcvLaTZAlTsF8IfYYztvYD0gNA5IUONxTyWJkbv9Z8Ymj2p8frCtBYzLM2Y1zXQXYfTC2r%2B4whdDiCpcF8ij&X-Amz-Signature=c3168b20bf16bd9d8973a9d5e7ca82dde0b34ba7f736f604556805a5ae3b5bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
