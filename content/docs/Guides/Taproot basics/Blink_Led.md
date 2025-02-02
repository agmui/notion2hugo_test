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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMEOE6A%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1VyjyM2RxBqtLObd0Iwf3P4OdjXT1WG2mzaNh1%2FptkQIgZhTCk9U4MHsMhjoJA2mUntQKTNdDSc4YltdEZNTyGaMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5VTtvXEq6Kjv1wxSrcA17jlABYHy2MKzoutgURslSUR0kXcVXkPWvIFNryoIRrwx9%2BQoj38DjINokpPeiYqejJIn41PvGTfcaeJ5HT5ZqOz89a96GMSRNGXYbG0V%2BYZV7RTFpzbQy5wXX0HEY0iHTmW2h745J282QclkkwCYvlIVbYitG%2BcA5ZTNKFwmgzC38C7O7tW1zd4fGCoRiSwomQkrthNgPORxj%2B8LFrQYlYnnrjXAK06jRBJpftXHlAEh9qt6hE6rYXOaAxXfyceXWjACSf7FKq3N8OGJPNK1FrTRW8ZIxx19YdBBKB3CnbBDWlVlOnGigifbo%2BrogFUOvJka7q7%2BL97qLelxCP%2BUb%2F1ZT%2Be6uO0GdjZ8dY2Nb37C8F5owc9tcGTf%2BMdRsI4LDK53pqq8dFmblOWtfmUihaHWDcrUbNPuAhAwN4e1FVyYK1GerXTYR3x0nQhZeHYQ%2Bg3xPRVdVN2inDReBRysbuhTbnNqcFY%2BUYJqySxuz2DEo8TLiPbTgkvtg0fHMEK96yB1ZuDWVyiqlgL%2FAGULBgPwcPKv2sV6b7vqOVK7MatlG57xWVCTmykXF1RLmtV%2B2q%2BPbLMJd%2BYt0mV5gBW8bOubM5%2Fm70rYB9TT9sbJ375OmJhTVap3BWKnhjMNfB%2FbwGOqUBtHCYwACxLvLDmGRpSfcWoU0432vjJGnaq7sewNSiU4w7VsZewnN2EJWtec7hGRdbvrcSYQIn25Seyl0jStsmJED2aCxvX39JkqQs7kCp3J3cexQTlz1c6BaLuvBmkrojm1m%2Bx3D8V0NtgyzYXRFjmKUtfD6xPRAsEPJorhUW4O1AKqXo%2Bt4puhYi7sg1bz%2Fbo9P%2Fh70Zrg5eICiVv8UW6ZnH4%2B2%2B&X-Amz-Signature=73c33a4d8676938298aad93644a0ea32635cccd1da161b6528e35d5ba4490029&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPDI2IQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWYRfyUvs9RIoEbS1kG%2BT%2FcWnwSPoUGrAB5D2lztBN2AiEAuZJE66ppz9JUTkKEfKLcDoggAENT93Zj5AvU94TVsJYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbU5rzPgvCTk2glcyrcA%2FdhkM0mD1PRUyXNAI2Trs64wrhZP3fZlpYIQF7QLZZBwdKiG5BZOGLizybcBC5XCTDisiZL8bDalVN7EDGe5YjL%2FhruR%2FMbyZ%2BKKAdld%2FTnGhM00fQcg3g5Y8PU6tBqZtHAOMidmwIUTDSnO3JrGFkxxZnwsvTFuvc%2B4FUItypSf8c4llH5A095q%2BcEih%2B5Fha9LBZLt8C9YsPeMjJYJZ5W8DkhJhLJt%2Bosy0vhbGDce3P%2FCDvRQ0rQZWcqm2pC33PsjiHWhS4pQQwVZev4An9wvvPruRSUhO8KbqDY%2B0vYzni5ukpGNgX%2Ffi6FZ4czTysG5eOjhdrgFCrLI1eBdjh2Lq%2B3WK88oUqPwShKulyoqLIXIqFlzLOCL%2BSBg6DkgnFk3G%2FW3j9GA1s4ttZAbxKYaqpTPFbWENjTQEwNEGt5XoksZmk992stbHLTwlnJpn5zmrm0xL%2Fq96EwA%2FSrlTrmbnRyO5OgHcp9wQi809x2ukvZWHzuJNJEXWOLZ%2BvfHQOxvmqjYc4GL9OjadC0VFmaVnD1bGqtPApt2b3GNj6Y%2BmCJ%2FeFPYupTb1xzryZVitHwqwt%2BfHeJDWazUKRKTfDBTCUkuxtHLy1LxoTIoehJNqrpId6cujA9sES8MMK7%2FbwGOqUB4IxV7S4yMw9BuekGGedSDBdXkNtll%2FmLIVC%2BKFP%2BtiNsWLafsODR%2BDtpCwoGxXAY46I%2B5n6l5JGk17le1fjWUtx8dIfR1kOqkmIbgo8x%2Bbg3xWwu96Y5NZAMcI%2BAAzkWEFYA3j%2FQuejFFVclwtGPnGPypGLwpq4At5mpKZy8F3RWBbMkuwEvRALylAMTSjsZYh5GtvldeQo2%2BSBpkf2d66yidegs&X-Amz-Signature=8cc69e26455f776d554d9eb99ceaa9507a1687b5a1dca60ac0954a73dc408d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
