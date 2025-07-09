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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBA64B6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBM93T8vRiF31pRGo3Tl9LUZFQh%2FobXIbfvx2SaaznSQIgcldzA5LhlRq%2FKtxpQcjnvZnFLh0GbOdITDKDVScYY7gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5rmdd%2BW1ZHuCRaqCrcA7dJN9I2LsDgpFrzz8qLAHza2e9vRq4k57PN6S%2Fdah9gGiph%2FOZUBUUr8LmBDeeghvcERjM0DZK5Nd%2BH8XYrATOAxzVPELgrsJL2xDwKtPbbNCY40At3QAn2%2B6FoUsrNSVN41XncaWI1zaP%2FhVakkPX6V3OgKuQKJY3%2F9OJnngBwBcy%2B%2BN87ADUdiUcPdQu2AM5vFMUpTNJRZTzK6WN3nGuxwbVqNeH3BUSVnb0HQhEDERNbZTgsrhmVH1xoXtsSLHzhxng0sK1pG9Hy43t3Lb0Pl18jV4mocGbv%2BdwEwS24R%2FnIUp4joyszTP%2B5DSQcvJ%2FonkLkLAQrvgFj5iNWrwlW3gIcl0AVjS%2B5XLpb1o9q1pZdGQlzsNaqZ2X2leGWJY8JDpaOXksmVuREHXgZwTWTIZsQ0%2Ffoh6zPQQvKkdZd%2FKjKfDnrNI%2B3eAO6KsPE1Ke5B9CpzKSlbHxPqPNRfgyKOUobcuaBqAdYATeut%2FLxHK9NJ%2FY90OVsxlUe5QkGM1B1AHhhdsHp63XJOFXUQE0XB1YCc90pIGza8gEWwotV%2F%2BMkoWy2ABVGOOta05p5puI%2BaQCuMEloEyLB6QruN6WifwaQxZDZss38ntMR%2Bs%2FChtyTh5HV1IbeoM28MJuLucMGOqUBq%2BFaVblXciiQrH3PdhYJnrQ9cjxVRzuhl3nBF4ZmNNd56q%2BfomYLlL%2B6kuouNPqKAGsDDiQ5gJpjYYf899TO7r0LAxe%2FHa9BM%2F%2BceYlsfiZidoC7kWHT66SVY7AfJD2yBBcota%2F4BYbYBqiG5w%2BzvLgNnaAmXiMDWm8WKVK4S6f6wmfD5HpSjXtwinyzOuDVtibsOWdXkTdVYoqy1kbiA6P12Um9&X-Amz-Signature=b4e31a3adb64ec94767cf0c73911faad60775b75a99b80703c9bff7086779e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBA64B6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBM93T8vRiF31pRGo3Tl9LUZFQh%2FobXIbfvx2SaaznSQIgcldzA5LhlRq%2FKtxpQcjnvZnFLh0GbOdITDKDVScYY7gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5rmdd%2BW1ZHuCRaqCrcA7dJN9I2LsDgpFrzz8qLAHza2e9vRq4k57PN6S%2Fdah9gGiph%2FOZUBUUr8LmBDeeghvcERjM0DZK5Nd%2BH8XYrATOAxzVPELgrsJL2xDwKtPbbNCY40At3QAn2%2B6FoUsrNSVN41XncaWI1zaP%2FhVakkPX6V3OgKuQKJY3%2F9OJnngBwBcy%2B%2BN87ADUdiUcPdQu2AM5vFMUpTNJRZTzK6WN3nGuxwbVqNeH3BUSVnb0HQhEDERNbZTgsrhmVH1xoXtsSLHzhxng0sK1pG9Hy43t3Lb0Pl18jV4mocGbv%2BdwEwS24R%2FnIUp4joyszTP%2B5DSQcvJ%2FonkLkLAQrvgFj5iNWrwlW3gIcl0AVjS%2B5XLpb1o9q1pZdGQlzsNaqZ2X2leGWJY8JDpaOXksmVuREHXgZwTWTIZsQ0%2Ffoh6zPQQvKkdZd%2FKjKfDnrNI%2B3eAO6KsPE1Ke5B9CpzKSlbHxPqPNRfgyKOUobcuaBqAdYATeut%2FLxHK9NJ%2FY90OVsxlUe5QkGM1B1AHhhdsHp63XJOFXUQE0XB1YCc90pIGza8gEWwotV%2F%2BMkoWy2ABVGOOta05p5puI%2BaQCuMEloEyLB6QruN6WifwaQxZDZss38ntMR%2Bs%2FChtyTh5HV1IbeoM28MJuLucMGOqUBq%2BFaVblXciiQrH3PdhYJnrQ9cjxVRzuhl3nBF4ZmNNd56q%2BfomYLlL%2B6kuouNPqKAGsDDiQ5gJpjYYf899TO7r0LAxe%2FHa9BM%2F%2BceYlsfiZidoC7kWHT66SVY7AfJD2yBBcota%2F4BYbYBqiG5w%2BzvLgNnaAmXiMDWm8WKVK4S6f6wmfD5HpSjXtwinyzOuDVtibsOWdXkTdVYoqy1kbiA6P12Um9&X-Amz-Signature=98a819e50414f8d2ec4c4758948416d90ef8c74c618135b2b44754c77c960a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBA64B6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBM93T8vRiF31pRGo3Tl9LUZFQh%2FobXIbfvx2SaaznSQIgcldzA5LhlRq%2FKtxpQcjnvZnFLh0GbOdITDKDVScYY7gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5rmdd%2BW1ZHuCRaqCrcA7dJN9I2LsDgpFrzz8qLAHza2e9vRq4k57PN6S%2Fdah9gGiph%2FOZUBUUr8LmBDeeghvcERjM0DZK5Nd%2BH8XYrATOAxzVPELgrsJL2xDwKtPbbNCY40At3QAn2%2B6FoUsrNSVN41XncaWI1zaP%2FhVakkPX6V3OgKuQKJY3%2F9OJnngBwBcy%2B%2BN87ADUdiUcPdQu2AM5vFMUpTNJRZTzK6WN3nGuxwbVqNeH3BUSVnb0HQhEDERNbZTgsrhmVH1xoXtsSLHzhxng0sK1pG9Hy43t3Lb0Pl18jV4mocGbv%2BdwEwS24R%2FnIUp4joyszTP%2B5DSQcvJ%2FonkLkLAQrvgFj5iNWrwlW3gIcl0AVjS%2B5XLpb1o9q1pZdGQlzsNaqZ2X2leGWJY8JDpaOXksmVuREHXgZwTWTIZsQ0%2Ffoh6zPQQvKkdZd%2FKjKfDnrNI%2B3eAO6KsPE1Ke5B9CpzKSlbHxPqPNRfgyKOUobcuaBqAdYATeut%2FLxHK9NJ%2FY90OVsxlUe5QkGM1B1AHhhdsHp63XJOFXUQE0XB1YCc90pIGza8gEWwotV%2F%2BMkoWy2ABVGOOta05p5puI%2BaQCuMEloEyLB6QruN6WifwaQxZDZss38ntMR%2Bs%2FChtyTh5HV1IbeoM28MJuLucMGOqUBq%2BFaVblXciiQrH3PdhYJnrQ9cjxVRzuhl3nBF4ZmNNd56q%2BfomYLlL%2B6kuouNPqKAGsDDiQ5gJpjYYf899TO7r0LAxe%2FHa9BM%2F%2BceYlsfiZidoC7kWHT66SVY7AfJD2yBBcota%2F4BYbYBqiG5w%2BzvLgNnaAmXiMDWm8WKVK4S6f6wmfD5HpSjXtwinyzOuDVtibsOWdXkTdVYoqy1kbiA6P12Um9&X-Amz-Signature=a7e0a03a296f3b433eed8a7fab4289919656de75c90ee93efbc8e082f1834d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBA64B6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBM93T8vRiF31pRGo3Tl9LUZFQh%2FobXIbfvx2SaaznSQIgcldzA5LhlRq%2FKtxpQcjnvZnFLh0GbOdITDKDVScYY7gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5rmdd%2BW1ZHuCRaqCrcA7dJN9I2LsDgpFrzz8qLAHza2e9vRq4k57PN6S%2Fdah9gGiph%2FOZUBUUr8LmBDeeghvcERjM0DZK5Nd%2BH8XYrATOAxzVPELgrsJL2xDwKtPbbNCY40At3QAn2%2B6FoUsrNSVN41XncaWI1zaP%2FhVakkPX6V3OgKuQKJY3%2F9OJnngBwBcy%2B%2BN87ADUdiUcPdQu2AM5vFMUpTNJRZTzK6WN3nGuxwbVqNeH3BUSVnb0HQhEDERNbZTgsrhmVH1xoXtsSLHzhxng0sK1pG9Hy43t3Lb0Pl18jV4mocGbv%2BdwEwS24R%2FnIUp4joyszTP%2B5DSQcvJ%2FonkLkLAQrvgFj5iNWrwlW3gIcl0AVjS%2B5XLpb1o9q1pZdGQlzsNaqZ2X2leGWJY8JDpaOXksmVuREHXgZwTWTIZsQ0%2Ffoh6zPQQvKkdZd%2FKjKfDnrNI%2B3eAO6KsPE1Ke5B9CpzKSlbHxPqPNRfgyKOUobcuaBqAdYATeut%2FLxHK9NJ%2FY90OVsxlUe5QkGM1B1AHhhdsHp63XJOFXUQE0XB1YCc90pIGza8gEWwotV%2F%2BMkoWy2ABVGOOta05p5puI%2BaQCuMEloEyLB6QruN6WifwaQxZDZss38ntMR%2Bs%2FChtyTh5HV1IbeoM28MJuLucMGOqUBq%2BFaVblXciiQrH3PdhYJnrQ9cjxVRzuhl3nBF4ZmNNd56q%2BfomYLlL%2B6kuouNPqKAGsDDiQ5gJpjYYf899TO7r0LAxe%2FHa9BM%2F%2BceYlsfiZidoC7kWHT66SVY7AfJD2yBBcota%2F4BYbYBqiG5w%2BzvLgNnaAmXiMDWm8WKVK4S6f6wmfD5HpSjXtwinyzOuDVtibsOWdXkTdVYoqy1kbiA6P12Um9&X-Amz-Signature=93e74ad38aa86696571d7706032d7f95fb4fabec4f944658b477b1dce71f442f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBA64B6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBM93T8vRiF31pRGo3Tl9LUZFQh%2FobXIbfvx2SaaznSQIgcldzA5LhlRq%2FKtxpQcjnvZnFLh0GbOdITDKDVScYY7gqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5rmdd%2BW1ZHuCRaqCrcA7dJN9I2LsDgpFrzz8qLAHza2e9vRq4k57PN6S%2Fdah9gGiph%2FOZUBUUr8LmBDeeghvcERjM0DZK5Nd%2BH8XYrATOAxzVPELgrsJL2xDwKtPbbNCY40At3QAn2%2B6FoUsrNSVN41XncaWI1zaP%2FhVakkPX6V3OgKuQKJY3%2F9OJnngBwBcy%2B%2BN87ADUdiUcPdQu2AM5vFMUpTNJRZTzK6WN3nGuxwbVqNeH3BUSVnb0HQhEDERNbZTgsrhmVH1xoXtsSLHzhxng0sK1pG9Hy43t3Lb0Pl18jV4mocGbv%2BdwEwS24R%2FnIUp4joyszTP%2B5DSQcvJ%2FonkLkLAQrvgFj5iNWrwlW3gIcl0AVjS%2B5XLpb1o9q1pZdGQlzsNaqZ2X2leGWJY8JDpaOXksmVuREHXgZwTWTIZsQ0%2Ffoh6zPQQvKkdZd%2FKjKfDnrNI%2B3eAO6KsPE1Ke5B9CpzKSlbHxPqPNRfgyKOUobcuaBqAdYATeut%2FLxHK9NJ%2FY90OVsxlUe5QkGM1B1AHhhdsHp63XJOFXUQE0XB1YCc90pIGza8gEWwotV%2F%2BMkoWy2ABVGOOta05p5puI%2BaQCuMEloEyLB6QruN6WifwaQxZDZss38ntMR%2Bs%2FChtyTh5HV1IbeoM28MJuLucMGOqUBq%2BFaVblXciiQrH3PdhYJnrQ9cjxVRzuhl3nBF4ZmNNd56q%2BfomYLlL%2B6kuouNPqKAGsDDiQ5gJpjYYf899TO7r0LAxe%2FHa9BM%2F%2BceYlsfiZidoC7kWHT66SVY7AfJD2yBBcota%2F4BYbYBqiG5w%2BzvLgNnaAmXiMDWm8WKVK4S6f6wmfD5HpSjXtwinyzOuDVtibsOWdXkTdVYoqy1kbiA6P12Um9&X-Amz-Signature=9668bf058fc2117938bd4947ba159af9cf17acc341ba1e9fc0ce538b8ceb152e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
