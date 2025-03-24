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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7A7IZM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzZjq7UW3EUodKqy5X2xUc37P73vu9XxNQuISq48LxNAiEAw1WNb3HQpRmHkYdeo%2B37g7Ld5Kk5wFTU1ZxP%2FgQD%2BkYqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9p9D0VFyBXRf3E0CrcAychFyUIC46dUDORZuAZDQ0K5gmxHlRZqsuKMByp3CBsVbTqkVUk%2BmVJZ28Mu7%2BbMETjFUyzPVyVpL625Ofccr19Dw0hEabexajWexIxjNQXZf%2B77xfmccUUcXJaZy6m7tf5p75m4B36yGY3alKMkNrYV%2BowbWafEhbUQPOd9OEGPTjt%2BMq4W9DMumO3wq3XuDSBnoWiIeH9NGRCo9EodFvrYieJWcGqHOicAx25Ujs%2BcIW%2FqM3QfKZwpm9b0uGb9it4Fpc7OpXA9Zg92mqnvaxwza8GEcyu7R%2Fcll%2FvBFXbKPq9zvRODs0hpvo%2FjfaBEkEj4%2FpICw9C1qeqWs7Da3Nt%2BwHtrJLdLYBG084tVZFUShWuDFFLrfwfTvptGYwEOXqr3pXFegQ41Z3SjGeJe%2BrQzHp4qNfWJd4MHE866wbB%2BhSyHQqEAIIGzktXM75lCzcs9%2BvcPcnJ4tOy2I1q0DPdQ%2FYEQe9QuZtcsEzT2c%2Fy8AJP3C5KkL3r42Flq6qxu5kGi%2BuuaFoWoo9E4F6%2BfMu7SS9bVKCO9P6Sa6okjbdMFrYPBhwszDGYgfRtz8nhvjPSLoq3%2FiSGQSF%2BHJzNyiXXmHZLV1eY2XuT6U5q8rdNy9jykJNjn29PkW7fMPSRh78GOqUBgX0ehFGO48vZgRf1MrBRWGdjNAfojJlSltVFcxoVHPtxgZvqTcwXumFw22xWHtjajBjuQ5x8R6uXyFZO8umP09lSPDA4xQIIFoAM%2FSo4t5CcA%2B37p6vVjq7AaNGoQUP1Ve1W%2BEDymVDLCtHoEw6o7hVkn9aLsiz%2BhXDNb8k9ysvhVbozjI6n4b%2F4g58SGOfc8SzBZiR1hc%2BB6KsI0%2BQf0%2FBruDsk&X-Amz-Signature=6a8c2d5891f54766ba3cbf4fa4c7b8c6e64b2688e6391931d2bcfc23e9c5a71c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBMR2TR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrN7uEOxV9EAPc2fzwWFSw9NRJIUiDCXb%2Fzre4K26jOAIgHpiMNsrPAD3LAk83co5ctlXPxOyi4ISNVw2p4CS9DoMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq9jOMy9yqaDTYOVyrcA8iGKJ%2Bcqd3xjx4hE41M0631l7ke%2BbBAJb0xaNPfpvWJiT9ajGMbZUyMrqZAEVQw9l4RZAH8kwN5UODwukXVaTTnb%2FBin1pLK%2F2EwluLFiq0JNiTDGkICbX1hmGqeyu0ocEdaFfPT5mx%2F8%2BYuNNphZjRoVmUVhyMGElCCE1P0%2F3qiEC1iuQFAGSyTs8EFeV1jXcytVdDDZehDm0nF2HTEGL9l%2BOXs8pqRGTfBY6rEnyu8O0lRlHjCkuJDqmtWCweDHqa5%2FGy4SfDcIOjcXK5xVvkVSsD%2B%2Bs0q90lggJsxGB0Bsa8sw26gljGFrTQVRmGseBT7yqE%2FrNf%2BBFqJyfyQYoVaHljhT8lk5iAifDDUd%2FBgyTkvNxexXJxYFn1Cl%2BFtKlIqar3ywVsu3oVZ4pqdU9xEmMnOS2Mx8fMeBfYndp%2FfJw2R%2Fvl4dAa3d90Z28G6KFRdxotkbk53FWjlY37I5z3Z53dtLHwj%2BjmTDugUCtGGl7f9bZxjXVU5%2Bd6dAkf9QTvVSfmPu3JWyLlH6i66rGQLbB8b0sbVVaXTr8Uq21bvW2JdL%2F9eC4cdOEdhDipZpNJ6s6qmgxO4JlBdF4kpcvpfsrH%2B%2BY9n1N3rM%2BEe8XryZXTIAU%2B3MCwF6cuMNySh78GOqUBaWLaBQ7TFEsvXjQTGh%2BHJsZawB73UDdt%2Bm9blBqpEIr4NvQwDZ8FOMkhrfDeVrXk0ZSrzkrwzSnpZpmOqFpR5nz4e8CIBZh656POTSHM6%2FxBAPRdi%2FfZqDiRvuYme%2B%2BBy2c0G0P1EKH%2FzcXysvkWso%2BPS8WCXFgver05aHm5HcJSCDtFGusDczATF27vln4s0mSrHX6Ch42B29mTwmGe0XdqSDbh&X-Amz-Signature=b6895c3d2eec9ee22ac7e85fface69c1f7f3acf4fe9bbefce7117d58bc233b64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
