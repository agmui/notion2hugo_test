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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFARQCC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICszSY7%2BGbvrzM6ZMKxfUShatf2rjXhh8wmXDgfxCqHiAiB6xSJl9KFzwk700BmL%2BPG5x%2BT5ydc0RdIIeV4dqF7QZCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMKAvyyhOfaffMz5L9KtwD8ct1wBUVWRMJ%2B0%2B4rUgrT5GWqtqdZ%2B6ecsq5znttXXiRR1zmKk7rv6ARMHczHetxnoGbSZIRfrYk%2FQtI7SxdBAyw3bTMPza%2FrZ%2FCpXT%2FhQJaarSaEzohn3M47A9PUGiiJhkghq2cx0K5J%2F5Hlfr5g1NMjP6ltD4u33bdyKdKsRF7%2Bh1IFHJFGZG8I3Ihy9z2JGyEFZYYRfM3YedH95l1x6AeMkcwSQpkUzKP6jMIDQNWyIPtYmHGQkpFEhK7e6mrEWNmTD5FIjeqODMASZFFKdKCNnNFT9JmGVDvg6ZmcJZFjDJtOj6oufVRYhOUAM6Nk71zfc4sSNnQA%2BWdntgH6BwX7vd%2BJmczPjhna3B6q%2BIjanJsIi2GK8%2BsZ0tTJkSaNR8eamy0Pl%2B9Jcy2ijBuLhw5Qff7Vh5V5WB%2BLinn1HbQXNryqDWGxgzQmhpoK%2BRY4qZW75%2BuOMq20hvYmJ5eFNHKyZePZ7uqlN1Uzt%2BzB46H2HGfHgrHrhHgxgRwb6G%2FWl36u1GUchtlzh%2F1d6Pa6cru0Otw7cWMbdYWFelrWjsJdzanqSJUHxmMSz1gH8eFDAijBJ110GE9e%2BQJ5LzBIy4GUjHy2CAtPAUfPZ1JLGbYkFIYh1qLcLv%2FiWYw%2Fc68wgY6pgFhJSuH%2BJ91HRfytIBvjx8afF%2BUXiSClPxdpH%2F48YhOP8USr5Bk7yOC4URPVvZgkos24ZgOgll30fdvy9pnl%2F%2FxeA%2BcGqRzWpeXBXhDbXeSzkeL%2Fozj3OeQ1GIWPRmZttd%2FTzkql67YuuisODZgpTd2KCwURxobjBimxJfmZHiToMNMCqown5MsKeVdrFCX6zCKJqNPc9G31XUMXZ%2FO%2FCQY4hSk7Bza&X-Amz-Signature=3ab2d715d853c6617c861ab44d3347743369a1067c46943d4a2dc006fc926b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FY422V6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCk1p3lKYT2TlGca59dl6XhJ58%2FelBWgZu9XRMkJeJoiQIhANAqIQbeBBakAiN5T4T5%2F8fDhZGKZLFMVsT%2B9BrLPmwtKv8DCE0QABoMNjM3NDIzMTgzODA1IgzEuikHAhVhoyOqW%2FMq3AMVBIc%2B%2BG8uba86%2BY8cSa9nB6IAqpOXoQ2Z39nu32xp816WNeKSrBAununcuxB3dq5CjO0a3KMh%2B2sg%2F%2F0FxSpcl56qA1AamJimFD2JhY1geoF8iXvs%2FbME2pcLpZivOJhb7OIqZBkgHLkR6lk02F%2FDJzh3NbNLddEda39F%2FRvUwYbly0vhHfjjfKc0hclZr5JLgm17QkLPxaeThOdMvaVoddQOvS%2FCPX%2FMaQNkqBhKNNVQU6awNPJW%2FpkTGegHfjdH40muPMJKPkYBnkQ2QRfSU48M%2FRe08SnH8d3lB9EwIa17vwOKfpoJUOcqfW9WxS7nuLCwjKD1gFErCheyqsJ0jH9d1DSQ4XaPNCaC0YRMbic3ab4A13bUJK01tVqS0YRoMffLTx42EcsgkGK62TVbj319%2B0uRQIh9RdUF%2B7GNauCuY36ZceTeF7DBu3xwFyPu4IKRCbTbQLv9eBxUoIlo4nlNYzCZ1UH23ZCrRoPF%2FpeaUPFGt%2Bx68X%2F2fNVrilJ93yj0YQ3O6%2FTyvGpgQS8Zm7q7H5SYKZbuT2Vec5G5YSFsAAbJB%2F7fRyBHbQqCBq%2BN%2BIzmEH9qNCHGz81pOmDQ8t9izXeXmNjTb1Kgy3BacVI8UMZ0mdUtHVIccDD8zrzCBjqkAR5pqK0gsS1ljmqBb%2FUVviawSAk5eY0ktNBpXZ1LTnB6JxmqLulio0KhwA8sHwDMuSRRoecYsaRc%2BbJj820Zigia2WsmxKRYPmiIOG4t4OpXOSjZ3KFYcmkUD3DBrwvp0pngJ93s%2BdlwSqjnbIdeO0fsZJCtAfW8ZUHp5w3zENt%2BOiAoRUASFMcqXo7iD%2F8XW8iFdu%2F6qflvPKiQSKJoK743WGsF&X-Amz-Signature=f4debaeb4e2d8707b3df86dc8b3f5d110ea493829c49aed0a4591ff52b380e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
