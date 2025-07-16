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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JKC7PK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICxRb1dEqTI%2FCgz2c0w6UpBatyfxzeiweQx1lDHZ2eA5AiEAlD3TU%2Fcsw4UL7Sok0sjWF9%2BA%2FaV5DmJV6jvUlCXOzg0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPYJpDSrfoBWn7BsrircA%2BAIlVuxovXtZ8PABn01QIiiWJhVbHOgPneFdptNAx5%2BoVe1weZVnBWjOG6mdnpJ8O3Hri5FH5KwQDv6%2FUp%2BOSxkC4B9G9nsrkNdfJFjMpr3%2FXY%2FrZHN3qzVbWs9t2%2BkTjC5DY%2BxMEpxQqgayAKvspitoXgQ3a%2Bs%2FDdNbN6cUEhfxbizbW88T3wStrwoNKTHTFeSXtOmEY3zU3KVHDGfG5sKOnZrv0jYkz%2FnBGEi%2B8A1qltJT%2BPjqOFUz3m%2FDcrZSB3tMOYSd%2Bc5eMXID1txzINBIC8GoZKgtO0OHFWKAISg7vOcvbsoahQ%2FqWm0eJ0X9G3AJWd8rjLvF0C68Ped0ASLojod03U6WBYQFqLccCsT6n9E6feS9IftIb8H5CcZqdu9UekWaXTSby%2FbmIe86FeJVXolWwcAedJtcEbem601WNSB5LiD%2BzLwF5wiFsPMaVl3A41hYn52%2BBI%2BjzIRuvu%2BGTCIBebrqwee05Blb4mc58g4howMAn6JvW0v4bTcV0bKcOFlfy7cSiV6NX0%2FR%2BYV5xAL8TEe0gHChFZDiNq2uhT7eB4P7LziBCYed5EYZ9q%2Bpl28SxlZx6kiiCsqSuVwqgf6mKPA1dtAqp2l1BLU932tp4a2e%2BJq%2FqRsMPWW4MMGOqUBBNRXUTdos0%2B1Par2mLR4vfjMvb8vqr503sKFeqR%2B0nJlnswNtqCx3pgNNrbZMRdQUwQBCCanKqGbU1gCC4aou2dp9aMmWUuLj5AYm1xt%2FDn6Xji9eHgSsQXktzwVuaysu1XrzEbRVjPJ%2ByLquCqBJKVWSb95Yo%2FqQa8eSBAQXKISExZgoYQbcCD%2F0dZeN0yhXkEj%2BNciJhVJ2nuXp65ftp%2FRuJH3&X-Amz-Signature=610c788c9a681fe5ea9fa3f2f3959b22b4f4e4db0943ee4b09f7e7e90069ed87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JMAPTZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDtZS%2Ft4AYi6Pl5f5%2BaD%2FPbJ2A1wDn1b3gJzownoI2wmAIhAKCLK%2BQX4JM0RH2IFPJQErxnubmib9Sq9OyXBa8mild3Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyOlOyIFUVss41iljUq3ANg46ENCJ%2BNwdkgBCbZFNx8ikUg1iy3qWYaDQN5u51fZwSuPRRrwT2Gqn7gqzm1i64aFj7X9SsH%2BLKyM9%2BtlEz4WPMcgFFPL%2FXrfuOi4qT4nuM%2BkFpdFkkA0im4E5d68%2FtJ5Ypp%2FmA9%2BJ5MUW6BiJ9Ywrdggba3six0hYSThO24Uxsyd%2Bt0RSAkAJ0gEJ3jF7Gjg3pRJxVils0RE6mQAwlgfIWm0PuxQA8ElIzjzozAcvEKZOqgyViwUtLkRElOyXC%2Boix%2FG8MTW3%2FiPz8WiyIsbkO97FY8A%2Bp6MYt2%2BaC97A07G8cVQLVy%2BnyqwzxhFexgRGvb3gYg%2FLtYj71qBHl7omj%2BrkT2aFKj6I8T%2FG9Ey9XXx5N5iq8RiIhhRu3mIEzx9NhvA92lRpyoYJrthteiNmwSBtzk1FND1vh0k6zD7QeophfJu1QrcQSTCe6CQYSTpscQcregZlc7oiCaE0joISXkbG4FVzuM%2BAIqNLKW%2BHupRBWO6xaN8XywfwUxLH6urJaKz6RWL1CLaskrbCv%2BBkRZ%2BuGc%2FsUtDgT%2Bv%2B%2FiqXtsDRJ9ehdRpCQB5pDuZP1swsj078xz74iRuzt5xiRkUzgoLkc6J%2BykooTkJ4ZTjdp1pYiaZcPOVboEajCRl%2BDDBjqkAdOoEu%2FoXjAlPqRr%2BYvEqN5h1cXXcsRgCCo%2Bz5IHb6Hk%2BEhTPQx%2FlENFym2g1zpMmmrsb%2BUBo0%2B9YEhTZaPOnbUYciz%2FqU8LhtSvpXgCjnYpyOhtrGCb%2BudIVfdTN8WwcjtUy4824NvfJzu5ZMnVwHNsid2uRX58AvWyyhB4evtaUeFdX7lxAZaSPVANTso2LyUMulJqlws55l3ZCG7M%2BQ01%2BY2M&X-Amz-Signature=368ad016b1d666c3c78f283e70591aba788599ef8075580dbf3fb085b234f81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
