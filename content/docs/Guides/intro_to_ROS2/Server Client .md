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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTDW6NK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGrMPtz2GfJJUfRFCABIyXBwCJKnLIYXFmY3zpZhPszAiEAjraU0i%2Bih57blSahK9%2B3N6lNQrA6g2cHQnZALk7q5OgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHF3y1S10CktQc7UircA0b20tjUm1Qe7My63whlBDZk50B25tqmtE6JA4bw6VSWw4HSF%2BA4KkznvL9qDB8%2B6tg9AN7HOmWWTdB8bSGMHGnPLd3CJULlLp3Go4QsdxYdcvqZ%2BvBQQoIZXSEyXDpms1BXq0O8UEHZod9D6y1raPhQW4eFVK8hKfznrX9T0i5mh%2Bkjbt%2FLX7JJJqHEv3lj0Z5xxWZvIBypE3Xy4s94fwRhTud4zFOzveOtAu%2BNmLSedGU9WB8GdgBZjU4tf57dP4D%2FLxwbJJoYFyEnTkNB4ola2UxvRfQw%2F5bASrfUewvqFDOEgJVoXKHeL%2BfQ44JTzfOuFxjeJz7dtWk7yhKxNNFZxX9pJ2WYp8fA56INnDOWs8WoW%2BDnk1DifIiV5VHUUdevDvvA6BBHjJIR9%2FxvlRze4SRj%2FqZxCJGyE%2BzqsB80HPgaj0JeCMCmtpR44uwfIGHiZ9snJ9P0gNpu4cKwmlRCQZZcmR80i6%2Fa16UCrZlYnn3Mx7lvSxScReqFVJdnGzZlOw9gUoHj4fadhgps8xbPhFGAm4VlEXcHBc4fJDDIHMX4QQzvUQKsIkhB7g%2Fka5dcD6iTzUP5KeNWXTp49%2B1V%2FVnSLeMAf3TObtEWopF4ItKbALJ%2BrT1skvQxMPrhk8MGOqUBgKaqPObHtTdBNz9imI6rIovFne54LSKx%2B27cggiVsIN3iBhKUZyKQkfE6hQpQZnHeylqiIsV6pH6L8CPCUmTgrq5y6OfjIoRRBP6m2%2FXAVrzkLqcXUjmDHMyH9jcHE9%2BDkRiGtN7OTYza0%2B3H57H%2BsfJGBS0gDuGNixr9fYM2%2FDgGhD%2BmrbobgXBOA5amryb7yPSp3cqK4gK328MINhPY431cFZY&X-Amz-Signature=aad1b80a69616425177c5f885c359da4f4e646de0db4852e45a3eac3e16da386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTDW6NK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGrMPtz2GfJJUfRFCABIyXBwCJKnLIYXFmY3zpZhPszAiEAjraU0i%2Bih57blSahK9%2B3N6lNQrA6g2cHQnZALk7q5OgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHF3y1S10CktQc7UircA0b20tjUm1Qe7My63whlBDZk50B25tqmtE6JA4bw6VSWw4HSF%2BA4KkznvL9qDB8%2B6tg9AN7HOmWWTdB8bSGMHGnPLd3CJULlLp3Go4QsdxYdcvqZ%2BvBQQoIZXSEyXDpms1BXq0O8UEHZod9D6y1raPhQW4eFVK8hKfznrX9T0i5mh%2Bkjbt%2FLX7JJJqHEv3lj0Z5xxWZvIBypE3Xy4s94fwRhTud4zFOzveOtAu%2BNmLSedGU9WB8GdgBZjU4tf57dP4D%2FLxwbJJoYFyEnTkNB4ola2UxvRfQw%2F5bASrfUewvqFDOEgJVoXKHeL%2BfQ44JTzfOuFxjeJz7dtWk7yhKxNNFZxX9pJ2WYp8fA56INnDOWs8WoW%2BDnk1DifIiV5VHUUdevDvvA6BBHjJIR9%2FxvlRze4SRj%2FqZxCJGyE%2BzqsB80HPgaj0JeCMCmtpR44uwfIGHiZ9snJ9P0gNpu4cKwmlRCQZZcmR80i6%2Fa16UCrZlYnn3Mx7lvSxScReqFVJdnGzZlOw9gUoHj4fadhgps8xbPhFGAm4VlEXcHBc4fJDDIHMX4QQzvUQKsIkhB7g%2Fka5dcD6iTzUP5KeNWXTp49%2B1V%2FVnSLeMAf3TObtEWopF4ItKbALJ%2BrT1skvQxMPrhk8MGOqUBgKaqPObHtTdBNz9imI6rIovFne54LSKx%2B27cggiVsIN3iBhKUZyKQkfE6hQpQZnHeylqiIsV6pH6L8CPCUmTgrq5y6OfjIoRRBP6m2%2FXAVrzkLqcXUjmDHMyH9jcHE9%2BDkRiGtN7OTYza0%2B3H57H%2BsfJGBS0gDuGNixr9fYM2%2FDgGhD%2BmrbobgXBOA5amryb7yPSp3cqK4gK328MINhPY431cFZY&X-Amz-Signature=26ae7f1b68146f0675edb911595c29b078386b9e605ef366c02c6ec99e638a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTDW6NK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGrMPtz2GfJJUfRFCABIyXBwCJKnLIYXFmY3zpZhPszAiEAjraU0i%2Bih57blSahK9%2B3N6lNQrA6g2cHQnZALk7q5OgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHF3y1S10CktQc7UircA0b20tjUm1Qe7My63whlBDZk50B25tqmtE6JA4bw6VSWw4HSF%2BA4KkznvL9qDB8%2B6tg9AN7HOmWWTdB8bSGMHGnPLd3CJULlLp3Go4QsdxYdcvqZ%2BvBQQoIZXSEyXDpms1BXq0O8UEHZod9D6y1raPhQW4eFVK8hKfznrX9T0i5mh%2Bkjbt%2FLX7JJJqHEv3lj0Z5xxWZvIBypE3Xy4s94fwRhTud4zFOzveOtAu%2BNmLSedGU9WB8GdgBZjU4tf57dP4D%2FLxwbJJoYFyEnTkNB4ola2UxvRfQw%2F5bASrfUewvqFDOEgJVoXKHeL%2BfQ44JTzfOuFxjeJz7dtWk7yhKxNNFZxX9pJ2WYp8fA56INnDOWs8WoW%2BDnk1DifIiV5VHUUdevDvvA6BBHjJIR9%2FxvlRze4SRj%2FqZxCJGyE%2BzqsB80HPgaj0JeCMCmtpR44uwfIGHiZ9snJ9P0gNpu4cKwmlRCQZZcmR80i6%2Fa16UCrZlYnn3Mx7lvSxScReqFVJdnGzZlOw9gUoHj4fadhgps8xbPhFGAm4VlEXcHBc4fJDDIHMX4QQzvUQKsIkhB7g%2Fka5dcD6iTzUP5KeNWXTp49%2B1V%2FVnSLeMAf3TObtEWopF4ItKbALJ%2BrT1skvQxMPrhk8MGOqUBgKaqPObHtTdBNz9imI6rIovFne54LSKx%2B27cggiVsIN3iBhKUZyKQkfE6hQpQZnHeylqiIsV6pH6L8CPCUmTgrq5y6OfjIoRRBP6m2%2FXAVrzkLqcXUjmDHMyH9jcHE9%2BDkRiGtN7OTYza0%2B3H57H%2BsfJGBS0gDuGNixr9fYM2%2FDgGhD%2BmrbobgXBOA5amryb7yPSp3cqK4gK328MINhPY431cFZY&X-Amz-Signature=bfaf223b72df03440b87b616e382bf6285a48c2f5e9111452c5b434978dd2316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTDW6NK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGrMPtz2GfJJUfRFCABIyXBwCJKnLIYXFmY3zpZhPszAiEAjraU0i%2Bih57blSahK9%2B3N6lNQrA6g2cHQnZALk7q5OgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHF3y1S10CktQc7UircA0b20tjUm1Qe7My63whlBDZk50B25tqmtE6JA4bw6VSWw4HSF%2BA4KkznvL9qDB8%2B6tg9AN7HOmWWTdB8bSGMHGnPLd3CJULlLp3Go4QsdxYdcvqZ%2BvBQQoIZXSEyXDpms1BXq0O8UEHZod9D6y1raPhQW4eFVK8hKfznrX9T0i5mh%2Bkjbt%2FLX7JJJqHEv3lj0Z5xxWZvIBypE3Xy4s94fwRhTud4zFOzveOtAu%2BNmLSedGU9WB8GdgBZjU4tf57dP4D%2FLxwbJJoYFyEnTkNB4ola2UxvRfQw%2F5bASrfUewvqFDOEgJVoXKHeL%2BfQ44JTzfOuFxjeJz7dtWk7yhKxNNFZxX9pJ2WYp8fA56INnDOWs8WoW%2BDnk1DifIiV5VHUUdevDvvA6BBHjJIR9%2FxvlRze4SRj%2FqZxCJGyE%2BzqsB80HPgaj0JeCMCmtpR44uwfIGHiZ9snJ9P0gNpu4cKwmlRCQZZcmR80i6%2Fa16UCrZlYnn3Mx7lvSxScReqFVJdnGzZlOw9gUoHj4fadhgps8xbPhFGAm4VlEXcHBc4fJDDIHMX4QQzvUQKsIkhB7g%2Fka5dcD6iTzUP5KeNWXTp49%2B1V%2FVnSLeMAf3TObtEWopF4ItKbALJ%2BrT1skvQxMPrhk8MGOqUBgKaqPObHtTdBNz9imI6rIovFne54LSKx%2B27cggiVsIN3iBhKUZyKQkfE6hQpQZnHeylqiIsV6pH6L8CPCUmTgrq5y6OfjIoRRBP6m2%2FXAVrzkLqcXUjmDHMyH9jcHE9%2BDkRiGtN7OTYza0%2B3H57H%2BsfJGBS0gDuGNixr9fYM2%2FDgGhD%2BmrbobgXBOA5amryb7yPSp3cqK4gK328MINhPY431cFZY&X-Amz-Signature=52d8b224d1f3990b5e96a680380817a17ace5d93bfb388d8304be567db81de98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTDW6NK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGrMPtz2GfJJUfRFCABIyXBwCJKnLIYXFmY3zpZhPszAiEAjraU0i%2Bih57blSahK9%2B3N6lNQrA6g2cHQnZALk7q5OgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHF3y1S10CktQc7UircA0b20tjUm1Qe7My63whlBDZk50B25tqmtE6JA4bw6VSWw4HSF%2BA4KkznvL9qDB8%2B6tg9AN7HOmWWTdB8bSGMHGnPLd3CJULlLp3Go4QsdxYdcvqZ%2BvBQQoIZXSEyXDpms1BXq0O8UEHZod9D6y1raPhQW4eFVK8hKfznrX9T0i5mh%2Bkjbt%2FLX7JJJqHEv3lj0Z5xxWZvIBypE3Xy4s94fwRhTud4zFOzveOtAu%2BNmLSedGU9WB8GdgBZjU4tf57dP4D%2FLxwbJJoYFyEnTkNB4ola2UxvRfQw%2F5bASrfUewvqFDOEgJVoXKHeL%2BfQ44JTzfOuFxjeJz7dtWk7yhKxNNFZxX9pJ2WYp8fA56INnDOWs8WoW%2BDnk1DifIiV5VHUUdevDvvA6BBHjJIR9%2FxvlRze4SRj%2FqZxCJGyE%2BzqsB80HPgaj0JeCMCmtpR44uwfIGHiZ9snJ9P0gNpu4cKwmlRCQZZcmR80i6%2Fa16UCrZlYnn3Mx7lvSxScReqFVJdnGzZlOw9gUoHj4fadhgps8xbPhFGAm4VlEXcHBc4fJDDIHMX4QQzvUQKsIkhB7g%2Fka5dcD6iTzUP5KeNWXTp49%2B1V%2FVnSLeMAf3TObtEWopF4ItKbALJ%2BrT1skvQxMPrhk8MGOqUBgKaqPObHtTdBNz9imI6rIovFne54LSKx%2B27cggiVsIN3iBhKUZyKQkfE6hQpQZnHeylqiIsV6pH6L8CPCUmTgrq5y6OfjIoRRBP6m2%2FXAVrzkLqcXUjmDHMyH9jcHE9%2BDkRiGtN7OTYza0%2B3H57H%2BsfJGBS0gDuGNixr9fYM2%2FDgGhD%2BmrbobgXBOA5amryb7yPSp3cqK4gK328MINhPY431cFZY&X-Amz-Signature=6c2cbfaefd4310788da5a99aaf1270ad2e1ed6756137b098c0b61303cb9d726a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
