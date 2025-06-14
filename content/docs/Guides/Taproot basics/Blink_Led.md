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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZHBQZF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBc1MQyMERwhfYIkKLXQW23THo%2BwPS%2FuSkJ3ytiMYpAVAiEAixmB7RbxdADRNx5jmv45bgEt73XEOGCXKAZGsGNuPUIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFZ5NR3aOToIE4XK1CrcA8%2FmS0M95b0e6OFMuy7sEQRvGaHbN9SXFf5ZHtigmMJ8ZSa%2Bjntdpcdy1Z07QIMerCCvVCCMRiExydYK%2F53U%2BnTI5ETCM1bi0AtI3aMjv6jGs07kXrOjnAasukqwKHR4Vh5eClHp9v8ea3n38yXOx17c93e%2BcQ1r%2FmE%2FKAo9AlR0L8GlDGAbcsXS1uP%2B2cinoI1xnQZMmne5Z5DzEIDoR5JcRuCUHNYi%2FXOaJ%2FWUfzuIWFyfAHd1CxW4WxlaKdKAnhlrWbwjHb1A08eNdVCGJ3NN5aYHvkI9qnkuxbfoCUr6loGVnBxY0KdOhoeMyLGypuvaBlUc2ZfbealBjvz41eS4SRnFukmOveDDFERA0vQRhSwKcuSn%2F432Y8yMSWc3ylKwf4%2BI8I21Pok%2BZ4UJ9ZwWmLl1OFaLMEw34j%2FP64%2F5Eoz9YRgtbjd4ubZFFWn%2FamlstV3TD%2BM5BeGVP7NhNz7bLZDKlO7VwTg%2FV%2FY3VL%2B9B%2B%2BeoMgJgNdw7SPn1koedkTS2ZIsXVmCiARyon%2F9%2FOuKYieXYpt4g4F0AY7n1zrjxt4x7nHDRYp81g0q7KQUk2vTupm1Gnv3OEuYFS%2FdMZNvNYUrjyloQ9Kq5iRG583bVFDF%2FStchxsQqWEhMI68tMIGOqUBuFemHMNcK5xiEzOOXt2KDtkanSFCN2Bnv8yMT2JeFU22MlLpSRpFtW%2FQHkTqQ1LALDauKXMWwY8AdSbhsWORwFIhfZqg7iwJxyM54Uqa%2FTEHFnwkg11aFQEkn7JHaPWS3ma7gUqMeAoI7JSy2kfkXYiMkyLJJgLAGfffxEa9bq5MgYDd%2BKt5eP08WjjtX2wHLitLeX65V8fphExh%2Fk3GqXUV3xOh&X-Amz-Signature=f55114220667901de24868e5f8de61709c7ab23fa3409dd53534d4f4c34fe697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXITSBTK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCHxmWvU2EwX84CN%2FIzN2SXgT%2BgSZHoeG2Z%2BBNPm%2FKhIoCIQD7OfJt3N4fg7SVV%2FV%2BFiq1hE%2F9x38hWr2Jj74zfb0jlir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMIlKRFBygo2ImXSe3KtwDTlDjw0KLOrKSS6UwCp3XxfEhAltYmc87YlNGifaLJg18qOKgkxHNSEI%2BMBQd%2F4xo0zFGFmcaAW1bNO6nkYvKN8sVT1OQJUPaFxMt7rD46Os%2BnQ6xCo6eSXeEU2JSKLzIry2j9LCsYwoOXoOSbhc46FliUp93Nm961Vzqjoj0Hl4cqb5r%2BJdtDnBj68RA%2FPeKibb%2BjiSzUpdEPVJTo506aQSYE5i3%2BBDYA2c%2FwJm8vM32oTPCPRDMM3zTVcboIywmysKlF%2FZpEBjiThQBFriNMjTG5q7O00ut9A9UGTKej%2FiIFY8Ateq%2FmPkzpzT9Apki4Ty32%2BVBlgBPHWXeVKvvteN8xI3osABwm3E6pFqMmAUeZoo10Ghag0Byla3r%2B%2B7mpa1vDHsuBAm5iz7Lq2QUnfeup7RvZqhUllLQOOf%2FS1vstnu1qHUINf7Td1%2B8V6uWNWsPftBOrKdqhN1w%2FPSBFZv%2FWwCpN0ldZPIfKbeMLURYQNSwWUyLxfvv%2BCH5Odb%2BPDk2Szu1sybO0FeqXJBJ0Y783S0wBvb6Dl0lHmxnYxqZqfYSN%2FWzwIqxuoXP%2BkAZOl3GbpX1KgNlmJA5ft96Q%2FRDMrK5cHS8Zysg24iyDlXW6ati0Vkd2lxczB4w2by0wgY6pgHDjJf7UwG9SLbLaK1U3XYyH2sAOHkSHXzGXGqs0OGSkmS%2BkK8i7S0XshfL3VhcVZeD%2FJG2rXUhnJvxXDgjVB3u1ekVnOrq7uKaWFu4Wt3KrSa%2FD7eNfxWRnuzzoEhEHtOlMXYiyrZe3kgGqq3K6AB4HBugNjk9DQGppZPEZt2fkTti1cgDiyE9W3VWizGoXP8bzD83UM6lFpr5B5amEksTA6iWg9cj&X-Amz-Signature=2188dee5ae97603badc69cab167d98f6b31ce548edb691f2dfc051af8614ecb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
