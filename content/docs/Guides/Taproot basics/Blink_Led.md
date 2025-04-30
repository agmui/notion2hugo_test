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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJIL2Z%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEvyURq4aSsX%2BL7eQs0S4KpMobHt%2F7Fb2o3YBGIlAyNyAiEAzOSMghJ37h7Y0xeD2CXQSYgsrJcMWxKhFD4kJDJCeHAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIfnonRohumvpVTpCrcA39pSfax6bJRgV9Yb%2B%2BNe%2BJAn07YSrj2jjOy0TcBc202rBZXFBBomHOqCzWBqrvxc%2FxGmC1hrHqakq%2FWTxMxRFDu8f42IFct0o2qMulcWudVmXBEzdEOLl0oxSYRthihtNjXwxbeiX1AFnxj3DCNzhImSOfY%2FP8tDWJL5fZ9SJq8JN4T8hZdy3AxoLDJ4oXYC7mFyLu1C35zmGcKoABtSLHEuSE5CdpPCkZ05kQh%2F2injPl7DKbqO2GW2Zj1%2FwqNxcxRi30fJTAqrxXqxpBoo526tTusonzyulQuer7A4Lp%2FVta5gXIgf1ge8zF4SkrpQYVMssqpNWAknCmIfG07I6gQS%2BMtS1OrRDkFQHszrKM88MoReYOk15troU6d60yN97pPwE4a5GIUPyCLN9GaYJorRYgy8nHI3x%2B1Xl9YbGgxUoi1MFGjl%2FDcB%2FTQl%2B8kxg1k5qwHX%2B58sZDDbXtzS4miDe4tQIw2eHV9BeJbaTN9SjnxQhFoDQwe6jR%2Bx9m6Pd9rHHB19W4%2FvIsOHk1eNPBi21thgLQ3xL%2FULoqD3Of9gLNHaIO82doHsb4z4xd%2BxQimX%2FhGxSXGYDwFQKwgsBsW4jKAVDr%2FoXgGvELciWb8LDsgzk6IhDFjMQvdMPnDyMAGOqUBBayKI9PvhtIdBiClJwqxnN8Gob5rUgh0FZynLlHiC6qMteMgSmpgQsYSw5bsmrxGtwC0vTu53EY9mx7tyNXcwpRJytNPxKrLp6LXsWd3bAQ0PcRLLmyeI%2FLiBHlxUIt1fV2hGT8q%2F81ul%2Btj%2BcSKD%2FtnnPhxvs4U1abeNnQFxkhOu4bzPZHh9eVXq75Djyt1joJJUbzWVF%2Fu%2BY9v5xOxY2QZQQ2G&X-Amz-Signature=7dcbb2e5259f8a5d35223a69b55555d517bd101e57116d4a2ade4f0435c390c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CJFZJF4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClBQ%2BMSWIQtMuslm%2FyTcW%2BzQjQuiSh3O0xZl6xO1SV4AIhAMTQhfQR7ACDyqioHZXJdPAvAQZOLzg5JjTd5xbDZykFKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Rws2E8VvdxoL0RQq3APhomJZPNdoZ%2Fbw6qmY9n%2BEmY8SGGZ8HMx7LDnboXw5Pjk1gNDuquSAA7HuVLKRii1rvzAdFjx4lawxNUEgjsER7lhs2b0efx%2FuCase0EgMt7hSZPDpG692ARz23MzCtgX4OPWspxWsgr4sR%2Fh5EpRoQWccXf9i%2BFOK6YYv5pH%2F%2FVjyWjtiY4YbkVRyhU8Hbae%2FhcWisA3U1jgviJH6z3QZyWrm1hFf%2FqxzhvnzssLp5JbBMWTguSQSgWCksNcW1P8BQlT8sXSlqN3MDHILWVTuMdVKc%2FSE8Z%2FhzlXLijw%2FL2sFSMNIorDcHubp7yXQpjsdbV0PLDPAjNV0uOoej21BrdTRw7UnMXar9TiyAoKZQEj%2F%2Fi63braMcVzVILPH%2BePRuYAWJuwv735d9JofdAyC2voix%2FzSQVTAjID%2BjgggrADrzi%2BcAplTu60RE8F0CSNAvIbOWNyxaLsOqFSPBVj5p5p9nnErepAO2KQX%2F%2FluSFlSu21z5IEwtQppeFWdrPmq%2FnkJD0DCwmQte2kwWbVnPgBF6qx5ugy1B9uUnXeLQv78T3dK%2FLPpzOr5pmsO2SUtPvbY6%2F0Vr8KKuVpfq%2BqdxQOhXb%2Bwh1EnLbFTveS0aajV8LdlzDJJzNR6WzD5w8jABjqkAcDc819JkIZNLLpdqUi%2Bk6A2OqOs5Lt4FdDuukSylE%2FJRaVuARfdTeB1pDsylXx%2BD57a0jrwsI9SttPBwO4iqX%2FvSXB7KSd45LA%2FhPTZLqc359WtkbrU9BsrUbK2Rf6405SKo9ddVcYhW0V0oYO3%2B4fAuJ%2FI31GGEVWibU%2FQJ%2B4tBwpzxm8fyaaDvxnoVCufZck9q%2F97fjYL2HHYEauZ%2Bs3NBllr&X-Amz-Signature=00083e047949deba26046232cc0caa40bb74fef7a95580fa40881eda397110f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
