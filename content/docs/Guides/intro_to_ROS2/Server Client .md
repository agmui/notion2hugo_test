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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIR45L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZZxvhVYry3o3Thzmm74riK7ab%2BUGfRqqx68EWwxvHgIgOeqA2oT1IgmUKqwsbhYCJhp5ixlZR8dl8ecdG7DYrdIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4vQmOkLyahHAmgFyrcAx2ealAeZMIyl84PWTP%2BVwg3S7KLFyE4L5ZInGL8Z5dH0PYmCSZFy8zVgsrAmL0U3hnenW64CMoYK5jxs4KwRHLKcIxku12UsrZDXwsNkqaN1PxlHSdYvooKDdZf2x4nHLWWDK47Y%2B8x%2FQoIPXfnUZ3ndbWj3MHgHWllWgosvTavdxu774Riq1DyDOJXK0NTDqepz1irCKs8Zz13SzLIvBKu0rYIBp7nC%2BrH7CEvVgiLOTlw6KiJKD9oa0A7r%2BaKHKhwLeXxz2mM6zRydGD7%2B8lOcPJV3K%2B67B9bH2het4jf6fJGRqobYauPt4MreNCuF%2Ffzqw%2BIKRDy6%2BqRhZn%2BLBznR9icxcOL6m1UAMreeBXMvqdb9H5Hh0of3aovrPdyKHbKvzxay%2FcLVmjbJ12qSfcgKY1TBm6kzGRtQdFpa6rXuNzDQNHRluZGj9yTAo%2FrLoPMbbAdcVtzI6fEJYyn%2FpLdVCkovFDI7RxlozFCkAKH5FbJMTvDprSS1LNKoos5AFzpoSaSTjD1XDSM4ePQKLYeT2DSbX003KHFhi%2FGbjEARemfn1aGivOEE7jjo4PFfHKJtK8SIJZbCCdd4VqvjihfFJVm8e%2BslVwtjBfvVEef%2B4vZbQsojUV3gPH%2FMIqmtMMGOqUB4kcDMW72x%2B%2FBMRX%2FnxKR63BjVQBSAaPNH%2F14yzpPXzKlblUE0gA9xzQTQxiKdOiOMzKZirHJl978B4MrhOnN8Z7JjpCen5RYBWf88AyY4fHIjmyD%2FF0nuyJcYhh7l7t5lrGo5sEvY3MNLlZjcbBzZulMYfx9vh%2Fk39q3ZUw9jPJJ%2Bm2UYL8Dayqavk2CAF2QjuzPWuKeaoK8YTCS4o4POwz3QCma&X-Amz-Signature=6890a7543f5861586dc5eb6a7ff200895e263019aa55eeea7816e254f48cffe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIR45L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZZxvhVYry3o3Thzmm74riK7ab%2BUGfRqqx68EWwxvHgIgOeqA2oT1IgmUKqwsbhYCJhp5ixlZR8dl8ecdG7DYrdIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4vQmOkLyahHAmgFyrcAx2ealAeZMIyl84PWTP%2BVwg3S7KLFyE4L5ZInGL8Z5dH0PYmCSZFy8zVgsrAmL0U3hnenW64CMoYK5jxs4KwRHLKcIxku12UsrZDXwsNkqaN1PxlHSdYvooKDdZf2x4nHLWWDK47Y%2B8x%2FQoIPXfnUZ3ndbWj3MHgHWllWgosvTavdxu774Riq1DyDOJXK0NTDqepz1irCKs8Zz13SzLIvBKu0rYIBp7nC%2BrH7CEvVgiLOTlw6KiJKD9oa0A7r%2BaKHKhwLeXxz2mM6zRydGD7%2B8lOcPJV3K%2B67B9bH2het4jf6fJGRqobYauPt4MreNCuF%2Ffzqw%2BIKRDy6%2BqRhZn%2BLBznR9icxcOL6m1UAMreeBXMvqdb9H5Hh0of3aovrPdyKHbKvzxay%2FcLVmjbJ12qSfcgKY1TBm6kzGRtQdFpa6rXuNzDQNHRluZGj9yTAo%2FrLoPMbbAdcVtzI6fEJYyn%2FpLdVCkovFDI7RxlozFCkAKH5FbJMTvDprSS1LNKoos5AFzpoSaSTjD1XDSM4ePQKLYeT2DSbX003KHFhi%2FGbjEARemfn1aGivOEE7jjo4PFfHKJtK8SIJZbCCdd4VqvjihfFJVm8e%2BslVwtjBfvVEef%2B4vZbQsojUV3gPH%2FMIqmtMMGOqUB4kcDMW72x%2B%2FBMRX%2FnxKR63BjVQBSAaPNH%2F14yzpPXzKlblUE0gA9xzQTQxiKdOiOMzKZirHJl978B4MrhOnN8Z7JjpCen5RYBWf88AyY4fHIjmyD%2FF0nuyJcYhh7l7t5lrGo5sEvY3MNLlZjcbBzZulMYfx9vh%2Fk39q3ZUw9jPJJ%2Bm2UYL8Dayqavk2CAF2QjuzPWuKeaoK8YTCS4o4POwz3QCma&X-Amz-Signature=198dc6747bc0c95f89b20eee5f40f7224788e11bef11a6bfdc5c04a9e0f08575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIR45L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZZxvhVYry3o3Thzmm74riK7ab%2BUGfRqqx68EWwxvHgIgOeqA2oT1IgmUKqwsbhYCJhp5ixlZR8dl8ecdG7DYrdIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4vQmOkLyahHAmgFyrcAx2ealAeZMIyl84PWTP%2BVwg3S7KLFyE4L5ZInGL8Z5dH0PYmCSZFy8zVgsrAmL0U3hnenW64CMoYK5jxs4KwRHLKcIxku12UsrZDXwsNkqaN1PxlHSdYvooKDdZf2x4nHLWWDK47Y%2B8x%2FQoIPXfnUZ3ndbWj3MHgHWllWgosvTavdxu774Riq1DyDOJXK0NTDqepz1irCKs8Zz13SzLIvBKu0rYIBp7nC%2BrH7CEvVgiLOTlw6KiJKD9oa0A7r%2BaKHKhwLeXxz2mM6zRydGD7%2B8lOcPJV3K%2B67B9bH2het4jf6fJGRqobYauPt4MreNCuF%2Ffzqw%2BIKRDy6%2BqRhZn%2BLBznR9icxcOL6m1UAMreeBXMvqdb9H5Hh0of3aovrPdyKHbKvzxay%2FcLVmjbJ12qSfcgKY1TBm6kzGRtQdFpa6rXuNzDQNHRluZGj9yTAo%2FrLoPMbbAdcVtzI6fEJYyn%2FpLdVCkovFDI7RxlozFCkAKH5FbJMTvDprSS1LNKoos5AFzpoSaSTjD1XDSM4ePQKLYeT2DSbX003KHFhi%2FGbjEARemfn1aGivOEE7jjo4PFfHKJtK8SIJZbCCdd4VqvjihfFJVm8e%2BslVwtjBfvVEef%2B4vZbQsojUV3gPH%2FMIqmtMMGOqUB4kcDMW72x%2B%2FBMRX%2FnxKR63BjVQBSAaPNH%2F14yzpPXzKlblUE0gA9xzQTQxiKdOiOMzKZirHJl978B4MrhOnN8Z7JjpCen5RYBWf88AyY4fHIjmyD%2FF0nuyJcYhh7l7t5lrGo5sEvY3MNLlZjcbBzZulMYfx9vh%2Fk39q3ZUw9jPJJ%2Bm2UYL8Dayqavk2CAF2QjuzPWuKeaoK8YTCS4o4POwz3QCma&X-Amz-Signature=5249b89b1b380ec7af477da2a4226c6c4cd40101728cb9111cdb4e15da9cc579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIR45L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZZxvhVYry3o3Thzmm74riK7ab%2BUGfRqqx68EWwxvHgIgOeqA2oT1IgmUKqwsbhYCJhp5ixlZR8dl8ecdG7DYrdIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4vQmOkLyahHAmgFyrcAx2ealAeZMIyl84PWTP%2BVwg3S7KLFyE4L5ZInGL8Z5dH0PYmCSZFy8zVgsrAmL0U3hnenW64CMoYK5jxs4KwRHLKcIxku12UsrZDXwsNkqaN1PxlHSdYvooKDdZf2x4nHLWWDK47Y%2B8x%2FQoIPXfnUZ3ndbWj3MHgHWllWgosvTavdxu774Riq1DyDOJXK0NTDqepz1irCKs8Zz13SzLIvBKu0rYIBp7nC%2BrH7CEvVgiLOTlw6KiJKD9oa0A7r%2BaKHKhwLeXxz2mM6zRydGD7%2B8lOcPJV3K%2B67B9bH2het4jf6fJGRqobYauPt4MreNCuF%2Ffzqw%2BIKRDy6%2BqRhZn%2BLBznR9icxcOL6m1UAMreeBXMvqdb9H5Hh0of3aovrPdyKHbKvzxay%2FcLVmjbJ12qSfcgKY1TBm6kzGRtQdFpa6rXuNzDQNHRluZGj9yTAo%2FrLoPMbbAdcVtzI6fEJYyn%2FpLdVCkovFDI7RxlozFCkAKH5FbJMTvDprSS1LNKoos5AFzpoSaSTjD1XDSM4ePQKLYeT2DSbX003KHFhi%2FGbjEARemfn1aGivOEE7jjo4PFfHKJtK8SIJZbCCdd4VqvjihfFJVm8e%2BslVwtjBfvVEef%2B4vZbQsojUV3gPH%2FMIqmtMMGOqUB4kcDMW72x%2B%2FBMRX%2FnxKR63BjVQBSAaPNH%2F14yzpPXzKlblUE0gA9xzQTQxiKdOiOMzKZirHJl978B4MrhOnN8Z7JjpCen5RYBWf88AyY4fHIjmyD%2FF0nuyJcYhh7l7t5lrGo5sEvY3MNLlZjcbBzZulMYfx9vh%2Fk39q3ZUw9jPJJ%2Bm2UYL8Dayqavk2CAF2QjuzPWuKeaoK8YTCS4o4POwz3QCma&X-Amz-Signature=058a5532bc40bc4b3bc4ab2743c4b4d7e0a9ecfbc636ab40c7b8a190de5fb56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIR45L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZZxvhVYry3o3Thzmm74riK7ab%2BUGfRqqx68EWwxvHgIgOeqA2oT1IgmUKqwsbhYCJhp5ixlZR8dl8ecdG7DYrdIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4vQmOkLyahHAmgFyrcAx2ealAeZMIyl84PWTP%2BVwg3S7KLFyE4L5ZInGL8Z5dH0PYmCSZFy8zVgsrAmL0U3hnenW64CMoYK5jxs4KwRHLKcIxku12UsrZDXwsNkqaN1PxlHSdYvooKDdZf2x4nHLWWDK47Y%2B8x%2FQoIPXfnUZ3ndbWj3MHgHWllWgosvTavdxu774Riq1DyDOJXK0NTDqepz1irCKs8Zz13SzLIvBKu0rYIBp7nC%2BrH7CEvVgiLOTlw6KiJKD9oa0A7r%2BaKHKhwLeXxz2mM6zRydGD7%2B8lOcPJV3K%2B67B9bH2het4jf6fJGRqobYauPt4MreNCuF%2Ffzqw%2BIKRDy6%2BqRhZn%2BLBznR9icxcOL6m1UAMreeBXMvqdb9H5Hh0of3aovrPdyKHbKvzxay%2FcLVmjbJ12qSfcgKY1TBm6kzGRtQdFpa6rXuNzDQNHRluZGj9yTAo%2FrLoPMbbAdcVtzI6fEJYyn%2FpLdVCkovFDI7RxlozFCkAKH5FbJMTvDprSS1LNKoos5AFzpoSaSTjD1XDSM4ePQKLYeT2DSbX003KHFhi%2FGbjEARemfn1aGivOEE7jjo4PFfHKJtK8SIJZbCCdd4VqvjihfFJVm8e%2BslVwtjBfvVEef%2B4vZbQsojUV3gPH%2FMIqmtMMGOqUB4kcDMW72x%2B%2FBMRX%2FnxKR63BjVQBSAaPNH%2F14yzpPXzKlblUE0gA9xzQTQxiKdOiOMzKZirHJl978B4MrhOnN8Z7JjpCen5RYBWf88AyY4fHIjmyD%2FF0nuyJcYhh7l7t5lrGo5sEvY3MNLlZjcbBzZulMYfx9vh%2Fk39q3ZUw9jPJJ%2Bm2UYL8Dayqavk2CAF2QjuzPWuKeaoK8YTCS4o4POwz3QCma&X-Amz-Signature=a5c13b590fdce7450ad84e3b60f9feb52af4198fbe95d75000e407a54bec2835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
