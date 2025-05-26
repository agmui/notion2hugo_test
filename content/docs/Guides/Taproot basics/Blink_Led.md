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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGOK5CU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkslspU4SwF70hCH3aeKsLAxz%2B6R%2BwnsIkOXlxrmW9AiEAhuithNYGM3SuvGZDl2YiZkUrZOLQtdUE%2Fcoc%2BqlKBIcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNEaUidYjcle0OaTJircA6DSwoZsQvDieqIxfgAXX%2F8zjCJ9VyK%2BXExINh5RJauei0azkwAltNEIcV0%2FsNjDFiqoD%2BO5BSjrN8%2FI5lII%2FDK5yLio2UvPTIuRn5SMpPqkyYb%2FSUEdt4qQlt%2FwWLzkWos0d5ZbHgydoMACJ8jDegOMO380gTolD2lCmFU0%2Blv32iTcc4ZAZnEr59K90gPF3nj7OVwRCOX1yg3ykGxqtvCYAirUqwDPszaKtuVqwTuFEJM5jOfHgMUJUnBO6v%2BdqKx%2FcUPiMGMgoMCW%2FKWaXFjSvH6hhe%2Bkx6%2FAWK5suAgPZw366VY6wjFHY8pdZgXjjYfreF483icy1i566XCNmk9kBfNd06w21m5JCq9ikXkWgxEJD6Jabvw8CDsiAG6YzffVOhW0GDwqUj8WJQfufEb%2FoL4tn%2FaAzf%2B0U6Pb3BX1SqydlI78jU%2Ff3VFwkpRmzQv2bnkY%2BxskTFfg5gsk9rIXt9srLAyIwSJr3Q7r6PNtnEaFeVXJxXVoRSiDZ1nHO5ezhJpXfCcS%2Fx3zYZP7bKtMO%2FnaTBEqkuQ3WVq1KmNO8Ly4RvciGr4TmnM0bloyJYt76YbxKZWy6WvaVx5tMvm%2Fg4MIe2l%2FmZbd55sQu%2FdOdB9zaU6boUp5lOinMK%2FT08EGOqUBaEvAolwo%2F9bt7ELjnLxjIdhNfO4lPe3VmCYiaoiy4is%2FWkMvfkh5h5oaBQ%2F5zrqYtx7v23x0mruafmcDXpFQ5Uheu0eEsfcRO33tcbTNc243%2Bcge2dRZCJUvBdWBpxkIOpQ8AUpB3Im1wB81cLV5j%2B72ACGZefwCAnLk9WE4f%2F99EJCS5TPfXIzvtqot0KYJWH8LJvACnEDPi713orUMh8VcME3C&X-Amz-Signature=84ccfbd3b887059e2bca8bc5aa9cc03bb1392e7daee6e713cc53c9d5f6f39917&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4K7ZDV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv1hKUL%2BKoVNZTvIr4fZ9DG%2FX44qBVkYXeZf5Yd8EeIQIgBhWxqAf53N7JZYqjuUI94VoyyzOUZ86LRIt3W16jsawq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA8CXYl%2FDbl7PsTVuCrcA45h6Tq9NTj96Rr436R%2B2sJphpegnPK3DgcHZ1y9nWkCYPW%2FgtwrbboS9TaOkdqrT4UQXRBzKzvF%2BF5Yp0EZivQnP5UekM2hdLQgo3B6iu801AnZ77hDLNfxwMUFmMk6ccqqwaa%2BCJfEyc5fh5N4nbvkWdFX%2FPOD%2FEzH%2BElzcp7ElfQSgApJW2fs1VnSJnuexlZ6A77jFFdUJpItupXUSX%2FfZTSErHFEY%2Bw%2BfRFat55E8v1S8RsmY6eSfRzBkaoE2%2BdnDwQcDBb3KknoArklwkvQ2o9rizQetuv9UM7O%2FNBGdOHD9WzozG5hwJ7jqxTWBZhe%2FGr4tkdsYkSsBCEiOJNmXqpCFo%2FF0L2VSeT17BvXXrEYMXHi06CaN3vbOa4ZkzD9pUwxrV2kyUjogFM4Rnm0RR%2BtXbelKELw3c3h5sdY9WPxEWSTRDSBELUHeAa9VBkNh9VozOuV0VU7W2EI8b0A4MmfJAChJiS5Y76NQgLh1A5A3KBF7Dmsvv55TqlQB2yq9oqk6tXgLigRLDTfMaktDjz4HiBYaSuNUJ%2ByMbpVfR53Xa9O3xeNuFtqk0vqqu43UWaj7yXIWn1O75Qli21EgISvhdf96OxpjR56FBp5LRzE1K5BrQKdFZ5eMP%2FS08EGOqUBxI46cYKGM6y6phK29ueFPyILty0kH9Fbk55hE9QufhyrHrrPPNUMg%2Fn8HOF9ws79A%2FtX2Z9sCxK4eyCsOBapavCBq7dKGM7SHScdeBQosspPjNp2XgbBeoc5nhjpDl5151jRD0DYpijiniuefMdkZJBa1M3SyT3z3Ci3p7f8mD76zo0oTHhxtLXje0ifbqPJ1KMgd9MYKwBuyn7DhCe%2Bn7bBzbmA&X-Amz-Signature=7aa393a27550945c7718ff6a760b68d11a47ebfdbc38c032c2573acf8d1c0eef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
