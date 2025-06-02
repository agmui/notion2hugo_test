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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7TRKMA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDttVnZ%2BuytBSCTRp%2FmCOcfD92Wvny%2FzZDZ6rpYwRCALQIhANaGO%2BrKst30TWlwbMp9N8i73KF6Js7mCbq6PnWYC3llKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXKV7wM%2F2TiNV81mcq3AOF%2BUCbDU5Q91ZMsQOZzWGxXU3%2FilnzxIV1GFzzs%2BoB6ctLVCUN5MG%2Bt3BQEh07VoBAbwv9sHbTQXqIn3AcC8aWbAQC1FAfGwtz9OK2MueypDOF555C86GefCYGvp8pqu1SZXG7PxqDelrk95dx1X1prPpCjFO6wj0h9U9OGGc4%2BlYS5gAyfijMvMR%2FDbMJ7Ot7SZlb06cjwtutq84QgAb1oG3ZPgxhiBKpmdoYCl9LL%2B8G2BtUmCvhLha3u1wyH4T7wBs%2FKGkg56ne%2Fu0UgKEeC%2Fg1ih2qM2Kisx4Wq4G1UMbNIVY3emRGd%2FAhYt43KPBOhKS3Gs%2F0Ibb1bXORrpZ9yxOAjMA5DqcQ2vWvuBh9PafLHNBa7rnjzBL3ufBpsUCb43kj9L5Qcp3Jft5utXI%2BCnTxQKepTvsCtPrKpUS8NKav2C7f%2FxS8ZEhrICDiTlc%2Bk06oUylb4zQBGoJexAhkTUVqmRPT4FgcsY8k2RsEMWYp0HSlnEuvSiWpzUxZ3256bMe6R85OT9k68qwVb2XcoNZ6hUmhVDB%2Bh6tMv7XEyvxU%2FG3IU4OvwdZQRpT%2FEc4lQE4hWtltpZzRNnNbw%2F9b20hcTzmYyju0IHpkY7SNT%2FN2Z%2BHeqhyoY%2BOk1TDRr%2FTBBjqkATSJSYAQpwVjqzOu7uznGIkxpNk5gzCJ7nWyDTq5%2FvELaH3vTjZNeDM7OURJmOnyttJC68SiY%2FBIBtjiDnWirVqQmj5TcGXhxxaocHQ0q7XJhH6lc2UkZ6ozjZSOdt%2FnK9VySk85g7hLYg1vVz8X57Sa%2FMVtV%2FqUcH7%2FxIioOAd0zg5I9v%2Be3oM3jLxJ8NxHz1gWcsmwnlBCDm4tkDTgHWv4eAYW&X-Amz-Signature=4ae677ab148abfdb98de560b0c07b198f1207395d47a11a32187c3c28c4636f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7TRKMA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDttVnZ%2BuytBSCTRp%2FmCOcfD92Wvny%2FzZDZ6rpYwRCALQIhANaGO%2BrKst30TWlwbMp9N8i73KF6Js7mCbq6PnWYC3llKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXKV7wM%2F2TiNV81mcq3AOF%2BUCbDU5Q91ZMsQOZzWGxXU3%2FilnzxIV1GFzzs%2BoB6ctLVCUN5MG%2Bt3BQEh07VoBAbwv9sHbTQXqIn3AcC8aWbAQC1FAfGwtz9OK2MueypDOF555C86GefCYGvp8pqu1SZXG7PxqDelrk95dx1X1prPpCjFO6wj0h9U9OGGc4%2BlYS5gAyfijMvMR%2FDbMJ7Ot7SZlb06cjwtutq84QgAb1oG3ZPgxhiBKpmdoYCl9LL%2B8G2BtUmCvhLha3u1wyH4T7wBs%2FKGkg56ne%2Fu0UgKEeC%2Fg1ih2qM2Kisx4Wq4G1UMbNIVY3emRGd%2FAhYt43KPBOhKS3Gs%2F0Ibb1bXORrpZ9yxOAjMA5DqcQ2vWvuBh9PafLHNBa7rnjzBL3ufBpsUCb43kj9L5Qcp3Jft5utXI%2BCnTxQKepTvsCtPrKpUS8NKav2C7f%2FxS8ZEhrICDiTlc%2Bk06oUylb4zQBGoJexAhkTUVqmRPT4FgcsY8k2RsEMWYp0HSlnEuvSiWpzUxZ3256bMe6R85OT9k68qwVb2XcoNZ6hUmhVDB%2Bh6tMv7XEyvxU%2FG3IU4OvwdZQRpT%2FEc4lQE4hWtltpZzRNnNbw%2F9b20hcTzmYyju0IHpkY7SNT%2FN2Z%2BHeqhyoY%2BOk1TDRr%2FTBBjqkATSJSYAQpwVjqzOu7uznGIkxpNk5gzCJ7nWyDTq5%2FvELaH3vTjZNeDM7OURJmOnyttJC68SiY%2FBIBtjiDnWirVqQmj5TcGXhxxaocHQ0q7XJhH6lc2UkZ6ozjZSOdt%2FnK9VySk85g7hLYg1vVz8X57Sa%2FMVtV%2FqUcH7%2FxIioOAd0zg5I9v%2Be3oM3jLxJ8NxHz1gWcsmwnlBCDm4tkDTgHWv4eAYW&X-Amz-Signature=50d7408a7a0926b6afb433a3d3a4530832d24824f90f261e98ceee5536fd45a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
