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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUROARLJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAUItYB%2BNLc0WutvQ0uWG%2BY%2FJoEiE5nbz03imArr8aNnAiB6h6u5CAudH2ElnZazSECtDmfZO18GigUZ3AcoxdmNUSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML3hNZUnraqT4%2BoUIKtwDwYo7eJRYeLagdHVOgfdzHzCZCkTmwXQLIpe784PfNLPQoqiwXQSa4%2FXVbpcX3BvqMcFlhHyv0ODOBepU2MK5eEjvhlKD3SuCcAne16ubuH8YtoIT0%2B8FaKWNLmr4AmdNGU%2FXhxO5CFbbeUFdlJwyJwHnRDH4nJ78yIQq8nVqulYA7QLvtlc5girFdJ3l%2F2dQriTK7%2BukItPFKLiuFbkG7NZkhjm%2F%2FzCmw4%2F8E5Zm7tlmSsKoNQCb14m0y4vmRbQjr9VNFsaGXHExvHGWFNC4pQtUYAfV6la67XoQ5Szhm70JB4lFCF2WJNxfQ7NcQNn7AeEIuGAhQfBsJuraBd3LePjRgYVcfubwMW6ZWXMG61qo%2FkFwBbO8HyIDQ2SRsSlkLheGuRE5DM24LIZV%2FL58ZVbX21EolrDrvNDtjhNOMJ8p7bdo55dDc%2B2Im0wFtdzza6YhR2LEFnOAwPXbsYXHUc9QkeTf%2Fu0UKmYL8W8ebtjBXwn18CFX2fawD4Env4RrXoJoS6ptlL%2B4Uv35DVheMlIOEgY%2BMKXOwztQQr0Tut8QLmSh45dGoL%2FBPtsZhdIgdM0QNf1GQTNbWeI9P%2FM9BKTKj4z7BauBfOS9GsfqOEJo9d2RtmyhKkl9byAww4KrvwY6pgGV2qMnfcZVjnE55YEMqC7kq7US1zXoHt5ssE%2FWS1dED3M%2FUz89zwMqbyhryjBrcz6ZJTm8Ws3my7XiFQTOgCL5d06w%2BrGsR0DuhvSt%2Fy0DaBF%2BYCIs43Xd0lphu8Mo8LLzZyPf3DoVPBslTiN7fL0cUBVPlnhP2UXymfEai79vc0KCl3IQ0A4ej13u5SEGM5bu7bpPa1a5JSDVQHOkQ%2F4GbN%2BZcdkY&X-Amz-Signature=880d0964f5975ee404319194a4613a1083f0b9c3a4cfb9e31a883df4e3669644&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZLR5AO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIA4DY4HYs0s56qgU2uPMyhSnRhwiTjyjFdtuqIdaJ4dMAiEAwbJ0aTtKe%2F%2FoquwldOagyBtA6%2BIv1Gi%2FMAWWCIjvDgsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLhcIuAnDUh%2B4J20yrcA%2BvMGite3Qsk57746MNfKNYDjI0FtmIJKRoHR%2FpZQpMIyIf3UvhemJt44sz%2F9oGwpK9iI5uO8EGtvi80jvzvbb2eEHcrWuH1QDzfNFrKMrkg4hE6cySx%2BzN5jzJUekkbEEsunJXpkvyPi58OhBd5%2Fp58ni1avUXT6twT%2BQCvvmlamqUJkMlF1Qw9kc7Xpg1Gbo01zYaXlby%2FNLQOctWCq0tr%2FY%2FhpUjv6LzQ1ymXvJQZH8ClTcbe%2BAp73TNrmijJB7AVjdOoiokI5lKu4OIXOxfDhSpfEPsy%2Br6jd5eNtYFrlyRGD1hFiNtrDQze1l5LObsN81bEmgazE4Z1zE9rZ9i6iIExUV1uK4AKSK2PI66vn7cFjo2eKe%2FnP1rV7r6q8LAxOBRcyntc6BOL6kd4HIUDSy9GkRh%2FGmVt1JdLe87U1KNHKGynYkPyRAcITWPDGwhLgDzme33fRySkoqTVWsBwZsHkgltwZand58oXX9p0%2B%2B0YVFCCO55dFOsKee3aqR%2B068zVTrbanXUp1PQk2lup1R1T3asyNRW4TctxbCKGhI7PSGU54A0M%2BDZUBUC7u5xf5jdtsiqrJt2HoVr7INzo6nQO8J9teO18%2BVBq24SZ08ZAHVNmwA7KDbVcMM2Bq78GOqUB2Knl%2FS0x0jK7Z%2BEWWrJFwvuGUQNrZoWOmlZwKp1F6uNEDekjYcaIpsm2iluyJUI2H5mmjicPYBH7bpPv6ZWMmuNCoePUuBfC4JW4Z85FJfO3Lr7LEkzpwbMGO%2FTkU8LdJUHpiZcRAK%2BIWmmvZmqu9%2BTK9loMuALO4Mh2MfbXHfbrXZhw%2BUotvpxP5Cp7rMa%2Fp9qYzYL7%2F%2FV0IH16teiKbGToVQQY&X-Amz-Signature=eb2f61197a522a8591b50a75afb5c818c61008c5064e2a3dae440fabb2086a24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
