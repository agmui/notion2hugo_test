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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX5DRVPB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBoiENF6y3m%2Bb7DAsapx7Q2QjzlBgTwYG6ZQT7C6cGsgAiEAlH4Fb8tUU%2BFg9zAp4qYd0YfHFSCtK74VTbZT6Umx5nYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdegHnbRMVix%2BIYgircA%2Bn1P5Kod20qxWXQZz2pZ6cgELrlY%2FtqM7chjDIypYH41uUZKWDu7mmDoepLYA1JM1pKdGwpLGWVcFVhTzCTRckFs3jZoIUf1k%2BLq84Mg9eHchDdj86%2BKejVLW%2B0vrsFoGzTDXDLbQTPRNcBBpLRUKpDjTpL9dmE6KFfD4IA%2FFxe9aYw%2FBOuyGrhDICu%2BKvVi1aJ6byTwkB135h8z53ClpEwmJLMEVPgiQsSmvJAuVeLuTxlKOT6UrQXJEnoLYgcbPHrQZ9an%2FOzNaqSPl%2BwjlAu8Dj7Rn2G3GXVnlSgnCt9AMV57XQmpD33kQWXqxI9dobaRaPnMuOFMvbxQcUeIItwtR33Zmd22od8r9l2IJSICz4cOcmbyr0f2RP7wCqYN0FsNSNUQCbKBdtZJ1ycX2zck2DCW4L43G3J414hgGUjTtGrJcivX59iGY8ZF5Ji%2B6T5XKoTUpyU5HZrZgmYfOGLVHv2zIqUAxtx3u2HiwlU%2B5PIKjLet%2Fem2DdSHLJYCrAkTPQwqdTOXN%2B1qxN0Mc3QP%2BZLGt8e15HbdlG3qJxY%2FGuXAboLqW0jzsJTh15Mtjjf6UtIlx15JmEJHWC%2FGVnyYiEAWTvEFIJyj5vKsq0eLiM%2BU5mH9QH%2BLcBfMKygj8AGOqUBjQKNthf0GAh9nKmTg7co8LxTkGLScpw%2BvUPjJM5Az7t88G7I6JrSInlQyNsqyuFwftsOyc9VziYPoWl%2BHnfBEB8%2FE8Onr5ZuoshXkqkREh2PXciNLmxoQoEo9KnV9Gzfus0yQgQ8hIN0oG7AqMRAMwyQ0uW4BbsqiySBMZaKZ%2BCRvw3wQ3PTw6gXrMwJaEbzuEIybdyhBpfQ%2BdkNE7SIG4e9OUx%2F&X-Amz-Signature=9bd9fce2c65b3eae4f323cfd3e4d0a94d4c9b1f1d6cab16c98986edceb134714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEO65UME%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICB98mLrv7lbVsPseFpxi9naITJF22htRMAxyXHS%2BQubAiEA%2BkVESAh7jK9%2BSOE7NuJMVKCPqjhrU2wr%2BmPQQug3JyoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0XCPGvpOZ7TUgu4SrcA3Oimf9ZVjCzJGB2dauy2s6PmTJh0UIPkY7u3WyUnfUKSH%2FrlgGcB6kwXIbjazaOib4wFP6RwCpZGRIwAsySob3XJTx7dHM%2BIygQ3vuCqyjey5YRgDAXE1g18t2zTFQ6tBKL4wsp68WShIwmuHHoqys296tyR%2F9obkQGIYxDJfMPZnmW9uZf8MRG2mNWQgHlD5Nl6Cj%2B9PBCnb4mZUvpK84vPyODcR05zbgAsZEoeYZAoCpB3P7OMWk889WeXsrbM1IDfzAPOxUI7lKvgp3K3JaixEw58K5UjdQbAB7jTkmV1b1klZXF36GgzNljKBIN2h4zBrH6Xy19vhXIH1NqwfbQGEbpsj9WZZUdDK8aXpFnhWJwmSdM%2F1JeVxyIsEVSpJwrXjdHr4CU%2Fdi0ld7bk4lpWn6ctrVeloeaZ57PoEjLr%2BxUTJjnmEsLiC8EAZnztNUVl68AODQXk18DcI5zrKNtXlOluTdAeYwobPW9L65Ps5OaDkCbXcFve50TSjG39En%2BBN9qihskLm2EZe04oEuAPRPqWoQRJd8Es1BYogAk6i1nV2k0gXGb3RDuw7f%2BY7yMdQY231Tm6GJyw4LGLqlvHbJPTYv9mwF%2FUAF20%2BorxkM00p51GhE0YS4CMMCgj8AGOqUBvE%2BccPJIdeOwuwB0kK62Il7qBFyp6KAeHn%2FWunXHKlEgl9GnE%2FnyNX%2Bh82FhmInQT9cPgJFJHEvgiYvKR4j6advLiImnaifWvRlAHHFa3p7ofignnEZVmbNXBxc6u5MZKzsfM9OKwmgCF9vL%2BmGbZcx5qPzymd0V8oUgG6WXhfDT3yGBBzV7If6xOH73qEvO68fnH3JWpAIS3JlaeK0nKVHNZ%2Ba1&X-Amz-Signature=eaa89ec8abd5fc1e07ab8dd7d38ee8e36797a2bf3335b31069fc491a3c444be1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
