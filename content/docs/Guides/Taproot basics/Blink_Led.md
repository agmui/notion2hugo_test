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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPYDQ5T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJNosryuwEt9T0rNUmHYUnqxKmQdTYTCUk40vHeJjuQIgd4uuPtdl6KaOeNboo%2BoB7Fuf0ufCuZYRtKfBoDmbLdoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBnyMJvEWeSppypNyrcA7a9kdv7m9lwsn11MMeDC0Le7W%2BOMegTyy2wq6PGA%2BVqTASBIEPofp9auRQvTz7Jv7%2F8B5bEl6OwDrhzbjZLnYD4ZpyXso4Si1gliduYSNUICWM9tIb8nUfifPT%2BWfcbxuuMHkDl3XZhivw%2F0u5JdXbRUAlsT8mbrznaQmW989yuMvv4ksnkP%2FoOIl7tXybTd6Nnd6rWH0AglE8gk7Shz64FXI%2B6c6sXw%2FXp%2BRyAs8IdPw%2Fe3DMnnEmNSZxuFTnfIqztN965FA2X9dkgZS%2BtSZ2HWZR5b20kGueWcNzd%2BibVs0rT%2FDRsrlvCVK4noaB2ijXDZJNszMECBZiX609cNCaCrGGYQmhilIJDloFzXC0jq5zArTm7DPnpJTLo4a4lIjkR4a%2FrFDT8DMniWmC1Pbx3aizldLDzEZaMjdt91Jj7MP9c1C9%2Bc%2Fm550svT%2FqnH%2FMfnE2qeyIQnFpjm8AqdLi5mlhUG9vPP68vc5sQRaQlb2%2BYoA%2FJcYJ6Uibq4PLCiqS1ESI9o8abdY4D3euXxqvzhFcuAb0VJlMt6bwQhWPTixPJg4QAXu9aQFM%2FW1jpfAUpB%2FNNHQXbRr8RZ7yjXLgwbsjiaIocS6TKGqn3UwPo8Dg%2BJc5Rf4bMX9p3MN%2FU%2BMMGOqUBQAc%2F7CKyZpZCtiqz0oWPGpXflp5dqBPICRg2ppHNlHy%2Bl0ydm%2FmO2gZXcpWWriYUngwJb%2FVu%2B%2FIhdVr86RdfTLuDD9WKi32dKk4DZkgef%2BTfFsZnOpEfm0kTtatgUAsfqNh7Sww0Ltu5EwSiYbkYjBrV0dRWDt6b7zcmuINAzY%2Bbuyfw%2BO%2FbHm83DrB6%2FEWb%2F%2FZKRNgmbDS%2BlXaBS16fVJsMjkil&X-Amz-Signature=d59ec2beaa749c0efe4a566e773b77d37a16bf586cde493294e939484b0fd534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBXZICL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlJ4%2Fizy%2B76cONv3V%2F1jyA6e0ZaiBl8PfItJ38F4LjYAiEApdxT93n%2FeQF6jYtUwrn5OQRef0peDxZBQMNMZYtXYzIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXfjGMtTJeb6K6SZSrcA3XF%2FoAnl0NjNLqK58vVdJd7CJsDzrLK6BcoYsVbTd4MnYTiqbLksKV0MCp2rKTrhX4l7VN1xVEbVuSN3YAjstHdXs0ZclUxNUqpbihCHhfbLTrxtV7rEoQ3Cab7g3zrS6cThFCahbwk7eyauWwKc7kvWFy5aEvEtfkip%2FeIpya9sSFwUtESFPQlTcbPrrwOB3Jlk6cNrJhu%2FM8r%2Fau7Y1X8UgDaDu3F99qPC9TtQ8uGK%2FYL%2FyADgM6q870d1lIfdEVg4Ysz5pJ1dHhatIWN3Jacfy2PdasKPI2xx32M3Bu8zBaL6dXqS%2BNvIa9ODm4Wfm5PVzKrV7Komho2blFYkXuZhF6IfuJC1wV6IG1W0Sw7I5%2BQu7Aa%2B56Z8pDRYJdkuABhkYSN5f%2F%2FYglY8b0ZA%2FE6M52G88BRdeB%2BAp927jh3zJcBUH6rSe6knxrwQEBlhQf8x8RCyWg04sFfD6F%2F3IBubAtAya3ugFVi0m763Agc94g1ixdvUwZ3yKGeUyBhFn27I6Kx6o%2BGKWLtoFwLL3mEINy1ZZcgkAU6sdbWpvdyHKkVIJXoTQxlravlsW6LJ4JOQSLc7SO%2BscdmozMFpdnMZL%2F8qjjwnR6057vbwkFyS3f9qSHIO6Q2fObWMMHU%2BMMGOqUBZr%2FaDYDBcmoj1B%2FRB%2BXngov2K%2BFJ4lnqCyZttN5ofMVRFnWCy6ALOLF9rtv0XvE1Hq%2B4sUDMWgj%2FMewjMIiSm35sy5NH24LfRm%2B5h2bKpT%2FWfEly2sH2kwB88DASRxe7xTWKyqCep2OYC%2BYq0vlFEe%2FxBpJA2NXX4s05W%2F%2BoOqYCNHb%2BJVuUCGemlpulUuGLB3qRGgCMT36lwKXY4gLQkAggUc3%2B&X-Amz-Signature=1c230a14e357a7a9382e1b7fda9cc3b0889deab9bb9983ce0ddad283f8530f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
