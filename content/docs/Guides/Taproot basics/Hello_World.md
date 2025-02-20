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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCPST7L%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYn8erggvyg2bIKybvEqkPKLgYEeNant%2BlGwi1gVYRBwIgTxJv1vH6q1TFo5G68Gx1Eeuk5iOrSdSf%2ByENsqYDYycqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYuAHaWOmDOkByjDircA30OfqiqDxMT4mFVIKDaPdE1SkclTRBl%2FNN1vXx9OXpkaY630CJl5Kd5YUFLnciuHbecDb1Yi8x1HMRkIaa1bGPbf6FjjlO2jQy9Wxn7uVWrJC0KnnbgXMJTmsdMHrCsthJIjH5cexgrBK7Acqxh8FIdwMG17pM6dZXhMJxbZrnhJ%2FBIwBJ%2FljUw7RdPaoo6UnT4NNjyQ1dlPK8cyBXJyOifsEjopDx6irYJjodqTZ2we8pJtpOIneI04tAhJlfpZEZ%2FWbJMUHDj7DezoyF9qgmY6wKMoflNCEPwdoJKfvO3PkqE%2BXqmtzif2PmGAPcvMmFhpqft0vQpnUUNNpu5%2BBOKCDtHACyw%2FEQYBHNeF7jryOgKZgAe0E5hDu%2FAKfIsTMSXvoG5SInPgvY%2BTuJGBXqym4PtgdulVf%2FMgCDX3i02BHfkSspzsayx1Mv%2BcqzjkahvGD%2BYjy11yYNyUienfGhdYJr5MD5UhGfLgC%2BAwj3mz%2BVQg%2Bd6gJgSfCSJhSWBZ2MDpSysbpjpVBy6FWKecO1%2FFh2FnVNaYis1%2B91S7QpxLnTnId9XgiRwaehMiidwfD%2BgLZB0bvfTmlDum1QdaouZcQpijq7KTvZU2L%2BIAlkW7yrnEAO5U1UgI0TpMKeQ3L0GOqUBli0ohu3WOXTFfimjEJtrIwmTx5V3AgtPPASrMjMJoqoNpYWcrtM9YZsfkKCZe171OD6ZWJ02BbJWkx76I2tTKVTU9CpOvmsG074CXw5vXIVHnu0wRUSHn3Bz7KZqzUjmcmNnp292lioXyPzMoDoVG3rOIbAN9KhV5RITAJLFhbzzSJxhLnkaZEMVDbC6LJJKcsV%2FMAuQM4Rad7KrpkatSAnegSMt&X-Amz-Signature=f546ce4a9ec3949baca32391d2bc866610c81d43ab28d5cd425829ca7fa823f8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCPST7L%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYn8erggvyg2bIKybvEqkPKLgYEeNant%2BlGwi1gVYRBwIgTxJv1vH6q1TFo5G68Gx1Eeuk5iOrSdSf%2ByENsqYDYycqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYuAHaWOmDOkByjDircA30OfqiqDxMT4mFVIKDaPdE1SkclTRBl%2FNN1vXx9OXpkaY630CJl5Kd5YUFLnciuHbecDb1Yi8x1HMRkIaa1bGPbf6FjjlO2jQy9Wxn7uVWrJC0KnnbgXMJTmsdMHrCsthJIjH5cexgrBK7Acqxh8FIdwMG17pM6dZXhMJxbZrnhJ%2FBIwBJ%2FljUw7RdPaoo6UnT4NNjyQ1dlPK8cyBXJyOifsEjopDx6irYJjodqTZ2we8pJtpOIneI04tAhJlfpZEZ%2FWbJMUHDj7DezoyF9qgmY6wKMoflNCEPwdoJKfvO3PkqE%2BXqmtzif2PmGAPcvMmFhpqft0vQpnUUNNpu5%2BBOKCDtHACyw%2FEQYBHNeF7jryOgKZgAe0E5hDu%2FAKfIsTMSXvoG5SInPgvY%2BTuJGBXqym4PtgdulVf%2FMgCDX3i02BHfkSspzsayx1Mv%2BcqzjkahvGD%2BYjy11yYNyUienfGhdYJr5MD5UhGfLgC%2BAwj3mz%2BVQg%2Bd6gJgSfCSJhSWBZ2MDpSysbpjpVBy6FWKecO1%2FFh2FnVNaYis1%2B91S7QpxLnTnId9XgiRwaehMiidwfD%2BgLZB0bvfTmlDum1QdaouZcQpijq7KTvZU2L%2BIAlkW7yrnEAO5U1UgI0TpMKeQ3L0GOqUBli0ohu3WOXTFfimjEJtrIwmTx5V3AgtPPASrMjMJoqoNpYWcrtM9YZsfkKCZe171OD6ZWJ02BbJWkx76I2tTKVTU9CpOvmsG074CXw5vXIVHnu0wRUSHn3Bz7KZqzUjmcmNnp292lioXyPzMoDoVG3rOIbAN9KhV5RITAJLFhbzzSJxhLnkaZEMVDbC6LJJKcsV%2FMAuQM4Rad7KrpkatSAnegSMt&X-Amz-Signature=5e4e0ec2ef1e67e412e20d4e455db8bf9d9f789d7cfc46d0f6b8800149676703&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
