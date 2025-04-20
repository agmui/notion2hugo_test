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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WFCEVC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCPGGZEV4g94zW9YDDHZqUtroDZnOr5T4O7BsQ0Gg3mtAIhAId2RCsHqkSosXVxgJZK%2BYLWsljj3PbIFjKfYnn9Qj2WKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1bcV9U8N2%2FwhzJTgq3AMpIuqVKGuXIV4DP1g5Tr0QJibc93%2FMk4NAGDc7Bc18K6nrT44KQVPBEnkhHHvQt%2B3QWgoLYcL5WpBSZzCRFCHkyK%2F17JqXsJujnJrWNo1IgCxSyKTi9CE9T7HapGFMXqaKEqxJXCwDqIur%2F8R5uqjowxHj2eWBydqBcnaq1rosmYTndXzH3g8dyCfIm54Kr4ekfIJBm%2Bd9cBdSDDLg%2F6H2Q7N9HqIE0%2BuEUDWY%2FB%2Fx11xTNmx%2BGAzjvW%2FQFaayYFnedzvThwhtu8hW%2B9cGtBFojg6c4ZxJ2vSbkGNkfvmjQFz7CPI5gr42EWTvAeZKsP08Flos6MeZogeyR%2BJDe9ILFsG1cWDwQTQUr3bB7WGax6oN%2BJnP5EcTyFgQJFuDjR7K4qjFdwHUlEcnP3hJfPa3nSBKhbdImLkEJR%2BNvzX2uRWpnNAFweB5Y3D34WH9JZk%2FwykAq8qqeCTkB34WnEUSnegj8KoUNIvbaFywwHxclRQxQPp7m3Dk7fkzIB%2B9rpJihEbIViMqEiqc9Qw68SFX%2B9YhW%2B%2BdqzQg0GQtBu0TAAY3WE8Wa41iiypsqIUPuckFDsJP1WTmCbxbQZs9vKANJcxFEqaqUWJXSF4MvVrAAZ1R1RPq5bzXkY4wvjDbx5PABjqkAT6DQvjsASYgd%2Fh2OlEgNqmCo%2BChN%2B6%2BghLyJN%2F8QwZ4oNWlTnt8lx71tmCpck6bHm9vMDQLXJrRRReFic5kxqa2Gh%2F4CM5G0KdnT1I%2F2t8QukkaBkijj7f6qblwTuS1BR9luPtiX%2FulbeN%2F%2BTQJVSKk2Q%2FgVw8q8HLFp7oKBeqdjXLqJjCjci%2F40HnpFOj3tWoy5kco16J6bv6YPjveCvY6wQrt&X-Amz-Signature=c25b4c4c19751be5946adf100648a6b139570cac5b9f28315282717ca4bc55f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNPY76K%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAEwrHKBIkQLLXyWY8V4rV4KWcbbJtHYZrir%2BTANinkiAiEA3buU8bLY0SeqnWsv1xwY%2BBnyWAM9vwhn3vOp3f1%2F440qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgWPWhMlSdImyKARSrcA4Cztl%2B2ddXhZZBJXvPySlchwvt4qoOHQ0zc%2FU46tnYvb0rfpJbfpswIcbKNpYGu0uPNiLLbex7Oo41LQ3fVLe0YZzqckM1mbHE8y75aJSmYSh3w3QRPYfBo9NgYDqQVUgE%2BtdBa5fGvFikurslqGMEwVQOBOFvyEcIRCy6Xk2OBzCslVmkt2R5XR1m7JvHU2Bi%2FZCg8xffqR8y1cc724Ism8PyS24TlyfYQEUfUZGf3gg9wtErz8dWNdOkXpCZry3nJzHSvBQUYUpn3QaALle7bbvbu7Lte9R4EARWvL4r5%2BM2z4HHjVnBni9ZmgRw%2BYmWYyyB0U7xnGz%2FYOZTanEyOXPh%2FiQpoKWbnozDNa93Dc5xFbhd8pkfFHGHIhSSaqFkkFZ0Wek153IZzXIlxScHRpigbf6bGEXvJqa5sMy8vU7bupbDikja2rhQaQympw%2BANtG2LFHSsf2hgArZNDCBuNC5WuHuf%2BJFEmyBN2%2FBdZKEJsvrFnKb8seFhJgkJRHflGGr8QGvzYohUlAsPjXEcIEDyPqkoL1j1sbWKVnpaw8leXPpxGuNr7Rwyfy3mS1cPGtCNgtQRTsX%2B2C25zAHsaq4ducgUVEHl%2F%2BkMVHuLETZ2RRmx0haFLqaKMM%2B2k8AGOqUBSpNwO81GNxoeft3NfXn973hat%2FbiwY3lk%2F4mzGh%2FhHtqNODimhnJ04hBux1B%2FCeu1crP1bAHTXH3UYM4svvoHx%2BQ3pO%2FAQ0aEBfanlZU8AoWI%2BzIyoJkpMLEzUTXHeOL5qzzb1x2jv1XvFMFDWd0sHKRtL5%2Bp43DjISNSEskSzE9sloJz1%2BLWh7L9Sdl1Mc9yhAJzcdPbnWPBdINQ%2FAEP%2BxOh7tx&X-Amz-Signature=24de7b918e4ae0d536669cde4a4d3975762c65f55a50ad93be92c46b47672fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
