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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNE2TPM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG24z86xz68CrtWZZLTb0Mq0dfXP%2BLSg4q7%2FZCNq9mbiAiEAn6n%2BSiMFaM43OmA9%2FMc6T2uI%2FfIYsdXynoSLJKGF2Bwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLPss05bBc1gVOayqyrcA3e4Io%2BPITfQiXVUF8LFwHbD%2F7BHczWVG84FAXeudKLzKBPPkdQOM1W0cyAVuWdDs%2FEsWCxC7gryX%2Bol5ExeKGWIWggHrs8FtD2OnZ9sZlw04GNAUMsiTfBs%2BN1JSTgVR0hDT%2BZwiZtHtjrzcRH8UsSjMnZ1%2BUCUwQn7DWN%2B9cjoq8CBScCQtgcbw%2FZvOXxslXHEPNKrl9sBSiy8U8eZuzV2r%2F8YqmLSXbtyNHg2VkKHBoXvg1qJD3NszvCgIhOKLAlA8WgK7jM8dHsVj9yuVt23HJRO3ecT4kT7YolRp8NcbqDoOL%2FvPE7Towwo%2BmWSgMRflliYCxzp%2BI5U7hIoVXFlrlXwBx4%2FJ%2Btb8d%2BXikC1GnApFeQAUNv1ZLUWVSy2NoQurszQE3kFRDjLD82h%2FYcqa%2F3JIaeFZRSdvjOR7tB72vBw%2F41gTZ0cQy%2FuwEIhh7Vuoy6y0tjZx0ij%2FZzOZqZpByfmESDY92wWNLodEj4%2FB%2FoBVosuL21Ys%2FSbLF28rzbsBJRettffmdzO%2Ff8LR%2Be%2BYpzm6ojuR0cnhotLUsgc1%2FK3iKTkh9nTJwyENl8lLGdohsHSbte7LwkpwGacbFi5bC98rCrJ9ulSgjk0L6gSq0bgQoaL9PcHHpdnMPf3%2F78GOqUB%2BmW6%2B1IYKN5ZouAL8vnaJhRTl2t4gKYjy3jkNQyNrtmPJHyK%2BMaQt1S6yxz%2FLYwcvVkmDkqnkPEttQg9gElwRscFrgHtFmizJlVkPLzjtNb4Q6A4Qcm6OgcoAbjFtYMS8VJ4hfCFSM1DNaEr3hAemMOYIfBkCkQs0BSHZRITuOWqoV03%2BYA6UZPaINJtXopRCbcsINVqjG00oraltXnGu6RVkYWg&X-Amz-Signature=0c2046a458c90bf2027e3e79ec9db0d7c8731bceaee38fd77cbffc823938b57a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2L56ED6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQTB8bPHi45EMJqmdiLWJ1CImt76GmRpS8BRpdFi0f6QIhAPeogyaiF9W1afnQYwRYf9Qu3yBJQsDR%2BFbgOq%2F1c1spKv8DCEwQABoMNjM3NDIzMTgzODA1Igxl%2Fur4yAaphsHTeLcq3APGRL5zHTyLLjSladYBjYHp9STTg2COvUFrL7pq0DaRMfda%2FTDxB%2Be5IrwbR2DB5PgF733QRpAkXcLDUvbZ0rBkCnZQx6WFX9PowbAy0ARravExrJswGU%2BrGWGFoE%2BpI8Jm2bNjnMmjlGZKaP1rrLtnS2SFe3ZGsjkPyaUr3A%2Bb1XZtA%2BjVoRFnndrYAZ2ZZ3S%2BT3vK0ai8uZ5vD5q8NOwKwduJc%2FPkZRUsnQr9MKmxFfGQtYG4VAT32K1F01tgCdchr0G16r%2BxX%2B0mChaCgLfRBiYRfbtd0szFsCDrDAPOcrdKKUUY9Nei5yRBjc7NIVleOxPY9NthVcuPlabSDOyOt1EGICy01At8q2Ovcxxexuo9W7gN0j7NsFd56QsOQ9Kd2Z2D0%2BNdB3SwKFbPgsFifhm7iSuiBQQ4fX3FJ0lQMFSDIYrJk0Xl5ZNu4xL4HMlHCzBXJ%2Bm7OxO45qA9%2FCfgYxpbe5KR4%2FMLVAXxtQNivJylA2zPR8dAH%2FLsMIE7HIQRO03yOd5wHRjzjr5O8d56jHJSoKeQ3RDDXOTqUr7DfFVdQj4qd86efM81Kb1JMSsY6g9jJYjkLZvkvxfwEV7rm%2FB%2BZLwzavyvCOKpMpMd%2Fu0YsglSDTOgkmkhizCS9%2F%2B%2FBjqkAen0xhQ%2B5UKBD93YA8%2Bg1tqkcoMFkG9FWz9jjhfHBhsXGBfH6qSPTFsoJ9sORrcYta90Ac2XvEw3pdXxiNOhBxXEI8koS6nrKFKD5oc72mgp4MBp3G0tG0vIkupHQE58NFoDK6%2BiMg3TJqO4owmNbkyRa5bIKmv4BrLbdUXx7VItEHKtjSUflv6uNAu5sA4T6UZkZViLlvOpvVRhwYHZDV5NTKUa&X-Amz-Signature=a2b5267f7ab6d49c1f308c565c8c64a495e7ee5dffa2a0384253fb4eec494e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
