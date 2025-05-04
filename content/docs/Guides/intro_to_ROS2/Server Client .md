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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=2b32a4b810c06d803ec1ab782771ddce726fa69aba86a8ce3cab36a4018060c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=a0032f35d13f223555f84e7310e1a8152d14066058e39e2c114f1b66357daef9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=c48841414590dcbc89034c5ee1dce4ee22612b2579785e765f5b4e5f63473fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=51e23a1b0e7730b08502dc78cf330c56d5ed119fc539260625a73e5cb990306e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=a54565120a60f5f352a6a8970c52881b812dcc4ecec1ea7b46091b1723c16c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
