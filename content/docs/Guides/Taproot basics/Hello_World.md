---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4KBUEV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDWZqny5L5H%2Ff9ImL5Oyxm6VMtfiZKDyd5qfCXmOJ9dZgIgLCYSwWeTpga168Fr7P0qLlitwMQ0iC4%2BzssZ88NAzD4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPbmt8sEtVsvFlNJ%2FCrcA6WXNTa1GiPRLfW5Kx8whiVqucNZsQQT6%2BSfMW%2Bu%2F5z6eACjict2BEz%2FUK65qdU2Ht6QylXJ6VCo4D6h%2BycmLBtBYoEZOlHLTfLTkzVlCJRBWLaZLbny3UUlSUFGUzycP%2Fp9X1qaLLM3BAeqJ%2Bs3VuYFU42GwViWDmGjuk9CSzT8D5Vq1uYARefJ2fLePP32wi2krH9HxO3apN9qK5Clke07TS4ZvBpCP%2Bcfj1%2BC5nUPV2oAjZR7AInEVQ9icdJFBlAzkzg4XhFzn4T5kNHeci0ZdVO%2FnjJd1C3qzi0%2FIQFyrFFRw%2BnqLXFfxo2LvEVvoJxeba0aMlN0ysrO89Db1xCL1LT24PnWKAFW%2BC1bP52zP6jv%2FMcf4ZxlPCpPeNZqhn3Q2JXfSW9u4praKMex4xEh3oqqv0wW2MwtmHu5pIDQuAb5dlH%2FbSdfQP4F%2Bbrnuwl66zdinTVDHSLxD%2F5rhlgD4TdXCUHc4ov4UtNydavMkKCfHY7JuxtsBUn9uKifi%2FcrxH2idYlypDC8MwenhgutAAqV%2FtIk0X65rRZyk3WqNpQEHAbyIPIye1paX9EyHjLwpxX6swABfufHY5AAXkEXFikEddfeN0iXseUuDJEW3Zp0ma2XpxUtqkxtMMe%2Fhr0GOqUBoALlQB3uWS3bI29E5HEqTFr0qnUklFz3mytR86NvoWPmQ%2BWJGaWGOoBDzIuaraDPiApfbANB8fARBMYRNEuCRZ14mpdBrDrUkwrQx6C0EPJneWYjY%2B%2BwzQ7GfHuc7%2BrViIhiqivMldp%2BS2fQ5GEtvpM%2FkDnizqanEs6NqDJLmsqqjm3zvgHQqm31aUiFVQaCAeRkugPTUnvX61%2B9dFXr9%2FRKuehX&X-Amz-Signature=848fc5e61286e973b9cd938196814ab3d167491841f06ecd92274815c9b186d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4KBUEV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDWZqny5L5H%2Ff9ImL5Oyxm6VMtfiZKDyd5qfCXmOJ9dZgIgLCYSwWeTpga168Fr7P0qLlitwMQ0iC4%2BzssZ88NAzD4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPbmt8sEtVsvFlNJ%2FCrcA6WXNTa1GiPRLfW5Kx8whiVqucNZsQQT6%2BSfMW%2Bu%2F5z6eACjict2BEz%2FUK65qdU2Ht6QylXJ6VCo4D6h%2BycmLBtBYoEZOlHLTfLTkzVlCJRBWLaZLbny3UUlSUFGUzycP%2Fp9X1qaLLM3BAeqJ%2Bs3VuYFU42GwViWDmGjuk9CSzT8D5Vq1uYARefJ2fLePP32wi2krH9HxO3apN9qK5Clke07TS4ZvBpCP%2Bcfj1%2BC5nUPV2oAjZR7AInEVQ9icdJFBlAzkzg4XhFzn4T5kNHeci0ZdVO%2FnjJd1C3qzi0%2FIQFyrFFRw%2BnqLXFfxo2LvEVvoJxeba0aMlN0ysrO89Db1xCL1LT24PnWKAFW%2BC1bP52zP6jv%2FMcf4ZxlPCpPeNZqhn3Q2JXfSW9u4praKMex4xEh3oqqv0wW2MwtmHu5pIDQuAb5dlH%2FbSdfQP4F%2Bbrnuwl66zdinTVDHSLxD%2F5rhlgD4TdXCUHc4ov4UtNydavMkKCfHY7JuxtsBUn9uKifi%2FcrxH2idYlypDC8MwenhgutAAqV%2FtIk0X65rRZyk3WqNpQEHAbyIPIye1paX9EyHjLwpxX6swABfufHY5AAXkEXFikEddfeN0iXseUuDJEW3Zp0ma2XpxUtqkxtMMe%2Fhr0GOqUBoALlQB3uWS3bI29E5HEqTFr0qnUklFz3mytR86NvoWPmQ%2BWJGaWGOoBDzIuaraDPiApfbANB8fARBMYRNEuCRZ14mpdBrDrUkwrQx6C0EPJneWYjY%2B%2BwzQ7GfHuc7%2BrViIhiqivMldp%2BS2fQ5GEtvpM%2FkDnizqanEs6NqDJLmsqqjm3zvgHQqm31aUiFVQaCAeRkugPTUnvX61%2B9dFXr9%2FRKuehX&X-Amz-Signature=368b1f919de68fa2ac27ba1a8341ccb1a152ca208b3d9cd685189b3309133840&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
