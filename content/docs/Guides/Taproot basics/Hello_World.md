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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634XHE3HP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6jDwe0BpaxyPMHwZgGhzSByJPdZ%2BR8jk7tdCEqGIVRgIgA9N6F6qmGD8fMhTE57APkmRVeoZzmftaTXCNO3KLm%2BMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBa82OdHHpfzLVZikSrcA0FOT%2B9K0sRnqVHvmS2xZt30%2FBx6wMsUqAr3%2BcLYSOpBJx2ezqo54fbSnO6NaB5%2BHQffSL1cWwAriGqOjTO%2Bt6FB2EYI8vEDq5WYR5BbLPwQaLCT3j5ywZbszM7Qxl4%2Ftfp0VthQv%2FBwePNVO43HILdVx3tpD1uVNW0VCXHMgnjJG1ebf6KqPmiEFNB059GpA5fEws2tsHX7nM2BAwdqcOj9%2FhtD1A1UJMVHlJFIc9zn3p%2B%2BlrgXvnVd01EzkRJFOSbhE6QhPEcqmgahQxq5wuOzMZ10STy1SkvGjpmdLxIPkRhuQqn1PTsWyo%2Fpi5fCPUHUG4blYrhkb9sDiZoMUKQP508RTbyFyL9I9kmKK2Yqs9rBjxE1V53mPvq5M1QaJvv5fOWrsRvV9sGAlqNio%2BbslR8LeY28mX%2Bch5KjNsCC2OPLnvIJsjMnDSKpcAY50JBnMHwMYANeAkg7k%2FKdDDNGLcQtpOoBjfW46qfNylEsMs3W%2Big5hcreJaJGYV3EirirnJONlclS5G3RMAS30Q%2FuUSfTkk5ehGgEAYhOM4BWlO36uSPVzYDrCy1xbAuaM3HFNNogef3CElBwiXboCXU%2FqN2mvKgP7wAdQDC6d0uMdklT%2B1ZRE3MrtDzJMPnstsAGOqUBhXIpixD3V6ReujwY%2F%2FyH3BFdG%2BaCMXXp1PwLlS3vUz0sO3JKsoorMTokeUlp6ucNalH6IYtowTCzbdhTjPgm4yTW0Us%2F7Woygdu%2FlgS7m%2B1hYYyPJvVbfdZfdA%2FKKpGgOP92p7xZO%2BmQqjRw1nDjNnKnsuJWJ%2FQEZy0M2RMDYODCj29YDt73f4q32arcK8mDj6VRR3%2Fyr5bdqjt%2FVhxSGO6tal80&X-Amz-Signature=b8960320fd5cae75586a63fed8c39164c3956eb273109f0312572dfbee396c43&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634XHE3HP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6jDwe0BpaxyPMHwZgGhzSByJPdZ%2BR8jk7tdCEqGIVRgIgA9N6F6qmGD8fMhTE57APkmRVeoZzmftaTXCNO3KLm%2BMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBa82OdHHpfzLVZikSrcA0FOT%2B9K0sRnqVHvmS2xZt30%2FBx6wMsUqAr3%2BcLYSOpBJx2ezqo54fbSnO6NaB5%2BHQffSL1cWwAriGqOjTO%2Bt6FB2EYI8vEDq5WYR5BbLPwQaLCT3j5ywZbszM7Qxl4%2Ftfp0VthQv%2FBwePNVO43HILdVx3tpD1uVNW0VCXHMgnjJG1ebf6KqPmiEFNB059GpA5fEws2tsHX7nM2BAwdqcOj9%2FhtD1A1UJMVHlJFIc9zn3p%2B%2BlrgXvnVd01EzkRJFOSbhE6QhPEcqmgahQxq5wuOzMZ10STy1SkvGjpmdLxIPkRhuQqn1PTsWyo%2Fpi5fCPUHUG4blYrhkb9sDiZoMUKQP508RTbyFyL9I9kmKK2Yqs9rBjxE1V53mPvq5M1QaJvv5fOWrsRvV9sGAlqNio%2BbslR8LeY28mX%2Bch5KjNsCC2OPLnvIJsjMnDSKpcAY50JBnMHwMYANeAkg7k%2FKdDDNGLcQtpOoBjfW46qfNylEsMs3W%2Big5hcreJaJGYV3EirirnJONlclS5G3RMAS30Q%2FuUSfTkk5ehGgEAYhOM4BWlO36uSPVzYDrCy1xbAuaM3HFNNogef3CElBwiXboCXU%2FqN2mvKgP7wAdQDC6d0uMdklT%2B1ZRE3MrtDzJMPnstsAGOqUBhXIpixD3V6ReujwY%2F%2FyH3BFdG%2BaCMXXp1PwLlS3vUz0sO3JKsoorMTokeUlp6ucNalH6IYtowTCzbdhTjPgm4yTW0Us%2F7Woygdu%2FlgS7m%2B1hYYyPJvVbfdZfdA%2FKKpGgOP92p7xZO%2BmQqjRw1nDjNnKnsuJWJ%2FQEZy0M2RMDYODCj29YDt73f4q32arcK8mDj6VRR3%2Fyr5bdqjt%2FVhxSGO6tal80&X-Amz-Signature=102cbc18b7e1d7cfb2e45f33e1e24010567068d3dc3229afa4dbc013cd74d658&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
