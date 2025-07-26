---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5364TE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGvY7uel1iltkGpuZqAqFBmEjCF%2BRuaUQL%2F6M55Fcjs7AiEAo8fADiaVxZt851O6NGCcH9O9%2BB8eDLOgQb3vlBdET%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD2XfXbKkDzpRRPCWyrcA7IDjvH8%2FqtnPvx8prN6ha9gzefQLI57K1FqpEKPhV4%2BAuC8NXSYWgwuOyINeDFNhwFEaNlffUuoFdQ5C4ytkLgKeT5VV%2Fj3uhCcZpimm8hOPM9uT1M0vNGDLo4G4AzNBLjzielyde823uie%2BGR8PLomES3T2Xj8uV%2BWn%2BnLPYFfr4PtXIqO1s%2FjAWM6Bc%2FuZgru5NqDEIyy%2FKc2F3iwUo9hrJ0LCCoKRj46btWu9NSj6jgS%2F81SelQiilEigFvSNOF%2FiDP74eZUhF9Kbb%2BKQ06o7r3jb%2F3KO0Eq%2BMn3VxCLWlPOJGPxR%2BJueFLmWtesL6z%2BPDA7ll8aHceAsWqyADaGHrNbnCslAvm7xQwBdu7f66Zr%2FBQ61ZZdI62eQRojFyhBo%2B1tDRVEySl%2B%2Bzf%2BZuySFwsDk%2BKg1xoDcFHv52GE8G3nAjl9jOo5tOINcFz5TUdTLpFG6uaFK6hBLHG4i4810E76yCIoTDbzf4iibsDyeJ3ur5gXgXR6o3hqjdDdPYaj0Cuvj1OIexJTyjkaxXdCfLmJGmJlAd10pYzJ36%2FHbXAiZHYa4OT1CSntx1YHKulzqTA6kgIIFkCt7CCqZaaVt2bOYH6tq4znDSBnB%2BL7f79u4ppGgu%2FWly%2FPMPb5ksQGOqUBV9%2BUOFZLcTrP0ITc9Dm9RllI2D%2BiOlogPtuuaxzfbIDNE0tKNyKua4xVdb1zZs9VL1gSzQWL8imUN5XZe4oqF5wUZsYld%2B9SgHLVJWkK2WXoJZ%2BA32dFrWxWcQCRJn7E5zpuPRvGGlBJr7IVAtRy22rEyIcT8ahw%2B3rOYM8rp1uu5u%2Fgppyay3oEQQVgIPE2QKPtRvlS6WsMcP0EJlxSqjiLfT75&X-Amz-Signature=5178e019bb80b9f71f403ba380e1e8bfb80707e4312bfd31946c56bc70b5aed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5364TE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGvY7uel1iltkGpuZqAqFBmEjCF%2BRuaUQL%2F6M55Fcjs7AiEAo8fADiaVxZt851O6NGCcH9O9%2BB8eDLOgQb3vlBdET%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD2XfXbKkDzpRRPCWyrcA7IDjvH8%2FqtnPvx8prN6ha9gzefQLI57K1FqpEKPhV4%2BAuC8NXSYWgwuOyINeDFNhwFEaNlffUuoFdQ5C4ytkLgKeT5VV%2Fj3uhCcZpimm8hOPM9uT1M0vNGDLo4G4AzNBLjzielyde823uie%2BGR8PLomES3T2Xj8uV%2BWn%2BnLPYFfr4PtXIqO1s%2FjAWM6Bc%2FuZgru5NqDEIyy%2FKc2F3iwUo9hrJ0LCCoKRj46btWu9NSj6jgS%2F81SelQiilEigFvSNOF%2FiDP74eZUhF9Kbb%2BKQ06o7r3jb%2F3KO0Eq%2BMn3VxCLWlPOJGPxR%2BJueFLmWtesL6z%2BPDA7ll8aHceAsWqyADaGHrNbnCslAvm7xQwBdu7f66Zr%2FBQ61ZZdI62eQRojFyhBo%2B1tDRVEySl%2B%2Bzf%2BZuySFwsDk%2BKg1xoDcFHv52GE8G3nAjl9jOo5tOINcFz5TUdTLpFG6uaFK6hBLHG4i4810E76yCIoTDbzf4iibsDyeJ3ur5gXgXR6o3hqjdDdPYaj0Cuvj1OIexJTyjkaxXdCfLmJGmJlAd10pYzJ36%2FHbXAiZHYa4OT1CSntx1YHKulzqTA6kgIIFkCt7CCqZaaVt2bOYH6tq4znDSBnB%2BL7f79u4ppGgu%2FWly%2FPMPb5ksQGOqUBV9%2BUOFZLcTrP0ITc9Dm9RllI2D%2BiOlogPtuuaxzfbIDNE0tKNyKua4xVdb1zZs9VL1gSzQWL8imUN5XZe4oqF5wUZsYld%2B9SgHLVJWkK2WXoJZ%2BA32dFrWxWcQCRJn7E5zpuPRvGGlBJr7IVAtRy22rEyIcT8ahw%2B3rOYM8rp1uu5u%2Fgppyay3oEQQVgIPE2QKPtRvlS6WsMcP0EJlxSqjiLfT75&X-Amz-Signature=bb74ffdde31ce6c151dbd9d4c76522c1c14f60d84862da13efccfca96b6509e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5364TE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGvY7uel1iltkGpuZqAqFBmEjCF%2BRuaUQL%2F6M55Fcjs7AiEAo8fADiaVxZt851O6NGCcH9O9%2BB8eDLOgQb3vlBdET%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD2XfXbKkDzpRRPCWyrcA7IDjvH8%2FqtnPvx8prN6ha9gzefQLI57K1FqpEKPhV4%2BAuC8NXSYWgwuOyINeDFNhwFEaNlffUuoFdQ5C4ytkLgKeT5VV%2Fj3uhCcZpimm8hOPM9uT1M0vNGDLo4G4AzNBLjzielyde823uie%2BGR8PLomES3T2Xj8uV%2BWn%2BnLPYFfr4PtXIqO1s%2FjAWM6Bc%2FuZgru5NqDEIyy%2FKc2F3iwUo9hrJ0LCCoKRj46btWu9NSj6jgS%2F81SelQiilEigFvSNOF%2FiDP74eZUhF9Kbb%2BKQ06o7r3jb%2F3KO0Eq%2BMn3VxCLWlPOJGPxR%2BJueFLmWtesL6z%2BPDA7ll8aHceAsWqyADaGHrNbnCslAvm7xQwBdu7f66Zr%2FBQ61ZZdI62eQRojFyhBo%2B1tDRVEySl%2B%2Bzf%2BZuySFwsDk%2BKg1xoDcFHv52GE8G3nAjl9jOo5tOINcFz5TUdTLpFG6uaFK6hBLHG4i4810E76yCIoTDbzf4iibsDyeJ3ur5gXgXR6o3hqjdDdPYaj0Cuvj1OIexJTyjkaxXdCfLmJGmJlAd10pYzJ36%2FHbXAiZHYa4OT1CSntx1YHKulzqTA6kgIIFkCt7CCqZaaVt2bOYH6tq4znDSBnB%2BL7f79u4ppGgu%2FWly%2FPMPb5ksQGOqUBV9%2BUOFZLcTrP0ITc9Dm9RllI2D%2BiOlogPtuuaxzfbIDNE0tKNyKua4xVdb1zZs9VL1gSzQWL8imUN5XZe4oqF5wUZsYld%2B9SgHLVJWkK2WXoJZ%2BA32dFrWxWcQCRJn7E5zpuPRvGGlBJr7IVAtRy22rEyIcT8ahw%2B3rOYM8rp1uu5u%2Fgppyay3oEQQVgIPE2QKPtRvlS6WsMcP0EJlxSqjiLfT75&X-Amz-Signature=6f2a2778e9bb64d4358d2435685dac09362d406bcd2ffa18afe3ecf5ad7c6a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5364TE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGvY7uel1iltkGpuZqAqFBmEjCF%2BRuaUQL%2F6M55Fcjs7AiEAo8fADiaVxZt851O6NGCcH9O9%2BB8eDLOgQb3vlBdET%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD2XfXbKkDzpRRPCWyrcA7IDjvH8%2FqtnPvx8prN6ha9gzefQLI57K1FqpEKPhV4%2BAuC8NXSYWgwuOyINeDFNhwFEaNlffUuoFdQ5C4ytkLgKeT5VV%2Fj3uhCcZpimm8hOPM9uT1M0vNGDLo4G4AzNBLjzielyde823uie%2BGR8PLomES3T2Xj8uV%2BWn%2BnLPYFfr4PtXIqO1s%2FjAWM6Bc%2FuZgru5NqDEIyy%2FKc2F3iwUo9hrJ0LCCoKRj46btWu9NSj6jgS%2F81SelQiilEigFvSNOF%2FiDP74eZUhF9Kbb%2BKQ06o7r3jb%2F3KO0Eq%2BMn3VxCLWlPOJGPxR%2BJueFLmWtesL6z%2BPDA7ll8aHceAsWqyADaGHrNbnCslAvm7xQwBdu7f66Zr%2FBQ61ZZdI62eQRojFyhBo%2B1tDRVEySl%2B%2Bzf%2BZuySFwsDk%2BKg1xoDcFHv52GE8G3nAjl9jOo5tOINcFz5TUdTLpFG6uaFK6hBLHG4i4810E76yCIoTDbzf4iibsDyeJ3ur5gXgXR6o3hqjdDdPYaj0Cuvj1OIexJTyjkaxXdCfLmJGmJlAd10pYzJ36%2FHbXAiZHYa4OT1CSntx1YHKulzqTA6kgIIFkCt7CCqZaaVt2bOYH6tq4znDSBnB%2BL7f79u4ppGgu%2FWly%2FPMPb5ksQGOqUBV9%2BUOFZLcTrP0ITc9Dm9RllI2D%2BiOlogPtuuaxzfbIDNE0tKNyKua4xVdb1zZs9VL1gSzQWL8imUN5XZe4oqF5wUZsYld%2B9SgHLVJWkK2WXoJZ%2BA32dFrWxWcQCRJn7E5zpuPRvGGlBJr7IVAtRy22rEyIcT8ahw%2B3rOYM8rp1uu5u%2Fgppyay3oEQQVgIPE2QKPtRvlS6WsMcP0EJlxSqjiLfT75&X-Amz-Signature=8d4f22a98df554c8d90d3b574ce5f1d62e812cc92378665473cf0d74f83bcd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5364TE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGvY7uel1iltkGpuZqAqFBmEjCF%2BRuaUQL%2F6M55Fcjs7AiEAo8fADiaVxZt851O6NGCcH9O9%2BB8eDLOgQb3vlBdET%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD2XfXbKkDzpRRPCWyrcA7IDjvH8%2FqtnPvx8prN6ha9gzefQLI57K1FqpEKPhV4%2BAuC8NXSYWgwuOyINeDFNhwFEaNlffUuoFdQ5C4ytkLgKeT5VV%2Fj3uhCcZpimm8hOPM9uT1M0vNGDLo4G4AzNBLjzielyde823uie%2BGR8PLomES3T2Xj8uV%2BWn%2BnLPYFfr4PtXIqO1s%2FjAWM6Bc%2FuZgru5NqDEIyy%2FKc2F3iwUo9hrJ0LCCoKRj46btWu9NSj6jgS%2F81SelQiilEigFvSNOF%2FiDP74eZUhF9Kbb%2BKQ06o7r3jb%2F3KO0Eq%2BMn3VxCLWlPOJGPxR%2BJueFLmWtesL6z%2BPDA7ll8aHceAsWqyADaGHrNbnCslAvm7xQwBdu7f66Zr%2FBQ61ZZdI62eQRojFyhBo%2B1tDRVEySl%2B%2Bzf%2BZuySFwsDk%2BKg1xoDcFHv52GE8G3nAjl9jOo5tOINcFz5TUdTLpFG6uaFK6hBLHG4i4810E76yCIoTDbzf4iibsDyeJ3ur5gXgXR6o3hqjdDdPYaj0Cuvj1OIexJTyjkaxXdCfLmJGmJlAd10pYzJ36%2FHbXAiZHYa4OT1CSntx1YHKulzqTA6kgIIFkCt7CCqZaaVt2bOYH6tq4znDSBnB%2BL7f79u4ppGgu%2FWly%2FPMPb5ksQGOqUBV9%2BUOFZLcTrP0ITc9Dm9RllI2D%2BiOlogPtuuaxzfbIDNE0tKNyKua4xVdb1zZs9VL1gSzQWL8imUN5XZe4oqF5wUZsYld%2B9SgHLVJWkK2WXoJZ%2BA32dFrWxWcQCRJn7E5zpuPRvGGlBJr7IVAtRy22rEyIcT8ahw%2B3rOYM8rp1uu5u%2Fgppyay3oEQQVgIPE2QKPtRvlS6WsMcP0EJlxSqjiLfT75&X-Amz-Signature=2123a3d81e921269fe96b431966b77859e080f83d04ef41d8d18b141c859bf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
