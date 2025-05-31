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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYJHXIA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBNDLVGIbPO%2BsUqsVkYfJu2k%2Brez4D09deejko%2Bb2q9AIgDZNokBw1dbfbgLJVTvaWnfcKQr3EOTYtd9SvJTOnQNsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMizz%2FskvkPK%2Fxw2lCrcAyp7OaIsqp6QngSVctbuKHDbKGR%2BQlJQL3MSlKzFt9EzM%2ByXILbQSHd0OBCzEZwRIUFA2W%2Fd3bz1l9twW%2FXxvJdmsRfng%2FrGHiUYuG3VO3fHnPPdp8zKxoMdPLhGLsUiNz0Mf6PQS4LX0XMWU3X3MkoCjCTwF6Y7BE8%2F%2B4YuzPsRVdTxYA5fMC8YSlNkuznDCq0Qfv00LKsv%2FElz0%2FTzjHBm%2BENyuvFjjYJ8JMcUtI3JJO5wPr7FQp4zZBkb2sPmBLouo8DziFBjhEdvaJ0Q35WVnd0Y%2Fm2apYzrpUyCPUY0UhVgrSDbnwznHpfxOjVV1quWW8qkwTluNJvnVIn6X75Ij1hvC1JdgmUWm4AQzBE4OgZ15XCRUm%2BUEugxStAing8jrjypUzDVb1todfjdMp60dGKhgOMCR%2FPcyeNwnz5MYMy1H6gNstCTAEkE0vhIOL%2BJS8DxrwvXWTdGpeJCUkz2rWFDVNvEkAU5OOmJL64FyXdlOgn9Sr8kaRQ55pamf8J5iIxBNNxDVZ%2FHwHe29cGLGa3Qt7wOwG9OllJarXaES%2FRfwmeiuU8FaxBMkZIz9IqUDZXZurqZdoAzCUrqw69%2BuYmfRsO6PzS302ednLrFrv4OeyBjvHRBkdYMMNqz6sEGOqUBr28qPgaGdn0gUOSmwbizeEDVKgk%2FSiEakCYZ%2BcuTVOCyC%2Feu6sOMkbzDX5b37ukzDR%2Fdtl0K0pfHvH6ffSLS7PVPsJZxNnni5tr%2FaAaEzN7KQ02W9LVyYJS%2FEJYV%2FOybkJp%2FjPZix2cmE5RmyYHrWuZZ%2BKFdr0wgs5xOsLYhyOrp2MdqikfM6FCZKWKGcFm2VMityCrkcBMpW83pyI0nfVl5GHm0&X-Amz-Signature=5b4677f44457810df89ffb4c095f196f13c55c8cae22ac22ae06d7a8f9362dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GDG7U4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2sAKQzZ%2Btodb%2BHbAXhIIW7hxo54s0XdTuJa0edFkzzgIhAJelIUexv%2Bw9G%2F3YYUpRVHNbdeKrvIRyFJ8rHYglkgufKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwedtMqExiO5t7oOh4q3ANlsqnUKr3iVc8WI5M2t9QYgqE86VS%2FjbF55E7nnALkvsvinq8kf29ZnjAg4lbNTAD%2BLrERiu%2FmqU5JB%2FnfFlgTKb2SmS1ONkXPG4djAYTI%2BHaaQH6LpbXwAIobcBs8hR8n5R6HrL0LEMf44PyVIpifbZ18566BFHY%2B3ldzq4OF%2F%2BRIGxHIQmItgq7lhV7tEchAFqH3kzMVvZnrQHPoqKGbslCBEbzIc2veRvE30YXP7WuIue6s3sFcyZz6gAapT0m8%2FnXspFrDOihglnQDobsQqJn1aMOEYqwBYQaYB%2FoZIlGwqF8i7eIVacM376HzORvdiMfllivGoX6aPaQVgs7OEtPn6vdorX%2Fv4Xjot1cDJhXISsQJ5Mp4H8cPQj5EtUrZwTsrr4Pwspla7X0U%2B6euJmgwQJvnY2HOQfLV6CXSdHsdeS4l6Cy%2FhmvdBBi4XCMw9wj83ciGCw2B845dOFEnQ1pBh8OgZoXI0m7r%2FMVLxaHSMqtpl0ZuJQprrf0jAJfzDIpspG8CSZ71swnjghYrelj832vbAopTbm9ot4XkaHxovM483%2B5rZt81iMHl6ZYKZ6pwXseT5%2B%2FuOCT4%2FvYN2jMQ3amJQMCGlAniSr4dcjzlCe%2FRe09kPJBXyTDys%2BrBBjqkAQYjLw803d%2Fai7cNWJexToEFpRrOnxSvaG8oPHzKj6mq0NWWVlsLgE5NbheRoMoAFVI%2BD9nt1eO4N71TGSfMBfd1CMpReFEve1dPhDrvuSvXoQhgPYTukXFNkfzgjwatBQdLbU5gYiYZIGlwRoSzJi4NvLF2ilTshwm6zgHfEVbhe%2Fy3yLU2jVds5%2BM%2BW2BxRbN5SAwAzMb2xH1OaC8Lnak82Psj&X-Amz-Signature=09c3f7c5af249faa52195b722e386747765f3fa4e53cd9d52b40b7ab87fd668c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
