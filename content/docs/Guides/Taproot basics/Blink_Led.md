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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7ELP52%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE1hk6Lep0nePnJCASn5WEKOJDYuA%2BQi%2FfsZwnTiLdDQIgeRUNFgCQnL1TvgHV%2Bo2FS56XzPiNU2LxmEqFdmSerx0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx5ticKgwFRwa3vdircA4fZQf%2FMsBZsyR0vUJZWtVe8kDvyuwY4V6w6iejensZQoMXu1uBMXA3%2BBqXSTigfcYduys8VKNivZwQWOq4i0N98%2FfUFHgHXBNnvH1Ff1m2UVuxgRMwEyqvI8tck3W%2Ft1ohH7qB7CnYotadNDT1o3Mq731p41uhxLzPk1FtbIRs1T9nAGhaYYAutN50SYImgZgMtjIGJCF3IBzGNqAFToMyc2%2FowsD1FyxQOKS%2Fm2Mis4ViqAve2NtCxVw7RECuOVUdGd6lQZt6wVHD0EF63ltLeFBc5mtWDjTVut4oALNvOnR%2BI6r%2FbiDSfsg%2FP%2F%2BnXMZB9As72FjTfjhLNzgwikYbE%2FY75eQeHiNsoXP30YeqaT5tCK1zVvDtpLBgC6MY2SOfJk2Me8%2FnkrS0aT%2B41DwlBOnsuGi5ONiunASdD7mvjgoGZvNlQCSGaAmoSTK7Dn7aUGFDn4XLwAYf1QlLnGPcYxm%2Bvpn2diCPUfLo9LMTGSdKZ2EcGmTJYi%2FCngHWAtONPZa9ygNtkqJWVkyzDLnKASXp%2FKHR8lVWP0y5nW8vlC1mGcYxMVvp1QsqhVJwnm6%2BtG5IFVWLtt10uYKMG0ssR%2FYIl4QaxnB9ulNkVPOLK0UPpLeFoT2cjB2lwMKzm%2F7wGOqUBA739rByIk1mimdRINaXrLz5nhJM5vv8RA6ASILrUrQYuvIn%2F8qI0B8Yyr2R%2B9ZYEjezV78dvhc%2FpkcCTdof9%2BudmLOHtq9FwniF1deXAJOiotM3dVhefTYVLiCKIHg0tJtrX%2F8OhAtf7AGJYuCgVnLacGe%2BU4Gt%2BtPnGmcJlswSUJZnR2E9DbvA9QwBJyhW%2FRSysoyYGMvcpbRnrjbueqwWWBZiR&X-Amz-Signature=2fb98a09ee3e9a6b81411e147d8125037272cfb5baf980bce149af95c83448f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTYGC62%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvHW55ZjUQCXA4c6TGvOzCWJULn94ktUdFSAzcVLlpMAiApNkKoQ53Aol4MYeWwSmNw9NZrE4nSkECepv3R4E4YyyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF9dng6kiHl8MTCRjKtwDojtaKS1KXA9v04PlKbGNSD7B45SSuvUlzWuCgCyPj0YeiMd8IRaLnBUPXcMfOZvHGQbNgeWtO8eAszR0xKtwonSFC5OXfdKbMEGTC7CDNd9IwwxdVIgNEKhiHxW1BVNA2UT%2FE6UuA5wrhPTEQJtCdUz4SrFJL7CiUzle%2BF97Doks8dYSkxImSKEqjLOet5IpQSpt%2BYcdbJfXUTJbLUpvNIM5gMyqUPAUQfTCQRh9kLiP6FqOumoSpUXM2JBVtgI97m%2BUXyPTUVkwnnX1TEHigv65nLp3RIHyF4yhg9dkIbGHAijG3QfVuYOi2%2F8gi%2F3hiWTGni04xRzoq6rPBk9z%2FiTv3aeB32fPDi3%2BRg%2Fbzq9Zj%2BE2%2B0XuYW7cbQjukpGG1dktD9zfsl4EzdlqhHxm4Ejm4DzVlw08PvWh5YutK0V5oq4MD00UYfrZWqJKrizWkSjAla5svqQ%2FKTIdLwGHjumtfa4pZ8tWH9h7D24yGjgB9mDtEkzRC1OXMgvpVqKq4lyN55WcSubYL0K85hOqt2iCQQX%2FF9bcrsy8o1wQvtMGn1cb%2F1b4WbqfUQ5pb2Rea7bHwlOPTqq8Ps5ODr2gbz6CJ9n27uwWbjglCdSWe%2BRQG%2Bam89J0gSPQtjAw5uX%2FvAY6pgEFpNMExwsDSZYfq916cybFcK8lv%2FFEJF2jWf1HgwdwqHF%2BbkJi5DokUcd1FXnOqvbsJ6gobBnt40WFB38TKYSFoTWx0RItoPOtrjWr%2Fq%2F9m139Om8Wa%2BrS2h2S%2FA8RIN1EoalHezJWsjffplpUAWG6h2ppZn0dcYf%2F3RtyzyRqCxv5XC4sZ%2Bhfq8ozHGkg%2FSxE3Unsgwuot%2FnHMtMLJl27FCN3PLb0&X-Amz-Signature=57b4e335e64fd2b61ac2cdff991b374d98f01948e2e811b7be75b9956a6c77e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
