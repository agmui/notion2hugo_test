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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JM4XPU7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDGmlXZvqZBcNql4oNMXEotBfoTHYmJhkzPelSFUcg8RQIhAOXKl%2FhPC%2BLMVY41HRkU%2BCUFHUnaxT2NGR7lMXcNoFlwKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAQxTvrHU8rKx51lIq3AN3UZrnZSt8bsedZRm3Jv5RNNzfSPfdOjIhBmeztYQGvnPm%2BHO66X%2BDuXXRmWc96EUHCnk6fWmwSbBAkEZWp7bzMpsW1LYXA6bB4dAW4XW%2FaxCAwYsa16d310J1ZDLhX7OGft3Ur9U3waBD2wdVrkoDiF2MHscYA%2Fsjh5VJPsppotFbECNY%2FsyBRVwUKZi%2BXLDlEvweBFHUQCD8Wwuwce18UQyWxL%2BH7xaafO34%2BvZQv4c%2FQEY%2FhV7qMwEXQ0e4VYg2NDgHGb7K8CiPEbvg9wOq%2B03lsXrSUpmdaFkJAgZ9hbWNov8hIkxY2xz6kTJYeyzS60Mzl1xCgM6R1C1CCWa3Z0fGK5CWtxBxWI7vjyGfh%2FTQt0cx05RfTCR95gQxwiQuGLRfbfe4oTeuBOf%2B9AodSgIT360%2BCL5r5ZITT9XjbAVPGqHcNO%2FN5cpnPwvWKv3m6SPlksxuQtI20H2Ov5UsoOp2t1wki1DD84A9i889lWIjWz6GkJCzeQDNYTXdus0%2B%2BfMzjx9JIpLNF41QfcaGjZgGLCJOPtAqWRvUxX8QiLPqLhmIcLqZo2lq9UE9dPeBm2tXVH6EVFB%2Fw4qMryRBe%2B752bjvnzTg%2FbA%2Fi68lYzTBGoY5lbi3eIT%2FHTDWn9bEBjqkAcruwMs39ObvkWYkUZ6Fr3nru5Y7Pzi4sWU%2FYcYbNhCOjAA39e3CNkjaOqupyUr7McZAkSeubzRpF1d5O60ncleiSKfy%2F3vzA%2B%2FZC5KGPxsR%2BRaG1I6XqYvRUTk%2FCiH1UHBVvtYeRLx0pZy5q4jv9LGocenfQd9CctOjamp67LGjQLdi6z%2FSCfQjVB6JN9DfCf2FfDS%2B1sIENbpVav%2B82H85EDhT&X-Amz-Signature=f725c6fcd8128039e3b6e4e5f3d71652103036d57fac415fa36a7048e0b10171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPJUW6U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE%2FnoyhuX4qI9nH4lHsWzge1qCGjqgC0%2FxU5A1mZFbfeAiA81YLvFwSjz81NlzJsbYSFFdxYOSCQ1xPs%2B6H3lsUK8iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCu1KWj7Vqq0Hzrf9KtwDpGL1CwrlHKcngHPb2bm99SlJMJ1BAxIg0zvnF%2FVoGsyPGul%2Btud9VxB7xOQ9PDsTnL0ebXZsoQRibQg7Ywg%2FnfJswpCpAsDjgceFUjU%2F%2FrTIKDeBt%2Fegk82GSR0AZh4Y%2BmBCRv0gwqw1jx2MVN1JV2P%2FBfCxLXwtq25%2F5unqE2%2FGb37229uHulx5I%2B8gx3XV4G6b6Wi0NoJK2RX6nNYMnd5KDUoYpJyrTvOFYYfGtjN5VQkTNQw4eTzv2lwSM5TrCwDRYS0oA%2F0EVuWkUIROrke8KQZzf%2BMUDeM2U0Oe0GveGNDHHJLp8Kj%2BBjrpOy%2Bd%2BeHCCoLSLLlI0yNtmWVB%2FWq7sqjJ3CJ8URn9iRu7I9YBJwE4YbWIhKsvoOj1u7WQSDzWGsRXIQKNoxBzuDuVTKZkjJYw2NFVMBcxJT6jMotjr3Vnh6556PIqIcB896pFILqURqvf5w3wZGgGZNfAXg%2BgGE5BN%2BoRhO3JLKat%2BxL72bBnD%2B0rfGWhmLaAEhXFfPGxJKx4v9tWzqwOL%2FdyFZslSt%2F4o7bwTTPmYuzLPR03PwoVb49o93nECFhWChOkL%2B%2FXRT2G0kQ0bskyAb0NN6RC21ZMM1kKZmaQ4Ad5E7ZAU0lIy8XxTcx7DiAwo6DWxAY6pgHZOK6KxArJVuF01mP8pric%2FRVD33fyFJ1de%2BR3nzmQuQKj1FiX0WeOBfFJnsicI9P8KAUeAT3kBSPk8Z3QHq4KziJLO6yiQ1pz7avg597NPFlNN1WbADTPJxwIzRTZ%2FhnLawLFA5A8YyqZSr9DKK7vwEnr0ELTg3BtSvDb%2BMGUN%2BFphrsGUfrJLL48n2K9IdEvStFdu6FHIcIjFYU9FU0cxGJpAi9o&X-Amz-Signature=93b0c61f8b435aabf4014e509a61932d6fd068cf23621d7dc4767715a424e356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
