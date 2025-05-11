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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MKDZRE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5B7CQ%2Bjj203ODQOKk9f9s1qdGqtMGu1gqD55vWoqJbwIhALATSC06dZFBvQeX0kOuKbzmpeVzP77BNw7qabHWTgLNKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT12BUg%2FEr7xZXwXsq3AO%2BqkEJCg3e2Dq5qmutJh98mS%2BuOPa5vJxLiRVlQedNnXSXekC9OOA1zaf0xLSuKwOPJKjv%2BlmfvJxMJyevcFvTF9%2FJZWToZJtSNq5mTthm3cbBCMo%2F10vnYlx6Z7ilz6342Nu7BhZwsf3S90rJQaPohrqoCtyey9zCvLc22bSV8D32pofMBzac4jXNTgbhkFz0xK0lcBDduE3aMfYCGVkHrUlI7UsLG6EuP9cnUx3eQOsUMkHQOl8Pv8LhTx%2FrOkq9%2B32QeglLkzW1t%2F68nOQb%2Bp2ZL7EtlGS7am7EChC07HCuzBikj2YjcAZ5a9xuZEslpptQ%2FNdglpL4U1aTfCV6NgqDKuNYNv3cW6i7dVsw8uB2qICtI%2FrFEzr0ZrhXcRd5ewFhX9Ubn5bVDFHHxQ0CZNE1m6YE64eieLGpPdqq0AOGB6egAC5reDzUsOMHqGe0OWsBSTqJT5JV%2BVuQBRm5gjUfCAyOdaW7N1bt4nTo8qitsxKyU%2Bt%2FAG%2BhnLzuzgWz2a1K6xnfNvaP8ym3C2bEmVzBquFs5hCNRv3zgbdafquz21yEiuw1AEG0lBxVdUTH7QuMrx5QCl2J90ntXMGiL%2Bn2%2BSgUxMoVlpiqC9iACMbQdNhpBkkfpoHWAjDOw4DBBjqkAa6gxi8iVLFC%2BS9MiN1Que%2F1SyNoepsHnwN55%2BOy1TBuO7W%2BXHwNXjQ0eXuNOOL4Plj%2B7Lv2eNa7kMdCNJZF%2BVfE%2FifrVoy2mk4aKvlRrUutVQ6Men2RXznSSlSUSsVKElDL7qfMEE3V%2F4FH9XvvchShUQ%2ForLczVz4YnGO0kxsmcbtU0eJZnMbCCAZ7lB3Dp2MSBCLlkviB%2FYSMZcqEKj8KdzvM&X-Amz-Signature=c1e16ebfc4e1469f6b6a09be4be8d353ecb15cf2ce43f9a2b910b427fc20d676&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQAHGME%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHmqj9DkUak867NvWL0vcDk3FFefMfOBvPGReHwHcWn2AiAOpsJhSVv0nvQkVQjurkVZleMV%2FcO0v67uuGpQwfHU0SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BZOOsjVMlE27H8ymKtwD4uF%2Bmjl2gqzsxR24HKVv8qgFocgvhklO%2BmOto%2BvJYvdowe0t57ryeMzakEk6YunqndvtUOSf34%2FV3gHdjXsI%2FTn%2BJ2XBY8zh%2F%2BuHuerva2LnZOibMk0jmrrhHK9peYa33Ytwa8ZrtmcC%2BNSbw8Lm1cxIm%2BfESxMt%2FZfKNLLyFrfzXWS9jN%2FaesO2o3QFM%2FS6hqXu01TMSxYZ2sW7I6YHmlKAnELt5ElRtRh0iUQADhPu%2FoEEtYP8JiRXlI%2Fab4hKmdFL9yQoA5UqKSCqn0HJKF8s%2B2KFlDGtMmgUihz%2FtkKFXMq1VARJLd3cK9qOEPI8ZorBT9mfjAiU864UHvm5Rrx3WDz6v80y7ldmPPrZ6rHXNIwbOS3%2FZUo%2B2pmlGdGk%2BHuoKSI5T8JlPdA621BrO8zBre9zTVIuBac93L64a%2F9tjGX7Tm87IaWSCiMV5%2FQqZl32Tvbt3PMR3CG7AHuLF9ICbE5EFDlWGAnbfVZLop3PhLbUEfAe%2Bs22uw0GZv9kqu8zAssTRZp0OszV1Zt9Bz0wF3FDb1SextBfmB4EhLMmPeqpGdJfgpVGEsLHr2EnhTaSmyeq6DKkPYy5NZx16OWP2PaKGuEPUifthKHGMT9Tkws0UwZmYRNvBgkw%2BsOAwQY6pgEhgzyN4BVXk%2FbyEbUQLORduT0zkbpW3etWKCBC1uf9nEEPpOFvxN30SSY%2BpkaWFWgLBKYoqWxXv%2BN8lIg5weLwanrizxc7xubLp5BTdW8hICWJaLdJq96UbAoqvsouM%2BAebAvhuTck1lGojIbFXmVFVbPXdGBB37oUYCyLz4oK3lTjZ8nDZ%2Barew4H9YcQrAiSoTKtXP1%2Bw%2BB4CD4oJNNUf%2Fm83zZi&X-Amz-Signature=a131efbb0aa2c642ce5a40df6cb5042e0bf5001eb013c5e3b95e98a89e9ddbae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
