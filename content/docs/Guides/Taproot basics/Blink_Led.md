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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKKY3UU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ5EgRdKQNt08zBttDsJJjCesrcq9QPurQKy%2B0zRoFRwIhAPZeEXC7cWcyEr%2FghvVrOCA4lkc3jh%2BMZ9GeDkHJdgqHKv8DCGUQABoMNjM3NDIzMTgzODA1Igy6ys8mDfx%2Be3AePUcq3AMERS4xWF9gXrII10oaKGUxtxo9P53GtsszUqrz1FwY0NxDNhCBnWYPUpRivw8bichNfCfk9iJLcjy%2FdVFnGn36m5PRXIgK4SID5ekzyo3kRUoOIiSKnIQisyPu7a7%2B1fXaVcE%2BRzwxpbKRn9jkgm2TTvYmSvpPyxcl8P%2F2GFNgJ40t3WWNZHKpVvq3uqBvb5z3PPiNJ3xBWbQSBHYoe%2BfEdU1%2FnIFQ7DgfzdAytiiV5xIbCUSeYBu9%2BkXOYvszb4cMbZQ5S%2BGcQsf6FWAUthVa6VsYOj35l4jUwJTsoY9PpBydxg1%2FpjkpsKqmeBG9q430Iam6GoIhRkMFerQeBx9P1JFfak9ZmTXf7SXpOeWqrNyeSFQ%2FUo%2FvT%2BBraykKY2K65t%2FD%2BjCMI86k0vEWimDt4eg6rsemJXej4mrokUVHHQV6%2BKvF%2BCG1VhGFSRN2McWEKCGmo7ZwH15Le7pf0wl1rocdFjCC7bKQfIhXsSXNbTcyBocIu3dbqUvqY38eb%2FDYsYeR%2Bl4kiKSaqpEkMy3plqpszi4PwpYegy1JEbH8W8mWPQ3uy5wgLzUI0ZypVlh81Ahpc6HIMaqbsFHd1tvWT4D2HD4VLL7E5GQA9jiW3TyPo8OD07w6HZS10TD0irrABjqkASuHloKRlfqF8EmfII8Trpjz5DMPlOoAYthAN3DohKvCuTFSVXNenb6kI2Sk41p7uvYYtTItySikXQBznrhnfKahQ%2FUwaJxvDGAie9PWnZzSf99pWaw9i9VzwKAPdicj%2B0cVVKvCgWgx5QyHk5DVomQa26AadBNR1orXwzmu9VkmmDT2upsUox2NDJtcvSKnxJmKkiZtdRO0rDcYFkQ60mhsSMWs&X-Amz-Signature=d8a90f48e04ecf3e198c2188f9e4cbb817b78f52f3af47d5b2cdde3f2b95dcef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5Y5X54%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Byk8Vhc%2B2sK0m8cG4SoAwFLQhnaGV42AYMZKhfPeU6QIgZ3aWaoiXXuv3EmFcgyc7zAnXk1tmbtMOvKrI1P8jMHsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHjWfQbwBfzUebzWNircAyMntC2cCXV1vmZpuj%2BFaMxlXiZJ2PxsdS9tsVw3bcE24NnUoCD8VKkrA4OZjCRscff7%2FAlIyAmC4kbA9tIkPxWk18UNfbJXkGTVCyYKFGUpUG6X84v5hT5vlP2XCHHUCS6FkN%2B9wmZBNTz0WVf7HJ75jPe7Nah%2Bpn15O35MajFSkuK2oAH8w%2BZS5597DN6L3yiDlbgeMyzZjIbydPXgXoKMXR68hzubQ8U9vk8vfOETsX2H34z%2FqXPKWCbOLWchLwUE5YPops90rVKacE6muhpyzPGN53zrO%2BRp7MXww2xEopJvkeQrH5uedMcgZ29rgz5L%2FyBrHALJtgZuu64740vfQ1%2BPohJ3ael824ymziRBwvOl1oWo%2FvRUPOxcpCkp476TlMecNPM4r225VLfV8gajpC6QKYwIIbbVy%2BpB01YT30k7JHeLRdGxv813PW8%2Fnn5rwRwA6HC21KcnaXcgkwMAALvGy6Qwx0lErQgjwZCuWcFMzLef3Z2g3sgMrPrmf8zfpBjwHzQ%2BTcpYhxBseQRPrPO5DE1YeUM%2BA1GvZLhDx71lqItr9D7Q6T3NNAvF3%2BdugJoAC%2BKlvOEcnY2oyTqsPNjchVVmtfhCjRplWjKgiG9SbJVd%2FXA1E%2BKYMP6KusAGOqUBzz7xA1Zib4bqV6JZdm0H%2FmhVg3yVj2jq9yUywsRBjC7z34CP%2BCYFl5bD%2F7GJ2xVADF9TrPco42%2BUV47k2jVjoqpPfCXsZfFIO1WH6Zl3NEqqHnDTZPFU4PrSGat4KGb0xoO3kQSzJWlm5CQsFeb22wRVRkcOmxDYQC09SQmGrKo67HfaluOzm3AJT0X4BjuzusVJ%2FLKK4GhbjEKr81cOz9%2FsGoY6&X-Amz-Signature=e0605531168ddda3c7b0151cbba9458a695d787317b9671e90ab04f394b9086f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
