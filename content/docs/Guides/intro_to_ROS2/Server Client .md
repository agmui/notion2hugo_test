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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4NE43I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDTgXfmG7Jn52Hejs1D7frqbXbLz3FpxbI3U1uoyy7B0gIgFnYDyDFHBvpzKGXaJwUPMd7O9ZQD3B2gt97h%2BEWX17AqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg2Ib2eoYVwFeMI0yrcAxr7SeCTb6knoi4yfCK%2FEkdZku13mG%2BQjXrFejtDUksRkLLhH5H8jublMDAY51PRk8BCB6JWCsODDjNiZfvGyONSAVRkApxwOYxN6WLkPJqMXiFOc%2Fefj1Q1My4Hf3nCP4VKU4NmkJLjbnK1vVtBpTSvuB%2FPTSrwF2I1OhO6uVHFoCPPeS%2BdUEXKV1Gm5Wp2UlGKrfkOBDLpQVZemnDpt8jKsu2aY8oxVqmN%2B33qsvPIGKJul2K8mz5rHQZ3hcmTk73PtZT9y%2FewrH8My4OlrQJ5Qtb9jlaT48qi7GhY7z0aoQrzNw%2F6xUGQpWvT4Fe4Ci31SaXdL9aXL1cQNpmEjDCsUPR8OFZ3QizeShcYJIl5ezEffs7JBlIx5zlHrgX3kxGaNV6jgXO3D1LHowvyJXvhwb2bSG2VN8awelzF3P23xQbdCT7Kj%2FX3%2FBKR3CA4fUeYovvJs1WB%2FnE7UWvhVLUuzhwPMpdgfxVZLGPzdVcm6URyXDAh%2BrequcyNvTS2LUYK3QlR%2Fu2JdndQWS7IvTC741BQTMPVjP5VLIZSvMlko0S4HSf1xPWB%2FqZFEA1idGgpj9eNLiW%2BIdDydenrbncxja4VHMXDPXpPVImfcr9k2iFklArgLsouVAznMKLV0sQGOqUBGziq5KmPhZclfvWc0%2FM4sgj9iVDVN9zubBexJYdi%2BXXQAtLsAkwoKnwLY54YcmGLe9%2FsUE%2Fwz2VawCmdTOjLuAJ8jmmM23aPdpw%2BzldvHl2c3%2F1GCPCulo5QCLZmk4V5x1Mzx73EUks5qGJfzbAlYFRBhs2Eg4OKMhz5Ny03eSnAKDH%2FbZ5aXeQYr2Oq5XdAX2cVXq%2BZay1SP2KvllEh7OpLQ43w&X-Amz-Signature=a853afa63b7672b6d9eda01788e8c9636401cb47b9d113d600af47194cc47bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4NE43I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDTgXfmG7Jn52Hejs1D7frqbXbLz3FpxbI3U1uoyy7B0gIgFnYDyDFHBvpzKGXaJwUPMd7O9ZQD3B2gt97h%2BEWX17AqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg2Ib2eoYVwFeMI0yrcAxr7SeCTb6knoi4yfCK%2FEkdZku13mG%2BQjXrFejtDUksRkLLhH5H8jublMDAY51PRk8BCB6JWCsODDjNiZfvGyONSAVRkApxwOYxN6WLkPJqMXiFOc%2Fefj1Q1My4Hf3nCP4VKU4NmkJLjbnK1vVtBpTSvuB%2FPTSrwF2I1OhO6uVHFoCPPeS%2BdUEXKV1Gm5Wp2UlGKrfkOBDLpQVZemnDpt8jKsu2aY8oxVqmN%2B33qsvPIGKJul2K8mz5rHQZ3hcmTk73PtZT9y%2FewrH8My4OlrQJ5Qtb9jlaT48qi7GhY7z0aoQrzNw%2F6xUGQpWvT4Fe4Ci31SaXdL9aXL1cQNpmEjDCsUPR8OFZ3QizeShcYJIl5ezEffs7JBlIx5zlHrgX3kxGaNV6jgXO3D1LHowvyJXvhwb2bSG2VN8awelzF3P23xQbdCT7Kj%2FX3%2FBKR3CA4fUeYovvJs1WB%2FnE7UWvhVLUuzhwPMpdgfxVZLGPzdVcm6URyXDAh%2BrequcyNvTS2LUYK3QlR%2Fu2JdndQWS7IvTC741BQTMPVjP5VLIZSvMlko0S4HSf1xPWB%2FqZFEA1idGgpj9eNLiW%2BIdDydenrbncxja4VHMXDPXpPVImfcr9k2iFklArgLsouVAznMKLV0sQGOqUBGziq5KmPhZclfvWc0%2FM4sgj9iVDVN9zubBexJYdi%2BXXQAtLsAkwoKnwLY54YcmGLe9%2FsUE%2Fwz2VawCmdTOjLuAJ8jmmM23aPdpw%2BzldvHl2c3%2F1GCPCulo5QCLZmk4V5x1Mzx73EUks5qGJfzbAlYFRBhs2Eg4OKMhz5Ny03eSnAKDH%2FbZ5aXeQYr2Oq5XdAX2cVXq%2BZay1SP2KvllEh7OpLQ43w&X-Amz-Signature=ca4ac2282f7409216495dfe83e1fdae1a0a88e69f29aaee0e03500d402fa85d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4NE43I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDTgXfmG7Jn52Hejs1D7frqbXbLz3FpxbI3U1uoyy7B0gIgFnYDyDFHBvpzKGXaJwUPMd7O9ZQD3B2gt97h%2BEWX17AqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg2Ib2eoYVwFeMI0yrcAxr7SeCTb6knoi4yfCK%2FEkdZku13mG%2BQjXrFejtDUksRkLLhH5H8jublMDAY51PRk8BCB6JWCsODDjNiZfvGyONSAVRkApxwOYxN6WLkPJqMXiFOc%2Fefj1Q1My4Hf3nCP4VKU4NmkJLjbnK1vVtBpTSvuB%2FPTSrwF2I1OhO6uVHFoCPPeS%2BdUEXKV1Gm5Wp2UlGKrfkOBDLpQVZemnDpt8jKsu2aY8oxVqmN%2B33qsvPIGKJul2K8mz5rHQZ3hcmTk73PtZT9y%2FewrH8My4OlrQJ5Qtb9jlaT48qi7GhY7z0aoQrzNw%2F6xUGQpWvT4Fe4Ci31SaXdL9aXL1cQNpmEjDCsUPR8OFZ3QizeShcYJIl5ezEffs7JBlIx5zlHrgX3kxGaNV6jgXO3D1LHowvyJXvhwb2bSG2VN8awelzF3P23xQbdCT7Kj%2FX3%2FBKR3CA4fUeYovvJs1WB%2FnE7UWvhVLUuzhwPMpdgfxVZLGPzdVcm6URyXDAh%2BrequcyNvTS2LUYK3QlR%2Fu2JdndQWS7IvTC741BQTMPVjP5VLIZSvMlko0S4HSf1xPWB%2FqZFEA1idGgpj9eNLiW%2BIdDydenrbncxja4VHMXDPXpPVImfcr9k2iFklArgLsouVAznMKLV0sQGOqUBGziq5KmPhZclfvWc0%2FM4sgj9iVDVN9zubBexJYdi%2BXXQAtLsAkwoKnwLY54YcmGLe9%2FsUE%2Fwz2VawCmdTOjLuAJ8jmmM23aPdpw%2BzldvHl2c3%2F1GCPCulo5QCLZmk4V5x1Mzx73EUks5qGJfzbAlYFRBhs2Eg4OKMhz5Ny03eSnAKDH%2FbZ5aXeQYr2Oq5XdAX2cVXq%2BZay1SP2KvllEh7OpLQ43w&X-Amz-Signature=ba0fc5b3114b5d4ab38bad17afe65f1015a8daa1729b03a3907bb6cae271dfe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4NE43I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDTgXfmG7Jn52Hejs1D7frqbXbLz3FpxbI3U1uoyy7B0gIgFnYDyDFHBvpzKGXaJwUPMd7O9ZQD3B2gt97h%2BEWX17AqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg2Ib2eoYVwFeMI0yrcAxr7SeCTb6knoi4yfCK%2FEkdZku13mG%2BQjXrFejtDUksRkLLhH5H8jublMDAY51PRk8BCB6JWCsODDjNiZfvGyONSAVRkApxwOYxN6WLkPJqMXiFOc%2Fefj1Q1My4Hf3nCP4VKU4NmkJLjbnK1vVtBpTSvuB%2FPTSrwF2I1OhO6uVHFoCPPeS%2BdUEXKV1Gm5Wp2UlGKrfkOBDLpQVZemnDpt8jKsu2aY8oxVqmN%2B33qsvPIGKJul2K8mz5rHQZ3hcmTk73PtZT9y%2FewrH8My4OlrQJ5Qtb9jlaT48qi7GhY7z0aoQrzNw%2F6xUGQpWvT4Fe4Ci31SaXdL9aXL1cQNpmEjDCsUPR8OFZ3QizeShcYJIl5ezEffs7JBlIx5zlHrgX3kxGaNV6jgXO3D1LHowvyJXvhwb2bSG2VN8awelzF3P23xQbdCT7Kj%2FX3%2FBKR3CA4fUeYovvJs1WB%2FnE7UWvhVLUuzhwPMpdgfxVZLGPzdVcm6URyXDAh%2BrequcyNvTS2LUYK3QlR%2Fu2JdndQWS7IvTC741BQTMPVjP5VLIZSvMlko0S4HSf1xPWB%2FqZFEA1idGgpj9eNLiW%2BIdDydenrbncxja4VHMXDPXpPVImfcr9k2iFklArgLsouVAznMKLV0sQGOqUBGziq5KmPhZclfvWc0%2FM4sgj9iVDVN9zubBexJYdi%2BXXQAtLsAkwoKnwLY54YcmGLe9%2FsUE%2Fwz2VawCmdTOjLuAJ8jmmM23aPdpw%2BzldvHl2c3%2F1GCPCulo5QCLZmk4V5x1Mzx73EUks5qGJfzbAlYFRBhs2Eg4OKMhz5Ny03eSnAKDH%2FbZ5aXeQYr2Oq5XdAX2cVXq%2BZay1SP2KvllEh7OpLQ43w&X-Amz-Signature=942aac37de203cef6dcd099fa6580daab658a010184ac4b754fcc294b87d6038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4NE43I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDTgXfmG7Jn52Hejs1D7frqbXbLz3FpxbI3U1uoyy7B0gIgFnYDyDFHBvpzKGXaJwUPMd7O9ZQD3B2gt97h%2BEWX17AqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg2Ib2eoYVwFeMI0yrcAxr7SeCTb6knoi4yfCK%2FEkdZku13mG%2BQjXrFejtDUksRkLLhH5H8jublMDAY51PRk8BCB6JWCsODDjNiZfvGyONSAVRkApxwOYxN6WLkPJqMXiFOc%2Fefj1Q1My4Hf3nCP4VKU4NmkJLjbnK1vVtBpTSvuB%2FPTSrwF2I1OhO6uVHFoCPPeS%2BdUEXKV1Gm5Wp2UlGKrfkOBDLpQVZemnDpt8jKsu2aY8oxVqmN%2B33qsvPIGKJul2K8mz5rHQZ3hcmTk73PtZT9y%2FewrH8My4OlrQJ5Qtb9jlaT48qi7GhY7z0aoQrzNw%2F6xUGQpWvT4Fe4Ci31SaXdL9aXL1cQNpmEjDCsUPR8OFZ3QizeShcYJIl5ezEffs7JBlIx5zlHrgX3kxGaNV6jgXO3D1LHowvyJXvhwb2bSG2VN8awelzF3P23xQbdCT7Kj%2FX3%2FBKR3CA4fUeYovvJs1WB%2FnE7UWvhVLUuzhwPMpdgfxVZLGPzdVcm6URyXDAh%2BrequcyNvTS2LUYK3QlR%2Fu2JdndQWS7IvTC741BQTMPVjP5VLIZSvMlko0S4HSf1xPWB%2FqZFEA1idGgpj9eNLiW%2BIdDydenrbncxja4VHMXDPXpPVImfcr9k2iFklArgLsouVAznMKLV0sQGOqUBGziq5KmPhZclfvWc0%2FM4sgj9iVDVN9zubBexJYdi%2BXXQAtLsAkwoKnwLY54YcmGLe9%2FsUE%2Fwz2VawCmdTOjLuAJ8jmmM23aPdpw%2BzldvHl2c3%2F1GCPCulo5QCLZmk4V5x1Mzx73EUks5qGJfzbAlYFRBhs2Eg4OKMhz5Ny03eSnAKDH%2FbZ5aXeQYr2Oq5XdAX2cVXq%2BZay1SP2KvllEh7OpLQ43w&X-Amz-Signature=a824ecbf0f673fafeb7c851f5ec6e93d4a8f169fcd1b39300e92ac5fb4dc3e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
