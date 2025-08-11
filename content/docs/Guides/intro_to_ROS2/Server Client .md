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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALV3ST%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByTDsd57Y3OEl9LVn5kxqwN17u0FQsR4cb%2BkvJy%2BDdNAiEA9FRXZIX0%2FPqaQVdq0Xywdf4Eg0wgJ3N8hpd3LyP8ckMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvE6oh%2B%2FP9Q8CP9FCrcA3UxM%2F4RMsL7ku64VL2G%2B1vBQwGGDPhvYtPVS%2FkWQO5hIH%2FFTJIgQrK5y%2BxepZaN9XUvrwYmnHYfaSOtvoUu9hDhkfUTbJik73I%2FlKL4p2GT2XM9%2BOWQ%2F2YWgzq32wLrFwAzyYCuNfbUGH0cn4XB7DnxZYy4brV5WsxqCwAIeBhzcVU1PBUlS02UVM%2BYaOkf7iIJn0ELA3z%2BP6By5DVJmOgw8eH9VNwS5gkVR5ncLxXde14vc1O7a3Cqy11Es8LxLeh7SaBzZy%2FHe3jfIv%2B4iBLpG7w80joc9PxXmwkCD9V%2Bhypq8ZRxZVri0E6q528DP9XJwe3HhyY845Id2yuCX3%2F1lBjhQ%2BRQDYVDidz41%2FTAa%2Bb41%2FVT8j959LRehaNazck7X9jX%2FDUiBBMbtC1RiQ5YZhsD8a1B6wnNvlbq%2B3Ibn9JNmO%2B9avDPkVLxmGYpYsBSNRwjCNqy25hJ9gO%2F5BlUDWq%2B5qCqoeGNUH9MrzAhMhQckfya3eT1oJnGxqrxd8%2BTGh1k%2BNbzfBXWqSmxlAMKx8hzNzqV%2BBETslyftnQYoo9P0ooJ7deSI878mzlJafQJ9u%2BP21NXMY6IwqxssKCPBMw%2B%2FXOcD5toUxGRQRCWeCiBH3oQ%2BQLTeKOWMLz45sQGOqUB%2Byo8zYjP7awZfoKjR0%2FV9XQKfBg1AT7aECRXgtVWZGT44Texoh1Yeq8%2F5OWI2m%2FNNcBmSaDNjI2uIzEBMD3O5XSKKdZzc44rFcErDJLmvwQY5clBybPLJOjiTGeSxiQwdh452dUZXCOOq5XpS3DsXCwWbkfAPpmx37CBml0qAR8gqmzPrIfe5gvnKKm6pR7wzy5%2FI8eKx7ce6RAW6M3Ozci2qlZz&X-Amz-Signature=756c4845388c2f001f55ff23c7d87744fe456669d021e3f9f8ef9fcecd9db3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALV3ST%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByTDsd57Y3OEl9LVn5kxqwN17u0FQsR4cb%2BkvJy%2BDdNAiEA9FRXZIX0%2FPqaQVdq0Xywdf4Eg0wgJ3N8hpd3LyP8ckMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvE6oh%2B%2FP9Q8CP9FCrcA3UxM%2F4RMsL7ku64VL2G%2B1vBQwGGDPhvYtPVS%2FkWQO5hIH%2FFTJIgQrK5y%2BxepZaN9XUvrwYmnHYfaSOtvoUu9hDhkfUTbJik73I%2FlKL4p2GT2XM9%2BOWQ%2F2YWgzq32wLrFwAzyYCuNfbUGH0cn4XB7DnxZYy4brV5WsxqCwAIeBhzcVU1PBUlS02UVM%2BYaOkf7iIJn0ELA3z%2BP6By5DVJmOgw8eH9VNwS5gkVR5ncLxXde14vc1O7a3Cqy11Es8LxLeh7SaBzZy%2FHe3jfIv%2B4iBLpG7w80joc9PxXmwkCD9V%2Bhypq8ZRxZVri0E6q528DP9XJwe3HhyY845Id2yuCX3%2F1lBjhQ%2BRQDYVDidz41%2FTAa%2Bb41%2FVT8j959LRehaNazck7X9jX%2FDUiBBMbtC1RiQ5YZhsD8a1B6wnNvlbq%2B3Ibn9JNmO%2B9avDPkVLxmGYpYsBSNRwjCNqy25hJ9gO%2F5BlUDWq%2B5qCqoeGNUH9MrzAhMhQckfya3eT1oJnGxqrxd8%2BTGh1k%2BNbzfBXWqSmxlAMKx8hzNzqV%2BBETslyftnQYoo9P0ooJ7deSI878mzlJafQJ9u%2BP21NXMY6IwqxssKCPBMw%2B%2FXOcD5toUxGRQRCWeCiBH3oQ%2BQLTeKOWMLz45sQGOqUB%2Byo8zYjP7awZfoKjR0%2FV9XQKfBg1AT7aECRXgtVWZGT44Texoh1Yeq8%2F5OWI2m%2FNNcBmSaDNjI2uIzEBMD3O5XSKKdZzc44rFcErDJLmvwQY5clBybPLJOjiTGeSxiQwdh452dUZXCOOq5XpS3DsXCwWbkfAPpmx37CBml0qAR8gqmzPrIfe5gvnKKm6pR7wzy5%2FI8eKx7ce6RAW6M3Ozci2qlZz&X-Amz-Signature=5d5c18479d945f536e2c6b299b60f60d07b187f7ce626f6d9259e274f536be9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALV3ST%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByTDsd57Y3OEl9LVn5kxqwN17u0FQsR4cb%2BkvJy%2BDdNAiEA9FRXZIX0%2FPqaQVdq0Xywdf4Eg0wgJ3N8hpd3LyP8ckMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvE6oh%2B%2FP9Q8CP9FCrcA3UxM%2F4RMsL7ku64VL2G%2B1vBQwGGDPhvYtPVS%2FkWQO5hIH%2FFTJIgQrK5y%2BxepZaN9XUvrwYmnHYfaSOtvoUu9hDhkfUTbJik73I%2FlKL4p2GT2XM9%2BOWQ%2F2YWgzq32wLrFwAzyYCuNfbUGH0cn4XB7DnxZYy4brV5WsxqCwAIeBhzcVU1PBUlS02UVM%2BYaOkf7iIJn0ELA3z%2BP6By5DVJmOgw8eH9VNwS5gkVR5ncLxXde14vc1O7a3Cqy11Es8LxLeh7SaBzZy%2FHe3jfIv%2B4iBLpG7w80joc9PxXmwkCD9V%2Bhypq8ZRxZVri0E6q528DP9XJwe3HhyY845Id2yuCX3%2F1lBjhQ%2BRQDYVDidz41%2FTAa%2Bb41%2FVT8j959LRehaNazck7X9jX%2FDUiBBMbtC1RiQ5YZhsD8a1B6wnNvlbq%2B3Ibn9JNmO%2B9avDPkVLxmGYpYsBSNRwjCNqy25hJ9gO%2F5BlUDWq%2B5qCqoeGNUH9MrzAhMhQckfya3eT1oJnGxqrxd8%2BTGh1k%2BNbzfBXWqSmxlAMKx8hzNzqV%2BBETslyftnQYoo9P0ooJ7deSI878mzlJafQJ9u%2BP21NXMY6IwqxssKCPBMw%2B%2FXOcD5toUxGRQRCWeCiBH3oQ%2BQLTeKOWMLz45sQGOqUB%2Byo8zYjP7awZfoKjR0%2FV9XQKfBg1AT7aECRXgtVWZGT44Texoh1Yeq8%2F5OWI2m%2FNNcBmSaDNjI2uIzEBMD3O5XSKKdZzc44rFcErDJLmvwQY5clBybPLJOjiTGeSxiQwdh452dUZXCOOq5XpS3DsXCwWbkfAPpmx37CBml0qAR8gqmzPrIfe5gvnKKm6pR7wzy5%2FI8eKx7ce6RAW6M3Ozci2qlZz&X-Amz-Signature=be1ce2b485ef12e6cb4f8d68698a57612365c966d1e5c8f9e7c950906cb5def4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALV3ST%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByTDsd57Y3OEl9LVn5kxqwN17u0FQsR4cb%2BkvJy%2BDdNAiEA9FRXZIX0%2FPqaQVdq0Xywdf4Eg0wgJ3N8hpd3LyP8ckMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvE6oh%2B%2FP9Q8CP9FCrcA3UxM%2F4RMsL7ku64VL2G%2B1vBQwGGDPhvYtPVS%2FkWQO5hIH%2FFTJIgQrK5y%2BxepZaN9XUvrwYmnHYfaSOtvoUu9hDhkfUTbJik73I%2FlKL4p2GT2XM9%2BOWQ%2F2YWgzq32wLrFwAzyYCuNfbUGH0cn4XB7DnxZYy4brV5WsxqCwAIeBhzcVU1PBUlS02UVM%2BYaOkf7iIJn0ELA3z%2BP6By5DVJmOgw8eH9VNwS5gkVR5ncLxXde14vc1O7a3Cqy11Es8LxLeh7SaBzZy%2FHe3jfIv%2B4iBLpG7w80joc9PxXmwkCD9V%2Bhypq8ZRxZVri0E6q528DP9XJwe3HhyY845Id2yuCX3%2F1lBjhQ%2BRQDYVDidz41%2FTAa%2Bb41%2FVT8j959LRehaNazck7X9jX%2FDUiBBMbtC1RiQ5YZhsD8a1B6wnNvlbq%2B3Ibn9JNmO%2B9avDPkVLxmGYpYsBSNRwjCNqy25hJ9gO%2F5BlUDWq%2B5qCqoeGNUH9MrzAhMhQckfya3eT1oJnGxqrxd8%2BTGh1k%2BNbzfBXWqSmxlAMKx8hzNzqV%2BBETslyftnQYoo9P0ooJ7deSI878mzlJafQJ9u%2BP21NXMY6IwqxssKCPBMw%2B%2FXOcD5toUxGRQRCWeCiBH3oQ%2BQLTeKOWMLz45sQGOqUB%2Byo8zYjP7awZfoKjR0%2FV9XQKfBg1AT7aECRXgtVWZGT44Texoh1Yeq8%2F5OWI2m%2FNNcBmSaDNjI2uIzEBMD3O5XSKKdZzc44rFcErDJLmvwQY5clBybPLJOjiTGeSxiQwdh452dUZXCOOq5XpS3DsXCwWbkfAPpmx37CBml0qAR8gqmzPrIfe5gvnKKm6pR7wzy5%2FI8eKx7ce6RAW6M3Ozci2qlZz&X-Amz-Signature=b3499acc4cbda183e868dffab7e17e89266768df2c8e51eac3980692fad2fb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALV3ST%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByTDsd57Y3OEl9LVn5kxqwN17u0FQsR4cb%2BkvJy%2BDdNAiEA9FRXZIX0%2FPqaQVdq0Xywdf4Eg0wgJ3N8hpd3LyP8ckMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvE6oh%2B%2FP9Q8CP9FCrcA3UxM%2F4RMsL7ku64VL2G%2B1vBQwGGDPhvYtPVS%2FkWQO5hIH%2FFTJIgQrK5y%2BxepZaN9XUvrwYmnHYfaSOtvoUu9hDhkfUTbJik73I%2FlKL4p2GT2XM9%2BOWQ%2F2YWgzq32wLrFwAzyYCuNfbUGH0cn4XB7DnxZYy4brV5WsxqCwAIeBhzcVU1PBUlS02UVM%2BYaOkf7iIJn0ELA3z%2BP6By5DVJmOgw8eH9VNwS5gkVR5ncLxXde14vc1O7a3Cqy11Es8LxLeh7SaBzZy%2FHe3jfIv%2B4iBLpG7w80joc9PxXmwkCD9V%2Bhypq8ZRxZVri0E6q528DP9XJwe3HhyY845Id2yuCX3%2F1lBjhQ%2BRQDYVDidz41%2FTAa%2Bb41%2FVT8j959LRehaNazck7X9jX%2FDUiBBMbtC1RiQ5YZhsD8a1B6wnNvlbq%2B3Ibn9JNmO%2B9avDPkVLxmGYpYsBSNRwjCNqy25hJ9gO%2F5BlUDWq%2B5qCqoeGNUH9MrzAhMhQckfya3eT1oJnGxqrxd8%2BTGh1k%2BNbzfBXWqSmxlAMKx8hzNzqV%2BBETslyftnQYoo9P0ooJ7deSI878mzlJafQJ9u%2BP21NXMY6IwqxssKCPBMw%2B%2FXOcD5toUxGRQRCWeCiBH3oQ%2BQLTeKOWMLz45sQGOqUB%2Byo8zYjP7awZfoKjR0%2FV9XQKfBg1AT7aECRXgtVWZGT44Texoh1Yeq8%2F5OWI2m%2FNNcBmSaDNjI2uIzEBMD3O5XSKKdZzc44rFcErDJLmvwQY5clBybPLJOjiTGeSxiQwdh452dUZXCOOq5XpS3DsXCwWbkfAPpmx37CBml0qAR8gqmzPrIfe5gvnKKm6pR7wzy5%2FI8eKx7ce6RAW6M3Ozci2qlZz&X-Amz-Signature=44d11c361703d602ed044b2f931c1e99e0563d0659223246e24814e996da6373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
