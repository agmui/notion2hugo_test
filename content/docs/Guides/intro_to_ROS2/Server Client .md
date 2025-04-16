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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JEG5RR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZZchRAXoxSa62IYJ%2BvGYHA2Ron8kLvMd%2F%2BDrnYviCCAiEA6Mn6VIoBAWBaJJkPSYziW2tbzNoSMX9ADGa%2BkM8jr5Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAnQiAT9%2B85f2Vqj2yrcAxzGvnpNo3MStyXmXxtNv2xbfdLdO98LG9%2BeBtHlRsfdaw7ytR96tGBzvrKGY%2B9YiEumH88tGTmYdCjkceRmjy3vK9d6b4RYywmdI8jgc9WmMzl%2FD%2BDdP7Z%2BzY%2BknT9a0Z8n6BPB5LsqA8Azq4BABp8pQ4B9sQ5xZtjMzypw0wcom7ywz51Ouec8ipetreoRd4x3vuBe%2F1ulxj0YmfgFYAOZJeg7i62aavr2jvMvpSczpVupD6qbjlFTBuqUihFMpmI8zjKy5esODIF0zGha%2FJadRXBdsFprLIvE5mcy6GbsAAW7zDZzmQuq4TWJ0cR5A%2BjPgXqreoCHPcisBowdk2j%2B%2Bkk4npS%2BDM0PZau%2B04WZ%2FlyuV2lfC2pOl5Oae5A583SBo0o406ZrWaS1IZ%2Ffm5UQEMsPy5g%2Fh5hLQ%2B2DI9annifvYTWO5mxdmsuzwuvmdSBu5ATUERKGLbJKX9Obdj%2FOwbUw41zs9Ole2np6Yd8sHmtcjhkRpilFF8CD%2BFR22dlkjJjPcfWyZkXUAME7XGhHUR6eOQaZIwSyApES3eR3dkwOdS7MZODn%2BD4RkpV2vkikRt%2BBSe%2BY%2BBYHtZf1TkLtG9sqQMGfeAxz0FjC5UzTfHYvURSCGbxQQUA1MMa8%2FL8GOqUBpq6pvgLAMXyyRUl%2B%2ByzYstjjyj%2BewILJo72oXtLU7nWWOezbyKY4d1CwarxVS3j7V4gDS2Rco13prRCN0YnA1EnqdT0H6D%2B0lLwkui6LbR6KxIPLNwJfj7OjKvYYp3YVw3rXYlDm21ZEefv5YWElB%2B7yR2xCa4jNdc1BI%2Bi9e5J0HxhQLNAttFBQg%2FFZKK%2F4OWoDK2PPjE7i1IHpjz%2FAjxC%2BbRop&X-Amz-Signature=7955f79f6fc073c1405161642239748a2612730aabb9af5ee62f28dc783ca049&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JEG5RR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZZchRAXoxSa62IYJ%2BvGYHA2Ron8kLvMd%2F%2BDrnYviCCAiEA6Mn6VIoBAWBaJJkPSYziW2tbzNoSMX9ADGa%2BkM8jr5Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAnQiAT9%2B85f2Vqj2yrcAxzGvnpNo3MStyXmXxtNv2xbfdLdO98LG9%2BeBtHlRsfdaw7ytR96tGBzvrKGY%2B9YiEumH88tGTmYdCjkceRmjy3vK9d6b4RYywmdI8jgc9WmMzl%2FD%2BDdP7Z%2BzY%2BknT9a0Z8n6BPB5LsqA8Azq4BABp8pQ4B9sQ5xZtjMzypw0wcom7ywz51Ouec8ipetreoRd4x3vuBe%2F1ulxj0YmfgFYAOZJeg7i62aavr2jvMvpSczpVupD6qbjlFTBuqUihFMpmI8zjKy5esODIF0zGha%2FJadRXBdsFprLIvE5mcy6GbsAAW7zDZzmQuq4TWJ0cR5A%2BjPgXqreoCHPcisBowdk2j%2B%2Bkk4npS%2BDM0PZau%2B04WZ%2FlyuV2lfC2pOl5Oae5A583SBo0o406ZrWaS1IZ%2Ffm5UQEMsPy5g%2Fh5hLQ%2B2DI9annifvYTWO5mxdmsuzwuvmdSBu5ATUERKGLbJKX9Obdj%2FOwbUw41zs9Ole2np6Yd8sHmtcjhkRpilFF8CD%2BFR22dlkjJjPcfWyZkXUAME7XGhHUR6eOQaZIwSyApES3eR3dkwOdS7MZODn%2BD4RkpV2vkikRt%2BBSe%2BY%2BBYHtZf1TkLtG9sqQMGfeAxz0FjC5UzTfHYvURSCGbxQQUA1MMa8%2FL8GOqUBpq6pvgLAMXyyRUl%2B%2ByzYstjjyj%2BewILJo72oXtLU7nWWOezbyKY4d1CwarxVS3j7V4gDS2Rco13prRCN0YnA1EnqdT0H6D%2B0lLwkui6LbR6KxIPLNwJfj7OjKvYYp3YVw3rXYlDm21ZEefv5YWElB%2B7yR2xCa4jNdc1BI%2Bi9e5J0HxhQLNAttFBQg%2FFZKK%2F4OWoDK2PPjE7i1IHpjz%2FAjxC%2BbRop&X-Amz-Signature=a9330717b2366b7265ffd5dda4ac84690da7359977b0465aa439c00e4e067fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JEG5RR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZZchRAXoxSa62IYJ%2BvGYHA2Ron8kLvMd%2F%2BDrnYviCCAiEA6Mn6VIoBAWBaJJkPSYziW2tbzNoSMX9ADGa%2BkM8jr5Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAnQiAT9%2B85f2Vqj2yrcAxzGvnpNo3MStyXmXxtNv2xbfdLdO98LG9%2BeBtHlRsfdaw7ytR96tGBzvrKGY%2B9YiEumH88tGTmYdCjkceRmjy3vK9d6b4RYywmdI8jgc9WmMzl%2FD%2BDdP7Z%2BzY%2BknT9a0Z8n6BPB5LsqA8Azq4BABp8pQ4B9sQ5xZtjMzypw0wcom7ywz51Ouec8ipetreoRd4x3vuBe%2F1ulxj0YmfgFYAOZJeg7i62aavr2jvMvpSczpVupD6qbjlFTBuqUihFMpmI8zjKy5esODIF0zGha%2FJadRXBdsFprLIvE5mcy6GbsAAW7zDZzmQuq4TWJ0cR5A%2BjPgXqreoCHPcisBowdk2j%2B%2Bkk4npS%2BDM0PZau%2B04WZ%2FlyuV2lfC2pOl5Oae5A583SBo0o406ZrWaS1IZ%2Ffm5UQEMsPy5g%2Fh5hLQ%2B2DI9annifvYTWO5mxdmsuzwuvmdSBu5ATUERKGLbJKX9Obdj%2FOwbUw41zs9Ole2np6Yd8sHmtcjhkRpilFF8CD%2BFR22dlkjJjPcfWyZkXUAME7XGhHUR6eOQaZIwSyApES3eR3dkwOdS7MZODn%2BD4RkpV2vkikRt%2BBSe%2BY%2BBYHtZf1TkLtG9sqQMGfeAxz0FjC5UzTfHYvURSCGbxQQUA1MMa8%2FL8GOqUBpq6pvgLAMXyyRUl%2B%2ByzYstjjyj%2BewILJo72oXtLU7nWWOezbyKY4d1CwarxVS3j7V4gDS2Rco13prRCN0YnA1EnqdT0H6D%2B0lLwkui6LbR6KxIPLNwJfj7OjKvYYp3YVw3rXYlDm21ZEefv5YWElB%2B7yR2xCa4jNdc1BI%2Bi9e5J0HxhQLNAttFBQg%2FFZKK%2F4OWoDK2PPjE7i1IHpjz%2FAjxC%2BbRop&X-Amz-Signature=1b5051e5c142f17234fc2fd109947e927226be4e38a1bae5583b8f3bf438192a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JEG5RR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZZchRAXoxSa62IYJ%2BvGYHA2Ron8kLvMd%2F%2BDrnYviCCAiEA6Mn6VIoBAWBaJJkPSYziW2tbzNoSMX9ADGa%2BkM8jr5Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAnQiAT9%2B85f2Vqj2yrcAxzGvnpNo3MStyXmXxtNv2xbfdLdO98LG9%2BeBtHlRsfdaw7ytR96tGBzvrKGY%2B9YiEumH88tGTmYdCjkceRmjy3vK9d6b4RYywmdI8jgc9WmMzl%2FD%2BDdP7Z%2BzY%2BknT9a0Z8n6BPB5LsqA8Azq4BABp8pQ4B9sQ5xZtjMzypw0wcom7ywz51Ouec8ipetreoRd4x3vuBe%2F1ulxj0YmfgFYAOZJeg7i62aavr2jvMvpSczpVupD6qbjlFTBuqUihFMpmI8zjKy5esODIF0zGha%2FJadRXBdsFprLIvE5mcy6GbsAAW7zDZzmQuq4TWJ0cR5A%2BjPgXqreoCHPcisBowdk2j%2B%2Bkk4npS%2BDM0PZau%2B04WZ%2FlyuV2lfC2pOl5Oae5A583SBo0o406ZrWaS1IZ%2Ffm5UQEMsPy5g%2Fh5hLQ%2B2DI9annifvYTWO5mxdmsuzwuvmdSBu5ATUERKGLbJKX9Obdj%2FOwbUw41zs9Ole2np6Yd8sHmtcjhkRpilFF8CD%2BFR22dlkjJjPcfWyZkXUAME7XGhHUR6eOQaZIwSyApES3eR3dkwOdS7MZODn%2BD4RkpV2vkikRt%2BBSe%2BY%2BBYHtZf1TkLtG9sqQMGfeAxz0FjC5UzTfHYvURSCGbxQQUA1MMa8%2FL8GOqUBpq6pvgLAMXyyRUl%2B%2ByzYstjjyj%2BewILJo72oXtLU7nWWOezbyKY4d1CwarxVS3j7V4gDS2Rco13prRCN0YnA1EnqdT0H6D%2B0lLwkui6LbR6KxIPLNwJfj7OjKvYYp3YVw3rXYlDm21ZEefv5YWElB%2B7yR2xCa4jNdc1BI%2Bi9e5J0HxhQLNAttFBQg%2FFZKK%2F4OWoDK2PPjE7i1IHpjz%2FAjxC%2BbRop&X-Amz-Signature=fcadbb5d5bb86bff065fe2462605acd208d3103b54487731523d89bda4693e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JEG5RR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZZchRAXoxSa62IYJ%2BvGYHA2Ron8kLvMd%2F%2BDrnYviCCAiEA6Mn6VIoBAWBaJJkPSYziW2tbzNoSMX9ADGa%2BkM8jr5Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAnQiAT9%2B85f2Vqj2yrcAxzGvnpNo3MStyXmXxtNv2xbfdLdO98LG9%2BeBtHlRsfdaw7ytR96tGBzvrKGY%2B9YiEumH88tGTmYdCjkceRmjy3vK9d6b4RYywmdI8jgc9WmMzl%2FD%2BDdP7Z%2BzY%2BknT9a0Z8n6BPB5LsqA8Azq4BABp8pQ4B9sQ5xZtjMzypw0wcom7ywz51Ouec8ipetreoRd4x3vuBe%2F1ulxj0YmfgFYAOZJeg7i62aavr2jvMvpSczpVupD6qbjlFTBuqUihFMpmI8zjKy5esODIF0zGha%2FJadRXBdsFprLIvE5mcy6GbsAAW7zDZzmQuq4TWJ0cR5A%2BjPgXqreoCHPcisBowdk2j%2B%2Bkk4npS%2BDM0PZau%2B04WZ%2FlyuV2lfC2pOl5Oae5A583SBo0o406ZrWaS1IZ%2Ffm5UQEMsPy5g%2Fh5hLQ%2B2DI9annifvYTWO5mxdmsuzwuvmdSBu5ATUERKGLbJKX9Obdj%2FOwbUw41zs9Ole2np6Yd8sHmtcjhkRpilFF8CD%2BFR22dlkjJjPcfWyZkXUAME7XGhHUR6eOQaZIwSyApES3eR3dkwOdS7MZODn%2BD4RkpV2vkikRt%2BBSe%2BY%2BBYHtZf1TkLtG9sqQMGfeAxz0FjC5UzTfHYvURSCGbxQQUA1MMa8%2FL8GOqUBpq6pvgLAMXyyRUl%2B%2ByzYstjjyj%2BewILJo72oXtLU7nWWOezbyKY4d1CwarxVS3j7V4gDS2Rco13prRCN0YnA1EnqdT0H6D%2B0lLwkui6LbR6KxIPLNwJfj7OjKvYYp3YVw3rXYlDm21ZEefv5YWElB%2B7yR2xCa4jNdc1BI%2Bi9e5J0HxhQLNAttFBQg%2FFZKK%2F4OWoDK2PPjE7i1IHpjz%2FAjxC%2BbRop&X-Amz-Signature=ddca71512ded30be099a3512238f20ac11108f7484200477a97343370978a387&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
