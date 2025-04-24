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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVKJQXX3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHvBX8no5Ag9xfi9eYC1GHjPVNG6R%2BPo0K9astIJNvwIhAMC1mtMgByHVAnYNhT26viGP%2BoKJ8AmJPRwxEv%2FemdT2Kv8DCBkQABoMNjM3NDIzMTgzODA1IgxgjfoFS3gIgA1eXLEq3APvKt8Mp0czjzAiW9LlMLCESHGpVVbJfYe1JItht5Dsb5epbmb4Jh1CkylzIcuB30dJZVp%2BDnP2BXjoqQz42iSv7ziyoysqTiRPlzc%2B209lbZlRJSUxsU3thJcRDrmc5kvSeqyws5R26rh8bHVEFTlvihCdlImkVcbsw%2BZcEzwrs0Q%2FztzXYB%2B0L0KOF5JnUO%2ForAcpjVaylVjPhxB69bkMxlKNPfj%2B2fR9JXC1K15M%2Fs7xYI5Va3k8Ve2oNu4ECWuniG9R4t4OV4XVQEERoHmlbvsynlImQYLgWk1YFdNNlN5byiMgtONXtooQs2%2FRt40p%2BkFr7%2Fdgg7sWeoAiFQcutxftdnwgJe7vbtCn0%2FyDCjhgr4c8z8IUYV99YoU9qo%2B%2FfemSdrC5Pi6TLFk9qz9Yet5f1PmU7D48dS7PUgH71Qjvyerk2auRB1Swb6LvqiRL6XO1ot0i3WjLntwgW1hU9IInhWu0OChfdqbHtk41G1Eg8wbvbXrBSkzRq1CAzEmd5ioc7u70yOnOP%2BfKgkEdjaob3G%2FqIRkPmXv1bcemR4NQf4V6ieIuUhxBUp4CPCrWrHY%2Br8xjLu1e6EoMHX1rOaVzd8tTbV4MNLKn4dF%2BIN5EhxG9%2FoUeA%2BOF3zCzuqnABjqkAfSxaSDfuV1LR2jDE9GPlF1qddWpWyvdYNK5rLkhdFx%2FQVnjla7fVMdCC2NKkCFGazvCf6cnFPYAU0rvMuhXOEVPZM6GnKdrz8d2ciNXuWLvkwygZVDN7TtSChcvUUGXuJrhixJeXpUXD6W5IHCfx7OWoPecAouILqFZX%2FSPsAmgH6hIiVDEe2Ger3mLrT%2FTqm2ESQDWhEY%2Fijiz7yQGMRCUL8mg&X-Amz-Signature=ed3b62e1ebed623c18ad248dd46f10da48064721ff9e71dd7a0946bed6daa7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSO3DAZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsfBVD8IUSItATnmI3Uykv2IRBXt2KXJ7OmhDcEIRhtAiEA21mhaa8pQzdHW9EOJ188LuleKRcodepB2V326UNQaOsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFNzS1s6W9q2RiGCACrcA6RnVbtJjVGaltdV8Sqow69ph2Z0xgBahxSR7xnnP6xlQw0q0isVDou5n5D8pSL9%2BnpFt6ERbFgoNxsBlaB%2BaIyyJ2Ro1%2B%2Fx8IsFZEmj5Kx8jnkGK7PmKLymX9Xo%2Bcf6ZSRSoXZCFUEADXeknXaNX3Dk9kQ2NS7xlAkERd4s2f8plc%2Fi18k%2BM%2BO8bPA5%2FMxlYSuHs5GKaXFl%2BvVaJIrpRw%2BOXR%2FhwLtxtivdardwOC49h6bF7xo5grzIfAri2%2Fo%2FNpo9mFJN9%2FU9%2BsGm8jxSjl%2BLE0xW6MMBOeoSdFJA9EoJJkMQdmm1V4Mf%2ByeNq0GwYF%2BsNSYEDN039Dgy9aBigkThCyMgDzm6Dzu87a1EluCeeWQw5yoDTjBk5B7k%2BjzzkRFnEf8rUUybs8UWcXpbDqe5i%2BnsCEXHU9VGXXquuKVt8rhDucUfl8u%2Fcfx16Kim%2FNp9Fqz8cPEK9LEuZ%2BlGcLU8zaZJ%2BQrzt8W%2FRv2pNgQWojc8m5s%2Bpw%2BoJU5dCVfFC8yn7Jl4SiUF3DhNi0N2KHvmGDYH6VYJ2PitY02w3UFBc7HUNHWIRWMJj0dGxwmxcVohvc%2FEHeLB9oQVqSI%2FpfEmSoh0GPdaJX58vsDYZScipNijn%2FzVR9VS5X%2FRMJC6qcAGOqUBrVTMUbFTSOlBVLiSWJCpsDZC46PggM3GEJs9YfE7BViozZ5msmPUANfHeeef0aLKv5OSOueuGR2WEQuF3QRhcJoMxxNRwrU5a08rg8Ae3Eu8e5Ru9Juf6EnrU5fzJjXJk5zST4Lqn3Jf8rvvmu6bJhMZkVGzIhYsfMtV4meV1vR%2FB6IZcdeiy%2FgcgCTBQvyBSIkspVW302aLq08aBdMNBbIEGJwr&X-Amz-Signature=8b869bec00b1984a20fa1dc17017e50f465524c60d06b8c2407b712f1da4bdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
