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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMO7JIIH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwo3pXymbrmZTlgwAkx0PyAveo3hXh9i0eyjHayIRHIAiAg1wtOkyvRKqZjLtawKEa3aw%2B9z0ygfE%2BrYUVYuxi%2Bkyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWL1sfXbIhqBT6azPKtwDPkXY1ZUjnCEBf1pugWTqDp0n%2FLtul3aBAycbILmtOYTOJJGoKCoputlLiJAN5MjJEFuo83lu2HetMNorIeHbhpBPW%2Bp%2FAEtM80E3DDU9qrnzTqxfK7s%2Fk9ubEYktOW%2Fs8Bw9FQpvKaN0%2F6TtwW%2ByOQvtKKz5AoH1AY4%2FUASKyhercpfBY38K1dVFNgluKjV5sb1I1OdcmKNzO%2BuBnhbTi2Iz6W8ZxDNOVAWVk4CxqMJgAVg7zzlskg30It55SDSN4GVYn778b44YKhIFQt3zPSo0z8TEUHU6UB2ONyO%2FVx2Z3UkwcmwRix3kSq67TaS7DuaeyZDMo2oyvA%2BoeZ0TnG%2FlUCg2wZ4zqbdyzli3I6BhFOLANeHqvMbttraEqLiuwoft9IYLM4mrsMFLp%2FYIWZ%2F%2FRZS0vhKMTNl1SQIub0ikBzRZgZlJGGsWU9WLhECqEErf2bv400lL6ECfVf%2FC6S1Xr6ZNVX3kQqEMqi0oju7GDm5%2FjWdsIfBwq3jSZ4YgRNNdi7zWDZ%2B1TY2tVHHl%2FLgS83HRWeFmR5Oul2RidFxxaxPthRWo9xor3mzDN8mR0rAJO4HUoiU%2Bkie7Zqi6gHjidupvuLE2GuLL%2BGgXC%2Fvlygkm%2F3DwA1ai7lwwtputwAY6pgHBmr586Kd%2BFEhFx%2BSOn3%2BtPEt6WpsalLqF6G0S4G%2BE5DHn7xv0%2FOtolzxfKf5L82x%2B3J3qPICi6kL5NVRW7UBVrtfaxjuGf61HQNDf90ORQ5UJ8RJH8g19bcqAiVlDI%2BSlpiuAbLWvyLyS9L%2FUEpnRiOMCcYp49LCUCyKxYxIklzDzHI62B5N5lg%2FzvO8I37d%2FeierAqeKZcC%2B4ioWllm6nWJev8yx&X-Amz-Signature=e9f5775a3857a2ed332e4438820cdc01108d88dd0f93c627b8911010f3edd788&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R23P5NDP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAkCuAKV0rjvjCWLoiVoMg%2Bgqce%2BWGHWl7kqEwpKJkCwIhAM2bMEVSWXd0WWKBTtf%2FHuvznKO7s6KzBTZz0J0iq1ukKv8DCCoQABoMNjM3NDIzMTgzODA1IgwxKmTP%2FcuwHia4NfMq3AMRAzmzknd3w4295qCIbUVidm4gn%2Fd5IE%2FeABLuG9Wo0jJfayTYNwFfH7LY2TtJ2J4CqCaKbVnBPKCoQWkupinyGA4BV5Suzyn%2FUyUWQ9FJEEGbrxuIrQ0w09m%2Bpss5Z8yMhW3G0%2BSY2gTr5V6REfuwMzU7CbJSwHin3ADatBGqDjofVyh1%2BF3hI5HFb4DhP4KeMM3BeMgrM52x1THOnl5Rz60jADeNPXPqaIyc%2FDl4JF4fkRlG%2BhkSHgsynzmxw27TTLXXFg83Ur8CNrqSf0XdelTCYLVo4QHI1IuBh3GO3sHeUXgkffWEt8Rurp5Rgk4k%2FBHIuaguGHU2i8VwPFcLvZVhBhd3JNeKUthh2fz20ONTH2mZfvbIVsaNnft7PtD0FpfBvoWDh%2FjIDargcJOxGRPc9Ro4gHlPj9EdYg04qfY1l7RpSXk0eKZq1LjMBljm%2FDLNwPB5QiC8ZHYmCY5jYwU8znU3Y730XDRvq8Bd2vdQAukPUNXqWpcGyfkuV0gZRiQBjTAGl3RPtr0DdteGPCv4nHZ2JSRiZ4B2FvT2IVEyNvorpvSJvUb3p4l08TlaHiQy683kIPZoBpGNYnrZxSuNuxsDNCcZgkM2v2hOe4M6Yy1YAqx50AHCEDDBm63ABjqkAYDndUT%2FUXc%2B1eUMKsABY2Wtrn672ewCdecjBiZP4FAef5SuLr9N3KsC35YScFz0bJmA5nxOBSoPST6WIKi8TCrD9xxFM7SANcJuUewccKB1sr2ncvWmDlSBQZkQGST41rMmZ%2BQWRbpqrG56Uu9y43OkiTc2vGW9TWHtkWtEQyEYMZoqo6dBnGrMG4fnVjGg8SidkVP19bXCMvw6YuQucIuahmIS&X-Amz-Signature=780b4c5c50f547fb26f7bcf18d509e2354c067d04b6e1b470e84de20be69a3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
