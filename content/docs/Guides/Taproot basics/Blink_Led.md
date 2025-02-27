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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJK6EC5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGYmnGyZanwdCXTwX6Pv9V5c%2Bq2f%2Bq%2BZopEw00wmGZWPAiBJNCJt3mMHjKkBZ5%2FP0NgCHibWDFxR9oGYf6IbFTMcWir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM%2FtqBbGT5kq3Y2Df%2BKtwDSkCnMQHcikT3Yf9TOi5LxCnml1Vz7daNjZtYVSUPo7ffepMfnH%2BNNgb3TP9brA31dZ2bP0cNtXFKX4cPIa5m4v%2Bt88hxbeyefg7qBpUAaVRmisw9p%2B3l74cZs1ijowOfHba9JlBhOuCqhUmLPzbenYY2%2FCAgAPADZ93f20tOQDA0MSK89FXlJ5TR4fIWeU6MSunbMpmTjxZiIdFXn1XeZO5%2Fv7hUX8gVKYEJouaQ9YBpySO%2FEZHl9czPnBrWJ4wapJ5hfiZXdHPVbViUMSk%2BpcAGtYGVkAQYYnirTdlVeZD24NO3AS3OBp224nFq3GATIVtdRmV5fPBweQ8N6NUCtuOJel1EeG1WmwfY6y69qWVLOTA0VNq40N6NaOLd9ox4Ov6OmbkteM8gvRYNqIQpbuaAJaPEn05r6xXeT3WWW1vEg9mdo2pxOX06jgffoY6rVPCItqV0kuk2z7WZ3EEDZaayMttQ6bYnkFzcetgM4BJLf3pjRNGH0mfcNA89WW81II8U26wi%2BF6Sj96MPgVrx8n9nqQfbJCe6QfhBxrozYZBFVRfPVXTeu7YvrZgRb6rNnS3lLwT6O%2BJ%2BuulqzZLO8lXJMzOWWMnyQ1n2yXHdhxgVH7fWi%2BymiHmXQowzPCCvgY6pgFe1A%2B6qxtD9vSijQozOWeVw2ORY3RG5G3gtu3%2F9S9AiPElR8VasR3Aq7g1JkC%2F4%2BZD2CQsI%2FwqhcCpZNy3knm0b81m%2BiK6QpVTigk4f%2FbC8jMGU9sf1KDyd4dWgXAM8gbON0AZleZ2hYTB8TF6TqlKvhoPCdU%2F6O3PULjfQIAChuC6x%2BAGjU1MsAUok8bQp8S8K%2BdONCFRcMZ71sY9oeXFH0u4SU%2Bh&X-Amz-Signature=7a3f47125393de3d99839a8b8296440daefdba75851ecbc9b5be1d487a178d69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQZ4UOO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCNXg2OIxxNvjJBiC%2Bwb1DJX8H0N8rq%2Bc7bkaoTNm8l%2BAIgem%2FiAMyy7iyOcClWKDSrd5FEIQqo7GmcDP24%2BA2y7NAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDHllc0kcy6E0kxvgSrcA8TUpiCfhZNKBHhrvddLXK5mc7CcYjq%2FNcRF%2Fnk4T%2Fk3%2FOHEvNzKo0iRz9nS67SnboGuXPRSLXxIj%2BqH%2FKUs30s9WNUVrZUm2UJu4yk%2B4Qxa6iWPILHsx7jbmIuFXPSsN60qS43e6yuRtjnDcI34kyJ%2FOkGSpp%2Bv14v3lbPY%2BZFNCKNtvD4cJgKjXrC5GgEvU5YzeKGR0KBaEmQsirbi1z37UKz8I5XHSsTo%2Ftexrc9ozAuyM%2BkU8OTLUVASrnzlpeqGCHY%2FLYA6zCoocxOUXEuXjSIdmv91j9TP2Rdk21bx5pQzfLbih9fvF7q4S1m1Ia1pbgB%2F2qJCCCy%2B%2BZmw%2Bpgc8yS68%2BAmi6FBlmEMMR5nsGbmt7276kZSS5447SsoClIZNpDk7NTYZZzw1QurD9xzt%2BOome9L8R54Skcigpar2f%2F0ON%2B2t1fgFsi%2BFIHTPe5rv3EZ5o6qV%2F1QlYRIMXKWZyLLTphNzLxaFMRpqdMxf%2FdnV8SapB3NPwO%2Btndg5p47A7w7gUmCTLCRcNozhMcg64fefmCndiUKqS3hI9vO8zxpr0rntfUejxNs2R7Muw2F063Y0pr4ZjfHHHY98D7QA17gSOySgRbItQRsWRgm4wK1KzfRR0%2FikAMVMMDwgr4GOqUBnwQGbwQLEgFYIJGOXwQcms3J9Qicpk2UqL3Kd4ik44QtV0KrHXho23AswUiaPI1Egd6C3cXnk7L8Vnez10B%2Fuu7wRiwBGrQnDh2QOfcXAUFuPzh6IM58XkR3J83yCpbXFuWp93Ryb%2Fyz%2FuVW87Ap97rIWJFUJQ1o68sBjz49rb%2BB0U6GLeK2a7Uti%2FohLcbquoR1fviZVCmq2u8NEI4%2F7SHhfAvn&X-Amz-Signature=75ac4fb5763669b12b447422a4a0d1bef14e3baa014f1b970c0655ea1288d090&X-Amz-SignedHeaders=host&x-id=GetObject)

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
