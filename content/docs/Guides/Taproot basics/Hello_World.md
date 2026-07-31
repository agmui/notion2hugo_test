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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTFLFMV%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BL2IdUqZ4W%2BZ5KAGYoqwsyqXtkpVh8lsKL5BC%2FilTXwIhAIdzafXJHqFVBbok%2FcQVS0Fe0JeP528CSstYHzpmdUMlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUlvScP9ORlWxO82Aq3APM2mul%2FsWF6noU7W58W1tHmqzIKcp2Ma2hf4nZd5n9uAj192wKfyw%2FhUKaSMUlWBtU3XjCZYzX5RIW1veQS%2F3EJBe8fsU7GfE7mOZ0Ipd0fKd4n%2FrY9wPtSeVNXfZs%2BSFugBapW38gU7eBrgoXVOqGZr6cfbE02T4qnuY0g6e3iwzUvqyyot0i0xPWyP631Y7FfIUjMPGzzG6U667KGpfNPpe5uiDlkrteuyGeY1SZ6CJd2GyIOV3QClgAAly73710HERILLb5S7wdEDL%2BmxLYxhLUIXbSfBwAmB15M4zGkC73yh263SIDQp6bM5sspfjDcf%2Fq%2BoBs2vBG3PgKN3k85R4s0fD2bxndMXf6lreD9G0wwKBSQIpRElOaT4CEESEXwuBYZRX2MqiHGO85fR1ZLcwJFlWR05JWP6XkvTmWfyBfihZH24qH9hVdWpZ7hMDvF9dyFsfPtuBJHJzV5IEQ%2Fd4UKxcYyLml%2F4ISAN40wmtWakGrmjPGFutpxH3gzAtJeDzXDfVDEnJNdT2f%2FdvbfrN%2BJlEPPgUWOnZVwSY%2F6FqoJuUA8Q5fvSbb4AIgkFH3Lwz4vtQWfbtYhMdw6IIz0dRCTgdXVqNA4OWBbdOQJ%2Bi9zzdFLKyojF6nEDCulbDTBjqkAVFsu8dSB7WOG%2Fr%2FrNaFjp4N0IN7zoJpjruauvqCboKvMPXzNSHSLT1kNwNFbrUy68UnVCGCsILnP8bMvmCMGstXvphKt8fLGSWrMLn%2B46E8WY69kIdioIhcSe3qRf1%2F1VK%2FX4seeO4DDYgn3k2q7h3Qu7K%2FUmMCuvytk0treQAaVyLfVbUnJOu4qX2PbB9xxPhrAbSg4Yojg54ZFKNX7r%2Br1BCq&X-Amz-Signature=02507c9ed9132ea23efcf292f72f83b165615436aacff2a6ecb8864fe6ada413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTFLFMV%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BL2IdUqZ4W%2BZ5KAGYoqwsyqXtkpVh8lsKL5BC%2FilTXwIhAIdzafXJHqFVBbok%2FcQVS0Fe0JeP528CSstYHzpmdUMlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUlvScP9ORlWxO82Aq3APM2mul%2FsWF6noU7W58W1tHmqzIKcp2Ma2hf4nZd5n9uAj192wKfyw%2FhUKaSMUlWBtU3XjCZYzX5RIW1veQS%2F3EJBe8fsU7GfE7mOZ0Ipd0fKd4n%2FrY9wPtSeVNXfZs%2BSFugBapW38gU7eBrgoXVOqGZr6cfbE02T4qnuY0g6e3iwzUvqyyot0i0xPWyP631Y7FfIUjMPGzzG6U667KGpfNPpe5uiDlkrteuyGeY1SZ6CJd2GyIOV3QClgAAly73710HERILLb5S7wdEDL%2BmxLYxhLUIXbSfBwAmB15M4zGkC73yh263SIDQp6bM5sspfjDcf%2Fq%2BoBs2vBG3PgKN3k85R4s0fD2bxndMXf6lreD9G0wwKBSQIpRElOaT4CEESEXwuBYZRX2MqiHGO85fR1ZLcwJFlWR05JWP6XkvTmWfyBfihZH24qH9hVdWpZ7hMDvF9dyFsfPtuBJHJzV5IEQ%2Fd4UKxcYyLml%2F4ISAN40wmtWakGrmjPGFutpxH3gzAtJeDzXDfVDEnJNdT2f%2FdvbfrN%2BJlEPPgUWOnZVwSY%2F6FqoJuUA8Q5fvSbb4AIgkFH3Lwz4vtQWfbtYhMdw6IIz0dRCTgdXVqNA4OWBbdOQJ%2Bi9zzdFLKyojF6nEDCulbDTBjqkAVFsu8dSB7WOG%2Fr%2FrNaFjp4N0IN7zoJpjruauvqCboKvMPXzNSHSLT1kNwNFbrUy68UnVCGCsILnP8bMvmCMGstXvphKt8fLGSWrMLn%2B46E8WY69kIdioIhcSe3qRf1%2F1VK%2FX4seeO4DDYgn3k2q7h3Qu7K%2FUmMCuvytk0treQAaVyLfVbUnJOu4qX2PbB9xxPhrAbSg4Yojg54ZFKNX7r%2Br1BCq&X-Amz-Signature=8b4b8f42832d1a61eb5828ee66b58ffe5190febed7cd7a10bce2b0f5048002a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
