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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUHBQPS3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFusm5vWhwMghvdLwFsde3BmzZTDEpJ8DsNGdXsIbgPmAiBCF2jvlORxzDUXcMXZRQzq9XoWHe%2BjjvW%2FZDa17MwrWyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FNPL%2FWtjYrezmPhxKtwD9z5A4Nh0zEt7QoSmi6FvsRMrll5fG3NuuZo4S0mIoOGhitrDMx4UY2wjHgfM%2BuKTlIPSLc%2FM2ynTbxdKUrohLR5MHR1ef%2BiLEEFVuWMuDLwPh%2BQBoRfkPv%2BttOJG%2Btv%2B8a3QZabFNrqiT2MPVuayBr5YMven1NspNiU0sFrtEaMojsKAPurfeEOzBf5nTg66FtOFVl4ShGtnDKm0YnzFgeWfwRSg6KUZYY%2Boonx6aSsktTIs%2BGQeSkEt%2B4b09FvhtvEalokptm6pMNGwIfF93Rh5iZzi6QeZSmk2Pbj5OfTWcnVHgs26CV0uo5RDmo3uWwax3BDmFpGcalnOrgq8gKglv9VNQqKvOGIX9L9hcEfXmlY4dfcAQnC4siLoOjX0m5E8b49cwJ%2FPNRdsesU8EMlzc9k2LyEz3itLqcmi5c7yWb7%2F7zdZAOjsYcAHzCuJIlt87HWjiQ5%2FiEY4kSDg302MZxR7B7xwOn4%2BPnjNAc1qTF1i%2Fz4qab3a6KqIdQ2iWpc7yCbCwQW8OOVBZcbN%2BslwymTjOsbotnRFvdEYMPhsiS5qmfiQ8mzDMEMvQdRY8vX6wbRrxddqoRw2fTTL72usKgPH6S1J47rvyOPTOoICsGZDwlnOXxQDPh0w6YXyvgY6pgENu%2BifsepyIxDG8Py3DmQBSRbFkgEj6CVlsNJfAbZ80DEgooZv03AVfBVOeHyGvhNTs9e00HX8O%2FlIlUBenedPzPLpKk5LYh7cuoevC23SSQbQcMT%2BV2oi1fIJ81tikyrIdQ0ylskSsNGkySvdtbttBDxHzpEITOB8h4fpCi3bpyruhNJ9ffBGKhfTw6V9J1bWQ4tYVtu7XdZ7RmwkhhULUE90SGkX&X-Amz-Signature=2d155597661b37af8e7d7756a403bf034700a34324a7b241fa3712d86c1ff9ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZ257UU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIE9nKvKK427QekT7Ch7Lvf1v0hyV%2Be1JUKgZ%2F1pCPmOyAiAQrcxxXwk%2Bg5KU%2F0DrfpPVDmTLhhVFdnCb7mJ%2B4MCqQyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYUEX6pbyokQ5rZ%2BYKtwDsK5ruLytFtZogbcVX23DUa%2F95TR8bknnbrghUo4xxpHuTg%2BX1DNy4%2BcU%2FgHpXJaOAn1rGRIhcwy69Y02ZdAgMrKc2pRNJbi%2FdLZBYzDrSz%2FuWeHvXEaKg3kLwIsjiSwtKGS3fIG6%2Fh%2BrSb0N%2F0w9Ot6HOLhZ6e5gw3Bs1pfeKpgAzYKnUH3qt4%2FreLkH0O%2BUswqQ8bQVNwNgaSWlZ1UQzPeC%2B0j3aZC2fSkMxT3h9IIKt%2B%2FyjoNo8oPUyM0%2B28YFfAvdhxkFVtBpKgVjVDXeCv%2FJWttYUoIc1xlO8rxlEo1ug1aUg1m5jRXv5wGZ9zFyqGbg3W8WTd6NcJp%2FalIOseLeb3LQ%2F8Qrp4185irkxgHorGBsY0Lj7GFfITG8O%2BafD0S3TNiNtU2CP8TcX45aYYyLXkAtPSELW31eDxG92zsdNnn6aX0O2ROubHa%2FeuJ6E2S5suixXh1ysTz7%2FQMmQnaEY3lsKJOCYupqEe3LXug6Jr0Y6Nvzk9HF9KABrEDHGsuR8tZAuk8AKa3Ncntwv0VjfmcAn7O%2BJxu9BoEWBccmB0nuC%2BojkrjwuDvWJalQwMtqj%2BqiWjW3YhoXmctSMDV7f%2BABuTLNwfpGg8sRJsqRxp%2FvOLrDxR%2BdzSowiIfyvgY6pgE6USJUo2eiZc%2FIOkgJfKJyMdIukZmlx%2FsPwQWF3UzBuF6ctvEOhtGPMQ978PoEcoaKRAtAmu6S%2FfUM1TRck7dFCjoRYxghsvtFkINQhGJ9je0ZLNR36J5jcvxSRct2t4xHT3rkJKb%2F22V%2BFJ9xLauAqrgpGP0CVhzQQBXQboLZybDxFMTZyozreDQyKP7WK3iMHwVCadh0ar%2FvA4jYx8tEb2XymYr5&X-Amz-Signature=31b26f165ac154dcf9a45bad43fa141cd71b984daac66c824e831d6e6ef97f19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
