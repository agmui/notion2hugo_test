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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBB4XVM6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC646k%2BR6qoAkV29nX3oJjclN3O0Td8C77iKsDWtoYBwwIhAPx2Bsr2MaA2KJweIWjtRdrzHf9v6vwiXttZ98gzNQYsKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV3c2FlBjNdhfGo0Yq3AMJ6spjpHdwN2acNi0XsbfZn%2BnnjpmkgQY7L1v%2BZivmHAbIMEJH3XbUXrawMWh4XQW1O8SRV92r2mTgHPVLjx3K1riDXXQK9hB%2BJyq26qhIm9IPqyrHbv%2BFTnSk8kCxJR4xtkIqdlkQwfMRqsfPEXW%2BJyK5Jo84WdJqlkwTs1FlfX3QAS9VbcmpiPNUJ%2FxA5NbVq5PsylbYQka8aiF3fEZm1r44EJIi%2BXDbG8GZiAvw8NfLSgL%2F0Ikw7j4nnzOaHVc5r%2BweW5rDZzDY7tzn%2BQeWjofxms42z2xngpH2MWXM6yQqpXtC41iQqzZczsF6Oqdu%2FppY0De2QmNpyLg6tK4O1r6sKBAn2ajYh4ucxQRO7MrqonpqOLkLph41%2B%2FlpJ3m2S0WKNREtJWr8MTasQOF6Fxc5pFku%2BMwdMqU4KFBEu4U1idCF3ToTcspgXDehjzt8TS8sI2di34%2B%2FkOi6H7nP%2FSngvJxsongjyVospQyqvdO5g4Idpa9w%2FV5Z3f2BN5K57SjHk4gtcOwfaymDp1Ua2ZLjKMBC9WPQCWQ33mo9T20pPtFnVbLFKL%2FiXpJuHY1bfhV460UpUbNvAvUudu46nSyu%2BI6BBh6VrxmSSmr9p%2Bok0%2BWkdtyy%2BthagjCxtJPDBjqkAZesVhZmq1cupVLez5SFQLj4A7RNURE9DGTP6schjHmFEXvMmEKnKHjKutpYp669gQYys%2FMMN1P3M2bg20ugEyNZROVXgPtekamQL82LAzwgiJxvbibguY872egApjKN9ZoirHZ7v%2FYVPxgl8IG6I6rwNv4Po8zi7HsFQYYok5wlLiPdS2GRHrhjCVNnpWwdhRjhTEr%2BKmNTTgDTxE0MB8KD0W0x&X-Amz-Signature=284ddaa79e23ac096fec1bc727094696ca040edd70d2c2651eab06a18bbdc8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZF27FB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ58X3MXVfy3pyp55vX3YifeXO3%2FmXYykBZL%2FdLXXC5wIhANLmqBYjsv02NGbb%2FVAtlWRPAhsPUl9XOoJhIcAoIrErKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxwc%2BoQbNgXn5hrcS4q3AOgRvNHha0jTkgS3tSuN9yeQkCAvp9BEPfju3qXb7r8YMz07shT%2FuGn5Zl8bZjgDLY0e3OaLmHRrP%2BDh3fNdIcbz44pY563SE7dR8qQ0t%2FWWe5x4qYyhOVTfgN4m59nyOYKLcAB74HPUykMTvGK%2Bwe%2BizuBN0Xn7Z%2Bg%2FvC43Oty1MoqRdvDVJfFMPNoFjZSptG%2BahceNvsMPtIQ7SdIieqk3aOeJvktEC0QrniYKS%2FaAqltwQoOl%2FLwvwdwjCSlqXEBbe495WqLuY%2BH%2Bjozrns%2BqwJlcY4AV3LR86e8riXG%2FZFyeOE%2FoGkyNUJnzWZa7NmMP4FfcXr4oVcv%2B3cpekJXPDw%2FxkyPxN%2BHIxVnF1jB%2BqofJdZKpdI3EIxLJBgNJfuJmN5o1g8s7N%2FMovdJIowwNt%2FnHcE3nR%2F9KuEk20Nwho8PVp0g8zrh7%2FkhKKauicTexpJq1WRyl7ypVUePKlDoTLT7XysOjhCJsnobJcYIdMww8aW6fIJdkG246VMyEaHzJwBriqEtHW2RHlUajW5spHIamTK1TMr%2BN%2Ba3tmYWiAxtAYOnH%2B8FhbJMGRDqZMTSNgkUgC735RhbSOH1ojK8UdlqE7k9pV%2BFF2Vv7M6HgZ5df5UV7ML5vT%2Bd7TCstJPDBjqkAWXf%2FYBEh%2FW6ugIrNHyxsNy0bi7cqlsWG8B2Po8764FnF6eiaPO78tWuYINnuKxELNSH1SqfXODmfDqF1i8ydPLAIrveYb3t2p%2F49ZMEQHTtEFtI4zT8GH00qBN6MKAMAo%2FMbfv8V7FfKboSxWcgk6Dro5vC1Y95%2BsfLQwuoluu9AJurYU050uYaj8X015AyqFGeOrrpBpvqgU%2BryEyX1dXuIdaX&X-Amz-Signature=33bedf431f7d15cb2e29dbf1ff481de663f29fe5a0eb6ae5e5d2e2419e594e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
