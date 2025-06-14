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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVU7CTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0xfjgE%2BHSCbFpBpBXfEfhMlrS0O3TSPHbY%2BoCxsoOZgIgeDto%2F5J0F1UfUP%2FCXLYoJhNISchJgQkdcRme%2BwsX2joq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPkHmhtQ6kgnCTQB1ircAwcfAIAOZTx2l5ekaRSKP7X00XxsYKOpbbmOP6EYhOPlpeCGmeDfnNBaciZtumPGmMrTxDWrFxav99hvxI55HYAqTWGBHvbIkahKzGpxHQ8533eDEMqtOxfRV0Gcv5Nkw0cghi8JAC0a8duBDYLaM%2BCrBsjz9Ex92gz1yD9B4nO9Hw%2ByCRNjxkdkqN02CjO7STWErMEDMw4HT7v4QgMUOYMnjimW7jyKDTlGsYcgxZhBzgO7vuFPGucr%2BmWFd%2FnEYuN%2F7M%2Bj0mtNGvOuOQTxQaVnCOvzdPfRtxp2rLppltqCwOXcoSvKjdTIRU2ctZ0xZa43glrA%2BGZkqyl6RHx0HafJO3G4XbGlSzLm1nsVYOyzE9gZayCOb4AWvpz4FAE4vBNbyq%2FCzEMq74Qn0GaKzGwJsfRr1loWL8jgia%2F%2ByOfYanLPUm%2F6HOiBxTTC9CMIVyY2DdRtOT0xeQVFEbntdTXAjgf9jG0VdO%2BxmcuI1YJcUCMLhyJg2gX0TfBn9wfHjjmJyDJPy%2Ftli231H3A8%2BENQZS21hCZow8WeI7hc2MzrCiwpv9lec0TcRBmQMZu9E2j1V9mdMmFGDe6tWQgdsukJOfAfoG4v3uWKNdFjATHMMcsn2wi%2BvE2YlMNcMJXss8IGOqUB124woeP3821si%2BJ5ODmziJccHAk6rOl74xBnlbMt4FrQ%2BiJPNbYf1Kp4WZQYRhckqO4KqA740ShTuv9dPoCz8SVK37Ybb70GsDG3U%2FIa5wVLSmA776aVzi5SPrb%2B0uJTL4OFWvvYDYXoxijy4JCr1ZuLb53jDo7px0dBtvOettn1C8GEhgqK9%2FauU%2FRGLnjGK2R1okwJ0Gxb5Tz9dRS1P4aRvWQZ&X-Amz-Signature=e26d9d0af7f6b9c0493a101f8d60ed0b90a1e4025972d45526779faf9f107f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVU7CTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0xfjgE%2BHSCbFpBpBXfEfhMlrS0O3TSPHbY%2BoCxsoOZgIgeDto%2F5J0F1UfUP%2FCXLYoJhNISchJgQkdcRme%2BwsX2joq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPkHmhtQ6kgnCTQB1ircAwcfAIAOZTx2l5ekaRSKP7X00XxsYKOpbbmOP6EYhOPlpeCGmeDfnNBaciZtumPGmMrTxDWrFxav99hvxI55HYAqTWGBHvbIkahKzGpxHQ8533eDEMqtOxfRV0Gcv5Nkw0cghi8JAC0a8duBDYLaM%2BCrBsjz9Ex92gz1yD9B4nO9Hw%2ByCRNjxkdkqN02CjO7STWErMEDMw4HT7v4QgMUOYMnjimW7jyKDTlGsYcgxZhBzgO7vuFPGucr%2BmWFd%2FnEYuN%2F7M%2Bj0mtNGvOuOQTxQaVnCOvzdPfRtxp2rLppltqCwOXcoSvKjdTIRU2ctZ0xZa43glrA%2BGZkqyl6RHx0HafJO3G4XbGlSzLm1nsVYOyzE9gZayCOb4AWvpz4FAE4vBNbyq%2FCzEMq74Qn0GaKzGwJsfRr1loWL8jgia%2F%2ByOfYanLPUm%2F6HOiBxTTC9CMIVyY2DdRtOT0xeQVFEbntdTXAjgf9jG0VdO%2BxmcuI1YJcUCMLhyJg2gX0TfBn9wfHjjmJyDJPy%2Ftli231H3A8%2BENQZS21hCZow8WeI7hc2MzrCiwpv9lec0TcRBmQMZu9E2j1V9mdMmFGDe6tWQgdsukJOfAfoG4v3uWKNdFjATHMMcsn2wi%2BvE2YlMNcMJXss8IGOqUB124woeP3821si%2BJ5ODmziJccHAk6rOl74xBnlbMt4FrQ%2BiJPNbYf1Kp4WZQYRhckqO4KqA740ShTuv9dPoCz8SVK37Ybb70GsDG3U%2FIa5wVLSmA776aVzi5SPrb%2B0uJTL4OFWvvYDYXoxijy4JCr1ZuLb53jDo7px0dBtvOettn1C8GEhgqK9%2FauU%2FRGLnjGK2R1okwJ0Gxb5Tz9dRS1P4aRvWQZ&X-Amz-Signature=23b9acef4e985df324f20b180cd1c4acde9a44a908e04d6340a921594d3fce58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVU7CTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0xfjgE%2BHSCbFpBpBXfEfhMlrS0O3TSPHbY%2BoCxsoOZgIgeDto%2F5J0F1UfUP%2FCXLYoJhNISchJgQkdcRme%2BwsX2joq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPkHmhtQ6kgnCTQB1ircAwcfAIAOZTx2l5ekaRSKP7X00XxsYKOpbbmOP6EYhOPlpeCGmeDfnNBaciZtumPGmMrTxDWrFxav99hvxI55HYAqTWGBHvbIkahKzGpxHQ8533eDEMqtOxfRV0Gcv5Nkw0cghi8JAC0a8duBDYLaM%2BCrBsjz9Ex92gz1yD9B4nO9Hw%2ByCRNjxkdkqN02CjO7STWErMEDMw4HT7v4QgMUOYMnjimW7jyKDTlGsYcgxZhBzgO7vuFPGucr%2BmWFd%2FnEYuN%2F7M%2Bj0mtNGvOuOQTxQaVnCOvzdPfRtxp2rLppltqCwOXcoSvKjdTIRU2ctZ0xZa43glrA%2BGZkqyl6RHx0HafJO3G4XbGlSzLm1nsVYOyzE9gZayCOb4AWvpz4FAE4vBNbyq%2FCzEMq74Qn0GaKzGwJsfRr1loWL8jgia%2F%2ByOfYanLPUm%2F6HOiBxTTC9CMIVyY2DdRtOT0xeQVFEbntdTXAjgf9jG0VdO%2BxmcuI1YJcUCMLhyJg2gX0TfBn9wfHjjmJyDJPy%2Ftli231H3A8%2BENQZS21hCZow8WeI7hc2MzrCiwpv9lec0TcRBmQMZu9E2j1V9mdMmFGDe6tWQgdsukJOfAfoG4v3uWKNdFjATHMMcsn2wi%2BvE2YlMNcMJXss8IGOqUB124woeP3821si%2BJ5ODmziJccHAk6rOl74xBnlbMt4FrQ%2BiJPNbYf1Kp4WZQYRhckqO4KqA740ShTuv9dPoCz8SVK37Ybb70GsDG3U%2FIa5wVLSmA776aVzi5SPrb%2B0uJTL4OFWvvYDYXoxijy4JCr1ZuLb53jDo7px0dBtvOettn1C8GEhgqK9%2FauU%2FRGLnjGK2R1okwJ0Gxb5Tz9dRS1P4aRvWQZ&X-Amz-Signature=a1cf77e7a76ef7148ee6e79ef510fe377e4fb2b3e8df50b2e84730c94dff9ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVU7CTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0xfjgE%2BHSCbFpBpBXfEfhMlrS0O3TSPHbY%2BoCxsoOZgIgeDto%2F5J0F1UfUP%2FCXLYoJhNISchJgQkdcRme%2BwsX2joq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPkHmhtQ6kgnCTQB1ircAwcfAIAOZTx2l5ekaRSKP7X00XxsYKOpbbmOP6EYhOPlpeCGmeDfnNBaciZtumPGmMrTxDWrFxav99hvxI55HYAqTWGBHvbIkahKzGpxHQ8533eDEMqtOxfRV0Gcv5Nkw0cghi8JAC0a8duBDYLaM%2BCrBsjz9Ex92gz1yD9B4nO9Hw%2ByCRNjxkdkqN02CjO7STWErMEDMw4HT7v4QgMUOYMnjimW7jyKDTlGsYcgxZhBzgO7vuFPGucr%2BmWFd%2FnEYuN%2F7M%2Bj0mtNGvOuOQTxQaVnCOvzdPfRtxp2rLppltqCwOXcoSvKjdTIRU2ctZ0xZa43glrA%2BGZkqyl6RHx0HafJO3G4XbGlSzLm1nsVYOyzE9gZayCOb4AWvpz4FAE4vBNbyq%2FCzEMq74Qn0GaKzGwJsfRr1loWL8jgia%2F%2ByOfYanLPUm%2F6HOiBxTTC9CMIVyY2DdRtOT0xeQVFEbntdTXAjgf9jG0VdO%2BxmcuI1YJcUCMLhyJg2gX0TfBn9wfHjjmJyDJPy%2Ftli231H3A8%2BENQZS21hCZow8WeI7hc2MzrCiwpv9lec0TcRBmQMZu9E2j1V9mdMmFGDe6tWQgdsukJOfAfoG4v3uWKNdFjATHMMcsn2wi%2BvE2YlMNcMJXss8IGOqUB124woeP3821si%2BJ5ODmziJccHAk6rOl74xBnlbMt4FrQ%2BiJPNbYf1Kp4WZQYRhckqO4KqA740ShTuv9dPoCz8SVK37Ybb70GsDG3U%2FIa5wVLSmA776aVzi5SPrb%2B0uJTL4OFWvvYDYXoxijy4JCr1ZuLb53jDo7px0dBtvOettn1C8GEhgqK9%2FauU%2FRGLnjGK2R1okwJ0Gxb5Tz9dRS1P4aRvWQZ&X-Amz-Signature=b7db57b3e85921325379659b7efa0d4bc7c7d454131cbe45f4c3da350494e7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVU7CTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0xfjgE%2BHSCbFpBpBXfEfhMlrS0O3TSPHbY%2BoCxsoOZgIgeDto%2F5J0F1UfUP%2FCXLYoJhNISchJgQkdcRme%2BwsX2joq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPkHmhtQ6kgnCTQB1ircAwcfAIAOZTx2l5ekaRSKP7X00XxsYKOpbbmOP6EYhOPlpeCGmeDfnNBaciZtumPGmMrTxDWrFxav99hvxI55HYAqTWGBHvbIkahKzGpxHQ8533eDEMqtOxfRV0Gcv5Nkw0cghi8JAC0a8duBDYLaM%2BCrBsjz9Ex92gz1yD9B4nO9Hw%2ByCRNjxkdkqN02CjO7STWErMEDMw4HT7v4QgMUOYMnjimW7jyKDTlGsYcgxZhBzgO7vuFPGucr%2BmWFd%2FnEYuN%2F7M%2Bj0mtNGvOuOQTxQaVnCOvzdPfRtxp2rLppltqCwOXcoSvKjdTIRU2ctZ0xZa43glrA%2BGZkqyl6RHx0HafJO3G4XbGlSzLm1nsVYOyzE9gZayCOb4AWvpz4FAE4vBNbyq%2FCzEMq74Qn0GaKzGwJsfRr1loWL8jgia%2F%2ByOfYanLPUm%2F6HOiBxTTC9CMIVyY2DdRtOT0xeQVFEbntdTXAjgf9jG0VdO%2BxmcuI1YJcUCMLhyJg2gX0TfBn9wfHjjmJyDJPy%2Ftli231H3A8%2BENQZS21hCZow8WeI7hc2MzrCiwpv9lec0TcRBmQMZu9E2j1V9mdMmFGDe6tWQgdsukJOfAfoG4v3uWKNdFjATHMMcsn2wi%2BvE2YlMNcMJXss8IGOqUB124woeP3821si%2BJ5ODmziJccHAk6rOl74xBnlbMt4FrQ%2BiJPNbYf1Kp4WZQYRhckqO4KqA740ShTuv9dPoCz8SVK37Ybb70GsDG3U%2FIa5wVLSmA776aVzi5SPrb%2B0uJTL4OFWvvYDYXoxijy4JCr1ZuLb53jDo7px0dBtvOettn1C8GEhgqK9%2FauU%2FRGLnjGK2R1okwJ0Gxb5Tz9dRS1P4aRvWQZ&X-Amz-Signature=c9422dd811e7e3a17ee524fa6ae8219d75c5701755cbecfe2f0e54f23c9d0bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
