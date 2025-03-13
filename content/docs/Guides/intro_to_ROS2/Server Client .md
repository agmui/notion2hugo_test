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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZOCRAV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0hW0VSq07Ttd2QM27DQ6IVXxSiGlsr5ISQWFHgy5bwIgRIQEstCtWGxm%2BeblfIzrSIUDilc1KABil7Kpb%2FGx29YqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZRyFD9kTBSyvmAdSrcAyWmxVMMMWWVen6wQp5DOijq51rLkhTsxs6mgrj%2FVEUYehqjsVEp1B%2FQxNZClFGnqXXoPkUL607P7KCMfmE4CcvOnAC3Uxtyng8NlXa8MroNILsC7I4d%2FRzqnytt9cxDIOpOEVI76VqwSnTByw%2F%2B5aMWX%2B08doRNrD1FJSVuZw3sk4o9DmAzg8Wp08u%2FNelytvvEZdi4VTaRGWESpsfriiqlSH6mDVeYS4WRnnUsJrFQiOSKTzj6Z2tGSiui69nlL8rSFgX8V9ZH8GAZIPtLcMj8hjaJVf1VLBvs3T358xSXwJorqSfk43ViVj1V6vkPZONWNeZxW77RRVW%2Bab38qPp%2FoMY5DCrH3KDVFkOjByhSAQ5i6zTObVoJnJoR8BrqBeMkfU4r%2B6J6vVbUbQUsHHmbwQPY0gd0NCl62cWl3IuyURQSnvvzxpjASF0cojVIVp6wwwx580%2FuHVnN1zUgRxMdmtTQ65hOiXvugjGJCpyruQl5Y8RS0NQrMZ9KQjhPHm0DK4DI1UapZk8vvgTubtg4EdaYSamJ4DR3KfXrsMttJ6TfPsgd%2B3cPrM7J%2BOrWzZBZq7dQnPbhNJHFXa0yXxytzjAew36oL%2FCqrLoxdARzG1NDgKpGC%2FauH8QVMJGHyb4GOqUBmek520JmuqEBYb%2FmfnMsqBb8vqfEyJddsw9cilVGF7Wc0sImGkwqyqu8tii4zKtJbmgoYznbU%2Borr7UKz1hFHCKPSeXrLMrn7uixtEQ2tqrcwY8O3vO4A31j5tkhInPyvVlc8X4p50hZtCgifCGOGxpgoPr7pHe%2B0EPr3G7d7sgg5jMicc4%2FmsiB0NCo8C89YAFTZxJ2p4WzQlJ2OshI5HAYxoXJ&X-Amz-Signature=235e59a36e9583b7a73e6de331e171fb4932b439e6cfcbb3cbcd922fc7d64b83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZOCRAV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0hW0VSq07Ttd2QM27DQ6IVXxSiGlsr5ISQWFHgy5bwIgRIQEstCtWGxm%2BeblfIzrSIUDilc1KABil7Kpb%2FGx29YqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZRyFD9kTBSyvmAdSrcAyWmxVMMMWWVen6wQp5DOijq51rLkhTsxs6mgrj%2FVEUYehqjsVEp1B%2FQxNZClFGnqXXoPkUL607P7KCMfmE4CcvOnAC3Uxtyng8NlXa8MroNILsC7I4d%2FRzqnytt9cxDIOpOEVI76VqwSnTByw%2F%2B5aMWX%2B08doRNrD1FJSVuZw3sk4o9DmAzg8Wp08u%2FNelytvvEZdi4VTaRGWESpsfriiqlSH6mDVeYS4WRnnUsJrFQiOSKTzj6Z2tGSiui69nlL8rSFgX8V9ZH8GAZIPtLcMj8hjaJVf1VLBvs3T358xSXwJorqSfk43ViVj1V6vkPZONWNeZxW77RRVW%2Bab38qPp%2FoMY5DCrH3KDVFkOjByhSAQ5i6zTObVoJnJoR8BrqBeMkfU4r%2B6J6vVbUbQUsHHmbwQPY0gd0NCl62cWl3IuyURQSnvvzxpjASF0cojVIVp6wwwx580%2FuHVnN1zUgRxMdmtTQ65hOiXvugjGJCpyruQl5Y8RS0NQrMZ9KQjhPHm0DK4DI1UapZk8vvgTubtg4EdaYSamJ4DR3KfXrsMttJ6TfPsgd%2B3cPrM7J%2BOrWzZBZq7dQnPbhNJHFXa0yXxytzjAew36oL%2FCqrLoxdARzG1NDgKpGC%2FauH8QVMJGHyb4GOqUBmek520JmuqEBYb%2FmfnMsqBb8vqfEyJddsw9cilVGF7Wc0sImGkwqyqu8tii4zKtJbmgoYznbU%2Borr7UKz1hFHCKPSeXrLMrn7uixtEQ2tqrcwY8O3vO4A31j5tkhInPyvVlc8X4p50hZtCgifCGOGxpgoPr7pHe%2B0EPr3G7d7sgg5jMicc4%2FmsiB0NCo8C89YAFTZxJ2p4WzQlJ2OshI5HAYxoXJ&X-Amz-Signature=e0324bf5791060da86bdc95f4fa22fd211a370469d85bfcbed79532ca498c500&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZOCRAV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0hW0VSq07Ttd2QM27DQ6IVXxSiGlsr5ISQWFHgy5bwIgRIQEstCtWGxm%2BeblfIzrSIUDilc1KABil7Kpb%2FGx29YqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZRyFD9kTBSyvmAdSrcAyWmxVMMMWWVen6wQp5DOijq51rLkhTsxs6mgrj%2FVEUYehqjsVEp1B%2FQxNZClFGnqXXoPkUL607P7KCMfmE4CcvOnAC3Uxtyng8NlXa8MroNILsC7I4d%2FRzqnytt9cxDIOpOEVI76VqwSnTByw%2F%2B5aMWX%2B08doRNrD1FJSVuZw3sk4o9DmAzg8Wp08u%2FNelytvvEZdi4VTaRGWESpsfriiqlSH6mDVeYS4WRnnUsJrFQiOSKTzj6Z2tGSiui69nlL8rSFgX8V9ZH8GAZIPtLcMj8hjaJVf1VLBvs3T358xSXwJorqSfk43ViVj1V6vkPZONWNeZxW77RRVW%2Bab38qPp%2FoMY5DCrH3KDVFkOjByhSAQ5i6zTObVoJnJoR8BrqBeMkfU4r%2B6J6vVbUbQUsHHmbwQPY0gd0NCl62cWl3IuyURQSnvvzxpjASF0cojVIVp6wwwx580%2FuHVnN1zUgRxMdmtTQ65hOiXvugjGJCpyruQl5Y8RS0NQrMZ9KQjhPHm0DK4DI1UapZk8vvgTubtg4EdaYSamJ4DR3KfXrsMttJ6TfPsgd%2B3cPrM7J%2BOrWzZBZq7dQnPbhNJHFXa0yXxytzjAew36oL%2FCqrLoxdARzG1NDgKpGC%2FauH8QVMJGHyb4GOqUBmek520JmuqEBYb%2FmfnMsqBb8vqfEyJddsw9cilVGF7Wc0sImGkwqyqu8tii4zKtJbmgoYznbU%2Borr7UKz1hFHCKPSeXrLMrn7uixtEQ2tqrcwY8O3vO4A31j5tkhInPyvVlc8X4p50hZtCgifCGOGxpgoPr7pHe%2B0EPr3G7d7sgg5jMicc4%2FmsiB0NCo8C89YAFTZxJ2p4WzQlJ2OshI5HAYxoXJ&X-Amz-Signature=2ad67732702f772dcfcd04b0b7139217f1c89e49cbd9b4bc775befd3ac004c66&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZOCRAV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0hW0VSq07Ttd2QM27DQ6IVXxSiGlsr5ISQWFHgy5bwIgRIQEstCtWGxm%2BeblfIzrSIUDilc1KABil7Kpb%2FGx29YqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZRyFD9kTBSyvmAdSrcAyWmxVMMMWWVen6wQp5DOijq51rLkhTsxs6mgrj%2FVEUYehqjsVEp1B%2FQxNZClFGnqXXoPkUL607P7KCMfmE4CcvOnAC3Uxtyng8NlXa8MroNILsC7I4d%2FRzqnytt9cxDIOpOEVI76VqwSnTByw%2F%2B5aMWX%2B08doRNrD1FJSVuZw3sk4o9DmAzg8Wp08u%2FNelytvvEZdi4VTaRGWESpsfriiqlSH6mDVeYS4WRnnUsJrFQiOSKTzj6Z2tGSiui69nlL8rSFgX8V9ZH8GAZIPtLcMj8hjaJVf1VLBvs3T358xSXwJorqSfk43ViVj1V6vkPZONWNeZxW77RRVW%2Bab38qPp%2FoMY5DCrH3KDVFkOjByhSAQ5i6zTObVoJnJoR8BrqBeMkfU4r%2B6J6vVbUbQUsHHmbwQPY0gd0NCl62cWl3IuyURQSnvvzxpjASF0cojVIVp6wwwx580%2FuHVnN1zUgRxMdmtTQ65hOiXvugjGJCpyruQl5Y8RS0NQrMZ9KQjhPHm0DK4DI1UapZk8vvgTubtg4EdaYSamJ4DR3KfXrsMttJ6TfPsgd%2B3cPrM7J%2BOrWzZBZq7dQnPbhNJHFXa0yXxytzjAew36oL%2FCqrLoxdARzG1NDgKpGC%2FauH8QVMJGHyb4GOqUBmek520JmuqEBYb%2FmfnMsqBb8vqfEyJddsw9cilVGF7Wc0sImGkwqyqu8tii4zKtJbmgoYznbU%2Borr7UKz1hFHCKPSeXrLMrn7uixtEQ2tqrcwY8O3vO4A31j5tkhInPyvVlc8X4p50hZtCgifCGOGxpgoPr7pHe%2B0EPr3G7d7sgg5jMicc4%2FmsiB0NCo8C89YAFTZxJ2p4WzQlJ2OshI5HAYxoXJ&X-Amz-Signature=6c8ccd91a626fea2c4380caf7f7992fef6dc6daeca04a96a08d000c353acf0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZOCRAV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0hW0VSq07Ttd2QM27DQ6IVXxSiGlsr5ISQWFHgy5bwIgRIQEstCtWGxm%2BeblfIzrSIUDilc1KABil7Kpb%2FGx29YqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZRyFD9kTBSyvmAdSrcAyWmxVMMMWWVen6wQp5DOijq51rLkhTsxs6mgrj%2FVEUYehqjsVEp1B%2FQxNZClFGnqXXoPkUL607P7KCMfmE4CcvOnAC3Uxtyng8NlXa8MroNILsC7I4d%2FRzqnytt9cxDIOpOEVI76VqwSnTByw%2F%2B5aMWX%2B08doRNrD1FJSVuZw3sk4o9DmAzg8Wp08u%2FNelytvvEZdi4VTaRGWESpsfriiqlSH6mDVeYS4WRnnUsJrFQiOSKTzj6Z2tGSiui69nlL8rSFgX8V9ZH8GAZIPtLcMj8hjaJVf1VLBvs3T358xSXwJorqSfk43ViVj1V6vkPZONWNeZxW77RRVW%2Bab38qPp%2FoMY5DCrH3KDVFkOjByhSAQ5i6zTObVoJnJoR8BrqBeMkfU4r%2B6J6vVbUbQUsHHmbwQPY0gd0NCl62cWl3IuyURQSnvvzxpjASF0cojVIVp6wwwx580%2FuHVnN1zUgRxMdmtTQ65hOiXvugjGJCpyruQl5Y8RS0NQrMZ9KQjhPHm0DK4DI1UapZk8vvgTubtg4EdaYSamJ4DR3KfXrsMttJ6TfPsgd%2B3cPrM7J%2BOrWzZBZq7dQnPbhNJHFXa0yXxytzjAew36oL%2FCqrLoxdARzG1NDgKpGC%2FauH8QVMJGHyb4GOqUBmek520JmuqEBYb%2FmfnMsqBb8vqfEyJddsw9cilVGF7Wc0sImGkwqyqu8tii4zKtJbmgoYznbU%2Borr7UKz1hFHCKPSeXrLMrn7uixtEQ2tqrcwY8O3vO4A31j5tkhInPyvVlc8X4p50hZtCgifCGOGxpgoPr7pHe%2B0EPr3G7d7sgg5jMicc4%2FmsiB0NCo8C89YAFTZxJ2p4WzQlJ2OshI5HAYxoXJ&X-Amz-Signature=17a2309832756541ef52443b512c3b7cf2b7ecd1e3878c48c17820dc1a0f1e54&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
