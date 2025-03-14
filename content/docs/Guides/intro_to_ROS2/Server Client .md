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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKNXXGQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5vINka%2BCi%2F8TwqZZSnGtLm3EIR4EoMkXKHpSQBb7pdwIgRbOZfQijsT04eqrrZMHT%2FAXNVGSia3fx12CPxXcvgZoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLkJJXoiSoPUeD4pircA0Y24OJq2GyPTG9L3KIOTMGSRpewu54l8Hu4%2F8X6ZkewRLiYe9lxLuxD3nuw9%2BUZruj3rMctKUNfKFiB6Zb6XZZtRUx3AXnWfv2%2BnIjKCXN%2FlmTaHaniCewLTQsq6Wk1tKFcW8t6RsKr5ziFKJukMr%2F8JocV6Hmi7%2FwhfCREmJ5VgHETSd6%2B%2FjVbDayxtryVd%2B30pNoxlYmEd%2BqrXwykLvBf5bKw5CbjgGleggCggZopUzOuPES9pEY4nf2tQzQFEjej3LR3DCcT1tpNk6iYP%2FfrbvKvZg%2Bor3%2FHXVwryQh5S1DJR51gyCCXR6nBtzBNnk69Z%2FaESx3ILdVDt0dm95e0LrLoXm%2Bn6Mlw3oKo%2FECw7Zox%2Fl8QocmhfhGC8eURLQxOXD3QTd6B2LwicnTi8%2FiByr6DwIvjend2woNzZPXa908SOF6I9s7ju%2F%2FsBYR9MT32LpT1kbZsJVjR6LxeJ30PDpcq2nCLHewqk7XZaqZnG4KazRHG0MgSeAu%2FD3bivSrZmwMz%2BTIvpc8a5SIuDhRbQxSfW1w3tpRe3AV4lIqof%2Fozm56nq2b266t54Gyqu04Urj6WZot9o49t2MEY8B8CIYXFCrQMblSS4pBeL7DEyBUCU4Yj%2Bm14ap4lMIvR0r4GOqUBfp%2BPENnwsxOIkL5O1ZD5597kVg3pyRPSvVaLpd8BOtuo%2BDWHeyt70WZaM1kK6mA0drfsq%2BbmppqJN6ehEw8e0%2FfIziZDJaG%2F8VnECFMGu2Ni2zjUNAHoLqOkeeQewXJwHvQY8zZhb81JxG87ms5CHGokhGstTy7AhT1%2FaabGQuKIKDmhO4G4z7B%2FCCVyRRK7DPrX225vPOSFHKHVkpi9Ar6mpcKx&X-Amz-Signature=dc36bdcc11fa7e22a43419f2b6626a8302ab87e5f3d7408553f73d00846fc4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKNXXGQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5vINka%2BCi%2F8TwqZZSnGtLm3EIR4EoMkXKHpSQBb7pdwIgRbOZfQijsT04eqrrZMHT%2FAXNVGSia3fx12CPxXcvgZoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLkJJXoiSoPUeD4pircA0Y24OJq2GyPTG9L3KIOTMGSRpewu54l8Hu4%2F8X6ZkewRLiYe9lxLuxD3nuw9%2BUZruj3rMctKUNfKFiB6Zb6XZZtRUx3AXnWfv2%2BnIjKCXN%2FlmTaHaniCewLTQsq6Wk1tKFcW8t6RsKr5ziFKJukMr%2F8JocV6Hmi7%2FwhfCREmJ5VgHETSd6%2B%2FjVbDayxtryVd%2B30pNoxlYmEd%2BqrXwykLvBf5bKw5CbjgGleggCggZopUzOuPES9pEY4nf2tQzQFEjej3LR3DCcT1tpNk6iYP%2FfrbvKvZg%2Bor3%2FHXVwryQh5S1DJR51gyCCXR6nBtzBNnk69Z%2FaESx3ILdVDt0dm95e0LrLoXm%2Bn6Mlw3oKo%2FECw7Zox%2Fl8QocmhfhGC8eURLQxOXD3QTd6B2LwicnTi8%2FiByr6DwIvjend2woNzZPXa908SOF6I9s7ju%2F%2FsBYR9MT32LpT1kbZsJVjR6LxeJ30PDpcq2nCLHewqk7XZaqZnG4KazRHG0MgSeAu%2FD3bivSrZmwMz%2BTIvpc8a5SIuDhRbQxSfW1w3tpRe3AV4lIqof%2Fozm56nq2b266t54Gyqu04Urj6WZot9o49t2MEY8B8CIYXFCrQMblSS4pBeL7DEyBUCU4Yj%2Bm14ap4lMIvR0r4GOqUBfp%2BPENnwsxOIkL5O1ZD5597kVg3pyRPSvVaLpd8BOtuo%2BDWHeyt70WZaM1kK6mA0drfsq%2BbmppqJN6ehEw8e0%2FfIziZDJaG%2F8VnECFMGu2Ni2zjUNAHoLqOkeeQewXJwHvQY8zZhb81JxG87ms5CHGokhGstTy7AhT1%2FaabGQuKIKDmhO4G4z7B%2FCCVyRRK7DPrX225vPOSFHKHVkpi9Ar6mpcKx&X-Amz-Signature=acd5abbb6d379e6536f487c572c2abadb1723ec5caac5338a38a4a3409a7d7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKNXXGQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5vINka%2BCi%2F8TwqZZSnGtLm3EIR4EoMkXKHpSQBb7pdwIgRbOZfQijsT04eqrrZMHT%2FAXNVGSia3fx12CPxXcvgZoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLkJJXoiSoPUeD4pircA0Y24OJq2GyPTG9L3KIOTMGSRpewu54l8Hu4%2F8X6ZkewRLiYe9lxLuxD3nuw9%2BUZruj3rMctKUNfKFiB6Zb6XZZtRUx3AXnWfv2%2BnIjKCXN%2FlmTaHaniCewLTQsq6Wk1tKFcW8t6RsKr5ziFKJukMr%2F8JocV6Hmi7%2FwhfCREmJ5VgHETSd6%2B%2FjVbDayxtryVd%2B30pNoxlYmEd%2BqrXwykLvBf5bKw5CbjgGleggCggZopUzOuPES9pEY4nf2tQzQFEjej3LR3DCcT1tpNk6iYP%2FfrbvKvZg%2Bor3%2FHXVwryQh5S1DJR51gyCCXR6nBtzBNnk69Z%2FaESx3ILdVDt0dm95e0LrLoXm%2Bn6Mlw3oKo%2FECw7Zox%2Fl8QocmhfhGC8eURLQxOXD3QTd6B2LwicnTi8%2FiByr6DwIvjend2woNzZPXa908SOF6I9s7ju%2F%2FsBYR9MT32LpT1kbZsJVjR6LxeJ30PDpcq2nCLHewqk7XZaqZnG4KazRHG0MgSeAu%2FD3bivSrZmwMz%2BTIvpc8a5SIuDhRbQxSfW1w3tpRe3AV4lIqof%2Fozm56nq2b266t54Gyqu04Urj6WZot9o49t2MEY8B8CIYXFCrQMblSS4pBeL7DEyBUCU4Yj%2Bm14ap4lMIvR0r4GOqUBfp%2BPENnwsxOIkL5O1ZD5597kVg3pyRPSvVaLpd8BOtuo%2BDWHeyt70WZaM1kK6mA0drfsq%2BbmppqJN6ehEw8e0%2FfIziZDJaG%2F8VnECFMGu2Ni2zjUNAHoLqOkeeQewXJwHvQY8zZhb81JxG87ms5CHGokhGstTy7AhT1%2FaabGQuKIKDmhO4G4z7B%2FCCVyRRK7DPrX225vPOSFHKHVkpi9Ar6mpcKx&X-Amz-Signature=ae3fca811381d909158f32ed9238447c19705cf5d10426eb8706c65195828bff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKNXXGQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5vINka%2BCi%2F8TwqZZSnGtLm3EIR4EoMkXKHpSQBb7pdwIgRbOZfQijsT04eqrrZMHT%2FAXNVGSia3fx12CPxXcvgZoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLkJJXoiSoPUeD4pircA0Y24OJq2GyPTG9L3KIOTMGSRpewu54l8Hu4%2F8X6ZkewRLiYe9lxLuxD3nuw9%2BUZruj3rMctKUNfKFiB6Zb6XZZtRUx3AXnWfv2%2BnIjKCXN%2FlmTaHaniCewLTQsq6Wk1tKFcW8t6RsKr5ziFKJukMr%2F8JocV6Hmi7%2FwhfCREmJ5VgHETSd6%2B%2FjVbDayxtryVd%2B30pNoxlYmEd%2BqrXwykLvBf5bKw5CbjgGleggCggZopUzOuPES9pEY4nf2tQzQFEjej3LR3DCcT1tpNk6iYP%2FfrbvKvZg%2Bor3%2FHXVwryQh5S1DJR51gyCCXR6nBtzBNnk69Z%2FaESx3ILdVDt0dm95e0LrLoXm%2Bn6Mlw3oKo%2FECw7Zox%2Fl8QocmhfhGC8eURLQxOXD3QTd6B2LwicnTi8%2FiByr6DwIvjend2woNzZPXa908SOF6I9s7ju%2F%2FsBYR9MT32LpT1kbZsJVjR6LxeJ30PDpcq2nCLHewqk7XZaqZnG4KazRHG0MgSeAu%2FD3bivSrZmwMz%2BTIvpc8a5SIuDhRbQxSfW1w3tpRe3AV4lIqof%2Fozm56nq2b266t54Gyqu04Urj6WZot9o49t2MEY8B8CIYXFCrQMblSS4pBeL7DEyBUCU4Yj%2Bm14ap4lMIvR0r4GOqUBfp%2BPENnwsxOIkL5O1ZD5597kVg3pyRPSvVaLpd8BOtuo%2BDWHeyt70WZaM1kK6mA0drfsq%2BbmppqJN6ehEw8e0%2FfIziZDJaG%2F8VnECFMGu2Ni2zjUNAHoLqOkeeQewXJwHvQY8zZhb81JxG87ms5CHGokhGstTy7AhT1%2FaabGQuKIKDmhO4G4z7B%2FCCVyRRK7DPrX225vPOSFHKHVkpi9Ar6mpcKx&X-Amz-Signature=2599b82692472ff46c584544b4dd1272d02a444e06dc7bd887fff17cf303afc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKNXXGQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5vINka%2BCi%2F8TwqZZSnGtLm3EIR4EoMkXKHpSQBb7pdwIgRbOZfQijsT04eqrrZMHT%2FAXNVGSia3fx12CPxXcvgZoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLkJJXoiSoPUeD4pircA0Y24OJq2GyPTG9L3KIOTMGSRpewu54l8Hu4%2F8X6ZkewRLiYe9lxLuxD3nuw9%2BUZruj3rMctKUNfKFiB6Zb6XZZtRUx3AXnWfv2%2BnIjKCXN%2FlmTaHaniCewLTQsq6Wk1tKFcW8t6RsKr5ziFKJukMr%2F8JocV6Hmi7%2FwhfCREmJ5VgHETSd6%2B%2FjVbDayxtryVd%2B30pNoxlYmEd%2BqrXwykLvBf5bKw5CbjgGleggCggZopUzOuPES9pEY4nf2tQzQFEjej3LR3DCcT1tpNk6iYP%2FfrbvKvZg%2Bor3%2FHXVwryQh5S1DJR51gyCCXR6nBtzBNnk69Z%2FaESx3ILdVDt0dm95e0LrLoXm%2Bn6Mlw3oKo%2FECw7Zox%2Fl8QocmhfhGC8eURLQxOXD3QTd6B2LwicnTi8%2FiByr6DwIvjend2woNzZPXa908SOF6I9s7ju%2F%2FsBYR9MT32LpT1kbZsJVjR6LxeJ30PDpcq2nCLHewqk7XZaqZnG4KazRHG0MgSeAu%2FD3bivSrZmwMz%2BTIvpc8a5SIuDhRbQxSfW1w3tpRe3AV4lIqof%2Fozm56nq2b266t54Gyqu04Urj6WZot9o49t2MEY8B8CIYXFCrQMblSS4pBeL7DEyBUCU4Yj%2Bm14ap4lMIvR0r4GOqUBfp%2BPENnwsxOIkL5O1ZD5597kVg3pyRPSvVaLpd8BOtuo%2BDWHeyt70WZaM1kK6mA0drfsq%2BbmppqJN6ehEw8e0%2FfIziZDJaG%2F8VnECFMGu2Ni2zjUNAHoLqOkeeQewXJwHvQY8zZhb81JxG87ms5CHGokhGstTy7AhT1%2FaabGQuKIKDmhO4G4z7B%2FCCVyRRK7DPrX225vPOSFHKHVkpi9Ar6mpcKx&X-Amz-Signature=4efea1158ec51741b75187bf95287e524ea3baac549ca584bfbf0dc9805dcb23&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
