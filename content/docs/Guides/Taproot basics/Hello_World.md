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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHHT7NV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGPWKxxb1m8UZg0iSu9qeVnrItsEi4uPDXrpperpmAK3AiEAg1mWYXSbF3PCkjA%2FjXjdnLj4ei%2FSqG7lDwUCu78QhVAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPO7ix%2BMVmx9Wqyi%2BircA1wtEbTQLmqL2Fp6CkWykoC%2B8bDNG94l4KVnY5gfHqWk5K%2FPeukSpjtZ%2B0qVHw0wrBoMeksnIEupGc2Y8FXD5Yle924OMPbPkSA8ZteqQ2mSzLufqF0YQaJ4Ni6rAAR0j7LjKDDAh0RgLYC8U7KFe7XWHc1BUcGUKamf%2FLKHVIfA5IhhTvoraIhSm3YojXz9TmpaOlMB4vJdqf8Khl8tjOxd%2BqTfzkAeR5yqwRqVRR%2BAHE0h%2BNoRi7vyGzY5uiZ7JfHzKtth%2FnNryFJ9atJsJ5vvTT8aBy2wXbUuwN5Lp9aeCN2lngpVX3hGsOtS7WkOtObNeN02FMX5VpvLHQc8ktdsKjGcwtjXxm4HUMqJachAgrM8KxKtGNuEw%2BwyMXdJqBZ7xX9MWd5Ly90X0ORuDLwXLPwzoIBTWINaNXmxE%2FzHLqDfxai28bGgNOtfHO2itYgUqADjEJu%2BZqIRpd1wT3O7ZdIuFSHoGk9gTc46K4pJPHyGZ1ZDsz20L1uJSceTvaINScwJFZCpcmobRuWNZXpqJz2YKT8Lc5fSHUjE24%2Bx5cEQKyNcm4lVyDTcACCcnQgsYZcI65yMMeFXT8S8dVw%2BEcZ9rpGBuGHyok5zkVTeIsYSiof6ROaZJoglMLWI%2FL0GOqUBNIrnhT2JtvJplFVG8bABmj6o6L%2B4N%2FRkGrJe6oT3RgdOGEmmXRGyJnmUaWs1ERQdq%2FjJTaP2kx4tGBQxs6g2gTi6dj6TmcR%2F8bJpFKh9WOSyG%2BZh%2BZr8OuGaT7tMz8f4i93EpNZ%2B1jRJKROJ7w4rvzobL%2Bv3%2B%2FVhcEVRFqZMF%2FT0IQjEorwCO0mHXb5rFYKjvp42Hj546fG4xzIArtTTUG1zU%2FcP&X-Amz-Signature=055e88cea265d1afbc0e678dea14f493d819dae00c4baaf04e224863170c96cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHHT7NV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGPWKxxb1m8UZg0iSu9qeVnrItsEi4uPDXrpperpmAK3AiEAg1mWYXSbF3PCkjA%2FjXjdnLj4ei%2FSqG7lDwUCu78QhVAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPO7ix%2BMVmx9Wqyi%2BircA1wtEbTQLmqL2Fp6CkWykoC%2B8bDNG94l4KVnY5gfHqWk5K%2FPeukSpjtZ%2B0qVHw0wrBoMeksnIEupGc2Y8FXD5Yle924OMPbPkSA8ZteqQ2mSzLufqF0YQaJ4Ni6rAAR0j7LjKDDAh0RgLYC8U7KFe7XWHc1BUcGUKamf%2FLKHVIfA5IhhTvoraIhSm3YojXz9TmpaOlMB4vJdqf8Khl8tjOxd%2BqTfzkAeR5yqwRqVRR%2BAHE0h%2BNoRi7vyGzY5uiZ7JfHzKtth%2FnNryFJ9atJsJ5vvTT8aBy2wXbUuwN5Lp9aeCN2lngpVX3hGsOtS7WkOtObNeN02FMX5VpvLHQc8ktdsKjGcwtjXxm4HUMqJachAgrM8KxKtGNuEw%2BwyMXdJqBZ7xX9MWd5Ly90X0ORuDLwXLPwzoIBTWINaNXmxE%2FzHLqDfxai28bGgNOtfHO2itYgUqADjEJu%2BZqIRpd1wT3O7ZdIuFSHoGk9gTc46K4pJPHyGZ1ZDsz20L1uJSceTvaINScwJFZCpcmobRuWNZXpqJz2YKT8Lc5fSHUjE24%2Bx5cEQKyNcm4lVyDTcACCcnQgsYZcI65yMMeFXT8S8dVw%2BEcZ9rpGBuGHyok5zkVTeIsYSiof6ROaZJoglMLWI%2FL0GOqUBNIrnhT2JtvJplFVG8bABmj6o6L%2B4N%2FRkGrJe6oT3RgdOGEmmXRGyJnmUaWs1ERQdq%2FjJTaP2kx4tGBQxs6g2gTi6dj6TmcR%2F8bJpFKh9WOSyG%2BZh%2BZr8OuGaT7tMz8f4i93EpNZ%2B1jRJKROJ7w4rvzobL%2Bv3%2B%2FVhcEVRFqZMF%2FT0IQjEorwCO0mHXb5rFYKjvp42Hj546fG4xzIArtTTUG1zU%2FcP&X-Amz-Signature=c9423d2fa09515e99c2a2e8a1e7fa08837c55309b7c08c39dde729c1d1473f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
