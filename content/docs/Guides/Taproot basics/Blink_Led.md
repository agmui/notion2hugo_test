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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QA6IN4W%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEV0OmtHD6ic0OIVND8VgRkD%2Fo3OlQVzc2n%2FEVwPhEMUAiBEzA%2FcPOFRUiFJ5B7v6Uyb7eubBytB8Q7JT%2B0oqp22air%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMV60pDN8dLmBWlUJRKtwDHxZDBCgvUpXiDQPim45c1hbrvAZNEy490REccKkrbirq0e%2Bee%2BQJB26RgIdzvAcobEtZneThqNLxxby3dASNL193PJ70C1DlhGrSSK1n%2B2sp870PhXipUJOyYQNF0dZh17k6QbY5FGt%2F45w%2FdalxZAUYfyKXvmDN4dJBKuy2WMiv8znFz%2FXw8u0LbLyaMfa7JtdyJsSBtb5NK8Y3%2Bd%2FGuUXEH9t8lvb4W%2BdrFx2lRIUBNgr3fnehhZngDzTJzOhHNeKGZcIC%2BGaaMsAuIJprcoN%2BWGVjSyxH85vih4XQMhEnkDTeWpRdBC8Bzdsp4Mv4tlST64B3sWNYYKpmyEPNiViTRJXD1qy%2BIMlHATenDBgYvmMzrHGb1twtalGso4myeUSXYpEjy6KK0S%2B%2B%2BvUqA%2B33nC1gP59UA3aeIWZ2F8ja2hRDSHeYycGywpptW9zfPU8e2%2BDwR9S6hmXXTkvpdqYNzwNDr2aouG8NIprbJJd1Z4EEKr25HteULkVffBtsN%2FGzaNX7%2Fpw6N3Fe2ILRvaq%2Br70niU6rgZe5L520Uyeu3Onp9X%2BhsitWjMoZNxYWfLuj5rCZN1qGgygfKBTm27uMDHtkD5TVledKnJHvHldOqLzUVkPK8PmNFU4wsMCGvQY6pgHulrutOanLw2WHaGO583PNbMyq6opEkAATBxd0yRWS1Fwwk%2B8f9K0RjO%2B9Pn1d7UT9HIJ5jK%2BVsGEdZWqReI84soiluyG3yfp9haI16U0IvteEdSYgIuSKl9oi45K1tbGUhCV7TKRnHeCJHHCP415nLOaeSYjt84wrEHmSIkrJ1b4Ou%2FxGjMBjt3PHBTw3w2KG1Dz0gIi6UfOW36NGzrF6tZD8b0Zx&X-Amz-Signature=335e568131a0869bffefe432d5f2dbcfa4fd122af5856a57396cd4b9da48de95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MAXC5P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBhGRnEwtCv4cXC0KiPlsCTAGsXTzyiTqS6tF6fTsJPCAiEA%2FHlFBcoDoaVfjjsXyAG9OZbK9GIL9%2B%2BzyB2uoTdxPjsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKuJmYGvEjJsSpYHRSrcA81r%2FK3Mc0FlBdX1oDZiucH96Hqlf8k5E5MFs0CwyWdr8tZKHMfGhTFbzebHtJYOldpUGkyM9bUKNFQlJvd2epByPUYAIjbxCD%2B3NVZEl%2BXIlFGbgBYEohgAKtlabkLEN1xeQMzzP68VH%2FRACMrDadVL%2Fu8xrrjM%2B8yMgnYRrwh2%2BeNAeG9Az0xQrz8p8B2PyFVVBk8PBM5s6GKxuDm3qqyDRfC6m5lVLJXOVLjcIMos%2Bh%2B1h3Y0UvbaTmJo0eDerUhFdyYsyEhaq4IxtkVGSQ31LpHuJZd6VHYbKtZHGUgctskJWWcodiOCRHo1LV%2FL5nhLpJsgkMDxlL5xT5EKoRDknzj9fPJy9DDDYGSPhqMw5aRlcUXPqwIB0lBTR89sFznf3pdsQ8Vc3D1eBNoj4RB44ZKeAw96HfdJd%2FODZeQdIrofi835vNyit57HJpj5bawuEv5jSecAFi0YYR3bnXJ50AEMkmTDV04YrEo7meUaIRZ5WVGPp7%2BwmRpE5oNP3UYrLSGm%2BdGGxTI38UbOgoiUJJMgzJAK6uveARQFjwX6dkKf0H1I5ZKg4tCbZpZyOV1NFoFYM1fsSbk3TYwRE3qD6KIUEmW%2Fzj9P3AeN9rvcAIfgczXi%2B%2FFq4cohMLrAhr0GOqUB5cFjhE2bZeCaQYz%2FukUUZlzz0OMRyKQF7s0Lwo0JvcREendkOQBvRp7lS0XdFSjIiRcrvuFZBBHTP%2F1QWHvv5Xx3T8sslsucrsjFdS3G6lOKjLyPwgaV%2FBtMC3R%2FXkfhS%2FMyIYdL8mtaJYIfR6ejpSY7fCzNgUGtVHI3g6bXkCRuweVgqIaIGY9e0dA7pMoQ2OaPb4vzcOXQ9qkqabwoCrYcn%2B3s&X-Amz-Signature=4a6a1f3da9d8b028f2327dc1e7ddbb1c1a46fbbc3c1e064a8a769aac39a1cc08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
