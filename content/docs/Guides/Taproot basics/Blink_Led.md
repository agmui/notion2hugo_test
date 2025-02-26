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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5UZGWS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDIjuAteG9bA%2BTFs2WUo1UYl067zfNkSACMu4D3%2F9UjZQIhAJHZPgOCYove2Qn9U0JcVSPzRr5zPCK5PzWJD%2BfH5qIKKv8DCF0QABoMNjM3NDIzMTgzODA1Igw3Gl%2F92jXsMJxdqLkq3APSykNABzpjALd37%2BTB1a6KpVwArzfMq89u%2BvD4TBPPPqtdN%2BIxwRSJ9O7n3jFSCTdXm3UJgjoXOx4U81IclUCdOMvgnyH%2BpqU7DnD8yvfewQ%2BBplY8CKVTJ%2BzxoLVCRPRHAyGM%2Fzrtccztd2%2FcM6DpGvV6%2BOExG4CzFO%2FZLnJi3KKZNZWF7pJ2zCrBDnZH34U%2B3YncNbKNFUZC4FhOS06Mf2Z4iUajHQKWb39MGkIIGcS%2FUfXo%2FVEPHqD09Gqycp6pz%2FhO40U%2FUVLkLPek%2FggPucv6Disoekz0i%2Bp1lyAjryx1zowy9pKe5U5KXFqemC33OCMUnPemX0Pqncon72jlKngcLKuOPSIbYdDkuXy8ttDPZa9ymuCVuZh%2BxLXryUXgg3YhNBCvyyEITUqAm1cLvdCsSwLkB29R7A8xyi1m2ebK1lbjiyWJP1AFthqmUM8gkAZ4qmzDRfnF8oLgq6hYocxe4dVRYmGt%2FnvPW1H2LxUXhkmpyewHVPbAs4DtqDznKweteD5goXLGOho6rrEOEd2Scf1ET%2Fd8Ds3o2sa0e1Eli4FTt18uo1LWfvTW%2FPNiWzyboRVSg7tVHvA%2B5xYykg7yJZhaOHVqayhAsWbTKCVeyMR6HZeUx6NKBjDhh%2Fy9BjqkAf4PqGE591jtMd6H3ZQZhWsQkVJkyZHUwgpWuPk8OCDr%2F63%2BFoHgg2TQvkFCNdX9UPdiYQ1MXKRw7y7JzKk669vciJEtfnBHndhoWzqg3kEtbJzBS2%2BONahDYbuvZ%2ByS%2FgmeRn3l7cuVLlAzjtfKni%2B5U97B4OmvBuq7shwFTe2y2hNzk34kfdOHWCMyZz5zlkUAaCkKKgvx3Jgsjmpwce313H%2Fp&X-Amz-Signature=d2264b53849ba098ca68f04359fff9989ab25fc6d4e5bea863f52bdbdaffa201&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3Q6ALM6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHmjz6esfD3ycyjbv4ntGOHrPmmm7lRb%2FMkcAvq3HXZcAiAVUFYfGq0h4vIHRxetk2MptWqvGBa4DwMsYZt11tM1kCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMopfNnblOtMFgiYwFKtwD50%2BuHxIC8GEMr6FBER%2B8Buqyo95I6I%2FnbP2OodVD22XD2qJy7BhiS09qIAejhm0G42I0s5dx0J%2Bge%2B0Bf1cZbslXMCWdslSWhWov1mvbUhvf7iW%2Fe6uVjiXmw2b96Q4NljVaDlZgHlcJHOGfk5MOaUdY44h6RN2gPZLeTavd%2Fe6DEtmdbSDqpicqVrDF60YdJoEU82DYaJsTHuluGmHfHVB%2BAEVOwYWrlCiFRQZUhKASoJhxxv%2F05AI5exu2KNldBsVeQKTCfS9hEPbpk4uzc0r4fUKP0qYwzWRF%2BEzcv10iG8Z8XYvef7RD2w8fD4PfPvYSBhCWz4yRFSn7PSD5LlTEVvM9P2vvunk4skD0LMFrV1jhwz%2BlLt5QWv6xcVIxzxie0e0Q5C0700pjqiGSaXlwHjcdftJ42cnxk6H5b%2FXqi3GvSWvSpG2k1rc%2FcACSIH9br3bD5rZ2NP6GCEh4yZonIrP8rWfXSkUIaTseNcZDFydL2RTGrFuOBbNCpksz5lUD4Jrcn4P7%2FkWe1E65yDo57cvIZjXgQQl79ehpF%2FOXKv%2BiI0zFHxzPmJLO2C1%2F3QOnngRr4uwtXdRjDZsY8a25t4jrT9ZEz7HIynnBpAIMEa1SwTN42Qps%2FdUwqIj8vQY6pgGbwoaTmj1uR2n4onLinUSApC31GgvlfviLQWAp%2FEKgDJZ%2FVGmtJCAOWcdo7BvS2ycM1zOLzOeU6vSwr83o5LkRSAMkvvDuMJlgKFSO2cySNWmEeypoCSmxQEYQFZl4i0rDHGQVPTLZHl8WWo%2FCBgdlMcGPZDa29pZT4zSnJ2wOtWjcq6NvIwvP6CcliEGs7wpM2TqqgaFhNIU5AkPDkgBvGcuz9MXV&X-Amz-Signature=1072ca1292daaac53e0a9e651c35dab69acf06c6a6f94b5e7914fef169203c23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
