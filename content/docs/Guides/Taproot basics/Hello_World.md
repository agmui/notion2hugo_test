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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNN2QOH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BeWEb4Z587VserSv%2Bxf79ClGNVIKe35gjTxjaJ4TeFgIhALbb8aOIP49YQVSlriCbk9sHVgU%2FnE6DvjIWW1gLjUuZKv8DCEoQABoMNjM3NDIzMTgzODA1IgwPsQYC%2FRc2jiNE5owq3AMyVFF5lYOthtwbrt5wb11wb8XHc6lZyyMHo%2Bp%2FMo5TPTmhZrh%2Bmwj%2Bay39RW4Yq0atId5Fd%2BXz%2BxKXPtgS%2B%2FeSJBI1dXOx2nGS%2FLSm3ai09cO0le%2FgQau139xbmhxonOES1E7L%2FVjePy8xuk51nFXXQsoHCT6XM3jEB5MM9ESKP5hRpF236TuRmPYBYHpLU0sSDn%2Bv3ovy6waPnRILkOwldiCHZEKw85So0UNAac%2BDnWA0qoa2bsURPiUEPtmFBuM4NnwIaLnfXhWPjPBwRlW1y8Ma7LTuV1%2BlYwZHo%2BJ8hAkaiqCNHd4nPaoOtlonylzZNu1WLsRKREQgum9G%2FdtiKbPKxxZYmtake3nlZ8bbzGOtjjjHoF6XYEAnUFLFqCQaCZLSBkQjNdcG%2BwpPJvkPK1wfgGq7aX3dhJ1mXqBRWw52TXy2rYOlV9CS58SxxXc%2F7HazzozzVjIa3CDvTHxuwfYZyhhQmI34M28bHbyU32r7emQp4qQ0zwfd4dP%2BRyUEn8mYojg1kX4TMCfHuY6kujtnK%2Fk4CiPLvUQVd0jdo4p76d9tIx1RaQal4otGOOENSzEhtAgj1tblDsmkVYbu0ZiUHej9lz73Y5JZkm6HivOFrzc%2Fpd6B8PAE%2FDD5gOnABjqkARnZya3nqLCWh%2F9X%2FS6ldC9uicj61CTwz0yAzg4oUS%2F4%2Fo1a5WThpiAIsUEhYhU5ul5b6y%2FvKGg2AkUAE2Ic1xmN9CYw%2F5wJ9Ktw%2But8X4eulTrl9jqMY%2FSeTlJGBARrSrYlbyMD8rbQbB1Prxrd5RX6t5Yz3CRQK0ek4EfHt0Xd5yhXIvewi114rVmM2MIUUB%2Bmp7D2dEwZR6m%2BqoJmOrrIotFV&X-Amz-Signature=f5b9220d52f6b24de0378dac67f8433f29a9e818ee403b6959ac61018c5c4731&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNNN2QOH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BeWEb4Z587VserSv%2Bxf79ClGNVIKe35gjTxjaJ4TeFgIhALbb8aOIP49YQVSlriCbk9sHVgU%2FnE6DvjIWW1gLjUuZKv8DCEoQABoMNjM3NDIzMTgzODA1IgwPsQYC%2FRc2jiNE5owq3AMyVFF5lYOthtwbrt5wb11wb8XHc6lZyyMHo%2Bp%2FMo5TPTmhZrh%2Bmwj%2Bay39RW4Yq0atId5Fd%2BXz%2BxKXPtgS%2B%2FeSJBI1dXOx2nGS%2FLSm3ai09cO0le%2FgQau139xbmhxonOES1E7L%2FVjePy8xuk51nFXXQsoHCT6XM3jEB5MM9ESKP5hRpF236TuRmPYBYHpLU0sSDn%2Bv3ovy6waPnRILkOwldiCHZEKw85So0UNAac%2BDnWA0qoa2bsURPiUEPtmFBuM4NnwIaLnfXhWPjPBwRlW1y8Ma7LTuV1%2BlYwZHo%2BJ8hAkaiqCNHd4nPaoOtlonylzZNu1WLsRKREQgum9G%2FdtiKbPKxxZYmtake3nlZ8bbzGOtjjjHoF6XYEAnUFLFqCQaCZLSBkQjNdcG%2BwpPJvkPK1wfgGq7aX3dhJ1mXqBRWw52TXy2rYOlV9CS58SxxXc%2F7HazzozzVjIa3CDvTHxuwfYZyhhQmI34M28bHbyU32r7emQp4qQ0zwfd4dP%2BRyUEn8mYojg1kX4TMCfHuY6kujtnK%2Fk4CiPLvUQVd0jdo4p76d9tIx1RaQal4otGOOENSzEhtAgj1tblDsmkVYbu0ZiUHej9lz73Y5JZkm6HivOFrzc%2Fpd6B8PAE%2FDD5gOnABjqkARnZya3nqLCWh%2F9X%2FS6ldC9uicj61CTwz0yAzg4oUS%2F4%2Fo1a5WThpiAIsUEhYhU5ul5b6y%2FvKGg2AkUAE2Ic1xmN9CYw%2F5wJ9Ktw%2But8X4eulTrl9jqMY%2FSeTlJGBARrSrYlbyMD8rbQbB1Prxrd5RX6t5Yz3CRQK0ek4EfHt0Xd5yhXIvewi114rVmM2MIUUB%2Bmp7D2dEwZR6m%2BqoJmOrrIotFV&X-Amz-Signature=42c8dd1775de624a3a464a551680f3ae65a5a5a9c270974a2e7210c504079961&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
