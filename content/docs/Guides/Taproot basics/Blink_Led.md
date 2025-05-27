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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDAOKVU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2c3mPhv26yY%2FDQPr%2FNeTWQYezpqUDaH37X9CVvz41wIhAPc9QISMSmsRnOD68SWSiCZY62hrulBHeiYFuupRznN7Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwcA7WPo2iXwHleH0oq3APREShVeapb4pw2T8MG9Q7p9zJrC2OfvbW2IuztU%2B1VNUfMsQTZIx0h07QqxqVaCaxTryzZPg%2BWGmvX%2FqGPXWbPkaOXYHgnputsSqrOkeLkrxkxJQOztLzoYc%2BbOYvyXXFE9eOUUcmKkZzhfIOQlM171vLFT8FV000GGRBjX3e8MJlk%2BZ9%2B1CLpdBBj42akmQWgf%2F6FzDOsO%2Bm2n4BEDimY5V36MWOaS95d3J%2BIa3ao2yhorDN7Y5wSKS9IM5h1MLquNmqjchODZoZxJC4NlrtxsHeS%2Fc5mtOxuhf6rCYPkv0cmJJFsyZQEDidFpKf7CRAeAdUiHx%2F1IhuAh4CfwaVF0bbbhax8M%2F842VZU65wq9aIwX77xC%2BSfeiLzRoQSRnPvJsy2%2BZzGI3lBNWaStyN%2FYH8wWFX51hberxcPOrIO2fP4bhtGpcSTx%2BoLI6bHFojMQbjBCBbUIzGfIcBgC9sYltlYfd%2BGTLGxnFKUJ2yV9mJNtPIJRxEbZdMNnfvcEe6BAhvvi%2BQfzpZDXI8rOeP21Jfq4ha6%2FKKx4veK10Q5BVZz9mPG8J%2BvetZK%2FNwEU9Mq50gkPV8wJD9rSKdySUV7wx3PdOoqXM7zPlQrtJENtybnW09KGhDp9sKb1TDlltTBBjqkAafb%2FriS3M1cx5iitn%2BHWk8p8D2s7LATljMxsZD7ESJmGN8VYuh%2FiUIYvx1mC%2BygucSKUBIaYaj7BOpXlCKOoB8im5qwfT4GpjobuKREYqmphCqmvaULON5DnNZbv6W38AqdJrtO0LKuWPTlngMwmSJO44URKsRj25QdRi0hyDodvO2MNMMoh3KPBdGKt8N%2BbcIMvrWNLwVpXcFSnvMEWlRBNnPx&X-Amz-Signature=b9803c4304cca795ac321431bb4866af9099ee150e7c11686b2d341dc91cdcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7GLUGY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaRFRJwgniLw2tWh9npnOBKY1jTFyOU823otoN26MDwIhAP%2BbLDrcuuJHkZixgEN5PDnrM5MD62bvkvS9yKGSwyRJKv8DCFIQABoMNjM3NDIzMTgzODA1Igwzionce6ZFoMMyVhgq3AO9XZOZ45zDfehJi9fI4tHJqDMBcgTf7PsKM70ekRug6%2Bv02OsITNy0CCdpjhFFNpJOANuIxbYe8S2LVdz4IT1KuDud%2BXYj9zpmPIhIDD2RT9X%2Fkq6I3u%2BbNJhLn6cnGMfzvy0T2ouko5f%2BGTqTcFxjDKD2rETK2%2FoLDHjnpWTEz0EwFvlNWpHg1PiewHFizPX180PFYNEyBRkgPlbWNtIuxa%2BhlLJUQv%2B9b5ViyGEyNQQ6HSut0h6M88%2BC%2FGcv05nB%2BSfZFP0v26a9p009g3uHEBvV%2BoIt6VX7AISSydsxvXSGlzAkqH%2F2Evsnxsan9MUjMK1NzZp4Oa1UL3dlZFBAtcNu0LVHfhwHDU52RV4b2prHSrX4H5iP1wKkMY4Fsg8YKRt514lLrSY3G70cRekTV29geevzIIEasF97EKYuwT2E3krAOE0YEl0mBZ0ouNniM7NgmLia7wxRLGSK83aYUyqiSJKLlO3myMkzb3mFmUdgqEv3VUjWnmMcCRIeAgGmHatY65qwJJ5%2B778JGFpuwggKfJzSPu8TWYfhaCbhE7IyYuVBTnvaaGfdkkzREzBJ5ZIMsjCdHMeqaXMSbWrgjelIHbOyybm9CeIHzgyf3vYJljPYpmBGz94GoDDUltTBBjqkAZNSjGcu210nd2fvhNSncuGaw2W0gptFCWVPZ%2BE8e113mhN0eHqBbEUiXKL10yQbpNaoQ0dQFp7yUMf1feKLWRuLXiSK%2Fwp9FYOmHi0iRRMTRJHhp2yUK%2B3v9gLxVdNBeWRnGYyt05D6x5v27szyqnusO%2FJhsyko0y3bfJWczk9oL2Ej5YBT36NgB%2BU2wMi3MbYxhtxZN2B5I5%2B7XQf0HuGgq4aM&X-Amz-Signature=5a4f10e73aa4f2bc1dfadce324672bfadebcab2c5e0debdf3d3973db3d5f9835&X-Amz-SignedHeaders=host&x-id=GetObject)

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
