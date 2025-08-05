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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QO4QBAL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCACtu%2FNGkJLw7UZz8vAG3HdqSvRBzFv7IT%2Bzyz5CkfxgIgcQW789B1QjZEi5yk3XOinxAEsvTMISiWTr%2BK%2BEIPmqwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDP5XNYwvmLE2OM6ikSrcAwek484QM1ERlNKYPBJVq2P6P5fjUB92J%2FJwCGvN3CsPvxsNFXQ8oL7aQe%2BzX8E5bXNHti%2BGovE9S3OioIRv3Glr37UJRzHYsLazCuim1RNW2IAFmfJqucqYspVUJZDmwZkv6uhh3uAAAJDcUpD3UokiINk6Pjy9dsen7b2W%2B%2BnMvVTLrdqJGx6BcnYXn%2BROiy3TMs4eStiymGQfV7X%2BGFmzpq9LpaowdRDkoQvV29HtWmQvGWwLWn3PoE5b30RBnCj237ntvfRr5usiTzUZgTanpV0%2BsFf5FzlDMo0xSq0Vi%2Fyl3IqqmT3fi1vu4u96Yjm3yBM%2BVt4FDAfrugnq6IC0PVgqxzZr97%2BKBoy6UI3rFp%2FTfZDCxg5Ul1BZipg%2BzKQcOHr2OiKyrIt6YsJQKsoO3N2SURdL%2Bvy2xlWbhxKuMXYjjS%2FicOczkvZYQIXS7fqVT3Bphl%2BQCsA8aEXeOeL4P3caYoYfSNdokgsgqSQUoz7VuQesKAqHKplWhbG6gKhtN2Ap1yLlFDvCO8yg2kzaNVkwqyLWe72gKhXvQ2ZAn%2FzOpWTKHrHEduZuXwSLfTUx7Rel10RuzlcTPZjx4oV2SeNZtvRzP08ov5gSbG6dQrmLoTXxqKsWMjGTMIv0xMQGOqUBT3FqP%2F160lvhEXnohPUaUOaym5DOBMFkXrZPX0YqVZ4CzNiJd6mLiGE89T9lzPUJMuS2WH1pUqH9C2WB4MfX9%2BFpUDIsji%2FfMEQXFiP6itgJNRVD0ckTkL4HClRsTNCIBv8E9wVJYoQsNlkrxdb6fzi1v8EsQyPGhrs3PqFKPCIewmf7Bhq0V%2F1tT44iZyHDlH8zYp%2BoGwaB6Q2Cf4F1YoCHPPRm&X-Amz-Signature=b6af847c0c6db896a1ef87c05ba20818a7ed8b284e1b562c2f292dec9d0050c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFY3ARQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD9LW6GpsI5yvPIF2jI3clGOxiZRlCRvo6kJj4lkHttawIgMnAGcPwHRiNq8puVE91t5G7PZH%2B4Qzqc5nCBVOgTcyYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKdx6rLofLyxda1O4SrcA%2BQzEIUOxxcafaXOSYCZTdo4eYtfY%2FA%2Fo%2BPc3np%2FvZZz84gDXSw03HRcsyvwWNr28LvxdS85AYeJx7%2BMxeQBxzLWQKONZ%2FIjzs6Q1LUyokOUe6xlDPmTXUDlpyghCM%2B5YqCTeOlH4UIl%2FC3vLvNcMuPFE007j7HxHBp1s%2BzAxQ2IVwGNmMGgbryfSIpKQVDBaiNiII4lJJ6EPe%2BgW6IbpsjDWTCMZv0l%2F1YZZ%2B23RzxCjfRN%2BChdyDRHspJ8b2BIQMRECEUoBzHefTe3SxJxR1EmINuMwPXidIOHuvfTDM1VKHdjQEBghbgnWVMDhPh%2BudBveCXIgBImMP%2FETropl3DTTnjz99wRIQ7iUMqX7nj3qQq6S%2B67vbT%2F%2B7Eq7Pia2opmeFA8hzkd9DiacKi8JtZsRnYohpDrGReO1YZ6%2Fom24dv29jIFTp5GHW5eRaKtzi6EHXEmhJfORsZD6fhEY6KorUdp5YtjdmntE9Ce3xRw77uaUE9390UjzhoYoJusAVTphZZ2OKbGYMs2Wa4uYfM0L4UBStCAyy4JGem3ZyW5xclfxlIW%2BJIYhLz8HJiUrnvlwn84QBZwC8Ryors8DqMDIHfdYCBE1UY4dJAavHENVU1KYMUEQUGOg2aaMIz0xMQGOqUB2f4xXHW%2FKcHKi%2BAV1OxlVE0NpdkJ69uZSRamjzGXDHoXnzjDaLBZHM0oUXFqT9mOyVnPPA4YpxQ52wW61c%2F3VTN%2B7GKs32EYav7YMfE4D1dhHz1DQqyG5WpuD2iBIyV7zkIFttC%2BWWVtX1Tt027OcQx2tSKFdjhetzywUmOGivZLtiuNfEEy4mvj9XRlrW7qYqnKvIEd%2FtD%2BpUa%2FCwh5BDjtPVI%2F&X-Amz-Signature=2bd821f8f669fbabbe2861bd82b92be2a2495e3d589620b0b4b27d1bd3b01ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
