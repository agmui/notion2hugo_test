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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XIP4HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB%2BCYvFiNz3oCx7h%2BGfYWdRbzF1LtxLFbB2hICsYTb6bAiEA%2B0kAtYBp1ot%2BqztBKYm5BuUuc0h58IYQ2tnoWkkqnooq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMskfNymGDLuf%2F3zWCrcA6BLYyGYsX5T%2BgSiGFRIDipEsb0CnUumTA%2FwoDaM7pp0qS94%2BlfFKJlGilT3f8fzUDEyRvs%2F4BA%2Fc67QWfNigTi5tzJly24ug3mFmDdyJuGLKmqkuB3H9ddw%2FqfXeoFwuNOHdxY9hVTRRVoQ6vw0Md62mnyRjPwt8IrSFzMScGn%2BAEy3g42dnavbD%2Bl2ERN79Vh%2BpFOUcTwF211xl1hnIN3BDPpwnegV4jWEvZzgpsR9yaKQbz7NnSw3ZDoic%2BEtNlO10kUmlRBJVOYOEQTW0rSqvhx4J5uw5unR1cznnMLsjwbAhRhMRqRybU0pAttzI%2Fuice1UJn5grXsF%2Fmua0Z5kj7N6G802q9kSC3we8FzsQS6xXXsgGgi1j5ZBZ3BeYztk7O%2By4PoVCCaPOz%2BJnhrs6XJMlepsWa%2FXV622RvHaAOoB1yVtsieXLGlG1KCD1Q%2BSxxMEW7AjSuaCH%2Fxski3MMpDwGs48befByKPjs8BTdJBQT4AmFyeIkCuhtXlGchqmDFpdb8fGfwvtjcLfpEMuNbOKbpNl1XIqZpDaw7xBCa9K2uXyF%2BU8Rga36dB779KSGqoXLQXLPJE8kGapHwjN0WRm%2FyxaSwP2ulZfS23qMp2eJVb3wCBiRg%2FmML%2F8iMIGOqUBgVpLlH9WOsPp1gwJNHN7zjFwSkh32fu6Rdwi%2F88NllmFqDn%2FO1cIIFQGWEDnFllJoQbQBwYdET0konZkcvBiK7nhVqZGUnO583AlDSVi9Jq1VRd7bE4UGjkqtBOAr9cJjt98dW3xDpWgXSwR2svQHZYWbRvmKKL0Qjwj05q1jjL7%2BQt8iim9oTirL7TiiKf%2Bp92fombBdBKVHmL8iu%2BKUJbkVvOr&X-Amz-Signature=f573180790c7b3e5a2b86efbf759a49fd47e40000f7c24ec1a9c205899362828&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XIP4HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB%2BCYvFiNz3oCx7h%2BGfYWdRbzF1LtxLFbB2hICsYTb6bAiEA%2B0kAtYBp1ot%2BqztBKYm5BuUuc0h58IYQ2tnoWkkqnooq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMskfNymGDLuf%2F3zWCrcA6BLYyGYsX5T%2BgSiGFRIDipEsb0CnUumTA%2FwoDaM7pp0qS94%2BlfFKJlGilT3f8fzUDEyRvs%2F4BA%2Fc67QWfNigTi5tzJly24ug3mFmDdyJuGLKmqkuB3H9ddw%2FqfXeoFwuNOHdxY9hVTRRVoQ6vw0Md62mnyRjPwt8IrSFzMScGn%2BAEy3g42dnavbD%2Bl2ERN79Vh%2BpFOUcTwF211xl1hnIN3BDPpwnegV4jWEvZzgpsR9yaKQbz7NnSw3ZDoic%2BEtNlO10kUmlRBJVOYOEQTW0rSqvhx4J5uw5unR1cznnMLsjwbAhRhMRqRybU0pAttzI%2Fuice1UJn5grXsF%2Fmua0Z5kj7N6G802q9kSC3we8FzsQS6xXXsgGgi1j5ZBZ3BeYztk7O%2By4PoVCCaPOz%2BJnhrs6XJMlepsWa%2FXV622RvHaAOoB1yVtsieXLGlG1KCD1Q%2BSxxMEW7AjSuaCH%2Fxski3MMpDwGs48befByKPjs8BTdJBQT4AmFyeIkCuhtXlGchqmDFpdb8fGfwvtjcLfpEMuNbOKbpNl1XIqZpDaw7xBCa9K2uXyF%2BU8Rga36dB779KSGqoXLQXLPJE8kGapHwjN0WRm%2FyxaSwP2ulZfS23qMp2eJVb3wCBiRg%2FmML%2F8iMIGOqUBgVpLlH9WOsPp1gwJNHN7zjFwSkh32fu6Rdwi%2F88NllmFqDn%2FO1cIIFQGWEDnFllJoQbQBwYdET0konZkcvBiK7nhVqZGUnO583AlDSVi9Jq1VRd7bE4UGjkqtBOAr9cJjt98dW3xDpWgXSwR2svQHZYWbRvmKKL0Qjwj05q1jjL7%2BQt8iim9oTirL7TiiKf%2Bp92fombBdBKVHmL8iu%2BKUJbkVvOr&X-Amz-Signature=1b1ebc4c36ed2e72a0a32bbce92d1263edc61f0ff2a56d7c3504a69b0724dc59&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XIP4HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB%2BCYvFiNz3oCx7h%2BGfYWdRbzF1LtxLFbB2hICsYTb6bAiEA%2B0kAtYBp1ot%2BqztBKYm5BuUuc0h58IYQ2tnoWkkqnooq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMskfNymGDLuf%2F3zWCrcA6BLYyGYsX5T%2BgSiGFRIDipEsb0CnUumTA%2FwoDaM7pp0qS94%2BlfFKJlGilT3f8fzUDEyRvs%2F4BA%2Fc67QWfNigTi5tzJly24ug3mFmDdyJuGLKmqkuB3H9ddw%2FqfXeoFwuNOHdxY9hVTRRVoQ6vw0Md62mnyRjPwt8IrSFzMScGn%2BAEy3g42dnavbD%2Bl2ERN79Vh%2BpFOUcTwF211xl1hnIN3BDPpwnegV4jWEvZzgpsR9yaKQbz7NnSw3ZDoic%2BEtNlO10kUmlRBJVOYOEQTW0rSqvhx4J5uw5unR1cznnMLsjwbAhRhMRqRybU0pAttzI%2Fuice1UJn5grXsF%2Fmua0Z5kj7N6G802q9kSC3we8FzsQS6xXXsgGgi1j5ZBZ3BeYztk7O%2By4PoVCCaPOz%2BJnhrs6XJMlepsWa%2FXV622RvHaAOoB1yVtsieXLGlG1KCD1Q%2BSxxMEW7AjSuaCH%2Fxski3MMpDwGs48befByKPjs8BTdJBQT4AmFyeIkCuhtXlGchqmDFpdb8fGfwvtjcLfpEMuNbOKbpNl1XIqZpDaw7xBCa9K2uXyF%2BU8Rga36dB779KSGqoXLQXLPJE8kGapHwjN0WRm%2FyxaSwP2ulZfS23qMp2eJVb3wCBiRg%2FmML%2F8iMIGOqUBgVpLlH9WOsPp1gwJNHN7zjFwSkh32fu6Rdwi%2F88NllmFqDn%2FO1cIIFQGWEDnFllJoQbQBwYdET0konZkcvBiK7nhVqZGUnO583AlDSVi9Jq1VRd7bE4UGjkqtBOAr9cJjt98dW3xDpWgXSwR2svQHZYWbRvmKKL0Qjwj05q1jjL7%2BQt8iim9oTirL7TiiKf%2Bp92fombBdBKVHmL8iu%2BKUJbkVvOr&X-Amz-Signature=b68ebd9218a75b1197a3ea4239bb7fb569d507fb02d61cb7eaba69f902bc2645&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XIP4HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB%2BCYvFiNz3oCx7h%2BGfYWdRbzF1LtxLFbB2hICsYTb6bAiEA%2B0kAtYBp1ot%2BqztBKYm5BuUuc0h58IYQ2tnoWkkqnooq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMskfNymGDLuf%2F3zWCrcA6BLYyGYsX5T%2BgSiGFRIDipEsb0CnUumTA%2FwoDaM7pp0qS94%2BlfFKJlGilT3f8fzUDEyRvs%2F4BA%2Fc67QWfNigTi5tzJly24ug3mFmDdyJuGLKmqkuB3H9ddw%2FqfXeoFwuNOHdxY9hVTRRVoQ6vw0Md62mnyRjPwt8IrSFzMScGn%2BAEy3g42dnavbD%2Bl2ERN79Vh%2BpFOUcTwF211xl1hnIN3BDPpwnegV4jWEvZzgpsR9yaKQbz7NnSw3ZDoic%2BEtNlO10kUmlRBJVOYOEQTW0rSqvhx4J5uw5unR1cznnMLsjwbAhRhMRqRybU0pAttzI%2Fuice1UJn5grXsF%2Fmua0Z5kj7N6G802q9kSC3we8FzsQS6xXXsgGgi1j5ZBZ3BeYztk7O%2By4PoVCCaPOz%2BJnhrs6XJMlepsWa%2FXV622RvHaAOoB1yVtsieXLGlG1KCD1Q%2BSxxMEW7AjSuaCH%2Fxski3MMpDwGs48befByKPjs8BTdJBQT4AmFyeIkCuhtXlGchqmDFpdb8fGfwvtjcLfpEMuNbOKbpNl1XIqZpDaw7xBCa9K2uXyF%2BU8Rga36dB779KSGqoXLQXLPJE8kGapHwjN0WRm%2FyxaSwP2ulZfS23qMp2eJVb3wCBiRg%2FmML%2F8iMIGOqUBgVpLlH9WOsPp1gwJNHN7zjFwSkh32fu6Rdwi%2F88NllmFqDn%2FO1cIIFQGWEDnFllJoQbQBwYdET0konZkcvBiK7nhVqZGUnO583AlDSVi9Jq1VRd7bE4UGjkqtBOAr9cJjt98dW3xDpWgXSwR2svQHZYWbRvmKKL0Qjwj05q1jjL7%2BQt8iim9oTirL7TiiKf%2Bp92fombBdBKVHmL8iu%2BKUJbkVvOr&X-Amz-Signature=e27aac18de41a50a922c54e57543f28d5fdf5e00d11e84d2267cbeabedb2aeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XIP4HB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB%2BCYvFiNz3oCx7h%2BGfYWdRbzF1LtxLFbB2hICsYTb6bAiEA%2B0kAtYBp1ot%2BqztBKYm5BuUuc0h58IYQ2tnoWkkqnooq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMskfNymGDLuf%2F3zWCrcA6BLYyGYsX5T%2BgSiGFRIDipEsb0CnUumTA%2FwoDaM7pp0qS94%2BlfFKJlGilT3f8fzUDEyRvs%2F4BA%2Fc67QWfNigTi5tzJly24ug3mFmDdyJuGLKmqkuB3H9ddw%2FqfXeoFwuNOHdxY9hVTRRVoQ6vw0Md62mnyRjPwt8IrSFzMScGn%2BAEy3g42dnavbD%2Bl2ERN79Vh%2BpFOUcTwF211xl1hnIN3BDPpwnegV4jWEvZzgpsR9yaKQbz7NnSw3ZDoic%2BEtNlO10kUmlRBJVOYOEQTW0rSqvhx4J5uw5unR1cznnMLsjwbAhRhMRqRybU0pAttzI%2Fuice1UJn5grXsF%2Fmua0Z5kj7N6G802q9kSC3we8FzsQS6xXXsgGgi1j5ZBZ3BeYztk7O%2By4PoVCCaPOz%2BJnhrs6XJMlepsWa%2FXV622RvHaAOoB1yVtsieXLGlG1KCD1Q%2BSxxMEW7AjSuaCH%2Fxski3MMpDwGs48befByKPjs8BTdJBQT4AmFyeIkCuhtXlGchqmDFpdb8fGfwvtjcLfpEMuNbOKbpNl1XIqZpDaw7xBCa9K2uXyF%2BU8Rga36dB779KSGqoXLQXLPJE8kGapHwjN0WRm%2FyxaSwP2ulZfS23qMp2eJVb3wCBiRg%2FmML%2F8iMIGOqUBgVpLlH9WOsPp1gwJNHN7zjFwSkh32fu6Rdwi%2F88NllmFqDn%2FO1cIIFQGWEDnFllJoQbQBwYdET0konZkcvBiK7nhVqZGUnO583AlDSVi9Jq1VRd7bE4UGjkqtBOAr9cJjt98dW3xDpWgXSwR2svQHZYWbRvmKKL0Qjwj05q1jjL7%2BQt8iim9oTirL7TiiKf%2Bp92fombBdBKVHmL8iu%2BKUJbkVvOr&X-Amz-Signature=7f008fdc78bc142b5a3d43df5be3a47f62d0314e166e195122d4e302e3a6ae51&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
