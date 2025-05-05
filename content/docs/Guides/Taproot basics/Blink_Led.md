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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UB5ISB3%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8SxKfFNjgYmy2PzJtikySqmAhgDKKCGmJ111HbZS65wIgbA9T65DmUBAfHMf5%2FsYeASjCPO%2FOK0rWznvxPUoTGvYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKPVRL5eEj14PUorNircA4LfrHHQzYnSQcHctL0SY9eLelzJ06Oqfv80teo9qbDlzOJEnoxx7NZajLa2l2vXu8bi6ehTdpXcAw%2FeosZ%2Fe8S6AOIcNbuTfOaCZbXtbDgdvKqEeIwDYUuOI5GLNTUCy6zXqUvy2O3uLcKGbTTw6ROGxUAj0FAcksmI627O2cfPmcg3nolRNsSPXnuea32wf1GQAbwkyhbuSmhmBLAOPKSxYUhBsHQKhc8HfAy7PbcwWXV8jPn3EqmuRMZYZG4AdvYN2b4u1HETHJjJ4%2Bo0hMyqf3FFTvxzw0wsAiHTWo78cGLkgg40F1ePQ8Ngj%2BqWBRTJxeUVgMmRaT9C0yRUGtSHCeJyKSkAVs6tgnDSYOgP9edDsAXmFeuLZBNn6T9GHEa%2FarpZen8CYnmTFgeIFICXT99tU3A1FeAj%2Fy8b9aNmQdFVfCaJzknecho7vYhoyehn1KAxat%2Fg%2FVLbNHJmanhOjVzRutUyFTnzSKYDTdXivhg6qz%2BXx7JfZIagmcZF94M1Ttf34pdfgDNhR2v%2BkXXmTdlg53noNCPGHJfxswPF9ccECbDSQzBjEg10G%2BmYWI6n2jbdaEBMjGlgm1Y9z%2Bf8YW5wQ7VtC4O0hXeu2EDH9HPO%2BpiSF6%2FCjXJlMKr%2F5MAGOqUBvMERVYf70TYS61SiIdifHZxUyJ22y0NUOymOivwlhKxr3dfkyD03xJrt0GBQX2%2F0nRLQBCcQ%2Bv8LysHHaQD6nLN%2FCKK66yt3uWfdd7T5zVrpPPo%2FMPDw7%2F%2FBikUviYXNk63GteCwy0iAMM%2B6gfasW%2FT31TtaHn4zLhHEsPkZnwDr8GXQOWf%2FL39IZ5ee%2FelnD0nrohRxHrE3l4QSOpE2kbZSJqrD&X-Amz-Signature=30d226050af5d37cc22ec9eec155ac62fc1880d7b200982f9941b6f998792a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVHQZPJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH3FkPxwIwAgoIJQNU04VtEiOrs4SkTCdAM7xGQj3CcgIhAN7xmojDedD57YN8fbEZVKXbeEJWSJkq8WeYGXydXJpDKv8DCDgQABoMNjM3NDIzMTgzODA1IgxaaekozEHiPlM8Nt0q3AMMQkqTSA5J03JdAmlaQTM5ORns9ck3cgZFQCy2hZEoom%2FYAUZknQxFhcxsTt0C%2F53tdOBBc%2Fc6JYSlZn6msP0R7fPAX94Q5xngrq9AuyztWZ0Ls6ipQoV1n3o5OIgBkiFEWdNRBS5%2BSlLdC38oQsgKn3J%2B22dG5sK4LhsQiGu4KnbpLG1UWrxb8QIN3I3oGINT6nne53HQIij2UGjlFC7w%2Bz91lz9Rn6IB1a0m0yjnGRgE3DFVb3t6MWUpxBSEs3Q%2FHwWbpX2xsO7Nld7cpXW9Wii%2BbOlOVQZw4RaoHBppBHsniMMRpSL3R0bINmTN%2FtIsfsaBuInOPXnj9pB5diVhW2OY70pfIqWqJVa86HXqENG%2FFHVbcZN7y%2FHd2FkRYM3ZjEDKVUg9dvhgoIT6Kwx82lFn%2B08Je%2BXjMYmLu5XJHqjCRXGJxNHUhb6Dah16lM8JJuYj4hXCy41vZsebW4F3NChGsYGxXdIOzXj81IvCHepZK02ykdxBMs%2BkykcbM9Lc2ZzJ8fnEtVt9caGOS0qn9WWsR4oEjCnEfWPB8G8xs7QOaOOSw2OIiPCNnPedebpLA2OIJ7P8qs34Nd2zfkFOW99afKxUP%2BBUQNaYdCRt0M1GYT7UdknA1WIAoTCO%2F%2BTABjqkAaEuuolCafWQ5fYRaeoLLJ3bDkFoBj9acf1%2FcnTMOMRjqwRhZtuSZHXil0aEU7R4V7w8jmVAm4B0NWfNQLGEv1tLHlW6PSkfhb3tnMu4o5wHGzc1JQ%2F9hgVbA0ryzMucGbXt4sFRBznUN70TxHKmECGeD8jxW865oOZ2xunkHGmvR2Chozcyy936FnoghJa0AqQtxrUE6EgHiQrYZ%2BoQ1NONIhLg&X-Amz-Signature=d71e43761bfc033f1068b02bd4b70915918fd652234eb81417c2f27ccc2fc54a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
