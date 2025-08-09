---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBSX22Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjHlR2%2BbyMMGSZRtR6YAtAY%2BT6L4w8Wc%2FdhQnha1jhAiEA1bKyn47sbkeXcxaHtpjcSiufuzyR8cvYqV70LODopMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOb62bUWOo9DNbGgdyrcA4hqQDESmwcpuU%2F9pOlzMBgLVbvG4d2Qoa1tzaGxcf18O0KDc7MonOKU%2F2AizKcMrpV5MYO2Tp9O7O3mer822khpGOoWQFya2BjHfORQyB%2FXdR8NifoCrTTijisLsantUWz9yJX2EhdmtC3lgVji3tsUqWK7DiBPbQhNUIXPQ39oVYSxb%2B%2FRa%2FVoXnCR67EBV23gal3pItDpDofpzBaYqjQRwzYuSdc1%2BtjzaChnWJSWpfEA17lgRKEgyt61g4lUhQQgZBvTIxIC%2FCEFZgIxWxGC4VRZzu%2BmpfyEwGDz2izYBls%2BIEVgTpQwd%2Bfn%2FCp8BIsb4RetPNhCgzR5njWLc3cZ6R4dh0KYWCLU4jlF6FL87r%2BIdSBm684yZze6l6%2BdbcT6pwnu1YyWhV1acIaIM4Ju47njXrNN8hn9bO5kqFrUnWDxzv11I23M1S6ZDhufTe2u9N6HZTHzhYg6swRiKCiPKcfhbW1yoQNQyL0dewEkMZEbYeiTv70jWd8BC%2FHH2bSs4r5MTxddPjrdRF3ZbedgtAijxuzOWeiqyovbn4eGkIp1Ucf2CfmDamYkuSwDVPz09KqCJD04z7fvahWZXWubzmzraUeX5R1Dkl5vxIPXWOa7SbruLjX2jJdMMOzu3MQGOqUBNMNmdg5bVcXl3vCAe%2FbnfRrKZxiI3hHzegqqKznTD2MSJwC3F8XVbDEqq2SdY5JEWq6WxFCX5bZYwdwpWbXoeq32ragUiUps%2B4itzRTonf9K4QTQwJahluQiLSYnqQ7pA3BAAoEO5CF03NXpq4N7JllpTS920bEe9QRFfO0PMEy9RQSnnneZSnV7SRdGEokDROjXGu1tVCyTPVzV0%2BmZ06iRsRsM&X-Amz-Signature=dfd07ac06f307d5a0f5f47a8d96ef6564c808b1b6276b6386c7fd2714544cda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBSX22Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjHlR2%2BbyMMGSZRtR6YAtAY%2BT6L4w8Wc%2FdhQnha1jhAiEA1bKyn47sbkeXcxaHtpjcSiufuzyR8cvYqV70LODopMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOb62bUWOo9DNbGgdyrcA4hqQDESmwcpuU%2F9pOlzMBgLVbvG4d2Qoa1tzaGxcf18O0KDc7MonOKU%2F2AizKcMrpV5MYO2Tp9O7O3mer822khpGOoWQFya2BjHfORQyB%2FXdR8NifoCrTTijisLsantUWz9yJX2EhdmtC3lgVji3tsUqWK7DiBPbQhNUIXPQ39oVYSxb%2B%2FRa%2FVoXnCR67EBV23gal3pItDpDofpzBaYqjQRwzYuSdc1%2BtjzaChnWJSWpfEA17lgRKEgyt61g4lUhQQgZBvTIxIC%2FCEFZgIxWxGC4VRZzu%2BmpfyEwGDz2izYBls%2BIEVgTpQwd%2Bfn%2FCp8BIsb4RetPNhCgzR5njWLc3cZ6R4dh0KYWCLU4jlF6FL87r%2BIdSBm684yZze6l6%2BdbcT6pwnu1YyWhV1acIaIM4Ju47njXrNN8hn9bO5kqFrUnWDxzv11I23M1S6ZDhufTe2u9N6HZTHzhYg6swRiKCiPKcfhbW1yoQNQyL0dewEkMZEbYeiTv70jWd8BC%2FHH2bSs4r5MTxddPjrdRF3ZbedgtAijxuzOWeiqyovbn4eGkIp1Ucf2CfmDamYkuSwDVPz09KqCJD04z7fvahWZXWubzmzraUeX5R1Dkl5vxIPXWOa7SbruLjX2jJdMMOzu3MQGOqUBNMNmdg5bVcXl3vCAe%2FbnfRrKZxiI3hHzegqqKznTD2MSJwC3F8XVbDEqq2SdY5JEWq6WxFCX5bZYwdwpWbXoeq32ragUiUps%2B4itzRTonf9K4QTQwJahluQiLSYnqQ7pA3BAAoEO5CF03NXpq4N7JllpTS920bEe9QRFfO0PMEy9RQSnnneZSnV7SRdGEokDROjXGu1tVCyTPVzV0%2BmZ06iRsRsM&X-Amz-Signature=2da5a9cc640a96ec5b9d54991199dd1929b484398047f73e04383a7d1c68d641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBSX22Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjHlR2%2BbyMMGSZRtR6YAtAY%2BT6L4w8Wc%2FdhQnha1jhAiEA1bKyn47sbkeXcxaHtpjcSiufuzyR8cvYqV70LODopMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOb62bUWOo9DNbGgdyrcA4hqQDESmwcpuU%2F9pOlzMBgLVbvG4d2Qoa1tzaGxcf18O0KDc7MonOKU%2F2AizKcMrpV5MYO2Tp9O7O3mer822khpGOoWQFya2BjHfORQyB%2FXdR8NifoCrTTijisLsantUWz9yJX2EhdmtC3lgVji3tsUqWK7DiBPbQhNUIXPQ39oVYSxb%2B%2FRa%2FVoXnCR67EBV23gal3pItDpDofpzBaYqjQRwzYuSdc1%2BtjzaChnWJSWpfEA17lgRKEgyt61g4lUhQQgZBvTIxIC%2FCEFZgIxWxGC4VRZzu%2BmpfyEwGDz2izYBls%2BIEVgTpQwd%2Bfn%2FCp8BIsb4RetPNhCgzR5njWLc3cZ6R4dh0KYWCLU4jlF6FL87r%2BIdSBm684yZze6l6%2BdbcT6pwnu1YyWhV1acIaIM4Ju47njXrNN8hn9bO5kqFrUnWDxzv11I23M1S6ZDhufTe2u9N6HZTHzhYg6swRiKCiPKcfhbW1yoQNQyL0dewEkMZEbYeiTv70jWd8BC%2FHH2bSs4r5MTxddPjrdRF3ZbedgtAijxuzOWeiqyovbn4eGkIp1Ucf2CfmDamYkuSwDVPz09KqCJD04z7fvahWZXWubzmzraUeX5R1Dkl5vxIPXWOa7SbruLjX2jJdMMOzu3MQGOqUBNMNmdg5bVcXl3vCAe%2FbnfRrKZxiI3hHzegqqKznTD2MSJwC3F8XVbDEqq2SdY5JEWq6WxFCX5bZYwdwpWbXoeq32ragUiUps%2B4itzRTonf9K4QTQwJahluQiLSYnqQ7pA3BAAoEO5CF03NXpq4N7JllpTS920bEe9QRFfO0PMEy9RQSnnneZSnV7SRdGEokDROjXGu1tVCyTPVzV0%2BmZ06iRsRsM&X-Amz-Signature=55b2d6dd6bfb4993cdf33adcba8d5add42225a57e8bba4041f1adcc5cb3ed921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBSX22Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjHlR2%2BbyMMGSZRtR6YAtAY%2BT6L4w8Wc%2FdhQnha1jhAiEA1bKyn47sbkeXcxaHtpjcSiufuzyR8cvYqV70LODopMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOb62bUWOo9DNbGgdyrcA4hqQDESmwcpuU%2F9pOlzMBgLVbvG4d2Qoa1tzaGxcf18O0KDc7MonOKU%2F2AizKcMrpV5MYO2Tp9O7O3mer822khpGOoWQFya2BjHfORQyB%2FXdR8NifoCrTTijisLsantUWz9yJX2EhdmtC3lgVji3tsUqWK7DiBPbQhNUIXPQ39oVYSxb%2B%2FRa%2FVoXnCR67EBV23gal3pItDpDofpzBaYqjQRwzYuSdc1%2BtjzaChnWJSWpfEA17lgRKEgyt61g4lUhQQgZBvTIxIC%2FCEFZgIxWxGC4VRZzu%2BmpfyEwGDz2izYBls%2BIEVgTpQwd%2Bfn%2FCp8BIsb4RetPNhCgzR5njWLc3cZ6R4dh0KYWCLU4jlF6FL87r%2BIdSBm684yZze6l6%2BdbcT6pwnu1YyWhV1acIaIM4Ju47njXrNN8hn9bO5kqFrUnWDxzv11I23M1S6ZDhufTe2u9N6HZTHzhYg6swRiKCiPKcfhbW1yoQNQyL0dewEkMZEbYeiTv70jWd8BC%2FHH2bSs4r5MTxddPjrdRF3ZbedgtAijxuzOWeiqyovbn4eGkIp1Ucf2CfmDamYkuSwDVPz09KqCJD04z7fvahWZXWubzmzraUeX5R1Dkl5vxIPXWOa7SbruLjX2jJdMMOzu3MQGOqUBNMNmdg5bVcXl3vCAe%2FbnfRrKZxiI3hHzegqqKznTD2MSJwC3F8XVbDEqq2SdY5JEWq6WxFCX5bZYwdwpWbXoeq32ragUiUps%2B4itzRTonf9K4QTQwJahluQiLSYnqQ7pA3BAAoEO5CF03NXpq4N7JllpTS920bEe9QRFfO0PMEy9RQSnnneZSnV7SRdGEokDROjXGu1tVCyTPVzV0%2BmZ06iRsRsM&X-Amz-Signature=8fca8a7310e500d9714bf74943728ca71a6c236e2e635f595a676558002bf585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBSX22Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjHlR2%2BbyMMGSZRtR6YAtAY%2BT6L4w8Wc%2FdhQnha1jhAiEA1bKyn47sbkeXcxaHtpjcSiufuzyR8cvYqV70LODopMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOb62bUWOo9DNbGgdyrcA4hqQDESmwcpuU%2F9pOlzMBgLVbvG4d2Qoa1tzaGxcf18O0KDc7MonOKU%2F2AizKcMrpV5MYO2Tp9O7O3mer822khpGOoWQFya2BjHfORQyB%2FXdR8NifoCrTTijisLsantUWz9yJX2EhdmtC3lgVji3tsUqWK7DiBPbQhNUIXPQ39oVYSxb%2B%2FRa%2FVoXnCR67EBV23gal3pItDpDofpzBaYqjQRwzYuSdc1%2BtjzaChnWJSWpfEA17lgRKEgyt61g4lUhQQgZBvTIxIC%2FCEFZgIxWxGC4VRZzu%2BmpfyEwGDz2izYBls%2BIEVgTpQwd%2Bfn%2FCp8BIsb4RetPNhCgzR5njWLc3cZ6R4dh0KYWCLU4jlF6FL87r%2BIdSBm684yZze6l6%2BdbcT6pwnu1YyWhV1acIaIM4Ju47njXrNN8hn9bO5kqFrUnWDxzv11I23M1S6ZDhufTe2u9N6HZTHzhYg6swRiKCiPKcfhbW1yoQNQyL0dewEkMZEbYeiTv70jWd8BC%2FHH2bSs4r5MTxddPjrdRF3ZbedgtAijxuzOWeiqyovbn4eGkIp1Ucf2CfmDamYkuSwDVPz09KqCJD04z7fvahWZXWubzmzraUeX5R1Dkl5vxIPXWOa7SbruLjX2jJdMMOzu3MQGOqUBNMNmdg5bVcXl3vCAe%2FbnfRrKZxiI3hHzegqqKznTD2MSJwC3F8XVbDEqq2SdY5JEWq6WxFCX5bZYwdwpWbXoeq32ragUiUps%2B4itzRTonf9K4QTQwJahluQiLSYnqQ7pA3BAAoEO5CF03NXpq4N7JllpTS920bEe9QRFfO0PMEy9RQSnnneZSnV7SRdGEokDROjXGu1tVCyTPVzV0%2BmZ06iRsRsM&X-Amz-Signature=06b7c093ed3db74fe617232fa3637dc36c67cb1a5c404e805cb73c3323d5951e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
