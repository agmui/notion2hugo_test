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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZ5CXJB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD4G9EMA7kv%2FS4dMOD5A1kqAEHOUwNayFmO7tjnVmIoeAIgXo8n0%2FOYNiJGdThrEBVltc%2FyGtRfix9ntFNHVFRMbLwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE35hdwDhx4Hm44wkCrcA2Mswj52P0%2FeMnlWftxInrDyg7hH1qCt2NiTzLhJMI9QBQAj4PWVQvsQoVCEjaegcgIduxI0%2F1sNQwESK%2BRFYeDzNX6m2TtfSqK%2FNz2AfYeBkkK8h1U19P4XFWy1E0B12YO7tTtT0g02isjcanihoDJ3YAUhAYqqZKs%2F6JZVudFlSi%2BNx7DqC3LOxeSgcstUckUTqSiC2Lkt417q%2Fr56FcJLVV%2BQcp%2FcM8yOnIkbVzJB%2Bl9Aq4QDI9vJYCakP%2BfKUD%2BKdMwGDgVGTmNwOjOMQO%2Bk8Yh%2BBxCOWNAbpkHRe74RKe%2F8mpGFRvjMfnMC7G%2BW9C%2Bprdi%2F5wMcTa8Rdm4wnh93w0fhzf%2FsrdAJDCsp8%2BZf%2BVafAGVcxj7VEK7i8lIrNfDnBt8GnnLRmuI4ICnB6jJ3DubaCRgO73gkIyDK%2BEe8jh0q1SG641ZDdsmuTozTjAfjiWeNgSzuU7S5YRFFNxhiYv9RH2Gf6JaHyFM41jr6YhmzTRYQz8BBwQm6Sg2tPLC2sQySQJctuSc%2Fly6wb%2FW7yWhOrnpCJcFqA%2FNInojw2nBmK6yPER%2FkXF5eHuqMp2chz6Xl9WisuqZZw1EFYLk4L1ZZXtdD8hihIMnQWd%2BVOFiWqzHC3uOAWBctMOOt%2Br4GOqUBpRPqT1RsZvDXzeTbf48CnVdWej6I53IyzgColdz9%2FLoGC%2Fb0tJSbHw9MoeGXXr3B48Egp2WBlQNnHNLN510z67v%2FPpGKMwHZ828K6g8OAepqqculQqC%2FHqaJK0bPiBgEzZmb%2FXjnARVelpBTFasJZWMqIA%2BBONZw5N5piBGSXIWmyyegCfh%2BwQ1O3eCivd081FMw0PxbP6XBX1qu85pKINhLOPV3&X-Amz-Signature=a04e5a1a3b0bbda9f55a6c11b8f1430471db6581a6995746c6aad2b0ba0da4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKJQ4S2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCO2Ku2s1Z%2FYM0wGJxITCkUmiKva5CuuevVn6SrfLPGRQIgNO6e6kdz4qclEzNGE65kom%2F0Pfd7ecbvuRdUxYz0tFUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwWG2RgXCqO8XQFGircA26RccLfWXudt4%2BBbcnhy%2FcL3EFWVRzJlDRbKCNRgvvs5Iwzp3ru0ELVPI6AAOAlmQAADTrSfSgBwrZW72GXc0r8vlPRHZEPixlS7lfG3j%2BVHqrt4D6eLVyqdbAwFrHCH94aES87h0aNTJirmtbigEm%2BcsSp1APFhXEyucUgPd%2Fs1PP8hvwLUpimaxx%2FhyCKlNOWw9BluYiI2DVIgx9B38JqfYMl7le8qP4vXizrApb8mVEiKJ1zsZv5%2F2gjwXy5GPgKIPVTKJZuljIQkrHzHb%2F9JpWzINRXUK6tiF%2BlSJkie7RjIVunKh2RDJnKOeX3Un4Cb%2F6RHVsDBTX7LLkwUMDDPmYismKlASQwPo6adB01Dz%2Foz59w7qb7DPbqX3K05yPza%2FyoBZQdYJs6X%2FadwzEflD7r%2BsT0mmZ31%2FQd8rMsDwwosOlNaRxZ5zOGasGyC%2Bay6V8WJmRFgCcW%2FPbYLgN5ABkogGi5WeACgMik0FHjRx%2FHBTfR0D0GEiKC%2BB%2BPXUZX%2F8JChIZdn5C7a4zSlY%2FS2csfCQvFqRzXFDA9aSTvzZBWa2rKz8YRtcvvvuu9EZc1Rm9%2BKeZhm2iQd%2FixFYMgq246ZHwDqlE8EBr758HknCxrFQfuvkFDGO%2FlMIuv%2Br4GOqUBkuHOSdgYEE0a8eccNFQHwMyOnhT2bha8ldNnwhe8v3BFRDbfyWgQz8RrE2CEFwVgdGzoL7ysocCh5YxjavCe3cJSRlkBIdLoMoSdMly0AFSMESO1Xp2pkRJczc%2F2KgYTL9nFea%2BHkprURoRY%2FBf9%2FyfJbAw7ALJq0EsBRNIkRXji39RZxytq3wMyQo8zUYkfgKlqkPKq0Dz7ooSsdc40wU5pa%2Fqh&X-Amz-Signature=1426091198c99770a02b79944d890f6f7e52cfb615d5e4e5202082044c0dcdc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
