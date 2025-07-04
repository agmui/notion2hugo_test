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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EL56Z6A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHsQFtVp58%2FgxMRh11hGIzBwJHKZlcVGMP9CcSc1pREVAiEApK1RPlTXr6xu5jqF9WQMUHJdSEuymFI7ivcYX0k2mTAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNaE5MkNiN5jnoJnxSrcA0Wmjk5fuKt4MJ1TfpJsz3QxwQ8Y2yH0lpOa6pNbnakHTN8rS7m%2FuKa84wfLsuvvy1M74gPzUNKZ1MudRQSAcOPs3IbJdYIp0AvgXATw6LgXFgYyKTlMA%2BKH%2BA%2FUniwLLZIQwv%2FfwnC4EJ5xKUrGkXb67aoTBsLsKHoThBSNoRSWIQvIusbVR1ZbuK1UfGSDCe%2B53mZQCIgXaV1TgFS0X%2Bb%2FkMrMoUaGOWhuH8P8c38aCnqFL3o29s6TAJ4baH%2F0OTxQ0%2BHAHY8N%2FlQ%2Fpe3Y5%2FARP%2B6UYRbS2RhcKphSPMH0uiuswOKngk6Lz9o5f9TToLHx7JTC2qH6OE7ATS1NSV2TvvI7pzpLZm2tUss1MCVtKfCs2xuHX6%2FulTrFLRRHyhF%2BeDyHz4On5u7cmSAoWlfLkPosRhtEDsG8nG74wUCBwVd0p%2BHM5VAr8E1KlLGRb%2FQ7lsCoLoz6TJvaYBXqWcFtjsQR6MOJ1hHet4T7vSZFwtoiyMlh0oeRkU8TKWFFy6mowMPkrr3Pp%2BiNygmJO2uBWIVvdEdRNxfbAJOOChEuVpK7nyAid%2Fp97YHtaQERIhNv5Gn3OfflG7jOjbB%2Boa0D2vQeY6b%2B0%2FadfS0%2FfuHYqBUPNPfFrtc9LqG4MLq9nsMGOqUBFpnahj97l6aIs1M6RcnCaCrJq58Vs4V8kIUW%2B%2FfZ2qtQhatJvZ%2BbgQOcfBeWtMuFVDYt%2F2xAq%2BGCJDMwmDw69IkUuZEAPtCmY91eno6Ms7N9vk6stSBv8ZDy38Pbbjhq4h08c34uS3xIm760h5YvOckYO%2BR63M6rSMxBzwcVHNygojCclAxgfNirQ5lHvIXTd1agHmkCNXL35VsPB9bZSjNjfoNe&X-Amz-Signature=0de2944b8cae1f0e06d9de434dbbc9a01c7b4a9727bd6bfc130fb786cfcaff71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXHJNZRS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAoOxuOHnRYEx%2B8ryLPVG1SIAi5WizfC7dyLQGSgz1BuAiBUGkRt5VUh%2Fd5sP%2BsHoIRBa4aqQJGXy0B4CmQ041uvqir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV0rcV0HilLl%2Fnp%2BjKtwDmzv012XfpY%2BnSxwEBMVvXva5WHNWgJiQmxew%2Fncw19rNKICPLsRdLsnjl9BrEpUK%2FyOgLvP4u4tfc6mfOIVTcIlvpPaaKMjAny9%2Fo5M091XVp446kwVbxXPmSWWDgyEl1ebcGc2T9cP6RuytbTdqbKhNKWeeb03Rz4%2BChnM0fvuiAiAIHwCKS2fHTJRRSF2E1xehrLTs%2B4rC0GF1qbHdpH35fddtsqtug9owcIHXnejmGzSXLHXAghFOiSCZ0OsRHAh5Ag9HRFIN9KavRc2LJIvdY62Q7grVsIz%2F8lyogTNPBQJ%2BlzGRAw0fmC%2FHK50VWVv8GUing2aaqM4vkgY2jn8hPL3wRDHbdTgqeB4XJ%2FHZ59THD1%2FSIR%2BiweqSai4c1wyOytxKXiqJ10ixlIeK0OLqMm1028fD3FNZWcaJkj0HPUNHmzHSw0aOtw3nsHQNqXd7G%2F6Hd%2BAwiXQc4J0XO4dMeNd3GO4oNDkXH9NCbwAJEDwaw5635B6moFGWZuSc2TGY%2FgIrN2n5na6OenNpyfaSGpj%2BJ5xhcbA9i7YT23egL8huI17k9Bsy2Ln8BzMpdnHbXOzsiBlzKo7TQDlafQR9YNHT5yr5iOcu9MrG99fETwZUXJiNU9bJvEYwuL2ewwY6pgFJ4zOVawTrNvIpnuab%2FN4zhJiJ1jQmPr%2Fgh5Qi%2FLRIxUNXztewLKyLOvugt3Eut%2FgnzzEsNC83HnBc6%2Fcx0rn9%2F2I4PGoAgIPMCDj7qupDLJ02DRaTHAX%2FskTjg%2FoTzRmkhiDOXIFfflcoX%2BKA8LFNpk73NNiyRPLj21G2akskoPGk0SZZvITqxcQ8S%2Fx7vnk75QcyV5l1DizqdUxChodp9XYrEVmA&X-Amz-Signature=20f5fea48a30e25fb05dd1cfcd94a990857722682d4b456caf8180f11127a286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
