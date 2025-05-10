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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKQVABS2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC2JAHkdk69%2FYzW62MnBmiB3MJ68q4%2FQ3NPnfyTmpqJ8gIhANpov8hwQJvCuhC9PHoDRwBzItMMq22V0baaGk7hw1SCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBivhSkFhAuPdZAZwq3ANtk%2BX3fgr1IFrv%2BvlT8dLcMupQv8LR6NnC3a5GrsDJbAsMv%2BFfWKJgzgWAqqvrU2CsM8tYry5Vu0fvJv7OkaFyprHf1fpQ%2BUWS91VjnUUprj6WZqOXhT3gIvMwoOsf3ysBXn7Iw3ZtWi9v%2F144fFSoFtQhuheG8CqbETbwVPTwAqIphNT%2BFebqV2xLMLLKFyTxVvwGe%2Bk2zX7jnJRrnCKWGZ08mJEDVYbqO0P8HfWzPJsMVb2eZfuOLner%2FAsoqiSpmq73WmSe9FxaH%2B04lNYDrlEvXmIIeuMIqPANU3eTlK%2FYaMR%2FgJMb%2BIRrj6xIKeb208TfcaefMbucN%2Fn3Y28Mm8Tdhw0Ne1uV1ZQk%2B4e16g%2BaXrNcIODj%2BttBywxPJFyTsGNH1wod1Wq%2BWcDBPhgFUU3eDA9o9fikVzTewWyLoZixCrKRX%2Fd0PvEEmKrjEWazit5G0wte9GFcZA84WTSycis00m1jYmctwWalE1IRSXwIb1YJYQ1WmTuLQIb5go%2FFQsFOPOSzhVAHV8q6o%2B903OyTNpILDgLJxWkbskYQc4Ns0Dqhdl9rEKA7PQieG%2BBPhIViHdRDYet7CNd96MCOCj3ft490zJ%2FmCx1nxUP8tfuF0BM8xHoZsYGPHDDm7P7ABjqkAbiMZ5wI%2FSzfWWNR9LmePXZfQpUb7yyUhvrIxMrqh3C8XRooZx233Q0tHuG7SSrU4V6l2aZWCTYQz%2FyJ1cqE6BxhWNwmFpiGm3GNT5wLV3mSvbvp8kErppXcsS5md9tidX3rX4BudG12a6%2FUNNQpRC%2B3inRfSCzJfKC0sFO55gjqlFRr9vBHZ%2BcOqb9uaIjnU%2FUlqBK9otrwh15ere5q0%2BMRdE%2Bo&X-Amz-Signature=105be859ffada5a479c1ee78e9d726e924918a8edb385e33a82b44daf61ab25f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKQVABS2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC2JAHkdk69%2FYzW62MnBmiB3MJ68q4%2FQ3NPnfyTmpqJ8gIhANpov8hwQJvCuhC9PHoDRwBzItMMq22V0baaGk7hw1SCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBivhSkFhAuPdZAZwq3ANtk%2BX3fgr1IFrv%2BvlT8dLcMupQv8LR6NnC3a5GrsDJbAsMv%2BFfWKJgzgWAqqvrU2CsM8tYry5Vu0fvJv7OkaFyprHf1fpQ%2BUWS91VjnUUprj6WZqOXhT3gIvMwoOsf3ysBXn7Iw3ZtWi9v%2F144fFSoFtQhuheG8CqbETbwVPTwAqIphNT%2BFebqV2xLMLLKFyTxVvwGe%2Bk2zX7jnJRrnCKWGZ08mJEDVYbqO0P8HfWzPJsMVb2eZfuOLner%2FAsoqiSpmq73WmSe9FxaH%2B04lNYDrlEvXmIIeuMIqPANU3eTlK%2FYaMR%2FgJMb%2BIRrj6xIKeb208TfcaefMbucN%2Fn3Y28Mm8Tdhw0Ne1uV1ZQk%2B4e16g%2BaXrNcIODj%2BttBywxPJFyTsGNH1wod1Wq%2BWcDBPhgFUU3eDA9o9fikVzTewWyLoZixCrKRX%2Fd0PvEEmKrjEWazit5G0wte9GFcZA84WTSycis00m1jYmctwWalE1IRSXwIb1YJYQ1WmTuLQIb5go%2FFQsFOPOSzhVAHV8q6o%2B903OyTNpILDgLJxWkbskYQc4Ns0Dqhdl9rEKA7PQieG%2BBPhIViHdRDYet7CNd96MCOCj3ft490zJ%2FmCx1nxUP8tfuF0BM8xHoZsYGPHDDm7P7ABjqkAbiMZ5wI%2FSzfWWNR9LmePXZfQpUb7yyUhvrIxMrqh3C8XRooZx233Q0tHuG7SSrU4V6l2aZWCTYQz%2FyJ1cqE6BxhWNwmFpiGm3GNT5wLV3mSvbvp8kErppXcsS5md9tidX3rX4BudG12a6%2FUNNQpRC%2B3inRfSCzJfKC0sFO55gjqlFRr9vBHZ%2BcOqb9uaIjnU%2FUlqBK9otrwh15ere5q0%2BMRdE%2Bo&X-Amz-Signature=2cea90837c558aa9d2a4bab2fc6354a69bf830c78a2233189e774c79699b1c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKQVABS2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC2JAHkdk69%2FYzW62MnBmiB3MJ68q4%2FQ3NPnfyTmpqJ8gIhANpov8hwQJvCuhC9PHoDRwBzItMMq22V0baaGk7hw1SCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBivhSkFhAuPdZAZwq3ANtk%2BX3fgr1IFrv%2BvlT8dLcMupQv8LR6NnC3a5GrsDJbAsMv%2BFfWKJgzgWAqqvrU2CsM8tYry5Vu0fvJv7OkaFyprHf1fpQ%2BUWS91VjnUUprj6WZqOXhT3gIvMwoOsf3ysBXn7Iw3ZtWi9v%2F144fFSoFtQhuheG8CqbETbwVPTwAqIphNT%2BFebqV2xLMLLKFyTxVvwGe%2Bk2zX7jnJRrnCKWGZ08mJEDVYbqO0P8HfWzPJsMVb2eZfuOLner%2FAsoqiSpmq73WmSe9FxaH%2B04lNYDrlEvXmIIeuMIqPANU3eTlK%2FYaMR%2FgJMb%2BIRrj6xIKeb208TfcaefMbucN%2Fn3Y28Mm8Tdhw0Ne1uV1ZQk%2B4e16g%2BaXrNcIODj%2BttBywxPJFyTsGNH1wod1Wq%2BWcDBPhgFUU3eDA9o9fikVzTewWyLoZixCrKRX%2Fd0PvEEmKrjEWazit5G0wte9GFcZA84WTSycis00m1jYmctwWalE1IRSXwIb1YJYQ1WmTuLQIb5go%2FFQsFOPOSzhVAHV8q6o%2B903OyTNpILDgLJxWkbskYQc4Ns0Dqhdl9rEKA7PQieG%2BBPhIViHdRDYet7CNd96MCOCj3ft490zJ%2FmCx1nxUP8tfuF0BM8xHoZsYGPHDDm7P7ABjqkAbiMZ5wI%2FSzfWWNR9LmePXZfQpUb7yyUhvrIxMrqh3C8XRooZx233Q0tHuG7SSrU4V6l2aZWCTYQz%2FyJ1cqE6BxhWNwmFpiGm3GNT5wLV3mSvbvp8kErppXcsS5md9tidX3rX4BudG12a6%2FUNNQpRC%2B3inRfSCzJfKC0sFO55gjqlFRr9vBHZ%2BcOqb9uaIjnU%2FUlqBK9otrwh15ere5q0%2BMRdE%2Bo&X-Amz-Signature=a5b30fa6c222b6936a8e34b389db4b53626974bd4f866def849af1dae4d57b56&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKQVABS2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC2JAHkdk69%2FYzW62MnBmiB3MJ68q4%2FQ3NPnfyTmpqJ8gIhANpov8hwQJvCuhC9PHoDRwBzItMMq22V0baaGk7hw1SCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBivhSkFhAuPdZAZwq3ANtk%2BX3fgr1IFrv%2BvlT8dLcMupQv8LR6NnC3a5GrsDJbAsMv%2BFfWKJgzgWAqqvrU2CsM8tYry5Vu0fvJv7OkaFyprHf1fpQ%2BUWS91VjnUUprj6WZqOXhT3gIvMwoOsf3ysBXn7Iw3ZtWi9v%2F144fFSoFtQhuheG8CqbETbwVPTwAqIphNT%2BFebqV2xLMLLKFyTxVvwGe%2Bk2zX7jnJRrnCKWGZ08mJEDVYbqO0P8HfWzPJsMVb2eZfuOLner%2FAsoqiSpmq73WmSe9FxaH%2B04lNYDrlEvXmIIeuMIqPANU3eTlK%2FYaMR%2FgJMb%2BIRrj6xIKeb208TfcaefMbucN%2Fn3Y28Mm8Tdhw0Ne1uV1ZQk%2B4e16g%2BaXrNcIODj%2BttBywxPJFyTsGNH1wod1Wq%2BWcDBPhgFUU3eDA9o9fikVzTewWyLoZixCrKRX%2Fd0PvEEmKrjEWazit5G0wte9GFcZA84WTSycis00m1jYmctwWalE1IRSXwIb1YJYQ1WmTuLQIb5go%2FFQsFOPOSzhVAHV8q6o%2B903OyTNpILDgLJxWkbskYQc4Ns0Dqhdl9rEKA7PQieG%2BBPhIViHdRDYet7CNd96MCOCj3ft490zJ%2FmCx1nxUP8tfuF0BM8xHoZsYGPHDDm7P7ABjqkAbiMZ5wI%2FSzfWWNR9LmePXZfQpUb7yyUhvrIxMrqh3C8XRooZx233Q0tHuG7SSrU4V6l2aZWCTYQz%2FyJ1cqE6BxhWNwmFpiGm3GNT5wLV3mSvbvp8kErppXcsS5md9tidX3rX4BudG12a6%2FUNNQpRC%2B3inRfSCzJfKC0sFO55gjqlFRr9vBHZ%2BcOqb9uaIjnU%2FUlqBK9otrwh15ere5q0%2BMRdE%2Bo&X-Amz-Signature=23c62d3a808e43398116ae4ba156d41b94b94660fc7a35a182011974d726fab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKQVABS2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC2JAHkdk69%2FYzW62MnBmiB3MJ68q4%2FQ3NPnfyTmpqJ8gIhANpov8hwQJvCuhC9PHoDRwBzItMMq22V0baaGk7hw1SCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBivhSkFhAuPdZAZwq3ANtk%2BX3fgr1IFrv%2BvlT8dLcMupQv8LR6NnC3a5GrsDJbAsMv%2BFfWKJgzgWAqqvrU2CsM8tYry5Vu0fvJv7OkaFyprHf1fpQ%2BUWS91VjnUUprj6WZqOXhT3gIvMwoOsf3ysBXn7Iw3ZtWi9v%2F144fFSoFtQhuheG8CqbETbwVPTwAqIphNT%2BFebqV2xLMLLKFyTxVvwGe%2Bk2zX7jnJRrnCKWGZ08mJEDVYbqO0P8HfWzPJsMVb2eZfuOLner%2FAsoqiSpmq73WmSe9FxaH%2B04lNYDrlEvXmIIeuMIqPANU3eTlK%2FYaMR%2FgJMb%2BIRrj6xIKeb208TfcaefMbucN%2Fn3Y28Mm8Tdhw0Ne1uV1ZQk%2B4e16g%2BaXrNcIODj%2BttBywxPJFyTsGNH1wod1Wq%2BWcDBPhgFUU3eDA9o9fikVzTewWyLoZixCrKRX%2Fd0PvEEmKrjEWazit5G0wte9GFcZA84WTSycis00m1jYmctwWalE1IRSXwIb1YJYQ1WmTuLQIb5go%2FFQsFOPOSzhVAHV8q6o%2B903OyTNpILDgLJxWkbskYQc4Ns0Dqhdl9rEKA7PQieG%2BBPhIViHdRDYet7CNd96MCOCj3ft490zJ%2FmCx1nxUP8tfuF0BM8xHoZsYGPHDDm7P7ABjqkAbiMZ5wI%2FSzfWWNR9LmePXZfQpUb7yyUhvrIxMrqh3C8XRooZx233Q0tHuG7SSrU4V6l2aZWCTYQz%2FyJ1cqE6BxhWNwmFpiGm3GNT5wLV3mSvbvp8kErppXcsS5md9tidX3rX4BudG12a6%2FUNNQpRC%2B3inRfSCzJfKC0sFO55gjqlFRr9vBHZ%2BcOqb9uaIjnU%2FUlqBK9otrwh15ere5q0%2BMRdE%2Bo&X-Amz-Signature=f9d879c49e455794f8e37e5a04ca6e444e97fa37d561c78c02bb9f7e654cd32c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
