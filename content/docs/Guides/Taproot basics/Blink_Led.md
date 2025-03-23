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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HIP2326%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDGbV86Rtd%2BltuL9WAeqzWiOskHqJg5%2Fqy5bIwLiqByoAiBTvYT%2F5IJPBxI76vcJaVelhN6ZFNE%2FSneKvYYbweaekyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6dSM3Ik2c1mY65J1KtwDbRMHGEhDjGxqhib4XL8RKh%2B2fQeQ1WXHaarSpE%2FsCLAvKXQJEjoVML%2BOxErDAl1CH1F7u50%2Fb6qBFxZ6RpISt7CeZgdB9auUInCsYxIhe8zJhEtz7zZIZrQAXrWUtYZC52wzfRXktOnsNM1fWCAmhBtXWAt6bII%2FAm9E5UMFvqG5lpnBSVvyF0SpV5U55h2LyBRZP6vF5VEr3PvK10jKOpJEpyw8wGSzWtjwzZg6kKbYUnybeP3I3FH2kVZ5vHvOSA8DttKjVLO6f1KtGdBnPS1252%2Br%2BSb3accntxCGDmNSbKfREc9%2BfCriSZX5jpmi6mq5BseYVeecJxaYh96Nq0zF1O2v5k5Z9F%2BB%2Fhajdt0ZSNEmiOxTVXq7151uJw6km6b8FY4WB%2B6HuLabZ3Eaa3a3TL2ncVmzNFh3XOiw5ff8uNPDk%2F2lRGpv5nv7zTVqbuH80iCUNQLFpj9%2FasWd7r7uCVspdJNKjYJrgzwV3TEgvi9zCjPh29WLndJVYKh3bCwKf%2FbPolhyJ9Vc1f4tFh7RcW9PFzZGPmnj88G1y0Mlj3YN4gxfAelW65EM9xrIZwL9FGI4DtBZ8LhmZhw4AbfS2bav6Vgf0FonmFaAHy8YAREqFlZTXgxCeVcw6uL9vgY6pgG5bdLcwDuWL%2Bbnp27v2SSJUKZaeC6EdNP%2BxyWVl9VbrhSnJhHv1RBOW8CHXPTJ0AhwCSPMJIESNCX5KTLsMDa2yYOcepVmJqTHJkGIIKcFl0Gwe0rWqgWJSRcz8dTA%2B2ZW%2B6PriZR4CQE3XvEqS3icNo5nEJJs%2Fyi9xAMZF13%2BrKq8I%2FsOaPhudAq%2BFg0599%2Bga1nIhagkReajJVoTTLcqmSfsSeoS&X-Amz-Signature=0d5f9412f88887c78d7e527760d7627b8ab3cda049a3fac32699d1b979461f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URICJ6ZP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGJmfWxE00usFEwBvs8u1JDylsXKFiMml8HHI%2Fk0MfWuAiEAqQUVJrpoVeAr5zauiKM0TGVo%2F9G5R3jFXAuRuU1izb8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeljiXjOU8oMJvJTSrcA7SoI67EStG39apRT5F0M5nl4aOTIkk6xDG6lAsjU9j7i94Zry8h3%2FdcxlqIOFrhz7j8udTUeZPbFlbKpyf1IaI0G%2FUBFN0XQjAmJPoWlCnGNkF3hvepQLSjh4bdjQoEDQLyoYu%2FDxA8LcH5W5HV6yT1viL1h%2BkZrUgQ9VOffWnLyXqECUFwTpeqUEdjWTsE99Ll1hdnWgdBdh8dfcPUnY95Lo%2BnMt6yZBZLsFb21oo1Zbz4SGYmbS%2BQsPX1Yp3OgH13AFIslK6nL82DiLYww%2FCELe8%2FubzMcO40x95Ptr71BlUw5ryspfkr061j5nrMR6fX6yWN6FRUMywpeM%2B5ZOrHhyg5K6DmAVLndnB5gFh7OlDYE3sD70xetYiPB8bgsrLbvDnUdp%2Bq6fg2Xmn%2FT8u1mkeFZmwmq0ZM9lxT6LJwiIiKLlxExLmWkiLCBJ6kA014pkps4D3LBc2xw5BkkFJaRRaD29YoYPyhIp1TMAlLE2XmcQG9hFyGepL%2FGEI0kwMQHtIRoU33Jf3ImDHizbLJOQB5DW9k3bYTfbzfs5HdffW63MjzbWwxSRJdoAEVz5O4%2FZzxC0ZxpF%2B2y3hy%2B1R6dmuk8J%2FaEe7J5MonaOMZfO3jdJnH1AvIV%2BDEML3j%2Fb4GOqUBeAGIV%2BPjQopEZE2XTWQEjnFvv1tQpjbT0YjgDUd%2BfrtntS%2BnJhww9Offe3gAYF5a1tin6ijcBLJdFjpLQmDCl7TOPxZK9PEo%2FclBO9110cCEr%2FHEHDOwL4S4lyQBuu59ORyfIHT1GbbMtukRChaMTn2ec92zEdadXsnfiYN9BWhr%2F1IHncEagooIg49uhgziiWILqh%2B1fV6oSPZ7IcoHYJ9N%2BQ%2FW&X-Amz-Signature=a42eecc8e7c13fa8852eaf0853ecdba944c480d9c1b16a5837cc351661c844e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
