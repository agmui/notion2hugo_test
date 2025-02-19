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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DV3EOG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoUtb%2FO%2FYbecPQVI8hME16rHiFvO67vRP2VJ6YoMKCrAiB9%2B2%2BKK9blFj4njLmwKnTZZIH6eMKBtKKCvCYNWBtiSyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wnrOQvxNSRjJzXCKtwDBZG28gqm7pmHsO5I11TLJQ5zvU5rvdh%2BBHmRBMZVq6xrmFn7UDhk77oIcbNK4rsOtqAYmOuSColuqu3bm6DfDT5W9%2F3XhiBe0fOUK7uybjU0hLC5EUOya2aTjdhvRoxQA8m0zRWzkUqtC1h3hWA%2BCA1j15RiE2lhq2NZoqG5TP6OhFK9pn4lMjyluoiKx3IgKNMMdQac0wBMHiFVXVvKu%2BkCywR6FVh6gJAmi7v6GTaE2iJ053gW7FZSrwxd5ATrEsfpG6kUlG%2B5M438lSZJZEPYwP4hQWL5nQJmnL1oeLqSaEowAQiF%2BaF%2B0MiCX%2BRgZiPy87p2VaFNIKzm0qnJcA7xNOBK%2Bv3ii9AtokMKxsPXbqH6dqnkKNYeWVRXeyoLBMfSxoRcW2waVnE8EqGuqTYKA6V6sXTc%2BIn9DpYVAdveve7PJd657JWgVglBALgjSiMIpGwytDuTF69wxkdbDZ%2B%2FS9TRJbiWA57ENTyYzRYFXxlMFi81TRgVYrIy%2BUhOtrjegx%2FmEa4lCTiz1ZCEKbjG8W6LcoUoFlNm4vPMVQEJBKug%2BtJLFtfkP%2FMfdgE0O2zbzUK7J5J31p2Ar1FN9WJoSxyko8qX28jJ93viJmAx9b9rgKa21kC%2BNdkw2e7YvQY6pgH4BKT6I0Kijt1MoDcMDdvyqv8SuExceVDjovzQrOc6X5ZlHZW6AiixDh1oGqC9hae%2FspvVM3ORTGx8Q4w94wyF%2BbhyZuEbw7UdXDOnMgCJ632ZHOAjahmc5ggfOzSZs4kzBxFOU4qEHqZffeGI1UHFZsKK3Abl99DNRYS0Zm7ryNWxlw8U6TbAY5vZubxI2DI7md7gmuMNbPga4tBvMj%2Bqo4VYtZXJ&X-Amz-Signature=4f4aa266cb507214b3b9951080abb3687b357240907726a63adb04b5c35502a8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DV3EOG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoUtb%2FO%2FYbecPQVI8hME16rHiFvO67vRP2VJ6YoMKCrAiB9%2B2%2BKK9blFj4njLmwKnTZZIH6eMKBtKKCvCYNWBtiSyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wnrOQvxNSRjJzXCKtwDBZG28gqm7pmHsO5I11TLJQ5zvU5rvdh%2BBHmRBMZVq6xrmFn7UDhk77oIcbNK4rsOtqAYmOuSColuqu3bm6DfDT5W9%2F3XhiBe0fOUK7uybjU0hLC5EUOya2aTjdhvRoxQA8m0zRWzkUqtC1h3hWA%2BCA1j15RiE2lhq2NZoqG5TP6OhFK9pn4lMjyluoiKx3IgKNMMdQac0wBMHiFVXVvKu%2BkCywR6FVh6gJAmi7v6GTaE2iJ053gW7FZSrwxd5ATrEsfpG6kUlG%2B5M438lSZJZEPYwP4hQWL5nQJmnL1oeLqSaEowAQiF%2BaF%2B0MiCX%2BRgZiPy87p2VaFNIKzm0qnJcA7xNOBK%2Bv3ii9AtokMKxsPXbqH6dqnkKNYeWVRXeyoLBMfSxoRcW2waVnE8EqGuqTYKA6V6sXTc%2BIn9DpYVAdveve7PJd657JWgVglBALgjSiMIpGwytDuTF69wxkdbDZ%2B%2FS9TRJbiWA57ENTyYzRYFXxlMFi81TRgVYrIy%2BUhOtrjegx%2FmEa4lCTiz1ZCEKbjG8W6LcoUoFlNm4vPMVQEJBKug%2BtJLFtfkP%2FMfdgE0O2zbzUK7J5J31p2Ar1FN9WJoSxyko8qX28jJ93viJmAx9b9rgKa21kC%2BNdkw2e7YvQY6pgH4BKT6I0Kijt1MoDcMDdvyqv8SuExceVDjovzQrOc6X5ZlHZW6AiixDh1oGqC9hae%2FspvVM3ORTGx8Q4w94wyF%2BbhyZuEbw7UdXDOnMgCJ632ZHOAjahmc5ggfOzSZs4kzBxFOU4qEHqZffeGI1UHFZsKK3Abl99DNRYS0Zm7ryNWxlw8U6TbAY5vZubxI2DI7md7gmuMNbPga4tBvMj%2Bqo4VYtZXJ&X-Amz-Signature=0e509b0160653fc169d18cc3ed107e72f50e8cfdd81b8136a713cf17e9f204d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
