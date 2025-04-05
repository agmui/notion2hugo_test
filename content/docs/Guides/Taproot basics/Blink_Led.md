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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7SBVZ2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1piq%2FVrF3ibFrkMST5dqBXCEB1naIuQFomA67LaPAPAiBJXQ4K1GnTqJ8tv%2BoM5Cm0eFpYzMI56KcyGseQnIBk0ir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM02KrlOnwhynKEdTLKtwD%2F6cRbGRDMPq0aBy6%2FuzzG3q%2FGB9lc2K3YFAv4yPb3s7kkeUL5WcxMaQyXX2VoIsSoF1k6giVOJdC2Pt9maXAAP6osxMkxRHsgLHrf4i2MtQvz7mA61cAbcLYNhilD8KkFjuW8FVTc56Vb%2ForQhHCTR4U5t%2FGR%2F3jbIRk4KQmcYTXZjjJ2%2BZ8Xj1iCTZd%2BedCasew%2F5q43TGQ3TFsnz8m3QUZWHClu%2Bg%2BTXzqaeECv8mAHiydQdxEoAY1x4txD5wF4a9A8lLHr4jHwNLzojqepZZNvB4%2BNe6rJ64NfmFHFE3W8AHDOM8xM9xBziNPkuCcPV468HwVxFBpBo7xRNxntLUXjdo%2Fy8wLdaHpqpUNhKt6G7vxDYzyEBAmgLEtGdZBFJ5Y%2FeZ%2B6VkeGF%2Bpp78NCWojtxG4PVZGOgB%2FJq44mkwY7UMtszw3qUKlngXO%2FnPCG8dN3yYe5jv%2FtIvdHfOgWeMTE%2FWnym0rI7ryYepgntAbZFV8gN8WLqAHpx3vr5JZigQjihi5eguH69lNkhjx2ROVG6Gia94YZ82bcQV15wnoKki636O5q%2B7kt26YtENI%2FZCH7%2FB8Ecn%2FKDwuDivxwGdCDzhLueDY1HfkU3R5ttVWNvGN2evOMToao%2BUwv8LGvwY6pgEsrRwVzYVQOuGWLYUFvX5uIuzY0zIkMMiT1DZnBdfioNpx0DThpxAaw9rlGtfHFf0R565EVP4FDWpSDegDWQSoTTjssE5oeKEv2ukivYS5c7Z8YH%2B69AlkWYZyjxdl5sb1UUd0yuKKMZySs2ygx5kOVdsWuMHU3mjr1a%2F8Gko8m6l14NOgd57ssFNR2RTPadIDE3%2BvCX9IhWFPiecZUCy6w5gQefTQ&X-Amz-Signature=61b27509b82a0677ba4858495350a76a3f9c2a09f604e10d4cc25ad19f76d284&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNWOOH2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSmgh9%2BHDcz3uXIWNeLHQMKjZyn4S5LVfowUE4QvEARwIgZQQN9N%2BN7I526PPN%2Be1TKWQvmPdZjEKhQqEiyXf9Sw8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDG9%2FlgEQEbpYn9kvXyrcA%2FpKKO21cPLIbWZYWp9Z3OIyuo8nvdhmLADOh4R2bqIEmV5UoHX59JOU19bzDz2e%2FlEjTqDP634Z%2FjpT73njJUuqYXMJh4Cpn9kyhNb8hp2brMIrQWduTRvBNr0eP0WcZDFtNjnLTCCzkBRbX9Mf%2BlqeWqt7%2FNnfJ7VNBlYqnjBKFobydxKoJ7JLVhYvbjzogN1IfgKURJUKqjvDoY0YrY6tHLfYXczmxoHbfm0Mqe4XvbR48KH8NgNeiu5V7zbcPDfDg9gtmqJcjls7tj6CiA6vmtr%2BfNQUNon6qHoqSuwJkcy1LubkR67o5wr2d88iTUI2FdDJSl108m4%2BsA6V8tzFaCHvCoiX9T5eTAhjCEF5lEtHcmlKP6r2x%2FzOFZJivdfyM3MIG9Em9MDqG4a%2BgN%2BG8BPx4yDRW5a%2BC%2B8yPD1rjPRuRbUpLMQR99f8x2JTqp%2BrLkwqvtpF1lpkMNJoRIY9tyLmq9xh4ELYsZNFF%2BlSVJkgKZIi6u1LpC3P5kvD2AzGFsqUKmpw%2FQ%2F1HAVHvC7o1sxNrFpGlrvCqC%2FsGpaNPsMgUQ%2B8g3NMDZbP4ui8ftfp3rUd0kvGGXHh%2FU36GNYxdjDYh9cs7%2BCGMq6oQgvtBu2d%2BKGZ1FfuaKLTML7Cxr8GOqUBS4wl7Mee7JFEvRtdl%2BrcjJY90DXvvlqQ7cct%2FX7d0ldyy621oJ1S7z5Kp852wmuuQoG4PQA%2FgF9HNXQk9lDc8hmljggg8CDpUVmG8j%2FrMlBFxqKbIcooYUrhF2xOwsGKeIQNfV6bQfmpYT9UwvYA7IOiine9fZu60pE7ZMYhKjt%2BImwEZFIrk4ISWZ4u0o272%2F4Nh7CO6dyJZtArsesC9T39mgiQ&X-Amz-Signature=7086d04bb3934992fdb5bbaaeb30dead8db11ef7bf69de7c0fe60b92330b1e46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
