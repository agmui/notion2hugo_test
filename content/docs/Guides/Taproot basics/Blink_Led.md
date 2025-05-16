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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMQ4UI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtbGbYwchhx8AeCqU8goS9MK9hkgesqqfLwkd2lNUqFAiEAnLkuptWKZZ5ds2e8DyI%2BuNgUSrtDwwA0EWdbjwBRYBgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLSaZO9q3cjHCEGSKSrcA405NiFazRB6LSLeZG40ZRK1FevekyrgFiOqjsDKUH%2FzoGvsCaHL7GJ1WsVRXvzuerToxbXVvEv4r3ceeVKBb34OCcl4oA%2Ff20cbIyKkOpw5jrlKLI32cwL8vXQqr80alTrM%2Fsh2qZ7xMBsXlej6tCIswzP%2B4M69wP8jOssHvXBzoHzh%2FpvWz0BsjK40FQ%2FMS5J%2FqV4799X%2BXAKTdsxjQ6GipyKbpzoVgHXZOpQ6hTYzf%2BRMhEdIOBoIxqNN0Z3%2F9DjDxGz%2F8Kg5S%2BsXLNo7Z6MXCjNTHEfIn50HvM3cijeZq7I%2BbpF3KwOHQ5N1YXj2rIs2Zzeydjsdo0Z%2FsDbGPtgIFcK773JJdUdCqjhXz2YiKUfAWyY94%2B4O9c0gtqQAW6j6v%2FBkRT812un%2BVim%2BicagUVnTuEA2ip2Zu%2FN09g8Tq0W1fJ4eU4Aqq7Q9%2Faj7gtgwX8gai4vlsQWEn7%2F%2BBHKGKvIG6LFfbZVB3xMlY03QUsFa5vl2Qi6jM%2B9zpE%2FZ5vohY7zuTzX2pW95z5HEUP5KAAXMmmOw3MtmAYvj%2FGKciB%2BRlkpooZtDWIU9%2Bw99X7zNNF%2B3RXf3pAMISRo5WwY3RWhybKQe8nr0yKDkfuMdwfmVYhlq8VpvPyFPMLHum8EGOqUBmdxYG8T9oamVEJzSh8mXCHdTR7yTAgTShvqH1rFEwMI%2Btt1G7OthTx5g87dklsv6vJ%2F8SzmjobxMW6kq2T0h%2BTPHkjGzn0ipNH9rMa2wlJc1x6JQkHMAPyvwe%2Fu7DomwUQouzU6hLdQAqzgppV14kN8YDPc9oERYOo8ScP5bSvy%2B0rRyBlQ5jufCBOkA3PuwhiKQeo7GYaHLTDrmOfByemfs9Yxn&X-Amz-Signature=d811b4b1b2adf043c4266655fee7600794f1e07e19ed6366b0f839bff011dd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B33C5UQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWgMPgw0Y1GNvyaoWrNWANlavyp1l6XkDqiNHzeGFiSAiEAtfdLaHLiAU4dBsT2VKbG4bnsaHSY9xph9B11lzIV6LMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJGfEBGaWjzZFHN4DSrcA8Fjy6XsuTGY5SO5BID%2FdwJzGlUO%2FOtstqFi8hiUQgbhps3v73oEbcvTjYm5MtOzm2aPubxo71Zm9JI3JOQUPxbLqFrjAWso40bEUnS4ocJ0Rq3lXb7QDoG7Jr7MLxFbkvRwl6Es%2BOykKWs02jC50FPemFZ3VkuqySen%2B3%2FiZByiJ0L54c1f9SvmM9EjUif2yQMoel9SLpED1yq0%2BMALhvsNQu%2BgCBPK3c9aJ5p29YBrt3BcWYw33b17ZQvKNAT4QZNINzm5PintVjzwQ77bLhx5LYQ2VPiXW3Fm%2BiUioFOeVfgG1gOEFOq2e9k19BIwPYygTJ2vxp44qus6tCnmJuMExpgciOBWfBxr0jd8PNXlCEHiKCnkMUcZLndeeWWybKP6exUZnSo5b37efU4FOq8OkGVpBEih4MeMB1Gup%2B5I757eHaS9gZKgg%2FbcnDUWuOM8%2F4eoa71vv4V2vazsyPKcLB3s8DisyFk5ZpGjEPrnq4PWhWTv7fU6GCmYMRnX1NJWYd9ef%2BGsnu8CjLyrailqE4z7kyX%2FaV9TeJaCnXsLvbIr8GBu3pjjM7XfkxoQqXwGIwD0tnQ8BxQGyxIKAIZYyIBfWOXCsWMIBV3Qdmthdo06KhHmq%2BsOdoImMNHtm8EGOqUB1%2FgfJlY8tV9QvlB48REYfQqxLv89bOM9yDGxay5UQc%2FmLLzcolw8%2By2Kf4R85KAexiVsfRF62IuTu5lqcDKRCAKiY5y5aAG86bxneXm%2BZXzwcTf7ipZ6DyNWW7F6IFUcDcmNb0%2FXezbuLExrRqPM94stRv0jIv6P7h3nDUMh%2BeBJGKqUzw8XIHrDZw1Anf22hjaer8Xw3BCr%2Bz6Yy9Km3%2BZJ8sLv&X-Amz-Signature=c42f7cb9e6e095f12c1a96d8b3720633c13f874f7fa6e441a6f644ced4224305&X-Amz-SignedHeaders=host&x-id=GetObject)

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
