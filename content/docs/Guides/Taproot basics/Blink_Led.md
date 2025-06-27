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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRBLJGM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEtzUYkhpPRqd4ZFAIpmlkECaebKZA%2BUkakQShjSm0JRAiBU8NgDT1Zg5JISM2b%2B4CVET7xrG8QUKdsmG4%2BUPEsodir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGURdaNQtbfltmfvFKtwD%2BT0fCIM63dzetUqr0l57Df58MI0u7WPXCZeZy9CdRzMZldZatIO88legGJtc1V3bi4PAVDtK2GKPe4fjNfUC2pEM04qJkc2rDsBuqsjdPWVa2iMudYX1lrMRhp6snTdMwzWg%2BltHWA2%2FiAPFeCAeUpcc2eqA8zn7xb7tm9L4Hl8akCL%2FpYsR1neT7HtvM9OBXBrbFgBcOTHPL59Fpw8yvghP1Lkl7IDdbpRqwEqf1N3HRrvIGgMX8%2Fo7RsUX29r1JKlO7R4xJtatnM%2FtxEI7lh%2FAGPf1tznuM8FcGY7eP6e45ZgCy6BPBVUUu%2F5nqKBB1TmW2QRzZycfwlowMS%2BSeWh3bV%2FYhITsRT%2FLrR4XlB5Vt2mI5%2B4yT%2FiDsBYVRrarSfZK8nGjoZRAf8nhECLBTJdPH19UStmn4%2B1s8gW%2BAwaqTFDNU5yQAypJ5LpIawF10XQQcsnbVv9n1Rf0ZiiYpg1PzMQO%2FyLXFQclihjdMtlUco5G0z4lI3gTUDYEd56sdzk6d9LypcDMlfD%2BbkNQu4GqS3cGZc49PRjp1%2FWoLmMK456w6moUq9CM1%2B2Nd8WrfAyBp5Gf1q6YhNP0pLrknchU8%2FI8jQdrpK%2FUqpikITnMhUIiRejM6yVj%2BEow8NP5wgY6pgFUfzGvvhabBzog5DuK1EXoJ2d429Fp5XHTjy3gg3KRmyrnS1qCtZSMPc3SCs8np6MfBVgMdQNpOFZXI2eHXbGSSnYhYHbbnvo4UD5UAWiRcgnmpyT6FmsrZ3dyXjxlWcpJa9FKy1ay4mtX%2FmOhTVvMfpkAxi1dy%2FNc%2Fgx8h9kXs1QxYF2IutHVYr5HJNMxy7qYlNrBG3XLJM%2FXliCBf%2B%2BEP%2BJTjAdI&X-Amz-Signature=8bc02a299afc742f192a9b15f792a1123223622b5666f3091c19f6cfb9819fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6GPTY4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIG4tL0a4CTFRCqciflKWpFtohNNm0WQlUR%2BjkoMDr9vmAiEA8oqKksDIvQckJZmWMr1WMH7l%2FtO%2BX3kbBfdmfb6by9Mq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKx4yn%2Fi85QratY8CyrcA%2BHCuCuy0I05w5yf5qUmfNzu8PYZ6RmLkiPQ97y1suh%2BsPWZK%2B6C4Pgkz0JFZB1ZwcJO%2BGW0mBWmNIXSX7SQEbCAMvsxtME0T8e0mNpWM9ODiIAwKTPRX1AKpxt9SDJ1AOOcUbF0Lxb2LOISY3wWsK%2FCPjHQWVtQvb9ARiqSxGF1ebsxmfyjvECc%2BJ%2FYljHEw9pElFBZhFwnB8aIrIOAykr4nn2TYiMDTNBKUDNLHlmC9J5JJMw9aPbXM%2BuFgLIvGpyCZkHoJX5RSTWO6Fxd3YU3SDMoVq4wVi45sbrVJBTv7mGXjFQjnbhxcm4TVH%2BnzmAP6sP3lCIa2Yeh63K7%2Bcud3fne%2FNbziVmrrtZnIy8%2F2sHPhl3OD5h7dApxk5XJeO9HGsInTPB7Z%2Br9R07T5B1mIJCR6m4Mgt3rtDRMRydRbPvfb%2F4tYDKm9Hjm9hu%2FQuMiHrd9fCY%2F1Ji1gUvbzTHTQMNGB3Y6qD9DPCI19FyLKrWgj1KYQ0liWYQsVAHcmhjYQo4iIdD2sSdeY2OctPmrmG4QK30rhbu4JnVoq0ueH8OkxEAtos0xK7r7FMTdHDcMiHxkAxN8IXXLPnlj%2FdMWjUhzGLlzndKDQgcKm0pduPcqWpjv8FascRwuMIvU%2BcIGOqUBpjtGqf4v3bV%2Bxa3O9NmupXtX6DpesfodLNjnqjxY7m0aW4YZTE4ZGAhTfZGVQjiUBUykqa0CQSP1y2J8QZP1ZVuHzQBeOO%2ButRTVX3MZ7%2BfyO%2FoF0m3ufwL02f2WrNZzpxQs4fRJWB6SZyxqf%2BBe3Lw221WY%2FeHIf%2Fc5Gy5VWY9E7SOETTyjKbgHPCd2xbLiIgEcHqrhnsKYiuZXWYu3Wl8MBZF4&X-Amz-Signature=c4b817a472c5308ce4d43722c62000d6ed66400284531f9c55ed3e69e9be8d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
