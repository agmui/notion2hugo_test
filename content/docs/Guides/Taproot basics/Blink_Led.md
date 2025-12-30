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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJT372A6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDlYRx9GKVFze4oH8Q5UfTTWNgJs0rjV7huEm0fAX8xWAIfZk7%2B6eA6MS0OSXbK2FtD4nKbWA6TqWxghoo04m7X5SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlpyp2u%2FKOP5kYkA1KtwDDNGroo34%2BFtzs2ReTKPE71QOnLAb4aGDAFbqLoyI%2BnSQogiOnw4IqGFTCsI5CzA6hc5BFShyaScfWHvdDwKBhcbjagNBUAIKj45k6LAWyX%2FiUAmRG%2FWkGh7OuYkkBFVj%2F9AOh%2FXdMgla3MGbwYP6LPkoXlU7Oi9klvC7T%2Bg4OyM%2FArdYRu83x0XryuStoTvcVJmNPut8cQW98PbRBYVJCrS2xkCl53NG5P6tE6M4x8jsywnmZZRyfYQIaP9Hpzbrpox9dq%2F%2BTXF442fVoI1JnHGv5iowAO6m7INoqOzi8ByDLIYCukJzVArvp5hmrnUKrc4camjo6PdNguxdhA8zAG8eYJMGCfB4lm93lkIWp1VzyyWQ%2BwDFbF4HHYtCHbIrj3kxfVWC77QsNDOiFMDSnMjcNWm2%2Bjr6jWHjJ%2BSqJNuoFeoVN1h4V78OmPZk2dbPUacDuwO4pjXq6AdbT2I0KkaDmG4xZfKMo9SARh6aV4YOR35%2Bs3tjodqzkZNMmfqlD1yeCJCBYfxv293g9CfTbQ%2Bzc8fQcaZ90CpsuDadcFWgOZtp2p1REiyQoxcWlrFA1IRRqnHV5mU6UIDG1PjA%2F2EtvuJmUTkou2aSzc55TqiDV7g8PQWsL1l%2FzJkwq%2FLLygY6pgGSHYNhhhOufjxhOFYzO2w1hmvWS4kXCzTi8ZwP6jG%2Bq9eiZ8Q4qswT3Py4GYYwa0MHO4wo9yiXneG9Lin9JHZm7dNL7PM4yNnsntsuphreaH%2FkW6mMnEG15ghMmpbhGD936DUP%2Ftr3rfzmKsW5exRVyCdwUa%2BR2nXlgQ4tiQ2C75p5Kp4GNcgLY5338TmZ28XrUChB9frVz3zmWvD6OI4Wq3RkJlMu&X-Amz-Signature=30356184c9f70c1ea5c58df90c4d1a80fbc80cbb9012c812f8784aac77612d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKJTYRX%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTq%2BckJDtpO814u3fqPe84IxBOurW%2BCt%2Bd2QAee%2Bv8rQIhAMfdsrMW2R2hLtr7GQVnwQ7H02MVmwlq9%2FEXTQd9oDVHKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAVKMqPATFqlFI0ZMq3AO%2B5WYFhMFplcoVuZkBfggGOf2OqnoV%2BqzGssxWeFt12ULSMAQJ5Cr5uVs1sU%2BmB67rrdTHqWgPuLsqHrPeLbQkxEZXh15ZzdDrZAJqRST0rhManP9fio8ElsMLRL6vKdrbveqjKqkKa1kaz1a8eSGpMPy%2Fv%2F6rkzub6gsZg4K4A%2FKRIlldmjx6ilKA9pDGRiAtXSoSLqvAPbT8XjbktqOxwg6Mh2togvwmcpBfhzxx3svcPB1Ep8OlfKGd3lCFy2OjLcB9Pp8l6yz2fgVK3rtfIg6d7wo3XetzrtG8V%2Bd2I2PXbgKhlImLkF1dE%2BHeOQ71mnEhiLD429BhWLj433afeUNb0FPAHbJJ5pumcZecPBYc68FLhGOAwfHGH3LLlyFc6oOeXUqaUzQndLrtRtFzptovlARWPtaYafWAagH4QhwBdendE%2FJCvl92Wp%2Bqk0glyZBC%2FL6e6IRY9OTveTgwaKDDVqNZeYmRgmp8u0Q%2FMLnINB%2BSQoAHB%2B37DBJUTIBb%2BIG8s19%2FcJPFHWW%2F%2B%2B8L3ARhhDY0IvdcJ%2Bg24mZ9UlidP4ZAXv7AWyk4hE7LhE70e5QQpXbXJy0EK2K8f%2BRCz4F37w%2BpuIUtvvY6iHIIDiDX2KoohK48pNzkITCpucvKBjqkARdBa5QlqrGTNZlbmU%2Bb3akZfTuCBw%2FcxRWcOHDD2WFe6iZX8gzwJ6obwVmn7PNl7w8cOeDN68jrYLhq%2FBma5xgJWMCQHwjjStzrogHUui%2FB%2FpYZVRNus2DT1YrHJW2UOXcOGEytFYqJ9ITGfcbdylHSp9NEkhb2vlSclp9GJUgY0CHyF8VfITXqgpiGDlBnHME5GnGZcmTPWWo22fmA4D41QZPT&X-Amz-Signature=764339fc0387f618bd7369da28411bf231a9195202d5f6385bb16e5811961850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
