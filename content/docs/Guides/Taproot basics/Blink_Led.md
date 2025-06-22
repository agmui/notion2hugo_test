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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DR3I4F%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDq2BlN7dxPOl2A97uy5swp%2FMhh1GsJNwJJt%2FYyB5rf7QIgJCrnuTDiCr6kG62i9GplIQtJKz0cKGrb58DPUZz3sQkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL0Q1%2FHvT6MSZfvPyrcA31wVDuGkOH073YgG29wvHVgo4vywKy98yvIG1l%2FziztTc9IByyP0KOnmsDyf8Hfgo41Gp6d17bl%2FNPNpwPrlSwSjP5%2F44xJgX3WEurJVvDjLv1yWEWaWGlSyKk0cG5uVV6uJMAL92amJSsoEjIML6NJzXpN84KPRNUD1JuoIZb4AacBFp56dBXbwQvSq%2FegghoBZ7Zxen9pu%2FQXkeOPb1nMCsBOig3QT7h5MciWCGys7kZq1snC3tNReoQ4%2Bs79UkRIA4eJ2JQwVnrRzySXk1b30fxTn1%2BW3f7%2BWXod6hXHy34iQA5qQE0u8vVkSEonwGPoSI2zRSgju6i6wEgtcW1%2Budkc0kKy9aWIltdPOOa2cjY%2FVZzwlVb3OwLO9EXmwwUvFDv6VNjngGGV96TU1c%2FO46dPCnj2VND2Is6lH%2BMNMmeoreAO2cvkM4XXLixmrDxJ83TRih9jqTMtjSQrTZOjY3mZhDx%2Fl6GjsLDiGz%2BiIa7f9sWJYNiQjReqR7fSyYzu%2FljJ8sE75AVyWt0%2BXJTJ4MoSxNtzA2GQrXp6%2B64cODs3jf6vbT5%2Fyt4DDGR8Ky1mq78bUY0LhXgtLAEAneQppR6tx2wjsixLvWBQUBmPKyEQXi3XwGK9SdrqMICW38IGOqUB7W36HzN1pS8eGrx%2BWJf%2FpQ4l0Q2rYN0Smt5JmzK1pWq44K8J892EzPmruTLlenCJAZKTzYhIpvTeukUQxpejdsHq20Md%2Fte%2FHQN2hZ%2Ft8bvw404A3i2vPYGNfOE99LtlZPpYzl7UjG1b603XV8O6uikAL%2FbgqkUK8WxHVuq89WLCoChOuqAQ4LC0xG35eVFlPSGK2Hmi5eUD07YHOiJglLytCAKh&X-Amz-Signature=6352416a5d37ebdc3f749214870f1493c77c3686e60a5324b48a440e58a6f0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WAYLHOX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIAdDfy3G85AqYKKO6NSQhMSsquwvG3tiXBMhOmWq9OymAiAdEROLXwBqiM5r8fWMLzbEXi1sX4ZVAf1eScaXKDaWlyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCzfWnJ4Tw2F%2F8rIKtwDBMdxIBHM1RS9M7OSeWNjmpOVI31VkruSKNcD5TKcpNLxUL8tiDQLLTDmQqToKCOzX%2F%2FHv6B7Ripo1H%2BofCt88mwuIu72L3GtjqMeVXNq0ICi6cpfJJEru3kJriF5%2Fke9S9Sw1JiCecmLknc5pU7IgiRlrdw8qM6qclu5yfc1pe%2Bv0b5uPdENnL7NtGnKBGCZSZO33waN0l02QsAHUME8fNn6Aaow5n2%2F1n%2BaLvHRAXYyicuFNQeTwLUlYIr%2BZcPjN0XkyjOE2CCbcyWW4HouN4BYfhizluMEh%2FnArutxIhyPbGmumlS5MORPteMqNeflgY7bRx7EFiP51lqzRtOCMHjsV%2Figf3nQKxI4X7nfocssxGWk4lIjIU8M9FT9cfxunBwB9C3LMWISn5rbza%2FHPpGncTQcpwFXCgURQEjEFCf1Y53nNuYdOQP99Gv1h3DvsJ1IMZ59regDGxd4vEhFeCT7pS%2Bfcp579WQ7cyduvdWtqOGPzBjYwnW97FsAAHzQM1YcV3hcknfEtGjDxQXPEYaCFqJwzSDPL1dmt9%2B2u4RDfNLAJIdGTQGW%2F0%2B4quLQ%2BCXrUM9cRifEH1r4KEUTynGUuJqwiSWMKgCB3QEYlZj8oDLzn5lUvDtM9Vowjc3fwgY6pgHDlM8ucI7%2BqwuV1fJhl%2Bb%2F9W1FOkWCntDiYH%2F97lrRk00G0Adw6lTttij5hTwGmjBen1MFLmyUff4weRkV7LD02WCboYjWCf5w9wiUSaqz4MFx062pyBdCNhSs58UptPW0Q%2Fc7q7j%2Fg92h3nwp2jiLypGzgDcuz3PHLznsNpTWUCAbKe3jJrxSVaOjmxV8ZMpt8K%2Frku5RYLfcpxsoDypFx9vygE9v&X-Amz-Signature=0c8c758a7d93c707bf01e4283d9b2ea2dfec78821992c7f3920bcb79b42b8ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
