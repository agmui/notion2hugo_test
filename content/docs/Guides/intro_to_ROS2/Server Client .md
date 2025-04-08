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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJFH36H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m6wYl4jXJr9nYR8YBuyriEHKOiBdAqsehcT4DjZlwgIhAMv97YnEwxgbLNkXmssqoCTojBHMmBHCbCIWKk4RAdvJKv8DCGsQABoMNjM3NDIzMTgzODA1Igw5kdLuZ0J3Ytx0UZoq3AMa0ltHUcaYbmnxyWZ5E0EYc%2BqDOH1%2F%2FwAMM65s1Y4KCgqJlctgsA%2BBuuK%2BHHrf45uk%2BTZfC7H5tamgLJtihYusAb0vhdyxg1b6v6c3gVEtR32%2BAD201zK0SqT9k%2F3y%2Feg2zltlbaA%2FUnWxN%2F5NMPSXEan3zzsgpnULwRa%2BL71kh7tWIHTbKewdcuGai3zksOnZ3%2FV5ZGFRhxNfU%2B2fuPNHt4MXcek60u7VTNxWPvtYm9ic8RSnpooPkdK%2B6EinAtTAcz6TnwNEiViohJJdtfP8DsYcj3qllY6%2FCWJEWECB2D3R2CPWo8rFw2n6gwFyd3aMtAW6%2B1AcJQKl76Im3doKGMJu0%2BPBsO5ma%2F4wkjq1tHsTCabCF0i6aG4yl8bL%2BQD4WcQ62bd3UR5i2aEDDZAHUdV954RBJG8%2BKX0UYLsHBW53Fk2%2BVH5yuzLTL6i34Fjqyz5gX4dM4oR0xy1qF1PsYqRSSjqmkw%2FFkeH06kNo3kRjUkSzErYWulWh%2FbiuZbR49rMQtGSZCaKY3XgE%2BeFL9wyNT87KcSrotGwRduuRMS9CGsqFqDuNVnGE934YzTsczfwQXgBkuLUZ9m9ZvyxbrXsA7j1fAoHoIJWYdptc%2BYwjZE6iDtDBcROPLjDMhNK%2FBjqkAac3C%2F7PlskLdwH4Y7%2B8qaJ%2FLxf2Q%2BpJHrq1R17HZH7wgP88OzGdd49uOQYCeQttvC6TEYO7S1b7e01NU1YF1kNNJQxjNw3D%2FfCvMqemj3w7H4eOwPy1KAwxtuiH0TQmcogrhuFPa92ZgTXrUoRf%2BVwzzgNLNNdjUirAaPOs%2FN0xaRoHN5JSUXGbDszX7XrKxfZwiUDNjJybXR74ptPFtmPesAuX&X-Amz-Signature=3f036b0a041ac939a99f7f77106afc5681b6a84cd2c316d9df126768a755add8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJFH36H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m6wYl4jXJr9nYR8YBuyriEHKOiBdAqsehcT4DjZlwgIhAMv97YnEwxgbLNkXmssqoCTojBHMmBHCbCIWKk4RAdvJKv8DCGsQABoMNjM3NDIzMTgzODA1Igw5kdLuZ0J3Ytx0UZoq3AMa0ltHUcaYbmnxyWZ5E0EYc%2BqDOH1%2F%2FwAMM65s1Y4KCgqJlctgsA%2BBuuK%2BHHrf45uk%2BTZfC7H5tamgLJtihYusAb0vhdyxg1b6v6c3gVEtR32%2BAD201zK0SqT9k%2F3y%2Feg2zltlbaA%2FUnWxN%2F5NMPSXEan3zzsgpnULwRa%2BL71kh7tWIHTbKewdcuGai3zksOnZ3%2FV5ZGFRhxNfU%2B2fuPNHt4MXcek60u7VTNxWPvtYm9ic8RSnpooPkdK%2B6EinAtTAcz6TnwNEiViohJJdtfP8DsYcj3qllY6%2FCWJEWECB2D3R2CPWo8rFw2n6gwFyd3aMtAW6%2B1AcJQKl76Im3doKGMJu0%2BPBsO5ma%2F4wkjq1tHsTCabCF0i6aG4yl8bL%2BQD4WcQ62bd3UR5i2aEDDZAHUdV954RBJG8%2BKX0UYLsHBW53Fk2%2BVH5yuzLTL6i34Fjqyz5gX4dM4oR0xy1qF1PsYqRSSjqmkw%2FFkeH06kNo3kRjUkSzErYWulWh%2FbiuZbR49rMQtGSZCaKY3XgE%2BeFL9wyNT87KcSrotGwRduuRMS9CGsqFqDuNVnGE934YzTsczfwQXgBkuLUZ9m9ZvyxbrXsA7j1fAoHoIJWYdptc%2BYwjZE6iDtDBcROPLjDMhNK%2FBjqkAac3C%2F7PlskLdwH4Y7%2B8qaJ%2FLxf2Q%2BpJHrq1R17HZH7wgP88OzGdd49uOQYCeQttvC6TEYO7S1b7e01NU1YF1kNNJQxjNw3D%2FfCvMqemj3w7H4eOwPy1KAwxtuiH0TQmcogrhuFPa92ZgTXrUoRf%2BVwzzgNLNNdjUirAaPOs%2FN0xaRoHN5JSUXGbDszX7XrKxfZwiUDNjJybXR74ptPFtmPesAuX&X-Amz-Signature=a3cc2509136db6734ff30fa2f65238572469ea473ac6e38539d76f546e287ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJFH36H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m6wYl4jXJr9nYR8YBuyriEHKOiBdAqsehcT4DjZlwgIhAMv97YnEwxgbLNkXmssqoCTojBHMmBHCbCIWKk4RAdvJKv8DCGsQABoMNjM3NDIzMTgzODA1Igw5kdLuZ0J3Ytx0UZoq3AMa0ltHUcaYbmnxyWZ5E0EYc%2BqDOH1%2F%2FwAMM65s1Y4KCgqJlctgsA%2BBuuK%2BHHrf45uk%2BTZfC7H5tamgLJtihYusAb0vhdyxg1b6v6c3gVEtR32%2BAD201zK0SqT9k%2F3y%2Feg2zltlbaA%2FUnWxN%2F5NMPSXEan3zzsgpnULwRa%2BL71kh7tWIHTbKewdcuGai3zksOnZ3%2FV5ZGFRhxNfU%2B2fuPNHt4MXcek60u7VTNxWPvtYm9ic8RSnpooPkdK%2B6EinAtTAcz6TnwNEiViohJJdtfP8DsYcj3qllY6%2FCWJEWECB2D3R2CPWo8rFw2n6gwFyd3aMtAW6%2B1AcJQKl76Im3doKGMJu0%2BPBsO5ma%2F4wkjq1tHsTCabCF0i6aG4yl8bL%2BQD4WcQ62bd3UR5i2aEDDZAHUdV954RBJG8%2BKX0UYLsHBW53Fk2%2BVH5yuzLTL6i34Fjqyz5gX4dM4oR0xy1qF1PsYqRSSjqmkw%2FFkeH06kNo3kRjUkSzErYWulWh%2FbiuZbR49rMQtGSZCaKY3XgE%2BeFL9wyNT87KcSrotGwRduuRMS9CGsqFqDuNVnGE934YzTsczfwQXgBkuLUZ9m9ZvyxbrXsA7j1fAoHoIJWYdptc%2BYwjZE6iDtDBcROPLjDMhNK%2FBjqkAac3C%2F7PlskLdwH4Y7%2B8qaJ%2FLxf2Q%2BpJHrq1R17HZH7wgP88OzGdd49uOQYCeQttvC6TEYO7S1b7e01NU1YF1kNNJQxjNw3D%2FfCvMqemj3w7H4eOwPy1KAwxtuiH0TQmcogrhuFPa92ZgTXrUoRf%2BVwzzgNLNNdjUirAaPOs%2FN0xaRoHN5JSUXGbDszX7XrKxfZwiUDNjJybXR74ptPFtmPesAuX&X-Amz-Signature=b4d0239453cf357928237cf0ed219e8bd540f20fa36a8a1042a184c7028688da&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJFH36H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m6wYl4jXJr9nYR8YBuyriEHKOiBdAqsehcT4DjZlwgIhAMv97YnEwxgbLNkXmssqoCTojBHMmBHCbCIWKk4RAdvJKv8DCGsQABoMNjM3NDIzMTgzODA1Igw5kdLuZ0J3Ytx0UZoq3AMa0ltHUcaYbmnxyWZ5E0EYc%2BqDOH1%2F%2FwAMM65s1Y4KCgqJlctgsA%2BBuuK%2BHHrf45uk%2BTZfC7H5tamgLJtihYusAb0vhdyxg1b6v6c3gVEtR32%2BAD201zK0SqT9k%2F3y%2Feg2zltlbaA%2FUnWxN%2F5NMPSXEan3zzsgpnULwRa%2BL71kh7tWIHTbKewdcuGai3zksOnZ3%2FV5ZGFRhxNfU%2B2fuPNHt4MXcek60u7VTNxWPvtYm9ic8RSnpooPkdK%2B6EinAtTAcz6TnwNEiViohJJdtfP8DsYcj3qllY6%2FCWJEWECB2D3R2CPWo8rFw2n6gwFyd3aMtAW6%2B1AcJQKl76Im3doKGMJu0%2BPBsO5ma%2F4wkjq1tHsTCabCF0i6aG4yl8bL%2BQD4WcQ62bd3UR5i2aEDDZAHUdV954RBJG8%2BKX0UYLsHBW53Fk2%2BVH5yuzLTL6i34Fjqyz5gX4dM4oR0xy1qF1PsYqRSSjqmkw%2FFkeH06kNo3kRjUkSzErYWulWh%2FbiuZbR49rMQtGSZCaKY3XgE%2BeFL9wyNT87KcSrotGwRduuRMS9CGsqFqDuNVnGE934YzTsczfwQXgBkuLUZ9m9ZvyxbrXsA7j1fAoHoIJWYdptc%2BYwjZE6iDtDBcROPLjDMhNK%2FBjqkAac3C%2F7PlskLdwH4Y7%2B8qaJ%2FLxf2Q%2BpJHrq1R17HZH7wgP88OzGdd49uOQYCeQttvC6TEYO7S1b7e01NU1YF1kNNJQxjNw3D%2FfCvMqemj3w7H4eOwPy1KAwxtuiH0TQmcogrhuFPa92ZgTXrUoRf%2BVwzzgNLNNdjUirAaPOs%2FN0xaRoHN5JSUXGbDszX7XrKxfZwiUDNjJybXR74ptPFtmPesAuX&X-Amz-Signature=34fe125b10f7e32c737b9178a8c40d4e282e46023d3eb86dba5286c2ccf0d723&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJFH36H%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m6wYl4jXJr9nYR8YBuyriEHKOiBdAqsehcT4DjZlwgIhAMv97YnEwxgbLNkXmssqoCTojBHMmBHCbCIWKk4RAdvJKv8DCGsQABoMNjM3NDIzMTgzODA1Igw5kdLuZ0J3Ytx0UZoq3AMa0ltHUcaYbmnxyWZ5E0EYc%2BqDOH1%2F%2FwAMM65s1Y4KCgqJlctgsA%2BBuuK%2BHHrf45uk%2BTZfC7H5tamgLJtihYusAb0vhdyxg1b6v6c3gVEtR32%2BAD201zK0SqT9k%2F3y%2Feg2zltlbaA%2FUnWxN%2F5NMPSXEan3zzsgpnULwRa%2BL71kh7tWIHTbKewdcuGai3zksOnZ3%2FV5ZGFRhxNfU%2B2fuPNHt4MXcek60u7VTNxWPvtYm9ic8RSnpooPkdK%2B6EinAtTAcz6TnwNEiViohJJdtfP8DsYcj3qllY6%2FCWJEWECB2D3R2CPWo8rFw2n6gwFyd3aMtAW6%2B1AcJQKl76Im3doKGMJu0%2BPBsO5ma%2F4wkjq1tHsTCabCF0i6aG4yl8bL%2BQD4WcQ62bd3UR5i2aEDDZAHUdV954RBJG8%2BKX0UYLsHBW53Fk2%2BVH5yuzLTL6i34Fjqyz5gX4dM4oR0xy1qF1PsYqRSSjqmkw%2FFkeH06kNo3kRjUkSzErYWulWh%2FbiuZbR49rMQtGSZCaKY3XgE%2BeFL9wyNT87KcSrotGwRduuRMS9CGsqFqDuNVnGE934YzTsczfwQXgBkuLUZ9m9ZvyxbrXsA7j1fAoHoIJWYdptc%2BYwjZE6iDtDBcROPLjDMhNK%2FBjqkAac3C%2F7PlskLdwH4Y7%2B8qaJ%2FLxf2Q%2BpJHrq1R17HZH7wgP88OzGdd49uOQYCeQttvC6TEYO7S1b7e01NU1YF1kNNJQxjNw3D%2FfCvMqemj3w7H4eOwPy1KAwxtuiH0TQmcogrhuFPa92ZgTXrUoRf%2BVwzzgNLNNdjUirAaPOs%2FN0xaRoHN5JSUXGbDszX7XrKxfZwiUDNjJybXR74ptPFtmPesAuX&X-Amz-Signature=3eaec2b8aa0fe2ba8b11861b17ab394b4179cc46bca177f11d8f59e2f040db24&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
