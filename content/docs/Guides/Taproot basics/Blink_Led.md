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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4VIH2P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbONzFFAkhAWFcjtfLjvW9cFdaf5QmPG0CW5Tq7ReXAIhAPmZcK3EPp%2FPDD451XBYbsXfSBtgzZlM1gdRQ4yTyjjtKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq%2BY0jNuJ%2BevV2b%2B0q3AP%2BXzxEN84Mg5qMt6yhxyvM91GdGacBzSWV1qfzGt4DLZkZg%2B5n87xnDZy4zwCZZ48qX0Gox800YSGgOo%2Fz7215jWGWcT91k3cTONrRpfkp6vqU0xnadklERgZhPzzWWWuZDvU3jGyWHR49vcr5skxcDII%2B6zXqVuCG8PiOP1%2BUUFuHnN9MPhMZxSy9l0X0MNn04JhhqgN1eZo3LvegPVda7CCvnRPJPmjihWWzYAgWbrD8oW5ceAAPoz2M7QE6vTO2ZbcIpcAeM55Ou%2B2dXehVYPuKXoiAbOt2Skg9IYY7trdAAvSeJqWlr4krzvhySw5%2B7n2KtO8h%2BzcmA6VF%2FVjaesdNqM3MwebEr7N%2BfDk3VET2VNQ1Jtbx%2FIbSVMDSiIv3W3mBgj95jfhO8bl1dZ%2BDXLDzcPIEhcIayvHfeNVCxPO4djuf7ho8KHE0C6TSK92hT%2BnPWXXWDQ4CkZ%2FJXI5swQJj2Qznx9d7Aiv1v8NCPxwWIOKJj4fVHvwT6DoDRY%2BF%2FxMHEQnP2b62vkFf2nyXXsra0TMtqOyvUd9DYmbps5kBrvkPSE3sAkZt%2FSP1xn4Hw7aC%2FqS00Tv95eb5LQb600dbDDymjaEr0RsgNWEwfJIoO63rd5sgp7oIGTDKn4S%2FBjqkAeiVJ2Ztem39EuxYA0zhxUIx%2FJymuHn1%2BmVDqut0t9CTpYQWqxNw6g5QPxrZaD8iR3gVdNSYzBLsTQlVCAu%2BI5FVs4FWQ9EwlgOcd%2F1CJKSub4RuGynY1BHvsBad5FnhC%2BeLl0b%2FWmqU%2BM8qVsnNF3RzwR1WpA0cO%2BveuXJc%2B5L1v5kSHnYJw8Yi6MiGrP%2Fu0ziOkz5LmBoG6JPOm%2FIBGVQsZHsO&X-Amz-Signature=a8deee0ef6e63031ec52c75a2ba89f48d6feb283cd87d202b8b6848906c637c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4NMRHW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YvWqXq35sjX1p0tRRKgVNWafiFHiGdIFGUAHI8briwIhANzwzyNKD%2B4tr2azqc0YC1eyqONxo6TTHOFQNRvv3t3lKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX1rp7GIDslUz4Eugq3ANnbI6tvb9ljeutDIU3Pi9I0uvWIuVuGXSugSD8VqQXamJZtHqoN4oQh1SzPDNt3xOk2W%2BSvy7hVZs51YHKbIdfSJG%2F32p%2BR8xtcuurIaeBsw8e5eYdUlU7YIb3eqccnqBSWtT6Jq9%2BV2X%2BTb%2BHhFB%2F7bEJt2PAcanOYB3omzYoENe2nvp3mpRHd8LNIise9ZYApORMozbt%2BsvPWw0fmFyCda6GWfuPIHqubPDvfCE%2FQZ40LrV%2BuvAoGb%2B4uMptNDmCUV4JhTJ53JXyzeSSpz0vM9cdt7F%2F4mG%2BxwismuvmgEYJXrydzwTBjJvF7EkeKM7Gg0ToW0F0fY77NwBeKVYgb1DBEPUmnRDZAkoX0bJN7BiNOgZVcu1dOpV5S%2FC2hNAsVAz85zRNoJGEQQzst6H2SfYPX%2BNM9vc1CV01EMJJUXIpRybvNDTKx4aPLs8dbQSNcj4FLsqAHTtG1QKxM1ZAGroNHQwEoZgZLkj%2Bfz5PtCMKyHd%2BeYWbMMh0Up1moiLztf%2F9KVuEn%2Bm8ik8jIECALgYX8HlGRIaQTeXn5rC%2F9BcAmP%2F9FnhhycdeMW%2B3TfCnn2tqC6jO%2FhWVkF271Kme0FK6PmgZu0ax6AUb7zpC5EbrbralusNWhrqa6jC2n4S%2FBjqkAcrA5XK0ArkPz5Gtmzpvb0bC7JVeVwQfORE9uqEFnytiH8btJmnrLAs%2FzlQunOhDIziWoDVNRO6hdR1j%2BsC6t6PL2JwA0bXpuQ0UsBf34i0YH0cmR0P1yCDJGFHC0ths1yqQYfHOaLiYVKRqILbo23BdXSSkbNKHYheenoinZDiq3mjhLl3UCZOjQB6V%2BgVj0mBhm5jPOWSSxs50MnP6RfO5GQbs&X-Amz-Signature=b2f74531ff02fe7dc8a10d91c3ea21e1c09f44ab645c29b5dc9598eb46752383&X-Amz-SignedHeaders=host&x-id=GetObject)

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
