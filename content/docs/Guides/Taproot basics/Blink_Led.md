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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BPJNFT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrrQtQPaUkqkTcoEgsYU6osKu92TcyzyBgEXhcpIBlYAiB40KXWuTZCfSXWk3flnV8myW1zexvq2%2F8521jMgOX1xyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2BQmTCGWoPTUKHmgKtwDvz8%2FKh6QtDzKbpcCJ0d1TEfmdwEc4aM%2BSYy0DVBUfuRxXnilSkbh86TY3%2BPzJqwZ758G1XNeu0c3kGyIhnn5Y3pD920IEX%2Byay5MU6k5jSbMPR4MjsOj8HuP960z6bCGNNb%2FEVfL%2BZKFhoJG4VlcwmlPNLpJrdhh4Hshaf2Tem5Jx4r3Rn7JgjBMnpjRcx6yKuw%2F6PCInK7VNRuQgvgZpG7uzFemUQ%2BbALp2sWvruReunARXpM66Q5Xns5BD4S0zXDUo%2BMKRDMlUTxC9vrOjhRQekYaPPd5j34kMFw%2BqsVQ0YCOnst8zeHxIz7ue65ttDrob6uZKhUbAsPQCmM2T%2B39oGHvK%2BSlAX%2B0ZQBtO6HnD%2B6zlfk8VNztK%2FudOuKWu93HLZz0o9OS6%2B4I7gToD%2BJ3UbsrJX5DB8fPYqlfn9nuY1jUx%2FQ3gmeRaSJ0PSkg4T98k%2BXXGO26eWC%2B2EPAx%2BVeAh%2B7xzZagCs3NNjCOXBAm4deZWWBs7xXSG2gNqHcCFRpTiagsFGVBVAUbTN0TtnSUZXOXVjvzC39fazfhkF%2BIUJFex%2FvoOeH6tc1q%2FKWaO30CcQGjurYchyUsIfsxOybq7pLcDrBTsxbiBJc9KP1pL8JLxJFovVdsHiow162nvQY6pgHBGPpKAEhOggQl8WNxd7jBYOepo9LCbs%2FixliMdvKzZdot3SExbAC9N3ZnBLcpOZUtvWN%2B%2BQOUX8OtPCRe%2Fc9lSnbSJH8x3gN%2FWk5uplUrHijTEBqAkRtBkScwwvHNZ%2BKJB7OGd6XSkvZPo29%2B5V60kA4wZMzPG1nRhZqzJ9QKqCuAUW6OjuHkx8KSjeUSkaRF%2B3FLlXNWJXdDaD%2BbyN0bMsDBSBdM&X-Amz-Signature=9c53b969d53231046093fcb3c59edc5cfce8f1132932bd851c49f48ca777b3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS77LXVA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrKS5iVsAVCSXRTgPNJnZtKockSPFj4Fx72TLjaFq7ngIhAOPNyNuAoVFDhMse5r9uLjnTvOfSZ3YwgoDuzHVkDMczKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZS8vR2ImP8wk3eo8q3ANPfa%2BQ7HMiCrEicZ0ijCKXSRMa9sYZKOWCjcSdZ6CKPHHq8rUCv9R%2BanFlu%2BVeiSBexFePHujkoZDlMxoulPF%2FVsVNoC9TkY4a4dlumnV4JG4p8Nzk2ERl0IFTddcZf%2BcaWvSL6JEHCpEylGAR8rg4UhwBTSb%2F92qUCKNX0kcZ2ds8pZC%2B6T%2BJE5Ov7jZ%2B59ohNN1yWlcfIKaaU%2FOCcWFtrLZHF%2BxTFEQQ9u3yPWQ%2FMsgrZiP6FVPtgQPB6ZYpxg4O6A1KvmKXEDqfSvt4QSNnntNmdLURUgTBvPoL9CdHOJG0l2CVraappTM62rescxwE8MUzX38XuKM396VOI2ykDW%2FgNAkNc69KEzGZMjcvLfuDH7Rm5cBUCM92c%2BmrwiVzkghw2rwX1lmMviAtMPFssmCJeSyzGkFdDCRk6hQpWr80O2XM8OVubeyxGJw7waKCzQHL47iZuPriFxD0pxQ%2FzZEa7QDnIXdgiIGEmThIS0zLF9faxlKssmUcYDUhXqSv4R94yJTBUJpY6SutkGb%2B9vAzS2k4IUcnRDonLKhWnyH%2BTWQpeBQ4xrAi%2Bo%2F8mQEsQgGh5TItoxVjSyQv8cfRdSJNQcXY0vLH5s6KqCJmGsuKgmk3jmgdaPzvQjDLrae9BjqkAZ0zC4vJ%2FX%2FDYRCgrLwn0vt5OK6iPlCIpUN30SaCTltbDLIjJUiVP%2FyR%2FAkB3CwgY6We%2BeZRgoMpfT%2BSJC0rg8d%2FGfmGSzCEI9SlVFX%2BuSmabu0zZYOgomBwIyRrv62B00Rdo9q%2BOPbKoeLp2TtjjWL0TCSR4HPCEt019hopDyNe6rw3dL%2FBcqZEYPgXQVbbUYlMUPDl8Od5rhAOaad5q2r3V8lT&X-Amz-Signature=70c0e2822f2e1d044da11e266041eabaca3f20659c762a59e9698b302195fef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
