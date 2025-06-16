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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q34WV7D%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDizK0rpiT4JXz2rODv7dAk%2Fv%2Fv1gCciPohzbO2YmsgrwIhAIrADx6js7x6beAudx63yDpLaw%2F9anebivwvQFnwDDmWKv8DCF8QABoMNjM3NDIzMTgzODA1IgyT61h%2FXy%2BP7uktDaEq3AN591s9q3OGJ7TJsmAai40zLP7WJz%2FzGc%2BFo0pDwucSzUloId%2FkKs6ucCOhfrLvDhP02COXp1P5XHVAflakkELq5j6HD8Tq7Akr44iFEs9WfyUtx7eUfu%2BUu1e3%2BY3b9eLWE3yLgSKMYuwgegW9tuXjch0ZG5lgBTkE5yy1i4fvtNnXVx7iWGtPKlBt5udxKJVY64cZDTZhtXVYrXZ8%2BdmoC%2F6WvabBezoox%2FKS49mA317lP6nbTltjKrIGTevB3PFFUjRpELaV0vzI9L%2FuNw0%2FAzgbZS8Hny8sub7RJVaM4NQ%2FIcCK3gJqmFKK4FolmNCk5c6hjeHKz8CreOFsrOQ9CtC6o9UIHUVvtpMxrVkUSTXt5N3vVf%2Bgw6PdwenA3b117Z3w%2BKZnv7%2Bf%2Bxq8JFhDm%2Fz4OusCkJiizAQIwwTSH9bH3TVNiypOBjJHjT559rZO0Wo9Me4OkQ016GqVOaZ%2Bi4k8PCLM3w4aT4dTNFpnb0tUxshPrgAbKXsJEW5TISsUemPYnGLXkAnat%2Fe1AJYOLdxklT2N4xx7LJAgp6MUGiQhaIJ2Jia145jwl1T5L5K8n7gjX%2FVNEWUVTY0Tt8gY0VJ8d%2BDRcxB9M4aTsd7Tfpxs%2BROiNwmuY0%2BaXDDPycDCBjqkAaGufpjXGsHTkRArXSJc8BY5P68%2F%2FA7guNz9JhBLNz7pGSqxBoDG2k9ZkXEYWhOF1zoVDQnoiRU0%2FHjlCpIUw0eL2xMS2CdZTIW2oa5SmwqoHRb3lXASxrPHa6v53eHSsMaxttX2TgvpG0WWbA%2BXBLapK1Bfw8GyniJWCgq2ydIWxYbZjcQfTJX2pHgU0PyeSnIHPkitLTDvC%2FElGmrAUcvC9anU&X-Amz-Signature=ee42aa84a11693583ee7d0db06cc45596e797b2f4ea1321d5d9446deb0afdb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q34WV7D%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDizK0rpiT4JXz2rODv7dAk%2Fv%2Fv1gCciPohzbO2YmsgrwIhAIrADx6js7x6beAudx63yDpLaw%2F9anebivwvQFnwDDmWKv8DCF8QABoMNjM3NDIzMTgzODA1IgyT61h%2FXy%2BP7uktDaEq3AN591s9q3OGJ7TJsmAai40zLP7WJz%2FzGc%2BFo0pDwucSzUloId%2FkKs6ucCOhfrLvDhP02COXp1P5XHVAflakkELq5j6HD8Tq7Akr44iFEs9WfyUtx7eUfu%2BUu1e3%2BY3b9eLWE3yLgSKMYuwgegW9tuXjch0ZG5lgBTkE5yy1i4fvtNnXVx7iWGtPKlBt5udxKJVY64cZDTZhtXVYrXZ8%2BdmoC%2F6WvabBezoox%2FKS49mA317lP6nbTltjKrIGTevB3PFFUjRpELaV0vzI9L%2FuNw0%2FAzgbZS8Hny8sub7RJVaM4NQ%2FIcCK3gJqmFKK4FolmNCk5c6hjeHKz8CreOFsrOQ9CtC6o9UIHUVvtpMxrVkUSTXt5N3vVf%2Bgw6PdwenA3b117Z3w%2BKZnv7%2Bf%2Bxq8JFhDm%2Fz4OusCkJiizAQIwwTSH9bH3TVNiypOBjJHjT559rZO0Wo9Me4OkQ016GqVOaZ%2Bi4k8PCLM3w4aT4dTNFpnb0tUxshPrgAbKXsJEW5TISsUemPYnGLXkAnat%2Fe1AJYOLdxklT2N4xx7LJAgp6MUGiQhaIJ2Jia145jwl1T5L5K8n7gjX%2FVNEWUVTY0Tt8gY0VJ8d%2BDRcxB9M4aTsd7Tfpxs%2BROiNwmuY0%2BaXDDPycDCBjqkAaGufpjXGsHTkRArXSJc8BY5P68%2F%2FA7guNz9JhBLNz7pGSqxBoDG2k9ZkXEYWhOF1zoVDQnoiRU0%2FHjlCpIUw0eL2xMS2CdZTIW2oa5SmwqoHRb3lXASxrPHa6v53eHSsMaxttX2TgvpG0WWbA%2BXBLapK1Bfw8GyniJWCgq2ydIWxYbZjcQfTJX2pHgU0PyeSnIHPkitLTDvC%2FElGmrAUcvC9anU&X-Amz-Signature=cdb8fccc6dcb65437ac04cbe94c8e1f936d92cdbc77c24b514bdc544a66c5dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q34WV7D%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDizK0rpiT4JXz2rODv7dAk%2Fv%2Fv1gCciPohzbO2YmsgrwIhAIrADx6js7x6beAudx63yDpLaw%2F9anebivwvQFnwDDmWKv8DCF8QABoMNjM3NDIzMTgzODA1IgyT61h%2FXy%2BP7uktDaEq3AN591s9q3OGJ7TJsmAai40zLP7WJz%2FzGc%2BFo0pDwucSzUloId%2FkKs6ucCOhfrLvDhP02COXp1P5XHVAflakkELq5j6HD8Tq7Akr44iFEs9WfyUtx7eUfu%2BUu1e3%2BY3b9eLWE3yLgSKMYuwgegW9tuXjch0ZG5lgBTkE5yy1i4fvtNnXVx7iWGtPKlBt5udxKJVY64cZDTZhtXVYrXZ8%2BdmoC%2F6WvabBezoox%2FKS49mA317lP6nbTltjKrIGTevB3PFFUjRpELaV0vzI9L%2FuNw0%2FAzgbZS8Hny8sub7RJVaM4NQ%2FIcCK3gJqmFKK4FolmNCk5c6hjeHKz8CreOFsrOQ9CtC6o9UIHUVvtpMxrVkUSTXt5N3vVf%2Bgw6PdwenA3b117Z3w%2BKZnv7%2Bf%2Bxq8JFhDm%2Fz4OusCkJiizAQIwwTSH9bH3TVNiypOBjJHjT559rZO0Wo9Me4OkQ016GqVOaZ%2Bi4k8PCLM3w4aT4dTNFpnb0tUxshPrgAbKXsJEW5TISsUemPYnGLXkAnat%2Fe1AJYOLdxklT2N4xx7LJAgp6MUGiQhaIJ2Jia145jwl1T5L5K8n7gjX%2FVNEWUVTY0Tt8gY0VJ8d%2BDRcxB9M4aTsd7Tfpxs%2BROiNwmuY0%2BaXDDPycDCBjqkAaGufpjXGsHTkRArXSJc8BY5P68%2F%2FA7guNz9JhBLNz7pGSqxBoDG2k9ZkXEYWhOF1zoVDQnoiRU0%2FHjlCpIUw0eL2xMS2CdZTIW2oa5SmwqoHRb3lXASxrPHa6v53eHSsMaxttX2TgvpG0WWbA%2BXBLapK1Bfw8GyniJWCgq2ydIWxYbZjcQfTJX2pHgU0PyeSnIHPkitLTDvC%2FElGmrAUcvC9anU&X-Amz-Signature=9348c753f954f8138d40f1c955a90e6af5c9df3b67a4dccb92ac144f859db4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q34WV7D%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDizK0rpiT4JXz2rODv7dAk%2Fv%2Fv1gCciPohzbO2YmsgrwIhAIrADx6js7x6beAudx63yDpLaw%2F9anebivwvQFnwDDmWKv8DCF8QABoMNjM3NDIzMTgzODA1IgyT61h%2FXy%2BP7uktDaEq3AN591s9q3OGJ7TJsmAai40zLP7WJz%2FzGc%2BFo0pDwucSzUloId%2FkKs6ucCOhfrLvDhP02COXp1P5XHVAflakkELq5j6HD8Tq7Akr44iFEs9WfyUtx7eUfu%2BUu1e3%2BY3b9eLWE3yLgSKMYuwgegW9tuXjch0ZG5lgBTkE5yy1i4fvtNnXVx7iWGtPKlBt5udxKJVY64cZDTZhtXVYrXZ8%2BdmoC%2F6WvabBezoox%2FKS49mA317lP6nbTltjKrIGTevB3PFFUjRpELaV0vzI9L%2FuNw0%2FAzgbZS8Hny8sub7RJVaM4NQ%2FIcCK3gJqmFKK4FolmNCk5c6hjeHKz8CreOFsrOQ9CtC6o9UIHUVvtpMxrVkUSTXt5N3vVf%2Bgw6PdwenA3b117Z3w%2BKZnv7%2Bf%2Bxq8JFhDm%2Fz4OusCkJiizAQIwwTSH9bH3TVNiypOBjJHjT559rZO0Wo9Me4OkQ016GqVOaZ%2Bi4k8PCLM3w4aT4dTNFpnb0tUxshPrgAbKXsJEW5TISsUemPYnGLXkAnat%2Fe1AJYOLdxklT2N4xx7LJAgp6MUGiQhaIJ2Jia145jwl1T5L5K8n7gjX%2FVNEWUVTY0Tt8gY0VJ8d%2BDRcxB9M4aTsd7Tfpxs%2BROiNwmuY0%2BaXDDPycDCBjqkAaGufpjXGsHTkRArXSJc8BY5P68%2F%2FA7guNz9JhBLNz7pGSqxBoDG2k9ZkXEYWhOF1zoVDQnoiRU0%2FHjlCpIUw0eL2xMS2CdZTIW2oa5SmwqoHRb3lXASxrPHa6v53eHSsMaxttX2TgvpG0WWbA%2BXBLapK1Bfw8GyniJWCgq2ydIWxYbZjcQfTJX2pHgU0PyeSnIHPkitLTDvC%2FElGmrAUcvC9anU&X-Amz-Signature=cf67589be5a0f5c9fa06dc821fa81ed7d596c89c3a05735f81364436e54439bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q34WV7D%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDizK0rpiT4JXz2rODv7dAk%2Fv%2Fv1gCciPohzbO2YmsgrwIhAIrADx6js7x6beAudx63yDpLaw%2F9anebivwvQFnwDDmWKv8DCF8QABoMNjM3NDIzMTgzODA1IgyT61h%2FXy%2BP7uktDaEq3AN591s9q3OGJ7TJsmAai40zLP7WJz%2FzGc%2BFo0pDwucSzUloId%2FkKs6ucCOhfrLvDhP02COXp1P5XHVAflakkELq5j6HD8Tq7Akr44iFEs9WfyUtx7eUfu%2BUu1e3%2BY3b9eLWE3yLgSKMYuwgegW9tuXjch0ZG5lgBTkE5yy1i4fvtNnXVx7iWGtPKlBt5udxKJVY64cZDTZhtXVYrXZ8%2BdmoC%2F6WvabBezoox%2FKS49mA317lP6nbTltjKrIGTevB3PFFUjRpELaV0vzI9L%2FuNw0%2FAzgbZS8Hny8sub7RJVaM4NQ%2FIcCK3gJqmFKK4FolmNCk5c6hjeHKz8CreOFsrOQ9CtC6o9UIHUVvtpMxrVkUSTXt5N3vVf%2Bgw6PdwenA3b117Z3w%2BKZnv7%2Bf%2Bxq8JFhDm%2Fz4OusCkJiizAQIwwTSH9bH3TVNiypOBjJHjT559rZO0Wo9Me4OkQ016GqVOaZ%2Bi4k8PCLM3w4aT4dTNFpnb0tUxshPrgAbKXsJEW5TISsUemPYnGLXkAnat%2Fe1AJYOLdxklT2N4xx7LJAgp6MUGiQhaIJ2Jia145jwl1T5L5K8n7gjX%2FVNEWUVTY0Tt8gY0VJ8d%2BDRcxB9M4aTsd7Tfpxs%2BROiNwmuY0%2BaXDDPycDCBjqkAaGufpjXGsHTkRArXSJc8BY5P68%2F%2FA7guNz9JhBLNz7pGSqxBoDG2k9ZkXEYWhOF1zoVDQnoiRU0%2FHjlCpIUw0eL2xMS2CdZTIW2oa5SmwqoHRb3lXASxrPHa6v53eHSsMaxttX2TgvpG0WWbA%2BXBLapK1Bfw8GyniJWCgq2ydIWxYbZjcQfTJX2pHgU0PyeSnIHPkitLTDvC%2FElGmrAUcvC9anU&X-Amz-Signature=50805fde944ce7b4f4d8c0b42433131d42c317043e6d02896230508dc990e218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
