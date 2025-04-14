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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLODKWH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICwzUVBKCMCXRIxLcDJqe4HCyYbR5MaYEwcvW74rD6jfAiArCZfQLGCIryvfkvaF6Vjn7k%2FCvtQ1ADS95HTMEHwmlyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrA0HN1kKABcrdxG6KtwDedYgDtcIE40nzQLvCW0JQcMTmU0UDcZx56mWAp7liFAS7425fvYX%2F5kJnzWh88GJKS7CRcjZaxGuUvNmHq3BKh8xArzVNKRUVJlWX9fwOp9sxvrQVubf8vQ35d7CddhCJ0D0QOcySdK%2FtbHH7BT3ifn936VKvEbeRVoc335%2FQHBSW9zsjDlxsg6IADfGNz294g%2BHBvpzEPBAneSroqYOauo%2BLe5cAHy4j8ItqKvBEZ6oh6cdHUdKs8SiaLiEmmuZRjpGsEfTekHK8cpyF7Rif%2B1JLYz1qXFUCAjA3nAmB3GQX5mQ5lgEuCJN5JnovXzntsxW1oGVjoDEjebSV9H0BtQPVgmK8jwORO96ZTpVU8ci5kVigeUzj1M3XuSzyEDYhlWJWkL6rFaMqZPkedZOqJafESuV5UZ3xV9YTfsLryLi2oy4bhoAZGhxhGxxY24rVjkChlDzE3HeggvMohdENKUuEZbyRIIKg0m5TFdxB8aWMZ7vfjYEdm%2BIFcKMRLY5D2hHbwsDOAYHVBLjp%2FvlszBziHBGpg4Jw1q%2BIJJCOlRhwFhl5y%2FO0voMg0QGPzLegu2AaV59e9DSidS7ryjSAWQax6jtzubI8wLm%2BV01swi5PBLCY3mn1ZdHFH4wpoLxvwY6pgEpvSAy21uIfniWp1D7%2BBNM8eexBDT73gtJoOcSRCfyJKDnfGi8I3J89mZGw%2FZSMvmtb34TvHQ8FZGcDI7MA1mkZbJqqbl9Fkb35ODNR85EtGlKnSNnm%2BhkcBzh48hlwKOxFu7BLYIATeb3%2BccX%2FAcl1%2FqdN5GE1%2BAqgeawWp%2BaJ0d0es42bJzhqIpORNyXgpS4TAQoxm5HjKpo0rOjvT6oDVcsgimZ&X-Amz-Signature=22d95c0a77ba9f6c74211e3c99760b3d571b2013bcd793215ba181306314caa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLODKWH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICwzUVBKCMCXRIxLcDJqe4HCyYbR5MaYEwcvW74rD6jfAiArCZfQLGCIryvfkvaF6Vjn7k%2FCvtQ1ADS95HTMEHwmlyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrA0HN1kKABcrdxG6KtwDedYgDtcIE40nzQLvCW0JQcMTmU0UDcZx56mWAp7liFAS7425fvYX%2F5kJnzWh88GJKS7CRcjZaxGuUvNmHq3BKh8xArzVNKRUVJlWX9fwOp9sxvrQVubf8vQ35d7CddhCJ0D0QOcySdK%2FtbHH7BT3ifn936VKvEbeRVoc335%2FQHBSW9zsjDlxsg6IADfGNz294g%2BHBvpzEPBAneSroqYOauo%2BLe5cAHy4j8ItqKvBEZ6oh6cdHUdKs8SiaLiEmmuZRjpGsEfTekHK8cpyF7Rif%2B1JLYz1qXFUCAjA3nAmB3GQX5mQ5lgEuCJN5JnovXzntsxW1oGVjoDEjebSV9H0BtQPVgmK8jwORO96ZTpVU8ci5kVigeUzj1M3XuSzyEDYhlWJWkL6rFaMqZPkedZOqJafESuV5UZ3xV9YTfsLryLi2oy4bhoAZGhxhGxxY24rVjkChlDzE3HeggvMohdENKUuEZbyRIIKg0m5TFdxB8aWMZ7vfjYEdm%2BIFcKMRLY5D2hHbwsDOAYHVBLjp%2FvlszBziHBGpg4Jw1q%2BIJJCOlRhwFhl5y%2FO0voMg0QGPzLegu2AaV59e9DSidS7ryjSAWQax6jtzubI8wLm%2BV01swi5PBLCY3mn1ZdHFH4wpoLxvwY6pgEpvSAy21uIfniWp1D7%2BBNM8eexBDT73gtJoOcSRCfyJKDnfGi8I3J89mZGw%2FZSMvmtb34TvHQ8FZGcDI7MA1mkZbJqqbl9Fkb35ODNR85EtGlKnSNnm%2BhkcBzh48hlwKOxFu7BLYIATeb3%2BccX%2FAcl1%2FqdN5GE1%2BAqgeawWp%2BaJ0d0es42bJzhqIpORNyXgpS4TAQoxm5HjKpo0rOjvT6oDVcsgimZ&X-Amz-Signature=b58de3ddcb333c25f89a2e99e7047409404574dbf2df18212c253b8c97755889&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLODKWH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICwzUVBKCMCXRIxLcDJqe4HCyYbR5MaYEwcvW74rD6jfAiArCZfQLGCIryvfkvaF6Vjn7k%2FCvtQ1ADS95HTMEHwmlyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrA0HN1kKABcrdxG6KtwDedYgDtcIE40nzQLvCW0JQcMTmU0UDcZx56mWAp7liFAS7425fvYX%2F5kJnzWh88GJKS7CRcjZaxGuUvNmHq3BKh8xArzVNKRUVJlWX9fwOp9sxvrQVubf8vQ35d7CddhCJ0D0QOcySdK%2FtbHH7BT3ifn936VKvEbeRVoc335%2FQHBSW9zsjDlxsg6IADfGNz294g%2BHBvpzEPBAneSroqYOauo%2BLe5cAHy4j8ItqKvBEZ6oh6cdHUdKs8SiaLiEmmuZRjpGsEfTekHK8cpyF7Rif%2B1JLYz1qXFUCAjA3nAmB3GQX5mQ5lgEuCJN5JnovXzntsxW1oGVjoDEjebSV9H0BtQPVgmK8jwORO96ZTpVU8ci5kVigeUzj1M3XuSzyEDYhlWJWkL6rFaMqZPkedZOqJafESuV5UZ3xV9YTfsLryLi2oy4bhoAZGhxhGxxY24rVjkChlDzE3HeggvMohdENKUuEZbyRIIKg0m5TFdxB8aWMZ7vfjYEdm%2BIFcKMRLY5D2hHbwsDOAYHVBLjp%2FvlszBziHBGpg4Jw1q%2BIJJCOlRhwFhl5y%2FO0voMg0QGPzLegu2AaV59e9DSidS7ryjSAWQax6jtzubI8wLm%2BV01swi5PBLCY3mn1ZdHFH4wpoLxvwY6pgEpvSAy21uIfniWp1D7%2BBNM8eexBDT73gtJoOcSRCfyJKDnfGi8I3J89mZGw%2FZSMvmtb34TvHQ8FZGcDI7MA1mkZbJqqbl9Fkb35ODNR85EtGlKnSNnm%2BhkcBzh48hlwKOxFu7BLYIATeb3%2BccX%2FAcl1%2FqdN5GE1%2BAqgeawWp%2BaJ0d0es42bJzhqIpORNyXgpS4TAQoxm5HjKpo0rOjvT6oDVcsgimZ&X-Amz-Signature=ceeb255db36d79c4701d9a95b315ebf564548021d920fe567492de440edd94c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLODKWH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICwzUVBKCMCXRIxLcDJqe4HCyYbR5MaYEwcvW74rD6jfAiArCZfQLGCIryvfkvaF6Vjn7k%2FCvtQ1ADS95HTMEHwmlyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrA0HN1kKABcrdxG6KtwDedYgDtcIE40nzQLvCW0JQcMTmU0UDcZx56mWAp7liFAS7425fvYX%2F5kJnzWh88GJKS7CRcjZaxGuUvNmHq3BKh8xArzVNKRUVJlWX9fwOp9sxvrQVubf8vQ35d7CddhCJ0D0QOcySdK%2FtbHH7BT3ifn936VKvEbeRVoc335%2FQHBSW9zsjDlxsg6IADfGNz294g%2BHBvpzEPBAneSroqYOauo%2BLe5cAHy4j8ItqKvBEZ6oh6cdHUdKs8SiaLiEmmuZRjpGsEfTekHK8cpyF7Rif%2B1JLYz1qXFUCAjA3nAmB3GQX5mQ5lgEuCJN5JnovXzntsxW1oGVjoDEjebSV9H0BtQPVgmK8jwORO96ZTpVU8ci5kVigeUzj1M3XuSzyEDYhlWJWkL6rFaMqZPkedZOqJafESuV5UZ3xV9YTfsLryLi2oy4bhoAZGhxhGxxY24rVjkChlDzE3HeggvMohdENKUuEZbyRIIKg0m5TFdxB8aWMZ7vfjYEdm%2BIFcKMRLY5D2hHbwsDOAYHVBLjp%2FvlszBziHBGpg4Jw1q%2BIJJCOlRhwFhl5y%2FO0voMg0QGPzLegu2AaV59e9DSidS7ryjSAWQax6jtzubI8wLm%2BV01swi5PBLCY3mn1ZdHFH4wpoLxvwY6pgEpvSAy21uIfniWp1D7%2BBNM8eexBDT73gtJoOcSRCfyJKDnfGi8I3J89mZGw%2FZSMvmtb34TvHQ8FZGcDI7MA1mkZbJqqbl9Fkb35ODNR85EtGlKnSNnm%2BhkcBzh48hlwKOxFu7BLYIATeb3%2BccX%2FAcl1%2FqdN5GE1%2BAqgeawWp%2BaJ0d0es42bJzhqIpORNyXgpS4TAQoxm5HjKpo0rOjvT6oDVcsgimZ&X-Amz-Signature=9d2829264ff94611c1b4a6993a955ffda2976af8cdef3a5cd537b362fee2c37a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLODKWH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICwzUVBKCMCXRIxLcDJqe4HCyYbR5MaYEwcvW74rD6jfAiArCZfQLGCIryvfkvaF6Vjn7k%2FCvtQ1ADS95HTMEHwmlyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrA0HN1kKABcrdxG6KtwDedYgDtcIE40nzQLvCW0JQcMTmU0UDcZx56mWAp7liFAS7425fvYX%2F5kJnzWh88GJKS7CRcjZaxGuUvNmHq3BKh8xArzVNKRUVJlWX9fwOp9sxvrQVubf8vQ35d7CddhCJ0D0QOcySdK%2FtbHH7BT3ifn936VKvEbeRVoc335%2FQHBSW9zsjDlxsg6IADfGNz294g%2BHBvpzEPBAneSroqYOauo%2BLe5cAHy4j8ItqKvBEZ6oh6cdHUdKs8SiaLiEmmuZRjpGsEfTekHK8cpyF7Rif%2B1JLYz1qXFUCAjA3nAmB3GQX5mQ5lgEuCJN5JnovXzntsxW1oGVjoDEjebSV9H0BtQPVgmK8jwORO96ZTpVU8ci5kVigeUzj1M3XuSzyEDYhlWJWkL6rFaMqZPkedZOqJafESuV5UZ3xV9YTfsLryLi2oy4bhoAZGhxhGxxY24rVjkChlDzE3HeggvMohdENKUuEZbyRIIKg0m5TFdxB8aWMZ7vfjYEdm%2BIFcKMRLY5D2hHbwsDOAYHVBLjp%2FvlszBziHBGpg4Jw1q%2BIJJCOlRhwFhl5y%2FO0voMg0QGPzLegu2AaV59e9DSidS7ryjSAWQax6jtzubI8wLm%2BV01swi5PBLCY3mn1ZdHFH4wpoLxvwY6pgEpvSAy21uIfniWp1D7%2BBNM8eexBDT73gtJoOcSRCfyJKDnfGi8I3J89mZGw%2FZSMvmtb34TvHQ8FZGcDI7MA1mkZbJqqbl9Fkb35ODNR85EtGlKnSNnm%2BhkcBzh48hlwKOxFu7BLYIATeb3%2BccX%2FAcl1%2FqdN5GE1%2BAqgeawWp%2BaJ0d0es42bJzhqIpORNyXgpS4TAQoxm5HjKpo0rOjvT6oDVcsgimZ&X-Amz-Signature=d9f2f0a921042b32bb86887b6ad30efc69664698277ab3c8720e5857495158c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
