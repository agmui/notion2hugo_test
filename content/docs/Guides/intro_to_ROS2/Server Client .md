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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWVTVCW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKOf%2B8%2FnqawhbIR5XkveLu7ji7l1yIxynCUNYnEhOzrwIgTsVXj5hEA%2FKaRnuX8LPhtSIU15om14vgBn2TqW9V2ckqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErCvd9VYEo%2FFFxWLyrcA1fAdo8xnU%2B4OXYaGHX9k3WgiRI8a2NL1%2B4YTab6DyuJ88YxIo%2FpV2f8y16llrKh7vsv5qDuRxwZv7FC%2FPwKyscbOnLNhyPutf6VV7AeLLzRY0wYUftCvO9FhAvGO5SQ%2FL%2FetLfqqlluqg6bX7ADlM%2FplvpGLYczjj7ClBF2br%2B5xaYWoRKFBB1ARbWNAqxA0m1Z6kBIV7RhLC6ZUMaZyIxMcnez%2F2PD4Yho3gCeqaIjLrXm9jG7r2nV5ZkBWewmbgJURl9UpjpEfisZJJS73OXanF3l1GCh%2FN4WhKEK3349nA2RZL5g555fXS8vquJXLpymSFvHgXyvZyf5ApZbV%2FY0gdtq6dwyGOeFvkG6xuZY2fb7KjF07NmsQp5BhTsXs3H6%2BfMxNAOaZcJIilbm9zYwnw7If0LZ%2BTR58FCO3dwidSiSuLKo0JJjEVSsV%2FfZoOIHlObP6PLbfdUEytNcW%2FhkVt41OejEUCHo8n5aUHypBrN7ILe1DSHKc9vrPxyaPqeJc4A0iIRyhFWBCXvwU%2Fxr6vKxLwH%2B2pvL0UcKs9V3u7bPLvB7%2BfdZWGVQNGmOANoxwJ72qsc00jIO%2BEpIXHtaXko%2Fz5NbswRdlcuHkrGBv8pEZjbdVAF%2Bu0npMITrr70GOqUB6037ttro50haYwST3rfrJMGL5vIZYKUUQDtgWwSEqifJv4FICpwtwMGL2%2BG2Ni%2F2%2Fa2PrJj4uGl65iCWrndsFbmEfNAUmB%2BKiJF0TeR%2Bmzf9cSx9VU1W%2BOblSbgl%2BmzHVqVJzpmGXg6q8jJ4821zZmfBlKVI0mBgkgQDb9TQMZDUw9CyElhyY%2FHGGtNTqW2JgdyKfoy4qaGH9la975bWWt9mquwy&X-Amz-Signature=efcad62241281618864e4b37966e57e4a66753e59121ae51ce3499e82c5a0996&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWVTVCW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKOf%2B8%2FnqawhbIR5XkveLu7ji7l1yIxynCUNYnEhOzrwIgTsVXj5hEA%2FKaRnuX8LPhtSIU15om14vgBn2TqW9V2ckqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErCvd9VYEo%2FFFxWLyrcA1fAdo8xnU%2B4OXYaGHX9k3WgiRI8a2NL1%2B4YTab6DyuJ88YxIo%2FpV2f8y16llrKh7vsv5qDuRxwZv7FC%2FPwKyscbOnLNhyPutf6VV7AeLLzRY0wYUftCvO9FhAvGO5SQ%2FL%2FetLfqqlluqg6bX7ADlM%2FplvpGLYczjj7ClBF2br%2B5xaYWoRKFBB1ARbWNAqxA0m1Z6kBIV7RhLC6ZUMaZyIxMcnez%2F2PD4Yho3gCeqaIjLrXm9jG7r2nV5ZkBWewmbgJURl9UpjpEfisZJJS73OXanF3l1GCh%2FN4WhKEK3349nA2RZL5g555fXS8vquJXLpymSFvHgXyvZyf5ApZbV%2FY0gdtq6dwyGOeFvkG6xuZY2fb7KjF07NmsQp5BhTsXs3H6%2BfMxNAOaZcJIilbm9zYwnw7If0LZ%2BTR58FCO3dwidSiSuLKo0JJjEVSsV%2FfZoOIHlObP6PLbfdUEytNcW%2FhkVt41OejEUCHo8n5aUHypBrN7ILe1DSHKc9vrPxyaPqeJc4A0iIRyhFWBCXvwU%2Fxr6vKxLwH%2B2pvL0UcKs9V3u7bPLvB7%2BfdZWGVQNGmOANoxwJ72qsc00jIO%2BEpIXHtaXko%2Fz5NbswRdlcuHkrGBv8pEZjbdVAF%2Bu0npMITrr70GOqUB6037ttro50haYwST3rfrJMGL5vIZYKUUQDtgWwSEqifJv4FICpwtwMGL2%2BG2Ni%2F2%2Fa2PrJj4uGl65iCWrndsFbmEfNAUmB%2BKiJF0TeR%2Bmzf9cSx9VU1W%2BOblSbgl%2BmzHVqVJzpmGXg6q8jJ4821zZmfBlKVI0mBgkgQDb9TQMZDUw9CyElhyY%2FHGGtNTqW2JgdyKfoy4qaGH9la975bWWt9mquwy&X-Amz-Signature=2369e5fa72301b5033958a1a6fee211d196bca347bfc347605f8dc7ba31a2f72&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWVTVCW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKOf%2B8%2FnqawhbIR5XkveLu7ji7l1yIxynCUNYnEhOzrwIgTsVXj5hEA%2FKaRnuX8LPhtSIU15om14vgBn2TqW9V2ckqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErCvd9VYEo%2FFFxWLyrcA1fAdo8xnU%2B4OXYaGHX9k3WgiRI8a2NL1%2B4YTab6DyuJ88YxIo%2FpV2f8y16llrKh7vsv5qDuRxwZv7FC%2FPwKyscbOnLNhyPutf6VV7AeLLzRY0wYUftCvO9FhAvGO5SQ%2FL%2FetLfqqlluqg6bX7ADlM%2FplvpGLYczjj7ClBF2br%2B5xaYWoRKFBB1ARbWNAqxA0m1Z6kBIV7RhLC6ZUMaZyIxMcnez%2F2PD4Yho3gCeqaIjLrXm9jG7r2nV5ZkBWewmbgJURl9UpjpEfisZJJS73OXanF3l1GCh%2FN4WhKEK3349nA2RZL5g555fXS8vquJXLpymSFvHgXyvZyf5ApZbV%2FY0gdtq6dwyGOeFvkG6xuZY2fb7KjF07NmsQp5BhTsXs3H6%2BfMxNAOaZcJIilbm9zYwnw7If0LZ%2BTR58FCO3dwidSiSuLKo0JJjEVSsV%2FfZoOIHlObP6PLbfdUEytNcW%2FhkVt41OejEUCHo8n5aUHypBrN7ILe1DSHKc9vrPxyaPqeJc4A0iIRyhFWBCXvwU%2Fxr6vKxLwH%2B2pvL0UcKs9V3u7bPLvB7%2BfdZWGVQNGmOANoxwJ72qsc00jIO%2BEpIXHtaXko%2Fz5NbswRdlcuHkrGBv8pEZjbdVAF%2Bu0npMITrr70GOqUB6037ttro50haYwST3rfrJMGL5vIZYKUUQDtgWwSEqifJv4FICpwtwMGL2%2BG2Ni%2F2%2Fa2PrJj4uGl65iCWrndsFbmEfNAUmB%2BKiJF0TeR%2Bmzf9cSx9VU1W%2BOblSbgl%2BmzHVqVJzpmGXg6q8jJ4821zZmfBlKVI0mBgkgQDb9TQMZDUw9CyElhyY%2FHGGtNTqW2JgdyKfoy4qaGH9la975bWWt9mquwy&X-Amz-Signature=ad11f3ae9db7eab5a7bf4fcffcf50cf595a1d84c601b9ba67cb8645043e0db9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWVTVCW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKOf%2B8%2FnqawhbIR5XkveLu7ji7l1yIxynCUNYnEhOzrwIgTsVXj5hEA%2FKaRnuX8LPhtSIU15om14vgBn2TqW9V2ckqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErCvd9VYEo%2FFFxWLyrcA1fAdo8xnU%2B4OXYaGHX9k3WgiRI8a2NL1%2B4YTab6DyuJ88YxIo%2FpV2f8y16llrKh7vsv5qDuRxwZv7FC%2FPwKyscbOnLNhyPutf6VV7AeLLzRY0wYUftCvO9FhAvGO5SQ%2FL%2FetLfqqlluqg6bX7ADlM%2FplvpGLYczjj7ClBF2br%2B5xaYWoRKFBB1ARbWNAqxA0m1Z6kBIV7RhLC6ZUMaZyIxMcnez%2F2PD4Yho3gCeqaIjLrXm9jG7r2nV5ZkBWewmbgJURl9UpjpEfisZJJS73OXanF3l1GCh%2FN4WhKEK3349nA2RZL5g555fXS8vquJXLpymSFvHgXyvZyf5ApZbV%2FY0gdtq6dwyGOeFvkG6xuZY2fb7KjF07NmsQp5BhTsXs3H6%2BfMxNAOaZcJIilbm9zYwnw7If0LZ%2BTR58FCO3dwidSiSuLKo0JJjEVSsV%2FfZoOIHlObP6PLbfdUEytNcW%2FhkVt41OejEUCHo8n5aUHypBrN7ILe1DSHKc9vrPxyaPqeJc4A0iIRyhFWBCXvwU%2Fxr6vKxLwH%2B2pvL0UcKs9V3u7bPLvB7%2BfdZWGVQNGmOANoxwJ72qsc00jIO%2BEpIXHtaXko%2Fz5NbswRdlcuHkrGBv8pEZjbdVAF%2Bu0npMITrr70GOqUB6037ttro50haYwST3rfrJMGL5vIZYKUUQDtgWwSEqifJv4FICpwtwMGL2%2BG2Ni%2F2%2Fa2PrJj4uGl65iCWrndsFbmEfNAUmB%2BKiJF0TeR%2Bmzf9cSx9VU1W%2BOblSbgl%2BmzHVqVJzpmGXg6q8jJ4821zZmfBlKVI0mBgkgQDb9TQMZDUw9CyElhyY%2FHGGtNTqW2JgdyKfoy4qaGH9la975bWWt9mquwy&X-Amz-Signature=a17574b21d64cbdb658aacd172c6a7e9a729fc104994a5ebf057d61411cda71d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWVTVCW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKOf%2B8%2FnqawhbIR5XkveLu7ji7l1yIxynCUNYnEhOzrwIgTsVXj5hEA%2FKaRnuX8LPhtSIU15om14vgBn2TqW9V2ckqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErCvd9VYEo%2FFFxWLyrcA1fAdo8xnU%2B4OXYaGHX9k3WgiRI8a2NL1%2B4YTab6DyuJ88YxIo%2FpV2f8y16llrKh7vsv5qDuRxwZv7FC%2FPwKyscbOnLNhyPutf6VV7AeLLzRY0wYUftCvO9FhAvGO5SQ%2FL%2FetLfqqlluqg6bX7ADlM%2FplvpGLYczjj7ClBF2br%2B5xaYWoRKFBB1ARbWNAqxA0m1Z6kBIV7RhLC6ZUMaZyIxMcnez%2F2PD4Yho3gCeqaIjLrXm9jG7r2nV5ZkBWewmbgJURl9UpjpEfisZJJS73OXanF3l1GCh%2FN4WhKEK3349nA2RZL5g555fXS8vquJXLpymSFvHgXyvZyf5ApZbV%2FY0gdtq6dwyGOeFvkG6xuZY2fb7KjF07NmsQp5BhTsXs3H6%2BfMxNAOaZcJIilbm9zYwnw7If0LZ%2BTR58FCO3dwidSiSuLKo0JJjEVSsV%2FfZoOIHlObP6PLbfdUEytNcW%2FhkVt41OejEUCHo8n5aUHypBrN7ILe1DSHKc9vrPxyaPqeJc4A0iIRyhFWBCXvwU%2Fxr6vKxLwH%2B2pvL0UcKs9V3u7bPLvB7%2BfdZWGVQNGmOANoxwJ72qsc00jIO%2BEpIXHtaXko%2Fz5NbswRdlcuHkrGBv8pEZjbdVAF%2Bu0npMITrr70GOqUB6037ttro50haYwST3rfrJMGL5vIZYKUUQDtgWwSEqifJv4FICpwtwMGL2%2BG2Ni%2F2%2Fa2PrJj4uGl65iCWrndsFbmEfNAUmB%2BKiJF0TeR%2Bmzf9cSx9VU1W%2BOblSbgl%2BmzHVqVJzpmGXg6q8jJ4821zZmfBlKVI0mBgkgQDb9TQMZDUw9CyElhyY%2FHGGtNTqW2JgdyKfoy4qaGH9la975bWWt9mquwy&X-Amz-Signature=33c7d56ed9cdf76d275e148922cdec8a64576449f74b1dfa45b20729dee42b91&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
