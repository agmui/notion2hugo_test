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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5YF4N7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDngqaCH9GUxFJmnTRTkdxBK1Y6uLoMkAEPhfFAOQuxuwIgXzsVszwcs5VKJ3hlaRaV1IvTNqtXMejgTT5qwR6bUucqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIV1Lr%2BVdeVMQvrbPSrcAzNxhKZ4fcI2Ui7cArPTwlLjqngd7BJHYwl%2FoO7fdr%2FiuI%2BYTKURmvo6PlHjzWnuCfr%2BIqNGAVlGASxy2HM2Tl7yQXLg2fSKfBza6B08SMTqm1OLo9bazcWxyoQx2ZBavcyE%2BegvPEBNfsRDeIFYCqyFepmvM62CpOAjpaoJk%2FDPWERymkvk5M6rkoBLPPYGxiIr1on%2B%2FHrDe9QzxJU0tgiAjf2IDwkKvT6w12P0FCjO9SId6liIcnHhWlwv5O6J3SAyIqw%2F5tek0H8CDhNv7l6dCFkAZqSrlpwwAeD875GLMeBSgCZpKn2fIPVFeJHfIjgy6CqML%2F3iNyF4A704ohCN96l13GsHjxfoQBCl475xCoRrfDHz8wAndRjZMVMaCFNbabZwDkibLMQ%2FvJd1qUCbVQlejwDLi9tAfw6CFB9lW4jbxfNEnXuZnIPk2WiPjKLR4I0Ae1GKUjwE8pkaj68tFpPoLxhA2Rx3df1gQvb2yae8OUAppSuo4Jmi8wPoqYdnJ1HIKP5sDWtSWp%2FTDQ20ci%2BNxhNodH7IXkYJuIiqycDwEFPoqCOLY29WGKbY4EsfGdbJi%2BXeNpaIdAHTnfZe3gjkDdB6t5BDRgHTaxlVNlnTLgso0HTEAxaAMJSVjL4GOqUBrsp6jFsNKw73J27a0Mbl6u3EjVBVPZeeXXro83vdDkeSKMozhaMpJBHDMT33OSNyp3LiQbCmOeioxViBTVfSo0feWaHX616FeM4zkDaHD4qYITsjpBK%2FHJKY8OAFyk%2FYjD7ugFKKJcaqWD1Ypc6k2Jt9COSzYNYQjhdtuJdiVBTeAD1jN44nqBVh5MokZjZF4GAkPkkcAO47c8EuFI%2FEZZoKXky3&X-Amz-Signature=c1a3b3656f9b5ec990b8dd28a26b03b70cf03174ef8bd959dc4d6039ff973c27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6ARFRW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCWq4kxRKM%2F1DMyOQjW%2Fgq%2F6C5tzK%2BMO720Q5z0SEzCBwIgKJpZPSdo0Kjf%2BSOE4XwTZc2jX5O25LAbC4MdkYLmKdoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYGQ4JoGoMdrygguSrcA9X0Ox9ftwMItdeQROf3ojoBkUh3BWyYwyH1AXCJNOWGdkFEpu0pjTHrDW%2FHJIkuuZ7s3ulOf5Gpw6bC%2Bg6c8Mqu9cnOG1xMqX7VqiAW4B63AjGM9c%2B09gLQq4WtJoQ4Tjxry1JlG50XxKHIi1VtpVuw7oYvR4uPgrZz0SeB1fizJvUXanvgZHapirzxrIdddyM4XUxxzwhb8x1%2FgaP2Ad6uVNmtDpaNmiMeCd%2FGxw5bXQa%2BlTohuap3bvLYCaF6oj2HTqnLqBDbjahjqZwra2M32va4VUarsYaOGwY5Y41vFogiTcX25uqTjCo0cK6at0pSAXMqCUpsaeKzE49jfVIs32NyN3%2BCbTxveS0g%2F%2BZ5qHneycQIgi61STsuuOOMO0E3B5BRMFX8bAfUIWFwyxGS%2F6sx2eOZCwqgfyGMvV6HmOnPOFAo8H4tTBInKNFsFlqCQKF8d%2FbU1dHY0IwgeU0bm1MjNpT1vy3EcFMvVtXj3dUN%2BjfAzu8bGRR0sc2gIPh3aYqye6QXUbG6nx4BlZb2MZaYwQyxq7s0dD5HN52lQRtyqxPb3OPdRq2%2BC4uob57csS1POEcvS4Cdp5DKrOdoPNjCKAqeTPt7%2Ffpd%2Bq5fw0bU0WmQXawTAFpeMMOVjL4GOqUBgDKlsI3YbquvU0dd4ToKoiqONosePjTCQeH%2FNKIr5HnObCz2h5y6wHkOxHKcOpROgjylORw76doFjhHIcX9PK6TAJV5NIJN2UdfJV88Hbm2%2FgZ3DVS6uyXG9PDm7HbDvNeICUZRG%2BEA3QtDY4YOFcZynDWQCm4PPJBCWVSUF4MH4zfVsIvHcMglfwjFNOviG%2FkgOKXFRZPuLiMYxAkkFgPSYGUjM&X-Amz-Signature=54e46d32745308ece3636e7e8aea7681f95f83ed25efa96bf80e3e1fd94603c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
