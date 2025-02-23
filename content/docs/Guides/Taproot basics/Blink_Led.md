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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C42PJV5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IEkC8J%2FNQObbNgE3gJ9bdSdPU59vnZdwfFFWmGCqnwIgbQZ8JcGDxFIkwUCOgdYJt3wfbTJwJhj1qvq%2Ffm%2B5Jocq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDOUHmId3OPiK9EC9ircA%2BndBy%2BlYe2lxQqI26G0jimG97E7aot5Bn9mbHl5G0OQUX%2BhDHahi4a6YCerkYxcf8r3qlw3DLoevutqxbSCSyTX2GerSnagNAeuvntD2PrTv0y87l9Ly1%2B9E3N9XFRKqEpJG%2FbjmF1XsHsaCIAP8pdXfcGenJ1WzaU8s6EnPqCyGarnCgVRhAclFcsJVc68ON7Fx7hknte3H7545W%2BTfTiKylO%2BJi1l9K%2BS%2F3mh82nA3%2F81YKgfMVaJVd%2FEvqKYRyKc0%2BWUUMLPyG2j1eJeICPX9n0mpskEfLR27FmxL97eN7tohvsJ6t3vV7ksTbj4db47oLLSu5voxKe8wWBdT4pgw871HaprNIiMFKlHF5KlWkmG1vLxwL1GTPlhYJWF761CEv1%2BjZIL02WnJMvlbbuaQ5j%2FeygP%2FExWHnEFrj6npXflJO1rO%2FQQvebaDngHfXMqVCvChCKKnPbqr%2BrisFO1nImugqHhlpPny6dqCk5GEeFfZfsTfDi09%2Favth3T0vjmXTQih3W3IDBuKMF%2F9Fsu5WLrzb0f6DQtp%2FziP31ZhopRVzGWsrz8lvHkFuiGwH1ErJ7pBgAhYhRQia6LlPCp24NkA8LrwcIt1ozXfZF8z9yz479OYEuczFXuMKW17b0GOqUBdg%2B03zDJQPpZp6nFfRaylxr%2FMbJCaBFfGrRiFkeu0Ef9KL6GLGQJWDn5y0XhlaXjty89hpTI%2FNPoTXfSoRAwm3XjxVgTSAac%2F6xMki4a8BEL48suTXEXu8xPGPyeWNMNMYRF%2FH4cswnT9S4LTEaXBVaxR98LXyzjlFV17cBy%2Bx5VIn8nCWEpyyDOk8n2SBlsZJINKWpkojl4ZvOGmp6dNoe2JQr9&X-Amz-Signature=c0727eae1071fd9f2719387a0391af0c3619a470d99b00585787c7cce509dfbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRSWRBN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF8oD9AMCaj2Yk6QLLItAXsYjW%2Bu%2BP%2Bs7b3C7sR%2Fes0AiEAvz26KspQcFhbMwfQKTMOy8UCQHHLVRUsUU4pUqBsFFsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP%2Be%2FWC584SegjVG9yrcA7cQgBH6VsNe0RLyFLBCZmH9V0ukHdPBKgLlSpRJs4QKy5vlS5aCU4bhGKzHHRvugq8L6TpiJeRhdjNLAJSo7rDI5k3kgXzMHR%2Ft5SzsUBcwR5xJ6qM2wSObCt3mVBJMDJMET8Qv7Gyu1Hy8J51EdVQ0kpfwt1H4NSeJ5X7cmdYfYnFGjxt6TPND%2FW4jwHnYjwV4F0pE8N9D2HcqCtouEN1ark3CHgKKP56tHtBtrPrN1jrBVRmBZLCcGpXfnnKp424MavKUem768NVmStdImP17GPS3%2BPSu9kTxbvibzRUFi4OYp8DoaYL%2BFG65kE9UXTvI4FuPShKAJ7wmRoXKdfDQ07JXOxKJxovwJizxK2eGkoELUpa8SUkzB6HGZzxTQkVUNKILyVRYZlp7yNT865dWj%2BvbKxuAiYciEiLpEUz04%2F4ji4a985ecX2g%2FDBbJ%2F%2BU5OMillalDWTDIp5zbhJ%2B%2FumVSvzcGLJjlY8nYN3xFYXh2p8b12E%2FTAqclYvLgOfyRH4aMWvotbqjpml7RB5RR3%2FAvwdXOG4O94PVkKn6s0Y4mq2E%2F4mCXzV7VyrzNNXJuhqhJU4J2aJ7snEo4CF7ttqEQfHNDg0FAt3%2FTH%2F%2F6LU6De5oTUK2HBegYMOaU7b0GOqUBpq18TA4d9ij0%2BMtulUKFBtknEkippMMcgluU49rCt%2B77i03tDjHC7cvozFxra4N24D6bdQR4%2FhKAm2g5Ta93bMdvwAheq9pX1ZJJ%2F%2FLk%2FEjQd7qZKRrJittO5L6JtBGKoQJa6NhoxupLEk4TVuSNQqEIcndrNMTrLxmPlrziBzgAII%2BLebT40dW7ET%2FYScV0OoaBITQUWnzqAbjTJpbi%2FDfQvNQD&X-Amz-Signature=e205025752ad6fdb53ccbe8e7d092dff09b967c5c347ea80b14a3b5fcf34eff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
