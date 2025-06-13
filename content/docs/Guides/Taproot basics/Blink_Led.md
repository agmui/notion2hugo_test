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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXGNPE3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDstHw3ENhwEoM0PtiocdDsmqJtfyz3Y9NX29UjzART4gIgLtxVoJEUBH1kpM8mDOViD95zzGoTTSCc3DBR%2FPnQU6cqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO8BAbVaPLuBlCE9CrcA%2BSd0VsPMdxwmJ%2FIMp3FMOHkJmZMnUttN0gQom%2Fn6ImyCXZMr%2Fkac9nw3g%2Bhqr4QntV2lgIiOnaIdzO7axPguiggKjX%2Fp2z%2BDXuY0WRfNhpPiHGVdKNPRNgL1Q%2BwttZK%2FXx7PQqAEGm3os2pMKRIpnoF8LbIOu8JjN9RnaElmoeUWqGfQeuBY8zinonyKZNomqGzdXcOwv%2Bbn7RH7NhDqEiVJ70GYAL2N%2F8KPifu1Rp5YPhFgg0Wevl7Esly1xjffM7bdgOxvjVeOhG5TxtbwvsiDm6Pnsc9DhKspiWzgeD5cUOOHjVDhpQcjRBm8ZMXeKEGcLZ6iPLFgPR9aWXyVxB3aScI0BYQ63U7KUzGp2GLuEjBcc%2BJ9YPM7idzc2TvbWabQR6k3kx4TR9CGmV8aL%2B91DL7k0tUb2itQ4oFP%2FqRBURQ%2Bkp6evlZa0B68w%2Fyad5J1MKieFkwVA5Gdf8fkARLGCHgXYehXkFkxwzftem8HjCKAPOlud32DgF4sn60vaqdAy1qYktLzSaK3KK2NCi39yKRdKwCS5QLMbBSifN7YxrPDwuczKlhPmSB9nuwEwUxktNdqCZvJfQHd2y23W1ZnyX%2FCOrcEPdCwR8Z0XWlU1ZnEY4MFsj98GaQMI7frsIGOqUBishE60Q2J80zUf7hx5BelzWLr9VBF%2F%2BUwFuYg2ffy1I0mTBq6PFsGJSnWzO5dXb%2B6WfUvt5yGfL98VcIDNhC%2F8%2B7eFILMoo6N5JQ9Umv1WV9gSsUGvtGyU7sBFy55WDSEXK0%2FsNiIDXnKnykU41XummKHwXyBu%2FHPj9%2FUKB4iKOsAWLLIKocKBgLqXH2XPYtdZTDqiyJoQoEa71Y6y47WE%2FngYS3&X-Amz-Signature=4c78f5bf2344198dcba0223595b1936b16260eb747abbbc6d93348c2d7d520ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TBH532%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDtrTijsQRDBAlhZ20FE0eu2%2Btg51QtEIp9UxZaRVV5eAIgaUSw8Jc4jFXaDATM0JTaslHf%2FTXzQITrYcXcoa%2FpIncqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKT1qrECj35rONV%2BmyrcA0UuGEG68E2XsTM%2F9KsQ1pYmGIjjPsFL7QSbcn9v3d82XTLfvLXZHE1x7Kkj51XsAHY7hsiFy3Nc1qIwXKN5VB2jVlBRE%2FvpYwWH4rLx%2FKd8Y0y9raRfNfd8Nj%2FScHS1l2EoNJ%2BVPYfKoUgbZXsTroeHahieP2HxVaAjrw0ka1DimLhPfT7vAKsXPjRVSqlTJGTz297KEumt2HNaOuqLdHXVeotFeV1zhgeEvTUfDcVr3Wk8cn402fQaGYAv6tL6VvF6k6vqra7ebnx4DAvL5QsdN8dbgR%2FaqejqjcKQO4KzsSK0mLiTpK1%2ByqcdxdBTlGCNAeMYMx7cia9%2Fi8dELgNBKyWnbsebrDDl3CSRshnyj2GqyAWNUrKLbOm4FhLfU%2BKarrh3dHhsDPQotSs0MBsSIMZkLyvRzL95DkoWnqOwdrx%2B3IOQXL6buWVQUr5k6t3NXf6QXShIR1hZmfCpuWZ3ecFV0HWpDfZmcZM4B1%2BPCPReVLYadr91P4ydBf1PBDHWNHy7SKujGmJVcSzlm%2FNZMhtGHi%2BTReTkIVt4vOViEi2k4oyAn%2Bs%2B4cQmBPSj0%2Bg8PenZOw%2BqA%2B1BTK3aWx3HzjwiNhhlUgnuHktGwO5SAYcNLdnqvtsMxvT8MLjOrsIGOqUBoq%2FpZ%2FY67BRkEr5aDYs%2FiCJ%2BQl31kkf2ZYuDiNKRGGgnsc9snH3UY2ctJ3nRgF4DtGhg%2B2Juac%2Fr2%2B9y2oObhY9G4%2FUT5PODK0EkQvEf8KBAWcBNwfkU70zliUk5VH9J8QwkoAOe5llb%2BO%2FvDO5d%2BWWdcH073lktdCVU8mkqMkEchewx9CVatXZTzNSW0EkhkXRd95jb30erquUnih5PbrlNK4eq&X-Amz-Signature=a2a8e913bbc1f3c6cdc034899d4362dbdcffe5a9fbde1e1092fdaeb4d4b6ac2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
