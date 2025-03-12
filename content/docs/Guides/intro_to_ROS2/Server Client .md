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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22FZ6HX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVSCEsm3i1NhM8KcNMBLFOdQUj9hBEYUBC%2FjdAwfgltwIgA4NvJHaNMyaogLUtGXhThV5NtgpEiHY9TWYQDRI9xvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhkPwk%2B2h1H89wkCrcA5HGA5qYmefzQrGbRBskeV%2FYxXdJtN1%2Fys0lm8yALw1qLEx4T3swYrSeghpYvCIhIWUY50gdEMKhxBFLHG%2Fln%2BS64qVRxifZqBbbkJ90fyrhYcU554SHHydJoRXR0WhjcucBtGDPxpNqbpbnMsMoqb9eqC2J8uGv5HMexnxq8arIPiEssvrPY0aBfmMMp7rFlr6ZremVUMGDAF%2Bf3t2SP%2FYgLbuZK5o9zjYWua%2Blu3wfrZuPwXK3hOrOHsx%2BKTfclFV5%2BV9sI6LwvT%2Fb%2B1Gzb9CM7RPw7FEzzlsij%2BvmI4mELOMi9ivuUl1YhamBZEFW7ioimCTMrHqUBzRnQeX4vGlTLtfQBK%2BGxGx7ABNkAuKNMGXurb8RMd1jJkdfxRH%2F4bV%2FfOeNTdtH0mo3s6alq4ocrjorsBzLkS5z90pFDk12lDWGaAClYeGnJ2Pih7lmxzwDLfxkBrROb3LpURCcUMBQScBg%2FW97yqjaNk892JIlrN0OFCyHQrJhGErLwCQP%2FMxdaXahCiscQHTszCzUXgD3q%2BevwUCwc2b5vlNiRxB8V1xhfkbk9ynrp3Nw4aOf1ZVC2tTE9QHHQNnVdUl0sACPkFWt9Q87%2FM%2FrLnnfvyhcQ8JXdM%2BQP8chMzvnMNLDx74GOqUBxRu7TcTW60xxQzWepBPq11HxQjyDNXBBjHZN8x6bexH2vwuC0rKXfsyWuXmAF%2FJQRDekB1RLaiTogT1Zvg%2FAyVId77Iixf9NyINU%2FJ78bYvKJ3myAy%2FUN4QpG5Ohe93z041QKGHlkgoJP%2FM0Gv9l%2BMz7u5it9s5dfkA3xKE08SypCeOYBGC9dtJ5EyJUic2zrYOZrPjZm7gUj55O21Qh2j%2BHKZd%2F&X-Amz-Signature=5ef3b95e1217cb1f5f6c8929d5662f757574013777b64508f25135bf786c1223&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22FZ6HX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVSCEsm3i1NhM8KcNMBLFOdQUj9hBEYUBC%2FjdAwfgltwIgA4NvJHaNMyaogLUtGXhThV5NtgpEiHY9TWYQDRI9xvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhkPwk%2B2h1H89wkCrcA5HGA5qYmefzQrGbRBskeV%2FYxXdJtN1%2Fys0lm8yALw1qLEx4T3swYrSeghpYvCIhIWUY50gdEMKhxBFLHG%2Fln%2BS64qVRxifZqBbbkJ90fyrhYcU554SHHydJoRXR0WhjcucBtGDPxpNqbpbnMsMoqb9eqC2J8uGv5HMexnxq8arIPiEssvrPY0aBfmMMp7rFlr6ZremVUMGDAF%2Bf3t2SP%2FYgLbuZK5o9zjYWua%2Blu3wfrZuPwXK3hOrOHsx%2BKTfclFV5%2BV9sI6LwvT%2Fb%2B1Gzb9CM7RPw7FEzzlsij%2BvmI4mELOMi9ivuUl1YhamBZEFW7ioimCTMrHqUBzRnQeX4vGlTLtfQBK%2BGxGx7ABNkAuKNMGXurb8RMd1jJkdfxRH%2F4bV%2FfOeNTdtH0mo3s6alq4ocrjorsBzLkS5z90pFDk12lDWGaAClYeGnJ2Pih7lmxzwDLfxkBrROb3LpURCcUMBQScBg%2FW97yqjaNk892JIlrN0OFCyHQrJhGErLwCQP%2FMxdaXahCiscQHTszCzUXgD3q%2BevwUCwc2b5vlNiRxB8V1xhfkbk9ynrp3Nw4aOf1ZVC2tTE9QHHQNnVdUl0sACPkFWt9Q87%2FM%2FrLnnfvyhcQ8JXdM%2BQP8chMzvnMNLDx74GOqUBxRu7TcTW60xxQzWepBPq11HxQjyDNXBBjHZN8x6bexH2vwuC0rKXfsyWuXmAF%2FJQRDekB1RLaiTogT1Zvg%2FAyVId77Iixf9NyINU%2FJ78bYvKJ3myAy%2FUN4QpG5Ohe93z041QKGHlkgoJP%2FM0Gv9l%2BMz7u5it9s5dfkA3xKE08SypCeOYBGC9dtJ5EyJUic2zrYOZrPjZm7gUj55O21Qh2j%2BHKZd%2F&X-Amz-Signature=eae3c70ff3e95d60ec792787a246b7e2783a70d0dfa810d72d8afff4315decf5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22FZ6HX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVSCEsm3i1NhM8KcNMBLFOdQUj9hBEYUBC%2FjdAwfgltwIgA4NvJHaNMyaogLUtGXhThV5NtgpEiHY9TWYQDRI9xvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhkPwk%2B2h1H89wkCrcA5HGA5qYmefzQrGbRBskeV%2FYxXdJtN1%2Fys0lm8yALw1qLEx4T3swYrSeghpYvCIhIWUY50gdEMKhxBFLHG%2Fln%2BS64qVRxifZqBbbkJ90fyrhYcU554SHHydJoRXR0WhjcucBtGDPxpNqbpbnMsMoqb9eqC2J8uGv5HMexnxq8arIPiEssvrPY0aBfmMMp7rFlr6ZremVUMGDAF%2Bf3t2SP%2FYgLbuZK5o9zjYWua%2Blu3wfrZuPwXK3hOrOHsx%2BKTfclFV5%2BV9sI6LwvT%2Fb%2B1Gzb9CM7RPw7FEzzlsij%2BvmI4mELOMi9ivuUl1YhamBZEFW7ioimCTMrHqUBzRnQeX4vGlTLtfQBK%2BGxGx7ABNkAuKNMGXurb8RMd1jJkdfxRH%2F4bV%2FfOeNTdtH0mo3s6alq4ocrjorsBzLkS5z90pFDk12lDWGaAClYeGnJ2Pih7lmxzwDLfxkBrROb3LpURCcUMBQScBg%2FW97yqjaNk892JIlrN0OFCyHQrJhGErLwCQP%2FMxdaXahCiscQHTszCzUXgD3q%2BevwUCwc2b5vlNiRxB8V1xhfkbk9ynrp3Nw4aOf1ZVC2tTE9QHHQNnVdUl0sACPkFWt9Q87%2FM%2FrLnnfvyhcQ8JXdM%2BQP8chMzvnMNLDx74GOqUBxRu7TcTW60xxQzWepBPq11HxQjyDNXBBjHZN8x6bexH2vwuC0rKXfsyWuXmAF%2FJQRDekB1RLaiTogT1Zvg%2FAyVId77Iixf9NyINU%2FJ78bYvKJ3myAy%2FUN4QpG5Ohe93z041QKGHlkgoJP%2FM0Gv9l%2BMz7u5it9s5dfkA3xKE08SypCeOYBGC9dtJ5EyJUic2zrYOZrPjZm7gUj55O21Qh2j%2BHKZd%2F&X-Amz-Signature=9b0bdae9e9b18ff6f6be3908501aa9fcd88d59cd4c3031595c1f17b5a6f42cab&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22FZ6HX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVSCEsm3i1NhM8KcNMBLFOdQUj9hBEYUBC%2FjdAwfgltwIgA4NvJHaNMyaogLUtGXhThV5NtgpEiHY9TWYQDRI9xvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhkPwk%2B2h1H89wkCrcA5HGA5qYmefzQrGbRBskeV%2FYxXdJtN1%2Fys0lm8yALw1qLEx4T3swYrSeghpYvCIhIWUY50gdEMKhxBFLHG%2Fln%2BS64qVRxifZqBbbkJ90fyrhYcU554SHHydJoRXR0WhjcucBtGDPxpNqbpbnMsMoqb9eqC2J8uGv5HMexnxq8arIPiEssvrPY0aBfmMMp7rFlr6ZremVUMGDAF%2Bf3t2SP%2FYgLbuZK5o9zjYWua%2Blu3wfrZuPwXK3hOrOHsx%2BKTfclFV5%2BV9sI6LwvT%2Fb%2B1Gzb9CM7RPw7FEzzlsij%2BvmI4mELOMi9ivuUl1YhamBZEFW7ioimCTMrHqUBzRnQeX4vGlTLtfQBK%2BGxGx7ABNkAuKNMGXurb8RMd1jJkdfxRH%2F4bV%2FfOeNTdtH0mo3s6alq4ocrjorsBzLkS5z90pFDk12lDWGaAClYeGnJ2Pih7lmxzwDLfxkBrROb3LpURCcUMBQScBg%2FW97yqjaNk892JIlrN0OFCyHQrJhGErLwCQP%2FMxdaXahCiscQHTszCzUXgD3q%2BevwUCwc2b5vlNiRxB8V1xhfkbk9ynrp3Nw4aOf1ZVC2tTE9QHHQNnVdUl0sACPkFWt9Q87%2FM%2FrLnnfvyhcQ8JXdM%2BQP8chMzvnMNLDx74GOqUBxRu7TcTW60xxQzWepBPq11HxQjyDNXBBjHZN8x6bexH2vwuC0rKXfsyWuXmAF%2FJQRDekB1RLaiTogT1Zvg%2FAyVId77Iixf9NyINU%2FJ78bYvKJ3myAy%2FUN4QpG5Ohe93z041QKGHlkgoJP%2FM0Gv9l%2BMz7u5it9s5dfkA3xKE08SypCeOYBGC9dtJ5EyJUic2zrYOZrPjZm7gUj55O21Qh2j%2BHKZd%2F&X-Amz-Signature=37456fdd72ffafe6116d5affd3fc3eeb3cf2bd850715f8ed5a31f80862be3c49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22FZ6HX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVSCEsm3i1NhM8KcNMBLFOdQUj9hBEYUBC%2FjdAwfgltwIgA4NvJHaNMyaogLUtGXhThV5NtgpEiHY9TWYQDRI9xvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhkPwk%2B2h1H89wkCrcA5HGA5qYmefzQrGbRBskeV%2FYxXdJtN1%2Fys0lm8yALw1qLEx4T3swYrSeghpYvCIhIWUY50gdEMKhxBFLHG%2Fln%2BS64qVRxifZqBbbkJ90fyrhYcU554SHHydJoRXR0WhjcucBtGDPxpNqbpbnMsMoqb9eqC2J8uGv5HMexnxq8arIPiEssvrPY0aBfmMMp7rFlr6ZremVUMGDAF%2Bf3t2SP%2FYgLbuZK5o9zjYWua%2Blu3wfrZuPwXK3hOrOHsx%2BKTfclFV5%2BV9sI6LwvT%2Fb%2B1Gzb9CM7RPw7FEzzlsij%2BvmI4mELOMi9ivuUl1YhamBZEFW7ioimCTMrHqUBzRnQeX4vGlTLtfQBK%2BGxGx7ABNkAuKNMGXurb8RMd1jJkdfxRH%2F4bV%2FfOeNTdtH0mo3s6alq4ocrjorsBzLkS5z90pFDk12lDWGaAClYeGnJ2Pih7lmxzwDLfxkBrROb3LpURCcUMBQScBg%2FW97yqjaNk892JIlrN0OFCyHQrJhGErLwCQP%2FMxdaXahCiscQHTszCzUXgD3q%2BevwUCwc2b5vlNiRxB8V1xhfkbk9ynrp3Nw4aOf1ZVC2tTE9QHHQNnVdUl0sACPkFWt9Q87%2FM%2FrLnnfvyhcQ8JXdM%2BQP8chMzvnMNLDx74GOqUBxRu7TcTW60xxQzWepBPq11HxQjyDNXBBjHZN8x6bexH2vwuC0rKXfsyWuXmAF%2FJQRDekB1RLaiTogT1Zvg%2FAyVId77Iixf9NyINU%2FJ78bYvKJ3myAy%2FUN4QpG5Ohe93z041QKGHlkgoJP%2FM0Gv9l%2BMz7u5it9s5dfkA3xKE08SypCeOYBGC9dtJ5EyJUic2zrYOZrPjZm7gUj55O21Qh2j%2BHKZd%2F&X-Amz-Signature=eb993c014a92b0473b79f338e5de01e0991def02c0a127d9f25339b7b19d79e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
