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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33ZYQPL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICvn3yzngldFhxMbyzoC2%2FeDNZYC3ekcuK7ZuoTLWsCfAiAX%2BGDRBmWZVth%2FNPO9V8WJ4yZFYiH%2BbylphBJl7BUU6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXR6QoZWPN%2BbtNTnKtwDydBB7XtbcUHvYzHV3JEOiPgDeeED09M6WY%2FAzMjHOjOnZvN4cnmhh8hwsnHmJhZvrSc3bfS%2FTBjgoNKOJrkD5PMEjnCDkiHNKEMErRnKiBn51VLB5dDxKeRG4HjwJUxRU8b%2FtXWxP8Me441luaSL%2B9OWauTqktPs8XWnAIzPjURFFE2VBGpIHX%2FyKco%2Bu057dWM2cXcjIfjEQ8YN9w5JoZacRwLPGn50Z1N%2BEtRFjW2nm9n3FCzUZXVti3AnQTBCJ8YaMrcuSOQhWm4NpifjMbrEwAnzg66Gg5LyBmqxV5oas04urpM13aah2p4EmlgbhTheBTVXeCTzvf8BK%2B4rpGfQ8ZcSjCyKFbkO2I7%2BP1Q2t9Tvbcr7J0v3ngrrbd%2BQVjanBzOFtuTjNnMMWC%2BycElOPKsS14xAkd%2B69nDPPwVK0WdrFo53yOZErE4Uhq1mjq8TPG15MZbIGvepV4ObMafaC6kDXJ54sDlyEU5Zla6%2Bym%2BVYSuWP4%2FEnUy0S%2BLfbmIxTcYw%2BXEyqOJPmjVOaGfa7mUsK7zVq8AUht09Wb0ydPBFd8uLOeSkYHnWJt1MTawybGC%2FDfB6Bqi%2Fy0QEhxnrS%2FZaWhEFqDEotYY0DEGKTN7sgXzN84s30Vkw2JvEvgY6pgHqdQjEmxdEzd8Rod3WQE46sbbKNlRrmWHxpVEZwNoIhQ5Xf8ZSf3JcaRGXzy1xDA97QlG91cxrm%2F964nSp9R%2FbgDgoBQ6QntD%2F4hkkJx4POneCM5%2BYjx4c%2BGL1nHCg5uRahqMlPT4J5woePv5OHmlTIoLFuiKQ56mbeAQ1aPNYwpgvmPNUXGE9JWNa7vOWiC0lnRjHcQzhKaxVZHVLvc1lDsrU2EuT&X-Amz-Signature=90670727960245b64ce7eb226e70af81428a4679414733501aaf83a1ca497f20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33ZYQPL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICvn3yzngldFhxMbyzoC2%2FeDNZYC3ekcuK7ZuoTLWsCfAiAX%2BGDRBmWZVth%2FNPO9V8WJ4yZFYiH%2BbylphBJl7BUU6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXR6QoZWPN%2BbtNTnKtwDydBB7XtbcUHvYzHV3JEOiPgDeeED09M6WY%2FAzMjHOjOnZvN4cnmhh8hwsnHmJhZvrSc3bfS%2FTBjgoNKOJrkD5PMEjnCDkiHNKEMErRnKiBn51VLB5dDxKeRG4HjwJUxRU8b%2FtXWxP8Me441luaSL%2B9OWauTqktPs8XWnAIzPjURFFE2VBGpIHX%2FyKco%2Bu057dWM2cXcjIfjEQ8YN9w5JoZacRwLPGn50Z1N%2BEtRFjW2nm9n3FCzUZXVti3AnQTBCJ8YaMrcuSOQhWm4NpifjMbrEwAnzg66Gg5LyBmqxV5oas04urpM13aah2p4EmlgbhTheBTVXeCTzvf8BK%2B4rpGfQ8ZcSjCyKFbkO2I7%2BP1Q2t9Tvbcr7J0v3ngrrbd%2BQVjanBzOFtuTjNnMMWC%2BycElOPKsS14xAkd%2B69nDPPwVK0WdrFo53yOZErE4Uhq1mjq8TPG15MZbIGvepV4ObMafaC6kDXJ54sDlyEU5Zla6%2Bym%2BVYSuWP4%2FEnUy0S%2BLfbmIxTcYw%2BXEyqOJPmjVOaGfa7mUsK7zVq8AUht09Wb0ydPBFd8uLOeSkYHnWJt1MTawybGC%2FDfB6Bqi%2Fy0QEhxnrS%2FZaWhEFqDEotYY0DEGKTN7sgXzN84s30Vkw2JvEvgY6pgHqdQjEmxdEzd8Rod3WQE46sbbKNlRrmWHxpVEZwNoIhQ5Xf8ZSf3JcaRGXzy1xDA97QlG91cxrm%2F964nSp9R%2FbgDgoBQ6QntD%2F4hkkJx4POneCM5%2BYjx4c%2BGL1nHCg5uRahqMlPT4J5woePv5OHmlTIoLFuiKQ56mbeAQ1aPNYwpgvmPNUXGE9JWNa7vOWiC0lnRjHcQzhKaxVZHVLvc1lDsrU2EuT&X-Amz-Signature=35fac0480965c94120efd6ec393abbc024332f1d268d1ddebb4a7b06af724eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33ZYQPL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICvn3yzngldFhxMbyzoC2%2FeDNZYC3ekcuK7ZuoTLWsCfAiAX%2BGDRBmWZVth%2FNPO9V8WJ4yZFYiH%2BbylphBJl7BUU6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXR6QoZWPN%2BbtNTnKtwDydBB7XtbcUHvYzHV3JEOiPgDeeED09M6WY%2FAzMjHOjOnZvN4cnmhh8hwsnHmJhZvrSc3bfS%2FTBjgoNKOJrkD5PMEjnCDkiHNKEMErRnKiBn51VLB5dDxKeRG4HjwJUxRU8b%2FtXWxP8Me441luaSL%2B9OWauTqktPs8XWnAIzPjURFFE2VBGpIHX%2FyKco%2Bu057dWM2cXcjIfjEQ8YN9w5JoZacRwLPGn50Z1N%2BEtRFjW2nm9n3FCzUZXVti3AnQTBCJ8YaMrcuSOQhWm4NpifjMbrEwAnzg66Gg5LyBmqxV5oas04urpM13aah2p4EmlgbhTheBTVXeCTzvf8BK%2B4rpGfQ8ZcSjCyKFbkO2I7%2BP1Q2t9Tvbcr7J0v3ngrrbd%2BQVjanBzOFtuTjNnMMWC%2BycElOPKsS14xAkd%2B69nDPPwVK0WdrFo53yOZErE4Uhq1mjq8TPG15MZbIGvepV4ObMafaC6kDXJ54sDlyEU5Zla6%2Bym%2BVYSuWP4%2FEnUy0S%2BLfbmIxTcYw%2BXEyqOJPmjVOaGfa7mUsK7zVq8AUht09Wb0ydPBFd8uLOeSkYHnWJt1MTawybGC%2FDfB6Bqi%2Fy0QEhxnrS%2FZaWhEFqDEotYY0DEGKTN7sgXzN84s30Vkw2JvEvgY6pgHqdQjEmxdEzd8Rod3WQE46sbbKNlRrmWHxpVEZwNoIhQ5Xf8ZSf3JcaRGXzy1xDA97QlG91cxrm%2F964nSp9R%2FbgDgoBQ6QntD%2F4hkkJx4POneCM5%2BYjx4c%2BGL1nHCg5uRahqMlPT4J5woePv5OHmlTIoLFuiKQ56mbeAQ1aPNYwpgvmPNUXGE9JWNa7vOWiC0lnRjHcQzhKaxVZHVLvc1lDsrU2EuT&X-Amz-Signature=308d6abb07d6039047edc2f7803dcbc35c51214423cfd03c4e59a5a0a12c1867&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33ZYQPL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICvn3yzngldFhxMbyzoC2%2FeDNZYC3ekcuK7ZuoTLWsCfAiAX%2BGDRBmWZVth%2FNPO9V8WJ4yZFYiH%2BbylphBJl7BUU6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXR6QoZWPN%2BbtNTnKtwDydBB7XtbcUHvYzHV3JEOiPgDeeED09M6WY%2FAzMjHOjOnZvN4cnmhh8hwsnHmJhZvrSc3bfS%2FTBjgoNKOJrkD5PMEjnCDkiHNKEMErRnKiBn51VLB5dDxKeRG4HjwJUxRU8b%2FtXWxP8Me441luaSL%2B9OWauTqktPs8XWnAIzPjURFFE2VBGpIHX%2FyKco%2Bu057dWM2cXcjIfjEQ8YN9w5JoZacRwLPGn50Z1N%2BEtRFjW2nm9n3FCzUZXVti3AnQTBCJ8YaMrcuSOQhWm4NpifjMbrEwAnzg66Gg5LyBmqxV5oas04urpM13aah2p4EmlgbhTheBTVXeCTzvf8BK%2B4rpGfQ8ZcSjCyKFbkO2I7%2BP1Q2t9Tvbcr7J0v3ngrrbd%2BQVjanBzOFtuTjNnMMWC%2BycElOPKsS14xAkd%2B69nDPPwVK0WdrFo53yOZErE4Uhq1mjq8TPG15MZbIGvepV4ObMafaC6kDXJ54sDlyEU5Zla6%2Bym%2BVYSuWP4%2FEnUy0S%2BLfbmIxTcYw%2BXEyqOJPmjVOaGfa7mUsK7zVq8AUht09Wb0ydPBFd8uLOeSkYHnWJt1MTawybGC%2FDfB6Bqi%2Fy0QEhxnrS%2FZaWhEFqDEotYY0DEGKTN7sgXzN84s30Vkw2JvEvgY6pgHqdQjEmxdEzd8Rod3WQE46sbbKNlRrmWHxpVEZwNoIhQ5Xf8ZSf3JcaRGXzy1xDA97QlG91cxrm%2F964nSp9R%2FbgDgoBQ6QntD%2F4hkkJx4POneCM5%2BYjx4c%2BGL1nHCg5uRahqMlPT4J5woePv5OHmlTIoLFuiKQ56mbeAQ1aPNYwpgvmPNUXGE9JWNa7vOWiC0lnRjHcQzhKaxVZHVLvc1lDsrU2EuT&X-Amz-Signature=081a53b2ad157c3ad9dd6ae37ff5e7909de85f0d6c58af9184c5a867879e3db5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33ZYQPL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICvn3yzngldFhxMbyzoC2%2FeDNZYC3ekcuK7ZuoTLWsCfAiAX%2BGDRBmWZVth%2FNPO9V8WJ4yZFYiH%2BbylphBJl7BUU6SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXR6QoZWPN%2BbtNTnKtwDydBB7XtbcUHvYzHV3JEOiPgDeeED09M6WY%2FAzMjHOjOnZvN4cnmhh8hwsnHmJhZvrSc3bfS%2FTBjgoNKOJrkD5PMEjnCDkiHNKEMErRnKiBn51VLB5dDxKeRG4HjwJUxRU8b%2FtXWxP8Me441luaSL%2B9OWauTqktPs8XWnAIzPjURFFE2VBGpIHX%2FyKco%2Bu057dWM2cXcjIfjEQ8YN9w5JoZacRwLPGn50Z1N%2BEtRFjW2nm9n3FCzUZXVti3AnQTBCJ8YaMrcuSOQhWm4NpifjMbrEwAnzg66Gg5LyBmqxV5oas04urpM13aah2p4EmlgbhTheBTVXeCTzvf8BK%2B4rpGfQ8ZcSjCyKFbkO2I7%2BP1Q2t9Tvbcr7J0v3ngrrbd%2BQVjanBzOFtuTjNnMMWC%2BycElOPKsS14xAkd%2B69nDPPwVK0WdrFo53yOZErE4Uhq1mjq8TPG15MZbIGvepV4ObMafaC6kDXJ54sDlyEU5Zla6%2Bym%2BVYSuWP4%2FEnUy0S%2BLfbmIxTcYw%2BXEyqOJPmjVOaGfa7mUsK7zVq8AUht09Wb0ydPBFd8uLOeSkYHnWJt1MTawybGC%2FDfB6Bqi%2Fy0QEhxnrS%2FZaWhEFqDEotYY0DEGKTN7sgXzN84s30Vkw2JvEvgY6pgHqdQjEmxdEzd8Rod3WQE46sbbKNlRrmWHxpVEZwNoIhQ5Xf8ZSf3JcaRGXzy1xDA97QlG91cxrm%2F964nSp9R%2FbgDgoBQ6QntD%2F4hkkJx4POneCM5%2BYjx4c%2BGL1nHCg5uRahqMlPT4J5woePv5OHmlTIoLFuiKQ56mbeAQ1aPNYwpgvmPNUXGE9JWNa7vOWiC0lnRjHcQzhKaxVZHVLvc1lDsrU2EuT&X-Amz-Signature=65689f8fe845352cb5333edf89896bd883f0550acd0c31ef8cbe697c04844001&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
