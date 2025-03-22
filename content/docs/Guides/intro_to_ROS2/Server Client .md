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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKOFJDO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBgzRLnn4kINeHirzpVzWenKUn74rJmPVec7WimWVYrFAiA533SqUM46XRJa%2FJmj6eE%2FqlsAo1dxiBO9MYnvQ39LByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsiTjl0fI%2FqnRR5WMKtwDiJjKNW8x8TW93X%2BrKskTXrbunDH%2BrlODbqCs2kWiUhRRAN9zlRFmqHQaU7yGX%2FulCguepkaeXuFAHHMKiub5Hxz6etXx%2F%2BUiyUUCo4aLZVlPhlPEEVOviptug3NAeHABkA7NC0PrlwSDyWBuoeYo8rDBJcnKvlND4HoS6sBsn8xzUqsvJ3k6XDDUxFVFBv013o0w%2BWdvveMrDD53XVHb3W3GXEBLNJGRVxW9UrL2IZBiu39Pnmy5sYrze9pNQJZgqeoQpyiAKvICxa7nB4mF%2B8X0kxef9zoBlqpommXrPrDb6PDCHatCVPcxdXVZBA5Cp8OqWx554ok9Ls1k2lSTVqpuYKJ6yLaOr9uAoaZxjwHFV1fb7WMf6AHejhsdqPShWFXUWujeIfZj3dNcOsxKEEKvuzIUN8lUqW5L%2B6a%2BaRHsH2%2B1WzZFFzHE7StLjNgNLRwWO3CibvVavirVKBmsGH4%2F%2F1JOW75AYy8daRY%2FaO9CWCFmnSRbD%2BArB0b8wEwF7RwWGwx1R0sTbZOSp3LHwbhFYeIjz7sluPOCdGR9jQB9r3WdC2NZpWjlB86TAxO1bZlIriWr%2BBG%2BID%2FWi272N0y%2FpyRnN3y%2BCAxumaqbLVToOPujE2%2BXlSSmoUMwpu%2F7vgY6pgFIgPqf23X%2BY7rKjNAg%2BphxHECNjFcGJklV7636GcnnlVGUG21GiOOyCq0MLnR3f73kg890gfuJDA2%2F4EbLrSVDRf6f6PF3ubOZX%2Fdv7TKB%2FLHlBTxWbvIUMLqB9H560y4hK9K6u%2Ba5j8rfUBpq4ooX4Vb7N84LJNqeyv7lfl0%2F42EfPCk1ZwAif3moDOEdryMn5q9FWNPwpmcR31Ik9NO22tkN50LM&X-Amz-Signature=b7fc0f39c8e834527cf9d7f2a91f4ce57f06fdc70191dc4f68754ef4d119f693&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKOFJDO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBgzRLnn4kINeHirzpVzWenKUn74rJmPVec7WimWVYrFAiA533SqUM46XRJa%2FJmj6eE%2FqlsAo1dxiBO9MYnvQ39LByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsiTjl0fI%2FqnRR5WMKtwDiJjKNW8x8TW93X%2BrKskTXrbunDH%2BrlODbqCs2kWiUhRRAN9zlRFmqHQaU7yGX%2FulCguepkaeXuFAHHMKiub5Hxz6etXx%2F%2BUiyUUCo4aLZVlPhlPEEVOviptug3NAeHABkA7NC0PrlwSDyWBuoeYo8rDBJcnKvlND4HoS6sBsn8xzUqsvJ3k6XDDUxFVFBv013o0w%2BWdvveMrDD53XVHb3W3GXEBLNJGRVxW9UrL2IZBiu39Pnmy5sYrze9pNQJZgqeoQpyiAKvICxa7nB4mF%2B8X0kxef9zoBlqpommXrPrDb6PDCHatCVPcxdXVZBA5Cp8OqWx554ok9Ls1k2lSTVqpuYKJ6yLaOr9uAoaZxjwHFV1fb7WMf6AHejhsdqPShWFXUWujeIfZj3dNcOsxKEEKvuzIUN8lUqW5L%2B6a%2BaRHsH2%2B1WzZFFzHE7StLjNgNLRwWO3CibvVavirVKBmsGH4%2F%2F1JOW75AYy8daRY%2FaO9CWCFmnSRbD%2BArB0b8wEwF7RwWGwx1R0sTbZOSp3LHwbhFYeIjz7sluPOCdGR9jQB9r3WdC2NZpWjlB86TAxO1bZlIriWr%2BBG%2BID%2FWi272N0y%2FpyRnN3y%2BCAxumaqbLVToOPujE2%2BXlSSmoUMwpu%2F7vgY6pgFIgPqf23X%2BY7rKjNAg%2BphxHECNjFcGJklV7636GcnnlVGUG21GiOOyCq0MLnR3f73kg890gfuJDA2%2F4EbLrSVDRf6f6PF3ubOZX%2Fdv7TKB%2FLHlBTxWbvIUMLqB9H560y4hK9K6u%2Ba5j8rfUBpq4ooX4Vb7N84LJNqeyv7lfl0%2F42EfPCk1ZwAif3moDOEdryMn5q9FWNPwpmcR31Ik9NO22tkN50LM&X-Amz-Signature=9ca01259858c7a8aa5b13c2e72a87269e72f370aabcf9a92123017c288461ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKOFJDO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBgzRLnn4kINeHirzpVzWenKUn74rJmPVec7WimWVYrFAiA533SqUM46XRJa%2FJmj6eE%2FqlsAo1dxiBO9MYnvQ39LByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsiTjl0fI%2FqnRR5WMKtwDiJjKNW8x8TW93X%2BrKskTXrbunDH%2BrlODbqCs2kWiUhRRAN9zlRFmqHQaU7yGX%2FulCguepkaeXuFAHHMKiub5Hxz6etXx%2F%2BUiyUUCo4aLZVlPhlPEEVOviptug3NAeHABkA7NC0PrlwSDyWBuoeYo8rDBJcnKvlND4HoS6sBsn8xzUqsvJ3k6XDDUxFVFBv013o0w%2BWdvveMrDD53XVHb3W3GXEBLNJGRVxW9UrL2IZBiu39Pnmy5sYrze9pNQJZgqeoQpyiAKvICxa7nB4mF%2B8X0kxef9zoBlqpommXrPrDb6PDCHatCVPcxdXVZBA5Cp8OqWx554ok9Ls1k2lSTVqpuYKJ6yLaOr9uAoaZxjwHFV1fb7WMf6AHejhsdqPShWFXUWujeIfZj3dNcOsxKEEKvuzIUN8lUqW5L%2B6a%2BaRHsH2%2B1WzZFFzHE7StLjNgNLRwWO3CibvVavirVKBmsGH4%2F%2F1JOW75AYy8daRY%2FaO9CWCFmnSRbD%2BArB0b8wEwF7RwWGwx1R0sTbZOSp3LHwbhFYeIjz7sluPOCdGR9jQB9r3WdC2NZpWjlB86TAxO1bZlIriWr%2BBG%2BID%2FWi272N0y%2FpyRnN3y%2BCAxumaqbLVToOPujE2%2BXlSSmoUMwpu%2F7vgY6pgFIgPqf23X%2BY7rKjNAg%2BphxHECNjFcGJklV7636GcnnlVGUG21GiOOyCq0MLnR3f73kg890gfuJDA2%2F4EbLrSVDRf6f6PF3ubOZX%2Fdv7TKB%2FLHlBTxWbvIUMLqB9H560y4hK9K6u%2Ba5j8rfUBpq4ooX4Vb7N84LJNqeyv7lfl0%2F42EfPCk1ZwAif3moDOEdryMn5q9FWNPwpmcR31Ik9NO22tkN50LM&X-Amz-Signature=d3ec8f982b1c70d99199e560570a4a1d5f0e9a3ef20940c8d1e2b512f8da520e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKOFJDO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBgzRLnn4kINeHirzpVzWenKUn74rJmPVec7WimWVYrFAiA533SqUM46XRJa%2FJmj6eE%2FqlsAo1dxiBO9MYnvQ39LByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsiTjl0fI%2FqnRR5WMKtwDiJjKNW8x8TW93X%2BrKskTXrbunDH%2BrlODbqCs2kWiUhRRAN9zlRFmqHQaU7yGX%2FulCguepkaeXuFAHHMKiub5Hxz6etXx%2F%2BUiyUUCo4aLZVlPhlPEEVOviptug3NAeHABkA7NC0PrlwSDyWBuoeYo8rDBJcnKvlND4HoS6sBsn8xzUqsvJ3k6XDDUxFVFBv013o0w%2BWdvveMrDD53XVHb3W3GXEBLNJGRVxW9UrL2IZBiu39Pnmy5sYrze9pNQJZgqeoQpyiAKvICxa7nB4mF%2B8X0kxef9zoBlqpommXrPrDb6PDCHatCVPcxdXVZBA5Cp8OqWx554ok9Ls1k2lSTVqpuYKJ6yLaOr9uAoaZxjwHFV1fb7WMf6AHejhsdqPShWFXUWujeIfZj3dNcOsxKEEKvuzIUN8lUqW5L%2B6a%2BaRHsH2%2B1WzZFFzHE7StLjNgNLRwWO3CibvVavirVKBmsGH4%2F%2F1JOW75AYy8daRY%2FaO9CWCFmnSRbD%2BArB0b8wEwF7RwWGwx1R0sTbZOSp3LHwbhFYeIjz7sluPOCdGR9jQB9r3WdC2NZpWjlB86TAxO1bZlIriWr%2BBG%2BID%2FWi272N0y%2FpyRnN3y%2BCAxumaqbLVToOPujE2%2BXlSSmoUMwpu%2F7vgY6pgFIgPqf23X%2BY7rKjNAg%2BphxHECNjFcGJklV7636GcnnlVGUG21GiOOyCq0MLnR3f73kg890gfuJDA2%2F4EbLrSVDRf6f6PF3ubOZX%2Fdv7TKB%2FLHlBTxWbvIUMLqB9H560y4hK9K6u%2Ba5j8rfUBpq4ooX4Vb7N84LJNqeyv7lfl0%2F42EfPCk1ZwAif3moDOEdryMn5q9FWNPwpmcR31Ik9NO22tkN50LM&X-Amz-Signature=da0edabff306951298d011e68e9a169f92f78749190a6f0aaa8b2b9186d2b4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKOFJDO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBgzRLnn4kINeHirzpVzWenKUn74rJmPVec7WimWVYrFAiA533SqUM46XRJa%2FJmj6eE%2FqlsAo1dxiBO9MYnvQ39LByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsiTjl0fI%2FqnRR5WMKtwDiJjKNW8x8TW93X%2BrKskTXrbunDH%2BrlODbqCs2kWiUhRRAN9zlRFmqHQaU7yGX%2FulCguepkaeXuFAHHMKiub5Hxz6etXx%2F%2BUiyUUCo4aLZVlPhlPEEVOviptug3NAeHABkA7NC0PrlwSDyWBuoeYo8rDBJcnKvlND4HoS6sBsn8xzUqsvJ3k6XDDUxFVFBv013o0w%2BWdvveMrDD53XVHb3W3GXEBLNJGRVxW9UrL2IZBiu39Pnmy5sYrze9pNQJZgqeoQpyiAKvICxa7nB4mF%2B8X0kxef9zoBlqpommXrPrDb6PDCHatCVPcxdXVZBA5Cp8OqWx554ok9Ls1k2lSTVqpuYKJ6yLaOr9uAoaZxjwHFV1fb7WMf6AHejhsdqPShWFXUWujeIfZj3dNcOsxKEEKvuzIUN8lUqW5L%2B6a%2BaRHsH2%2B1WzZFFzHE7StLjNgNLRwWO3CibvVavirVKBmsGH4%2F%2F1JOW75AYy8daRY%2FaO9CWCFmnSRbD%2BArB0b8wEwF7RwWGwx1R0sTbZOSp3LHwbhFYeIjz7sluPOCdGR9jQB9r3WdC2NZpWjlB86TAxO1bZlIriWr%2BBG%2BID%2FWi272N0y%2FpyRnN3y%2BCAxumaqbLVToOPujE2%2BXlSSmoUMwpu%2F7vgY6pgFIgPqf23X%2BY7rKjNAg%2BphxHECNjFcGJklV7636GcnnlVGUG21GiOOyCq0MLnR3f73kg890gfuJDA2%2F4EbLrSVDRf6f6PF3ubOZX%2Fdv7TKB%2FLHlBTxWbvIUMLqB9H560y4hK9K6u%2Ba5j8rfUBpq4ooX4Vb7N84LJNqeyv7lfl0%2F42EfPCk1ZwAif3moDOEdryMn5q9FWNPwpmcR31Ik9NO22tkN50LM&X-Amz-Signature=57e44ca4d92a669a3fa3b19a83d56638ba8585e70b706f539cd48cfb97a59a15&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
