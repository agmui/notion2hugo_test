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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYOQWJ42%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDK0fnp%2Fs32RI3N3gkm2886kcA0BFK0HJ7DhwR6iBvNrgIgdlr8Q6bakgFeGPhQ%2BSae5vNy94abv1WCXsi0zey0w0Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEFcO%2BHSQ53Hy4pCyCrcA2E0iYZ2alkxk0TjKccUe%2FThNpQPEwcae4mOQ6Cl%2FjaLU18jm2a9td6%2BpyxjsBD%2F0kWr0IO%2FfPzIKPT7CuQg0LjfWB7VaoTCUGj%2F7vXZhHEtgwwK%2Floy7DJS82NQhXi9rwNZuzU76RH9b3sdTc9tWdxG0RYfktlh1Gfh4TWCkLx26prZei1%2Bn54ZfF7T1M5AJZt0NSFoiIy5T%2BewvAbKIvs5%2FKeL%2FgEnJjVetpONYlKX6m2hX678sdOvFIZjcLKmdFraf77RZLWNn%2BUSLMWyco5BN2aW676PViGE3JU3jhwsaZ3ZBjx1MBHIkxJkPlfk30zlv88HfVsX5V7NcnqIF%2BNh9Gpd5ZT6peBHq5zPuQuIAVK2Cf3nn5Rn3go4I8NYzsAv9knveiIqjGBm93FKfD2ofx39diHHHimtz9nkUn98ZJsyk3FDWmirJ0cpdrP4W%2FeNhWdCiSwac7NdkYWemHH1eCiryi6VHVILsBYS3qhfBfWOqpJtpOIBya7z%2BIYWOh1uTjzhuIEmc1BiuGV1CrRX9QdcpTw7cnkG6y5e9l0YCCtRT8wrlaM0qFzRPiR1j4yAgi13FiobNhYtSSc2K0UBOsHESnwWeg3SDZIPXK9xiRY6oIEApz9QymdyMJ7Yh8IGOqUB6Zv0TAyRs979t7O7SRwQ6ovBXm4hPqW3Kia96aBIArT76y3%2FO37d%2BID%2Bzj6G9bNmMDQfj%2Bc6UDKzxWKqDl9ZLCHZ1mqWMyBmmVsMnwsl5rPigLZeAWAcy5SsRMRIKXPCFPdRfUmqOjnwlHvTmbwbEqz%2Fo71unFxoAujFxKsa6lfkA5waAPP3eE5d1RasoiunRfOSkUsh0WKm2Wakm7OmZotQ2lmK&X-Amz-Signature=8964efcc73bcc7ad64ccff1527c28a86ced66af33a646e2780817ef6e773f5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYOQWJ42%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDK0fnp%2Fs32RI3N3gkm2886kcA0BFK0HJ7DhwR6iBvNrgIgdlr8Q6bakgFeGPhQ%2BSae5vNy94abv1WCXsi0zey0w0Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEFcO%2BHSQ53Hy4pCyCrcA2E0iYZ2alkxk0TjKccUe%2FThNpQPEwcae4mOQ6Cl%2FjaLU18jm2a9td6%2BpyxjsBD%2F0kWr0IO%2FfPzIKPT7CuQg0LjfWB7VaoTCUGj%2F7vXZhHEtgwwK%2Floy7DJS82NQhXi9rwNZuzU76RH9b3sdTc9tWdxG0RYfktlh1Gfh4TWCkLx26prZei1%2Bn54ZfF7T1M5AJZt0NSFoiIy5T%2BewvAbKIvs5%2FKeL%2FgEnJjVetpONYlKX6m2hX678sdOvFIZjcLKmdFraf77RZLWNn%2BUSLMWyco5BN2aW676PViGE3JU3jhwsaZ3ZBjx1MBHIkxJkPlfk30zlv88HfVsX5V7NcnqIF%2BNh9Gpd5ZT6peBHq5zPuQuIAVK2Cf3nn5Rn3go4I8NYzsAv9knveiIqjGBm93FKfD2ofx39diHHHimtz9nkUn98ZJsyk3FDWmirJ0cpdrP4W%2FeNhWdCiSwac7NdkYWemHH1eCiryi6VHVILsBYS3qhfBfWOqpJtpOIBya7z%2BIYWOh1uTjzhuIEmc1BiuGV1CrRX9QdcpTw7cnkG6y5e9l0YCCtRT8wrlaM0qFzRPiR1j4yAgi13FiobNhYtSSc2K0UBOsHESnwWeg3SDZIPXK9xiRY6oIEApz9QymdyMJ7Yh8IGOqUB6Zv0TAyRs979t7O7SRwQ6ovBXm4hPqW3Kia96aBIArT76y3%2FO37d%2BID%2Bzj6G9bNmMDQfj%2Bc6UDKzxWKqDl9ZLCHZ1mqWMyBmmVsMnwsl5rPigLZeAWAcy5SsRMRIKXPCFPdRfUmqOjnwlHvTmbwbEqz%2Fo71unFxoAujFxKsa6lfkA5waAPP3eE5d1RasoiunRfOSkUsh0WKm2Wakm7OmZotQ2lmK&X-Amz-Signature=90bcf91fdb9e1dd253eb467bfef9a9dcc4020d2c8c9762565cedc1b7035931ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
