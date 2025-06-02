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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRVEQHX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCzF%2F5AQTlaIIG0lhq7fxfkqb8J3d3T3U1FQox3gDy3eAIgY8UsjbjHw4GmdqwPz0GHl7Q93NidTYoDWdB2fokKfdsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKECxAgGp%2ByxSWlZLCrcA%2F%2Fw%2BrA5pOfnQBzbGiQMVSVvW4q39K8cxWImKfdoxN8c95y8XGg3dFLaNiYb8VqCtKrBZfmZUvNcMoEN8HSiu%2Bg2RoLd2aXuLPAbMMio4Yma4zh5hTmxP%2FEGbS%2BEVODtnX1kp1Cf60%2BJlDJ3nd6Oc3LqRLQ7Qw9ciW0oarpM%2BczjSVm5n40M2otJRtwtyfqwwqDBtlfQC07LAw06%2F82O8SYZo1h5043H2GJbrNxhfkuSJ7AlT58LDxd1uhtBrWyHIukOC%2FHNTRP8L6oOku1t9w8%2Bkas4eHyNw0ma9MfTD4zru7U71mUPIz656C568M4dlMQ1kG9Wy%2F2tg5EbcI%2BIvP%2Fzrr14UvCym6Hfg8aEePbO0rr4FTQ8NC4Z1EPp%2Fksu1jvfScYBzjRZtyEFZFmE%2F33AmuJWwiV4ajMR8ZoUKi9BrjNjf2p0sMkBiyk%2FBSrVEQop%2FEfxk%2B7GxP1pIc08mT%2BToExellKxVtaQtWLoEJD2b15Q2kNT7btYLKP9dEyNtUQ%2B5R9tao0Mzkl6h9NiBuIJRT7pqwhzuZ6nyPfWr4Fd67McF2CpltR6lF62kbq%2F9ftovVekwvPbZLssy46UtYldW1r4m243tFDOI6sGZ2GCdANqX%2FkRGXmS%2FeN0MLa09sEGOqUBrxrqQdpyTT%2B06ao7hS38GIsKAqAZuWPaH3Seu9zgjhJY4Mo0HawStJWEsV7A6NgB%2FUS%2BMYsqWKl7M%2BhO5WBR5nWyMdpWDiGpwQJlPsvUHutac8%2BWJD7lgBeoPXKRwb7Xgrt5Y8WKDxhu67vPS0IjTFctKQ9jVfltDrpFBm6WXGUwqQA2CfyLlVY22MdqAMJI%2FJI8bFth93HXbrGFceslkI2Vppbp&X-Amz-Signature=42c4b82fdbedb833eb241db0012452edeb5ad53a2508deca8aa51b89f31d7541&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653K2BXJT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAJhAcvhbpOfVhnfw0b0lRhpTQaggN8ViqRxrZc8g7V7AiBmrOI9edBthoQfZjX67QbsViACQbl%2FCCpDnIrrCoKoXyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdBgxhc2I1tAxQAP4KtwDxPqLaWyQsQIh73QYibU479U%2BL1Spoq40Qgp%2F9l93MFIuz0qqW7Gv9ZtVKu5CfwtpOp7zDbipeAF3t%2BQQJxTGlo2F2lpUiET534ZEA%2BARmaz8IcXQ3XNz2%2BKI5v6%2Fh%2BuF6VAI2cmujM8YujFdNOkYyXk6%2BTKv2pvCQk88nXxtQ%2FyKfVoYPcfJCYNJFmiNOYvdQvQnjgO7LpoZpn624%2BuF7Hshyuyes8Wt0PDAdVBzA0rfJbNv6MUwwxhugIZ8sYLENrfapfRIcqRTJ%2FxXcRSFL9Lc2hEh%2FIWz%2B53xNQatam1XQYDHUptdpm4bbHtMLqs8qfE5CSXmV0sLp5W4mdDeay%2Fo6Yqb6rvfyJxteu2UXpQyEOHbHNqIAg1E16s9Prv%2FTlU8S8N1TOZ1kTxYU5GBXmRaHxfpPZy%2F%2BrWAtSAos%2B3bUC%2B0FVCRQSkM4RV3FrtmVNSszSYMfeJMC2PzjCywlDzbkFdzk%2BMrhhP4qyRu0%2Bkcb9U4xHVuXjv3K6V6uuRLjqIK3NGfGQQSioAR8%2BVitHFBFTiEh13OEG6U%2BZH9NJk3%2FRY0mDNQ7CbB4HS7VdwWqmOnaw3FOZxYD9v9IvOo0G124wBMp%2BkIjfV4VQUwYupZQfdL746yL5HIaxIwq7T2wQY6pgHgu1xWVc6LKtVZ7JU4q4ZiEDDfYiH%2BPGo4lJB2AJ54GHS98olHc0lMMX0pgi4MOIW0J4P4%2FrEAiOAmEk962kOUEAZyT9IVAGM3JtBFN%2BjYdw5KPizEe54wVRPV8DzGhkU4O9hvIqmLKeSBtZ0oI4rUDVgtEQdE41L4fsAz78Bcoyfb797NPc8Pnt37XV4q4efEwhKvCVv9RSepgG4qGjz%2B7KrAigVv&X-Amz-Signature=5dc36cc71759e5659832cd038e5020ee78f0de50f2c832ce645926752d2cd1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
