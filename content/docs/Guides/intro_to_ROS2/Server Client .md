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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665US64XPT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFIkY2a3s00EvGdAhonmaeabGS9DA1VrFYDRQulbGA2QIgdWmv%2FowCrczszydy1YaLVSZhV0uWWS2k2NVWtM2ptTMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGIhmzPQER9XWoHv0SrcA3ZJrDLfqoXjP6FKEZxl0pdVkaE%2BiACPpi3huIlYbe4ViJn8S902awjyR4rQsBMrU2%2Bu%2F9D%2Bx13S2bujYqc7VHLrN3qFh9fSkfLTEzrtT4Y5%2F5L3XPiRddK3BOeMIN%2BC1tdHZKjo4vLUWOesrmvwZckOQimRQWqx5%2F%2FnBiebSO3I%2FuKI2UG4dMZmSMjUAKWM1qSR3mAC6r%2FruBOq5gQlvI9uQ%2BqvZA9EAYYQ%2FjceT1GwObjgXNmOCku8ZZJF5WjawXw67Vaj62K65d3pFjyy3weHvy8mVCnB27fUeK9L1lsPj3j9RyI37VBDsGNC%2BGzkQsBzGGE6eFvcFXVVFpfmxEYBw4aRhvJ6x63Waru1EA63Jc4MaTRvyhhVKtPaf14DPZDVGC0dVK%2BvoUPO0n8Wqq%2BcE%2BEAFsUefYd2Zh3M90dZ7jcsHlEwE5PGlPqPSC01b6YZ0ozleZXsli6Q3mbZnhkRXJlNd28qHDiAdWtYicpkr633HTRjb0A46cKQmEDLY2UxmHxzC1iYxEmOqh6FsUB9o5P01rObs%2FP55RaNP%2Fv394nJGjA9NXt02lHmYn37hzJOraANIiv1mZoOFzUP%2ByJa6OM19ayf9bA50OsgtI1PGOLq%2Bp7cpt1wxZXLMN29lL8GOqUBpT5gQvmdlD7wBEcwDhz8vtw0RJ3C9ultLRyoLa20dVX4qMHQYBtzIHGn9PQCmitoeDB7dP2T2XOBh3OrGhj9AxOQHqMu8ky1j4OaU4oFAuu1JRzqz0bNXHPBhCGibCwIhbWSscu9xzCF84vxXhtwN29%2BzUzTETJ3BmI0A43SxNxXzzONdO7L%2BpXHHmjZ8sMmFZ3%2FflxshbK3rGx14JrvYmFbbNKt&X-Amz-Signature=ca7152a4cd2517f0ab11aa78f9ed4cf97ca801a0991d1107be3e242703490d32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665US64XPT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFIkY2a3s00EvGdAhonmaeabGS9DA1VrFYDRQulbGA2QIgdWmv%2FowCrczszydy1YaLVSZhV0uWWS2k2NVWtM2ptTMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGIhmzPQER9XWoHv0SrcA3ZJrDLfqoXjP6FKEZxl0pdVkaE%2BiACPpi3huIlYbe4ViJn8S902awjyR4rQsBMrU2%2Bu%2F9D%2Bx13S2bujYqc7VHLrN3qFh9fSkfLTEzrtT4Y5%2F5L3XPiRddK3BOeMIN%2BC1tdHZKjo4vLUWOesrmvwZckOQimRQWqx5%2F%2FnBiebSO3I%2FuKI2UG4dMZmSMjUAKWM1qSR3mAC6r%2FruBOq5gQlvI9uQ%2BqvZA9EAYYQ%2FjceT1GwObjgXNmOCku8ZZJF5WjawXw67Vaj62K65d3pFjyy3weHvy8mVCnB27fUeK9L1lsPj3j9RyI37VBDsGNC%2BGzkQsBzGGE6eFvcFXVVFpfmxEYBw4aRhvJ6x63Waru1EA63Jc4MaTRvyhhVKtPaf14DPZDVGC0dVK%2BvoUPO0n8Wqq%2BcE%2BEAFsUefYd2Zh3M90dZ7jcsHlEwE5PGlPqPSC01b6YZ0ozleZXsli6Q3mbZnhkRXJlNd28qHDiAdWtYicpkr633HTRjb0A46cKQmEDLY2UxmHxzC1iYxEmOqh6FsUB9o5P01rObs%2FP55RaNP%2Fv394nJGjA9NXt02lHmYn37hzJOraANIiv1mZoOFzUP%2ByJa6OM19ayf9bA50OsgtI1PGOLq%2Bp7cpt1wxZXLMN29lL8GOqUBpT5gQvmdlD7wBEcwDhz8vtw0RJ3C9ultLRyoLa20dVX4qMHQYBtzIHGn9PQCmitoeDB7dP2T2XOBh3OrGhj9AxOQHqMu8ky1j4OaU4oFAuu1JRzqz0bNXHPBhCGibCwIhbWSscu9xzCF84vxXhtwN29%2BzUzTETJ3BmI0A43SxNxXzzONdO7L%2BpXHHmjZ8sMmFZ3%2FflxshbK3rGx14JrvYmFbbNKt&X-Amz-Signature=05219b72ed212fb34d3465d0db8b72167151efe9e8ddac062c313d0386c7dce7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665US64XPT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFIkY2a3s00EvGdAhonmaeabGS9DA1VrFYDRQulbGA2QIgdWmv%2FowCrczszydy1YaLVSZhV0uWWS2k2NVWtM2ptTMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGIhmzPQER9XWoHv0SrcA3ZJrDLfqoXjP6FKEZxl0pdVkaE%2BiACPpi3huIlYbe4ViJn8S902awjyR4rQsBMrU2%2Bu%2F9D%2Bx13S2bujYqc7VHLrN3qFh9fSkfLTEzrtT4Y5%2F5L3XPiRddK3BOeMIN%2BC1tdHZKjo4vLUWOesrmvwZckOQimRQWqx5%2F%2FnBiebSO3I%2FuKI2UG4dMZmSMjUAKWM1qSR3mAC6r%2FruBOq5gQlvI9uQ%2BqvZA9EAYYQ%2FjceT1GwObjgXNmOCku8ZZJF5WjawXw67Vaj62K65d3pFjyy3weHvy8mVCnB27fUeK9L1lsPj3j9RyI37VBDsGNC%2BGzkQsBzGGE6eFvcFXVVFpfmxEYBw4aRhvJ6x63Waru1EA63Jc4MaTRvyhhVKtPaf14DPZDVGC0dVK%2BvoUPO0n8Wqq%2BcE%2BEAFsUefYd2Zh3M90dZ7jcsHlEwE5PGlPqPSC01b6YZ0ozleZXsli6Q3mbZnhkRXJlNd28qHDiAdWtYicpkr633HTRjb0A46cKQmEDLY2UxmHxzC1iYxEmOqh6FsUB9o5P01rObs%2FP55RaNP%2Fv394nJGjA9NXt02lHmYn37hzJOraANIiv1mZoOFzUP%2ByJa6OM19ayf9bA50OsgtI1PGOLq%2Bp7cpt1wxZXLMN29lL8GOqUBpT5gQvmdlD7wBEcwDhz8vtw0RJ3C9ultLRyoLa20dVX4qMHQYBtzIHGn9PQCmitoeDB7dP2T2XOBh3OrGhj9AxOQHqMu8ky1j4OaU4oFAuu1JRzqz0bNXHPBhCGibCwIhbWSscu9xzCF84vxXhtwN29%2BzUzTETJ3BmI0A43SxNxXzzONdO7L%2BpXHHmjZ8sMmFZ3%2FflxshbK3rGx14JrvYmFbbNKt&X-Amz-Signature=4a2c269d8fe16edc5beafb3095a3ea03d9234be9284827382d7187e61e9cdadd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665US64XPT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFIkY2a3s00EvGdAhonmaeabGS9DA1VrFYDRQulbGA2QIgdWmv%2FowCrczszydy1YaLVSZhV0uWWS2k2NVWtM2ptTMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGIhmzPQER9XWoHv0SrcA3ZJrDLfqoXjP6FKEZxl0pdVkaE%2BiACPpi3huIlYbe4ViJn8S902awjyR4rQsBMrU2%2Bu%2F9D%2Bx13S2bujYqc7VHLrN3qFh9fSkfLTEzrtT4Y5%2F5L3XPiRddK3BOeMIN%2BC1tdHZKjo4vLUWOesrmvwZckOQimRQWqx5%2F%2FnBiebSO3I%2FuKI2UG4dMZmSMjUAKWM1qSR3mAC6r%2FruBOq5gQlvI9uQ%2BqvZA9EAYYQ%2FjceT1GwObjgXNmOCku8ZZJF5WjawXw67Vaj62K65d3pFjyy3weHvy8mVCnB27fUeK9L1lsPj3j9RyI37VBDsGNC%2BGzkQsBzGGE6eFvcFXVVFpfmxEYBw4aRhvJ6x63Waru1EA63Jc4MaTRvyhhVKtPaf14DPZDVGC0dVK%2BvoUPO0n8Wqq%2BcE%2BEAFsUefYd2Zh3M90dZ7jcsHlEwE5PGlPqPSC01b6YZ0ozleZXsli6Q3mbZnhkRXJlNd28qHDiAdWtYicpkr633HTRjb0A46cKQmEDLY2UxmHxzC1iYxEmOqh6FsUB9o5P01rObs%2FP55RaNP%2Fv394nJGjA9NXt02lHmYn37hzJOraANIiv1mZoOFzUP%2ByJa6OM19ayf9bA50OsgtI1PGOLq%2Bp7cpt1wxZXLMN29lL8GOqUBpT5gQvmdlD7wBEcwDhz8vtw0RJ3C9ultLRyoLa20dVX4qMHQYBtzIHGn9PQCmitoeDB7dP2T2XOBh3OrGhj9AxOQHqMu8ky1j4OaU4oFAuu1JRzqz0bNXHPBhCGibCwIhbWSscu9xzCF84vxXhtwN29%2BzUzTETJ3BmI0A43SxNxXzzONdO7L%2BpXHHmjZ8sMmFZ3%2FflxshbK3rGx14JrvYmFbbNKt&X-Amz-Signature=20e468d7f46e031c9fe8caba7a19f2fc8a62bfb073ef12255970aa69d02d645f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665US64XPT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFIkY2a3s00EvGdAhonmaeabGS9DA1VrFYDRQulbGA2QIgdWmv%2FowCrczszydy1YaLVSZhV0uWWS2k2NVWtM2ptTMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGIhmzPQER9XWoHv0SrcA3ZJrDLfqoXjP6FKEZxl0pdVkaE%2BiACPpi3huIlYbe4ViJn8S902awjyR4rQsBMrU2%2Bu%2F9D%2Bx13S2bujYqc7VHLrN3qFh9fSkfLTEzrtT4Y5%2F5L3XPiRddK3BOeMIN%2BC1tdHZKjo4vLUWOesrmvwZckOQimRQWqx5%2F%2FnBiebSO3I%2FuKI2UG4dMZmSMjUAKWM1qSR3mAC6r%2FruBOq5gQlvI9uQ%2BqvZA9EAYYQ%2FjceT1GwObjgXNmOCku8ZZJF5WjawXw67Vaj62K65d3pFjyy3weHvy8mVCnB27fUeK9L1lsPj3j9RyI37VBDsGNC%2BGzkQsBzGGE6eFvcFXVVFpfmxEYBw4aRhvJ6x63Waru1EA63Jc4MaTRvyhhVKtPaf14DPZDVGC0dVK%2BvoUPO0n8Wqq%2BcE%2BEAFsUefYd2Zh3M90dZ7jcsHlEwE5PGlPqPSC01b6YZ0ozleZXsli6Q3mbZnhkRXJlNd28qHDiAdWtYicpkr633HTRjb0A46cKQmEDLY2UxmHxzC1iYxEmOqh6FsUB9o5P01rObs%2FP55RaNP%2Fv394nJGjA9NXt02lHmYn37hzJOraANIiv1mZoOFzUP%2ByJa6OM19ayf9bA50OsgtI1PGOLq%2Bp7cpt1wxZXLMN29lL8GOqUBpT5gQvmdlD7wBEcwDhz8vtw0RJ3C9ultLRyoLa20dVX4qMHQYBtzIHGn9PQCmitoeDB7dP2T2XOBh3OrGhj9AxOQHqMu8ky1j4OaU4oFAuu1JRzqz0bNXHPBhCGibCwIhbWSscu9xzCF84vxXhtwN29%2BzUzTETJ3BmI0A43SxNxXzzONdO7L%2BpXHHmjZ8sMmFZ3%2FflxshbK3rGx14JrvYmFbbNKt&X-Amz-Signature=f408e573b38721a87c3c2a90ad459e881bbd30d4079e11c05efba8428ea3d070&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
