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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NCKMTH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcU39avJxQTDg4LLRb2ehK62bxZTguegFrpur3tLgM6AiEA9MdG9sF2dsJ7C3WqQ4G4yg9YGUhcLo4MRWgVnys%2FvNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFSaGzAYF1Jihkky3yrcAzG%2F1V5nsMF7bIjTsV3u%2FJkkbCWRFUudn6wRYE4RcxFyR5hs1KJ%2FS7avLlS7yOhBUy%2FG%2Box33evFFwErvBmDarOWVfCtDcIJw41LMOPY0nJzFolZxj1mrhW8li%2FazJSMl9%2Ba%2F8NF5b4mMCbU59AJhmprtQUCfoTynODY4EzcYzlxmk7dXmM73GIz3YUDlBZ8CWBiMfsYXZpCSA8Kpm409IQ28%2FmC91PxYbrZr0EKMlrX5ZHsbB9Etq6xkXe784FJJn9zMGhRtsV2JIpZ2bydycySBhrKB2ewXwLA6%2BsUIiHhswpgvnMXb8s6kOqoybjOtVt92PLPc33XaKWbv0rZ5lXh4J9%2B9YUeci6mXFvtGbjtkQ%2Fo65bUutWQm81LCXqYbhqiz%2B6oxoQFCBEb9i%2BLfoJthSRZO9FFn5HOO095K0EPLbFHW0m%2BvS52rCi6GEIRroeBsWyDcUNzYu4BdiQj9fzcoHTPfFbTy4S6rUzqcVvdN80rqj9qF9kGz8TF%2FzYQQeZ26gP16HV2dbnN8CL3XHqyk6i6GL0EGDxjcRW1hZ9PJrKshO9FMdJToheV3nvMVEXGnvoCm53TZi09Sb4z4lyBb9l3Xonn6Y%2F33czrO8Jdl2XN6minlVx9Pu%2FmMOmIjsIGOqUB3X0uQjTs6HEYorrpM6d7Qw2hGXgaLklfcvpS5IwOUlzhpBSHZlF%2F7bBynMdQs%2BfoT193EU8v5HprXBlq6zEsM0ya6SMcm0IjjPokE7iC%2B4nf2L25%2BgkZiH9aRsGFhjsQoYpMZEVdnpIL9KiAqN9lW9AdtWYY1jo2gh7jyb1UitkZce4ylsg9f4kxdl%2BllkTH%2FHGgHL3VRfpxVyjhixSt%2BC0YOrHN&X-Amz-Signature=f24f8ad7f17440c30247eea3adb1d447ea0ee83517cef2ab746aaa4877e81aec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NCKMTH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcU39avJxQTDg4LLRb2ehK62bxZTguegFrpur3tLgM6AiEA9MdG9sF2dsJ7C3WqQ4G4yg9YGUhcLo4MRWgVnys%2FvNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFSaGzAYF1Jihkky3yrcAzG%2F1V5nsMF7bIjTsV3u%2FJkkbCWRFUudn6wRYE4RcxFyR5hs1KJ%2FS7avLlS7yOhBUy%2FG%2Box33evFFwErvBmDarOWVfCtDcIJw41LMOPY0nJzFolZxj1mrhW8li%2FazJSMl9%2Ba%2F8NF5b4mMCbU59AJhmprtQUCfoTynODY4EzcYzlxmk7dXmM73GIz3YUDlBZ8CWBiMfsYXZpCSA8Kpm409IQ28%2FmC91PxYbrZr0EKMlrX5ZHsbB9Etq6xkXe784FJJn9zMGhRtsV2JIpZ2bydycySBhrKB2ewXwLA6%2BsUIiHhswpgvnMXb8s6kOqoybjOtVt92PLPc33XaKWbv0rZ5lXh4J9%2B9YUeci6mXFvtGbjtkQ%2Fo65bUutWQm81LCXqYbhqiz%2B6oxoQFCBEb9i%2BLfoJthSRZO9FFn5HOO095K0EPLbFHW0m%2BvS52rCi6GEIRroeBsWyDcUNzYu4BdiQj9fzcoHTPfFbTy4S6rUzqcVvdN80rqj9qF9kGz8TF%2FzYQQeZ26gP16HV2dbnN8CL3XHqyk6i6GL0EGDxjcRW1hZ9PJrKshO9FMdJToheV3nvMVEXGnvoCm53TZi09Sb4z4lyBb9l3Xonn6Y%2F33czrO8Jdl2XN6minlVx9Pu%2FmMOmIjsIGOqUB3X0uQjTs6HEYorrpM6d7Qw2hGXgaLklfcvpS5IwOUlzhpBSHZlF%2F7bBynMdQs%2BfoT193EU8v5HprXBlq6zEsM0ya6SMcm0IjjPokE7iC%2B4nf2L25%2BgkZiH9aRsGFhjsQoYpMZEVdnpIL9KiAqN9lW9AdtWYY1jo2gh7jyb1UitkZce4ylsg9f4kxdl%2BllkTH%2FHGgHL3VRfpxVyjhixSt%2BC0YOrHN&X-Amz-Signature=b6dbc6b3abb58791cf75ec042662b218b46bbffd7bab99494b8d300dd727cc38&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NCKMTH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcU39avJxQTDg4LLRb2ehK62bxZTguegFrpur3tLgM6AiEA9MdG9sF2dsJ7C3WqQ4G4yg9YGUhcLo4MRWgVnys%2FvNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFSaGzAYF1Jihkky3yrcAzG%2F1V5nsMF7bIjTsV3u%2FJkkbCWRFUudn6wRYE4RcxFyR5hs1KJ%2FS7avLlS7yOhBUy%2FG%2Box33evFFwErvBmDarOWVfCtDcIJw41LMOPY0nJzFolZxj1mrhW8li%2FazJSMl9%2Ba%2F8NF5b4mMCbU59AJhmprtQUCfoTynODY4EzcYzlxmk7dXmM73GIz3YUDlBZ8CWBiMfsYXZpCSA8Kpm409IQ28%2FmC91PxYbrZr0EKMlrX5ZHsbB9Etq6xkXe784FJJn9zMGhRtsV2JIpZ2bydycySBhrKB2ewXwLA6%2BsUIiHhswpgvnMXb8s6kOqoybjOtVt92PLPc33XaKWbv0rZ5lXh4J9%2B9YUeci6mXFvtGbjtkQ%2Fo65bUutWQm81LCXqYbhqiz%2B6oxoQFCBEb9i%2BLfoJthSRZO9FFn5HOO095K0EPLbFHW0m%2BvS52rCi6GEIRroeBsWyDcUNzYu4BdiQj9fzcoHTPfFbTy4S6rUzqcVvdN80rqj9qF9kGz8TF%2FzYQQeZ26gP16HV2dbnN8CL3XHqyk6i6GL0EGDxjcRW1hZ9PJrKshO9FMdJToheV3nvMVEXGnvoCm53TZi09Sb4z4lyBb9l3Xonn6Y%2F33czrO8Jdl2XN6minlVx9Pu%2FmMOmIjsIGOqUB3X0uQjTs6HEYorrpM6d7Qw2hGXgaLklfcvpS5IwOUlzhpBSHZlF%2F7bBynMdQs%2BfoT193EU8v5HprXBlq6zEsM0ya6SMcm0IjjPokE7iC%2B4nf2L25%2BgkZiH9aRsGFhjsQoYpMZEVdnpIL9KiAqN9lW9AdtWYY1jo2gh7jyb1UitkZce4ylsg9f4kxdl%2BllkTH%2FHGgHL3VRfpxVyjhixSt%2BC0YOrHN&X-Amz-Signature=bdc5c1d589339732d2fb138f983d328a9083ecc524450b11f3163d4566ebfcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NCKMTH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcU39avJxQTDg4LLRb2ehK62bxZTguegFrpur3tLgM6AiEA9MdG9sF2dsJ7C3WqQ4G4yg9YGUhcLo4MRWgVnys%2FvNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFSaGzAYF1Jihkky3yrcAzG%2F1V5nsMF7bIjTsV3u%2FJkkbCWRFUudn6wRYE4RcxFyR5hs1KJ%2FS7avLlS7yOhBUy%2FG%2Box33evFFwErvBmDarOWVfCtDcIJw41LMOPY0nJzFolZxj1mrhW8li%2FazJSMl9%2Ba%2F8NF5b4mMCbU59AJhmprtQUCfoTynODY4EzcYzlxmk7dXmM73GIz3YUDlBZ8CWBiMfsYXZpCSA8Kpm409IQ28%2FmC91PxYbrZr0EKMlrX5ZHsbB9Etq6xkXe784FJJn9zMGhRtsV2JIpZ2bydycySBhrKB2ewXwLA6%2BsUIiHhswpgvnMXb8s6kOqoybjOtVt92PLPc33XaKWbv0rZ5lXh4J9%2B9YUeci6mXFvtGbjtkQ%2Fo65bUutWQm81LCXqYbhqiz%2B6oxoQFCBEb9i%2BLfoJthSRZO9FFn5HOO095K0EPLbFHW0m%2BvS52rCi6GEIRroeBsWyDcUNzYu4BdiQj9fzcoHTPfFbTy4S6rUzqcVvdN80rqj9qF9kGz8TF%2FzYQQeZ26gP16HV2dbnN8CL3XHqyk6i6GL0EGDxjcRW1hZ9PJrKshO9FMdJToheV3nvMVEXGnvoCm53TZi09Sb4z4lyBb9l3Xonn6Y%2F33czrO8Jdl2XN6minlVx9Pu%2FmMOmIjsIGOqUB3X0uQjTs6HEYorrpM6d7Qw2hGXgaLklfcvpS5IwOUlzhpBSHZlF%2F7bBynMdQs%2BfoT193EU8v5HprXBlq6zEsM0ya6SMcm0IjjPokE7iC%2B4nf2L25%2BgkZiH9aRsGFhjsQoYpMZEVdnpIL9KiAqN9lW9AdtWYY1jo2gh7jyb1UitkZce4ylsg9f4kxdl%2BllkTH%2FHGgHL3VRfpxVyjhixSt%2BC0YOrHN&X-Amz-Signature=26f2a07b130fbe9a6e586fe3ecd277c2bab8d4ed7db11a99b3462ed7b8282bba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NCKMTH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcU39avJxQTDg4LLRb2ehK62bxZTguegFrpur3tLgM6AiEA9MdG9sF2dsJ7C3WqQ4G4yg9YGUhcLo4MRWgVnys%2FvNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFSaGzAYF1Jihkky3yrcAzG%2F1V5nsMF7bIjTsV3u%2FJkkbCWRFUudn6wRYE4RcxFyR5hs1KJ%2FS7avLlS7yOhBUy%2FG%2Box33evFFwErvBmDarOWVfCtDcIJw41LMOPY0nJzFolZxj1mrhW8li%2FazJSMl9%2Ba%2F8NF5b4mMCbU59AJhmprtQUCfoTynODY4EzcYzlxmk7dXmM73GIz3YUDlBZ8CWBiMfsYXZpCSA8Kpm409IQ28%2FmC91PxYbrZr0EKMlrX5ZHsbB9Etq6xkXe784FJJn9zMGhRtsV2JIpZ2bydycySBhrKB2ewXwLA6%2BsUIiHhswpgvnMXb8s6kOqoybjOtVt92PLPc33XaKWbv0rZ5lXh4J9%2B9YUeci6mXFvtGbjtkQ%2Fo65bUutWQm81LCXqYbhqiz%2B6oxoQFCBEb9i%2BLfoJthSRZO9FFn5HOO095K0EPLbFHW0m%2BvS52rCi6GEIRroeBsWyDcUNzYu4BdiQj9fzcoHTPfFbTy4S6rUzqcVvdN80rqj9qF9kGz8TF%2FzYQQeZ26gP16HV2dbnN8CL3XHqyk6i6GL0EGDxjcRW1hZ9PJrKshO9FMdJToheV3nvMVEXGnvoCm53TZi09Sb4z4lyBb9l3Xonn6Y%2F33czrO8Jdl2XN6minlVx9Pu%2FmMOmIjsIGOqUB3X0uQjTs6HEYorrpM6d7Qw2hGXgaLklfcvpS5IwOUlzhpBSHZlF%2F7bBynMdQs%2BfoT193EU8v5HprXBlq6zEsM0ya6SMcm0IjjPokE7iC%2B4nf2L25%2BgkZiH9aRsGFhjsQoYpMZEVdnpIL9KiAqN9lW9AdtWYY1jo2gh7jyb1UitkZce4ylsg9f4kxdl%2BllkTH%2FHGgHL3VRfpxVyjhixSt%2BC0YOrHN&X-Amz-Signature=b00e5d65b86b2c313d6fe81bb77a5729a4905251b1be29ff412b08b2156fde33&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
