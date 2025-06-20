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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5VUPWHV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8qYCiHrJXQ81ZGCs3UJtErmz8RlZbmlNkbegdfhFfhAiAlutwUrKSQhIFlHghjxqjOJhZg2SWmgmI5rIzPSOtPCyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun9FDXofrlteuyzeKtwDbkhGao6G9wLc6v4LYMItbfwj9B8KQsvmAxi0qc6EvmG%2BmBR5%2Bi3dYKHKsaN2DIdkF4vEpPtjT2%2BpnezmhIIwWIpGmCge8QyJ595FqoHz2SJo%2BoA38jIVQ%2BlI87MqFFhy5vY%2BCodaB6g4bjvZ%2BdtKTfSN0vxbEjvixmkCr5gs4HSvIM%2Bgjx0nRJaDCNv8aE1sd7kh%2FZ%2BBGEyB5NaLF3RqXwKocy01TaMpx15EbPGuIhPFoDJEHh%2FRkdE6coyEMBc3Oi%2FQrJP7VNrCEQTFgxCjPHGn3%2FOVmxQM%2BA%2FAzvjcXz9vqcnR%2FO2OBx%2Bh32fFUut64OechwAOouau4WjvNq0bUM0UU13kTNXYFRNuUp5XeGS006UH0CDehpAZCyiEOwUfP%2FtTFNxWF%2FDU33MnQ5kGhlMzXe9Ia%2F3MjOtF%2BKhgWyWVllarRAPhXLFx%2FFCrF2PvDzS1Vb4v%2FfPawIGYQR4HmKid%2BxkPv5ZKeua173QFFZQOdhz9HCbU06lnUgBziyYPgx42VW6cvSoeSjQHsTqfKVTbp68iiOxBdBgqQHjfzc6h6eXxlSsrxleyPP1VP8Bk%2FRLbkVjdh4xFq7k00WJmCPimNJMR1EOB%2FZstsO7ezLhFhCcuEPfUsAqwamMw1NXSwgY6pgEpb48EaMIXN9OyMeJAXvHZouSmaRBRQFC9NFA83PCZeQ9F8AqHHI478PRkf7vzAIclNtIWC10vLQw%2FnV6vDL01IofU4sibyLFbZXIe5CKYOj6ko6zpx11R1uj8y445dBH52yXPxSXhbwb3zLOqk7jfIWZ7KJcMLhhyARjAwOC3yN58KK7tbScK6n%2BD8Zqc3GOOszMd%2FhrhJr8sCndZrV8V%2Bn4lLpU0&X-Amz-Signature=d9d5923a22ac9663f07cd7a5af8a86dbdf12c3ae22f8273e03bd9e29a9267ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKHR4WQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrXR0ZidCHxk9c4w%2FpcHNEQubP3S5UD7dwVUAZF65UfAiEA2er5DF%2FjluxKHVutLIZBBujAW2Z8uJTeCC%2BfEHkIaEgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg85PXzC0y%2FNQCS3CrcA633N30M%2FLb3XcOnd3EKMDqWqwQbNkQpZacowvs2%2FggzEQCEdMmZan50vXPaqb5TYVQiH5Tv%2FnqvkrRZDHbm1HN29UD%2FdiFOJ5iiWV52j7QAadSxehWuWu0Zj0Z3TZizQ0bIIcaxKl2lqRc9pRVUz4QWaQy12PwXweS3%2Bsp%2BL9pFEeNSfaY6fYg4kNFlu8WTAWw75%2Bm%2FNEPmQd8S8Fl%2FZjQtKf2tOUYJlo0kXUEFBkOY5JPV5srX7J9AlGvx5nRUa7WeYJp7bqX8o16ABPXvusjxMPlIVHbvyWvywecMxnL5fC7mtOrBMuQxJOMSTCjtEbeGoEalL%2F3Y9Or9P1009p01h52aOu8PSk8lGAyxX1ozlND8DOnoH9WIM3ve2Ir%2BTh%2FtZYSgF3%2BUsljLYTNkUNCyDr1EAcLCm5CG8IyH7c5aXuec6alM5YdboUnWscf2A1Agss0rX4fxNgUUBCBwLUB2MXqKnfxpFa3aTTBoYNvOBk%2BZp8qaJnQU%2FWZtB0wSLkOGHRtsOVwry5AnFjtUL%2FiAQApzg9JfXEvakFASbJ4PmFANDgCS2bDTPt6xq4yrt%2FsYvm1i0DO7%2BdRxEbs%2BeaSkNB9egyV7FvB3EHTuUCd7TxC6505KstDX7QlaMOjV0sIGOqUB8XfZFjMKm%2BGI4Gy8MKenxsw0BYAhhNnom98gzomkX2sfJnef7gB5pd00Drn3NoSfgkurz8%2B%2BsSdQXLmPhVRqfUJVdRcgAJ8lzRGwST%2BTgXrheihHJiATKkIzeNpUEnQ46U%2FLGLf2tfxDz8%2BUJ1vnXi0GVx17aoTuRGOnTqJyzXSZaIn1zcxQwqnOjJ5zLGQ%2B4DFkpeW9oB9AQk13Tka3Mkf7Z%2BtV&X-Amz-Signature=10f8cb5f1ba27906cc802f6784a22fe5618e7355316fa2b5844478ac5dd7e4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
