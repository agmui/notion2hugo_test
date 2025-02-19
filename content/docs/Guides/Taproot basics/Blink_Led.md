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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625HCZTRV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgVuEwV6mJvA1OnL%2F1Sq%2FdFHhYIdKFBymjF4UeSxpjlAiEAps080o0GHeUj521wXlQLL7cM3mcVGQLJbSugW54Gh7EqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3x61ruNGaQ4nL1RircA0M1iNm0EHDkqsl99A07wgF4hZmY0d6WmNKKPttfhXypMeVSzteB1t%2BVv32FZNXoSM0WNhvrROeAkM7nNfAvs6%2BOVQ%2FRLm%2FZKoJrNLG3lZ7sGnlHVRVb39oAQud2xoul1gbrCYT5QIoCNkQ9WHFR%2FfRqb2Jlq8%2FXUn9muGy9miy3KooO35%2BzZY9MEAXFYXCr7W%2BVtaUEnslhHYFVEXb3Mlqo1y0CNNF24Q6aIeq2woQ1MS0aK8Uo7kYNWwVfkeoshIyW9%2BDm11hB2DZjr%2FEQoNDTBR0fjCfVQDU1a48rpeMSTLKoIkA7hDtaRRrPIN7wN%2FcbXNWSHSieFroUL0I1d9%2BY5JQ5LaLn7lo66CDUamg76AKQkM7oIVQWb%2FoKIrNtniGmF%2F6YoNVFXE%2FokuAl%2BNzMZdYNVLWc1Dw3s8f076G1XjwEIp9BgIVQoqZ8027OnHdoWQdGw3csnk6z4OEr452VF4f1XFXBiVDsWCN7ZTXVPDVl4atgJIG08T8J%2Fn9qVVzVdd%2BSdbucr%2Bki05jJ0F%2Bqd8OAXffXPbTRyWS3zdvh%2F6p%2B4f%2Bhi%2FvsMax%2FoQ7LEsIXBp16PgbIV1vek%2FWi%2BCb%2BYlEUGqUoDLqHL2oICD5lFTQs%2BlELtNMT8h7IMPbu2L0GOqUBj2HJMagvnmL6lYlUng26k7IT3ljgHgecnsqvm03qBRxrlwFSiUtx%2B7hPofdRg%2FR6hFHLQyFGEVeoF44dQaAFzl6H4ppIFLy7d9Kn7I68jvxtfsIMCf%2FD3GjAEL0nGWnJtd5tvA%2FtSnZ0x8M%2BP91unrEddS0BjElos0%2FLW93BIGSmShbfICiDb8msf4BGRbnvC%2B8AulFCgnjCg7sHqGOZekosxbdh&X-Amz-Signature=f91ad6b777e98bf2d0f09f9eb19a4995c72be82effb0631ddc2dcc4a5f62b22f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJYROBQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOpBJnHXzTKlSedEHpZMQXR0YZdOFDJvtSmXglvU2w1AiAgmnwGOBMXe8gao%2F5mRicBCOmmIEKFbHFpPqRyx%2FjmJiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvLT%2BSRPeIj%2FCHziKtwDXjX5PQ21U1H62hESnQaM8qAaC8WPBPtsh090PZ1imdfcQUdK8gAejWfX8oGhMLihoaFDKPUUu%2BZarB5S0Pq812ZHZxGNJqJQE7iJGKvcyz4r7Kk8y2DvNrp7SNu2G8bQW%2BJpOcnUM3otrDE0i9JjQXJNRWGD0j%2BuwQTcxVsOnEEHJ%2FC5KtN%2BhhDpLTOSqjl68t2NAaZezJ6QTz%2BDKMzYASz7GTxAIFhWJ771iKml3VcOwy8eZi0Ed3bfB00uRZ%2BAuptbKlyO5ET02kNSAVclJhh9Mrx9DuSSHb9raN5oqWwcwZ7LJtEzAtFMnVm%2FoxmwQevVvB1btpDuiM6XdqMiQDtO8XsG9gy%2FMLfI87TaFB0BbHITtBH%2Bylk%2Bd2iGQ3X2RjhcJZs270RUHQQ4Oe7OCuHZDxCxTUzZIVa%2BqmU%2B8Z7EeeWsIgy33KpUJZ1l1aizILpirQfFGyl8qREvlpl4I%2BQ3aOQFL%2F%2FnlenfBxjcr%2BmIxVFrbGo7ntpG%2F7Z3mhTwgt%2B7N4m1foUF2ZqSQrCsteXcztvOTDi%2BAMHHScJdrCA0i6xWIC7oHPEwH%2Bc4lNN%2F0VJ7si6Gh8ixd94ViRJwQd%2B7xsP3ADIhmCw6l0EGv8zY1rmM%2BG01GnIr7NAwlu%2FYvQY6pgExYTNPiERXGXqrynWRa8HUJP3WfhPbsIWFUGZyrf9XqoB0onkH5vTKok4T920ZLWLeOsQQiK9Ls5wuO%2F%2Bowa%2B7CQtyk3xGj1DE%2B8tnrncJXPzkUCQRKCP6eDhVufWmxX%2FtZ9AKSQzpY1E3fj3aJND31HK1Dj43dQECZRLCt4diqFj28klNbXEwqt9tvka4RuT854kHmH1z%2F2rusdXy8YhseY%2F3wN3Q&X-Amz-Signature=536782c33a20c00760019129d3307340d50168ce15ecefffc275af748bdd8dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
