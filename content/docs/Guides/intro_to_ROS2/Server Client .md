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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD7FCKT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIA0Fv0cbmZRp3%2BFAeh1b9J6GJn%2FmTAMVanEreGTgV8ArAiBNhU4N%2Bfr10OSdakf6GGvPVOJHftlMkd3pTid03wocdSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPt3kMnZhKM4xCbZFKtwD1FNJtrFdz1C8pwrQaoG6sqlEl5PqWexDv%2FUSnmQUrgXM9hhGgLnwh26bA2EP0k3o61edzgv9glk9%2FiUjyNIiorYn3BOfycFz08Hq93IPYYCOTcknFSbS4paAXv3FU11gbEjneacApCML07QUXXxLDVc%2FFVm25BRQEgzEj2IPkgphmewMcGgib0t7cEoL7K6N%2BRVjAraugnFh%2FEUdSGEya9Cny%2B5sM4WMjtpWwsQ9mE94Jh%2Fl1G%2BmCTKP7j94wldYhPPjrDqmEUmO1YwSnr8AIlRoDRb3LlJBWQhUNFN20ySeP%2BNcqOynS%2FsPl%2BAgubZDO0KLWj8NBZY6L4O2SAKaZt3EzVneKjAXQVN%2FSYELNrO510zlIj3bht1%2FHhut%2FWB8edgLIZg0kHHMiCgN1NvG%2BGCUxqjg24tUuAs%2BftIAJ6xl15od8bOtXyyxy187wQK82XJUw0DNB%2BWgqNQEx5OcICncmEUEYrbtplYbl%2BsI1uy0t8yjyLm2zRKcvYaxEOjCEf%2FYqh2VCANJ9EaZEm3sk%2Fc%2FA4vyTFOQsCzpItQk6QAOv1mQ8Zjbk%2BYo6hAlWbuG%2B1ENtySZnmNaiMAB1G0r%2Fy%2B50ZM%2BTek2fbnVFAVqJp8reA1jwCieuyvFbNIw44LqvgY6pgF%2BzAbbTvXBIXUxudzzw31CAWtYkH8JFH0CglAx5O9LzyoPiDBdiFjsS%2Fkqk78LdZEwu6drCj%2Bmet4661JbNCaE1PIQedRypK%2BQzRvP00%2BtqhDw91njPdjOpptxC2Zn5dpB37ner8ys5lX%2B%2FD2rTrZ8sUpDecjkXLnylhUxI5bWcqMp65ukHRKjGH1xY%2Bz%2BHfRRKlKi0gkR%2BX6jXe3wjWdw4sK89s39&X-Amz-Signature=ee3c7fe2c053723c2824dd9838249ce3760b82b3c7ce86dff7adb12837a8c13f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD7FCKT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIA0Fv0cbmZRp3%2BFAeh1b9J6GJn%2FmTAMVanEreGTgV8ArAiBNhU4N%2Bfr10OSdakf6GGvPVOJHftlMkd3pTid03wocdSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPt3kMnZhKM4xCbZFKtwD1FNJtrFdz1C8pwrQaoG6sqlEl5PqWexDv%2FUSnmQUrgXM9hhGgLnwh26bA2EP0k3o61edzgv9glk9%2FiUjyNIiorYn3BOfycFz08Hq93IPYYCOTcknFSbS4paAXv3FU11gbEjneacApCML07QUXXxLDVc%2FFVm25BRQEgzEj2IPkgphmewMcGgib0t7cEoL7K6N%2BRVjAraugnFh%2FEUdSGEya9Cny%2B5sM4WMjtpWwsQ9mE94Jh%2Fl1G%2BmCTKP7j94wldYhPPjrDqmEUmO1YwSnr8AIlRoDRb3LlJBWQhUNFN20ySeP%2BNcqOynS%2FsPl%2BAgubZDO0KLWj8NBZY6L4O2SAKaZt3EzVneKjAXQVN%2FSYELNrO510zlIj3bht1%2FHhut%2FWB8edgLIZg0kHHMiCgN1NvG%2BGCUxqjg24tUuAs%2BftIAJ6xl15od8bOtXyyxy187wQK82XJUw0DNB%2BWgqNQEx5OcICncmEUEYrbtplYbl%2BsI1uy0t8yjyLm2zRKcvYaxEOjCEf%2FYqh2VCANJ9EaZEm3sk%2Fc%2FA4vyTFOQsCzpItQk6QAOv1mQ8Zjbk%2BYo6hAlWbuG%2B1ENtySZnmNaiMAB1G0r%2Fy%2B50ZM%2BTek2fbnVFAVqJp8reA1jwCieuyvFbNIw44LqvgY6pgF%2BzAbbTvXBIXUxudzzw31CAWtYkH8JFH0CglAx5O9LzyoPiDBdiFjsS%2Fkqk78LdZEwu6drCj%2Bmet4661JbNCaE1PIQedRypK%2BQzRvP00%2BtqhDw91njPdjOpptxC2Zn5dpB37ner8ys5lX%2B%2FD2rTrZ8sUpDecjkXLnylhUxI5bWcqMp65ukHRKjGH1xY%2Bz%2BHfRRKlKi0gkR%2BX6jXe3wjWdw4sK89s39&X-Amz-Signature=7566707055e94150d33554d1927ecaef7d49bf5634ea56c4436b14ab61828d40&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD7FCKT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIA0Fv0cbmZRp3%2BFAeh1b9J6GJn%2FmTAMVanEreGTgV8ArAiBNhU4N%2Bfr10OSdakf6GGvPVOJHftlMkd3pTid03wocdSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPt3kMnZhKM4xCbZFKtwD1FNJtrFdz1C8pwrQaoG6sqlEl5PqWexDv%2FUSnmQUrgXM9hhGgLnwh26bA2EP0k3o61edzgv9glk9%2FiUjyNIiorYn3BOfycFz08Hq93IPYYCOTcknFSbS4paAXv3FU11gbEjneacApCML07QUXXxLDVc%2FFVm25BRQEgzEj2IPkgphmewMcGgib0t7cEoL7K6N%2BRVjAraugnFh%2FEUdSGEya9Cny%2B5sM4WMjtpWwsQ9mE94Jh%2Fl1G%2BmCTKP7j94wldYhPPjrDqmEUmO1YwSnr8AIlRoDRb3LlJBWQhUNFN20ySeP%2BNcqOynS%2FsPl%2BAgubZDO0KLWj8NBZY6L4O2SAKaZt3EzVneKjAXQVN%2FSYELNrO510zlIj3bht1%2FHhut%2FWB8edgLIZg0kHHMiCgN1NvG%2BGCUxqjg24tUuAs%2BftIAJ6xl15od8bOtXyyxy187wQK82XJUw0DNB%2BWgqNQEx5OcICncmEUEYrbtplYbl%2BsI1uy0t8yjyLm2zRKcvYaxEOjCEf%2FYqh2VCANJ9EaZEm3sk%2Fc%2FA4vyTFOQsCzpItQk6QAOv1mQ8Zjbk%2BYo6hAlWbuG%2B1ENtySZnmNaiMAB1G0r%2Fy%2B50ZM%2BTek2fbnVFAVqJp8reA1jwCieuyvFbNIw44LqvgY6pgF%2BzAbbTvXBIXUxudzzw31CAWtYkH8JFH0CglAx5O9LzyoPiDBdiFjsS%2Fkqk78LdZEwu6drCj%2Bmet4661JbNCaE1PIQedRypK%2BQzRvP00%2BtqhDw91njPdjOpptxC2Zn5dpB37ner8ys5lX%2B%2FD2rTrZ8sUpDecjkXLnylhUxI5bWcqMp65ukHRKjGH1xY%2Bz%2BHfRRKlKi0gkR%2BX6jXe3wjWdw4sK89s39&X-Amz-Signature=61bc64a646c925528f4fb7ecd0ed4e912497e6f2361cc2513a1fab7202bf01da&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD7FCKT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIA0Fv0cbmZRp3%2BFAeh1b9J6GJn%2FmTAMVanEreGTgV8ArAiBNhU4N%2Bfr10OSdakf6GGvPVOJHftlMkd3pTid03wocdSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPt3kMnZhKM4xCbZFKtwD1FNJtrFdz1C8pwrQaoG6sqlEl5PqWexDv%2FUSnmQUrgXM9hhGgLnwh26bA2EP0k3o61edzgv9glk9%2FiUjyNIiorYn3BOfycFz08Hq93IPYYCOTcknFSbS4paAXv3FU11gbEjneacApCML07QUXXxLDVc%2FFVm25BRQEgzEj2IPkgphmewMcGgib0t7cEoL7K6N%2BRVjAraugnFh%2FEUdSGEya9Cny%2B5sM4WMjtpWwsQ9mE94Jh%2Fl1G%2BmCTKP7j94wldYhPPjrDqmEUmO1YwSnr8AIlRoDRb3LlJBWQhUNFN20ySeP%2BNcqOynS%2FsPl%2BAgubZDO0KLWj8NBZY6L4O2SAKaZt3EzVneKjAXQVN%2FSYELNrO510zlIj3bht1%2FHhut%2FWB8edgLIZg0kHHMiCgN1NvG%2BGCUxqjg24tUuAs%2BftIAJ6xl15od8bOtXyyxy187wQK82XJUw0DNB%2BWgqNQEx5OcICncmEUEYrbtplYbl%2BsI1uy0t8yjyLm2zRKcvYaxEOjCEf%2FYqh2VCANJ9EaZEm3sk%2Fc%2FA4vyTFOQsCzpItQk6QAOv1mQ8Zjbk%2BYo6hAlWbuG%2B1ENtySZnmNaiMAB1G0r%2Fy%2B50ZM%2BTek2fbnVFAVqJp8reA1jwCieuyvFbNIw44LqvgY6pgF%2BzAbbTvXBIXUxudzzw31CAWtYkH8JFH0CglAx5O9LzyoPiDBdiFjsS%2Fkqk78LdZEwu6drCj%2Bmet4661JbNCaE1PIQedRypK%2BQzRvP00%2BtqhDw91njPdjOpptxC2Zn5dpB37ner8ys5lX%2B%2FD2rTrZ8sUpDecjkXLnylhUxI5bWcqMp65ukHRKjGH1xY%2Bz%2BHfRRKlKi0gkR%2BX6jXe3wjWdw4sK89s39&X-Amz-Signature=5a7a6fd90459e31b8115efbedb01ae2c49a84435bf89c853d3f85a496141a893&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD7FCKT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIA0Fv0cbmZRp3%2BFAeh1b9J6GJn%2FmTAMVanEreGTgV8ArAiBNhU4N%2Bfr10OSdakf6GGvPVOJHftlMkd3pTid03wocdSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMPt3kMnZhKM4xCbZFKtwD1FNJtrFdz1C8pwrQaoG6sqlEl5PqWexDv%2FUSnmQUrgXM9hhGgLnwh26bA2EP0k3o61edzgv9glk9%2FiUjyNIiorYn3BOfycFz08Hq93IPYYCOTcknFSbS4paAXv3FU11gbEjneacApCML07QUXXxLDVc%2FFVm25BRQEgzEj2IPkgphmewMcGgib0t7cEoL7K6N%2BRVjAraugnFh%2FEUdSGEya9Cny%2B5sM4WMjtpWwsQ9mE94Jh%2Fl1G%2BmCTKP7j94wldYhPPjrDqmEUmO1YwSnr8AIlRoDRb3LlJBWQhUNFN20ySeP%2BNcqOynS%2FsPl%2BAgubZDO0KLWj8NBZY6L4O2SAKaZt3EzVneKjAXQVN%2FSYELNrO510zlIj3bht1%2FHhut%2FWB8edgLIZg0kHHMiCgN1NvG%2BGCUxqjg24tUuAs%2BftIAJ6xl15od8bOtXyyxy187wQK82XJUw0DNB%2BWgqNQEx5OcICncmEUEYrbtplYbl%2BsI1uy0t8yjyLm2zRKcvYaxEOjCEf%2FYqh2VCANJ9EaZEm3sk%2Fc%2FA4vyTFOQsCzpItQk6QAOv1mQ8Zjbk%2BYo6hAlWbuG%2B1ENtySZnmNaiMAB1G0r%2Fy%2B50ZM%2BTek2fbnVFAVqJp8reA1jwCieuyvFbNIw44LqvgY6pgF%2BzAbbTvXBIXUxudzzw31CAWtYkH8JFH0CglAx5O9LzyoPiDBdiFjsS%2Fkqk78LdZEwu6drCj%2Bmet4661JbNCaE1PIQedRypK%2BQzRvP00%2BtqhDw91njPdjOpptxC2Zn5dpB37ner8ys5lX%2B%2FD2rTrZ8sUpDecjkXLnylhUxI5bWcqMp65ukHRKjGH1xY%2Bz%2BHfRRKlKi0gkR%2BX6jXe3wjWdw4sK89s39&X-Amz-Signature=729246fe8449166a8dfd99be6cfe8ec55f6b9481ededd7cecbcfb212dc928790&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
