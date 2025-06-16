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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LU5CEN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCSUZmXlG8M0wNtAjtJRxhj9xZUKeEMuVCkncaTyTJ8DwIhAPxRl%2FFzO3mh06QUYbkyJ22W8FeiHV1tTu%2BW7VmioNDSKv8DCFoQABoMNjM3NDIzMTgzODA1Igz6RXCe2jt%2BkKqZZcUq3ANMiegJ%2BBT0uadN6uK0j%2BraLNsL7U%2FmPG4HmFjyCwgMYaM42U%2FVuNEcgvkmn8mWgXTg4hqxJrS3GgImi4jEMcdK3%2BxLbt%2BlmtP9BlAfBtFOQFdY4D8auxshxThJJ0O6bZP%2BFbNffgTf4gKo0xRt0LWbiAQ9YcIChaHVqPbbOhgd%2F3rSrXX0KsGPFmwbyYK8%2FYq8qb7FNLK%2F4gsuQHvUs2pQk%2BMi6fh5CDBJG4wX4G%2FO67nfKkGunIAbr0iHuJSXkzkyRcONZSaN0Hc6JFQXhTCEQKuyVa1pgC%2F7%2FQJlleL%2BKUiwDl5P4uL%2B%2BE7yXUKXWMnaTautSeN1JfqBB080Wwe7s8GzAf%2Bm91gM3AMW98V%2F%2FvdtsbFeSzOyyeV%2B7pm2AEZtPFDxY2bxWTDIBZvWWYFeWdmjcW0hKEvEksPgTUky58IXPoMhj3AbDcbAOzNeNXDZAjViEj3bpLSdl0u7cDElkZsIxQgvfTwaJ%2BGzfXlsBKqVDORY7qm9P69v7nFyaTBij8Z%2Fe6DBpgsc3U%2Fp6P2BZkAcQR6Xr3JFr1Iunkk07my2V7uD1%2BSJlpCuyB91YnDbVKwA5s1rFXcJmWhvh2ZuGG%2FmIzsg5yz6A%2FyMqVMPdHjP84MIpWyG77KEoDCutL%2FCBjqkASlMCYuGmsJQmPbt03oLvWTi9YuGjzNH7aheP6YFMqyNl9OEZivOHQukSkjRPtsdZC40UcBD0cECmhs92BuDhTCuwHOh1CCCUO3cIhU00s8YQKv68WkE4BuKhB%2B78wqLy6Kfs7OshuSwbZpB2QFEpUlPmPFsEsNyzakRH1hetKrH9%2F2T7S6kZIU3vDF7ft6gdATqLz4snM5Nq2C9kOSH5Y21n2XS&X-Amz-Signature=744b95fce2d88a3205102ad9eb41823fe0ac44376f81a63a404e0fcabbae9444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIEFPSJN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCQp09Oh6ICka1vFdECn5g6FzQzW%2BuysD4aQiSe42KsAwIgPq41sFQIf5w7HeK7oFo1KN1xJ5XQgNf8A28VGsm7l5sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGMI3wrIMjfCuF3C5CrcA7KplIw9F7j85vWGfqBEvKXw7xYEqhQl01BxA%2BdT8bkUnhGl94lfyIiNRx8WNBkNVRLqhzJ5RS9X3cQweCDwWGxaUq769SXA0HauJO47BZIsrQaW5ESCvz2525klUg25UkPgyiEyJf29oJEzOmlv97w6bFd0Ev5KWZgqhNFIxCVLh7lVbDrjKu1Rm4f6VuDiDnCQUwcsx4ZwpMOUPldtlV9uqdQRe82tuGTtVN8yXZTzuyD5De%2BipKIMD6EPnFrxo0PAoOX0g6aKvkdwTz6aYlMzImUe6vuyYhS1C36HnP%2FWMMe9Kb5qUGrHQPKsGCDJzshl%2Fi%2Fx%2FYzsbwcnBVtp%2Fbj1MfszkAArhfDl5Uu0P9LY5j2VjQ3DC5fNBD2i9zhWu0XpBo07EWUVyfA%2FMUPug9r9oD0cGVJLfvTBSE4bfc6BBKtdfvoj7VNGaIA%2F6kPSysAOpu64vaWzIdAbAr37pdQsBcvKUIdPJlB2MgGCV%2FRQ3Ch5gqzJnjZjdWpfhVpBuEcCXSRPam6Y4ofITSz%2FACWsWkcLquJ45iUoJxxWbrc776%2BVPQTbe9s3XKxrF0aZiyF13YnNP252qQqzx5TnLRw031QyehQe3xjvppoePojG3dkMNzwP9yKHCM9RMNuzv8IGOqUBwneEZzHXl%2BbZyapzCRCA6KmvYzQc39FwagNo%2F7OoceiauhV%2Fj3l1%2B8mBoq2dlxGvfbaSo1SfUnSmos9KrtQdGgZNR46eta6kL0t8%2FZxk98F9OmTz3KP%2BMWaFZeGxUHOqnVZw2h4EHhpC%2BIgSv7I4aBOdk6voLjnnHJrZSd8YAb%2FbTNnhAKHK3LPXtug0xSc5MhHLpfqQN0WxR3T8HR%2BdjE24a6kG&X-Amz-Signature=dc22f32a96f1d773ef121e92287db9485ea9275043f489069f25116d3b862979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
