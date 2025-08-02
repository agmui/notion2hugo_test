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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBZMHCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK6J%2FeA5d1514cVzoirJOEYcXPTCPMM5RxBYpZOsmRaQIgGeN1qNUqc63ZJUjdhaSWQoGIE2KHARJDIJn%2FCKc6RNQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOzBK0mHRjqvsezCSrcAyD75m9wO1RtHgxsrxk47X3HuAPEkZmtyT%2BNQFiqhSZaj1WEkbBvsT1D9lHtjt15AUyOdBkgFjRdob7DEQ%2FVDlsOGjRxLHZxCMfo9Sic2%2FMsZ3A0V2thcPDyvD18yAuLVIeG0uYNKMzF4qB5TiUndfYwQoAquI1rh1J51bfCocpZfL0BoH0FDaJrcpIbef6KvgMXTvgqmW6xWa6NLgQbC90uH4DQTPaFHvNewO8P0jtosoZG78srNmSHlSZAbbDJtL3T9VewtCvyMkTHOw6j%2FfiydH0rDvl98NVt%2Ft1ARAz37neuRimTiROcUVKKfCzxltQXYtMxIpmHc3Tmlu1Hn4%2FTKkuIqNDiKul4dN7Q6ODiUzPdcLEG3hr55BUBUNZk%2B6E6Pn3iBV06ShXEDKzI9hrXZQGUccZttiubnwpGbeAHK0BHoM0HWLotVZZ0EGVilA23gAQCIcfjpyQSahzHPx14DPNUyWKP14SNbQavgg9kftQNv6KJn92XqjMnrohxRomKeADLeNHnyBAxmeEKeiSfYi4o9XUls1c5DimAk28OFnlyL4ypFpAZpiQYyX9nidQIDhQoiB%2BDzI2Jxpl5bOxYKqKxVFFK4RungVBE5%2FjpUvvxPli47C4ji6PwMNuctsQGOqUBb89aOnDblbL75V2WwQ4MUY01tw0e1FxwMKayfounnPXlKjB7gCgaylfnn%2ByWcErwk74%2Fg8iqm3zIWglG6CnhOn6%2B12ANoyRc%2FzzYWCIif5U78z9AbxgPNBxemvNkeGeTnSGX9O7801xP5BODannI8cD53ZsKWZURXXa0b0EJ%2Fa%2BlI%2F1g5VjTwmq6TAKe%2FKOluXZJKXjF6PD8nVAprQD6naxmZd%2B%2F&X-Amz-Signature=4b213b4a35d2a194fdab71c408b661df2cae30f009f5a7800aa28c5170bf0185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBZMHCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK6J%2FeA5d1514cVzoirJOEYcXPTCPMM5RxBYpZOsmRaQIgGeN1qNUqc63ZJUjdhaSWQoGIE2KHARJDIJn%2FCKc6RNQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOzBK0mHRjqvsezCSrcAyD75m9wO1RtHgxsrxk47X3HuAPEkZmtyT%2BNQFiqhSZaj1WEkbBvsT1D9lHtjt15AUyOdBkgFjRdob7DEQ%2FVDlsOGjRxLHZxCMfo9Sic2%2FMsZ3A0V2thcPDyvD18yAuLVIeG0uYNKMzF4qB5TiUndfYwQoAquI1rh1J51bfCocpZfL0BoH0FDaJrcpIbef6KvgMXTvgqmW6xWa6NLgQbC90uH4DQTPaFHvNewO8P0jtosoZG78srNmSHlSZAbbDJtL3T9VewtCvyMkTHOw6j%2FfiydH0rDvl98NVt%2Ft1ARAz37neuRimTiROcUVKKfCzxltQXYtMxIpmHc3Tmlu1Hn4%2FTKkuIqNDiKul4dN7Q6ODiUzPdcLEG3hr55BUBUNZk%2B6E6Pn3iBV06ShXEDKzI9hrXZQGUccZttiubnwpGbeAHK0BHoM0HWLotVZZ0EGVilA23gAQCIcfjpyQSahzHPx14DPNUyWKP14SNbQavgg9kftQNv6KJn92XqjMnrohxRomKeADLeNHnyBAxmeEKeiSfYi4o9XUls1c5DimAk28OFnlyL4ypFpAZpiQYyX9nidQIDhQoiB%2BDzI2Jxpl5bOxYKqKxVFFK4RungVBE5%2FjpUvvxPli47C4ji6PwMNuctsQGOqUBb89aOnDblbL75V2WwQ4MUY01tw0e1FxwMKayfounnPXlKjB7gCgaylfnn%2ByWcErwk74%2Fg8iqm3zIWglG6CnhOn6%2B12ANoyRc%2FzzYWCIif5U78z9AbxgPNBxemvNkeGeTnSGX9O7801xP5BODannI8cD53ZsKWZURXXa0b0EJ%2Fa%2BlI%2F1g5VjTwmq6TAKe%2FKOluXZJKXjF6PD8nVAprQD6naxmZd%2B%2F&X-Amz-Signature=6f75664db4f11127617c41a29d09d813a1af4f24ab3efc1734129522a9945e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
