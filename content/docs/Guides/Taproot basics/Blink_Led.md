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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QQJVL4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDS%2B1pFL9EvbFl4ASDEG0X2Y57pHGt%2BofL6LvuxvfOfxAiEAmIRMkmUI6HJEpjxizkcY3G1CMhm%2F8tmzf6WMZdEgqroq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE6gKeEKplWvAxADsSrcA2OG1GcShbvPTrPZy6o6mCEwiCCcni7j9Eowxs8kYjLZOp5FSqvcs4xq4wEaxljMwO3P9WAli3S9c29BeNdQa2Lx1QN4F7B8hsPWBqW267MKf%2BbDB4rM0MWeeIP78jy1AQz%2Fp8aI41vLqCysoNcp7%2Brfuhu6s2HrbgwOowRqUqRZu5vxiC8LDImhjv40kZj0wwm1%2BvwC3K5cN973zd%2F%2FSIxF44GbxONFIFN5iVdDqcJKKb39FhSYHoxiVMXQGGicm7h21nqinXS6FcMfL2c5N9dmJ%2F8OjHnpplW%2Bo39MHmNIi38yy1ZFhegcwhU9wrJkVRQQWtjMsld137z4p%2BnhJf1GKeo%2FZ9KmHHJymHGt6FLWYU2SFqdPa9rSZGbTbw6rxgKdWItDARYCIOJUBDjhfgJOpJi%2FYZ5WKldH%2B4BI44qG4ZMnMJ38RA0u3ePAdhruoc1fes8Gpepn%2BJRbKsP8YtEF02xBLTBR%2BhZzxVJR9jNI2kjEJpW6N4%2FvjBQSKN%2FgLIYoXfNulx5g7noYsHiZeJ5FYPRmfp8KTBRVPTzmvirHZhZObC%2BPRu7Maixihyrch1Xk4eWJmfGij09tnJu14cE7W8L%2BSzUC8n2%2Fs5Ob4bKTvbiBQ4LgruA%2BT57JMMCvh70GOqUBZY8%2BfM1CLH4b%2BleU58D6l2RrhXia7v6S7GqzHCEJ5%2FRHjjXLqQy6mgXZTapZNnwwq8zO2nDAFPJ8w9RR9zouss1b41qwZwjlCIb33EFKoLgzbGvvNoqm70aY4q8Q%2B7kxQkjDhopwSxt10TcSp2PXscYMXoSH72XcPLxPcAeIgcXXTA75HUKNlgR4u%2B9Ecci%2BxQVQUXluJ9B6M%2Blh%2BVvGDBorWKEa&X-Amz-Signature=d3aa0ca2dc684a0615ef8fb6b674d24e182ba3b3410880ba567c3ad2d9f1fa72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QV6QMJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICnW16PfTDAfmwEv5QVCfxPBefbnkjdh0gxSL3oAoaHLAiBSMoKl9qeVWyRtgGWn6%2FcI1udgKHkjlK%2BNNVObmhQH0yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMusBRm1D%2Bx2Rm9nnXKtwDSiERDF2JWyJkchtsVlTTWDU7Uy8eYcBWA%2B5QIQ8sLRkyo422PlhqRMhAsWFgwru%2FNae88lyOxe%2BZCLeY6h5DdyHHZH0rlYjaaII8FtZ0bqbset%2B%2F5erL0GezyGRQUoAV0F2iDoet6OAeml50g4Vuc%2BrIK3kehzREx03AX6BliuTrHb75v3E%2F6hOmVqW0gdzE92DsL0k16XCaNDV0pHx6kazuPlvLohFCN6J%2Fr2Zo8MhTR0Qs36o4NNcaGU9IKMePZx2%2FSfTuRdB0jik9W16SjIuuZLJYQ1x0LndIPAFlmL1dUe2G5gs5gHm%2BE%2FrxgGPzOPCPLRuwo74TnSl3wfAFl2Ip2GsK%2BoOf1b1YhbT6scsW75FSGr3%2BKovBb5bX40sPzAi6becBs12O5lHQpSP7e%2B6x%2B7gwD2CpvL22BXqWmn8kBe1iwhJaBNStl1UUA1Ss0KkxNwBwr7bO1wHV6pGX9upncpCMqPCLYFfWLmZoQW9GuVawD%2FLTeUgMMAQ2Md7ZJsKAQh7ccJd4JVxTvIwdYdS7F0Hy2zZC8OyTRA6zDZKrRPy6zMfSvbMFuviewS9epNhsYfBJBzCqpBp9fF3tK46cfQc5YMEHR%2B6hq3o3ucBCIglF7Yre4eKdjPAwta%2BHvQY6pgEDVId25Rx17BUsHROZMjntfEaSKxo37nhdRBJf%2FebBnhDxRcdqGbiIE9UrgoHwSO10HHtATFlcOhc00kLgoc3xcWSLaBb0ZvNLZ7zf8T0Oy4padbTqCdBCDsVvd2VAvQqvoF%2BWmpMhl5Zn0UtHI1Us6WocyLU7Ji6F4fnl3SzRuUgOnXzscEzlEyDPTmmX3VbTFyvTY2CwG6r6e07%2FsaBWU2Ls8GOC&X-Amz-Signature=9e9b751358f20e4961c27481b2b15bd7ce23c00bf8f9a6d9156fe26573888835&X-Amz-SignedHeaders=host&x-id=GetObject)

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
