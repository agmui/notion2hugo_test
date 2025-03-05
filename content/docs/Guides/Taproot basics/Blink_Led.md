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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4WHTBDU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55vv7NWS3okJhKFfjxDb1W2Y1Td5BvGKHi7oloqdalQIgKIYCuwmRt7F2YLc7YrNxUCsy4OXB0TJm%2FkhMOib3oVgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPHJjyJ2gJ50qdqKUircA2u4gvXhhEZogbuTi%2FQ2znrZLGMpjNip6gAKmgVsrDZ2BJ0P53BmsZfEoWtizB7hO8Sg9m4l18gk%2Fi%2FKihX14urKnW5bwttG0AMNo2w%2Fie9Cvu0bC1j9XA7pT7nPS2OlMpGG3cnj9eOP5HTFmAlObAIpuRzFq0yi5vltG8552IGfd6Z%2FYaqhXpPSZcSGJIWZpt7adGl2vk7ka378dJRbNH%2FOmY6hYuVQMs2TgGjTYt8kZur9U09K1CFf8co5wUVs19WYf4CCvEZ2gtvXABJYCs%2FK9il6amseW%2FKPyeC0CWZWl3W2ax4agqsXPgpd1hF6jXBz1p0Mzq104ph8uMxM%2FR2mFvakgaWk18GWBR2LITaZ6pgSQNeHD6q0NPk1WAZntOoeexkWn1pq765JbZWA4H88chryQ9bno4PLFzSmdR5y%2FrosKKN7p4sMoz5DFXXlF0qx0OsFi%2FN9aeUXA1N7s9UZpwYYSaHZl34baKqgJvLJPezrlSCUbFzcHXIj0AHA%2BULqhbfKrRL5LJ%2BI3uo10REDy9a328MFNIDNkJgbXQDfXKqRKVihkYfubK7OaGGZjgRzJ2W72WS4iTKfY94d3bPTwwZhtnnz0VBjuDUAnKyHxNP%2BQ4oVnoTBf2YfMNGDor4GOqUBqaXZR4gcQa0ifDYQoQ82B%2BYH4hmLcQfN7t53u5bavOx7ZtiuezcqelgQItff%2BmqSXQ9rsz7dZQ2hLmN0fEGRiCDgCVEwL%2Fyb5IKufGyCVtG4bJnZCCMyVH%2FT9xet986IKZy3I3N3oWziADA%2BKB0IY5Og8lelUIVMLMAhy1wIKYBSVSa2UNCfDB921LyThQF5vdMMpXdDjHS2Kjehr2%2BgsokGlB9r&X-Amz-Signature=75c239173f324c6eef2666eb0a467b89006d236b4606aa044ff83c503550e064&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCCAK2YT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCek8rO3LFSxoJO%2FZvCPJV6WQeSElgGpVzXG6gt682YTwIgJejYimKauUYZ1%2BrumLgxRt1wjSnGOLo9%2BkWyoVhfs40q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBs%2BajmqrBezaqI7GSrcA22wk56wwE7kAeyq7Tk3neA%2FHwx9w6omo%2FW94OehiFt0cREWA2WU5UPLVhQ2OwGFuSpXvrHiPFVH%2BMOVtELWLWnp4ixTv4RQGzk%2BPYahGzQLmJFbXevoqQ4lNPlbxFCGQ3FVilzEdn660njq1Vy8noVdTvhu1fwqV4KKHjaAmA0EhSr4rHUD%2FvSYalGcwm9BiNePHtkf7m5zjYNMbLanM90Fi4xl3zmsI%2BBPDnkpsB%2FQ%2BB8iS0nYl6HGtRgfcL0oDUeAKAaeJw%2F0t%2FBDBBnTiy1RNT%2BSvpFxI1FQTXNSCYFcQxaDZiq1KOR%2BAPbatNwViVQn%2FecIxqEPS4oxxQ38ZdcBzGeJpUpJ1R0CVjPvdIquOo8wlAb2wH%2BzkAuLG4yZH4V%2FmiWP34L9mbAS8IiJeYtgUMDcMlBuUCnOIPlWFpGXfBF0ZmNMFWfeu%2FvCLH0ddTzqWWmF%2BFgCFQ9q6ohGeSka%2F1XWGBY0yTCwz7KRD18f785LgbQDPJaE3ht62Q42j6G1ib4fCNBiQhCoRYHgxq80mJiuO8Ccyx9zqtXofrzNqFVM2ZlUiRZWZ%2Baa6KoQ4oKx%2BkZEnwCHE1vFewC9rWCCP%2BqMEHRtvJFLNjx2HWudpGHlUs2Bs7GEWPtdMIyEor4GOqUBjzlZ728UQ4eFcSnwu531k6wiAG7G1IwR%2FothD3o%2FZqo4MilEzNS8HI5h8BjJlBiGvAKeCbxX3uS4gcLIZDPaTlYqnxv87UV8LJN%2FBCGJTT1x6f69OJCiYBY0vLuCYdI%2FqX23Em%2B7nSXL4KwGaP9ReL1bb83EVdiduTcIw97nGRzXO8x6J6x03cjjsxBcnLbJBoQf4nNm2GIe4F5YCXjkJxPjt8hF&X-Amz-Signature=ca8f9484278c840bbac81a9f508c78ca0dfd36de531855f9159b34e2db7f6832&X-Amz-SignedHeaders=host&x-id=GetObject)

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
