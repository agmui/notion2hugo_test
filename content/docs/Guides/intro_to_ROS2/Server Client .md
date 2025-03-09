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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO63EK2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWgyI25bENjDZJM%2Bz0ayIVmSRW5YprinA8BY9Cn3GRUAIhALSOWazFUG1AgxIScwtTk3l5ut4n1HFuVn%2Bff24i8tAaKv8DCHcQABoMNjM3NDIzMTgzODA1Igx0S%2FEUlCuwQ7Vg67Yq3APt6yTHy7zXGG7xcSlN4NaMa3zeVbVkDg84eqz8a8MA4Yb7Lty13pyLU0ZAYBJbbS0LF2iN1rT2%2BWmyjYEKgrYnCQuyg2rhH4T9XF0h9pBDb47qmlckUVNDc%2BBhZt6pPvYILrsVGuH7L993uruZ3XzXtU7pgOr6EFZ4Iq4A9wS5KsK2KqwrpV8ORM%2B1YYPEHb3nJjRaB2EF3mAnAqVJdpDBvRmveuOyBneRd0aZr3czD5VTzZk7v%2Br%2BX%2F5%2BDznvryVXgm39AVhiedBm90sepIsOyH2PKwDNmAE2p3jVb6yTvXsfa0xtGhyKpPc9jNsA3p2tkbV%2BCDp5KP2DSBZuQpvFB2R3RZujddty%2FPjr%2BeGOuuPJwMXMMKDJUp%2BExlYsLIWSvVz6wejCa%2BQ4YtObhazdcgZssgqj6w0ntMrTzfX1tSfEWZQuOblQfoXDnLYvbQ9OWyqukEzbQCwn7zHNVJ5QD0sIMt5VrdAuO5vZCQ6W0OZvswWzRlidXSgacIiVrLGrS3SJRYgAtaEugyyIZiFwJX1QL0Q5117JHAEzBvnwRNmHp02TXdsoBjQ02wBhnTpsPZb80yPuFPGTZMg4youGofcyqN6%2FNVZL4ANojJ%2FeCe2%2B2HUdfmyhcFCiQTC%2Btba%2BBjqkAbo1qEk7oDv3LnvHqlhrzWT4PikujbunwxY2uzagExZm4cEQci9FnEY7HfQVSYj8L1CZxb04k9s1mnxKJMjR%2Fpkm%2FDfrgy6jyve5JeEor3nneRuBOsMBxQ%2BlzwqrJeXKLq9lqgkYYb5LUPMAcgAA%2Fg3XBIqXO4o8XV49V4OrsiKskr1tU8R3hFzF%2FgKibFNdrGmE9A7ayrMd76t4BsOvIPyL8Stw&X-Amz-Signature=4046d8d6cd7821366d7c453384031914625bf24f7585c8786d6721647f8f68ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO63EK2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWgyI25bENjDZJM%2Bz0ayIVmSRW5YprinA8BY9Cn3GRUAIhALSOWazFUG1AgxIScwtTk3l5ut4n1HFuVn%2Bff24i8tAaKv8DCHcQABoMNjM3NDIzMTgzODA1Igx0S%2FEUlCuwQ7Vg67Yq3APt6yTHy7zXGG7xcSlN4NaMa3zeVbVkDg84eqz8a8MA4Yb7Lty13pyLU0ZAYBJbbS0LF2iN1rT2%2BWmyjYEKgrYnCQuyg2rhH4T9XF0h9pBDb47qmlckUVNDc%2BBhZt6pPvYILrsVGuH7L993uruZ3XzXtU7pgOr6EFZ4Iq4A9wS5KsK2KqwrpV8ORM%2B1YYPEHb3nJjRaB2EF3mAnAqVJdpDBvRmveuOyBneRd0aZr3czD5VTzZk7v%2Br%2BX%2F5%2BDznvryVXgm39AVhiedBm90sepIsOyH2PKwDNmAE2p3jVb6yTvXsfa0xtGhyKpPc9jNsA3p2tkbV%2BCDp5KP2DSBZuQpvFB2R3RZujddty%2FPjr%2BeGOuuPJwMXMMKDJUp%2BExlYsLIWSvVz6wejCa%2BQ4YtObhazdcgZssgqj6w0ntMrTzfX1tSfEWZQuOblQfoXDnLYvbQ9OWyqukEzbQCwn7zHNVJ5QD0sIMt5VrdAuO5vZCQ6W0OZvswWzRlidXSgacIiVrLGrS3SJRYgAtaEugyyIZiFwJX1QL0Q5117JHAEzBvnwRNmHp02TXdsoBjQ02wBhnTpsPZb80yPuFPGTZMg4youGofcyqN6%2FNVZL4ANojJ%2FeCe2%2B2HUdfmyhcFCiQTC%2Btba%2BBjqkAbo1qEk7oDv3LnvHqlhrzWT4PikujbunwxY2uzagExZm4cEQci9FnEY7HfQVSYj8L1CZxb04k9s1mnxKJMjR%2Fpkm%2FDfrgy6jyve5JeEor3nneRuBOsMBxQ%2BlzwqrJeXKLq9lqgkYYb5LUPMAcgAA%2Fg3XBIqXO4o8XV49V4OrsiKskr1tU8R3hFzF%2FgKibFNdrGmE9A7ayrMd76t4BsOvIPyL8Stw&X-Amz-Signature=f57a500d16b50fd857739f4f0a6e8d67efd522c98fa30308901a60a5bb9ffccd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO63EK2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWgyI25bENjDZJM%2Bz0ayIVmSRW5YprinA8BY9Cn3GRUAIhALSOWazFUG1AgxIScwtTk3l5ut4n1HFuVn%2Bff24i8tAaKv8DCHcQABoMNjM3NDIzMTgzODA1Igx0S%2FEUlCuwQ7Vg67Yq3APt6yTHy7zXGG7xcSlN4NaMa3zeVbVkDg84eqz8a8MA4Yb7Lty13pyLU0ZAYBJbbS0LF2iN1rT2%2BWmyjYEKgrYnCQuyg2rhH4T9XF0h9pBDb47qmlckUVNDc%2BBhZt6pPvYILrsVGuH7L993uruZ3XzXtU7pgOr6EFZ4Iq4A9wS5KsK2KqwrpV8ORM%2B1YYPEHb3nJjRaB2EF3mAnAqVJdpDBvRmveuOyBneRd0aZr3czD5VTzZk7v%2Br%2BX%2F5%2BDznvryVXgm39AVhiedBm90sepIsOyH2PKwDNmAE2p3jVb6yTvXsfa0xtGhyKpPc9jNsA3p2tkbV%2BCDp5KP2DSBZuQpvFB2R3RZujddty%2FPjr%2BeGOuuPJwMXMMKDJUp%2BExlYsLIWSvVz6wejCa%2BQ4YtObhazdcgZssgqj6w0ntMrTzfX1tSfEWZQuOblQfoXDnLYvbQ9OWyqukEzbQCwn7zHNVJ5QD0sIMt5VrdAuO5vZCQ6W0OZvswWzRlidXSgacIiVrLGrS3SJRYgAtaEugyyIZiFwJX1QL0Q5117JHAEzBvnwRNmHp02TXdsoBjQ02wBhnTpsPZb80yPuFPGTZMg4youGofcyqN6%2FNVZL4ANojJ%2FeCe2%2B2HUdfmyhcFCiQTC%2Btba%2BBjqkAbo1qEk7oDv3LnvHqlhrzWT4PikujbunwxY2uzagExZm4cEQci9FnEY7HfQVSYj8L1CZxb04k9s1mnxKJMjR%2Fpkm%2FDfrgy6jyve5JeEor3nneRuBOsMBxQ%2BlzwqrJeXKLq9lqgkYYb5LUPMAcgAA%2Fg3XBIqXO4o8XV49V4OrsiKskr1tU8R3hFzF%2FgKibFNdrGmE9A7ayrMd76t4BsOvIPyL8Stw&X-Amz-Signature=bc0c71f0242a8b32f2e6de173810534a7d9dfdfc9d94af75adc58730b89531e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO63EK2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWgyI25bENjDZJM%2Bz0ayIVmSRW5YprinA8BY9Cn3GRUAIhALSOWazFUG1AgxIScwtTk3l5ut4n1HFuVn%2Bff24i8tAaKv8DCHcQABoMNjM3NDIzMTgzODA1Igx0S%2FEUlCuwQ7Vg67Yq3APt6yTHy7zXGG7xcSlN4NaMa3zeVbVkDg84eqz8a8MA4Yb7Lty13pyLU0ZAYBJbbS0LF2iN1rT2%2BWmyjYEKgrYnCQuyg2rhH4T9XF0h9pBDb47qmlckUVNDc%2BBhZt6pPvYILrsVGuH7L993uruZ3XzXtU7pgOr6EFZ4Iq4A9wS5KsK2KqwrpV8ORM%2B1YYPEHb3nJjRaB2EF3mAnAqVJdpDBvRmveuOyBneRd0aZr3czD5VTzZk7v%2Br%2BX%2F5%2BDznvryVXgm39AVhiedBm90sepIsOyH2PKwDNmAE2p3jVb6yTvXsfa0xtGhyKpPc9jNsA3p2tkbV%2BCDp5KP2DSBZuQpvFB2R3RZujddty%2FPjr%2BeGOuuPJwMXMMKDJUp%2BExlYsLIWSvVz6wejCa%2BQ4YtObhazdcgZssgqj6w0ntMrTzfX1tSfEWZQuOblQfoXDnLYvbQ9OWyqukEzbQCwn7zHNVJ5QD0sIMt5VrdAuO5vZCQ6W0OZvswWzRlidXSgacIiVrLGrS3SJRYgAtaEugyyIZiFwJX1QL0Q5117JHAEzBvnwRNmHp02TXdsoBjQ02wBhnTpsPZb80yPuFPGTZMg4youGofcyqN6%2FNVZL4ANojJ%2FeCe2%2B2HUdfmyhcFCiQTC%2Btba%2BBjqkAbo1qEk7oDv3LnvHqlhrzWT4PikujbunwxY2uzagExZm4cEQci9FnEY7HfQVSYj8L1CZxb04k9s1mnxKJMjR%2Fpkm%2FDfrgy6jyve5JeEor3nneRuBOsMBxQ%2BlzwqrJeXKLq9lqgkYYb5LUPMAcgAA%2Fg3XBIqXO4o8XV49V4OrsiKskr1tU8R3hFzF%2FgKibFNdrGmE9A7ayrMd76t4BsOvIPyL8Stw&X-Amz-Signature=5c947288c361ae996d0ec3487812c4ff44b5905397cbf28017ef15cdcf87a20b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO63EK2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWgyI25bENjDZJM%2Bz0ayIVmSRW5YprinA8BY9Cn3GRUAIhALSOWazFUG1AgxIScwtTk3l5ut4n1HFuVn%2Bff24i8tAaKv8DCHcQABoMNjM3NDIzMTgzODA1Igx0S%2FEUlCuwQ7Vg67Yq3APt6yTHy7zXGG7xcSlN4NaMa3zeVbVkDg84eqz8a8MA4Yb7Lty13pyLU0ZAYBJbbS0LF2iN1rT2%2BWmyjYEKgrYnCQuyg2rhH4T9XF0h9pBDb47qmlckUVNDc%2BBhZt6pPvYILrsVGuH7L993uruZ3XzXtU7pgOr6EFZ4Iq4A9wS5KsK2KqwrpV8ORM%2B1YYPEHb3nJjRaB2EF3mAnAqVJdpDBvRmveuOyBneRd0aZr3czD5VTzZk7v%2Br%2BX%2F5%2BDznvryVXgm39AVhiedBm90sepIsOyH2PKwDNmAE2p3jVb6yTvXsfa0xtGhyKpPc9jNsA3p2tkbV%2BCDp5KP2DSBZuQpvFB2R3RZujddty%2FPjr%2BeGOuuPJwMXMMKDJUp%2BExlYsLIWSvVz6wejCa%2BQ4YtObhazdcgZssgqj6w0ntMrTzfX1tSfEWZQuOblQfoXDnLYvbQ9OWyqukEzbQCwn7zHNVJ5QD0sIMt5VrdAuO5vZCQ6W0OZvswWzRlidXSgacIiVrLGrS3SJRYgAtaEugyyIZiFwJX1QL0Q5117JHAEzBvnwRNmHp02TXdsoBjQ02wBhnTpsPZb80yPuFPGTZMg4youGofcyqN6%2FNVZL4ANojJ%2FeCe2%2B2HUdfmyhcFCiQTC%2Btba%2BBjqkAbo1qEk7oDv3LnvHqlhrzWT4PikujbunwxY2uzagExZm4cEQci9FnEY7HfQVSYj8L1CZxb04k9s1mnxKJMjR%2Fpkm%2FDfrgy6jyve5JeEor3nneRuBOsMBxQ%2BlzwqrJeXKLq9lqgkYYb5LUPMAcgAA%2Fg3XBIqXO4o8XV49V4OrsiKskr1tU8R3hFzF%2FgKibFNdrGmE9A7ayrMd76t4BsOvIPyL8Stw&X-Amz-Signature=1284669150dfd4c6d2ab7fae87a2fbcdfaaf33657f6f7fb1aa2480f1ff929992&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
