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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTW2JH6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB831mfnElT7bTOIn3W%2BNM1kuvcgEc4mAMACZvkm%2FyU3AiA0aTx4AmKuc0S5zYDleFOS64Lp2n1x9wSgqln9bdv9VSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAFiLHUi3KGV4cFMOKtwDdO%2BkN41oY6mkQaxL99y36zLK9e3Ns0nq6%2Fef7lrqfv%2BeGi3NoqVeMCf3oQEc3JQOT6luxP9k2cesbBQVe%2Flte2pMlkvfTMZsVmX8REz1nvy%2B7Nkskvb68FBg%2BPHY%2FuKRg0sxZAL6zr3joZYnsPHzY1OuIg4B6viB%2FxIGiWjejDbHvHkTwM32zTfG7HYX6dsz3zfrisWrxePGOeRN06CAaSzrRdrevqAl3AljYCXZF9zIFFdhS7aPJTJWoNLK3bjEMyE9aJFrqsLzD3dMA0Kswm07Ew3S1QKTRqe5Iv29QvTZNAJ75gL3vx%2Fdn4wD2%2BYs2XfknTgoolMDJzfVDJqOzUY30o9bPMDl8Xwq8b62J2vPXZfi8wCEjNlZcyb3aKnndNqylaHTDtqgbJPE0etF9PJYMg70wcx2ZvlkCS9TwE6Q%2FfODqVVoc4JTxhoEoRHDc%2Fon1p8OCHoHsDGz4JwiGv5AgyyDam9xRoyKrLNBUROJCYK9hMUF59prKtcYkAGwZY4XhsiTTPp7Fenvgk5OjWX8YqJafNyG6DNsfGZ%2F3TnTLLQz5bS5N52FcIBRnVyfKRFcjBdCzKDy%2Fsy2Us2t56RzdimbVQ8wxCKo9CI3rftheGY%2F6pKQNPV3kM0woZCgwQY6pgGGru0exy4YhHuITB0381K18K75p%2BwcLF%2BkgB8sQNM48KbqgMzhGx8PWZ8GbdUbwV7ZeVHxQbB7P72pkHjqZJ7xSp5yEK0vXVQsX0PoDer6zIjCGL2nqdfE1UkFjOSoTrCcujOk5uFBTRDSB1jZBg5yWzFOouO3dQ8upnU6iyLlXuEe4xJMAWpzz3S%2BhGlHKWRdEyi5iCXuEyyijeK%2BMfFUOCqdo7kR&X-Amz-Signature=a4afd42e1728aaaebb6ca47711175ff74fd5330dd8ce3ddd2fd2d250ed3579ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTW2JH6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB831mfnElT7bTOIn3W%2BNM1kuvcgEc4mAMACZvkm%2FyU3AiA0aTx4AmKuc0S5zYDleFOS64Lp2n1x9wSgqln9bdv9VSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAFiLHUi3KGV4cFMOKtwDdO%2BkN41oY6mkQaxL99y36zLK9e3Ns0nq6%2Fef7lrqfv%2BeGi3NoqVeMCf3oQEc3JQOT6luxP9k2cesbBQVe%2Flte2pMlkvfTMZsVmX8REz1nvy%2B7Nkskvb68FBg%2BPHY%2FuKRg0sxZAL6zr3joZYnsPHzY1OuIg4B6viB%2FxIGiWjejDbHvHkTwM32zTfG7HYX6dsz3zfrisWrxePGOeRN06CAaSzrRdrevqAl3AljYCXZF9zIFFdhS7aPJTJWoNLK3bjEMyE9aJFrqsLzD3dMA0Kswm07Ew3S1QKTRqe5Iv29QvTZNAJ75gL3vx%2Fdn4wD2%2BYs2XfknTgoolMDJzfVDJqOzUY30o9bPMDl8Xwq8b62J2vPXZfi8wCEjNlZcyb3aKnndNqylaHTDtqgbJPE0etF9PJYMg70wcx2ZvlkCS9TwE6Q%2FfODqVVoc4JTxhoEoRHDc%2Fon1p8OCHoHsDGz4JwiGv5AgyyDam9xRoyKrLNBUROJCYK9hMUF59prKtcYkAGwZY4XhsiTTPp7Fenvgk5OjWX8YqJafNyG6DNsfGZ%2F3TnTLLQz5bS5N52FcIBRnVyfKRFcjBdCzKDy%2Fsy2Us2t56RzdimbVQ8wxCKo9CI3rftheGY%2F6pKQNPV3kM0woZCgwQY6pgGGru0exy4YhHuITB0381K18K75p%2BwcLF%2BkgB8sQNM48KbqgMzhGx8PWZ8GbdUbwV7ZeVHxQbB7P72pkHjqZJ7xSp5yEK0vXVQsX0PoDer6zIjCGL2nqdfE1UkFjOSoTrCcujOk5uFBTRDSB1jZBg5yWzFOouO3dQ8upnU6iyLlXuEe4xJMAWpzz3S%2BhGlHKWRdEyi5iCXuEyyijeK%2BMfFUOCqdo7kR&X-Amz-Signature=1f22be842d40b126054285b2a58ed508721980a4c041a5bab4c62f9b7169afc5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTW2JH6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB831mfnElT7bTOIn3W%2BNM1kuvcgEc4mAMACZvkm%2FyU3AiA0aTx4AmKuc0S5zYDleFOS64Lp2n1x9wSgqln9bdv9VSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAFiLHUi3KGV4cFMOKtwDdO%2BkN41oY6mkQaxL99y36zLK9e3Ns0nq6%2Fef7lrqfv%2BeGi3NoqVeMCf3oQEc3JQOT6luxP9k2cesbBQVe%2Flte2pMlkvfTMZsVmX8REz1nvy%2B7Nkskvb68FBg%2BPHY%2FuKRg0sxZAL6zr3joZYnsPHzY1OuIg4B6viB%2FxIGiWjejDbHvHkTwM32zTfG7HYX6dsz3zfrisWrxePGOeRN06CAaSzrRdrevqAl3AljYCXZF9zIFFdhS7aPJTJWoNLK3bjEMyE9aJFrqsLzD3dMA0Kswm07Ew3S1QKTRqe5Iv29QvTZNAJ75gL3vx%2Fdn4wD2%2BYs2XfknTgoolMDJzfVDJqOzUY30o9bPMDl8Xwq8b62J2vPXZfi8wCEjNlZcyb3aKnndNqylaHTDtqgbJPE0etF9PJYMg70wcx2ZvlkCS9TwE6Q%2FfODqVVoc4JTxhoEoRHDc%2Fon1p8OCHoHsDGz4JwiGv5AgyyDam9xRoyKrLNBUROJCYK9hMUF59prKtcYkAGwZY4XhsiTTPp7Fenvgk5OjWX8YqJafNyG6DNsfGZ%2F3TnTLLQz5bS5N52FcIBRnVyfKRFcjBdCzKDy%2Fsy2Us2t56RzdimbVQ8wxCKo9CI3rftheGY%2F6pKQNPV3kM0woZCgwQY6pgGGru0exy4YhHuITB0381K18K75p%2BwcLF%2BkgB8sQNM48KbqgMzhGx8PWZ8GbdUbwV7ZeVHxQbB7P72pkHjqZJ7xSp5yEK0vXVQsX0PoDer6zIjCGL2nqdfE1UkFjOSoTrCcujOk5uFBTRDSB1jZBg5yWzFOouO3dQ8upnU6iyLlXuEe4xJMAWpzz3S%2BhGlHKWRdEyi5iCXuEyyijeK%2BMfFUOCqdo7kR&X-Amz-Signature=efb7492e197fb7828a3141e9366932f13157864ecabe83ed3d6e8098729bd84c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTW2JH6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB831mfnElT7bTOIn3W%2BNM1kuvcgEc4mAMACZvkm%2FyU3AiA0aTx4AmKuc0S5zYDleFOS64Lp2n1x9wSgqln9bdv9VSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAFiLHUi3KGV4cFMOKtwDdO%2BkN41oY6mkQaxL99y36zLK9e3Ns0nq6%2Fef7lrqfv%2BeGi3NoqVeMCf3oQEc3JQOT6luxP9k2cesbBQVe%2Flte2pMlkvfTMZsVmX8REz1nvy%2B7Nkskvb68FBg%2BPHY%2FuKRg0sxZAL6zr3joZYnsPHzY1OuIg4B6viB%2FxIGiWjejDbHvHkTwM32zTfG7HYX6dsz3zfrisWrxePGOeRN06CAaSzrRdrevqAl3AljYCXZF9zIFFdhS7aPJTJWoNLK3bjEMyE9aJFrqsLzD3dMA0Kswm07Ew3S1QKTRqe5Iv29QvTZNAJ75gL3vx%2Fdn4wD2%2BYs2XfknTgoolMDJzfVDJqOzUY30o9bPMDl8Xwq8b62J2vPXZfi8wCEjNlZcyb3aKnndNqylaHTDtqgbJPE0etF9PJYMg70wcx2ZvlkCS9TwE6Q%2FfODqVVoc4JTxhoEoRHDc%2Fon1p8OCHoHsDGz4JwiGv5AgyyDam9xRoyKrLNBUROJCYK9hMUF59prKtcYkAGwZY4XhsiTTPp7Fenvgk5OjWX8YqJafNyG6DNsfGZ%2F3TnTLLQz5bS5N52FcIBRnVyfKRFcjBdCzKDy%2Fsy2Us2t56RzdimbVQ8wxCKo9CI3rftheGY%2F6pKQNPV3kM0woZCgwQY6pgGGru0exy4YhHuITB0381K18K75p%2BwcLF%2BkgB8sQNM48KbqgMzhGx8PWZ8GbdUbwV7ZeVHxQbB7P72pkHjqZJ7xSp5yEK0vXVQsX0PoDer6zIjCGL2nqdfE1UkFjOSoTrCcujOk5uFBTRDSB1jZBg5yWzFOouO3dQ8upnU6iyLlXuEe4xJMAWpzz3S%2BhGlHKWRdEyi5iCXuEyyijeK%2BMfFUOCqdo7kR&X-Amz-Signature=ab07d191ac5932ad45b0a16f3a5f212c69745e36ec2d9b1a9d180435848f4d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTW2JH6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB831mfnElT7bTOIn3W%2BNM1kuvcgEc4mAMACZvkm%2FyU3AiA0aTx4AmKuc0S5zYDleFOS64Lp2n1x9wSgqln9bdv9VSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAFiLHUi3KGV4cFMOKtwDdO%2BkN41oY6mkQaxL99y36zLK9e3Ns0nq6%2Fef7lrqfv%2BeGi3NoqVeMCf3oQEc3JQOT6luxP9k2cesbBQVe%2Flte2pMlkvfTMZsVmX8REz1nvy%2B7Nkskvb68FBg%2BPHY%2FuKRg0sxZAL6zr3joZYnsPHzY1OuIg4B6viB%2FxIGiWjejDbHvHkTwM32zTfG7HYX6dsz3zfrisWrxePGOeRN06CAaSzrRdrevqAl3AljYCXZF9zIFFdhS7aPJTJWoNLK3bjEMyE9aJFrqsLzD3dMA0Kswm07Ew3S1QKTRqe5Iv29QvTZNAJ75gL3vx%2Fdn4wD2%2BYs2XfknTgoolMDJzfVDJqOzUY30o9bPMDl8Xwq8b62J2vPXZfi8wCEjNlZcyb3aKnndNqylaHTDtqgbJPE0etF9PJYMg70wcx2ZvlkCS9TwE6Q%2FfODqVVoc4JTxhoEoRHDc%2Fon1p8OCHoHsDGz4JwiGv5AgyyDam9xRoyKrLNBUROJCYK9hMUF59prKtcYkAGwZY4XhsiTTPp7Fenvgk5OjWX8YqJafNyG6DNsfGZ%2F3TnTLLQz5bS5N52FcIBRnVyfKRFcjBdCzKDy%2Fsy2Us2t56RzdimbVQ8wxCKo9CI3rftheGY%2F6pKQNPV3kM0woZCgwQY6pgGGru0exy4YhHuITB0381K18K75p%2BwcLF%2BkgB8sQNM48KbqgMzhGx8PWZ8GbdUbwV7ZeVHxQbB7P72pkHjqZJ7xSp5yEK0vXVQsX0PoDer6zIjCGL2nqdfE1UkFjOSoTrCcujOk5uFBTRDSB1jZBg5yWzFOouO3dQ8upnU6iyLlXuEe4xJMAWpzz3S%2BhGlHKWRdEyi5iCXuEyyijeK%2BMfFUOCqdo7kR&X-Amz-Signature=c6c6a2a074ad7fa7382c2290f28f638faac9d58447e88eadb6a86ac27b70c3df&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
