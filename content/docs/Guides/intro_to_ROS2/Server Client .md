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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NMZEKU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICkM4QqbW1TSi9UiQQ%2FBDFcJeAFlMvwZnzUbunZF%2B1OWAiEAy4gjnSYMF48sq8ODYITJk1YFDiXavfI24Llcl0xWa%2BUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFFhLuL%2B%2B8547EKqFyrcA5zXvjFTe1L94ZZ1UsTbuZBXv1%2B3zc2BFsiOLWJwnf9pwcYj7go8yboYPFIqdSp8JeyNWAU4PuJL5xRvDl3rCm1mR7Z55oyM8iYEhNKn7kulgz7scGpjhOsZzSplsrEh172vh62T6ChJDHAhpwFS%2FWP7IHCFZzcKHy5HWDid50POIGPs9Z1kJxCQ8SopxtgkdDk0jGFoyXh%2F1mci1eGhNBak1%2BfAYk2qggMZYR54J9bIoObd96JJUR%2FPGvYwpVV5ZyEB4%2BKxGgebNmtjw%2BajQFi85YcanaEGtlelcNGuVc%2BgabIaK3tINnWQL%2F1TjenbOVJgEYjNo%2BVEx0Q0YDyMfEMBN9nEqIgvN0mrYz4IteNEbqjBTOrTk8IVkEbm4LoFnWUhI%2BA7P%2F7w4EjjsethJhfQ3qSnLq7kU0qmqBI9CEjnzESXRt4%2BnKTR%2BxMK6X8rQ1UUEtpzW8bQRMwYNbV2JecVIoWzzySzZb7OtFjd6f5N3fj5q%2B3%2FN4n%2B9NoM5vx3nljSbR1yP7iETBNUsJFpevEo9vj6pmkTMEm7jdwqNGr8yFNNMJRj3OW59R9GNp49CekDyF%2BHjvWNp%2F%2BacsBVJmX8AEVOfAmod4B5RL31R%2FNGjalXXxqGvX9q7fKrMLjZiMQGOqUBdJkUZxB4jOiAc74ij13N%2Bp%2BBkEbSH4lxCGS0X%2BhUTqs5lUf%2BPAhzFlc6NPoPS1Qyr%2F8cEQfsRen7IlXAKQHPXGWQZREFOBSPq4ZO8uagn9PRShnBD4lvK1G9BGtNpTM%2Bn9aQRreXMSI9C2mHwqtSZ2z5a2FTR6Y9PDv8rgjhZEwS%2BHyZY3omAABHPo53wrIwDOuGHMBGe%2FwtIAPtVHUFSfzHE%2FZg&X-Amz-Signature=fb044f7aae24024a5ac0c3d039ffd984f444820bf068c838adf91cae4977a335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NMZEKU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICkM4QqbW1TSi9UiQQ%2FBDFcJeAFlMvwZnzUbunZF%2B1OWAiEAy4gjnSYMF48sq8ODYITJk1YFDiXavfI24Llcl0xWa%2BUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFFhLuL%2B%2B8547EKqFyrcA5zXvjFTe1L94ZZ1UsTbuZBXv1%2B3zc2BFsiOLWJwnf9pwcYj7go8yboYPFIqdSp8JeyNWAU4PuJL5xRvDl3rCm1mR7Z55oyM8iYEhNKn7kulgz7scGpjhOsZzSplsrEh172vh62T6ChJDHAhpwFS%2FWP7IHCFZzcKHy5HWDid50POIGPs9Z1kJxCQ8SopxtgkdDk0jGFoyXh%2F1mci1eGhNBak1%2BfAYk2qggMZYR54J9bIoObd96JJUR%2FPGvYwpVV5ZyEB4%2BKxGgebNmtjw%2BajQFi85YcanaEGtlelcNGuVc%2BgabIaK3tINnWQL%2F1TjenbOVJgEYjNo%2BVEx0Q0YDyMfEMBN9nEqIgvN0mrYz4IteNEbqjBTOrTk8IVkEbm4LoFnWUhI%2BA7P%2F7w4EjjsethJhfQ3qSnLq7kU0qmqBI9CEjnzESXRt4%2BnKTR%2BxMK6X8rQ1UUEtpzW8bQRMwYNbV2JecVIoWzzySzZb7OtFjd6f5N3fj5q%2B3%2FN4n%2B9NoM5vx3nljSbR1yP7iETBNUsJFpevEo9vj6pmkTMEm7jdwqNGr8yFNNMJRj3OW59R9GNp49CekDyF%2BHjvWNp%2F%2BacsBVJmX8AEVOfAmod4B5RL31R%2FNGjalXXxqGvX9q7fKrMLjZiMQGOqUBdJkUZxB4jOiAc74ij13N%2Bp%2BBkEbSH4lxCGS0X%2BhUTqs5lUf%2BPAhzFlc6NPoPS1Qyr%2F8cEQfsRen7IlXAKQHPXGWQZREFOBSPq4ZO8uagn9PRShnBD4lvK1G9BGtNpTM%2Bn9aQRreXMSI9C2mHwqtSZ2z5a2FTR6Y9PDv8rgjhZEwS%2BHyZY3omAABHPo53wrIwDOuGHMBGe%2FwtIAPtVHUFSfzHE%2FZg&X-Amz-Signature=8c8f575a08009cbab2bb38650e64547a878a3d900b21e43573d09b8bcf3f5436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NMZEKU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICkM4QqbW1TSi9UiQQ%2FBDFcJeAFlMvwZnzUbunZF%2B1OWAiEAy4gjnSYMF48sq8ODYITJk1YFDiXavfI24Llcl0xWa%2BUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFFhLuL%2B%2B8547EKqFyrcA5zXvjFTe1L94ZZ1UsTbuZBXv1%2B3zc2BFsiOLWJwnf9pwcYj7go8yboYPFIqdSp8JeyNWAU4PuJL5xRvDl3rCm1mR7Z55oyM8iYEhNKn7kulgz7scGpjhOsZzSplsrEh172vh62T6ChJDHAhpwFS%2FWP7IHCFZzcKHy5HWDid50POIGPs9Z1kJxCQ8SopxtgkdDk0jGFoyXh%2F1mci1eGhNBak1%2BfAYk2qggMZYR54J9bIoObd96JJUR%2FPGvYwpVV5ZyEB4%2BKxGgebNmtjw%2BajQFi85YcanaEGtlelcNGuVc%2BgabIaK3tINnWQL%2F1TjenbOVJgEYjNo%2BVEx0Q0YDyMfEMBN9nEqIgvN0mrYz4IteNEbqjBTOrTk8IVkEbm4LoFnWUhI%2BA7P%2F7w4EjjsethJhfQ3qSnLq7kU0qmqBI9CEjnzESXRt4%2BnKTR%2BxMK6X8rQ1UUEtpzW8bQRMwYNbV2JecVIoWzzySzZb7OtFjd6f5N3fj5q%2B3%2FN4n%2B9NoM5vx3nljSbR1yP7iETBNUsJFpevEo9vj6pmkTMEm7jdwqNGr8yFNNMJRj3OW59R9GNp49CekDyF%2BHjvWNp%2F%2BacsBVJmX8AEVOfAmod4B5RL31R%2FNGjalXXxqGvX9q7fKrMLjZiMQGOqUBdJkUZxB4jOiAc74ij13N%2Bp%2BBkEbSH4lxCGS0X%2BhUTqs5lUf%2BPAhzFlc6NPoPS1Qyr%2F8cEQfsRen7IlXAKQHPXGWQZREFOBSPq4ZO8uagn9PRShnBD4lvK1G9BGtNpTM%2Bn9aQRreXMSI9C2mHwqtSZ2z5a2FTR6Y9PDv8rgjhZEwS%2BHyZY3omAABHPo53wrIwDOuGHMBGe%2FwtIAPtVHUFSfzHE%2FZg&X-Amz-Signature=1d6724805d7f64d6b019ec539311da42659d750c63aa00a5b1d1d9127d0e2657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NMZEKU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICkM4QqbW1TSi9UiQQ%2FBDFcJeAFlMvwZnzUbunZF%2B1OWAiEAy4gjnSYMF48sq8ODYITJk1YFDiXavfI24Llcl0xWa%2BUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFFhLuL%2B%2B8547EKqFyrcA5zXvjFTe1L94ZZ1UsTbuZBXv1%2B3zc2BFsiOLWJwnf9pwcYj7go8yboYPFIqdSp8JeyNWAU4PuJL5xRvDl3rCm1mR7Z55oyM8iYEhNKn7kulgz7scGpjhOsZzSplsrEh172vh62T6ChJDHAhpwFS%2FWP7IHCFZzcKHy5HWDid50POIGPs9Z1kJxCQ8SopxtgkdDk0jGFoyXh%2F1mci1eGhNBak1%2BfAYk2qggMZYR54J9bIoObd96JJUR%2FPGvYwpVV5ZyEB4%2BKxGgebNmtjw%2BajQFi85YcanaEGtlelcNGuVc%2BgabIaK3tINnWQL%2F1TjenbOVJgEYjNo%2BVEx0Q0YDyMfEMBN9nEqIgvN0mrYz4IteNEbqjBTOrTk8IVkEbm4LoFnWUhI%2BA7P%2F7w4EjjsethJhfQ3qSnLq7kU0qmqBI9CEjnzESXRt4%2BnKTR%2BxMK6X8rQ1UUEtpzW8bQRMwYNbV2JecVIoWzzySzZb7OtFjd6f5N3fj5q%2B3%2FN4n%2B9NoM5vx3nljSbR1yP7iETBNUsJFpevEo9vj6pmkTMEm7jdwqNGr8yFNNMJRj3OW59R9GNp49CekDyF%2BHjvWNp%2F%2BacsBVJmX8AEVOfAmod4B5RL31R%2FNGjalXXxqGvX9q7fKrMLjZiMQGOqUBdJkUZxB4jOiAc74ij13N%2Bp%2BBkEbSH4lxCGS0X%2BhUTqs5lUf%2BPAhzFlc6NPoPS1Qyr%2F8cEQfsRen7IlXAKQHPXGWQZREFOBSPq4ZO8uagn9PRShnBD4lvK1G9BGtNpTM%2Bn9aQRreXMSI9C2mHwqtSZ2z5a2FTR6Y9PDv8rgjhZEwS%2BHyZY3omAABHPo53wrIwDOuGHMBGe%2FwtIAPtVHUFSfzHE%2FZg&X-Amz-Signature=5c29c351366ad812034a1bd265eeffc7906796c1ae3690714fd98ab0a4995d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NMZEKU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICkM4QqbW1TSi9UiQQ%2FBDFcJeAFlMvwZnzUbunZF%2B1OWAiEAy4gjnSYMF48sq8ODYITJk1YFDiXavfI24Llcl0xWa%2BUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFFhLuL%2B%2B8547EKqFyrcA5zXvjFTe1L94ZZ1UsTbuZBXv1%2B3zc2BFsiOLWJwnf9pwcYj7go8yboYPFIqdSp8JeyNWAU4PuJL5xRvDl3rCm1mR7Z55oyM8iYEhNKn7kulgz7scGpjhOsZzSplsrEh172vh62T6ChJDHAhpwFS%2FWP7IHCFZzcKHy5HWDid50POIGPs9Z1kJxCQ8SopxtgkdDk0jGFoyXh%2F1mci1eGhNBak1%2BfAYk2qggMZYR54J9bIoObd96JJUR%2FPGvYwpVV5ZyEB4%2BKxGgebNmtjw%2BajQFi85YcanaEGtlelcNGuVc%2BgabIaK3tINnWQL%2F1TjenbOVJgEYjNo%2BVEx0Q0YDyMfEMBN9nEqIgvN0mrYz4IteNEbqjBTOrTk8IVkEbm4LoFnWUhI%2BA7P%2F7w4EjjsethJhfQ3qSnLq7kU0qmqBI9CEjnzESXRt4%2BnKTR%2BxMK6X8rQ1UUEtpzW8bQRMwYNbV2JecVIoWzzySzZb7OtFjd6f5N3fj5q%2B3%2FN4n%2B9NoM5vx3nljSbR1yP7iETBNUsJFpevEo9vj6pmkTMEm7jdwqNGr8yFNNMJRj3OW59R9GNp49CekDyF%2BHjvWNp%2F%2BacsBVJmX8AEVOfAmod4B5RL31R%2FNGjalXXxqGvX9q7fKrMLjZiMQGOqUBdJkUZxB4jOiAc74ij13N%2Bp%2BBkEbSH4lxCGS0X%2BhUTqs5lUf%2BPAhzFlc6NPoPS1Qyr%2F8cEQfsRen7IlXAKQHPXGWQZREFOBSPq4ZO8uagn9PRShnBD4lvK1G9BGtNpTM%2Bn9aQRreXMSI9C2mHwqtSZ2z5a2FTR6Y9PDv8rgjhZEwS%2BHyZY3omAABHPo53wrIwDOuGHMBGe%2FwtIAPtVHUFSfzHE%2FZg&X-Amz-Signature=3c7bcfa5662f58944d03533e50ce023067fda95924b7287f728232da7c343581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
