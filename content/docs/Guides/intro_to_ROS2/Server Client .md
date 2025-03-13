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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7OV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BPdIC5f2fQZ%2BNEuuDXpa2%2FKTCKYNwWrY1kYQ0VkCgAIhAMwn7%2BjuMnz7hxLkdMveiwogMZkbNVcSeaWW1T6Jh%2F6uKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEQ7TSkqE%2BjAwYyTgq3AOTOZBLptJDoQep3UNqjllMW%2FcCPyWjDfUz15rBZ4ud6D4IuEjeRtPjEamq1upZ0%2BWiCvXLbkKXIghwflQO0CF3IGFtWyaNuIxK77vPwInzC%2BpDjv7PSAax2xY%2F3TBYeEww55qVfboITH0%2Bx%2BIn1W%2FfWPCcH9yOUTrdC45XbOuRTwVgwabNCFcUQN3kV192QpIgUAVdWSzDbNJHJMNFi%2BzxUlwMtBK859PF4WLI7G%2FCncUPxp%2FVP%2FUKv3OhiIot69DV7piXnCFumNHjycosKj4Pqs0EmYuQ7brf722EZDvQnQr44G3uPOTbMAj%2FRt8MftcLFZ9iSncSSw65mHsnM4peXSFJfPQ24pYhTTOMgQb636XmDANn9gLpV5O00ragU1F0937gqjAGYCU4S%2FMGF5Sy72He%2FmKMhLrSN8f2RI2ttrSRLP%2F09mTAWKlmrTyb7qnh0JkuxJNyIDuGP9Q%2FDapKpLEU7ppQ5rx9RG9WMAls3Aea%2FatVOdfBFznR84ohSWcRFEHOVwFtjsa%2BFDh022NXP1gk3I38v2Xig0rQ8LPwK9kEKiQrrgyH79CsNSDOBicKLKVTfRBgvOcMn71xG6Tvn02T%2FxbvU0GEsmVCji4NjYhqtlI9NgBxtpX%2BGjC24ci%2BBjqkAWJiJZLwobDJj1DHxwpdctuwgAzFaiO6lSdWgL80aUiGt7NZH4fMvI9wYhe0eYSxJZlC8le6j8%2B%2B64pk5WRaJWmaKaPQPg31GXsvp6pR9U6Qi5%2FY%2B1f12WMpXflpX0zxQvMbL0grmEso2K3GDFK3eaaCBYJ1iVZ1V435uVRk2FI8GOyZvptykjxI95B7cWgyeWkiiHSZLD7F0mtKr68cYbXvNYuP&X-Amz-Signature=06c324b010893adb06a8ee0ca35e8f0b145a0def15e0e831ca7c0ebfc891e630&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7OV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BPdIC5f2fQZ%2BNEuuDXpa2%2FKTCKYNwWrY1kYQ0VkCgAIhAMwn7%2BjuMnz7hxLkdMveiwogMZkbNVcSeaWW1T6Jh%2F6uKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEQ7TSkqE%2BjAwYyTgq3AOTOZBLptJDoQep3UNqjllMW%2FcCPyWjDfUz15rBZ4ud6D4IuEjeRtPjEamq1upZ0%2BWiCvXLbkKXIghwflQO0CF3IGFtWyaNuIxK77vPwInzC%2BpDjv7PSAax2xY%2F3TBYeEww55qVfboITH0%2Bx%2BIn1W%2FfWPCcH9yOUTrdC45XbOuRTwVgwabNCFcUQN3kV192QpIgUAVdWSzDbNJHJMNFi%2BzxUlwMtBK859PF4WLI7G%2FCncUPxp%2FVP%2FUKv3OhiIot69DV7piXnCFumNHjycosKj4Pqs0EmYuQ7brf722EZDvQnQr44G3uPOTbMAj%2FRt8MftcLFZ9iSncSSw65mHsnM4peXSFJfPQ24pYhTTOMgQb636XmDANn9gLpV5O00ragU1F0937gqjAGYCU4S%2FMGF5Sy72He%2FmKMhLrSN8f2RI2ttrSRLP%2F09mTAWKlmrTyb7qnh0JkuxJNyIDuGP9Q%2FDapKpLEU7ppQ5rx9RG9WMAls3Aea%2FatVOdfBFznR84ohSWcRFEHOVwFtjsa%2BFDh022NXP1gk3I38v2Xig0rQ8LPwK9kEKiQrrgyH79CsNSDOBicKLKVTfRBgvOcMn71xG6Tvn02T%2FxbvU0GEsmVCji4NjYhqtlI9NgBxtpX%2BGjC24ci%2BBjqkAWJiJZLwobDJj1DHxwpdctuwgAzFaiO6lSdWgL80aUiGt7NZH4fMvI9wYhe0eYSxJZlC8le6j8%2B%2B64pk5WRaJWmaKaPQPg31GXsvp6pR9U6Qi5%2FY%2B1f12WMpXflpX0zxQvMbL0grmEso2K3GDFK3eaaCBYJ1iVZ1V435uVRk2FI8GOyZvptykjxI95B7cWgyeWkiiHSZLD7F0mtKr68cYbXvNYuP&X-Amz-Signature=d79715911cff1ae85e33ea0d9a0a5bd7f1fc69e76a101308974ba7c4f8ef14b0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7OV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BPdIC5f2fQZ%2BNEuuDXpa2%2FKTCKYNwWrY1kYQ0VkCgAIhAMwn7%2BjuMnz7hxLkdMveiwogMZkbNVcSeaWW1T6Jh%2F6uKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEQ7TSkqE%2BjAwYyTgq3AOTOZBLptJDoQep3UNqjllMW%2FcCPyWjDfUz15rBZ4ud6D4IuEjeRtPjEamq1upZ0%2BWiCvXLbkKXIghwflQO0CF3IGFtWyaNuIxK77vPwInzC%2BpDjv7PSAax2xY%2F3TBYeEww55qVfboITH0%2Bx%2BIn1W%2FfWPCcH9yOUTrdC45XbOuRTwVgwabNCFcUQN3kV192QpIgUAVdWSzDbNJHJMNFi%2BzxUlwMtBK859PF4WLI7G%2FCncUPxp%2FVP%2FUKv3OhiIot69DV7piXnCFumNHjycosKj4Pqs0EmYuQ7brf722EZDvQnQr44G3uPOTbMAj%2FRt8MftcLFZ9iSncSSw65mHsnM4peXSFJfPQ24pYhTTOMgQb636XmDANn9gLpV5O00ragU1F0937gqjAGYCU4S%2FMGF5Sy72He%2FmKMhLrSN8f2RI2ttrSRLP%2F09mTAWKlmrTyb7qnh0JkuxJNyIDuGP9Q%2FDapKpLEU7ppQ5rx9RG9WMAls3Aea%2FatVOdfBFznR84ohSWcRFEHOVwFtjsa%2BFDh022NXP1gk3I38v2Xig0rQ8LPwK9kEKiQrrgyH79CsNSDOBicKLKVTfRBgvOcMn71xG6Tvn02T%2FxbvU0GEsmVCji4NjYhqtlI9NgBxtpX%2BGjC24ci%2BBjqkAWJiJZLwobDJj1DHxwpdctuwgAzFaiO6lSdWgL80aUiGt7NZH4fMvI9wYhe0eYSxJZlC8le6j8%2B%2B64pk5WRaJWmaKaPQPg31GXsvp6pR9U6Qi5%2FY%2B1f12WMpXflpX0zxQvMbL0grmEso2K3GDFK3eaaCBYJ1iVZ1V435uVRk2FI8GOyZvptykjxI95B7cWgyeWkiiHSZLD7F0mtKr68cYbXvNYuP&X-Amz-Signature=9b88032fdbf0ae7afca6e4c240805ebda4e35d34226f058f912ffda2591dbec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7OV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BPdIC5f2fQZ%2BNEuuDXpa2%2FKTCKYNwWrY1kYQ0VkCgAIhAMwn7%2BjuMnz7hxLkdMveiwogMZkbNVcSeaWW1T6Jh%2F6uKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEQ7TSkqE%2BjAwYyTgq3AOTOZBLptJDoQep3UNqjllMW%2FcCPyWjDfUz15rBZ4ud6D4IuEjeRtPjEamq1upZ0%2BWiCvXLbkKXIghwflQO0CF3IGFtWyaNuIxK77vPwInzC%2BpDjv7PSAax2xY%2F3TBYeEww55qVfboITH0%2Bx%2BIn1W%2FfWPCcH9yOUTrdC45XbOuRTwVgwabNCFcUQN3kV192QpIgUAVdWSzDbNJHJMNFi%2BzxUlwMtBK859PF4WLI7G%2FCncUPxp%2FVP%2FUKv3OhiIot69DV7piXnCFumNHjycosKj4Pqs0EmYuQ7brf722EZDvQnQr44G3uPOTbMAj%2FRt8MftcLFZ9iSncSSw65mHsnM4peXSFJfPQ24pYhTTOMgQb636XmDANn9gLpV5O00ragU1F0937gqjAGYCU4S%2FMGF5Sy72He%2FmKMhLrSN8f2RI2ttrSRLP%2F09mTAWKlmrTyb7qnh0JkuxJNyIDuGP9Q%2FDapKpLEU7ppQ5rx9RG9WMAls3Aea%2FatVOdfBFznR84ohSWcRFEHOVwFtjsa%2BFDh022NXP1gk3I38v2Xig0rQ8LPwK9kEKiQrrgyH79CsNSDOBicKLKVTfRBgvOcMn71xG6Tvn02T%2FxbvU0GEsmVCji4NjYhqtlI9NgBxtpX%2BGjC24ci%2BBjqkAWJiJZLwobDJj1DHxwpdctuwgAzFaiO6lSdWgL80aUiGt7NZH4fMvI9wYhe0eYSxJZlC8le6j8%2B%2B64pk5WRaJWmaKaPQPg31GXsvp6pR9U6Qi5%2FY%2B1f12WMpXflpX0zxQvMbL0grmEso2K3GDFK3eaaCBYJ1iVZ1V435uVRk2FI8GOyZvptykjxI95B7cWgyeWkiiHSZLD7F0mtKr68cYbXvNYuP&X-Amz-Signature=a394758d9c09d6cdb7b0ed5386faf51467d37d8875b1f658f24f360bd9acda66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F7OV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BPdIC5f2fQZ%2BNEuuDXpa2%2FKTCKYNwWrY1kYQ0VkCgAIhAMwn7%2BjuMnz7hxLkdMveiwogMZkbNVcSeaWW1T6Jh%2F6uKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEQ7TSkqE%2BjAwYyTgq3AOTOZBLptJDoQep3UNqjllMW%2FcCPyWjDfUz15rBZ4ud6D4IuEjeRtPjEamq1upZ0%2BWiCvXLbkKXIghwflQO0CF3IGFtWyaNuIxK77vPwInzC%2BpDjv7PSAax2xY%2F3TBYeEww55qVfboITH0%2Bx%2BIn1W%2FfWPCcH9yOUTrdC45XbOuRTwVgwabNCFcUQN3kV192QpIgUAVdWSzDbNJHJMNFi%2BzxUlwMtBK859PF4WLI7G%2FCncUPxp%2FVP%2FUKv3OhiIot69DV7piXnCFumNHjycosKj4Pqs0EmYuQ7brf722EZDvQnQr44G3uPOTbMAj%2FRt8MftcLFZ9iSncSSw65mHsnM4peXSFJfPQ24pYhTTOMgQb636XmDANn9gLpV5O00ragU1F0937gqjAGYCU4S%2FMGF5Sy72He%2FmKMhLrSN8f2RI2ttrSRLP%2F09mTAWKlmrTyb7qnh0JkuxJNyIDuGP9Q%2FDapKpLEU7ppQ5rx9RG9WMAls3Aea%2FatVOdfBFznR84ohSWcRFEHOVwFtjsa%2BFDh022NXP1gk3I38v2Xig0rQ8LPwK9kEKiQrrgyH79CsNSDOBicKLKVTfRBgvOcMn71xG6Tvn02T%2FxbvU0GEsmVCji4NjYhqtlI9NgBxtpX%2BGjC24ci%2BBjqkAWJiJZLwobDJj1DHxwpdctuwgAzFaiO6lSdWgL80aUiGt7NZH4fMvI9wYhe0eYSxJZlC8le6j8%2B%2B64pk5WRaJWmaKaPQPg31GXsvp6pR9U6Qi5%2FY%2B1f12WMpXflpX0zxQvMbL0grmEso2K3GDFK3eaaCBYJ1iVZ1V435uVRk2FI8GOyZvptykjxI95B7cWgyeWkiiHSZLD7F0mtKr68cYbXvNYuP&X-Amz-Signature=bb8e6ff4e8524ad9f94722afb4d86e50f7ce84d865afbb20cf1409c93bab50a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
