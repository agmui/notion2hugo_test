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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNU5IVF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilcuCb3njlbr6mwlSoJTFSIYgJIJnFw31uu716YKAxwIgDIHkNO1yIkhTeilXisEHZ0oQhtl8okLVu79FGvBSf2oq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNA2v2LaZ7E7nt9CQyrcA9pMnCfx2qknCO%2B9Qu4ibq0A3nExvGr2BeoPDzI%2By1wT0fvK8q%2BgdP0kIl19uZDHLynHMzRYOTAMetvg4zffMaxliBXcZoJgYe9xK%2BthV4Xu192IAPbP1iFDuZPp0tvY70aLrtsKD2S0gfulkX8rMWIi9XZq1vAh2ePg4QvWL6CJ3Qbe0MIGO%2FIkyUkmm%2BB%2FMQQJRzafcTjtTji0jnzbcVNO4zmnnjSQv1jf8gwcpYwPsTq8WSV2vxNXzp09OjjixwNSSCDMUeNU6YHejcvvk7FGcM9RTfsD7uVVkXgDDZms50cbw5oGu1RmPsIh5k3Ma%2BGprSTNxyTMImh5S4w4BSTBZOCYazS8yz4ROePr1wR9vrJ4xxgjCkiiiRVBgJsPZP3JovYr6IoWdX4v3OfMIOK2n6iypa4pxCC%2Fe8ehpVCguvlwk3jKtQpeKN%2FErmWTg2oNqgBlKj0CIajdXCxFEFiUwQ7xt%2B2bkjKnOFVRlSszqlnca4SxiTm%2FaAX5LLNVuASDbtSaKMTcyxKRm7jusdBIj1%2FAfNHEUrAMkOWSAkQwziPg5%2FAPZKsbsjWR1Dh4gJb4n%2F4J4zk3fVREu7mGKWBZEibvXmKmTS3V93nUoxdsQOnQ9dh5eN%2BuBDxbMPL%2Fx78GOqUBWM9qezQJ88f0K873yvaVBq8wZFEzi3dRT1qZxQk3%2FdlXDAmnRHKeubIocUQocHw9%2F%2BoJjm4iS3ZgY6gf90XRqUgt2GPgxp0dJzviYw1fDlI8wsgEM4fmlzkx2nD2PwCNmTLAH84M7etYk8FdB1H74lhiX8yIAjZ%2BCNOzoaKxEyEuH2SkNsCQRKgYCbKAC2Ioh5QJCxWw11dxMBuE1Un6RA%2Fb2A9i&X-Amz-Signature=72b6a70930b42b749d2c8f6788dd0336a0847044ad4c704f8712cc69111ed043&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV22AEZS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAJ%2BkfJS7QqsbU%2FraPigF5LQ7uv2FREKKy5H1FuQKmPAiBiIoBAoVvLQmj%2BK%2Bxh5zV9aHHfGsqdJT4XEPozLaeXsSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMQgS1UbuAfcHrnSB8KtwDMGfGM5digx3vc7j7uDMQczxCm%2BuO9vqGaEwPsRJCNiESqapu7eCgIX6GBK1eNLbM2WPpk5I2YzACnSOW8AThhgBBhgZQNAsAS45Tas6viPi6Ez95lCN%2FeoH5WW6QyukAX5gHs78Pzn%2Fsw0v5L2w6R9cP%2BoAxsFkqF6oPLUD7JcQYXbilNR2kkuLARgrN9NrIin8rTvq2wamTBhEa7dkxPjL8asjogZ5GAbYCWnQUtl5Rb38bPZy8LbQ3ytb0pU58%2FYk465mORJfQZsW7ec5rMGRn0oN%2B9wiEjYTtgKAhN34FHQoOHk8pL9Tbo%2FqyBM2sL00qaANJbQX6kq%2Blgb6NWqrAXXS19XoxrTbCN9xQ0CIoCyqT%2BPk00c%2F8KSMIvtb99DQWwbky1V9TCoUREIpLz2smjKDWqRcFrm3hV5EOv7CWxehQf%2FMDQfMF8fOd4nVcTlhjdnwSu29Vtl1LiC8dShBvTY%2B69OxLNFstN4yieZhMCq6a3dUCWH7RibMvX0KrD0yGJwb3VAmjqUHWGJO8cPGHVnBNkxmoMskoyAUCLYRmGQGGGtL4w8B7r5O5ipVoeUvEG43srViqqzR1LNHgz%2B4zMgcaB791LR8Ot3mEsgTjqZm%2Bbq7dsw1UYgYwjoDIvwY6pgFgjtOc%2B6VJvogVdiYL28HFXywXTBgFHtLMxMiWo53FyAjx6mKOp%2Be3cBezHjftDQDd2TeL9GxO37EEBK7kzRTz4xL%2F810ZtjwtYueFomzxZ8ZdtOGQUDWv6%2BuMNJd%2F7zaZ3RwVBZFZAMP%2FfvnyrJvV2BPhY1OGpLTCygOYTh8Q4gGlTaa3vEzg1hvQT9dcjjwcSv6N%2FNzZIxaxatrJ25J%2F4fgRQY56&X-Amz-Signature=3c4d4b4951bd94674bee71f995e5c7b57361653bc6ef25ff561bfaf4dbf1b266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
