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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZD2MGPU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCSn09%2BVdVEWnkW6hWPScLiBwF9CEdkE3FuiJmpNaGwOwIgdkKUyQdNye3tr1XrwSRTpAXI0MVz7LzjN7H5sH49Ujgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJ3E3VVmfQU8s3f8QSrcAwDNQuXzi3wxG11YzgVYi3Ax4OPQdx6K%2BpndXoB1WGmtSD%2B7DGEt7qP6lUtFoDvk0jgIVTt6cwGoKd%2BfYCG0%2Fb7ogvAeU5ccLozM8%2BKX%2FQZeBnhgj4FWkXHg4Pml0%2FtmW%2BCnIT8u1hFx0Aa8EHl2qvKVJB0SGKjVRlZrx4RLCdgOuJsan576r%2FbQjtyIoGJzWPOUB8Ywqo6F57s3JZmxEDkQaAft3S3Z5FfNP8yq7pIdSABWPLO7cQRtB34aenh1u6xqIdsA62%2FdHnAgGYiwqYNZuoYB8lp1tEBYJtsNge6q%2Ft7HCC9OLO58%2FYYPcQw01pQhtN1S4F2XpAzi0O%2Bo1dL637mFBcFGrFFXgZjcnpO3SsvdtEDZgCxk08NzAj1T%2FpjrubF2CGDbVH67lVZgEoIcRYkWa7fFTy6Lbbp2h93xOg%2F2T19flVVfbGsP7IradCUU5cQoJ6o%2BV6yOYVJEquzAeIbc0JtiS4ZI7z1QQ0Blbtlz3B5cJmA6hTgizCKmI4hDt1XQ3d6ALZLKTwjpPOTXL8H%2F3tReq5PzUYLM2xuzL5hHKgcBB1uQVmaY%2Be44AS%2FhEl1dTMQ5gyTCfb9C%2BfDkN1A3YgM9YidyTDKpquUOGQ7Jzs9HuIe6WV%2FvMOaxvL0GOqUBB2HksWdFLZuEkITsQL6TRc2vegJ6dYe1Zf6KA5KEYTdRF2WUiddUmjWxVPZFjUjZ0t0Qd%2BYfM2PPaVF6hYsZxlNxpkJHv6eKIHEbvrJ6IKApJ9a%2BXhlxV23ay2j0HOMUmNQtY8%2BoCgM2tlJGITehQ%2FDTBAniUWQCZgVxwiFAf1%2F%2FkkPMnSsoKXMk9nJISBqM2DPhINTYI7Ek7iHXRnDR3BggNOMM&X-Amz-Signature=4d1efae82f5725cbd4d6581476c4d2df75ef0cabc594af1311ab24672440f211&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLSY7SA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGE0KdiS15FXHG%2FFLkpTim6YTcED%2FwR%2FPLiUtEjG5dxTAiBbCCy%2BTf3HvKf86z7xmjis18XGBZck5D8K6s0lyulLNir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMiZXa%2F4VaUUjfL0rhKtwDk0%2BV1UXKODVijGyz4xpVr7sZCWblPbnbdPAoTF43VcgcyKpzwMsUdnnbV909xT9IewNLAysxxITdV%2FaBJHaZfJ4ljxi111XSwHhAu0y5yE3cmF7BDYqWZrWGAXbkJ%2Fr%2BTCXUUMc4cc7KYf3OLa5n8m7JuMc%2FjGAYx%2FwoBGYUTY7Virr44BeKiQ9fTBFPW1lcqmTSESmmbSWMVMXBB4Y6cyNyg8iakCybbT%2BdqsBk4DSjbfVJlRcoVcJCf1RFYA1eeanIwTdGqCKkBIoGc0KHdOO0ZcoO%2FoirynZbfqXjWH1s2bBHgU%2Bn3XQbN1k06SbRKikUUS0kmZId2XOUMWX6OLV0F6aoHcv%2F0JsnBNKr0gqBLjuD7hyQifYat0R5OeQhh2FVNBmWU4XjkHfx7EEHe2NLhbI%2Fvd6SyqHFpBsrLwJYi%2Fzx1SXrxvagvUhsKMZOj%2B%2BDZ%2F0mUADaTJ4%2BcjTKvbbKyasI1r8Sh2iDfVjpDpnzznWC90xGdpeFmlyb0QGw5Q82mAFLRsAdH%2BVHjyWg1bplQDb7qNIbgvXYoX7PK2CXhERlpnLzM2AJeFvpOUVQzGTQy1dXXrHHI%2BXEmh5TrC7%2FnNCR12u8zQwLvtgHrLBAPEd5lo5nNcZUk0YwgLK8vQY6pgGgA1bRz1dTR04WYXY2pn%2Br8z3za3ORAVk9OB8QquLQZUNREP7YtZasUa7UFM%2FDfvEtyRO3jt365m2D7JjqExLq93%2Bmu79XvFWkzmwuDRu%2BceNNDWc9pXuVqlZcSB6Dd4bGPeBP%2FW6PAOnq2arASwh7ASkR3Nxq8O7w%2FO%2F6X3rZYUOBuIczcpbLayVGRGUmeUmgGB653jwT%2BLcHDwgixIYZ6blY5R%2Fn&X-Amz-Signature=14768cd920f716c5ec58d812654e8dc6b10b800960105d1e0df59ea2bc45e206&X-Amz-SignedHeaders=host&x-id=GetObject)

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
