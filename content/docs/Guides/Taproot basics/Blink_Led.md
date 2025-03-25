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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBINKGO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjkynWtOTLqS4%2B4D%2B6pJ6%2Fb8%2BG%2B5RYNi1ZjNbuTj57AAiEA5MN%2FsIN%2Fx5ptrJ27HNjwsliwjP1OGAYg%2F1lRwGScaRcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMajcJc7Y7C8MAfc5SrcA38C3ecf8sDyUMJBqKn2tJO08jVuTc0wajx5aioiipQuanJLYLrKzQEtdyiDJiQy%2BalPiF8jrScYCK1CsU77U2jYzAXxPo3rVP0FfbnV2K%2B9HD9JkMIgiYZUzOMt80tEgwDWJZQDSrO0zFh64lPHfnSviHTs%2BSWUpgRqlkGXdvsnV6S6wV44%2B54BqHxBCxVZipP6Rv0YenqiKgy26xIWXyfPnExCQfjzI1TW9aQJI%2F7eXywbs9%2FYFsSu7l%2BIK7yLBYos0i6DWcFqH4FZmX6vdBEYSkxcZGDCPRuKRTknEAdpmLLdR3yw6kCl5a8xR8ymGL8GP5EojHYn57qm2%2BhaiSIEMyPbplTGesXaZYxzeA0dgKvRy8Au4SJZMVUfQeGY4COOklZfTdwAwH%2F39NVzm3dcYBOsXtjaBPHzrCJ%2BpppTKL5DWdgcMZCBpk%2FcQVWajOYCG39otPJ0BnWfQ%2FEEX2I83%2F1VNoDwCycx6MYaRSJv2kVCfV24vnSlTuPNyDKvzlXXTVWRJdNyK1k1zYyNS%2BOG3Z6cT8TF45ZxMhCDmWzeUOKeFqF20ZslBXAghZiE%2Bb77qmiotO63QH08XmzHryv6%2FOu12oleTP3WniwNtLOdDGz85IQIC2WA39vxMLPkir8GOqUBPo9NcbWXrprffNQVlZk2el9FuurgXbw17BVWpI%2FBAVMJ4%2BrMNmTe9AE2VUMSSDdacKc%2BgXCtf9LIzghj91ZDF8P75TCjLIUfBwc2FXo4VH1wLHWtLk8JcM2A%2BGm8FJlQtw%2B4KM1mL9BDw%2FKFcDPGv1wnpXKzpfmo%2FU%2FSk0JbhTCUOR4RmWFOUPiaMjwa4oaaHBwVUiJK1aCI4fEumNM3hbuc1qqM&X-Amz-Signature=390c1809cc4a13e4a1049795fc465f8bde6682aef46a9dfa8e315eb2ce2a04b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZACVKZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrVKjLDkHgzkYQnRUUokI9TAi98q9sUvfvFutaq0VZAgIhAJQpcLeZGS%2FlYf8SfcvgQmSX%2FyTIVNYIhUCxPSiifQ6eKv8DCBcQABoMNjM3NDIzMTgzODA1Igyy7Ftqpd9A77dr67Uq3AMQUfTOpV6XdDdEvdl4NAPHlgBHFrirHffT2mcAFPJk9J3d2%2BffZaAsCXhSmVL2n3aD41ROZQboexylt99xGIdex6HMGm0qdwKC7VEIJefYXbi2eiDz%2BvgEWzqls8xJPg%2BCwHlpPvOWLEu4S8eyIBarHd99CxYjFL3Hv1n7UXynuBmSX2DAfFgEK5uzlDQNS1F0yqn7tId0rx2PB7IyCujFU3d7rc%2B0%2BW5HfOKsFt1XABN1RXGVuBaZ4Vj5sEaIbtUJuu8YH2hugzPrAA7U9zrJVbRjKrCrwvOyHCtAzckrpTvBVzd8KnRe%2FCB2qB2zKb6gyG1ftJfnxV2nhuBb8Gj%2FunkemFXQoshqSeu1ug%2BGlwvJ9pmwhG43Gn1uihMo4DEdLzHvAmYLQlSgh%2BYZ6%2B2jwg11YtKQ5lNXUmmO6HF3xyLZDAU7v7hgfdlsbk1Z1nVNOoOvkz8XLWD1PtrdC5zmhvQEphT0%2FR6kOYH77oG9J7iYTN%2FwixV%2Fv4NPB%2BAD2nyTp%2FKLjkgylstjlGEfmdodP1SZPk9etdZCLlRC9eLR4IePhulGKuM9wqwFYpg9dNgnCAcaau1RsSTcZfjUrC9VAd%2BBKU7MwuI4n%2F6nQZKvIzfBQhDRxSpNcfvksjD944q%2FBjqkAbWC4vDpwRmAo1QJc3P0vdfG20VUirmKY%2FZodZlnGKpDbpsnfPkwJfusWz9ZDRMXTjEY6S3WnRxTQ8bOAvwIjAawmJcr1Ktc3zugQsVwbA2oeS0%2BeE1XN%2F%2BiZWFw981Cjf6AhqEJb%2F1VGfNILydPabEIbtUkzXfuCEfUc3FdncHe3yfDBigW8%2BNkgjigcTQAJwR5lUyGPJu3GFccyX6XilR3VYbI&X-Amz-Signature=4eb914a314af768f7643189e4e4fc56dfa8bd450e17e26d809dfb4d795b4978a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
