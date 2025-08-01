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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3WWNGFN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FFR2IJp5vZ5vOdyM1d8TfVSZuAJpytwwKFM%2BD7tij2wIhALqqaVE8227j%2FRnJZ%2BBZLaW0dqDnt7h%2FYN15pN9%2F4XNXKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTVjMgJfib8Iw6BsUq3AOTb%2BC4qjtrCjixaQlNsq9nOhE%2FOlH4Q5ZQmxsXZLfMS5L3ltgVdjccInfERIFh6LcpfmJ2EnwM%2B9eYOuyr1gemt8fF1qj8vw7YEsNDIhkTr8NzxvQYVmQ%2BkEMles3n0bUvigI1jMjK9FA4s6bHDfQttEoner2PJSzkvjVeUHfG1gqtSiW7xCRrY%2FW4T2pVMZHnzBEc7DGtY3FkSG7XMuMXTwk2NLtXLCSNGytoqpDKa1lWp0W4vKOLNLK81pyDmsMvCDggcZfEvNX1HGDalsgch4AAt2g59u8pcEjS0hRYQKw3AS%2BmJnvmiZEcI0UzYKQJBmrhf1QSYKpj5l1nW0ClG9CRkQ7digpcFyfDq4ncEgPUDZhoWs43WtOzOxOg7vV4g99CQ5uYsCMaCjiaafzZuEGzCRn8tsyqkf6KKqpn0LN89lsiWXBJ86f9VJ52Q9jT6GCLY9SkMeHapWbyHiYDH0S2eSa%2B1aAigkQ%2FLyZN0pmWcqkNNCvW%2B06xh8TR3iKlwWHOw0Lb%2BjK9nAeqCKds2dan7SsCnUAsp6VjkTxktaqHGtgZZ0PrOK%2BGQkuGnUHrhLgl4CMLxpRj9Ksy4g%2F%2Bhdt5uPk%2FXcyfWbKZiRJriiHkAbBCKRAYUjkERTCp7LHEBjqkAYDz%2Fs1i2YA8vWLTUwj%2Fs7RR1pKjDWXfB01wnogrn5DeAWLnrpTld8ii0t7UcUL8F38hlaVbli0rpcbP3RO4tsD4L6XEgzPsgTHl6Rtjy0D%2FFfdPpx2KANWHeupj1jHyAtGVFXuEdsljd3eWMoLrB8FhDxBd0VLdiv5%2BvhvsiriYyjJ6WbHkE29WZr0iqqTXISq6nrHh7yAmW5uhRxTDj9OdQIML&X-Amz-Signature=9204176808d11554bcf80436772450b5e7650519e249fac0b530190c33c8dca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVFD3ZSV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbwwXDXG%2Ft5D4yOua0dLyylbEHxkrOdipaeIjaxDqGFAiEA02nFQnKit%2BXb17Nwcdbw%2B%2FMzWVoHQMgE%2F%2BB8an8TLMYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIMIkc0Py%2FOxerQVircAzdCvDR3maOljC2O%2F6fmG3Z7pGYFs8dILq3w8hozyUjjrt%2BeNaXy%2ByO8cj8dT0%2FFb%2B%2F6sN8Q8srQbPN9vjJzdMYMIw%2BoiCzQBIkrzKsom8WyJCPyaIlEAG6ntgNK%2B3DP07lrTgUCExbi8VQd8ZkejEGVh8ncatHoUza9HAFSq6MFWhxqZ%2FdeYKW%2B7nFjpf9tY2FxWOkfg4h7GnPLuFp2m7IzaNaDV8eaVAZsHQWRf6EEo0EaF5uCG9IUgLDdf71BxKVUpit7HEUDUuGSzR0otgK22LYIETo5eEnQF5P5k58P2dMjlVsBjUuo167ABu8FbwULRmZcqkq1JvnHKli3KbXHSJL9wFEbQbuC2zxmSKTv%2Bqt8j8F2g139pFry8CAmxM%2BwF9x7m%2BcJ2Gg3TW0BJPbxi0hWGk8VY8qgzKbC1bvDeNFP4V161p7h5kUQY6%2BC9Z0AUe0iW0HwkJPyXVVNjPQS3NSnDKaS%2BqZKs8mOEDvxb3wUqfPp6MaXyhSwopcYJ7MCCtSXEm%2BTYYr4qRmbsbE2npH0458nNJ7CeiznhCZJ6z%2FJRwPumrvVwbKuYrASVtfk7yzf4%2B0KP9G%2FvIdjBx6FOfFfQxpInZC21sSF5GsVI9%2Bf0t1zngCT%2F815MPTsscQGOqUBj72%2FKPz6oQaxIyNLPWnVsvJ%2FnXHueHmHaauJHo7klTe36tNtCEHxtWdVD7pvXUYsfjciDTOm%2FzqZwdqFzVg8W0Hh1kSGmCtAQQXtvtGvaif5RbCu9ujinykR0Y5iqmaWN0uaZ6t0jTG53zdIpBJo2kiFr9k%2BZPlcAkeKfIChsVeDEEAOkAXtiDT%2BJ4FDeFEYPFwINiYfBqnviigIZkZ6Mshbi3ye&X-Amz-Signature=75497241d47f1a868cf055a9ae38d04f113f89d775a423c8d8c458c7bc30fc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
