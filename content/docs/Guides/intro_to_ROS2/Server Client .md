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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DAUQ4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSDGmpeaitDvFbYkn6DNNEjx2%2FtheqOJ2qWPdTglKDbAiAFNwOGTl8BTRtg9sZ5TtfE7ueXEgSroWsFZlql%2F8jQCSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymV44xvHeodrC%2BXAKtwDwy4V4w49DAjZFdW7mCJCytkJY1MJjGpDlSPL2gVegVDQbytGSq4S79HHBuYAA5xu6rDlPC8w0DCfnlCHoAeFOfA1JfDkydv%2FK3Qn7hOZdrsIJ5nrw4cck37nrq82%2B171YnfPyoAh%2Ffiu7BLp1wP10gmE3cDWan9XS4dyvgzmlNKU%2Fh7el93MNPx%2Fimn0IpX6pOhU5GDtlXSQmG%2BxeTtAm8fw5wH32sdoK%2BxV0k6YVfC6Mx9dW%2FL3SsAO%2F6xaW22S4Ag8ayAn9L6UoM1l25LYT7E5MriNAT4f8mmAKIdPkl7UulbTw3%2FjEdXLg%2BroNfREupw2SohuGT%2FPBa8a8Xa5SuKwFtPU%2BMfNvgM4PATpKPUAg2%2BsfNGzd65bGeqA9Nvqxo%2FMYl62hN95KSaxAWmg6OQBZUlmWDJCZPbEDE%2B8HZ%2BTDdzVsAyfiOjrFlWW%2BkuXxWRynIc%2FnZGefBa3iTR%2FLbdc62ipX8%2B4BZgOLksKJ0j%2BGU18mrNfM7htE6YiqLPvzqdiSudywXdnWy4ahByenKGvy8KuorxVi6ix%2Fht3Mv7Q2Ntrw9vjzVROEngrdzcMzv0QOkXDeP%2FmAhv7vB4QtcHOd1dV3XswTj%2BuhImsEGEVSCiBrUNSbvw8GiEwjrzJvgY6pgFxeh7p%2FybZif%2BhkE2fdoW89hfSEs%2BwPqAvg9D7hrplX4afCXuZUjF8KmrTAm6jB9eSJE0TF%2FWnvCRhB7gLUtFaSRGJO5afDojqYjBpBTk8FrRwRJ%2BJ94Qv%2BpSca1PTJMQd7%2FHx4iYmxxDAMuxX7F5jsD9Qfo7anWzvQW3QaIjfNM%2FiH3txGjcJMgoMYs%2FhdRpdUVkJChqYw5OzTMVJsnhuwOVMIC17&X-Amz-Signature=442536e80091a9124ed296ef8f100da4672d59aa0481eb0ad4b3a5d50db2622b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DAUQ4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSDGmpeaitDvFbYkn6DNNEjx2%2FtheqOJ2qWPdTglKDbAiAFNwOGTl8BTRtg9sZ5TtfE7ueXEgSroWsFZlql%2F8jQCSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymV44xvHeodrC%2BXAKtwDwy4V4w49DAjZFdW7mCJCytkJY1MJjGpDlSPL2gVegVDQbytGSq4S79HHBuYAA5xu6rDlPC8w0DCfnlCHoAeFOfA1JfDkydv%2FK3Qn7hOZdrsIJ5nrw4cck37nrq82%2B171YnfPyoAh%2Ffiu7BLp1wP10gmE3cDWan9XS4dyvgzmlNKU%2Fh7el93MNPx%2Fimn0IpX6pOhU5GDtlXSQmG%2BxeTtAm8fw5wH32sdoK%2BxV0k6YVfC6Mx9dW%2FL3SsAO%2F6xaW22S4Ag8ayAn9L6UoM1l25LYT7E5MriNAT4f8mmAKIdPkl7UulbTw3%2FjEdXLg%2BroNfREupw2SohuGT%2FPBa8a8Xa5SuKwFtPU%2BMfNvgM4PATpKPUAg2%2BsfNGzd65bGeqA9Nvqxo%2FMYl62hN95KSaxAWmg6OQBZUlmWDJCZPbEDE%2B8HZ%2BTDdzVsAyfiOjrFlWW%2BkuXxWRynIc%2FnZGefBa3iTR%2FLbdc62ipX8%2B4BZgOLksKJ0j%2BGU18mrNfM7htE6YiqLPvzqdiSudywXdnWy4ahByenKGvy8KuorxVi6ix%2Fht3Mv7Q2Ntrw9vjzVROEngrdzcMzv0QOkXDeP%2FmAhv7vB4QtcHOd1dV3XswTj%2BuhImsEGEVSCiBrUNSbvw8GiEwjrzJvgY6pgFxeh7p%2FybZif%2BhkE2fdoW89hfSEs%2BwPqAvg9D7hrplX4afCXuZUjF8KmrTAm6jB9eSJE0TF%2FWnvCRhB7gLUtFaSRGJO5afDojqYjBpBTk8FrRwRJ%2BJ94Qv%2BpSca1PTJMQd7%2FHx4iYmxxDAMuxX7F5jsD9Qfo7anWzvQW3QaIjfNM%2FiH3txGjcJMgoMYs%2FhdRpdUVkJChqYw5OzTMVJsnhuwOVMIC17&X-Amz-Signature=29ab50620b09ef1990c7ab716964b8c4adc632d3b1423c5d38c46b389d49e58d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DAUQ4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSDGmpeaitDvFbYkn6DNNEjx2%2FtheqOJ2qWPdTglKDbAiAFNwOGTl8BTRtg9sZ5TtfE7ueXEgSroWsFZlql%2F8jQCSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymV44xvHeodrC%2BXAKtwDwy4V4w49DAjZFdW7mCJCytkJY1MJjGpDlSPL2gVegVDQbytGSq4S79HHBuYAA5xu6rDlPC8w0DCfnlCHoAeFOfA1JfDkydv%2FK3Qn7hOZdrsIJ5nrw4cck37nrq82%2B171YnfPyoAh%2Ffiu7BLp1wP10gmE3cDWan9XS4dyvgzmlNKU%2Fh7el93MNPx%2Fimn0IpX6pOhU5GDtlXSQmG%2BxeTtAm8fw5wH32sdoK%2BxV0k6YVfC6Mx9dW%2FL3SsAO%2F6xaW22S4Ag8ayAn9L6UoM1l25LYT7E5MriNAT4f8mmAKIdPkl7UulbTw3%2FjEdXLg%2BroNfREupw2SohuGT%2FPBa8a8Xa5SuKwFtPU%2BMfNvgM4PATpKPUAg2%2BsfNGzd65bGeqA9Nvqxo%2FMYl62hN95KSaxAWmg6OQBZUlmWDJCZPbEDE%2B8HZ%2BTDdzVsAyfiOjrFlWW%2BkuXxWRynIc%2FnZGefBa3iTR%2FLbdc62ipX8%2B4BZgOLksKJ0j%2BGU18mrNfM7htE6YiqLPvzqdiSudywXdnWy4ahByenKGvy8KuorxVi6ix%2Fht3Mv7Q2Ntrw9vjzVROEngrdzcMzv0QOkXDeP%2FmAhv7vB4QtcHOd1dV3XswTj%2BuhImsEGEVSCiBrUNSbvw8GiEwjrzJvgY6pgFxeh7p%2FybZif%2BhkE2fdoW89hfSEs%2BwPqAvg9D7hrplX4afCXuZUjF8KmrTAm6jB9eSJE0TF%2FWnvCRhB7gLUtFaSRGJO5afDojqYjBpBTk8FrRwRJ%2BJ94Qv%2BpSca1PTJMQd7%2FHx4iYmxxDAMuxX7F5jsD9Qfo7anWzvQW3QaIjfNM%2FiH3txGjcJMgoMYs%2FhdRpdUVkJChqYw5OzTMVJsnhuwOVMIC17&X-Amz-Signature=01525cf61d8c63cf13ec963ef1824b8fc961eaa9f204b9a74c82b616aafed641&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DAUQ4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSDGmpeaitDvFbYkn6DNNEjx2%2FtheqOJ2qWPdTglKDbAiAFNwOGTl8BTRtg9sZ5TtfE7ueXEgSroWsFZlql%2F8jQCSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymV44xvHeodrC%2BXAKtwDwy4V4w49DAjZFdW7mCJCytkJY1MJjGpDlSPL2gVegVDQbytGSq4S79HHBuYAA5xu6rDlPC8w0DCfnlCHoAeFOfA1JfDkydv%2FK3Qn7hOZdrsIJ5nrw4cck37nrq82%2B171YnfPyoAh%2Ffiu7BLp1wP10gmE3cDWan9XS4dyvgzmlNKU%2Fh7el93MNPx%2Fimn0IpX6pOhU5GDtlXSQmG%2BxeTtAm8fw5wH32sdoK%2BxV0k6YVfC6Mx9dW%2FL3SsAO%2F6xaW22S4Ag8ayAn9L6UoM1l25LYT7E5MriNAT4f8mmAKIdPkl7UulbTw3%2FjEdXLg%2BroNfREupw2SohuGT%2FPBa8a8Xa5SuKwFtPU%2BMfNvgM4PATpKPUAg2%2BsfNGzd65bGeqA9Nvqxo%2FMYl62hN95KSaxAWmg6OQBZUlmWDJCZPbEDE%2B8HZ%2BTDdzVsAyfiOjrFlWW%2BkuXxWRynIc%2FnZGefBa3iTR%2FLbdc62ipX8%2B4BZgOLksKJ0j%2BGU18mrNfM7htE6YiqLPvzqdiSudywXdnWy4ahByenKGvy8KuorxVi6ix%2Fht3Mv7Q2Ntrw9vjzVROEngrdzcMzv0QOkXDeP%2FmAhv7vB4QtcHOd1dV3XswTj%2BuhImsEGEVSCiBrUNSbvw8GiEwjrzJvgY6pgFxeh7p%2FybZif%2BhkE2fdoW89hfSEs%2BwPqAvg9D7hrplX4afCXuZUjF8KmrTAm6jB9eSJE0TF%2FWnvCRhB7gLUtFaSRGJO5afDojqYjBpBTk8FrRwRJ%2BJ94Qv%2BpSca1PTJMQd7%2FHx4iYmxxDAMuxX7F5jsD9Qfo7anWzvQW3QaIjfNM%2FiH3txGjcJMgoMYs%2FhdRpdUVkJChqYw5OzTMVJsnhuwOVMIC17&X-Amz-Signature=8aa24fc5f6d6729b49496b793d12152e4dbcc7bcd997b41dbed09e6274b7d6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DAUQ4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSDGmpeaitDvFbYkn6DNNEjx2%2FtheqOJ2qWPdTglKDbAiAFNwOGTl8BTRtg9sZ5TtfE7ueXEgSroWsFZlql%2F8jQCSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymV44xvHeodrC%2BXAKtwDwy4V4w49DAjZFdW7mCJCytkJY1MJjGpDlSPL2gVegVDQbytGSq4S79HHBuYAA5xu6rDlPC8w0DCfnlCHoAeFOfA1JfDkydv%2FK3Qn7hOZdrsIJ5nrw4cck37nrq82%2B171YnfPyoAh%2Ffiu7BLp1wP10gmE3cDWan9XS4dyvgzmlNKU%2Fh7el93MNPx%2Fimn0IpX6pOhU5GDtlXSQmG%2BxeTtAm8fw5wH32sdoK%2BxV0k6YVfC6Mx9dW%2FL3SsAO%2F6xaW22S4Ag8ayAn9L6UoM1l25LYT7E5MriNAT4f8mmAKIdPkl7UulbTw3%2FjEdXLg%2BroNfREupw2SohuGT%2FPBa8a8Xa5SuKwFtPU%2BMfNvgM4PATpKPUAg2%2BsfNGzd65bGeqA9Nvqxo%2FMYl62hN95KSaxAWmg6OQBZUlmWDJCZPbEDE%2B8HZ%2BTDdzVsAyfiOjrFlWW%2BkuXxWRynIc%2FnZGefBa3iTR%2FLbdc62ipX8%2B4BZgOLksKJ0j%2BGU18mrNfM7htE6YiqLPvzqdiSudywXdnWy4ahByenKGvy8KuorxVi6ix%2Fht3Mv7Q2Ntrw9vjzVROEngrdzcMzv0QOkXDeP%2FmAhv7vB4QtcHOd1dV3XswTj%2BuhImsEGEVSCiBrUNSbvw8GiEwjrzJvgY6pgFxeh7p%2FybZif%2BhkE2fdoW89hfSEs%2BwPqAvg9D7hrplX4afCXuZUjF8KmrTAm6jB9eSJE0TF%2FWnvCRhB7gLUtFaSRGJO5afDojqYjBpBTk8FrRwRJ%2BJ94Qv%2BpSca1PTJMQd7%2FHx4iYmxxDAMuxX7F5jsD9Qfo7anWzvQW3QaIjfNM%2FiH3txGjcJMgoMYs%2FhdRpdUVkJChqYw5OzTMVJsnhuwOVMIC17&X-Amz-Signature=ff1a0fca132a073b165fc0c003ef13497d9a26c72b1a07b86f83d37c351bd3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
