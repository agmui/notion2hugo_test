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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTEYMTU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDlI8qm6uyp9OUWgrUKVcdypKh4VZCgipRuANTQ0isdnAiEAzyXUdmgZ2aSACq07N%2FB5RwNNcN5IRV5151jUQ2y%2Bs6Yq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBjVAOc29xQeo%2FRD9CrcAwwSFqI%2BX4mZdKK2EB4LzFRPAgBRCkM52F7lyLYBQXfSJ8OCHHMFdpXsvASOek9zsBbuQ3cKPk7LSHo%2B%2FHjFnBSlwDJTvfS%2FnTlfgMNOAJgswpfKc3yohEl0a8Fogy2NCD1Eba2ZMBwcKpChL32edHHVkS%2FcZayBMwHqwmqQyFsHIzrdLIHc1y4Hrn3RmevyZMUrGXSq8eRcMV4jZANxmWm%2FmkZO8iUVx0ja2qalVt6dP1QXZu%2B48sGuCEcPic8kyuT7u2yICWY8VZUU2r7u0%2FPqtp1jMrtSUZH%2ByGdgMUxZJMfgH3aY%2FN%2FLD5cjOcqxYjmJG%2BneTex4kYWnKY6JEdtVf2lXPUuYSkYbih1VgH0q1HQCndOjL4p9SPoqLFfrhO9odqZbDMtxl8c82Zy5TrGquzZgMsJTKnL6WL%2FJYCEk%2BH9dGNwdUDSEExR2YYTCFVmEOM36K4TdlSvTFOGhSP74X%2BHe7Hf%2BNumX1aBEXfCOHqpm7nJ1q7PeoPGIbmAzEswA9HgVBxeb1GfVZOAfPZC1fR5EaSnpA27Jb4eG7FjUkU%2BJi2GMAlWW8jCaMIn8pv4a8dzyxQCW9IlcxN35m%2BJmhfF1zk1h1zdqA8%2B4SXlidDfVwyPikmXg9TzJMNbmxL0GOqUBWUvs4mi%2Fx94mmBE40BlE9c3TL7Qq6dJh2dI%2BYNiZjyiNltJaWfF6M4mO8X2xqIDeGcv53KUhR53eLXa2k0bO7nKyV6EGC9JTSj8Xi1JIUD%2B%2BITT1ns9ytpzjTuV3Rn973IU6Xv41PyhZc3%2FAYC5bF40x3nLEfle1BLlp2wGq5ru4AvB6N1SeaVrEC%2F%2Brz7jnSmX5q0iZxtJw7zHoVVCalCs64D%2BQ&X-Amz-Signature=a0228af0418dcc2887782c1661c38b871de2cab3c989c21eab411cc00f8e462a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI5AIBPZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCA%2FlPBL0IKQqhMR%2BV1gzNoyYa3MA%2B%2FZ4E4h9TR4ViD%2BAIgezjR47QXbh6hbLjI8wSol42Tid3KC17Fv%2Fwghzv%2FLCoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFA7JuGQ6uHoMiOGoircA06xmg52xcM6OVqAFPW6jqA4lhObEXI5%2BLK0SnpWaZ%2BwQxgUnAaA16Dln%2BxfL0qQ6iIzC3jJaGKBgpVBEozw5hk0DcwEaMJiutg1H0dFa6Pbx2Z%2FUS8Bk6Umk7LgUjKiCqAYDyb863gR8i7GxvgMUTzSWKl7T1JfyZ16SzPL6GeKCjGtwLSw9jsYa%2FMPasB%2B9%2BIlwVsNqanRcb07i3U9veqpA0HkMfoKBNb0dotAjjXGcLm3gGznIeDKM2L73AKoPtPynVij05AdeLI6ylcQTvdixBdT3NoFKtSr0z4zN1%2FGgk5r5E7ZPTrNkoipoxCoxxsp640ENq8WpEsdhortUPSe2VaqG34NuxcUa0WkwlyWcS520jdiLPw%2BD0cL1Gvfp2GUrLghyzJVD9LaTLo7SoFzjc8rrDCnqkxvzpY3lk7qdqEydprusOhM0%2F6yw%2Bbe%2FvqYy%2FapgiBIP8TwfWhwwYjzvJ%2BQN6ye26NNhqRenF5gLsen7GZ%2FjlDCPv3rWoFKkCZADLlvlKb3DDuyibTU1G%2ByJSzLjzQpN%2BbO3d2cc9WBOvGhAjAfTW8TPAqWD7Z39OJS4z0z6qJuaV5rPiXio7KXFfXCM9Xkd%2BeYn8Nx88subbZFaJzIeUTlv67oMNPlxL0GOqUBAflA1ZvLs%2F8n3YKwmY7pJHNKQzltqDwTNlC%2BCYCLkYuYCJuwNffPLxuQQ0xC%2FhKb0Zmp5wKzkd1mEzxZg2X37TlGSD5340gP4mQxfeHKg8naJ85JPlPKhXE67hSGvyo%2FW0QXzzGMo91fqssVNoP%2FFMh35sWJuJu7ozXG3bNi8%2B2XsnFA%2Fl7NvW4bU2z6sYDvHFg8K8mG9ZI96cqaTyhiAGeY4Uve&X-Amz-Signature=4dd7bd65ecd932151e53de3121333fb7d137e8aacca76025e60712ed60558bca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
