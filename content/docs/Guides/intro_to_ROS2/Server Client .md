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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FELVSUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAVlMSFlZjzf46WqXjbqRGCzt5tSTTTjLo1GwZ9k%2B7wIgUBIWyZ1BmaUKvh53gHGcrMfeuOeAR4go2BKiN5gOTZgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT6pKp6e1dfaa5AFCrcAw5AAy4pL4VDXPoGaMpae2CmTjATTuOKFuad6R9byG7o6%2Fd%2BFTLlkonZ1yc1ZA7qVv06OhrJVgNvy0PX4nC6NDVOvs1py%2F8ahnizONznU%2Btt7C20QQueIzjOOtxqlbBwhREjCvJaAFM45hss7Jd8QF8mO3289sYaUNGovyYMR%2BGmw%2Bh88OpOwSRlW94NF6N%2B5jirulGaNgCsA1j4Lb2rCSqsjtXFcFVbhXI%2FRb7HnnPCFhYLa3CinNrb4SjkybgBsw4v9klwlA02ZEyXBh1r8aNPigZCR4iEXz5uSlf19TaBHtMDOIma1sKLNSO3GAKbMtOBjx1iqzD4mtLa2CJWeHcEXTMV%2FzwDrS03j1xFnDsprMOYVm%2B3uwcRVbQBa2TlcIHPfu8vKT8JQFaDRjGJckPMENzKINaDrCNb8oyeIrJ38I9o%2FUxZ9EqVtOrkNy52FZm%2FN90boqvte60Ehq39CBS%2B3QOSoE217OUaum39m7ORlSrq%2FpAFWUGtst37POztDFbM9erk4Mjb%2FNyn3WH8TYRKU0gIjwx8cAvjPhPb01r5vlN8uXEjiG9kMb1WxynIZdhmoOdvVIElF8Ci4zHo%2BPccmfrkHulS6PAnbPML2vYfOo3T4Kh5DFEsFu1NMJWk7LwGOqUBfnzGZqBLYseviyX37nWuZfbEicxeI2LT3fVLyoT8a00tTJH3VB0F%2BAqE%2F53heJD3TomiJhsiibASVJdN6ZcPOPickMSILclJZYej0i%2BboPiDhRV%2FtIsStTEUHi%2Bv6sbSOgwmwtBz9mrd8xEJkKO8reMsXGWvktvR8sf%2FxfGjKPsulj7L9P%2BjeZY%2Frk2fPjprIaFv6A0xXe8SptOAJB03EQwwgboJ&X-Amz-Signature=b9f74ec1555fa3d5b6b30c4e4dc5331fad5c4e1ffeed67281a38473d989bd28b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FELVSUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAVlMSFlZjzf46WqXjbqRGCzt5tSTTTjLo1GwZ9k%2B7wIgUBIWyZ1BmaUKvh53gHGcrMfeuOeAR4go2BKiN5gOTZgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT6pKp6e1dfaa5AFCrcAw5AAy4pL4VDXPoGaMpae2CmTjATTuOKFuad6R9byG7o6%2Fd%2BFTLlkonZ1yc1ZA7qVv06OhrJVgNvy0PX4nC6NDVOvs1py%2F8ahnizONznU%2Btt7C20QQueIzjOOtxqlbBwhREjCvJaAFM45hss7Jd8QF8mO3289sYaUNGovyYMR%2BGmw%2Bh88OpOwSRlW94NF6N%2B5jirulGaNgCsA1j4Lb2rCSqsjtXFcFVbhXI%2FRb7HnnPCFhYLa3CinNrb4SjkybgBsw4v9klwlA02ZEyXBh1r8aNPigZCR4iEXz5uSlf19TaBHtMDOIma1sKLNSO3GAKbMtOBjx1iqzD4mtLa2CJWeHcEXTMV%2FzwDrS03j1xFnDsprMOYVm%2B3uwcRVbQBa2TlcIHPfu8vKT8JQFaDRjGJckPMENzKINaDrCNb8oyeIrJ38I9o%2FUxZ9EqVtOrkNy52FZm%2FN90boqvte60Ehq39CBS%2B3QOSoE217OUaum39m7ORlSrq%2FpAFWUGtst37POztDFbM9erk4Mjb%2FNyn3WH8TYRKU0gIjwx8cAvjPhPb01r5vlN8uXEjiG9kMb1WxynIZdhmoOdvVIElF8Ci4zHo%2BPccmfrkHulS6PAnbPML2vYfOo3T4Kh5DFEsFu1NMJWk7LwGOqUBfnzGZqBLYseviyX37nWuZfbEicxeI2LT3fVLyoT8a00tTJH3VB0F%2BAqE%2F53heJD3TomiJhsiibASVJdN6ZcPOPickMSILclJZYej0i%2BboPiDhRV%2FtIsStTEUHi%2Bv6sbSOgwmwtBz9mrd8xEJkKO8reMsXGWvktvR8sf%2FxfGjKPsulj7L9P%2BjeZY%2Frk2fPjprIaFv6A0xXe8SptOAJB03EQwwgboJ&X-Amz-Signature=e6ca18084ecf9bf2aea14ce829bf709f963d3ca9592226419e7760efb8d53289&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FELVSUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAVlMSFlZjzf46WqXjbqRGCzt5tSTTTjLo1GwZ9k%2B7wIgUBIWyZ1BmaUKvh53gHGcrMfeuOeAR4go2BKiN5gOTZgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT6pKp6e1dfaa5AFCrcAw5AAy4pL4VDXPoGaMpae2CmTjATTuOKFuad6R9byG7o6%2Fd%2BFTLlkonZ1yc1ZA7qVv06OhrJVgNvy0PX4nC6NDVOvs1py%2F8ahnizONznU%2Btt7C20QQueIzjOOtxqlbBwhREjCvJaAFM45hss7Jd8QF8mO3289sYaUNGovyYMR%2BGmw%2Bh88OpOwSRlW94NF6N%2B5jirulGaNgCsA1j4Lb2rCSqsjtXFcFVbhXI%2FRb7HnnPCFhYLa3CinNrb4SjkybgBsw4v9klwlA02ZEyXBh1r8aNPigZCR4iEXz5uSlf19TaBHtMDOIma1sKLNSO3GAKbMtOBjx1iqzD4mtLa2CJWeHcEXTMV%2FzwDrS03j1xFnDsprMOYVm%2B3uwcRVbQBa2TlcIHPfu8vKT8JQFaDRjGJckPMENzKINaDrCNb8oyeIrJ38I9o%2FUxZ9EqVtOrkNy52FZm%2FN90boqvte60Ehq39CBS%2B3QOSoE217OUaum39m7ORlSrq%2FpAFWUGtst37POztDFbM9erk4Mjb%2FNyn3WH8TYRKU0gIjwx8cAvjPhPb01r5vlN8uXEjiG9kMb1WxynIZdhmoOdvVIElF8Ci4zHo%2BPccmfrkHulS6PAnbPML2vYfOo3T4Kh5DFEsFu1NMJWk7LwGOqUBfnzGZqBLYseviyX37nWuZfbEicxeI2LT3fVLyoT8a00tTJH3VB0F%2BAqE%2F53heJD3TomiJhsiibASVJdN6ZcPOPickMSILclJZYej0i%2BboPiDhRV%2FtIsStTEUHi%2Bv6sbSOgwmwtBz9mrd8xEJkKO8reMsXGWvktvR8sf%2FxfGjKPsulj7L9P%2BjeZY%2Frk2fPjprIaFv6A0xXe8SptOAJB03EQwwgboJ&X-Amz-Signature=0d5230fe7254e0cf2fd64db3a82e2664c09f8ca74d395f06fe266441f2478aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FELVSUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAVlMSFlZjzf46WqXjbqRGCzt5tSTTTjLo1GwZ9k%2B7wIgUBIWyZ1BmaUKvh53gHGcrMfeuOeAR4go2BKiN5gOTZgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT6pKp6e1dfaa5AFCrcAw5AAy4pL4VDXPoGaMpae2CmTjATTuOKFuad6R9byG7o6%2Fd%2BFTLlkonZ1yc1ZA7qVv06OhrJVgNvy0PX4nC6NDVOvs1py%2F8ahnizONznU%2Btt7C20QQueIzjOOtxqlbBwhREjCvJaAFM45hss7Jd8QF8mO3289sYaUNGovyYMR%2BGmw%2Bh88OpOwSRlW94NF6N%2B5jirulGaNgCsA1j4Lb2rCSqsjtXFcFVbhXI%2FRb7HnnPCFhYLa3CinNrb4SjkybgBsw4v9klwlA02ZEyXBh1r8aNPigZCR4iEXz5uSlf19TaBHtMDOIma1sKLNSO3GAKbMtOBjx1iqzD4mtLa2CJWeHcEXTMV%2FzwDrS03j1xFnDsprMOYVm%2B3uwcRVbQBa2TlcIHPfu8vKT8JQFaDRjGJckPMENzKINaDrCNb8oyeIrJ38I9o%2FUxZ9EqVtOrkNy52FZm%2FN90boqvte60Ehq39CBS%2B3QOSoE217OUaum39m7ORlSrq%2FpAFWUGtst37POztDFbM9erk4Mjb%2FNyn3WH8TYRKU0gIjwx8cAvjPhPb01r5vlN8uXEjiG9kMb1WxynIZdhmoOdvVIElF8Ci4zHo%2BPccmfrkHulS6PAnbPML2vYfOo3T4Kh5DFEsFu1NMJWk7LwGOqUBfnzGZqBLYseviyX37nWuZfbEicxeI2LT3fVLyoT8a00tTJH3VB0F%2BAqE%2F53heJD3TomiJhsiibASVJdN6ZcPOPickMSILclJZYej0i%2BboPiDhRV%2FtIsStTEUHi%2Bv6sbSOgwmwtBz9mrd8xEJkKO8reMsXGWvktvR8sf%2FxfGjKPsulj7L9P%2BjeZY%2Frk2fPjprIaFv6A0xXe8SptOAJB03EQwwgboJ&X-Amz-Signature=84bbc1f05fe72d2672eb1bee1b22f2172aba4d2fabb2c504fb50531b42833935&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FELVSUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAVlMSFlZjzf46WqXjbqRGCzt5tSTTTjLo1GwZ9k%2B7wIgUBIWyZ1BmaUKvh53gHGcrMfeuOeAR4go2BKiN5gOTZgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT6pKp6e1dfaa5AFCrcAw5AAy4pL4VDXPoGaMpae2CmTjATTuOKFuad6R9byG7o6%2Fd%2BFTLlkonZ1yc1ZA7qVv06OhrJVgNvy0PX4nC6NDVOvs1py%2F8ahnizONznU%2Btt7C20QQueIzjOOtxqlbBwhREjCvJaAFM45hss7Jd8QF8mO3289sYaUNGovyYMR%2BGmw%2Bh88OpOwSRlW94NF6N%2B5jirulGaNgCsA1j4Lb2rCSqsjtXFcFVbhXI%2FRb7HnnPCFhYLa3CinNrb4SjkybgBsw4v9klwlA02ZEyXBh1r8aNPigZCR4iEXz5uSlf19TaBHtMDOIma1sKLNSO3GAKbMtOBjx1iqzD4mtLa2CJWeHcEXTMV%2FzwDrS03j1xFnDsprMOYVm%2B3uwcRVbQBa2TlcIHPfu8vKT8JQFaDRjGJckPMENzKINaDrCNb8oyeIrJ38I9o%2FUxZ9EqVtOrkNy52FZm%2FN90boqvte60Ehq39CBS%2B3QOSoE217OUaum39m7ORlSrq%2FpAFWUGtst37POztDFbM9erk4Mjb%2FNyn3WH8TYRKU0gIjwx8cAvjPhPb01r5vlN8uXEjiG9kMb1WxynIZdhmoOdvVIElF8Ci4zHo%2BPccmfrkHulS6PAnbPML2vYfOo3T4Kh5DFEsFu1NMJWk7LwGOqUBfnzGZqBLYseviyX37nWuZfbEicxeI2LT3fVLyoT8a00tTJH3VB0F%2BAqE%2F53heJD3TomiJhsiibASVJdN6ZcPOPickMSILclJZYej0i%2BboPiDhRV%2FtIsStTEUHi%2Bv6sbSOgwmwtBz9mrd8xEJkKO8reMsXGWvktvR8sf%2FxfGjKPsulj7L9P%2BjeZY%2Frk2fPjprIaFv6A0xXe8SptOAJB03EQwwgboJ&X-Amz-Signature=9cd1de5c2f85e4b583046d0e8ce1a6d6efe7df9942f9cbc3c77b2185bb329296&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
