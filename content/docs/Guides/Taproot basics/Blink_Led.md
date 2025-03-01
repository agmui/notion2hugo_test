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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HQFMEWV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDC%2F1PT8PqVK8v5CNHcIWQTKgn9xq8z96pFGt1lMYwuHwIhAL7Hb9j1c4FuOj3SkHbW4NJn0J56dxuU7l0auS%2BhvPc6KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3kw0OyDxk1SzemQkq3AOY8%2B94y0DfRHSjrYE3RHvc1O0I%2FiPY%2BJIYQSXBB6ud5y35dUrDEJdSRn3dGaEZHnbHP8FFSEX4EMvtN7xqL8U%2BNOVJtOSOjstzcQ%2FGPt9Hg9mp0ygBLoWQQGiz1yU%2B%2B3uSoeBK491kFiadSdFCGvwa98UR7G0CSIjXy5KSDbQNJXl3gLwS0EOcadngRkSI89hIpOdWybmnkdWcM5t2QW9r%2Fkf7LvMWwVK%2FqmpAkNDTVciN0zmxltN%2BQxYxkJ9isTVSA9N2cw2uGA1%2B301tBJnqABTqorjjvLrPYffmYspvNGSesBEd5vDk6scJFrnY5sM8qf13L%2FXASoBQUxdtqyDZS%2BokqqBFWq2el54OIh5rg6%2BYDzAH9C23fEXtBK9SvDBYSH%2FBdXQfmlLj4e8NEVa1BJ3egpXai4Zul6RWxnIzw%2FAIXbX3knvF35zPvKqXiKreDR7MFUMJqX481azDCqDRq8HG3Xb2ykE2HCBj324cJAqyhY%2BFtCtjLmTI07jt0k4jiS1thlZDaebkYqW%2F3uEu9WcIOQotIsjGALERrvyFMvaHypWr5za4WvdAG0iwJyAMMEZ2MhFjXgBHcHybmgQ8mdtpgt10AlVd9liduct1i0FU5urJQ936J3wEHjCYlYy%2BBjqkAbLoAX1yjm9Z3KkRIxnDL%2FxRp2P%2B6J5cOTB9Xd0plT3jRgXuSV380m3zhkLu9ZZtdLdvEiq7pc5JmtG4Pq6YJt4fk1ISDOJlZRvYRR%2BQAuI3vrw7PZMtImKITbwuC%2FWzKjDiG9N240an1mtgqIoDTxXyrV%2BfHqxFA2kAMqTV%2BxVksJxYVEaGi4%2BE%2BAmnWAr33ezJFHNAaem1bLp%2FAG2xdMAoCoMz&X-Amz-Signature=bfaaf57b2a8802a144673ac32435a191ab67347b40ad2c3ac28d9ffe6830776a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTLKSTA%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHkeT4KT7qHwcwNkwgFV9FwFj3wiTpBM%2Bwl7etLqt675AiBLj66f9KB8KiEw0bB7Cnm6qyhRUNyrBuehkQJNgXExBCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQH4WRjQs44iMr%2Bm3KtwD0TdBIEwXqivyqmo8NnH8b8RkySwGyDNUIvrrbn4QDAs0kjSW4f07zqbzxVArgPsgmk0Q890awPP54dQTnKXTFY2GDsWDRwMICLip9YW5mfXw1IfbTAxqj4%2FhyDPQXHpScuj0LSBoLgguDcKC%2F%2F0vrV1ACi1QMZHQttRR4iXLH5chtFjnsxAJ4oP6YP%2BeS3YjSfReik4B9DXPV6%2B%2B9yt2wlDth7E1%2FtXEsOD5HExLa6etwB34jQ1eKkOAWCai%2F1GyuK%2BdDuYjVu%2F%2B7smGib8S6gFRTEnSlbDkRYTxhEKnoJvdAhauyjg%2BzkGzjFRUABVwuZNGV3IPqxuUmkoVncgj%2FswRx50cQprj4CQk1ejRw4XKJHzmXc%2BoCySCF2LRSAUrPMTLoNkdIKl9rIPxPgypilOs8%2FVDYyyPsxQgq99Fcj73FitzAcAkU4EAtpP4pksekKSDZskUIzK3dikseACaKQsvFxWkwKX2I6t9mu7qy%2BXOHbxJehnPzhK0SpvcGGutJhcJ7EPe5QreJPrFvu84aa62K8ed%2BNhJ53U3hS%2BvLsedo4aeAEDQDoDs7EtNoKj2kPV8W7u6BWCResIkib78U%2BktxbNOezZJm17LtD269edF17XnTzdCmkAsniowqpWMvgY6pgHLNB%2BfsOsfmzZFrxh27NKtUyBePoCSkAFYJig%2BgtZE6gHKLMQZW8mNEMAvHzsXRFFy%2BRNPthuXpjtqiLEeZ7TrA9Bj6US2rxHCrhL47L4uxWqDbVuwkFH4sl8JfJdIDW2WHAOAAAObkJdQa9%2B256a0DYz5WCRsysgw1foA0utTn74SZEPKSuf58%2BzrZyTjXD%2B3uxYoEZWHQ7h3UR4p65qiYLiG4k%2Bs&X-Amz-Signature=b8eb4e6ba9dd7dd554be98aaf8b4664befb7411f8bc2ecc9cb0929ae68d6547d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
