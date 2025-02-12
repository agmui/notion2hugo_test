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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJ5M27J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Vt%2BH8E7Dn87ERk2SpYrGGYmKlr9j9IiAWhMGTonMsAiBgsk46J6FrF6HJi6nBOuHZCKE9Hs1LRMBg1sxXZ8GsOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSXDS9g2%2BzVHjMqdKtwDvF3%2Ff6yHLF%2FrY4T07J3tGhQO8LVRhC2U8zc06VQmdL0hrXxYIqPTyqqc3rXFYswKMA7kZM7RjnNW67bAcck6JTUr49t9R6bRWpp380GGeeDlIpNgwu8TN3v5%2Ft1B5sk6%2B9huve3WPIIj5oue4Q62WCAPF6aMd3DIqoAZ26zj%2FLOdus7lEsmjGtL9Jm%2FxrvMOYEups3r0gv%2BNr2j3XNJuRy%2FRR1dmNk9eI7zs3lELbde9vfquIUI%2BnqxXLEenl9VKo9fx%2Fz32s%2B2aKhofcuIAK8S5VCh1yvNP3IiM4usWn5nsm%2Bxr49YPUW4KpzDV8VUVeYfwgQ1phCa8O%2F1xSPK3%2FdHh5QvqwXNnPE5XIHCe9mkgK3zRybG54MkDsMSr%2ByEoAIYCt2hxaOWQULFh7XF1A5sYoRujsxVcIqGfUhy8fktHgYd7bw7Lr3l%2Bb4cBU4iQYF09SnbDSaEfZs%2BNRC2WNbldreBtdv4%2F6vOQxuxzxzW8lTtOZq6gJw9UJ9OLHvA792jNuRgSUKULkudwwQknFVTv%2FQoFSR4%2FmMt5yMKqiin%2BT2NemClNGbPgNThVcumYZTKsSzwMeFFWNGgs1mS8uDjT4RqAVUJcTBgRxFdwIe%2BNwen3FxN0Uwc1jPswhq6yvQY6pgE6SoYeNp39VZXE74qJE5GITCd3nWVx8baeDEDj6Hhdm2IK4V8acG%2BzYrT1EVDH%2BCxJvIAPnmn1TOu4%2F8cu3rdyoMzfRtA3bwJM70O4qPa55MNqzqtC6QdeMDC73pfLeA6TlHHmKa4ED%2FJT%2FeTTOWzbcE056ivJYBmW35HDPQ6Ul2gmKMfK34ttPc0isQbEaBt5s69O%2F02slVZ7myPT8VLsZi96SmUO&X-Amz-Signature=c6bd6ede31b83c44334683eecd1d5c793084149b5bc6a14f0d788d2aaf2742b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJ5M27J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Vt%2BH8E7Dn87ERk2SpYrGGYmKlr9j9IiAWhMGTonMsAiBgsk46J6FrF6HJi6nBOuHZCKE9Hs1LRMBg1sxXZ8GsOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSXDS9g2%2BzVHjMqdKtwDvF3%2Ff6yHLF%2FrY4T07J3tGhQO8LVRhC2U8zc06VQmdL0hrXxYIqPTyqqc3rXFYswKMA7kZM7RjnNW67bAcck6JTUr49t9R6bRWpp380GGeeDlIpNgwu8TN3v5%2Ft1B5sk6%2B9huve3WPIIj5oue4Q62WCAPF6aMd3DIqoAZ26zj%2FLOdus7lEsmjGtL9Jm%2FxrvMOYEups3r0gv%2BNr2j3XNJuRy%2FRR1dmNk9eI7zs3lELbde9vfquIUI%2BnqxXLEenl9VKo9fx%2Fz32s%2B2aKhofcuIAK8S5VCh1yvNP3IiM4usWn5nsm%2Bxr49YPUW4KpzDV8VUVeYfwgQ1phCa8O%2F1xSPK3%2FdHh5QvqwXNnPE5XIHCe9mkgK3zRybG54MkDsMSr%2ByEoAIYCt2hxaOWQULFh7XF1A5sYoRujsxVcIqGfUhy8fktHgYd7bw7Lr3l%2Bb4cBU4iQYF09SnbDSaEfZs%2BNRC2WNbldreBtdv4%2F6vOQxuxzxzW8lTtOZq6gJw9UJ9OLHvA792jNuRgSUKULkudwwQknFVTv%2FQoFSR4%2FmMt5yMKqiin%2BT2NemClNGbPgNThVcumYZTKsSzwMeFFWNGgs1mS8uDjT4RqAVUJcTBgRxFdwIe%2BNwen3FxN0Uwc1jPswhq6yvQY6pgE6SoYeNp39VZXE74qJE5GITCd3nWVx8baeDEDj6Hhdm2IK4V8acG%2BzYrT1EVDH%2BCxJvIAPnmn1TOu4%2F8cu3rdyoMzfRtA3bwJM70O4qPa55MNqzqtC6QdeMDC73pfLeA6TlHHmKa4ED%2FJT%2FeTTOWzbcE056ivJYBmW35HDPQ6Ul2gmKMfK34ttPc0isQbEaBt5s69O%2F02slVZ7myPT8VLsZi96SmUO&X-Amz-Signature=0132964ab1cce1dd40cf58ccf060bba149c878e493734ef846781ce898d83158&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJ5M27J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Vt%2BH8E7Dn87ERk2SpYrGGYmKlr9j9IiAWhMGTonMsAiBgsk46J6FrF6HJi6nBOuHZCKE9Hs1LRMBg1sxXZ8GsOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSXDS9g2%2BzVHjMqdKtwDvF3%2Ff6yHLF%2FrY4T07J3tGhQO8LVRhC2U8zc06VQmdL0hrXxYIqPTyqqc3rXFYswKMA7kZM7RjnNW67bAcck6JTUr49t9R6bRWpp380GGeeDlIpNgwu8TN3v5%2Ft1B5sk6%2B9huve3WPIIj5oue4Q62WCAPF6aMd3DIqoAZ26zj%2FLOdus7lEsmjGtL9Jm%2FxrvMOYEups3r0gv%2BNr2j3XNJuRy%2FRR1dmNk9eI7zs3lELbde9vfquIUI%2BnqxXLEenl9VKo9fx%2Fz32s%2B2aKhofcuIAK8S5VCh1yvNP3IiM4usWn5nsm%2Bxr49YPUW4KpzDV8VUVeYfwgQ1phCa8O%2F1xSPK3%2FdHh5QvqwXNnPE5XIHCe9mkgK3zRybG54MkDsMSr%2ByEoAIYCt2hxaOWQULFh7XF1A5sYoRujsxVcIqGfUhy8fktHgYd7bw7Lr3l%2Bb4cBU4iQYF09SnbDSaEfZs%2BNRC2WNbldreBtdv4%2F6vOQxuxzxzW8lTtOZq6gJw9UJ9OLHvA792jNuRgSUKULkudwwQknFVTv%2FQoFSR4%2FmMt5yMKqiin%2BT2NemClNGbPgNThVcumYZTKsSzwMeFFWNGgs1mS8uDjT4RqAVUJcTBgRxFdwIe%2BNwen3FxN0Uwc1jPswhq6yvQY6pgE6SoYeNp39VZXE74qJE5GITCd3nWVx8baeDEDj6Hhdm2IK4V8acG%2BzYrT1EVDH%2BCxJvIAPnmn1TOu4%2F8cu3rdyoMzfRtA3bwJM70O4qPa55MNqzqtC6QdeMDC73pfLeA6TlHHmKa4ED%2FJT%2FeTTOWzbcE056ivJYBmW35HDPQ6Ul2gmKMfK34ttPc0isQbEaBt5s69O%2F02slVZ7myPT8VLsZi96SmUO&X-Amz-Signature=bf516fea34ea4b61537325c238ee2d1a6c1c337185505518dadb4669a960f2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJ5M27J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Vt%2BH8E7Dn87ERk2SpYrGGYmKlr9j9IiAWhMGTonMsAiBgsk46J6FrF6HJi6nBOuHZCKE9Hs1LRMBg1sxXZ8GsOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSXDS9g2%2BzVHjMqdKtwDvF3%2Ff6yHLF%2FrY4T07J3tGhQO8LVRhC2U8zc06VQmdL0hrXxYIqPTyqqc3rXFYswKMA7kZM7RjnNW67bAcck6JTUr49t9R6bRWpp380GGeeDlIpNgwu8TN3v5%2Ft1B5sk6%2B9huve3WPIIj5oue4Q62WCAPF6aMd3DIqoAZ26zj%2FLOdus7lEsmjGtL9Jm%2FxrvMOYEups3r0gv%2BNr2j3XNJuRy%2FRR1dmNk9eI7zs3lELbde9vfquIUI%2BnqxXLEenl9VKo9fx%2Fz32s%2B2aKhofcuIAK8S5VCh1yvNP3IiM4usWn5nsm%2Bxr49YPUW4KpzDV8VUVeYfwgQ1phCa8O%2F1xSPK3%2FdHh5QvqwXNnPE5XIHCe9mkgK3zRybG54MkDsMSr%2ByEoAIYCt2hxaOWQULFh7XF1A5sYoRujsxVcIqGfUhy8fktHgYd7bw7Lr3l%2Bb4cBU4iQYF09SnbDSaEfZs%2BNRC2WNbldreBtdv4%2F6vOQxuxzxzW8lTtOZq6gJw9UJ9OLHvA792jNuRgSUKULkudwwQknFVTv%2FQoFSR4%2FmMt5yMKqiin%2BT2NemClNGbPgNThVcumYZTKsSzwMeFFWNGgs1mS8uDjT4RqAVUJcTBgRxFdwIe%2BNwen3FxN0Uwc1jPswhq6yvQY6pgE6SoYeNp39VZXE74qJE5GITCd3nWVx8baeDEDj6Hhdm2IK4V8acG%2BzYrT1EVDH%2BCxJvIAPnmn1TOu4%2F8cu3rdyoMzfRtA3bwJM70O4qPa55MNqzqtC6QdeMDC73pfLeA6TlHHmKa4ED%2FJT%2FeTTOWzbcE056ivJYBmW35HDPQ6Ul2gmKMfK34ttPc0isQbEaBt5s69O%2F02slVZ7myPT8VLsZi96SmUO&X-Amz-Signature=9dd4b5f3f1d4d9d7b636d23ccf173a77a7dd887a82d1328ecb795b638bfde748&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJ5M27J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Vt%2BH8E7Dn87ERk2SpYrGGYmKlr9j9IiAWhMGTonMsAiBgsk46J6FrF6HJi6nBOuHZCKE9Hs1LRMBg1sxXZ8GsOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSXDS9g2%2BzVHjMqdKtwDvF3%2Ff6yHLF%2FrY4T07J3tGhQO8LVRhC2U8zc06VQmdL0hrXxYIqPTyqqc3rXFYswKMA7kZM7RjnNW67bAcck6JTUr49t9R6bRWpp380GGeeDlIpNgwu8TN3v5%2Ft1B5sk6%2B9huve3WPIIj5oue4Q62WCAPF6aMd3DIqoAZ26zj%2FLOdus7lEsmjGtL9Jm%2FxrvMOYEups3r0gv%2BNr2j3XNJuRy%2FRR1dmNk9eI7zs3lELbde9vfquIUI%2BnqxXLEenl9VKo9fx%2Fz32s%2B2aKhofcuIAK8S5VCh1yvNP3IiM4usWn5nsm%2Bxr49YPUW4KpzDV8VUVeYfwgQ1phCa8O%2F1xSPK3%2FdHh5QvqwXNnPE5XIHCe9mkgK3zRybG54MkDsMSr%2ByEoAIYCt2hxaOWQULFh7XF1A5sYoRujsxVcIqGfUhy8fktHgYd7bw7Lr3l%2Bb4cBU4iQYF09SnbDSaEfZs%2BNRC2WNbldreBtdv4%2F6vOQxuxzxzW8lTtOZq6gJw9UJ9OLHvA792jNuRgSUKULkudwwQknFVTv%2FQoFSR4%2FmMt5yMKqiin%2BT2NemClNGbPgNThVcumYZTKsSzwMeFFWNGgs1mS8uDjT4RqAVUJcTBgRxFdwIe%2BNwen3FxN0Uwc1jPswhq6yvQY6pgE6SoYeNp39VZXE74qJE5GITCd3nWVx8baeDEDj6Hhdm2IK4V8acG%2BzYrT1EVDH%2BCxJvIAPnmn1TOu4%2F8cu3rdyoMzfRtA3bwJM70O4qPa55MNqzqtC6QdeMDC73pfLeA6TlHHmKa4ED%2FJT%2FeTTOWzbcE056ivJYBmW35HDPQ6Ul2gmKMfK34ttPc0isQbEaBt5s69O%2F02slVZ7myPT8VLsZi96SmUO&X-Amz-Signature=57d858191e77d4198159d86221963374e5e3102285a3829db4e7f3b812438bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
