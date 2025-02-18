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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ONXJXB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFAjvAlwCVlrKtx7JHvfTO0DvMMS9rr1DSqPt5XQ3eQ4AiEA3GakLPMnUx84hiYdXwnt2FEeLvVEofLmPAS%2FPvrfEeAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrvmvO6yPPrl5NdsSrcA5smyHgDwvkB%2FaalbfhKniBe9YD1mYecS9KK9oFe3mHH9NBm5LDbomBG3ZKpYMni84c9di6TTJjplWoMNcmX%2FsYgHXwd5fgnYJAseLK5R2QM0bJr51B8HFko5knjkzWLnJwEcIkSfeg9HYS7RW4GErG8WN4a4W3ZPip0ohUFU%2BwJRRmRl0Xk5qg3YK%2BxkKnPb3VibafsN5ecN%2FTS7C2%2BnILlDXVuhxZyYkH6Uo7wC8HhjvCB5wjqoxwrhK6Bk4R4xX9spo1giioHrQHPVlChOHAgjxyz%2BK03RRlEHs8Qe9bP2NMkygBAaeP9yLP1%2FAN3UpLmEKgk7udGTqeGGtXvHbobFLHvoWJhLhuQzW5ipDa%2B2zvlXIVCtz5Hln4XuWx88Vvzc5i8%2FGtEwT5xVnEEZXiKQIGhzjxN4KC3e1ndIvgTQLnjBDtXuUL8%2B%2BUgit8lLzCCBc0BThc84Rtf6QCAhXUPhhNXL9mY6TbDDMHrYZ8yTKmq9Erbqc2H%2F5j0Mj%2BUVHwGvY0fG8iWlKiVeGZppu%2FRhRFpMZNgkEHis4eiWfLKcc%2FfP5qY0i64JbJZ0RP04jsSRbC760U5C0ieI0modRFczsRt0gq87QJk8fc8ey2%2FMKn1UobathvP6CTzMNWp0L0GOqUB%2FUAeu4DfWGL3T5I6Rq9z1o2CXuAFHXRKkVPn2jTOWDUTckl3HbCqc0XD%2FFLNFPVkUGyF9AUjlDm1tMtIyEY6cg7eyI8lbMqyvVgRISPRB%2BBvdnN8ZfsGkJoJKxXMsyvU%2Fe%2FMMpflhmnj6hZ0upquBltdC0dvRMCZZYbPxll5usQWI0ehvUex6Vq%2FsBioTK5a%2FPFV6%2Bgb8EHVZ1RFQ6%2FI3P5HmrOr&X-Amz-Signature=0836da43927826dd47aef63890aee7311e5c4fc870a1f3951ee553876d5166cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ONXJXB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFAjvAlwCVlrKtx7JHvfTO0DvMMS9rr1DSqPt5XQ3eQ4AiEA3GakLPMnUx84hiYdXwnt2FEeLvVEofLmPAS%2FPvrfEeAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrvmvO6yPPrl5NdsSrcA5smyHgDwvkB%2FaalbfhKniBe9YD1mYecS9KK9oFe3mHH9NBm5LDbomBG3ZKpYMni84c9di6TTJjplWoMNcmX%2FsYgHXwd5fgnYJAseLK5R2QM0bJr51B8HFko5knjkzWLnJwEcIkSfeg9HYS7RW4GErG8WN4a4W3ZPip0ohUFU%2BwJRRmRl0Xk5qg3YK%2BxkKnPb3VibafsN5ecN%2FTS7C2%2BnILlDXVuhxZyYkH6Uo7wC8HhjvCB5wjqoxwrhK6Bk4R4xX9spo1giioHrQHPVlChOHAgjxyz%2BK03RRlEHs8Qe9bP2NMkygBAaeP9yLP1%2FAN3UpLmEKgk7udGTqeGGtXvHbobFLHvoWJhLhuQzW5ipDa%2B2zvlXIVCtz5Hln4XuWx88Vvzc5i8%2FGtEwT5xVnEEZXiKQIGhzjxN4KC3e1ndIvgTQLnjBDtXuUL8%2B%2BUgit8lLzCCBc0BThc84Rtf6QCAhXUPhhNXL9mY6TbDDMHrYZ8yTKmq9Erbqc2H%2F5j0Mj%2BUVHwGvY0fG8iWlKiVeGZppu%2FRhRFpMZNgkEHis4eiWfLKcc%2FfP5qY0i64JbJZ0RP04jsSRbC760U5C0ieI0modRFczsRt0gq87QJk8fc8ey2%2FMKn1UobathvP6CTzMNWp0L0GOqUB%2FUAeu4DfWGL3T5I6Rq9z1o2CXuAFHXRKkVPn2jTOWDUTckl3HbCqc0XD%2FFLNFPVkUGyF9AUjlDm1tMtIyEY6cg7eyI8lbMqyvVgRISPRB%2BBvdnN8ZfsGkJoJKxXMsyvU%2Fe%2FMMpflhmnj6hZ0upquBltdC0dvRMCZZYbPxll5usQWI0ehvUex6Vq%2FsBioTK5a%2FPFV6%2Bgb8EHVZ1RFQ6%2FI3P5HmrOr&X-Amz-Signature=c30d983b38e05f9784f2c501558df6f8b57b29fa55685956423b694ac540d8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ONXJXB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFAjvAlwCVlrKtx7JHvfTO0DvMMS9rr1DSqPt5XQ3eQ4AiEA3GakLPMnUx84hiYdXwnt2FEeLvVEofLmPAS%2FPvrfEeAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrvmvO6yPPrl5NdsSrcA5smyHgDwvkB%2FaalbfhKniBe9YD1mYecS9KK9oFe3mHH9NBm5LDbomBG3ZKpYMni84c9di6TTJjplWoMNcmX%2FsYgHXwd5fgnYJAseLK5R2QM0bJr51B8HFko5knjkzWLnJwEcIkSfeg9HYS7RW4GErG8WN4a4W3ZPip0ohUFU%2BwJRRmRl0Xk5qg3YK%2BxkKnPb3VibafsN5ecN%2FTS7C2%2BnILlDXVuhxZyYkH6Uo7wC8HhjvCB5wjqoxwrhK6Bk4R4xX9spo1giioHrQHPVlChOHAgjxyz%2BK03RRlEHs8Qe9bP2NMkygBAaeP9yLP1%2FAN3UpLmEKgk7udGTqeGGtXvHbobFLHvoWJhLhuQzW5ipDa%2B2zvlXIVCtz5Hln4XuWx88Vvzc5i8%2FGtEwT5xVnEEZXiKQIGhzjxN4KC3e1ndIvgTQLnjBDtXuUL8%2B%2BUgit8lLzCCBc0BThc84Rtf6QCAhXUPhhNXL9mY6TbDDMHrYZ8yTKmq9Erbqc2H%2F5j0Mj%2BUVHwGvY0fG8iWlKiVeGZppu%2FRhRFpMZNgkEHis4eiWfLKcc%2FfP5qY0i64JbJZ0RP04jsSRbC760U5C0ieI0modRFczsRt0gq87QJk8fc8ey2%2FMKn1UobathvP6CTzMNWp0L0GOqUB%2FUAeu4DfWGL3T5I6Rq9z1o2CXuAFHXRKkVPn2jTOWDUTckl3HbCqc0XD%2FFLNFPVkUGyF9AUjlDm1tMtIyEY6cg7eyI8lbMqyvVgRISPRB%2BBvdnN8ZfsGkJoJKxXMsyvU%2Fe%2FMMpflhmnj6hZ0upquBltdC0dvRMCZZYbPxll5usQWI0ehvUex6Vq%2FsBioTK5a%2FPFV6%2Bgb8EHVZ1RFQ6%2FI3P5HmrOr&X-Amz-Signature=40c5a8af15d05cedd3d06ebd4c2fbf32b61966242d5b9ede1ee5d8be009b036e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ONXJXB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFAjvAlwCVlrKtx7JHvfTO0DvMMS9rr1DSqPt5XQ3eQ4AiEA3GakLPMnUx84hiYdXwnt2FEeLvVEofLmPAS%2FPvrfEeAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrvmvO6yPPrl5NdsSrcA5smyHgDwvkB%2FaalbfhKniBe9YD1mYecS9KK9oFe3mHH9NBm5LDbomBG3ZKpYMni84c9di6TTJjplWoMNcmX%2FsYgHXwd5fgnYJAseLK5R2QM0bJr51B8HFko5knjkzWLnJwEcIkSfeg9HYS7RW4GErG8WN4a4W3ZPip0ohUFU%2BwJRRmRl0Xk5qg3YK%2BxkKnPb3VibafsN5ecN%2FTS7C2%2BnILlDXVuhxZyYkH6Uo7wC8HhjvCB5wjqoxwrhK6Bk4R4xX9spo1giioHrQHPVlChOHAgjxyz%2BK03RRlEHs8Qe9bP2NMkygBAaeP9yLP1%2FAN3UpLmEKgk7udGTqeGGtXvHbobFLHvoWJhLhuQzW5ipDa%2B2zvlXIVCtz5Hln4XuWx88Vvzc5i8%2FGtEwT5xVnEEZXiKQIGhzjxN4KC3e1ndIvgTQLnjBDtXuUL8%2B%2BUgit8lLzCCBc0BThc84Rtf6QCAhXUPhhNXL9mY6TbDDMHrYZ8yTKmq9Erbqc2H%2F5j0Mj%2BUVHwGvY0fG8iWlKiVeGZppu%2FRhRFpMZNgkEHis4eiWfLKcc%2FfP5qY0i64JbJZ0RP04jsSRbC760U5C0ieI0modRFczsRt0gq87QJk8fc8ey2%2FMKn1UobathvP6CTzMNWp0L0GOqUB%2FUAeu4DfWGL3T5I6Rq9z1o2CXuAFHXRKkVPn2jTOWDUTckl3HbCqc0XD%2FFLNFPVkUGyF9AUjlDm1tMtIyEY6cg7eyI8lbMqyvVgRISPRB%2BBvdnN8ZfsGkJoJKxXMsyvU%2Fe%2FMMpflhmnj6hZ0upquBltdC0dvRMCZZYbPxll5usQWI0ehvUex6Vq%2FsBioTK5a%2FPFV6%2Bgb8EHVZ1RFQ6%2FI3P5HmrOr&X-Amz-Signature=f1c8229d222b4b2dbab2e4121bb19cc0b6f4fc7a3a33edcaa7808a2470fc37b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ONXJXB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFAjvAlwCVlrKtx7JHvfTO0DvMMS9rr1DSqPt5XQ3eQ4AiEA3GakLPMnUx84hiYdXwnt2FEeLvVEofLmPAS%2FPvrfEeAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrvmvO6yPPrl5NdsSrcA5smyHgDwvkB%2FaalbfhKniBe9YD1mYecS9KK9oFe3mHH9NBm5LDbomBG3ZKpYMni84c9di6TTJjplWoMNcmX%2FsYgHXwd5fgnYJAseLK5R2QM0bJr51B8HFko5knjkzWLnJwEcIkSfeg9HYS7RW4GErG8WN4a4W3ZPip0ohUFU%2BwJRRmRl0Xk5qg3YK%2BxkKnPb3VibafsN5ecN%2FTS7C2%2BnILlDXVuhxZyYkH6Uo7wC8HhjvCB5wjqoxwrhK6Bk4R4xX9spo1giioHrQHPVlChOHAgjxyz%2BK03RRlEHs8Qe9bP2NMkygBAaeP9yLP1%2FAN3UpLmEKgk7udGTqeGGtXvHbobFLHvoWJhLhuQzW5ipDa%2B2zvlXIVCtz5Hln4XuWx88Vvzc5i8%2FGtEwT5xVnEEZXiKQIGhzjxN4KC3e1ndIvgTQLnjBDtXuUL8%2B%2BUgit8lLzCCBc0BThc84Rtf6QCAhXUPhhNXL9mY6TbDDMHrYZ8yTKmq9Erbqc2H%2F5j0Mj%2BUVHwGvY0fG8iWlKiVeGZppu%2FRhRFpMZNgkEHis4eiWfLKcc%2FfP5qY0i64JbJZ0RP04jsSRbC760U5C0ieI0modRFczsRt0gq87QJk8fc8ey2%2FMKn1UobathvP6CTzMNWp0L0GOqUB%2FUAeu4DfWGL3T5I6Rq9z1o2CXuAFHXRKkVPn2jTOWDUTckl3HbCqc0XD%2FFLNFPVkUGyF9AUjlDm1tMtIyEY6cg7eyI8lbMqyvVgRISPRB%2BBvdnN8ZfsGkJoJKxXMsyvU%2Fe%2FMMpflhmnj6hZ0upquBltdC0dvRMCZZYbPxll5usQWI0ehvUex6Vq%2FsBioTK5a%2FPFV6%2Bgb8EHVZ1RFQ6%2FI3P5HmrOr&X-Amz-Signature=fca8fcb678773a55e45b37982abcd564a378dc32a5bd3a0900c36980aacc8d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
