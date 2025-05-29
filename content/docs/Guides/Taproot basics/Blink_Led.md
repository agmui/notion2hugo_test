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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3L65YO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9mJ4TnI2zivpvaLEMyDUtUTQRQe2BerRVSOFbur4ljgIgNnLm8lM0qpt3StAbB4MncPU7woLTJ%2B2F4tvgNf9EeyYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2H1kvvfqrGHH7P9ircAyd45%2F9zYbOJakJ9lwt%2FBz%2BGNFwH28XWv3%2FzIQ1yIaAlC7azsM73d%2BsxdGVZgj5NeCYJ6N65Bu4xpDmQ%2B8nEr3eaxqYRGg%2F3BA4ZMO596JZFPUa0dxm%2F54qRSLabxGFtnumMi1XDoheG0px36tJm3SYVcf3QeOuvisgWdtIRbtKK3DMS%2FBhIe0ZWEB3hwpgQqVpGBiZUjiNZXSC0L1Bu%2FPC7zRaZFlx6COks2dn0R0EqSNg%2BcJRH6IwiNBTDvWYLqbJnOslvj1EpPp0U9eMC3vdABLjGz77C6UQGLOojFlO75dOdaW%2BppPSDGikilwANWnanNJ5uWkqPLOxYIKkhJjQqMlYE4uAbezje%2FShLcIfFeMhRIJbHg1hwCurm9OIlwY01OIdn5rUF8a160RBRg8DtyKn3GjA8Z6vL0wDmC1FeCf7K8%2BNfKIQ5LuA4CjdTKGzg8XyDHn%2BCBsZaRVb2dATqy4jfe5ECgbEZe2O7W9oawDrLuAcP0VoVaRNEn5Y%2BhGB5qZTMz3wGmAG%2BhDhSvJNtlFAMgjhgibpdKJaOQV95RoOrELXUj74y5VhKs8XkAnHRJ5N%2F1sdVhPkpWLueir2HCD%2BWn1L6UgvaM3tL7BAiAkJGfjg1pc6x70DSMLOy4cEGOqUBXcPv166DC6MOZuAB5EqCaxtmv%2BnN2e8KLlbFxXFu%2BV6jEaUS%2FfeBVwtIV19n%2Fcr7XMm9sq81a6zGmdsqFuLC0oTndKm%2BaMF9j2t%2FqePscHVJsooRjveo2177S%2FXe8okVjKMDJcXi5cS5XSe8kjy2M9sh8lUx8QQwI%2B8BJDdPN2W9cHdJXwZ8gEz8PmEhXOLAU%2BWBgwlHBbPIe4hn0rKXsg5Bi1Cd&X-Amz-Signature=8e4982b658322010669a9550cf225cafbe366a4b329c3c501eee42717aed4b24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7HPE6U%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlymmPWojcmYjzq%2BBTgGnGP4vys4EfeFBcvwSNhdDsPAiEAwzGVbXLm6UpSNkehHPsAVmSAavHtMJKSMEhzAcTzUBkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaRYm95QhADuLDPrSrcA2CjEibUXzLUWt1ZH%2FhQhQHFncuNoOwzG5JKfMsfJulskfQZCv1vioqG%2FE38CS1XMMk2S4Nekqk1Wc3HEPzIfGIXQaE5Gmp03HS0KTFadOnuu6ntciNmHtwkrVxtuHNXOojxrt6kuUnWm4BWGA6I1ObHIMcLLmka8zbPYNbQ%2FWL%2FdF8W1aYCOiJSK1%2FCtJQMNR9HOHCKqB5cwMMyfn%2Bkmod5JPaZ4NmH7jzVrEQNUNF%2Ft5vr6n5M8IYJCLusjmnjjMSTwU%2Bc9MhvkKCMpXD2pQkkSjjtorvVZBrGav1xColphXUE9w6skQvkAibZ1%2FDT823AZ0UHSIw1DZ3tVMfVvlXbbZ4UTXUvTpFOIPubCKGDE9V5TBaZt6fQCLZcETDA7%2BT9uJKySVvWMkXE4zeUem6Jbwo6q%2FqrL7ll3Ab5ArGPCYR0jyo7V2nXdZhcGtSf5Zd2rBix%2BqOQBwM2aiVlTBGaaenXEhlxD%2B4XtLbcYSpHCrXfY4ak4LjMp01QvPEV9EW0PCKHwIzgzGqAgzMYqwfTKc3WPB9a3nkhcnzoa38XIURCG6DSevzfiU72i1tvidpw7tjcZPfQKtQXQ67DVkM4MQ33cd%2FlvqNy8D4eP%2FsS%2F8UmQDNz31KQZOMpMN%2By4cEGOqUBq%2BCgL0XL4Difkku0k4e0%2BaWZ5w7b36oodHchLPOdbzFiap%2F2hrdY8Dr57KfGFyMHMzNHJveRgxDlOVFDaOT6LPuv%2FjQrGJXaY2fHWnKmlwbbia%2BUkzCcPN5gLon1aOpywtu9hfU%2B59D1LDhbwXqx0DLq5ekMjeWCT5xw036sDpSJPY9L0IxZIrxW4ijejV46xqaq%2BCgTAQpTZKsvK3uepY5z9G1C&X-Amz-Signature=6da790697f84dc6a04bf84746834be96edf04ad4df601b0c5b1d5a55e473517a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
