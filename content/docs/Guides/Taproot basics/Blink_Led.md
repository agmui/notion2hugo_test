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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSAKHJT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDuMfoLySerqpdmy1Qe9J3d6GBYCnTQrJVG9csmItUbPAiAYryD8alyrioSLgdP3ceFHDCP09W%2FVeve4xj7WTm0Q%2BCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMEza8Cjt7cMSzxjfQKtwDmsz4cLrEqjYiqc1YmVoABKD3s6M3Wi1%2Bcq%2BXIjdb5DhP1xNS9y6W1hUztFWpDw2zUsX1N1XmBLHXDBiyWuDCqtvprtF4dgJe9iz17NZ7ArJtiJLxQD0ACTi4ao8pTNU2KL7D6C4%2FDFEEM5WPHt2vvXZEsOzThqfSTVdqgq0XIeC5YBFLnzgGCzcGR%2FOZ%2FOMnIS5A4l3PIuPFXRzoqTkJo2rKgIGgQ2mB766EOAmkTX4pSYvPA3L%2FqVyJtt27PxiiB4fNUi1osOmcenywH%2BS5JTITY7hU%2F22owkx1lYL4y9xa4cViXgQjirjeVdkO7YGDFtjG1wOMIFlY93U0KiJj4urED2kpfY4RhhRKCOWq55h1UKswsDdMwLVpOm45a4At9dw%2B%2F0IGt60IbuHAeGHNtLjYlxPlGwZZGp%2F04J3uQwtt25%2FwsoDi8ONe%2Bc1VR%2FNqcrK2DV6nIB7lXls89Njwe%2FiHObR8rmRramEbwjEoDfo5z136fzAIVJZ8ibuKbodbLvSsPney62cvAI0cE2doK0pYPB7XmDF0bUe4ye7BmqQro3GhvdJmlr0G%2BizM9eLdfXOpusLqFwz1cVePcqJx1sbx4FX7u2kxLC%2F0NRDvkwFmg9ALaa2idTOrKscw7bjKwQY6pgGf1c6qi05RCku0U1YC%2B4sQwzLMpGDGTE5vJ1age7getX9%2FdWe%2BoSQ5s863HCYINfn%2BEQAiRtkEDZgWsarGrpQOtBqreHHhFStjz8qW0isG1X6zx4Ngfo%2FFpMFksbbKuzdVt2%2F7Q%2F4JN7pSyAOtZSwLq4%2FywdcXXFvtETbgJiZzzczSM4z8Slmhrh9Aw9XSMjZuc3eRDdylhJlZqy7YZsNA39uDDwB4&X-Amz-Signature=f2fb51b3f8ecf9b7300905bd7117223de428652203fa727f8b498242a2d392c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3ACGTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDnvr7fLMQxk70W1ctyfNLyO2NhahGL%2BmeD5mQAOP%2FxmwIgfBL2lnH%2BU4mMdEWoFfHUe4NMrgJV91oxhoKlH70p58Aq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCZ1oi6noex30%2Bzl6yrcA26fHWbKpKwhLRSeqtPO98d7M3gcdG%2FpuFgkiiDcGJ4hcfckYCI2hb1kDRc%2FWDnS%2BsPXGUcFVFsgdldzF%2B7JejHkW%2FmlNgn11G9uszkSHSJZXP7WWuhTqI6ajcdNscuSR1d4z0hSdbuuk0IaV5rjPH2OD0RuaNeN8KcGa3WATot1toNv0hZMqddCGNg2YWSBeM%2FQELjWglWYsVaN%2BYZoINLzehhY%2BSwTr76Ej5Vk0SgPYShsAwudHKztxnpBOWXYg3%2F10iGbx1lsK%2BrOPts10MQw2dfJ97fnVFLhKFidOZ%2F8BMU%2FE8asViP7GFWKxG5ntWUVlBdeQOjaFObJwztyHTldpP5b7g0H%2B%2FIUhLINn1vtUGG6n%2BX6mk%2FU%2FnEBLp9HvcJhzfcYAGk70sWrjr%2FyPQR%2FB0jFC1UUj4hyEcI6DXSV7crbnO8UlqbLHSlr%2F8O1ksgaK1kgpxog0oIEnsffOU25k3uvoBpigM5AEHeEqffIS4e77PVuH6w%2FIyDJa1PHvfV%2BaR9ywxqG7XH1dxjCNxzwKrvYVztfa%2BpodEY7TP8SPVcRGSiu0nLzjTycog6yZY9L56Utgl%2BbisYUWCCYQVQDsf9RMG6hzLd%2BbPULS1n14dj4zminE2%2FNkBKrMIa5ysEGOqUBh9mlLSjNgtE%2FjqXEnr55o34N4qNuZggV6T%2B%2Fm6lF3Z2REzmA6Q2s1rR5x37dObq1ebklYKDS2U%2B8c7VvolsjjAurrfQARBnDAxie3HIh9PP4mMnYiBNqWzM2Vu5zVJuMmksuNU0s%2BhENknD%2FWNTGDpnkG3DKuHQ1xCXGq3OaQPzjSI3JEJUcGdAGLvg8gswAcPdTB%2FTsitpAwGu2ZjzA2IwHKmIH&X-Amz-Signature=7187d2b5c7901d4ebc21acfeda72e756c73d738d748807fabfb52b0164a56747&X-Amz-SignedHeaders=host&x-id=GetObject)

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
