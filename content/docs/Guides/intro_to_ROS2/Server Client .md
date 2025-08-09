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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4ZF54G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FuVNxrnXvB83vCVghnS19QSYNU8yF79g8gSrO2iqyLAiEAt21wPC8KYLCBiQYA05iCIfRoLrT5YU7VoeSg9XuPe8MqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJPLuLYN%2BUdnvaiSircAzixWsjH%2BCuVNP1L%2FWq3f4dV3SNXayjxpY5R58DhKntXvqRrX5G7lNJ5O8GPzL6evoCYTTWjEdPLL9Q4CPDB%2BgepWg6vmD3GyZNyvmFDto0UIi0V9%2Ff9fqY0VKbUsOEI8TM121uPMsnQiaPyaXiMaH1NoEnN%2FIEJc8FlhmnL2LNCme3tLmOiISCUOxTODN0qeD9tIMoJN6sXR4rBnx%2BqTCFFNY2TXNs88F%2BR2tRiaGjyX%2FWhptGIkGN8ydFNFJlwtpdAqnqSlcqOA4ljpA7KWTWDAF204nmuhGGJIzsdYhN5dhOB25ytEbe%2FtXzFQsc%2B8NHeqnhZtpeUG49Eo6qtVv6U6iEMlaJ5KBVmSTvEYdGE77SdhR5qBUXniWCyL62DL5MFR9qTnp3mo9DWes8ootIVI5X0yxUJb6TICxT%2BcxHnLa9vKD9sYg3ylC2tSIuLr23gfeoGHbF1JJ%2B4Uc6HCoKU9PuUp32vC7CVETMfKkjqQQTBVOCIvWAddvKNd0kDL5yJ8rH4tuE12GH7NVDfbUzdow53Fpy4gHPfGEmgpprojijCCO0%2F8wldTKoLmqgpHic5PoyvJJY%2FgqD%2Fh82A65XnzVNjwKCrvFPlSedICpo9SH%2F%2ByRvfWbE697p8MOuL3sQGOqUB3r6oI3IeRyFMDcayZMu7EDJMg6jLcrn1Rglc3oO%2B%2FUI28kF8JQ6tfmoTWDdzxhhH2qMOv2q6X7CWzwO73AILHrQML2TEvu03c8upvCdvmQH042UFnJDIMauR%2BpO%2Bz2bKa4MUh9XfTbmiowtNqe1jUk1jj6NT%2FdQx2Kw8QbLJRZ%2BT7d2oqCjmJKedlR%2BUDR2h%2Fa5x6SJ4CjRvM210%2FQjW1H9%2BoGaA&X-Amz-Signature=f0c8a45d9385253408b70e5bec5f4fc08b03212fe185adc200a06d87b9ff16ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4ZF54G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FuVNxrnXvB83vCVghnS19QSYNU8yF79g8gSrO2iqyLAiEAt21wPC8KYLCBiQYA05iCIfRoLrT5YU7VoeSg9XuPe8MqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJPLuLYN%2BUdnvaiSircAzixWsjH%2BCuVNP1L%2FWq3f4dV3SNXayjxpY5R58DhKntXvqRrX5G7lNJ5O8GPzL6evoCYTTWjEdPLL9Q4CPDB%2BgepWg6vmD3GyZNyvmFDto0UIi0V9%2Ff9fqY0VKbUsOEI8TM121uPMsnQiaPyaXiMaH1NoEnN%2FIEJc8FlhmnL2LNCme3tLmOiISCUOxTODN0qeD9tIMoJN6sXR4rBnx%2BqTCFFNY2TXNs88F%2BR2tRiaGjyX%2FWhptGIkGN8ydFNFJlwtpdAqnqSlcqOA4ljpA7KWTWDAF204nmuhGGJIzsdYhN5dhOB25ytEbe%2FtXzFQsc%2B8NHeqnhZtpeUG49Eo6qtVv6U6iEMlaJ5KBVmSTvEYdGE77SdhR5qBUXniWCyL62DL5MFR9qTnp3mo9DWes8ootIVI5X0yxUJb6TICxT%2BcxHnLa9vKD9sYg3ylC2tSIuLr23gfeoGHbF1JJ%2B4Uc6HCoKU9PuUp32vC7CVETMfKkjqQQTBVOCIvWAddvKNd0kDL5yJ8rH4tuE12GH7NVDfbUzdow53Fpy4gHPfGEmgpprojijCCO0%2F8wldTKoLmqgpHic5PoyvJJY%2FgqD%2Fh82A65XnzVNjwKCrvFPlSedICpo9SH%2F%2ByRvfWbE697p8MOuL3sQGOqUB3r6oI3IeRyFMDcayZMu7EDJMg6jLcrn1Rglc3oO%2B%2FUI28kF8JQ6tfmoTWDdzxhhH2qMOv2q6X7CWzwO73AILHrQML2TEvu03c8upvCdvmQH042UFnJDIMauR%2BpO%2Bz2bKa4MUh9XfTbmiowtNqe1jUk1jj6NT%2FdQx2Kw8QbLJRZ%2BT7d2oqCjmJKedlR%2BUDR2h%2Fa5x6SJ4CjRvM210%2FQjW1H9%2BoGaA&X-Amz-Signature=cc746ec2fe3f843ac117c7752ebb52065055ea798651def12f8cf0171f78e815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4ZF54G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FuVNxrnXvB83vCVghnS19QSYNU8yF79g8gSrO2iqyLAiEAt21wPC8KYLCBiQYA05iCIfRoLrT5YU7VoeSg9XuPe8MqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJPLuLYN%2BUdnvaiSircAzixWsjH%2BCuVNP1L%2FWq3f4dV3SNXayjxpY5R58DhKntXvqRrX5G7lNJ5O8GPzL6evoCYTTWjEdPLL9Q4CPDB%2BgepWg6vmD3GyZNyvmFDto0UIi0V9%2Ff9fqY0VKbUsOEI8TM121uPMsnQiaPyaXiMaH1NoEnN%2FIEJc8FlhmnL2LNCme3tLmOiISCUOxTODN0qeD9tIMoJN6sXR4rBnx%2BqTCFFNY2TXNs88F%2BR2tRiaGjyX%2FWhptGIkGN8ydFNFJlwtpdAqnqSlcqOA4ljpA7KWTWDAF204nmuhGGJIzsdYhN5dhOB25ytEbe%2FtXzFQsc%2B8NHeqnhZtpeUG49Eo6qtVv6U6iEMlaJ5KBVmSTvEYdGE77SdhR5qBUXniWCyL62DL5MFR9qTnp3mo9DWes8ootIVI5X0yxUJb6TICxT%2BcxHnLa9vKD9sYg3ylC2tSIuLr23gfeoGHbF1JJ%2B4Uc6HCoKU9PuUp32vC7CVETMfKkjqQQTBVOCIvWAddvKNd0kDL5yJ8rH4tuE12GH7NVDfbUzdow53Fpy4gHPfGEmgpprojijCCO0%2F8wldTKoLmqgpHic5PoyvJJY%2FgqD%2Fh82A65XnzVNjwKCrvFPlSedICpo9SH%2F%2ByRvfWbE697p8MOuL3sQGOqUB3r6oI3IeRyFMDcayZMu7EDJMg6jLcrn1Rglc3oO%2B%2FUI28kF8JQ6tfmoTWDdzxhhH2qMOv2q6X7CWzwO73AILHrQML2TEvu03c8upvCdvmQH042UFnJDIMauR%2BpO%2Bz2bKa4MUh9XfTbmiowtNqe1jUk1jj6NT%2FdQx2Kw8QbLJRZ%2BT7d2oqCjmJKedlR%2BUDR2h%2Fa5x6SJ4CjRvM210%2FQjW1H9%2BoGaA&X-Amz-Signature=1efad6ab6996fbb14e771be16b5992e4c203cfd2be1d808a196be27983a7bfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4ZF54G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FuVNxrnXvB83vCVghnS19QSYNU8yF79g8gSrO2iqyLAiEAt21wPC8KYLCBiQYA05iCIfRoLrT5YU7VoeSg9XuPe8MqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJPLuLYN%2BUdnvaiSircAzixWsjH%2BCuVNP1L%2FWq3f4dV3SNXayjxpY5R58DhKntXvqRrX5G7lNJ5O8GPzL6evoCYTTWjEdPLL9Q4CPDB%2BgepWg6vmD3GyZNyvmFDto0UIi0V9%2Ff9fqY0VKbUsOEI8TM121uPMsnQiaPyaXiMaH1NoEnN%2FIEJc8FlhmnL2LNCme3tLmOiISCUOxTODN0qeD9tIMoJN6sXR4rBnx%2BqTCFFNY2TXNs88F%2BR2tRiaGjyX%2FWhptGIkGN8ydFNFJlwtpdAqnqSlcqOA4ljpA7KWTWDAF204nmuhGGJIzsdYhN5dhOB25ytEbe%2FtXzFQsc%2B8NHeqnhZtpeUG49Eo6qtVv6U6iEMlaJ5KBVmSTvEYdGE77SdhR5qBUXniWCyL62DL5MFR9qTnp3mo9DWes8ootIVI5X0yxUJb6TICxT%2BcxHnLa9vKD9sYg3ylC2tSIuLr23gfeoGHbF1JJ%2B4Uc6HCoKU9PuUp32vC7CVETMfKkjqQQTBVOCIvWAddvKNd0kDL5yJ8rH4tuE12GH7NVDfbUzdow53Fpy4gHPfGEmgpprojijCCO0%2F8wldTKoLmqgpHic5PoyvJJY%2FgqD%2Fh82A65XnzVNjwKCrvFPlSedICpo9SH%2F%2ByRvfWbE697p8MOuL3sQGOqUB3r6oI3IeRyFMDcayZMu7EDJMg6jLcrn1Rglc3oO%2B%2FUI28kF8JQ6tfmoTWDdzxhhH2qMOv2q6X7CWzwO73AILHrQML2TEvu03c8upvCdvmQH042UFnJDIMauR%2BpO%2Bz2bKa4MUh9XfTbmiowtNqe1jUk1jj6NT%2FdQx2Kw8QbLJRZ%2BT7d2oqCjmJKedlR%2BUDR2h%2Fa5x6SJ4CjRvM210%2FQjW1H9%2BoGaA&X-Amz-Signature=0b3006bd2ae975d37ea8c93538233ad7dc41371dd13ad720d7e731b7664383c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4ZF54G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FuVNxrnXvB83vCVghnS19QSYNU8yF79g8gSrO2iqyLAiEAt21wPC8KYLCBiQYA05iCIfRoLrT5YU7VoeSg9XuPe8MqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJPLuLYN%2BUdnvaiSircAzixWsjH%2BCuVNP1L%2FWq3f4dV3SNXayjxpY5R58DhKntXvqRrX5G7lNJ5O8GPzL6evoCYTTWjEdPLL9Q4CPDB%2BgepWg6vmD3GyZNyvmFDto0UIi0V9%2Ff9fqY0VKbUsOEI8TM121uPMsnQiaPyaXiMaH1NoEnN%2FIEJc8FlhmnL2LNCme3tLmOiISCUOxTODN0qeD9tIMoJN6sXR4rBnx%2BqTCFFNY2TXNs88F%2BR2tRiaGjyX%2FWhptGIkGN8ydFNFJlwtpdAqnqSlcqOA4ljpA7KWTWDAF204nmuhGGJIzsdYhN5dhOB25ytEbe%2FtXzFQsc%2B8NHeqnhZtpeUG49Eo6qtVv6U6iEMlaJ5KBVmSTvEYdGE77SdhR5qBUXniWCyL62DL5MFR9qTnp3mo9DWes8ootIVI5X0yxUJb6TICxT%2BcxHnLa9vKD9sYg3ylC2tSIuLr23gfeoGHbF1JJ%2B4Uc6HCoKU9PuUp32vC7CVETMfKkjqQQTBVOCIvWAddvKNd0kDL5yJ8rH4tuE12GH7NVDfbUzdow53Fpy4gHPfGEmgpprojijCCO0%2F8wldTKoLmqgpHic5PoyvJJY%2FgqD%2Fh82A65XnzVNjwKCrvFPlSedICpo9SH%2F%2ByRvfWbE697p8MOuL3sQGOqUB3r6oI3IeRyFMDcayZMu7EDJMg6jLcrn1Rglc3oO%2B%2FUI28kF8JQ6tfmoTWDdzxhhH2qMOv2q6X7CWzwO73AILHrQML2TEvu03c8upvCdvmQH042UFnJDIMauR%2BpO%2Bz2bKa4MUh9XfTbmiowtNqe1jUk1jj6NT%2FdQx2Kw8QbLJRZ%2BT7d2oqCjmJKedlR%2BUDR2h%2Fa5x6SJ4CjRvM210%2FQjW1H9%2BoGaA&X-Amz-Signature=aceef6aced12112cbdd697b9318084037b76bd919dc21cd0b828ab900291241a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
