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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAW5Q4L%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQnrPQO6AH%2BAedf3rpPse7qFjElhcZYHOO016jGiTcugIgESNvNzdlF4NTQ4%2BKUB%2BiDinjdSr%2FvuQAx3yccp1pbFAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUNwTXpBHXMeupicircA0Rj6MsGzFwzFtg0pWpsaVL9Kja4M8oVfbzhlk0hazcoSVPzZMn9ZsCtS%2FOqkOoCbmdpqcv6RL2ZR3d93zOOAM2D1B%2BZXwqRAfFD5dEW0hGHIMaqtqvJB5X3tDkSZyBN%2Ffx8j0lJzfcvKDaL%2FE5c998f%2Fu2Tfs%2BDI1rdNfOU6M7RU5t8o9Ncsq%2B23HsDuUNUrxr9%2F5NHFSTxKq4kYd%2F5QQxXddWt1znu4%2FKUP%2F0i9YtcIlWynxSwM1fqQDhJQYwlOQE7X5lwSaBv%2B8wtsKOURTOsSxm2GsaxGBxW5XsL0wpIoHh%2FkGjBF7r19ObAthwMZF8eSUJH30svWzBu%2Fjf0BnAmz%2FFDJw5NeC1R%2B%2B1LL3w0Y4rtaOYnnAxsSOFR1pabz4LICCIslcNWzJBGtaXBLy02uy2g9xGqaU5jwyK3znF%2FD9L8WlAe%2BhHquW%2BT8cDX3f04kyd79%2FghhEMZOOTxBzeGvm%2Bi3bzoyfqUGaJE53yjpkCZiwsKzUrkE48ylsobfkHBZAE1MygA1JllTMJH8Zwi9oHUbGHuIslMyick5tHqqx2%2FRdLRHbU%2B83UcBP6yxEV6O7SgVJsdrdUfkLotymThRB5Oot7YOiWeD%2BJOYUgW6RdTDUa%2BRdhdHOUCMNTR%2FcIGOqUBefOQCF0EMVkvb0Z1vZO7AhdQEmmhaou9CrdE5Mx%2FTPpvOejWKuPg8D%2BZgg1S%2FiFeZ%2B8Kb%2BHSPzgFjPs8qyZOmfmrUJulWK00BpwjEnkDw0%2BYH5Xvdi0MFeGdNpPRRytqanMjEgsK%2FJYUMaykXUz8UJxg%2BlLfZdAUSUbYFleNZLE2UmueqT8Qiko4XF9B0D5lJtlCAEJbGLbmP%2Fir%2Fzik0pvsjRV%2F&X-Amz-Signature=8332ff934feb372c0e507f564867e3953e0a15407ddb0629cbb9f28a1a9b7eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVDQWKK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7LE5GphKtAnuC1pg5ojg3Yz0731hUY7e5G%2FL7fXubTAIhAIUux2bENOoF7PDGwg9HBSAOt%2FEs1YqdY3vIihSdzUw6KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLtr2zaUkc1eOSfi8q3AMqE2d5Gzell%2Fd%2FG8pKqSg5q2n7yUvvpHJMRCRagpU0lJA4BcTe4tgaj5ysiduIzkMkAaEVkWqRjFgCyamz903CZKSyxViAg8GjsuaPt1C3P0D22KSYTdo2wmqeOW3FVsisbUa9Z7yB3VSb7WXcZ4FFqLPBWi3UEpL7hztlAWx%2FwO%2BE4b9jWIS6whDQ5vPHLOthL7rHFKea%2FhPrtDGPE2pAbVbyxAG1PkOVwNnkAhml4oLGB7LEWQaKJApV1eE%2BBAYbxYzu9nwnp3a1%2FotO8rWSDYydVPhKBwJZqOrpMiL6kIGJRKy%2B%2B91N%2FtBlwIr53i%2B8cu%2BJ1i%2Bi9ZzQtgNTm1Auk6GvOCTgtFHnACc9u9MIqHF65yRQhNOokIIO2g8%2BZ2tmzOU4czMqAuaKxgMecJ0vAsuCJSjR7ss%2BxNW3fjN64xOWii9ESzmlIukjwJrmQbGTfgrD%2F7emPWUmyixd4RZlPc6U%2BQO%2F8QPS9YAHrXFYPrjkNSLICrtd5Y8UfIb5ijGCrSeUXh1lOkUMTPRMagj66UuSRVQ06lEFtB4WbTABrK8y7bPNEGwdmSEaWJnOeoU2ujb8IC9kIgUYibp3xUczrWZGxeGfa8GZlhmLci6QHVMsikBiXDFYLmC8fDDO0f3CBjqkAcWgLHoMzsasQK2cY0ugjla8NfZSpg5AzKlsU0MXl2MkiJo5gqkUfsTnIQO0%2Be6eLA9bMDFFFGnGdZ%2BTpLf9Cil7XmVwNpyRURlYYDuAWQvadW%2Bi1NyREvnnokT9z6kFdCplw9K6%2FFs7Qn7gCDyG3b4ZtVZL1dxLKjzPeBP3DS9zJctpe7Vnayo%2BSSjxfwEBz%2BUxfBRAKtquyNxwvCbJGqOBOLKP&X-Amz-Signature=276abfc047346d44b927f43e6da9817fc36514a7a22b57a18252b757be433150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
