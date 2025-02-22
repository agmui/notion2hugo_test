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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXQDP7X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAcL000Ed%2FWweOrdeQRcdfPiCOZij4QJtu41%2B41j6X%2FAIhAPZJfyKVYpX891lynwrqeUUz76OTOeIBmrc2cyTy7DyyKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkxU5F7lK5ANRhdpsq3ANYojA2c6rVwmaEsd13gMGRdoIn2KYEipsEgYvLHbZ%2BIpmrLJ8ESK7ryELg2Oa9mMhfo5ufKr%2FpMdW15AyKDmsRMnpaBqXebkTHY4Lva0y1utGB2iKZKeuglLu9I5H%2FDI0BApVuUBInIDzdZA4SGhLkXrbKfbp6NuhMB7gteNAriqWLEfYI00RmfhXg4lCE6hb5Pj6I97%2BZ1%2FDzrbsrq8anWWUHvAPwqxblRGwsZDOv2NnilSjZ4AtyEW4KFBW9u52%2B4UMGgKvxqlMf6eTSzChv4W23GVIVCuQoG%2FelTvUjWC%2FJTPFz%2FmP9nmF096Pk3Yn7BfUnG5dUrXqwj7vCAI%2FIcdjTiexiTDQHLedFJ%2BfAwHqbqhP4Wg6YqxUKxAplgwCDRrgYxXrD0ND6H25kiabZH9Xr8zigBaQVCc9tJTWu4tMp4akDdKPY%2BXXSfF1C2n4oTVJrq3POw4qNPyz9XgVgEXGyUzEfkyv8FOmCSODhzCbHBZ7otwld9%2FVVEMqPjHzRTbfjEAbqSzkbRUyRV6Dewkb2gcDSdv4HLLeajZ%2BY%2B%2B%2FSxrP69bmDpZfjDjqkkttKm8%2BOYcXDGF9hREAjNC1OLgxdfAq5FHJguSv6BHDgatEpOyVWmUJcFEYsyzCc7ua9BjqkAULgOzLz0EKrsjgD9s15PXPcizmYxcNZCoJNc4MuXodiNxKI8TMeUc8MBnYi8Y0xkd49MZIXFmW9Dc9OrNEEfJFbzYzBjbIOe%2B1qPJTwpoRt5jchp2cTBVIhS7MumaGDlRiWngFOfS2QdkxLIdsJ5rClRK8XlTo4lKzJAqiZuW57fhOcvSHnyzin3l3M1d%2BXBfLNNd8VlfXmfDhURodg1yovApjh&X-Amz-Signature=e6f981ecb05484d9af76abb68cff40234e218591b658938542e83fb3a1e5a82c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXQDP7X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAcL000Ed%2FWweOrdeQRcdfPiCOZij4QJtu41%2B41j6X%2FAIhAPZJfyKVYpX891lynwrqeUUz76OTOeIBmrc2cyTy7DyyKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkxU5F7lK5ANRhdpsq3ANYojA2c6rVwmaEsd13gMGRdoIn2KYEipsEgYvLHbZ%2BIpmrLJ8ESK7ryELg2Oa9mMhfo5ufKr%2FpMdW15AyKDmsRMnpaBqXebkTHY4Lva0y1utGB2iKZKeuglLu9I5H%2FDI0BApVuUBInIDzdZA4SGhLkXrbKfbp6NuhMB7gteNAriqWLEfYI00RmfhXg4lCE6hb5Pj6I97%2BZ1%2FDzrbsrq8anWWUHvAPwqxblRGwsZDOv2NnilSjZ4AtyEW4KFBW9u52%2B4UMGgKvxqlMf6eTSzChv4W23GVIVCuQoG%2FelTvUjWC%2FJTPFz%2FmP9nmF096Pk3Yn7BfUnG5dUrXqwj7vCAI%2FIcdjTiexiTDQHLedFJ%2BfAwHqbqhP4Wg6YqxUKxAplgwCDRrgYxXrD0ND6H25kiabZH9Xr8zigBaQVCc9tJTWu4tMp4akDdKPY%2BXXSfF1C2n4oTVJrq3POw4qNPyz9XgVgEXGyUzEfkyv8FOmCSODhzCbHBZ7otwld9%2FVVEMqPjHzRTbfjEAbqSzkbRUyRV6Dewkb2gcDSdv4HLLeajZ%2BY%2B%2B%2FSxrP69bmDpZfjDjqkkttKm8%2BOYcXDGF9hREAjNC1OLgxdfAq5FHJguSv6BHDgatEpOyVWmUJcFEYsyzCc7ua9BjqkAULgOzLz0EKrsjgD9s15PXPcizmYxcNZCoJNc4MuXodiNxKI8TMeUc8MBnYi8Y0xkd49MZIXFmW9Dc9OrNEEfJFbzYzBjbIOe%2B1qPJTwpoRt5jchp2cTBVIhS7MumaGDlRiWngFOfS2QdkxLIdsJ5rClRK8XlTo4lKzJAqiZuW57fhOcvSHnyzin3l3M1d%2BXBfLNNd8VlfXmfDhURodg1yovApjh&X-Amz-Signature=79f40fe8c1ddf0182531d71c6215da572b3623fbf13099ca99ea499c04da0a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
