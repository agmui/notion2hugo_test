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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM6J7UM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHEjjeG4hJir%2FEHVuhSKIvsrVxjQt6qkUfE5xCX5ApT9AiEA23c3giP0rAUjOuAVGQR0BNlHqjakitgb5LMZVo%2F4m%2BgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgoiOdN3EhSUaUS5yrcA6m%2F4m35vBwTmGH5nOz7xi1wEPdaOgGrKAqhXsamYx3RXWeFRnLBBkRu4xmo5o3tIoxHB1i5mHEkLGt6nO0INJR68YtUKD6UdhqaC7UlPrYj0KAnUAqMmV5gBPoBTPEfNFnyutowAwndHs90Kbzt7u7UoqXqtj6%2BxMl9pgX%2FMjXdt6GHaMFHtr9yvmRYFPP1Nh6is86d6MSa4yrFxm6WBzzR7eELKjkR%2FA6HMEHxEqWhQu6AkIrzDV8R13MkmU316TX%2BsILE35z%2BL%2BaGKYzAwszccLmdks4sbmyMdeu5nE307lQGHpLW5%2BTLhdAyJYVeTlKlz3e83vt%2FrFAwjKO5JTNLRUTACKCjVLF9Q1yiuccOHHCxelLSRgaxtPfXT5gp3DUPRCgoBcPfwjRPQwEOY4wudLyo9%2FZWTXnnX4g04c0jyUpd0kJAX4zhFGBJGwzXj%2FroRNvbImeJIEASDb6vgUsrCfsnTMdlS%2FErfR5pHWLwyT9fr9WPqI0AOYDTO0vENsh4SYTuuUz%2FI5RuMPr6soS1VO1ldQ2oTwrgm4uTxei7sHYD1R9p61rFlbO3raEenXPkmrod%2FtEkYPeohzTPNrNSYb40J9n0IGROmfxcKh3z4lMuA2lOlibIgZhnMOLGpcAGOqUB%2FqA2pqPpHIF5fR%2BPwHlbtpOt5lN3J7eiwgkn%2B6Mo0gualIdfyxRslNDvrMXFye4iNoJvDbf7kvMGBUNLQE86EsEdjldpuLRlKPxgZNbmOU0kD8sKJoG7nGz7GSeLoCO9CWMIc0Ol%2B5wvgq6h4hPwD%2FjiDEHyFzCLIQpYXz6FYJo%2FAhQcGAAnEMiKyK6I9KhioR3UBqtRFDr1hfMdhNxgTrZNhKis&X-Amz-Signature=87db9ee49ca3a0e2b0065f59a2fa6116d228443edd31faa9925261177f1906fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM6J7UM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHEjjeG4hJir%2FEHVuhSKIvsrVxjQt6qkUfE5xCX5ApT9AiEA23c3giP0rAUjOuAVGQR0BNlHqjakitgb5LMZVo%2F4m%2BgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgoiOdN3EhSUaUS5yrcA6m%2F4m35vBwTmGH5nOz7xi1wEPdaOgGrKAqhXsamYx3RXWeFRnLBBkRu4xmo5o3tIoxHB1i5mHEkLGt6nO0INJR68YtUKD6UdhqaC7UlPrYj0KAnUAqMmV5gBPoBTPEfNFnyutowAwndHs90Kbzt7u7UoqXqtj6%2BxMl9pgX%2FMjXdt6GHaMFHtr9yvmRYFPP1Nh6is86d6MSa4yrFxm6WBzzR7eELKjkR%2FA6HMEHxEqWhQu6AkIrzDV8R13MkmU316TX%2BsILE35z%2BL%2BaGKYzAwszccLmdks4sbmyMdeu5nE307lQGHpLW5%2BTLhdAyJYVeTlKlz3e83vt%2FrFAwjKO5JTNLRUTACKCjVLF9Q1yiuccOHHCxelLSRgaxtPfXT5gp3DUPRCgoBcPfwjRPQwEOY4wudLyo9%2FZWTXnnX4g04c0jyUpd0kJAX4zhFGBJGwzXj%2FroRNvbImeJIEASDb6vgUsrCfsnTMdlS%2FErfR5pHWLwyT9fr9WPqI0AOYDTO0vENsh4SYTuuUz%2FI5RuMPr6soS1VO1ldQ2oTwrgm4uTxei7sHYD1R9p61rFlbO3raEenXPkmrod%2FtEkYPeohzTPNrNSYb40J9n0IGROmfxcKh3z4lMuA2lOlibIgZhnMOLGpcAGOqUB%2FqA2pqPpHIF5fR%2BPwHlbtpOt5lN3J7eiwgkn%2B6Mo0gualIdfyxRslNDvrMXFye4iNoJvDbf7kvMGBUNLQE86EsEdjldpuLRlKPxgZNbmOU0kD8sKJoG7nGz7GSeLoCO9CWMIc0Ol%2B5wvgq6h4hPwD%2FjiDEHyFzCLIQpYXz6FYJo%2FAhQcGAAnEMiKyK6I9KhioR3UBqtRFDr1hfMdhNxgTrZNhKis&X-Amz-Signature=410a5811e6ac022b898dc2c7b0b4e6974072d1ac67ddbf53603fa8a5d5e60af3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM6J7UM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHEjjeG4hJir%2FEHVuhSKIvsrVxjQt6qkUfE5xCX5ApT9AiEA23c3giP0rAUjOuAVGQR0BNlHqjakitgb5LMZVo%2F4m%2BgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgoiOdN3EhSUaUS5yrcA6m%2F4m35vBwTmGH5nOz7xi1wEPdaOgGrKAqhXsamYx3RXWeFRnLBBkRu4xmo5o3tIoxHB1i5mHEkLGt6nO0INJR68YtUKD6UdhqaC7UlPrYj0KAnUAqMmV5gBPoBTPEfNFnyutowAwndHs90Kbzt7u7UoqXqtj6%2BxMl9pgX%2FMjXdt6GHaMFHtr9yvmRYFPP1Nh6is86d6MSa4yrFxm6WBzzR7eELKjkR%2FA6HMEHxEqWhQu6AkIrzDV8R13MkmU316TX%2BsILE35z%2BL%2BaGKYzAwszccLmdks4sbmyMdeu5nE307lQGHpLW5%2BTLhdAyJYVeTlKlz3e83vt%2FrFAwjKO5JTNLRUTACKCjVLF9Q1yiuccOHHCxelLSRgaxtPfXT5gp3DUPRCgoBcPfwjRPQwEOY4wudLyo9%2FZWTXnnX4g04c0jyUpd0kJAX4zhFGBJGwzXj%2FroRNvbImeJIEASDb6vgUsrCfsnTMdlS%2FErfR5pHWLwyT9fr9WPqI0AOYDTO0vENsh4SYTuuUz%2FI5RuMPr6soS1VO1ldQ2oTwrgm4uTxei7sHYD1R9p61rFlbO3raEenXPkmrod%2FtEkYPeohzTPNrNSYb40J9n0IGROmfxcKh3z4lMuA2lOlibIgZhnMOLGpcAGOqUB%2FqA2pqPpHIF5fR%2BPwHlbtpOt5lN3J7eiwgkn%2B6Mo0gualIdfyxRslNDvrMXFye4iNoJvDbf7kvMGBUNLQE86EsEdjldpuLRlKPxgZNbmOU0kD8sKJoG7nGz7GSeLoCO9CWMIc0Ol%2B5wvgq6h4hPwD%2FjiDEHyFzCLIQpYXz6FYJo%2FAhQcGAAnEMiKyK6I9KhioR3UBqtRFDr1hfMdhNxgTrZNhKis&X-Amz-Signature=1fe2d12b15055e165d905b9e8748aea58be7a886037e44549f778826838beda7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM6J7UM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHEjjeG4hJir%2FEHVuhSKIvsrVxjQt6qkUfE5xCX5ApT9AiEA23c3giP0rAUjOuAVGQR0BNlHqjakitgb5LMZVo%2F4m%2BgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgoiOdN3EhSUaUS5yrcA6m%2F4m35vBwTmGH5nOz7xi1wEPdaOgGrKAqhXsamYx3RXWeFRnLBBkRu4xmo5o3tIoxHB1i5mHEkLGt6nO0INJR68YtUKD6UdhqaC7UlPrYj0KAnUAqMmV5gBPoBTPEfNFnyutowAwndHs90Kbzt7u7UoqXqtj6%2BxMl9pgX%2FMjXdt6GHaMFHtr9yvmRYFPP1Nh6is86d6MSa4yrFxm6WBzzR7eELKjkR%2FA6HMEHxEqWhQu6AkIrzDV8R13MkmU316TX%2BsILE35z%2BL%2BaGKYzAwszccLmdks4sbmyMdeu5nE307lQGHpLW5%2BTLhdAyJYVeTlKlz3e83vt%2FrFAwjKO5JTNLRUTACKCjVLF9Q1yiuccOHHCxelLSRgaxtPfXT5gp3DUPRCgoBcPfwjRPQwEOY4wudLyo9%2FZWTXnnX4g04c0jyUpd0kJAX4zhFGBJGwzXj%2FroRNvbImeJIEASDb6vgUsrCfsnTMdlS%2FErfR5pHWLwyT9fr9WPqI0AOYDTO0vENsh4SYTuuUz%2FI5RuMPr6soS1VO1ldQ2oTwrgm4uTxei7sHYD1R9p61rFlbO3raEenXPkmrod%2FtEkYPeohzTPNrNSYb40J9n0IGROmfxcKh3z4lMuA2lOlibIgZhnMOLGpcAGOqUB%2FqA2pqPpHIF5fR%2BPwHlbtpOt5lN3J7eiwgkn%2B6Mo0gualIdfyxRslNDvrMXFye4iNoJvDbf7kvMGBUNLQE86EsEdjldpuLRlKPxgZNbmOU0kD8sKJoG7nGz7GSeLoCO9CWMIc0Ol%2B5wvgq6h4hPwD%2FjiDEHyFzCLIQpYXz6FYJo%2FAhQcGAAnEMiKyK6I9KhioR3UBqtRFDr1hfMdhNxgTrZNhKis&X-Amz-Signature=e74c68bd4a4e27992cbd62268bf5e7cc39eb6cf68797c2662b70cf391b98c272&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPM6J7UM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHEjjeG4hJir%2FEHVuhSKIvsrVxjQt6qkUfE5xCX5ApT9AiEA23c3giP0rAUjOuAVGQR0BNlHqjakitgb5LMZVo%2F4m%2BgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgoiOdN3EhSUaUS5yrcA6m%2F4m35vBwTmGH5nOz7xi1wEPdaOgGrKAqhXsamYx3RXWeFRnLBBkRu4xmo5o3tIoxHB1i5mHEkLGt6nO0INJR68YtUKD6UdhqaC7UlPrYj0KAnUAqMmV5gBPoBTPEfNFnyutowAwndHs90Kbzt7u7UoqXqtj6%2BxMl9pgX%2FMjXdt6GHaMFHtr9yvmRYFPP1Nh6is86d6MSa4yrFxm6WBzzR7eELKjkR%2FA6HMEHxEqWhQu6AkIrzDV8R13MkmU316TX%2BsILE35z%2BL%2BaGKYzAwszccLmdks4sbmyMdeu5nE307lQGHpLW5%2BTLhdAyJYVeTlKlz3e83vt%2FrFAwjKO5JTNLRUTACKCjVLF9Q1yiuccOHHCxelLSRgaxtPfXT5gp3DUPRCgoBcPfwjRPQwEOY4wudLyo9%2FZWTXnnX4g04c0jyUpd0kJAX4zhFGBJGwzXj%2FroRNvbImeJIEASDb6vgUsrCfsnTMdlS%2FErfR5pHWLwyT9fr9WPqI0AOYDTO0vENsh4SYTuuUz%2FI5RuMPr6soS1VO1ldQ2oTwrgm4uTxei7sHYD1R9p61rFlbO3raEenXPkmrod%2FtEkYPeohzTPNrNSYb40J9n0IGROmfxcKh3z4lMuA2lOlibIgZhnMOLGpcAGOqUB%2FqA2pqPpHIF5fR%2BPwHlbtpOt5lN3J7eiwgkn%2B6Mo0gualIdfyxRslNDvrMXFye4iNoJvDbf7kvMGBUNLQE86EsEdjldpuLRlKPxgZNbmOU0kD8sKJoG7nGz7GSeLoCO9CWMIc0Ol%2B5wvgq6h4hPwD%2FjiDEHyFzCLIQpYXz6FYJo%2FAhQcGAAnEMiKyK6I9KhioR3UBqtRFDr1hfMdhNxgTrZNhKis&X-Amz-Signature=128de0cf0e44aa560ead145b272105d94566afc58ffe5ced38e93bc35c7ff106&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
