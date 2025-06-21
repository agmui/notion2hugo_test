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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=5117b733d1805dea513bc170f966884f0f46f2174a579421e9a0cf93c376d170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=efcd817a5ee5c3a2cbc4106e79c1376b16f299487a6cfb65c998de1a3bb93a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=8085de1c6450cb4fde2654a3643d83d8b3636c60af04f39af2f21c4100831abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=39f6768aa73131eafce1e8f548330a5a52c3b698122b68191edfdd3e0956fed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=c8fa38f604c5eb5f9ead5f4e95eca2e3f93c6168e820a258b7b11a7d84552c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
