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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUVPRHM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZC7UDKn488AmAVenMLi4JU5t6uSKEETSq4ZyLDEG4AIhAKSRJrbZR4HkWja0bdrfniMi6RMRXCa%2B7mguw2NCjmGbKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfInbfHDovkRmYfqsq3AOdVF8Gx3Ozbc4IROv%2FEdBHGz4qZ4Qj2cDUvqaaSLxIaeWMcvL29I%2BAcuWs9l2ObinFWOfy3Ywf4nWSK1m1XuD3efbHnG1t76ITi3%2FGDA2VfLx3g85b3epw59GbDnr%2FwZjSWnV5DpCKFHUVrEGIFrK5jXYivIYItystJkd6LDuo3vxS44d7cRXdiMlX%2FZRyS9yoaY7mGAO07oQbPsUnF6asdtyE1jedMUNojq9e98deafbHCjy9h9vL8ZZf8q37IPj003wTKKbbEOqoNnv1ZvlS1ihG7543D5ezxmn4mr4xW59UbS9jkGut3Mvl%2FVvx0Hh%2BNgOL1IPIZ1GeBy3DwLWKFrXNKkVnje3492ewj2x63Gqejtz9KMcgidoJiRhDG3gNmHIozhsteQNh%2FRBMc%2FoMxRdXMNtXUitlr30SJ8MpSf9N4jxUooJhomWEJ7awEhUA65%2BT57WbdQR7grjFwlWBf365lcT9id3AFJ%2BrbdwEHNo9WDbh5S37pr1Rr4IyBS%2FCvZ08b8nx5Ckc1MZbZb56D94IuzsFlK1NMaWVQN3bW3w1Snqf5Xx5rP7kejBFoKQ7rKBzjHy%2Fz9WNS0RT6HARs1Vwqmqn7WhbKOJFzgsU0Zb8xxifLd9pP36mgDCA65XDBjqkAdHWZmwfFX1tK%2F7sJPuiYX2BsKHXWJD9OGM03nDGOVAD886j9I1mlRxGBp%2B4q4jNNOVZaxOmzlkGnYLWxDkZSALO78M1g5W5vo6hsafFg5ZmNffs4FpleeurI4LXhgmC7I6%2F%2B1wnxgSogGYaKN5d4zm5HTOmR94GzremyJYxsgeJVDyaiJUSxBnacNsKCn6BiOrdXg1T3R9peVxGXBYkOzs2T7Ln&X-Amz-Signature=aef77f00c0c7fb306109b17dd316dc1c4950844a4f3998e0e2649320d5f7f5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUVPRHM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZC7UDKn488AmAVenMLi4JU5t6uSKEETSq4ZyLDEG4AIhAKSRJrbZR4HkWja0bdrfniMi6RMRXCa%2B7mguw2NCjmGbKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfInbfHDovkRmYfqsq3AOdVF8Gx3Ozbc4IROv%2FEdBHGz4qZ4Qj2cDUvqaaSLxIaeWMcvL29I%2BAcuWs9l2ObinFWOfy3Ywf4nWSK1m1XuD3efbHnG1t76ITi3%2FGDA2VfLx3g85b3epw59GbDnr%2FwZjSWnV5DpCKFHUVrEGIFrK5jXYivIYItystJkd6LDuo3vxS44d7cRXdiMlX%2FZRyS9yoaY7mGAO07oQbPsUnF6asdtyE1jedMUNojq9e98deafbHCjy9h9vL8ZZf8q37IPj003wTKKbbEOqoNnv1ZvlS1ihG7543D5ezxmn4mr4xW59UbS9jkGut3Mvl%2FVvx0Hh%2BNgOL1IPIZ1GeBy3DwLWKFrXNKkVnje3492ewj2x63Gqejtz9KMcgidoJiRhDG3gNmHIozhsteQNh%2FRBMc%2FoMxRdXMNtXUitlr30SJ8MpSf9N4jxUooJhomWEJ7awEhUA65%2BT57WbdQR7grjFwlWBf365lcT9id3AFJ%2BrbdwEHNo9WDbh5S37pr1Rr4IyBS%2FCvZ08b8nx5Ckc1MZbZb56D94IuzsFlK1NMaWVQN3bW3w1Snqf5Xx5rP7kejBFoKQ7rKBzjHy%2Fz9WNS0RT6HARs1Vwqmqn7WhbKOJFzgsU0Zb8xxifLd9pP36mgDCA65XDBjqkAdHWZmwfFX1tK%2F7sJPuiYX2BsKHXWJD9OGM03nDGOVAD886j9I1mlRxGBp%2B4q4jNNOVZaxOmzlkGnYLWxDkZSALO78M1g5W5vo6hsafFg5ZmNffs4FpleeurI4LXhgmC7I6%2F%2B1wnxgSogGYaKN5d4zm5HTOmR94GzremyJYxsgeJVDyaiJUSxBnacNsKCn6BiOrdXg1T3R9peVxGXBYkOzs2T7Ln&X-Amz-Signature=10382a0e61bc2bd47de605300f691c6ddbe7f143ee9447e2ff39de0a3e309200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUVPRHM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZC7UDKn488AmAVenMLi4JU5t6uSKEETSq4ZyLDEG4AIhAKSRJrbZR4HkWja0bdrfniMi6RMRXCa%2B7mguw2NCjmGbKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfInbfHDovkRmYfqsq3AOdVF8Gx3Ozbc4IROv%2FEdBHGz4qZ4Qj2cDUvqaaSLxIaeWMcvL29I%2BAcuWs9l2ObinFWOfy3Ywf4nWSK1m1XuD3efbHnG1t76ITi3%2FGDA2VfLx3g85b3epw59GbDnr%2FwZjSWnV5DpCKFHUVrEGIFrK5jXYivIYItystJkd6LDuo3vxS44d7cRXdiMlX%2FZRyS9yoaY7mGAO07oQbPsUnF6asdtyE1jedMUNojq9e98deafbHCjy9h9vL8ZZf8q37IPj003wTKKbbEOqoNnv1ZvlS1ihG7543D5ezxmn4mr4xW59UbS9jkGut3Mvl%2FVvx0Hh%2BNgOL1IPIZ1GeBy3DwLWKFrXNKkVnje3492ewj2x63Gqejtz9KMcgidoJiRhDG3gNmHIozhsteQNh%2FRBMc%2FoMxRdXMNtXUitlr30SJ8MpSf9N4jxUooJhomWEJ7awEhUA65%2BT57WbdQR7grjFwlWBf365lcT9id3AFJ%2BrbdwEHNo9WDbh5S37pr1Rr4IyBS%2FCvZ08b8nx5Ckc1MZbZb56D94IuzsFlK1NMaWVQN3bW3w1Snqf5Xx5rP7kejBFoKQ7rKBzjHy%2Fz9WNS0RT6HARs1Vwqmqn7WhbKOJFzgsU0Zb8xxifLd9pP36mgDCA65XDBjqkAdHWZmwfFX1tK%2F7sJPuiYX2BsKHXWJD9OGM03nDGOVAD886j9I1mlRxGBp%2B4q4jNNOVZaxOmzlkGnYLWxDkZSALO78M1g5W5vo6hsafFg5ZmNffs4FpleeurI4LXhgmC7I6%2F%2B1wnxgSogGYaKN5d4zm5HTOmR94GzremyJYxsgeJVDyaiJUSxBnacNsKCn6BiOrdXg1T3R9peVxGXBYkOzs2T7Ln&X-Amz-Signature=c5e24f8db00b3c5b168a04f9bf7acf92d1f2e66b56a4bc7db792fe2ae7abe3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUVPRHM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZC7UDKn488AmAVenMLi4JU5t6uSKEETSq4ZyLDEG4AIhAKSRJrbZR4HkWja0bdrfniMi6RMRXCa%2B7mguw2NCjmGbKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfInbfHDovkRmYfqsq3AOdVF8Gx3Ozbc4IROv%2FEdBHGz4qZ4Qj2cDUvqaaSLxIaeWMcvL29I%2BAcuWs9l2ObinFWOfy3Ywf4nWSK1m1XuD3efbHnG1t76ITi3%2FGDA2VfLx3g85b3epw59GbDnr%2FwZjSWnV5DpCKFHUVrEGIFrK5jXYivIYItystJkd6LDuo3vxS44d7cRXdiMlX%2FZRyS9yoaY7mGAO07oQbPsUnF6asdtyE1jedMUNojq9e98deafbHCjy9h9vL8ZZf8q37IPj003wTKKbbEOqoNnv1ZvlS1ihG7543D5ezxmn4mr4xW59UbS9jkGut3Mvl%2FVvx0Hh%2BNgOL1IPIZ1GeBy3DwLWKFrXNKkVnje3492ewj2x63Gqejtz9KMcgidoJiRhDG3gNmHIozhsteQNh%2FRBMc%2FoMxRdXMNtXUitlr30SJ8MpSf9N4jxUooJhomWEJ7awEhUA65%2BT57WbdQR7grjFwlWBf365lcT9id3AFJ%2BrbdwEHNo9WDbh5S37pr1Rr4IyBS%2FCvZ08b8nx5Ckc1MZbZb56D94IuzsFlK1NMaWVQN3bW3w1Snqf5Xx5rP7kejBFoKQ7rKBzjHy%2Fz9WNS0RT6HARs1Vwqmqn7WhbKOJFzgsU0Zb8xxifLd9pP36mgDCA65XDBjqkAdHWZmwfFX1tK%2F7sJPuiYX2BsKHXWJD9OGM03nDGOVAD886j9I1mlRxGBp%2B4q4jNNOVZaxOmzlkGnYLWxDkZSALO78M1g5W5vo6hsafFg5ZmNffs4FpleeurI4LXhgmC7I6%2F%2B1wnxgSogGYaKN5d4zm5HTOmR94GzremyJYxsgeJVDyaiJUSxBnacNsKCn6BiOrdXg1T3R9peVxGXBYkOzs2T7Ln&X-Amz-Signature=c9ccec8d348c6855bc3f67d51a2e23676c96a14f0ebe0fa7020ad2812ac9ba52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUVPRHM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZC7UDKn488AmAVenMLi4JU5t6uSKEETSq4ZyLDEG4AIhAKSRJrbZR4HkWja0bdrfniMi6RMRXCa%2B7mguw2NCjmGbKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfInbfHDovkRmYfqsq3AOdVF8Gx3Ozbc4IROv%2FEdBHGz4qZ4Qj2cDUvqaaSLxIaeWMcvL29I%2BAcuWs9l2ObinFWOfy3Ywf4nWSK1m1XuD3efbHnG1t76ITi3%2FGDA2VfLx3g85b3epw59GbDnr%2FwZjSWnV5DpCKFHUVrEGIFrK5jXYivIYItystJkd6LDuo3vxS44d7cRXdiMlX%2FZRyS9yoaY7mGAO07oQbPsUnF6asdtyE1jedMUNojq9e98deafbHCjy9h9vL8ZZf8q37IPj003wTKKbbEOqoNnv1ZvlS1ihG7543D5ezxmn4mr4xW59UbS9jkGut3Mvl%2FVvx0Hh%2BNgOL1IPIZ1GeBy3DwLWKFrXNKkVnje3492ewj2x63Gqejtz9KMcgidoJiRhDG3gNmHIozhsteQNh%2FRBMc%2FoMxRdXMNtXUitlr30SJ8MpSf9N4jxUooJhomWEJ7awEhUA65%2BT57WbdQR7grjFwlWBf365lcT9id3AFJ%2BrbdwEHNo9WDbh5S37pr1Rr4IyBS%2FCvZ08b8nx5Ckc1MZbZb56D94IuzsFlK1NMaWVQN3bW3w1Snqf5Xx5rP7kejBFoKQ7rKBzjHy%2Fz9WNS0RT6HARs1Vwqmqn7WhbKOJFzgsU0Zb8xxifLd9pP36mgDCA65XDBjqkAdHWZmwfFX1tK%2F7sJPuiYX2BsKHXWJD9OGM03nDGOVAD886j9I1mlRxGBp%2B4q4jNNOVZaxOmzlkGnYLWxDkZSALO78M1g5W5vo6hsafFg5ZmNffs4FpleeurI4LXhgmC7I6%2F%2B1wnxgSogGYaKN5d4zm5HTOmR94GzremyJYxsgeJVDyaiJUSxBnacNsKCn6BiOrdXg1T3R9peVxGXBYkOzs2T7Ln&X-Amz-Signature=ba3102fb4e0916cd5b2e42dbf3ba751ab968cd90679032d9987578a441c37a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
