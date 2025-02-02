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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQS2HT5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX8zXhInN3pncKP8SVuxLNUfcH1LfZf3LuXUf0D0xhiAiBhaHRE0QzZ8DpVMhrdSM8%2Bt6I8mP0CTACofKr7MAIZPiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHq0A%2FYwhHCcoLYATKtwD1KAs2wpf9X8La1yfwSGetCRpMQ%2F8BB%2BfP%2Fl4uKz%2FANsNdrlGXFmfrJcGavKCX9QGEqGCKxPq4qqE6MWVDIvEQTKG9EhZOxYJJJ%2Bj4FM1ePgQNe82A7789R6qQAIhG0XO9lEvnzBuYQELDk86NFfsRRNfkI%2F82dT%2FBoQmVAMsZBjwjW8dgsiut%2B9nLWaSES9fhA9G86UnOIoGuZiEKhqjRMGZ%2B4RBz4xdqkdPDbKyB10N0rTLktFImPXwB5qobl4Uw3ipuN4xBemnmqaA6Y%2FZ8avgqw1mAw%2BXNRZDloXqhs1S%2B5xYU91mUPU402Mx%2Brx1HB7tsXk%2FeRCiIfsa5w2LvUSIqzg1ZkagsjwoHOb3J6eHDAIrSssufpCKorQtpM5360hiHGf4LmrTN5CL%2BwRwzp2gWQWcGlR8oYEmm5zNGlv2Nq7wWzEpJNnvUr0H%2Fwg3M4kUBjYuTNddrmVu%2BHmHkNAWwR%2B5iJfRFCUsbqd37XtML1vJcYy4YfKgS%2FTeuyHAO02mvpW3%2FhXYu63BiNi2y9hpZkMtHvDHVGckWjQ4S6fgK4mqJ%2BTEk4bP63IEkgCAUOnIydGz7PaNWIpmFOtqBafdFtfzS3iM3RpnkOnc8DkG0d9O5OLPFD3C1MUww538vAY6pgGBIbFBe6TRFlnLBrctkOj56PIob4a30VSp1XTtLuwEjeqFYc%2F9BHc4xo0zfSlD1N81%2FafbMr6BFDVoN6NNdN64pcNgmMRORSXMYEEpvCS%2BvSGWaMIkWMmhTips89sgIzp1ulY2JTbenwrYXjAeoFgqIHcLU%2FsWjF9SIxBQsew3W%2FljEuNUz%2BcMUywJmMT4KkrAVpEDNvb4%2FcaFbgdxZBDyCiwBp3TI&X-Amz-Signature=4872f45274099018e8accb5c2d14e104ec7f7a6370951c3dd76671ba50269637&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4WZ74VG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3%2BRafhJMcotm8oo%2FxtZt9TbTnoe9n433qeTNku6HjjAiB8ar9JQ2%2BzMuvHSJrh4rlEuSe8V5R7q2MKVQ8fBzSCuyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMlF%2F%2F1OhJP98WnjEKtwD4gR57RWsmrjP%2FxcFkazdEPFTPDsXw1FuIh7Qe7%2FEfCCuw%2BnidasU%2BO2oqKabpkr2VBO8RR0WY%2FRd0NAVizLXyk4W5EFNNWW3%2FN8XTBVSoP9QkLjsZPtNIGoEUTKuxdST0CyGv6yEEGEAY8B3SVaUO18theYo9904JOUlb5zGqA4j%2BrOxLDnKW4S6J1r1jkpUaaseCCRhnWK59%2BvHApEZ3D0EW4boVYJVnFPpx97azZL9x0GCXsyymXi0Wr5%2B6LUe3nE1glhnpLZ13w0yOLfveYq0Fv7YFOgpMLcMw5xqSVljTjFe0F5Foopb3pZ1iPC%2Boi307zMHAlyugU9b2iYVyA0neT1KqUShhOxHkcPZ9WxFqIXnRa0T13JlxnjUhhkFdbx%2BuiymOe4L33WpXnSCg8dT8GmrmAk8GWYI6d%2B5OAB1HILkOoyLFuhg1lOP2WjHODrPZwhB%2F00JoRUzi0I319l%2BDKjX07eBMBceV1AWv030bXh4EDgCxuaCRIGQ1r4lr5pCe5m9XqXOkS6x0bKiqqkCKBs1hR82%2B2EOv%2FRVD2zLymVOEJ6h6KuJLiFWkAYwdWFS7QFi7eJdFavMKI1yJ2n8JQzD3UwJzLFty1u6Ebvy9mAUwwY4nJJnB6UwnJ38vAY6pgG2k1MXprwp6yp2LHfHj4uJAgeUDQ879TI3kCxy0ouzSWMDmnH0Db5Q%2BicQ9IMcdiwABGUSe%2FXkvrX9B7c7QTmF3reKgP4hANFLDwcElDB4274BAgzFASoyXlnwxxfDkCdlCUcBgv%2Fra3af0gpbiGol1MKX9jebDs9J6tgr%2FIiFJUvmxRmKOPSv6u8eirKVVySx3f4NtLcojfh68xYHiJB127tDyTO2&X-Amz-Signature=13643ae985e58bf836932fce6faeebc17d5768cc127113826bd5354d554ee957&X-Amz-SignedHeaders=host&x-id=GetObject)

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
