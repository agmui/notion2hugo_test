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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTFUWEX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs57afbnRo7%2FhSTDuGD6kjcIyGH6jx8wTsjMZRiJEbPAIhALxU6aLIkBXsS3CLJSUd9%2BywN1qd6BUDWEvo9fA3NlE7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaBqcVbRHF8V%2FqHNQq3AM2O10UfXoaP2rGAe48c3DDcguA%2FbbbcHF37dL0eIAkYhIsRuIpLN9HySZI%2FtzVtIyKIc36pWlU106%2F9ZJ6Udu7lM8SmbjFvQpuzIyGd8W7HDOhoRfjE921kLy2NG3NI1Bol3IldHknMds%2Fu0L7jKvHyDrzpA7waVNwAqXwk7Qj0a2YUD3LDt%2FTQRBWf91eNi51bQ1f4%2Bg%2BxCPgXbtejxH%2FlVwzhef9lKqr0sQzzHUcTTLmE6wEG4bzMqKcJseEmoqKMg63%2B326Mr186ihAqMVjTl%2BBx9bM%2FzdVJcqJ8HVNnpU5IeSawepeiIVU3kbtvCHbRtXrppaZVNCROxezp2RDlytwhLSNlp9WRbbnFl1Ys2Bn2NdiYwNVp11QKjXPGtgNgAu8MR%2FVZUZ%2F9tuZprty73DqwYxvPwlVrYJRFfErJQDlNczUW%2B%2BwvQlhdpn31eA0OuB5zvfyCDYW7s%2BHTuuzESUvXWaI7RTcBI6%2F7HQLpomRqCkU4MYMCtm%2F8wiR4NmHlbXf8%2Bwp9mOrvuuHATQeHe9rrCw0Yq3nTDoa5yQpkv9pY4CX8Tf0HaQBZDmq%2FKWgf6q%2Fj6DbxG4o9IT%2Bq5TdBlaVodZCTmTOyqsoaRR9WZyIN8vB3ZPlkR3jHjCw1dLCBjqkAUpIwkfdAysram%2BeW2%2BppdVQZN7UsMRZ%2B2UJ6Vyw%2FaR3eeXzOfHBHTYQKf%2F14Ml2QnpEfX1OkoqQHvtIzk%2FIG1%2FNgyOlUJrv56lKquds7FrGuyQQ1XbaWePdGD%2FD%2BTl4t%2B5Tjz%2FnfsPSuO7D8LpK6WxxGTvxllgXAsywGlMP1rrHsbGFqyNCgJ%2FOjm8c1WOthmNT7kr7LIhrkugGOPQU4iOLd3n0&X-Amz-Signature=5532c38e94c50263813535ce876ece3e591fd58f3d579bd151a519fa1f3cd204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTFUWEX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs57afbnRo7%2FhSTDuGD6kjcIyGH6jx8wTsjMZRiJEbPAIhALxU6aLIkBXsS3CLJSUd9%2BywN1qd6BUDWEvo9fA3NlE7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaBqcVbRHF8V%2FqHNQq3AM2O10UfXoaP2rGAe48c3DDcguA%2FbbbcHF37dL0eIAkYhIsRuIpLN9HySZI%2FtzVtIyKIc36pWlU106%2F9ZJ6Udu7lM8SmbjFvQpuzIyGd8W7HDOhoRfjE921kLy2NG3NI1Bol3IldHknMds%2Fu0L7jKvHyDrzpA7waVNwAqXwk7Qj0a2YUD3LDt%2FTQRBWf91eNi51bQ1f4%2Bg%2BxCPgXbtejxH%2FlVwzhef9lKqr0sQzzHUcTTLmE6wEG4bzMqKcJseEmoqKMg63%2B326Mr186ihAqMVjTl%2BBx9bM%2FzdVJcqJ8HVNnpU5IeSawepeiIVU3kbtvCHbRtXrppaZVNCROxezp2RDlytwhLSNlp9WRbbnFl1Ys2Bn2NdiYwNVp11QKjXPGtgNgAu8MR%2FVZUZ%2F9tuZprty73DqwYxvPwlVrYJRFfErJQDlNczUW%2B%2BwvQlhdpn31eA0OuB5zvfyCDYW7s%2BHTuuzESUvXWaI7RTcBI6%2F7HQLpomRqCkU4MYMCtm%2F8wiR4NmHlbXf8%2Bwp9mOrvuuHATQeHe9rrCw0Yq3nTDoa5yQpkv9pY4CX8Tf0HaQBZDmq%2FKWgf6q%2Fj6DbxG4o9IT%2Bq5TdBlaVodZCTmTOyqsoaRR9WZyIN8vB3ZPlkR3jHjCw1dLCBjqkAUpIwkfdAysram%2BeW2%2BppdVQZN7UsMRZ%2B2UJ6Vyw%2FaR3eeXzOfHBHTYQKf%2F14Ml2QnpEfX1OkoqQHvtIzk%2FIG1%2FNgyOlUJrv56lKquds7FrGuyQQ1XbaWePdGD%2FD%2BTl4t%2B5Tjz%2FnfsPSuO7D8LpK6WxxGTvxllgXAsywGlMP1rrHsbGFqyNCgJ%2FOjm8c1WOthmNT7kr7LIhrkugGOPQU4iOLd3n0&X-Amz-Signature=80e511bc08e1b1978fdcad846cc320b5b33e3fa8ef1a69aff05578d98f683618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTFUWEX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs57afbnRo7%2FhSTDuGD6kjcIyGH6jx8wTsjMZRiJEbPAIhALxU6aLIkBXsS3CLJSUd9%2BywN1qd6BUDWEvo9fA3NlE7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaBqcVbRHF8V%2FqHNQq3AM2O10UfXoaP2rGAe48c3DDcguA%2FbbbcHF37dL0eIAkYhIsRuIpLN9HySZI%2FtzVtIyKIc36pWlU106%2F9ZJ6Udu7lM8SmbjFvQpuzIyGd8W7HDOhoRfjE921kLy2NG3NI1Bol3IldHknMds%2Fu0L7jKvHyDrzpA7waVNwAqXwk7Qj0a2YUD3LDt%2FTQRBWf91eNi51bQ1f4%2Bg%2BxCPgXbtejxH%2FlVwzhef9lKqr0sQzzHUcTTLmE6wEG4bzMqKcJseEmoqKMg63%2B326Mr186ihAqMVjTl%2BBx9bM%2FzdVJcqJ8HVNnpU5IeSawepeiIVU3kbtvCHbRtXrppaZVNCROxezp2RDlytwhLSNlp9WRbbnFl1Ys2Bn2NdiYwNVp11QKjXPGtgNgAu8MR%2FVZUZ%2F9tuZprty73DqwYxvPwlVrYJRFfErJQDlNczUW%2B%2BwvQlhdpn31eA0OuB5zvfyCDYW7s%2BHTuuzESUvXWaI7RTcBI6%2F7HQLpomRqCkU4MYMCtm%2F8wiR4NmHlbXf8%2Bwp9mOrvuuHATQeHe9rrCw0Yq3nTDoa5yQpkv9pY4CX8Tf0HaQBZDmq%2FKWgf6q%2Fj6DbxG4o9IT%2Bq5TdBlaVodZCTmTOyqsoaRR9WZyIN8vB3ZPlkR3jHjCw1dLCBjqkAUpIwkfdAysram%2BeW2%2BppdVQZN7UsMRZ%2B2UJ6Vyw%2FaR3eeXzOfHBHTYQKf%2F14Ml2QnpEfX1OkoqQHvtIzk%2FIG1%2FNgyOlUJrv56lKquds7FrGuyQQ1XbaWePdGD%2FD%2BTl4t%2B5Tjz%2FnfsPSuO7D8LpK6WxxGTvxllgXAsywGlMP1rrHsbGFqyNCgJ%2FOjm8c1WOthmNT7kr7LIhrkugGOPQU4iOLd3n0&X-Amz-Signature=80715b19fa951948fd3ce754a3cff09347f34e4e8ff8c166ea14ab7e38f77b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTFUWEX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs57afbnRo7%2FhSTDuGD6kjcIyGH6jx8wTsjMZRiJEbPAIhALxU6aLIkBXsS3CLJSUd9%2BywN1qd6BUDWEvo9fA3NlE7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaBqcVbRHF8V%2FqHNQq3AM2O10UfXoaP2rGAe48c3DDcguA%2FbbbcHF37dL0eIAkYhIsRuIpLN9HySZI%2FtzVtIyKIc36pWlU106%2F9ZJ6Udu7lM8SmbjFvQpuzIyGd8W7HDOhoRfjE921kLy2NG3NI1Bol3IldHknMds%2Fu0L7jKvHyDrzpA7waVNwAqXwk7Qj0a2YUD3LDt%2FTQRBWf91eNi51bQ1f4%2Bg%2BxCPgXbtejxH%2FlVwzhef9lKqr0sQzzHUcTTLmE6wEG4bzMqKcJseEmoqKMg63%2B326Mr186ihAqMVjTl%2BBx9bM%2FzdVJcqJ8HVNnpU5IeSawepeiIVU3kbtvCHbRtXrppaZVNCROxezp2RDlytwhLSNlp9WRbbnFl1Ys2Bn2NdiYwNVp11QKjXPGtgNgAu8MR%2FVZUZ%2F9tuZprty73DqwYxvPwlVrYJRFfErJQDlNczUW%2B%2BwvQlhdpn31eA0OuB5zvfyCDYW7s%2BHTuuzESUvXWaI7RTcBI6%2F7HQLpomRqCkU4MYMCtm%2F8wiR4NmHlbXf8%2Bwp9mOrvuuHATQeHe9rrCw0Yq3nTDoa5yQpkv9pY4CX8Tf0HaQBZDmq%2FKWgf6q%2Fj6DbxG4o9IT%2Bq5TdBlaVodZCTmTOyqsoaRR9WZyIN8vB3ZPlkR3jHjCw1dLCBjqkAUpIwkfdAysram%2BeW2%2BppdVQZN7UsMRZ%2B2UJ6Vyw%2FaR3eeXzOfHBHTYQKf%2F14Ml2QnpEfX1OkoqQHvtIzk%2FIG1%2FNgyOlUJrv56lKquds7FrGuyQQ1XbaWePdGD%2FD%2BTl4t%2B5Tjz%2FnfsPSuO7D8LpK6WxxGTvxllgXAsywGlMP1rrHsbGFqyNCgJ%2FOjm8c1WOthmNT7kr7LIhrkugGOPQU4iOLd3n0&X-Amz-Signature=dc3bed88507ba902b9a8ab8b3a9cf42f38873d7786bb81a8623be59045b458c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTFUWEX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs57afbnRo7%2FhSTDuGD6kjcIyGH6jx8wTsjMZRiJEbPAIhALxU6aLIkBXsS3CLJSUd9%2BywN1qd6BUDWEvo9fA3NlE7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaBqcVbRHF8V%2FqHNQq3AM2O10UfXoaP2rGAe48c3DDcguA%2FbbbcHF37dL0eIAkYhIsRuIpLN9HySZI%2FtzVtIyKIc36pWlU106%2F9ZJ6Udu7lM8SmbjFvQpuzIyGd8W7HDOhoRfjE921kLy2NG3NI1Bol3IldHknMds%2Fu0L7jKvHyDrzpA7waVNwAqXwk7Qj0a2YUD3LDt%2FTQRBWf91eNi51bQ1f4%2Bg%2BxCPgXbtejxH%2FlVwzhef9lKqr0sQzzHUcTTLmE6wEG4bzMqKcJseEmoqKMg63%2B326Mr186ihAqMVjTl%2BBx9bM%2FzdVJcqJ8HVNnpU5IeSawepeiIVU3kbtvCHbRtXrppaZVNCROxezp2RDlytwhLSNlp9WRbbnFl1Ys2Bn2NdiYwNVp11QKjXPGtgNgAu8MR%2FVZUZ%2F9tuZprty73DqwYxvPwlVrYJRFfErJQDlNczUW%2B%2BwvQlhdpn31eA0OuB5zvfyCDYW7s%2BHTuuzESUvXWaI7RTcBI6%2F7HQLpomRqCkU4MYMCtm%2F8wiR4NmHlbXf8%2Bwp9mOrvuuHATQeHe9rrCw0Yq3nTDoa5yQpkv9pY4CX8Tf0HaQBZDmq%2FKWgf6q%2Fj6DbxG4o9IT%2Bq5TdBlaVodZCTmTOyqsoaRR9WZyIN8vB3ZPlkR3jHjCw1dLCBjqkAUpIwkfdAysram%2BeW2%2BppdVQZN7UsMRZ%2B2UJ6Vyw%2FaR3eeXzOfHBHTYQKf%2F14Ml2QnpEfX1OkoqQHvtIzk%2FIG1%2FNgyOlUJrv56lKquds7FrGuyQQ1XbaWePdGD%2FD%2BTl4t%2B5Tjz%2FnfsPSuO7D8LpK6WxxGTvxllgXAsywGlMP1rrHsbGFqyNCgJ%2FOjm8c1WOthmNT7kr7LIhrkugGOPQU4iOLd3n0&X-Amz-Signature=5cda25921f0a97de289f113e766980f3ddf53263584fc56248b54081beb7aa3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
