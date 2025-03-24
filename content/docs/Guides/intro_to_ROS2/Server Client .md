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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7BEY2M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtNjyP2cyIU5rGeL85JEdpFVVE1VmRrAYfoTfiEvdolAiEAppvbbBIG%2F385Ch5s3k%2B%2F84EQ4gpKxPW0ymK8sO5nJOwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKk5C347JWRHzVSKeyrcA5ZIAbu0vE4BTd%2BKRYcltEZL54UzpHNGdplZSZ%2F44A0KL%2BKSZ8rpEQMegRVHvemRbiXH8ey%2BSVY5o16m0HvZKAYmuSkA3bH9XXDkmX9vVT8aLSMCDvtCvwFAzlPFsc5wLIWbZsYmwYHAU4VwC5gjF54z3m%2BYtIl2NiIWc7Gu5G7UalTzzBo2OXpKcujxV8vLm2fzWWSxOV2GQTDv1P5ddQjq6DR2ed%2FV7gODebf%2BmVd04Ij7vrBRT5scnwi8jzkmiJRZlEr4qwjhzuEW8QUbCJyg2XE90kKqTUhNPqjVo4Y6Ha0ithJiaIRN56D%2BtjA5awAGvABJeYW5hLI5ORRercjWbUObGJSgYyZI3oy6zgBsrIBN2gu9%2F7OlV7dKJOiJ8PogKhkt5IYpcGxMVHrXnclpA42%2FM49%2FqPFTnCwunxv00oBOLQco9iTJu4s1nGzHQiyXTJq3TvcBv09fv%2BNzn2WP%2FOx7jIarJ%2BPaXdips2jZ5C%2BVgnrp8UhINTzM1fRdBMj%2ByiigWb3sG5kNVujZ%2BjHAN%2FyNWWCRqPXTo4fIBhisNYs1YMwGOqk4ord9ZQgJ91AybID4tfscwRX%2BlXIxCDIN6aTwQMJPLkfip5%2BdizhlGvULJ4%2BTKzDst%2F3WMJWwgr8GOqUB5%2BM%2F6FzM8wIWNy0WOPrAyTNlWe10DKzHKZv7lv0%2Fab9eUU7WXMw1nYBZw2tnld1RInONn%2F4p6s0oRWXYyik03fcF0VDaqSbCIXQlT76ICjj9rurS8Tud5URMqKVfLf9B38WuLHJwuUgJSFHyP9OMslytu7n4q5En7WtOz67h59D5vvB1lyi%2BgF2jpBzNZcJc0Gkzk%2FG1CYTFoTDYVVAfEDZgpvLD&X-Amz-Signature=8aa6ed65ff48b5184f19e146596701c393ef3796d786a36cde6cfa8b589a5ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7BEY2M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtNjyP2cyIU5rGeL85JEdpFVVE1VmRrAYfoTfiEvdolAiEAppvbbBIG%2F385Ch5s3k%2B%2F84EQ4gpKxPW0ymK8sO5nJOwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKk5C347JWRHzVSKeyrcA5ZIAbu0vE4BTd%2BKRYcltEZL54UzpHNGdplZSZ%2F44A0KL%2BKSZ8rpEQMegRVHvemRbiXH8ey%2BSVY5o16m0HvZKAYmuSkA3bH9XXDkmX9vVT8aLSMCDvtCvwFAzlPFsc5wLIWbZsYmwYHAU4VwC5gjF54z3m%2BYtIl2NiIWc7Gu5G7UalTzzBo2OXpKcujxV8vLm2fzWWSxOV2GQTDv1P5ddQjq6DR2ed%2FV7gODebf%2BmVd04Ij7vrBRT5scnwi8jzkmiJRZlEr4qwjhzuEW8QUbCJyg2XE90kKqTUhNPqjVo4Y6Ha0ithJiaIRN56D%2BtjA5awAGvABJeYW5hLI5ORRercjWbUObGJSgYyZI3oy6zgBsrIBN2gu9%2F7OlV7dKJOiJ8PogKhkt5IYpcGxMVHrXnclpA42%2FM49%2FqPFTnCwunxv00oBOLQco9iTJu4s1nGzHQiyXTJq3TvcBv09fv%2BNzn2WP%2FOx7jIarJ%2BPaXdips2jZ5C%2BVgnrp8UhINTzM1fRdBMj%2ByiigWb3sG5kNVujZ%2BjHAN%2FyNWWCRqPXTo4fIBhisNYs1YMwGOqk4ord9ZQgJ91AybID4tfscwRX%2BlXIxCDIN6aTwQMJPLkfip5%2BdizhlGvULJ4%2BTKzDst%2F3WMJWwgr8GOqUB5%2BM%2F6FzM8wIWNy0WOPrAyTNlWe10DKzHKZv7lv0%2Fab9eUU7WXMw1nYBZw2tnld1RInONn%2F4p6s0oRWXYyik03fcF0VDaqSbCIXQlT76ICjj9rurS8Tud5URMqKVfLf9B38WuLHJwuUgJSFHyP9OMslytu7n4q5En7WtOz67h59D5vvB1lyi%2BgF2jpBzNZcJc0Gkzk%2FG1CYTFoTDYVVAfEDZgpvLD&X-Amz-Signature=1933d6912e67876fc370bf8f0b425efee13b75e638d3dded5b96f5a22a159597&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7BEY2M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtNjyP2cyIU5rGeL85JEdpFVVE1VmRrAYfoTfiEvdolAiEAppvbbBIG%2F385Ch5s3k%2B%2F84EQ4gpKxPW0ymK8sO5nJOwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKk5C347JWRHzVSKeyrcA5ZIAbu0vE4BTd%2BKRYcltEZL54UzpHNGdplZSZ%2F44A0KL%2BKSZ8rpEQMegRVHvemRbiXH8ey%2BSVY5o16m0HvZKAYmuSkA3bH9XXDkmX9vVT8aLSMCDvtCvwFAzlPFsc5wLIWbZsYmwYHAU4VwC5gjF54z3m%2BYtIl2NiIWc7Gu5G7UalTzzBo2OXpKcujxV8vLm2fzWWSxOV2GQTDv1P5ddQjq6DR2ed%2FV7gODebf%2BmVd04Ij7vrBRT5scnwi8jzkmiJRZlEr4qwjhzuEW8QUbCJyg2XE90kKqTUhNPqjVo4Y6Ha0ithJiaIRN56D%2BtjA5awAGvABJeYW5hLI5ORRercjWbUObGJSgYyZI3oy6zgBsrIBN2gu9%2F7OlV7dKJOiJ8PogKhkt5IYpcGxMVHrXnclpA42%2FM49%2FqPFTnCwunxv00oBOLQco9iTJu4s1nGzHQiyXTJq3TvcBv09fv%2BNzn2WP%2FOx7jIarJ%2BPaXdips2jZ5C%2BVgnrp8UhINTzM1fRdBMj%2ByiigWb3sG5kNVujZ%2BjHAN%2FyNWWCRqPXTo4fIBhisNYs1YMwGOqk4ord9ZQgJ91AybID4tfscwRX%2BlXIxCDIN6aTwQMJPLkfip5%2BdizhlGvULJ4%2BTKzDst%2F3WMJWwgr8GOqUB5%2BM%2F6FzM8wIWNy0WOPrAyTNlWe10DKzHKZv7lv0%2Fab9eUU7WXMw1nYBZw2tnld1RInONn%2F4p6s0oRWXYyik03fcF0VDaqSbCIXQlT76ICjj9rurS8Tud5URMqKVfLf9B38WuLHJwuUgJSFHyP9OMslytu7n4q5En7WtOz67h59D5vvB1lyi%2BgF2jpBzNZcJc0Gkzk%2FG1CYTFoTDYVVAfEDZgpvLD&X-Amz-Signature=13937e53c3d8dcc0ba88e06218b87245702f9294fe945e54ec2059c2c67e5987&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7BEY2M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtNjyP2cyIU5rGeL85JEdpFVVE1VmRrAYfoTfiEvdolAiEAppvbbBIG%2F385Ch5s3k%2B%2F84EQ4gpKxPW0ymK8sO5nJOwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKk5C347JWRHzVSKeyrcA5ZIAbu0vE4BTd%2BKRYcltEZL54UzpHNGdplZSZ%2F44A0KL%2BKSZ8rpEQMegRVHvemRbiXH8ey%2BSVY5o16m0HvZKAYmuSkA3bH9XXDkmX9vVT8aLSMCDvtCvwFAzlPFsc5wLIWbZsYmwYHAU4VwC5gjF54z3m%2BYtIl2NiIWc7Gu5G7UalTzzBo2OXpKcujxV8vLm2fzWWSxOV2GQTDv1P5ddQjq6DR2ed%2FV7gODebf%2BmVd04Ij7vrBRT5scnwi8jzkmiJRZlEr4qwjhzuEW8QUbCJyg2XE90kKqTUhNPqjVo4Y6Ha0ithJiaIRN56D%2BtjA5awAGvABJeYW5hLI5ORRercjWbUObGJSgYyZI3oy6zgBsrIBN2gu9%2F7OlV7dKJOiJ8PogKhkt5IYpcGxMVHrXnclpA42%2FM49%2FqPFTnCwunxv00oBOLQco9iTJu4s1nGzHQiyXTJq3TvcBv09fv%2BNzn2WP%2FOx7jIarJ%2BPaXdips2jZ5C%2BVgnrp8UhINTzM1fRdBMj%2ByiigWb3sG5kNVujZ%2BjHAN%2FyNWWCRqPXTo4fIBhisNYs1YMwGOqk4ord9ZQgJ91AybID4tfscwRX%2BlXIxCDIN6aTwQMJPLkfip5%2BdizhlGvULJ4%2BTKzDst%2F3WMJWwgr8GOqUB5%2BM%2F6FzM8wIWNy0WOPrAyTNlWe10DKzHKZv7lv0%2Fab9eUU7WXMw1nYBZw2tnld1RInONn%2F4p6s0oRWXYyik03fcF0VDaqSbCIXQlT76ICjj9rurS8Tud5URMqKVfLf9B38WuLHJwuUgJSFHyP9OMslytu7n4q5En7WtOz67h59D5vvB1lyi%2BgF2jpBzNZcJc0Gkzk%2FG1CYTFoTDYVVAfEDZgpvLD&X-Amz-Signature=479b7ea794c238c014d568bd73faf67be402a7498327e622e22cb3f822a0dc51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7BEY2M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtNjyP2cyIU5rGeL85JEdpFVVE1VmRrAYfoTfiEvdolAiEAppvbbBIG%2F385Ch5s3k%2B%2F84EQ4gpKxPW0ymK8sO5nJOwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKk5C347JWRHzVSKeyrcA5ZIAbu0vE4BTd%2BKRYcltEZL54UzpHNGdplZSZ%2F44A0KL%2BKSZ8rpEQMegRVHvemRbiXH8ey%2BSVY5o16m0HvZKAYmuSkA3bH9XXDkmX9vVT8aLSMCDvtCvwFAzlPFsc5wLIWbZsYmwYHAU4VwC5gjF54z3m%2BYtIl2NiIWc7Gu5G7UalTzzBo2OXpKcujxV8vLm2fzWWSxOV2GQTDv1P5ddQjq6DR2ed%2FV7gODebf%2BmVd04Ij7vrBRT5scnwi8jzkmiJRZlEr4qwjhzuEW8QUbCJyg2XE90kKqTUhNPqjVo4Y6Ha0ithJiaIRN56D%2BtjA5awAGvABJeYW5hLI5ORRercjWbUObGJSgYyZI3oy6zgBsrIBN2gu9%2F7OlV7dKJOiJ8PogKhkt5IYpcGxMVHrXnclpA42%2FM49%2FqPFTnCwunxv00oBOLQco9iTJu4s1nGzHQiyXTJq3TvcBv09fv%2BNzn2WP%2FOx7jIarJ%2BPaXdips2jZ5C%2BVgnrp8UhINTzM1fRdBMj%2ByiigWb3sG5kNVujZ%2BjHAN%2FyNWWCRqPXTo4fIBhisNYs1YMwGOqk4ord9ZQgJ91AybID4tfscwRX%2BlXIxCDIN6aTwQMJPLkfip5%2BdizhlGvULJ4%2BTKzDst%2F3WMJWwgr8GOqUB5%2BM%2F6FzM8wIWNy0WOPrAyTNlWe10DKzHKZv7lv0%2Fab9eUU7WXMw1nYBZw2tnld1RInONn%2F4p6s0oRWXYyik03fcF0VDaqSbCIXQlT76ICjj9rurS8Tud5URMqKVfLf9B38WuLHJwuUgJSFHyP9OMslytu7n4q5En7WtOz67h59D5vvB1lyi%2BgF2jpBzNZcJc0Gkzk%2FG1CYTFoTDYVVAfEDZgpvLD&X-Amz-Signature=46f3e2e6428e96718ef4fc01a11d5cd02400688cb4bdb2a46634fb4a27c191a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
