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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NJZZV3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC50oDavlrNyowDpgiRTTnEq1Pgc3exUv2bGI6GGrn%2FqwIgdHvKgp%2F2zZE9oZbDXPooun%2FC6YYmwnhyfuRJfKbtUl4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXFaWEna58PRcWF5SrcA125Nq0Re1zCYOGeR1XVqr5XEo7X42VCrd%2B7cv360iEBkpEfnzz69R%2Fp1jpEeDkwI4sEBigwz9Kp2zS5sqdhJ270NOuN8umoBfGswwTXkEXDyrFBjdJ1QjmI0vnQ58HbtsTye7Xy5fK7dZmYNKGhkjq%2Bmj9n3oaNXGKK6eEJmnIu5v%2BZd8%2F0BaL%2FFOWWuIscwSRd2ZyMw5xO3zDI0NJjGstGx2o38X7bwuOqVeni9z0fSFZvraPMNNentBuZwv5lHme8bgrIY0WmGqohTM5TpQZDCBe91hrV3o7ERkgIqR6yxkAtnxX02kXgLQC6uu2QPai3t6f5joSWoBnYJiAGxs1xN%2Fl9b4%2FRrmikaNtnjJwt6mafw5C7tYvsLCZ0sZG20pDP5iUuqvXM1W5QKC113FnhbF68CiW8u1Wmb54qZvCB0FA6Qsy07RJysIV%2BrhPElXkgMxEZ%2BvRz0OuWgLgOkody4Lq8hq%2B%2FYAET0MnWPhJuhxoh8ErxzJSBVLZZQZgKqN93sKIT8dAwWpQxY5HayrO3aiFY93jHm6PmqbOqi61A2SMYH%2BkSRBC682e7Ev1R9FVH45d%2BYs4FgFzRLHP2nusNndbGYcWALpiEcxgDBvMv6PQ9G0vIpHLOG4vQMJTajMEGOqUBWIaKjyYTLC8h2X6hCCwHJA0hFYRFYbDL5mhmYd1MAzyP5noAksWPcyUMVY6gPVfDsR1v9rylaHQUDM3bqEIIsKP0rWR5kLUCQZGHIHc6YbXCV1JXPpriao7v61nTnoEUcBxlmyK1FaWkW85tfo9pDX5xxiPsptMb7MNNrgpHRTprW1T%2BYs0gi5lZBHplaYwpdbnlcPDVw03E7lVR5YF%2FILz2aCC8&X-Amz-Signature=dbca905c375b4a8af5a24ad68b0f66f8a347377fc1ac2e6461c72fd2c726f0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NJZZV3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC50oDavlrNyowDpgiRTTnEq1Pgc3exUv2bGI6GGrn%2FqwIgdHvKgp%2F2zZE9oZbDXPooun%2FC6YYmwnhyfuRJfKbtUl4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXFaWEna58PRcWF5SrcA125Nq0Re1zCYOGeR1XVqr5XEo7X42VCrd%2B7cv360iEBkpEfnzz69R%2Fp1jpEeDkwI4sEBigwz9Kp2zS5sqdhJ270NOuN8umoBfGswwTXkEXDyrFBjdJ1QjmI0vnQ58HbtsTye7Xy5fK7dZmYNKGhkjq%2Bmj9n3oaNXGKK6eEJmnIu5v%2BZd8%2F0BaL%2FFOWWuIscwSRd2ZyMw5xO3zDI0NJjGstGx2o38X7bwuOqVeni9z0fSFZvraPMNNentBuZwv5lHme8bgrIY0WmGqohTM5TpQZDCBe91hrV3o7ERkgIqR6yxkAtnxX02kXgLQC6uu2QPai3t6f5joSWoBnYJiAGxs1xN%2Fl9b4%2FRrmikaNtnjJwt6mafw5C7tYvsLCZ0sZG20pDP5iUuqvXM1W5QKC113FnhbF68CiW8u1Wmb54qZvCB0FA6Qsy07RJysIV%2BrhPElXkgMxEZ%2BvRz0OuWgLgOkody4Lq8hq%2B%2FYAET0MnWPhJuhxoh8ErxzJSBVLZZQZgKqN93sKIT8dAwWpQxY5HayrO3aiFY93jHm6PmqbOqi61A2SMYH%2BkSRBC682e7Ev1R9FVH45d%2BYs4FgFzRLHP2nusNndbGYcWALpiEcxgDBvMv6PQ9G0vIpHLOG4vQMJTajMEGOqUBWIaKjyYTLC8h2X6hCCwHJA0hFYRFYbDL5mhmYd1MAzyP5noAksWPcyUMVY6gPVfDsR1v9rylaHQUDM3bqEIIsKP0rWR5kLUCQZGHIHc6YbXCV1JXPpriao7v61nTnoEUcBxlmyK1FaWkW85tfo9pDX5xxiPsptMb7MNNrgpHRTprW1T%2BYs0gi5lZBHplaYwpdbnlcPDVw03E7lVR5YF%2FILz2aCC8&X-Amz-Signature=793901e943076abbed35c6c2d4305d0c18d2f83d7795486947e92553cd292080&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NJZZV3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC50oDavlrNyowDpgiRTTnEq1Pgc3exUv2bGI6GGrn%2FqwIgdHvKgp%2F2zZE9oZbDXPooun%2FC6YYmwnhyfuRJfKbtUl4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXFaWEna58PRcWF5SrcA125Nq0Re1zCYOGeR1XVqr5XEo7X42VCrd%2B7cv360iEBkpEfnzz69R%2Fp1jpEeDkwI4sEBigwz9Kp2zS5sqdhJ270NOuN8umoBfGswwTXkEXDyrFBjdJ1QjmI0vnQ58HbtsTye7Xy5fK7dZmYNKGhkjq%2Bmj9n3oaNXGKK6eEJmnIu5v%2BZd8%2F0BaL%2FFOWWuIscwSRd2ZyMw5xO3zDI0NJjGstGx2o38X7bwuOqVeni9z0fSFZvraPMNNentBuZwv5lHme8bgrIY0WmGqohTM5TpQZDCBe91hrV3o7ERkgIqR6yxkAtnxX02kXgLQC6uu2QPai3t6f5joSWoBnYJiAGxs1xN%2Fl9b4%2FRrmikaNtnjJwt6mafw5C7tYvsLCZ0sZG20pDP5iUuqvXM1W5QKC113FnhbF68CiW8u1Wmb54qZvCB0FA6Qsy07RJysIV%2BrhPElXkgMxEZ%2BvRz0OuWgLgOkody4Lq8hq%2B%2FYAET0MnWPhJuhxoh8ErxzJSBVLZZQZgKqN93sKIT8dAwWpQxY5HayrO3aiFY93jHm6PmqbOqi61A2SMYH%2BkSRBC682e7Ev1R9FVH45d%2BYs4FgFzRLHP2nusNndbGYcWALpiEcxgDBvMv6PQ9G0vIpHLOG4vQMJTajMEGOqUBWIaKjyYTLC8h2X6hCCwHJA0hFYRFYbDL5mhmYd1MAzyP5noAksWPcyUMVY6gPVfDsR1v9rylaHQUDM3bqEIIsKP0rWR5kLUCQZGHIHc6YbXCV1JXPpriao7v61nTnoEUcBxlmyK1FaWkW85tfo9pDX5xxiPsptMb7MNNrgpHRTprW1T%2BYs0gi5lZBHplaYwpdbnlcPDVw03E7lVR5YF%2FILz2aCC8&X-Amz-Signature=db9ddcfec04b315da855eef742348aa295628f2e9cb5a1cdd3112a8a257a3090&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NJZZV3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC50oDavlrNyowDpgiRTTnEq1Pgc3exUv2bGI6GGrn%2FqwIgdHvKgp%2F2zZE9oZbDXPooun%2FC6YYmwnhyfuRJfKbtUl4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXFaWEna58PRcWF5SrcA125Nq0Re1zCYOGeR1XVqr5XEo7X42VCrd%2B7cv360iEBkpEfnzz69R%2Fp1jpEeDkwI4sEBigwz9Kp2zS5sqdhJ270NOuN8umoBfGswwTXkEXDyrFBjdJ1QjmI0vnQ58HbtsTye7Xy5fK7dZmYNKGhkjq%2Bmj9n3oaNXGKK6eEJmnIu5v%2BZd8%2F0BaL%2FFOWWuIscwSRd2ZyMw5xO3zDI0NJjGstGx2o38X7bwuOqVeni9z0fSFZvraPMNNentBuZwv5lHme8bgrIY0WmGqohTM5TpQZDCBe91hrV3o7ERkgIqR6yxkAtnxX02kXgLQC6uu2QPai3t6f5joSWoBnYJiAGxs1xN%2Fl9b4%2FRrmikaNtnjJwt6mafw5C7tYvsLCZ0sZG20pDP5iUuqvXM1W5QKC113FnhbF68CiW8u1Wmb54qZvCB0FA6Qsy07RJysIV%2BrhPElXkgMxEZ%2BvRz0OuWgLgOkody4Lq8hq%2B%2FYAET0MnWPhJuhxoh8ErxzJSBVLZZQZgKqN93sKIT8dAwWpQxY5HayrO3aiFY93jHm6PmqbOqi61A2SMYH%2BkSRBC682e7Ev1R9FVH45d%2BYs4FgFzRLHP2nusNndbGYcWALpiEcxgDBvMv6PQ9G0vIpHLOG4vQMJTajMEGOqUBWIaKjyYTLC8h2X6hCCwHJA0hFYRFYbDL5mhmYd1MAzyP5noAksWPcyUMVY6gPVfDsR1v9rylaHQUDM3bqEIIsKP0rWR5kLUCQZGHIHc6YbXCV1JXPpriao7v61nTnoEUcBxlmyK1FaWkW85tfo9pDX5xxiPsptMb7MNNrgpHRTprW1T%2BYs0gi5lZBHplaYwpdbnlcPDVw03E7lVR5YF%2FILz2aCC8&X-Amz-Signature=7430b5e900b2025d6c438897346468e99cc4c3cfd2b1cda9130eb8a80c6d63da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NJZZV3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC50oDavlrNyowDpgiRTTnEq1Pgc3exUv2bGI6GGrn%2FqwIgdHvKgp%2F2zZE9oZbDXPooun%2FC6YYmwnhyfuRJfKbtUl4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXFaWEna58PRcWF5SrcA125Nq0Re1zCYOGeR1XVqr5XEo7X42VCrd%2B7cv360iEBkpEfnzz69R%2Fp1jpEeDkwI4sEBigwz9Kp2zS5sqdhJ270NOuN8umoBfGswwTXkEXDyrFBjdJ1QjmI0vnQ58HbtsTye7Xy5fK7dZmYNKGhkjq%2Bmj9n3oaNXGKK6eEJmnIu5v%2BZd8%2F0BaL%2FFOWWuIscwSRd2ZyMw5xO3zDI0NJjGstGx2o38X7bwuOqVeni9z0fSFZvraPMNNentBuZwv5lHme8bgrIY0WmGqohTM5TpQZDCBe91hrV3o7ERkgIqR6yxkAtnxX02kXgLQC6uu2QPai3t6f5joSWoBnYJiAGxs1xN%2Fl9b4%2FRrmikaNtnjJwt6mafw5C7tYvsLCZ0sZG20pDP5iUuqvXM1W5QKC113FnhbF68CiW8u1Wmb54qZvCB0FA6Qsy07RJysIV%2BrhPElXkgMxEZ%2BvRz0OuWgLgOkody4Lq8hq%2B%2FYAET0MnWPhJuhxoh8ErxzJSBVLZZQZgKqN93sKIT8dAwWpQxY5HayrO3aiFY93jHm6PmqbOqi61A2SMYH%2BkSRBC682e7Ev1R9FVH45d%2BYs4FgFzRLHP2nusNndbGYcWALpiEcxgDBvMv6PQ9G0vIpHLOG4vQMJTajMEGOqUBWIaKjyYTLC8h2X6hCCwHJA0hFYRFYbDL5mhmYd1MAzyP5noAksWPcyUMVY6gPVfDsR1v9rylaHQUDM3bqEIIsKP0rWR5kLUCQZGHIHc6YbXCV1JXPpriao7v61nTnoEUcBxlmyK1FaWkW85tfo9pDX5xxiPsptMb7MNNrgpHRTprW1T%2BYs0gi5lZBHplaYwpdbnlcPDVw03E7lVR5YF%2FILz2aCC8&X-Amz-Signature=05cba75f045de78839cae82309437be32103d81f4bce2db6be4a1563a44896f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
