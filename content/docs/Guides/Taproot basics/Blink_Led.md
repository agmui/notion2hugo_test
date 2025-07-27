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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLOEMZG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIA3CJapNVY9b%2BQ4tmwWIuso6BzLdxAD6lkQ2cbFY%2B4LTAiEA9AU8tFKKFvZx4OPu92yl%2BtDBoMBzZGI6AlRnvgd%2Fy0sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL%2B%2B08%2F7%2FKwjl2oKGSrcA35xr3EYBsGZOu0oP5MBOv%2BbGGEhDWhG2oG0XMgFqeKL6fmlrXfrmP%2Fo%2B4Bbhuhm0gjdxAhGZ1zjSJwtuc21R6giPIy3pHCJdzaWGAzSWxFaydzzLYyaiNzr4hU6noo9TiWcwVv6HTQETKveFK1jan0sy9OJ7xF5N%2FNNTkHfZAz2xrqg%2BX%2BfTHD3zUFrThnj8pwgwrLnG5MD4SAvQw3zO3QzzmzU1mvStt3%2FpAC5qumKZar8gIzEWz%2BEPuRqtj5UKINQYzgMWzk5WBeNX58xnMsej1Vf1wpyXx3gsAbx1uOd8Wcem0qzfU7SoN1ZSq1fMj4MOQKtISPk9LshTzJ%2BwPLeNKGiQzBKjA%2By9tld6m1XZBGkFzPZqpA%2FkC0U0Uq0wNtLElAQDWC5XjgXPBgZhScqnSds%2Bo83GMi%2FTvX6cLfdgn58yv5qDkQA%2FrNOqlglzsTDvdLekbmXV5yY6%2FLZy2ftTJG71JvZjiVD12rJhyvfecOt1k4G2zTjEeK%2BZaU5XKWTI6ilF8m2MqUYi0ZPranEUzInjU2Hq%2FNprfujEqvI6PgoyEnjyi8U6owxWR2qiNl%2Bh5Owyga7PplSxztCskziS3Blp6uVSmJ7pP5eYiRoXGr9q5rj4Gwy3waLMPbbl8QGOqUBSWCd2rkzwnujv%2FSXwhGHjChZ78EulAQZS51wNxnSc6C7D2v7Njt6Moxs0cCy8ZJPbRgIMyZ8aY6l0inu3zz2dCSKpmGVVYjsL0AD1SFgW0XJWQnYresK75Ka%2BIIhaCP0LdGlFj4BTcxaQDNQONKjfhmANvTRSExRH4NsLQ4OP8%2FlDPwqGqz4gpKQv2RkaubBjON5%2BJvnJE4agp2eSuVq3t9zsndm&X-Amz-Signature=0acc3b6ccebbec2380389de2f837985fbc30e451cdd1a0e90e853eee4eb14126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPU347GN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCAywKo%2BzP%2Fi0bAQVnGu2TKjATkzN7pgT6HsXlOK0g51AIgaVI0gno%2BwwRVaG%2FfD74snq84PDj85Y%2BuLM67vOvvMNIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCAmsm5bpxEYd08BfyrcA2FUIJ5vWAqKaWHySaXagxNsCvh4HVuaOIFi2V%2F4mcudEQXru1ROzzQm7jdTU18Xyn2s0va96hBDSqMpFpkdB4yekMTUtH3wjZtoms439%2FenVsuGOe%2BNFd1wFngSkhF9AEmc2uAgOEHrVP6EZia2xx950XtYzWfD2c%2FltlEa5psH6JCtIqXBFS8%2BFFk7k2w0NPegJF0RzJSd36hMnltxwl2PUwcGlqW2f2Vp5%2BAnpLfCEJDDidFkM5pjdBHmhKSgQaKVu8Swxcic%2BwPC4QD97GY2jBGW%2BChbAYDqC0FtoXIW4Z0QPg7SpB5GoNLjJvGSn8QkPxVOlh%2BGFIv0XXVP8v5xTJoR19TUMb0I1d8EzO9R%2Bpqz%2BU3BEIuj00NSVxpU3qZQtrd2hM6Aj1HesL4kHK%2FbALB%2BQyY%2FHbMY23aPy5IePGwKWpD6rot4j53j1w1gnDZ4GUns313d05WjrgKh62bRfdN%2F6pXE4DtJ9DJQy%2F%2BVi5Yr0hzWp2Oba22DzPL%2FDgQd4VkcIZTb6kUiGqjVBATrDW0hiL%2FnSyVcRLWCExtZwI1yaSWX2tYvtv3ixY7zAzIyt4%2FTkshisM6qFpZMCseygmG55uKGHhDvk6zyAiBjSRRSdCA9eNXq2GyfMPnUl8QGOqUBTgqFkBJXy94xHGURijZ47gI8TDoOCWjTVFysTZX6j77vb%2BJ7B2lH9yps1FOYWUjCpRo%2FI9ETsy3yCPBnq8bdLUPHC8nhmwa7OinFHJmMlem79CjLOY%2BwNHqcnW6J8SG0FyF4Zt2Bm%2BMBXN7PYcHCiNeHS%2FuwMhTkMi0%2BWiy57qFufBX%2BAuZQykYnwWOrXhdPEzyIHhl6u9RxY%2FxA6hrQSQ43umLw&X-Amz-Signature=93e7e4cc47f921614a9943ff0b2e5864ea594b4c9c2255e628585d0b132af99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
