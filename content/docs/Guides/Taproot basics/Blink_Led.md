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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OMPLS3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBt1Rw2H18I3R10gJl6qBTXEJ%2Fo06%2B%2FzMbK2xBEHS0S1AiBza1oUwVp5d2q4Vnb8j%2BQTYG3C9YAGLnSMNKOncBGnMSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM4S3MXTTpURhAAmK%2FKtwD1iOSDg3WXz3neQAYDYk1pGXmhtGdM0JFppGG7o2q2BXF4RagKjyyAEfLEeWktMGkdWdYmfnSKBuH5U%2F90AcTseS%2F8O3oe%2BLQbLX6nA9ZHduFGWtGl%2FlH2NECnPiGgsTTouUkwOJaFPEX%2FWhPcK%2FbpQTbnnRY9S0ZVlef7ADXvEWGJ8BJJOqvp1IYosYmp1MOIHjSt161PVPbnVtZcZ11D4IKvvD1EigdqxbFHVEv7KKufUW5%2FNEB3uU2ipE3i6FtydhK84QtObotQaYp1Z%2FSFBPlbEzyx9uX4Ns4d6%2BCLSjgbSa9JLj1S3a5HlkcwGs5Rd03cUSSEPy1xWpJbf0BH84RY9SgW2hqXShE6wT%2F2pMPLilhQs3T8ClilrPNk2iSFQ4t%2FrV8ZFnWRwp0PdjMY1YP16ZjCkZGoNbIZR8PC4iNqkfDvk%2FwcrACkF6oyMJl1oxBnuIzrNPd0G4JxMv3jdVwZRNdh2xAVi3C2Me4g9Fx5OhY0goesqa0s38kJny4G%2BXAq4kQsJB%2Ffk%2FZUM5kiNIHPVm7l2EwLSejfcTV5e6FwO5XvNYo7lA99gAWyZTZKfi6%2B%2Fe%2BzJzuGbB5nfV5zW5vDcaOc5I%2BrKReHjhLJtjlpLWO30gpOoZfgdgwpdqIxAY6pgE2O3kq5xFJUacsbe1tHoOq34nzPj%2FhPOQhuAJXmm7bNSF%2Bo9Xk6KOuiAybO2vBiM%2F%2F7b5DfnLDd4PZcL8apk5hDOOA4vXLn2OnJqAxU4CIbI68x8gtPxEdTcqDz0KfXmG5K%2F5dZMJuWN3xedcx3WvKE%2FMsX0%2Bi5ypytfV7b02CaFONjF%2BEvH%2Fmtx4PjadJBOcPkNVnEd9RCcublSNBvDJzOnHgXA4%2B&X-Amz-Signature=419b750ff07277b0fb60382eeb2e0ad465f68fb20e10683d95283974c8f76a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YI6XFLZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDKLE4YKhlEnr9xKofrrAgmjGpn7nGIp6DdTZpCyOjQIQIhAK2oIhHPZRjJNwvI3Sw5QoPVHxgV0bMo28UvyBOsHNX4Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzB79QQQtUHEbwBIO0q3AOxzASct9otyLsqO%2BdDD0AzGw9GHmzrdrUw%2BuRefXsrTmxySbZHYphsTCH9KL90ilGK6eWJjr8di%2BIOkzq%2FuEag0KQBpN6lE379PX8YiMVfF7%2Fd8ZY36d7iWPrCE4644Pd1Ak2Ni7WsQr7btAc4HXsO3UiPhLI%2B4bOllpRPP4KQdD44V7r0yfUoLw5IDOMcyAXoV1%2BfNhNEc3Mq413Gkii%2FtW5xhSPuAqK4fhIhqcdWQQsgzK8tNpJIjzavwkfSm3ci6ZnthbEAM0JZg1lOm8ZCaLLR9oEgB7DEL%2BmV8%2BLLutBc5BjMoWiideCKrDUlsyzlkp7%2FfC4uNKqKHlaD7Bz%2B3DB7LCW9hQuFReB%2Flq%2F5Qs4VvEftVe0JfMn7%2FTfgYkoPJKRoPYJOkg%2F9xcCMvyJuOiX4vsrBxerf%2FFgSlE%2BH4ozBq4ZH%2F3mW1eL1k8qvshQC5qZZ48sHfSpXTWS%2FWK2eMBfEjbE3vxOqTw4ahK1v%2FwLyeJwpR0S0QrjaN5wRYRQ274aizKXGHSOIroN5QI86COiymFl13Uxd1gFSRF0jFN%2FW9fzRCH9M0%2F10AYfotAE02ErnQN4RQ%2BKaswSUysnDO0uXfEV5Qn4%2Bzo%2F%2FThqgcXPHM4eA%2Bfo%2FC%2BPzyzDW2YjEBjqkARA0bU9YeW3nKaSWp%2FfW8yhZNqYT3HY8zH%2BUuFfKR7MYwV5jFJMqNsCJbBINo8%2FDdqdmUDiV9Fzk4H70%2Fzsigb3esmC082fzk1tCLFUWSLUQQnYDqxlqkIoVU2tZPBR%2BHu%2BohsIeTukL%2F7l6Qc0il4kDi6VA%2BcennseC84%2BdnBukna5YEQaio7NsQcz%2Bjz8uPJjmK40k0c9pXZRVSX5OyKQmfAvc&X-Amz-Signature=c77a3469b146e153d3b0c5d4d0fb7ffc1e7e6dc4edeb88d0047fe90a9099b99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
