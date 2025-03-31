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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBZODR5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIGpef%2FWwRAysou5hTj5%2F%2FTGh%2F5vFOqeyDLylm%2Fy4cGF6AiEA%2Fjkx7JHruH%2FQ2vzGiVNN63Utz7yIfw4arHy0sHbETR8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCsbJ1sT7s9%2Bk3fQyrcAxby4NHvuO%2FyWi6GqpEr693WCOBQJOX2n%2Fe9ACWN9XZij85mnP85dUGX9NlIax1r%2FPepIe4CZeuDDRi3N0G6NY%2FsYrGOvkWGRFfykgoCugX3TXhUgcWTVweD%2FP8cF%2FA87Y%2BAVwwTz5XEa9Q6uOFBCC0SdURx%2FXSSK4MlyKHt0CKJAC89Yi6BODXiRKmjuMAqsegjhPBES4LcZGlebQT3gjyhuNfLZQVME7ndE0aBcmc94BAoGU5Jty0SLOr3lXZk0kjdUGj4o09plZ67PPGut0P5RxVbHMH4BOXPiChCKrvWZZ31JinKAS%2BPlouQ5AWxuDLaW04r1EijvEQFieh10qB6siQi3ZqK%2F9Cbi5S4CoaVZJWzHCO9w0lObjvOyyfyfi1%2FcU0WNuBFhwYdEjn2UnE7eywNrLIige1RVWa8%2BCJIHiANRmAsO7vXbyHCC67mTRseffY90VnwQnxGMBwvx6%2FNDKlz7q0zpmuQxVjrGuDPH7ROxiBI1NxJWUpGCSew2IENJRYQ6NN%2B7vhKTdNCcFLG%2BLP4XMaQD63Es4wGCxUJ%2BceyAiwbbhT6Dm5Rty715RmE4Oxa1g0SsRz8cLNfpKQsvuKB4w%2Bjlp1UUnKACcDYSwzMeXBWpsTCVHKpMLm4q78GOqUBFlnoj4w0rXmLMwfLWrByMN%2FX%2B1KkIWd5GIO3kMAvTx3PwsfCwL8b766se4lBW03nmRktrYmILZ07gRWQ9cEHSBL2cX21hzeZSiQFxg0Y3Llmeq3fqQyz4%2F9A0%2BwreiK1LMVthNJrs9dQiwS4nMHP7cnGd8QGPsv4GhzAFOF48ty6r%2Fz%2FXF1S30AMkxyGA6QZnuUKYAkGuDQAVM8nbyQ%2FYPXL8bbB&X-Amz-Signature=3be7252a62199986b91aaf6c7de4c507f71a7cf73cac159439e6ae4923b4792f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRGI4ZK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAVE8rj2Ys8sK4GaTkm3khosd3OojqbIs5zWxCPcYZXVAiEAlo1Gr3iSg%2B78VUJrhGxOGCtyq6aGlc1l4aEB%2Brll3GIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcKzGuKmitM4wt82yrcA4GK%2BZhWl9xDe1OwPzKuRBJ%2BdAp2q1cOoLUzR9iTbNIypr69TBvu%2FEIQtPT2qSdWPBcZaQpSZniuXaeMbiBZddQxPx98xyhHzGqF40A%2BDzUeox52WN0WGzAE5Bs16mz0DJwRCIAKSUTC2GfrQLdBKB9X%2Bfcty2Y7PpU2KSnVF0cwSiFT3byHvopd78fNPGGAm7AIH8K5cySTWkcDFSegw61yJURPtNEJ9mooJxGJBgLwJPcI6GFCyVR5da1DenhhEYFa2G17bWT8GhLXK%2BAoGSqcoON2N6DwBztQ5a2ses6Kl4R8kojAjaMOVH2wNwpaSwJ%2BN%2BbAB4oNBXx2tpNaeORi19QkR0oG%2BIPAsE746mK3xHbfKMImZ5gSfKx%2BTS7QC9lPO2O7HI4Oq%2BOhOU%2B0lTHpZkwJy0MycslgyCbpfJ5LGdC22U%2FsHVUNG7kqL8C%2BZhWFZhOsDj2RDOQIM%2FOcKKt%2F3uqXocZq6iJbRky2V1CK0XAH3sd7NpHcbxDpSITyyQLc2vAPCnk8TUm8E0vwzNhCZoJkSm883XZpegv%2B2S7%2BAZVzGVYrqwLqFj2ZH9K5yBwtDVW3WVYxgsyOHZ293PhCIDM6MLdMBE3uZRJ7Efzz3tAYVrBu1zboeRP3MN%2B5q78GOqUBRt9GcHnY7%2FKJ0ghA0GMSux9pzgZ5GQBNLXfVlaIEFfeXEk9po7JIsa76STbG8U7u99C7U5C%2FF%2Fo7r89A8XW1zpUkwq%2BRpDb6wOtU5N%2FSO3r6YdYCvU9%2BqDdKIgA2AaXjWxqLmK3bWowrLDgXyAW0rnMmbEvsxg0mZMyVmKzRPvMVQrx8J3%2BoOnyCWq9btn6%2BOlVzZZamj06020DD1%2FlfP3DQyAmu&X-Amz-Signature=c414b36e0d1ad8982d9e8f2f30286fd5f184bba6d80a7095644858ef4e163d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
