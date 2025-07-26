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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5AATNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGwF1MGvMr1wyVTrU8sBxI%2FpW34l5%2BtYZqstRX1Qlsx7AiEA2AwYJKl6%2BbFeNhVeoSfuf%2FYvNX6DKrszcu9Hp%2F7FdL0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIcMDrieYWbEGIVkOCrcAycEaVpZsOMeVgyuF2bkQUwvuSVV4Z5sKXPK6nFUCg6VrmydEXRMfbfjVR99RbUI%2B6mJyLrklJOZhwu%2FhG4upP%2FYq6NO%2BMhkOc06lxGgiKiiRiTufGpNHuNCajwFoRraCEQe632icRfPF%2B0g0tqmh7%2FJfcD00ZwMEiptmFA3769zI%2B0kJoVTHMUAbCbBqqapOD5CM1QC3WcZZVdTETweNUQkg5shj7m%2Fmpw7BvKp0b7nCiG%2FA1%2FMkEKVgKJF72wIn81faj9WzuFtTL6eDrsRf%2BfBVlQVH%2F48f1DLZ2ICRQ2%2FoahzbLVgjPQPsZkZoMGNEPhS4rqW3qwtXpUaz817HtZdP2uy94uRL%2F2HmRGudIsX1kwlYtp3ijkMLORQF%2B5yIuqJryEg6VpDnY9omttqCuOjdWw7YCnrctt1lSt3ZSbYuOxXrLH%2B7nESB7WIfURjfdosj8EDJ5qdw0bk81PmlVDESclEH6Jb%2FHGH%2BrYkhw16kwkhD8zASoHm0wbC95C4KPLTIfCIJY4IBmWrOi%2FOTFZ1X63MWBIeP1ilkTsGtyE7nAVjNaqXvPzUAc86a8K4pGZoKS1GMfU%2FYKfEd5Bxx3mSC%2FhA2qxs%2Fx4SXWcDqzS3xk2agZVo7N3ofpQzMNWrksQGOqUB0AOrI2CaGjfL0PPBt6M0DCUhaR63PYIcQtmXWp9RrUbHdfx4oJWlDDV6mhenHbztF4rKDUSBgf%2BUb%2B7riy3un9YYp%2FXq0cmsBoDl3hh8JCvN9S3lQJbIvVzv8Ne5ivNP7Ujg22j%2FE%2F8qqnunCjicFghXZgqD5Cs7i9O4W24tPcewnym%2BZqYsdZzel7wBySl47f5qiWIalUCTy%2FpoM4BqfTxJgGAb&X-Amz-Signature=a362389763cd4025e84c25de72abd7125a452cd7c0d4881ef57efeb709b45b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CKZPJH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFFj8bKzSqY8MVl0oyRTIWmZoYN60lI6TyiEOoNkKqZ%2BAiEAgtRF%2Bx2MzJBiL4jy1VWAqZiGyZ6KAyryg80TNnziiaIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFgW8JQBN0FYb4DZ2SrcA7cfNF%2F7uu3x8%2FQsexZ7zDd8Cxw16kH%2F5G5bOkZ5utYtN%2BF0nrZ7renN7oDmAsLEuscgPBWln4eWibbxeSVp3qOrVBRiCko4gS5vbpY%2F7tQwtWXmnizZ%2FvH%2Bb8uVz45pvbpUw7xwBLBYyRafRHSBFYN5dPqO%2FHEmothyxNbrYv5mcQmHSQbZVSR%2BbR65vUVbW8d8F%2Bl9jMzzd%2FsShKq3ATAs1RfWWij%2FOyX93g6j2nwdDb8hWIAKN7Q0ddjZZCZKuACTlPuqIvt9yUv%2FL3ZrCR4wSARbxTG70qz7W2pn9hCPnjIi0HzhRtiHCCPDxwG%2B3j%2BEoKb9DI%2BFHyvzO3bFRvVMyk33mQSLHtNPtBdW9gGEL8J1MvfXcTV2S3sHqiWWfjxoUJVfYMd9K5XbM1ESWC3i3KJC9idjxxcVo%2BaxuxGNP7E8R4%2BTWn7cBdDG2Fe%2BKLn%2BtpcGJ%2Btd6k3ItLBZaocSmDZU06vWITk7marJXg8%2FVAgVZJ%2BsWxbu4mF7B9qhH5LV%2BUaMTZhFBAJioi2Ay2MuJcocH40ANeGkbx%2FqprNrjba%2FffsMi%2FyeJ8qt7YIEwse7TnX3gFnheAqARYcAXtVUQxjk2BABlAyyRzgoz5KACGX%2FsHvahkY5bCIRMIerksQGOqUBvKVP0oCLJNjziYKkSQueLXmE7YIRW0ygTHdO9dts4%2BV07vMetjSD%2BLN0sITKTZo8eWh8b45iL6cpOSVkiHvzSZTTwPGPYdIpgArWUZcxCgcUKp7kWT9GSf2xNJ%2BwwURQH%2FA0vqEpicduCKJ%2BKohzMhYaeXtbK%2FvycFxsLYSsRzvkVwkwSjhOHLmFSbeStst0SVjz%2FiG1hzLRyEFWKrkPGDD9nhlL&X-Amz-Signature=9f0f96864bf8fe14479c199a51075f3945eda42f72d5c768537fb24bdef35e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
