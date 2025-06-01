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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRFANEG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCwS457%2FsLNUzwFosuv4ivx2EIB7rLKomEchDb%2B2xNLZQIhALNVZ1qr0qRhwgtatvS8KyH1TmPXg9BaZX844N9lAqveKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg1BcwtdQU7mG3E6Iq3AMd0by57iUWW%2BLVN%2FMYWSNB%2FDHCiXBxYGCKuNG5GfrV3SQqND73JBE7%2BXT4FN1QN866ImPXRpPQbfe9T7gcsVAIHOEomSDM6SUKRmwtgQjubXB1qaB4gjFM2VM%2FfrsWUTBQ%2BIo%2B4SCopvdQb%2BtSkFGv7Xu8VW%2BXLlMLyBuTGopYISsUweHn35sPn%2FFl6qkb1m90%2F5LzSVO0rkKtH1W7K%2B%2FUqKmeobFOXuaooh8PTW7KmhqTjYfOJ00eZnou1FE5gVi5ZlIaKJCn4DdvxmtRDoqxPkj81VTiUH7elc5mUIu4tAs%2ByNKZQ9YDqcYXW%2B5FU3%2FRMw929YF7%2BAvj4OsP5QimPxZQiUnfB49sueMhGYrr2X0wo0SKx4AiXxJQCzizAd9C7%2F2KnaGYnKHmUoqmTktBRCk54TbYFfjnOE15ckBp4b%2BXel%2F3m6ktc8VFVRfuw84GNt7INP8ZKudY1joZcVk0SYc7WLrfurWuV37kXoQ3ysciX5GPPRXpHYuvh6sUORxWOwIfTyV%2FExDJgPUhWMUlouAXNsb1a76Ak%2B2hcynzFxXSOjcTijfFUEgLHyMwwaUKSIxXsynCztqBU1DF2sbHmjdEByAuFlpFkxLRacjJE8asL9seXfksDkx6iDDEgfLBBjqkAVkvcs1A3StCgJQ%2FwnWHujwNqseFIkFTW%2BPtBxkXdPttAq8bHXDZXUm6aWh0iuRHm%2FjzmlAy9V%2F6veenSHXZo7JDBpAjVJuQzWjmPkknIwTPCIntRhWhgYneaxZr3Uu37ck2apRPcqW1ViJcUlcY3I9qixnZzvBSUGVljdMC8a4piaBpiR9gaWEHAv%2F2pnstWnu%2BsSZJgUP3Q2EstXBxm2IfpDgd&X-Amz-Signature=f85e5f787b77c5dc0475864c8e5ebae2ea88e9c0da6a769fabeb19f1c07db8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMA4AYOU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC9eWR2gOe1Er6s2ZIzA74fZ5cww6aUgQzZ0Jm2yiDQfQIgbVp8m9ptK1jRbsY3T5Ybj5GFnwasMeI0vips07FihK0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJdG8AG7fLA5d6nOSrcAxrQqrV6IFHk3yiPpxbINLxsHNtqmQF4Sk8ZKq0yqA7ttJpxfTToZWnzT46L%2BEZF69Lx8BdX%2BkCkPXJnrB1HvOY2e6Fv6fh5TCFTNYlFgPssbsc0iMdVsKSo8%2F%2BK0FK7uMjI6GHFaBw4GVYiObwpYwbFibB4PtkHN3mYY5%2FhAF6JMT25wG0uku%2FxsrJ4GYjhIGrzL9FmDhps6uk2hM17PxGUqf0pLL06AXzyoZ8uDWKO6rlUiBjRXGuOAmCp0tgh40Uf5hnwNp5LzOv1KoLJm%2FukodOWkkdso0%2FuUQjgX6oxrsdTsKl1H3AiSU3peCV2pr5FtukksXxtrczBAO72NIUXnvYzL2uIcpFd2nrOGALsyeTwzRXHEvWIoa8Mn275JA33jICS%2BHNewwCnYpdlLj2aZDQA2te1h1ch6LumGUkwN0vouVWmAKG6kbE7i28z8e0H5IEzakcqkJmPHhEcH5d12f432VM5OOKoJJLsM1RRqSW%2Bp%2FVF%2BEEAD8uaW2PyxIUrTL0UmXWa8zp6XlpAtJ%2FZ4lB86TQ1N1BdhyONLplrZUxeTTl7fYGrinFlMSzizEJijrWQOzrYTHOJN62QSlw%2BigTUcaDEkAvx5GjqscaXPEYHVAn%2BY0l26E7jMNf%2B8cEGOqUBBpqw8aDrzc%2FBYSa3ywZOdbaPCqPRf%2F%2BbY3AcCPCrYboKKua%2FgYbtwBRvfiA3ap%2BiPolpqviHn5LqPFnUP1hLLyiHnxBYq3iydhZ0xK9ZhBgicHgIZh9Iohfq%2B1ZwPzre1L7UAu3exvMJ10LlMvDC05ixNZxKOwXuBjE7HXVuonW71iB799aDw8XuQHmjyRwHv2yVv1SOITTMW1onwomYtNjvJwC4&X-Amz-Signature=b9aa024e79e0c368ec5639352e313a33d78fa840ac360da7b206dfdd3571adbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
