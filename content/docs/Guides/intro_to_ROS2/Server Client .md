---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJUJ334%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiha99TR5479Bc1qPpWTAEJ16hHXarnCIAteEz%2BuH13gIgHypdAp%2BbNcL%2BufC%2FtwAlKhK%2BzSxlRB1HVk88g0pY3%2B4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKhE1WpthDTW6LqMkCrcA1Ldx9fID5R1YfIRfHUymTV2xLniXNAtwM3Veo7FhdlZHZ41NleHQzlp0ceYa2jLk58lt%2BZ6%2FUitXFDExJpi7JODZKlYtv5YzjjEAWDw3tNDsbgyTwjF1wJK%2BNZqdWLjRVQ3kt1M6%2BNBrNxiU0mUuYSqIshEP4xinleyEKc9YSaS3mzWGa8cTBJ275Z8o7ghkQpJydGyn%2BtaFBu2ydnevEnxDruaiEY0WqZ5GESj3U66damcNYhXkZ0X6jkQTXKqGG8B2jt2YsQdPmHX4lucuVL2XC9N4fe7yBGdEllh8KVkcQjtNi2zdnenqcykFMgOykfDuCA2Ij5QoaV00EF8vJPRLXknntrROCuuL9y3DuOUDdZcZiPg0KxmMKN3BzPmA1ocqWsIF7BHmvFk%2FT1haLQ1sw3MHzBO6RysS2hcpIAeRDW5S4IFBr2DmRC2ppI0x69CqzhCOlLAbY0rgowqxwoajLCMgRDW15Db7utHDKUAsv05yqPpCeyFF6SZxfsYpabz5jo2ejc6K2X7%2F6HkvJO36y6K0O%2FMU8yObuCSMCbJJIOMdzfdqtDmjO%2FdSICt9EbPl6mJR0GrIFMvpXGvRTwKyV6OOMv44WNuHcesZCFPjL0SV%2BdiCIpANJFzMJSX%2BMkGOqUBqolyDuatqeZ1DfNy7qgZYb%2FKgz1S3mBEFwwbbWYq12t4Qe1t8q3Bbx4ZnKdISMVrIHY5fwjsQwpVCTLfoPKHgmldgyElQrtuaE0bcJ9u753wWCPKMUtBHcktC9F8No9ctnXocDofQQWY2SXD3SkSnLo%2ByR7o6pVy6jHkRXasIqPyOcVSodCbN22qFGkaf%2BTmyfz5GB59PyIIwXndV6BFqJbt%2BRpA&X-Amz-Signature=0810b26c083d0671f93cc902a1ad86896a74c6d79f183ac86e740bb476639d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJUJ334%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiha99TR5479Bc1qPpWTAEJ16hHXarnCIAteEz%2BuH13gIgHypdAp%2BbNcL%2BufC%2FtwAlKhK%2BzSxlRB1HVk88g0pY3%2B4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKhE1WpthDTW6LqMkCrcA1Ldx9fID5R1YfIRfHUymTV2xLniXNAtwM3Veo7FhdlZHZ41NleHQzlp0ceYa2jLk58lt%2BZ6%2FUitXFDExJpi7JODZKlYtv5YzjjEAWDw3tNDsbgyTwjF1wJK%2BNZqdWLjRVQ3kt1M6%2BNBrNxiU0mUuYSqIshEP4xinleyEKc9YSaS3mzWGa8cTBJ275Z8o7ghkQpJydGyn%2BtaFBu2ydnevEnxDruaiEY0WqZ5GESj3U66damcNYhXkZ0X6jkQTXKqGG8B2jt2YsQdPmHX4lucuVL2XC9N4fe7yBGdEllh8KVkcQjtNi2zdnenqcykFMgOykfDuCA2Ij5QoaV00EF8vJPRLXknntrROCuuL9y3DuOUDdZcZiPg0KxmMKN3BzPmA1ocqWsIF7BHmvFk%2FT1haLQ1sw3MHzBO6RysS2hcpIAeRDW5S4IFBr2DmRC2ppI0x69CqzhCOlLAbY0rgowqxwoajLCMgRDW15Db7utHDKUAsv05yqPpCeyFF6SZxfsYpabz5jo2ejc6K2X7%2F6HkvJO36y6K0O%2FMU8yObuCSMCbJJIOMdzfdqtDmjO%2FdSICt9EbPl6mJR0GrIFMvpXGvRTwKyV6OOMv44WNuHcesZCFPjL0SV%2BdiCIpANJFzMJSX%2BMkGOqUBqolyDuatqeZ1DfNy7qgZYb%2FKgz1S3mBEFwwbbWYq12t4Qe1t8q3Bbx4ZnKdISMVrIHY5fwjsQwpVCTLfoPKHgmldgyElQrtuaE0bcJ9u753wWCPKMUtBHcktC9F8No9ctnXocDofQQWY2SXD3SkSnLo%2ByR7o6pVy6jHkRXasIqPyOcVSodCbN22qFGkaf%2BTmyfz5GB59PyIIwXndV6BFqJbt%2BRpA&X-Amz-Signature=554853bb80447f22456a7d43a2837a9c46c8bf4118f9d731727490f70240e0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJUJ334%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiha99TR5479Bc1qPpWTAEJ16hHXarnCIAteEz%2BuH13gIgHypdAp%2BbNcL%2BufC%2FtwAlKhK%2BzSxlRB1HVk88g0pY3%2B4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKhE1WpthDTW6LqMkCrcA1Ldx9fID5R1YfIRfHUymTV2xLniXNAtwM3Veo7FhdlZHZ41NleHQzlp0ceYa2jLk58lt%2BZ6%2FUitXFDExJpi7JODZKlYtv5YzjjEAWDw3tNDsbgyTwjF1wJK%2BNZqdWLjRVQ3kt1M6%2BNBrNxiU0mUuYSqIshEP4xinleyEKc9YSaS3mzWGa8cTBJ275Z8o7ghkQpJydGyn%2BtaFBu2ydnevEnxDruaiEY0WqZ5GESj3U66damcNYhXkZ0X6jkQTXKqGG8B2jt2YsQdPmHX4lucuVL2XC9N4fe7yBGdEllh8KVkcQjtNi2zdnenqcykFMgOykfDuCA2Ij5QoaV00EF8vJPRLXknntrROCuuL9y3DuOUDdZcZiPg0KxmMKN3BzPmA1ocqWsIF7BHmvFk%2FT1haLQ1sw3MHzBO6RysS2hcpIAeRDW5S4IFBr2DmRC2ppI0x69CqzhCOlLAbY0rgowqxwoajLCMgRDW15Db7utHDKUAsv05yqPpCeyFF6SZxfsYpabz5jo2ejc6K2X7%2F6HkvJO36y6K0O%2FMU8yObuCSMCbJJIOMdzfdqtDmjO%2FdSICt9EbPl6mJR0GrIFMvpXGvRTwKyV6OOMv44WNuHcesZCFPjL0SV%2BdiCIpANJFzMJSX%2BMkGOqUBqolyDuatqeZ1DfNy7qgZYb%2FKgz1S3mBEFwwbbWYq12t4Qe1t8q3Bbx4ZnKdISMVrIHY5fwjsQwpVCTLfoPKHgmldgyElQrtuaE0bcJ9u753wWCPKMUtBHcktC9F8No9ctnXocDofQQWY2SXD3SkSnLo%2ByR7o6pVy6jHkRXasIqPyOcVSodCbN22qFGkaf%2BTmyfz5GB59PyIIwXndV6BFqJbt%2BRpA&X-Amz-Signature=9a2ba91e7f475028c30fb48c612e4e5b04e43011354d1c9629fa08091abdeed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJUJ334%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiha99TR5479Bc1qPpWTAEJ16hHXarnCIAteEz%2BuH13gIgHypdAp%2BbNcL%2BufC%2FtwAlKhK%2BzSxlRB1HVk88g0pY3%2B4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKhE1WpthDTW6LqMkCrcA1Ldx9fID5R1YfIRfHUymTV2xLniXNAtwM3Veo7FhdlZHZ41NleHQzlp0ceYa2jLk58lt%2BZ6%2FUitXFDExJpi7JODZKlYtv5YzjjEAWDw3tNDsbgyTwjF1wJK%2BNZqdWLjRVQ3kt1M6%2BNBrNxiU0mUuYSqIshEP4xinleyEKc9YSaS3mzWGa8cTBJ275Z8o7ghkQpJydGyn%2BtaFBu2ydnevEnxDruaiEY0WqZ5GESj3U66damcNYhXkZ0X6jkQTXKqGG8B2jt2YsQdPmHX4lucuVL2XC9N4fe7yBGdEllh8KVkcQjtNi2zdnenqcykFMgOykfDuCA2Ij5QoaV00EF8vJPRLXknntrROCuuL9y3DuOUDdZcZiPg0KxmMKN3BzPmA1ocqWsIF7BHmvFk%2FT1haLQ1sw3MHzBO6RysS2hcpIAeRDW5S4IFBr2DmRC2ppI0x69CqzhCOlLAbY0rgowqxwoajLCMgRDW15Db7utHDKUAsv05yqPpCeyFF6SZxfsYpabz5jo2ejc6K2X7%2F6HkvJO36y6K0O%2FMU8yObuCSMCbJJIOMdzfdqtDmjO%2FdSICt9EbPl6mJR0GrIFMvpXGvRTwKyV6OOMv44WNuHcesZCFPjL0SV%2BdiCIpANJFzMJSX%2BMkGOqUBqolyDuatqeZ1DfNy7qgZYb%2FKgz1S3mBEFwwbbWYq12t4Qe1t8q3Bbx4ZnKdISMVrIHY5fwjsQwpVCTLfoPKHgmldgyElQrtuaE0bcJ9u753wWCPKMUtBHcktC9F8No9ctnXocDofQQWY2SXD3SkSnLo%2ByR7o6pVy6jHkRXasIqPyOcVSodCbN22qFGkaf%2BTmyfz5GB59PyIIwXndV6BFqJbt%2BRpA&X-Amz-Signature=dec416543595808cefbba2ef939867eed5f97e6d42882e86ed499143b971765b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJUJ334%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiha99TR5479Bc1qPpWTAEJ16hHXarnCIAteEz%2BuH13gIgHypdAp%2BbNcL%2BufC%2FtwAlKhK%2BzSxlRB1HVk88g0pY3%2B4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKhE1WpthDTW6LqMkCrcA1Ldx9fID5R1YfIRfHUymTV2xLniXNAtwM3Veo7FhdlZHZ41NleHQzlp0ceYa2jLk58lt%2BZ6%2FUitXFDExJpi7JODZKlYtv5YzjjEAWDw3tNDsbgyTwjF1wJK%2BNZqdWLjRVQ3kt1M6%2BNBrNxiU0mUuYSqIshEP4xinleyEKc9YSaS3mzWGa8cTBJ275Z8o7ghkQpJydGyn%2BtaFBu2ydnevEnxDruaiEY0WqZ5GESj3U66damcNYhXkZ0X6jkQTXKqGG8B2jt2YsQdPmHX4lucuVL2XC9N4fe7yBGdEllh8KVkcQjtNi2zdnenqcykFMgOykfDuCA2Ij5QoaV00EF8vJPRLXknntrROCuuL9y3DuOUDdZcZiPg0KxmMKN3BzPmA1ocqWsIF7BHmvFk%2FT1haLQ1sw3MHzBO6RysS2hcpIAeRDW5S4IFBr2DmRC2ppI0x69CqzhCOlLAbY0rgowqxwoajLCMgRDW15Db7utHDKUAsv05yqPpCeyFF6SZxfsYpabz5jo2ejc6K2X7%2F6HkvJO36y6K0O%2FMU8yObuCSMCbJJIOMdzfdqtDmjO%2FdSICt9EbPl6mJR0GrIFMvpXGvRTwKyV6OOMv44WNuHcesZCFPjL0SV%2BdiCIpANJFzMJSX%2BMkGOqUBqolyDuatqeZ1DfNy7qgZYb%2FKgz1S3mBEFwwbbWYq12t4Qe1t8q3Bbx4ZnKdISMVrIHY5fwjsQwpVCTLfoPKHgmldgyElQrtuaE0bcJ9u753wWCPKMUtBHcktC9F8No9ctnXocDofQQWY2SXD3SkSnLo%2ByR7o6pVy6jHkRXasIqPyOcVSodCbN22qFGkaf%2BTmyfz5GB59PyIIwXndV6BFqJbt%2BRpA&X-Amz-Signature=23209b185540661066185b119985cfa062147143676be3ff640a742daadc0610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
