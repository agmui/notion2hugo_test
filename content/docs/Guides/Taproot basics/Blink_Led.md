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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F34TZDS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHCf2FOBozXy3ubgLtmFaWMu8mqDwfqhujoAfA6exFTqAiASRX%2FVnzaAzg0oVODMAsfvcaHaJhbvpDRcCcR%2BtEyHCiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgVbp2iaCM78jt74KtwDpoZMCNx5MBC1sVq8CvPPUZm3oXc%2BihuSI5i0%2BMILdlYXHAZwwyBPThgJDvrX0Eot2ko%2BDYRdYdV%2FEbQcCfs6xggb%2FqyE1E4QjN3ESVBllDUdBMxYP7AB5c1T9ranSyK1hPIPArP30Ab00scfCaVtpHqR%2BQJDEFk13I5nzQO0hFUdRMZSFaf1gzmVEhn5dbwkap60W3ccGq7J8bgkEpIOrwbnxSuu02lManhh0ZjJwRZpUAmVTjdaD7l%2BpVRWTpOEPGJYIw4p4ieVXBEIFVWq%2BIYhJvsItTzc%2BaJCQoaUkgvkuUp1aPEre4mcCH%2Fh%2FBXKhof1QBzUH3VRSQ8TA4JrzC9YwbL28dqLWdvz3%2BTf3l0is6umQPqAf1DDPyJ3nZij1EGImN1FlRtAZpJnIUptbiuslyxD2OcLTkt4l1VH0QYOa7iSOCGL15q4iusyK1Dn%2BbEO0eOqJnLXlzw%2B9ACyWTLKC5%2F%2Fp8MglTI4mqg5Cjyq0Lv2n5JtD6E1cb6yD%2FXMjo6GPSs%2BE17Bk1FYmEwli1ER8QAdYiXrjWzTojd7PNja42gLHBI8FtBsf%2Fgiiorpw2BGU1%2FrzMb%2FXEQ1ybHm20Fy0UfkMhwLouMD%2FW1UpU9sEkSw4HOSrgBZek0wgrufwAY6pgHW%2F3Vtaq%2F0ZCbB0RwgJ8gavZksvovIPorGohS8OSNN%2FxVCPFCKhxDjM1Ova%2FbgF%2FN9GIXHGC60DL81ABhmgfFgFLmEJxBi4hVimUgDK2zqJm8qJAWIzKDyUIQXb1jRBoKjLaxYTjj3bM%2BMPQ3k2nAosblDZlEaPgD4%2BsI3tpD7Y0FRDfHZJUMzZGnJnzSbZN9wMoNzhNPoZDqRWLywRvyZh%2FWdEKRv&X-Amz-Signature=5273bbe1ea930ceea43fae573a2760cb127fc614aa44c72a749c310c14183e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBG64UPX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDWscPTpbRVieFn8Uh9fGWJkUkYWd2uBDlaS6Mi3130cwIgJrVYrwgve0TlmicVuGIbbhuvCOyI%2BMMrW7eRwl%2B34ZMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5qlCyWZSdmh%2F5kryrcA8ToaF%2Fv%2BRlAACJRKy3sQv%2BCNYWWp4BC0NccSCIi8nUR4em2doAZ0z1pbXf5ZrL04Pv6zQ7KmP%2BBnUVrHZz9Fyc9acGQ7ApNz3NWQNGP5HiFdpmwtnW7T4jGRWMPfSp7q6%2BaRsIXmbYC1di8ZayhED0lRNau65rQuG8%2FGi%2F5%2BEliPoh3MJ0ikRg3ZjUJgVG%2BVk9jzLVh7FzzX7snrHQd5St0LDkyoOTOQG0fKXhb9XkwuJEOri0nC8d9ZtEeOuq9tX6c8gzif%2B6vs1OgEZb3vYQqr7dg2DbIEfnzh319B%2FlWnRPv6R6Od49ksT%2FPmkXpnirB1RMWoMj7LtdeO%2FpTTDzV%2BmZydkreTxS%2FbShnKYUkx5EZUBKT4106eEB5KR4Nch0%2B57lip%2BaYldQWaKaO2pTfRiwFPhxCnn%2FOAFm%2B0cSjavmKglnj9uJxAwum8MUTNuFlEK0KDRFB4dzvtRXbT25Z4wBG6W7P25NWadMOJqydnvet6sw1E%2FLjN%2BbeZ7YIt1X%2F7r0FZRF1PnSMEpGLblglNKPxgGWjaDaDoN%2FiWcCSOo06PiI0lgUiyHs1PKBJz6iINe3Ur2aKP9nLIG8ftkOhqq2%2BW2OqgNJxKlibd6otdmCuRm2KDWDxQCKmMMC7n8AGOqUBKadq8UOAWL9Eve2YkRImixshAYPbvS5SOwkCisnLuR%2FJ%2FlkDvaWQAE2Ma03wq559YWxvAU7al%2F1y3WwyPhDQ0ZevSaQwMPpziYp3ElmQqOK7agXZVA9%2BubGdHyvujUoXjWtzlf11yEb%2BCpSCKo1HLzCWgxEoPGiAVFc6tseQJIu8Fp3WuA%2F8t3aRdoPCsMM5Xfe5FJDno40pbYVYK3C99YWTx%2Bv1&X-Amz-Signature=90fbf6c8266a207f1a6bfe9ed5e487def39ba34d7e83eecb9404cde91e57488f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
