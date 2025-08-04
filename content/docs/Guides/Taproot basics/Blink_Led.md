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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFWPDJI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD6D%2Fc3kVLXL9RE8Z%2FeQj7ELsbtmuvHHHDaM%2BhZRLOO9QIhAOAh0dSlhZ%2FBLEUMof6jseocfJgrm5l5SGNVtrp67%2BAMKv8DCEgQABoMNjM3NDIzMTgzODA1IgxyuAUZY7kxNMZ6pBgq3AOKWC0mzCmurlioQS1prXY2bqq3eQAbNaJ6r0spx0kg87cn%2Fi6%2F8viUz6HmJguKMhAPHaqakKt8bXQLS%2BgH0cF81T90u6kx%2Fk75bCNm9ypX2gBDjxwKPtVZRuyXZ3y2OXwwdQwI%2BNI%2F1YI4LxcE5y0q8glL7m5gXLSNUb0%2BNlBnurxOUe6khbEen%2B%2FYxK%2BUry8QtaR6raUnn%2F5jCJXvug%2B3O%2BFEEb6W6lzMvwyUggb9%2Fi6%2B%2FvqHmWjIjqKO5hGtTnWQSWKRmiuX9t96WmCinA4BLG6mnVmKLI5m85R2f6bCRj64vQn%2BT%2BMQmZEXPezvwjl%2FjCV4z3b9vDjU5FR8%2FeUGi5%2FTmt0sd24b4LDf14t3o9yWUCUdO18qjUZA5FPV8OTSPT%2BTml4RqNISkycR2JcE9w3Lfh29sRqHX6hIpXTxkUlHbqNlMrziUa0SvrVsgcZLX2mrSVbIw7hmz0ZR78eqbuuksOz97GAORLF1oY89xgWFGqGX2i%2F76ki8pRkLnrHcEwpGcG92VfGyknz6wOgK5E%2F2LW3%2F6GrfU5LDgTCf%2FSRNZ%2FXuqFhEoBydSeQsGSdX3%2B5bh0phw2eEoNuiw8wXHVB959d455NYovbc9xEZn1S7cXjPB7LOVZD9iDC8kcPEBjqkAZp7DTp7fE6aG6NNkdSR4pwU1JCtjwav%2FkDH%2BFyWgb5zcQ7JjNeBnISyYIszYKWqNhpD2Rib7aXt8IgFWxEt77IxFmCpXY0Jwe1xnT5tNm09aoh1q2iD5MdYDPccjsVGlCPTAB8%2FNSjlSywNCH7bPxg6jJ9L1z8pNaabShI6Yo9RMSmepLnl12XyOCSizkBryB4gZJdS%2B1z%2F4k%2FVKBgOxaUUfqIn&X-Amz-Signature=ac20e6e7109a607de2a3923795585e5680e5d9033392b0c24fa8dd102ca78dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AE2B6LS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJFMEMCH0BS%2BT2jDXMIPM%2FaW8ZUqIwiavY%2BLCBP3cOLb7RVHP0CIDU9A7CuiCURim1skpAcIcelhydoE20AJGOi9TwO6WKmKv8DCEgQABoMNjM3NDIzMTgzODA1Igw0KDwf0naaslSqYFoq3AP9D1fNA5VXkjQa7II%2BBlXJKTz4IyrlUe8Hm8s56W5sTaZc9xOemrUQ3IDYmbcu8qHN5ogVgyxpcl%2Fuo6iKLMPSpX5l%2BHk8W%2BIo5nQUw9J3Q0z%2BXfucJR25XPWb4vJ3pJnPm63nB6MzXbORrSo%2F67BcQ2tPq7MJLTfTqK7hPdcLM0%2FIUd2ADXBX9IKi%2BfUPQN4jUtEpPJdlBAuTcORueE%2BLsQyxnlFzhHmQ1L1XBFfn4F7TY59EEEKtUZlnK14QxzUi%2BDIuNSZmyPEzJYdsoDlUu%2FHkx2gLHfh7Yl%2FBuWn7tIuw6J4CO2aJBmL6nUpwPdOkv5ZzWE2Tw0BMItIEl%2Fha1WQKb4y4j1Gwt%2B0ZCZivQpjMInMrEWpcSKOl9Op8WpNEyQW1s1HvjaiFWKC5glLwWpfMBNwvlnWskO%2FX3k7olMIVLuiODSBggQ9zvjYskFUexGbCNAn5S1fLL3aBTHfQCC2IWokEApXA5C6xWQv0Idotfub76TLGMroQiEShkEHDPNlw2plngOS8ZzHqq%2BZSkGFs171rCM4j1%2FOj40KhCeAgXCN1MYo8mq1r%2FXZOsPXU9Ig9wXghuAFUbH0mtKJuAfEyIpKf%2FBEtR%2BpmIIYa7SrKTfI2zWBgNcrFzDDpkcPEBjqnAUidfz5iy3leA9IKTNxiDnU40OtBiIdNGsJqp1DF16If3NWhWhQ8gwU6yEtNjrL%2FQ9oZ3aJZCKxKopOgocyhM6a0JhWL9pW8G6G6mg4htWK6C7KjZBBf4wqUzGSwqrtI3N4obkGGsmtTWh0rG9GmlzMAe9qQ8pDJZsNDLrcWRtdV%2Fmw9Fjj2J3sX68SqQdzD3J%2FXo3M2qBSx5Mi29HLXfncp9AgIJ76n&X-Amz-Signature=bd451fe296acfef14c5c9f0d789f1274809b22c0a2cc6ff5a5b373468a3d0ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
