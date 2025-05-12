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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXUVIDY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD3cWS9G%2Bopg8wAX6os%2BZCroI9hAziOCyFIOUuX1%2BNyLwIgA8jktBlv739vFIC3VjwM2s02VJXs1zRIcV%2B2oxG031AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlF7UcI07KJsX9c0yrcA1ciarer842ojtzaQ1jkRSO60wwAcJQchxOKoSmfCHqn5Ol%2F3s3bq9Dlgkdi8D1%2FXdExUXkdNtVnv9JfS%2BDo8er59D%2FWfg%2Fxr71alvfRAhfkbyt%2FaMTkMYrsDOUjtBREgP0QHaXOb9VRqUzLfooHGJrCFK1kRS6dBbvBM8xCfRUBUZRw5PK6dbAqxeRVoaA8UlgbpasWjKVBjFG0ET3CLl%2BDlirGAnpizaQPf5ByE8B8RW6TxRwcUKrUUWFdP7fLThA5vfOV0kUUN5%2FxAqMRvaVJ0cYmZDfn3B8e%2BDoclw7uXO%2BHL%2BogB610MFv1S3F6NxUIM2HexrDcNHuqsFbSZkoFgW6ndAQizumYvB%2F0j8nCKSimD9Tym0BrXaIq99CUsGoBNTnggnk7tRS1rwO32r7cfdXRwd2LtI4KCmOCywwp9QD8mdl2jOlzkFnUKYR9%2F9qqUCNPkQZeB6ARiXw9yf3vB1HPU2avZ10YunoetQBV7QwFNZLPrOwxK8HhYEy4IvbAsujF2MCuCewGjVrjuEd2N6gCSwcy1PFW5REYG9BCeAMnmxTXLW5GiWcA%2FEnYzSC7g%2F3pLYGUWDC0GEMVRqfbofjwQGh2D54qNUt2em7ZOO5UFaD5yeWgOsvXMLPphsEGOqUB4lU1w%2FouB723awPlq3mE5SHYR0zTFiks%2FNlHQSeVzGBG4JK%2FERXSMuwIl7WWv4UCBjyDKoZlTlCRFT%2FNPeBQK%2F8U2to0KtcTX4nOv5oyCAEQoEBO1XhLbezIPmWWdU0pQPr4%2FaYEur9%2FWVLwD8nr%2B%2BWBl2dxTE%2BdxFqAn4Grv%2B4%2B25zTfQKzXdwHwrcW4BENpbJxB0wI2Z7X0RhGse69VjMPGPRn&X-Amz-Signature=9de800913e448d0f9cdd716e53e13f11b64eeb9f937d9e2726e46afa287f3d55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXUVIDY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD3cWS9G%2Bopg8wAX6os%2BZCroI9hAziOCyFIOUuX1%2BNyLwIgA8jktBlv739vFIC3VjwM2s02VJXs1zRIcV%2B2oxG031AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlF7UcI07KJsX9c0yrcA1ciarer842ojtzaQ1jkRSO60wwAcJQchxOKoSmfCHqn5Ol%2F3s3bq9Dlgkdi8D1%2FXdExUXkdNtVnv9JfS%2BDo8er59D%2FWfg%2Fxr71alvfRAhfkbyt%2FaMTkMYrsDOUjtBREgP0QHaXOb9VRqUzLfooHGJrCFK1kRS6dBbvBM8xCfRUBUZRw5PK6dbAqxeRVoaA8UlgbpasWjKVBjFG0ET3CLl%2BDlirGAnpizaQPf5ByE8B8RW6TxRwcUKrUUWFdP7fLThA5vfOV0kUUN5%2FxAqMRvaVJ0cYmZDfn3B8e%2BDoclw7uXO%2BHL%2BogB610MFv1S3F6NxUIM2HexrDcNHuqsFbSZkoFgW6ndAQizumYvB%2F0j8nCKSimD9Tym0BrXaIq99CUsGoBNTnggnk7tRS1rwO32r7cfdXRwd2LtI4KCmOCywwp9QD8mdl2jOlzkFnUKYR9%2F9qqUCNPkQZeB6ARiXw9yf3vB1HPU2avZ10YunoetQBV7QwFNZLPrOwxK8HhYEy4IvbAsujF2MCuCewGjVrjuEd2N6gCSwcy1PFW5REYG9BCeAMnmxTXLW5GiWcA%2FEnYzSC7g%2F3pLYGUWDC0GEMVRqfbofjwQGh2D54qNUt2em7ZOO5UFaD5yeWgOsvXMLPphsEGOqUB4lU1w%2FouB723awPlq3mE5SHYR0zTFiks%2FNlHQSeVzGBG4JK%2FERXSMuwIl7WWv4UCBjyDKoZlTlCRFT%2FNPeBQK%2F8U2to0KtcTX4nOv5oyCAEQoEBO1XhLbezIPmWWdU0pQPr4%2FaYEur9%2FWVLwD8nr%2B%2BWBl2dxTE%2BdxFqAn4Grv%2B4%2B25zTfQKzXdwHwrcW4BENpbJxB0wI2Z7X0RhGse69VjMPGPRn&X-Amz-Signature=46d3e10d7b88c3bda038019caddbd4621e5fa85229829226bb911b58268a79ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXUVIDY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD3cWS9G%2Bopg8wAX6os%2BZCroI9hAziOCyFIOUuX1%2BNyLwIgA8jktBlv739vFIC3VjwM2s02VJXs1zRIcV%2B2oxG031AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlF7UcI07KJsX9c0yrcA1ciarer842ojtzaQ1jkRSO60wwAcJQchxOKoSmfCHqn5Ol%2F3s3bq9Dlgkdi8D1%2FXdExUXkdNtVnv9JfS%2BDo8er59D%2FWfg%2Fxr71alvfRAhfkbyt%2FaMTkMYrsDOUjtBREgP0QHaXOb9VRqUzLfooHGJrCFK1kRS6dBbvBM8xCfRUBUZRw5PK6dbAqxeRVoaA8UlgbpasWjKVBjFG0ET3CLl%2BDlirGAnpizaQPf5ByE8B8RW6TxRwcUKrUUWFdP7fLThA5vfOV0kUUN5%2FxAqMRvaVJ0cYmZDfn3B8e%2BDoclw7uXO%2BHL%2BogB610MFv1S3F6NxUIM2HexrDcNHuqsFbSZkoFgW6ndAQizumYvB%2F0j8nCKSimD9Tym0BrXaIq99CUsGoBNTnggnk7tRS1rwO32r7cfdXRwd2LtI4KCmOCywwp9QD8mdl2jOlzkFnUKYR9%2F9qqUCNPkQZeB6ARiXw9yf3vB1HPU2avZ10YunoetQBV7QwFNZLPrOwxK8HhYEy4IvbAsujF2MCuCewGjVrjuEd2N6gCSwcy1PFW5REYG9BCeAMnmxTXLW5GiWcA%2FEnYzSC7g%2F3pLYGUWDC0GEMVRqfbofjwQGh2D54qNUt2em7ZOO5UFaD5yeWgOsvXMLPphsEGOqUB4lU1w%2FouB723awPlq3mE5SHYR0zTFiks%2FNlHQSeVzGBG4JK%2FERXSMuwIl7WWv4UCBjyDKoZlTlCRFT%2FNPeBQK%2F8U2to0KtcTX4nOv5oyCAEQoEBO1XhLbezIPmWWdU0pQPr4%2FaYEur9%2FWVLwD8nr%2B%2BWBl2dxTE%2BdxFqAn4Grv%2B4%2B25zTfQKzXdwHwrcW4BENpbJxB0wI2Z7X0RhGse69VjMPGPRn&X-Amz-Signature=cb4b446c2ea44cb5fc4e4c19313f804e87450619837dccca0f6aee7429bcc513&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXUVIDY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD3cWS9G%2Bopg8wAX6os%2BZCroI9hAziOCyFIOUuX1%2BNyLwIgA8jktBlv739vFIC3VjwM2s02VJXs1zRIcV%2B2oxG031AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlF7UcI07KJsX9c0yrcA1ciarer842ojtzaQ1jkRSO60wwAcJQchxOKoSmfCHqn5Ol%2F3s3bq9Dlgkdi8D1%2FXdExUXkdNtVnv9JfS%2BDo8er59D%2FWfg%2Fxr71alvfRAhfkbyt%2FaMTkMYrsDOUjtBREgP0QHaXOb9VRqUzLfooHGJrCFK1kRS6dBbvBM8xCfRUBUZRw5PK6dbAqxeRVoaA8UlgbpasWjKVBjFG0ET3CLl%2BDlirGAnpizaQPf5ByE8B8RW6TxRwcUKrUUWFdP7fLThA5vfOV0kUUN5%2FxAqMRvaVJ0cYmZDfn3B8e%2BDoclw7uXO%2BHL%2BogB610MFv1S3F6NxUIM2HexrDcNHuqsFbSZkoFgW6ndAQizumYvB%2F0j8nCKSimD9Tym0BrXaIq99CUsGoBNTnggnk7tRS1rwO32r7cfdXRwd2LtI4KCmOCywwp9QD8mdl2jOlzkFnUKYR9%2F9qqUCNPkQZeB6ARiXw9yf3vB1HPU2avZ10YunoetQBV7QwFNZLPrOwxK8HhYEy4IvbAsujF2MCuCewGjVrjuEd2N6gCSwcy1PFW5REYG9BCeAMnmxTXLW5GiWcA%2FEnYzSC7g%2F3pLYGUWDC0GEMVRqfbofjwQGh2D54qNUt2em7ZOO5UFaD5yeWgOsvXMLPphsEGOqUB4lU1w%2FouB723awPlq3mE5SHYR0zTFiks%2FNlHQSeVzGBG4JK%2FERXSMuwIl7WWv4UCBjyDKoZlTlCRFT%2FNPeBQK%2F8U2to0KtcTX4nOv5oyCAEQoEBO1XhLbezIPmWWdU0pQPr4%2FaYEur9%2FWVLwD8nr%2B%2BWBl2dxTE%2BdxFqAn4Grv%2B4%2B25zTfQKzXdwHwrcW4BENpbJxB0wI2Z7X0RhGse69VjMPGPRn&X-Amz-Signature=344d40bcb9a0d1fc639f30d8bde55a2327adfc1538b88c0655a98a94a8a7febc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXUVIDY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD3cWS9G%2Bopg8wAX6os%2BZCroI9hAziOCyFIOUuX1%2BNyLwIgA8jktBlv739vFIC3VjwM2s02VJXs1zRIcV%2B2oxG031AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlF7UcI07KJsX9c0yrcA1ciarer842ojtzaQ1jkRSO60wwAcJQchxOKoSmfCHqn5Ol%2F3s3bq9Dlgkdi8D1%2FXdExUXkdNtVnv9JfS%2BDo8er59D%2FWfg%2Fxr71alvfRAhfkbyt%2FaMTkMYrsDOUjtBREgP0QHaXOb9VRqUzLfooHGJrCFK1kRS6dBbvBM8xCfRUBUZRw5PK6dbAqxeRVoaA8UlgbpasWjKVBjFG0ET3CLl%2BDlirGAnpizaQPf5ByE8B8RW6TxRwcUKrUUWFdP7fLThA5vfOV0kUUN5%2FxAqMRvaVJ0cYmZDfn3B8e%2BDoclw7uXO%2BHL%2BogB610MFv1S3F6NxUIM2HexrDcNHuqsFbSZkoFgW6ndAQizumYvB%2F0j8nCKSimD9Tym0BrXaIq99CUsGoBNTnggnk7tRS1rwO32r7cfdXRwd2LtI4KCmOCywwp9QD8mdl2jOlzkFnUKYR9%2F9qqUCNPkQZeB6ARiXw9yf3vB1HPU2avZ10YunoetQBV7QwFNZLPrOwxK8HhYEy4IvbAsujF2MCuCewGjVrjuEd2N6gCSwcy1PFW5REYG9BCeAMnmxTXLW5GiWcA%2FEnYzSC7g%2F3pLYGUWDC0GEMVRqfbofjwQGh2D54qNUt2em7ZOO5UFaD5yeWgOsvXMLPphsEGOqUB4lU1w%2FouB723awPlq3mE5SHYR0zTFiks%2FNlHQSeVzGBG4JK%2FERXSMuwIl7WWv4UCBjyDKoZlTlCRFT%2FNPeBQK%2F8U2to0KtcTX4nOv5oyCAEQoEBO1XhLbezIPmWWdU0pQPr4%2FaYEur9%2FWVLwD8nr%2B%2BWBl2dxTE%2BdxFqAn4Grv%2B4%2B25zTfQKzXdwHwrcW4BENpbJxB0wI2Z7X0RhGse69VjMPGPRn&X-Amz-Signature=93d2e1500cfe432390b1fb0cb3883f9e4724d4779789a3cf925a68d4affc21eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
