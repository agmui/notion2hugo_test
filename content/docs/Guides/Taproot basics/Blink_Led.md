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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXS2ZBHH%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD5pmhpQhcoyBNEId64anLSBePO2vgGZQ2gozxHvMHygwIhAMzmBSaUA9zV2U53eeSGK3OhWyNnjCst8w23Tz%2BqekFaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuX5qHKMD0vXlDxl8q3APDtQfR4%2Fs6i%2Fu%2BAXTCTJUroe5KP%2BxXktcWPryuWE%2FRE1Oc41HbygeYE8W2hwJ2sbn9pDj10OXQKZTkwGdphb1BzynLDV5tdxFYdl8svAZFmKrUzaanxjTbJVAU89PXyfC%2Bw0woOA2e49B7qxV9Q%2FojnipNz9vf0ZdGsmjqh7KWNV1CLGGeL8Y7cJO2osNS6vUvXC28jWd2QxSwJ4wOHt%2BV1AfZihlF%2BlKTJoabJyqAW5OSIVkOfrxdd6kQJoOK0j%2BOtBN5d1dYnI4wVioqB5HXbTFHoUMpjg25QT6TVR%2FPET%2FL4FkYda8U9ys2L%2B1j1g9o2jj1CbIGnixRBci1oh5ydUtVK20Tt7DRaHP11oHy3V4kjvBxMXm%2BBNwc6BOOTOp%2BbxP9tQK4Mpwh664kDfUSkwfPQFLQ7xHXenr84J7F2ZjA%2Fby4wZUf658LF3%2FxqJ7wJ9oeoMSE27CHkWbq%2BSvOXMh4Ha%2BxoIJHdzIkrgNAR4UIod7Vw4ukmfJKnhsNOqzsGm53mQGSy0L89SjuG7m1vuwODIQs9Y0eTU%2F1gsV8lrf4O27cqYhrQYJzxwB6jNOuZPFrrw%2Fsn8ERqKOZapZtpTEBbF%2FETwWtFmdgIjT1NTL4EmezBZmYRmZvrTC%2B57%2FTBjqkAcumYHY5ZLX7X5iwnFrQBKAy4AcCoRX8qx%2F07ebqIbQdsxzJq66pe1t8o%2FTWVOhLo2yXY1N%2F2%2BlkuqlQ2N0hMd0UCvDBKj2zhL6wc5%2BHR3jc4FBHHYPshdQytQ7534nkDzPznWdoGn%2BbDdobqg%2Fir6mEqo%2B2ZXYatxerW%2BwY4udxbtdWESykxa4odHR4NJLzlIemlqo6SIQxwiYSZeQWEhRSd%2FSB&X-Amz-Signature=af401489d6c5066312abc52587d09d820b4d3cb0d3564daa1ccb604a8c373abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5LULGM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQClNs68r7ETfVrdGQnf1eWgu7UXOAKtoaQyuZhXS3MThAIgBd0gnXYveBhT5%2B9Q7EZRXyUKOeZt2hGdx7%2FgsXACLCEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyRxMPcQeMxO%2BGSnCrcA%2FORZH8E5gKASmcx337%2FcnBksACgFtS2RB2E1Fl9oJiY2lMFcREj4DU45kOdqGj9JFLpf%2FbAod%2FQOzRfow4dwOo1vc1XEZvB%2F2PrpR0dZHHlhkYrKAWkYLMcWdonZ6kAfa%2BjTbb%2FZoDMdabZnxia3b1gHOz7Y%2F0D8aU8Fyadnw51X0eOLHubdTjV5dgpeWJ%2BGA304I7E6cydL6MaB9CBGcSr9i6Oo9foJm5uKTvVPQPsxUlB9fHRw8u3Ju%2BS3QyJBqtGu%2FkqrwoXhAPj9250EmWPKIstoUV10LixJjRyb1hXrMK5Gv8VEYmlyni5%2Fe1nuwdvMWT77Y1KPhOwV7B9wppeMgxVlF05lEKagV1iCjtlsgkEP5T1k0SsqQ9T3CnlHtvRqfLAPqIgfsoWm%2Bu4XbDg0jIXJWrWRU21tdqwOdw6esKlzE4EZeDF7R1Ld5tEdJtL7G4Pq%2ByPqHggg8lUu7LtXCgTxd8zfj20vLr5YACb5wOkLgGL5AWBXrNJuEKtknKu7HWoyzhwd62S9ZYHWvMYqabeLup7K%2FCL5yw7CgYY50Y0BQWHxYgajvcsYGt2w9nNyXsdr8ISeOaCGp2sWaNY4LoaJHn0CRzVotaIaBrK2FW3%2FDp8aGZlQUn%2FML%2Fnv9MGOqUBlgBoLphr%2BvUSsCave9ViUGYXfjBSJ4MEqfH64%2BzmwsrDwd2T%2BeXT4FkF2gMNnYlP1xwhc1pZ8M1pxXet4Vssah0MQ%2Bc4J0f9VukC0Wr7G6Cl1yEgtzLpq3OQ2UVhOwO6WBvjCprhWv9NYa10kSMx%2BtXjMzT7Q3DW%2B8ZI%2BTen9Yq7UHbHg0x%2FCEnDoWISKQ9hTljyAzD4BtgyffjcZOqEzZpI7u6U&X-Amz-Signature=9e761a19740ea5a7689ce4c9a8894b4b969da1213cdc2b421f26e93c126e1507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
