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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIVHDOLQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC1f9tKufn5BlZQOe8Xtxn4K04yL4s2DvUN0DfBUKSEcAiAIH%2BqGCifnxniFOO1vXf1nK1GwuR%2Bz2qsAkIESp3zNXSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7JMjo1Jrc7%2BA1VMKtwDSrHVEWKR8C6arXir0O1EfobIb7Gl0Usv5E1Q7CSL2fd9FAMN2tt0Ac4dv0CV4QsNeTq7%2FUaZ0yJPotixcwF6DAM%2BVPlL67Q9dkEwWmH3CHbPkIpdxyGPlJPYdntgkAerNk6ce%2F2HmQV40oc8WgP8cEoNynj9T9KY3S7hboapYFqgbdhEW%2FKZXrvKL16HrqdvpZQGgGCL3ncAj2fvvPaLiTJTpKwRisavzAGZY%2F32ioeyp5rqV054GqCUTbAx1G3LcxRlOpmiJU2ptIeOX27b1m5TI7zAQYBzT%2FP%2F%2FHP%2FSzLdn9PXY%2FIJy601P8Qc0mBNJtUyE%2FDH%2BpjZVWF5UvAiJMIv0HFnyKesAHS4R1lNYJcRTsWmiaN2h%2BYqsvm0shMirWOuub%2BSfalk3aZO7ldWWBLCPFjtKmZPBue9MWB5UoyCWvznpCCVkHwRGw2aKH1DZlIfBs1g%2F2YP2cmjP1UiWaor9kbZNP7OHGbq7hr2HgbZPOtenHYxmfsVSEmEty0Dfy%2BHxJEcLtb3YlHIM4ZrG%2BCXlKtG5CwnLi6YTUVWm4zHMVVmFN0YuPqsJbLqdEDD8Bj79g6K6HIeQ8vkUa3nsMYHpv807WMUce4RX4hP2uhzUKx9iZ6DGxCNosUwitz2vgY6pgGP%2B%2F4GklYPvzJI7EA8G%2BJ3AbqZYwuagSPLKoOEtJi%2BlfykMjXAxU4aA9PXQvEHcDPb1NFE9VlFXnW2KIjZkx3baAO3kCo%2BcTNdKCtOithwb4qp8nkfJnBcbRUAPBlDhVZtNMmhS076i8nYuota0Ff4k9J8ifvxntzsDhlbohmUWHo5BdLH3uv1JRWC4hY%2By5xyCt7zH9vw1Jv5m1S%2FF1qZIYJd9Zoa&X-Amz-Signature=09bd21fddd1788bb0a1fbf5c6c7c8746cfdfcf6aa15d59b6a567818c27c09dde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KWNLEL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFTynl5h5TODYfLqjaN5HkjlvlbdMhJMRcsFwHQkYEeDAiEA%2FRKtj4oItjzg%2Fx2HjkmVSOdnJ5aURpHkN%2BIXO4PgXkYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6nuxwL1oXp2ADNCrcA%2FzQPdBztq1sKqKQ3rp5q1jCQoqQRXaY%2BtiDKLoqC%2FdxlbMZr75OItOJOjxsRns50xJx9v2Co7s261vMq2tabJAPLrvOj3udTuKO%2B3DL7VopM9UB28f50iWvMdRcyukIcFWBVhnHI%2BE05WOHT9i7cSR8CgojY74GKsdY2mZfUxnCcxaiwKwUPGwkBWXa5gN8scf17cnc4vjCOdX7FSzUjjyZSWZ2Ls6puVfgJPvGbh8572TCSfMHOdjvhJj47zk0BmuYykaKpLqrAOnZCUrW0fryXzbSCNDHhxsbho9DH%2BaJfKxb9kW%2B%2BenT2TxZULeLjPDVHdH%2FqgNmqe2jCEbnNr5pcOul1C1Zb7qpRvnR7xFKWTSN2ZrOHlMEMZzywHsLySM8BhCUVTuDWsWSxEJaK86nwUhm2rZFLe0mxn9KMNXFQDhYUy8moOiryPVqH0ByTT1OrIncIsR%2FLAzyiOX6OOztLj%2Fe%2BLSMe8zcW9vzjt%2FF8HhsmoxrRC5wtj86JlT5VhUavSoEJgQ9whLoRCCtBeB2SqjEKm%2FeoFLr62fucW86FhR01fs9nXeq02tyrmcq0fBm9Iny5FBcoIMAZ%2FfZ%2FQzsTwk57NMZNiWoZL6XBSxP994uj0ktt%2Fa74JclMMLc9r4GOqUBSXXgQdJMFMVYUFGipiSf7uVrVucw3NBrr8dvGKRM%2FGmRCDJ15rVRf%2FmvDhxFYHUh1I8x%2BcJw5dHh%2BeHVk7H7j0VV66nPk%2Ft8vHVw6Uuc7WHaaNaiz7EEizL8SZX05wG6WOrHM4GYDba5vUqMPjlvM0CyVlBfhKaeLARUye5HrNe8ODwKklu7%2BXKC%2Bza8154MJoGXAUx9QcmctDCYdUPYVeBxe4CL&X-Amz-Signature=e054d991d0a71f27408648bc18f87ccd73ae1c0482340d903a63fd77b339648d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
