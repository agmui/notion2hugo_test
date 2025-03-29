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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZIBXCU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIB6aAh9Ct9pRhfj8NM%2FkezETw7G7IYG%2FenVY0N4OcxNdAiEApsv8zDq5kqUfJI%2F8TDspb0mCsmdkrBhNBAsvFtNgZWoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGDFttaikW9YvDQ3HCrcA1Ktfzc2S6LfTdAPjf20FjeWpOJ%2FUSMnnM8Qa3bOcTNeledV8f2s%2FwTcjr6EmMd6KaoeH4Tg7tnTlti%2FzM9g3F06ay0eSc6Fw4%2B2oASKRjAV2uic7ou8g7ufnDWX%2Fnqhnh2wDVeN%2BBXpocNFduE05RDfReODrC92W1N63WjAuA5QuvxUe334LVFqDlD21zCQRJX0lA2ZAiKEHpZkEnhwI8GxFLKpfSVuvaTPOyiqm26M%2BrVSL2C0dGESjfAQblmTjA5%2FVgjQ%2BFlgY6IQquWqeiHm8ZglGQBbPQ9Air9qACM%2FLj8CV52EtfQ8CkjgkulevfUeH%2BO15J%2FmhBg6yx5LHy6t6JtjjKNQkmTwJIb6AqKdAT0msY3XEuPe4r0C1iQezdfQCqx0lSxe%2FycdD2Gb3%2BDYmrwkummeHrZNhknIgR0eUL5FvmBOu0od24q0Ahpsv6SGNmFYN0uBW0LHRoRDfC69xFUPEEoDeIaSsdpPXb%2FKmwXD7LuX3FZmxuOaqBbdYuDNq2FoUV5sHJZW0HS3hEqn5UsY7QawWz8vTXLTUZmlMQdqiTsxOSPviGe1Vpx2kUhJhs0wp0O56foicBouGBIJ5tRD7%2FzHV2ugQqDbRV2cUQPdfyFp7u9hltY1MOyfoL8GOqUBGA9hMlDrTbx%2BGz%2FXreNKddrztf0INNx9NL3sS0LNob534CVrjorm65O1Or5j0kTrRdxJyYFSgvBcfiLITwb9wt45Tqb%2BGTap8LyYDJbxPnPNYDdJNtO4N3Qq%2FKaxe10Bls3gfXvX%2FjQpzMVzQ%2FRczitRjCaEIW4gpxXsCLZC34KhqRe43shIRg%2BFqo2bZCZelSqDsOMuSVXHbzOwBqk5wsEgzKz5&X-Amz-Signature=cde18207c49c51dcc13d0aa08d7d8181961bae196923b993c59db0835f7ccbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z2LKRBC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDC4h7Z2gCJENbPvDc9DIENscCpd%2Bwq8WzhaYxJCu6cPwIhAIkc4vm1s0UgmdcHlC9edsjs%2BVKJSBkVrb0zu5YK%2FO1zKv8DCHgQABoMNjM3NDIzMTgzODA1IgwKgMVuPt8pLnD0MNEq3AML5gYG9oTFDQwFrYgo8r0mAVKK5ZRPJ11%2FxskksE%2FzHsbw1GL2w%2Bim1h6f0Cp3vb5go%2FPtLU%2FGFnE9q0OYtpnPFAT2H%2Fcaqny5XqOzhXMFV8x5z%2FYq7g853Uufd5wZgMdPZnZBiLcu1aDwbxARthUTdKS9v6cxgm%2FgJtVfQBHGwU4wiLIUtAQ%2Bb2N%2FLMRXSu1fsdXMht%2FeNMdHqfiZMwkF%2FBtpfg6Z0UTydiKrI6%2BJAi6p%2BjUNkRpt9I0JB1AwAg3mAsxvhtg1jB61E9%2FvKgyMB9uC7KfNQphv3GahGUI2VDWRuii7lKTAqGMUS7jfz0t77VcmK%2BJotB9f8AjipglwOUyE7hh2mYpQp8XtOTYREzXEVwsGqvj%2F6fKJLWfyxEBB6zeY%2FvqAYT%2BVFxF3XAEiz60IfKwEoL0x%2F5yfr5z%2BwkpzOyEUH341%2BGCVgERo1VhC1ltyb6SkXH7spzPfUNAOpAbwqJZuEzvgRY6c7gI0riM%2BGR%2BdZL%2Fd%2Fl0tpX1o4ZMhVB5m6g7cVGa%2FwYQve91QdUiNpdnSPDHrHJmuLbKnKG2EnVqeV5tyXiWt8uOr6f0t1mLvZrp%2FZCntOkIznsdGiLp%2BGU%2BofUdO9t5dl%2BpTRDQjF0ANU2F5uyp2zjCEoKC%2FBjqkARo5x%2FBGTLb%2Bbu4OqJUA9tk0ZU47gYN4bORNFMZIOSJdgTJ1hJF4B%2BPcVxDpb5mcD0MSwS55Ddv8Z2Jy9EPv%2BCIQmfQj4Fezwhc2G6Na0UK0RdE4Pw2O1wlIiCFB0J1BpHWyKlMywFEJSY%2FqcCVLynLbPntvbZ73OYlZ3YtI3PZf0VQXvZELoPUgCRTBBgcCxw9Ez8s4nkb42BpR%2B3eGYex51UqT&X-Amz-Signature=bc5ac019b7a4892ab4634968dc0c974b3ca5c0edaa7f4670ce50735cc766cbc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
