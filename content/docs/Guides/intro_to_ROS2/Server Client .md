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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUMJ5OL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBe2xj0QumwdpaHE5i0tzCOSbzddqpHjLeaFqX%2FJm2qaAiBAxs8ji9cRqvefitPV4hjn6vTtMw%2FoME4ld3UCBmvkcyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQdhXU73zWjj9l8ujKtwDovGEClKAJb5Oy5PM0Gf%2BJwhMf14O7CDpzaK%2FxFjVl3e7pU08xZB2OO2oPwVbUY06S3PX8ZytH6ylYAxTnGckgG8ZsQgC4cHPa2v3eJvKtG9m4C45MPB%2Fcb8UhXlxwLwDFFb7JcNShQitqbxHVcJqm4hvdh9bBLGVnBqr2aNv2keWLqhIMdL6morHuhPQ7Qxy%2FHoI%2FrwLpYQJyesm5LxeocRY8UeZ4Waz5O9q6Q0sphhJV3dGFTZkjTlaQZRFpoJqLANdGsBad2OufQB%2BQACMAGbdXCUDvzi3D8qKk0FUICBQBxt32Fb09IgEUTA0cluYKTxe%2FMPzvQbCV4aUkU5h9OFZ%2F2E0bq%2FSyVcIDDkIrJBKerE%2FcZp7WsybCPwv3nxP9ZQWLXwvuAtMW%2BEHZASoC8PgCAksUqImv70ChXaU1rDjzQ2hIPywQo1noxG0ckWJH%2FxQiy29sg02J8WoRPxakMzrvnxKSDfdfH7Hs77cHv2Tp1D4dX1AVwiSeKagVGFGrptSIjyqY04zsMde9SO2fmcgZwZ1Y%2BhlgyJL5iPLJ5PqDB9phn4Kru42Xug9nQke29lYKjPqsPd%2F4TQdrKs76M%2BXtV7re%2FAmLIL2%2FF9nbaEgo3Oz6GMmAJlTTYgw3L%2F7vQY6pgFwZpogRD6RCMn%2BtQt1AvQT%2BFldpscdMcMTNdGdMPw0B9KuqoQsrnVCocv9Ujrbx0uh0gpPHYzLnEqG41Mwm%2BabcyNoA7%2FanUXhR1QIBUkzBl05IWJx%2Fmji1B6p2jjhzGlAvl2U8%2FwpWzLWuTHv5j1xMBN0YwXu1%2Bbwl9joZ7QtW%2FgvPJY1j487hhLNtI6x5b83e2F21bdufoz4fpJ0jXEzoeZfjXRy&X-Amz-Signature=555506a3e4b7be4e02a5fe20ab613985c92ab08c0b63f6a7174c9b6f88227ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUMJ5OL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBe2xj0QumwdpaHE5i0tzCOSbzddqpHjLeaFqX%2FJm2qaAiBAxs8ji9cRqvefitPV4hjn6vTtMw%2FoME4ld3UCBmvkcyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQdhXU73zWjj9l8ujKtwDovGEClKAJb5Oy5PM0Gf%2BJwhMf14O7CDpzaK%2FxFjVl3e7pU08xZB2OO2oPwVbUY06S3PX8ZytH6ylYAxTnGckgG8ZsQgC4cHPa2v3eJvKtG9m4C45MPB%2Fcb8UhXlxwLwDFFb7JcNShQitqbxHVcJqm4hvdh9bBLGVnBqr2aNv2keWLqhIMdL6morHuhPQ7Qxy%2FHoI%2FrwLpYQJyesm5LxeocRY8UeZ4Waz5O9q6Q0sphhJV3dGFTZkjTlaQZRFpoJqLANdGsBad2OufQB%2BQACMAGbdXCUDvzi3D8qKk0FUICBQBxt32Fb09IgEUTA0cluYKTxe%2FMPzvQbCV4aUkU5h9OFZ%2F2E0bq%2FSyVcIDDkIrJBKerE%2FcZp7WsybCPwv3nxP9ZQWLXwvuAtMW%2BEHZASoC8PgCAksUqImv70ChXaU1rDjzQ2hIPywQo1noxG0ckWJH%2FxQiy29sg02J8WoRPxakMzrvnxKSDfdfH7Hs77cHv2Tp1D4dX1AVwiSeKagVGFGrptSIjyqY04zsMde9SO2fmcgZwZ1Y%2BhlgyJL5iPLJ5PqDB9phn4Kru42Xug9nQke29lYKjPqsPd%2F4TQdrKs76M%2BXtV7re%2FAmLIL2%2FF9nbaEgo3Oz6GMmAJlTTYgw3L%2F7vQY6pgFwZpogRD6RCMn%2BtQt1AvQT%2BFldpscdMcMTNdGdMPw0B9KuqoQsrnVCocv9Ujrbx0uh0gpPHYzLnEqG41Mwm%2BabcyNoA7%2FanUXhR1QIBUkzBl05IWJx%2Fmji1B6p2jjhzGlAvl2U8%2FwpWzLWuTHv5j1xMBN0YwXu1%2Bbwl9joZ7QtW%2FgvPJY1j487hhLNtI6x5b83e2F21bdufoz4fpJ0jXEzoeZfjXRy&X-Amz-Signature=51137a588fa16bf916b42ca478cc6a13ba74e885666796b36b2dd9a068add23b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUMJ5OL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBe2xj0QumwdpaHE5i0tzCOSbzddqpHjLeaFqX%2FJm2qaAiBAxs8ji9cRqvefitPV4hjn6vTtMw%2FoME4ld3UCBmvkcyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQdhXU73zWjj9l8ujKtwDovGEClKAJb5Oy5PM0Gf%2BJwhMf14O7CDpzaK%2FxFjVl3e7pU08xZB2OO2oPwVbUY06S3PX8ZytH6ylYAxTnGckgG8ZsQgC4cHPa2v3eJvKtG9m4C45MPB%2Fcb8UhXlxwLwDFFb7JcNShQitqbxHVcJqm4hvdh9bBLGVnBqr2aNv2keWLqhIMdL6morHuhPQ7Qxy%2FHoI%2FrwLpYQJyesm5LxeocRY8UeZ4Waz5O9q6Q0sphhJV3dGFTZkjTlaQZRFpoJqLANdGsBad2OufQB%2BQACMAGbdXCUDvzi3D8qKk0FUICBQBxt32Fb09IgEUTA0cluYKTxe%2FMPzvQbCV4aUkU5h9OFZ%2F2E0bq%2FSyVcIDDkIrJBKerE%2FcZp7WsybCPwv3nxP9ZQWLXwvuAtMW%2BEHZASoC8PgCAksUqImv70ChXaU1rDjzQ2hIPywQo1noxG0ckWJH%2FxQiy29sg02J8WoRPxakMzrvnxKSDfdfH7Hs77cHv2Tp1D4dX1AVwiSeKagVGFGrptSIjyqY04zsMde9SO2fmcgZwZ1Y%2BhlgyJL5iPLJ5PqDB9phn4Kru42Xug9nQke29lYKjPqsPd%2F4TQdrKs76M%2BXtV7re%2FAmLIL2%2FF9nbaEgo3Oz6GMmAJlTTYgw3L%2F7vQY6pgFwZpogRD6RCMn%2BtQt1AvQT%2BFldpscdMcMTNdGdMPw0B9KuqoQsrnVCocv9Ujrbx0uh0gpPHYzLnEqG41Mwm%2BabcyNoA7%2FanUXhR1QIBUkzBl05IWJx%2Fmji1B6p2jjhzGlAvl2U8%2FwpWzLWuTHv5j1xMBN0YwXu1%2Bbwl9joZ7QtW%2FgvPJY1j487hhLNtI6x5b83e2F21bdufoz4fpJ0jXEzoeZfjXRy&X-Amz-Signature=17758dda1e67fe8d251d622880bf4b44194765287935615a69d4d86240dc2958&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUMJ5OL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBe2xj0QumwdpaHE5i0tzCOSbzddqpHjLeaFqX%2FJm2qaAiBAxs8ji9cRqvefitPV4hjn6vTtMw%2FoME4ld3UCBmvkcyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQdhXU73zWjj9l8ujKtwDovGEClKAJb5Oy5PM0Gf%2BJwhMf14O7CDpzaK%2FxFjVl3e7pU08xZB2OO2oPwVbUY06S3PX8ZytH6ylYAxTnGckgG8ZsQgC4cHPa2v3eJvKtG9m4C45MPB%2Fcb8UhXlxwLwDFFb7JcNShQitqbxHVcJqm4hvdh9bBLGVnBqr2aNv2keWLqhIMdL6morHuhPQ7Qxy%2FHoI%2FrwLpYQJyesm5LxeocRY8UeZ4Waz5O9q6Q0sphhJV3dGFTZkjTlaQZRFpoJqLANdGsBad2OufQB%2BQACMAGbdXCUDvzi3D8qKk0FUICBQBxt32Fb09IgEUTA0cluYKTxe%2FMPzvQbCV4aUkU5h9OFZ%2F2E0bq%2FSyVcIDDkIrJBKerE%2FcZp7WsybCPwv3nxP9ZQWLXwvuAtMW%2BEHZASoC8PgCAksUqImv70ChXaU1rDjzQ2hIPywQo1noxG0ckWJH%2FxQiy29sg02J8WoRPxakMzrvnxKSDfdfH7Hs77cHv2Tp1D4dX1AVwiSeKagVGFGrptSIjyqY04zsMde9SO2fmcgZwZ1Y%2BhlgyJL5iPLJ5PqDB9phn4Kru42Xug9nQke29lYKjPqsPd%2F4TQdrKs76M%2BXtV7re%2FAmLIL2%2FF9nbaEgo3Oz6GMmAJlTTYgw3L%2F7vQY6pgFwZpogRD6RCMn%2BtQt1AvQT%2BFldpscdMcMTNdGdMPw0B9KuqoQsrnVCocv9Ujrbx0uh0gpPHYzLnEqG41Mwm%2BabcyNoA7%2FanUXhR1QIBUkzBl05IWJx%2Fmji1B6p2jjhzGlAvl2U8%2FwpWzLWuTHv5j1xMBN0YwXu1%2Bbwl9joZ7QtW%2FgvPJY1j487hhLNtI6x5b83e2F21bdufoz4fpJ0jXEzoeZfjXRy&X-Amz-Signature=aa6b9932fc22e62202055c1b8a3a4361712c89695ff39175fb0248c641548d01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUMJ5OL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBe2xj0QumwdpaHE5i0tzCOSbzddqpHjLeaFqX%2FJm2qaAiBAxs8ji9cRqvefitPV4hjn6vTtMw%2FoME4ld3UCBmvkcyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQdhXU73zWjj9l8ujKtwDovGEClKAJb5Oy5PM0Gf%2BJwhMf14O7CDpzaK%2FxFjVl3e7pU08xZB2OO2oPwVbUY06S3PX8ZytH6ylYAxTnGckgG8ZsQgC4cHPa2v3eJvKtG9m4C45MPB%2Fcb8UhXlxwLwDFFb7JcNShQitqbxHVcJqm4hvdh9bBLGVnBqr2aNv2keWLqhIMdL6morHuhPQ7Qxy%2FHoI%2FrwLpYQJyesm5LxeocRY8UeZ4Waz5O9q6Q0sphhJV3dGFTZkjTlaQZRFpoJqLANdGsBad2OufQB%2BQACMAGbdXCUDvzi3D8qKk0FUICBQBxt32Fb09IgEUTA0cluYKTxe%2FMPzvQbCV4aUkU5h9OFZ%2F2E0bq%2FSyVcIDDkIrJBKerE%2FcZp7WsybCPwv3nxP9ZQWLXwvuAtMW%2BEHZASoC8PgCAksUqImv70ChXaU1rDjzQ2hIPywQo1noxG0ckWJH%2FxQiy29sg02J8WoRPxakMzrvnxKSDfdfH7Hs77cHv2Tp1D4dX1AVwiSeKagVGFGrptSIjyqY04zsMde9SO2fmcgZwZ1Y%2BhlgyJL5iPLJ5PqDB9phn4Kru42Xug9nQke29lYKjPqsPd%2F4TQdrKs76M%2BXtV7re%2FAmLIL2%2FF9nbaEgo3Oz6GMmAJlTTYgw3L%2F7vQY6pgFwZpogRD6RCMn%2BtQt1AvQT%2BFldpscdMcMTNdGdMPw0B9KuqoQsrnVCocv9Ujrbx0uh0gpPHYzLnEqG41Mwm%2BabcyNoA7%2FanUXhR1QIBUkzBl05IWJx%2Fmji1B6p2jjhzGlAvl2U8%2FwpWzLWuTHv5j1xMBN0YwXu1%2Bbwl9joZ7QtW%2FgvPJY1j487hhLNtI6x5b83e2F21bdufoz4fpJ0jXEzoeZfjXRy&X-Amz-Signature=c64f30693b4991e9ffb40af270ae8462e073adfeb4ead2fee7066811d0c732f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
