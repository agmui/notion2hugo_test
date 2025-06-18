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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UCDSOK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifoRZthO83twI9308SJ7Q28jBEEVTkr04ffAm4halKQIgZJExAk1XfiL32CT43vOm6JFy3siBGLPLgGwL%2FIU26HMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzGynim7sYWdUggYircA2D6ZXOmd74x3cFakAWFxpMDg2Y%2BCcPwaW65NKCqOWG7D1r7NxVznSEHHwgsby1sMWSe%2Fgxa0YsBxPf%2FVvzt7G1ddZrIUfkByygQueuM0Y2SD7YHIppc6wCgMb5GkiLrxQSqf714EYnZntqf%2FngveGSu7lNz7WRp309A62QZtmpsTq3y9VxZYVKoJJ4h2jo4ZJ9d%2BmteQyzBbRQ42yhyggP69G0jvvyKSjvzhjx3momQI8aE%2BavAXq2VbI6eTXIpNT0LTnEBIP5q%2BdZtjQHAQKBaHrxW5qe2jF9zANl95nSBNzSvZKRBRrncGtzxb5DIXfGYwc7AjWA9565%2F9vBBrcXa2Z8IRHj3i5ru11CITd5NyaRY%2F5QpJZngSnEIoMQyvrVpopemdcLPaoIWK0oFhFN61ZOi8vHftVF3lib49NbeKueB5Tmfz024ur3Krhz6tvYvVSTbrVZqRg4ySvL7ANfLEaodUy2GZuAkSrftFikel3cyOSfmEhdF3WDaqKVWIWMj%2BTCiy%2FGh6f8jE0w1mJ4sQzgmkz%2B%2FQGMgcKb0kM1E02MI4RJrffw90N8qzqv7aF%2F%2Bz1EAU2ZE4L6lJboVxVLaWeeWdA54UMa0PHijSEYpoN7JyOxLg4TyN8N%2BMNL7y8IGOqUBv%2BxPOLOAyIr2PMSdePZPI2D7zuqJA%2F%2Bxi6jkx6N%2B5E70pYH8zDtQVCDBcyiBOul0yXQ0OSzVg4OAzNj2HZ1SgkUfgMBGOLhA3fs18JHzl1ojcJenu05yPhBjpLYto9DLYo8gY8xSWymf%2BN9thFlvkKcmeDU9YdjynKVpIDNZk5LXiGyZdXnMk6kYrQUmXKMmAS1qn3OyIRLiYsXSxR6HvJoonpiv&X-Amz-Signature=bb9cfd528e790266b558e93ce1e8c717a2bef2c704e1bc3602acda3aa6453009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3DWHYF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeIJsSOwJiE5G4zzgPQ4Kff5maygQnPK38iD5sSv8iAIgCrWso7lKxi2qlGdAzTFUzTfz0qY0j47HXANXEViBJhIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJM275vo6guI5Q%2FXSrcA9rHvSvaXHGsAe75sFWw2H2YhkgnP2kYWkKjhF2cOkwV7zIyi2sUMXOuDcg60dazlImtuV8FTbvlJ1934oFw8eMJ6ZGn6kWd0lBT4hOXJUVgF3yNgOZvMdWa6T2d6qMESBrZUjL473QwN7uLFfojwPxsxg3N0SQoH1FGfgJDqrJ4bRQHmQj0j74RjvCSFIG9sTfw3A3xgrqKOGn9w5%2FVliHdtghvB%2FBIL0RW91x2YCNQakCVqLtF3EaXr0MQRLerPMnlSW%2F4k3haV3pfuBwJI2Er%2B0mykqhzEYLHC4IdXQa2AM6JCaTUl%2F0q1bsq%2BkoPbC%2Bj9w60SB6999qXch8NCjjeXtkDCAqpXL5VCSgUYEy9bJczoFwlDN%2FrwMJHfnFOB4Qge9p1OSJgRKkkcUGLgLKcU78ZrQd8dlc0yvQP1bJDRKYGbSRIZNYsoGiKA5UDm1Q9k%2BKFu%2FVtJ4PikOCzup3Wd%2FtQFqyGBZ9JL2iputc%2F6dYyl4xtO0Gtn%2B631YW%2FxgMeckGNjwaQAMtZL1oupkI%2BUiS7iNd%2FcZg3F9CpBUgMseYlcBjbngkwrokSGc%2BtxX9ls8bH9t%2FrI6C6Yihli03nhCYQTTYkxVpIuIDfCHR5fPn5vV4ewszDSRXpMKv8y8IGOqUB8xFsdzc0VgCmks7gms7gqH01MRdHWkISUNrkmQv5ITjbZdVJxyr%2F68BnwtMsinx3KoXQubha4HKN2FhHVW%2BO7H7D4EYMy%2FlNdfH%2BmkLE89o1uXrqLHtR8A%2Fu%2B2sz8ck7Vl4zuG9%2FkQ5w%2F68wtYvdcxCZiJpCKAdKXeVLEp8cQk%2Fic7Y9yBum4QpP9CGwDRHd%2FWb4sC4pvswCjMYySS19SPKEd1Zc&X-Amz-Signature=ca9ad857612aceb4f2aa1aec4cfac441069f2255c0c0ef97a8574e8e639bb4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
