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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4NWIPM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXRFd1FO%2BIdXYc4v6aw%2FPTsCkKtpazbcTGa2HSDb0mAIgFzF%2B1CfeO%2Fh663E3%2BVor86%2BoQ6TIBikyHgw%2BYDhUyHYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsVoCuyhdRrBI6oryrcAwrN3f%2FcJLxdcX5lwYHxTmOkq9euYwz7bRr4tbXMPt4jDRzjKIXw2wruMwa56bUyUyUMOfTY9pcm%2FXQAKDoRMAmN5l84ZVSbD%2F6LgtHfjdANzmx7jbxqaFeSQVQxNTmSAzac2Dwy3ZF1sC%2B0vm4WSTUO4FYJoLwXN9DV0rNTydh4iJi8CtwNfzsVXPzxzLZlOehIK%2FzCplVVco3AqfXStXZob7qW97i09dz%2F83YcxI7vGkDNh%2BBPikdQrTLfUsqauUETypRaTJBQB9Lez2gog1KeLUuSY5K%2Fq3856iScEPyk1OhElT357wdm7ppU2T7VpvvSSrIHSVur78aZz54Ar4TmsxXljnVxHM2wJSc%2FNPXA6izFmdGTA5nddb7TUvl0d13lxjzxj586RF5I1nV9eqZL6ef8V8%2BY6z9vscpH0qdjBQ2pSANcLnXjxo4HkXYtEiMHwt9o6lmuZXKn3Al0mYGSN%2BILilqqhPjbSp9QO54LHcZ8fvm44UxOQ3PKnr3mj6zqzHTfneDCfmhEBPnegVk4U6ZzmpEQ7TqkeuEfFRxo1UPITnd2ks2boG6eTMw1PBxCifHOcoU9UBcZ7%2F56ZfY36f5aswPnBWWJGSH9I1yGgK5SWPc2crmle4%2FUMNf3nL4GOqUBYcp7WcR7E9ZtsCa7YNqUatileKllYAfBSxLd1mlTiIfuxyBjqNsyeTVSPVKgVjm6z47oPqIS0U%2BZBsX6tQrS6QakvRq1zyGYCUkIhclBDuX2k3IZGdOI1Awej1YZAFO3jARNAsP2849DfoAg8NRIgZdpUr3DgGr7ZlUQbkIUn6trHWG8icem3s7xshZ0iqGmW0luAzz%2FDQqCWGgePaD%2B%2FarWay4q&X-Amz-Signature=5f69056e4fd03d7b7df13740dfc42a07837e2922e93081f3b04919c4f69850c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4NWIPM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXRFd1FO%2BIdXYc4v6aw%2FPTsCkKtpazbcTGa2HSDb0mAIgFzF%2B1CfeO%2Fh663E3%2BVor86%2BoQ6TIBikyHgw%2BYDhUyHYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsVoCuyhdRrBI6oryrcAwrN3f%2FcJLxdcX5lwYHxTmOkq9euYwz7bRr4tbXMPt4jDRzjKIXw2wruMwa56bUyUyUMOfTY9pcm%2FXQAKDoRMAmN5l84ZVSbD%2F6LgtHfjdANzmx7jbxqaFeSQVQxNTmSAzac2Dwy3ZF1sC%2B0vm4WSTUO4FYJoLwXN9DV0rNTydh4iJi8CtwNfzsVXPzxzLZlOehIK%2FzCplVVco3AqfXStXZob7qW97i09dz%2F83YcxI7vGkDNh%2BBPikdQrTLfUsqauUETypRaTJBQB9Lez2gog1KeLUuSY5K%2Fq3856iScEPyk1OhElT357wdm7ppU2T7VpvvSSrIHSVur78aZz54Ar4TmsxXljnVxHM2wJSc%2FNPXA6izFmdGTA5nddb7TUvl0d13lxjzxj586RF5I1nV9eqZL6ef8V8%2BY6z9vscpH0qdjBQ2pSANcLnXjxo4HkXYtEiMHwt9o6lmuZXKn3Al0mYGSN%2BILilqqhPjbSp9QO54LHcZ8fvm44UxOQ3PKnr3mj6zqzHTfneDCfmhEBPnegVk4U6ZzmpEQ7TqkeuEfFRxo1UPITnd2ks2boG6eTMw1PBxCifHOcoU9UBcZ7%2F56ZfY36f5aswPnBWWJGSH9I1yGgK5SWPc2crmle4%2FUMNf3nL4GOqUBYcp7WcR7E9ZtsCa7YNqUatileKllYAfBSxLd1mlTiIfuxyBjqNsyeTVSPVKgVjm6z47oPqIS0U%2BZBsX6tQrS6QakvRq1zyGYCUkIhclBDuX2k3IZGdOI1Awej1YZAFO3jARNAsP2849DfoAg8NRIgZdpUr3DgGr7ZlUQbkIUn6trHWG8icem3s7xshZ0iqGmW0luAzz%2FDQqCWGgePaD%2B%2FarWay4q&X-Amz-Signature=7a225d4d9646f2fba8d30368ce52ce7d128f5bc6aa06f76af0d72a08ccc1293f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4NWIPM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXRFd1FO%2BIdXYc4v6aw%2FPTsCkKtpazbcTGa2HSDb0mAIgFzF%2B1CfeO%2Fh663E3%2BVor86%2BoQ6TIBikyHgw%2BYDhUyHYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsVoCuyhdRrBI6oryrcAwrN3f%2FcJLxdcX5lwYHxTmOkq9euYwz7bRr4tbXMPt4jDRzjKIXw2wruMwa56bUyUyUMOfTY9pcm%2FXQAKDoRMAmN5l84ZVSbD%2F6LgtHfjdANzmx7jbxqaFeSQVQxNTmSAzac2Dwy3ZF1sC%2B0vm4WSTUO4FYJoLwXN9DV0rNTydh4iJi8CtwNfzsVXPzxzLZlOehIK%2FzCplVVco3AqfXStXZob7qW97i09dz%2F83YcxI7vGkDNh%2BBPikdQrTLfUsqauUETypRaTJBQB9Lez2gog1KeLUuSY5K%2Fq3856iScEPyk1OhElT357wdm7ppU2T7VpvvSSrIHSVur78aZz54Ar4TmsxXljnVxHM2wJSc%2FNPXA6izFmdGTA5nddb7TUvl0d13lxjzxj586RF5I1nV9eqZL6ef8V8%2BY6z9vscpH0qdjBQ2pSANcLnXjxo4HkXYtEiMHwt9o6lmuZXKn3Al0mYGSN%2BILilqqhPjbSp9QO54LHcZ8fvm44UxOQ3PKnr3mj6zqzHTfneDCfmhEBPnegVk4U6ZzmpEQ7TqkeuEfFRxo1UPITnd2ks2boG6eTMw1PBxCifHOcoU9UBcZ7%2F56ZfY36f5aswPnBWWJGSH9I1yGgK5SWPc2crmle4%2FUMNf3nL4GOqUBYcp7WcR7E9ZtsCa7YNqUatileKllYAfBSxLd1mlTiIfuxyBjqNsyeTVSPVKgVjm6z47oPqIS0U%2BZBsX6tQrS6QakvRq1zyGYCUkIhclBDuX2k3IZGdOI1Awej1YZAFO3jARNAsP2849DfoAg8NRIgZdpUr3DgGr7ZlUQbkIUn6trHWG8icem3s7xshZ0iqGmW0luAzz%2FDQqCWGgePaD%2B%2FarWay4q&X-Amz-Signature=079f98112d7f8c2d77fad1841bff57ddfbc674ff955c5cb76c27c0aff37109a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4NWIPM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXRFd1FO%2BIdXYc4v6aw%2FPTsCkKtpazbcTGa2HSDb0mAIgFzF%2B1CfeO%2Fh663E3%2BVor86%2BoQ6TIBikyHgw%2BYDhUyHYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsVoCuyhdRrBI6oryrcAwrN3f%2FcJLxdcX5lwYHxTmOkq9euYwz7bRr4tbXMPt4jDRzjKIXw2wruMwa56bUyUyUMOfTY9pcm%2FXQAKDoRMAmN5l84ZVSbD%2F6LgtHfjdANzmx7jbxqaFeSQVQxNTmSAzac2Dwy3ZF1sC%2B0vm4WSTUO4FYJoLwXN9DV0rNTydh4iJi8CtwNfzsVXPzxzLZlOehIK%2FzCplVVco3AqfXStXZob7qW97i09dz%2F83YcxI7vGkDNh%2BBPikdQrTLfUsqauUETypRaTJBQB9Lez2gog1KeLUuSY5K%2Fq3856iScEPyk1OhElT357wdm7ppU2T7VpvvSSrIHSVur78aZz54Ar4TmsxXljnVxHM2wJSc%2FNPXA6izFmdGTA5nddb7TUvl0d13lxjzxj586RF5I1nV9eqZL6ef8V8%2BY6z9vscpH0qdjBQ2pSANcLnXjxo4HkXYtEiMHwt9o6lmuZXKn3Al0mYGSN%2BILilqqhPjbSp9QO54LHcZ8fvm44UxOQ3PKnr3mj6zqzHTfneDCfmhEBPnegVk4U6ZzmpEQ7TqkeuEfFRxo1UPITnd2ks2boG6eTMw1PBxCifHOcoU9UBcZ7%2F56ZfY36f5aswPnBWWJGSH9I1yGgK5SWPc2crmle4%2FUMNf3nL4GOqUBYcp7WcR7E9ZtsCa7YNqUatileKllYAfBSxLd1mlTiIfuxyBjqNsyeTVSPVKgVjm6z47oPqIS0U%2BZBsX6tQrS6QakvRq1zyGYCUkIhclBDuX2k3IZGdOI1Awej1YZAFO3jARNAsP2849DfoAg8NRIgZdpUr3DgGr7ZlUQbkIUn6trHWG8icem3s7xshZ0iqGmW0luAzz%2FDQqCWGgePaD%2B%2FarWay4q&X-Amz-Signature=0e74ffe142738b3a0241091a1e456ebfed68abc1fb48d83b7310391b258077a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4NWIPM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXRFd1FO%2BIdXYc4v6aw%2FPTsCkKtpazbcTGa2HSDb0mAIgFzF%2B1CfeO%2Fh663E3%2BVor86%2BoQ6TIBikyHgw%2BYDhUyHYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsVoCuyhdRrBI6oryrcAwrN3f%2FcJLxdcX5lwYHxTmOkq9euYwz7bRr4tbXMPt4jDRzjKIXw2wruMwa56bUyUyUMOfTY9pcm%2FXQAKDoRMAmN5l84ZVSbD%2F6LgtHfjdANzmx7jbxqaFeSQVQxNTmSAzac2Dwy3ZF1sC%2B0vm4WSTUO4FYJoLwXN9DV0rNTydh4iJi8CtwNfzsVXPzxzLZlOehIK%2FzCplVVco3AqfXStXZob7qW97i09dz%2F83YcxI7vGkDNh%2BBPikdQrTLfUsqauUETypRaTJBQB9Lez2gog1KeLUuSY5K%2Fq3856iScEPyk1OhElT357wdm7ppU2T7VpvvSSrIHSVur78aZz54Ar4TmsxXljnVxHM2wJSc%2FNPXA6izFmdGTA5nddb7TUvl0d13lxjzxj586RF5I1nV9eqZL6ef8V8%2BY6z9vscpH0qdjBQ2pSANcLnXjxo4HkXYtEiMHwt9o6lmuZXKn3Al0mYGSN%2BILilqqhPjbSp9QO54LHcZ8fvm44UxOQ3PKnr3mj6zqzHTfneDCfmhEBPnegVk4U6ZzmpEQ7TqkeuEfFRxo1UPITnd2ks2boG6eTMw1PBxCifHOcoU9UBcZ7%2F56ZfY36f5aswPnBWWJGSH9I1yGgK5SWPc2crmle4%2FUMNf3nL4GOqUBYcp7WcR7E9ZtsCa7YNqUatileKllYAfBSxLd1mlTiIfuxyBjqNsyeTVSPVKgVjm6z47oPqIS0U%2BZBsX6tQrS6QakvRq1zyGYCUkIhclBDuX2k3IZGdOI1Awej1YZAFO3jARNAsP2849DfoAg8NRIgZdpUr3DgGr7ZlUQbkIUn6trHWG8icem3s7xshZ0iqGmW0luAzz%2FDQqCWGgePaD%2B%2FarWay4q&X-Amz-Signature=b584dd2b604820e7dfa3162aeebbc30b8638f9fb0eab3e96838573035c71223f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
