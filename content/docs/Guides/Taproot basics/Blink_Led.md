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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFFK2ZT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN24fTeqcyGE3WlAL37ioxcA0FF1UOQkRNPP2v5uLDAAiBy8f%2FmNBbhnqK%2BiO4ibDepkWrxvgoiPS85yDbwEllPACr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMcXnCMkIqJg5SayBXKtwDFTFUOY4Qx2V6ZaIFxyi6z2bKPxG72vuntI%2FD95l8R%2BcBVDtn7WadmYpOjC0zPRX3%2FC1N4s8tDjWbtv08KsE%2Bu7weGTh0568fAugYskM4zXMB7cNUQbpXCJxIUokbQE8j5gAD40%2BPpYdKnppaF%2Fh3Z4tUzbBlFYdgeEPSEpRYr2BFoo%2BzUl2Nokry1PjbVufSNC0D%2F5i%2FYwtfcwmZF5ZNV4aps0%2Fbp5kzOOzq%2FQtfisb00ffDBVPEBjad5tb288g14JBAOQ2kbKN8TfhcwbBTNE9vM6llgGjzaCC89C2%2FVg0Y3DQtvlXmlMzgMnnsJLBeDmYqOXyFSCSStmgrmlis22ciTJ0zTKArXhozuGsPepl5gTUHXKF1XHvAgnxIcBHuYmxC3XCco%2BbbHnQh%2Fpd6sU3gOr4Hfx8nKDPV%2Fhb%2FbvVdzCcYp71%2B9z6NhnS1jpLyvcdMSP6jsR0eU85CNUwBgRP4bnyELnspZH5Zx2Pn4hv9SiP3zUfNNLIaAPXHwhqNRHwT3ydjh8iAXXnvOb81k9EH4kExE5swiVlvr5J1SlRG7YzvwlT7ky0znu6G9vf84PdlIZhYt2vDw26ftqoL7hSifeQcrySIHlDeu73DbkINbl3lgblV2I40PdIwh6fhvgY6pgEzSK2cHbYxghS%2FP1gfbDMTfIX1gdeuB%2FU%2FIMQAFWhxwvdUSLS%2FyjlKkw5bbnOxWCVh5Bx93ss3cWUKf4zEe%2BL604A8NHDlNNmdXX5lRr0%2BrhbFhaTf5fdJ8bAAIe%2BSe6kqyK8OjAe%2BauaIBTh30tQ9tpWJDMYdRQKi6TIcbjA16YsolUeb2cQlLA6V3D0VbUnVcLG%2BHaVn73zgtZkloRLP%2Bvce7Kr8&X-Amz-Signature=3a905f6824a811c8ec448d36dcdfed397cc958d4e78a22d7df42a94160ddb786&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXHHWNS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTOAdMMDkEDwWcuRVxlr1wf2lMMShGbwkiVsik0ZBWcwIhANDpYDyRhROMxuNTaxloyY0MIJZTGYV7azuhZ3UO74%2FjKv8DCEoQABoMNjM3NDIzMTgzODA1IgzidStIv9JdZ76H2Y4q3APnaZK7eal%2FSjvk2uJqlBYFan18Ghg%2Bh0nP1bu7WMsuW7T4fe0NgmidRUENmhEjkWMWmxAZ1G6me%2FkcM5PJvKBf6iqbHEIPgG5Um94hHT8zXjk%2BSp9MH9uGKkv8LA8jvKJ7wwNgFpmODPLNb0K4WCyjB0EagjqQEGQ%2B%2Beyc3DAr1py%2Fd8Nirnzj744GUIo9Qz0pUQwNMf6KDHFD51n2n4jufqCeVfX6zUEHRi5a5imImcTbdHRdjh7WIP%2FYvVW54jkO0T6JWxUn4aAs1WeT9SdV9HjeLjRUF2GEqFnEF20dx7h4dMqOHsAZsvCzDKcmflj4o3saqVAwZ7%2BVYBgTWJjBGrMWFcVVIwyh740yoW7wcQ4FH5yObq7cYgmbWbLLkvzgJArBKVH4TQeY93EaCH23sh5EvV9oJOMcxb6bAtLd%2B8nfBb7kjbmCOxUXZCwByeTPJSuB6iD6uJ3a76rXW%2FlomsE4sYPOTepQGjAkVxywGIPNPmKJr0ohpx6fSowiGOdn%2FKz%2Bd1zvqrb4f2NN1t8uBXV6IUpg%2FfNf%2F1kbn6in294DvUHznhdj%2FFbvgRVPJ6d3nb0rIPcoHU7LjirnYZvOhSJL9mQ6QyVPcoeArPL7PbGnTtvodaDL7d9y1TCwp%2BG%2BBjqkAfuEHWYbi2eibi1CTeWTtzyHlQO88Bt73CQBrf0Qz8Z%2Fesu0i9ZdihXWHCD6WnvWcHVUGSUgxXeIZA1dZouzAuSzVX9mxGcNIyoI1q15VgPeHqu6dMchUTspWzAtYntS9JM2XjB0ans7MOvN4ZsyHSdBF2jwkh%2BY6NxNCt73DwS6WD9ZyB%2Bi8QXP0k6K6TycBVFQ4KV5rh0Izv3FIV%2BNngFj7YcQ&X-Amz-Signature=67205abf5afc7d023fb792f715177934da20703d3e6752fe57f3aa822fe5465a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
