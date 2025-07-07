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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VSHL5QG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2OiaQvx4j%2BVrefIikkwu9q5Wwo6fApiJ6S5Wg%2BLmvBwIgcrsozdgxsQ05pitv%2F63FA2vBvk%2F9i2GBgfuy0nnfKDUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDK%2BaulqmB9A3NNCADircAwg2hAYE4vpgbzAadmMk9fLQFvTzWp20rG2xbN47ae%2FbBd7joX3u5ny%2FBRV%2FxCFDCrHvHYNndj9M68yjsSIB7S4qa06%2F8PwGV52nLqicIq%2Bqnik7AU%2B4k4w83VUWJtsXDt4EZo4QHsv8S4k94Tr09u1bCrnQk%2BJhkHkFimdt6UJTCD60pZw%2F%2FLMY9YTiuaUJnk2zVA0bdtC7EnYvmdwDeGEMRYNRt0YA4p5N5554C8cm8At1JdGsgGxZUXF%2FRmjiRAhNonJ3i2dQDhCIh0lU9e8i%2Bo33hfHlEdp3116IjkgKYd0uJ%2FazkUKFlHMBVLobpC%2B%2BCtfyTN4Z7bmHioi8mOKNM7g3yWjgSxTARj%2FsVRm0YMHOavnY8zzCx1bSNiLC7osgvTpyNjcCuddl4z4f4ls6%2FRYdYFr%2BdoAD%2Bm24%2BAJbFxmAG2qTDNzSo17kWjVdh%2FW3wgTj8UunYzU3hBIbwqQirnS721dNeddEAbDR0aIDJHK%2FbiRl7SKGowySEW3a1lTY6Ef11jxN%2B4ZKYlE6HbzzDMt1Ha9sPvfTaHiQrDAXMLa8MIYzOcbSDEla1XgzOnuUGTwuzVdghpZSLtXeBNTwBW9sMlKOar2MWiYgjRBwULUkNNTbLa7ScbvCMJ2Lr8MGOqUBKLf6vzKr8QfMmtxcNwdvPRwbKpyA7ga5eHHBIpvcQ36kKDuROl9Ru4qIjb0tCqPOjrNMPy1YG8Reljcvxeh6ySQMz9F0AeCzThWLJVgCxvyz9llmjoYLcSl5jngaGEyFcyVv8PnpTQUwMQwEEVYG%2FeyIoKImeXTrFqujClpGE6OT%2BIsfPmFhcXwG8YM1ltTee3A5yzbMylcKiaYEcXsYppM5Zyur&X-Amz-Signature=bf6b8fdc790c73e4c423f0e1360c07ed98aff8c0db0138e90f74336c7810da57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LBGXFO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIE%2BcTjuQuDMliCBDtwkUZ0aPGNgZVvT5TYgHTsxc6YynAiAMPKJfwcA%2BRo2fgW8xag2LRx3N1ILn90QNd3mCtNa4ECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMZCWcTe06hpN37yCAKtwDCrc%2BVqXWIDxWMBrsy2N3zqBnPl%2BY7pTHQHoSfMG8dyL8gg6KD%2FePNfhLe60uFwQa8NvJYjC22PeK6hn%2Fr0lQa3viKSTMfZeVvCWwLItceaLo4Ctf%2FOuyEtmLdP26I8x5LmC%2BDH15iDMTp6Xx%2BqBLEPs%2B8SETyPy278qnlQzmXTMmJwakFK6MZAjy8JwqD9gWu%2FWh3L0wdsF%2BqZK3Go2FHoHKSvZ0vQlSUSEKW0QN0MMwfTEDDK2gA6dC4L7jFjq1ooVPiw9%2FfwKmay8idkb1Gi1MpVKA6%2F5enEa%2BuAPtuCiXBngSze5edPCDSFhcolAIOqa1Da9jW5XBKeZ6bNTYN7RePRe1Ttemsclp2f80QFBIvNqxJfiYn4lzm2TnSFONABXER0ffcrfE7HfvMYAd6md9JVogfvM%2FCR50Tw%2FYjifSGevpr4NwNMj6DDzQGPpqMnhifKtzOfp%2Bv7oqztAaM0FoG6a%2FPoFJvqtwBZGMtoJg8YeX7UrJMZuij1oI39PJTtnjAJh%2FEt%2FV6Vo9351dhax%2BJvxFX2yH5xlbOAqzbX8jmIn4uu%2BhMjCpz0W5IDg7vPQpzB8EACM4lm%2FhdSPNI5znmS0EU2OnKfiewam7Aa8ykr4lbe%2F9K%2FwjR8cw9ouvwwY6pgE0TEGRIchs61pFcz%2FZlr930%2FzRbzGbyNI8QP8KUycuW9BBVXbigpDU8EziGZoON5YXEPoAJWcOI4f3IwvQwBZ%2FGtbb87fECUv9%2BgZgVSzp2oTXOlmfKcOi3nDuvRwZ9BuJrx80LliOzkfpeq036YGZYVZYE2JQudZv%2F36fQaLdiydCawiGf4npAQZmvgR3IJUVtW9ov5XjGcRgOyKwCXZnc5iBncIO&X-Amz-Signature=ec42c776a3fb5c63ca481b1284648252da179617fd616766af3aa107ea838350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
