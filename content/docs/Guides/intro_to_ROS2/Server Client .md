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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREALE44%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH4ZCkkSbMsWpQbVaDjwzjs3tHs4dH9Owc29aSye2qNDAiEA9sALANXWqf4LdQ2U6KPhOk1e0Epyfsk0qxoLg4Ky3fUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfjb2Q2viRS1eKClCrcA1IJ%2BuFPU3whW9IQ5i1Uw0Sc0HXA%2BLrnRvlUV9aXqko2hwCs%2BO1%2FG25x4pBPRFQXOYN3ZI%2F3hqwrPf95aUGEMfqz0WJw3TTr3Mm%2BQQlO7Sa39qPy00wcETGER8vbWyxHSBwqDCRn2cQDlZDUCUMnXyjAxNL1%2BnyzwHxJead9zjb8g4pzkNJ9dodwFy%2BoZDVgNaPTr1A%2BFmi%2FuoSa0iPouHSU1nuz%2B1Bm5oI9bRr5mLfMxT6OKklGsFL9oMPXOFfMaiRdIJgrRGwDOhssJbp8zm%2BffEkqJQNHP4tLnwMvyJC2zhKkKCHsZr7VrTkopLieMthsVPvazqyKrK5ZfY1ut57EAef%2B5Gj6cD01WiwW%2BjVhAk3oWlEAWKXEOMTLh%2BxKcqujbTwXoTdKPRYYQ2LuHid7KZ81bFLLaPOkNQzYV2ana2kl7VjeR3KbR5IxxQg7X1KXCO48Sp71%2BfPezeYfrHJZKZ6PYjZYBcquBfWXpJUg9hs9MRHzltlwTKJzAK7tvuuC4b3Ve5CkV22DIcpCqcxt8dDrPEij3EtK3FNuzW4GhIgc5%2FxXiANi0mRdMiVrEDMoLnrssZar2WlB9HNbnhqnAuJuE%2F3KcTKOlgiBXZZDEOG0BuJGIO2b%2BwBpMJGGp78GOqUBtJnb25FBaHSUeRP4rKWBdptw6ILfqehcc8NIX5ajI3QotRf2vrxrBGytuYWDtdZG%2BBmffPM%2BZVXcNLC7c7PQlqgCtDw9pDl3J%2FlcnJbO4r6dtVBNc3Fh%2FcasNVs0uqyAAGgRdrFsrDIGmwGBy6ddyB29Q%2BbjbpXrtYPkm1UCc0wCjpuSK%2Frjpew6ib%2BTf%2BeJbBQMRX%2FTgTdlvfWfMAWuPpJXFOOA&X-Amz-Signature=d63c20b797c7699eb35da1180be382d8c71b75c8dabb51426412105f74951a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREALE44%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH4ZCkkSbMsWpQbVaDjwzjs3tHs4dH9Owc29aSye2qNDAiEA9sALANXWqf4LdQ2U6KPhOk1e0Epyfsk0qxoLg4Ky3fUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfjb2Q2viRS1eKClCrcA1IJ%2BuFPU3whW9IQ5i1Uw0Sc0HXA%2BLrnRvlUV9aXqko2hwCs%2BO1%2FG25x4pBPRFQXOYN3ZI%2F3hqwrPf95aUGEMfqz0WJw3TTr3Mm%2BQQlO7Sa39qPy00wcETGER8vbWyxHSBwqDCRn2cQDlZDUCUMnXyjAxNL1%2BnyzwHxJead9zjb8g4pzkNJ9dodwFy%2BoZDVgNaPTr1A%2BFmi%2FuoSa0iPouHSU1nuz%2B1Bm5oI9bRr5mLfMxT6OKklGsFL9oMPXOFfMaiRdIJgrRGwDOhssJbp8zm%2BffEkqJQNHP4tLnwMvyJC2zhKkKCHsZr7VrTkopLieMthsVPvazqyKrK5ZfY1ut57EAef%2B5Gj6cD01WiwW%2BjVhAk3oWlEAWKXEOMTLh%2BxKcqujbTwXoTdKPRYYQ2LuHid7KZ81bFLLaPOkNQzYV2ana2kl7VjeR3KbR5IxxQg7X1KXCO48Sp71%2BfPezeYfrHJZKZ6PYjZYBcquBfWXpJUg9hs9MRHzltlwTKJzAK7tvuuC4b3Ve5CkV22DIcpCqcxt8dDrPEij3EtK3FNuzW4GhIgc5%2FxXiANi0mRdMiVrEDMoLnrssZar2WlB9HNbnhqnAuJuE%2F3KcTKOlgiBXZZDEOG0BuJGIO2b%2BwBpMJGGp78GOqUBtJnb25FBaHSUeRP4rKWBdptw6ILfqehcc8NIX5ajI3QotRf2vrxrBGytuYWDtdZG%2BBmffPM%2BZVXcNLC7c7PQlqgCtDw9pDl3J%2FlcnJbO4r6dtVBNc3Fh%2FcasNVs0uqyAAGgRdrFsrDIGmwGBy6ddyB29Q%2BbjbpXrtYPkm1UCc0wCjpuSK%2Frjpew6ib%2BTf%2BeJbBQMRX%2FTgTdlvfWfMAWuPpJXFOOA&X-Amz-Signature=99bb680abc7920559fb53f397c610fa4db636226a5e4f6188fcd08d50f82853c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREALE44%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH4ZCkkSbMsWpQbVaDjwzjs3tHs4dH9Owc29aSye2qNDAiEA9sALANXWqf4LdQ2U6KPhOk1e0Epyfsk0qxoLg4Ky3fUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfjb2Q2viRS1eKClCrcA1IJ%2BuFPU3whW9IQ5i1Uw0Sc0HXA%2BLrnRvlUV9aXqko2hwCs%2BO1%2FG25x4pBPRFQXOYN3ZI%2F3hqwrPf95aUGEMfqz0WJw3TTr3Mm%2BQQlO7Sa39qPy00wcETGER8vbWyxHSBwqDCRn2cQDlZDUCUMnXyjAxNL1%2BnyzwHxJead9zjb8g4pzkNJ9dodwFy%2BoZDVgNaPTr1A%2BFmi%2FuoSa0iPouHSU1nuz%2B1Bm5oI9bRr5mLfMxT6OKklGsFL9oMPXOFfMaiRdIJgrRGwDOhssJbp8zm%2BffEkqJQNHP4tLnwMvyJC2zhKkKCHsZr7VrTkopLieMthsVPvazqyKrK5ZfY1ut57EAef%2B5Gj6cD01WiwW%2BjVhAk3oWlEAWKXEOMTLh%2BxKcqujbTwXoTdKPRYYQ2LuHid7KZ81bFLLaPOkNQzYV2ana2kl7VjeR3KbR5IxxQg7X1KXCO48Sp71%2BfPezeYfrHJZKZ6PYjZYBcquBfWXpJUg9hs9MRHzltlwTKJzAK7tvuuC4b3Ve5CkV22DIcpCqcxt8dDrPEij3EtK3FNuzW4GhIgc5%2FxXiANi0mRdMiVrEDMoLnrssZar2WlB9HNbnhqnAuJuE%2F3KcTKOlgiBXZZDEOG0BuJGIO2b%2BwBpMJGGp78GOqUBtJnb25FBaHSUeRP4rKWBdptw6ILfqehcc8NIX5ajI3QotRf2vrxrBGytuYWDtdZG%2BBmffPM%2BZVXcNLC7c7PQlqgCtDw9pDl3J%2FlcnJbO4r6dtVBNc3Fh%2FcasNVs0uqyAAGgRdrFsrDIGmwGBy6ddyB29Q%2BbjbpXrtYPkm1UCc0wCjpuSK%2Frjpew6ib%2BTf%2BeJbBQMRX%2FTgTdlvfWfMAWuPpJXFOOA&X-Amz-Signature=631ec8bbb0949d3f9d8774bd659d1d8d4dd1bd1c0ece1877a3c68232ce4bfeaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREALE44%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH4ZCkkSbMsWpQbVaDjwzjs3tHs4dH9Owc29aSye2qNDAiEA9sALANXWqf4LdQ2U6KPhOk1e0Epyfsk0qxoLg4Ky3fUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfjb2Q2viRS1eKClCrcA1IJ%2BuFPU3whW9IQ5i1Uw0Sc0HXA%2BLrnRvlUV9aXqko2hwCs%2BO1%2FG25x4pBPRFQXOYN3ZI%2F3hqwrPf95aUGEMfqz0WJw3TTr3Mm%2BQQlO7Sa39qPy00wcETGER8vbWyxHSBwqDCRn2cQDlZDUCUMnXyjAxNL1%2BnyzwHxJead9zjb8g4pzkNJ9dodwFy%2BoZDVgNaPTr1A%2BFmi%2FuoSa0iPouHSU1nuz%2B1Bm5oI9bRr5mLfMxT6OKklGsFL9oMPXOFfMaiRdIJgrRGwDOhssJbp8zm%2BffEkqJQNHP4tLnwMvyJC2zhKkKCHsZr7VrTkopLieMthsVPvazqyKrK5ZfY1ut57EAef%2B5Gj6cD01WiwW%2BjVhAk3oWlEAWKXEOMTLh%2BxKcqujbTwXoTdKPRYYQ2LuHid7KZ81bFLLaPOkNQzYV2ana2kl7VjeR3KbR5IxxQg7X1KXCO48Sp71%2BfPezeYfrHJZKZ6PYjZYBcquBfWXpJUg9hs9MRHzltlwTKJzAK7tvuuC4b3Ve5CkV22DIcpCqcxt8dDrPEij3EtK3FNuzW4GhIgc5%2FxXiANi0mRdMiVrEDMoLnrssZar2WlB9HNbnhqnAuJuE%2F3KcTKOlgiBXZZDEOG0BuJGIO2b%2BwBpMJGGp78GOqUBtJnb25FBaHSUeRP4rKWBdptw6ILfqehcc8NIX5ajI3QotRf2vrxrBGytuYWDtdZG%2BBmffPM%2BZVXcNLC7c7PQlqgCtDw9pDl3J%2FlcnJbO4r6dtVBNc3Fh%2FcasNVs0uqyAAGgRdrFsrDIGmwGBy6ddyB29Q%2BbjbpXrtYPkm1UCc0wCjpuSK%2Frjpew6ib%2BTf%2BeJbBQMRX%2FTgTdlvfWfMAWuPpJXFOOA&X-Amz-Signature=a04a9a8edd947a768939d1e1c3161a5a8d7cd9465ad4a7aa399b9717668420f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZREALE44%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH4ZCkkSbMsWpQbVaDjwzjs3tHs4dH9Owc29aSye2qNDAiEA9sALANXWqf4LdQ2U6KPhOk1e0Epyfsk0qxoLg4Ky3fUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfjb2Q2viRS1eKClCrcA1IJ%2BuFPU3whW9IQ5i1Uw0Sc0HXA%2BLrnRvlUV9aXqko2hwCs%2BO1%2FG25x4pBPRFQXOYN3ZI%2F3hqwrPf95aUGEMfqz0WJw3TTr3Mm%2BQQlO7Sa39qPy00wcETGER8vbWyxHSBwqDCRn2cQDlZDUCUMnXyjAxNL1%2BnyzwHxJead9zjb8g4pzkNJ9dodwFy%2BoZDVgNaPTr1A%2BFmi%2FuoSa0iPouHSU1nuz%2B1Bm5oI9bRr5mLfMxT6OKklGsFL9oMPXOFfMaiRdIJgrRGwDOhssJbp8zm%2BffEkqJQNHP4tLnwMvyJC2zhKkKCHsZr7VrTkopLieMthsVPvazqyKrK5ZfY1ut57EAef%2B5Gj6cD01WiwW%2BjVhAk3oWlEAWKXEOMTLh%2BxKcqujbTwXoTdKPRYYQ2LuHid7KZ81bFLLaPOkNQzYV2ana2kl7VjeR3KbR5IxxQg7X1KXCO48Sp71%2BfPezeYfrHJZKZ6PYjZYBcquBfWXpJUg9hs9MRHzltlwTKJzAK7tvuuC4b3Ve5CkV22DIcpCqcxt8dDrPEij3EtK3FNuzW4GhIgc5%2FxXiANi0mRdMiVrEDMoLnrssZar2WlB9HNbnhqnAuJuE%2F3KcTKOlgiBXZZDEOG0BuJGIO2b%2BwBpMJGGp78GOqUBtJnb25FBaHSUeRP4rKWBdptw6ILfqehcc8NIX5ajI3QotRf2vrxrBGytuYWDtdZG%2BBmffPM%2BZVXcNLC7c7PQlqgCtDw9pDl3J%2FlcnJbO4r6dtVBNc3Fh%2FcasNVs0uqyAAGgRdrFsrDIGmwGBy6ddyB29Q%2BbjbpXrtYPkm1UCc0wCjpuSK%2Frjpew6ib%2BTf%2BeJbBQMRX%2FTgTdlvfWfMAWuPpJXFOOA&X-Amz-Signature=fddb395ab387620fc34e4f2c4cf5cfece7e400c4a826ff756ae52c629ac216dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
