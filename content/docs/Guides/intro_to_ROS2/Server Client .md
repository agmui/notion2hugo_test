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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKF62O5Y%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGVX6Z4Plq9l6Sufj6LbGXRo5X2hoFmxGh2iHJGkpL2NAiEA6UWiyyzepBtJA2Z3Q5QbbxkxPG5uFaeWKGAr3J5DP8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuyY3rLKnkOzLr6hCrcA3jE2P3nK45kpr%2FH28zISANVv4prFT1b%2FGJm4JpWOFrA2%2FgYvUqE%2BnVgvuzs%2BiwZWTYHSkHOiauInlzVP%2BtgJxSvig%2BSPcaclYYVpqO4%2BJ5uHnsCQ6FB4Y6NJmY3K%2FIY0IEhMyZU3SokcM7oOh20x6gIWmBatWGfklVZFEPyIBAemZLQbzY9P%2BMIS0LJLZiAWAFTtHMQKKBBVaJPWsmPZvS4evqHmAfXJG8jUCqc9YEeItO%2FXneVtRR6Md1KTcHf8XEx9hNk9XpWMGwv0fbX5f%2FAwxVMta%2F%2FSf9sqb%2FpsM8Z1flkEB6rwPamTQHhNuESd3zIM7pI8ejBC6kQMRuyw6gITHs9sIU4OwCJnkZMQLidMZGllfZNaTnH1yZwB43NBlDY70PKcggDUqTYxk5PSOux%2BSaRZKe7LjEhm8Lt03uetOBO7ZAwU%2B4GnBBkpzaIv3DMi3uAFnH5rVtHZ%2FiNy0N3E5locJS9nBi9mo1j6dB382trlj2QX8ywMJPv2msh4g5kzwqPqt2T1Ec7r0plStWnkq1hvUV7JrFezp0QGKYiYrZm0kbsJO6Vp0HmotNyAaAlw5BPA4AkuMjnS2zggVg828Vq0gFEWRNgcvu4grdYv65XniCzkzZ1L%2FIOMJLI4cIGOqUBCRoe9rgS2QUoUj42lzj1o3SAt5fTvdEqUqZ3HZwf0R9c%2FEXsOLs%2BWJ4gExD9YqxfwOtpryri%2BNpRXQiSahGqOLQdWBhPBkMBe1iQwF91fJ%2BjusGlKPkjrIvCgL2GxFeS%2FcVbCC9cX6X19JOnY7kDn93mcqW%2FUgFW0w5XnAOiy59u134rVf4mOtD22wYwJC0vouVQUz%2B357cu%2Fxd6nzA3Na%2BLz3nq&X-Amz-Signature=254cad7194b3022240e02eb0445f537e18612809064c1a0af77dc79f11142701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKF62O5Y%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGVX6Z4Plq9l6Sufj6LbGXRo5X2hoFmxGh2iHJGkpL2NAiEA6UWiyyzepBtJA2Z3Q5QbbxkxPG5uFaeWKGAr3J5DP8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuyY3rLKnkOzLr6hCrcA3jE2P3nK45kpr%2FH28zISANVv4prFT1b%2FGJm4JpWOFrA2%2FgYvUqE%2BnVgvuzs%2BiwZWTYHSkHOiauInlzVP%2BtgJxSvig%2BSPcaclYYVpqO4%2BJ5uHnsCQ6FB4Y6NJmY3K%2FIY0IEhMyZU3SokcM7oOh20x6gIWmBatWGfklVZFEPyIBAemZLQbzY9P%2BMIS0LJLZiAWAFTtHMQKKBBVaJPWsmPZvS4evqHmAfXJG8jUCqc9YEeItO%2FXneVtRR6Md1KTcHf8XEx9hNk9XpWMGwv0fbX5f%2FAwxVMta%2F%2FSf9sqb%2FpsM8Z1flkEB6rwPamTQHhNuESd3zIM7pI8ejBC6kQMRuyw6gITHs9sIU4OwCJnkZMQLidMZGllfZNaTnH1yZwB43NBlDY70PKcggDUqTYxk5PSOux%2BSaRZKe7LjEhm8Lt03uetOBO7ZAwU%2B4GnBBkpzaIv3DMi3uAFnH5rVtHZ%2FiNy0N3E5locJS9nBi9mo1j6dB382trlj2QX8ywMJPv2msh4g5kzwqPqt2T1Ec7r0plStWnkq1hvUV7JrFezp0QGKYiYrZm0kbsJO6Vp0HmotNyAaAlw5BPA4AkuMjnS2zggVg828Vq0gFEWRNgcvu4grdYv65XniCzkzZ1L%2FIOMJLI4cIGOqUBCRoe9rgS2QUoUj42lzj1o3SAt5fTvdEqUqZ3HZwf0R9c%2FEXsOLs%2BWJ4gExD9YqxfwOtpryri%2BNpRXQiSahGqOLQdWBhPBkMBe1iQwF91fJ%2BjusGlKPkjrIvCgL2GxFeS%2FcVbCC9cX6X19JOnY7kDn93mcqW%2FUgFW0w5XnAOiy59u134rVf4mOtD22wYwJC0vouVQUz%2B357cu%2Fxd6nzA3Na%2BLz3nq&X-Amz-Signature=517528fd9a3f8d83c65633f75d60e54efe1a4dd8d3868554340b991ff23d0df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKF62O5Y%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGVX6Z4Plq9l6Sufj6LbGXRo5X2hoFmxGh2iHJGkpL2NAiEA6UWiyyzepBtJA2Z3Q5QbbxkxPG5uFaeWKGAr3J5DP8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuyY3rLKnkOzLr6hCrcA3jE2P3nK45kpr%2FH28zISANVv4prFT1b%2FGJm4JpWOFrA2%2FgYvUqE%2BnVgvuzs%2BiwZWTYHSkHOiauInlzVP%2BtgJxSvig%2BSPcaclYYVpqO4%2BJ5uHnsCQ6FB4Y6NJmY3K%2FIY0IEhMyZU3SokcM7oOh20x6gIWmBatWGfklVZFEPyIBAemZLQbzY9P%2BMIS0LJLZiAWAFTtHMQKKBBVaJPWsmPZvS4evqHmAfXJG8jUCqc9YEeItO%2FXneVtRR6Md1KTcHf8XEx9hNk9XpWMGwv0fbX5f%2FAwxVMta%2F%2FSf9sqb%2FpsM8Z1flkEB6rwPamTQHhNuESd3zIM7pI8ejBC6kQMRuyw6gITHs9sIU4OwCJnkZMQLidMZGllfZNaTnH1yZwB43NBlDY70PKcggDUqTYxk5PSOux%2BSaRZKe7LjEhm8Lt03uetOBO7ZAwU%2B4GnBBkpzaIv3DMi3uAFnH5rVtHZ%2FiNy0N3E5locJS9nBi9mo1j6dB382trlj2QX8ywMJPv2msh4g5kzwqPqt2T1Ec7r0plStWnkq1hvUV7JrFezp0QGKYiYrZm0kbsJO6Vp0HmotNyAaAlw5BPA4AkuMjnS2zggVg828Vq0gFEWRNgcvu4grdYv65XniCzkzZ1L%2FIOMJLI4cIGOqUBCRoe9rgS2QUoUj42lzj1o3SAt5fTvdEqUqZ3HZwf0R9c%2FEXsOLs%2BWJ4gExD9YqxfwOtpryri%2BNpRXQiSahGqOLQdWBhPBkMBe1iQwF91fJ%2BjusGlKPkjrIvCgL2GxFeS%2FcVbCC9cX6X19JOnY7kDn93mcqW%2FUgFW0w5XnAOiy59u134rVf4mOtD22wYwJC0vouVQUz%2B357cu%2Fxd6nzA3Na%2BLz3nq&X-Amz-Signature=2158fd96fdced47f22935adc7bc2e194e1c8d17060b1b32777b78e360ec3ba7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKF62O5Y%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGVX6Z4Plq9l6Sufj6LbGXRo5X2hoFmxGh2iHJGkpL2NAiEA6UWiyyzepBtJA2Z3Q5QbbxkxPG5uFaeWKGAr3J5DP8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuyY3rLKnkOzLr6hCrcA3jE2P3nK45kpr%2FH28zISANVv4prFT1b%2FGJm4JpWOFrA2%2FgYvUqE%2BnVgvuzs%2BiwZWTYHSkHOiauInlzVP%2BtgJxSvig%2BSPcaclYYVpqO4%2BJ5uHnsCQ6FB4Y6NJmY3K%2FIY0IEhMyZU3SokcM7oOh20x6gIWmBatWGfklVZFEPyIBAemZLQbzY9P%2BMIS0LJLZiAWAFTtHMQKKBBVaJPWsmPZvS4evqHmAfXJG8jUCqc9YEeItO%2FXneVtRR6Md1KTcHf8XEx9hNk9XpWMGwv0fbX5f%2FAwxVMta%2F%2FSf9sqb%2FpsM8Z1flkEB6rwPamTQHhNuESd3zIM7pI8ejBC6kQMRuyw6gITHs9sIU4OwCJnkZMQLidMZGllfZNaTnH1yZwB43NBlDY70PKcggDUqTYxk5PSOux%2BSaRZKe7LjEhm8Lt03uetOBO7ZAwU%2B4GnBBkpzaIv3DMi3uAFnH5rVtHZ%2FiNy0N3E5locJS9nBi9mo1j6dB382trlj2QX8ywMJPv2msh4g5kzwqPqt2T1Ec7r0plStWnkq1hvUV7JrFezp0QGKYiYrZm0kbsJO6Vp0HmotNyAaAlw5BPA4AkuMjnS2zggVg828Vq0gFEWRNgcvu4grdYv65XniCzkzZ1L%2FIOMJLI4cIGOqUBCRoe9rgS2QUoUj42lzj1o3SAt5fTvdEqUqZ3HZwf0R9c%2FEXsOLs%2BWJ4gExD9YqxfwOtpryri%2BNpRXQiSahGqOLQdWBhPBkMBe1iQwF91fJ%2BjusGlKPkjrIvCgL2GxFeS%2FcVbCC9cX6X19JOnY7kDn93mcqW%2FUgFW0w5XnAOiy59u134rVf4mOtD22wYwJC0vouVQUz%2B357cu%2Fxd6nzA3Na%2BLz3nq&X-Amz-Signature=41d2d22185169ef10d4fff3f021eca22de318251a31084a8952919e2c6604de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKF62O5Y%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGVX6Z4Plq9l6Sufj6LbGXRo5X2hoFmxGh2iHJGkpL2NAiEA6UWiyyzepBtJA2Z3Q5QbbxkxPG5uFaeWKGAr3J5DP8YqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuyY3rLKnkOzLr6hCrcA3jE2P3nK45kpr%2FH28zISANVv4prFT1b%2FGJm4JpWOFrA2%2FgYvUqE%2BnVgvuzs%2BiwZWTYHSkHOiauInlzVP%2BtgJxSvig%2BSPcaclYYVpqO4%2BJ5uHnsCQ6FB4Y6NJmY3K%2FIY0IEhMyZU3SokcM7oOh20x6gIWmBatWGfklVZFEPyIBAemZLQbzY9P%2BMIS0LJLZiAWAFTtHMQKKBBVaJPWsmPZvS4evqHmAfXJG8jUCqc9YEeItO%2FXneVtRR6Md1KTcHf8XEx9hNk9XpWMGwv0fbX5f%2FAwxVMta%2F%2FSf9sqb%2FpsM8Z1flkEB6rwPamTQHhNuESd3zIM7pI8ejBC6kQMRuyw6gITHs9sIU4OwCJnkZMQLidMZGllfZNaTnH1yZwB43NBlDY70PKcggDUqTYxk5PSOux%2BSaRZKe7LjEhm8Lt03uetOBO7ZAwU%2B4GnBBkpzaIv3DMi3uAFnH5rVtHZ%2FiNy0N3E5locJS9nBi9mo1j6dB382trlj2QX8ywMJPv2msh4g5kzwqPqt2T1Ec7r0plStWnkq1hvUV7JrFezp0QGKYiYrZm0kbsJO6Vp0HmotNyAaAlw5BPA4AkuMjnS2zggVg828Vq0gFEWRNgcvu4grdYv65XniCzkzZ1L%2FIOMJLI4cIGOqUBCRoe9rgS2QUoUj42lzj1o3SAt5fTvdEqUqZ3HZwf0R9c%2FEXsOLs%2BWJ4gExD9YqxfwOtpryri%2BNpRXQiSahGqOLQdWBhPBkMBe1iQwF91fJ%2BjusGlKPkjrIvCgL2GxFeS%2FcVbCC9cX6X19JOnY7kDn93mcqW%2FUgFW0w5XnAOiy59u134rVf4mOtD22wYwJC0vouVQUz%2B357cu%2Fxd6nzA3Na%2BLz3nq&X-Amz-Signature=60721cd8d471661c0e66357028b126fec35c913637aff945c84eeed0a8a7d732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
