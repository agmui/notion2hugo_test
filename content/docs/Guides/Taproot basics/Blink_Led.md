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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAYHK3N%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDtk%2FkXdSVxzD6dXq06biWQhBefqM5eYILW47y9gKpC3AiEAqb8zg0ackxkJtqtIU3wyY6LdIzyvUdkRh5kN6wn1FtQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6AzCjGdtsubT6rOSrcAw5x9eKXBuCelauOLza62bWvtoKgdYBxbqN4p02VM%2FSX5BsFD2SxUhOAcx0Akt5M72cSyR6SsBL5k8Vr5sGuufwzZ3dtejA%2BDgE5qMG%2FUbjcnZ8REAv%2FLSxNiQ5TxojRztL0ibvMkHlH45hTVFcdDgBSvLkP8c0wnfhMk2z93wT7ZeXkO%2B1xvZmh0nDluIsAPf3vXOdvPbUCSOtSSfk4Uy3DX320%2FisIURpR7dn%2BVr%2FAHAoNfw4wSdgoeW2Bmqmm763W1q17rcEBS15tRQjsH8bcPKY%2FT8k2joEN5aLGVifWcxe8hBQcdfN4mpuax4YcRN1zqvgSKX%2F%2BByTzbctN3zFq3B%2FQTBCgL8vs%2F%2BvpOMxMenqI7djp4pB5wg49Pu%2By9b4vphbXRmQkMnF0mdhuP5bGD%2B4sq7HNdtVSkDkcc%2F3%2BAaLDJcuF5HEkhpATWSjMD5CIY%2ByDFQjrVrLQpJEAUvdXikMuadjsI5rpPpXuaKC89MW1XmSjRyqHZrhYVSGnFPSpMN5oml5xc9s26XfDw6VtngReXYbFllC3iKyZlT75lTkcTtxqmSwKyaGMXQBQCvthfi%2BOacfKEMmJBPleV7GX%2FYyPRTzxqc6n4TwOHlVxYviFuX4xk0%2FrkMmdMOrg7b8GOqUBuSyjRjGT3fs2qf5kPehRntMSXsvBHKVJ9GIGS0aoYcGqQpgzwGQAerjXL0KYhLF60RMBSJFqOGbG%2FOp%2ByxpKNVbc1Qx4bjDljlSo2c%2Bm9yU8gJd5vROa9XWjKXgEP3lnMl6e03wfO8Tg%2BCNRsWerV4qQ9Wvg0vBksKN3dLOyxdyj3FTqkdMQgCaj9LQFiLuS22iBhpdcMroIJU7Kl20bseRz7Tef&X-Amz-Signature=645e920b3b34e85b59eef94955e05856b3c74eadeff7a9be09b275f35ceedd27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT56M7IM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDkgWz6%2FMoyBXcFeTzoMkrAV2SWORVyvfj%2BKMF73sMdhQIgYF6PjwrDlkReNk9A5fjnmbAdfjc11dn%2BtJgYUQHXu2sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoBiYH%2Bzn2D1td87SrcA%2FZAMJVV9j6RLKq4b3xI59AcvMQKT%2FjlGQ1qtEucwEqwDPUzYuGlWDjuR2ZQteXb%2FQ4y8X%2B3vlrutnLmQAVITpmOAgT7t9pYlkmYl81KTmZOvcrIRqlVle8LmtQgVijCGGZjXBWJSNskK%2FBdeDKcNuNtxsDzhzlQ2Wz%2B4t2X4PwdQRO85A5DpoQB0rZfnUkQRxUPQD6C7YIFzBnX1YoZIn9KVrIZRKaiz5ME0fw%2BjH7wyY%2FNhoeZUeEtnPGKmsSTXHhsn98MZYS7%2BUPT4WARXJ%2F9QjnigB5deEmqggwt3sFp6YBm1Lnhec9B4OptGKqOVlpcFtTScJLTCj9sCqadMw06rfiWCSGyaWqYOKTLX8go%2B1B7PS3pK1yrdltZEWE4%2BlOmpVOTWwcmxamuiTlE8v24SHiDH3oXCZbix7jTp7hr2qWEKKSwDJzKUSsu%2B72eSvULFchIM0kqRMBhQ8cyDNqZUzJ6f2OWS49jmONnzVCxWSGYGWB5lHgjNO%2BRMNjgz89PBY5zlM14Fr4CWcfX34tsnPS%2FYAXIOdhb1YNNs45vcxSsTkPFAmUX8BVOaHxvL6Y%2BUtvjPad%2FEvvPbqF8ouUqO56r%2FlAM2Z1LKI24YtSL%2BlYa%2BUq332e6cxIxMJXh7b8GOqUBcipA4gCBbOs3Lj9EugEt5c1R4Oa6JOJLFS3J960hzRv6SzCaW5m6dwywxajHG4lvDEpD0QVhHcJTQoiGeoXtqJV8L%2FWj7Q7o9nFH9CJdP8N9ko%2FI3aiMFsW0QRVSZbeox4bDYCqJVS5VyUy7qOObUQgScccEuBwGEpYrEqSriIVMEMrum0yZcSuftuIgbiWQCuUnscTdDQ%2FbBTAd18KS2kySDdxx&X-Amz-Signature=891d249e8b397f3d13e5cf5a329da0a585855cbc90e2e3d7c328d89f2436cef6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
