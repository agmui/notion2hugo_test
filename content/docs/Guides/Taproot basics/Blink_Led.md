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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXCOU3VZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDyMIMlHyy4w8dDdROZqddwK1pxhCZ%2FtIhV53wEEQ%2FlKgIgPsyoeLmxNTrXOL6W8EKXlZDJN9Uim20RbgJmHgJ7dN0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF345pNu2KP8WZedFircA4Jws4cV0E7NyXzImsQO58ORJdffvTBiTowe5qO6y2EMFVuOa1upmJ5FEgvGkL07PDVRoSn8kegPU3rZFDhfbTedbyOR6TYRsf6txIJDAMXWKw8PJwedFJX1zWgR%2BBJ8%2Bcw%2BNTQFtw07XWr2eCLUstVF43lArTfGxerQyb5gA%2Fq2suroiJ00OMZJjyaez2Bk%2FgJFZhWuDZF8aFtvLeursqR59ItqvCcIZsiYYNl%2FskYNlKwRXJloyLnMiDLMMbaocotBLGegzEgAQwAwFZXuOLPDxXmPodVAPzg%2B%2FgrNLttH5Hjnfkmx8OeOuvlF%2FWUJib5l3bkAWoDuLjT0FMRL5oxyv9O4LI4l3AigoyNcZCfQY8q5SRWN%2F2qZMbTfuQiSa2xRjw4LfH94lLwQFnpAmFy4E%2FtJQs9FjpvCY3JIGFmFClPUYd1eB0f%2FbLg5SRYESezHlSKi1gp3WEVzn9PZFj%2Bh3xJ6I35d1NxtdTPYt6NoSVOkH2LnFx7DlObCC9gxXXuVa9r2xRNyguwfLktqTnXvy%2Broo23hnYXLpxFv41k4bBgB5hlKPKara2g0Mmm2aik5VPY5zgnXgRWw5OUG0Qhusxlpa1aByPpt8b5KLYZcVroPDi955Q4tMNIVMKG8jsQGOqUBa8NKLXlPmYQ6WF0ejfcLNQBuToNN3pBCn4yzKAJZwVexLHf2r14WIIuUq2jVY85swdS3R%2FjpLJLnYCqDsn3PgNWpuW67LwKsWqXh0loWEP6uvO0XABVo421rpJ4ydtmRiq7Eg5uu9Ss%2FuPHF6P8%2B5slDE%2FQiEVC6NUsikaN7p1KJOkZzQe%2FABKK1Hu00Myk2iuj9bsOZG1BgkkJrTXPxlTMRL4U3&X-Amz-Signature=cfe8bae055636211b03371c4d37decfb15312d3393c2320235d596844647579e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO4VQAPQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBo4L55P1KDGKLUecVuT90KO7vBI7fouTBqxnln4DDrMAiA4XBk7wkqC4V0tqVxFAarj3oK3sKBH0NSv064okybMcSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIME4Nf5GPTiTEcNWXYKtwDOzyXXE48UQUG4Gb6r%2Fg5nlyarDnOv%2FZ%2BzH3QVTzG9fUgh4eawqnryepQk8C25xbxAPVXb0C2oNKhjeXqisNjmmp2FINDNFWlVINvGvlAPWEBwtfFOGo40vr4QB3qwy43YOH9wlI8Q2%2BW4NOa930jx%2FZ6WDPnDY%2BgzQQDkpw9tExkWtE6G%2FWEG4lvp77ykDH3fNbyi8rbVvbLc3Q0C8PklEXvtIbCsgC8dlaSQjsFgjovfGD%2FemhEW6iQanZtMr8tNajX2AXeVVBgQcINrsbvkXCeCOn%2FH45Jx3D%2B7FQm%2BT9jnXNbkzCiMlDGpvx%2FDd2QHehuSIUBb%2BFLcBcuXBIqIF7KmXtV%2F27lZHt3rl6vAHksF2DjKCwJ5TBjbDlCbsGAwdFV3cN2RZW7mBNzJI%2B26eRyr1CodY2SEhDyvUgEFsotx7r8Nl%2FX56t7ZQ93Y%2F8xdkhU5ZpaNNcJfWfpKHebmr%2BUU%2Fo9SR1VE36NGl6NaHOzsmE1rhGQCTbAApBWBu1wIHRTzG5ZURT%2FSHrGqKlgSoCwbPVoFKmD6kJYzjjSL92omsp9zssQtpQm%2Bda2UaCceUDNfLDW%2BOk8PhQ%2BPq0nv%2BgN%2BhPW8cqCQ17VPEjRFAOqoEqyOr8MrJQPIecwvLyOxAY6pgFypZYeo3arpiFvct%2BJ%2BUgW7O7sdDvDxz24%2F07btHJLh0ly%2Fj%2FAjAhTtLAA9SsVgak1lotg4xsO83rBHiMBkBr203oemeh4JZ%2BmApAbUTF7E4ZxTTQfpdEcx6GzMDvnXrRrA1n%2BakdWIzXB0el%2F5p8vTBlEwEIYDmJu5sU2e%2FtVm5zH946wAkaRIGSxIbeN1gQWlQD7ujDRVx7wFjiJN709XIAZl5UG&X-Amz-Signature=97d1b1e13b791b4917f191046590da91dcb535348c63f6522cde86919dd27ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
