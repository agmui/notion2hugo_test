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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4E77OL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDenj7JkkitMKD3Gh%2BXiB7wi57%2BunByDvSyzUnBKXiKVQIgSX4HDSenMcTEbF4Qn5J3NJ5pysAjCfnjZ7COQ2HBMTsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGdN9cFaCFQi2%2F%2BfZircA2lFC9rcPHnFCWOPpk2SW%2Btx%2BO3wT59fCrXMfZL%2BUJQ1pK6jgHAR2V2%2FJ1CFsudaFP1aqg9189g%2By8pja%2BamMkrtvrfgDi88w6p2yR7akGYP3PO62%2Fx6IcyACMeHkptfdlgrvQnBj57ZcLu3feZKSxoDMEJTJuunYcDc3n%2ForiAim8MAzzch4ohSuub7qWIC%2FwDU5cyPajHJOFmp5SghunhmEYCaABSWda1k8havQX7eABsU11fwTm0hXbOd5FOgE3kO1PsUPCqU40Wt06auDt2KeaD5fouQitio2cS00KVeVcctibglJkzcwC58tZpl65R5hqXEV4flzKqjKmNW1yHNZ2UXVBariga1hUYBNLBRvUWeBSe2KcY9jt0QHoEdiSfCBfkyXW23lod7WGn5zycqbJkilsZxohBKWJbahsHs%2BLzdaKjVAzjsRz7%2FSgMdPqHDUcAMobkfnh0%2B6rljHjxLNRzIOsMHVlRrO%2B9TgW4vL%2FxoF%2BLkH%2FSDUH8pxqmUO5aNfSeIptctzSyv8mU5Zki%2Fcu0J7nTry5njkKE0NPIuhpMVny6G7NWOW2QK%2F1B5eWZvTaCj%2FhRlTpOvPgqTWGqUkiG5jvc5zAlEIwZoWpMVBoQUr6R2uFfFMtyCMPfD7cIGOqUBgol5z9kOz7p9do0pYljwfS086DOGxzZ9Y5TPwUcBGxdhMqiJyFIXUYZ%2FBdCiLR2pdThigcRquaMNOKQYl5Qq5CwQ2LKOwems5VRAGASxpmOuJzPoI%2FqzFLEG%2BD66USBtprx5IvmNZgWmeDgZvbTF%2BCSUHZYIjHpf2psb3xcT6kiIJDWkc1yP97C991430C1NpxS9pdjdMsTvumu5Q8r28rfg%2B9uE&X-Amz-Signature=f3c5b2b00faefb37ce1fe534324a7ffaf16633b5d656052b5fbcc6f1f5c1d668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6DKNDI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCUjUplY9bQ8sYlJ48iRhnk4xg2UJqmPBIBmQnQrxbbgwIhAII69k3pHl1TfFn9U0WHOrbYXrOpae6p7GHJ9R%2FoAxl9Kv8DCD8QABoMNjM3NDIzMTgzODA1IgwmUxKpCPYEI%2BDhdjYq3APtfz6D9V9Vf%2BbEuUAhxERrpSaZPNseu47jkmvBgytmGm%2Frr8fndnaPxkUOJbK7cyYFb56DBHh2RAGDK%2F2xz6%2BnypwztbfeT%2BqfYj%2FOSCVAzBDFoarl15cuceJB6QsVYaXMF377sTRy6iSwGUrH70Eu9K0bgxwooFVyAPZPre5r5cC41wgGPpqFJ4dAiNJJTlR18ZZlHNQnXOvJRQFmdYICSGCNbYqrvIU6FYSEX4B5UHcrqdHboOmOSdXFMV0FQLAMkbCh31DFpiLrJMAGUN5kzDCd2agWOqFIdd7mYcYNj2r8pRZdqJVUm%2BlPBphm%2FzoEoYt5pJCeUBVhyFt8merL5K5BG7yoKNbmifUv%2FilRPhpC1dje18F%2FzCga6Q%2FRIcFH3VrGsKSQdo1V4XYONqiXL8MDk7lwvxJsCC2hipI2AkYDIogLKw3Hs3AIeH1lJx6aDpyGbX39vDtJ4e7FC2%2Ffo6xGsljTPSJaCijwok2gEPKotSGrsNVsqEuYEOq8D7HYIi4Fwp1j7kTpQ9wy1aJPCc%2BkT9v51X1KMp9PJHatCDBGZv0%2BO9cd5pyFnNftlTDAyh0fTjFB4BOdEIB9DTW%2F2KBsghbXsHX3LW%2BsB8T%2Bn%2BJRN7OrqbCZN5uxcjChpe7CBjqkAdtwSXX2r33EhcmAWjPzEusmwI9BAHuVxQ1iNmLu8li5d1JJSNMBEtVBOdLosmIYzAuj8tiKYdVt9XlUhWeMMl26KCHJZOMbGFeSH8Fu5%2FYTmJtytUw4nqLwlNlPPKOB%2BenKliv%2B3eI7CTYVUDac0IRxy4LuFxcSBuliTuXzFvgSxzJrcn54nvFQK2uAJbWCpwJe4MxzQrW%2BDk4d1WqVfaD6ASYI&X-Amz-Signature=6ce85a97858054dc21c1e7249fa6ce441021bb290eb5e960748d7332d0de1864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
