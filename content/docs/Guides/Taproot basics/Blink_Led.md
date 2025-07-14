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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJ44HN7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFIJpvRXkg6MsdbqhTehY%2FHRbZh0RBUJAPxV%2B2bZ772XAiB0FG32jbXHUbSId1s8C3RieQnl5Bd%2Fqxpv1gBPd7LDkCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSVMsso%2FLN7BHCITPKtwD9rVWF%2FPWLy0RZdxTiFCB2vrJzFAA5KBKzVpUlnOqNGt64mSAqRchRMPgjGZ24wfmpaEePqRpzfimEIcA%2BgThRkN7B8ra%2Bjo4tB7F3xqcEsMGYsael1qYuEOYB9wjXqnayNP3R7zvbashtfDzJP9Ae%2FGcIv5WE7LaA3k3B2XAh4JlzJl7haNmwvGkz%2BmgEeCKhAu3XDsSHNYz8LL%2FwjHbDL2c2o%2BR8uKuPLBYtGHkj%2FMnUaRSQuUK9E9Nv5%2FywwR1LRt3JWGV4BfzEjvVZTLARi9s5LFHIbW9%2BIIJMZUrqiZG1E582Drhm7QWArN5%2F5j3afjHwvtgCnqCxAE6Zyv%2FJ%2BHPmS2WhVv4sqMDNYF98INij2E1xNiw61IDko1U2n4Gl%2BmtDMH%2BMLzm12Y6LvSgevup1CfQPk9XbAur99ZqOLSdFIt%2BEBehUnxZyDL5mIzRdF%2FgygeTRRee%2Bp0Rd0tjlG4dsisoAQxBLpHfI9HgL7Gns6lTFuQal6lPbjkcBeGMv5P1Z8m61JkRj5PRqMcjV5t28CG5cX7WikkI8twbv4av75ZOPy4UehbvEc8tyloLSKvzq%2BGRijZRJ1oYGfV2hhLTpJO9sUBEuOPm7zTXgx%2FcX3yRqSGn1%2BhXPEYwvIjTwwY6pgEpeSSGhJqiSAemYvZdJqRUGVHPuwbBxZotTj%2B7Qi32lrWgOYJeDIx7imPFErPmQOkzd8UIK9d9ucKLzphdbjpwW4JQVhDp1sXmonELandNlgz%2BcQx3J5%2FMuKbvZHOtlCuyn1u81BTbawy%2Bq6GbHgkvEK6JAciIURArj6YhHetOTISTvVMWLLMiD03HyE%2FjFR%2BRHNhQOg5mmuf6DTtRMQ%2Bpww%2Bcg0%2BZ&X-Amz-Signature=361cccfe4a077756193e664262cc3077e8a4682f253b0d1eaf7e416d321c347b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5VY3FS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIKMDoCgwbUKm63xaFtZiXSrn9WwjdjxjWgb%2BWz0iXgAiBbes49NEeXgN9o0gHxrEiAS5WH6eB8n3FOGtRIgGAGiSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMalsZQcHdj7CmJhUPKtwDvqI4fh8HWt%2FNkbdjpQIc7PY%2BHg6MtI%2B7lNGn5YqMAHP8GnB7P%2FCEpM%2FpU7LFk1zOZbtNJjfycFdizR08ZtJc92LuD%2BiBG16DXyWst0pAHx7pSfO8HM7aXkyXguExbRZVhvAE7HvlP4OGld1RyeH%2Focevx1ZqfKMNa8J%2Fu3o9dVOCOTL3M%2B4IGlH87%2Bnkkkvn1U2B07aW%2F%2FXrJHTQVO0UJY7fBsNcXBFKHzv5%2BpY6hm5YyH7D5oo%2BHKVcINUsnZGDPNSTWH7Vmlir7tqQNE7MHFeTncHZ5xtsaiWv%2FdCEJ5w1Zdakq8YD85BXYLJGowsqNgsvQZJX51S3hrnzg%2BwcebyZTvIWSUy8cOSZJvxKQRtg7%2BJarjMyU3sdTO0Ja6WtOAgTHKJXzEJrpObGpy6gK7RyhiDIZsPfzrabPIf%2BzULEcvOQMm3uGCruDqtryuJH2aD%2BggvLFfAwkAGBPjg%2FV2aWYR%2F%2BogZKK2wWzgMPx300tS86tAhgM7ZVPEjqiOpyY5nlLMqTUkQaF4E4Ns1q%2BqbZbcUliP065812EF%2Bcb1kJKEjyoIicT7ONKqm%2Fh3RNu9jAqL8vFX17afzpxKz1BoA9x%2FX7TDHV8RyHPuvbLXBO920hqsK%2B5sTvfeMw04fTwwY6pgHohNiFrLnD8v4KMcNXMaXwI0os41Y4gaQPn8QbGWg66GbY7cNDTflehd6bn8YloPGHHW4hEKNEZNaCl8Jo1HSEo7j5mtip%2FbsdOwQFMgw0Aje3IsohE25iSWHsyA3wMg2a%2F7sDWtqlKg2VHx%2FBpQKrmWB6cm0pEvbme7vnmMZ1p0%2FQLK258BCUebe6htFv08TyB3UWowMgaQFIsUrHVhh10Tb5PK97&X-Amz-Signature=76f4e74ec1bc76ada9a2a74426cfe976e1fb8b75bd824d2e12670fd525a11171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
