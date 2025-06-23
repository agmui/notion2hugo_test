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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6USFYWC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCNOguTUQI6paJMOEMNfVgWZPWABKuLTgmfTcQ7MmFcGQIgLYO%2FHZ6jcy3aIPpinzeGWVWZyrEPhi2UHxsDEE0hLYQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdccIW9uGt9i7pyyrcA8ac5Q1JkacL4Wm%2BfDQ1WakhfzwqHD0AndsioW%2BT6gv6671jpg87K%2F5ty3kdipfg%2BqDey5vE6VFCi0l7ExDDR9F4iEwbngfVTcXYCukanEAVL7eRoRcg3mpkPmvbmTkDKOGwkQL86e7FcHhF%2BT0aj%2BKloUCNoXeP8BG%2BbVUVoAuQ7J4lLRhjzhfXsnV0EwCGhY7tEX6wm5JjGoA%2BOi8%2FM9Hd4WiFQPMPsKy17Bz6peXkk2aIdEfx8QUBWP%2B8Am4yqp%2FaYvveqZqxPpkWIzwS4bGnTVTuzyaVzS3jOXxxL90UyGr3ZUmaW3uHP%2B0fb8ENG8w9JqJAfot99%2Fp23b40r%2F%2FkeOCS4DF4f1aCbrd0v1xdz%2FPIII01w3oKaSwo71HoKZr6CwW0j7olWoBgKTibXD4FqgTOwbkD2PlWkXLSv3tP4nmUe1ehr5RTKq1DB%2BjHrAy9htdYfOoF8qiYQyetN5DCvTskc4dGsHiyu0LgAFKvqsTHk%2FA7XkNTnKLHuqTfJApAFMtFfGdE1RHEwWRUpObUfrawBWXKqws3QLTIybsqd6uMGoA5Qm97bakvmfOXyjecbP4bOWaSKny%2Fuc2nWLf%2BuYaGTEaZkb3WZ4tt7WFn%2FzQFNPnqckFYvyrLMKDU48IGOqUBkRwosm8mQ3uoGSDzw5Jw44PDXqPkxuINSPXSNPhm8T%2BxAK9uDPDDgi3uSdsIGMHE4WOEG9dTLExvSak7NaS0jtwBlpYe78iRRdMcC6kKfSxO8qHord4RDQlioJ%2FeSXck%2F1h9A7PubiCjRJzXhQ9oMLH645aNHSNJz6tAv1bDm%2FLWjGOWTrS3xoSNVnEkKzlMgSmNjmrn3QmoALCIKS6S5JRY2B%2F0&X-Amz-Signature=0c99164e38c860eaf7476e6a4f7a24b51bf75223bc1a3a04a6316b1f59fa9533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TOVAFB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCah4MkS%2BgqzLhcR%2FlzvHFEBnTKKgkadZsUhT1jkYXS7wIgOBXcQVBMLA4mKBj934EHwmcL6o6BFzG998s2kDMcrCQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG79xqN%2FLtdQewt7qSrcA183kPJlOWjlw2XSMsp2wYYmiHe40ikX41mQCdJ5kuJoWlj7pW0N38iEIIfQ3q%2FMBo0mGgKlD1PMpH1PRODTZChDpd0SVZRMqNFVKWnY8azLxb5IUXbYdnWjiOB2iawA3i0ZDuypgdLFydcQEmCvRc9jQnsENkrtWAglQePP0FA9wWwdXgb%2FahjT2llGIhH%2FIMNx5YgNHAvo0xLAYEWaYUnWD9uNOsv0p%2BYKpz0duCA8Wqq1BXA6ADWELaXF0WVAIBqj0JNCQtQbFIku8KGMmknjYM81HhYUSKnpwCJR3dFrrbe6ermDSOqwayMXOrTP3uhs3hnHIxeU2EwebIufopk6AfHtI7rZIUh1g1u6kl0og2pXurDVqc1fFW80FmSswlH7tG1X0hNbUPWDz0NhB%2Fx4TOTQR52Wi%2BVgbGbgj4mScj6DYaM3QUf%2B46MyxqcWuVkTZRDfErW16yP51VfkdcygbH8WdRO3BCQhis47adLOBKJWHZe0QhKyUECR3zJlbrYnKN0ZWrvOg4jdjWOy%2FDMGOL14CPtyFR63MfhlLkm0JEaYN7%2B5HUBhpYKiKM6Bk%2BwYBVihR7FQLSfweH%2FyHXIcRQ3A%2F62jD34pH8aX727AoVMiLt0GkCVsf%2F42MLCw48IGOqUBQBqdy6UviPFOSnjnDwEpj11IvqFWb%2B01KZzDYuhBNPYR1hJBJLdJzLEaNVY1rLdP4g%2F5sEQmHNbruIE5KY%2FSMGyR9nxU6PwwIlI456F5X9nTIT2MvgeSLM5CnTE5IoPxsA5khdA%2FrxFT%2FxFssAmkc26OHOdUSMkaUvhnHWv%2Fzwg3DovaiLqP6a6alZozdzUNr0Y3zJ%2B4h0JiK1N64HjPrAS0VY62&X-Amz-Signature=8c679d841538f8190888dfac6c44d98adc72d2233818f56514e89b78b2fb5d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
