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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2IBVW5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRGi3yJk%2Bmn2B84izo7AzqemJ36nDeYvQ1q%2FroW0UphQIhALTjdlSEhw0tgJU5st6AhFWvbU4tGBnN7A%2FHMezwHo95KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMBbxeFjvvntOsqMQq3AOZ4F5fG0NxIT9CoDj4xf7PSxCnE5TacxHavKsQBHt5FYlzAZgW9NM3aeW8y4xcJWq9Evjy2%2FUfcPm%2BSgzWxKgmjw2Z6ZNruF%2BAHaldQNyLDnEz8YxWxhsEooT2d9wst7POAUb%2FgA%2F%2Fo%2BHX%2FGnGef9to%2BhcfqZKO8JataEGFUfSZepwrNdnpgDdzxOu04QTnY5FlHL5i6hLQXi6qRK4ktwuNHDCDD%2FiHuvGfBpKaC49H1rAXUmf2S%2BpYMOmCYEZTeZX%2B5nv3KyPdRqQxOl3YBbZLYowvihb018dnMzv6sP5xgoWo50Qhj8wHpNYvuXjBwcySlemosTLeXS0Nn8c4DlFN%2B4AWq3N15VWGvvze36eEog4o5JMHrgmqlOyJjq%2BZLkiXygJBUTD%2FJYmzxa4ZZ0K1MN8cJZcSB78gCNKcTmmqk3MGA871%2Fenj8lngcJGNorlOqoP02DDlC3XDTC8gFH9ssMa0USj5rfazb8ZTKshfRvZBGl3t10LZt6XsvBPOhVBLhNO3DKXTfA8zn7D07bkppazF1IDJ%2FqfEl0yslly9Ku2BVRH4BMVoo94FkSf52o4OCtAAUXz9PZ5bPzQYlX6L4g0CguyglLAjP9D3aElMsmIk%2Bye0%2FT0vhk5qzDlgOO9BjqkAd0u4sgLjhh8kptNt2zHtB9l8HFX6ENhOgd1Rf4jey4kTL%2B7c%2Bk4RLnEeuLTjBYEsOPs0SSB%2B9dmZ7IMSUwxNXhS0YRhFbqpBuDAADbBCpjMGktpuZQf%2Bu9cdj9i9NQYw20r2RaV4JuV9kZ9siqWwmGJ2PPMw7K9%2FCdU%2FAPbJfY2o8hSWyWVxUdtvWo4DMxe3XY%2FmEugEIohOs28x2Ni8YDDCdSP&X-Amz-Signature=5711777e0b3d1e2baa44e2c1c6938716fdfc6ce5b842e8adfb228f9e8a64b0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2IBVW5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRGi3yJk%2Bmn2B84izo7AzqemJ36nDeYvQ1q%2FroW0UphQIhALTjdlSEhw0tgJU5st6AhFWvbU4tGBnN7A%2FHMezwHo95KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMBbxeFjvvntOsqMQq3AOZ4F5fG0NxIT9CoDj4xf7PSxCnE5TacxHavKsQBHt5FYlzAZgW9NM3aeW8y4xcJWq9Evjy2%2FUfcPm%2BSgzWxKgmjw2Z6ZNruF%2BAHaldQNyLDnEz8YxWxhsEooT2d9wst7POAUb%2FgA%2F%2Fo%2BHX%2FGnGef9to%2BhcfqZKO8JataEGFUfSZepwrNdnpgDdzxOu04QTnY5FlHL5i6hLQXi6qRK4ktwuNHDCDD%2FiHuvGfBpKaC49H1rAXUmf2S%2BpYMOmCYEZTeZX%2B5nv3KyPdRqQxOl3YBbZLYowvihb018dnMzv6sP5xgoWo50Qhj8wHpNYvuXjBwcySlemosTLeXS0Nn8c4DlFN%2B4AWq3N15VWGvvze36eEog4o5JMHrgmqlOyJjq%2BZLkiXygJBUTD%2FJYmzxa4ZZ0K1MN8cJZcSB78gCNKcTmmqk3MGA871%2Fenj8lngcJGNorlOqoP02DDlC3XDTC8gFH9ssMa0USj5rfazb8ZTKshfRvZBGl3t10LZt6XsvBPOhVBLhNO3DKXTfA8zn7D07bkppazF1IDJ%2FqfEl0yslly9Ku2BVRH4BMVoo94FkSf52o4OCtAAUXz9PZ5bPzQYlX6L4g0CguyglLAjP9D3aElMsmIk%2Bye0%2FT0vhk5qzDlgOO9BjqkAd0u4sgLjhh8kptNt2zHtB9l8HFX6ENhOgd1Rf4jey4kTL%2B7c%2Bk4RLnEeuLTjBYEsOPs0SSB%2B9dmZ7IMSUwxNXhS0YRhFbqpBuDAADbBCpjMGktpuZQf%2Bu9cdj9i9NQYw20r2RaV4JuV9kZ9siqWwmGJ2PPMw7K9%2FCdU%2FAPbJfY2o8hSWyWVxUdtvWo4DMxe3XY%2FmEugEIohOs28x2Ni8YDDCdSP&X-Amz-Signature=a48cff388de13f35f24c499cbdc5ca6a00db1447d4348fa494b46fdcb13a33af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
