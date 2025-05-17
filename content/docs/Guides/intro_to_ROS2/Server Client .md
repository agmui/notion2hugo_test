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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJXBQS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvTvtRumXcZ3%2Fk04f%2FY%2FsRWDeNUfr3Jmt8ctDSSKDxIAiB3PKKrF9zAqN58%2B6yMLTvpJTEUIubJuYs%2FvtedPPNmSCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbZMTINyfnrf5AtSeKtwDO0lMyhDIXjXdaGu36rPGclPC7RrYAlzCEO62Ebq587uIZ015X4%2BFGSwULexyBeGzBp5HmyK5cgYnbomBh1Su895MCaV3PRYCODaHHSft61ebI7k8xooNbaluESY4DmDDHMX097RfGFOpyhI1QiqHXHd3G2qKQ2EkYNmSX9kum0mWga3hoZ1BqNiwwaPnXU9bKMhXCeC7%2FC6DsQocTUuxlKvyC3RhJKpXyCeWPC2EALOSREfcSUuORYIRJI39ymqG7HmrqOPaCyCv0rIQ6sFex%2Fy75IGly23oKq5EIDXTHaYno%2FL%2FBJjNBXvaF%2Fw5pkCXdvDDmnD6O3SrKxclpjg4nVizapuxqXYsAAAS6ZO5R449C5pAEt1HgvBdinf7wWMhVQsl6Xy6n9jW53ctrbKiZXXsAaizPt3iq8zpYL5xoMfNAoFcrsr397fGvrWO%2FORFh4C0hYflrnp4pIcpz3foeUqUKeDYAqLwmIm2HU4hZwO2hy1q3Fa8DdZqHZFW63osi25pYVqVtPxfDoggNzmb%2Bw%2BcGbTX45T7wQ6dg5%2B8kE2dwkoZTuMMeHB4BNAJTnbzrgCGMOHVhq0Rob%2FDpIh%2FhcRdh2VavQd%2BAD6OVYycTOeeuxE%2BrjX3yIWXtyUwgcyjwQY6pgGSWVBkGibaSlKLZCOnOXhe69eCJiJ1Nm6u1qIf6Td5W1f2AX%2B8M4Dh2wgQX1mg74kM1aEXN5eEaepGfO%2BDktCE0wfJ37m6pzHHH9Rov8UKln4xX%2FXq%2F9vR6f1Sdgtc6M6LZ4J8xVRmaqqmZA5k3RNVBj2Wis7iDbQYFK5ynIrop69f4fVjLEYwxQsGssB%2BtHDdJT8m7cOE41%2BLFKBZ8ObJ3Hjy5aRA&X-Amz-Signature=68e356202192cfcd93ba979956f2456ed7024416d37dd9bc477195b250d6ad99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJXBQS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvTvtRumXcZ3%2Fk04f%2FY%2FsRWDeNUfr3Jmt8ctDSSKDxIAiB3PKKrF9zAqN58%2B6yMLTvpJTEUIubJuYs%2FvtedPPNmSCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbZMTINyfnrf5AtSeKtwDO0lMyhDIXjXdaGu36rPGclPC7RrYAlzCEO62Ebq587uIZ015X4%2BFGSwULexyBeGzBp5HmyK5cgYnbomBh1Su895MCaV3PRYCODaHHSft61ebI7k8xooNbaluESY4DmDDHMX097RfGFOpyhI1QiqHXHd3G2qKQ2EkYNmSX9kum0mWga3hoZ1BqNiwwaPnXU9bKMhXCeC7%2FC6DsQocTUuxlKvyC3RhJKpXyCeWPC2EALOSREfcSUuORYIRJI39ymqG7HmrqOPaCyCv0rIQ6sFex%2Fy75IGly23oKq5EIDXTHaYno%2FL%2FBJjNBXvaF%2Fw5pkCXdvDDmnD6O3SrKxclpjg4nVizapuxqXYsAAAS6ZO5R449C5pAEt1HgvBdinf7wWMhVQsl6Xy6n9jW53ctrbKiZXXsAaizPt3iq8zpYL5xoMfNAoFcrsr397fGvrWO%2FORFh4C0hYflrnp4pIcpz3foeUqUKeDYAqLwmIm2HU4hZwO2hy1q3Fa8DdZqHZFW63osi25pYVqVtPxfDoggNzmb%2Bw%2BcGbTX45T7wQ6dg5%2B8kE2dwkoZTuMMeHB4BNAJTnbzrgCGMOHVhq0Rob%2FDpIh%2FhcRdh2VavQd%2BAD6OVYycTOeeuxE%2BrjX3yIWXtyUwgcyjwQY6pgGSWVBkGibaSlKLZCOnOXhe69eCJiJ1Nm6u1qIf6Td5W1f2AX%2B8M4Dh2wgQX1mg74kM1aEXN5eEaepGfO%2BDktCE0wfJ37m6pzHHH9Rov8UKln4xX%2FXq%2F9vR6f1Sdgtc6M6LZ4J8xVRmaqqmZA5k3RNVBj2Wis7iDbQYFK5ynIrop69f4fVjLEYwxQsGssB%2BtHDdJT8m7cOE41%2BLFKBZ8ObJ3Hjy5aRA&X-Amz-Signature=7297f84a70daa3b076aa3775636da17db349acefca6d452fda04214db9f2b750&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJXBQS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvTvtRumXcZ3%2Fk04f%2FY%2FsRWDeNUfr3Jmt8ctDSSKDxIAiB3PKKrF9zAqN58%2B6yMLTvpJTEUIubJuYs%2FvtedPPNmSCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbZMTINyfnrf5AtSeKtwDO0lMyhDIXjXdaGu36rPGclPC7RrYAlzCEO62Ebq587uIZ015X4%2BFGSwULexyBeGzBp5HmyK5cgYnbomBh1Su895MCaV3PRYCODaHHSft61ebI7k8xooNbaluESY4DmDDHMX097RfGFOpyhI1QiqHXHd3G2qKQ2EkYNmSX9kum0mWga3hoZ1BqNiwwaPnXU9bKMhXCeC7%2FC6DsQocTUuxlKvyC3RhJKpXyCeWPC2EALOSREfcSUuORYIRJI39ymqG7HmrqOPaCyCv0rIQ6sFex%2Fy75IGly23oKq5EIDXTHaYno%2FL%2FBJjNBXvaF%2Fw5pkCXdvDDmnD6O3SrKxclpjg4nVizapuxqXYsAAAS6ZO5R449C5pAEt1HgvBdinf7wWMhVQsl6Xy6n9jW53ctrbKiZXXsAaizPt3iq8zpYL5xoMfNAoFcrsr397fGvrWO%2FORFh4C0hYflrnp4pIcpz3foeUqUKeDYAqLwmIm2HU4hZwO2hy1q3Fa8DdZqHZFW63osi25pYVqVtPxfDoggNzmb%2Bw%2BcGbTX45T7wQ6dg5%2B8kE2dwkoZTuMMeHB4BNAJTnbzrgCGMOHVhq0Rob%2FDpIh%2FhcRdh2VavQd%2BAD6OVYycTOeeuxE%2BrjX3yIWXtyUwgcyjwQY6pgGSWVBkGibaSlKLZCOnOXhe69eCJiJ1Nm6u1qIf6Td5W1f2AX%2B8M4Dh2wgQX1mg74kM1aEXN5eEaepGfO%2BDktCE0wfJ37m6pzHHH9Rov8UKln4xX%2FXq%2F9vR6f1Sdgtc6M6LZ4J8xVRmaqqmZA5k3RNVBj2Wis7iDbQYFK5ynIrop69f4fVjLEYwxQsGssB%2BtHDdJT8m7cOE41%2BLFKBZ8ObJ3Hjy5aRA&X-Amz-Signature=3cab7ecb8a6cc723cc1c1fa04b27517df59dcc6d73c83891e0f277922470950e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJXBQS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvTvtRumXcZ3%2Fk04f%2FY%2FsRWDeNUfr3Jmt8ctDSSKDxIAiB3PKKrF9zAqN58%2B6yMLTvpJTEUIubJuYs%2FvtedPPNmSCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbZMTINyfnrf5AtSeKtwDO0lMyhDIXjXdaGu36rPGclPC7RrYAlzCEO62Ebq587uIZ015X4%2BFGSwULexyBeGzBp5HmyK5cgYnbomBh1Su895MCaV3PRYCODaHHSft61ebI7k8xooNbaluESY4DmDDHMX097RfGFOpyhI1QiqHXHd3G2qKQ2EkYNmSX9kum0mWga3hoZ1BqNiwwaPnXU9bKMhXCeC7%2FC6DsQocTUuxlKvyC3RhJKpXyCeWPC2EALOSREfcSUuORYIRJI39ymqG7HmrqOPaCyCv0rIQ6sFex%2Fy75IGly23oKq5EIDXTHaYno%2FL%2FBJjNBXvaF%2Fw5pkCXdvDDmnD6O3SrKxclpjg4nVizapuxqXYsAAAS6ZO5R449C5pAEt1HgvBdinf7wWMhVQsl6Xy6n9jW53ctrbKiZXXsAaizPt3iq8zpYL5xoMfNAoFcrsr397fGvrWO%2FORFh4C0hYflrnp4pIcpz3foeUqUKeDYAqLwmIm2HU4hZwO2hy1q3Fa8DdZqHZFW63osi25pYVqVtPxfDoggNzmb%2Bw%2BcGbTX45T7wQ6dg5%2B8kE2dwkoZTuMMeHB4BNAJTnbzrgCGMOHVhq0Rob%2FDpIh%2FhcRdh2VavQd%2BAD6OVYycTOeeuxE%2BrjX3yIWXtyUwgcyjwQY6pgGSWVBkGibaSlKLZCOnOXhe69eCJiJ1Nm6u1qIf6Td5W1f2AX%2B8M4Dh2wgQX1mg74kM1aEXN5eEaepGfO%2BDktCE0wfJ37m6pzHHH9Rov8UKln4xX%2FXq%2F9vR6f1Sdgtc6M6LZ4J8xVRmaqqmZA5k3RNVBj2Wis7iDbQYFK5ynIrop69f4fVjLEYwxQsGssB%2BtHDdJT8m7cOE41%2BLFKBZ8ObJ3Hjy5aRA&X-Amz-Signature=54726e232b2b01d7b55da9bdd31deb029f2e69e128bb21e9a0c73f66b3040215&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGCJXBQS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvTvtRumXcZ3%2Fk04f%2FY%2FsRWDeNUfr3Jmt8ctDSSKDxIAiB3PKKrF9zAqN58%2B6yMLTvpJTEUIubJuYs%2FvtedPPNmSCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMbZMTINyfnrf5AtSeKtwDO0lMyhDIXjXdaGu36rPGclPC7RrYAlzCEO62Ebq587uIZ015X4%2BFGSwULexyBeGzBp5HmyK5cgYnbomBh1Su895MCaV3PRYCODaHHSft61ebI7k8xooNbaluESY4DmDDHMX097RfGFOpyhI1QiqHXHd3G2qKQ2EkYNmSX9kum0mWga3hoZ1BqNiwwaPnXU9bKMhXCeC7%2FC6DsQocTUuxlKvyC3RhJKpXyCeWPC2EALOSREfcSUuORYIRJI39ymqG7HmrqOPaCyCv0rIQ6sFex%2Fy75IGly23oKq5EIDXTHaYno%2FL%2FBJjNBXvaF%2Fw5pkCXdvDDmnD6O3SrKxclpjg4nVizapuxqXYsAAAS6ZO5R449C5pAEt1HgvBdinf7wWMhVQsl6Xy6n9jW53ctrbKiZXXsAaizPt3iq8zpYL5xoMfNAoFcrsr397fGvrWO%2FORFh4C0hYflrnp4pIcpz3foeUqUKeDYAqLwmIm2HU4hZwO2hy1q3Fa8DdZqHZFW63osi25pYVqVtPxfDoggNzmb%2Bw%2BcGbTX45T7wQ6dg5%2B8kE2dwkoZTuMMeHB4BNAJTnbzrgCGMOHVhq0Rob%2FDpIh%2FhcRdh2VavQd%2BAD6OVYycTOeeuxE%2BrjX3yIWXtyUwgcyjwQY6pgGSWVBkGibaSlKLZCOnOXhe69eCJiJ1Nm6u1qIf6Td5W1f2AX%2B8M4Dh2wgQX1mg74kM1aEXN5eEaepGfO%2BDktCE0wfJ37m6pzHHH9Rov8UKln4xX%2FXq%2F9vR6f1Sdgtc6M6LZ4J8xVRmaqqmZA5k3RNVBj2Wis7iDbQYFK5ynIrop69f4fVjLEYwxQsGssB%2BtHDdJT8m7cOE41%2BLFKBZ8ObJ3Hjy5aRA&X-Amz-Signature=bcfe9c7235e21b9db5de5820637edf5c46a404d163bed9e3ed529879174036e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
