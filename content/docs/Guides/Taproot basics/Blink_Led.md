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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCWVA6DN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0tzKCOrd31ObchnroVYIBQ57p57H86qN6c%2BEmzyJ1BAiEAvXYy2pfkWn3PFmHY%2BbNUt0%2FMKZmEON4Absa%2F0pRzaSYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLQt1a1%2BZ2KAV3VeCSrcA7aSsNYCxh8b7c992L5E2juBoQMHJwAW9%2Bx7eO2SXbmdYCpCoLyogWdA1Oc5ixz1B0CyufhvRZ6golR3Wf361mhOldpp17DRrUJrQU0C0F%2FntiY7bl%2B5%2BACcrTOhdM8yzhtbR9kzjxQkMRKpQXwLGyQeuK%2Fkd2miUzJ6UW1uf5a4W8eSbhx8CakquCvshOTfP9qX6M3eJa%2Bf%2BIOxO8MRpEurFoESK8yYpF5Ife4cl%2FyXKiRqlerQfRJPdh%2BvkdcAiu9hfhru3cS7XoyGGiBuPOa9GtpSmPiabfkVuCYygl2amYwmFUgdThQTonYUVO4tbkbnR1nCBK6b%2FsMKKNDpwWaLwt1QBGKvypHW7xv9%2FaXgd01LUGqsscGkgF%2FXgPfkU1qNMnhm9rs5U%2B2xOPuNOqyBW%2FmA9ZtC2lCaX01CJcnhoBQOScqFSWvMyJ93yjFd%2FZR5Ln3Nk3MOg7RsY1IbgzFTx0PCR%2FH4CHZ71lNcsLsuKITwbE0ZXj%2F%2B6y9%2Fw8sKp7uEIw2cU8vn5swC0y4JvyCzI5lod7KDbOh%2FNzIg9Jey2ukRWbSajFoWA4mesTCOn%2FHwrYzFGNzB36lcwXdOPu%2F1PFna33WZ%2FGGyxaiXD7EHJMpniT04LpS4LJ02MJTSv8AGOqUBWqZPcq8CL1lGfmv2hurl3ZjlQz43ggkPOqCHZykbYjvaVbTb2wg2Z%2B8UG%2FvL07BQAtGwGOb4zCUe7Cy7h1HUXyqcl32ONe9dvf%2BJOw2BNsfCzMv%2BW37OcIq22rixsf9NMWWKBs2N%2F%2FdDMDIfnJq2NOGvxswODOChS0NZo8M1QRajE0TItN%2BybYTTyg2cX5l6mcsSw%2BvC9MRQ0hYkgjxIkVexk1WD&X-Amz-Signature=b29f0cd55bafa1cb189dbf59cb840e53e9b665d2062856ceb3b1f81aa61801a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HENUB53%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwUDnW8PPia4jGIt57Hs7bUZ4d3mJwbXf6YsBGfIMPBwIgXID6u5qDOcUio1TZHKth6gR630zdUClnDXu8C%2FEivaQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDwUtSbdj7NdUqNsdSrcA0eDeDWqidijSpEQTzGKECjxl7UpwWwTRp1o2Fe2YKvY6xGWLQ%2B5%2FiiVwk0tjJw823DluxpeYzWizW84iZVyWBeB1BkiOYHgYhLwsNfayU6H7XkU5CpKHdv4wqtNCdDn%2Fp1Hq9RKl2lqgb%2F8%2FAXpiJK3prZQTcaO7uhLEm5MzW2PaAtgrukfYavXQHdrZMixbFuf8MIDZn4CV8SKjbT2GFX2%2F%2FGmQevye7ANgBnalvpcc0tvZ7fQ2GlCKRs%2FycXLIHbfqdxTqH6d%2BvvniaqTtZ8j6D4lLaMEA8Ni11R7Jp81%2Bh2cOkev3BAbB3I8EK6CnWOBI6qySi1JhY1R%2F8aEY9z%2FNpMdbKEU55%2Bp6X7Tn2%2F3MI04U1ypdPjeUJ2ihrgy4kNjhzKTGm%2F8FgLQXhuh7k8W6GQ0UclES8SezhqlEyxGi30tk49bpjmvdtc6wzImg5WIVfOOZuhtLV1fwaYGjFX8rlJ9SpSeCM3CEOQz9erBnqfD3r3mkhXtGI77epSQ6fikFCyiiXZ1OacjXqKEjDsAukJaf5Lo9iJ6mkkntLG1SIRGh2ieCWlibVIUXUYXjRgLuB8xFWKMPm060s%2BE5UxysQVXpbDkcIVRImZmlv%2BZD%2BL7bai7vs0Ts3WbMIjSv8AGOqUBKsODeoPjn%2FoaE%2Bg0eG331ZjeNpDTOkyWDWb5HWI5b5lZPpkr0Trx3L2zVo5%2FpBWP69ec%2BDoXk7qWWijW1e%2BaK%2B96cb1AtYHqJxZTr9A7S3A1JEvRgQmEcQs0Wv5kQUC6kImpAa9%2Brhm2Df6U8riGc3TUFMwzTZ774OE8O%2BjLkv1NcMMU4Tu96PRoCDkf%2BXpGvWuy16WVwU5fXLMPwIUH9Ecq8MuT&X-Amz-Signature=ee29d4f1ae7abab2f103918e5d8a56081ac85e0e82bf858ebd67959e68d22a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
