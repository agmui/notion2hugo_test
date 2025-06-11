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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDA6MKH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1lWssweSQvKasjlL1l0pyyhj5vNqmQ%2F17Vj2FbAzx3AiBZSSoVYMiDLPIp3A2axDX6mpOaGkoXMQO%2FWnkyO5hPNiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHUUy6j%2F8fhlscMHiKtwDI%2BtqZ9lsspUDO9tphle08J6%2Fv3LDtvfUSdlGiB%2B3LtWyUR%2FuLeyCQ86Q9iW3Tu8UtCHaEWnkRSKVZV9S4Ei%2BAeWiDxaY6NvP6PARWNSUllmLnkx91sx1IildbOXdZUOUfJDxcFxLQODuiQEuF5h3luwjXZ51D05DaIXLR96MpYYRWjHEKjVoFiajiTX16LH%2BY9aGJXgW%2F6U8QtVJr%2Bi9hHBuBlXomz5uMK8cYNbrzDTRA5R4349SyiYw1s94v0FyIw6eBneCvKGGGzfvv0kuAlmPE3BvfAMllp0NfC3DjACp5QmL%2BdAIA84tDxuplGgzrgugy45kUbsVhvQCe%2BEUXPDrflYHoaGmtfepJhw4y4HS2xXh2MN2Tv6zQJuzoF8Pz%2FIDfAwhD3Uz%2BWICFmxsUsBchqmkVMcxwJmGn62IFPIsq%2Ftl1sRD5v0uinCjCDjmYlnVeCPsdZajeVJf5w4TJ%2F5y6oJuc953weBcoLquXFUCu2crE%2FW9XTsOfLi1Gk8TIGpaTbtpCc1TaH389b11Dwgw2LhlD%2FNTPd5i1tbHA1v4YzdLMhQt53KwxNtt3fddHq%2BfmtL0lgbqttgNEElwFep6w%2BzhAxJhPi4C8QAbFodDtxwQ%2FcUU%2FF36LpgwrN2jwgY6pgEk5axyTEf%2FC5iT6FSqc%2B%2BCfUnBxw8KMorcqCl%2BIrtaWITlzaK5DXQCRMTYqasSnn7NgNoaPsNraRcIQEPqIjtZ0ztb6Bs0xffxUPKSc8Lqjz4fSpYCD34Z47Y0jKKk0jcG7pI7mMb8oJp3k%2FdnQSMChBVfuP4WY2jMY0jCy9JVL%2FOx53GfGjNevEMVkPfcUyw1gP0v4OSqsS4xlFHiUmQkSbYwwQ%2Fo&X-Amz-Signature=1f797a90e88832101a712b18adb21b671a495182fe61647707abcc1003204a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ZXLVTT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG%2BWg8QfAmN2XcgNv6sD7J9%2F7ZKwJvG9621enBJD8K%2FAiAxCj%2Ba%2BWbV8jFJbd%2BZ2mO78FndV9k%2BT8gwZ2LyO6ZEACqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd1FDrqTnWbHXZWHLKtwDLB5f6NBQ6U7mKqETkqg8G82xeGViPU7nyjepKkMyRCTebyOrLXE6kajSeusPiGeHPF0gCizVtOpxmw9ADzelkTZ7hRzRk69bwEq2P5%2BHRO282etl1pcHVfVWe0tIR9FUw1efrcnO3tk4Wut3egZTxb1EB9vYqcAaZWT2vWqvhYDooyQLQ6eNq%2FyCksF%2BkLpCZ6Qjv4qSWDNuuqxoX1XK5z5%2B7CZkGtKckfJz%2BvUB08w1Ci0NyyIyKE0Yeu7ddu44ZWWToTUbOcrAkOholQQdvBolmhzYA%2BxkZlmkkYcsq%2FrCRJQIvN5jV6C33BTSHTvwPu3Eg8kDnXnNpfGo3FoNzbVV7nbKG8SLS1EXOVPAW42IAHFc31IZ4d0nXVSwBq%2BfwiAWvCVpEJlV6wmURDBQ6YC%2B0eZbbe8wuicUJALlmb2BYkzCEkMzUVQ6gih86a8pPO9Vh69GfyyuN1GhgCNEK5%2B%2F4j0my91eBlMivBT90%2BFCi245MQb9Oje1NOWmi5cmjuVHqSzuvOWzU8KtstNoSPJ%2BIvnmekMt7SQhRaHpTuOjPD84Xtih3Zvb1nVWokU3sAU7gqgHdJNucq3nUoBPlxmY6NtmHUuamYXUFJfc29Z2gapmUb2oSGEUyowwseGjwgY6pgGG1%2BpWsFq1VolKoeC0BYH%2BNCrBeMGMd5GuvO71a3YEZc1HCzlMBeVAfKgs%2BsXx6Q%2FmxSkeSJt%2FPu7ruK%2BJbj9y0J4j90Mi62GoWn6%2Fvp2C35NpGeYTl3gFG6P8VQV%2BSCsxzC0PdsCYqNCFG8C6UyPept0K%2Bprca3RYRwUMLXHHxQWLorzbgHFi1BE90DwMnXYyMosCH07No1Gm3koXNHKrz0S8QXXo&X-Amz-Signature=cad041f6c9cb047454f5977b6155dfb63cd38544c4a03ccf598c5d55d9e7a357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
