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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ7IGWM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Nxi2WKGQkQRK2EcRa9vUqiG2SKjTPhPn5Sa1UmtJyAiB55OAuPHS340Q8F9GFk2SJkcLwvRVbDbyTuseipCZQ%2Bir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3b7zN4j3p8cTUXUNKtwDDq1y%2F9a6oDe6asaP0L04gTa%2B7cBteBCZ3DlW7j3SkpfIa%2BOq3A4HcP4pOovtP1Gypu9R2kPYSusg3qHoM0Weg%2FgTyuCWkgjR7Tn2AilUlA318xW4m4Bc0c62%2BhB5cWecNVvKp%2F2cawIERwi%2BYqoguzG%2Fwukk2Jw%2BSoE1CYtAbOWOv3AsF1MvbubzFO%2Fz9H0v%2FuJu6bpVJU0N47Y%2BmOuS5AlYKO%2FwnWUF2g2HI1hgk4t0KBTuw7cCS8PRD1Lz8jAB53DiIjyNekY8xEAgrYJ9R542trsTwzJ%2BwOb01tUpHIpsp5pgLqEOO0I5IN3Q4hQKabrrmY6mWp%2Fz86V9Xz4tkYv29HwXhBW9EtIhYio2yOc0P%2BHsTJ8wNlj4OcvOt5ioaqfTARSlhDJT9%2Br54HSeFfDPmh9dRNTsoz%2FsQx477Qpmz%2BK5JsHnEpB5hr9hHJuQy6bmTZcC0Nxitdds0woACOXBexp%2Be4egKDHAjCMR7JmyUQ2yX4cWmhFOGJ%2B9vlhdQJEFKrbZvn00ShJv77YmGpCeWQ0DYZn3PKGhmsf7Dm4UnP27KRTg0zpB96V%2BgWFz%2BKEMLM9FnUMkX94tD846cjMpS9mIn9uqImDibTBH9TdcmxCXpmR5xojchfEw9Zv4vwY6pgEUCMPNJ5ac4ehhVD9fcz%2FSXn9Hgec8Ue9XYO2IXul6ACZ2GQoPxjVba1Bv12oEd9ehjPAnDBXR5rdnEQoQjybQwzxsddBBaG9rREwl8dIPsV16xzEdKnCOXi%2FNkS3j0XgOVLD2t07HSy%2FIpoTjFgVbdT%2FtbrPFb4dwoJqLEiKZC%2FPAnwMZxo%2B%2BJbuSN05w8rZqIFJp2N%2BdbMNLJ7nS4F2qP96E%2BwSR&X-Amz-Signature=c4177420195b6cacd5176a50c8857a6d3831b3a859b21c57041050794f4400b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ7IGWM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Nxi2WKGQkQRK2EcRa9vUqiG2SKjTPhPn5Sa1UmtJyAiB55OAuPHS340Q8F9GFk2SJkcLwvRVbDbyTuseipCZQ%2Bir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3b7zN4j3p8cTUXUNKtwDDq1y%2F9a6oDe6asaP0L04gTa%2B7cBteBCZ3DlW7j3SkpfIa%2BOq3A4HcP4pOovtP1Gypu9R2kPYSusg3qHoM0Weg%2FgTyuCWkgjR7Tn2AilUlA318xW4m4Bc0c62%2BhB5cWecNVvKp%2F2cawIERwi%2BYqoguzG%2Fwukk2Jw%2BSoE1CYtAbOWOv3AsF1MvbubzFO%2Fz9H0v%2FuJu6bpVJU0N47Y%2BmOuS5AlYKO%2FwnWUF2g2HI1hgk4t0KBTuw7cCS8PRD1Lz8jAB53DiIjyNekY8xEAgrYJ9R542trsTwzJ%2BwOb01tUpHIpsp5pgLqEOO0I5IN3Q4hQKabrrmY6mWp%2Fz86V9Xz4tkYv29HwXhBW9EtIhYio2yOc0P%2BHsTJ8wNlj4OcvOt5ioaqfTARSlhDJT9%2Br54HSeFfDPmh9dRNTsoz%2FsQx477Qpmz%2BK5JsHnEpB5hr9hHJuQy6bmTZcC0Nxitdds0woACOXBexp%2Be4egKDHAjCMR7JmyUQ2yX4cWmhFOGJ%2B9vlhdQJEFKrbZvn00ShJv77YmGpCeWQ0DYZn3PKGhmsf7Dm4UnP27KRTg0zpB96V%2BgWFz%2BKEMLM9FnUMkX94tD846cjMpS9mIn9uqImDibTBH9TdcmxCXpmR5xojchfEw9Zv4vwY6pgEUCMPNJ5ac4ehhVD9fcz%2FSXn9Hgec8Ue9XYO2IXul6ACZ2GQoPxjVba1Bv12oEd9ehjPAnDBXR5rdnEQoQjybQwzxsddBBaG9rREwl8dIPsV16xzEdKnCOXi%2FNkS3j0XgOVLD2t07HSy%2FIpoTjFgVbdT%2FtbrPFb4dwoJqLEiKZC%2FPAnwMZxo%2B%2BJbuSN05w8rZqIFJp2N%2BdbMNLJ7nS4F2qP96E%2BwSR&X-Amz-Signature=41cf38aafe49a74340fcf44d7382c1cca16f855b091270115eef25a2075fda51&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ7IGWM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Nxi2WKGQkQRK2EcRa9vUqiG2SKjTPhPn5Sa1UmtJyAiB55OAuPHS340Q8F9GFk2SJkcLwvRVbDbyTuseipCZQ%2Bir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3b7zN4j3p8cTUXUNKtwDDq1y%2F9a6oDe6asaP0L04gTa%2B7cBteBCZ3DlW7j3SkpfIa%2BOq3A4HcP4pOovtP1Gypu9R2kPYSusg3qHoM0Weg%2FgTyuCWkgjR7Tn2AilUlA318xW4m4Bc0c62%2BhB5cWecNVvKp%2F2cawIERwi%2BYqoguzG%2Fwukk2Jw%2BSoE1CYtAbOWOv3AsF1MvbubzFO%2Fz9H0v%2FuJu6bpVJU0N47Y%2BmOuS5AlYKO%2FwnWUF2g2HI1hgk4t0KBTuw7cCS8PRD1Lz8jAB53DiIjyNekY8xEAgrYJ9R542trsTwzJ%2BwOb01tUpHIpsp5pgLqEOO0I5IN3Q4hQKabrrmY6mWp%2Fz86V9Xz4tkYv29HwXhBW9EtIhYio2yOc0P%2BHsTJ8wNlj4OcvOt5ioaqfTARSlhDJT9%2Br54HSeFfDPmh9dRNTsoz%2FsQx477Qpmz%2BK5JsHnEpB5hr9hHJuQy6bmTZcC0Nxitdds0woACOXBexp%2Be4egKDHAjCMR7JmyUQ2yX4cWmhFOGJ%2B9vlhdQJEFKrbZvn00ShJv77YmGpCeWQ0DYZn3PKGhmsf7Dm4UnP27KRTg0zpB96V%2BgWFz%2BKEMLM9FnUMkX94tD846cjMpS9mIn9uqImDibTBH9TdcmxCXpmR5xojchfEw9Zv4vwY6pgEUCMPNJ5ac4ehhVD9fcz%2FSXn9Hgec8Ue9XYO2IXul6ACZ2GQoPxjVba1Bv12oEd9ehjPAnDBXR5rdnEQoQjybQwzxsddBBaG9rREwl8dIPsV16xzEdKnCOXi%2FNkS3j0XgOVLD2t07HSy%2FIpoTjFgVbdT%2FtbrPFb4dwoJqLEiKZC%2FPAnwMZxo%2B%2BJbuSN05w8rZqIFJp2N%2BdbMNLJ7nS4F2qP96E%2BwSR&X-Amz-Signature=1ebf2c9d323e108d2bd4580eac3c4c1bb92e7b6f1af21e92df202df0a5f80169&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ7IGWM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Nxi2WKGQkQRK2EcRa9vUqiG2SKjTPhPn5Sa1UmtJyAiB55OAuPHS340Q8F9GFk2SJkcLwvRVbDbyTuseipCZQ%2Bir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3b7zN4j3p8cTUXUNKtwDDq1y%2F9a6oDe6asaP0L04gTa%2B7cBteBCZ3DlW7j3SkpfIa%2BOq3A4HcP4pOovtP1Gypu9R2kPYSusg3qHoM0Weg%2FgTyuCWkgjR7Tn2AilUlA318xW4m4Bc0c62%2BhB5cWecNVvKp%2F2cawIERwi%2BYqoguzG%2Fwukk2Jw%2BSoE1CYtAbOWOv3AsF1MvbubzFO%2Fz9H0v%2FuJu6bpVJU0N47Y%2BmOuS5AlYKO%2FwnWUF2g2HI1hgk4t0KBTuw7cCS8PRD1Lz8jAB53DiIjyNekY8xEAgrYJ9R542trsTwzJ%2BwOb01tUpHIpsp5pgLqEOO0I5IN3Q4hQKabrrmY6mWp%2Fz86V9Xz4tkYv29HwXhBW9EtIhYio2yOc0P%2BHsTJ8wNlj4OcvOt5ioaqfTARSlhDJT9%2Br54HSeFfDPmh9dRNTsoz%2FsQx477Qpmz%2BK5JsHnEpB5hr9hHJuQy6bmTZcC0Nxitdds0woACOXBexp%2Be4egKDHAjCMR7JmyUQ2yX4cWmhFOGJ%2B9vlhdQJEFKrbZvn00ShJv77YmGpCeWQ0DYZn3PKGhmsf7Dm4UnP27KRTg0zpB96V%2BgWFz%2BKEMLM9FnUMkX94tD846cjMpS9mIn9uqImDibTBH9TdcmxCXpmR5xojchfEw9Zv4vwY6pgEUCMPNJ5ac4ehhVD9fcz%2FSXn9Hgec8Ue9XYO2IXul6ACZ2GQoPxjVba1Bv12oEd9ehjPAnDBXR5rdnEQoQjybQwzxsddBBaG9rREwl8dIPsV16xzEdKnCOXi%2FNkS3j0XgOVLD2t07HSy%2FIpoTjFgVbdT%2FtbrPFb4dwoJqLEiKZC%2FPAnwMZxo%2B%2BJbuSN05w8rZqIFJp2N%2BdbMNLJ7nS4F2qP96E%2BwSR&X-Amz-Signature=8b31e16e126f40f0c478d1ac886decaa55983277574e648fdd299d2acaea0758&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MQ7IGWM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Nxi2WKGQkQRK2EcRa9vUqiG2SKjTPhPn5Sa1UmtJyAiB55OAuPHS340Q8F9GFk2SJkcLwvRVbDbyTuseipCZQ%2Bir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM3b7zN4j3p8cTUXUNKtwDDq1y%2F9a6oDe6asaP0L04gTa%2B7cBteBCZ3DlW7j3SkpfIa%2BOq3A4HcP4pOovtP1Gypu9R2kPYSusg3qHoM0Weg%2FgTyuCWkgjR7Tn2AilUlA318xW4m4Bc0c62%2BhB5cWecNVvKp%2F2cawIERwi%2BYqoguzG%2Fwukk2Jw%2BSoE1CYtAbOWOv3AsF1MvbubzFO%2Fz9H0v%2FuJu6bpVJU0N47Y%2BmOuS5AlYKO%2FwnWUF2g2HI1hgk4t0KBTuw7cCS8PRD1Lz8jAB53DiIjyNekY8xEAgrYJ9R542trsTwzJ%2BwOb01tUpHIpsp5pgLqEOO0I5IN3Q4hQKabrrmY6mWp%2Fz86V9Xz4tkYv29HwXhBW9EtIhYio2yOc0P%2BHsTJ8wNlj4OcvOt5ioaqfTARSlhDJT9%2Br54HSeFfDPmh9dRNTsoz%2FsQx477Qpmz%2BK5JsHnEpB5hr9hHJuQy6bmTZcC0Nxitdds0woACOXBexp%2Be4egKDHAjCMR7JmyUQ2yX4cWmhFOGJ%2B9vlhdQJEFKrbZvn00ShJv77YmGpCeWQ0DYZn3PKGhmsf7Dm4UnP27KRTg0zpB96V%2BgWFz%2BKEMLM9FnUMkX94tD846cjMpS9mIn9uqImDibTBH9TdcmxCXpmR5xojchfEw9Zv4vwY6pgEUCMPNJ5ac4ehhVD9fcz%2FSXn9Hgec8Ue9XYO2IXul6ACZ2GQoPxjVba1Bv12oEd9ehjPAnDBXR5rdnEQoQjybQwzxsddBBaG9rREwl8dIPsV16xzEdKnCOXi%2FNkS3j0XgOVLD2t07HSy%2FIpoTjFgVbdT%2FtbrPFb4dwoJqLEiKZC%2FPAnwMZxo%2B%2BJbuSN05w8rZqIFJp2N%2BdbMNLJ7nS4F2qP96E%2BwSR&X-Amz-Signature=dbdf4b699be569038d7c7314fd75690853084d38a09870db34f1fc6ffec518d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
