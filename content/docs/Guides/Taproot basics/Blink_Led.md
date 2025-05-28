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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXH6MAC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuUff9CmVqnyRn%2B7sbylvr%2BH%2FI7LoBzlnrT%2B4kIudF2AiBpaEr70mbrkYZJJ74rvD5TNZeSodQXze5h9x%2F4%2BDQfMyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM9G9fvKzAHxL%2BWdxSKtwDks%2F7R1Is0754QL8%2FQFhQQQRcSW%2FLcnjhS1zjk2%2FVNldKQ2GrdR9uKki0SS1tnwj49b1h9P6dYqzC4b%2Bp7UIhX0Rh7bFYutA%2BcK5LBLuDTDQOz0kj%2B91WjXB7rjRmPM9qYc2mMLVqtP2URS9aHxN%2Bolcxl%2FlnyUWsghY8d1Pltu%2BTrnKK29XXHE6xR8YwI8XHA1zsSVogQWNJJuqPtANsVoqxGVhp1cmY8Aik065c1AwdbcoZO1m7pihfT0%2FwUDUqneBSAk8gAA%2BjB%2FOcW2goG671SMpZFAS7QFyadq0q5SgYFvDZyKfexhAyLnlLBIqyUydWjK4gJQKRbPdKEDpLBiwJvmt%2FWBpgj%2FYiG5ch5yesexuIdkwG5IgzxyAwVJhyQrAaidY4TQ2FVYFTgqRHYHml9X17CKYcDY9hN1kySwzzhH9J%2BtQqSBZH82IAmJyt1vAngt2xRSuMj9zy2sS%2BgY4jEwiLWj1TWAxOTI2RqHJkHnL8w7PKZlX5wkunS%2Boz2y1Yu4x4GspQWcGak8kLw456O0J7ItiT%2FhxGPWHAWegWj2tay6oBgqOErxVspmmw9YY4HnQMdz4kG08U9QwhxjRhgp2DpHtXWvieYC9JHOon7dr0J5sVNXZfm0Awk5zbwQY6pgF0V0hHTsu7%2BtdO5uDYBaifUWv04DDlawJgANfgjoPQvZUGsvphzr20C8JuTZHYgWEzay9tFTSXbMUCfIZXbVus6V3Kbw89J6hSjHH8b7597mGLgu4zjdZy56ejotkN9ZsAM8NxlIFrmFI227VXppyN%2BVdPYl%2BD1v75rLkx7MXxrvTyplLt4SHjxpYsWX%2BmJ2BbWTa1lcR4IzuQsMhUiuHMY6JxHBP4&X-Amz-Signature=edd42643d9ae68919d9c1a5dff42be53735b5fae3a553b2e9cd1b8f46bbd9969&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQTILPL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDV1Q%2BViblEJBBCHQlr5BWkt34NBgIvyKp%2B620js3M%2FwIhAMUIkHmiubP0NrhtK1uB3EtX7Fon7fH6gej6eGnml%2BXIKv8DCHEQABoMNjM3NDIzMTgzODA1Igz1h1qiqkQ2sVY2Zqoq3ANgj%2BpJuZlp9BktjQdBA%2BHHBachB78g56W2lYip7m0%2FESaJhzB1nxFVCrhWs6Mz2X9FNLicwZpMBvbmQ%2Bk9lcWHWkJgArX6Sp7lc0tCAZeZvNVS6AmkXIqa0NoOHpKEh9MUrKenK7opkZ53N0W%2Bi6RT8dLkEOZ3nftU941drUPZuBR1e6iVuxxYf5rjeKn7BoaTPNYRQQQ6ThX1hlQYraZ9jewxZ%2FHqaOjlmZDuaX1xR0rJ41KWntcwp9T%2F7E0t2EIcM07FgepefmDBAsNT%2BWtGgtkt0XmwieMEN6JCbml4g0WVgcG98wnx1HXoyKV6cWAmzw14PoIIF%2FA1J0lQbL9ab9WaH2BLkxFkvHAOQkcFZGzyXZZcewyorZW0%2BCUK8FsSo%2F63F4knqze4HabNbhtDpo8dGe3x8Ydm2RqyE24vPyD%2Fym5FwAQeH5SYoFh2exwlhtot9nxY0bessEE0D9sPDGfIgYcaQS0F%2BnzVr4weYUHS3A3ir%2BhctoBNH%2F1KdRKNBmz2%2BoK%2BStBF4pJ6AaEgckBK2di%2B2fz%2Bit2WfAXL3wmVWC1%2FyYts4l59p8B%2FrH32WWkFdYZ%2Fd1bvXvRNwUroCLz3GpILXdEiQZzXgyJVFE91hryfnomuFH%2FobDC29trBBjqkAYERg%2Bmw9TjhB%2BTANx4bW0jN243DIsrFzJzZKbZIAS6Zqg02oxboC%2Bbomj%2BPu2GfZv7WNoiad42Wq7jzf2eJhg6h5roE3eZr2F33w4lSgan8nZP4yFzOFBeAK9pmHzbgIZHliYKZgUJyQwmB%2B0BKUyZSjBAR5ejr98St19EIwWeyM5Qxn7YvTWHMl47ggW40t%2FkKXBw4%2FNm5rVAsfel02YW0czH2&X-Amz-Signature=336a9bef969e827629a400c16054531038505581dd00bd065eeb12e072c66599&X-Amz-SignedHeaders=host&x-id=GetObject)

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
