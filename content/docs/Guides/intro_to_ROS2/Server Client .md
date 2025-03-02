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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LGVHPJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb29kleGthVn%2F1aaJ%2FLMmiSJJgImv7jsyujGJeE8hEGwIgFZ8KB17M2vgqDZ4PPqgFd1abtZvKe8AXIPC2XIiXuZYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIi0iB%2BJU8SnyjPSrcA%2B3EgefV1yrmQurCuMPXghwWgW3Imf8y2twzrm1iA6BRbNeR7EdNE8jXx2Hgff8F0IoeZtp9s5hvTMnIx42ZDNOGb%2B0rESM94XTFAEd8Bb4VkaI90R18c2cg1%2B5162tNPaIQxialcnCHoTkcnmfvw1FYvOHqH3SXHKcOaIDRoW6lvMeSJJJhwLmWUc5IEhJXbDEBrxyjfJCejAjvRZC9BX23e9PIQMWdM%2BL5Wui6QNEC6CYDLcPx72FWwumvAr6aj6OgXBihhEhajjyJdnxcGH1u3o%2B0KdhyPOECfX758B7PMu5t2Wmp8jvwXk8YbZ3X9uhh9woiBfa520rNSdx%2B02Z%2BNXMxrcs7xtjNZM6b0wla5oQzhA5dKhSRbDhKDWGO4tYrg%2FE%2BeNBwXh1purZZbNVHh%2FyoyCrq7L4c2l1QqoH9xdKexHBWNf5sdO%2FONsvEhUn0fce%2FZ5fgFCruOc1CvhkfdaNaaeQIHg1gomqKnP80YxoBwX8isVZ%2F7%2Bx%2BqRRpJlsfbtE6K%2FyhpmXof65AX6L8yZNeY12lqJfc8qjRsfHi9FCwSc25cQwuluwNcw8ZZWxEBgO8Uvh0pdarvFwoJ%2BPxfbjZ0e0v2FpP6lyiiES0ZM51KNjPYNd3KZT2MJGfkr4GOqUB5fK2O56j1T1q6j%2BWtjf%2BpbkJ4884qPkYv2%2Bgp6PdPAV4VPyLD5TdhYW5iNfwMvbfbLwfT%2BnFoOzK%2BurxwTWvsQ6aZ58CfJBVJgDSOgeN4ZQ5BkLEPxfbBw%2BI%2F%2FT%2BpEQT%2BkkKvC78fDDilD7TfQH5yvjBuLlvXictZiyycqLII8YCv407CuozelIJbJkI4IM6qF%2BO8QeWpUKRHC0y59gJJYv598Ae&X-Amz-Signature=3e5207423e959b991bf354a256a972ab8ef57c88b680860e639876059d364afe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LGVHPJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb29kleGthVn%2F1aaJ%2FLMmiSJJgImv7jsyujGJeE8hEGwIgFZ8KB17M2vgqDZ4PPqgFd1abtZvKe8AXIPC2XIiXuZYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIi0iB%2BJU8SnyjPSrcA%2B3EgefV1yrmQurCuMPXghwWgW3Imf8y2twzrm1iA6BRbNeR7EdNE8jXx2Hgff8F0IoeZtp9s5hvTMnIx42ZDNOGb%2B0rESM94XTFAEd8Bb4VkaI90R18c2cg1%2B5162tNPaIQxialcnCHoTkcnmfvw1FYvOHqH3SXHKcOaIDRoW6lvMeSJJJhwLmWUc5IEhJXbDEBrxyjfJCejAjvRZC9BX23e9PIQMWdM%2BL5Wui6QNEC6CYDLcPx72FWwumvAr6aj6OgXBihhEhajjyJdnxcGH1u3o%2B0KdhyPOECfX758B7PMu5t2Wmp8jvwXk8YbZ3X9uhh9woiBfa520rNSdx%2B02Z%2BNXMxrcs7xtjNZM6b0wla5oQzhA5dKhSRbDhKDWGO4tYrg%2FE%2BeNBwXh1purZZbNVHh%2FyoyCrq7L4c2l1QqoH9xdKexHBWNf5sdO%2FONsvEhUn0fce%2FZ5fgFCruOc1CvhkfdaNaaeQIHg1gomqKnP80YxoBwX8isVZ%2F7%2Bx%2BqRRpJlsfbtE6K%2FyhpmXof65AX6L8yZNeY12lqJfc8qjRsfHi9FCwSc25cQwuluwNcw8ZZWxEBgO8Uvh0pdarvFwoJ%2BPxfbjZ0e0v2FpP6lyiiES0ZM51KNjPYNd3KZT2MJGfkr4GOqUB5fK2O56j1T1q6j%2BWtjf%2BpbkJ4884qPkYv2%2Bgp6PdPAV4VPyLD5TdhYW5iNfwMvbfbLwfT%2BnFoOzK%2BurxwTWvsQ6aZ58CfJBVJgDSOgeN4ZQ5BkLEPxfbBw%2BI%2F%2FT%2BpEQT%2BkkKvC78fDDilD7TfQH5yvjBuLlvXictZiyycqLII8YCv407CuozelIJbJkI4IM6qF%2BO8QeWpUKRHC0y59gJJYv598Ae&X-Amz-Signature=57d0ad10c67bfa94707d2cf9f930830007d7bfeb69b27ba4ccaf753dd90c382f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LGVHPJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb29kleGthVn%2F1aaJ%2FLMmiSJJgImv7jsyujGJeE8hEGwIgFZ8KB17M2vgqDZ4PPqgFd1abtZvKe8AXIPC2XIiXuZYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIi0iB%2BJU8SnyjPSrcA%2B3EgefV1yrmQurCuMPXghwWgW3Imf8y2twzrm1iA6BRbNeR7EdNE8jXx2Hgff8F0IoeZtp9s5hvTMnIx42ZDNOGb%2B0rESM94XTFAEd8Bb4VkaI90R18c2cg1%2B5162tNPaIQxialcnCHoTkcnmfvw1FYvOHqH3SXHKcOaIDRoW6lvMeSJJJhwLmWUc5IEhJXbDEBrxyjfJCejAjvRZC9BX23e9PIQMWdM%2BL5Wui6QNEC6CYDLcPx72FWwumvAr6aj6OgXBihhEhajjyJdnxcGH1u3o%2B0KdhyPOECfX758B7PMu5t2Wmp8jvwXk8YbZ3X9uhh9woiBfa520rNSdx%2B02Z%2BNXMxrcs7xtjNZM6b0wla5oQzhA5dKhSRbDhKDWGO4tYrg%2FE%2BeNBwXh1purZZbNVHh%2FyoyCrq7L4c2l1QqoH9xdKexHBWNf5sdO%2FONsvEhUn0fce%2FZ5fgFCruOc1CvhkfdaNaaeQIHg1gomqKnP80YxoBwX8isVZ%2F7%2Bx%2BqRRpJlsfbtE6K%2FyhpmXof65AX6L8yZNeY12lqJfc8qjRsfHi9FCwSc25cQwuluwNcw8ZZWxEBgO8Uvh0pdarvFwoJ%2BPxfbjZ0e0v2FpP6lyiiES0ZM51KNjPYNd3KZT2MJGfkr4GOqUB5fK2O56j1T1q6j%2BWtjf%2BpbkJ4884qPkYv2%2Bgp6PdPAV4VPyLD5TdhYW5iNfwMvbfbLwfT%2BnFoOzK%2BurxwTWvsQ6aZ58CfJBVJgDSOgeN4ZQ5BkLEPxfbBw%2BI%2F%2FT%2BpEQT%2BkkKvC78fDDilD7TfQH5yvjBuLlvXictZiyycqLII8YCv407CuozelIJbJkI4IM6qF%2BO8QeWpUKRHC0y59gJJYv598Ae&X-Amz-Signature=286d983ea53ac9e4d58d3379abb48fca1de7fbba3539cd507ec2f842308e83de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LGVHPJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb29kleGthVn%2F1aaJ%2FLMmiSJJgImv7jsyujGJeE8hEGwIgFZ8KB17M2vgqDZ4PPqgFd1abtZvKe8AXIPC2XIiXuZYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIi0iB%2BJU8SnyjPSrcA%2B3EgefV1yrmQurCuMPXghwWgW3Imf8y2twzrm1iA6BRbNeR7EdNE8jXx2Hgff8F0IoeZtp9s5hvTMnIx42ZDNOGb%2B0rESM94XTFAEd8Bb4VkaI90R18c2cg1%2B5162tNPaIQxialcnCHoTkcnmfvw1FYvOHqH3SXHKcOaIDRoW6lvMeSJJJhwLmWUc5IEhJXbDEBrxyjfJCejAjvRZC9BX23e9PIQMWdM%2BL5Wui6QNEC6CYDLcPx72FWwumvAr6aj6OgXBihhEhajjyJdnxcGH1u3o%2B0KdhyPOECfX758B7PMu5t2Wmp8jvwXk8YbZ3X9uhh9woiBfa520rNSdx%2B02Z%2BNXMxrcs7xtjNZM6b0wla5oQzhA5dKhSRbDhKDWGO4tYrg%2FE%2BeNBwXh1purZZbNVHh%2FyoyCrq7L4c2l1QqoH9xdKexHBWNf5sdO%2FONsvEhUn0fce%2FZ5fgFCruOc1CvhkfdaNaaeQIHg1gomqKnP80YxoBwX8isVZ%2F7%2Bx%2BqRRpJlsfbtE6K%2FyhpmXof65AX6L8yZNeY12lqJfc8qjRsfHi9FCwSc25cQwuluwNcw8ZZWxEBgO8Uvh0pdarvFwoJ%2BPxfbjZ0e0v2FpP6lyiiES0ZM51KNjPYNd3KZT2MJGfkr4GOqUB5fK2O56j1T1q6j%2BWtjf%2BpbkJ4884qPkYv2%2Bgp6PdPAV4VPyLD5TdhYW5iNfwMvbfbLwfT%2BnFoOzK%2BurxwTWvsQ6aZ58CfJBVJgDSOgeN4ZQ5BkLEPxfbBw%2BI%2F%2FT%2BpEQT%2BkkKvC78fDDilD7TfQH5yvjBuLlvXictZiyycqLII8YCv407CuozelIJbJkI4IM6qF%2BO8QeWpUKRHC0y59gJJYv598Ae&X-Amz-Signature=d88c4a99937b4d4ac11f4aab5a0b52b86808b8f6433c127e0dac15335e757e83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LGVHPJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb29kleGthVn%2F1aaJ%2FLMmiSJJgImv7jsyujGJeE8hEGwIgFZ8KB17M2vgqDZ4PPqgFd1abtZvKe8AXIPC2XIiXuZYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIi0iB%2BJU8SnyjPSrcA%2B3EgefV1yrmQurCuMPXghwWgW3Imf8y2twzrm1iA6BRbNeR7EdNE8jXx2Hgff8F0IoeZtp9s5hvTMnIx42ZDNOGb%2B0rESM94XTFAEd8Bb4VkaI90R18c2cg1%2B5162tNPaIQxialcnCHoTkcnmfvw1FYvOHqH3SXHKcOaIDRoW6lvMeSJJJhwLmWUc5IEhJXbDEBrxyjfJCejAjvRZC9BX23e9PIQMWdM%2BL5Wui6QNEC6CYDLcPx72FWwumvAr6aj6OgXBihhEhajjyJdnxcGH1u3o%2B0KdhyPOECfX758B7PMu5t2Wmp8jvwXk8YbZ3X9uhh9woiBfa520rNSdx%2B02Z%2BNXMxrcs7xtjNZM6b0wla5oQzhA5dKhSRbDhKDWGO4tYrg%2FE%2BeNBwXh1purZZbNVHh%2FyoyCrq7L4c2l1QqoH9xdKexHBWNf5sdO%2FONsvEhUn0fce%2FZ5fgFCruOc1CvhkfdaNaaeQIHg1gomqKnP80YxoBwX8isVZ%2F7%2Bx%2BqRRpJlsfbtE6K%2FyhpmXof65AX6L8yZNeY12lqJfc8qjRsfHi9FCwSc25cQwuluwNcw8ZZWxEBgO8Uvh0pdarvFwoJ%2BPxfbjZ0e0v2FpP6lyiiES0ZM51KNjPYNd3KZT2MJGfkr4GOqUB5fK2O56j1T1q6j%2BWtjf%2BpbkJ4884qPkYv2%2Bgp6PdPAV4VPyLD5TdhYW5iNfwMvbfbLwfT%2BnFoOzK%2BurxwTWvsQ6aZ58CfJBVJgDSOgeN4ZQ5BkLEPxfbBw%2BI%2F%2FT%2BpEQT%2BkkKvC78fDDilD7TfQH5yvjBuLlvXictZiyycqLII8YCv407CuozelIJbJkI4IM6qF%2BO8QeWpUKRHC0y59gJJYv598Ae&X-Amz-Signature=a8e8e889c5613f0b0704d4467d11de93230566dbdbb8bd28b2714dd0772ca127&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
