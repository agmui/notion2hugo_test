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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGUTUEMH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC73KyHkhaQbgaOSSVIivmGmt2Hj4xENcGHezrGAWwNdQIhANU1Q0JTeMx%2BCrL8TA5MPP4eeN0TsAn7ws2fRj0TaLoLKv8DCEEQABoMNjM3NDIzMTgzODA1IgzSNgo94xGDpiV4Q3Aq3AMbSNMIOeU%2BiGbP8Kic4GW977%2Bj9v%2BdPdhlPZEYoKzrfyHypfA8tnux2qCQMPblrnht5bK%2BJNFmFvTboHEHj2TUzAIBsk7FkyPesQt6OW5x%2BXKcBRNDIq4%2BMqQq7GBYJ3LfLhh%2Fom26fIu8dDPT0Q8wrMDDjNw17tDtg6WuyPdfV620VlSwbn6K%2FTN9HtcW9afkzv2aR7YpeTXjDdKY6BbQTpAhj8Au%2BbOiPdJ6IK7kc5TnG5i1f1EUia5EAAq9dL76BMRXSn78ZF4c9Lmttv8jPsiZny27I6AiMaKQ6L7PKshwFeMtTLowsOsfJjHR2lCTvBKer16DbmZzeDSaEjv4hSBa%2B0GulxANttlN9etqNirBCgMs3Im1nZD%2FtDAr6TF3mRYNpmVfN6kjwtN3hxvQowKpL8HHi6iiEt5alFqPuLl006w5GsnSf0Xw2goeyw5oY8%2FxA1mG5VnmLgWchwbrCuH%2FtytmpD0ojBAItb6MuoK1JUr6giy4KSJqiCN%2F%2FzZKZt9dtitJF5rRl9Y%2B4aWPJlZomgGlb87P34%2FPYgSRiVCQqGQdiQP%2Bgf956xnTQ9lLwKo%2FzLtgayTPgSaKJfhkfkWQwcFPTokU4hm4pWL2H%2By4c0LBJ5XvIvRArDCShpS%2FBjqkAdTG%2F83QgQzdXmVDFPZ%2FWtCn4D1XxKk%2F3oO0M8K2K%2BJhm41xjwrKGUJGqSCISUsbJnyUZpDkIxYhk0RHXSwbyLv2eglodlnitgsAyzxAbKyiqWJnRo5jOKACDpOeSzsOkQwwpPn1Vn5KHdaq1eZ9Jr4U2%2FpneragO6Z4TVnpyFB3NcCztGs32jN61%2F%2BLwhC13UUIdcjrURt4Zc%2BLoG13%2B8WlwaJD&X-Amz-Signature=843fa74f8bb49786129680b6825f65ff80ae4cac55f222aafba7489fe399db95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JHQQCF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyqvSTAJ4wrrnGKR932gzV05FKQPS0aUtG80DyoIZ%2F1AiAjUD0e4zpjajhSVtecYhzZ7GlGnfO9EgluNxdhmzkqtir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMBGXsIm1VechmZ94IKtwD9YvoDyZnP9BwfngLf2M8jk%2F7tAVkWskFhcio3OJ7VVqntEn8HjL301dCvrDvBiChkJjXCgjyzQ8uy2848FjgXTO50gGAzChgeG1HwxSmxE%2BJFwujGlXrrNDhpQdXO8JOTMwse3Lpng2cVpjzY1xTpRy7UPNfWGFt6ManTgR9drngEjGNyo1%2BSjjZ40gwiJzMchN47pkzmExG7urhl31cvhCuzo3%2F%2FYVj9u%2BtCWISnKXfsYNeKMk3m9OC5Bs94P4gASjssVjJlziTI8shXV6%2Fd8TaDFIv0W3aTj%2BZnEQ2YpP3e8GTIXOcy9DLZBXmacKkrX%2FGYDZq2zsfBAJh7seEuZi50E4yTYIuwnzWnCzV2JzmuS3ItLpcws1ygM3PxKvbEqnRJwrd4NKQLbKXgcH3nQn9LdAmWFcG7Muinbm2k8d8BWcqV5sq6AJcR%2B0%2FbgzBnevxy6fyyzQU0gV0qOFehdiA8oV6xAVsiTYimITM%2BU%2BPKipyd900lWlfTXMDH6%2B1xq60lfcL%2FtJjI%2BB9SIjHlXI4FKZt2fzAY2%2BDbB%2FNqBavj7hdIRib3krTubviuu6zT16RRuXX2PGKNarcUHDG1WjkxC9p5ZCaI%2Fbn%2FUMhEFht%2BeWpfo8uWHyCo%2FkwyIWUvwY6pgHyBCU2sX9x0ikfrIIclW5F7hOANb1x%2FCqc%2BgTit1BhSsWjDi1o53HawmiefSTHqHytB4EVY3wigXb6gOU96fPFBSv5KmffIfcGVYdv1zGvtIp%2Bio05OUW8nAVYfJIHjJnJZIxAjI6hLZ5w24cySlBONB6rXx2yE4a%2FJaJN2kniGTxirMBuI%2FoHfWbucfM8Op2fSqb0673l0w2x16zShJP7AKH3IK%2Fe&X-Amz-Signature=10f10381aa97db728b11bee19ec5680f93480183d620ae563786af87b76ab3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
