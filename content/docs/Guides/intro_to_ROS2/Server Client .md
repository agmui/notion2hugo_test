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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZXU5JF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDljKDxVIQzIqVy940POuSQ1OWm1x5G6%2BwzradVfr28mwIhAKzu0kDAADYenqltbCkBn3O7SYftLYfC%2B0kRMbzJzrBpKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2FzjGXZKS4dA10kMsq3AMaLtNREjhkIVCMnlye5A%2Bfq5EBxC77mcniHNwUXNU6PfIS9gx%2Fbgic6weq%2BGKFKe4TWWztjdGGbv3mSBL0yV%2F5k5W3R%2FIRvx9X1d5gjzfr6UJ3FelTE2%2BC9US1Dj6a1o2Oza%2BwUzO1HlB6WnAg5PtkFUwK36sH4c%2FyoEELm8NG6qnQ46LBBqePtgMiWGMq6F5BrtIxIm8tEEyhCOM4%2FyamcxbXOJxA1kyNRN%2BZZy0lL8Ad1xH4wfrkB5oOMi8APlk2W5ZAhKAq3wI1A7y61ioSMhG2FWQf826gO4adyLUf2PituJq3TiP%2BPpUN4LidWaJCMInOI%2FuIxQpWuzxNVUtazUA5IyQ3U4fhJRsJxzPnsB4QqpWmL0cdW0s7EbVDAofKAE8LqKc3QDiMJ5c%2F%2BegrhWY4M5WqMnZFoP0kWu0jG9yI1vVLhls5WZ9Q%2BegFMuYk%2B3k%2B6e9aRNGgPvQcd47CwsGairP%2FrlovfSnXYgLSsi7CI%2FOJkMQRiduzuBpKTKu43xnGXtkskKoK51jVIWVQWFRLuDt7bCiArOi2yNqay78x3tO51UnRDcn2fQKWJKGRCuJy52s2Nv9Cy7VZtHYJgudGawE9PsRvQW%2F6iCHhFuccNFOHtQFTn2ydvzDDsee%2BBjqkAfbYGkIpgt0KLd7QOXovLPDUrE%2BgwX1Oilq8D77aoPJpPbtoQ%2BD0OSpqI%2F9F1Tf4w%2BfKiGf%2Bly7HMsxL%2FVHAglOl4qYkQE0z2o1dF%2F0z%2F4Mf2mDbQr5C%2BwGDIZgTP7oQIR%2FXFJbwKvq7E5BEhg86gGCUEnAtAh%2FdYCVai9XOjdrg%2FyOxssgb6afh%2BMB3aJ2Vina4GF3nHH7iFDlUbokFpg3TCz%2FJ&X-Amz-Signature=30ad92396b140f425260df89d3899b02e9103b46a78602139b1e01574e09714a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZXU5JF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDljKDxVIQzIqVy940POuSQ1OWm1x5G6%2BwzradVfr28mwIhAKzu0kDAADYenqltbCkBn3O7SYftLYfC%2B0kRMbzJzrBpKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2FzjGXZKS4dA10kMsq3AMaLtNREjhkIVCMnlye5A%2Bfq5EBxC77mcniHNwUXNU6PfIS9gx%2Fbgic6weq%2BGKFKe4TWWztjdGGbv3mSBL0yV%2F5k5W3R%2FIRvx9X1d5gjzfr6UJ3FelTE2%2BC9US1Dj6a1o2Oza%2BwUzO1HlB6WnAg5PtkFUwK36sH4c%2FyoEELm8NG6qnQ46LBBqePtgMiWGMq6F5BrtIxIm8tEEyhCOM4%2FyamcxbXOJxA1kyNRN%2BZZy0lL8Ad1xH4wfrkB5oOMi8APlk2W5ZAhKAq3wI1A7y61ioSMhG2FWQf826gO4adyLUf2PituJq3TiP%2BPpUN4LidWaJCMInOI%2FuIxQpWuzxNVUtazUA5IyQ3U4fhJRsJxzPnsB4QqpWmL0cdW0s7EbVDAofKAE8LqKc3QDiMJ5c%2F%2BegrhWY4M5WqMnZFoP0kWu0jG9yI1vVLhls5WZ9Q%2BegFMuYk%2B3k%2B6e9aRNGgPvQcd47CwsGairP%2FrlovfSnXYgLSsi7CI%2FOJkMQRiduzuBpKTKu43xnGXtkskKoK51jVIWVQWFRLuDt7bCiArOi2yNqay78x3tO51UnRDcn2fQKWJKGRCuJy52s2Nv9Cy7VZtHYJgudGawE9PsRvQW%2F6iCHhFuccNFOHtQFTn2ydvzDDsee%2BBjqkAfbYGkIpgt0KLd7QOXovLPDUrE%2BgwX1Oilq8D77aoPJpPbtoQ%2BD0OSpqI%2F9F1Tf4w%2BfKiGf%2Bly7HMsxL%2FVHAglOl4qYkQE0z2o1dF%2F0z%2F4Mf2mDbQr5C%2BwGDIZgTP7oQIR%2FXFJbwKvq7E5BEhg86gGCUEnAtAh%2FdYCVai9XOjdrg%2FyOxssgb6afh%2BMB3aJ2Vina4GF3nHH7iFDlUbokFpg3TCz%2FJ&X-Amz-Signature=fbce6e9f90ad4c04bb27ce3c0ab7490f8160a0c3a91677bef1ff015a7649ea59&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZXU5JF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDljKDxVIQzIqVy940POuSQ1OWm1x5G6%2BwzradVfr28mwIhAKzu0kDAADYenqltbCkBn3O7SYftLYfC%2B0kRMbzJzrBpKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2FzjGXZKS4dA10kMsq3AMaLtNREjhkIVCMnlye5A%2Bfq5EBxC77mcniHNwUXNU6PfIS9gx%2Fbgic6weq%2BGKFKe4TWWztjdGGbv3mSBL0yV%2F5k5W3R%2FIRvx9X1d5gjzfr6UJ3FelTE2%2BC9US1Dj6a1o2Oza%2BwUzO1HlB6WnAg5PtkFUwK36sH4c%2FyoEELm8NG6qnQ46LBBqePtgMiWGMq6F5BrtIxIm8tEEyhCOM4%2FyamcxbXOJxA1kyNRN%2BZZy0lL8Ad1xH4wfrkB5oOMi8APlk2W5ZAhKAq3wI1A7y61ioSMhG2FWQf826gO4adyLUf2PituJq3TiP%2BPpUN4LidWaJCMInOI%2FuIxQpWuzxNVUtazUA5IyQ3U4fhJRsJxzPnsB4QqpWmL0cdW0s7EbVDAofKAE8LqKc3QDiMJ5c%2F%2BegrhWY4M5WqMnZFoP0kWu0jG9yI1vVLhls5WZ9Q%2BegFMuYk%2B3k%2B6e9aRNGgPvQcd47CwsGairP%2FrlovfSnXYgLSsi7CI%2FOJkMQRiduzuBpKTKu43xnGXtkskKoK51jVIWVQWFRLuDt7bCiArOi2yNqay78x3tO51UnRDcn2fQKWJKGRCuJy52s2Nv9Cy7VZtHYJgudGawE9PsRvQW%2F6iCHhFuccNFOHtQFTn2ydvzDDsee%2BBjqkAfbYGkIpgt0KLd7QOXovLPDUrE%2BgwX1Oilq8D77aoPJpPbtoQ%2BD0OSpqI%2F9F1Tf4w%2BfKiGf%2Bly7HMsxL%2FVHAglOl4qYkQE0z2o1dF%2F0z%2F4Mf2mDbQr5C%2BwGDIZgTP7oQIR%2FXFJbwKvq7E5BEhg86gGCUEnAtAh%2FdYCVai9XOjdrg%2FyOxssgb6afh%2BMB3aJ2Vina4GF3nHH7iFDlUbokFpg3TCz%2FJ&X-Amz-Signature=12c06fecb64249ca32d3c71bb00970fa32013b193abaf3fcc568f7f4eb5cfd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZXU5JF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDljKDxVIQzIqVy940POuSQ1OWm1x5G6%2BwzradVfr28mwIhAKzu0kDAADYenqltbCkBn3O7SYftLYfC%2B0kRMbzJzrBpKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2FzjGXZKS4dA10kMsq3AMaLtNREjhkIVCMnlye5A%2Bfq5EBxC77mcniHNwUXNU6PfIS9gx%2Fbgic6weq%2BGKFKe4TWWztjdGGbv3mSBL0yV%2F5k5W3R%2FIRvx9X1d5gjzfr6UJ3FelTE2%2BC9US1Dj6a1o2Oza%2BwUzO1HlB6WnAg5PtkFUwK36sH4c%2FyoEELm8NG6qnQ46LBBqePtgMiWGMq6F5BrtIxIm8tEEyhCOM4%2FyamcxbXOJxA1kyNRN%2BZZy0lL8Ad1xH4wfrkB5oOMi8APlk2W5ZAhKAq3wI1A7y61ioSMhG2FWQf826gO4adyLUf2PituJq3TiP%2BPpUN4LidWaJCMInOI%2FuIxQpWuzxNVUtazUA5IyQ3U4fhJRsJxzPnsB4QqpWmL0cdW0s7EbVDAofKAE8LqKc3QDiMJ5c%2F%2BegrhWY4M5WqMnZFoP0kWu0jG9yI1vVLhls5WZ9Q%2BegFMuYk%2B3k%2B6e9aRNGgPvQcd47CwsGairP%2FrlovfSnXYgLSsi7CI%2FOJkMQRiduzuBpKTKu43xnGXtkskKoK51jVIWVQWFRLuDt7bCiArOi2yNqay78x3tO51UnRDcn2fQKWJKGRCuJy52s2Nv9Cy7VZtHYJgudGawE9PsRvQW%2F6iCHhFuccNFOHtQFTn2ydvzDDsee%2BBjqkAfbYGkIpgt0KLd7QOXovLPDUrE%2BgwX1Oilq8D77aoPJpPbtoQ%2BD0OSpqI%2F9F1Tf4w%2BfKiGf%2Bly7HMsxL%2FVHAglOl4qYkQE0z2o1dF%2F0z%2F4Mf2mDbQr5C%2BwGDIZgTP7oQIR%2FXFJbwKvq7E5BEhg86gGCUEnAtAh%2FdYCVai9XOjdrg%2FyOxssgb6afh%2BMB3aJ2Vina4GF3nHH7iFDlUbokFpg3TCz%2FJ&X-Amz-Signature=a64652e0993adf847659174f310b0794958357ea90107176bde84ea0bbce3d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZXU5JF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDljKDxVIQzIqVy940POuSQ1OWm1x5G6%2BwzradVfr28mwIhAKzu0kDAADYenqltbCkBn3O7SYftLYfC%2B0kRMbzJzrBpKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2FzjGXZKS4dA10kMsq3AMaLtNREjhkIVCMnlye5A%2Bfq5EBxC77mcniHNwUXNU6PfIS9gx%2Fbgic6weq%2BGKFKe4TWWztjdGGbv3mSBL0yV%2F5k5W3R%2FIRvx9X1d5gjzfr6UJ3FelTE2%2BC9US1Dj6a1o2Oza%2BwUzO1HlB6WnAg5PtkFUwK36sH4c%2FyoEELm8NG6qnQ46LBBqePtgMiWGMq6F5BrtIxIm8tEEyhCOM4%2FyamcxbXOJxA1kyNRN%2BZZy0lL8Ad1xH4wfrkB5oOMi8APlk2W5ZAhKAq3wI1A7y61ioSMhG2FWQf826gO4adyLUf2PituJq3TiP%2BPpUN4LidWaJCMInOI%2FuIxQpWuzxNVUtazUA5IyQ3U4fhJRsJxzPnsB4QqpWmL0cdW0s7EbVDAofKAE8LqKc3QDiMJ5c%2F%2BegrhWY4M5WqMnZFoP0kWu0jG9yI1vVLhls5WZ9Q%2BegFMuYk%2B3k%2B6e9aRNGgPvQcd47CwsGairP%2FrlovfSnXYgLSsi7CI%2FOJkMQRiduzuBpKTKu43xnGXtkskKoK51jVIWVQWFRLuDt7bCiArOi2yNqay78x3tO51UnRDcn2fQKWJKGRCuJy52s2Nv9Cy7VZtHYJgudGawE9PsRvQW%2F6iCHhFuccNFOHtQFTn2ydvzDDsee%2BBjqkAfbYGkIpgt0KLd7QOXovLPDUrE%2BgwX1Oilq8D77aoPJpPbtoQ%2BD0OSpqI%2F9F1Tf4w%2BfKiGf%2Bly7HMsxL%2FVHAglOl4qYkQE0z2o1dF%2F0z%2F4Mf2mDbQr5C%2BwGDIZgTP7oQIR%2FXFJbwKvq7E5BEhg86gGCUEnAtAh%2FdYCVai9XOjdrg%2FyOxssgb6afh%2BMB3aJ2Vina4GF3nHH7iFDlUbokFpg3TCz%2FJ&X-Amz-Signature=1db88eb40508389c71720e7783f84da81aa8217f6f0fe1051cc63f99332b5468&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
