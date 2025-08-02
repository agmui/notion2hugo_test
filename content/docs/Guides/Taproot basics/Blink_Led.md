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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPTCIHVM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv5a0NaGcRs7qMB3yegrHBu8d1epDBUEuJ9P9OwJqnhAiEAwQdcgZkow3%2Br1I4Z%2BL23Ex75mCNRiT6vdadm7FOpnD0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnsysOKuvbcSV%2FpeyrcA5CJK1IZGDZBXanZjo%2BY4bMvqwWnMpv3D7KaeNqdmkyqirxwlAe7NjK0NNFs%2FLuOfYoj0GbOY1IEzTiCmofbKHnGx3YLscxRnJA0TDKId6AiS2IU7TZq4YSo35VyWqD6J4OrfdPmXraO1KISmv5yA68tOzQh%2BvhsrtxLHqlu9RYaXWG13VVrwnJfDNc1JLWwtPH0FrVev1LLJAcv15wlC5sHXQobi9R1rJQ1OB9EZRgE5Emxp%2BpuS630GHlyu69izUXeiJV05Kr%2FbxRasNaKLUKvwkT3Y5CphuTIKXmy0rbLXcU6UcLYVfKrWz1laJHB%2F0kSvgACUUoy%2FPcWNo%2FRUZtjnU6imsa4Ul5nvhsAJ6kjB0LAvJ5lp9lwN%2BPMvPuA83jrNj7NYF95zDw6RCpuK5OZqD8rlqQdmkbsuPf%2BcG76rq8vjISqT3mutM%2BbeRyls74600ZQqYJ5yMtL3s2nGfbbzLNttL6sj8NsUDosqfCc9rDqIlaY9bhAjdbLHmtF5SiMST%2BEbYu1%2BlKz%2FD1P3vddh3k9g2qhVoFStAFv%2BjRGAAfzHv4fUuq7%2BHne3U%2FNPFv0Evv3EIk%2BmXBNUM7HX4l9qmEKZyravaVswudaK1KkB%2Bd3OSEdmX%2B%2FrjiAMNL3tcQGOqUBQfLlHu2tq7SlO3nX9xvKYEeuHAfCO8cZBOgkEhgQ%2FVOhwU7AeYrMViLJR5rCqLxlmT0Anmw8lkxkDEGJpcPh8HiAwDsRsAzXiZBhG5CnzHFjzuJu%2FB6PjexM1Sk55l5zrmjFYMLMX7zMMI28Eo89W1NMcaxlMvug4tuR5YduHtDnzdIFvhvJVeppE7VoON4VpXxiS2rmqUCXCedZUbmgd%2Bd2HhUJ&X-Amz-Signature=bc9cdee76c209f0c8837d628c1aade8700b61f9b03904525d215d8351222aa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CTBZBQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPCpoNzyL957xQWukxmtBnyk7uP84qb97ei%2BGicap1YAiBuAhq4nWhmfiuVNGQFVjQBckym0GS%2BS5EPobRVwbNKXCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwAaY993Sqmx%2BcPZmKtwDvFrc6h%2BfT8Sa9Hs%2F7XTjVf05dx4XtujNq4bQBv0OCycIPcvUJ0%2BDZqJsvIoa%2FOagtRNNQNxUyLy6smCoX8GmJftWo1dQfdGEtG37S7MXSgwOtSYKq%2FrpuX%2Bal1OCt07yuC11PxhQg7pLlZ4dTFDm49X%2BrkZtwtALDYWTmj7cpaSlk0yyrypU4G2%2BSFXQvqGbQnlPTNEU8h29XwuSCkDoNlsh%2B5SiEkdF5bf4gJ3o3aMNSW39y5mlhc3uNxX0meBBNLmyEpNgGy9EYDXtFZUr2yw2zrGvX5MQ52iQVQRDr5eDRE1XJ9Cjc%2FfcTCz0lnZEHVHMrET6WdfGk9Y8tjGybubJE6dUoeKoIhpm19BQqj9a1sE%2BhXrLjiUmLYB23K5jaMtLXSLiPbjJ3gXycC4BSk91eyyJMiCxVsa4zc67vz4bvGaGvcHMEL4oDgX0DatZyCEKZkNMP%2FnQkzb7f8M2dPagge4x%2FjBJuchEc51f7VQOGf%2FCbFeXaxrAkFFk4fjJ0pHeDAfX9zygdUJM4XE5OfZDzrSDMCk2w6z8Rc79fqkXMfd2W%2FaN%2Fy9pMgYNKo9GsXFg6%2F%2B47FumdPME6qcPqn7RViX0Hg%2FNb2S72QhFm2dX5eZoyH7fIhdFJo0wr%2Fe1xAY6pgHp66%2FSSm03WrhBOkY07Gl1b9nYZvUjY8j34lNiFxGDgIAPbrPpSlFiVtNHgSMKNRKVbvEXSGGnVDyE0XbLImtpeMdoowHsPL%2Bm67rR4THrOoA31i%2FAgwAuCyGwEcXFTxjxZXNxGIvb7Kb%2Ffv1a3pUM3xL3pPTqkmjoyw7IdSP%2FXrvM5heO140Xx5lhHOeDRhEPG3ZuMhMChZZCmznNsdzNYPaqYaKT&X-Amz-Signature=92baf7014d4f6d7239b70216e943478e861de3167a1c564a41532eba6b0531e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
