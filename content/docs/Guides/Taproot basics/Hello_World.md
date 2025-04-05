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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOKKTW7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS0HsGGP4PbB23Ttk%2BTsALOgrwTPEu6zvgWN16SRzuTwIgW9%2FOh2In5a%2BnYKkOI0xvrv48S5ji8kD8d0tqmKxcknEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLIPcHvOmoyGbDxx6yrcAxgMXSKda0QP%2FCLgUk%2FSbMvDwu7zqwACEgtCkBc4JK6Nbhry1Ui5nKHGiN3mpX8tV2TeNDbbxoXKIUzYLQbzywnYGHzFPKAurCCMvW6XNgEAcayDJpivNlDxzfJCgV4HsMP3ifgLZBMs%2B4p4nP4IeMZubs1fhbdrM6K1HMrsIwZiy4ijvNP8KsIl5OcCJbQZh9d2IaB6JZVUWdkPMijyDqIAAArxw9hmRbh7nrELjhqKTGkPi%2FcU04JlkfsLsmo%2BnRFewnSVesxFF6g1qwxDl40HiTQxU9hXfNRKZPB0s3CPDfTzxpgj%2FjlMD6RKX99pJJ4aanKaGetuDOD%2F0stIewMXrYvSJckQxyh9GmX7BWeZ%2FIndAMPWb%2B6u%2Fc6Jm7GiAlL0oNK7mZQyr%2B4w1TfE6IKH7Oyn9a0rGr21vgJBT%2FgHreokpzyoU7ALOHhYGS7%2FMB1178Vng%2F%2FozXvvmsCkH5SdV7UJO9kK8RcZAswyb11873u1ftZMVcc9g55pkwv1JvWQUCs0QZGRmhyvxD9QZrlD3bnBsoYszn6EZVms4OTXEbiVhAeMaM9TNnMmuTXfMRhvCAeV1jEPBmowMjv7MBX0MhTjea7mkIKhlnSkfzTCEAiaPbE7L9OEdIcZMLKSxr8GOqUBNRjjzooA8ZUlRTpzCvyS4lm7al9qlV4RwuFUj2YGsGFppgx10P4QV0xo89oINJgMxp7sMYXwjBxn8D2rbfkgomifOZultpwsPRktS4MayUq18NkvnkntNBRTCApyyvJtDNDwKAoYdQ1x9%2FRrDgklDtV0GMjIw9PZAyWLzE0kbDhtju%2Fu%2BNG2kd9rF5dbUDDJNMTHjf4lg8DqQ5tbmnCN7km7GZUd&X-Amz-Signature=cdcffb3daeb2db8050299c9e6503e2ffd81d03229b255434543dd776aba6501c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOKKTW7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS0HsGGP4PbB23Ttk%2BTsALOgrwTPEu6zvgWN16SRzuTwIgW9%2FOh2In5a%2BnYKkOI0xvrv48S5ji8kD8d0tqmKxcknEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLIPcHvOmoyGbDxx6yrcAxgMXSKda0QP%2FCLgUk%2FSbMvDwu7zqwACEgtCkBc4JK6Nbhry1Ui5nKHGiN3mpX8tV2TeNDbbxoXKIUzYLQbzywnYGHzFPKAurCCMvW6XNgEAcayDJpivNlDxzfJCgV4HsMP3ifgLZBMs%2B4p4nP4IeMZubs1fhbdrM6K1HMrsIwZiy4ijvNP8KsIl5OcCJbQZh9d2IaB6JZVUWdkPMijyDqIAAArxw9hmRbh7nrELjhqKTGkPi%2FcU04JlkfsLsmo%2BnRFewnSVesxFF6g1qwxDl40HiTQxU9hXfNRKZPB0s3CPDfTzxpgj%2FjlMD6RKX99pJJ4aanKaGetuDOD%2F0stIewMXrYvSJckQxyh9GmX7BWeZ%2FIndAMPWb%2B6u%2Fc6Jm7GiAlL0oNK7mZQyr%2B4w1TfE6IKH7Oyn9a0rGr21vgJBT%2FgHreokpzyoU7ALOHhYGS7%2FMB1178Vng%2F%2FozXvvmsCkH5SdV7UJO9kK8RcZAswyb11873u1ftZMVcc9g55pkwv1JvWQUCs0QZGRmhyvxD9QZrlD3bnBsoYszn6EZVms4OTXEbiVhAeMaM9TNnMmuTXfMRhvCAeV1jEPBmowMjv7MBX0MhTjea7mkIKhlnSkfzTCEAiaPbE7L9OEdIcZMLKSxr8GOqUBNRjjzooA8ZUlRTpzCvyS4lm7al9qlV4RwuFUj2YGsGFppgx10P4QV0xo89oINJgMxp7sMYXwjBxn8D2rbfkgomifOZultpwsPRktS4MayUq18NkvnkntNBRTCApyyvJtDNDwKAoYdQ1x9%2FRrDgklDtV0GMjIw9PZAyWLzE0kbDhtju%2Fu%2BNG2kd9rF5dbUDDJNMTHjf4lg8DqQ5tbmnCN7km7GZUd&X-Amz-Signature=050d3880a800eda8b8f4e60dc5fa4ef2065c8cf6820c1cca7e4baeb00d0a7416&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
