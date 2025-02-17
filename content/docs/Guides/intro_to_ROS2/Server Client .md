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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBRZ3V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDbVuRYVMw9O8iqWTlPZJ5SFjy5dKfAVShXs%2F3dFzM4nAiEA0E%2B%2B%2BNgGmd5z%2BmNzU2KdPGQZc5idk66wPR493mcFxoUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCzhqfKfOzqbWttEVyrcA7BZa%2BmRs3K3tTV3w1Obdv7egF3u6bgaCMnV2iV6fGe%2FzPF9OL7tgiVAke8EKOvw4%2Fyw5rMvPe%2BrSrh%2BXDk1qK%2BaXSfzz11b6A9ejANP076GhV7jWhDSg4N9%2B6f8WRCrtxg8xv7ZAShxsBPNXhpMC%2ByDzMOtSMCQytUTTioMqOUtuTRhQ2htzxtdsVHlLR1LYjx3A6J43RDjM91xELn06oJEhkMVWzYuw9OiOtljR6dC2YxyIVM5yBP27LSQdC2nSqm8l9SbYv7MjliyMYchScSnFnEWEa5RqaSc2zGdBNfd68lQBzMOJL8d4Dl2JKLQqR4XM084UHoPQZ4ge3Hg8rlPjzYBLK8AjNfRaEQjvlfU66LUVyWL9yQohw2n7NY7sNXJIQ5NiINq7UCocOOnuM7oBy8eNenZ%2B%2FjrhpjbA6jpOJnCkv0C4d0LHtyquTzCzr6dgGiyaACBvSXsfnV%2B%2BLG1I7MjGTl1SMijtZZgFAX35rALWTWe6PSP7qXr2gIKi7MHs5kKePmsyY1NphLOyN7Ef24ZF8vzU9d%2Fmru2fXKjPyzaUJiiqX%2Fijo1pybWKhL8bL3qOA7YN03vW3rkLFD0kIV8h9g5QAU1znpA%2FMOa1ly7z59EtRwBbk%2Fa9MJaWzb0GOqUBHIWKmHojjyj8ls6a696TfhtpPWlnu%2BGA9kDVDcqxbuWxUNAM5IvmEb7HxCyVYqRSahqvTlSsnBXlft0hAakjuhXr5zRJ3qtnQuPvuunvdRWOLsXD2LESD4bQRA%2B5RpPt1jTYZkMRXiVxBvnDgqk%2F%2F4XJa9Yq4UZeNHPTTx1yU1OeH5zKUKb7apuomE36L57L0Ouo8SV9QWtR%2BGgLDhvubmuQFg4q&X-Amz-Signature=e86075b818e62acabcf4c884bb513e263c91c66684f070894caa6bd438f4464e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBRZ3V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDbVuRYVMw9O8iqWTlPZJ5SFjy5dKfAVShXs%2F3dFzM4nAiEA0E%2B%2B%2BNgGmd5z%2BmNzU2KdPGQZc5idk66wPR493mcFxoUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCzhqfKfOzqbWttEVyrcA7BZa%2BmRs3K3tTV3w1Obdv7egF3u6bgaCMnV2iV6fGe%2FzPF9OL7tgiVAke8EKOvw4%2Fyw5rMvPe%2BrSrh%2BXDk1qK%2BaXSfzz11b6A9ejANP076GhV7jWhDSg4N9%2B6f8WRCrtxg8xv7ZAShxsBPNXhpMC%2ByDzMOtSMCQytUTTioMqOUtuTRhQ2htzxtdsVHlLR1LYjx3A6J43RDjM91xELn06oJEhkMVWzYuw9OiOtljR6dC2YxyIVM5yBP27LSQdC2nSqm8l9SbYv7MjliyMYchScSnFnEWEa5RqaSc2zGdBNfd68lQBzMOJL8d4Dl2JKLQqR4XM084UHoPQZ4ge3Hg8rlPjzYBLK8AjNfRaEQjvlfU66LUVyWL9yQohw2n7NY7sNXJIQ5NiINq7UCocOOnuM7oBy8eNenZ%2B%2FjrhpjbA6jpOJnCkv0C4d0LHtyquTzCzr6dgGiyaACBvSXsfnV%2B%2BLG1I7MjGTl1SMijtZZgFAX35rALWTWe6PSP7qXr2gIKi7MHs5kKePmsyY1NphLOyN7Ef24ZF8vzU9d%2Fmru2fXKjPyzaUJiiqX%2Fijo1pybWKhL8bL3qOA7YN03vW3rkLFD0kIV8h9g5QAU1znpA%2FMOa1ly7z59EtRwBbk%2Fa9MJaWzb0GOqUBHIWKmHojjyj8ls6a696TfhtpPWlnu%2BGA9kDVDcqxbuWxUNAM5IvmEb7HxCyVYqRSahqvTlSsnBXlft0hAakjuhXr5zRJ3qtnQuPvuunvdRWOLsXD2LESD4bQRA%2B5RpPt1jTYZkMRXiVxBvnDgqk%2F%2F4XJa9Yq4UZeNHPTTx1yU1OeH5zKUKb7apuomE36L57L0Ouo8SV9QWtR%2BGgLDhvubmuQFg4q&X-Amz-Signature=c06e9739f7d990264150e88c4d36b790828aa0fff45803d631433b4629a47022&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBRZ3V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDbVuRYVMw9O8iqWTlPZJ5SFjy5dKfAVShXs%2F3dFzM4nAiEA0E%2B%2B%2BNgGmd5z%2BmNzU2KdPGQZc5idk66wPR493mcFxoUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCzhqfKfOzqbWttEVyrcA7BZa%2BmRs3K3tTV3w1Obdv7egF3u6bgaCMnV2iV6fGe%2FzPF9OL7tgiVAke8EKOvw4%2Fyw5rMvPe%2BrSrh%2BXDk1qK%2BaXSfzz11b6A9ejANP076GhV7jWhDSg4N9%2B6f8WRCrtxg8xv7ZAShxsBPNXhpMC%2ByDzMOtSMCQytUTTioMqOUtuTRhQ2htzxtdsVHlLR1LYjx3A6J43RDjM91xELn06oJEhkMVWzYuw9OiOtljR6dC2YxyIVM5yBP27LSQdC2nSqm8l9SbYv7MjliyMYchScSnFnEWEa5RqaSc2zGdBNfd68lQBzMOJL8d4Dl2JKLQqR4XM084UHoPQZ4ge3Hg8rlPjzYBLK8AjNfRaEQjvlfU66LUVyWL9yQohw2n7NY7sNXJIQ5NiINq7UCocOOnuM7oBy8eNenZ%2B%2FjrhpjbA6jpOJnCkv0C4d0LHtyquTzCzr6dgGiyaACBvSXsfnV%2B%2BLG1I7MjGTl1SMijtZZgFAX35rALWTWe6PSP7qXr2gIKi7MHs5kKePmsyY1NphLOyN7Ef24ZF8vzU9d%2Fmru2fXKjPyzaUJiiqX%2Fijo1pybWKhL8bL3qOA7YN03vW3rkLFD0kIV8h9g5QAU1znpA%2FMOa1ly7z59EtRwBbk%2Fa9MJaWzb0GOqUBHIWKmHojjyj8ls6a696TfhtpPWlnu%2BGA9kDVDcqxbuWxUNAM5IvmEb7HxCyVYqRSahqvTlSsnBXlft0hAakjuhXr5zRJ3qtnQuPvuunvdRWOLsXD2LESD4bQRA%2B5RpPt1jTYZkMRXiVxBvnDgqk%2F%2F4XJa9Yq4UZeNHPTTx1yU1OeH5zKUKb7apuomE36L57L0Ouo8SV9QWtR%2BGgLDhvubmuQFg4q&X-Amz-Signature=b8794fe4dcbeb3e376b39ec9cba824c3c5b334e6a4bdc42ee938dbcc64478078&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBRZ3V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDbVuRYVMw9O8iqWTlPZJ5SFjy5dKfAVShXs%2F3dFzM4nAiEA0E%2B%2B%2BNgGmd5z%2BmNzU2KdPGQZc5idk66wPR493mcFxoUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCzhqfKfOzqbWttEVyrcA7BZa%2BmRs3K3tTV3w1Obdv7egF3u6bgaCMnV2iV6fGe%2FzPF9OL7tgiVAke8EKOvw4%2Fyw5rMvPe%2BrSrh%2BXDk1qK%2BaXSfzz11b6A9ejANP076GhV7jWhDSg4N9%2B6f8WRCrtxg8xv7ZAShxsBPNXhpMC%2ByDzMOtSMCQytUTTioMqOUtuTRhQ2htzxtdsVHlLR1LYjx3A6J43RDjM91xELn06oJEhkMVWzYuw9OiOtljR6dC2YxyIVM5yBP27LSQdC2nSqm8l9SbYv7MjliyMYchScSnFnEWEa5RqaSc2zGdBNfd68lQBzMOJL8d4Dl2JKLQqR4XM084UHoPQZ4ge3Hg8rlPjzYBLK8AjNfRaEQjvlfU66LUVyWL9yQohw2n7NY7sNXJIQ5NiINq7UCocOOnuM7oBy8eNenZ%2B%2FjrhpjbA6jpOJnCkv0C4d0LHtyquTzCzr6dgGiyaACBvSXsfnV%2B%2BLG1I7MjGTl1SMijtZZgFAX35rALWTWe6PSP7qXr2gIKi7MHs5kKePmsyY1NphLOyN7Ef24ZF8vzU9d%2Fmru2fXKjPyzaUJiiqX%2Fijo1pybWKhL8bL3qOA7YN03vW3rkLFD0kIV8h9g5QAU1znpA%2FMOa1ly7z59EtRwBbk%2Fa9MJaWzb0GOqUBHIWKmHojjyj8ls6a696TfhtpPWlnu%2BGA9kDVDcqxbuWxUNAM5IvmEb7HxCyVYqRSahqvTlSsnBXlft0hAakjuhXr5zRJ3qtnQuPvuunvdRWOLsXD2LESD4bQRA%2B5RpPt1jTYZkMRXiVxBvnDgqk%2F%2F4XJa9Yq4UZeNHPTTx1yU1OeH5zKUKb7apuomE36L57L0Ouo8SV9QWtR%2BGgLDhvubmuQFg4q&X-Amz-Signature=dd77d42e0eebb75418223c7f201c1c2316141284aeb93573cb3b462b6557e814&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBRZ3V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDbVuRYVMw9O8iqWTlPZJ5SFjy5dKfAVShXs%2F3dFzM4nAiEA0E%2B%2B%2BNgGmd5z%2BmNzU2KdPGQZc5idk66wPR493mcFxoUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCzhqfKfOzqbWttEVyrcA7BZa%2BmRs3K3tTV3w1Obdv7egF3u6bgaCMnV2iV6fGe%2FzPF9OL7tgiVAke8EKOvw4%2Fyw5rMvPe%2BrSrh%2BXDk1qK%2BaXSfzz11b6A9ejANP076GhV7jWhDSg4N9%2B6f8WRCrtxg8xv7ZAShxsBPNXhpMC%2ByDzMOtSMCQytUTTioMqOUtuTRhQ2htzxtdsVHlLR1LYjx3A6J43RDjM91xELn06oJEhkMVWzYuw9OiOtljR6dC2YxyIVM5yBP27LSQdC2nSqm8l9SbYv7MjliyMYchScSnFnEWEa5RqaSc2zGdBNfd68lQBzMOJL8d4Dl2JKLQqR4XM084UHoPQZ4ge3Hg8rlPjzYBLK8AjNfRaEQjvlfU66LUVyWL9yQohw2n7NY7sNXJIQ5NiINq7UCocOOnuM7oBy8eNenZ%2B%2FjrhpjbA6jpOJnCkv0C4d0LHtyquTzCzr6dgGiyaACBvSXsfnV%2B%2BLG1I7MjGTl1SMijtZZgFAX35rALWTWe6PSP7qXr2gIKi7MHs5kKePmsyY1NphLOyN7Ef24ZF8vzU9d%2Fmru2fXKjPyzaUJiiqX%2Fijo1pybWKhL8bL3qOA7YN03vW3rkLFD0kIV8h9g5QAU1znpA%2FMOa1ly7z59EtRwBbk%2Fa9MJaWzb0GOqUBHIWKmHojjyj8ls6a696TfhtpPWlnu%2BGA9kDVDcqxbuWxUNAM5IvmEb7HxCyVYqRSahqvTlSsnBXlft0hAakjuhXr5zRJ3qtnQuPvuunvdRWOLsXD2LESD4bQRA%2B5RpPt1jTYZkMRXiVxBvnDgqk%2F%2F4XJa9Yq4UZeNHPTTx1yU1OeH5zKUKb7apuomE36L57L0Ouo8SV9QWtR%2BGgLDhvubmuQFg4q&X-Amz-Signature=00a76ded7507d947a24ac9c8cfe20faac0fe749561b471c0fdeb6225f0488f16&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
