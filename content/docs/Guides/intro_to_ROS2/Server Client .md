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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRC7KV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXZVOHrWQMP1qOtt9HCLi9Fy0Z%2FPXj06HUWjej7FbdIAiEAmp6sqfhZdxEa86speGYS6EPXshW7NZK%2BKiYOztcl058qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh3zIME1rJvPXUcrCrcA%2B61beLse0rVswhU1yKd8vNZpKs53Emi7581%2BZEX23mff9KaYaaHCez%2FGOa185byT6FULpvMkJ%2BADuIqAbHVvz7ZhTmdo%2BbFUnYM9d3PkZ%2Ft9%2FLy6KMd8OIf4j9XDt01fsHsAN2NJljkoj9gu0004ka1127a9L93anx%2BPwJ9D3JJOIXn2%2Bu%2B5xiCcCCq7M3%2FjvYCJp628VQNy0NVGiAQF0TYEOA2azKP4NAKjs15KQZEq6Zh2X5BPmASK6QwijDQpM%2BKE8inJCFrhJxTnSzQlHNxaopT3eSvdwfpUrxZ%2BEwLP6i4XhPOcfvOYK1p%2BJiVljFHmXDmQNttmLoqd4a3H4yCv2plb%2BRjhafOo4m9zKrzLRNrvitK1WyrXIbDubBbXMB86R6OZRsWwdp2inlx1ZET871gHmiyXET5pwz1GiP2VRWDyv8d4BVAoHkjkJTqMYjOndJD1w1lmEXAwZaXz3RO7jcRsuf8duJo0tuc0YnxWTc7RPJ1NUN7f68mC2Bl8vb7V5Ioi90JvK83RuwEGOiQ70SlCdSnBtamWYtqmJaQCmefEtuGW6%2FYJjEwFSls32UDYjk8oQLRGESfPGMwsWG8aGQ%2Bn0EfyAVFfKsi7ePPAdKV0%2FGxexm%2F1uGgMLWC8MsGOqUBvxMpdW1x3I0IO0JTkTslKmnxdTcXcbRMpPSpXG2aMPr51rpF%2BWWGbA1pIYqpbxhbNg7%2BVwjlHOJYX4rLDFzblZs2BMiV95bZB4cwEWstcSWJ28qpQuM%2F0VWPiunpdeIHtiWwhkkONzCcibGy8GjHRPM9QVI9Ak1hyHsgFe4YR%2F6PwjMl9rOLixqs%2BJTyYylAbp9oKyPLrwGSGaA756pXYg4D9XoB&X-Amz-Signature=a9ee3de207fbe7bb6b603e43470af29bda673008c20c7a7d181c54427a18be11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRC7KV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXZVOHrWQMP1qOtt9HCLi9Fy0Z%2FPXj06HUWjej7FbdIAiEAmp6sqfhZdxEa86speGYS6EPXshW7NZK%2BKiYOztcl058qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh3zIME1rJvPXUcrCrcA%2B61beLse0rVswhU1yKd8vNZpKs53Emi7581%2BZEX23mff9KaYaaHCez%2FGOa185byT6FULpvMkJ%2BADuIqAbHVvz7ZhTmdo%2BbFUnYM9d3PkZ%2Ft9%2FLy6KMd8OIf4j9XDt01fsHsAN2NJljkoj9gu0004ka1127a9L93anx%2BPwJ9D3JJOIXn2%2Bu%2B5xiCcCCq7M3%2FjvYCJp628VQNy0NVGiAQF0TYEOA2azKP4NAKjs15KQZEq6Zh2X5BPmASK6QwijDQpM%2BKE8inJCFrhJxTnSzQlHNxaopT3eSvdwfpUrxZ%2BEwLP6i4XhPOcfvOYK1p%2BJiVljFHmXDmQNttmLoqd4a3H4yCv2plb%2BRjhafOo4m9zKrzLRNrvitK1WyrXIbDubBbXMB86R6OZRsWwdp2inlx1ZET871gHmiyXET5pwz1GiP2VRWDyv8d4BVAoHkjkJTqMYjOndJD1w1lmEXAwZaXz3RO7jcRsuf8duJo0tuc0YnxWTc7RPJ1NUN7f68mC2Bl8vb7V5Ioi90JvK83RuwEGOiQ70SlCdSnBtamWYtqmJaQCmefEtuGW6%2FYJjEwFSls32UDYjk8oQLRGESfPGMwsWG8aGQ%2Bn0EfyAVFfKsi7ePPAdKV0%2FGxexm%2F1uGgMLWC8MsGOqUBvxMpdW1x3I0IO0JTkTslKmnxdTcXcbRMpPSpXG2aMPr51rpF%2BWWGbA1pIYqpbxhbNg7%2BVwjlHOJYX4rLDFzblZs2BMiV95bZB4cwEWstcSWJ28qpQuM%2F0VWPiunpdeIHtiWwhkkONzCcibGy8GjHRPM9QVI9Ak1hyHsgFe4YR%2F6PwjMl9rOLixqs%2BJTyYylAbp9oKyPLrwGSGaA756pXYg4D9XoB&X-Amz-Signature=891b030d49b223eee9b077db0d403ff8b60674757ad68ed586634a1f28cfb3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRC7KV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXZVOHrWQMP1qOtt9HCLi9Fy0Z%2FPXj06HUWjej7FbdIAiEAmp6sqfhZdxEa86speGYS6EPXshW7NZK%2BKiYOztcl058qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh3zIME1rJvPXUcrCrcA%2B61beLse0rVswhU1yKd8vNZpKs53Emi7581%2BZEX23mff9KaYaaHCez%2FGOa185byT6FULpvMkJ%2BADuIqAbHVvz7ZhTmdo%2BbFUnYM9d3PkZ%2Ft9%2FLy6KMd8OIf4j9XDt01fsHsAN2NJljkoj9gu0004ka1127a9L93anx%2BPwJ9D3JJOIXn2%2Bu%2B5xiCcCCq7M3%2FjvYCJp628VQNy0NVGiAQF0TYEOA2azKP4NAKjs15KQZEq6Zh2X5BPmASK6QwijDQpM%2BKE8inJCFrhJxTnSzQlHNxaopT3eSvdwfpUrxZ%2BEwLP6i4XhPOcfvOYK1p%2BJiVljFHmXDmQNttmLoqd4a3H4yCv2plb%2BRjhafOo4m9zKrzLRNrvitK1WyrXIbDubBbXMB86R6OZRsWwdp2inlx1ZET871gHmiyXET5pwz1GiP2VRWDyv8d4BVAoHkjkJTqMYjOndJD1w1lmEXAwZaXz3RO7jcRsuf8duJo0tuc0YnxWTc7RPJ1NUN7f68mC2Bl8vb7V5Ioi90JvK83RuwEGOiQ70SlCdSnBtamWYtqmJaQCmefEtuGW6%2FYJjEwFSls32UDYjk8oQLRGESfPGMwsWG8aGQ%2Bn0EfyAVFfKsi7ePPAdKV0%2FGxexm%2F1uGgMLWC8MsGOqUBvxMpdW1x3I0IO0JTkTslKmnxdTcXcbRMpPSpXG2aMPr51rpF%2BWWGbA1pIYqpbxhbNg7%2BVwjlHOJYX4rLDFzblZs2BMiV95bZB4cwEWstcSWJ28qpQuM%2F0VWPiunpdeIHtiWwhkkONzCcibGy8GjHRPM9QVI9Ak1hyHsgFe4YR%2F6PwjMl9rOLixqs%2BJTyYylAbp9oKyPLrwGSGaA756pXYg4D9XoB&X-Amz-Signature=04d61958f34bc36dea6d51c2067c9ff7ade2f139ea52bd8d83f72d32608f15fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRC7KV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXZVOHrWQMP1qOtt9HCLi9Fy0Z%2FPXj06HUWjej7FbdIAiEAmp6sqfhZdxEa86speGYS6EPXshW7NZK%2BKiYOztcl058qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh3zIME1rJvPXUcrCrcA%2B61beLse0rVswhU1yKd8vNZpKs53Emi7581%2BZEX23mff9KaYaaHCez%2FGOa185byT6FULpvMkJ%2BADuIqAbHVvz7ZhTmdo%2BbFUnYM9d3PkZ%2Ft9%2FLy6KMd8OIf4j9XDt01fsHsAN2NJljkoj9gu0004ka1127a9L93anx%2BPwJ9D3JJOIXn2%2Bu%2B5xiCcCCq7M3%2FjvYCJp628VQNy0NVGiAQF0TYEOA2azKP4NAKjs15KQZEq6Zh2X5BPmASK6QwijDQpM%2BKE8inJCFrhJxTnSzQlHNxaopT3eSvdwfpUrxZ%2BEwLP6i4XhPOcfvOYK1p%2BJiVljFHmXDmQNttmLoqd4a3H4yCv2plb%2BRjhafOo4m9zKrzLRNrvitK1WyrXIbDubBbXMB86R6OZRsWwdp2inlx1ZET871gHmiyXET5pwz1GiP2VRWDyv8d4BVAoHkjkJTqMYjOndJD1w1lmEXAwZaXz3RO7jcRsuf8duJo0tuc0YnxWTc7RPJ1NUN7f68mC2Bl8vb7V5Ioi90JvK83RuwEGOiQ70SlCdSnBtamWYtqmJaQCmefEtuGW6%2FYJjEwFSls32UDYjk8oQLRGESfPGMwsWG8aGQ%2Bn0EfyAVFfKsi7ePPAdKV0%2FGxexm%2F1uGgMLWC8MsGOqUBvxMpdW1x3I0IO0JTkTslKmnxdTcXcbRMpPSpXG2aMPr51rpF%2BWWGbA1pIYqpbxhbNg7%2BVwjlHOJYX4rLDFzblZs2BMiV95bZB4cwEWstcSWJ28qpQuM%2F0VWPiunpdeIHtiWwhkkONzCcibGy8GjHRPM9QVI9Ak1hyHsgFe4YR%2F6PwjMl9rOLixqs%2BJTyYylAbp9oKyPLrwGSGaA756pXYg4D9XoB&X-Amz-Signature=7b240f151e49d0cc0a15d78a034b2a612d306659b85b88baddec2c5d5b2ba923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHRC7KV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXZVOHrWQMP1qOtt9HCLi9Fy0Z%2FPXj06HUWjej7FbdIAiEAmp6sqfhZdxEa86speGYS6EPXshW7NZK%2BKiYOztcl058qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh3zIME1rJvPXUcrCrcA%2B61beLse0rVswhU1yKd8vNZpKs53Emi7581%2BZEX23mff9KaYaaHCez%2FGOa185byT6FULpvMkJ%2BADuIqAbHVvz7ZhTmdo%2BbFUnYM9d3PkZ%2Ft9%2FLy6KMd8OIf4j9XDt01fsHsAN2NJljkoj9gu0004ka1127a9L93anx%2BPwJ9D3JJOIXn2%2Bu%2B5xiCcCCq7M3%2FjvYCJp628VQNy0NVGiAQF0TYEOA2azKP4NAKjs15KQZEq6Zh2X5BPmASK6QwijDQpM%2BKE8inJCFrhJxTnSzQlHNxaopT3eSvdwfpUrxZ%2BEwLP6i4XhPOcfvOYK1p%2BJiVljFHmXDmQNttmLoqd4a3H4yCv2plb%2BRjhafOo4m9zKrzLRNrvitK1WyrXIbDubBbXMB86R6OZRsWwdp2inlx1ZET871gHmiyXET5pwz1GiP2VRWDyv8d4BVAoHkjkJTqMYjOndJD1w1lmEXAwZaXz3RO7jcRsuf8duJo0tuc0YnxWTc7RPJ1NUN7f68mC2Bl8vb7V5Ioi90JvK83RuwEGOiQ70SlCdSnBtamWYtqmJaQCmefEtuGW6%2FYJjEwFSls32UDYjk8oQLRGESfPGMwsWG8aGQ%2Bn0EfyAVFfKsi7ePPAdKV0%2FGxexm%2F1uGgMLWC8MsGOqUBvxMpdW1x3I0IO0JTkTslKmnxdTcXcbRMpPSpXG2aMPr51rpF%2BWWGbA1pIYqpbxhbNg7%2BVwjlHOJYX4rLDFzblZs2BMiV95bZB4cwEWstcSWJ28qpQuM%2F0VWPiunpdeIHtiWwhkkONzCcibGy8GjHRPM9QVI9Ak1hyHsgFe4YR%2F6PwjMl9rOLixqs%2BJTyYylAbp9oKyPLrwGSGaA756pXYg4D9XoB&X-Amz-Signature=5f96cc1c9e95689ab2dd9c75c8427ba8dd8a20083d4541ba4ecfb9c5b5fd770c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
