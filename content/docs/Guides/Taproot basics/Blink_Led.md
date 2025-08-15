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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVKHYT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIC3A6UxTj02igYsF6PP2Ov%2BaQnB%2FX%2FgsKgDyP1H%2FvC2bAiEAw5qn0QkPyDqydOhrn7XC12Kb9qMQ2UZlHa5qZnwD1woq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDANX5jcV7AUm%2FfBC5SrcA9SqkxpS888eJD%2FJ7joqND38ETTp97ON%2FBYxnqPiMfNf15HI8TKRMx8XkCiyfqMsMh2zCHt%2BDLxf3DmltO0gAL9zpc2buLeV7lUrKO3yGkyyG6cw2rJKyWOnIQZkhJmg3eEjvLOqRkSq3OCtWJxxmdP7V5sYXyi0woG39PL4D066ZYZNeXuhJMQC2D4949upw62clbYe3HrjO%2Bfj%2BgFAeDMkV8x%2B62PRBs8mmQqZ8WQidOCwkoGtVi2fIqNW9OStziI22JezNLCK%2B4IdJYKchN69Kh3LIDY3Y3GVPbyctbzNelu6eZr%2BrM8VoSR4tbtwA%2Bpe%2BHyzC8GBmIdvhT2ZnfS1aADYQOAFPgANsDv9Xguq2o1w61oWaMjR2yB5H1RLkZIBIpvXOpEeinNS32Gqkyb5sWXNiF3SJlSjoAdZ6dhrs5c3gj2ibsTrvNpQkx6LqS1nSTBwGicLl5eiRxYS4vL37et2nj%2FBya9cxcou31tH2P3rAzqDTjweKplabQYBblmGykQiiq4zzHtRizbDvmM%2FiK6i%2F8a8vtlPZhrJ8%2B2mFi%2BF8fDh9Q4sFzjAayPL%2FZdp%2FSy21b1pebCNrM2qul1Vz01xndTdx%2Fe0UBtrxKCRWGjBfEN4wOc4V6xcMIDb%2FcQGOqUBVSpomytq0DR5j1EURU8U9k3PsrJQr6h0epq2oRqkrwvwxKvPel%2F52g3OkDi5T1uzPIFoe%2BJY4gaB2lUi3VZWitN01Y9MCdnVygiiVhOejLorLRg3DFVVOcwtnqn7CsayGimqW2i6HDjwvViUU1WZM5pSd5enoRIXr4OxccUqTsmRb7OUu0ZEt%2F4fa4AyqiY%2FqQ%2BOnomt1UKLhe%2FB%2B5C5HhWoOpIp&X-Amz-Signature=c99483207efa72893a8ad370a6de728da663d911a093548f2c5462570019cfa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UMFW56R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCRlyoIRQFuy63XUj%2FlxocUgs8JIE30zWfoLKveTQNezQIhAI5yzEoWab%2BCt%2Bj5paA2r670ivL9rnkTdKNyjWeb6LLrKv8DCGIQABoMNjM3NDIzMTgzODA1Igy2oCMTrouCA7xhkyoq3AN%2FjqqDgqdU86WJJIzUx31PR9QoB%2ByHWGvxd22PlXAn3BWAvG%2FYaVjaVfrg67ChnzUfS86fKBBaPnw3K%2Bb1%2Bb3dEBP%2FvfggyTMSMGkxSYOr6LO0zsw5ZUjqdXGNSJynP7wakZUJRXkRlORUCGk25fq7g9jPWXDgu7m8TunuiUGW6zkDeQLNpE9IfmY9zzG14mXSExcDyH0LWf1zs4zhVt6h%2FfE37qOU2vGAxahfRMHAyxd9zN%2FdLw9Ai2L8epqY%2B7FNMVEER%2Bw9E8gTy7OpoNVN466gdIX9ZSPpkkROHmKtWemZCM5pakOKZBHzxRw27e8qXRRSenRaRvTe%2BdESvyyfdSoJbZ3DYCGpAY8ae6qW%2BYsoiUxRKVaqd893r8IyU8qLBursUhpBeu14NQIXHAjU7y6dP4EnXa0fydo3FuznW7VC9IRz4kv%2BcI1NMgjsMGDF3mX%2BexA%2Fprgbi2kqTPfzcHg8I0kmeRVmtjlrPAVljvrZm%2B63k%2Fm1APXySyG%2Bn0tbTloQnF7LKEOdK8a7hphvpiA0na8utdfIGzRyPiOtzxWTZo9WMEDFw%2BrXGtPqMapzFxwD5jMYInQNFh2Xn3OsFUPp62bIFge6%2BNT0tojCvZnWF6x45ykNpLQhzDDe2v3EBjqkAUGnYnCIZ9G44J0FDwdf71uf2sZaUK04Cf4scGCFW7bB7%2BedeEQaO9GBDp4HqK1DAOafqWvbAtWUad4Pttzcoav%2FNMguASd%2B9BS3Bg7bz1L%2FWOSCmTWdBTsm4810NRq4KzhRCUcxGtmc4QSv5HYQAM76wHRTAfZHyOj2Tx7hlfS9nt1e4h4mvcvbjzXLxK1Ee1eqtuNCeZC8gIdKe7SVmpyHxuTz&X-Amz-Signature=323f27605a0204c7e36dbe8af55b89fa6fe2eb039ddb146f859d1d5daf99985f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
