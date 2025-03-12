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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPVSDDF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHkrBkxT%2BSPeXENfm8P%2BfRDPro2WdtyBnz60ga7UEaCAIhAJJaq2DvVFAAvCSc2FbmLepGmT2AmT4uO3W%2FmnxdxFwtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQtlNYADxfiXc%2Becq3AP5yDfNE33u08WdKDTjj9ToDkT0C6MrU3Oh6DoVoAcQ8nw84HTKZ%2FaRWgiyjGGzDSv5uZihhnP0MogqUFg%2BFBVCt3WMjdT%2FtePGmatZiWeKG%2Fjfe9tIwcVxnTTc8Aia9MI6Ib483iL3kXkejL6xsJbvmkYbIkzKza2apRWm9PPBg%2F%2F60%2FOTQX1gV1P2ypU6y86RT1QHasEwr3dzpEUhs0eRzwp1XjIA%2BWtTBWj8RU38Z0%2FM3kiAey23bS6ZYPBM3dMAVlpQ3qDAUuXGTjmzJZygxFD0EtjWcafTv94gfRGw1qufo7BjwfhHUZOu%2FukvUDylEt13BMS6%2BNCxiWPN0tCfyWXSwvjwTo%2FHR9BPiGp8Wey2EnubVGzFGeYUbQlkVyQSWXUxjnmKao3ntdkXTrpp8guw2q4B1%2Bvrxs%2BupZwOaIIF9IQqg0KOKeFktzhOP2MunWfpaZzX%2FkexZMjMA3lwTCI4xzIszrOlQMy2KWa5VDB6FjrNJwIigmmUl%2FfbO9V8H2IoHH%2FFi5P3k1K3dlpmFbssiLX%2Bn%2B8NSliCLFMaP7UIfv5pQZa1bx8dEMT2rNb%2FL6blrnI4gCHGXZII0zO82pSWIyRJXeR6DnyeRP58V0ZZbhP2cJDfoI7BnTCIhMi%2BBjqkAS48w6eL9ClQfcQhpCTzfoXv33J%2B5uiC3HFxJMZOxkScJspmFbvdH2luB5d8YfXz%2FfrAPfpdFed31a7%2FzJAzaL1wzWeZsvjlqDjKdUEvTUoNorrIiHDrZ6BjP7CPjwcnDBl8c6L0UsQbmx5JP3D%2Bst1xnyB7280fLAZrz0Jae6w7njKCOp6S%2BGSAX39gKWQXjIIRPZZls994DPlAmHJecpeW4y78&X-Amz-Signature=9ed5c8522aa15c24841cb123487f668cb9e8e2c7b486fca43fd6eff5c85a2a31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPVSDDF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHkrBkxT%2BSPeXENfm8P%2BfRDPro2WdtyBnz60ga7UEaCAIhAJJaq2DvVFAAvCSc2FbmLepGmT2AmT4uO3W%2FmnxdxFwtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQtlNYADxfiXc%2Becq3AP5yDfNE33u08WdKDTjj9ToDkT0C6MrU3Oh6DoVoAcQ8nw84HTKZ%2FaRWgiyjGGzDSv5uZihhnP0MogqUFg%2BFBVCt3WMjdT%2FtePGmatZiWeKG%2Fjfe9tIwcVxnTTc8Aia9MI6Ib483iL3kXkejL6xsJbvmkYbIkzKza2apRWm9PPBg%2F%2F60%2FOTQX1gV1P2ypU6y86RT1QHasEwr3dzpEUhs0eRzwp1XjIA%2BWtTBWj8RU38Z0%2FM3kiAey23bS6ZYPBM3dMAVlpQ3qDAUuXGTjmzJZygxFD0EtjWcafTv94gfRGw1qufo7BjwfhHUZOu%2FukvUDylEt13BMS6%2BNCxiWPN0tCfyWXSwvjwTo%2FHR9BPiGp8Wey2EnubVGzFGeYUbQlkVyQSWXUxjnmKao3ntdkXTrpp8guw2q4B1%2Bvrxs%2BupZwOaIIF9IQqg0KOKeFktzhOP2MunWfpaZzX%2FkexZMjMA3lwTCI4xzIszrOlQMy2KWa5VDB6FjrNJwIigmmUl%2FfbO9V8H2IoHH%2FFi5P3k1K3dlpmFbssiLX%2Bn%2B8NSliCLFMaP7UIfv5pQZa1bx8dEMT2rNb%2FL6blrnI4gCHGXZII0zO82pSWIyRJXeR6DnyeRP58V0ZZbhP2cJDfoI7BnTCIhMi%2BBjqkAS48w6eL9ClQfcQhpCTzfoXv33J%2B5uiC3HFxJMZOxkScJspmFbvdH2luB5d8YfXz%2FfrAPfpdFed31a7%2FzJAzaL1wzWeZsvjlqDjKdUEvTUoNorrIiHDrZ6BjP7CPjwcnDBl8c6L0UsQbmx5JP3D%2Bst1xnyB7280fLAZrz0Jae6w7njKCOp6S%2BGSAX39gKWQXjIIRPZZls994DPlAmHJecpeW4y78&X-Amz-Signature=bb1ab877e121f8e30765955f74d0062dba65e51dc51e65b18fabf3ae641361ae&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPVSDDF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHkrBkxT%2BSPeXENfm8P%2BfRDPro2WdtyBnz60ga7UEaCAIhAJJaq2DvVFAAvCSc2FbmLepGmT2AmT4uO3W%2FmnxdxFwtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQtlNYADxfiXc%2Becq3AP5yDfNE33u08WdKDTjj9ToDkT0C6MrU3Oh6DoVoAcQ8nw84HTKZ%2FaRWgiyjGGzDSv5uZihhnP0MogqUFg%2BFBVCt3WMjdT%2FtePGmatZiWeKG%2Fjfe9tIwcVxnTTc8Aia9MI6Ib483iL3kXkejL6xsJbvmkYbIkzKza2apRWm9PPBg%2F%2F60%2FOTQX1gV1P2ypU6y86RT1QHasEwr3dzpEUhs0eRzwp1XjIA%2BWtTBWj8RU38Z0%2FM3kiAey23bS6ZYPBM3dMAVlpQ3qDAUuXGTjmzJZygxFD0EtjWcafTv94gfRGw1qufo7BjwfhHUZOu%2FukvUDylEt13BMS6%2BNCxiWPN0tCfyWXSwvjwTo%2FHR9BPiGp8Wey2EnubVGzFGeYUbQlkVyQSWXUxjnmKao3ntdkXTrpp8guw2q4B1%2Bvrxs%2BupZwOaIIF9IQqg0KOKeFktzhOP2MunWfpaZzX%2FkexZMjMA3lwTCI4xzIszrOlQMy2KWa5VDB6FjrNJwIigmmUl%2FfbO9V8H2IoHH%2FFi5P3k1K3dlpmFbssiLX%2Bn%2B8NSliCLFMaP7UIfv5pQZa1bx8dEMT2rNb%2FL6blrnI4gCHGXZII0zO82pSWIyRJXeR6DnyeRP58V0ZZbhP2cJDfoI7BnTCIhMi%2BBjqkAS48w6eL9ClQfcQhpCTzfoXv33J%2B5uiC3HFxJMZOxkScJspmFbvdH2luB5d8YfXz%2FfrAPfpdFed31a7%2FzJAzaL1wzWeZsvjlqDjKdUEvTUoNorrIiHDrZ6BjP7CPjwcnDBl8c6L0UsQbmx5JP3D%2Bst1xnyB7280fLAZrz0Jae6w7njKCOp6S%2BGSAX39gKWQXjIIRPZZls994DPlAmHJecpeW4y78&X-Amz-Signature=7a49525dee9f8554e2a77dc5c174a91b0fe8ecd5cde24ac4752f48cab6cd31d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPVSDDF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHkrBkxT%2BSPeXENfm8P%2BfRDPro2WdtyBnz60ga7UEaCAIhAJJaq2DvVFAAvCSc2FbmLepGmT2AmT4uO3W%2FmnxdxFwtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQtlNYADxfiXc%2Becq3AP5yDfNE33u08WdKDTjj9ToDkT0C6MrU3Oh6DoVoAcQ8nw84HTKZ%2FaRWgiyjGGzDSv5uZihhnP0MogqUFg%2BFBVCt3WMjdT%2FtePGmatZiWeKG%2Fjfe9tIwcVxnTTc8Aia9MI6Ib483iL3kXkejL6xsJbvmkYbIkzKza2apRWm9PPBg%2F%2F60%2FOTQX1gV1P2ypU6y86RT1QHasEwr3dzpEUhs0eRzwp1XjIA%2BWtTBWj8RU38Z0%2FM3kiAey23bS6ZYPBM3dMAVlpQ3qDAUuXGTjmzJZygxFD0EtjWcafTv94gfRGw1qufo7BjwfhHUZOu%2FukvUDylEt13BMS6%2BNCxiWPN0tCfyWXSwvjwTo%2FHR9BPiGp8Wey2EnubVGzFGeYUbQlkVyQSWXUxjnmKao3ntdkXTrpp8guw2q4B1%2Bvrxs%2BupZwOaIIF9IQqg0KOKeFktzhOP2MunWfpaZzX%2FkexZMjMA3lwTCI4xzIszrOlQMy2KWa5VDB6FjrNJwIigmmUl%2FfbO9V8H2IoHH%2FFi5P3k1K3dlpmFbssiLX%2Bn%2B8NSliCLFMaP7UIfv5pQZa1bx8dEMT2rNb%2FL6blrnI4gCHGXZII0zO82pSWIyRJXeR6DnyeRP58V0ZZbhP2cJDfoI7BnTCIhMi%2BBjqkAS48w6eL9ClQfcQhpCTzfoXv33J%2B5uiC3HFxJMZOxkScJspmFbvdH2luB5d8YfXz%2FfrAPfpdFed31a7%2FzJAzaL1wzWeZsvjlqDjKdUEvTUoNorrIiHDrZ6BjP7CPjwcnDBl8c6L0UsQbmx5JP3D%2Bst1xnyB7280fLAZrz0Jae6w7njKCOp6S%2BGSAX39gKWQXjIIRPZZls994DPlAmHJecpeW4y78&X-Amz-Signature=9562f2752f5a307ed016a8919c49c95133753626847731997599d21b0331631e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPVSDDF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHkrBkxT%2BSPeXENfm8P%2BfRDPro2WdtyBnz60ga7UEaCAIhAJJaq2DvVFAAvCSc2FbmLepGmT2AmT4uO3W%2FmnxdxFwtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQtlNYADxfiXc%2Becq3AP5yDfNE33u08WdKDTjj9ToDkT0C6MrU3Oh6DoVoAcQ8nw84HTKZ%2FaRWgiyjGGzDSv5uZihhnP0MogqUFg%2BFBVCt3WMjdT%2FtePGmatZiWeKG%2Fjfe9tIwcVxnTTc8Aia9MI6Ib483iL3kXkejL6xsJbvmkYbIkzKza2apRWm9PPBg%2F%2F60%2FOTQX1gV1P2ypU6y86RT1QHasEwr3dzpEUhs0eRzwp1XjIA%2BWtTBWj8RU38Z0%2FM3kiAey23bS6ZYPBM3dMAVlpQ3qDAUuXGTjmzJZygxFD0EtjWcafTv94gfRGw1qufo7BjwfhHUZOu%2FukvUDylEt13BMS6%2BNCxiWPN0tCfyWXSwvjwTo%2FHR9BPiGp8Wey2EnubVGzFGeYUbQlkVyQSWXUxjnmKao3ntdkXTrpp8guw2q4B1%2Bvrxs%2BupZwOaIIF9IQqg0KOKeFktzhOP2MunWfpaZzX%2FkexZMjMA3lwTCI4xzIszrOlQMy2KWa5VDB6FjrNJwIigmmUl%2FfbO9V8H2IoHH%2FFi5P3k1K3dlpmFbssiLX%2Bn%2B8NSliCLFMaP7UIfv5pQZa1bx8dEMT2rNb%2FL6blrnI4gCHGXZII0zO82pSWIyRJXeR6DnyeRP58V0ZZbhP2cJDfoI7BnTCIhMi%2BBjqkAS48w6eL9ClQfcQhpCTzfoXv33J%2B5uiC3HFxJMZOxkScJspmFbvdH2luB5d8YfXz%2FfrAPfpdFed31a7%2FzJAzaL1wzWeZsvjlqDjKdUEvTUoNorrIiHDrZ6BjP7CPjwcnDBl8c6L0UsQbmx5JP3D%2Bst1xnyB7280fLAZrz0Jae6w7njKCOp6S%2BGSAX39gKWQXjIIRPZZls994DPlAmHJecpeW4y78&X-Amz-Signature=54844532f7820dfe75a9dd20e993184a957a2d486586f2f2959e5df8d2efa9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
