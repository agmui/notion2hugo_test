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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMOF5X3A%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeJO0fOrXRcdWxAsoVCDaOyh2NfjRLpC%2FReh1VU4peBgIhAIdFr2zxlCvVn9OZXPJBE70dwBezktl%2FOTeIPiLI8UuoKv8DCCYQABoMNjM3NDIzMTgzODA1IgwBjk0Bff0jvvB%2BX7Eq3AMlhJYlWU0ISKZducze6Wo3s4oJCA1Zs9wZpjg0GwZbEK36Yl8%2FoCAi89DzHxzD2BV8S3bhW3b%2BTbOp2nFMnFMrwpltwGQOc0vvkHLaW769%2FIaGTvqmp%2BqI%2F%2BA%2B9T2fb40BAx357my7N4L0Gu%2BMbtByK5bAWQAsW8wK1xAj1eNpkidxy3cuglf7cUwgec5d6JbLMijlpinOqp02z0q7kMFI%2BCXA96csylpcynqKYvrdxDBfAYKgQSIimUfJRJ9NjJ29qjup10kF7yzTK0jeFbKalVRq3jw1CHbtt%2FseMGFkX9woA4sl%2FuSyOW0TTtWXVq8%2FUfSNNCBtnbGdEravOIxy7E5KPI7rq3sNOa2xD7Qu%2BO6cmdkB9%2BmpMRjxnHC8xAG6bOU1LPN2%2FaXgsm4RTsXoqNPQg5UqlCYmGiEH4jh5O5651YxOFoDhtGAuZWONJaEX0B1m5rcbL%2BByTjRGg9JQlsM86bKXPHpwqeT5YBm0ywloO%2FwJwnGXNxw1tuojyTnXUvxezc44CwRnM4cfMLfKpoQ95AcfODBNrdijXO56wQpz8nZn2F%2B0AXqoJXdh%2B57RVYZ1PhzFw0uckYiZQL3siliJ%2FZfmQdeIjkU5R8AE50VLcC4phRmMgVkj%2FzD62KS%2BBjqkAYPI%2FPBcSRxKsS8l6uqmznfU3tdJ5BSM9rGkxO3VOkTkpHbhFnayIH0%2F0Mz%2B5KnXRWTUL16VD54jcQfM%2Frw9kxrTDIrFMIfgPUqGd3JNMO9FNCki8AuzmtOZAweqkfS1GGr%2Frru7GuZ3UMzcgsmd4duBHs50jLNWNEzJX2wAXwfhhBGkfya05FYRXUV86TZgYvb38NrJ%2FyqGhaCNy9ZKSaJQUI5v&X-Amz-Signature=b5c20fde4d2feb46236df56bf969b116cf4e8dda911b11d7e4de195145a02051&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWHJI5V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqMiowUht9lrzSxGi1jH7Z9D0Mf7RQHPdOKU5Qypii4AiEAx8ESVFlm7TKfo%2Fq1Y4z1HJ%2BoF8KLUwjzBlfcouLqdWcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJATpPfne7SVSE9PnircA%2F5Q23ffDnoyzFKwbniX7eSJ4BsypFFUXY01uMe55Jn59SQ9Yqj3fJ3bDThLGSy3OItcuqd%2BNOCJvrm5StwWWTQkTBZPTpcvDbBBXAyoCrox5qwvQIAc%2FEsYtNBPoDOTQ7hSc3%2Fq7x%2FV08cAexiiP6Hj2k4Zjhj2gCV7YJprXoBrtVjN8eb3bMovwxQwbYDlwdWPlCQ%2BP8StkwXR3KfJzWOTD6Azam%2BuZfE%2BR79Y0%2B%2F6Jrd8sDakS0uCch%2BA1laHmQTBnkwxE%2BFRoquFHuwpKXElfOTUD%2FIijALuvWS8bKrlll%2FKYXO%2FRYHuZy46lJ6eLF1Ptad2O6G6Yavap30FfBqMPSwuktUhW1LOIkc2SkOmPDMW1rubtVwr8UhOBD%2BlFLI9bFU0HFGidNJNK0tDV3HoSMY2o2D8lBn5wIC%2BelVPF%2FKvNtOSNFQNwa5Z67sj8HgJHU81O98Mkbnvrze%2FcIx%2Fr%2Fx9XbNpsDbpfN2q2DfObaosqviSa3J2l2vWKRBNAF7fb6dVB2QuThq87SZnIMwiT6LBZJZ8HhMrQEGcBpj2Ja%2FmVFLwaJ%2FETCOfNCECw95LJ2v0iT4gz%2FlEy4s9YOmcQn3tPZ1f1X1aE8nMnvQQ%2BJ3MLkA%2F4vbo0xg2MIDZpL4GOqUBhTsuOOoPwE5rtdONyOi20B0WqkC9%2BwY%2FDT4%2B9Ghixz3lFQuJT%2BJHTa9Gc5RXyfYSi9XyKgStOcx83tvP1R7aURhFTAno0IDuYJ%2Boo6NjZeLBOkp3IHgmkFyC2cm6LbUL97000MIpBnWNDCM10xQb0D%2FVOPrgMO%2BfhFfj4%2BIOWPU4UQknFfX%2ByJJD3%2FsR0AapnSHAGdj4mnaYZDpBGMpgJTsogiSs&X-Amz-Signature=d0146aae7670bce1cc1e760d9e43527d16fcd6a8c4e9429719e89da725c50b45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
