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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLE2CZH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9573QRCtsBF9Jc97JjnM9tgxZZxtmj%2FDAoBiigi3GzgIgCBRipykGD6CN7hXCv2aCmSexmvy7dWRbBL6Mzo1%2FXLAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKI8JYQsc98cUUPB4SrcA9YvjFGH%2FQssEec9RUa9QiwNqJO7xrVGHozxpkKXgyZ35xmnj4bYhSFxwXAPk7WQDLFcKK0hyED%2Bm6mny%2Fb7poRactzA83DT8TYb2jPAB%2FgiM2jV4yGyH8MHcW3D0ekiwv5oHv%2F3Y%2BwoUZ14SgS%2FCQfaRKGn49CCOBmtPN%2FriV4xGQ7SqW%2BcShYCLsSmM4o5O%2FU%2FHfyydFlYBFPHEqAoQ2UHkNfQaKJD0TNf%2F%2BFS96STAujwwv0LfXGEzyBfUx1JswIoTUYAZm2Ahe0KGwfpM%2B%2Fi18yc6lyD3c4rg8PYmj%2Bi3UuLFXWxKr4RbWxqo5YA%2FLO6nDCRCHhZZ56sb%2FtX%2FlNj7bus9CvFNT0j8Gn9BVHIhnWPS3kjKAyxi3R9SPfzGSCtDqEnWPi483Ek%2BJQHn0I%2BOW1L7niEWc4K68ehVae9LdTMN4twNefVFyqt41w46JN9DXmQGLjY4bl0tCJYcJ9AMfi4T2rX%2FYDje9YOfrJAFyw8wakGOniXkHpmdw84ncTUti5zPjjlbksqKxxEyw2A2IICt4tdKfuZONXJqyrJMqAXTuVWkxl36DfJG%2Fm3lw480t%2FTEZ53c2087bU%2BO2hzcHhmAzEtHXaTeD1zqPXzlsJlOLpboq4qRhsUMMLkw78GOqUB544hbv9DwYHDZ9Bs7Vc%2FxZocKf05uxtNfCLQvvn4fowsu6R5KPgaStQ43NdWRt%2FTjbQsh4%2FJ8LEopwJogS%2Fq%2Bn3g96jjLJTr2S4YiA%2Bay3SOvQPBX0sUy0FBil3rZE%2FH%2BUKxSHTGHcNv0XJxL7gJu%2B49O%2FEhn4mZ1UU%2Btf5KE%2F4mrbtIT9BRFV%2F1kADvfigclqNN65woU2K4xyW%2FFQiI%2FX4Xz4PQ&X-Amz-Signature=deebdeabd8118b5bfd235770f8a583b8f9c08f64c52c51c1a6cbbcd8ef23cd68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353JGKWZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEF1VwDPuyUoEVeNLHnbVtFTertmJDiw8C019o%2BHyakAiBEmb3zP6tqKMc4arJIShRtmYM6etmkpXGw7tQZiMdp4yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMgL7eruv%2F%2BbqUR3Q8KtwDKR%2B9iv4cemnWJLmom5c4u%2BEVEaRDdmhDnkKyKXHic8bDW4%2F8dLDMINco0feD8C00OqPiOGxKCfZAIcL9WzJw5HmlCywvdHPsR5XX53fEZM2B2MHktKxXJnNrROiN%2FYWvYBdgUyToZwPdgyTRowm0zyt07Xneep2970n3%2B4iEmScyOaGZnEgey3QG3TJi864zWSRX%2FGL0da%2FqF1ZBXBoTRBLMbq7Z428ZNhGWwtCZtaRwyx9%2FvMLmXk%2BtodtmzMuO2IkNGh2j6d2i6pVk4W2SZLlEVsZIPUNwadjPeukiEnEIU7zPm7FnXeqfuucOAiTRQd8n9SnAbJk4tJj6Rd6%2FDDzfuydLUjR4RJrBP4RlkpOLxEK%2Fp%2FUHbviI69SmlsKIDEvmO7hyFbQjoPRSVQB3hh7VaFJY%2Bhx6MJbUekXU3JtU3nLcPa52dBRlXvFqZ4I6hgUt9cGKT0m3tPayU1UwN9w9SrmKbUUnYoA6Vuk4lTCVIiWmHGIysVAV5a%2FiEviPJfNwe8Rvn%2F8NOdLVCpb%2BUL%2B4yHtP6%2Bm0kvoMAiEPtVnXQvqZ%2F92UaXsl0PAxhckuMDHFbySjGWmWUqPedsP5vDMsVXFNSlKLj8%2FfyuEC491MT23z%2BBkiZKdbHcEwksfEvwY6pgHfQIxO8tQVNREA1cuYAnj3buNtcX3nJFDXdjuWvRxkyuEa%2Fy3o2OcEYMyFWlhvv%2B2lOO4iOCLqxd3urqhD8Ek3Sd1IS3o5LNyektXfXcBRyYRi6u%2BwLGkWm3syLMnzaCDTgPwEHMFfHs42fNplhb%2BehZY%2FTAegaUXq8jUA5cYnyoK1UsMWaZVupWn02zs%2F6QKo61W8cIPT36I%2BD0wC3TH3TJUf1c%2BZ&X-Amz-Signature=6ad2ee9c61c1ddc22554f0c3b1fa7ea31f57a03244e667d0d66c52d0e2643d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
