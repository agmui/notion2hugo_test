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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPW662VC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB4oK8CJScZaXRd7ZQe9H2o%2BXare%2Fn7J6xIJcFR2h7GoAiEA%2BUuvdPIUk7UP20o9dj6%2BBd9qqevB921BpaOl5w270Xkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOBPx1BkznmtFsPoyrcA6gnczmHsapEvX5pzOCVwpsoKCbVTnFsrg6A6tsU7wPoBxfqyoh2DaQmxztXwu4cKNLNjtjBwb82q%2BFZbcJpW3JaVLKw0c6ql6zULnfvrinJdvxNhoExXmTz1YUotdJBR%2FdMeiFzYA9p8VrrVXyXJ%2ByTMh2S3pCmyqgBfyJ84nh9KHHSQwo%2FL5LSRIV9hk%2BDpiczNF5Lk1Fx82ZD1cP6wyfWQW07JKF63SMA4%2FBfiQ7%2FgBB4eP7mC752LGQ0rHvTh5X0hopEEYLMzOvV%2FAJrJ%2BHfGieioRLX6teClW19WKmWkZsmVTZ3%2F3VPjG6cU6IDiaJdGgTLikmQni5c4Rcd3x343%2Bp4iGpq6rfh16bgcnwCmG5bQnZGNrHKQeuPJiFA5dHgXZ0l5L%2BL8RNAZNt2SoYd0Cj%2FAvW4hKfaECPtjcxngmjZ7okdIccNXyigMlp2JPpfelkTGP7ytWZ22ew8C5QEZTnZy6ZU1%2BhD7I2961CtKxjTqiAl0%2Bjojh9WBMpHEG4FhyCL%2Bi0cwr9zZlx5T9rn1%2B0cOSMtk0ygQAF9HZU4x6zRPwBZmtFoyHeKdjykaxSyd4dUzY8pj7odjqGZBID%2BII7hApuXIhLJZEnZ%2F0eZNChIuLTP%2B2dhHimuMNT9mL0GOqUBzuqhjinqS2ogvawIBF9D31D5HhPyTJeI2dU1xaYExu1CdREnHA%2FfobOldzFT%2F24l2uDKFxiGEGeUsyAFJWgZ9NzJzTtH6wtQ%2Fm08BCfccnTFIiww95FadnQeYLza9h8bjXQCC%2FmMlEfI62coAKVQqxYDa%2FfLIUIrScpYS5sxDknoxM0KUgLA8NsYJ1jvDyehcfXZmNjk5wwoXadAnBq96RcGBCZG&X-Amz-Signature=8f8b06052df62a41943ae2b4572b178f2d96cd5ca98c8111ce79a5d53353ac5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPW662VC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB4oK8CJScZaXRd7ZQe9H2o%2BXare%2Fn7J6xIJcFR2h7GoAiEA%2BUuvdPIUk7UP20o9dj6%2BBd9qqevB921BpaOl5w270Xkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOBPx1BkznmtFsPoyrcA6gnczmHsapEvX5pzOCVwpsoKCbVTnFsrg6A6tsU7wPoBxfqyoh2DaQmxztXwu4cKNLNjtjBwb82q%2BFZbcJpW3JaVLKw0c6ql6zULnfvrinJdvxNhoExXmTz1YUotdJBR%2FdMeiFzYA9p8VrrVXyXJ%2ByTMh2S3pCmyqgBfyJ84nh9KHHSQwo%2FL5LSRIV9hk%2BDpiczNF5Lk1Fx82ZD1cP6wyfWQW07JKF63SMA4%2FBfiQ7%2FgBB4eP7mC752LGQ0rHvTh5X0hopEEYLMzOvV%2FAJrJ%2BHfGieioRLX6teClW19WKmWkZsmVTZ3%2F3VPjG6cU6IDiaJdGgTLikmQni5c4Rcd3x343%2Bp4iGpq6rfh16bgcnwCmG5bQnZGNrHKQeuPJiFA5dHgXZ0l5L%2BL8RNAZNt2SoYd0Cj%2FAvW4hKfaECPtjcxngmjZ7okdIccNXyigMlp2JPpfelkTGP7ytWZ22ew8C5QEZTnZy6ZU1%2BhD7I2961CtKxjTqiAl0%2Bjojh9WBMpHEG4FhyCL%2Bi0cwr9zZlx5T9rn1%2B0cOSMtk0ygQAF9HZU4x6zRPwBZmtFoyHeKdjykaxSyd4dUzY8pj7odjqGZBID%2BII7hApuXIhLJZEnZ%2F0eZNChIuLTP%2B2dhHimuMNT9mL0GOqUBzuqhjinqS2ogvawIBF9D31D5HhPyTJeI2dU1xaYExu1CdREnHA%2FfobOldzFT%2F24l2uDKFxiGEGeUsyAFJWgZ9NzJzTtH6wtQ%2Fm08BCfccnTFIiww95FadnQeYLza9h8bjXQCC%2FmMlEfI62coAKVQqxYDa%2FfLIUIrScpYS5sxDknoxM0KUgLA8NsYJ1jvDyehcfXZmNjk5wwoXadAnBq96RcGBCZG&X-Amz-Signature=85e28c4bb6a96cbaa8793e4f6f488587e157ab2e74bc56ffd67a6758f7c1b369&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPW662VC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB4oK8CJScZaXRd7ZQe9H2o%2BXare%2Fn7J6xIJcFR2h7GoAiEA%2BUuvdPIUk7UP20o9dj6%2BBd9qqevB921BpaOl5w270Xkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOBPx1BkznmtFsPoyrcA6gnczmHsapEvX5pzOCVwpsoKCbVTnFsrg6A6tsU7wPoBxfqyoh2DaQmxztXwu4cKNLNjtjBwb82q%2BFZbcJpW3JaVLKw0c6ql6zULnfvrinJdvxNhoExXmTz1YUotdJBR%2FdMeiFzYA9p8VrrVXyXJ%2ByTMh2S3pCmyqgBfyJ84nh9KHHSQwo%2FL5LSRIV9hk%2BDpiczNF5Lk1Fx82ZD1cP6wyfWQW07JKF63SMA4%2FBfiQ7%2FgBB4eP7mC752LGQ0rHvTh5X0hopEEYLMzOvV%2FAJrJ%2BHfGieioRLX6teClW19WKmWkZsmVTZ3%2F3VPjG6cU6IDiaJdGgTLikmQni5c4Rcd3x343%2Bp4iGpq6rfh16bgcnwCmG5bQnZGNrHKQeuPJiFA5dHgXZ0l5L%2BL8RNAZNt2SoYd0Cj%2FAvW4hKfaECPtjcxngmjZ7okdIccNXyigMlp2JPpfelkTGP7ytWZ22ew8C5QEZTnZy6ZU1%2BhD7I2961CtKxjTqiAl0%2Bjojh9WBMpHEG4FhyCL%2Bi0cwr9zZlx5T9rn1%2B0cOSMtk0ygQAF9HZU4x6zRPwBZmtFoyHeKdjykaxSyd4dUzY8pj7odjqGZBID%2BII7hApuXIhLJZEnZ%2F0eZNChIuLTP%2B2dhHimuMNT9mL0GOqUBzuqhjinqS2ogvawIBF9D31D5HhPyTJeI2dU1xaYExu1CdREnHA%2FfobOldzFT%2F24l2uDKFxiGEGeUsyAFJWgZ9NzJzTtH6wtQ%2Fm08BCfccnTFIiww95FadnQeYLza9h8bjXQCC%2FmMlEfI62coAKVQqxYDa%2FfLIUIrScpYS5sxDknoxM0KUgLA8NsYJ1jvDyehcfXZmNjk5wwoXadAnBq96RcGBCZG&X-Amz-Signature=ac459b0ad71ab66c30f80dbd4cd96f11c030d5edb47b728e7f6f167ebdcb2e19&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPW662VC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB4oK8CJScZaXRd7ZQe9H2o%2BXare%2Fn7J6xIJcFR2h7GoAiEA%2BUuvdPIUk7UP20o9dj6%2BBd9qqevB921BpaOl5w270Xkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOBPx1BkznmtFsPoyrcA6gnczmHsapEvX5pzOCVwpsoKCbVTnFsrg6A6tsU7wPoBxfqyoh2DaQmxztXwu4cKNLNjtjBwb82q%2BFZbcJpW3JaVLKw0c6ql6zULnfvrinJdvxNhoExXmTz1YUotdJBR%2FdMeiFzYA9p8VrrVXyXJ%2ByTMh2S3pCmyqgBfyJ84nh9KHHSQwo%2FL5LSRIV9hk%2BDpiczNF5Lk1Fx82ZD1cP6wyfWQW07JKF63SMA4%2FBfiQ7%2FgBB4eP7mC752LGQ0rHvTh5X0hopEEYLMzOvV%2FAJrJ%2BHfGieioRLX6teClW19WKmWkZsmVTZ3%2F3VPjG6cU6IDiaJdGgTLikmQni5c4Rcd3x343%2Bp4iGpq6rfh16bgcnwCmG5bQnZGNrHKQeuPJiFA5dHgXZ0l5L%2BL8RNAZNt2SoYd0Cj%2FAvW4hKfaECPtjcxngmjZ7okdIccNXyigMlp2JPpfelkTGP7ytWZ22ew8C5QEZTnZy6ZU1%2BhD7I2961CtKxjTqiAl0%2Bjojh9WBMpHEG4FhyCL%2Bi0cwr9zZlx5T9rn1%2B0cOSMtk0ygQAF9HZU4x6zRPwBZmtFoyHeKdjykaxSyd4dUzY8pj7odjqGZBID%2BII7hApuXIhLJZEnZ%2F0eZNChIuLTP%2B2dhHimuMNT9mL0GOqUBzuqhjinqS2ogvawIBF9D31D5HhPyTJeI2dU1xaYExu1CdREnHA%2FfobOldzFT%2F24l2uDKFxiGEGeUsyAFJWgZ9NzJzTtH6wtQ%2Fm08BCfccnTFIiww95FadnQeYLza9h8bjXQCC%2FmMlEfI62coAKVQqxYDa%2FfLIUIrScpYS5sxDknoxM0KUgLA8NsYJ1jvDyehcfXZmNjk5wwoXadAnBq96RcGBCZG&X-Amz-Signature=d408702a15747b5f9b83ec1ff05989a887a3000ad534a2fefd1de10146a6116b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPW662VC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB4oK8CJScZaXRd7ZQe9H2o%2BXare%2Fn7J6xIJcFR2h7GoAiEA%2BUuvdPIUk7UP20o9dj6%2BBd9qqevB921BpaOl5w270Xkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMOBPx1BkznmtFsPoyrcA6gnczmHsapEvX5pzOCVwpsoKCbVTnFsrg6A6tsU7wPoBxfqyoh2DaQmxztXwu4cKNLNjtjBwb82q%2BFZbcJpW3JaVLKw0c6ql6zULnfvrinJdvxNhoExXmTz1YUotdJBR%2FdMeiFzYA9p8VrrVXyXJ%2ByTMh2S3pCmyqgBfyJ84nh9KHHSQwo%2FL5LSRIV9hk%2BDpiczNF5Lk1Fx82ZD1cP6wyfWQW07JKF63SMA4%2FBfiQ7%2FgBB4eP7mC752LGQ0rHvTh5X0hopEEYLMzOvV%2FAJrJ%2BHfGieioRLX6teClW19WKmWkZsmVTZ3%2F3VPjG6cU6IDiaJdGgTLikmQni5c4Rcd3x343%2Bp4iGpq6rfh16bgcnwCmG5bQnZGNrHKQeuPJiFA5dHgXZ0l5L%2BL8RNAZNt2SoYd0Cj%2FAvW4hKfaECPtjcxngmjZ7okdIccNXyigMlp2JPpfelkTGP7ytWZ22ew8C5QEZTnZy6ZU1%2BhD7I2961CtKxjTqiAl0%2Bjojh9WBMpHEG4FhyCL%2Bi0cwr9zZlx5T9rn1%2B0cOSMtk0ygQAF9HZU4x6zRPwBZmtFoyHeKdjykaxSyd4dUzY8pj7odjqGZBID%2BII7hApuXIhLJZEnZ%2F0eZNChIuLTP%2B2dhHimuMNT9mL0GOqUBzuqhjinqS2ogvawIBF9D31D5HhPyTJeI2dU1xaYExu1CdREnHA%2FfobOldzFT%2F24l2uDKFxiGEGeUsyAFJWgZ9NzJzTtH6wtQ%2Fm08BCfccnTFIiww95FadnQeYLza9h8bjXQCC%2FmMlEfI62coAKVQqxYDa%2FfLIUIrScpYS5sxDknoxM0KUgLA8NsYJ1jvDyehcfXZmNjk5wwoXadAnBq96RcGBCZG&X-Amz-Signature=47f5737032dcaf2d2dc04948d7cffe0574266253089618e24930a6de6d52a566&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
