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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDPEX5G%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc2MNApDNeauYnRFyz53b8rTeqZrIzT5JnC1Yws4KWoQIgcrv77K59rNi9DW7SyqCu9q%2BIhydgiyig8TVcGooylOQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGF41UZwxdBg%2BuM3ircA%2BfbIsBA8AOg1F%2FRsLqYcdLiTUQ1PtAljt5Wae8j3VFS8EQPDY4%2BGC3BqP6zHPvAN0JyGj7e2nwjm%2F7yqv3iKeAELWMHBCA7fUeWHpc9WEkfkD0iuyxnJ%2BhoNpbt27frhwOIHEv5ZEWs4INTDBffqOjjmuxMErJdB1RdRUv8jER0%2FA50z5wvyJcUguONMUXIRhEETVDMCJTxFH0a8j4pbIr1hWm0jDwvfX3UQ%2F8F7YPP7SnidNtG677SJCYdF0XysEaiPmx3jvxXveh574updsCSHuNrdTjGbph7ahiNIX%2FSH4i7gdjHc65faS2lLWGkKYkD513DsAK76Pc24PDYCeHRhcQZaJ%2BLLBXkEdTG7K%2Bo5bQV6eZwqQHo6Lq%2FDbMPzLHVEExBB%2B3VKnrZxp42onYJTGZdoJvnvbf1c9I3bn17AS9eGE%2BMKIrfLfjDtOCuuSQZPL7S9wLgH2TnBCAGJGAWzYhyQMrwrt1V%2FsTf7jVTKQk9xX2w0%2F7hgr8fMyMDkdrSaEz9Z7%2FehWnjNrUn4gbZGWSoVWYq0CfVK8OqlbL6XempvoN9W5%2B1S5xJWYzJjjV3IcyxMd7ksCcu5%2BJYYww867rHQbtX7otIYowmAs%2ByaZW4nSOTOK7kGFtAMOrW%2BsMGOqUB7%2FRDiHC1xe277eo%2Fit%2F4BayLHvpSSV1Vgo3H19w2Q%2FlUBsfAVrfJcEfanRhyZxLnVbTxKLwarEnfqle3VXg41H%2Bf2JLb%2B29ixxzfMfpSYJrz0AH%2BrwPrsZMHLNFZgw7AOQy0xL7fXAEp%2BYA20kGgySrcI5KST4McC%2B0ybz%2FoYMpBRTqxnvJ0ENHP02PlrEA20DdpZ13mglxVMNZmOYuxIIXEk9bT&X-Amz-Signature=55ee4effa78e51e100edb6689e2032ef2c90f82573fa0da9817f49889f41562b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKPE4C2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChke5dRaDVgPD97wEXcxKFip%2BZS1UY%2FYwqOuZp%2B6Gd8gIhAM6K3fmlHfbwi7525GSG2EhBcoYe4q4HHpHsEuGbCcFhKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfoduZ3Bx1NaNEKYMq3AOhB7HeyT0UrPOEIx9soSj0qG8OcUWOapslBznS2lcfcRMhU5MX3H80jKjJqGKTb%2FhRm7QLtwsPDXMT%2F09GEZFADX4QoRUGMh4QYR9oLRLD%2B67o89oIEVnzOHN%2F2%2FncAXQKZhOr5iilZVuPKmDII3ucMkgHR88XiHqTKYJ3FF6QckHf8AHECDE17oljiyewpo7liUbtxRl9%2FUzVilvwdl%2BP5SdeSTtilT87C51vGUqXCLHcz95MIu4w45Ivq2e7jp5FQmxks%2BrDF49gqysQyMDv8J8QCqu50vHqewVvObpbJJgUjjSXOwQ2rTh9g0L%2B1WJ%2BYevjnYPugdGMKUdyMwIL1VnXQEXEn3QCSj0eC5uZcy2KNisZnPW5udY1YFLgcICEIf6QiNXtkhgRTSvryxgXxPfOQr6N0I%2B4BLZkcvXP1D7iiD%2BBnQOWRJSJQnVNdfiUKUpcFcHyRuOl7hMyYv%2FMTnFFbhABfn%2FBVylDNeQPFtKAzhqbusWJePs3XVRkbm5GV%2FIzyTM1AHwQTF5zuQUxf6lLbrltz5dh6N7QTzprhOotEfWe821ulqw2hKAi1mlMd9xoh6GnFsTKETYuPzZDf9QvhGkMqwgRTzfLtyJkEIqDLkm9WxZXh4dHvTCL1%2FrDBjqkAaoDcw5SjB6H0OQLkLfsY2mgMFRgVn5OkH%2F47V2wmc%2FubHpgi1Ulf8rl8qBsJLgqk%2BqPTMClUHzTOfMKLiZb9kjZxIwcY9kkEL%2FAvrLKJHQzVF%2FfbkZNYTnqdo01VwoGYFWk2%2FEplirvEM1sGeDyQnUQRCjoapDZvUvSAznwPf%2FYw2DOPEEhBtGzGkHYPUxR2P5ipJVv%2FTm7x5%2F5TaXZWOimcK4G&X-Amz-Signature=da6129892ef90a8d6741ccaaa29f8917f41fbdb1744b6d7910ca3d44d2099ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
