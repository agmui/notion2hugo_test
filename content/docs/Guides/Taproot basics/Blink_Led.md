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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGFAZUR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2F2dmkLzLBpsqg4Zyu%2BZVC5f0VX69cls2lvdnzRvNEgIhAPS8x6wUo69VYRpDHf3n3mT2bQvLL6n6E%2Bhgk9nPA4aMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznVUoA2UmLwytQs7Qq3AOlBQ6x5M7ZcUp%2FjhUBLqAA%2BJPZDa4cIyzWvkKr2tkXX4EMpL3EU0OZx8YbWM0L3rS1Bu%2BqedUcNMXipO6JcfA4%2F23vp190ymuvDc0kj6LRWka3yq6%2F0RAc3nxTTEk%2B7BfLAlGeZrJo0o1O2ON61ch1I5jX4u3IPw3eg3QLMbEU4bOXGNCdYUjmbyb4IvP6Ttp%2B%2BvM%2BTW7PargTEB71tATbFD68tQPSOJhJLl%2FmNuvhT%2FdywEBz0okOV2FUeR5GjpsMyc%2BwIe1e9rvTFEjyMMjSmSiYsaj78sKLBYbOhgfZfU86hrwdWrc0VuwaO4PqUetDAhJiLWLl22v4yFy1eur0VEWccEPC7E61KdAy4kpXs3YO3SE0q2ribXSJdoGNk31aT%2F539hX3WF2MmImPCepsxgYp4XxzAcveDccr7qhyDjq5OkPcrzPUzN4DZWT6zUkaiJTTWsjm1xHZ9XCgjNskFmtELT7siypSBZIHqtHQ6Rostu1SkEWKqiIMkZGP1T7GErcBjBHcQG3ngL9RVrsEXBWoHJqt9%2FQQJfcE2UQAIzjQq00iDoWCGzgAZQ5Fhtd71aSa81HmqQQS5yy%2FZWO0W6XgZwWL%2FSmmDxSEKNK7duJNusOrU%2BRYZZhNSjCQ8q%2FIBjqkAYeuCSAHxd0mMU%2BxvFf4dF33wto89IRTtzzAByOepj9KG8Uv1Y7dN43TKfeBBMjD%2Btl9EU4eZWVGcAqR8f0Xrg9qaH2ofhJjaqg0LblSLWpzg4JSSo8HUlETmgMKycOGf4sk96TwOxBOc9H%2BNipe%2Femu4jbtuC1yeXZ2q0AvU260OpOwwnKV4Ha9JG%2FiGewpfYSSjvgGCcMkd8ME21Tes8LwTwxS&X-Amz-Signature=5354c7c5d540e8b5ee7fc3dde9ca5ccaf32f9f50887a34e0b40db07f0b06bd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOVBDWB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEgdHZOZTjDHeAGw9tmUvMH%2FjusBtARZV1Oot2Q5o9bAiBvfqBFPbEXWyPq9LA87gWjP7NHcmqIDOx2dZT9PCtomiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnlpeujsmupwG29tWKtwDGvShfl3qdP0hnAecg4g7h2TICErN36gQbZ%2BljTpsa6%2B8l4XtnSeX3NkUVeiH1bFtdup3hCF3r1tScQBFkhoapFvW5bCGH89zr0ZjDfRf9Ma0PalEGH8%2FpNJhR8mADQwbRy2nurGQ%2BENTY47C0XgbiWViJV8VRZnmY20irLT4FHceySaUvp%2Bjq%2BvsdMHbug1s%2FNlEVT6Ennu4306AXDIGZYMgBdPS7lt9IgQAX0DgC%2F1se8s%2F4qRMLe7DxChDGoe1AwHaJnf1kzC4FUQp5wZxWXwDWOGrbNOY6f5BAcd15pofT11YCp9G35r0ai4kYpHIRMOyte5Ystjbp5v9mpboCH3%2BenM0itM%2FY%2F8Kt5tQmckFHPXchMhGUKVfCkHPiAWIpspYSIfmfUGSb5%2F%2B9HyAjdsi3JXmjbEZa7h5AVtuGMinqTxLRQWt9iU500OMUYvePqcDc6B1hGAswNF0WJ9EYFqcn9Tb2HxFBUeZAsu4G7MZjum1aBD8l17kJSdiue7VS5CP%2F8YVrQeWdciv7xiXGcQDMrnnbkNYLQGvqncBHbu10ykFUHRPD5ms8pKBd88DnBHSmdf6IS6Q9xU6k06rSm1eZ3P8bwuzQlmyNu7vQBwF4Xyo8joruMYg4EAw4vGvyAY6pgHcZBjdATsp7%2B%2BJxeMj%2BEK49%2Feu2Ww6imQQi0sbXmdjeNNicqCe7ZHyyvTHen4uxznZmWnRUW4KAUyTHMsWHw2WBfzhVrAvOa4XB46cXPBH8KBlR9EbMTfFFxqkPlTSyp8DJHaMW7fWycaRSKvubM%2BLXie15xKu5C4R%2FuLvKLOPNjyC5C9ok%2BesgRmKxIOOA0FDOqBu02XLOaXMMvYIhFZmR5QEryEK&X-Amz-Signature=82d53d1e516a37fcf8a28793ad2598593d880c7304779c6fd6b8a15880641295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
