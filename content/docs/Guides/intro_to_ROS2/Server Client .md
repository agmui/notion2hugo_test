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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKYZNH5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgkqk%2B8R74R8v%2FV3rrSOCjvxqqHRE3BaQc6pCD03J4QIhAPV5En3BRX3PJunp%2F0Dl3AtUyMbvEwjgDnBf71TK77OvKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmC89jN0ulwTAMoXUq3AO8gFqpDzncsgQ3nGwwVmMecbB8lOWGNUGXw1fYTSZfC3cVKkgQgfAlGm%2FXF6P988XkHIT%2BbgZzF8iGgB2tf1TvgR56%2BFOQdQrgc5J%2BzATjhclx30GSbl8ZeFd9G%2BmKqPQRUf25EDkw6j6GvzqbvXakqdAxHu3qas%2FsiHjOEp3m5ZF57k2%2FRJElTPj8Rq3JihoHob1Lt5wK19lG%2FOB2e104UW9F3SiSqtKyn3na%2B4ogZOTrohnhRVM%2FQ4jWLJUP2ygKvqRWCH6R655G62YK8Tfw9CTYx%2F8klOkpqRn7abdZHsZbJVY2cp%2FDM69dAdGr8X7n%2F55scOhbWg35CB7tTlBOuoCLoZd9TZ1zm0Ymt9yQk75v%2BqdgES3zSuSMTW9DVgN0qT20JrsaaDWgXUvqbmUlQ6N4Wzo9oN1Szq8Bj1vSs8mNjpF3%2Bg%2B4HpOWt85iHPq%2FChp9oraPeGJIRRI6NVSref9IiOdDtJjoM0ghsQKBq%2BwsAPDUP%2FAvqYr%2FXNc4IRvFhs5ci%2Bg8zVsgb9SFaXdlnGPHVXRZ8CxO0x%2FpUynW0NYV6mPDX%2Fn8QGc7VsB%2FM%2FEVmaQmLe6AY%2FB9JWKyhRHz0rs%2Bjefa4aggtDNFOSwcqKPt9WjTcp9RLAiOpjCWnKW9BjqkAZpVYSb3iJrUIQ%2FjFbiT3qhrEO4EK9B9LXefKEjRX74c2WtrPOV07IkVTGdaR4W7a3otvdo0rx73VhplciMQva8zFWcWCIiYTSfDjnqwjf2%2FZuBplt1vh%2BbQGfocoEMEZAoZsU%2B%2BvM%2FlYCQ9xED%2F9vtajPrwWL8UXYwkmfI%2BiNtE0kGeFhZN8JDOXx6t7AU9hYP2IXzMVpY7gZbeF7RU85nV2%2FwD&X-Amz-Signature=c3b59c34458faff4addafaeb6b76fce40d73462342aa3f2385288afe87207ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKYZNH5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgkqk%2B8R74R8v%2FV3rrSOCjvxqqHRE3BaQc6pCD03J4QIhAPV5En3BRX3PJunp%2F0Dl3AtUyMbvEwjgDnBf71TK77OvKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmC89jN0ulwTAMoXUq3AO8gFqpDzncsgQ3nGwwVmMecbB8lOWGNUGXw1fYTSZfC3cVKkgQgfAlGm%2FXF6P988XkHIT%2BbgZzF8iGgB2tf1TvgR56%2BFOQdQrgc5J%2BzATjhclx30GSbl8ZeFd9G%2BmKqPQRUf25EDkw6j6GvzqbvXakqdAxHu3qas%2FsiHjOEp3m5ZF57k2%2FRJElTPj8Rq3JihoHob1Lt5wK19lG%2FOB2e104UW9F3SiSqtKyn3na%2B4ogZOTrohnhRVM%2FQ4jWLJUP2ygKvqRWCH6R655G62YK8Tfw9CTYx%2F8klOkpqRn7abdZHsZbJVY2cp%2FDM69dAdGr8X7n%2F55scOhbWg35CB7tTlBOuoCLoZd9TZ1zm0Ymt9yQk75v%2BqdgES3zSuSMTW9DVgN0qT20JrsaaDWgXUvqbmUlQ6N4Wzo9oN1Szq8Bj1vSs8mNjpF3%2Bg%2B4HpOWt85iHPq%2FChp9oraPeGJIRRI6NVSref9IiOdDtJjoM0ghsQKBq%2BwsAPDUP%2FAvqYr%2FXNc4IRvFhs5ci%2Bg8zVsgb9SFaXdlnGPHVXRZ8CxO0x%2FpUynW0NYV6mPDX%2Fn8QGc7VsB%2FM%2FEVmaQmLe6AY%2FB9JWKyhRHz0rs%2Bjefa4aggtDNFOSwcqKPt9WjTcp9RLAiOpjCWnKW9BjqkAZpVYSb3iJrUIQ%2FjFbiT3qhrEO4EK9B9LXefKEjRX74c2WtrPOV07IkVTGdaR4W7a3otvdo0rx73VhplciMQva8zFWcWCIiYTSfDjnqwjf2%2FZuBplt1vh%2BbQGfocoEMEZAoZsU%2B%2BvM%2FlYCQ9xED%2F9vtajPrwWL8UXYwkmfI%2BiNtE0kGeFhZN8JDOXx6t7AU9hYP2IXzMVpY7gZbeF7RU85nV2%2FwD&X-Amz-Signature=a94a641b4d1378168b7bbee6d691131cdd0c7cff6f654b33952ede1f4d4c1f36&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKYZNH5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgkqk%2B8R74R8v%2FV3rrSOCjvxqqHRE3BaQc6pCD03J4QIhAPV5En3BRX3PJunp%2F0Dl3AtUyMbvEwjgDnBf71TK77OvKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmC89jN0ulwTAMoXUq3AO8gFqpDzncsgQ3nGwwVmMecbB8lOWGNUGXw1fYTSZfC3cVKkgQgfAlGm%2FXF6P988XkHIT%2BbgZzF8iGgB2tf1TvgR56%2BFOQdQrgc5J%2BzATjhclx30GSbl8ZeFd9G%2BmKqPQRUf25EDkw6j6GvzqbvXakqdAxHu3qas%2FsiHjOEp3m5ZF57k2%2FRJElTPj8Rq3JihoHob1Lt5wK19lG%2FOB2e104UW9F3SiSqtKyn3na%2B4ogZOTrohnhRVM%2FQ4jWLJUP2ygKvqRWCH6R655G62YK8Tfw9CTYx%2F8klOkpqRn7abdZHsZbJVY2cp%2FDM69dAdGr8X7n%2F55scOhbWg35CB7tTlBOuoCLoZd9TZ1zm0Ymt9yQk75v%2BqdgES3zSuSMTW9DVgN0qT20JrsaaDWgXUvqbmUlQ6N4Wzo9oN1Szq8Bj1vSs8mNjpF3%2Bg%2B4HpOWt85iHPq%2FChp9oraPeGJIRRI6NVSref9IiOdDtJjoM0ghsQKBq%2BwsAPDUP%2FAvqYr%2FXNc4IRvFhs5ci%2Bg8zVsgb9SFaXdlnGPHVXRZ8CxO0x%2FpUynW0NYV6mPDX%2Fn8QGc7VsB%2FM%2FEVmaQmLe6AY%2FB9JWKyhRHz0rs%2Bjefa4aggtDNFOSwcqKPt9WjTcp9RLAiOpjCWnKW9BjqkAZpVYSb3iJrUIQ%2FjFbiT3qhrEO4EK9B9LXefKEjRX74c2WtrPOV07IkVTGdaR4W7a3otvdo0rx73VhplciMQva8zFWcWCIiYTSfDjnqwjf2%2FZuBplt1vh%2BbQGfocoEMEZAoZsU%2B%2BvM%2FlYCQ9xED%2F9vtajPrwWL8UXYwkmfI%2BiNtE0kGeFhZN8JDOXx6t7AU9hYP2IXzMVpY7gZbeF7RU85nV2%2FwD&X-Amz-Signature=80e9540ddcc8c6cb1b33a6230d9fcc59f05f9a4cc4365554bf87064d96850c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKYZNH5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgkqk%2B8R74R8v%2FV3rrSOCjvxqqHRE3BaQc6pCD03J4QIhAPV5En3BRX3PJunp%2F0Dl3AtUyMbvEwjgDnBf71TK77OvKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmC89jN0ulwTAMoXUq3AO8gFqpDzncsgQ3nGwwVmMecbB8lOWGNUGXw1fYTSZfC3cVKkgQgfAlGm%2FXF6P988XkHIT%2BbgZzF8iGgB2tf1TvgR56%2BFOQdQrgc5J%2BzATjhclx30GSbl8ZeFd9G%2BmKqPQRUf25EDkw6j6GvzqbvXakqdAxHu3qas%2FsiHjOEp3m5ZF57k2%2FRJElTPj8Rq3JihoHob1Lt5wK19lG%2FOB2e104UW9F3SiSqtKyn3na%2B4ogZOTrohnhRVM%2FQ4jWLJUP2ygKvqRWCH6R655G62YK8Tfw9CTYx%2F8klOkpqRn7abdZHsZbJVY2cp%2FDM69dAdGr8X7n%2F55scOhbWg35CB7tTlBOuoCLoZd9TZ1zm0Ymt9yQk75v%2BqdgES3zSuSMTW9DVgN0qT20JrsaaDWgXUvqbmUlQ6N4Wzo9oN1Szq8Bj1vSs8mNjpF3%2Bg%2B4HpOWt85iHPq%2FChp9oraPeGJIRRI6NVSref9IiOdDtJjoM0ghsQKBq%2BwsAPDUP%2FAvqYr%2FXNc4IRvFhs5ci%2Bg8zVsgb9SFaXdlnGPHVXRZ8CxO0x%2FpUynW0NYV6mPDX%2Fn8QGc7VsB%2FM%2FEVmaQmLe6AY%2FB9JWKyhRHz0rs%2Bjefa4aggtDNFOSwcqKPt9WjTcp9RLAiOpjCWnKW9BjqkAZpVYSb3iJrUIQ%2FjFbiT3qhrEO4EK9B9LXefKEjRX74c2WtrPOV07IkVTGdaR4W7a3otvdo0rx73VhplciMQva8zFWcWCIiYTSfDjnqwjf2%2FZuBplt1vh%2BbQGfocoEMEZAoZsU%2B%2BvM%2FlYCQ9xED%2F9vtajPrwWL8UXYwkmfI%2BiNtE0kGeFhZN8JDOXx6t7AU9hYP2IXzMVpY7gZbeF7RU85nV2%2FwD&X-Amz-Signature=68528d25d5c37bbb78612e3dc03eb8671a729847d8829f59f87c50ea3b52a095&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKYZNH5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgkqk%2B8R74R8v%2FV3rrSOCjvxqqHRE3BaQc6pCD03J4QIhAPV5En3BRX3PJunp%2F0Dl3AtUyMbvEwjgDnBf71TK77OvKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmC89jN0ulwTAMoXUq3AO8gFqpDzncsgQ3nGwwVmMecbB8lOWGNUGXw1fYTSZfC3cVKkgQgfAlGm%2FXF6P988XkHIT%2BbgZzF8iGgB2tf1TvgR56%2BFOQdQrgc5J%2BzATjhclx30GSbl8ZeFd9G%2BmKqPQRUf25EDkw6j6GvzqbvXakqdAxHu3qas%2FsiHjOEp3m5ZF57k2%2FRJElTPj8Rq3JihoHob1Lt5wK19lG%2FOB2e104UW9F3SiSqtKyn3na%2B4ogZOTrohnhRVM%2FQ4jWLJUP2ygKvqRWCH6R655G62YK8Tfw9CTYx%2F8klOkpqRn7abdZHsZbJVY2cp%2FDM69dAdGr8X7n%2F55scOhbWg35CB7tTlBOuoCLoZd9TZ1zm0Ymt9yQk75v%2BqdgES3zSuSMTW9DVgN0qT20JrsaaDWgXUvqbmUlQ6N4Wzo9oN1Szq8Bj1vSs8mNjpF3%2Bg%2B4HpOWt85iHPq%2FChp9oraPeGJIRRI6NVSref9IiOdDtJjoM0ghsQKBq%2BwsAPDUP%2FAvqYr%2FXNc4IRvFhs5ci%2Bg8zVsgb9SFaXdlnGPHVXRZ8CxO0x%2FpUynW0NYV6mPDX%2Fn8QGc7VsB%2FM%2FEVmaQmLe6AY%2FB9JWKyhRHz0rs%2Bjefa4aggtDNFOSwcqKPt9WjTcp9RLAiOpjCWnKW9BjqkAZpVYSb3iJrUIQ%2FjFbiT3qhrEO4EK9B9LXefKEjRX74c2WtrPOV07IkVTGdaR4W7a3otvdo0rx73VhplciMQva8zFWcWCIiYTSfDjnqwjf2%2FZuBplt1vh%2BbQGfocoEMEZAoZsU%2B%2BvM%2FlYCQ9xED%2F9vtajPrwWL8UXYwkmfI%2BiNtE0kGeFhZN8JDOXx6t7AU9hYP2IXzMVpY7gZbeF7RU85nV2%2FwD&X-Amz-Signature=fed5605153b36058be9d1fe7d89e7dc3ab36c5c9567fcdfdac37220c49092483&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
