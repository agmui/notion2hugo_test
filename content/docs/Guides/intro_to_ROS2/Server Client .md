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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHMAGJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCD6Zni84WsneXxs23wD7T4UvDs2xzAXEbvfhPcJ3%2BMJgIgcqlgXC0OZSsLe%2BpWnEcFEK1v6z8dThbp%2FwWu1B5tGiUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRAbxOotWVCm7MUPyrcAxrSWzCyp6XxjG9%2BS4fk6MRU37CkDUHaXpKIVy9TQd9dkjDrXlDAjUlTrxgwKWMeOVD3EiuG1Vt9ZVv6yUwVp9ZkwSNs0sgC7FKfvI9diBZGzcqzFxCx%2Fokf%2FLbJFeSZaoytM6bmCP74REVk0z2vsyoKqCQ27Ac%2F8XX7HOsjvYafRaXwUZmEVZ70KW7FLsNI6O3d2Mep%2FZ56FIA80w2zNG7ifSE9KGgZ5Ix9MjG%2FEYvcbfW1Wiypi5yurVUImaBXHnsUnIaoRUK5LdGD2AFj%2BdO5Hp8HbZuOj9uPA4EV2Fxl%2BjePY9Z8uKfJeVll5KpyvWDYHEaKgGolv3fA7ShACSG4uVBJQezMXnko7fVo%2B%2F0QLZuU72B0p7pv0gpPY9ttq03OZiNfGIFD3YTU907ensJLosZRo5EQNhc2aPDhWatetEz%2FmHSr8bENy04I7InGFammVlvg4IZlgGU%2FqRoH6RXU55bLOBkw0DdGkK6rKPCMhdl3dy5BIChdwmLbI5zadQ8uW96MS%2FTUun7WgCGkyPqi8PTl2uxlyTe1GZv4Ne7qKp%2B1%2BTqEm3Hiai3%2FtMif0A1pFu7bf0fMvASnS6w5avcbLlpNhdGO0y1856C%2FDEti59yMfSGUdU7uZsYCMNj6tL8GOqUBuhsB1ymqm5Zij%2FliWPiOuUEmKE0KlnXhZSodA9LguFAizJG%2FkksdD%2BZlz8%2FOcm3M3pwVS2JF0hn0h5ADMj0Og9Xh6o%2BduCgvVDeh1VzaikpIkrxSchcV%2B%2FXbU4GjKydDfoFydbBbYUFINBI5BCSfVsR%2BsI0LYucmZrXrjnj9dIEV%2F21qT%2Bwk3823fx5WE4PKlETy73eyvh4p6Q4PHbEP6osbKBqO&X-Amz-Signature=f4a02a1a2f2ff1d87933d81222434681ee16dab7bd1c6484eedf2b964a954ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHMAGJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCD6Zni84WsneXxs23wD7T4UvDs2xzAXEbvfhPcJ3%2BMJgIgcqlgXC0OZSsLe%2BpWnEcFEK1v6z8dThbp%2FwWu1B5tGiUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRAbxOotWVCm7MUPyrcAxrSWzCyp6XxjG9%2BS4fk6MRU37CkDUHaXpKIVy9TQd9dkjDrXlDAjUlTrxgwKWMeOVD3EiuG1Vt9ZVv6yUwVp9ZkwSNs0sgC7FKfvI9diBZGzcqzFxCx%2Fokf%2FLbJFeSZaoytM6bmCP74REVk0z2vsyoKqCQ27Ac%2F8XX7HOsjvYafRaXwUZmEVZ70KW7FLsNI6O3d2Mep%2FZ56FIA80w2zNG7ifSE9KGgZ5Ix9MjG%2FEYvcbfW1Wiypi5yurVUImaBXHnsUnIaoRUK5LdGD2AFj%2BdO5Hp8HbZuOj9uPA4EV2Fxl%2BjePY9Z8uKfJeVll5KpyvWDYHEaKgGolv3fA7ShACSG4uVBJQezMXnko7fVo%2B%2F0QLZuU72B0p7pv0gpPY9ttq03OZiNfGIFD3YTU907ensJLosZRo5EQNhc2aPDhWatetEz%2FmHSr8bENy04I7InGFammVlvg4IZlgGU%2FqRoH6RXU55bLOBkw0DdGkK6rKPCMhdl3dy5BIChdwmLbI5zadQ8uW96MS%2FTUun7WgCGkyPqi8PTl2uxlyTe1GZv4Ne7qKp%2B1%2BTqEm3Hiai3%2FtMif0A1pFu7bf0fMvASnS6w5avcbLlpNhdGO0y1856C%2FDEti59yMfSGUdU7uZsYCMNj6tL8GOqUBuhsB1ymqm5Zij%2FliWPiOuUEmKE0KlnXhZSodA9LguFAizJG%2FkksdD%2BZlz8%2FOcm3M3pwVS2JF0hn0h5ADMj0Og9Xh6o%2BduCgvVDeh1VzaikpIkrxSchcV%2B%2FXbU4GjKydDfoFydbBbYUFINBI5BCSfVsR%2BsI0LYucmZrXrjnj9dIEV%2F21qT%2Bwk3823fx5WE4PKlETy73eyvh4p6Q4PHbEP6osbKBqO&X-Amz-Signature=4cedadba9daef124a58fd89ca6ae6be2000e4e476a1937097b0b4657fdf03ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHMAGJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCD6Zni84WsneXxs23wD7T4UvDs2xzAXEbvfhPcJ3%2BMJgIgcqlgXC0OZSsLe%2BpWnEcFEK1v6z8dThbp%2FwWu1B5tGiUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRAbxOotWVCm7MUPyrcAxrSWzCyp6XxjG9%2BS4fk6MRU37CkDUHaXpKIVy9TQd9dkjDrXlDAjUlTrxgwKWMeOVD3EiuG1Vt9ZVv6yUwVp9ZkwSNs0sgC7FKfvI9diBZGzcqzFxCx%2Fokf%2FLbJFeSZaoytM6bmCP74REVk0z2vsyoKqCQ27Ac%2F8XX7HOsjvYafRaXwUZmEVZ70KW7FLsNI6O3d2Mep%2FZ56FIA80w2zNG7ifSE9KGgZ5Ix9MjG%2FEYvcbfW1Wiypi5yurVUImaBXHnsUnIaoRUK5LdGD2AFj%2BdO5Hp8HbZuOj9uPA4EV2Fxl%2BjePY9Z8uKfJeVll5KpyvWDYHEaKgGolv3fA7ShACSG4uVBJQezMXnko7fVo%2B%2F0QLZuU72B0p7pv0gpPY9ttq03OZiNfGIFD3YTU907ensJLosZRo5EQNhc2aPDhWatetEz%2FmHSr8bENy04I7InGFammVlvg4IZlgGU%2FqRoH6RXU55bLOBkw0DdGkK6rKPCMhdl3dy5BIChdwmLbI5zadQ8uW96MS%2FTUun7WgCGkyPqi8PTl2uxlyTe1GZv4Ne7qKp%2B1%2BTqEm3Hiai3%2FtMif0A1pFu7bf0fMvASnS6w5avcbLlpNhdGO0y1856C%2FDEti59yMfSGUdU7uZsYCMNj6tL8GOqUBuhsB1ymqm5Zij%2FliWPiOuUEmKE0KlnXhZSodA9LguFAizJG%2FkksdD%2BZlz8%2FOcm3M3pwVS2JF0hn0h5ADMj0Og9Xh6o%2BduCgvVDeh1VzaikpIkrxSchcV%2B%2FXbU4GjKydDfoFydbBbYUFINBI5BCSfVsR%2BsI0LYucmZrXrjnj9dIEV%2F21qT%2Bwk3823fx5WE4PKlETy73eyvh4p6Q4PHbEP6osbKBqO&X-Amz-Signature=1bf83a1377c93914dfe33587d37cb19245425438f86a6e383d84c0aeefc45591&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHMAGJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCD6Zni84WsneXxs23wD7T4UvDs2xzAXEbvfhPcJ3%2BMJgIgcqlgXC0OZSsLe%2BpWnEcFEK1v6z8dThbp%2FwWu1B5tGiUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRAbxOotWVCm7MUPyrcAxrSWzCyp6XxjG9%2BS4fk6MRU37CkDUHaXpKIVy9TQd9dkjDrXlDAjUlTrxgwKWMeOVD3EiuG1Vt9ZVv6yUwVp9ZkwSNs0sgC7FKfvI9diBZGzcqzFxCx%2Fokf%2FLbJFeSZaoytM6bmCP74REVk0z2vsyoKqCQ27Ac%2F8XX7HOsjvYafRaXwUZmEVZ70KW7FLsNI6O3d2Mep%2FZ56FIA80w2zNG7ifSE9KGgZ5Ix9MjG%2FEYvcbfW1Wiypi5yurVUImaBXHnsUnIaoRUK5LdGD2AFj%2BdO5Hp8HbZuOj9uPA4EV2Fxl%2BjePY9Z8uKfJeVll5KpyvWDYHEaKgGolv3fA7ShACSG4uVBJQezMXnko7fVo%2B%2F0QLZuU72B0p7pv0gpPY9ttq03OZiNfGIFD3YTU907ensJLosZRo5EQNhc2aPDhWatetEz%2FmHSr8bENy04I7InGFammVlvg4IZlgGU%2FqRoH6RXU55bLOBkw0DdGkK6rKPCMhdl3dy5BIChdwmLbI5zadQ8uW96MS%2FTUun7WgCGkyPqi8PTl2uxlyTe1GZv4Ne7qKp%2B1%2BTqEm3Hiai3%2FtMif0A1pFu7bf0fMvASnS6w5avcbLlpNhdGO0y1856C%2FDEti59yMfSGUdU7uZsYCMNj6tL8GOqUBuhsB1ymqm5Zij%2FliWPiOuUEmKE0KlnXhZSodA9LguFAizJG%2FkksdD%2BZlz8%2FOcm3M3pwVS2JF0hn0h5ADMj0Og9Xh6o%2BduCgvVDeh1VzaikpIkrxSchcV%2B%2FXbU4GjKydDfoFydbBbYUFINBI5BCSfVsR%2BsI0LYucmZrXrjnj9dIEV%2F21qT%2Bwk3823fx5WE4PKlETy73eyvh4p6Q4PHbEP6osbKBqO&X-Amz-Signature=3278e6d03d91670874c4a02a8a5c11db199f6ef6e1d603503867ac6ddcb41cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHMAGJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCD6Zni84WsneXxs23wD7T4UvDs2xzAXEbvfhPcJ3%2BMJgIgcqlgXC0OZSsLe%2BpWnEcFEK1v6z8dThbp%2FwWu1B5tGiUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRAbxOotWVCm7MUPyrcAxrSWzCyp6XxjG9%2BS4fk6MRU37CkDUHaXpKIVy9TQd9dkjDrXlDAjUlTrxgwKWMeOVD3EiuG1Vt9ZVv6yUwVp9ZkwSNs0sgC7FKfvI9diBZGzcqzFxCx%2Fokf%2FLbJFeSZaoytM6bmCP74REVk0z2vsyoKqCQ27Ac%2F8XX7HOsjvYafRaXwUZmEVZ70KW7FLsNI6O3d2Mep%2FZ56FIA80w2zNG7ifSE9KGgZ5Ix9MjG%2FEYvcbfW1Wiypi5yurVUImaBXHnsUnIaoRUK5LdGD2AFj%2BdO5Hp8HbZuOj9uPA4EV2Fxl%2BjePY9Z8uKfJeVll5KpyvWDYHEaKgGolv3fA7ShACSG4uVBJQezMXnko7fVo%2B%2F0QLZuU72B0p7pv0gpPY9ttq03OZiNfGIFD3YTU907ensJLosZRo5EQNhc2aPDhWatetEz%2FmHSr8bENy04I7InGFammVlvg4IZlgGU%2FqRoH6RXU55bLOBkw0DdGkK6rKPCMhdl3dy5BIChdwmLbI5zadQ8uW96MS%2FTUun7WgCGkyPqi8PTl2uxlyTe1GZv4Ne7qKp%2B1%2BTqEm3Hiai3%2FtMif0A1pFu7bf0fMvASnS6w5avcbLlpNhdGO0y1856C%2FDEti59yMfSGUdU7uZsYCMNj6tL8GOqUBuhsB1ymqm5Zij%2FliWPiOuUEmKE0KlnXhZSodA9LguFAizJG%2FkksdD%2BZlz8%2FOcm3M3pwVS2JF0hn0h5ADMj0Og9Xh6o%2BduCgvVDeh1VzaikpIkrxSchcV%2B%2FXbU4GjKydDfoFydbBbYUFINBI5BCSfVsR%2BsI0LYucmZrXrjnj9dIEV%2F21qT%2Bwk3823fx5WE4PKlETy73eyvh4p6Q4PHbEP6osbKBqO&X-Amz-Signature=b3308aa55ba80cc398341c13b44848c31a5afbbcc1db78f23986a08ceae05315&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
