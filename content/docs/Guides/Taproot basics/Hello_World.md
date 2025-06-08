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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YACLCVD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8U8zs4cT2kzgi%2B%2FfDsUwmbOy8R9nJoQOibhsAc7sfQAiEAm%2B0IR3lRTe4ufLo8TMk%2BrPjOZ7Z3LKlMccLXA3ys8YUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZwpRgkgD8hLSNmXyrcA%2BWkYoQNuIBthn97dtOfuTiaZa5v4zlrmas9FBZvCtPtrr6%2B%2FwIJWc3jslL3wns9YqB%2FApLh0e3U2iBoIPuelS69YnQpnq3dGO5tz%2BdEDlvE%2FzhSQ72lkljzKpKliQMGUeudkjxLpucosuVwfnK6oYbTm15AmAohPNjiswWGrqUCSDgE3gQRjQ1fuFvriqn1xgF9xRSjLDy0jq44%2BfdsJICyAKBjCsa9jJjMHejF4sWu%2BNeIZj%2FbNxzohij%2BsTnsgK7iHQij9%2BTf2gXeMNDfDSGS9rAyPEYwAPz0XIxM2HN%2BGI8MYbBaXQg9yNF1skAUzkN711GH1ixTDR16Fj%2Fs0x1q8Z4zujiR2OB8FwERSFBObUfx4BPFBGrRF3xFIqngTMmetrJONXEAc67UGyof%2BiedsMA2VLNMXqIIyguoopQl%2Bfjska32la%2FBQt3waFymP%2Fm7KehOtdOqJc3MKNoMrH1SfvXiJHV7L4HZk27zW8JAM6Fu3wwbL2XP7m0ZZvAubaxV%2B0SGr8b1J4yvlOpbv6zmqsseNh%2Bg4OIKgvan7FSykxZ5wb0skJFz8VVskujDhy%2FxRe%2FIIHy82bh0ydupGlPdh0o40wG0h1EWQZqSO4SdnQYRWF06lam4nMxvMIjsk8IGOqUBDH7Q%2BMVMP89xV3wj8maJdmQShocAro%2FdRKBI2FFEflGPATxerbfbsQPn9eGf7vzapKrBeLSHJ4b9HDJgoOVbJDhS0%2FsQ2AGv66BIu0quw6DMkA2QLWMUefrbBrg5AQ71UU4ujdKALgorgTfrzhB1hZ3k9DxdzmmjIZTgh7B41rEYFGm8arOzDCKMW%2FXnhimOxKzdcv4peTOkX6cuW1M2XQPRcecM&X-Amz-Signature=a3fdae4fe3dbd8a5a9d0bc36afb8011ecadd9f8404c535d5a20e0a4db5ef8cda&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YACLCVD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8U8zs4cT2kzgi%2B%2FfDsUwmbOy8R9nJoQOibhsAc7sfQAiEAm%2B0IR3lRTe4ufLo8TMk%2BrPjOZ7Z3LKlMccLXA3ys8YUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZwpRgkgD8hLSNmXyrcA%2BWkYoQNuIBthn97dtOfuTiaZa5v4zlrmas9FBZvCtPtrr6%2B%2FwIJWc3jslL3wns9YqB%2FApLh0e3U2iBoIPuelS69YnQpnq3dGO5tz%2BdEDlvE%2FzhSQ72lkljzKpKliQMGUeudkjxLpucosuVwfnK6oYbTm15AmAohPNjiswWGrqUCSDgE3gQRjQ1fuFvriqn1xgF9xRSjLDy0jq44%2BfdsJICyAKBjCsa9jJjMHejF4sWu%2BNeIZj%2FbNxzohij%2BsTnsgK7iHQij9%2BTf2gXeMNDfDSGS9rAyPEYwAPz0XIxM2HN%2BGI8MYbBaXQg9yNF1skAUzkN711GH1ixTDR16Fj%2Fs0x1q8Z4zujiR2OB8FwERSFBObUfx4BPFBGrRF3xFIqngTMmetrJONXEAc67UGyof%2BiedsMA2VLNMXqIIyguoopQl%2Bfjska32la%2FBQt3waFymP%2Fm7KehOtdOqJc3MKNoMrH1SfvXiJHV7L4HZk27zW8JAM6Fu3wwbL2XP7m0ZZvAubaxV%2B0SGr8b1J4yvlOpbv6zmqsseNh%2Bg4OIKgvan7FSykxZ5wb0skJFz8VVskujDhy%2FxRe%2FIIHy82bh0ydupGlPdh0o40wG0h1EWQZqSO4SdnQYRWF06lam4nMxvMIjsk8IGOqUBDH7Q%2BMVMP89xV3wj8maJdmQShocAro%2FdRKBI2FFEflGPATxerbfbsQPn9eGf7vzapKrBeLSHJ4b9HDJgoOVbJDhS0%2FsQ2AGv66BIu0quw6DMkA2QLWMUefrbBrg5AQ71UU4ujdKALgorgTfrzhB1hZ3k9DxdzmmjIZTgh7B41rEYFGm8arOzDCKMW%2FXnhimOxKzdcv4peTOkX6cuW1M2XQPRcecM&X-Amz-Signature=3dcceb39921de59134b2f105e513ffcd051e33d471ccca61476d7a5a26e0348c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
