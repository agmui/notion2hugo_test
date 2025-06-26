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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAY2AC6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIFknAYnf3Uncp6EM1VwmpR36R3hYmAZ1WqC2n1u10Vn5AiAatSq%2Fnz7%2FP0c9Q6izfgznskaDQyWQy%2Bici8n66wkpqir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2Bj2EiAUwA7FKx6W6KtwDoBX4OXslKcv5LWfOe55DHu%2Bc6p6R7pcesWdRjjAVnpztTXrNV6DC5uh9%2F0mfcmHV9umechhcqt32xNMZkZS6b%2BoDtWWISyOkbN4ZGZc70atwKnfU1Mu7u3I7CgXH96Xz9SV%2BXGr846j8r947UMh8Z8Al1%2F07GS33bbpApb2LPOQTEtihYfpJXeSZMrgeWxw5rj27cCJldxNp8qzXyw5voZmJDQeSbBLFXPW5lpA2Cb0Es%2BlRiNP0Era5tWEZLJP91rrQ2r7Fj34YmcoXp1fx6vlLEJRJmufUcJf2gph21ogd1wbna%2FFlD2Av4bajxQoj9zxKdAMbzY6Zic8J69CwkjqcIHqKGUfDTOZRmknPGtVZO0GXhoiuYzTyj1fOWs6L6v5SHdhhzOPYiqiNUNsy2vqL39mC0WyQWc3AMBjMui9NHklPLD8eBs1cHqvDkN49hoKPqvR36bfI1O6USYe7Nflbq5EFy9w9DnnN%2BsicnPghNodN0w9w8ZvpoFR8%2B6%2F6ZMjzqrOh9MgZrXiqNtSmNyLimVabJ3TsfGuJISEG0ArsdbRf50XApzd%2BqmI8FqeL4OiqK5gmJfLYl%2Bzfp%2FYajf9NHQBqT9gqMI9vvwsdL%2Bqt7eR136JgShyTUnowoInzwgY6pgFf8T8t%2BuC1oOAKEO7Fk14zaVflVIsQHaEQEd5WRIgm2U1yym1n0G3mxFiPyNFzscI7f4Io1Hf7mh7eGXEq1AqiE9ievZU4vUUFSMWuc1XdcyMF1IiFlwuvvnYTSjOG5uHxnzxfd34NPTDR70iEdcJ0oXzjSASE4zzQMcg0nxl75hK61wPuq8kA%2BmeBj%2FlV17iuPgb2S6O2zHcQG6RBQu0DB4b3Az%2FZ&X-Amz-Signature=0bb3e3f09ec52406d0122c010f52e8716bb37c1ca706d38be3053a004a575071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW3BVMXQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDJBs%2FFZR%2BxVKxALfVBNN9yl3Bhv2LLkLyEctI1Z44lDAiBYfQS74X53M9Zsq0NZUGlbKrcBimbE9Ad5ySeGOIt4gSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMjcnhEWFDvk2L1uK4KtwD2J6Fku41RhnNHyqOLRBPMfHNg7CQGcMrkmimmv4v9ghFtm5mpYs0izRGDJ96IpaKuNN5TkgaRRXhCz7W0zQ%2Ba6pYRvVTaWWR2dFwafOjgV%2FeDFQ1%2Bx2zmvcN6ba4hVLYzTSdxNGt%2BtmQnDnqSlWcR51CiV9j2JNk%2FI%2F796FqVwmgOZIabqAGrlya1Xc1secOP7maAlCfrw3wrNQDMCmP91%2F8teDrcuby7TsvhxwqX8mrO5RE11LmfralIbnAV2sryiiz%2Bu9owIEsxP8M66mz3j1KpPnquIfQfdWQiyLRPeenmgs5HF79b9ZY0HzWFtX8Ojovw4Jxz6hoQxziRtS1OXxeAA3r8IfgLoAQDEQuVY3e5mUAYX4sDyQbhRshWecjoGlUy8PDRTz1%2By5SdQeqEZZfViTTr8DE5k%2FLhZjy8VWKLSTGiupbAEZ6RrCxAmA0ieQZtkwV7MTTMwxehKiuLfbcn3oqO%2BIfsagQtCWbOP9CMgONuc3FrbURFic92VgILs1VP%2FPl3qWVFCvbChC8jMDIf7k%2BmwUHlcEgs%2F8ApCR6eo8eR0cq6070NqAo19hhp6bGvQcSPZG0BLz%2BQBaH5GGbjYMJa1wwhOkmNaIJVeVVG6xk4bNwPtl9MGYwkYnzwgY6pgEHjDcth2HXMuHtetCn4fKA91%2FDLaYwZ2pPszoa8L4%2BrwJKmMLJ9ncKUJ3ssrq8XMCKvzZMAjMaDllTKTlTxbzQzn8AtQS%2FeGbM29h58dPDoU0MXMGfVoWworbpzOa1Td6a%2BEjyG3oJJG84CYexNW6CrXXhD92LTGzSoMqCq4%2BHyn%2F1DWszCTtQLbhjV3jT%2BhbzIDtu0dBBfwjyRMJPdSQfgdEKjc%2FB&X-Amz-Signature=26f3c97e48384632b007d8b8d8a97fc32ecd2efaf2bd64e44221f48dba8516dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
