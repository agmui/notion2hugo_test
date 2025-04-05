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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNIIUTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiWjnQ1gPQS%2B9C0pmJ7RgySnesZuU1GLMDRJXgUJalyAiEAtTYrM3lwif%2Bs%2B0w%2FltLn4DRIw%2BdEWafOYXId2yzYkQ8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDPUxreX80nU1qyVPSrcA9JcrmzskyubUo1SnghNpeM7KXvmKIybMgbEDWazIEs%2BMlNHRR8Gl3hY%2Br3BFkAE%2FXFQk%2FgrgJhxUBNLlPxjh3SetdkkhqGAJzcKnaccpIPOI7YvoI8ed2f7qcQQKnNUz0EUs2STIyRHDEsDcer7dzGOTt%2BLkvnHkF7p1y6AG2GXIQXW2u2lXvU1rZrL9pD9eSMFaix01sBS9U3%2Be%2BBA6aiIC%2BEzi4Hiz1%2FKrDKsBXY62XURPc1lWTQyWUNUum8It6mk4dLomJHbkwFrcCq52lMi6dEgDgW9iMFpvSrf5KnK%2FVF%2FuG4rtfLyJ%2BFq8%2Bhf2eZQJQ2CywtXsk1G6WYS3jkJWv2Nj%2FScNQ1%2BMqyAUj33B8iXZ5uhiA6FOwFTulUZSaWrUMCA1o5ny00Risjqt2OaXXOJMgJ9crUlhkm6zM%2BRQz4Xo%2FQ9wZ%2FAMxVBfXAM7aE8WLUy0zpUAOvSRPJfD0YvYmsQZrZDcbKrrjEEto1L4%2FF03dLj52DYbKG%2BNNetnNH8zEhY77Nk8MUHwR1yk0tpaBjVQ7tJP%2B9ABD%2B2DxSFlPMFsKzjlf0v3%2Bab1gNI7tXNP1YGoSRTsEFgQiUxteVn1PboNulDSVrSCzk%2FVAg0PyYwPGbX3bk49UPkMJG9wr8GOqUBaLIyKJH9DKT3VKqvtKjYkLJM47%2B9zGbb2KP2tre5cIPUQYLhytM6zLZApoJjpPBOA3yG2rf%2Flo%2BPk%2BJHU8vdTgWbnwxNgj%2FUdaQGQ%2Fhm6w%2B1YXpwJhj0JbWCl8lo9cDWTqUQuFHWGMpXFK20hf7z5VEEejdEcJn2ucWDaWCH5FUTL%2BhYfqq5MBgWYNLllPGUmh32ZkHSNjCm3QTyPObkDJ60UtuF&X-Amz-Signature=172199b77c20dad5ef154106d883fbf99d4cfa9e6b42ff82c05dec0fe0bc264f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2ATCGO%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxa30Jc2LxjriSbuxivCle20KvFMnulp3cVxU0iqd98AiEAyQEcLm1Ee5en48HN8hdzyGltbURAIHu8j6TJ355vX%2F8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOMGcsEh9t9v42ATFSrcA9ERVu131KEXkvekIoGh%2FczMaSyFQwhxW8qkCHGfhv4QyEg8%2Fg%2B6iEF8JF46lFTBelD5M7BRjvCmLLnXsBJDS24VNGaVVB%2Bo2cAYrmsXUUsHIXjnmklS2lqpgXIoMk3S33naVFZOUbzWVm%2BQLT5BQ6txYXTUSxgJz4tktJf4KygzKqW2uE2U1nDkO87lHIdH4bTo9MNGLxBlW%2Fgrs%2Bo5EOj6PN7A2qXo1pQF15xaGt4bHJlRn6GjgeOKR%2BCunmCM69WLCzTjKvdpqvEgg8JovVPp7kUIlyVO4NmCkiHatadPfoc50IH0dDmzSFVWHGteAn8caGJL5Pu%2Fm4x9qRYd86vt2tyf8ziTeujDq2LbzaFUE%2FbSDQ44R%2Bb8EU%2FG%2FFrIaD7nebdubYmw2KWUvwSZHujrzh4Rf5mTwizJ7d4Uh4pUbDUZFvmo9KGqUWXGeRERzPLt3k%2BNRbnh6JJNvspegqZkCQKL00MLUjvD816qKJgTXPkwMqhyVmdum66FQ%2BEkgBcuWr3ix%2FwwosOpbb%2FyBCf8ar3kmE%2FUdkauoAuJqCq%2BwMxKA5gb%2B7XdRpNL0Cvl%2FBe%2BCev5pM6Ps5xBhF%2Fkv09tsw8fFk46XpQWD%2B9Z3x16wpLfhp9asdsuX9sTMIa9wr8GOqUB3O%2F640QvY7zIh6p3TdZCh0UblFNzqy4xHEVxBRplpELBzulEA3M9Qsy99pfdEdM9pwrS7i9tC4t5EoHg4ysPHiQZwdcowZ%2F%2FdCmQwobYrLhR0itiUeoeGq%2BWvwCc4dmVSccFfGrIlPTvoUKyFcQ0%2Bb2xH%2BVbJz6u6CaxgJl2J%2FP51%2FNBeNbPJdTuwvDPWwKDjGt8iAu6FQa7PjAEXxXkFjtGxQAb&X-Amz-Signature=2d7338ec88742e187f07e59d5e083354b3042befa20ce689b0f76861513816d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
