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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUBVDQHY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfX4Wi2KhpZm9nlveKnYQNbNgF5IYRVp881USD4F%2BSCgIhAP%2B0m3TEfCUdVF7UQtG%2Br1a6GbRnfdq%2B%2FX89weuzLYKWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzRfVo0D%2Fc%2FBA2CnwEq3AN1HMll5SStyFnDhWncwhfowvDVI%2F5ilT7%2BhZ6cZYqyPeAEk5%2F3%2Fgun4DywE2PPj%2BzTJMdKn6PCekd1x8e27wElQVkMlsrU07SrdER1k4TPTkDMbrCCZq2apAGVdsjr6vgw61EOzw0btxwAqqm3ng7Ye5CvquyZ%2Bq2OxCyk0PYoxDAx9m97oaTNaaAp6RsXWWXM2IoMcHMtaIplVBoutQS%2Bg65BOTBUr%2B7kpe1uQevaF6FnQszY%2FlVudxO162s92cPJsQ%2BSkvPOyip%2BFgvPCc2ZH9l6B2IRh3NAWh0AA2wOqdFkWTd1I%2BS2spxOHOMUw88529ajYuoa%2BmsswvGXFRRl%2FP1Am5SQfKfT44TAswQ%2F83jAs1Cua%2FGCRiiupcPZciKgQkPv78kXVMqqA8S9%2BA7h3O03Z0rv%2FI59%2BY8Sxu836eHZi5kjPtvOYd%2BRGJO%2FYGv%2BLKlpXiJbPSQtEUsjkEqVyrgsKy8zdn2d0cjEYQEP86QaP0ZWKDdvWn7XoBCKULdEbt%2F3bG2WLUOEL4AFHW6R3PqZvhL70g%2B55BqA1vn%2BWI2CI%2B%2FrArctbn2vcAM5KKbZvoPeX6A63%2BFIivLStYfvD8gn0KgBSbpmej8XpQt%2F37tBgM0hlDTa53XbUTDm3%2FHABjqkAUYiVTjRd39uIGtphOpf3bZ%2BrRXmbpPkA3qiljwh0QTZWxDZ8dD%2BuRi%2FdXhLhtG4CkneB48toIjaOQyaU0tD0fhznUtqJbFqn6a40Lgayao3R0JFo7ktHAX7O0dRQsH4XQWbLXiC%2F5l89HOy3eyiybcwK%2F6L4RJL9XxW%2BSLsVdkJoGd7Asn3UEzg1jsR29AFdpy3mGP0tNmvt4H%2Brd5shZSE%2Ft%2B%2F&X-Amz-Signature=b4f4c2c5ca9e415ed76782f62b766ae886dfecc594a1963d3dd15048b8244a17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUBVDQHY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfX4Wi2KhpZm9nlveKnYQNbNgF5IYRVp881USD4F%2BSCgIhAP%2B0m3TEfCUdVF7UQtG%2Br1a6GbRnfdq%2B%2FX89weuzLYKWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzRfVo0D%2Fc%2FBA2CnwEq3AN1HMll5SStyFnDhWncwhfowvDVI%2F5ilT7%2BhZ6cZYqyPeAEk5%2F3%2Fgun4DywE2PPj%2BzTJMdKn6PCekd1x8e27wElQVkMlsrU07SrdER1k4TPTkDMbrCCZq2apAGVdsjr6vgw61EOzw0btxwAqqm3ng7Ye5CvquyZ%2Bq2OxCyk0PYoxDAx9m97oaTNaaAp6RsXWWXM2IoMcHMtaIplVBoutQS%2Bg65BOTBUr%2B7kpe1uQevaF6FnQszY%2FlVudxO162s92cPJsQ%2BSkvPOyip%2BFgvPCc2ZH9l6B2IRh3NAWh0AA2wOqdFkWTd1I%2BS2spxOHOMUw88529ajYuoa%2BmsswvGXFRRl%2FP1Am5SQfKfT44TAswQ%2F83jAs1Cua%2FGCRiiupcPZciKgQkPv78kXVMqqA8S9%2BA7h3O03Z0rv%2FI59%2BY8Sxu836eHZi5kjPtvOYd%2BRGJO%2FYGv%2BLKlpXiJbPSQtEUsjkEqVyrgsKy8zdn2d0cjEYQEP86QaP0ZWKDdvWn7XoBCKULdEbt%2F3bG2WLUOEL4AFHW6R3PqZvhL70g%2B55BqA1vn%2BWI2CI%2B%2FrArctbn2vcAM5KKbZvoPeX6A63%2BFIivLStYfvD8gn0KgBSbpmej8XpQt%2F37tBgM0hlDTa53XbUTDm3%2FHABjqkAUYiVTjRd39uIGtphOpf3bZ%2BrRXmbpPkA3qiljwh0QTZWxDZ8dD%2BuRi%2FdXhLhtG4CkneB48toIjaOQyaU0tD0fhznUtqJbFqn6a40Lgayao3R0JFo7ktHAX7O0dRQsH4XQWbLXiC%2F5l89HOy3eyiybcwK%2F6L4RJL9XxW%2BSLsVdkJoGd7Asn3UEzg1jsR29AFdpy3mGP0tNmvt4H%2Brd5shZSE%2Ft%2B%2F&X-Amz-Signature=87e56632778c1e241517a2348eed30de8a60a05c8c548ad0328152c8c64ee6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUBVDQHY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfX4Wi2KhpZm9nlveKnYQNbNgF5IYRVp881USD4F%2BSCgIhAP%2B0m3TEfCUdVF7UQtG%2Br1a6GbRnfdq%2B%2FX89weuzLYKWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzRfVo0D%2Fc%2FBA2CnwEq3AN1HMll5SStyFnDhWncwhfowvDVI%2F5ilT7%2BhZ6cZYqyPeAEk5%2F3%2Fgun4DywE2PPj%2BzTJMdKn6PCekd1x8e27wElQVkMlsrU07SrdER1k4TPTkDMbrCCZq2apAGVdsjr6vgw61EOzw0btxwAqqm3ng7Ye5CvquyZ%2Bq2OxCyk0PYoxDAx9m97oaTNaaAp6RsXWWXM2IoMcHMtaIplVBoutQS%2Bg65BOTBUr%2B7kpe1uQevaF6FnQszY%2FlVudxO162s92cPJsQ%2BSkvPOyip%2BFgvPCc2ZH9l6B2IRh3NAWh0AA2wOqdFkWTd1I%2BS2spxOHOMUw88529ajYuoa%2BmsswvGXFRRl%2FP1Am5SQfKfT44TAswQ%2F83jAs1Cua%2FGCRiiupcPZciKgQkPv78kXVMqqA8S9%2BA7h3O03Z0rv%2FI59%2BY8Sxu836eHZi5kjPtvOYd%2BRGJO%2FYGv%2BLKlpXiJbPSQtEUsjkEqVyrgsKy8zdn2d0cjEYQEP86QaP0ZWKDdvWn7XoBCKULdEbt%2F3bG2WLUOEL4AFHW6R3PqZvhL70g%2B55BqA1vn%2BWI2CI%2B%2FrArctbn2vcAM5KKbZvoPeX6A63%2BFIivLStYfvD8gn0KgBSbpmej8XpQt%2F37tBgM0hlDTa53XbUTDm3%2FHABjqkAUYiVTjRd39uIGtphOpf3bZ%2BrRXmbpPkA3qiljwh0QTZWxDZ8dD%2BuRi%2FdXhLhtG4CkneB48toIjaOQyaU0tD0fhznUtqJbFqn6a40Lgayao3R0JFo7ktHAX7O0dRQsH4XQWbLXiC%2F5l89HOy3eyiybcwK%2F6L4RJL9XxW%2BSLsVdkJoGd7Asn3UEzg1jsR29AFdpy3mGP0tNmvt4H%2Brd5shZSE%2Ft%2B%2F&X-Amz-Signature=0dbd4c781ceaaef94ffa481c5505c4e45a36b25aea4a25691bd218b2904fc22f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUBVDQHY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfX4Wi2KhpZm9nlveKnYQNbNgF5IYRVp881USD4F%2BSCgIhAP%2B0m3TEfCUdVF7UQtG%2Br1a6GbRnfdq%2B%2FX89weuzLYKWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzRfVo0D%2Fc%2FBA2CnwEq3AN1HMll5SStyFnDhWncwhfowvDVI%2F5ilT7%2BhZ6cZYqyPeAEk5%2F3%2Fgun4DywE2PPj%2BzTJMdKn6PCekd1x8e27wElQVkMlsrU07SrdER1k4TPTkDMbrCCZq2apAGVdsjr6vgw61EOzw0btxwAqqm3ng7Ye5CvquyZ%2Bq2OxCyk0PYoxDAx9m97oaTNaaAp6RsXWWXM2IoMcHMtaIplVBoutQS%2Bg65BOTBUr%2B7kpe1uQevaF6FnQszY%2FlVudxO162s92cPJsQ%2BSkvPOyip%2BFgvPCc2ZH9l6B2IRh3NAWh0AA2wOqdFkWTd1I%2BS2spxOHOMUw88529ajYuoa%2BmsswvGXFRRl%2FP1Am5SQfKfT44TAswQ%2F83jAs1Cua%2FGCRiiupcPZciKgQkPv78kXVMqqA8S9%2BA7h3O03Z0rv%2FI59%2BY8Sxu836eHZi5kjPtvOYd%2BRGJO%2FYGv%2BLKlpXiJbPSQtEUsjkEqVyrgsKy8zdn2d0cjEYQEP86QaP0ZWKDdvWn7XoBCKULdEbt%2F3bG2WLUOEL4AFHW6R3PqZvhL70g%2B55BqA1vn%2BWI2CI%2B%2FrArctbn2vcAM5KKbZvoPeX6A63%2BFIivLStYfvD8gn0KgBSbpmej8XpQt%2F37tBgM0hlDTa53XbUTDm3%2FHABjqkAUYiVTjRd39uIGtphOpf3bZ%2BrRXmbpPkA3qiljwh0QTZWxDZ8dD%2BuRi%2FdXhLhtG4CkneB48toIjaOQyaU0tD0fhznUtqJbFqn6a40Lgayao3R0JFo7ktHAX7O0dRQsH4XQWbLXiC%2F5l89HOy3eyiybcwK%2F6L4RJL9XxW%2BSLsVdkJoGd7Asn3UEzg1jsR29AFdpy3mGP0tNmvt4H%2Brd5shZSE%2Ft%2B%2F&X-Amz-Signature=d8b3fd633a422fc7a9cda5941499297fea1056deadb09e6277021e308fe7ca0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUBVDQHY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfX4Wi2KhpZm9nlveKnYQNbNgF5IYRVp881USD4F%2BSCgIhAP%2B0m3TEfCUdVF7UQtG%2Br1a6GbRnfdq%2B%2FX89weuzLYKWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzRfVo0D%2Fc%2FBA2CnwEq3AN1HMll5SStyFnDhWncwhfowvDVI%2F5ilT7%2BhZ6cZYqyPeAEk5%2F3%2Fgun4DywE2PPj%2BzTJMdKn6PCekd1x8e27wElQVkMlsrU07SrdER1k4TPTkDMbrCCZq2apAGVdsjr6vgw61EOzw0btxwAqqm3ng7Ye5CvquyZ%2Bq2OxCyk0PYoxDAx9m97oaTNaaAp6RsXWWXM2IoMcHMtaIplVBoutQS%2Bg65BOTBUr%2B7kpe1uQevaF6FnQszY%2FlVudxO162s92cPJsQ%2BSkvPOyip%2BFgvPCc2ZH9l6B2IRh3NAWh0AA2wOqdFkWTd1I%2BS2spxOHOMUw88529ajYuoa%2BmsswvGXFRRl%2FP1Am5SQfKfT44TAswQ%2F83jAs1Cua%2FGCRiiupcPZciKgQkPv78kXVMqqA8S9%2BA7h3O03Z0rv%2FI59%2BY8Sxu836eHZi5kjPtvOYd%2BRGJO%2FYGv%2BLKlpXiJbPSQtEUsjkEqVyrgsKy8zdn2d0cjEYQEP86QaP0ZWKDdvWn7XoBCKULdEbt%2F3bG2WLUOEL4AFHW6R3PqZvhL70g%2B55BqA1vn%2BWI2CI%2B%2FrArctbn2vcAM5KKbZvoPeX6A63%2BFIivLStYfvD8gn0KgBSbpmej8XpQt%2F37tBgM0hlDTa53XbUTDm3%2FHABjqkAUYiVTjRd39uIGtphOpf3bZ%2BrRXmbpPkA3qiljwh0QTZWxDZ8dD%2BuRi%2FdXhLhtG4CkneB48toIjaOQyaU0tD0fhznUtqJbFqn6a40Lgayao3R0JFo7ktHAX7O0dRQsH4XQWbLXiC%2F5l89HOy3eyiybcwK%2F6L4RJL9XxW%2BSLsVdkJoGd7Asn3UEzg1jsR29AFdpy3mGP0tNmvt4H%2Brd5shZSE%2Ft%2B%2F&X-Amz-Signature=0035dc1c969b681ea7d91d421e5c310bf8b48e69f9f2b8cecf999e7cda811de7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
