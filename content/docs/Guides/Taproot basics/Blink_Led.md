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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RN4PKAO%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2Fg0jkDk54DCs2%2Bd8HCC1xlxzBNvtj6U0iLTzJIGHYtgIhAK5CUGp1b7ILdmRNfmHslKXWgdBiDSB8NWsP5qeTOgoWKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOySp5O2iWCKa7h68q3ANv7boG4zTqOXl2qHnv3p7Ux5%2BY%2FDSlIHIWSfjBlsV8JbxfNqy3EEhrsgeL3qKA1%2Ff2Ah0%2FEDQVc5DcRVDEkvzp%2FPlTeIRng%2BWiyfnMdOZ6eWqvMyOTYVQYIRlrDweID8TpxMcrwb2MJ2kpZYKwz%2FtPeX8MXvn4RQDMqwxGxaemnt40QND6sUTi3xsuNbGPkJaK6hLHlroyqp9S%2FR4Q%2Bwvy6%2F9qV5G1LsOr749k4ADlYXbKCKqxXar9WaOU8x7LITVSUEvt4yyT0tO8AMSpu7KIP%2F2OZQUUNoQW4Zfgdoo6kz5MR8fRTSs%2BbAZ%2BnJpNFkL1wK1ggG%2B7Qn9A8kjEoWDs7TaN6kFolM2v5HHbnPYV47nHVJDqFbgahKWHJi7wQa7LWnQXTFKID6N%2FkWTBfBQQFx37TNCY0tezJTwyAhlwYuc1fc4SDbkF9lMYLMZ6659XE6R%2F3PMxvaFA0w6KXDejo6fpJIO%2FlipKImHmvo4ENQ3Cwd5ukbcQgfq8CvOT7OhhuMRIRNZssGJr3QbRdyBkhpWVOR75UCBvQ3y4Izbe6lSDcVw3bx7gYB9W7BMmmsTHfi9vHWtab%2FvvDYG%2BNkY6UuJnjEhmPGSIFH6MW0EEpLm4PSravwdZy%2BO1JTDZoLC%2FBjqkAWz8VchKR0PF2H8p2EpLE4ZoNSuVUC9w9qeQTxLdd6pfGUEu0SCjfp%2FdQafoZibx5uF0dnvlLE4DUOcgrLquvenStp1Fx7oeYfuZRP1j9%2F8KUImtYg4KJaoT9I3oXYyvcZhEkEp3b2rDOEQBcUZldQnDpyuj4gEjJWIxzEO32NCzA%2BPM7my7G7CcgjpPT73yUjuGGGbgs4TXDFIToLmc7geb5EfG&X-Amz-Signature=34e73580f6c53928767c92dfc8a310c6fe21b9c8066256cc5019f41945c2542c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EW5M5WE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2FzRlukQN0IK%2BFLJsOSm3sq%2FTmqja6WWpzxN1hw0jEtAIhAOiybOwX3yfkNMgS2MZqjuRNImvmxZl4CI4QCfUX9ViVKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjXVbrzMwTWR%2FUboYq3APq4m%2BKVMr5TCEJ8S3oezgtMsVlh9FB8XYU%2ByfDLue0%2FjLs8eNuEVZNaF%2F%2BA19n%2Be%2FErtPz0zYshStni3SwS29tjq8PfjB1cmvy9JD4jo9C4FjnHgJOz4G73SXKBlvgJ8t9fT%2FZxtl8KVrBVK%2B%2FodpDVZF570qKHMVmENji9YYYMLAaRg93UBe5yKXXzQHxRDjqi1bpkDVPBCMylhc6xvhi%2BQvcldeRWWIbv%2FFdjCqnoVYNtvWnylkQNK2xgeuZSuzGD4utWPv%2BtcbL8MPUKORheclDtqbx5SOr9MbGayjBPWrdKDvyZxVlFyYbYAh%2FML%2FexUbBM1fWwiYT5CyOGxH4zP5dARxvcFIeKbxuwhcpoWAIyoOVLi6HzmyI5upoXHOBkbodVMtL2xCnm0KiRx64SWEXE55Nv24Oj%2FbPkNx%2FUxiQmIr1xKAkHfFfYy3Bo4rMSLUb7gNaKHMcqScLrZW3EziFgT0u0xtoeMr33%2FXkbYx1J6a0XbUtsL9GMjQ8elB%2BhDdB4HTMG0QESpeUMPf0I7Aj5Xjk3N547GX110OFr6CsgSNgBP45WhnYKfaAHLP4vTYvxT96epEefhPLK4IbAAW9klHbBquk4ALNsulLcob6N4hQv%2FykgiA1%2FTCNobC%2FBjqkAZLiNT5UiPGuT6EbuAy78ltGGOya649mxTMwlKbk934JnTiaY8UdAopxxtvfEOJa%2BTQf8279OwYA%2FtwYkv2KBmXDkGFcBCz0adn34yUwJwy2d5X9XUcCUKA86LwoX0rClTI0A3PZ3K%2FxXhiCfMm2cQrBYY5EHgypKcqc5AdutgTcn%2Fj7iF%2Fcv7VwV%2BIjz6APOW8BsJR4o1MDWSU2Jdj0saO75YTe&X-Amz-Signature=1d8ef923d16962124aa9bef09db65336d0d94deb2d4133f46ecc7d1f28eb3d51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
