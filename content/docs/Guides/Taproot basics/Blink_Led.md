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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QED4ZIHX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEZyIFO83A5VOmI3Ylo%2F17BRkc%2FKrrIs6Argqip%2BreVAiEA%2BTCgRHJjWexTd%2BHavvW7SnOaFftQ2M85HFpDLyHte%2B4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDEgNdJjEhd8OHlHM1ircA%2BZZexZXkdJ%2BML8iQHiwflOsm9za3kC91fn4dyjmPiyj25H5fR2QEk56r8KEum9KWY62A3uSRje5bLWVh%2Bqr7ZnHGzB3LoVreqEguKmAHIWRF9mcettbfJWGuUF50ygIgWRiipWHO2AjzIsbXzHy4c50nwhwxNxWfdLctTsC1tBFgmB4YHg1GA9CXBlSvkSDeNusHT9DZB%2F1PPJZqrVRO%2BYTTCFtOdmKxatpCy%2B9nl8ALP5sN24zzZ7AJ%2F3AY21sMno4TOJ%2FDceh%2BaowcMCAm88mDIeahBSgUIxCfn08%2BEq3hqksnE9RsH4illRBF4Mt7QEAloU1F4W6c6YNoGmCBgGCqoU054n0mxs789PEG59Vql60oeCsIuLJoEDrHrr96%2Fuhl6Er4a1vzMXB7OoAvtvMvaYvLerl4MfiFe49jDbd6yVZcrxzH4LDiu0QRn3IE2BtWJLn3t8omE6eU8H7HbKnak7Yv7jP9oTr3rkxT1yBp%2FdME6nX44Ws4KG361UG8DAm68IfWbzc7nouqbenw6dNiAdAW9qyWLF00WKRhmKvD9RCw1H%2FX95GNY2NADHUjG0UPw69OwWp6NWcrb%2FMjNa1BZwZjDQOEe25PJkYHj4Wx1MuNDq%2B01B4KZwhMNb7g8AGOqUB70%2FIXeXm4uhbGWTN0RI8acEmXDX1aIkzgWy34gSruC%2F4q0sOv4xK6czP5ftYgUfgRh6Vw23khvh4h%2FZhqlu0J7E9mqRnOvjZQZQnLljQaFg56tD99e2mcYafXj4zGQMHEVkvWpJB5HQLujXPJ0PczOi7kNmZJd8GAZHHtU0I6JLU2OsDhFNFDvCeEhAwCdmxl%2FuF%2Fo%2BavDRvZZJJO2hXQbU8WoFt&X-Amz-Signature=b1fb4e530f31b3bf9f503bcc352050b8d6be7171b7677e268408d6586862ff2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOAH5XW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0WJvhAzquBrOlILu1ataXhRhci3EbvVlRGAfD8uql4gIhAN4Smk7sZ0z7ldhoaNENABqHaAmsDjBB6g3OkjTuE3FRKv8DCF4QABoMNjM3NDIzMTgzODA1Igzd%2FlbOFa7buWXkWowq3AOFzgpbbMInCyqGyyWAq%2F0zo9iD7yEOc7u06pcN7jjOrpxzXXT2P4OPPZONDtufqpoZgg5RE4FZM8JeNN7OAOLeyal54vHZPM3Dk5Jwm7OI9%2BajziHIxRSQr4RzVoZmT27oDrxhyMqOXGTOwReWKt9YDIW4fqyYN1TeBqlkhEbgw7oajImbLsELRv%2FLA1nLdqj9YXky8IiFVgXGoUzRo%2Fq1wNgNFt407jnHcToML6kyjaeDuFUh6kAKbRCxMUUt3y%2BqtKwqHGwXZkR89Igg%2BZvocgKYA300Q3LZG6qsp%2Bm7xJAkBIY5AWZar0dDHka09E689Xgy2VtRNFm3DLAeDU3aGNMj0oeETslWRxgKYo7dC1VdeNTglfpz%2FgHNOEgUKLWxwH0Uo%2FzgdsSGBDFS6BtUsL5rvqGzIkPLFJ1lu0w%2F32QDqRGwcdPbST8Mpt1oWgXhgZmUcJDsFpxyQotMuyEmINT%2B6Q5a9PLHfVCXFWXofwoWaBeP41LVArrTJNWch080UMAeocv%2FM7PgXE7aAq%2B%2FRAqv9%2Fh0CoBhQpaNYZFrmUjvxe2x18DHx9Tyhqz0ET%2BAY%2FTTYV1HhoxYfXRGm6Blro5dDhhlDWBO0rObAY8i5%2Fv82ZWHnq5wEmTYkDDU%2FIPABjqkAdIFr01TrVFRGqhqhnbEkuKdiDyH8gPmpFcuNx%2F%2Bl5o7UkvUASs71by3LIfzXdmNBWieef2qVKEBlvH2f6Y47MmyYRyxGT8aEhcIzfr869QDveaD1SLWCzdNnXHCa2r0kCpIhh7SftYl33Vu07rraEKfIu6bZdULtVT0dakCA98PrOeO37kd%2F4NSyoLmtpYBK%2F3Z%2BAh2fqtgPDc9ESD4HQqJDsa4&X-Amz-Signature=2d963cb47cee54c1328825de2d281877f7597930b2ff3478daf243c5cda48787&X-Amz-SignedHeaders=host&x-id=GetObject)

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
