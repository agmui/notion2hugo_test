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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNKWTAI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDyyxh0ppFXQyxQlJYrsCrbt%2FrvXgBmRrcgtqj%2BlYRVKwIgCC%2BBCj%2BUGzOQkvktdGY70hf4u0FkxR3Xh5QsQf25cngqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwAzdc1oKqlkgOhRircA3zDfyJ%2F75hmEWuGlgUzQJdY7RfNBUB2c41io3DLzhz9K9pKbmtOCTmZEARaXQ0iKftAJYj6KllfjB0g0AWbMMKOqWmDKbk6u3HXu7IT3YbU7ggN%2F7ERAusIJu7w5X%2FM84lURXgMx5%2BQromoV9pzKLShzlepathGBCgeQi%2BbReYJYozgAcLg6QR5a4YjtmVnXS%2F7zDX%2B0RXJhlIvA1mxzKPOTUGRjFQWVZB9AHmfxuyDRKAd6PdbmQarKGyGbq0EFvtOXaTBASS%2FzuXDo1UyOOodmQ%2B5ZBTGnfL7DxnZUY1eayJG5WIuEXiVyHEvlIIkQ4Fg87a%2Brmd12ebWGwmSncaIKgFbgYPFhAglNHCBGelZwgdJ3XoDRU%2FTIzl2XtNq4qavJ7hOepNon43%2FSPq7q355qRygc3Xso%2BQGZ0H4Q6x41QrjKzBzx1G0yOiwtIOa%2BJL3CJG5K%2Fp1YETsSszFjjdQkG9y7z3CdmCu1l1iCA%2Fec%2BUn5b2WqMvjnkaRsyGfEFdBGqBr3r0cWzqH%2Fzi0bE%2BmTkyG1mW3d6fpjvDd7YnIl83u4QnC9H6AWhaNON9TmLgdvptn8xidx5u5f9qQWbUwjTs4lvQZOg36dEZm9iisT3N2v%2BbeCKxAAhCPMJaKn8QGOqUBPmxNruGb2POSGS7A6eTV25ZiVRiy%2Bwc4OzEtY%2BvPg4bOCnO6nFaXFn3up549i5Jw7ryDOoMyNdNWMPueAefoqoa2ZitRVDjnOVXLe81RnAsba%2Byql1np5HK8ps2nTUFgp9pJTsKl7F0JmgRBHW4wm3kqjqbdgE7MNNE1bl9zZuJtR2pIDjZ4%2FbHSs%2F6VzTq0PDAPlXWCh7vlyI6qB2%2B9dt3kc100&X-Amz-Signature=c8414fc1477cf99187bca83770318841c04f90409f7bae2c287b9378419b056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGODPRW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGV2i6rPVlGHuuusxWG5zk%2Fka6EkZ3EFQDmTauoxb1fnAiBIkXOOJu%2F5raTZmzp7HcNTSywx8tPj5oU74yPzseMLmiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7V4BZKQCbQijFB0KtwDt0bBdDrrHJmIRqxGrJziU%2FuIhg8TBwhDDCFIcDlhMUyhzr15lZl%2FnAfjFkzI6UOYO8u5A2hXQMRLC57AlO9y2p47NU6FOmv%2F%2BRANUvdRh2f%2F6OmBlQR6qFFwzl5DhWKxvjqymq%2Fqjmpe2fFG%2F826BA2bwVMKqACIIDxhBHfkB1xTGaKZjVXrfEAf8aGP%2Bk3LqMfJLEult0iaDN9cvWldHC6j%2FyckJo8ExEBcqM632A%2FlYodlTi5rnRNu5FRiTLJQdMVKd9yPgRGU29VouSA2j3fHEECAEKAWBHfk3pUoYtqTdVgFpqkiU1EqZ3tLRV1K61gfWiaN9frw274Yg7Ou0Sul5%2BdHDXjz%2FcV2ObdRCIPPCOKCesCcObAF8E0BAXHMxg8tXdgqiK%2FClFclaE6FKOFyprlI%2Fb3Pn2qn8Lcd7Pk9SyFUPjKL%2F7RNwmvmuS7HFs%2BHpplv9H%2FJM296OI%2B%2FYAwseFU%2BVUkW5CLEUgiE3oQKY%2B%2BEnWtFaka2WhoSoESVo8gInv9oiC%2BZdt0vu8lRUEZS9T7Je97oe8ThzyXIO9SM07vUHFYT0ChwVEhNC%2B70wija1HmXDd%2FNVqdI%2BVZRw7iUrXOdsPbfsFxnH7WLoXzvqcEiplK3aAvagsYw%2B4qfxAY6pgHRp8RIY2knp3kXo1NRWEqskIqMBDbFc%2BM3vzc0Act%2FO%2B4nHV74YeemQBpTTFdkqNKNpJama7oEKH0FBrMyxUbbYLPsXmmkKccx7%2BNRyubE2%2F9fwo6z8JV92%2BSVGm7QArpilPDnoljjDo5eoRU9cJhpzSNhXjcFcs8%2FuJIz5PHwZ7M%2BWi7B%2BShG7bAQKVv2KG7EgY0kNQ4QYeeGhfSBhMHxHhRPVOme&X-Amz-Signature=66172ac6b2b22614def0c3ce7ae678514745bad0050758f87a1101d8c5626f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
