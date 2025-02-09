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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O47WIAV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr56b0sEL4o5dnrrhXOiQIJCoVYG5XJ0KpEWrnwzDMmgIhAK6%2BTqdBvAXIB45G%2FhD4%2FeWhTpd75U%2FCY1emrGlhTiJbKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4VqJAss6h3yOBB4q3ANF3HSmk74sXCCbpfhyC2BHj%2FLMlA0wCBhRbdYaKBH3jpT2ZwPT94ZI9u9b68%2BWD1cKUR1u7Xyrdb4KJ6l%2F7L7JEszxwOEo5Zek27mC3ae3FbWluSrSzJrXcqiyZNDXpwUsDF3S1ArDKn3S3YUX0%2Fe%2FhYTY0qRttKIsintIPzQNPRw1t5fodiqgAqVAM2CYNwpZB%2FYMrfpL2duyw%2BmZDQ9LWrYzYqZqn%2FoEbHqm%2FvuxNStEJMeqILTQELwj0DaVPjXnomK05%2F3lq22iopEbhqLNMlbNdZoXyq%2B0yydFXuS2KXo%2F1ocEaGzJ7yRaHWxA8qic9jp%2F6CmLSZIWEbJf7q%2BxeNoYUCd8hM1ifhT11nFzC5M%2Bt4Dn1tjRlniIALKnXqpxEYTuOr2bZdXx9BFd0Q5WkIWMvx5CQUDCcl2ZfrvTthsQIdWf6wpezdI2ietjkg7YusDPiJmNnZP71kwahPJRi7C6O2mTKHRBLRjFC4mM0w0hsyj201ARW3%2FzF2t0%2Be8QCfiOto%2BcTGgiyXcViD%2BakI9Spj7IoMmb9qflc167jntPvC22nDEr%2FJBaz8jtHX4oEbxI7wYUK75BWKj6peLI2xmfOZ6AYMysnCuo%2F7dcMbBz9spZVxOJYTMnijDv46G9BjqkAVEv4U7ZG0py11yfUpPB3E0tFYepUsqqPws6PQHBQIEAxkNj9V5xtcseyG5Oy00VVDr4X4PQVn9AggJ1N1Bd3h1bRg9mVKsPtD%2B6MlY14Ylh6F44RpTnDSwdrOeVz%2F8H%2BkTEoGp204W7l7JUJ7QBJb84CZ7RpzF%2BzHLQShtoYHnNBAByGkgPvT2cZYFQX1AaQ1ElJVcKBFtMD2j2WGUsuf5H7WlJ&X-Amz-Signature=2400aa2cb2a8ec88d50a2348a715a08e55409c232d55c25da78a22d2b299fdd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O47WIAV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr56b0sEL4o5dnrrhXOiQIJCoVYG5XJ0KpEWrnwzDMmgIhAK6%2BTqdBvAXIB45G%2FhD4%2FeWhTpd75U%2FCY1emrGlhTiJbKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4VqJAss6h3yOBB4q3ANF3HSmk74sXCCbpfhyC2BHj%2FLMlA0wCBhRbdYaKBH3jpT2ZwPT94ZI9u9b68%2BWD1cKUR1u7Xyrdb4KJ6l%2F7L7JEszxwOEo5Zek27mC3ae3FbWluSrSzJrXcqiyZNDXpwUsDF3S1ArDKn3S3YUX0%2Fe%2FhYTY0qRttKIsintIPzQNPRw1t5fodiqgAqVAM2CYNwpZB%2FYMrfpL2duyw%2BmZDQ9LWrYzYqZqn%2FoEbHqm%2FvuxNStEJMeqILTQELwj0DaVPjXnomK05%2F3lq22iopEbhqLNMlbNdZoXyq%2B0yydFXuS2KXo%2F1ocEaGzJ7yRaHWxA8qic9jp%2F6CmLSZIWEbJf7q%2BxeNoYUCd8hM1ifhT11nFzC5M%2Bt4Dn1tjRlniIALKnXqpxEYTuOr2bZdXx9BFd0Q5WkIWMvx5CQUDCcl2ZfrvTthsQIdWf6wpezdI2ietjkg7YusDPiJmNnZP71kwahPJRi7C6O2mTKHRBLRjFC4mM0w0hsyj201ARW3%2FzF2t0%2Be8QCfiOto%2BcTGgiyXcViD%2BakI9Spj7IoMmb9qflc167jntPvC22nDEr%2FJBaz8jtHX4oEbxI7wYUK75BWKj6peLI2xmfOZ6AYMysnCuo%2F7dcMbBz9spZVxOJYTMnijDv46G9BjqkAVEv4U7ZG0py11yfUpPB3E0tFYepUsqqPws6PQHBQIEAxkNj9V5xtcseyG5Oy00VVDr4X4PQVn9AggJ1N1Bd3h1bRg9mVKsPtD%2B6MlY14Ylh6F44RpTnDSwdrOeVz%2F8H%2BkTEoGp204W7l7JUJ7QBJb84CZ7RpzF%2BzHLQShtoYHnNBAByGkgPvT2cZYFQX1AaQ1ElJVcKBFtMD2j2WGUsuf5H7WlJ&X-Amz-Signature=aaba8af2dbefa01f27ba39ec41cb098bfa4402a6337a4237c5ccb86777140b87&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O47WIAV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr56b0sEL4o5dnrrhXOiQIJCoVYG5XJ0KpEWrnwzDMmgIhAK6%2BTqdBvAXIB45G%2FhD4%2FeWhTpd75U%2FCY1emrGlhTiJbKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4VqJAss6h3yOBB4q3ANF3HSmk74sXCCbpfhyC2BHj%2FLMlA0wCBhRbdYaKBH3jpT2ZwPT94ZI9u9b68%2BWD1cKUR1u7Xyrdb4KJ6l%2F7L7JEszxwOEo5Zek27mC3ae3FbWluSrSzJrXcqiyZNDXpwUsDF3S1ArDKn3S3YUX0%2Fe%2FhYTY0qRttKIsintIPzQNPRw1t5fodiqgAqVAM2CYNwpZB%2FYMrfpL2duyw%2BmZDQ9LWrYzYqZqn%2FoEbHqm%2FvuxNStEJMeqILTQELwj0DaVPjXnomK05%2F3lq22iopEbhqLNMlbNdZoXyq%2B0yydFXuS2KXo%2F1ocEaGzJ7yRaHWxA8qic9jp%2F6CmLSZIWEbJf7q%2BxeNoYUCd8hM1ifhT11nFzC5M%2Bt4Dn1tjRlniIALKnXqpxEYTuOr2bZdXx9BFd0Q5WkIWMvx5CQUDCcl2ZfrvTthsQIdWf6wpezdI2ietjkg7YusDPiJmNnZP71kwahPJRi7C6O2mTKHRBLRjFC4mM0w0hsyj201ARW3%2FzF2t0%2Be8QCfiOto%2BcTGgiyXcViD%2BakI9Spj7IoMmb9qflc167jntPvC22nDEr%2FJBaz8jtHX4oEbxI7wYUK75BWKj6peLI2xmfOZ6AYMysnCuo%2F7dcMbBz9spZVxOJYTMnijDv46G9BjqkAVEv4U7ZG0py11yfUpPB3E0tFYepUsqqPws6PQHBQIEAxkNj9V5xtcseyG5Oy00VVDr4X4PQVn9AggJ1N1Bd3h1bRg9mVKsPtD%2B6MlY14Ylh6F44RpTnDSwdrOeVz%2F8H%2BkTEoGp204W7l7JUJ7QBJb84CZ7RpzF%2BzHLQShtoYHnNBAByGkgPvT2cZYFQX1AaQ1ElJVcKBFtMD2j2WGUsuf5H7WlJ&X-Amz-Signature=e33ecf59b311affbd7ddf6d84449059eb79265e83aca7ce09ee6733870b9182d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O47WIAV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr56b0sEL4o5dnrrhXOiQIJCoVYG5XJ0KpEWrnwzDMmgIhAK6%2BTqdBvAXIB45G%2FhD4%2FeWhTpd75U%2FCY1emrGlhTiJbKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4VqJAss6h3yOBB4q3ANF3HSmk74sXCCbpfhyC2BHj%2FLMlA0wCBhRbdYaKBH3jpT2ZwPT94ZI9u9b68%2BWD1cKUR1u7Xyrdb4KJ6l%2F7L7JEszxwOEo5Zek27mC3ae3FbWluSrSzJrXcqiyZNDXpwUsDF3S1ArDKn3S3YUX0%2Fe%2FhYTY0qRttKIsintIPzQNPRw1t5fodiqgAqVAM2CYNwpZB%2FYMrfpL2duyw%2BmZDQ9LWrYzYqZqn%2FoEbHqm%2FvuxNStEJMeqILTQELwj0DaVPjXnomK05%2F3lq22iopEbhqLNMlbNdZoXyq%2B0yydFXuS2KXo%2F1ocEaGzJ7yRaHWxA8qic9jp%2F6CmLSZIWEbJf7q%2BxeNoYUCd8hM1ifhT11nFzC5M%2Bt4Dn1tjRlniIALKnXqpxEYTuOr2bZdXx9BFd0Q5WkIWMvx5CQUDCcl2ZfrvTthsQIdWf6wpezdI2ietjkg7YusDPiJmNnZP71kwahPJRi7C6O2mTKHRBLRjFC4mM0w0hsyj201ARW3%2FzF2t0%2Be8QCfiOto%2BcTGgiyXcViD%2BakI9Spj7IoMmb9qflc167jntPvC22nDEr%2FJBaz8jtHX4oEbxI7wYUK75BWKj6peLI2xmfOZ6AYMysnCuo%2F7dcMbBz9spZVxOJYTMnijDv46G9BjqkAVEv4U7ZG0py11yfUpPB3E0tFYepUsqqPws6PQHBQIEAxkNj9V5xtcseyG5Oy00VVDr4X4PQVn9AggJ1N1Bd3h1bRg9mVKsPtD%2B6MlY14Ylh6F44RpTnDSwdrOeVz%2F8H%2BkTEoGp204W7l7JUJ7QBJb84CZ7RpzF%2BzHLQShtoYHnNBAByGkgPvT2cZYFQX1AaQ1ElJVcKBFtMD2j2WGUsuf5H7WlJ&X-Amz-Signature=a8554a0e1c10df369c38cdf3ba252690b98ebbc6ba9dc98d2727bf85896ca438&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O47WIAV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr56b0sEL4o5dnrrhXOiQIJCoVYG5XJ0KpEWrnwzDMmgIhAK6%2BTqdBvAXIB45G%2FhD4%2FeWhTpd75U%2FCY1emrGlhTiJbKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4VqJAss6h3yOBB4q3ANF3HSmk74sXCCbpfhyC2BHj%2FLMlA0wCBhRbdYaKBH3jpT2ZwPT94ZI9u9b68%2BWD1cKUR1u7Xyrdb4KJ6l%2F7L7JEszxwOEo5Zek27mC3ae3FbWluSrSzJrXcqiyZNDXpwUsDF3S1ArDKn3S3YUX0%2Fe%2FhYTY0qRttKIsintIPzQNPRw1t5fodiqgAqVAM2CYNwpZB%2FYMrfpL2duyw%2BmZDQ9LWrYzYqZqn%2FoEbHqm%2FvuxNStEJMeqILTQELwj0DaVPjXnomK05%2F3lq22iopEbhqLNMlbNdZoXyq%2B0yydFXuS2KXo%2F1ocEaGzJ7yRaHWxA8qic9jp%2F6CmLSZIWEbJf7q%2BxeNoYUCd8hM1ifhT11nFzC5M%2Bt4Dn1tjRlniIALKnXqpxEYTuOr2bZdXx9BFd0Q5WkIWMvx5CQUDCcl2ZfrvTthsQIdWf6wpezdI2ietjkg7YusDPiJmNnZP71kwahPJRi7C6O2mTKHRBLRjFC4mM0w0hsyj201ARW3%2FzF2t0%2Be8QCfiOto%2BcTGgiyXcViD%2BakI9Spj7IoMmb9qflc167jntPvC22nDEr%2FJBaz8jtHX4oEbxI7wYUK75BWKj6peLI2xmfOZ6AYMysnCuo%2F7dcMbBz9spZVxOJYTMnijDv46G9BjqkAVEv4U7ZG0py11yfUpPB3E0tFYepUsqqPws6PQHBQIEAxkNj9V5xtcseyG5Oy00VVDr4X4PQVn9AggJ1N1Bd3h1bRg9mVKsPtD%2B6MlY14Ylh6F44RpTnDSwdrOeVz%2F8H%2BkTEoGp204W7l7JUJ7QBJb84CZ7RpzF%2BzHLQShtoYHnNBAByGkgPvT2cZYFQX1AaQ1ElJVcKBFtMD2j2WGUsuf5H7WlJ&X-Amz-Signature=23830b1c043677af67126bb25ecc1b40a66742d29e933a036a6c806b6545b3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
