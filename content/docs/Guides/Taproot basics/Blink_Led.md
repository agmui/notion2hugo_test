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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQRLKDJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHWsCRGTdyMWVNuPAq8FqixD67NMjaNBpnGx4t9xXi2AiEAivUXW3zDRy7sgT5jEw8LZIPqPsaaOxLf9E13tIQc8CcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyzaI8LoSr%2BqV9gvyrcAx1XHIRIPgp89Ufa0jQQHSZ6QYns4lrBHN9TV511V8z%2BILZbmW92cZ%2F45crPDV%2BooNouH%2FuqrFtpv0KI1T3VTllKORc9GVRpUnswlKIIy0j5MqI2r285VLZZFRXyLwTrzalfrR%2BFvHg25D3uOa1BTQMMw3MxLP68uuORXf1BDNG7utUblUiW2cBl9RvafVJVF0s4Qx9x2MuPkwVitIHPgMjGQSndBV%2Bs92kcLK1JU%2F9UR2%2FCdkWxHQJA0UYRnDgRjsGpYTmX0znYUqA1HYFkq%2FKCB98GdIDiBzCGMAcuTd0nmTXpRLoDWQKgL4i5qQhsKuVSlSm%2FF5iswjQgKLrFQoIHgSSwqfXpkylF%2BUVNvA6dBVrRSP82aQPxmS%2BPvCaUaZ3V2gDnd%2BiMiNJoYUfE7js0YBbnU03wPCSvFqxLEF7evS5HuZp469%2FHWBssOsIxshG%2Bc2Fsa6mPMj94LhW2mN4xDDDz05KeczDyLIuzEGwYoS1daz9CoeHNtliGLJrYwVGiOUh7BzTpBkrEUHGfuaInlptlEULKlvlI5t97cE1My7vYLvNdaAc9MlZTL1ephr%2BPZjfZpW7eGGy0JA3qTEMeA%2BjzU7hNWkyFyJMaGWqWbI8X%2B0ev8NB0Cc2oMPO6iMMGOqUBUVYmxX0vQb9uGa%2FNIYiyiSGYLRn9OetYzFN7nYcWt5oHRxQEzadxN%2FjQCwfbF89DeQ3%2BcN8JY61GomUvgrbr2wlXU6uXY7rjPnAcggmgJ4XozPhuOxs8Zt8tiFBRf%2BNmrvOmgrfL0C%2FRxankzNwT%2BpmKL8eKdt4RXEUbruNuJgAHGu3V6wZ2e%2F%2FL%2Fyl8wSODHHY6ZSKXR0vtwj1C81L5NUocJ0B1&X-Amz-Signature=c94ca5e8d68d4cff26723d21c6f5cb06939aec18fac35c22715a44927de55104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32ZJB6F%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVcRxJUR9G8FRcaQhwSKYd3VYD5eeAkdT9J7PvAlWcXAIgeQE3a52n%2BUcfG64sZrN3GTSgSAFDo0%2FxUg8I%2BYRq%2BjIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm65d0MTCaYDgKETyrcA7qtndpDf%2BxxrNP7j25QDKh13I4ZNXy8rkNPMNxk7BhXwtN5WcJQrO%2Bb%2B7PEmYtd%2FsVaf3DNpPECJ%2FPUlF02txS17v5PzLLDWDIdrCp0YHg%2F9qlPk6iwBa5v2%2FmhNoXmalHp4%2BRIlv7Joxqsq%2BwY8qpRZeJQRhyCzte7k6JkzGiA3uLSh3NWrXHUUCtPAJDYSi2WP7lz2Zi8JnlMqujM29AiNkYBMAF9XJYXMcE%2Bf%2F6T13izrXiodN9yDp73vDB%2F190BqRuAzdkoP1C7uEnEEkT6AQGo5cO9y3nLylyxKSRbQCA24tXlzo0II3r8giZrwROoJ668PjDcFAA8yUcKF6IQyJS3g7b80drdqwesEoMaj%2FflDHmru0a3XNv0ngFhbrZMAU9MpwOiBOGFniKGsnt1uY6nTiOpaXDw4Y%2BhPCFu4srPbEE5EpH2Nu7kUJnF2uHIaFpTSd5y4v7Je8ULhAVL7e%2BN2mFshVofuNOTSmsaT6MvCemDxPz%2FbLgMC6Rx1Th%2Bi1AEtSKSxTCEVQDiVBgTLqLjE1JBX6urELD9C8M%2B42358RmMep0dWnNja64vcf3s%2FNilXBs7yOrW3RSwnTQtn7P3qU49OxYUcUkIBPMrUv%2BIOdWIvnSNtaQaMMC7iMMGOqUBFNqr%2FkSm7QJb0lP3RXQWRh2WCN5CYe8lO3NOv%2FTE8N90ASfyKrEGtyiUqehoTDD0NAY2EKuIZWlLHQ0z1tclnTDiSZmQfUGQOa5ak2WWOnHFVW6V0q1nO6EnXR9TS%2BJMnbCy78%2B%2FUHIHUet0MF5%2FUZGAhguuIF4mDAQm4DvsYU%2B8S3PRNU%2BtXBfH%2F3vjee4v8OY7wr2KmafkZ%2BPg9d5kUYuLVhiW&X-Amz-Signature=6f0baff61fe17c5698e3904188891bf6f57becfd7a6e2cd54e27e5fb6c7ccf00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
