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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRW3SWD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq6KHJPMpRVoRajVMGRV7N3Z59Q9iiqxPt5Ypj8zNsAiEA2SBxp0V0nk8fehZZNsq1IkssawCVRkUd4XWcu6%2BsCWUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B33oU%2FJoh4VN%2B1ZircA9Lil%2BGDMTHcVM7bLu8fqxfDzd1wnhJyhTFO6QzuA6Oo4waUNS%2BVKOR0He4jENjlHX48oIN2cAw27FaLCIdj7ttWkmJJlCgNDPF5pSbbJbXmY9bVRqTtGMEJ9nZfTGtt1FQJvyOF0X6csrywMnlGT%2FbKuHK96qCRx3EayUsi1fsxhvu6kcx4gDCP1CY6OdzTeHJeTWJN6I%2Bieful9jtDuDLd34CRM3XiiiP8kRr5jvc25Q1zbvzaFULQPW65LRVEDoLjbhm8Hl8ZRNmwYJ3fSoyr95I2kNGpgX5nXEyOL7NgjPLNS%2BQzP4B2BTAn7odO7hdIlSWX4sE5y4m4F2QFsNbD5mDvgqxfUzSHlZbEizb1cSogC4jIWvyQxWHxhfilCssbuXAS6jZcNVL7EKS3%2F5pvmS9T4Dg%2F2y4xRoBg%2BBYZ1J68ehyKG4bHsdk0Czjp%2B3PFsQ32zDLQ%2B7isRk1cRecn%2BSN%2BW03W7AC1V7EXowdb7hbfQvONpB8V7henO6F%2Bg8ItRaJTAa7dgx9WXYyZ9OUZ1NTZPFm3zJkUsdAHqSlFfZ%2F7%2FP%2BEDKPK2cneTryAIGVoHUGQSo57x1l3jfh%2BioKiMR3oAflCH5uBvih61pFCyb0wX%2BFbySwlNC9GMP6l1L4GOqUBAz2pKXapzBDgW6iqBnQVbZZopD6t8hBjhL9oSNc5JzRYkVpp1RlVn9R2HMN%2B0nuIMLEjMMs1XLoc0RDpTC8XKizpdZptSDH3Ot3sF2vW87Vv3jPpM96UsRv090qTcwxxCVChkBtHm7IgxvhkO8wKhii4wvYyrAA3eu6%2BNoelPJAfOm%2FRE8EUZ4lTpJaDCUWyCRQxv4V7hr4ftnWtuSwUU3gznl7s&X-Amz-Signature=768f1ba5698f83ece0e1650b01c3d360005c8635f9bce6a2f7a6e4909f1aad6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRW3SWD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq6KHJPMpRVoRajVMGRV7N3Z59Q9iiqxPt5Ypj8zNsAiEA2SBxp0V0nk8fehZZNsq1IkssawCVRkUd4XWcu6%2BsCWUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B33oU%2FJoh4VN%2B1ZircA9Lil%2BGDMTHcVM7bLu8fqxfDzd1wnhJyhTFO6QzuA6Oo4waUNS%2BVKOR0He4jENjlHX48oIN2cAw27FaLCIdj7ttWkmJJlCgNDPF5pSbbJbXmY9bVRqTtGMEJ9nZfTGtt1FQJvyOF0X6csrywMnlGT%2FbKuHK96qCRx3EayUsi1fsxhvu6kcx4gDCP1CY6OdzTeHJeTWJN6I%2Bieful9jtDuDLd34CRM3XiiiP8kRr5jvc25Q1zbvzaFULQPW65LRVEDoLjbhm8Hl8ZRNmwYJ3fSoyr95I2kNGpgX5nXEyOL7NgjPLNS%2BQzP4B2BTAn7odO7hdIlSWX4sE5y4m4F2QFsNbD5mDvgqxfUzSHlZbEizb1cSogC4jIWvyQxWHxhfilCssbuXAS6jZcNVL7EKS3%2F5pvmS9T4Dg%2F2y4xRoBg%2BBYZ1J68ehyKG4bHsdk0Czjp%2B3PFsQ32zDLQ%2B7isRk1cRecn%2BSN%2BW03W7AC1V7EXowdb7hbfQvONpB8V7henO6F%2Bg8ItRaJTAa7dgx9WXYyZ9OUZ1NTZPFm3zJkUsdAHqSlFfZ%2F7%2FP%2BEDKPK2cneTryAIGVoHUGQSo57x1l3jfh%2BioKiMR3oAflCH5uBvih61pFCyb0wX%2BFbySwlNC9GMP6l1L4GOqUBAz2pKXapzBDgW6iqBnQVbZZopD6t8hBjhL9oSNc5JzRYkVpp1RlVn9R2HMN%2B0nuIMLEjMMs1XLoc0RDpTC8XKizpdZptSDH3Ot3sF2vW87Vv3jPpM96UsRv090qTcwxxCVChkBtHm7IgxvhkO8wKhii4wvYyrAA3eu6%2BNoelPJAfOm%2FRE8EUZ4lTpJaDCUWyCRQxv4V7hr4ftnWtuSwUU3gznl7s&X-Amz-Signature=cd617c505834a7370374c3c16fff31e217385ca4dbb12a28cc1bf0822d578919&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRW3SWD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq6KHJPMpRVoRajVMGRV7N3Z59Q9iiqxPt5Ypj8zNsAiEA2SBxp0V0nk8fehZZNsq1IkssawCVRkUd4XWcu6%2BsCWUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B33oU%2FJoh4VN%2B1ZircA9Lil%2BGDMTHcVM7bLu8fqxfDzd1wnhJyhTFO6QzuA6Oo4waUNS%2BVKOR0He4jENjlHX48oIN2cAw27FaLCIdj7ttWkmJJlCgNDPF5pSbbJbXmY9bVRqTtGMEJ9nZfTGtt1FQJvyOF0X6csrywMnlGT%2FbKuHK96qCRx3EayUsi1fsxhvu6kcx4gDCP1CY6OdzTeHJeTWJN6I%2Bieful9jtDuDLd34CRM3XiiiP8kRr5jvc25Q1zbvzaFULQPW65LRVEDoLjbhm8Hl8ZRNmwYJ3fSoyr95I2kNGpgX5nXEyOL7NgjPLNS%2BQzP4B2BTAn7odO7hdIlSWX4sE5y4m4F2QFsNbD5mDvgqxfUzSHlZbEizb1cSogC4jIWvyQxWHxhfilCssbuXAS6jZcNVL7EKS3%2F5pvmS9T4Dg%2F2y4xRoBg%2BBYZ1J68ehyKG4bHsdk0Czjp%2B3PFsQ32zDLQ%2B7isRk1cRecn%2BSN%2BW03W7AC1V7EXowdb7hbfQvONpB8V7henO6F%2Bg8ItRaJTAa7dgx9WXYyZ9OUZ1NTZPFm3zJkUsdAHqSlFfZ%2F7%2FP%2BEDKPK2cneTryAIGVoHUGQSo57x1l3jfh%2BioKiMR3oAflCH5uBvih61pFCyb0wX%2BFbySwlNC9GMP6l1L4GOqUBAz2pKXapzBDgW6iqBnQVbZZopD6t8hBjhL9oSNc5JzRYkVpp1RlVn9R2HMN%2B0nuIMLEjMMs1XLoc0RDpTC8XKizpdZptSDH3Ot3sF2vW87Vv3jPpM96UsRv090qTcwxxCVChkBtHm7IgxvhkO8wKhii4wvYyrAA3eu6%2BNoelPJAfOm%2FRE8EUZ4lTpJaDCUWyCRQxv4V7hr4ftnWtuSwUU3gznl7s&X-Amz-Signature=95985b244fde08305148a442d8dbc9afb444c173270241ca775ac80f2ffc7205&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRW3SWD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq6KHJPMpRVoRajVMGRV7N3Z59Q9iiqxPt5Ypj8zNsAiEA2SBxp0V0nk8fehZZNsq1IkssawCVRkUd4XWcu6%2BsCWUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B33oU%2FJoh4VN%2B1ZircA9Lil%2BGDMTHcVM7bLu8fqxfDzd1wnhJyhTFO6QzuA6Oo4waUNS%2BVKOR0He4jENjlHX48oIN2cAw27FaLCIdj7ttWkmJJlCgNDPF5pSbbJbXmY9bVRqTtGMEJ9nZfTGtt1FQJvyOF0X6csrywMnlGT%2FbKuHK96qCRx3EayUsi1fsxhvu6kcx4gDCP1CY6OdzTeHJeTWJN6I%2Bieful9jtDuDLd34CRM3XiiiP8kRr5jvc25Q1zbvzaFULQPW65LRVEDoLjbhm8Hl8ZRNmwYJ3fSoyr95I2kNGpgX5nXEyOL7NgjPLNS%2BQzP4B2BTAn7odO7hdIlSWX4sE5y4m4F2QFsNbD5mDvgqxfUzSHlZbEizb1cSogC4jIWvyQxWHxhfilCssbuXAS6jZcNVL7EKS3%2F5pvmS9T4Dg%2F2y4xRoBg%2BBYZ1J68ehyKG4bHsdk0Czjp%2B3PFsQ32zDLQ%2B7isRk1cRecn%2BSN%2BW03W7AC1V7EXowdb7hbfQvONpB8V7henO6F%2Bg8ItRaJTAa7dgx9WXYyZ9OUZ1NTZPFm3zJkUsdAHqSlFfZ%2F7%2FP%2BEDKPK2cneTryAIGVoHUGQSo57x1l3jfh%2BioKiMR3oAflCH5uBvih61pFCyb0wX%2BFbySwlNC9GMP6l1L4GOqUBAz2pKXapzBDgW6iqBnQVbZZopD6t8hBjhL9oSNc5JzRYkVpp1RlVn9R2HMN%2B0nuIMLEjMMs1XLoc0RDpTC8XKizpdZptSDH3Ot3sF2vW87Vv3jPpM96UsRv090qTcwxxCVChkBtHm7IgxvhkO8wKhii4wvYyrAA3eu6%2BNoelPJAfOm%2FRE8EUZ4lTpJaDCUWyCRQxv4V7hr4ftnWtuSwUU3gznl7s&X-Amz-Signature=14f0bcfdf8a76e113d549fdc773c366c412e1157c3556075314aaa75a1dcf738&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRW3SWD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq6KHJPMpRVoRajVMGRV7N3Z59Q9iiqxPt5Ypj8zNsAiEA2SBxp0V0nk8fehZZNsq1IkssawCVRkUd4XWcu6%2BsCWUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B33oU%2FJoh4VN%2B1ZircA9Lil%2BGDMTHcVM7bLu8fqxfDzd1wnhJyhTFO6QzuA6Oo4waUNS%2BVKOR0He4jENjlHX48oIN2cAw27FaLCIdj7ttWkmJJlCgNDPF5pSbbJbXmY9bVRqTtGMEJ9nZfTGtt1FQJvyOF0X6csrywMnlGT%2FbKuHK96qCRx3EayUsi1fsxhvu6kcx4gDCP1CY6OdzTeHJeTWJN6I%2Bieful9jtDuDLd34CRM3XiiiP8kRr5jvc25Q1zbvzaFULQPW65LRVEDoLjbhm8Hl8ZRNmwYJ3fSoyr95I2kNGpgX5nXEyOL7NgjPLNS%2BQzP4B2BTAn7odO7hdIlSWX4sE5y4m4F2QFsNbD5mDvgqxfUzSHlZbEizb1cSogC4jIWvyQxWHxhfilCssbuXAS6jZcNVL7EKS3%2F5pvmS9T4Dg%2F2y4xRoBg%2BBYZ1J68ehyKG4bHsdk0Czjp%2B3PFsQ32zDLQ%2B7isRk1cRecn%2BSN%2BW03W7AC1V7EXowdb7hbfQvONpB8V7henO6F%2Bg8ItRaJTAa7dgx9WXYyZ9OUZ1NTZPFm3zJkUsdAHqSlFfZ%2F7%2FP%2BEDKPK2cneTryAIGVoHUGQSo57x1l3jfh%2BioKiMR3oAflCH5uBvih61pFCyb0wX%2BFbySwlNC9GMP6l1L4GOqUBAz2pKXapzBDgW6iqBnQVbZZopD6t8hBjhL9oSNc5JzRYkVpp1RlVn9R2HMN%2B0nuIMLEjMMs1XLoc0RDpTC8XKizpdZptSDH3Ot3sF2vW87Vv3jPpM96UsRv090qTcwxxCVChkBtHm7IgxvhkO8wKhii4wvYyrAA3eu6%2BNoelPJAfOm%2FRE8EUZ4lTpJaDCUWyCRQxv4V7hr4ftnWtuSwUU3gznl7s&X-Amz-Signature=55935de54c42874c950521a9f676b564239a7d88231bcdc53be068c11c9c6d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
