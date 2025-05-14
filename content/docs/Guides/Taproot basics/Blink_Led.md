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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ED3IC6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC8bCcPejeBAXUbkhfTKil4Mskb4Ep3sWSlHlvWjehiJAiEAj12herIUqKeqP3ulgzS6wthHS7hBW03Cnupa0I7sICoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGmfsishyb3eY2AqECrcA1jixp4POGecgwUyzHM6EjwMtzJYPifWNewKth5Ptin%2FTNp00HpI%2BKk%2Fo%2FsRq6cXTwWGAVwezmG3oNkMe8VmEU8DE3enIbzZxUAgLLA1Qr8NU0Fx%2FK1XewQUlkmGgF9h%2BU73KkDe83Da75Th90fuuFvHS4XFJ30TWCo70scNs274V9g46WEWDQCPXPZoE8Snr8oT5opZCiCq4Oj2a%2FaJAsLnlphkI8rA4ZmDMwLH%2F0MzKkfGbq3CVtm7vH1fa44E8CGCiD9YOwwPJ4nAoIr%2ByM7deCD8bYHG5OruZIc%2FxHWzTaU6uZYQ4hqvKo4h1bHPryCQzlPdiQMYB1Z820Usa0Or0OEGGcI2ytGYdiysuyaDoFWw%2FYVkjVGSJAgJ%2B7EwZq3oVEPb6FLgsjav2zmexcNBjYqDirHV2gDMAkVCxoOiFJfLy6%2B%2FCGujOMEqUsjsjARh1UGvbhuzzghZsPp05OMkROiqe9VCEejAlK1qjU%2FQCyHsSkKnrrrD8zu0176%2FhxDPsB2tzme8pzYWBa6TgRe%2F6NbPXfEBw8EpsVpzRMDjugUPht5rh7JisKCIP29qsZnEzK91tpsLVsJmF4n%2BCKob%2BG1SSW1QQEK2iLInFejBetczANDnzXppgbj7MIq6lMEGOqUBicpvXAtSV3%2BSRkpiE9VtCjsJ%2BW5B0EMMMMtLxshgSuU63gV0NR4x4mcdJ6mZ9CZ8iz4n71bHSi1pibstGFmzxDLc1SDXbW8pnv2iuKmqcOo41sE6PEr%2FryZOGZe6g8lptVyOXZ72z2pRuJdyWehfSz6DMYvtPwdhJ9RfVp9aIaJtLoHsVb%2FXt4om38Dtc98TYTy33GfAK71I497wj620lbsXS1TR&X-Amz-Signature=88431bc1645ad0ccc2593016a20f6a1f038dfcb003221664af8ac2015708b664&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAA2K2I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzvU342pT8s3LpESH2QLI5PDOTrCesadRMBbDKDgKALAIhAIY8JAopBaN0XfPwOffelC9IG%2FUhj8fMmgjMVRkWJSH3Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxPihch7hMMXoX7kPsq3AOrTEsocqk74g0bZ0QIXecd0C0SkfL2tDJpy7ZRYJf2P3TdJqYjFLspXIApzRAvfRu8vDN2ZNblmkT125cO1qCDNkLkhgP3cZkVfggCJOV2CuOI31LNylsEruWdvyKIzlrovYj6YyAGowMfr5Z%2F%2F4GYsicLqBWnAiBMgI6tLpTNrardxPEClYQP%2FrRMwT1YTOt%2FFAksTlFmqejMZ0c2lQ%2BttlKfwDefjqb7%2FyvJm405tzLyteEc%2FNAlEnKi5wOChP5fV8oL7tgJAxJHqLc7I4lO%2Bm4SHHG62R8DA41tEpNO%2BbLsDiKVPtSdBZbMztEdWOjy1ACDQnZOHKfR1%2F83ktSPgpaE0iK4u5UncR76ZIYAQaqcKbT8T%2B4X9sgkaEbuqrB7vPplcyyqt016oURIuEqrVA14GCbt8UoWHmiNX2SrdxqIn1YU3UGE77SyiI%2FAkRKzrsRuf84DwNTWXTrYxmuo4yBlA9mltdh%2BSJN4d6GQB7KlPFVvpGNf%2BGSWcvDHArVG%2FHWGQ2yCipa2ptxLHbaOUEMr6X5aU5otEkXXIgdo%2FMUZujVzHUg%2F2%2BTaXcjSLd1Ih7hIu3tLsPzmiSXZ9hHuwlJPPsnianch2ZTRmgWMTsENv5s40IZsEvz4RzCLupTBBjqkAX4LU1q6HNhP17nyE5i6AOqif7iC4QA7nM2pt15M4H28zHULH66xTy797LGEn3htoixYH7fkAoUK8UgPnGDA7vVn7jg4BGUTwlCLD909zvaSBDTmfqLU7pXN6TZtYh3rJDQmmr9Vfz6deabKZRJ9Vv1NgC85avQ4pwRvp7fCpwfU0Eat8YQhIzPh%2FkETtMzXBJGHx67Vujbb69TfdP6ZztxqIq2I&X-Amz-Signature=1501415a638aa67ddfdc003f05c96d01f612a6cd7b43509f52039b599ec68229&X-Amz-SignedHeaders=host&x-id=GetObject)

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
