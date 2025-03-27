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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YUAEZP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ2f3gvmnHIe6S3EIHh%2FRrB3GUMZuziS0TiXTsYhIjAiBIDqDMwMT3C9Tu17VaakSWsXuwNYSGm8pzGEcr0eLdgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGW09S3j4jWiGE%2FaIKtwD%2BUElRdUb6AL7qiYAIGlf8jQCxfB2zR2N9TVSh%2FzeOzb8oShdcD8xD9b2Wp5lJKyH79Yjs58jnqeYVtn6aNBVzZadQTqMw%2FKO21ww%2B5CINs7%2FrsMji8nCDgFml%2B5mcD02cLzKDqinA9d0%2Bad9cYIS4t7CoQFWwVEqIzEW%2BuIu%2BCxz%2FSWkQiyBAjQ2M95mu6mgjPGG7YR%2FEif6UxLqqHeVuPQ8AvTOuC0a4d8W9nwiB%2Bxx5fQ4RjAKVY9jOODu%2BBUqd%2BtzQJfXxcQg5LqcgjwqpkFE1rNErPeWSsb0mkrk%2FvK3RpPV1xsWSCEESD7c%2B2jBp8Jugx3HkuXgRs5Leia2Itn9X6F6pKD1btGd8AdPlbCUcPAkAIiWbicoII3cMoHMKaSUJEHXOiYS96yp4dxXTbFTv2KzDlFf8S2UkGCD4NRSHIBIxp4%2F4TJqSsOb9Pp2%2F5KdazH91M%2BYJHSeSDyftqoC1cdtQlhrJ21N4YnaQmrh7L%2BsmDf4AXSuT76sK6LiRFhkJeHoq6FfCK%2F27ifV0VsSZT2ECUdl6d6cfKCKDYPgCgmQlsmQhdvoFvZCSCIR7epzaiQBCd9ArXAVdFm8%2FU%2Bc%2BCFUgzbSkieM0tR0hjB4lszEpe3ohSn2eUAw%2BdqUvwY6pgGDc6mgEA1G7HwzAWNQRtWiMwVgjG9GUbHu8As9r7%2FewezjubkXMu32ipGJsYKEz14GStVaWb6dAQs2VcHoqyeE2lfXb6nxxSNykryKMcGcvI%2BqGaHUikIWg5kf1Mk%2BcVROvZyOm9hbGb8Yt8sp%2F6SDnoQ1CnK%2FswfQMLD4ZLTmzkksnC5tQiwNxJx9yiO%2BVw4bBJY9gBbSGMC4yRZ52bu%2FvieSjpjs&X-Amz-Signature=ad1fbf3fb0493a78206be9ee042a40758a081b65d7a79d6836b9b2fd007c89bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YUAEZP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ2f3gvmnHIe6S3EIHh%2FRrB3GUMZuziS0TiXTsYhIjAiBIDqDMwMT3C9Tu17VaakSWsXuwNYSGm8pzGEcr0eLdgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGW09S3j4jWiGE%2FaIKtwD%2BUElRdUb6AL7qiYAIGlf8jQCxfB2zR2N9TVSh%2FzeOzb8oShdcD8xD9b2Wp5lJKyH79Yjs58jnqeYVtn6aNBVzZadQTqMw%2FKO21ww%2B5CINs7%2FrsMji8nCDgFml%2B5mcD02cLzKDqinA9d0%2Bad9cYIS4t7CoQFWwVEqIzEW%2BuIu%2BCxz%2FSWkQiyBAjQ2M95mu6mgjPGG7YR%2FEif6UxLqqHeVuPQ8AvTOuC0a4d8W9nwiB%2Bxx5fQ4RjAKVY9jOODu%2BBUqd%2BtzQJfXxcQg5LqcgjwqpkFE1rNErPeWSsb0mkrk%2FvK3RpPV1xsWSCEESD7c%2B2jBp8Jugx3HkuXgRs5Leia2Itn9X6F6pKD1btGd8AdPlbCUcPAkAIiWbicoII3cMoHMKaSUJEHXOiYS96yp4dxXTbFTv2KzDlFf8S2UkGCD4NRSHIBIxp4%2F4TJqSsOb9Pp2%2F5KdazH91M%2BYJHSeSDyftqoC1cdtQlhrJ21N4YnaQmrh7L%2BsmDf4AXSuT76sK6LiRFhkJeHoq6FfCK%2F27ifV0VsSZT2ECUdl6d6cfKCKDYPgCgmQlsmQhdvoFvZCSCIR7epzaiQBCd9ArXAVdFm8%2FU%2Bc%2BCFUgzbSkieM0tR0hjB4lszEpe3ohSn2eUAw%2BdqUvwY6pgGDc6mgEA1G7HwzAWNQRtWiMwVgjG9GUbHu8As9r7%2FewezjubkXMu32ipGJsYKEz14GStVaWb6dAQs2VcHoqyeE2lfXb6nxxSNykryKMcGcvI%2BqGaHUikIWg5kf1Mk%2BcVROvZyOm9hbGb8Yt8sp%2F6SDnoQ1CnK%2FswfQMLD4ZLTmzkksnC5tQiwNxJx9yiO%2BVw4bBJY9gBbSGMC4yRZ52bu%2FvieSjpjs&X-Amz-Signature=4eacf60a9543dd9d749678780b7da42c9c066958bc69fd0c5aae2a5efee292f0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YUAEZP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ2f3gvmnHIe6S3EIHh%2FRrB3GUMZuziS0TiXTsYhIjAiBIDqDMwMT3C9Tu17VaakSWsXuwNYSGm8pzGEcr0eLdgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGW09S3j4jWiGE%2FaIKtwD%2BUElRdUb6AL7qiYAIGlf8jQCxfB2zR2N9TVSh%2FzeOzb8oShdcD8xD9b2Wp5lJKyH79Yjs58jnqeYVtn6aNBVzZadQTqMw%2FKO21ww%2B5CINs7%2FrsMji8nCDgFml%2B5mcD02cLzKDqinA9d0%2Bad9cYIS4t7CoQFWwVEqIzEW%2BuIu%2BCxz%2FSWkQiyBAjQ2M95mu6mgjPGG7YR%2FEif6UxLqqHeVuPQ8AvTOuC0a4d8W9nwiB%2Bxx5fQ4RjAKVY9jOODu%2BBUqd%2BtzQJfXxcQg5LqcgjwqpkFE1rNErPeWSsb0mkrk%2FvK3RpPV1xsWSCEESD7c%2B2jBp8Jugx3HkuXgRs5Leia2Itn9X6F6pKD1btGd8AdPlbCUcPAkAIiWbicoII3cMoHMKaSUJEHXOiYS96yp4dxXTbFTv2KzDlFf8S2UkGCD4NRSHIBIxp4%2F4TJqSsOb9Pp2%2F5KdazH91M%2BYJHSeSDyftqoC1cdtQlhrJ21N4YnaQmrh7L%2BsmDf4AXSuT76sK6LiRFhkJeHoq6FfCK%2F27ifV0VsSZT2ECUdl6d6cfKCKDYPgCgmQlsmQhdvoFvZCSCIR7epzaiQBCd9ArXAVdFm8%2FU%2Bc%2BCFUgzbSkieM0tR0hjB4lszEpe3ohSn2eUAw%2BdqUvwY6pgGDc6mgEA1G7HwzAWNQRtWiMwVgjG9GUbHu8As9r7%2FewezjubkXMu32ipGJsYKEz14GStVaWb6dAQs2VcHoqyeE2lfXb6nxxSNykryKMcGcvI%2BqGaHUikIWg5kf1Mk%2BcVROvZyOm9hbGb8Yt8sp%2F6SDnoQ1CnK%2FswfQMLD4ZLTmzkksnC5tQiwNxJx9yiO%2BVw4bBJY9gBbSGMC4yRZ52bu%2FvieSjpjs&X-Amz-Signature=7e145f71caa6bf58dd8e8c5a86f4995bb08fdc6cd6b1ba5759a4e36ac104247a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YUAEZP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ2f3gvmnHIe6S3EIHh%2FRrB3GUMZuziS0TiXTsYhIjAiBIDqDMwMT3C9Tu17VaakSWsXuwNYSGm8pzGEcr0eLdgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGW09S3j4jWiGE%2FaIKtwD%2BUElRdUb6AL7qiYAIGlf8jQCxfB2zR2N9TVSh%2FzeOzb8oShdcD8xD9b2Wp5lJKyH79Yjs58jnqeYVtn6aNBVzZadQTqMw%2FKO21ww%2B5CINs7%2FrsMji8nCDgFml%2B5mcD02cLzKDqinA9d0%2Bad9cYIS4t7CoQFWwVEqIzEW%2BuIu%2BCxz%2FSWkQiyBAjQ2M95mu6mgjPGG7YR%2FEif6UxLqqHeVuPQ8AvTOuC0a4d8W9nwiB%2Bxx5fQ4RjAKVY9jOODu%2BBUqd%2BtzQJfXxcQg5LqcgjwqpkFE1rNErPeWSsb0mkrk%2FvK3RpPV1xsWSCEESD7c%2B2jBp8Jugx3HkuXgRs5Leia2Itn9X6F6pKD1btGd8AdPlbCUcPAkAIiWbicoII3cMoHMKaSUJEHXOiYS96yp4dxXTbFTv2KzDlFf8S2UkGCD4NRSHIBIxp4%2F4TJqSsOb9Pp2%2F5KdazH91M%2BYJHSeSDyftqoC1cdtQlhrJ21N4YnaQmrh7L%2BsmDf4AXSuT76sK6LiRFhkJeHoq6FfCK%2F27ifV0VsSZT2ECUdl6d6cfKCKDYPgCgmQlsmQhdvoFvZCSCIR7epzaiQBCd9ArXAVdFm8%2FU%2Bc%2BCFUgzbSkieM0tR0hjB4lszEpe3ohSn2eUAw%2BdqUvwY6pgGDc6mgEA1G7HwzAWNQRtWiMwVgjG9GUbHu8As9r7%2FewezjubkXMu32ipGJsYKEz14GStVaWb6dAQs2VcHoqyeE2lfXb6nxxSNykryKMcGcvI%2BqGaHUikIWg5kf1Mk%2BcVROvZyOm9hbGb8Yt8sp%2F6SDnoQ1CnK%2FswfQMLD4ZLTmzkksnC5tQiwNxJx9yiO%2BVw4bBJY9gBbSGMC4yRZ52bu%2FvieSjpjs&X-Amz-Signature=241e427fec118ad649e8b289bf4abe6d92d2c01e0535319d1999e17a073217bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YUAEZP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZ2f3gvmnHIe6S3EIHh%2FRrB3GUMZuziS0TiXTsYhIjAiBIDqDMwMT3C9Tu17VaakSWsXuwNYSGm8pzGEcr0eLdgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMGW09S3j4jWiGE%2FaIKtwD%2BUElRdUb6AL7qiYAIGlf8jQCxfB2zR2N9TVSh%2FzeOzb8oShdcD8xD9b2Wp5lJKyH79Yjs58jnqeYVtn6aNBVzZadQTqMw%2FKO21ww%2B5CINs7%2FrsMji8nCDgFml%2B5mcD02cLzKDqinA9d0%2Bad9cYIS4t7CoQFWwVEqIzEW%2BuIu%2BCxz%2FSWkQiyBAjQ2M95mu6mgjPGG7YR%2FEif6UxLqqHeVuPQ8AvTOuC0a4d8W9nwiB%2Bxx5fQ4RjAKVY9jOODu%2BBUqd%2BtzQJfXxcQg5LqcgjwqpkFE1rNErPeWSsb0mkrk%2FvK3RpPV1xsWSCEESD7c%2B2jBp8Jugx3HkuXgRs5Leia2Itn9X6F6pKD1btGd8AdPlbCUcPAkAIiWbicoII3cMoHMKaSUJEHXOiYS96yp4dxXTbFTv2KzDlFf8S2UkGCD4NRSHIBIxp4%2F4TJqSsOb9Pp2%2F5KdazH91M%2BYJHSeSDyftqoC1cdtQlhrJ21N4YnaQmrh7L%2BsmDf4AXSuT76sK6LiRFhkJeHoq6FfCK%2F27ifV0VsSZT2ECUdl6d6cfKCKDYPgCgmQlsmQhdvoFvZCSCIR7epzaiQBCd9ArXAVdFm8%2FU%2Bc%2BCFUgzbSkieM0tR0hjB4lszEpe3ohSn2eUAw%2BdqUvwY6pgGDc6mgEA1G7HwzAWNQRtWiMwVgjG9GUbHu8As9r7%2FewezjubkXMu32ipGJsYKEz14GStVaWb6dAQs2VcHoqyeE2lfXb6nxxSNykryKMcGcvI%2BqGaHUikIWg5kf1Mk%2BcVROvZyOm9hbGb8Yt8sp%2F6SDnoQ1CnK%2FswfQMLD4ZLTmzkksnC5tQiwNxJx9yiO%2BVw4bBJY9gBbSGMC4yRZ52bu%2FvieSjpjs&X-Amz-Signature=08766c5cbc87af09a19cf710463a7f48b66e5d814e6fdbb24229c4dded037bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
