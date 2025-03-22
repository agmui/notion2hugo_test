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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KC2BH3C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC4iKbtK9AhDYDKIAGRZa0sVr2sWQnYJry8SSkNpDX5VAiEAwHJK53r86cPT7fFkmSHc%2FwKOi%2FCvCyIYXzzYpxCeSuEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpyubaHYcmjH7CW6CrcAwWZi1TAxBtA8sXqWCy1jALgRCD3mxWdCXnLyMd2mfAnbxJB0UgHN9svCVYokfqK0LG7tsm9iyOXSceszaZXnFSdTEXPGHawnM%2B%2Fnfpr2%2FH8CDlRDnhUdDcZ5KamIMVaUg6beNOxw4bk9Hl1IFBO77zEpRzVbX5ibCG18FCK44sCWQpb494XbUUdkFFF%2FRUtRJfGNNo74iPQS7HQ0WJ5fUni1BLlcIONRRPh92BvZocxQ5jL%2FJVbCjfPoOpZNk2iHsE5FRfC5DVKoVcCnBp4ch7eZOE8NYzGUX7mEhCBz4lLTb21TOE9%2FRQsfIrvQIiwasZIcShe4t4jcer1ngcPHETt1SaOdmoxihLJY%2F0D0BVzZPbX4BXXpryd9ewqxbNNtX%2FIWlaWUlO4w6zOzEJPuV2CAyxmCZUYD9e0AAxCy7AQhS1Am1%2Ftx9L%2BXtuCXnFuqg1J54zIwTgNNSVvJ00QGjtN5iz90Cq3B8oJaowuznK0HHMyKOYWgpmbOtBUtYr53wRyuSUybcZC8H9fE5gFYdDojxGL4djzp7myLEmyPGG5wRhp7YtDXFZmY7Eqjt4XUV8UUACynek5BDv6Jg1R2lnDGCv%2BQ01OdROV7MhQBaPgd0IxsJpZVNLk7MQjMJnv%2B74GOqUBhIg3j1f8WmQzNu29ze76G59HbQUqnidHpjQC31xEpNg1ewojt0bAwI1IjzytlraJk4urL4n%2FHH3lDZujH0vHe%2FGK7THBXMIoeF70Fr%2FfgG27YKPj7fl%2BI7SOIoC8mgVWRtOg5DSs8lT2m%2F2R%2Bb1affI8ZsL4RbzkU0xT3T1afTX2iB8B74FF9dTehJXeomEseHk2M7EUDFNltyRHg2mH6AZ%2F0M1w&X-Amz-Signature=14b4449b3fa96fec292eaf52d5ff74410e7b92034ef6e6206fd15a51711e587b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6AKP2V%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBz3sPcAjo0YcQ%2FATcY32%2FphSna9e0lLGY8nHr2t%2BydqAiAlwJ5I%2FRL9TFey3ct43NXpljFny%2BYPOXR0VdDbGJ2LUiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM814XEprPnidyMr03KtwDr2bCG1fHWqd%2FZCIu6FxRHTy6SazvThbF6hZjzRZM6A4rMTmLdi92jVcivqGZOel6EW4Cb82Z%2F3CWYkLf3Nmj6WtNiWPW7U6KzzmLwwWFA5rTJrJoHhqbYy8VgRnIColkJZfKmskulBIeR0OVGSS%2BQNztFU%2B8qluJTOeVe16NFaIWCItUP61YQGxieCtaZL0lq06zCmalCJWaU2vZbCkOA%2B6sY8ypvOuI9HgoX0HXAJ%2F7tz1rC0KgN9NnXsGCejDhSYmhj7u0ZtMpxG4HVj10eM7s0FaqTBvQbU6rwiayOZSvlH9I%2BGCdTzEDwt0Hob4snAp%2BA9HaCXk7D5SkH1mACexgelZ40QygY261047wM8KlqDvPgulB8IlYW%2F0cMvgj8njeuVaBwjcZYXdH7%2B6EbBkBw0AUF01BbJZTgSuugJwC1o48eAeo5aG1tWW6M06bw3W51GJZyg7lv5AaGMEZEBlz2tU1dwxqI3QF4iIRsw3aEF6CQIzyZPBmJiNORyQdmARp21lPxzP53Ki7xprmy69V9EXMAX9K7TFAb%2Bl86e4ngPPu4meCo0HcSa2i0mpEATV2wgKilFVrE%2BTGIKUe01xP%2BJHd3AuaLt3NSAS9Nt0nAmWZ8tjB8Ch7cvwwoe%2F7vgY6pgHgRMayLxPNRYvffi6yV5iwTuRGjEPX00AizR4KoUZJF1N6o7GfkZOI%2FB1T4zDmwvlRpsd4xNUbLCXLMCcDo4gnNCqhj47u8BytIil5c%2FmNfd0Hfygl8MInkqiNn4t%2BBjM5Se60TqA4iEoRuB8EmeaG4XT2XS4bxSsRw3jTZ%2BjZKLH%2BW%2BraVGBVLep08b%2FoxJ8HjZOQePPhyLdiJLzQFJH0y3%2F01f58&X-Amz-Signature=ccce940b4ee143262690d5c3072440b77668b74ca8ae4de057846abb1fabfecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
