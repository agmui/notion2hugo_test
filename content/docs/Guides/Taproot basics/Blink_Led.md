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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STFUDHJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPuryTZDu2PDQpSD4lDd3baPSwhZii39CbCmjuVy43vAIgDe6YHVUL7CA9W%2BLgXJpChr8NvkILmuW1VIw32fL8rXUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSivw4r4wqbvgyp3SrcA9Cf%2FStvKjEvp4fNQLZs3H%2BkbYbC2%2FqlaFlq2vBa8lPGSAav6kYOfdcaipZgBmanv2OecZ%2FvtpFWbHsDraeU%2BNPy9QwFJHBOJeFyeKTDQwhQnP5UidzajnN2sDpNHmCJT8v0zKcfOROkLMS6Mvj1vBE1xa0wi4LLPyo7u%2B6R1AE4clMmQ3GrN%2FiARQ%2Bj8zwDF%2BWjBMDFzlVEMCjY76XYKJqjr6N%2FrvWB0ntysPYblt0A%2FgZTOhyewJ207uPPP4Lp%2BxLsTXLINeNfY4g8QRAwMwxMl6yQt2DtcSMgImw8KqLrFtdhc%2FxPYhMnjgnAqDua9OdIGxDhAcSbFGf7TTxq6yy4LgvT3bncCI1e2KUsQEY62e9bFCtG5H4%2BIj6ATKAq2Dk9h6tLwevepxcV1uEHHsfYECQqhbtUgDcio7CSZVf6FFYBGr5yqs4EcuWI%2FHYmTcan1N5CCuuAF7bMRqpLyLMHx5ZcrYB%2FkpJT50KyCs5pTgwBRKDicHF7vRRSqAklV08BkZMQUuZBYY4Qdb4hsjJ7MMH4%2BdFN%2BA0QY6fBMOpiLoEbyXNUQb8I96B4AD6Wp30l6oKT1v5reO8%2BOo7zYqy%2BHZp4cTnA%2FWIPOWudm%2FbQw0Xv2bDazO4B%2FFQ3MKbFtL0GOqUBGKQh%2BXU4ctz1F1EC2dwao%2Flb48ejcb4dAVOjA1esbZjbuwJ9ikXUSkgmWHBAmWWXrQ8ztVJMFVVMFKJlNnbKDPmtbzTaju0J%2BCQOlt5vZNYstWNWsf9%2BkLIAoXtJs%2BrMDHl6UJUsMlmVanLJd4%2Fz2cW0Tdv5sLt3YUen4d3JLjmvKyVghkQVLMmmD6GZ5VdkGh9jcrQhpXHbCoxIlIwiygXBd4%2Bb&X-Amz-Signature=6f437d2a0c0999430f5b0443855f9405a2da1b49441b7f3ed5716a16086c9b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVAVN2Y%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7cB7ObCtZ1yGverJW%2BpUuxthpUwrSPi0OVyU4ruwZ%2BgIgcPI6mwewBCjqwMUDnQjm9yBX%2B3u79tRWN8EjJX4PzhIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCc4GULGncHdZLX3CrcA9w%2Bm2Aatw7sg6ixBADLCED5GGXBW9Abxee84%2F3B1Su80YG%2Be4KilUjMPRDZFPgqfnd7oom0s77uZ%2FeYVb%2BR4IeyrI3ZWUi5arhVX4iuE28HLGCEjlG8sUu4gSVpkiTrRo3wpSPKVKKvzM1ybcM8otS2kG1loL7y1%2FUJ%2BiMKfrT1ddfMaO9fsXz5dYUct3SWvChGhqfAs03CyQtbUe8LXVld0%2FGHfzSZj%2FeqIgtyxtpk4Ofe%2B6aoaKiOORi%2BIzUVumsDfc45CvE9A%2BPSTP1rr7z7NRs2XhpR1wnn75%2Bjdu1ntAtHMgLE1hCnwqBMmPubYlwYKWOj%2BArqcHaRSzDXadhjgVz1kM1oOr%2FQKL2HIcemdRaSLRV4TafSVdqS75mCDs4gvssw%2B26gBUqEm%2BHU8PRa8gVUdEinS8QCWOfVkYpej5emeDhe7hlrVYQcX7%2FFPVyqb%2FNXrHCfJ0h9FYG5nbgokUwYMFTogEe3MiT5TvofzAKuwbrgxmSw8WmWt%2B44L0PCPHhIwOCu%2Bj6jv9nZRPqZPxBoQlLpchWETzFS6VV8MmNOoM7La7WrDfTY3XgHE1MPb63kwD7dvF3LiEYO4HeZEt0%2FEOqhXyhUMqxceh0ZCoemOqGpWmCebZ1iML%2FFtL0GOqUBo%2BoeW3oBoGYcax2bTdT9lbNC3jmYCES%2BTLmc7ADB5WF8WZMP%2Ftyw%2BT07Oy6LW6SiIjGyvX6eP0tNLJdhwRj4MGj8IvGZBHuDshm3GOXxB56hWJ%2Fc2Jd7thrqeQuvRkrW0MBjqWwXF3FJY6zS7kIPBx0fuv%2BxpX7%2BBQq9kND5%2Feopx63A5a7lhtoCi%2FchaN3btHVfGnt4mfWdJH15VVAptn0aZyIN&X-Amz-Signature=df8385e4af44dd86db81b61f3313f45646291f2678793db473ef3dad39ea8231&X-Amz-SignedHeaders=host&x-id=GetObject)

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
