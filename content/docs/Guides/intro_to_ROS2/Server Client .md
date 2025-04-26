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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS5FVH77%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBqcbFvc1RvKn6HoMVccuZEt5DI4coQWYoeONSwXlwQIgNJFg0eEtHMB%2FSrxeDnpKvdBTz7OwP%2F3A%2Ba%2FT4DCewIkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG%2F5q4V3wy1UKFARIyrcA5IVNlB%2FPWmbBVVKqz6q47GDEoKbZp225qZTVKDzbSbudEYhe6hCVOkIA%2FjwybSZhXSC%2FCP6qATStQTXEiBnByTIOfJU9RsEG%2F%2BzN2Ls%2BDYeJwLd%2BqEqzdUKo8lGz9QepsGRFPIiGRd5yBTvbDoCnrBkPzkVKsW9HiyAAg71fgh5LUwGWeNiROeDKsl8NhyyD3REFN2%2Fcg1Mvs1xJcJa4NDDU4X3sC1powr%2B1bTrNkSNa6Dl4c4s8NiqM1BVHMUTnm%2FYJueyqEBvyrLOIelW7uantWr%2B803eoM0B%2FcUjjPaeQSTx%2FoRaIAdvEVL8u2yS2JpvnewRH7%2ByDvh8QMvIhaAUKF5ZjQ2ht2eF7Vt0xhy%2FPSNjaFxyf67K%2B85b5UgMyE%2FPB5KMSHPs4quyIe8Qg51o31PH8D4c09efUeKvJUZCR711VAqZ3h8WEqShcWDec2rJkoWiLIqeafSFMqfVyxcV9dE9a8ju9YSf%2BxOKhcp3hRZmNjXTXUv54hAbdAXerh9ZLG1BZy%2BugF1h9xtBrfSS%2B5l2byS6evM%2FZd%2Fadn8o0PDOlBnN08%2BbSv4lT6AVJH6tA9TDH3G21sWC1uozc%2FzSZ1ja4gGp6vz%2FjAD2dcfeCcQmM9PfcFJbKEStMKTdtMAGOqUBF0PhzldLUBIR%2BKdLENBb8adut1124KJv7YoM8oQzD5Ez1KhbiWb%2BF2a34aS%2BTY81aVDbt%2Blc7snvWXcPLFzkPaDpkNuwhSIzQrKs2AXf5yxciK0fWcCWJVJPvhkNZduvINAcypzZ5bNIVEWRdFTFNwIy7j%2Bs748%2Bq3bGYybOTJ3XV93nhFbAO0KHQOucFgShGwr12VEoCWC8Wi0fAsjtLICp9n0D&X-Amz-Signature=21d071665c789bdb1d0fdc3544d5c209ac9aec894f42b2ea38bc28af5c30f350&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS5FVH77%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBqcbFvc1RvKn6HoMVccuZEt5DI4coQWYoeONSwXlwQIgNJFg0eEtHMB%2FSrxeDnpKvdBTz7OwP%2F3A%2Ba%2FT4DCewIkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG%2F5q4V3wy1UKFARIyrcA5IVNlB%2FPWmbBVVKqz6q47GDEoKbZp225qZTVKDzbSbudEYhe6hCVOkIA%2FjwybSZhXSC%2FCP6qATStQTXEiBnByTIOfJU9RsEG%2F%2BzN2Ls%2BDYeJwLd%2BqEqzdUKo8lGz9QepsGRFPIiGRd5yBTvbDoCnrBkPzkVKsW9HiyAAg71fgh5LUwGWeNiROeDKsl8NhyyD3REFN2%2Fcg1Mvs1xJcJa4NDDU4X3sC1powr%2B1bTrNkSNa6Dl4c4s8NiqM1BVHMUTnm%2FYJueyqEBvyrLOIelW7uantWr%2B803eoM0B%2FcUjjPaeQSTx%2FoRaIAdvEVL8u2yS2JpvnewRH7%2ByDvh8QMvIhaAUKF5ZjQ2ht2eF7Vt0xhy%2FPSNjaFxyf67K%2B85b5UgMyE%2FPB5KMSHPs4quyIe8Qg51o31PH8D4c09efUeKvJUZCR711VAqZ3h8WEqShcWDec2rJkoWiLIqeafSFMqfVyxcV9dE9a8ju9YSf%2BxOKhcp3hRZmNjXTXUv54hAbdAXerh9ZLG1BZy%2BugF1h9xtBrfSS%2B5l2byS6evM%2FZd%2Fadn8o0PDOlBnN08%2BbSv4lT6AVJH6tA9TDH3G21sWC1uozc%2FzSZ1ja4gGp6vz%2FjAD2dcfeCcQmM9PfcFJbKEStMKTdtMAGOqUBF0PhzldLUBIR%2BKdLENBb8adut1124KJv7YoM8oQzD5Ez1KhbiWb%2BF2a34aS%2BTY81aVDbt%2Blc7snvWXcPLFzkPaDpkNuwhSIzQrKs2AXf5yxciK0fWcCWJVJPvhkNZduvINAcypzZ5bNIVEWRdFTFNwIy7j%2Bs748%2Bq3bGYybOTJ3XV93nhFbAO0KHQOucFgShGwr12VEoCWC8Wi0fAsjtLICp9n0D&X-Amz-Signature=e856234a67343452516887a5c55bd3d129d8c517a059ef4d5b49a2626e50da05&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS5FVH77%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBqcbFvc1RvKn6HoMVccuZEt5DI4coQWYoeONSwXlwQIgNJFg0eEtHMB%2FSrxeDnpKvdBTz7OwP%2F3A%2Ba%2FT4DCewIkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG%2F5q4V3wy1UKFARIyrcA5IVNlB%2FPWmbBVVKqz6q47GDEoKbZp225qZTVKDzbSbudEYhe6hCVOkIA%2FjwybSZhXSC%2FCP6qATStQTXEiBnByTIOfJU9RsEG%2F%2BzN2Ls%2BDYeJwLd%2BqEqzdUKo8lGz9QepsGRFPIiGRd5yBTvbDoCnrBkPzkVKsW9HiyAAg71fgh5LUwGWeNiROeDKsl8NhyyD3REFN2%2Fcg1Mvs1xJcJa4NDDU4X3sC1powr%2B1bTrNkSNa6Dl4c4s8NiqM1BVHMUTnm%2FYJueyqEBvyrLOIelW7uantWr%2B803eoM0B%2FcUjjPaeQSTx%2FoRaIAdvEVL8u2yS2JpvnewRH7%2ByDvh8QMvIhaAUKF5ZjQ2ht2eF7Vt0xhy%2FPSNjaFxyf67K%2B85b5UgMyE%2FPB5KMSHPs4quyIe8Qg51o31PH8D4c09efUeKvJUZCR711VAqZ3h8WEqShcWDec2rJkoWiLIqeafSFMqfVyxcV9dE9a8ju9YSf%2BxOKhcp3hRZmNjXTXUv54hAbdAXerh9ZLG1BZy%2BugF1h9xtBrfSS%2B5l2byS6evM%2FZd%2Fadn8o0PDOlBnN08%2BbSv4lT6AVJH6tA9TDH3G21sWC1uozc%2FzSZ1ja4gGp6vz%2FjAD2dcfeCcQmM9PfcFJbKEStMKTdtMAGOqUBF0PhzldLUBIR%2BKdLENBb8adut1124KJv7YoM8oQzD5Ez1KhbiWb%2BF2a34aS%2BTY81aVDbt%2Blc7snvWXcPLFzkPaDpkNuwhSIzQrKs2AXf5yxciK0fWcCWJVJPvhkNZduvINAcypzZ5bNIVEWRdFTFNwIy7j%2Bs748%2Bq3bGYybOTJ3XV93nhFbAO0KHQOucFgShGwr12VEoCWC8Wi0fAsjtLICp9n0D&X-Amz-Signature=e936b2d39a569c9c2e97ca9d593aabd01c410f5f763b627746e9455bdc75cabd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS5FVH77%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBqcbFvc1RvKn6HoMVccuZEt5DI4coQWYoeONSwXlwQIgNJFg0eEtHMB%2FSrxeDnpKvdBTz7OwP%2F3A%2Ba%2FT4DCewIkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG%2F5q4V3wy1UKFARIyrcA5IVNlB%2FPWmbBVVKqz6q47GDEoKbZp225qZTVKDzbSbudEYhe6hCVOkIA%2FjwybSZhXSC%2FCP6qATStQTXEiBnByTIOfJU9RsEG%2F%2BzN2Ls%2BDYeJwLd%2BqEqzdUKo8lGz9QepsGRFPIiGRd5yBTvbDoCnrBkPzkVKsW9HiyAAg71fgh5LUwGWeNiROeDKsl8NhyyD3REFN2%2Fcg1Mvs1xJcJa4NDDU4X3sC1powr%2B1bTrNkSNa6Dl4c4s8NiqM1BVHMUTnm%2FYJueyqEBvyrLOIelW7uantWr%2B803eoM0B%2FcUjjPaeQSTx%2FoRaIAdvEVL8u2yS2JpvnewRH7%2ByDvh8QMvIhaAUKF5ZjQ2ht2eF7Vt0xhy%2FPSNjaFxyf67K%2B85b5UgMyE%2FPB5KMSHPs4quyIe8Qg51o31PH8D4c09efUeKvJUZCR711VAqZ3h8WEqShcWDec2rJkoWiLIqeafSFMqfVyxcV9dE9a8ju9YSf%2BxOKhcp3hRZmNjXTXUv54hAbdAXerh9ZLG1BZy%2BugF1h9xtBrfSS%2B5l2byS6evM%2FZd%2Fadn8o0PDOlBnN08%2BbSv4lT6AVJH6tA9TDH3G21sWC1uozc%2FzSZ1ja4gGp6vz%2FjAD2dcfeCcQmM9PfcFJbKEStMKTdtMAGOqUBF0PhzldLUBIR%2BKdLENBb8adut1124KJv7YoM8oQzD5Ez1KhbiWb%2BF2a34aS%2BTY81aVDbt%2Blc7snvWXcPLFzkPaDpkNuwhSIzQrKs2AXf5yxciK0fWcCWJVJPvhkNZduvINAcypzZ5bNIVEWRdFTFNwIy7j%2Bs748%2Bq3bGYybOTJ3XV93nhFbAO0KHQOucFgShGwr12VEoCWC8Wi0fAsjtLICp9n0D&X-Amz-Signature=72467b339e3ea5f3fa20693dd5dc9c35d88fc07110d725f537f9d4c9a6806550&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS5FVH77%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwBqcbFvc1RvKn6HoMVccuZEt5DI4coQWYoeONSwXlwQIgNJFg0eEtHMB%2FSrxeDnpKvdBTz7OwP%2F3A%2Ba%2FT4DCewIkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG%2F5q4V3wy1UKFARIyrcA5IVNlB%2FPWmbBVVKqz6q47GDEoKbZp225qZTVKDzbSbudEYhe6hCVOkIA%2FjwybSZhXSC%2FCP6qATStQTXEiBnByTIOfJU9RsEG%2F%2BzN2Ls%2BDYeJwLd%2BqEqzdUKo8lGz9QepsGRFPIiGRd5yBTvbDoCnrBkPzkVKsW9HiyAAg71fgh5LUwGWeNiROeDKsl8NhyyD3REFN2%2Fcg1Mvs1xJcJa4NDDU4X3sC1powr%2B1bTrNkSNa6Dl4c4s8NiqM1BVHMUTnm%2FYJueyqEBvyrLOIelW7uantWr%2B803eoM0B%2FcUjjPaeQSTx%2FoRaIAdvEVL8u2yS2JpvnewRH7%2ByDvh8QMvIhaAUKF5ZjQ2ht2eF7Vt0xhy%2FPSNjaFxyf67K%2B85b5UgMyE%2FPB5KMSHPs4quyIe8Qg51o31PH8D4c09efUeKvJUZCR711VAqZ3h8WEqShcWDec2rJkoWiLIqeafSFMqfVyxcV9dE9a8ju9YSf%2BxOKhcp3hRZmNjXTXUv54hAbdAXerh9ZLG1BZy%2BugF1h9xtBrfSS%2B5l2byS6evM%2FZd%2Fadn8o0PDOlBnN08%2BbSv4lT6AVJH6tA9TDH3G21sWC1uozc%2FzSZ1ja4gGp6vz%2FjAD2dcfeCcQmM9PfcFJbKEStMKTdtMAGOqUBF0PhzldLUBIR%2BKdLENBb8adut1124KJv7YoM8oQzD5Ez1KhbiWb%2BF2a34aS%2BTY81aVDbt%2Blc7snvWXcPLFzkPaDpkNuwhSIzQrKs2AXf5yxciK0fWcCWJVJPvhkNZduvINAcypzZ5bNIVEWRdFTFNwIy7j%2Bs748%2Bq3bGYybOTJ3XV93nhFbAO0KHQOucFgShGwr12VEoCWC8Wi0fAsjtLICp9n0D&X-Amz-Signature=d72022f8fcbd35e980aaf19647fe46bdf57a03dd960bcb11e33b48d60396290a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
