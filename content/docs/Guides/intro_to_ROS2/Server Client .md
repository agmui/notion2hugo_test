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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNEKOY2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpaS%2FeQBuyMELq5Ox8LUhZztKcITnO5O%2B72Ff1CwbLgIgZZj5ibWWW%2FStRvG9ln6vFDI4PukNoEjf%2BV2Y8zlHLNcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ8iKY75JbgcaC%2FAyrcA6DVlOLhqlZonbrrNLGDYPmDzfKq91GrmHLzu%2BFOZuO%2BEheismBNE%2FltHAPNykee8dFqYEm5D%2FB9fvjWenee7xrVZIJdymfTXj6ZuVdAJRCSpwF%2BC7SVMK1%2ByUS7tIbTn7j4ESwdN36LLaZ1rXUSSRwuPo2QX9iAHQCSzbAsBL35sLUnsAa1Z8W%2FgamvIxvKZ6vcgpf3TFWo5NQjT%2F%2BHhPCrGj%2FnYJaEcxvT1hZvjkQBN7lNTJjGiH1R%2BaZOIHVEUcI1CxvY6agfR%2FRj4T%2FBDMZB%2BH%2Fnc7PLEogz7nlEJ%2BqTuymrS7PK0oCdwzADhbYSWTY3vIJaxXehOdomQIZu3UA%2B69%2BYpGsmQrZVeZjJYuXfJgV64vIyKCbBPDeWojkSGIOtd1AzJba0V1Di5HvUp0NHHqxAUaUxCDFFT3JjSNmZDGV5QvO4%2B%2BR%2FXyo%2FVIItYSc4ndM2JmzKqqHG4UqbuhUrbV1CWvrDAltXHKhcOF4IL7sFwGICcoBW9qqoJIALLXXlpctDW0DX0O7ALUihevZ5QNyKkXBH7O7AXVPIzyqq7UonQp9nPDFJzGYbv3KlwCzUlcP6UJ4Wg2hHg2drTV1pyjdMzN5fMff2Mw5Ee%2Fqj67j3wB5eHvLB4BHjMLiP%2BsMGOqUBB3U9ztLAw56%2FUcN6QiG6zEhRoZNfrrT%2BASPcwrhRISh0upIZD3gS69ZlrdHerOZiJPPsBrrD5VqmZspSg7M7UgZtKYQknlzMlbM4O%2FSubV7h4gMoDeVacocsm9cRbLdXAhcCpjLNsfi2JauviSirStdQSrz9NKBW1kz0Fx5xFUVXBUQcbPOiKOOtfqRh5ErsNhL1tb4G2sbfIcFYcdVdAlCXY4Ed&X-Amz-Signature=6381e1920088484dc46e7677fedab6df49b4f2552477f6704aefa88c312b39d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNEKOY2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpaS%2FeQBuyMELq5Ox8LUhZztKcITnO5O%2B72Ff1CwbLgIgZZj5ibWWW%2FStRvG9ln6vFDI4PukNoEjf%2BV2Y8zlHLNcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ8iKY75JbgcaC%2FAyrcA6DVlOLhqlZonbrrNLGDYPmDzfKq91GrmHLzu%2BFOZuO%2BEheismBNE%2FltHAPNykee8dFqYEm5D%2FB9fvjWenee7xrVZIJdymfTXj6ZuVdAJRCSpwF%2BC7SVMK1%2ByUS7tIbTn7j4ESwdN36LLaZ1rXUSSRwuPo2QX9iAHQCSzbAsBL35sLUnsAa1Z8W%2FgamvIxvKZ6vcgpf3TFWo5NQjT%2F%2BHhPCrGj%2FnYJaEcxvT1hZvjkQBN7lNTJjGiH1R%2BaZOIHVEUcI1CxvY6agfR%2FRj4T%2FBDMZB%2BH%2Fnc7PLEogz7nlEJ%2BqTuymrS7PK0oCdwzADhbYSWTY3vIJaxXehOdomQIZu3UA%2B69%2BYpGsmQrZVeZjJYuXfJgV64vIyKCbBPDeWojkSGIOtd1AzJba0V1Di5HvUp0NHHqxAUaUxCDFFT3JjSNmZDGV5QvO4%2B%2BR%2FXyo%2FVIItYSc4ndM2JmzKqqHG4UqbuhUrbV1CWvrDAltXHKhcOF4IL7sFwGICcoBW9qqoJIALLXXlpctDW0DX0O7ALUihevZ5QNyKkXBH7O7AXVPIzyqq7UonQp9nPDFJzGYbv3KlwCzUlcP6UJ4Wg2hHg2drTV1pyjdMzN5fMff2Mw5Ee%2Fqj67j3wB5eHvLB4BHjMLiP%2BsMGOqUBB3U9ztLAw56%2FUcN6QiG6zEhRoZNfrrT%2BASPcwrhRISh0upIZD3gS69ZlrdHerOZiJPPsBrrD5VqmZspSg7M7UgZtKYQknlzMlbM4O%2FSubV7h4gMoDeVacocsm9cRbLdXAhcCpjLNsfi2JauviSirStdQSrz9NKBW1kz0Fx5xFUVXBUQcbPOiKOOtfqRh5ErsNhL1tb4G2sbfIcFYcdVdAlCXY4Ed&X-Amz-Signature=e7451e217fb0c77873bbf69437f520226b007c9473d219af7fc7721eebd8ea6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNEKOY2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpaS%2FeQBuyMELq5Ox8LUhZztKcITnO5O%2B72Ff1CwbLgIgZZj5ibWWW%2FStRvG9ln6vFDI4PukNoEjf%2BV2Y8zlHLNcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ8iKY75JbgcaC%2FAyrcA6DVlOLhqlZonbrrNLGDYPmDzfKq91GrmHLzu%2BFOZuO%2BEheismBNE%2FltHAPNykee8dFqYEm5D%2FB9fvjWenee7xrVZIJdymfTXj6ZuVdAJRCSpwF%2BC7SVMK1%2ByUS7tIbTn7j4ESwdN36LLaZ1rXUSSRwuPo2QX9iAHQCSzbAsBL35sLUnsAa1Z8W%2FgamvIxvKZ6vcgpf3TFWo5NQjT%2F%2BHhPCrGj%2FnYJaEcxvT1hZvjkQBN7lNTJjGiH1R%2BaZOIHVEUcI1CxvY6agfR%2FRj4T%2FBDMZB%2BH%2Fnc7PLEogz7nlEJ%2BqTuymrS7PK0oCdwzADhbYSWTY3vIJaxXehOdomQIZu3UA%2B69%2BYpGsmQrZVeZjJYuXfJgV64vIyKCbBPDeWojkSGIOtd1AzJba0V1Di5HvUp0NHHqxAUaUxCDFFT3JjSNmZDGV5QvO4%2B%2BR%2FXyo%2FVIItYSc4ndM2JmzKqqHG4UqbuhUrbV1CWvrDAltXHKhcOF4IL7sFwGICcoBW9qqoJIALLXXlpctDW0DX0O7ALUihevZ5QNyKkXBH7O7AXVPIzyqq7UonQp9nPDFJzGYbv3KlwCzUlcP6UJ4Wg2hHg2drTV1pyjdMzN5fMff2Mw5Ee%2Fqj67j3wB5eHvLB4BHjMLiP%2BsMGOqUBB3U9ztLAw56%2FUcN6QiG6zEhRoZNfrrT%2BASPcwrhRISh0upIZD3gS69ZlrdHerOZiJPPsBrrD5VqmZspSg7M7UgZtKYQknlzMlbM4O%2FSubV7h4gMoDeVacocsm9cRbLdXAhcCpjLNsfi2JauviSirStdQSrz9NKBW1kz0Fx5xFUVXBUQcbPOiKOOtfqRh5ErsNhL1tb4G2sbfIcFYcdVdAlCXY4Ed&X-Amz-Signature=fe25ef5a26cca677afa88dd7ad88d6c21036480e44b47d4e05dcce1f1de55dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNEKOY2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpaS%2FeQBuyMELq5Ox8LUhZztKcITnO5O%2B72Ff1CwbLgIgZZj5ibWWW%2FStRvG9ln6vFDI4PukNoEjf%2BV2Y8zlHLNcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ8iKY75JbgcaC%2FAyrcA6DVlOLhqlZonbrrNLGDYPmDzfKq91GrmHLzu%2BFOZuO%2BEheismBNE%2FltHAPNykee8dFqYEm5D%2FB9fvjWenee7xrVZIJdymfTXj6ZuVdAJRCSpwF%2BC7SVMK1%2ByUS7tIbTn7j4ESwdN36LLaZ1rXUSSRwuPo2QX9iAHQCSzbAsBL35sLUnsAa1Z8W%2FgamvIxvKZ6vcgpf3TFWo5NQjT%2F%2BHhPCrGj%2FnYJaEcxvT1hZvjkQBN7lNTJjGiH1R%2BaZOIHVEUcI1CxvY6agfR%2FRj4T%2FBDMZB%2BH%2Fnc7PLEogz7nlEJ%2BqTuymrS7PK0oCdwzADhbYSWTY3vIJaxXehOdomQIZu3UA%2B69%2BYpGsmQrZVeZjJYuXfJgV64vIyKCbBPDeWojkSGIOtd1AzJba0V1Di5HvUp0NHHqxAUaUxCDFFT3JjSNmZDGV5QvO4%2B%2BR%2FXyo%2FVIItYSc4ndM2JmzKqqHG4UqbuhUrbV1CWvrDAltXHKhcOF4IL7sFwGICcoBW9qqoJIALLXXlpctDW0DX0O7ALUihevZ5QNyKkXBH7O7AXVPIzyqq7UonQp9nPDFJzGYbv3KlwCzUlcP6UJ4Wg2hHg2drTV1pyjdMzN5fMff2Mw5Ee%2Fqj67j3wB5eHvLB4BHjMLiP%2BsMGOqUBB3U9ztLAw56%2FUcN6QiG6zEhRoZNfrrT%2BASPcwrhRISh0upIZD3gS69ZlrdHerOZiJPPsBrrD5VqmZspSg7M7UgZtKYQknlzMlbM4O%2FSubV7h4gMoDeVacocsm9cRbLdXAhcCpjLNsfi2JauviSirStdQSrz9NKBW1kz0Fx5xFUVXBUQcbPOiKOOtfqRh5ErsNhL1tb4G2sbfIcFYcdVdAlCXY4Ed&X-Amz-Signature=b8bceb83df473dc2c2075f52f3b7f6d1f529aa0ce4d5be0dbce52fa239a8d1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNEKOY2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpaS%2FeQBuyMELq5Ox8LUhZztKcITnO5O%2B72Ff1CwbLgIgZZj5ibWWW%2FStRvG9ln6vFDI4PukNoEjf%2BV2Y8zlHLNcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ8iKY75JbgcaC%2FAyrcA6DVlOLhqlZonbrrNLGDYPmDzfKq91GrmHLzu%2BFOZuO%2BEheismBNE%2FltHAPNykee8dFqYEm5D%2FB9fvjWenee7xrVZIJdymfTXj6ZuVdAJRCSpwF%2BC7SVMK1%2ByUS7tIbTn7j4ESwdN36LLaZ1rXUSSRwuPo2QX9iAHQCSzbAsBL35sLUnsAa1Z8W%2FgamvIxvKZ6vcgpf3TFWo5NQjT%2F%2BHhPCrGj%2FnYJaEcxvT1hZvjkQBN7lNTJjGiH1R%2BaZOIHVEUcI1CxvY6agfR%2FRj4T%2FBDMZB%2BH%2Fnc7PLEogz7nlEJ%2BqTuymrS7PK0oCdwzADhbYSWTY3vIJaxXehOdomQIZu3UA%2B69%2BYpGsmQrZVeZjJYuXfJgV64vIyKCbBPDeWojkSGIOtd1AzJba0V1Di5HvUp0NHHqxAUaUxCDFFT3JjSNmZDGV5QvO4%2B%2BR%2FXyo%2FVIItYSc4ndM2JmzKqqHG4UqbuhUrbV1CWvrDAltXHKhcOF4IL7sFwGICcoBW9qqoJIALLXXlpctDW0DX0O7ALUihevZ5QNyKkXBH7O7AXVPIzyqq7UonQp9nPDFJzGYbv3KlwCzUlcP6UJ4Wg2hHg2drTV1pyjdMzN5fMff2Mw5Ee%2Fqj67j3wB5eHvLB4BHjMLiP%2BsMGOqUBB3U9ztLAw56%2FUcN6QiG6zEhRoZNfrrT%2BASPcwrhRISh0upIZD3gS69ZlrdHerOZiJPPsBrrD5VqmZspSg7M7UgZtKYQknlzMlbM4O%2FSubV7h4gMoDeVacocsm9cRbLdXAhcCpjLNsfi2JauviSirStdQSrz9NKBW1kz0Fx5xFUVXBUQcbPOiKOOtfqRh5ErsNhL1tb4G2sbfIcFYcdVdAlCXY4Ed&X-Amz-Signature=85c72f8b8988f52333a7c9890f0b0fcaeb75da5caef11a5ae8448f73a83343f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
