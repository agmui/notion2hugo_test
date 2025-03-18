---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFH2IZM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD7%2FheNknG7ehDb6AK4vejX4l%2BEdgHCrsOPBti7p04E6wIgIooV9vqIWaa1sFRYtxb9%2FMkw01P26i1W%2FStO7ZmGKWcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNkwY6T3YpaT5XzX1ircA%2BU2R8mMlPEXmrcgQQGazXRopsAnEcL%2B2JKX1%2BMbYCytSq7OErPMeaihYwU2TRHLpw8g3hu0JY5sPeXikoOXyniT3%2FADLGi2CuApEPeInGDpotat7f1S5tHmivkoLYhP0Ha5VWBA%2B7JQEwbepZvNb9%2FZrl6cTPprrQDnmZeOTP4D7AQQ5OCYAoM3jdFZ27wJ5qoS8vcxA21smvZgrsbHaQ%2F%2B49%2BAujWDpd4UrSUnOosAShGUR4NhaUWtvX8TQFxOSfy1qirolFrAltRHabF0Nkc1fk%2Bv54saPfdkiE8FM7ao2VoL6Ron5D1tumiULdWRJFEu1zJ6l8SflYWceeGKUqf6uxutaT8AkRWwSy584AXzY7CLhwD%2F0jNqAGW41BjSSwKpp2VA50x0rT%2F4JONFNwelbOlQP2smI%2FKNHrL1bckU%2B%2FDmNYVcr4v7aYx8r34l7OL1QH41Zvr683NFSUFtjLa3XIFVyp4XlMvCI%2BoKhFI%2BcIu15S7sp44WAurPmCudTwE0vTRXdM66rLQKzkr5tU5%2BDiA8K6cCcV152sq6vdYSrrikdUt2N%2FNlg2x%2BPyDk1u3L8scijt8ST2Z8Mguzfm7mwghbOLSBE3JVUevmdzWNPEvQ6yx3%2FOsSx8KXMNeU5r4GOqUB5Inov4Y4mz0R5eAvIz1T9%2B0AGjIFQCwooCWdZV1tzrbBjQ4ay%2BFOAv8bboFTF6s91ApMdxT0CUZeA5Yh3eFVCPkT%2FEGgiz%2BI%2FyqHoqcFZdDNeWapBbtoJSAqZehqpfzFaU0FoA5fsfI%2F4Kt4FsN5drIgfqVNpZ7sA7BNBYKpQQhDmDivoZY3C930fVm7FYU6IkZk2Qi6nfWe3emVu7naM2wwLrcf&X-Amz-Signature=738b4a45f39b4c45fd3af53141ccd90eaeae51912589f6a61376950ae48f5e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFH2IZM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD7%2FheNknG7ehDb6AK4vejX4l%2BEdgHCrsOPBti7p04E6wIgIooV9vqIWaa1sFRYtxb9%2FMkw01P26i1W%2FStO7ZmGKWcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNkwY6T3YpaT5XzX1ircA%2BU2R8mMlPEXmrcgQQGazXRopsAnEcL%2B2JKX1%2BMbYCytSq7OErPMeaihYwU2TRHLpw8g3hu0JY5sPeXikoOXyniT3%2FADLGi2CuApEPeInGDpotat7f1S5tHmivkoLYhP0Ha5VWBA%2B7JQEwbepZvNb9%2FZrl6cTPprrQDnmZeOTP4D7AQQ5OCYAoM3jdFZ27wJ5qoS8vcxA21smvZgrsbHaQ%2F%2B49%2BAujWDpd4UrSUnOosAShGUR4NhaUWtvX8TQFxOSfy1qirolFrAltRHabF0Nkc1fk%2Bv54saPfdkiE8FM7ao2VoL6Ron5D1tumiULdWRJFEu1zJ6l8SflYWceeGKUqf6uxutaT8AkRWwSy584AXzY7CLhwD%2F0jNqAGW41BjSSwKpp2VA50x0rT%2F4JONFNwelbOlQP2smI%2FKNHrL1bckU%2B%2FDmNYVcr4v7aYx8r34l7OL1QH41Zvr683NFSUFtjLa3XIFVyp4XlMvCI%2BoKhFI%2BcIu15S7sp44WAurPmCudTwE0vTRXdM66rLQKzkr5tU5%2BDiA8K6cCcV152sq6vdYSrrikdUt2N%2FNlg2x%2BPyDk1u3L8scijt8ST2Z8Mguzfm7mwghbOLSBE3JVUevmdzWNPEvQ6yx3%2FOsSx8KXMNeU5r4GOqUB5Inov4Y4mz0R5eAvIz1T9%2B0AGjIFQCwooCWdZV1tzrbBjQ4ay%2BFOAv8bboFTF6s91ApMdxT0CUZeA5Yh3eFVCPkT%2FEGgiz%2BI%2FyqHoqcFZdDNeWapBbtoJSAqZehqpfzFaU0FoA5fsfI%2F4Kt4FsN5drIgfqVNpZ7sA7BNBYKpQQhDmDivoZY3C930fVm7FYU6IkZk2Qi6nfWe3emVu7naM2wwLrcf&X-Amz-Signature=14438d0d7c27686d1a957fbeb0749c81b7ea6c38c760a8e7405c459f6cccc949&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFH2IZM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD7%2FheNknG7ehDb6AK4vejX4l%2BEdgHCrsOPBti7p04E6wIgIooV9vqIWaa1sFRYtxb9%2FMkw01P26i1W%2FStO7ZmGKWcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNkwY6T3YpaT5XzX1ircA%2BU2R8mMlPEXmrcgQQGazXRopsAnEcL%2B2JKX1%2BMbYCytSq7OErPMeaihYwU2TRHLpw8g3hu0JY5sPeXikoOXyniT3%2FADLGi2CuApEPeInGDpotat7f1S5tHmivkoLYhP0Ha5VWBA%2B7JQEwbepZvNb9%2FZrl6cTPprrQDnmZeOTP4D7AQQ5OCYAoM3jdFZ27wJ5qoS8vcxA21smvZgrsbHaQ%2F%2B49%2BAujWDpd4UrSUnOosAShGUR4NhaUWtvX8TQFxOSfy1qirolFrAltRHabF0Nkc1fk%2Bv54saPfdkiE8FM7ao2VoL6Ron5D1tumiULdWRJFEu1zJ6l8SflYWceeGKUqf6uxutaT8AkRWwSy584AXzY7CLhwD%2F0jNqAGW41BjSSwKpp2VA50x0rT%2F4JONFNwelbOlQP2smI%2FKNHrL1bckU%2B%2FDmNYVcr4v7aYx8r34l7OL1QH41Zvr683NFSUFtjLa3XIFVyp4XlMvCI%2BoKhFI%2BcIu15S7sp44WAurPmCudTwE0vTRXdM66rLQKzkr5tU5%2BDiA8K6cCcV152sq6vdYSrrikdUt2N%2FNlg2x%2BPyDk1u3L8scijt8ST2Z8Mguzfm7mwghbOLSBE3JVUevmdzWNPEvQ6yx3%2FOsSx8KXMNeU5r4GOqUB5Inov4Y4mz0R5eAvIz1T9%2B0AGjIFQCwooCWdZV1tzrbBjQ4ay%2BFOAv8bboFTF6s91ApMdxT0CUZeA5Yh3eFVCPkT%2FEGgiz%2BI%2FyqHoqcFZdDNeWapBbtoJSAqZehqpfzFaU0FoA5fsfI%2F4Kt4FsN5drIgfqVNpZ7sA7BNBYKpQQhDmDivoZY3C930fVm7FYU6IkZk2Qi6nfWe3emVu7naM2wwLrcf&X-Amz-Signature=1d1b26eff0c58ceee8f3b1cf4bb0ac709b518b9beeda1c4f0e4b475e40f289b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFH2IZM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD7%2FheNknG7ehDb6AK4vejX4l%2BEdgHCrsOPBti7p04E6wIgIooV9vqIWaa1sFRYtxb9%2FMkw01P26i1W%2FStO7ZmGKWcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNkwY6T3YpaT5XzX1ircA%2BU2R8mMlPEXmrcgQQGazXRopsAnEcL%2B2JKX1%2BMbYCytSq7OErPMeaihYwU2TRHLpw8g3hu0JY5sPeXikoOXyniT3%2FADLGi2CuApEPeInGDpotat7f1S5tHmivkoLYhP0Ha5VWBA%2B7JQEwbepZvNb9%2FZrl6cTPprrQDnmZeOTP4D7AQQ5OCYAoM3jdFZ27wJ5qoS8vcxA21smvZgrsbHaQ%2F%2B49%2BAujWDpd4UrSUnOosAShGUR4NhaUWtvX8TQFxOSfy1qirolFrAltRHabF0Nkc1fk%2Bv54saPfdkiE8FM7ao2VoL6Ron5D1tumiULdWRJFEu1zJ6l8SflYWceeGKUqf6uxutaT8AkRWwSy584AXzY7CLhwD%2F0jNqAGW41BjSSwKpp2VA50x0rT%2F4JONFNwelbOlQP2smI%2FKNHrL1bckU%2B%2FDmNYVcr4v7aYx8r34l7OL1QH41Zvr683NFSUFtjLa3XIFVyp4XlMvCI%2BoKhFI%2BcIu15S7sp44WAurPmCudTwE0vTRXdM66rLQKzkr5tU5%2BDiA8K6cCcV152sq6vdYSrrikdUt2N%2FNlg2x%2BPyDk1u3L8scijt8ST2Z8Mguzfm7mwghbOLSBE3JVUevmdzWNPEvQ6yx3%2FOsSx8KXMNeU5r4GOqUB5Inov4Y4mz0R5eAvIz1T9%2B0AGjIFQCwooCWdZV1tzrbBjQ4ay%2BFOAv8bboFTF6s91ApMdxT0CUZeA5Yh3eFVCPkT%2FEGgiz%2BI%2FyqHoqcFZdDNeWapBbtoJSAqZehqpfzFaU0FoA5fsfI%2F4Kt4FsN5drIgfqVNpZ7sA7BNBYKpQQhDmDivoZY3C930fVm7FYU6IkZk2Qi6nfWe3emVu7naM2wwLrcf&X-Amz-Signature=7139b8e4524902ad32590c36854f060a5a6b5cb9fd4abb3dec7f495b95ce923a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFH2IZM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD7%2FheNknG7ehDb6AK4vejX4l%2BEdgHCrsOPBti7p04E6wIgIooV9vqIWaa1sFRYtxb9%2FMkw01P26i1W%2FStO7ZmGKWcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNkwY6T3YpaT5XzX1ircA%2BU2R8mMlPEXmrcgQQGazXRopsAnEcL%2B2JKX1%2BMbYCytSq7OErPMeaihYwU2TRHLpw8g3hu0JY5sPeXikoOXyniT3%2FADLGi2CuApEPeInGDpotat7f1S5tHmivkoLYhP0Ha5VWBA%2B7JQEwbepZvNb9%2FZrl6cTPprrQDnmZeOTP4D7AQQ5OCYAoM3jdFZ27wJ5qoS8vcxA21smvZgrsbHaQ%2F%2B49%2BAujWDpd4UrSUnOosAShGUR4NhaUWtvX8TQFxOSfy1qirolFrAltRHabF0Nkc1fk%2Bv54saPfdkiE8FM7ao2VoL6Ron5D1tumiULdWRJFEu1zJ6l8SflYWceeGKUqf6uxutaT8AkRWwSy584AXzY7CLhwD%2F0jNqAGW41BjSSwKpp2VA50x0rT%2F4JONFNwelbOlQP2smI%2FKNHrL1bckU%2B%2FDmNYVcr4v7aYx8r34l7OL1QH41Zvr683NFSUFtjLa3XIFVyp4XlMvCI%2BoKhFI%2BcIu15S7sp44WAurPmCudTwE0vTRXdM66rLQKzkr5tU5%2BDiA8K6cCcV152sq6vdYSrrikdUt2N%2FNlg2x%2BPyDk1u3L8scijt8ST2Z8Mguzfm7mwghbOLSBE3JVUevmdzWNPEvQ6yx3%2FOsSx8KXMNeU5r4GOqUB5Inov4Y4mz0R5eAvIz1T9%2B0AGjIFQCwooCWdZV1tzrbBjQ4ay%2BFOAv8bboFTF6s91ApMdxT0CUZeA5Yh3eFVCPkT%2FEGgiz%2BI%2FyqHoqcFZdDNeWapBbtoJSAqZehqpfzFaU0FoA5fsfI%2F4Kt4FsN5drIgfqVNpZ7sA7BNBYKpQQhDmDivoZY3C930fVm7FYU6IkZk2Qi6nfWe3emVu7naM2wwLrcf&X-Amz-Signature=e0ad762e1bfb9c61340bc816ca9075d2790401afebf079b00a22a3860fa9e199&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
