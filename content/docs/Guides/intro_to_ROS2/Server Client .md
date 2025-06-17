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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLVZM55%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHICMpbj69WSz37N6fRGizQ0S8Z4JZw2G9mM4tZmTvf4AiBnu%2FnfGBe%2FeuMGaWjkVdkjflkwC27YyweqiREhNgbmuSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM801NIxOcL3j%2FZO2PKtwDmB6yqNfgCTQKmpnJqu3GGY%2FAJKXxn9OVOKHylcpNDgHWf%2FnV5UZP8Rzdbu%2FV6EQbD%2B%2FQyz5y83nmX%2BhMuH7qEryomDev9%2B7Eof%2BQ95h56D1wvNz%2BJbZqsaGfIPVVGm3w9Ph2ES62%2B1l0Kac%2B8FGXp6dzugTGjPHTWHiOBcL9ys0VT0v0ma62Q1BUF1QPhvWyC67KT6DvDqRE5sRVyIH0VHgC4kSfbI%2BWVD91A11dI2dih%2B2h1RXMvnCfwmue5DR1DXL5zCem6ICQzGPPGWIszssE2woruQanSeuBrQhV0%2B2E8y0PWRCakjgV5FHvL8G7vW%2F1bLi0Id2VgAaMiZNyUuMOwt0gSR3N3tNh2tYaZQAQKAjoTPpykunSDyG8lRyPjfMfgPb%2BW2a69TTkqId5%2Fr2ui9Ixy9F0A8yxu5mtNkuHg%2F1wAgX7S5Td%2B7OhVO4Pn25akzfgK4dbZjLkjrNLeaLrjzBCq4Q0eV%2BUvemDwinROd%2F8%2FchMjAmXOGcTbSKqcaHbO0rWyS35PKuzHLP58RyjTfJ%2FVNMce1F0QNCr7tClVBynlO51ubqVc1RY0icx07RKoQi6xvTYYtZUZPiPLVF1Q1jLk70yLJnKsqBNrEjPYnDwN0XfkSGLU4Uwx6bFwgY6pgG4qd3mckojxj%2FFEpco7JzRfu0Qxvl9FubX9yg%2FMRYGA%2F7lH8NSBQ776kkTxp6GE56bZjr1fVzVLH2ap5jWAl%2BFtL3Ny1bMBQVe9T%2FK588FaRu9szGity1psI16MEgHnjZbvnYx8e2w%2FVSQ7Cc4ZIVYlMqJfmdGJoxDp5HOXUsLaQgXMyoR22WsDvP7q4RzriJcNmlrxlMR2brH3eB0yl1EvsfO05ya&X-Amz-Signature=7218ea96dd27ba57a1fe351b734bb7cc0d0915c056217d79d403a8ad79d4d423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLVZM55%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHICMpbj69WSz37N6fRGizQ0S8Z4JZw2G9mM4tZmTvf4AiBnu%2FnfGBe%2FeuMGaWjkVdkjflkwC27YyweqiREhNgbmuSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM801NIxOcL3j%2FZO2PKtwDmB6yqNfgCTQKmpnJqu3GGY%2FAJKXxn9OVOKHylcpNDgHWf%2FnV5UZP8Rzdbu%2FV6EQbD%2B%2FQyz5y83nmX%2BhMuH7qEryomDev9%2B7Eof%2BQ95h56D1wvNz%2BJbZqsaGfIPVVGm3w9Ph2ES62%2B1l0Kac%2B8FGXp6dzugTGjPHTWHiOBcL9ys0VT0v0ma62Q1BUF1QPhvWyC67KT6DvDqRE5sRVyIH0VHgC4kSfbI%2BWVD91A11dI2dih%2B2h1RXMvnCfwmue5DR1DXL5zCem6ICQzGPPGWIszssE2woruQanSeuBrQhV0%2B2E8y0PWRCakjgV5FHvL8G7vW%2F1bLi0Id2VgAaMiZNyUuMOwt0gSR3N3tNh2tYaZQAQKAjoTPpykunSDyG8lRyPjfMfgPb%2BW2a69TTkqId5%2Fr2ui9Ixy9F0A8yxu5mtNkuHg%2F1wAgX7S5Td%2B7OhVO4Pn25akzfgK4dbZjLkjrNLeaLrjzBCq4Q0eV%2BUvemDwinROd%2F8%2FchMjAmXOGcTbSKqcaHbO0rWyS35PKuzHLP58RyjTfJ%2FVNMce1F0QNCr7tClVBynlO51ubqVc1RY0icx07RKoQi6xvTYYtZUZPiPLVF1Q1jLk70yLJnKsqBNrEjPYnDwN0XfkSGLU4Uwx6bFwgY6pgG4qd3mckojxj%2FFEpco7JzRfu0Qxvl9FubX9yg%2FMRYGA%2F7lH8NSBQ776kkTxp6GE56bZjr1fVzVLH2ap5jWAl%2BFtL3Ny1bMBQVe9T%2FK588FaRu9szGity1psI16MEgHnjZbvnYx8e2w%2FVSQ7Cc4ZIVYlMqJfmdGJoxDp5HOXUsLaQgXMyoR22WsDvP7q4RzriJcNmlrxlMR2brH3eB0yl1EvsfO05ya&X-Amz-Signature=be9b2c3b8e3156290664fab7ad0577adcb4da7e1fbea757cdd69f5082bed6f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLVZM55%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHICMpbj69WSz37N6fRGizQ0S8Z4JZw2G9mM4tZmTvf4AiBnu%2FnfGBe%2FeuMGaWjkVdkjflkwC27YyweqiREhNgbmuSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM801NIxOcL3j%2FZO2PKtwDmB6yqNfgCTQKmpnJqu3GGY%2FAJKXxn9OVOKHylcpNDgHWf%2FnV5UZP8Rzdbu%2FV6EQbD%2B%2FQyz5y83nmX%2BhMuH7qEryomDev9%2B7Eof%2BQ95h56D1wvNz%2BJbZqsaGfIPVVGm3w9Ph2ES62%2B1l0Kac%2B8FGXp6dzugTGjPHTWHiOBcL9ys0VT0v0ma62Q1BUF1QPhvWyC67KT6DvDqRE5sRVyIH0VHgC4kSfbI%2BWVD91A11dI2dih%2B2h1RXMvnCfwmue5DR1DXL5zCem6ICQzGPPGWIszssE2woruQanSeuBrQhV0%2B2E8y0PWRCakjgV5FHvL8G7vW%2F1bLi0Id2VgAaMiZNyUuMOwt0gSR3N3tNh2tYaZQAQKAjoTPpykunSDyG8lRyPjfMfgPb%2BW2a69TTkqId5%2Fr2ui9Ixy9F0A8yxu5mtNkuHg%2F1wAgX7S5Td%2B7OhVO4Pn25akzfgK4dbZjLkjrNLeaLrjzBCq4Q0eV%2BUvemDwinROd%2F8%2FchMjAmXOGcTbSKqcaHbO0rWyS35PKuzHLP58RyjTfJ%2FVNMce1F0QNCr7tClVBynlO51ubqVc1RY0icx07RKoQi6xvTYYtZUZPiPLVF1Q1jLk70yLJnKsqBNrEjPYnDwN0XfkSGLU4Uwx6bFwgY6pgG4qd3mckojxj%2FFEpco7JzRfu0Qxvl9FubX9yg%2FMRYGA%2F7lH8NSBQ776kkTxp6GE56bZjr1fVzVLH2ap5jWAl%2BFtL3Ny1bMBQVe9T%2FK588FaRu9szGity1psI16MEgHnjZbvnYx8e2w%2FVSQ7Cc4ZIVYlMqJfmdGJoxDp5HOXUsLaQgXMyoR22WsDvP7q4RzriJcNmlrxlMR2brH3eB0yl1EvsfO05ya&X-Amz-Signature=197d817bf27b74b3800ce2403582487645dd9d9223a836b0251556a55b2aeb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLVZM55%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHICMpbj69WSz37N6fRGizQ0S8Z4JZw2G9mM4tZmTvf4AiBnu%2FnfGBe%2FeuMGaWjkVdkjflkwC27YyweqiREhNgbmuSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM801NIxOcL3j%2FZO2PKtwDmB6yqNfgCTQKmpnJqu3GGY%2FAJKXxn9OVOKHylcpNDgHWf%2FnV5UZP8Rzdbu%2FV6EQbD%2B%2FQyz5y83nmX%2BhMuH7qEryomDev9%2B7Eof%2BQ95h56D1wvNz%2BJbZqsaGfIPVVGm3w9Ph2ES62%2B1l0Kac%2B8FGXp6dzugTGjPHTWHiOBcL9ys0VT0v0ma62Q1BUF1QPhvWyC67KT6DvDqRE5sRVyIH0VHgC4kSfbI%2BWVD91A11dI2dih%2B2h1RXMvnCfwmue5DR1DXL5zCem6ICQzGPPGWIszssE2woruQanSeuBrQhV0%2B2E8y0PWRCakjgV5FHvL8G7vW%2F1bLi0Id2VgAaMiZNyUuMOwt0gSR3N3tNh2tYaZQAQKAjoTPpykunSDyG8lRyPjfMfgPb%2BW2a69TTkqId5%2Fr2ui9Ixy9F0A8yxu5mtNkuHg%2F1wAgX7S5Td%2B7OhVO4Pn25akzfgK4dbZjLkjrNLeaLrjzBCq4Q0eV%2BUvemDwinROd%2F8%2FchMjAmXOGcTbSKqcaHbO0rWyS35PKuzHLP58RyjTfJ%2FVNMce1F0QNCr7tClVBynlO51ubqVc1RY0icx07RKoQi6xvTYYtZUZPiPLVF1Q1jLk70yLJnKsqBNrEjPYnDwN0XfkSGLU4Uwx6bFwgY6pgG4qd3mckojxj%2FFEpco7JzRfu0Qxvl9FubX9yg%2FMRYGA%2F7lH8NSBQ776kkTxp6GE56bZjr1fVzVLH2ap5jWAl%2BFtL3Ny1bMBQVe9T%2FK588FaRu9szGity1psI16MEgHnjZbvnYx8e2w%2FVSQ7Cc4ZIVYlMqJfmdGJoxDp5HOXUsLaQgXMyoR22WsDvP7q4RzriJcNmlrxlMR2brH3eB0yl1EvsfO05ya&X-Amz-Signature=804b23c7eddd7388c07ee8050d8ecf6b9cd2631e5f4de7c76a6ecd9161874817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLVZM55%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHICMpbj69WSz37N6fRGizQ0S8Z4JZw2G9mM4tZmTvf4AiBnu%2FnfGBe%2FeuMGaWjkVdkjflkwC27YyweqiREhNgbmuSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM801NIxOcL3j%2FZO2PKtwDmB6yqNfgCTQKmpnJqu3GGY%2FAJKXxn9OVOKHylcpNDgHWf%2FnV5UZP8Rzdbu%2FV6EQbD%2B%2FQyz5y83nmX%2BhMuH7qEryomDev9%2B7Eof%2BQ95h56D1wvNz%2BJbZqsaGfIPVVGm3w9Ph2ES62%2B1l0Kac%2B8FGXp6dzugTGjPHTWHiOBcL9ys0VT0v0ma62Q1BUF1QPhvWyC67KT6DvDqRE5sRVyIH0VHgC4kSfbI%2BWVD91A11dI2dih%2B2h1RXMvnCfwmue5DR1DXL5zCem6ICQzGPPGWIszssE2woruQanSeuBrQhV0%2B2E8y0PWRCakjgV5FHvL8G7vW%2F1bLi0Id2VgAaMiZNyUuMOwt0gSR3N3tNh2tYaZQAQKAjoTPpykunSDyG8lRyPjfMfgPb%2BW2a69TTkqId5%2Fr2ui9Ixy9F0A8yxu5mtNkuHg%2F1wAgX7S5Td%2B7OhVO4Pn25akzfgK4dbZjLkjrNLeaLrjzBCq4Q0eV%2BUvemDwinROd%2F8%2FchMjAmXOGcTbSKqcaHbO0rWyS35PKuzHLP58RyjTfJ%2FVNMce1F0QNCr7tClVBynlO51ubqVc1RY0icx07RKoQi6xvTYYtZUZPiPLVF1Q1jLk70yLJnKsqBNrEjPYnDwN0XfkSGLU4Uwx6bFwgY6pgG4qd3mckojxj%2FFEpco7JzRfu0Qxvl9FubX9yg%2FMRYGA%2F7lH8NSBQ776kkTxp6GE56bZjr1fVzVLH2ap5jWAl%2BFtL3Ny1bMBQVe9T%2FK588FaRu9szGity1psI16MEgHnjZbvnYx8e2w%2FVSQ7Cc4ZIVYlMqJfmdGJoxDp5HOXUsLaQgXMyoR22WsDvP7q4RzriJcNmlrxlMR2brH3eB0yl1EvsfO05ya&X-Amz-Signature=401b77b5808049aea40f792326a5078df2048cbf21ee7bdee52760973961086b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
