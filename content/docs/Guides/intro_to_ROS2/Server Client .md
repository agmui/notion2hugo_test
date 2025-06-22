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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBWY7GE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4d4rjcqnOt1njWh%2BI3YIyUsV%2Bu1ek9iYPxktJxR7NAiEAqaKVnd6%2FxCWlaTClfDD9ic1pupxw01lbwAy0HNQAvrwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYM%2BMufOBty0X13lyrcA5163bWmgNnXtDCssUkfdgi2A6StdHo3SEAtgr2aUU5sCdW0mo0UC3fHo9NAZbBO00sv%2FuL%2FQlVG4EICBh3sQ2pKyqkdOAiesibOo78nNuxDp0Eg%2FliWhCUE2C63cjUdR3Kz0xvbDCrVKspoTGtZaw%2FQ8wfYERD7YKr6jj15Rfjk55jhJpIe3rYK5KEOmShf%2FKiwmkdRaVMVFYiT3foosAt4hRNGibQRzHB3oRAGjx3G5MIV1IuX19m1NeQpYO3y%2BLF4pm9gN3TZ7VzrEQ719FeBbf9GjgTZ2YBAe46L00TwgLBTkGmgeJG4oMjRAuAsEaqa2k7uiO35BeXBqx4EygXL5L7NO2X2H%2FfZInqWqaHXj7odx5vkjT5NwS8hqrHYqCVZhwBveadGS%2FnpebWBIcbAfdkQr7TejOS9u3%2BZB9BJwwxUjr3xZPVDSb07%2F9uyvjC9pXv5KyPmpxJIMY3tO%2FXs6mWNnSx3g9UL3xg6%2BnR3co52g5jup1gR1bNQAg%2BNbuya0RA6f09Vv5vXu%2FT7ocmMCwmTjR90T87M76Lr6QTf11LB1GySA3yGz31vhYJObNxd5Y0BAdg1F%2BHMRzPaMbJ1z7OruYo%2BtzO5%2FaT3%2FR8%2Bd5eME%2F1dNBDQy8tMMIKs3cIGOqUBSs4KIGhcY6gvESl8RzznVqu7VV85QkQDyYopYbJ2EvjBvne%2BkZvs3jmo9IRrRgGUp8exnkbJJsBnZb%2B8sQ0ltkhoBG4okmIZ9gin94G3ubYUDWKH6CowZA%2BNLAtFL7fdsMJf5NKDM9U%2FW7i2WtoUqcxBSvU%2BRmwh66Cd6yXaFf1MPivDPlkDRWqlHDTddlDHfR0Pq%2B2cCcP0Jsye%2Bpf7kqawqhTq&X-Amz-Signature=17dfcbf195f66dd695693c6ba1e672ee65a0e46bb6ea41b8782405eec3230622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBWY7GE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4d4rjcqnOt1njWh%2BI3YIyUsV%2Bu1ek9iYPxktJxR7NAiEAqaKVnd6%2FxCWlaTClfDD9ic1pupxw01lbwAy0HNQAvrwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYM%2BMufOBty0X13lyrcA5163bWmgNnXtDCssUkfdgi2A6StdHo3SEAtgr2aUU5sCdW0mo0UC3fHo9NAZbBO00sv%2FuL%2FQlVG4EICBh3sQ2pKyqkdOAiesibOo78nNuxDp0Eg%2FliWhCUE2C63cjUdR3Kz0xvbDCrVKspoTGtZaw%2FQ8wfYERD7YKr6jj15Rfjk55jhJpIe3rYK5KEOmShf%2FKiwmkdRaVMVFYiT3foosAt4hRNGibQRzHB3oRAGjx3G5MIV1IuX19m1NeQpYO3y%2BLF4pm9gN3TZ7VzrEQ719FeBbf9GjgTZ2YBAe46L00TwgLBTkGmgeJG4oMjRAuAsEaqa2k7uiO35BeXBqx4EygXL5L7NO2X2H%2FfZInqWqaHXj7odx5vkjT5NwS8hqrHYqCVZhwBveadGS%2FnpebWBIcbAfdkQr7TejOS9u3%2BZB9BJwwxUjr3xZPVDSb07%2F9uyvjC9pXv5KyPmpxJIMY3tO%2FXs6mWNnSx3g9UL3xg6%2BnR3co52g5jup1gR1bNQAg%2BNbuya0RA6f09Vv5vXu%2FT7ocmMCwmTjR90T87M76Lr6QTf11LB1GySA3yGz31vhYJObNxd5Y0BAdg1F%2BHMRzPaMbJ1z7OruYo%2BtzO5%2FaT3%2FR8%2Bd5eME%2F1dNBDQy8tMMIKs3cIGOqUBSs4KIGhcY6gvESl8RzznVqu7VV85QkQDyYopYbJ2EvjBvne%2BkZvs3jmo9IRrRgGUp8exnkbJJsBnZb%2B8sQ0ltkhoBG4okmIZ9gin94G3ubYUDWKH6CowZA%2BNLAtFL7fdsMJf5NKDM9U%2FW7i2WtoUqcxBSvU%2BRmwh66Cd6yXaFf1MPivDPlkDRWqlHDTddlDHfR0Pq%2B2cCcP0Jsye%2Bpf7kqawqhTq&X-Amz-Signature=327a865a833fda62afe399d6a405340ad7abac841a5fc01cafb1a0a51d215329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBWY7GE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4d4rjcqnOt1njWh%2BI3YIyUsV%2Bu1ek9iYPxktJxR7NAiEAqaKVnd6%2FxCWlaTClfDD9ic1pupxw01lbwAy0HNQAvrwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYM%2BMufOBty0X13lyrcA5163bWmgNnXtDCssUkfdgi2A6StdHo3SEAtgr2aUU5sCdW0mo0UC3fHo9NAZbBO00sv%2FuL%2FQlVG4EICBh3sQ2pKyqkdOAiesibOo78nNuxDp0Eg%2FliWhCUE2C63cjUdR3Kz0xvbDCrVKspoTGtZaw%2FQ8wfYERD7YKr6jj15Rfjk55jhJpIe3rYK5KEOmShf%2FKiwmkdRaVMVFYiT3foosAt4hRNGibQRzHB3oRAGjx3G5MIV1IuX19m1NeQpYO3y%2BLF4pm9gN3TZ7VzrEQ719FeBbf9GjgTZ2YBAe46L00TwgLBTkGmgeJG4oMjRAuAsEaqa2k7uiO35BeXBqx4EygXL5L7NO2X2H%2FfZInqWqaHXj7odx5vkjT5NwS8hqrHYqCVZhwBveadGS%2FnpebWBIcbAfdkQr7TejOS9u3%2BZB9BJwwxUjr3xZPVDSb07%2F9uyvjC9pXv5KyPmpxJIMY3tO%2FXs6mWNnSx3g9UL3xg6%2BnR3co52g5jup1gR1bNQAg%2BNbuya0RA6f09Vv5vXu%2FT7ocmMCwmTjR90T87M76Lr6QTf11LB1GySA3yGz31vhYJObNxd5Y0BAdg1F%2BHMRzPaMbJ1z7OruYo%2BtzO5%2FaT3%2FR8%2Bd5eME%2F1dNBDQy8tMMIKs3cIGOqUBSs4KIGhcY6gvESl8RzznVqu7VV85QkQDyYopYbJ2EvjBvne%2BkZvs3jmo9IRrRgGUp8exnkbJJsBnZb%2B8sQ0ltkhoBG4okmIZ9gin94G3ubYUDWKH6CowZA%2BNLAtFL7fdsMJf5NKDM9U%2FW7i2WtoUqcxBSvU%2BRmwh66Cd6yXaFf1MPivDPlkDRWqlHDTddlDHfR0Pq%2B2cCcP0Jsye%2Bpf7kqawqhTq&X-Amz-Signature=1224bbd31c77aece171a6f28936d7139e4fa8e86793c999a06c7f33344a974e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBWY7GE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4d4rjcqnOt1njWh%2BI3YIyUsV%2Bu1ek9iYPxktJxR7NAiEAqaKVnd6%2FxCWlaTClfDD9ic1pupxw01lbwAy0HNQAvrwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYM%2BMufOBty0X13lyrcA5163bWmgNnXtDCssUkfdgi2A6StdHo3SEAtgr2aUU5sCdW0mo0UC3fHo9NAZbBO00sv%2FuL%2FQlVG4EICBh3sQ2pKyqkdOAiesibOo78nNuxDp0Eg%2FliWhCUE2C63cjUdR3Kz0xvbDCrVKspoTGtZaw%2FQ8wfYERD7YKr6jj15Rfjk55jhJpIe3rYK5KEOmShf%2FKiwmkdRaVMVFYiT3foosAt4hRNGibQRzHB3oRAGjx3G5MIV1IuX19m1NeQpYO3y%2BLF4pm9gN3TZ7VzrEQ719FeBbf9GjgTZ2YBAe46L00TwgLBTkGmgeJG4oMjRAuAsEaqa2k7uiO35BeXBqx4EygXL5L7NO2X2H%2FfZInqWqaHXj7odx5vkjT5NwS8hqrHYqCVZhwBveadGS%2FnpebWBIcbAfdkQr7TejOS9u3%2BZB9BJwwxUjr3xZPVDSb07%2F9uyvjC9pXv5KyPmpxJIMY3tO%2FXs6mWNnSx3g9UL3xg6%2BnR3co52g5jup1gR1bNQAg%2BNbuya0RA6f09Vv5vXu%2FT7ocmMCwmTjR90T87M76Lr6QTf11LB1GySA3yGz31vhYJObNxd5Y0BAdg1F%2BHMRzPaMbJ1z7OruYo%2BtzO5%2FaT3%2FR8%2Bd5eME%2F1dNBDQy8tMMIKs3cIGOqUBSs4KIGhcY6gvESl8RzznVqu7VV85QkQDyYopYbJ2EvjBvne%2BkZvs3jmo9IRrRgGUp8exnkbJJsBnZb%2B8sQ0ltkhoBG4okmIZ9gin94G3ubYUDWKH6CowZA%2BNLAtFL7fdsMJf5NKDM9U%2FW7i2WtoUqcxBSvU%2BRmwh66Cd6yXaFf1MPivDPlkDRWqlHDTddlDHfR0Pq%2B2cCcP0Jsye%2Bpf7kqawqhTq&X-Amz-Signature=493da5d33a0ee9f845fcc3c4767379f5029037cba7f9568d1b3a7c16c9b2696c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBWY7GE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4d4rjcqnOt1njWh%2BI3YIyUsV%2Bu1ek9iYPxktJxR7NAiEAqaKVnd6%2FxCWlaTClfDD9ic1pupxw01lbwAy0HNQAvrwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYM%2BMufOBty0X13lyrcA5163bWmgNnXtDCssUkfdgi2A6StdHo3SEAtgr2aUU5sCdW0mo0UC3fHo9NAZbBO00sv%2FuL%2FQlVG4EICBh3sQ2pKyqkdOAiesibOo78nNuxDp0Eg%2FliWhCUE2C63cjUdR3Kz0xvbDCrVKspoTGtZaw%2FQ8wfYERD7YKr6jj15Rfjk55jhJpIe3rYK5KEOmShf%2FKiwmkdRaVMVFYiT3foosAt4hRNGibQRzHB3oRAGjx3G5MIV1IuX19m1NeQpYO3y%2BLF4pm9gN3TZ7VzrEQ719FeBbf9GjgTZ2YBAe46L00TwgLBTkGmgeJG4oMjRAuAsEaqa2k7uiO35BeXBqx4EygXL5L7NO2X2H%2FfZInqWqaHXj7odx5vkjT5NwS8hqrHYqCVZhwBveadGS%2FnpebWBIcbAfdkQr7TejOS9u3%2BZB9BJwwxUjr3xZPVDSb07%2F9uyvjC9pXv5KyPmpxJIMY3tO%2FXs6mWNnSx3g9UL3xg6%2BnR3co52g5jup1gR1bNQAg%2BNbuya0RA6f09Vv5vXu%2FT7ocmMCwmTjR90T87M76Lr6QTf11LB1GySA3yGz31vhYJObNxd5Y0BAdg1F%2BHMRzPaMbJ1z7OruYo%2BtzO5%2FaT3%2FR8%2Bd5eME%2F1dNBDQy8tMMIKs3cIGOqUBSs4KIGhcY6gvESl8RzznVqu7VV85QkQDyYopYbJ2EvjBvne%2BkZvs3jmo9IRrRgGUp8exnkbJJsBnZb%2B8sQ0ltkhoBG4okmIZ9gin94G3ubYUDWKH6CowZA%2BNLAtFL7fdsMJf5NKDM9U%2FW7i2WtoUqcxBSvU%2BRmwh66Cd6yXaFf1MPivDPlkDRWqlHDTddlDHfR0Pq%2B2cCcP0Jsye%2Bpf7kqawqhTq&X-Amz-Signature=fbd5825aa51a6d169fd66089545bba05f892cf0fd82201dd71446293a4119cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
