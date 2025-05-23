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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQYITSB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCluGSyavyYsag9XnF%2FpLHx7S0%2BW7qBEemV7zwAlTVANQIgECsqv6UyZeVNsrOrwN0hvfqCrUZL7cmo3lBQqUfTKfUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz2CTqi6O3YQD3fSyrcA0NZBZV0rs2BaQfOg8YUzkHZ91lt8ireml%2BC7udfc1REFgz0cBmbVaH7Th6BxNsugsAeb0D%2BN8%2FDbGozLB3uF5lt8PPtyW3dESw4vt%2F5yRfg8NHXDg0u1jnbw8eb%2BIUJXwIc3rI30Pja9Jx0wKFhD7zyGEhV8oSpUwNLz%2FP8He5HNb%2FAMGRGPDvHLsnA2yD40CmVxTRB6EnYmXGReu20%2Fqh%2Fg9tpTQq%2FcPXLLEyyRJcYzppSYfnBY2LTZq5febmoo1oZ1JKAqRui3DCFVwFIygtHME2pbZl%2BPGilM47nSzt%2FYgjWfU59NixeVZLDmI7QwlAxGet7BgmCjnBZao1yzXTrh5Z%2BiDt4Yw0u7Mg02cjUV4XQh3MvryfByHj1KVSMKjqbCHn86PiVdP139cS9E54ns1Ydys5zGc%2FLLsTOmAESV5L5HDx0ImlKpv51iTnpf6kFHzJrGPZLZcE8NAhHJ6a50YuFf08koT94hH9aOE4xP85AVLCD0xUjOJy4Cdihq2c87sTtCFDST3PJAwZc2F3pfDPSzpSzeAfBxDYb1k3Ah%2FBndeuzMgd9gSQFFe3EwIA4OIFXfGJBjY5DO8kqAUYRb6uHuw%2FuDHUmg5gZcrRsdKHdd56LzucCivFZMNjCv8EGOqUBjFww5fc22GgMPzZc1D1pU4WEtiXsAp1ROJoPI56dMlAg4Sg3sLyTKgx%2BU5qm17b3WlsRXQNoxHglRzUyx3x5DSZ%2FQfzNYtEORFEKMVPZbkv7AU5IWLmVUXXiQbd75uruQAqjPsg4q31LMssim2ptiTdWbrwzp8mXa7GmAgTDxCepk6LK8HdGDVEG4Plfx%2B%2BWjkIy1OLD8KhKSiBVMTdwYudXgPz%2F&X-Amz-Signature=bc5e5907081431a4e18d4d385bdf42e82fead4b34a8117a09554462539edb225&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAL3274%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHggKa6UkSO3KEG2%2FgOuS%2BvsZOuauqesmaBmuZJynZy8AiEA3gaPEeg9xxiWpyvY9PkRc0FtVjxurS34llrlFXWaxKoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWIixFMSFgowuT4vircA1rBFZ1QkiApPsuE2uNDp98tbBTnmilh61dJPcEpAjsLOY5MfEl8JfylZI%2Fe0pB2C8va2EcNnihfNeWuogylRGiT74SW6H3bYAeBNH0tRl6D9IMUnVF861hbcm0jFNYEd%2BESOWUa5%2FOesQ8jQKWxkib8Mq4i%2FGmQhX5CtI6G660Gw77FQMaIpMwG%2F9ZsZbOJKbMqzARjQcggVzKC%2FYRcUBAZ1NGS30HDqxHErCzoMp1VUuV6jVy7AbqCr4o1UB%2FkOIPsHWXcv2UMaoPct%2BxOxijyWjpUi5336eQFmyEj5iA0wuW%2FHbljxkEa%2BlV5LQKpE72xerhyZgnXN93rO8dOyD3mo0VWdrg%2BNs0S5cdaQf%2FHlqBQTFJtvZt%2Fl5EyUEg8pdz5%2BRW6Z%2FSjd7%2FKSAzHURHr%2BI6LmA6rwKrson53qfC91oUSAKru6W09Jw07ik9h%2FFX%2BXn3mD6pdxNrozTprbbKSiTpXHungaszTlGuuDCGU112derOrRdtXLwQPqY0LpRsG6HocWX32LI7k1IKMdAN0tlr45e20NDh5eeghl8vpblhHbjMsS7IfuAvkDBgaIjnnR45sjbyPszHtWDKa5XhOafW2ASexYxopZAuS7EPa98%2ByM9QDjcnPp2zNMIXDv8EGOqUBV4aUUtiat%2BnJmrV4BqwyF2yTR4XfLvT1YMlRR5Gu%2Fdq90DDbvalZMRQBwmwJ1r4XkgJzQ%2B%2Bx6sQ%2BixgLSsfPPLdtNQfvmBVpanrpHBcRpysn1g9O6O5FHr3Ib9xIPcKq8fXovKbNLEtrHQ3kJWJz2G7UWIDjQo32BhNPe2RjKg7wkC8KDV3yFyC2WK3JsrzHM1dKwP1JFfFXNZk3WlcfKXnFID8f&X-Amz-Signature=86b04512d3ef425a9e6c4955912c1b24ff8d3aea35e758a653c058cfa2baab17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
