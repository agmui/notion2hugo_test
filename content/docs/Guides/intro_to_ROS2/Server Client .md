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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2AIFMV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFqp%2BqbgCyKpl8PhngbXYOjA%2FHwQJEr61qrCrY4YL0lWAiBb3clEPMLwp1fCxhNScODZP4%2FXReIvKF8s1v4LHfxC0CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7X7oclUViTh57co1KtwDgHt%2Ba6%2FufhwqAFF8dEQdNB8zuNtaxpDdjWBaqClXsF78iiGjzwxygKtK1sV3qWSWfDM4PJ42hmIayGoPHQcu0b6N3oqlcqk8StEfyHqNNgf79C1e5sAz4g%2FbExLhS%2Bi6rIyZ4RW0VtSoTPKSoJvMqN45RY84kOG715peK%2BlBninD%2BsMLNLsQRIJP2yvEpg%2B1Xt97456v%2F5ixGXqFr%2FIbHnEThyRtYLZAKRWlyr1eVXAM3s8pKSOoOMHuUqyg8Z3KaLQi3%2Fd5vhIR8963HUD4916h9DOKORwUqD%2FICVYx42JmILRWyJ2UuRjKA6pOqWriZZqMya1fBqhMI21jLzHBlYUMXlPJE9wleJk73NBK20u9b0nZJ3I%2Bxnpsgstk5QDjHTHzB0pi4b17FG1yyruVX%2BbkD7CLDHkzXQNbetf3tbLEigXV5T09vHJ2F%2BQQNTtkkp6GJVew5WfmtwYEERU7gjLhIF%2F1%2FkQo9ZOcnUN2oCBjURGcb6uO8ZKTFhdEwaUn%2F2x%2F5tTlIhAyZC9EL4Kg11zqboQM3sU8qN%2FZxo%2BZuNXr5EMmq%2Bw%2FYkNemJRzhw6wiRiSoVfVb22AEsVW7zSXy3XR2AnFx0rO5H%2BvXk8lhpnQXPpJqCSDINSTTK4w6cyqvwY6pgGWF27MsKD6dGVLXA62IZURTU8%2BeFVWvlFC9H8L6Txne7pIwxb8IpoLMt37Vh2BSyOEmEVnJdMcjBN19zsq5D09pHG%2BkIS6uNsSerQOEeRW24uyFYJ7N%2FkGk0Gp8JCnDFZYqWlPtJJk9XO%2BaDU098D9%2BY88vv0PyTeHC%2FEJs9LXU7Ba4qlTZniCYuleAxAXIFc6u%2Ff8DDZcR2lgiT4ZTdI9AGE8hXr%2F&X-Amz-Signature=01f90ebecb4d904bdeec79f7bbba4f08b05c7b4aa10010aede5a2c9e73d65808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2AIFMV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFqp%2BqbgCyKpl8PhngbXYOjA%2FHwQJEr61qrCrY4YL0lWAiBb3clEPMLwp1fCxhNScODZP4%2FXReIvKF8s1v4LHfxC0CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7X7oclUViTh57co1KtwDgHt%2Ba6%2FufhwqAFF8dEQdNB8zuNtaxpDdjWBaqClXsF78iiGjzwxygKtK1sV3qWSWfDM4PJ42hmIayGoPHQcu0b6N3oqlcqk8StEfyHqNNgf79C1e5sAz4g%2FbExLhS%2Bi6rIyZ4RW0VtSoTPKSoJvMqN45RY84kOG715peK%2BlBninD%2BsMLNLsQRIJP2yvEpg%2B1Xt97456v%2F5ixGXqFr%2FIbHnEThyRtYLZAKRWlyr1eVXAM3s8pKSOoOMHuUqyg8Z3KaLQi3%2Fd5vhIR8963HUD4916h9DOKORwUqD%2FICVYx42JmILRWyJ2UuRjKA6pOqWriZZqMya1fBqhMI21jLzHBlYUMXlPJE9wleJk73NBK20u9b0nZJ3I%2Bxnpsgstk5QDjHTHzB0pi4b17FG1yyruVX%2BbkD7CLDHkzXQNbetf3tbLEigXV5T09vHJ2F%2BQQNTtkkp6GJVew5WfmtwYEERU7gjLhIF%2F1%2FkQo9ZOcnUN2oCBjURGcb6uO8ZKTFhdEwaUn%2F2x%2F5tTlIhAyZC9EL4Kg11zqboQM3sU8qN%2FZxo%2BZuNXr5EMmq%2Bw%2FYkNemJRzhw6wiRiSoVfVb22AEsVW7zSXy3XR2AnFx0rO5H%2BvXk8lhpnQXPpJqCSDINSTTK4w6cyqvwY6pgGWF27MsKD6dGVLXA62IZURTU8%2BeFVWvlFC9H8L6Txne7pIwxb8IpoLMt37Vh2BSyOEmEVnJdMcjBN19zsq5D09pHG%2BkIS6uNsSerQOEeRW24uyFYJ7N%2FkGk0Gp8JCnDFZYqWlPtJJk9XO%2BaDU098D9%2BY88vv0PyTeHC%2FEJs9LXU7Ba4qlTZniCYuleAxAXIFc6u%2Ff8DDZcR2lgiT4ZTdI9AGE8hXr%2F&X-Amz-Signature=df74f4aaa68f1dd2c3779fd9598314e99ad5f7cc3a1e28d0eb22c49d4cec72cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2AIFMV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFqp%2BqbgCyKpl8PhngbXYOjA%2FHwQJEr61qrCrY4YL0lWAiBb3clEPMLwp1fCxhNScODZP4%2FXReIvKF8s1v4LHfxC0CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7X7oclUViTh57co1KtwDgHt%2Ba6%2FufhwqAFF8dEQdNB8zuNtaxpDdjWBaqClXsF78iiGjzwxygKtK1sV3qWSWfDM4PJ42hmIayGoPHQcu0b6N3oqlcqk8StEfyHqNNgf79C1e5sAz4g%2FbExLhS%2Bi6rIyZ4RW0VtSoTPKSoJvMqN45RY84kOG715peK%2BlBninD%2BsMLNLsQRIJP2yvEpg%2B1Xt97456v%2F5ixGXqFr%2FIbHnEThyRtYLZAKRWlyr1eVXAM3s8pKSOoOMHuUqyg8Z3KaLQi3%2Fd5vhIR8963HUD4916h9DOKORwUqD%2FICVYx42JmILRWyJ2UuRjKA6pOqWriZZqMya1fBqhMI21jLzHBlYUMXlPJE9wleJk73NBK20u9b0nZJ3I%2Bxnpsgstk5QDjHTHzB0pi4b17FG1yyruVX%2BbkD7CLDHkzXQNbetf3tbLEigXV5T09vHJ2F%2BQQNTtkkp6GJVew5WfmtwYEERU7gjLhIF%2F1%2FkQo9ZOcnUN2oCBjURGcb6uO8ZKTFhdEwaUn%2F2x%2F5tTlIhAyZC9EL4Kg11zqboQM3sU8qN%2FZxo%2BZuNXr5EMmq%2Bw%2FYkNemJRzhw6wiRiSoVfVb22AEsVW7zSXy3XR2AnFx0rO5H%2BvXk8lhpnQXPpJqCSDINSTTK4w6cyqvwY6pgGWF27MsKD6dGVLXA62IZURTU8%2BeFVWvlFC9H8L6Txne7pIwxb8IpoLMt37Vh2BSyOEmEVnJdMcjBN19zsq5D09pHG%2BkIS6uNsSerQOEeRW24uyFYJ7N%2FkGk0Gp8JCnDFZYqWlPtJJk9XO%2BaDU098D9%2BY88vv0PyTeHC%2FEJs9LXU7Ba4qlTZniCYuleAxAXIFc6u%2Ff8DDZcR2lgiT4ZTdI9AGE8hXr%2F&X-Amz-Signature=748b6be1691a2a522ca48d7035f9ffd2f0fcbc65187ba0fdc3062694a8932cab&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2AIFMV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFqp%2BqbgCyKpl8PhngbXYOjA%2FHwQJEr61qrCrY4YL0lWAiBb3clEPMLwp1fCxhNScODZP4%2FXReIvKF8s1v4LHfxC0CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7X7oclUViTh57co1KtwDgHt%2Ba6%2FufhwqAFF8dEQdNB8zuNtaxpDdjWBaqClXsF78iiGjzwxygKtK1sV3qWSWfDM4PJ42hmIayGoPHQcu0b6N3oqlcqk8StEfyHqNNgf79C1e5sAz4g%2FbExLhS%2Bi6rIyZ4RW0VtSoTPKSoJvMqN45RY84kOG715peK%2BlBninD%2BsMLNLsQRIJP2yvEpg%2B1Xt97456v%2F5ixGXqFr%2FIbHnEThyRtYLZAKRWlyr1eVXAM3s8pKSOoOMHuUqyg8Z3KaLQi3%2Fd5vhIR8963HUD4916h9DOKORwUqD%2FICVYx42JmILRWyJ2UuRjKA6pOqWriZZqMya1fBqhMI21jLzHBlYUMXlPJE9wleJk73NBK20u9b0nZJ3I%2Bxnpsgstk5QDjHTHzB0pi4b17FG1yyruVX%2BbkD7CLDHkzXQNbetf3tbLEigXV5T09vHJ2F%2BQQNTtkkp6GJVew5WfmtwYEERU7gjLhIF%2F1%2FkQo9ZOcnUN2oCBjURGcb6uO8ZKTFhdEwaUn%2F2x%2F5tTlIhAyZC9EL4Kg11zqboQM3sU8qN%2FZxo%2BZuNXr5EMmq%2Bw%2FYkNemJRzhw6wiRiSoVfVb22AEsVW7zSXy3XR2AnFx0rO5H%2BvXk8lhpnQXPpJqCSDINSTTK4w6cyqvwY6pgGWF27MsKD6dGVLXA62IZURTU8%2BeFVWvlFC9H8L6Txne7pIwxb8IpoLMt37Vh2BSyOEmEVnJdMcjBN19zsq5D09pHG%2BkIS6uNsSerQOEeRW24uyFYJ7N%2FkGk0Gp8JCnDFZYqWlPtJJk9XO%2BaDU098D9%2BY88vv0PyTeHC%2FEJs9LXU7Ba4qlTZniCYuleAxAXIFc6u%2Ff8DDZcR2lgiT4ZTdI9AGE8hXr%2F&X-Amz-Signature=a44a83084cd26f4c659bf5f3d045094d0b173dba49d5186e91442094c20d1971&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2AIFMV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFqp%2BqbgCyKpl8PhngbXYOjA%2FHwQJEr61qrCrY4YL0lWAiBb3clEPMLwp1fCxhNScODZP4%2FXReIvKF8s1v4LHfxC0CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7X7oclUViTh57co1KtwDgHt%2Ba6%2FufhwqAFF8dEQdNB8zuNtaxpDdjWBaqClXsF78iiGjzwxygKtK1sV3qWSWfDM4PJ42hmIayGoPHQcu0b6N3oqlcqk8StEfyHqNNgf79C1e5sAz4g%2FbExLhS%2Bi6rIyZ4RW0VtSoTPKSoJvMqN45RY84kOG715peK%2BlBninD%2BsMLNLsQRIJP2yvEpg%2B1Xt97456v%2F5ixGXqFr%2FIbHnEThyRtYLZAKRWlyr1eVXAM3s8pKSOoOMHuUqyg8Z3KaLQi3%2Fd5vhIR8963HUD4916h9DOKORwUqD%2FICVYx42JmILRWyJ2UuRjKA6pOqWriZZqMya1fBqhMI21jLzHBlYUMXlPJE9wleJk73NBK20u9b0nZJ3I%2Bxnpsgstk5QDjHTHzB0pi4b17FG1yyruVX%2BbkD7CLDHkzXQNbetf3tbLEigXV5T09vHJ2F%2BQQNTtkkp6GJVew5WfmtwYEERU7gjLhIF%2F1%2FkQo9ZOcnUN2oCBjURGcb6uO8ZKTFhdEwaUn%2F2x%2F5tTlIhAyZC9EL4Kg11zqboQM3sU8qN%2FZxo%2BZuNXr5EMmq%2Bw%2FYkNemJRzhw6wiRiSoVfVb22AEsVW7zSXy3XR2AnFx0rO5H%2BvXk8lhpnQXPpJqCSDINSTTK4w6cyqvwY6pgGWF27MsKD6dGVLXA62IZURTU8%2BeFVWvlFC9H8L6Txne7pIwxb8IpoLMt37Vh2BSyOEmEVnJdMcjBN19zsq5D09pHG%2BkIS6uNsSerQOEeRW24uyFYJ7N%2FkGk0Gp8JCnDFZYqWlPtJJk9XO%2BaDU098D9%2BY88vv0PyTeHC%2FEJs9LXU7Ba4qlTZniCYuleAxAXIFc6u%2Ff8DDZcR2lgiT4ZTdI9AGE8hXr%2F&X-Amz-Signature=b0745c0d6a6469ed904fc043cae6cf17061f4a9bbf2926a24041086e86a0c475&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
