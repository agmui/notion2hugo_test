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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SFYORK%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhtvSVNcMrI%2F0Imw%2FZcgnDVqk9g37hxaVNGhYmPVrmrAiApV2xsAu5xlh7LHYOashn3Zfszt8Wjzz70Sj2n50EXAyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvSJozXqYNJiDaYMKtwDn3kBRIc47a7VlzhER78bdrcPmL5ivYH0cloDftOYMuQ8Crs%2FRUdEtikz1dWDh648SAaEZvVQ6k76z1i09NFesi9nyk4H973IT281DKlGIjxJzRxDA%2Bunfr0%2FQmHuHrvMjgrgYyfloi0ST4EKMFPecLeO%2Bjkzx62QsFvnj7RT%2FC1kjo9rnOpJiCP4%2FTN53J0HjWHVi4H8I9ETP5O%2Fj%2B70Q6mHMKBPfyAjbPMVFRcPPJ0FrQS6B%2Fz%2Bx9PasJQTQCVM0wlvclBDqB78Qc1H5N4eRTfh09QSO6twY8DZETKWFpgNUxpn70%2FZ%2Fe119xicaYFcibPrmngp%2B7AFLmuXGfRRmjwIbf%2B4VXcgaSuKWZnVllfPfNBwe0QGiVU8lpHKoTDx%2Boeub%2F3wc4ZNoQEPyjjbmjiBG3ndncd6d%2BUCHx4tHbHhxN%2Bc83P2L44PvtCJCoB1LDXK7DgMQEzNaWkQk2BVwvlJDWl3lyGrcAOlDZks%2FzTHEzX3x8LyA9mb3%2FGp8v0CnxCVBKPgVnBMzoBGbbRDQQoEHCEVHgnolIJpJJ3euuY5MX5aBPOUm0NwQHb3N6c2wEQELBvTon0Tc5jHc5F5Np%2BEDXD%2FdTy7s1%2Fay6xSzg1NzYGYcujAfpalUtUwv437xwY6pgEnAHHPk9NHXwugWnvvaJzNKc5mJXk0gVgN27Q5cFF2anKWmEw4tKhm08d%2BB9MGjqGdKoYiSIKB%2Fg3CZCsqwgEtP%2FcX3Q8fFXjzZGFUMNybAlwr60A4BZerfnzcIalHmbVm6JvwpXpUGu4Jrv%2B6eyJavjPwzbmieDBnrOQkvaqhbNowAx0ZnxtXz6rgfDOWihb%2F3dTj9OJr6qRaO%2F7iW16uFgQc%2FAuB&X-Amz-Signature=7ba7cc90f07ce32ed2a9ab4336dc1a93430f154f0872cec873872215c2adae38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIM4JHY%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu5dlNC3srhE6ttRXKhcBMFLE1OLG%2F4%2FCjVa9sZJDZvAiA0t1lQP%2F1dJPwzoTGC2CfNAYsaS0Css8gTD7o%2Fv8j6ByqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3cfgsrkaw9W%2BEyZKtwDOOTvJ9U8Sh11MudbnUCLigvVJK075eJP712NL9bzPJLqEoQYzEg38DfhzNHVuzWwfzo8pDFpTeux5afej5bY0sfL1VM8i%2BVrWsyk33TQqI6p8HDqlidqv8a2reDVc9F75WJaBSDrLlZYFaWdSUz2%2Fw6ikoYimiq3%2B6ggaToK3NYEYvx5cwrkPOXOR83PabMzyhoXjx5lDgibU%2Bwlh5E9EaMuq9E6ARb8BhYaQYQqCTbR6NMOX5A%2F1dZ6nSh%2BVOp9EkqdQ1%2FCZxmFexBQAPibR4fhgmCpFigjO0CshnlzpNJcSveQzBb7%2FKZln2Gjcb1yav%2FNzmXRxnzgU4a41kSciJ0yp9Lb6RVjpUC47D5pUil6HUnnxVIdDDk1JzztkKWXn7LJt0z3DmABAP4C9J0zpGJ2X%2BvW4CB%2BZcYbeVk48NshjxqhnK%2FwwrLgHYjRB878R7n2g106dB9F4Ngih0K5OKsQPfi7lyO1mxu2%2FT3kAX4XY5OGBUXYJ23lkDYFaiXagXQP7brGyM42VMNGUDUHvN6KjIZcAZ3AwsNoeOeKQBB7ZA0wyRjDvLEtwI%2FGa12pcaigIUQYaQcKnursqU62sy9nj3OjfJiTHx4n85CiBO3dPqHEPNY6ndCopdswgJD7xwY6pgGNABP5sWnzYe9izvXKC9uuXwmnego9SKEitv39BA2tCiIKjGXlecNiL4DPZ3LsVsYwcxWj0cL2%2B54Rlv%2BMDj4OT4krAsmH0UVFPNflCBj5lMvwMqCENCFYjK26MpsL95WSVepjS5XHqeQlEbI6Ms6%2BAG0K%2FOoi4STNpVxBLQRmd9SKqfoyTvlj7WXdOP5UzIjt5C6BSUx%2FR2vXo%2B8%2BKGNPJlm0I0PQ&X-Amz-Signature=ae8800d0ed72dd3e2a9ca823919aa79fe4d92002436779ff7ddef1d22c0a2c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
