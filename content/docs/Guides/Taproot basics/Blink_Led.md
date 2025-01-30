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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BKGAR2F%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKQXVOdVAviOYFvXDua6ELvCO8JXRI3dk3M6VA3MHjiAIgVz7dNFhEHgE1NVSSdPVza99D5jFdI0MDGxDhEyFR74wqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOgaXVvtb9fv4VYQircA33kEfGRk0892%2BIQtnz9gnQ6TBTTBJkANwdZSMKz2NeqyTwWo4fgiu%2Fe9th8TPGsfrlwX3C3CLHcLwaCF1BS7Jz4qwC%2F4QNBG%2F0dmVSkqtruJIDbY%2FRrFUcREtua0GEZd%2BKdYMeN8jTSo%2BwamGxgqHoj9TexytB7pa63NcLYMyW4t%2BmQ6sLE8MjKJRbGEasgfUW7v82NrvISZ0luEz4J5q8dH1anRnq4JsXs7%2B9wyHXpylI0tH%2BYsgy5z%2F%2FTJ8OCmhASuFMUyj3FASiN8O7vZinb2ue0cmnGMZZ6EO4gWSWHEFrPZa59HdBkfuHKygIvjPP2dRTRcUrl8EDQRFoNMSmwQGICRRroL4odp3PMnx%2Bkcr8Jn%2FS9HZYlxMTEzwDjaisRPG0BHKarENlZyJpQ7fHT%2FdGigYSO%2Fh1Mb1A%2B1bVQE%2F3lLKhLN%2BOiK28HMfRCWQ9TaoVpomWjjTX1IfpUEDL8Lrn49vIVoCcSfJd%2B1wTsxMcRjKOxOm4ZgUzn0VjGnF9dHX0sUiNzfD%2Be4JBiv%2FBv2eqDrrSB468IaRAms%2Fz%2B8yNrwmZxNetgI%2Fj58C3lz1%2B8yPC5LQERm19pVKpYxdNWwCiVpSjGlscCyV0l7T38NoH%2F0OF1a1PlriAQMPCM7bwGOqUBoWV8VNp3%2BFvSj%2BLDClBEBsMHQIaoYQu2uGIqccB9wsQCQPjeMvoCAmEWk6tttyOpwi%2B6Fm9nGQK2QYuuAsQMn4NnFjxpqCv1mwxa6WnB7hpWL6RJyxEl3mZ%2FjmKO8MomKOkVuWLh4rGckgfOS664RM6TGM6VNNTJh8SL87QfdDG1AsyNi9avHfsPYKSnnVh07xTZoLIfDZXf0GbijnZXJTymrJ03&X-Amz-Signature=e58abdba7bc66d0d89b000438e7c26f13cb2c72fbe67f2fbab16eb4809a70a14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHB5RL4H%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGXztUf%2BrHCrJas%2BjAFl%2BhSD3vSdvCmSY4WGFffZLptAiEAqQ%2BEEtJohnAcAizZ5sqP9Nb0jtntiIAZHrGaxWiIjf0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUPascgyjT1XxB7lyrcA%2F2B64ZBAvWK4yqL4SlgBJlQFTUO5YezUAT7VLQnNgCNmc44j5EwjV2BsZg%2FJz5V6wSqjiTqTJ8JeQ3dImR6QpvewrGK8vNp9jUWHZhL8AWYbTpMXqiKG%2Ft2Lm2qszmrMXjPWlOn7uZiPOmJ6HPGoYK5VY69EPABdZkZ%2BAunde301yx5kGjQDubo2Bi1cyUTKgW1PsCRCWgCcEYKZpfV3UxhEgVeUWd4XFE3lAywDxhwQjxx13NzhYwy2Zkqxfy%2BHrfjgbo8HnosvXcvewtgYM%2BD3JxsQ%2Fb8XGaXUT7L4W8CavCo%2BmwKE9kR6YErb4FIbT%2BoL3c0Kcf3MURMHzKuAu8UV9%2FwhmvhenLgYvmu1FaNFglRu%2B8ve34HfKh%2FShQsI9w65QodTxtZ6B3KcZzUFnU3wN6AXGIMG5CrPOT9zPzBhQcCZ1FKzq6zQ%2FFdmiZRz4Oa3zAt7qWiqmI8CjzIgmUbOizAGNR3uyW%2FCLzqck1KZBfFMOyPuzJu7dLNkwtplBdgSonrAcVhDqj8prTN4jkKc8E3cbDGfoduD1BQKtVqDxLHA1ZUMjgA320PS69DM3pH9EXyqLWqv9Gr8q55lSSrTfydHaR64awuIxTzenxHn2ZHH4gYFeRFDBmcMJeN7bwGOqUBaGAVvUBfsgwJhvKq3wMTZ704xhxjRmXXSyDSgJbix7tdhltDxvckaypDiHFz%2F482J0zuS1v6GvSnr1%2B7wbr80qcW6jiREM25MTvcEMmYe5l6oZy9PBXG6KrhXfAiSEdauijM8Pl61zSMzJ5FWFbSJ33R09aF66JJGRG%2BQLMKkj6gdX7%2Bcxb1QQ3NgMXHpxtivY2WHyUBEQj6dqkl3LA4LEQRTakW&X-Amz-Signature=e94ba7d9005d3199efed81f29a3d523d3bd7162746a789656d196608f939a930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
