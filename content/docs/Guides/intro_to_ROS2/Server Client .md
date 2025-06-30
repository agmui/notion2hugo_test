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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVO6ZV6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxRCcdToEaTobrT9%2F%2FqulcxcIBXcnnin2t%2BwjSwXvYQIhALMp28%2B1yRS6xXdkLSWyHIr4NFFSFooA5q2UvmnnvJm9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTbm0R%2BxrBSVuYrkQq3AM0%2BUevqe1zv52csNbt1xsKLy4LvRw7wfUEYlUZVLZCWaX5Hl0hygklZUdGybd1IUJusglGHZSGiPP7%2FeazqBMYoRV3ovKv6ydloEQ60yxLzP1zbDbVuvq%2BCnoyYJ2eJOBV9AsKEZjFB%2BgKnVsbrIVg%2Brsj1zxE8YhZ1ogbZXmnQFAIGTsNKgvwOJ7o7i5lI%2BKuXnNVAB%2F%2FUXioWQ8PzrP9rpVJvF8wAIkMFF%2FrEnZsgcRAw%2BFbPlhf5CX1wMj0Rc7KmRXuhO5u%2Bt5FacvLmDiPVv%2BE7LjF6V0JVbDIYJZa2%2Bk0kBjARx%2BlvkpgbIjOjXXlzbhC2OLbcBWAjyVRc3HEp6Rf03esJRBMUlHEjN1Xd2gSSX9VtwqaEGDrUPSnQJcrl3MfhWGdDSYg1UR4pHpsG9nqCHm9dKov0upw6M9pkr0bBRewvDou2gsDiZUdxbMeG5BupkVlrpd%2FymMb1at4YoIsDwx1yWbtV4kVL3O677UL1TtKX4M5nAG0EyVE%2B8YN%2FmC21zgVajLeoFoqas8PwOU1WbCcCFRFprrart9hzvJ0LIfZouyd4AkQetAMru628NVtbvpCSthXfXl%2FiOFkExLQLNdQN6C0NatwOcI1YrdIggkg3nAsJWeEMDChzovDBjqkAVToLAunO13zAwZ9HrAVBT79eNLDmtVMNhCBevUYcBzJFSRKWLaDaN0ZZgFpxZNjcLatcFFEILxn9iRYPqrwUUrqTJmsG6um4bg%2Bu0np3RtKvHoX%2FIfgPARWWb7VmC3NRoDL8dl%2FH3Bbq4DsL28M1uZhJfKzamLvapnNQRzGTztaJ9FGKgw9b%2BjuknCD%2FAH3VlOi1q1cK8PGsyhDn7oR5pXCw2Oo&X-Amz-Signature=e23dd0a3fd7faebe74b473bda4ddb3f9c6a90c32b758b52da0c4e6bc4baa9c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVO6ZV6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxRCcdToEaTobrT9%2F%2FqulcxcIBXcnnin2t%2BwjSwXvYQIhALMp28%2B1yRS6xXdkLSWyHIr4NFFSFooA5q2UvmnnvJm9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTbm0R%2BxrBSVuYrkQq3AM0%2BUevqe1zv52csNbt1xsKLy4LvRw7wfUEYlUZVLZCWaX5Hl0hygklZUdGybd1IUJusglGHZSGiPP7%2FeazqBMYoRV3ovKv6ydloEQ60yxLzP1zbDbVuvq%2BCnoyYJ2eJOBV9AsKEZjFB%2BgKnVsbrIVg%2Brsj1zxE8YhZ1ogbZXmnQFAIGTsNKgvwOJ7o7i5lI%2BKuXnNVAB%2F%2FUXioWQ8PzrP9rpVJvF8wAIkMFF%2FrEnZsgcRAw%2BFbPlhf5CX1wMj0Rc7KmRXuhO5u%2Bt5FacvLmDiPVv%2BE7LjF6V0JVbDIYJZa2%2Bk0kBjARx%2BlvkpgbIjOjXXlzbhC2OLbcBWAjyVRc3HEp6Rf03esJRBMUlHEjN1Xd2gSSX9VtwqaEGDrUPSnQJcrl3MfhWGdDSYg1UR4pHpsG9nqCHm9dKov0upw6M9pkr0bBRewvDou2gsDiZUdxbMeG5BupkVlrpd%2FymMb1at4YoIsDwx1yWbtV4kVL3O677UL1TtKX4M5nAG0EyVE%2B8YN%2FmC21zgVajLeoFoqas8PwOU1WbCcCFRFprrart9hzvJ0LIfZouyd4AkQetAMru628NVtbvpCSthXfXl%2FiOFkExLQLNdQN6C0NatwOcI1YrdIggkg3nAsJWeEMDChzovDBjqkAVToLAunO13zAwZ9HrAVBT79eNLDmtVMNhCBevUYcBzJFSRKWLaDaN0ZZgFpxZNjcLatcFFEILxn9iRYPqrwUUrqTJmsG6um4bg%2Bu0np3RtKvHoX%2FIfgPARWWb7VmC3NRoDL8dl%2FH3Bbq4DsL28M1uZhJfKzamLvapnNQRzGTztaJ9FGKgw9b%2BjuknCD%2FAH3VlOi1q1cK8PGsyhDn7oR5pXCw2Oo&X-Amz-Signature=2ed2c661266eb8283519aba217ff62be1540c2a2d387eb774752a3fe72daeee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVO6ZV6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxRCcdToEaTobrT9%2F%2FqulcxcIBXcnnin2t%2BwjSwXvYQIhALMp28%2B1yRS6xXdkLSWyHIr4NFFSFooA5q2UvmnnvJm9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTbm0R%2BxrBSVuYrkQq3AM0%2BUevqe1zv52csNbt1xsKLy4LvRw7wfUEYlUZVLZCWaX5Hl0hygklZUdGybd1IUJusglGHZSGiPP7%2FeazqBMYoRV3ovKv6ydloEQ60yxLzP1zbDbVuvq%2BCnoyYJ2eJOBV9AsKEZjFB%2BgKnVsbrIVg%2Brsj1zxE8YhZ1ogbZXmnQFAIGTsNKgvwOJ7o7i5lI%2BKuXnNVAB%2F%2FUXioWQ8PzrP9rpVJvF8wAIkMFF%2FrEnZsgcRAw%2BFbPlhf5CX1wMj0Rc7KmRXuhO5u%2Bt5FacvLmDiPVv%2BE7LjF6V0JVbDIYJZa2%2Bk0kBjARx%2BlvkpgbIjOjXXlzbhC2OLbcBWAjyVRc3HEp6Rf03esJRBMUlHEjN1Xd2gSSX9VtwqaEGDrUPSnQJcrl3MfhWGdDSYg1UR4pHpsG9nqCHm9dKov0upw6M9pkr0bBRewvDou2gsDiZUdxbMeG5BupkVlrpd%2FymMb1at4YoIsDwx1yWbtV4kVL3O677UL1TtKX4M5nAG0EyVE%2B8YN%2FmC21zgVajLeoFoqas8PwOU1WbCcCFRFprrart9hzvJ0LIfZouyd4AkQetAMru628NVtbvpCSthXfXl%2FiOFkExLQLNdQN6C0NatwOcI1YrdIggkg3nAsJWeEMDChzovDBjqkAVToLAunO13zAwZ9HrAVBT79eNLDmtVMNhCBevUYcBzJFSRKWLaDaN0ZZgFpxZNjcLatcFFEILxn9iRYPqrwUUrqTJmsG6um4bg%2Bu0np3RtKvHoX%2FIfgPARWWb7VmC3NRoDL8dl%2FH3Bbq4DsL28M1uZhJfKzamLvapnNQRzGTztaJ9FGKgw9b%2BjuknCD%2FAH3VlOi1q1cK8PGsyhDn7oR5pXCw2Oo&X-Amz-Signature=b397fbeaa8b225bb913140514676a717c9a738f9039cdd54cb1dd82f0f018503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVO6ZV6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxRCcdToEaTobrT9%2F%2FqulcxcIBXcnnin2t%2BwjSwXvYQIhALMp28%2B1yRS6xXdkLSWyHIr4NFFSFooA5q2UvmnnvJm9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTbm0R%2BxrBSVuYrkQq3AM0%2BUevqe1zv52csNbt1xsKLy4LvRw7wfUEYlUZVLZCWaX5Hl0hygklZUdGybd1IUJusglGHZSGiPP7%2FeazqBMYoRV3ovKv6ydloEQ60yxLzP1zbDbVuvq%2BCnoyYJ2eJOBV9AsKEZjFB%2BgKnVsbrIVg%2Brsj1zxE8YhZ1ogbZXmnQFAIGTsNKgvwOJ7o7i5lI%2BKuXnNVAB%2F%2FUXioWQ8PzrP9rpVJvF8wAIkMFF%2FrEnZsgcRAw%2BFbPlhf5CX1wMj0Rc7KmRXuhO5u%2Bt5FacvLmDiPVv%2BE7LjF6V0JVbDIYJZa2%2Bk0kBjARx%2BlvkpgbIjOjXXlzbhC2OLbcBWAjyVRc3HEp6Rf03esJRBMUlHEjN1Xd2gSSX9VtwqaEGDrUPSnQJcrl3MfhWGdDSYg1UR4pHpsG9nqCHm9dKov0upw6M9pkr0bBRewvDou2gsDiZUdxbMeG5BupkVlrpd%2FymMb1at4YoIsDwx1yWbtV4kVL3O677UL1TtKX4M5nAG0EyVE%2B8YN%2FmC21zgVajLeoFoqas8PwOU1WbCcCFRFprrart9hzvJ0LIfZouyd4AkQetAMru628NVtbvpCSthXfXl%2FiOFkExLQLNdQN6C0NatwOcI1YrdIggkg3nAsJWeEMDChzovDBjqkAVToLAunO13zAwZ9HrAVBT79eNLDmtVMNhCBevUYcBzJFSRKWLaDaN0ZZgFpxZNjcLatcFFEILxn9iRYPqrwUUrqTJmsG6um4bg%2Bu0np3RtKvHoX%2FIfgPARWWb7VmC3NRoDL8dl%2FH3Bbq4DsL28M1uZhJfKzamLvapnNQRzGTztaJ9FGKgw9b%2BjuknCD%2FAH3VlOi1q1cK8PGsyhDn7oR5pXCw2Oo&X-Amz-Signature=797729fdc4d066cba99a9649a2dd252c1f7f620ec67ac48c609c903e65cc3645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVO6ZV6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxRCcdToEaTobrT9%2F%2FqulcxcIBXcnnin2t%2BwjSwXvYQIhALMp28%2B1yRS6xXdkLSWyHIr4NFFSFooA5q2UvmnnvJm9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTbm0R%2BxrBSVuYrkQq3AM0%2BUevqe1zv52csNbt1xsKLy4LvRw7wfUEYlUZVLZCWaX5Hl0hygklZUdGybd1IUJusglGHZSGiPP7%2FeazqBMYoRV3ovKv6ydloEQ60yxLzP1zbDbVuvq%2BCnoyYJ2eJOBV9AsKEZjFB%2BgKnVsbrIVg%2Brsj1zxE8YhZ1ogbZXmnQFAIGTsNKgvwOJ7o7i5lI%2BKuXnNVAB%2F%2FUXioWQ8PzrP9rpVJvF8wAIkMFF%2FrEnZsgcRAw%2BFbPlhf5CX1wMj0Rc7KmRXuhO5u%2Bt5FacvLmDiPVv%2BE7LjF6V0JVbDIYJZa2%2Bk0kBjARx%2BlvkpgbIjOjXXlzbhC2OLbcBWAjyVRc3HEp6Rf03esJRBMUlHEjN1Xd2gSSX9VtwqaEGDrUPSnQJcrl3MfhWGdDSYg1UR4pHpsG9nqCHm9dKov0upw6M9pkr0bBRewvDou2gsDiZUdxbMeG5BupkVlrpd%2FymMb1at4YoIsDwx1yWbtV4kVL3O677UL1TtKX4M5nAG0EyVE%2B8YN%2FmC21zgVajLeoFoqas8PwOU1WbCcCFRFprrart9hzvJ0LIfZouyd4AkQetAMru628NVtbvpCSthXfXl%2FiOFkExLQLNdQN6C0NatwOcI1YrdIggkg3nAsJWeEMDChzovDBjqkAVToLAunO13zAwZ9HrAVBT79eNLDmtVMNhCBevUYcBzJFSRKWLaDaN0ZZgFpxZNjcLatcFFEILxn9iRYPqrwUUrqTJmsG6um4bg%2Bu0np3RtKvHoX%2FIfgPARWWb7VmC3NRoDL8dl%2FH3Bbq4DsL28M1uZhJfKzamLvapnNQRzGTztaJ9FGKgw9b%2BjuknCD%2FAH3VlOi1q1cK8PGsyhDn7oR5pXCw2Oo&X-Amz-Signature=5dcf707b04fa338fb71eff623aaabf4e211ff5cac7c71af265d95551f2b8523a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
