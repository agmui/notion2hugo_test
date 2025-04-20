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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZRM5WT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGLZJ5x8Z7MSE6c1TSYw%2FYbnR3G9HxJsnCWhxtIdMQhmAiEA%2FTA61VgH3oY9nyAOFyxL%2BmKoQtww1gX4qrPETC2JB9sqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwNNTp5neviXX9tZyrcA7wbYW8gLbXA9N1Op1trPGrnxEbPXU6SxSt66p9M1ouFWDZ1FHhDimNr9%2B1mRjfXpTHnCpRyVNuys62rdtzE1yWG3eeMlvYzpEHXRSo7REdgJFdusqiDVEgG4ZozyAUdbbbVvBQ2rNkNE8KbyxV3Rlta%2B4X3Ep81VnNiS%2B9gXXDLH2e8FnM5ocFILS7xt5Dk1Xmujk2%2Bd9Nq10o83oYWNkoLoEUV%2F1%2FV8QfmPcbQS8gywha9qbb%2FWo0HfYO2pCZqxb6l96N9CvvNqwVxUg7704jKvfJCcbW04CyFS0nuLg9xjbh9W7dqxzFkmz1A53D1xNsUQ%2B%2F6SX%2BahT5GPXEHjg4RsmdME19X7hmkLddBHHZ%2FLQv8GFDtz1wuWDXsho2ogUM7%2BmQXeAw%2Bwd0KC3ctcDZiQxvyX%2FRaPhsvq6M2fqLycYHHbYSaYPNG9dk%2BUkqH5Su2nCifoK5FqFkA5keUCLJ%2FpikU2wbFkGG19SuAvpIWv68JsU38xuaPweWsEpnIsF%2F2h8m3P%2BrwZbOMZGbnMDZpBuDjzstx%2FVwWpSHec2wmvv7vLa7qAu82TlJMRUFiXLaFlw9G58%2F64lKbMkHgT3%2Bc0u5cpJukoDctUuMX7sAf48Mm1AB%2FkfkVMuV8MPCBkcAGOqUBrAKKGjfmygULWF6MSw3t3i%2Bp2TrS8Oz0gWk4xnokQF8V5ZelLT%2Bditlzyd3UaAXPNXnnAE1Cu3bGUrbG9r3Gs%2Fdddyp8qRzOuQf2dUmX7ZNLXFGxnI1P9NUgjJ5iqhrE%2BTfH9kJ9GbkxFXJPFP4NowTD3FUaDYADrIix93ei5U7qCiAqmE%2BCZWRL1xByNRQ1w9On7X2bTDveZu4cmobSI1TjY3vP&X-Amz-Signature=b3d75fe6ed55790e8d5b4d45829001ca28d98c60d87da5de272d03e38d0d5564&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HP3563%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBIyRZ49GMAfPwhGwVPTDaGKJFhzyKGFo3oVK8U8bgBxAiEA6qhfDqGCkZsVI9vMkiQiJ%2F9Lw3VeVRWsZLf88IqAhW8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtSB4fzj%2BxyBv6XCyrcA6YOl2k%2FGzKq26mfTrUV2tEWUqnTyfCjFoqfXb5my%2FGvGBPzjyHJSYz7jZ4%2B8Bk4aCMNfW3M9ls5y3d9wcVy1marvGiBrkVyqu%2B7Uuwq1rivIJAmdrSjv7%2Ft%2F17rsHcqpePrQYkzxXbuMjc2T49nzzwCNJkjjstH4iMy0VS2Dj1f5ccrLxBGYBXY0Oa3nir590Gb0fFFoVm3Xp%2Fb0EKoo6F5EE6Lo9Oh5W5o9XcyhRxJjA6Vq%2FaQ64ujb%2B53WzShxXQ1sxDG55lHW3g9zPSvmKW%2B8p0hEgitGutnPvFttQznGhglsd0yRVb4bCCdQDhXrIpAh2bFy5IdE5vM5rpRHW%2BDrtzrmIr7Cv58EyYvtApE8oNtCUa8D9ybyIAAMQBziARTfEQkc%2BI6PpKXydZY39wSQ2%2FMn57zZD1afc7%2BFUV%2Fj6HsVbLFYLnMr1syeAEgpZ071YFj7zVXlvF20ZXg8J16T%2Ff5u97AwCr7gM7C8YpZjhlCLDa9npVUrQOo0JOindshtv8c9xt00BwIYqIW8kq8cFo7oV%2B8FLG4fWJh7f%2BjTCUZ1PdS7gEgFZ4jH0rP06ZiC4ANVfBOUCBiRSiI%2BcaxZArxGAw4JtGpSY98tNxJGi%2BI8IKKsIYjPUx9MMmdksAGOqUBKaCPjj0%2FFskYsvIc9JGsDeccYXYSFJEQouqzBisyR4sp5kiuvsKYVMVA%2B9xwOcSGYdZrPUsA9Az8ZhdPkuxwFuCcEAQtxl5sDtHb7PV9BumglkOPjx2UxahlYyQn9QQy1dT3wtxiaMw6vxG9ZfbwAW5tNF1N9Er2oFGTt6qqe4DhPfURR2WALXsVKBAbHokmaG6liBBQKl8kYZQCuv7tzSgKWJRX&X-Amz-Signature=9cd0d04f06dff1943f0fe0b17af1fd27b0d3f1a57cab15270ac7d6af0806905c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
