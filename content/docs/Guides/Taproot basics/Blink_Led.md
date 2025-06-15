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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKH7G5X%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICreRmbjygs2OaJZ%2B50zX0eNxkGPkjOkfHfQBDtCb1zUAiB3PKDWm5XFT%2BoAVw7oojOjNcUTqbag4STOb3vl8E2yRir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMQC6BDhjqr4l28oFXKtwDOLCYRqW%2BRF36BoQhRYxMKIGo6MgWqthHozU3r5qKKUdr3tgC0eOapuLzekASKUU66UGniUnyI7uXwrw4Nzku1H5PvtTY7Ere4cCsgSAv%2B61dAFdi1lUIigtB5QvCCizThYz7w6IEU0KtJaxCYBnZF88UHKqRhJuZX37Etkf7iXVSosS2pNTrCViXy3cCLi5m681lAoHdShXB7UBvFzUaXHoCImbiTTDNaHFWjKxOWLSO8HIClV3JoWCaFl3Vy%2FZgDFbo82mGZbO1VUeJX4YEQm%2FEE2o%2FkW8%2B9k1KjZrtXko2bfVrBki%2F0XLY02wd7X8cRkjbmxJPIA5A85AWAzMsbK1FBQbILCOCWLkZQ20qbarrRzIsmjTWHVAYfqUSXst33fk7MvMzWPcQl6rk6osS4XCz2KhdqwQHMYuS6oQHHJwM9aZLSiLGVG3Ci%2FSnM0HYnJWUZESv4RbqoAnre8vw4kpjSVcNbWJ1qyasrIbo9qONJK7W4fC5jRBk%2Bz8uKsZDpohUZk9deFytWSoDufnucG8rZ0mtWQ0D0BimnYMzXrpi3frY4M7Y8uyqZNLsfJaIIO64y1zngbu6q3x%2F83R6DpMm%2Fgnd41467R260q9%2BwMOXpmtIPj%2FBCd0DHDkwqYS6wgY6pgH9qoiXjAcgzIW1U59rbKeLOL6TRR1a%2FyK5Z3QyPfeOPQP8akeyad6trswXmmbkWTTjjcxGyZ%2By%2F0FpvoF3J%2BlJNrvQfBGCImeF%2B1VhsqHFo0N8cwjJcRUs8Xt12QeAYz9C0DU80sqY6rr%2BDvBrlaYiUhKIXoONsBNyUy%2Bat9nIPPEM5UF68IF6slUcWmEx73rfc1QUMmtpnE%2BM2J2jxJ0cJ0mSkQES&X-Amz-Signature=314f168d79a1524e50cbb2a5448f8b2f0bfa06c5a7709f7c0d8975fe484e29bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDFEVN5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEgjaiLtjzc655ltFfOB%2BuwU30xgDQg3V8R6R9B14oSwAiEAkAGV3D6s%2BizpzCYhquHOMDeh1Z0FXQArwDbeX96XigAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN25qX34h%2F6ZZ14A1ircA2XClhGFXXTk%2FnbXdwDkH4EqTucEcDUDcXQZXjw2eZp862J7qJznXoUMtZq1gJ%2BobDMzTz9zDhR2YcyTfoawnoUhdLwesYUbf1d59BEEP4rC4UsLhyTOdIMDoUn3g2fbPueofjVoXc%2FR4RDDsEquRe2myv1lrUs%2BVIgffQ7PfvPcCNUMKIVf%2B8A9wNZDMkZ4heiYfzBDa6tA0YPtfP1XuD8gxzWgd1ki3xVXL6PDcmcJQ1%2B1zUowrAoCHRjJP31%2BRs98UsG%2FP%2FZbHIB%2FLGNirBb5j36hUzKluNVDSSFLjz96ssNEYKdf3HsAwW7TN6mvJy1oR6okoa0Fpq2kMASM85%2FiAkOF1u48vtnxK221Op%2BbrUjKBAl8KnADMmHbGk71Q8DQ%2BTN8bS1NqXjD5wWKWse7XHXEtVKQ9evgqu91FNeAP%2BCzrQ8t6UC9n29%2F5haaICDeDE9quCFaPb12yLVtnn4s6sgV3B2zNhebgB7UmDIOc5cvIHHIyJ8Rldibec4bieCKaq9ohgcquqD8UiifzVKd8rP50KBpy076hJBGjEp6fjrlFtvdt4u%2FlqBMDcHCvx3TRivPsI%2FOB%2FWAApPDlr1TlKb2eckOROmNfzVCUw1aAHc%2B5%2Buk%2Bfhes4EtMM%2BEusIGOqUBZbcM5RFUU9KO%2FpQxMbSD8DRFsV68ImgJNNt4m2lLao8EFY70VVHpCUdRLvIzd%2BkrFj%2FvAovJJ5nLMd%2BJYLBMLpxoGaGv0XRXmfIh3XUcFzwjLsSlJtQHjGVu5%2BXhzQbTD%2FaLCu5o6SFcYjdBIJlsFZfJpr7EIwj8%2FDiTBhnl6hutmg1ZrBShqW%2Bll334SJwItIomsrDAZYEjS9ynFnuyAKK7Rw7%2B&X-Amz-Signature=94e3e8f5f2a144bc02a4cbb8c8e2411ff05d0f921c69f5bc148378eeb445d09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
