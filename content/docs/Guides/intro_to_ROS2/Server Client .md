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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVFBNK7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJrkHyUfkvkYBUXoPkN%2BsGLKxuEW3%2B9nQCwyYC0y3m8AiEA9oa9Y76i9Z4biWnsN0R3r2T1M067tSqVmF%2F730yVZxkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOcuU4klhx2Buzmf7ircA7B0HywKYJOBwY17eCbZKcZ%2FvURBq5ZeQGJ0AKWgQY0hx7Pd4cbDRh17aMzGNgvJjBFdn0D%2BpTfzGD%2FQORN0NxafRFfingrel%2F%2BmA1defJkFHGkX9ZV3vhtKr8UJML%2FPW9DeU41pjwUXCcrQt0dBh0oQjNPYnW87ZLCHv4x9N%2FvHirms9Kjw5KhacHEsnmKIw8Qxdln%2B%2FRGknBnBxpeTFuU3zXLFstP%2FeO8RvuQrS7oolBHhP10I3uC2msFi%2BfI2%2BO1tTGxmzyrHfHVt6LLQNTZrpIv%2F2BvGU15VNoQptzHm%2B0JbGshd%2FwUJiccclBIs1svqPagQlxHdMpJ1Er9BVhmP%2BOXyeJKi%2FhT1UdTfnp5YFMAfU11t2HXvLKdgWo5Oj69YoxUjGJ2ZiUgC5RES3PypPWZRfg8nfj59Qd3aCD4mqezOOzyFC%2FEUOUgO2HcSxzahYb16I21LT2OaMMgLnlGy9N6wj6QPjyFsby%2B%2F9xB7HkejFPXGMDuo98wBp3XzGnHLgBTQKHlA7MUeUDpwKClZegOxlzMLLoWR6mUhnuDv13qy073Fxws%2FCCeBOXEQRC7LjmckW2VxLaJvp7UxY3ay1JY8o5IWXRxaXi6zhGrVBi43ooHWpApLPK3iMP650b8GOqUB10z1HBoeUuMhStE9Fbo4rIew7uaKJuU0boiJ7sfmz7%2FLmiuH9ZG4qEjHH%2FvDujg940PA89NBOvaMtyrDsrBCt427hTafoQBdXLk9IMFDH7wnqanQNek4nhEKAAbnCubHW5wmf8HrETbAT7LWzG7kPMAFhdnsP7g615jI861zQ7NcHm6Df4fcSJwMXhkv6WFFk1fqhSyA6ISrJPWccrGFdy%2Brw1Wp&X-Amz-Signature=2be7d794b0e8bb4efa50dab4b499421fac8b80f96082195b7c2cf55d3a920e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVFBNK7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJrkHyUfkvkYBUXoPkN%2BsGLKxuEW3%2B9nQCwyYC0y3m8AiEA9oa9Y76i9Z4biWnsN0R3r2T1M067tSqVmF%2F730yVZxkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOcuU4klhx2Buzmf7ircA7B0HywKYJOBwY17eCbZKcZ%2FvURBq5ZeQGJ0AKWgQY0hx7Pd4cbDRh17aMzGNgvJjBFdn0D%2BpTfzGD%2FQORN0NxafRFfingrel%2F%2BmA1defJkFHGkX9ZV3vhtKr8UJML%2FPW9DeU41pjwUXCcrQt0dBh0oQjNPYnW87ZLCHv4x9N%2FvHirms9Kjw5KhacHEsnmKIw8Qxdln%2B%2FRGknBnBxpeTFuU3zXLFstP%2FeO8RvuQrS7oolBHhP10I3uC2msFi%2BfI2%2BO1tTGxmzyrHfHVt6LLQNTZrpIv%2F2BvGU15VNoQptzHm%2B0JbGshd%2FwUJiccclBIs1svqPagQlxHdMpJ1Er9BVhmP%2BOXyeJKi%2FhT1UdTfnp5YFMAfU11t2HXvLKdgWo5Oj69YoxUjGJ2ZiUgC5RES3PypPWZRfg8nfj59Qd3aCD4mqezOOzyFC%2FEUOUgO2HcSxzahYb16I21LT2OaMMgLnlGy9N6wj6QPjyFsby%2B%2F9xB7HkejFPXGMDuo98wBp3XzGnHLgBTQKHlA7MUeUDpwKClZegOxlzMLLoWR6mUhnuDv13qy073Fxws%2FCCeBOXEQRC7LjmckW2VxLaJvp7UxY3ay1JY8o5IWXRxaXi6zhGrVBi43ooHWpApLPK3iMP650b8GOqUB10z1HBoeUuMhStE9Fbo4rIew7uaKJuU0boiJ7sfmz7%2FLmiuH9ZG4qEjHH%2FvDujg940PA89NBOvaMtyrDsrBCt427hTafoQBdXLk9IMFDH7wnqanQNek4nhEKAAbnCubHW5wmf8HrETbAT7LWzG7kPMAFhdnsP7g615jI861zQ7NcHm6Df4fcSJwMXhkv6WFFk1fqhSyA6ISrJPWccrGFdy%2Brw1Wp&X-Amz-Signature=54bafa0c3f36f14de5a062e99815e3856d7ed06c74a3bed10788395981f5e518&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVFBNK7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJrkHyUfkvkYBUXoPkN%2BsGLKxuEW3%2B9nQCwyYC0y3m8AiEA9oa9Y76i9Z4biWnsN0R3r2T1M067tSqVmF%2F730yVZxkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOcuU4klhx2Buzmf7ircA7B0HywKYJOBwY17eCbZKcZ%2FvURBq5ZeQGJ0AKWgQY0hx7Pd4cbDRh17aMzGNgvJjBFdn0D%2BpTfzGD%2FQORN0NxafRFfingrel%2F%2BmA1defJkFHGkX9ZV3vhtKr8UJML%2FPW9DeU41pjwUXCcrQt0dBh0oQjNPYnW87ZLCHv4x9N%2FvHirms9Kjw5KhacHEsnmKIw8Qxdln%2B%2FRGknBnBxpeTFuU3zXLFstP%2FeO8RvuQrS7oolBHhP10I3uC2msFi%2BfI2%2BO1tTGxmzyrHfHVt6LLQNTZrpIv%2F2BvGU15VNoQptzHm%2B0JbGshd%2FwUJiccclBIs1svqPagQlxHdMpJ1Er9BVhmP%2BOXyeJKi%2FhT1UdTfnp5YFMAfU11t2HXvLKdgWo5Oj69YoxUjGJ2ZiUgC5RES3PypPWZRfg8nfj59Qd3aCD4mqezOOzyFC%2FEUOUgO2HcSxzahYb16I21LT2OaMMgLnlGy9N6wj6QPjyFsby%2B%2F9xB7HkejFPXGMDuo98wBp3XzGnHLgBTQKHlA7MUeUDpwKClZegOxlzMLLoWR6mUhnuDv13qy073Fxws%2FCCeBOXEQRC7LjmckW2VxLaJvp7UxY3ay1JY8o5IWXRxaXi6zhGrVBi43ooHWpApLPK3iMP650b8GOqUB10z1HBoeUuMhStE9Fbo4rIew7uaKJuU0boiJ7sfmz7%2FLmiuH9ZG4qEjHH%2FvDujg940PA89NBOvaMtyrDsrBCt427hTafoQBdXLk9IMFDH7wnqanQNek4nhEKAAbnCubHW5wmf8HrETbAT7LWzG7kPMAFhdnsP7g615jI861zQ7NcHm6Df4fcSJwMXhkv6WFFk1fqhSyA6ISrJPWccrGFdy%2Brw1Wp&X-Amz-Signature=28ef699980e43288f33d0d1fbc2c181802146906c1869bb954a528bb04f654be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVFBNK7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJrkHyUfkvkYBUXoPkN%2BsGLKxuEW3%2B9nQCwyYC0y3m8AiEA9oa9Y76i9Z4biWnsN0R3r2T1M067tSqVmF%2F730yVZxkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOcuU4klhx2Buzmf7ircA7B0HywKYJOBwY17eCbZKcZ%2FvURBq5ZeQGJ0AKWgQY0hx7Pd4cbDRh17aMzGNgvJjBFdn0D%2BpTfzGD%2FQORN0NxafRFfingrel%2F%2BmA1defJkFHGkX9ZV3vhtKr8UJML%2FPW9DeU41pjwUXCcrQt0dBh0oQjNPYnW87ZLCHv4x9N%2FvHirms9Kjw5KhacHEsnmKIw8Qxdln%2B%2FRGknBnBxpeTFuU3zXLFstP%2FeO8RvuQrS7oolBHhP10I3uC2msFi%2BfI2%2BO1tTGxmzyrHfHVt6LLQNTZrpIv%2F2BvGU15VNoQptzHm%2B0JbGshd%2FwUJiccclBIs1svqPagQlxHdMpJ1Er9BVhmP%2BOXyeJKi%2FhT1UdTfnp5YFMAfU11t2HXvLKdgWo5Oj69YoxUjGJ2ZiUgC5RES3PypPWZRfg8nfj59Qd3aCD4mqezOOzyFC%2FEUOUgO2HcSxzahYb16I21LT2OaMMgLnlGy9N6wj6QPjyFsby%2B%2F9xB7HkejFPXGMDuo98wBp3XzGnHLgBTQKHlA7MUeUDpwKClZegOxlzMLLoWR6mUhnuDv13qy073Fxws%2FCCeBOXEQRC7LjmckW2VxLaJvp7UxY3ay1JY8o5IWXRxaXi6zhGrVBi43ooHWpApLPK3iMP650b8GOqUB10z1HBoeUuMhStE9Fbo4rIew7uaKJuU0boiJ7sfmz7%2FLmiuH9ZG4qEjHH%2FvDujg940PA89NBOvaMtyrDsrBCt427hTafoQBdXLk9IMFDH7wnqanQNek4nhEKAAbnCubHW5wmf8HrETbAT7LWzG7kPMAFhdnsP7g615jI861zQ7NcHm6Df4fcSJwMXhkv6WFFk1fqhSyA6ISrJPWccrGFdy%2Brw1Wp&X-Amz-Signature=428c6c7b24fabe855dafa9a45f2770455e7a9b6d5326f9e86040f67c19dea0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVFBNK7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJrkHyUfkvkYBUXoPkN%2BsGLKxuEW3%2B9nQCwyYC0y3m8AiEA9oa9Y76i9Z4biWnsN0R3r2T1M067tSqVmF%2F730yVZxkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOcuU4klhx2Buzmf7ircA7B0HywKYJOBwY17eCbZKcZ%2FvURBq5ZeQGJ0AKWgQY0hx7Pd4cbDRh17aMzGNgvJjBFdn0D%2BpTfzGD%2FQORN0NxafRFfingrel%2F%2BmA1defJkFHGkX9ZV3vhtKr8UJML%2FPW9DeU41pjwUXCcrQt0dBh0oQjNPYnW87ZLCHv4x9N%2FvHirms9Kjw5KhacHEsnmKIw8Qxdln%2B%2FRGknBnBxpeTFuU3zXLFstP%2FeO8RvuQrS7oolBHhP10I3uC2msFi%2BfI2%2BO1tTGxmzyrHfHVt6LLQNTZrpIv%2F2BvGU15VNoQptzHm%2B0JbGshd%2FwUJiccclBIs1svqPagQlxHdMpJ1Er9BVhmP%2BOXyeJKi%2FhT1UdTfnp5YFMAfU11t2HXvLKdgWo5Oj69YoxUjGJ2ZiUgC5RES3PypPWZRfg8nfj59Qd3aCD4mqezOOzyFC%2FEUOUgO2HcSxzahYb16I21LT2OaMMgLnlGy9N6wj6QPjyFsby%2B%2F9xB7HkejFPXGMDuo98wBp3XzGnHLgBTQKHlA7MUeUDpwKClZegOxlzMLLoWR6mUhnuDv13qy073Fxws%2FCCeBOXEQRC7LjmckW2VxLaJvp7UxY3ay1JY8o5IWXRxaXi6zhGrVBi43ooHWpApLPK3iMP650b8GOqUB10z1HBoeUuMhStE9Fbo4rIew7uaKJuU0boiJ7sfmz7%2FLmiuH9ZG4qEjHH%2FvDujg940PA89NBOvaMtyrDsrBCt427hTafoQBdXLk9IMFDH7wnqanQNek4nhEKAAbnCubHW5wmf8HrETbAT7LWzG7kPMAFhdnsP7g615jI861zQ7NcHm6Df4fcSJwMXhkv6WFFk1fqhSyA6ISrJPWccrGFdy%2Brw1Wp&X-Amz-Signature=1e73a187b8b5e2d852eda8a9af271c6f34841d3bb54377b8f26a2b479db188b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
