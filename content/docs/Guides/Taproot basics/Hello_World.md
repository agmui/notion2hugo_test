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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JZDWBP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo3evUiXpsUxjTcwWHw7fHHbDGWrQS8axiHrwRLMV7SwIhANkt%2Fw12cT%2FpH7jjtk8j%2BFXG%2F8%2BlegJePjR%2B4bpifaJnKv8DCGIQABoMNjM3NDIzMTgzODA1IgyGj6QTa5rYM9dQm5wq3ANTXpGzX2r6Par5aZkyzweicjYf58bysd8a2duMR52kZOxblKOzIjn4gKacBOpUlAWbeUQEKAyQvj5Jzz%2Fv3f2rLvaNCzPnn8rxN7x2Y4iPNyjCZJlwDdIarVOUbRZ8gNfyj%2FZR8%2F4CyADB7H7MZCie%2FOxutxt%2BHC1rID3%2FDWm674PsIJLEVfa6%2FWZA9DQDvWHecY%2FqCkaQWmDhwZDsLN3SCCzslnx03NWBnSt7gbYHqxQyCLsYDVurll1PrxxwAaSI9%2BIEB%2FPWlbHAQ18rjYC2m6fWTaqVqKf2wQ6Pz53yrLvj4DCFC%2FR1B7gkwPK2aHA3qdxsFWf388bIFlrPXoV7QCfy5MxssInvOhAgJ0iDCPqEBKPZqF4wG2yDxlSVbPH7tKlvTWyBNPRMoP7w98B0hIMMoGycfLQPoZ8ZRRPV1y978s5bv8DExvOAQgQwiFJksxVSWXC%2BKjpDLHd2HutHEYxTPcNOxnqG1CY6xDiymiCe91CCEFA3rlkYTG4IH3J%2B%2BeYVEbDrOl68S6G50Wp3a0%2Fb4hLZ955WScF0l1wuVt1wZf8F5KrrKH2pzhOY%2BocrLNK8Yylb0AT1wHMXet7K4i7yMsQW%2FRoMEPZHXDM0457G0WOmGFDlOX2IjzCL5NfBBjqkAdLHcgvp0Pqj7mrA90HcV2yRTcCq9jlj8w%2BmuyI3ymb%2BPQN41hNXM1ZS6LvXfcrFAZfYmemLv8D2miRy6VBjK0GrXVnAVkrRXFCyHZgBIaOFXjz7E4V2mNN097o4NRH0n9ZRJmgSNyCz5ZXt94hmdI%2FkiEJz%2BgzbYOHmJBbW0%2F%2FkST3wOn2c213qERrZg3iLyUPfz34zdxwaKJchx0g3SoZaI90W&X-Amz-Signature=db117506b8d527dcd11712e6c0ea8b2525936fbf53195289265ca99b204c2610&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JZDWBP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo3evUiXpsUxjTcwWHw7fHHbDGWrQS8axiHrwRLMV7SwIhANkt%2Fw12cT%2FpH7jjtk8j%2BFXG%2F8%2BlegJePjR%2B4bpifaJnKv8DCGIQABoMNjM3NDIzMTgzODA1IgyGj6QTa5rYM9dQm5wq3ANTXpGzX2r6Par5aZkyzweicjYf58bysd8a2duMR52kZOxblKOzIjn4gKacBOpUlAWbeUQEKAyQvj5Jzz%2Fv3f2rLvaNCzPnn8rxN7x2Y4iPNyjCZJlwDdIarVOUbRZ8gNfyj%2FZR8%2F4CyADB7H7MZCie%2FOxutxt%2BHC1rID3%2FDWm674PsIJLEVfa6%2FWZA9DQDvWHecY%2FqCkaQWmDhwZDsLN3SCCzslnx03NWBnSt7gbYHqxQyCLsYDVurll1PrxxwAaSI9%2BIEB%2FPWlbHAQ18rjYC2m6fWTaqVqKf2wQ6Pz53yrLvj4DCFC%2FR1B7gkwPK2aHA3qdxsFWf388bIFlrPXoV7QCfy5MxssInvOhAgJ0iDCPqEBKPZqF4wG2yDxlSVbPH7tKlvTWyBNPRMoP7w98B0hIMMoGycfLQPoZ8ZRRPV1y978s5bv8DExvOAQgQwiFJksxVSWXC%2BKjpDLHd2HutHEYxTPcNOxnqG1CY6xDiymiCe91CCEFA3rlkYTG4IH3J%2B%2BeYVEbDrOl68S6G50Wp3a0%2Fb4hLZ955WScF0l1wuVt1wZf8F5KrrKH2pzhOY%2BocrLNK8Yylb0AT1wHMXet7K4i7yMsQW%2FRoMEPZHXDM0457G0WOmGFDlOX2IjzCL5NfBBjqkAdLHcgvp0Pqj7mrA90HcV2yRTcCq9jlj8w%2BmuyI3ymb%2BPQN41hNXM1ZS6LvXfcrFAZfYmemLv8D2miRy6VBjK0GrXVnAVkrRXFCyHZgBIaOFXjz7E4V2mNN097o4NRH0n9ZRJmgSNyCz5ZXt94hmdI%2FkiEJz%2BgzbYOHmJBbW0%2F%2FkST3wOn2c213qERrZg3iLyUPfz34zdxwaKJchx0g3SoZaI90W&X-Amz-Signature=580623534a86005b614997686e13b7dcaec7746feb043eb2a7cee90ed4e8476d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
