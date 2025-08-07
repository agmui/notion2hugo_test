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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AASQT5V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDClt3dCH4PtskvTX13I2JysA%2FeJhPOjGwpC8lMoFaYuwIhAN%2FZUsroFHJyFOyq%2F%2BZ71%2F%2BA%2FBv1fGl9S51sG3rtdXfeKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngNQSHznPdFz8uBMq3AO22996s8aM2xkIAtaFng%2FsIkvuzfAZIYqXQQ6QpmIiPHN4X%2B%2FoaDc5UIFEf48DNkRghZujxg7VX2JPH0z8xwdDYKK1rIsWBDRDN9GNJin3vBirzfPhEWyT8wbwYX4sJNzSoh7Vc7%2BrKcbU%2BKuv8T%2Bei9sLohbHxu5Ke91p82C%2BHiHy9p%2FelAWP%2FQqXezy9DiDc9ShphRexMjC2MMCfENeQtCmEl95mj3fkXwulumE6NCyCrgdDXXu4n9QGz0Malx1THn59rh9N%2BPiHu075DYXdWJ8rkj5bolnw6eTMGRNzvl64yYIxPeR1wdl1WhO1e3taVoulvVjybMNaokqYT0gb66QfZb9iR%2FIGRDPlM%2FZE7VymUDrb5wKZ%2FqbgBR%2Bu0GNGKu795GQTNWfTevcOMohOr%2FyIEVQ5qEQATFIAhvlIN1PislyT4PkcElgcM%2FfgW3xr3S7RVePtwFaj%2BfZ2lvGg64BoBUSy%2BnnmxKQeVU38OzhUJrWgFz%2FDITXkysbHNYTY102WBYAmy5VyZ%2B2cuKbTjTYiFdO%2F%2F6PtOqOKt4B5gyVnDgDTjJdaZfGHss%2BqMXjwNTUPwF85fgV8fve94qaLf5moypjep8W1hrY28rNnvE3D5kMgPyjxCEbzcjDV7dPEBjqkAbjPhzPcsRBD0%2BYv8nr4oZePJC6bL7xSPQQUnyOhkw19VbLlVDw09%2BalvT83MIJfsaHZdH6y8NZMA9R4JZYhYAm1EcP17n8ohSYfLb%2BvsnbdxN2JbAEh86MKdIMZ4YVH0y604o8EAb4iMdIA8rv9GNwx6T9yV8lLZ78E0jQhAuDLmkdCtE2yBn%2FNBTmR02uCwj0EIGPkdgptx1XaJN%2BAFSJtvXOa&X-Amz-Signature=6aa1350046ae222caa1d93bd6fbf94853b91f789c85f65fe92465aae49ecd370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTI2YHK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCW%2BB1Bxik%2Bf5FcTETeNUXeu4fp5omoCxRDq6MeIJYATQIgGwLD%2B%2FhPy5aYpmNUVAMSJzXqeSdM8sRzy63BTDdwtEwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7uJtIIwSH%2FtjGorSrcA%2BDQHUX9KslAHP2mpbrd6rL6YXAuzFUYvKP3oTEZq0RM680N3IVn5ZVB7IEeKlMNdGYoBOvnjzDrDs6wkjL%2BBJg%2Fqv3uuFATNIzhWTEXsdxyTh4xtdnnogyLJMRsWxZJSJRKdCju1Jqv0h9IQXCpqHUICMZ86x7ZdX5L1Lgo2GIZFkwsPQYQGpa370ue22X6ZTn93gklLFAoBEXj1Dj2%2FeJhHlgc92yGaTPl2d8GMQ2lz1tgS7pr6La9gUkSHU9owwF9n2GdM8eaRjuJIz3a8lhwtVCOMftgpgPe0M1pzIBIkXSRBEcCHCeNqTQhSoQaXibebIpLDpTEg3IGA27aLWB7ikGVngHIMBepEEnWcs%2BARzD71hBj9BSYRwac2ZJ86kQ0WMZv9rv8DdlL66fOazQqbBEs%2F1paJfiaMLkYAdMNgIs5smQVfhl5ZV94ZezBpJizlhQs9p3JkQR6o0M4dPXPbPUPVOYTziYN14nKPOPHunAZ6%2B9ickcSovVR8bkogws1S9vMwtesnZOvOyYSSLekzE0%2F3kwHmZmJq%2BPYlVIeVLQEcEG%2FUVm%2BRvRO7oOJ5ctBPSB4oraGAOAIUXQoHmyE3qkEnDu1OGoyiTrYitUwVuAFASPO03U1Da%2BCMOnt08QGOqUByqHBxsrh2yf9e5QH5DADcawaJ75a8vkaI9IDcRLH%2Fw%2Fdp8VW7H3asx3vm2VW1XI3PDk%2Fdzi4hHEklEWgFI4MXXvFMWy9CCFZKrHYN3XCBggjzvJ1qWGpv5POYYJvn4SPQp3kpJm1upA3vBYxCkFlckrbMKs4Ch6%2FLOfFoPbuswFABbhAfPJs8GSQN7gMn8PZN%2Fll3wA39iJJ8tHQjnf%2BWu6p%2Bt9d&X-Amz-Signature=9e6fb6a4cd36dd3f24d2e919c4676809c154773ee79ced169883860e207ec66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
