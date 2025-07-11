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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZWBEIV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpVI5UtLAIOUvBzt%2BLMdmfeFfPJse2bMdOt8DQCRe1lQIhAL6e3eIELSZ%2FxzpZEXTbQw0ECfB5zzXsRuY7I550b%2FCSKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Zk2Etun%2FI3tN9dsq3ANQUMA%2FxTCGa2rGK7NqE8kUo7ZGuqLwgMHl5LMYKVP8sUqTV2o2hAJHczPD4oRdwEL6OmJvXzk0JNf6C4ZLmSLpeLy%2BuIv3Wgso%2BtHYhtVBcilGoHugXeiJPaGfDn7qSTD%2FgVsAkKrBSfxGyr8B4MCc6upzroYE1NrKUDjQ%2F4EO5Vd5bfAnocjiBVTSufjQI9X3RTiFKoQh3T%2B4wfAMWrlWYtZO6Mvxgpp%2Bf%2Fg%2FEPFV78Ys7DHczh0gZvM7quaPYzrtAyH8h4pBKI1jFjo8Oy0cBb9XdNGAbpdkYsp69ju6JV%2BH%2FluxH%2BpMIzNhWCUw8ODVqNWbpWZCEbDVpo3%2BryZPrUveVPk1oDuSgnWcXWsKM8s4NH7mjWD57Cgnl8qge8hTGSoWPEGycDMbPCEmWcq7xVEDdWIbu6SFqANc82D5O6FSddS1BOWDmNaFS5J9qRLqpOhPQB432ZqWSJTe8ygL0cmbVZ9YczCWn0PeO9N%2F7aKL11YDjOkd4CWmPwJBkx7Fvyu8UPJNxyxzopzP%2FY4rlBZoqM3GNWb6Acy%2B49dBWzEivb1rwKpZ9t6arVmhRz2uZj9T3bP292NopxCH5Ta6e6DOJ4bOIwFjHB%2Fous%2BrAcEziy4hMOKyb9U%2FljDBqcTDBjqkAcCYKGJtdtXFTPfqkmHDgFCWBre%2BvTdIimoPrXQPvN1W2cOsrp0Ert2XtImsUo%2FzB13tDfjBz68PaUgbwzNAm3rQwOW13XnAonVKA5IdXGAixX30RlWU1ebTfOKkcyDoQ%2BZV9rhzol6H%2FmQl9E1yMHbueWqTWmC2FZzxhrzXlDJWeEb2Po9PuiVln2U9MHARnEg31qHpBl4HrbtxLc5wZbTUOVQX&X-Amz-Signature=e3cc7c53b9a02725edaa19b974b1f23746459ebd9954bb537d0bf2a17ca3e59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZWBEIV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpVI5UtLAIOUvBzt%2BLMdmfeFfPJse2bMdOt8DQCRe1lQIhAL6e3eIELSZ%2FxzpZEXTbQw0ECfB5zzXsRuY7I550b%2FCSKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Zk2Etun%2FI3tN9dsq3ANQUMA%2FxTCGa2rGK7NqE8kUo7ZGuqLwgMHl5LMYKVP8sUqTV2o2hAJHczPD4oRdwEL6OmJvXzk0JNf6C4ZLmSLpeLy%2BuIv3Wgso%2BtHYhtVBcilGoHugXeiJPaGfDn7qSTD%2FgVsAkKrBSfxGyr8B4MCc6upzroYE1NrKUDjQ%2F4EO5Vd5bfAnocjiBVTSufjQI9X3RTiFKoQh3T%2B4wfAMWrlWYtZO6Mvxgpp%2Bf%2Fg%2FEPFV78Ys7DHczh0gZvM7quaPYzrtAyH8h4pBKI1jFjo8Oy0cBb9XdNGAbpdkYsp69ju6JV%2BH%2FluxH%2BpMIzNhWCUw8ODVqNWbpWZCEbDVpo3%2BryZPrUveVPk1oDuSgnWcXWsKM8s4NH7mjWD57Cgnl8qge8hTGSoWPEGycDMbPCEmWcq7xVEDdWIbu6SFqANc82D5O6FSddS1BOWDmNaFS5J9qRLqpOhPQB432ZqWSJTe8ygL0cmbVZ9YczCWn0PeO9N%2F7aKL11YDjOkd4CWmPwJBkx7Fvyu8UPJNxyxzopzP%2FY4rlBZoqM3GNWb6Acy%2B49dBWzEivb1rwKpZ9t6arVmhRz2uZj9T3bP292NopxCH5Ta6e6DOJ4bOIwFjHB%2Fous%2BrAcEziy4hMOKyb9U%2FljDBqcTDBjqkAcCYKGJtdtXFTPfqkmHDgFCWBre%2BvTdIimoPrXQPvN1W2cOsrp0Ert2XtImsUo%2FzB13tDfjBz68PaUgbwzNAm3rQwOW13XnAonVKA5IdXGAixX30RlWU1ebTfOKkcyDoQ%2BZV9rhzol6H%2FmQl9E1yMHbueWqTWmC2FZzxhrzXlDJWeEb2Po9PuiVln2U9MHARnEg31qHpBl4HrbtxLc5wZbTUOVQX&X-Amz-Signature=72340d10b22b788a1ab135efa7528687cc53bac1cc0170acf6c8ed5a507d3da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZWBEIV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpVI5UtLAIOUvBzt%2BLMdmfeFfPJse2bMdOt8DQCRe1lQIhAL6e3eIELSZ%2FxzpZEXTbQw0ECfB5zzXsRuY7I550b%2FCSKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Zk2Etun%2FI3tN9dsq3ANQUMA%2FxTCGa2rGK7NqE8kUo7ZGuqLwgMHl5LMYKVP8sUqTV2o2hAJHczPD4oRdwEL6OmJvXzk0JNf6C4ZLmSLpeLy%2BuIv3Wgso%2BtHYhtVBcilGoHugXeiJPaGfDn7qSTD%2FgVsAkKrBSfxGyr8B4MCc6upzroYE1NrKUDjQ%2F4EO5Vd5bfAnocjiBVTSufjQI9X3RTiFKoQh3T%2B4wfAMWrlWYtZO6Mvxgpp%2Bf%2Fg%2FEPFV78Ys7DHczh0gZvM7quaPYzrtAyH8h4pBKI1jFjo8Oy0cBb9XdNGAbpdkYsp69ju6JV%2BH%2FluxH%2BpMIzNhWCUw8ODVqNWbpWZCEbDVpo3%2BryZPrUveVPk1oDuSgnWcXWsKM8s4NH7mjWD57Cgnl8qge8hTGSoWPEGycDMbPCEmWcq7xVEDdWIbu6SFqANc82D5O6FSddS1BOWDmNaFS5J9qRLqpOhPQB432ZqWSJTe8ygL0cmbVZ9YczCWn0PeO9N%2F7aKL11YDjOkd4CWmPwJBkx7Fvyu8UPJNxyxzopzP%2FY4rlBZoqM3GNWb6Acy%2B49dBWzEivb1rwKpZ9t6arVmhRz2uZj9T3bP292NopxCH5Ta6e6DOJ4bOIwFjHB%2Fous%2BrAcEziy4hMOKyb9U%2FljDBqcTDBjqkAcCYKGJtdtXFTPfqkmHDgFCWBre%2BvTdIimoPrXQPvN1W2cOsrp0Ert2XtImsUo%2FzB13tDfjBz68PaUgbwzNAm3rQwOW13XnAonVKA5IdXGAixX30RlWU1ebTfOKkcyDoQ%2BZV9rhzol6H%2FmQl9E1yMHbueWqTWmC2FZzxhrzXlDJWeEb2Po9PuiVln2U9MHARnEg31qHpBl4HrbtxLc5wZbTUOVQX&X-Amz-Signature=c3b80609948f1f6356d649e5465ddc8b7f0e5e5f859bf4d32b0dbe20fbc29d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZWBEIV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpVI5UtLAIOUvBzt%2BLMdmfeFfPJse2bMdOt8DQCRe1lQIhAL6e3eIELSZ%2FxzpZEXTbQw0ECfB5zzXsRuY7I550b%2FCSKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Zk2Etun%2FI3tN9dsq3ANQUMA%2FxTCGa2rGK7NqE8kUo7ZGuqLwgMHl5LMYKVP8sUqTV2o2hAJHczPD4oRdwEL6OmJvXzk0JNf6C4ZLmSLpeLy%2BuIv3Wgso%2BtHYhtVBcilGoHugXeiJPaGfDn7qSTD%2FgVsAkKrBSfxGyr8B4MCc6upzroYE1NrKUDjQ%2F4EO5Vd5bfAnocjiBVTSufjQI9X3RTiFKoQh3T%2B4wfAMWrlWYtZO6Mvxgpp%2Bf%2Fg%2FEPFV78Ys7DHczh0gZvM7quaPYzrtAyH8h4pBKI1jFjo8Oy0cBb9XdNGAbpdkYsp69ju6JV%2BH%2FluxH%2BpMIzNhWCUw8ODVqNWbpWZCEbDVpo3%2BryZPrUveVPk1oDuSgnWcXWsKM8s4NH7mjWD57Cgnl8qge8hTGSoWPEGycDMbPCEmWcq7xVEDdWIbu6SFqANc82D5O6FSddS1BOWDmNaFS5J9qRLqpOhPQB432ZqWSJTe8ygL0cmbVZ9YczCWn0PeO9N%2F7aKL11YDjOkd4CWmPwJBkx7Fvyu8UPJNxyxzopzP%2FY4rlBZoqM3GNWb6Acy%2B49dBWzEivb1rwKpZ9t6arVmhRz2uZj9T3bP292NopxCH5Ta6e6DOJ4bOIwFjHB%2Fous%2BrAcEziy4hMOKyb9U%2FljDBqcTDBjqkAcCYKGJtdtXFTPfqkmHDgFCWBre%2BvTdIimoPrXQPvN1W2cOsrp0Ert2XtImsUo%2FzB13tDfjBz68PaUgbwzNAm3rQwOW13XnAonVKA5IdXGAixX30RlWU1ebTfOKkcyDoQ%2BZV9rhzol6H%2FmQl9E1yMHbueWqTWmC2FZzxhrzXlDJWeEb2Po9PuiVln2U9MHARnEg31qHpBl4HrbtxLc5wZbTUOVQX&X-Amz-Signature=1bb2d902be531ebe94f3758e3d8734604639f76102499a41f3aecc9579a78a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZWBEIV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpVI5UtLAIOUvBzt%2BLMdmfeFfPJse2bMdOt8DQCRe1lQIhAL6e3eIELSZ%2FxzpZEXTbQw0ECfB5zzXsRuY7I550b%2FCSKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Zk2Etun%2FI3tN9dsq3ANQUMA%2FxTCGa2rGK7NqE8kUo7ZGuqLwgMHl5LMYKVP8sUqTV2o2hAJHczPD4oRdwEL6OmJvXzk0JNf6C4ZLmSLpeLy%2BuIv3Wgso%2BtHYhtVBcilGoHugXeiJPaGfDn7qSTD%2FgVsAkKrBSfxGyr8B4MCc6upzroYE1NrKUDjQ%2F4EO5Vd5bfAnocjiBVTSufjQI9X3RTiFKoQh3T%2B4wfAMWrlWYtZO6Mvxgpp%2Bf%2Fg%2FEPFV78Ys7DHczh0gZvM7quaPYzrtAyH8h4pBKI1jFjo8Oy0cBb9XdNGAbpdkYsp69ju6JV%2BH%2FluxH%2BpMIzNhWCUw8ODVqNWbpWZCEbDVpo3%2BryZPrUveVPk1oDuSgnWcXWsKM8s4NH7mjWD57Cgnl8qge8hTGSoWPEGycDMbPCEmWcq7xVEDdWIbu6SFqANc82D5O6FSddS1BOWDmNaFS5J9qRLqpOhPQB432ZqWSJTe8ygL0cmbVZ9YczCWn0PeO9N%2F7aKL11YDjOkd4CWmPwJBkx7Fvyu8UPJNxyxzopzP%2FY4rlBZoqM3GNWb6Acy%2B49dBWzEivb1rwKpZ9t6arVmhRz2uZj9T3bP292NopxCH5Ta6e6DOJ4bOIwFjHB%2Fous%2BrAcEziy4hMOKyb9U%2FljDBqcTDBjqkAcCYKGJtdtXFTPfqkmHDgFCWBre%2BvTdIimoPrXQPvN1W2cOsrp0Ert2XtImsUo%2FzB13tDfjBz68PaUgbwzNAm3rQwOW13XnAonVKA5IdXGAixX30RlWU1ebTfOKkcyDoQ%2BZV9rhzol6H%2FmQl9E1yMHbueWqTWmC2FZzxhrzXlDJWeEb2Po9PuiVln2U9MHARnEg31qHpBl4HrbtxLc5wZbTUOVQX&X-Amz-Signature=18afad30b6bc9940325e314eef3b4a5269d7086eba9a8b70aee7e94ff6987c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
