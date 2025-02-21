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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXXWY2V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpBDD3PBT3qrijk%2Bh3dmaQ95wudonGZAn5C79EWi68iAiAVNFpVqk2W304QOPqXjsRala7e3452vEDPhg2tMVKC4CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsLbKoybb6vNVs3Y9KtwD2IgQaGctK8w8rRT%2Fy4xR%2BD7tpGdQ0WnA0n4%2BCiV%2FPzvFU1kaG7vkwCI7hJM1tBklN9ESINh%2FthQAkjL2i605l5tSDN23ek6fWugMFgvJ0fqmMLt6HeWykiCJExpG%2FxJgEIuyoTzobMAd%2F%2BTRZnLSLkUtSmb0z0H3jcXCcDRx080in7tbDcbx%2BmOR0RQdDMmBVL9UaymfZoUpZs20oyavnlOzzfuSVjw50zBedC3dipqVo1jGRYOXLF6QpmdRKZ4OSCcd%2F4N71pZtmkrHRmULJHb7PZMU1hihhnCqKj9OwUeAkw%2BjEClMxTjFWno1YauXiAuz1jar87GxLxX7MCz%2BDP4OrzsXbNp6PbN5%2F08E6lflpwLfkyJJkr8PEbc9SxWY%2Fd%2BWjJPKn7fbR1li7g9bO5IHruR75kj8dI4AKad4DLJXOqdUZBmVkqSRfjngBnV8Y2TJLXjITnTeK7uIQNSW3ML%2FMPFZg8LdUnOb%2FnjzKpReKfS6JS6PuXRJzE04YYwfxCj1lIGBgQkyhIF4cYAsMuNh2umYULSYl4Dvwl0Qz7R2kYOXmoS7wj2T8narOH%2Bm6IXesS0OfFrSSrrsc6HtHLWkCsb8vdZ2Qcu%2BEHlSgI4FsAVC2KWUCvLGR0Aw%2BqLgvQY6pgHaSlwWshAb%2Bnile5%2BuMA8AzW%2FMEkLSh%2FczTUB0TyBa6nE3Noi6Qrs%2F93IDHUYfdiQ73IhZoyWed%2Bd7UnnBgaPDmSPHN4zkDdJ7J2B1DEIIQVQUGvPASQedl4Brqy%2F%2FzHA18jMwRPuwYxlgmqjtVASNOn7aUmCqIhxaM%2FnTG4OAGUYsPJJ583Ey5t%2Fo%2FLl54HaY9u3ieVLLzBRI0p%2FZ7x6WEagUqHb%2F&X-Amz-Signature=5ca6384763e3ca20cfae79546b8ea1d125f64077f05fda2d73c60bbf14c75db5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVC7SVGG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BGJtNVA7B6731zPlY%2F4RuJuz8BXUWYED82Q5LPtMvOAiEAigWoJdBw4bz9vkp4uIJPch%2BXMCYI8rabSKeeRHJhx5EqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsj1jxTOJvooIBBUSrcA6c4lqHOybXwfmv7nSuOWiLEWjFPsSo0kHbTYGJoYIWq9e3aNbFWug%2Bap7bw3w7HYai9eQFDCJipY%2F7L7Vv2foJKQiGXLixtY%2FxuajEAm3PpAiq5e9dqzUtoIrvexrOlGUfJ7PKRa8lZqmZQbZskUBLNv3yJhqpF3TuWy8Hi0gB2cRCHAORy9jzZmn9UtfjWK9Hgc2jhvfMiktR%2BmwwqK3ifF2j9dNg4BOZKjdnGmwxw9HgL4W5Zke%2F9Yf1kJ60qgzdtA4NcmhWzuW20xqdYFQ3iQn%2BfW9bqtB7yd9Z1f36RTHL3xzzH4npo5s%2FviHsSi3DbGnnuAFdE3JCgP5rRoRc3GrYsQqxQhiXkTPInz6u8pdFCNh425yASn84HgitZsx5DEMxHqNhVIV0WJjPUVWnqEicPMIq1FNBAkDdunfS3bpDLXLz6XafY3ZalzRx5IMjr675tgFMWynuyXYghpR9NeO%2BCqSiGK7V611tzft0KvnwdWl4%2Fbn2Q%2FNzwStpoqpQur3UVESBP69dwKZTmi6br%2FXXeBwcjMGFYYfUia6qR5sykoCDMJYWMbVTIv%2BvXzs1aTuSmQMsrMw2FOlcwNjjSfWaCM9NlR87Fxz3YAnizAmm8z3cDpXruSeTPMIuj4L0GOqUBkigv6La6GqmLnrox7GRW1hcTl3lu8aAvFQVbPuRAlx5DNCU0MQg4gpMmKYwmS5Jp%2Bd5NWYqgsiFsd%2BPCNSzQ3rvkf%2B463k8nZEvRud%2FjaT9Xnt0QU1LQqdMnOwzqCd%2FOGxOx9OUln9ZQHQOxgUe67ZW2ST76CB%2BsnztcSe7H1gKRr8ZFEe132FAYJXUpmua4LihXkdb3RDYheV2sUqEl2OTDqxPf&X-Amz-Signature=a3af5e9839bc851219640186ed471f458233c7389f55cf4b91f34920163f05f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
