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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2RCEHT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfAhk7PAciGgqSKWqNKxSrd8OB%2BECttWBjfIJuqN%2F38AiB2XCRXp8RR41Og0pLzQ3MYX6OtYgFNFvx%2FWqQPEH5m5Cr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMbOnzanmNA59g9ZEkKtwDnQD%2FerUuX7CdFDFClglsQ71xksPvyOFl0yKbnCFa66QerelvHmmyhce%2BOsmq%2BGmopR7nnU0T4VuIDZPTmv%2B3WeTH4efH1pEgYztulCQvJnV07ISGBp9PnDWD3%2F4XwWfqf2LxtGzslvrpCgrvnr5DU4x%2BtnJ7hKawNBdqLZg7ZAYXX5TbOuupY%2BKnlXYlL4ANKqvZ94fgoWmm9rWz8rvB093hD488tletagdDDZUUYuEVhox2Eg2CmaVnbIL%2BCUu5OpdgE4toc%2BbnwhjH8cQ4qKgXh%2Bt1A7GcLWA9mn4VCljkTiAQsZwrZ0wQVSENmgmIz25WeUaLqgbhgnRa8s4tm%2FAcmAcAwEUSHCX69eUOLEKfM3RbD61wt900tQSHAWgmGEhZ7KsgNd%2FaM98%2F06kme1l7Akx%2Fu1Hidw%2BUvMVRFtAVFDRtzzGpbaiHWFqrhSildDhgbifn2XnzpF5Jevt7EhmV6V4L6o3zjNi8VCThdCegKb8WUnmBKb3UxUZDRTFNcLwe4kAEhyZogWbfzDNogYM%2B61FO8ssKpy%2BfxVN%2Bvaz2gC9NHHC6wBSkjKjIs8v7J9sd0jQV%2BQpblngLFmQftLY7M1cH%2BqqzQRCHHpg9dwjug%2BwbFIS8l%2FYBCKQw7aL9vwY6pgEDm2kGUwE5TPcAkGl%2B%2FLfmR%2B1yr05WWf6m6qgBhkkjKVJMgfgYZUGHWUb7p1MOZunGFluRyE%2BS9e0qbzsjPpde3UxYw1sNWOttz5FsKPLcwez2K%2Bys1hpjAFvwhwdAIFflwkrwB5qDtsHZ4gi3yCWL7OFP%2FGA0OJOXraPdp8tDxMCrWJ6yf466rYj4VtoNdlF86T8fMQxpxbd2uEfnKHUvLHv2f6BG&X-Amz-Signature=dbc488f36ca8ab89f208f73779b02f6ddcf9c6fcb5c47266c343ff0016fa6f06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV2JCZUM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCgqmdK6c6W5toD5Zx3Pj6%2F4PnLDu75sXyqJj0Ng38MAiEAo8GiCo%2F0JlpuLgeYIWx9X4moUFMPQeG4vaU1Ba2PnTUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDH8JEbaVygCwIoegSrcA1Mx56z%2BgffsDzG5UisU%2FXTWNpYSLgn4ZrKq50RidAowbjUn1JmLubklUeGeLotVVGllOs1DY21xjqftS0gkl13KU4Q%2BZlK5X0sfD5n%2FU9MPGVC2hNPDJWM7RLooKdOXHa%2F5%2FHzBmeSDKpkK4I1J4DbLvwdDIVB80%2FwECfqsjVhZOEf2rh0YMv6lu1qT17NcJzv227AO34zZkZHAf8VZq5kOH%2Be%2F1mdiBHdOEZaF93YpnI6EJKqc3eNryOhN5CW%2FJLoKM3D%2FUdfXj6HSobifhwt%2FnYVes3wZ2RZpqCZFeQszjYhhF4eaXRtySeTijQSz1m1fK1UoAEJ9qEBWA7HZ%2Bdi%2FyXOEdGsoF2TXj7ULiw3ho2bQG%2BruEooYoMI%2BKpt351aJuYzO4u1eVJP%2BOtlK2gYEmKwgkWiy3IvapsGWUtRTbFr0jO7thJy9AfsUlZVrrm7Cs%2FGUEKWBmTiocNtAq3tuqSXaJcVgpkayef0Zhsfcu3IJzIIGBIOuYPHra4Lpj2N19%2BSylLY3BtDTCw1062D9m3ry%2BJjSmCpHaEUU7%2FHZUfWm6HenqueeJuwY09lGw8KyrUUEn2qt79YbtH5XHzeEKx%2BajGa1mu8xtUWp93gMUsjl5kPKaJDpUai9MPOi%2Fb8GOqUBK3z5%2FPtqxFFCHa1Ch4KVDjeiLc7WKHIs8Y%2FbQFj9R8lxKvzu0TX3xebuT6QqcV4LWpepfkjlPlsnL%2Bo8h%2Bi6RLTCiMCX9R9dqzdlUruu4KCwda3Tm7Og%2BhE9BjC5cra9qUJ2tbQJ4VSY00Jz%2FFpRYRy%2FmFbl5fEfLJtPeHhHgu9wIwaJ22RC5ZUqWQOVbw1kQWMHBhBPRpVh0AKyMd10URnx6j7S&X-Amz-Signature=94c16a4fde167aaae0bf5cde93ff72d2987274376158abf737d58993af1f5e51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
