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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MA7MOZ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyHrPDTzCUvDQUEQCPvo201JpuWVSHzOXE8ltxul1%2FIAiBe8UMq9T%2FtZuYjbcXEeexssRZ4gYyjd1Vo%2FbOhKmD6uyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtBJOk07W%2BhLE8BnOKtwDajKO6PH2Y3JeUWmjVTyKAYw7szJu6OfptHdtHUvt3jxdMDXGLAxMwLsAUBlBpdclpB4%2B3JaYltCKPVcIcvv%2BibPm5LuQkq9%2BaepS4CVPFEOIoql7Ys3doxAtaMlIpBDEsrHreM9bxlzmYT8KM0mVDqcwbgqbnRA4TjdAvUdThSS%2BTrjJumKRDjitJELZIVNnV8uNQ7SMm2OD7yg7m1nU%2F%2BjrQH6qN7kGTxR6SsFCfbc8Ab5tnHRnv%2B0kty2a18VctUrSER8ohydksAY6P10um1fV3aqktvl4GfUBYcxd9AfX%2Fi0T5SbeTgO9mVocS5mSQhH3Nym4QhHZd%2FnTXZy%2FZtX9MsRkahJpkW%2Bt5MWLrTv8aSm7YnKzSCzHx2PQRXjEWsZO8CbUQwXFF9ajf%2By8VVEq6FE87jP6jwI2V2NocoPnq57ZJrAyNxBmZB%2FuEghFhY2SjtJzXgf%2FKhW6L738X3%2FfXWlV3q0beMRnrpzH%2ByCwnQcsn0KDb76YriT%2Fuwb5BEX1oyod1HzMN9APHqRqO3iUrWxB0EtWuZ%2FPVM0MLeqd33ev7025r4a7w8rMnLgsLQ0ec3P9u7yjZ6Mjvea2eJ6UQmmbjvfyd4Y%2B7%2FqdRk438CqfG5yNf%2F0wAIswpJDYzQY6pgF5h%2FAzb0AFTtEIa04O33yScNoKtuLtQ2P%2B4xnxY0EE64QSiKHyZ8iqnrsdObV8rYHV1CjdqQED%2F7CARj5kftI9ZjrClGSt6xxhL6rg7lk1MvvDaah2OIFK9LNjjAt7%2BhkUDwwEzEpBWe7m4Y2Xcu%2BvdUPvYlCrtg1dlbQhGH4cyjsZcJY6w99%2FqarjC2QNS1o69gPsQ9zf%2FJyDU5fXH2x2VCsFCQWB&X-Amz-Signature=14aef7477412f61b4027a3ea12d68cdea971f7ed8c7da8e6593b14eae538365a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHHX5WZ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4zvlQmylmmCFitZvhH5DSndzpUShogxqOdePFjvai6AiBThEFJM2vQFy2blOdkuVVcEKMgx0ficA0FYFCiBElkdiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRgzg4HF73DK0dWxZKtwDzwyH7AAoOpY86UWF8IyrcFb8Eg%2BHXs4hsZcG1bE0m2JIDK2MeRFNlrLQQe4n9FdugumMzvubx6djPUFbR7WkVj8kwoG9xEW%2F4L8iE74OtdQabXLZC%2Fc41b6rtsDygwTg0FmHn55Httl%2Fvp%2Bk%2FAo2DXucgTe5p3%2BB0rP6yGb%2FPQhv%2FQMeppNx%2Bjca7WSA0YDnvlTxphFt3G1Z1weQh%2F7kaQvuokPntqoGhALfOhK%2FA0IMUqqGFRW1oHCXH%2BZzVgb5g8kfa0I6wHtpjFPTrSrk6LlIyW0L53rzCkWEUBO1baGuHkKQ8lYXgDDGT5mXjhwso%2BGqwKeEUNfXlppQ0opIB2A8VXzxlYNpZsF%2Fa02%2FJvNMqk1DMvLgyIhH3SnmFP1pUY2j89ukC7LUFvps9R9ylivNRcT3X5NtzUdE9o2F5h92IUxhuwvy5JFOAsE3LolDZCySFxMR7%2Blb3w%2BjolB%2BLLZUVaCj4MssXS1gzGZGOCZ%2Bbn7rjvye6soYFgKrZJaVEAKzDEMQCmjmPYXv%2Ba%2Bytoxkpc8m9CAMu4UiJ2vz1kKPgsYlmvT%2F7O4HGNR5CuBz%2BEkpCrEW9p5EBpM2h0CCAVUYcy5Fa4R7Hc8DPUSfJxtkkdbi7yGAIRf8PvcwgpHYzQY6pgHEJqtHbGmLzZun3aRQZdyFIhfjxHKNJ4%2FqxKG%2FG8%2BcULg0Fvhb6mHDyWl7FL2JVq0y50um3bZvMx3ZYSdXcVnSpc3YIITFW%2FRJQlrfCThrkoLoQg2Qclm%2Fi4Pi6cq%2F5CTcUGugrGpb9MfRtbVycSR6yqVbT%2FqNfXebhR6o4bPidJkozyl6yNx%2FsaEhUxj%2F%2BsVu5FpRtMKtRrza6k2GeADnbIo44QVd&X-Amz-Signature=2a3f6a176078cae8394735237b877e9180e485385de4413f51c58c761ae8bc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
