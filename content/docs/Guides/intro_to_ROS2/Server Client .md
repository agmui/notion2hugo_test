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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KGOWL3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCID1oizchzL8S%2BLUjsWLHoeGHq%2Bp%2BHaqycTfw1UB2FtADAiEA0%2BsSMSNdyJw1G3QsmotrifJodeB%2BVtlfnzMp8Yb5SHgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCctOQ%2BNgsqgYs9%2BircA%2FaehMpRp2YjpRM3WQi46mzKdYio8b9BMh4t%2B4P%2FnljoFAI4JGoBNer8748tmQwYHQv80cCywWxGXJEGYvB0d5fCT6GBLamfNBjIPTDqhz8HFkMZVJ86OXx9KOFpVUtXQhF59fOmyKG285gsbkgrPskqgW1YOlFh8h74YbIJpbHrhuF8VwEFiKalwPWtLHQgPH0V3vZ6tafNHlnj3hEA1W5aBoUYCXySsDoFon%2B3vAJy5kqFOulJrpbOEZiWpCWrSMPgDJgF4KBBzAgHtrjeI8rj%2FBPXsZToPug68En0JsDWBizm3q4EsdWQryI1PPUx7%2Bp9EvxWHeX0pVQKmwILspyL%2BEGQMXNpnRK4zl4FhTzkhH%2BGXR5GNtqUqr%2F8KPKFG3Ur6ROmNFffy7l99lrEzXzhZ48j02pW7JIDy5Plt80OAn3bsK5AG0HoXYut03R9g8MsfH4TePy8HcoEVeTEl4DgOCh%2Fgi9NWNJdWwQd4KeonMKfQfr2mwApZiZtqZ2B0i%2F%2B%2Bxj7dFMewNXYhgQh1kzvPNauVKnFpXX9Agkqy%2FjQ6UR9qnd3VHaFtwyTtR8L2B%2B0At%2B8hW%2FCt3tuZYCU2xkAAghuZmYD%2BaVwBfAdMr4f9jVfdTfxQhAuWC4HMMbyw8EGOqUBhv6%2FhUjy3BeBYW3YH43NFMIpQphbx4yrLP0SfhJjU9sSlD6ybJvmgRoLZfbloHzzxe7Ds1B1uszbwU8nTP%2Bo9zUaKpDXmsgODTYxAOzKBcQqOzjAMQUEyHFsRViEo2wc5VUPePKgqIYja7eNZpTa2jbwawXaKjpD2KCtEmhj%2F2N0vLI7Slu3I2m21zOUOdCvxcM%2B0jiLVBStKDPtPBZZxiCi3CGO&X-Amz-Signature=fdf2a51166acfdcba94ec8830e142b4b4dcddd36b092a17033c10081cdd53149&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KGOWL3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCID1oizchzL8S%2BLUjsWLHoeGHq%2Bp%2BHaqycTfw1UB2FtADAiEA0%2BsSMSNdyJw1G3QsmotrifJodeB%2BVtlfnzMp8Yb5SHgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCctOQ%2BNgsqgYs9%2BircA%2FaehMpRp2YjpRM3WQi46mzKdYio8b9BMh4t%2B4P%2FnljoFAI4JGoBNer8748tmQwYHQv80cCywWxGXJEGYvB0d5fCT6GBLamfNBjIPTDqhz8HFkMZVJ86OXx9KOFpVUtXQhF59fOmyKG285gsbkgrPskqgW1YOlFh8h74YbIJpbHrhuF8VwEFiKalwPWtLHQgPH0V3vZ6tafNHlnj3hEA1W5aBoUYCXySsDoFon%2B3vAJy5kqFOulJrpbOEZiWpCWrSMPgDJgF4KBBzAgHtrjeI8rj%2FBPXsZToPug68En0JsDWBizm3q4EsdWQryI1PPUx7%2Bp9EvxWHeX0pVQKmwILspyL%2BEGQMXNpnRK4zl4FhTzkhH%2BGXR5GNtqUqr%2F8KPKFG3Ur6ROmNFffy7l99lrEzXzhZ48j02pW7JIDy5Plt80OAn3bsK5AG0HoXYut03R9g8MsfH4TePy8HcoEVeTEl4DgOCh%2Fgi9NWNJdWwQd4KeonMKfQfr2mwApZiZtqZ2B0i%2F%2B%2Bxj7dFMewNXYhgQh1kzvPNauVKnFpXX9Agkqy%2FjQ6UR9qnd3VHaFtwyTtR8L2B%2B0At%2B8hW%2FCt3tuZYCU2xkAAghuZmYD%2BaVwBfAdMr4f9jVfdTfxQhAuWC4HMMbyw8EGOqUBhv6%2FhUjy3BeBYW3YH43NFMIpQphbx4yrLP0SfhJjU9sSlD6ybJvmgRoLZfbloHzzxe7Ds1B1uszbwU8nTP%2Bo9zUaKpDXmsgODTYxAOzKBcQqOzjAMQUEyHFsRViEo2wc5VUPePKgqIYja7eNZpTa2jbwawXaKjpD2KCtEmhj%2F2N0vLI7Slu3I2m21zOUOdCvxcM%2B0jiLVBStKDPtPBZZxiCi3CGO&X-Amz-Signature=706c9f338aae686a01284719c1db373a5b991ef36672a9a5b433716109ea277e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KGOWL3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCID1oizchzL8S%2BLUjsWLHoeGHq%2Bp%2BHaqycTfw1UB2FtADAiEA0%2BsSMSNdyJw1G3QsmotrifJodeB%2BVtlfnzMp8Yb5SHgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCctOQ%2BNgsqgYs9%2BircA%2FaehMpRp2YjpRM3WQi46mzKdYio8b9BMh4t%2B4P%2FnljoFAI4JGoBNer8748tmQwYHQv80cCywWxGXJEGYvB0d5fCT6GBLamfNBjIPTDqhz8HFkMZVJ86OXx9KOFpVUtXQhF59fOmyKG285gsbkgrPskqgW1YOlFh8h74YbIJpbHrhuF8VwEFiKalwPWtLHQgPH0V3vZ6tafNHlnj3hEA1W5aBoUYCXySsDoFon%2B3vAJy5kqFOulJrpbOEZiWpCWrSMPgDJgF4KBBzAgHtrjeI8rj%2FBPXsZToPug68En0JsDWBizm3q4EsdWQryI1PPUx7%2Bp9EvxWHeX0pVQKmwILspyL%2BEGQMXNpnRK4zl4FhTzkhH%2BGXR5GNtqUqr%2F8KPKFG3Ur6ROmNFffy7l99lrEzXzhZ48j02pW7JIDy5Plt80OAn3bsK5AG0HoXYut03R9g8MsfH4TePy8HcoEVeTEl4DgOCh%2Fgi9NWNJdWwQd4KeonMKfQfr2mwApZiZtqZ2B0i%2F%2B%2Bxj7dFMewNXYhgQh1kzvPNauVKnFpXX9Agkqy%2FjQ6UR9qnd3VHaFtwyTtR8L2B%2B0At%2B8hW%2FCt3tuZYCU2xkAAghuZmYD%2BaVwBfAdMr4f9jVfdTfxQhAuWC4HMMbyw8EGOqUBhv6%2FhUjy3BeBYW3YH43NFMIpQphbx4yrLP0SfhJjU9sSlD6ybJvmgRoLZfbloHzzxe7Ds1B1uszbwU8nTP%2Bo9zUaKpDXmsgODTYxAOzKBcQqOzjAMQUEyHFsRViEo2wc5VUPePKgqIYja7eNZpTa2jbwawXaKjpD2KCtEmhj%2F2N0vLI7Slu3I2m21zOUOdCvxcM%2B0jiLVBStKDPtPBZZxiCi3CGO&X-Amz-Signature=0306f123fe43bdae314e4b22b61a38af6b528fef24d57a7c55af8bfa2d9ab0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KGOWL3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCID1oizchzL8S%2BLUjsWLHoeGHq%2Bp%2BHaqycTfw1UB2FtADAiEA0%2BsSMSNdyJw1G3QsmotrifJodeB%2BVtlfnzMp8Yb5SHgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCctOQ%2BNgsqgYs9%2BircA%2FaehMpRp2YjpRM3WQi46mzKdYio8b9BMh4t%2B4P%2FnljoFAI4JGoBNer8748tmQwYHQv80cCywWxGXJEGYvB0d5fCT6GBLamfNBjIPTDqhz8HFkMZVJ86OXx9KOFpVUtXQhF59fOmyKG285gsbkgrPskqgW1YOlFh8h74YbIJpbHrhuF8VwEFiKalwPWtLHQgPH0V3vZ6tafNHlnj3hEA1W5aBoUYCXySsDoFon%2B3vAJy5kqFOulJrpbOEZiWpCWrSMPgDJgF4KBBzAgHtrjeI8rj%2FBPXsZToPug68En0JsDWBizm3q4EsdWQryI1PPUx7%2Bp9EvxWHeX0pVQKmwILspyL%2BEGQMXNpnRK4zl4FhTzkhH%2BGXR5GNtqUqr%2F8KPKFG3Ur6ROmNFffy7l99lrEzXzhZ48j02pW7JIDy5Plt80OAn3bsK5AG0HoXYut03R9g8MsfH4TePy8HcoEVeTEl4DgOCh%2Fgi9NWNJdWwQd4KeonMKfQfr2mwApZiZtqZ2B0i%2F%2B%2Bxj7dFMewNXYhgQh1kzvPNauVKnFpXX9Agkqy%2FjQ6UR9qnd3VHaFtwyTtR8L2B%2B0At%2B8hW%2FCt3tuZYCU2xkAAghuZmYD%2BaVwBfAdMr4f9jVfdTfxQhAuWC4HMMbyw8EGOqUBhv6%2FhUjy3BeBYW3YH43NFMIpQphbx4yrLP0SfhJjU9sSlD6ybJvmgRoLZfbloHzzxe7Ds1B1uszbwU8nTP%2Bo9zUaKpDXmsgODTYxAOzKBcQqOzjAMQUEyHFsRViEo2wc5VUPePKgqIYja7eNZpTa2jbwawXaKjpD2KCtEmhj%2F2N0vLI7Slu3I2m21zOUOdCvxcM%2B0jiLVBStKDPtPBZZxiCi3CGO&X-Amz-Signature=f4e4768ac35509be72addd8c82c1e0da1fcd6808259c41b39c23e830f489c5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KGOWL3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCID1oizchzL8S%2BLUjsWLHoeGHq%2Bp%2BHaqycTfw1UB2FtADAiEA0%2BsSMSNdyJw1G3QsmotrifJodeB%2BVtlfnzMp8Yb5SHgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCctOQ%2BNgsqgYs9%2BircA%2FaehMpRp2YjpRM3WQi46mzKdYio8b9BMh4t%2B4P%2FnljoFAI4JGoBNer8748tmQwYHQv80cCywWxGXJEGYvB0d5fCT6GBLamfNBjIPTDqhz8HFkMZVJ86OXx9KOFpVUtXQhF59fOmyKG285gsbkgrPskqgW1YOlFh8h74YbIJpbHrhuF8VwEFiKalwPWtLHQgPH0V3vZ6tafNHlnj3hEA1W5aBoUYCXySsDoFon%2B3vAJy5kqFOulJrpbOEZiWpCWrSMPgDJgF4KBBzAgHtrjeI8rj%2FBPXsZToPug68En0JsDWBizm3q4EsdWQryI1PPUx7%2Bp9EvxWHeX0pVQKmwILspyL%2BEGQMXNpnRK4zl4FhTzkhH%2BGXR5GNtqUqr%2F8KPKFG3Ur6ROmNFffy7l99lrEzXzhZ48j02pW7JIDy5Plt80OAn3bsK5AG0HoXYut03R9g8MsfH4TePy8HcoEVeTEl4DgOCh%2Fgi9NWNJdWwQd4KeonMKfQfr2mwApZiZtqZ2B0i%2F%2B%2Bxj7dFMewNXYhgQh1kzvPNauVKnFpXX9Agkqy%2FjQ6UR9qnd3VHaFtwyTtR8L2B%2B0At%2B8hW%2FCt3tuZYCU2xkAAghuZmYD%2BaVwBfAdMr4f9jVfdTfxQhAuWC4HMMbyw8EGOqUBhv6%2FhUjy3BeBYW3YH43NFMIpQphbx4yrLP0SfhJjU9sSlD6ybJvmgRoLZfbloHzzxe7Ds1B1uszbwU8nTP%2Bo9zUaKpDXmsgODTYxAOzKBcQqOzjAMQUEyHFsRViEo2wc5VUPePKgqIYja7eNZpTa2jbwawXaKjpD2KCtEmhj%2F2N0vLI7Slu3I2m21zOUOdCvxcM%2B0jiLVBStKDPtPBZZxiCi3CGO&X-Amz-Signature=5bbc35b23f7a49a0fd5c7e09560649621e94d05320c8bea2ad8c22c9e34cbf75&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
