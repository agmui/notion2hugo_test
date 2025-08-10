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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPILNIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnRmACWcqsOAhjaoseS4vS9IwOkfFLhkPsM4HhmdHw6wIgZbKRb%2BzcQzTq2P2Ib7Gj6uSfR2zAAYa7vcNdljsQvAAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vI69vZ%2FgMuRUpjCrcA2BHX%2Fj8KeeLFuzKDjRPIWw19gX6awGrlVQRpeL6MvQpH%2FBOSoH%2FBz%2Bh%2BVj8ZC3K%2BM%2FSsSEBzfi6vVPcGHvsZwoTN7c1bMXhwF3BR62NZX0eugrmj3WKWE026WT%2BWT1jRV3ItpT7LWB56%2FqgB7CiiHYrkmm9%2BYpPLHmt9IxII0nTZb9UurpqiwnX7b76hfoOtHrz6r8oGHiUKnbzE90a7NxBLw%2FpF8S1H4mkXSpcqOxCSgo5k4iLaMMXgKYXjRDO7N2WZwc0y2bJdrJYMBbAvVB6eR4qKgRLIcMsoTizna0YAHzb1yovBTOLsKh6vXikha2eNPrOHqbJm245aLuZ%2Bl4TzdwZ1QMwLJfxgiXM%2Bci3Jy5iEncgbCs1Un9s9j1PxIn9%2BKXPh%2BzHJ9FyEaTkPKAglG5oMdAJLFCoLK00VAh9ZuWpdgdIH7ZBIomM6kuWbwY83f7XbQ64oCvUuH%2FeMaGZJC%2FF5rqgP61zcAd5iFgXxqq1D6u9csW0Gx2%2FXA7jtiYmPCaJqt%2BMSYyZ0cVM2V2WbT%2BMPwPN9RnKtjAN6IAwDzfW3NL9D8IIMmU0vPMdQ4Ik84cku%2FopBzHaTPlDWgG3LFPk37i3cZejW%2Fhz5qehHQWxcAAFK4yMFYM%2BMJa748QGOqUBtgK7RX0HoDNWDil49dGazfYsDQbv8n5ZXiqB8sgJpb0s2KsK5D%2FPdogLNj4IwooR0iigdXjjTXkEFj9i1Azl%2BoriSnE8Uu%2FTntygAgk6NN2UaajnxDaqL0T6Fm1jvc1m%2B78p55kz7D9zz5wJ54UZH5nNej1BjAh%2FVPUu3Bzpd0jUQJu8VDPVWNogCWsR%2FPrLRg14TiKp4vB62bpvGuvsZAXWsTBg&X-Amz-Signature=21c3764c8e1a8544a3572652c66c96dbaa0709e28053a0bdf33586895f63206c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPILNIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnRmACWcqsOAhjaoseS4vS9IwOkfFLhkPsM4HhmdHw6wIgZbKRb%2BzcQzTq2P2Ib7Gj6uSfR2zAAYa7vcNdljsQvAAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vI69vZ%2FgMuRUpjCrcA2BHX%2Fj8KeeLFuzKDjRPIWw19gX6awGrlVQRpeL6MvQpH%2FBOSoH%2FBz%2Bh%2BVj8ZC3K%2BM%2FSsSEBzfi6vVPcGHvsZwoTN7c1bMXhwF3BR62NZX0eugrmj3WKWE026WT%2BWT1jRV3ItpT7LWB56%2FqgB7CiiHYrkmm9%2BYpPLHmt9IxII0nTZb9UurpqiwnX7b76hfoOtHrz6r8oGHiUKnbzE90a7NxBLw%2FpF8S1H4mkXSpcqOxCSgo5k4iLaMMXgKYXjRDO7N2WZwc0y2bJdrJYMBbAvVB6eR4qKgRLIcMsoTizna0YAHzb1yovBTOLsKh6vXikha2eNPrOHqbJm245aLuZ%2Bl4TzdwZ1QMwLJfxgiXM%2Bci3Jy5iEncgbCs1Un9s9j1PxIn9%2BKXPh%2BzHJ9FyEaTkPKAglG5oMdAJLFCoLK00VAh9ZuWpdgdIH7ZBIomM6kuWbwY83f7XbQ64oCvUuH%2FeMaGZJC%2FF5rqgP61zcAd5iFgXxqq1D6u9csW0Gx2%2FXA7jtiYmPCaJqt%2BMSYyZ0cVM2V2WbT%2BMPwPN9RnKtjAN6IAwDzfW3NL9D8IIMmU0vPMdQ4Ik84cku%2FopBzHaTPlDWgG3LFPk37i3cZejW%2Fhz5qehHQWxcAAFK4yMFYM%2BMJa748QGOqUBtgK7RX0HoDNWDil49dGazfYsDQbv8n5ZXiqB8sgJpb0s2KsK5D%2FPdogLNj4IwooR0iigdXjjTXkEFj9i1Azl%2BoriSnE8Uu%2FTntygAgk6NN2UaajnxDaqL0T6Fm1jvc1m%2B78p55kz7D9zz5wJ54UZH5nNej1BjAh%2FVPUu3Bzpd0jUQJu8VDPVWNogCWsR%2FPrLRg14TiKp4vB62bpvGuvsZAXWsTBg&X-Amz-Signature=11508bfe8b04b56403d3dce5a42c9622d41c356b8682361c156e7755bfd5948c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPILNIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnRmACWcqsOAhjaoseS4vS9IwOkfFLhkPsM4HhmdHw6wIgZbKRb%2BzcQzTq2P2Ib7Gj6uSfR2zAAYa7vcNdljsQvAAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vI69vZ%2FgMuRUpjCrcA2BHX%2Fj8KeeLFuzKDjRPIWw19gX6awGrlVQRpeL6MvQpH%2FBOSoH%2FBz%2Bh%2BVj8ZC3K%2BM%2FSsSEBzfi6vVPcGHvsZwoTN7c1bMXhwF3BR62NZX0eugrmj3WKWE026WT%2BWT1jRV3ItpT7LWB56%2FqgB7CiiHYrkmm9%2BYpPLHmt9IxII0nTZb9UurpqiwnX7b76hfoOtHrz6r8oGHiUKnbzE90a7NxBLw%2FpF8S1H4mkXSpcqOxCSgo5k4iLaMMXgKYXjRDO7N2WZwc0y2bJdrJYMBbAvVB6eR4qKgRLIcMsoTizna0YAHzb1yovBTOLsKh6vXikha2eNPrOHqbJm245aLuZ%2Bl4TzdwZ1QMwLJfxgiXM%2Bci3Jy5iEncgbCs1Un9s9j1PxIn9%2BKXPh%2BzHJ9FyEaTkPKAglG5oMdAJLFCoLK00VAh9ZuWpdgdIH7ZBIomM6kuWbwY83f7XbQ64oCvUuH%2FeMaGZJC%2FF5rqgP61zcAd5iFgXxqq1D6u9csW0Gx2%2FXA7jtiYmPCaJqt%2BMSYyZ0cVM2V2WbT%2BMPwPN9RnKtjAN6IAwDzfW3NL9D8IIMmU0vPMdQ4Ik84cku%2FopBzHaTPlDWgG3LFPk37i3cZejW%2Fhz5qehHQWxcAAFK4yMFYM%2BMJa748QGOqUBtgK7RX0HoDNWDil49dGazfYsDQbv8n5ZXiqB8sgJpb0s2KsK5D%2FPdogLNj4IwooR0iigdXjjTXkEFj9i1Azl%2BoriSnE8Uu%2FTntygAgk6NN2UaajnxDaqL0T6Fm1jvc1m%2B78p55kz7D9zz5wJ54UZH5nNej1BjAh%2FVPUu3Bzpd0jUQJu8VDPVWNogCWsR%2FPrLRg14TiKp4vB62bpvGuvsZAXWsTBg&X-Amz-Signature=e6534902d0b6134dfd32c9c5a92f8ce441fcbf81284555dfb5dbbc066f55dcc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPILNIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnRmACWcqsOAhjaoseS4vS9IwOkfFLhkPsM4HhmdHw6wIgZbKRb%2BzcQzTq2P2Ib7Gj6uSfR2zAAYa7vcNdljsQvAAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vI69vZ%2FgMuRUpjCrcA2BHX%2Fj8KeeLFuzKDjRPIWw19gX6awGrlVQRpeL6MvQpH%2FBOSoH%2FBz%2Bh%2BVj8ZC3K%2BM%2FSsSEBzfi6vVPcGHvsZwoTN7c1bMXhwF3BR62NZX0eugrmj3WKWE026WT%2BWT1jRV3ItpT7LWB56%2FqgB7CiiHYrkmm9%2BYpPLHmt9IxII0nTZb9UurpqiwnX7b76hfoOtHrz6r8oGHiUKnbzE90a7NxBLw%2FpF8S1H4mkXSpcqOxCSgo5k4iLaMMXgKYXjRDO7N2WZwc0y2bJdrJYMBbAvVB6eR4qKgRLIcMsoTizna0YAHzb1yovBTOLsKh6vXikha2eNPrOHqbJm245aLuZ%2Bl4TzdwZ1QMwLJfxgiXM%2Bci3Jy5iEncgbCs1Un9s9j1PxIn9%2BKXPh%2BzHJ9FyEaTkPKAglG5oMdAJLFCoLK00VAh9ZuWpdgdIH7ZBIomM6kuWbwY83f7XbQ64oCvUuH%2FeMaGZJC%2FF5rqgP61zcAd5iFgXxqq1D6u9csW0Gx2%2FXA7jtiYmPCaJqt%2BMSYyZ0cVM2V2WbT%2BMPwPN9RnKtjAN6IAwDzfW3NL9D8IIMmU0vPMdQ4Ik84cku%2FopBzHaTPlDWgG3LFPk37i3cZejW%2Fhz5qehHQWxcAAFK4yMFYM%2BMJa748QGOqUBtgK7RX0HoDNWDil49dGazfYsDQbv8n5ZXiqB8sgJpb0s2KsK5D%2FPdogLNj4IwooR0iigdXjjTXkEFj9i1Azl%2BoriSnE8Uu%2FTntygAgk6NN2UaajnxDaqL0T6Fm1jvc1m%2B78p55kz7D9zz5wJ54UZH5nNej1BjAh%2FVPUu3Bzpd0jUQJu8VDPVWNogCWsR%2FPrLRg14TiKp4vB62bpvGuvsZAXWsTBg&X-Amz-Signature=cb78b9c589e21d0cfa2174011300224452cefccf373b9e3c17ed40dba6f8c32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPILNIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnRmACWcqsOAhjaoseS4vS9IwOkfFLhkPsM4HhmdHw6wIgZbKRb%2BzcQzTq2P2Ib7Gj6uSfR2zAAYa7vcNdljsQvAAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vI69vZ%2FgMuRUpjCrcA2BHX%2Fj8KeeLFuzKDjRPIWw19gX6awGrlVQRpeL6MvQpH%2FBOSoH%2FBz%2Bh%2BVj8ZC3K%2BM%2FSsSEBzfi6vVPcGHvsZwoTN7c1bMXhwF3BR62NZX0eugrmj3WKWE026WT%2BWT1jRV3ItpT7LWB56%2FqgB7CiiHYrkmm9%2BYpPLHmt9IxII0nTZb9UurpqiwnX7b76hfoOtHrz6r8oGHiUKnbzE90a7NxBLw%2FpF8S1H4mkXSpcqOxCSgo5k4iLaMMXgKYXjRDO7N2WZwc0y2bJdrJYMBbAvVB6eR4qKgRLIcMsoTizna0YAHzb1yovBTOLsKh6vXikha2eNPrOHqbJm245aLuZ%2Bl4TzdwZ1QMwLJfxgiXM%2Bci3Jy5iEncgbCs1Un9s9j1PxIn9%2BKXPh%2BzHJ9FyEaTkPKAglG5oMdAJLFCoLK00VAh9ZuWpdgdIH7ZBIomM6kuWbwY83f7XbQ64oCvUuH%2FeMaGZJC%2FF5rqgP61zcAd5iFgXxqq1D6u9csW0Gx2%2FXA7jtiYmPCaJqt%2BMSYyZ0cVM2V2WbT%2BMPwPN9RnKtjAN6IAwDzfW3NL9D8IIMmU0vPMdQ4Ik84cku%2FopBzHaTPlDWgG3LFPk37i3cZejW%2Fhz5qehHQWxcAAFK4yMFYM%2BMJa748QGOqUBtgK7RX0HoDNWDil49dGazfYsDQbv8n5ZXiqB8sgJpb0s2KsK5D%2FPdogLNj4IwooR0iigdXjjTXkEFj9i1Azl%2BoriSnE8Uu%2FTntygAgk6NN2UaajnxDaqL0T6Fm1jvc1m%2B78p55kz7D9zz5wJ54UZH5nNej1BjAh%2FVPUu3Bzpd0jUQJu8VDPVWNogCWsR%2FPrLRg14TiKp4vB62bpvGuvsZAXWsTBg&X-Amz-Signature=fd2d0716a5d1ac151030b7c94fb72f6f690c6bf2e5e2dfb1d66617acea56bd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
