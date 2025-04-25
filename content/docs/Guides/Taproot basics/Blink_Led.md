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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5XW3DV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyQArzCkNCdvf8pcwj4wWjHNeDU5TkxrUQBONnaCBgtAiBaZCN2jghYyKK6MKli2FSEtzxnTUplMQ0ESvPCkMQeUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYWGHVHulfDyMD%2BNUKtwD2GK%2BHZcvnJUQjx44XJbeAdSKVqE4q7GkkGWPsuhdwFtfCHMak%2B173atdivhKe3vQG5pBSFZR5DVYe6k5T0Ts%2FKNGrsjP3l%2BqOeA5PIfiwodEdbcHx7zyNq%2BGcXwMjL1JPhUWMLWrLqWMe1n4i8S%2FNraGXDrL25S8CeVvh4D%2BLXle%2FuMtT5wJ%2BETl5TKVjcv58HInWOnZXA0JQQ10CeHrMCKDDvYIs7BgeStWv33d3FmmC7cpc1JycmpITfzra1w6XFd2erfSrQuwwHRdeZ%2BG8Dg0jLUPFH%2BXNvU6018YOjhBG7q%2BckprsC8Epi%2BmN5yhDXztIlVBcyk%2FhVQwMVEWijsFIoAOT8Tr3txUg20cpYYyU%2FoJ2zf9SigWax4OC4ohgrrA9POhU0UEhanA%2F0U5P7zmXdEvTmFEcn991ZEJ4dcEBhmWa1THU13UYTMAMjttsR8jD2qg%2F7xov5LQ3OhYqI8XpXBHOZG7Uxz4uNoc2oKbmpo07814sW0qOYx77XxxmwiypiaENyAUDFL5Zt7R8HDwhGy8fJZRr0B9RHoxcbcOQCRXe79JujSveXlv0zeLdvTBCWJkKAaOoIOZZoBNwt%2B8O8NmpVdCp%2BR7iJpS8I8Ngf0OilW%2BNbrrJ5owr%2FqrwAY6pgEj4oVy%2F0aWexQc8VoFR7VOFYfOJcDeVd2qOJCxGXr0zKCPt64y67NvGOyb4cfUv%2FYo78XTJU%2FZVba6Pjep8yd0nSFKytZTBeKIAFxfdZhvKmqG3xf1%2BS%2F2djeUFHZdJT23KupaTiicWCsNHpqZ%2F7v%2FfN90GHkgg0J5zMC45enL4QRk13IMxa%2BPyyElIltbHFUDMgrMTorldBXEBc%2BRL3ugahe8vWZh&X-Amz-Signature=80fcfa81ccb4ecda30d580eab4a795d4ef68863b615cecbeed05fe7e75ce4000&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7OFFIT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4SXtHIf5qA7JVjZha04zuBlndbSSo%2FeZo43yd7Mdz8wIhAPGrhYwQ5UW1yibQ9m8OWv1cqEuMYGWbQe3Ensu6Ef95Kv8DCCQQABoMNjM3NDIzMTgzODA1Igwh3EUQWJka1NV1HLgq3AMhqY2a8pChFb3nRK%2Fd9jgZ6eBm%2FlZUyhcCXX66xsGT9T5fbcrWerCjOdq2JSqcU2kd9%2BsbOwqtdRCDqtCJwH9D3gFPI0pfuHCj0imT7dD1V3VOIXZ1KAQGZVrzba834TxiGB6RA8BlDalmYLxAUhS8wzzNtu4kQnDkJkkJP2qMlTFdjQrpvBCinnJKDIKXJeBoYOTutJ3voBjWrnGe0eyoeuTe7Uj0b%2FcIqnCEcV5XYukw1DhH5aVnR%2F8txnmgKrT7Mari%2F9TJdHA2NBhInVoX2SpMeWphG%2FeFazIyFDxYwOKiBnU%2Ft%2F2L3sZBudekE%2FjVAHZ6lurW%2BfYijm5UTNzqw3RiiNUjXxvPtf1SkJmtxnOyV70nMfStrcdmD3rxjXj1uMU0Lv8NLdQJpLa0BDMAW0gi3st4ZNTkGeJIw4R%2BFoqoR3fWIuJKUYHbAFzg3Us1NB7inU5lGY8Mg0eIIFLL0f275kJOTBRkWer6wPyFjdm4%2BXt0SeTDE3olTyscgeQBK4o%2Ffowfm1zsyOASLSXoDVneYTtHb%2B%2Blqx9aGUpsFLlEsrNon4zCZJquyY%2BrpSHZEkoNLap4LtF86QW9PkKJzrx3nAd%2FAclmY%2FZrV21fQDKcrB6YAtuw7Av3wTCC%2BqvABjqkAW%2FSkr394gX%2FNBjFhPF3N2DsHVN65V3upjmcvTnX39fOZSt%2BeRL8kXcn4zVvdTFH58K8%2BeEEKL4LVVAktJzusYzVCZg%2FdY87US%2BH1CximlUrFkfV%2B0EVOLgyodyVE4L0BQEPpZDdJ6RFtUCT0YIOQJM9M1gLfKm3bokeDQKDn55KPSC63a1grabWu8Keg13U8Esnbh9uFUBjM4%2F4BoAgSbrfJ1CW&X-Amz-Signature=3729b3e721790386c7d293eaf789bfb2a30f2d7ebfcb294eb5603ea52068649c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
