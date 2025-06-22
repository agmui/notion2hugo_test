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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCXAPU6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCl6ruWozVzePTvzHdLpT5FlzzzVMWvd6Q86LXoK4XJjgIgNO7GeJmfff1mJTYWjnoqEtctoe7NgD%2FsEHzmgRdHh0YqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAahZLceJMNrlUsteyrcAyQSJ0qopTFZzHOVwCQzCQ5DNrvOfswqSTa2htf8rl9DzzMc6cNhgyLBZ4UgxP68s63w4xTwpXgGztm08T%2F2H3hJJbeK2OGFJHns8ghLM%2B%2B6h4UDIonQsNDIDAm3fMOtVa8UIKk8VfFl5I41pJxNp92XxxO1iiIym7lHMIDpxdbP%2BgTgfbCbgdBHh89Qd1%2Fx1PdMSFMvD8kQLO%2FG9LLSxGd3%2BO9r78skgBmzN5o8517pQzKwhErzV4ViLvkAHpknLK3ByKsCB7C4xsYaAnEdQQXy6PWe7bfVEtuODfcmi16zGQXttxMtjyyTXhf2dYqHxG3Rq1lUO3EOMXT2Oni5Ecv7Fp1sLkR6WEBzSV6fORn2XwF%2BmSkEvjiC0FpdqV6mLWCjkbnJxghUGtoltdlhMLkIlYEwtMl%2FDqWZOQac0sxd2OlFBICVzknhIZOxvtCnCH8pwTkrrEKclqtWAFoAG3ts%2BQXoyYNFRv5zRRtqRiwScANNLfqEfUs%2F4jfpXpxyIf2jmJojEnyho9G%2Bxzf01Hq2tsFVni61GEraoIbTlb%2BzX0T3ZT4PW9ZA42uJhClcj1wPgL1PS09lE%2F%2BmdNVxOXtXzig1GnoxaeJpp7T7SVQi9y85DpeqWNs5m7xlMKqT4cIGOqUB6vP0BFeN%2FUA4Jd7ig9pRVvLzJyHmjSxcqy%2Brpm0dljILhJQa6LKyvCZxbnJigjHjRP3jNMzkj7CpyHIl%2BIzXDvVxhEpNLGg4rQTCFv3qL5BadskygYk0ywOW1cBqfkPFf09qlDohIWWCvzyAYSwVmjoLS6TL98sTgBrjmCkdllbClzqpENEW2Us6q0HA6szB%2BQgFmCH2JLmSu%2Bw1%2FOB8PWjz5b24&X-Amz-Signature=485f690e53c9f17d31ff97b56f22408d334badc7a64443772e53beea3bc095c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUTW4OS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFRthp%2FHAEQZSgl%2BBN%2FyJ%2B6I4JqMr1EehReIkKdQKnf1AiEArGvtddO5cRFTF9%2F2ISB5ExhLHkTJRgXw18ZnqK%2BBBncqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5ZYb9%2BAm%2FSnXX%2FlyrcA8FopT3cn6lE6ETPiQLOE7Rn6hepOPw4uxyQO56G1nrVg4GhNUk1kLYPqwzOqCytYNGevh0mHoynlWL%2F7VFe8fCkMV8R1yVo5viyQuAscQBH6yyWKADL2O58q8FLdaRJ90b2%2F96uSo0YPmd1%2F72PIKNzCh04XXnM6JrZ8ZqnrayZttWqD2AU%2FIOVhvVoqVoEFstbCqN5YDrTQU7qrcL1bTE7AzKDfmOGcEaeziFMBkrs8Dy6McH5WGJ5wDpEHndsXPcvvuuINibVQtQCUVavuNevh5fu20lbUqyh%2Fx4Y0zB6R4U0VqbRAt7bwGZAgDtAeoMAv87HzLMnXsDAH1H95qEGe1Jl8uyKXoSpAElAR58TE9kZV3QvsGa7Fpy6%2FT2H6TZiYEqfDWdUg%2BIu83N%2F8nqUhAUp91rGjqrCkg%2FpourFq3XstPBKRyTGn8mSTdgesZjE6JMjZTc%2FZTRd8%2F1BsR%2FwY6eeYeDpwVMRe0WQmQvQ7B3HyxCCjhixtVM1vzEojrvk3qhEQO7fLZkFK7l5TLoQd8GV7os7Lr24xqN5QXUx8NlCNbLp4eu5ZgEhI267XQ8HBQEfhFSTacBg5EXhvD572quYfMpbyEvwQ1Sm79io3%2BW1nmJW7Ch0uoVYMIWU4cIGOqUBVzlFVdLonkHwo1rsnTEgZHLVRzVA32TN0GA35LNq%2F%2Bm%2F8vjS7jOdeFI0yln4O4llov%2BliZVvtXaXl3%2B6xLBbXEmVCW4Q3Mn5J%2BfJU8Ffh8zVqr26yEpb1t5F2YKUQdbvwx8S6fK3kYsIdX3hmgRm2TQhGhUqnrDptiTNmXOl1eAsmA1fbXN1iZsbKy7RoozS2Qpkv6Knt4WFUscrDPQ8bkEavXtw&X-Amz-Signature=da8ce067739c0dc5fbafcd53c6621c93948c609c8c7cba91fd43573ab3c3a526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
