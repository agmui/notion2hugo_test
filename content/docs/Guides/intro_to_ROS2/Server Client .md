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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOKVCCN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF8PHv5IrETQ8opSO1Vw7aB5rc%2FSFthC0%2FOPG1EVWvOQIhAMKBDQlHId6YZBs7Hv8%2FCOadoYF90G1aeQZXbGWZgBOMKv8DCDQQABoMNjM3NDIzMTgzODA1IgxM2n349JfJnbH0%2ByQq3AO6YbezM2MsUOQvjiDWAFcf9hIpay0XKU8Hzlll3kYR4AEAC%2Fcn%2BYpa2dQkL6PgQ5h8vswKK0ZLSLrRdDPiGdiiH1wIQh2gTAvfK6MGFL7YMN34Z5Kx1YVBO6oJRnzgnKHhfvY0aY084NMI9AchwAyyjguTpd4Q4Lu4iFp2etjLoPLyjtbh6R%2FUWB52bi%2B3McEaHeNgvqeaLcjzg6VNjVDmZy%2FuK5LK3sewuxNvxSbqI5LMr4pTNkYPilo0K6DbWstNBm3XPuac9bHCrjrRRw13iFAD7CLp%2Bxi%2BEcOuWSzaJF3N7yJpzLdmMwMOBTAvXbZZ6o09BxYhYhwJZrjcCvcPJE%2BlSLIgYDTVSlpIphXAsYHT5qsHa0oyvl9%2Bem4vyROnmTCC%2F7jSWSLBDdsRQT89fWT4Q19STtWmvJWtJmaHEVJ0mqIlSOoOX44EYiUSKu6q2aItHSL0S9SGr6uYdgwqCM5inwTZGfDiCS1PnaZ9P4MIlEKgXPIlN6JRSRPFcsui6Pqba2DLR1e1yEJ%2FdOS7H%2FE8z5V6WSlEF%2FQNY6qxJyw9xJQm%2FUwxSMNHSDn%2Fs7DyStvc0SSBT%2FoTOgqQX0j308OShResC9L9Dpt7et2Q6X8DUPnN0EjWTEQTrzCV%2FfK9BjqkAZWvkXVoY2fRl5N1Tkg7MYIzi7O3orMVtvmU9cvOBQUqtX13wwbWCb5DA0H46l%2BvQDvG5JhwV6VEGcs52Q2FnDo3bxBByPlnnQZ5XnPBJQti5LR14CFoJMsgEPETHTj%2B8QpnCkQjAra3yH6vlg%2B4h9KW20k4cYMWH%2BxtoTJFX3GQYSOOEFPbm4z1nTsKlIlpforujDVlmwmPZo%2FQkmFpf61FQg3V&X-Amz-Signature=84c604577a8e63d3c2e4656db0a5eb5e069adfc18567780c98db79cd2afc3f88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOKVCCN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF8PHv5IrETQ8opSO1Vw7aB5rc%2FSFthC0%2FOPG1EVWvOQIhAMKBDQlHId6YZBs7Hv8%2FCOadoYF90G1aeQZXbGWZgBOMKv8DCDQQABoMNjM3NDIzMTgzODA1IgxM2n349JfJnbH0%2ByQq3AO6YbezM2MsUOQvjiDWAFcf9hIpay0XKU8Hzlll3kYR4AEAC%2Fcn%2BYpa2dQkL6PgQ5h8vswKK0ZLSLrRdDPiGdiiH1wIQh2gTAvfK6MGFL7YMN34Z5Kx1YVBO6oJRnzgnKHhfvY0aY084NMI9AchwAyyjguTpd4Q4Lu4iFp2etjLoPLyjtbh6R%2FUWB52bi%2B3McEaHeNgvqeaLcjzg6VNjVDmZy%2FuK5LK3sewuxNvxSbqI5LMr4pTNkYPilo0K6DbWstNBm3XPuac9bHCrjrRRw13iFAD7CLp%2Bxi%2BEcOuWSzaJF3N7yJpzLdmMwMOBTAvXbZZ6o09BxYhYhwJZrjcCvcPJE%2BlSLIgYDTVSlpIphXAsYHT5qsHa0oyvl9%2Bem4vyROnmTCC%2F7jSWSLBDdsRQT89fWT4Q19STtWmvJWtJmaHEVJ0mqIlSOoOX44EYiUSKu6q2aItHSL0S9SGr6uYdgwqCM5inwTZGfDiCS1PnaZ9P4MIlEKgXPIlN6JRSRPFcsui6Pqba2DLR1e1yEJ%2FdOS7H%2FE8z5V6WSlEF%2FQNY6qxJyw9xJQm%2FUwxSMNHSDn%2Fs7DyStvc0SSBT%2FoTOgqQX0j308OShResC9L9Dpt7et2Q6X8DUPnN0EjWTEQTrzCV%2FfK9BjqkAZWvkXVoY2fRl5N1Tkg7MYIzi7O3orMVtvmU9cvOBQUqtX13wwbWCb5DA0H46l%2BvQDvG5JhwV6VEGcs52Q2FnDo3bxBByPlnnQZ5XnPBJQti5LR14CFoJMsgEPETHTj%2B8QpnCkQjAra3yH6vlg%2B4h9KW20k4cYMWH%2BxtoTJFX3GQYSOOEFPbm4z1nTsKlIlpforujDVlmwmPZo%2FQkmFpf61FQg3V&X-Amz-Signature=3005c3d0eb0a05211c79650132ffdb1a0aec3b4bc86bc935de48364ab27ce031&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOKVCCN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF8PHv5IrETQ8opSO1Vw7aB5rc%2FSFthC0%2FOPG1EVWvOQIhAMKBDQlHId6YZBs7Hv8%2FCOadoYF90G1aeQZXbGWZgBOMKv8DCDQQABoMNjM3NDIzMTgzODA1IgxM2n349JfJnbH0%2ByQq3AO6YbezM2MsUOQvjiDWAFcf9hIpay0XKU8Hzlll3kYR4AEAC%2Fcn%2BYpa2dQkL6PgQ5h8vswKK0ZLSLrRdDPiGdiiH1wIQh2gTAvfK6MGFL7YMN34Z5Kx1YVBO6oJRnzgnKHhfvY0aY084NMI9AchwAyyjguTpd4Q4Lu4iFp2etjLoPLyjtbh6R%2FUWB52bi%2B3McEaHeNgvqeaLcjzg6VNjVDmZy%2FuK5LK3sewuxNvxSbqI5LMr4pTNkYPilo0K6DbWstNBm3XPuac9bHCrjrRRw13iFAD7CLp%2Bxi%2BEcOuWSzaJF3N7yJpzLdmMwMOBTAvXbZZ6o09BxYhYhwJZrjcCvcPJE%2BlSLIgYDTVSlpIphXAsYHT5qsHa0oyvl9%2Bem4vyROnmTCC%2F7jSWSLBDdsRQT89fWT4Q19STtWmvJWtJmaHEVJ0mqIlSOoOX44EYiUSKu6q2aItHSL0S9SGr6uYdgwqCM5inwTZGfDiCS1PnaZ9P4MIlEKgXPIlN6JRSRPFcsui6Pqba2DLR1e1yEJ%2FdOS7H%2FE8z5V6WSlEF%2FQNY6qxJyw9xJQm%2FUwxSMNHSDn%2Fs7DyStvc0SSBT%2FoTOgqQX0j308OShResC9L9Dpt7et2Q6X8DUPnN0EjWTEQTrzCV%2FfK9BjqkAZWvkXVoY2fRl5N1Tkg7MYIzi7O3orMVtvmU9cvOBQUqtX13wwbWCb5DA0H46l%2BvQDvG5JhwV6VEGcs52Q2FnDo3bxBByPlnnQZ5XnPBJQti5LR14CFoJMsgEPETHTj%2B8QpnCkQjAra3yH6vlg%2B4h9KW20k4cYMWH%2BxtoTJFX3GQYSOOEFPbm4z1nTsKlIlpforujDVlmwmPZo%2FQkmFpf61FQg3V&X-Amz-Signature=70c5e4e4b166575f1156b71917b5f9abe6248ae89abd04619bf82041091b393f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOKVCCN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF8PHv5IrETQ8opSO1Vw7aB5rc%2FSFthC0%2FOPG1EVWvOQIhAMKBDQlHId6YZBs7Hv8%2FCOadoYF90G1aeQZXbGWZgBOMKv8DCDQQABoMNjM3NDIzMTgzODA1IgxM2n349JfJnbH0%2ByQq3AO6YbezM2MsUOQvjiDWAFcf9hIpay0XKU8Hzlll3kYR4AEAC%2Fcn%2BYpa2dQkL6PgQ5h8vswKK0ZLSLrRdDPiGdiiH1wIQh2gTAvfK6MGFL7YMN34Z5Kx1YVBO6oJRnzgnKHhfvY0aY084NMI9AchwAyyjguTpd4Q4Lu4iFp2etjLoPLyjtbh6R%2FUWB52bi%2B3McEaHeNgvqeaLcjzg6VNjVDmZy%2FuK5LK3sewuxNvxSbqI5LMr4pTNkYPilo0K6DbWstNBm3XPuac9bHCrjrRRw13iFAD7CLp%2Bxi%2BEcOuWSzaJF3N7yJpzLdmMwMOBTAvXbZZ6o09BxYhYhwJZrjcCvcPJE%2BlSLIgYDTVSlpIphXAsYHT5qsHa0oyvl9%2Bem4vyROnmTCC%2F7jSWSLBDdsRQT89fWT4Q19STtWmvJWtJmaHEVJ0mqIlSOoOX44EYiUSKu6q2aItHSL0S9SGr6uYdgwqCM5inwTZGfDiCS1PnaZ9P4MIlEKgXPIlN6JRSRPFcsui6Pqba2DLR1e1yEJ%2FdOS7H%2FE8z5V6WSlEF%2FQNY6qxJyw9xJQm%2FUwxSMNHSDn%2Fs7DyStvc0SSBT%2FoTOgqQX0j308OShResC9L9Dpt7et2Q6X8DUPnN0EjWTEQTrzCV%2FfK9BjqkAZWvkXVoY2fRl5N1Tkg7MYIzi7O3orMVtvmU9cvOBQUqtX13wwbWCb5DA0H46l%2BvQDvG5JhwV6VEGcs52Q2FnDo3bxBByPlnnQZ5XnPBJQti5LR14CFoJMsgEPETHTj%2B8QpnCkQjAra3yH6vlg%2B4h9KW20k4cYMWH%2BxtoTJFX3GQYSOOEFPbm4z1nTsKlIlpforujDVlmwmPZo%2FQkmFpf61FQg3V&X-Amz-Signature=e2ee89c6d09403a188d7703f39809d3b4827486f392b295606c1a627eadb8267&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOKVCCN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF8PHv5IrETQ8opSO1Vw7aB5rc%2FSFthC0%2FOPG1EVWvOQIhAMKBDQlHId6YZBs7Hv8%2FCOadoYF90G1aeQZXbGWZgBOMKv8DCDQQABoMNjM3NDIzMTgzODA1IgxM2n349JfJnbH0%2ByQq3AO6YbezM2MsUOQvjiDWAFcf9hIpay0XKU8Hzlll3kYR4AEAC%2Fcn%2BYpa2dQkL6PgQ5h8vswKK0ZLSLrRdDPiGdiiH1wIQh2gTAvfK6MGFL7YMN34Z5Kx1YVBO6oJRnzgnKHhfvY0aY084NMI9AchwAyyjguTpd4Q4Lu4iFp2etjLoPLyjtbh6R%2FUWB52bi%2B3McEaHeNgvqeaLcjzg6VNjVDmZy%2FuK5LK3sewuxNvxSbqI5LMr4pTNkYPilo0K6DbWstNBm3XPuac9bHCrjrRRw13iFAD7CLp%2Bxi%2BEcOuWSzaJF3N7yJpzLdmMwMOBTAvXbZZ6o09BxYhYhwJZrjcCvcPJE%2BlSLIgYDTVSlpIphXAsYHT5qsHa0oyvl9%2Bem4vyROnmTCC%2F7jSWSLBDdsRQT89fWT4Q19STtWmvJWtJmaHEVJ0mqIlSOoOX44EYiUSKu6q2aItHSL0S9SGr6uYdgwqCM5inwTZGfDiCS1PnaZ9P4MIlEKgXPIlN6JRSRPFcsui6Pqba2DLR1e1yEJ%2FdOS7H%2FE8z5V6WSlEF%2FQNY6qxJyw9xJQm%2FUwxSMNHSDn%2Fs7DyStvc0SSBT%2FoTOgqQX0j308OShResC9L9Dpt7et2Q6X8DUPnN0EjWTEQTrzCV%2FfK9BjqkAZWvkXVoY2fRl5N1Tkg7MYIzi7O3orMVtvmU9cvOBQUqtX13wwbWCb5DA0H46l%2BvQDvG5JhwV6VEGcs52Q2FnDo3bxBByPlnnQZ5XnPBJQti5LR14CFoJMsgEPETHTj%2B8QpnCkQjAra3yH6vlg%2B4h9KW20k4cYMWH%2BxtoTJFX3GQYSOOEFPbm4z1nTsKlIlpforujDVlmwmPZo%2FQkmFpf61FQg3V&X-Amz-Signature=a6dfed8a734b00f932debc0d2bba3be88b3f0f0bf92e7b74f11751bc803497ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
