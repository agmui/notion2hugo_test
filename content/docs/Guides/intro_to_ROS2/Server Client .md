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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKM2NUSX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC8KqJ2XU%2F7pHdYqOq9FUKBExtGELTRoVlrxBeJq8VLAwIgXFdOSU7p%2FYObwqkLkZxgt88Kiv9ftUYJHbwX5unfnAUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLBLrI74fNoltC5uqircA00Vznx72O5mGrEuz4HHZratEaI6kc%2F4QK%2F9aMIY7qHrnpgpeTxniTBAWvHRGBQ7YryzdyUgrdJyqdf6MLyillhJkdh2pu78I%2BudhVbdhuvVkp5o%2BUguqkFyt6Fu5e76ujzoqMlsYWhsvbd84uBZw1NNHPbCdOchyATRFfd5h81qSwEAJnmbaGMsbDpM8Fck4MORGYltua2zfcP%2BOrYI72PFQkU35NH%2FfsQCmRzI%2BVRo8qQNFKsHl7Ac0AEaFkxlIJqTmagGHxnt48OjCXwe0Qm7M48zaAsZIFZDqBI6VcE1KxePdx8wT6Itl7M7nOrG9ivrl6bAlC9yS%2FAYw4qv5MdvevDtE6IOma8X%2BqeRv1R3pn830UnZwpwlTUMiKc8ZvK76yiyirT4BOHy%2BHtX2z498leu8C8KiqngnecTb48gcxdPVJKgctEYXniI7Z809rBp77FVM6Oz4F2ZnyvvOAvPxhel%2FRt1INgYR0oufrMaaIKKhtDJcLx6oV0cQby5YkqQ8%2B5BzcLKd8CSQjxZnY4dLFdmq6tFWhbZPr%2B3Xx%2FtCKsSOzhqYoostfhjTGKlWL8O4iW8%2B5ZMEQbhf6N%2FHPecBcv4Bx7p9oQ3ZoEdh%2BEELmydQSzpBK9FtbNX6MK3Gv70GOqUBSPBhwhESTOcG%2FoDQ1%2FSu0fuzsNi%2BQe1qtZllu%2F3pABoM8AeQy8rnHyQ0rYsyvPpkdgDUR8VTdeOU4BFDmYbgtd4i5EL1iWl9WVz2Cp%2FeMcQJrSKQkUGG18%2BuFOx4VnM8XkUzxrBd%2F33kFYvRzgFIO6onEJz4Ftvx6bgN%2BXoA81XrBUy5P2oo4halTft3MO5wDmYK7LXcl5vj0JbrmHU4lE677vXd&X-Amz-Signature=72f421184cf182cdef279bdddb76520f909d07c9aca92d8b6e8c7aeff04ceb24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKM2NUSX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC8KqJ2XU%2F7pHdYqOq9FUKBExtGELTRoVlrxBeJq8VLAwIgXFdOSU7p%2FYObwqkLkZxgt88Kiv9ftUYJHbwX5unfnAUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLBLrI74fNoltC5uqircA00Vznx72O5mGrEuz4HHZratEaI6kc%2F4QK%2F9aMIY7qHrnpgpeTxniTBAWvHRGBQ7YryzdyUgrdJyqdf6MLyillhJkdh2pu78I%2BudhVbdhuvVkp5o%2BUguqkFyt6Fu5e76ujzoqMlsYWhsvbd84uBZw1NNHPbCdOchyATRFfd5h81qSwEAJnmbaGMsbDpM8Fck4MORGYltua2zfcP%2BOrYI72PFQkU35NH%2FfsQCmRzI%2BVRo8qQNFKsHl7Ac0AEaFkxlIJqTmagGHxnt48OjCXwe0Qm7M48zaAsZIFZDqBI6VcE1KxePdx8wT6Itl7M7nOrG9ivrl6bAlC9yS%2FAYw4qv5MdvevDtE6IOma8X%2BqeRv1R3pn830UnZwpwlTUMiKc8ZvK76yiyirT4BOHy%2BHtX2z498leu8C8KiqngnecTb48gcxdPVJKgctEYXniI7Z809rBp77FVM6Oz4F2ZnyvvOAvPxhel%2FRt1INgYR0oufrMaaIKKhtDJcLx6oV0cQby5YkqQ8%2B5BzcLKd8CSQjxZnY4dLFdmq6tFWhbZPr%2B3Xx%2FtCKsSOzhqYoostfhjTGKlWL8O4iW8%2B5ZMEQbhf6N%2FHPecBcv4Bx7p9oQ3ZoEdh%2BEELmydQSzpBK9FtbNX6MK3Gv70GOqUBSPBhwhESTOcG%2FoDQ1%2FSu0fuzsNi%2BQe1qtZllu%2F3pABoM8AeQy8rnHyQ0rYsyvPpkdgDUR8VTdeOU4BFDmYbgtd4i5EL1iWl9WVz2Cp%2FeMcQJrSKQkUGG18%2BuFOx4VnM8XkUzxrBd%2F33kFYvRzgFIO6onEJz4Ftvx6bgN%2BXoA81XrBUy5P2oo4halTft3MO5wDmYK7LXcl5vj0JbrmHU4lE677vXd&X-Amz-Signature=f94ba4ccf9426dd473a4d933616ce2e2f33db1e6a0eb86ab9178850eb5f4355e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKM2NUSX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC8KqJ2XU%2F7pHdYqOq9FUKBExtGELTRoVlrxBeJq8VLAwIgXFdOSU7p%2FYObwqkLkZxgt88Kiv9ftUYJHbwX5unfnAUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLBLrI74fNoltC5uqircA00Vznx72O5mGrEuz4HHZratEaI6kc%2F4QK%2F9aMIY7qHrnpgpeTxniTBAWvHRGBQ7YryzdyUgrdJyqdf6MLyillhJkdh2pu78I%2BudhVbdhuvVkp5o%2BUguqkFyt6Fu5e76ujzoqMlsYWhsvbd84uBZw1NNHPbCdOchyATRFfd5h81qSwEAJnmbaGMsbDpM8Fck4MORGYltua2zfcP%2BOrYI72PFQkU35NH%2FfsQCmRzI%2BVRo8qQNFKsHl7Ac0AEaFkxlIJqTmagGHxnt48OjCXwe0Qm7M48zaAsZIFZDqBI6VcE1KxePdx8wT6Itl7M7nOrG9ivrl6bAlC9yS%2FAYw4qv5MdvevDtE6IOma8X%2BqeRv1R3pn830UnZwpwlTUMiKc8ZvK76yiyirT4BOHy%2BHtX2z498leu8C8KiqngnecTb48gcxdPVJKgctEYXniI7Z809rBp77FVM6Oz4F2ZnyvvOAvPxhel%2FRt1INgYR0oufrMaaIKKhtDJcLx6oV0cQby5YkqQ8%2B5BzcLKd8CSQjxZnY4dLFdmq6tFWhbZPr%2B3Xx%2FtCKsSOzhqYoostfhjTGKlWL8O4iW8%2B5ZMEQbhf6N%2FHPecBcv4Bx7p9oQ3ZoEdh%2BEELmydQSzpBK9FtbNX6MK3Gv70GOqUBSPBhwhESTOcG%2FoDQ1%2FSu0fuzsNi%2BQe1qtZllu%2F3pABoM8AeQy8rnHyQ0rYsyvPpkdgDUR8VTdeOU4BFDmYbgtd4i5EL1iWl9WVz2Cp%2FeMcQJrSKQkUGG18%2BuFOx4VnM8XkUzxrBd%2F33kFYvRzgFIO6onEJz4Ftvx6bgN%2BXoA81XrBUy5P2oo4halTft3MO5wDmYK7LXcl5vj0JbrmHU4lE677vXd&X-Amz-Signature=3d7afd1723cfad3c354e2f4c0533c5e078cef322e18aea5b61a9c9962ca5f2a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKM2NUSX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC8KqJ2XU%2F7pHdYqOq9FUKBExtGELTRoVlrxBeJq8VLAwIgXFdOSU7p%2FYObwqkLkZxgt88Kiv9ftUYJHbwX5unfnAUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLBLrI74fNoltC5uqircA00Vznx72O5mGrEuz4HHZratEaI6kc%2F4QK%2F9aMIY7qHrnpgpeTxniTBAWvHRGBQ7YryzdyUgrdJyqdf6MLyillhJkdh2pu78I%2BudhVbdhuvVkp5o%2BUguqkFyt6Fu5e76ujzoqMlsYWhsvbd84uBZw1NNHPbCdOchyATRFfd5h81qSwEAJnmbaGMsbDpM8Fck4MORGYltua2zfcP%2BOrYI72PFQkU35NH%2FfsQCmRzI%2BVRo8qQNFKsHl7Ac0AEaFkxlIJqTmagGHxnt48OjCXwe0Qm7M48zaAsZIFZDqBI6VcE1KxePdx8wT6Itl7M7nOrG9ivrl6bAlC9yS%2FAYw4qv5MdvevDtE6IOma8X%2BqeRv1R3pn830UnZwpwlTUMiKc8ZvK76yiyirT4BOHy%2BHtX2z498leu8C8KiqngnecTb48gcxdPVJKgctEYXniI7Z809rBp77FVM6Oz4F2ZnyvvOAvPxhel%2FRt1INgYR0oufrMaaIKKhtDJcLx6oV0cQby5YkqQ8%2B5BzcLKd8CSQjxZnY4dLFdmq6tFWhbZPr%2B3Xx%2FtCKsSOzhqYoostfhjTGKlWL8O4iW8%2B5ZMEQbhf6N%2FHPecBcv4Bx7p9oQ3ZoEdh%2BEELmydQSzpBK9FtbNX6MK3Gv70GOqUBSPBhwhESTOcG%2FoDQ1%2FSu0fuzsNi%2BQe1qtZllu%2F3pABoM8AeQy8rnHyQ0rYsyvPpkdgDUR8VTdeOU4BFDmYbgtd4i5EL1iWl9WVz2Cp%2FeMcQJrSKQkUGG18%2BuFOx4VnM8XkUzxrBd%2F33kFYvRzgFIO6onEJz4Ftvx6bgN%2BXoA81XrBUy5P2oo4halTft3MO5wDmYK7LXcl5vj0JbrmHU4lE677vXd&X-Amz-Signature=192ed52b82d0a6f7bbcf13d66529b43927a7857d5f56e7d68f4554062366d398&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKM2NUSX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC8KqJ2XU%2F7pHdYqOq9FUKBExtGELTRoVlrxBeJq8VLAwIgXFdOSU7p%2FYObwqkLkZxgt88Kiv9ftUYJHbwX5unfnAUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLBLrI74fNoltC5uqircA00Vznx72O5mGrEuz4HHZratEaI6kc%2F4QK%2F9aMIY7qHrnpgpeTxniTBAWvHRGBQ7YryzdyUgrdJyqdf6MLyillhJkdh2pu78I%2BudhVbdhuvVkp5o%2BUguqkFyt6Fu5e76ujzoqMlsYWhsvbd84uBZw1NNHPbCdOchyATRFfd5h81qSwEAJnmbaGMsbDpM8Fck4MORGYltua2zfcP%2BOrYI72PFQkU35NH%2FfsQCmRzI%2BVRo8qQNFKsHl7Ac0AEaFkxlIJqTmagGHxnt48OjCXwe0Qm7M48zaAsZIFZDqBI6VcE1KxePdx8wT6Itl7M7nOrG9ivrl6bAlC9yS%2FAYw4qv5MdvevDtE6IOma8X%2BqeRv1R3pn830UnZwpwlTUMiKc8ZvK76yiyirT4BOHy%2BHtX2z498leu8C8KiqngnecTb48gcxdPVJKgctEYXniI7Z809rBp77FVM6Oz4F2ZnyvvOAvPxhel%2FRt1INgYR0oufrMaaIKKhtDJcLx6oV0cQby5YkqQ8%2B5BzcLKd8CSQjxZnY4dLFdmq6tFWhbZPr%2B3Xx%2FtCKsSOzhqYoostfhjTGKlWL8O4iW8%2B5ZMEQbhf6N%2FHPecBcv4Bx7p9oQ3ZoEdh%2BEELmydQSzpBK9FtbNX6MK3Gv70GOqUBSPBhwhESTOcG%2FoDQ1%2FSu0fuzsNi%2BQe1qtZllu%2F3pABoM8AeQy8rnHyQ0rYsyvPpkdgDUR8VTdeOU4BFDmYbgtd4i5EL1iWl9WVz2Cp%2FeMcQJrSKQkUGG18%2BuFOx4VnM8XkUzxrBd%2F33kFYvRzgFIO6onEJz4Ftvx6bgN%2BXoA81XrBUy5P2oo4halTft3MO5wDmYK7LXcl5vj0JbrmHU4lE677vXd&X-Amz-Signature=02b246577d70c46ce993189716065ee0bc1d4cd0108b94deb8524ada6cb196d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
