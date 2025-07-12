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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXWWF55%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsxGrg1nai14KP52xy78BLTRrZUMOje3KMHnVEd15bEAiEA1dnBHiUN2sYz1o1EWC2XcbNRDYcWFiqNg2TAfZ48kGAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDosKkUju2lkUvqtSrcA1hpvgogfUtvG7eLkOB39uYi37ENYKUFsRvVUCh%2BMm3AGPeb68QzLhhEBvhjAxnCZk4tA7SEfQLjbKxHMnfNWclnn5gKQmTFaVbqFR2%2BO27yDzifKQ2HPuw270nssb9CvMDPUVI5plyOo4PCisEBxPrOiw%2F7NbOqJxjfPwYwQDpe7lxlt7zpCzuuRGHSukWUw%2FMvjP%2BACsJyNsVe5pvQuJvaIcJrpKKKS5qKDMc1u5GNLS4iCpSgEUQGqvSF5O5jfN0QaVEXKyDw5qWW%2BMLnaGCbPPM63AGGcQgzAc6A%2BLxf%2BG07flDfGUoA8aI3fJnfMf43uMivVUVpIkRpnixa5lmCykATLWMjQTyx2PCjd2Qk7%2Ft70TvRub637XmOWrHqiwzfHwBMQx6ctuM5iof8ODFWlTQvwMxNjVE4lkjQxvf%2FD8Ic3I7QDr3qWvhn5qMudWO%2FbFLD0%2BE3K8irY636hqne%2BU65gEllZOSiNV75zcUh%2FxOvOaJREi5qszIi38A1SXOawLbDYe4eKlg%2FGM522G4Mm66zhs4ITO9VXUukpUWlxoihz8srxYGszl0G3woWDkMyU86s2JAa%2FagyOkM2Jyr4VOO4AU2FGUhe3GJUcKUtODan1WqyTmQBFpOhMICiyMMGOqUBUQ3uBw%2FCmzgkgjSbnV3Ll8NfoduHIHjjAVdIA7H7FDPbjuCr%2BbpBwdO5Lkcvys%2BfYDuSai5VT64bofFmwbiQX5Sqdtu1Zf76kDSFyTb0ZJfZUN9usZ8ul2lyKIvkb06JK5%2Bwcx28WoSpy751LVj%2BU3NBolEco%2FK2U9SQGQ5WQjXKVfZyvgYN0MeGmEh420x36%2BYG5IeXiPkkUDOYKqnYhTXImlda&X-Amz-Signature=d7b59f488fd3958f312b014823a2d66916e3a9fb6d5c0660e32af296ea45ed6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXWWF55%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsxGrg1nai14KP52xy78BLTRrZUMOje3KMHnVEd15bEAiEA1dnBHiUN2sYz1o1EWC2XcbNRDYcWFiqNg2TAfZ48kGAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDosKkUju2lkUvqtSrcA1hpvgogfUtvG7eLkOB39uYi37ENYKUFsRvVUCh%2BMm3AGPeb68QzLhhEBvhjAxnCZk4tA7SEfQLjbKxHMnfNWclnn5gKQmTFaVbqFR2%2BO27yDzifKQ2HPuw270nssb9CvMDPUVI5plyOo4PCisEBxPrOiw%2F7NbOqJxjfPwYwQDpe7lxlt7zpCzuuRGHSukWUw%2FMvjP%2BACsJyNsVe5pvQuJvaIcJrpKKKS5qKDMc1u5GNLS4iCpSgEUQGqvSF5O5jfN0QaVEXKyDw5qWW%2BMLnaGCbPPM63AGGcQgzAc6A%2BLxf%2BG07flDfGUoA8aI3fJnfMf43uMivVUVpIkRpnixa5lmCykATLWMjQTyx2PCjd2Qk7%2Ft70TvRub637XmOWrHqiwzfHwBMQx6ctuM5iof8ODFWlTQvwMxNjVE4lkjQxvf%2FD8Ic3I7QDr3qWvhn5qMudWO%2FbFLD0%2BE3K8irY636hqne%2BU65gEllZOSiNV75zcUh%2FxOvOaJREi5qszIi38A1SXOawLbDYe4eKlg%2FGM522G4Mm66zhs4ITO9VXUukpUWlxoihz8srxYGszl0G3woWDkMyU86s2JAa%2FagyOkM2Jyr4VOO4AU2FGUhe3GJUcKUtODan1WqyTmQBFpOhMICiyMMGOqUBUQ3uBw%2FCmzgkgjSbnV3Ll8NfoduHIHjjAVdIA7H7FDPbjuCr%2BbpBwdO5Lkcvys%2BfYDuSai5VT64bofFmwbiQX5Sqdtu1Zf76kDSFyTb0ZJfZUN9usZ8ul2lyKIvkb06JK5%2Bwcx28WoSpy751LVj%2BU3NBolEco%2FK2U9SQGQ5WQjXKVfZyvgYN0MeGmEh420x36%2BYG5IeXiPkkUDOYKqnYhTXImlda&X-Amz-Signature=5ec95571869464b35fa25d83155419d9bdbf94d1da0567f8395bb9c03fd6bb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
