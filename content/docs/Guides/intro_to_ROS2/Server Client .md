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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQCRMRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTexlQAHGm6oLDXF4KiUKsAK6V9HgQtSNlPYCW92QN%2BAiEAkM4oTdgZQw84Mcua7b67Od%2BEOx00FVn3leuo8rGolhsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuTThuKnISutburQyrcAyYrzOzhUA%2BufCbM24y74b1brnc8h1Rp7r2%2BoOhQ6DYQxqEJu2%2F8FiHzjAa65hp7fZM6rPahpPNdfgIC1QU526oIOE7NK3Y8kUeubwpl6baTugKsi7azPoAH1yfVVZ6TwTnlfqCPZj6S%2FaVuVaZ1JEMrHRVIqegmOj%2FpVuV4pbtZ8s7p78i1GRiGOLdhUczUtQB%2FmdK35r7bQXh4yiIXrrZJySkNAn3mtMwd9NqL1E1ZxnfS4hkK%2BFaTSMio1agYYNOe8CxD2V8Wg9fZfB0KRc4a9RasuSf1Z0hZn5OV0lSZTDPh38fBn%2FvEfKlbvQtP94RwGWMK5PpgJ6gn%2FwFhOSnwma%2F9ot%2FJ4a2E9BNEKRkVtOBpefHbLYEW23pA7W4J2kTtayDRGl0tBFYWMCPTbzIPSzaik%2B0Va%2FoDl7o0CVF5XxezIB5nx%2F6uZcaDkOhZaayxrqo34IgSHMZbGD%2BmIQWfHPaprh%2FcFW7mY3gYZR2lcYaKUhWX%2BLyS2HmY7uNsq4Gtf%2FnPWCnySnSejibXD%2BNh06IVdtzUju9pE1AInWi8WmCL4xo1m22%2BT6COg8ji4wZLXlVMLwNKVD3pg%2BZC5KFB3QRCQ3hcmlasJKi3ut22RcDvhcnq1TOqygGzMJe%2BucMGOqUB%2BpN9o4kV5IF9AXOKJ5wvxjm3eiqmaRf7AyYnoKWvEvEHc8uayeZ%2FXJ8bK5ZphD1%2FcnzpVNCOUjmoN9twpKfVt5FBw5RgyUa9niP7vprejS8y%2BGnzjbpPeMMdQBzBc2fjmql2NEfoUgvMUJl%2BMamikjmF4LgmloDAOlu9OMaIhsvza%2BDaq6%2BrImdMYwjMkveQGMCZRpovsfz3SBDxbgbJ5rzdbQQw&X-Amz-Signature=f09c3e7895b726bad3b895c3bae76574686720789546aeb9cecec388ebb8b02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQCRMRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTexlQAHGm6oLDXF4KiUKsAK6V9HgQtSNlPYCW92QN%2BAiEAkM4oTdgZQw84Mcua7b67Od%2BEOx00FVn3leuo8rGolhsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuTThuKnISutburQyrcAyYrzOzhUA%2BufCbM24y74b1brnc8h1Rp7r2%2BoOhQ6DYQxqEJu2%2F8FiHzjAa65hp7fZM6rPahpPNdfgIC1QU526oIOE7NK3Y8kUeubwpl6baTugKsi7azPoAH1yfVVZ6TwTnlfqCPZj6S%2FaVuVaZ1JEMrHRVIqegmOj%2FpVuV4pbtZ8s7p78i1GRiGOLdhUczUtQB%2FmdK35r7bQXh4yiIXrrZJySkNAn3mtMwd9NqL1E1ZxnfS4hkK%2BFaTSMio1agYYNOe8CxD2V8Wg9fZfB0KRc4a9RasuSf1Z0hZn5OV0lSZTDPh38fBn%2FvEfKlbvQtP94RwGWMK5PpgJ6gn%2FwFhOSnwma%2F9ot%2FJ4a2E9BNEKRkVtOBpefHbLYEW23pA7W4J2kTtayDRGl0tBFYWMCPTbzIPSzaik%2B0Va%2FoDl7o0CVF5XxezIB5nx%2F6uZcaDkOhZaayxrqo34IgSHMZbGD%2BmIQWfHPaprh%2FcFW7mY3gYZR2lcYaKUhWX%2BLyS2HmY7uNsq4Gtf%2FnPWCnySnSejibXD%2BNh06IVdtzUju9pE1AInWi8WmCL4xo1m22%2BT6COg8ji4wZLXlVMLwNKVD3pg%2BZC5KFB3QRCQ3hcmlasJKi3ut22RcDvhcnq1TOqygGzMJe%2BucMGOqUB%2BpN9o4kV5IF9AXOKJ5wvxjm3eiqmaRf7AyYnoKWvEvEHc8uayeZ%2FXJ8bK5ZphD1%2FcnzpVNCOUjmoN9twpKfVt5FBw5RgyUa9niP7vprejS8y%2BGnzjbpPeMMdQBzBc2fjmql2NEfoUgvMUJl%2BMamikjmF4LgmloDAOlu9OMaIhsvza%2BDaq6%2BrImdMYwjMkveQGMCZRpovsfz3SBDxbgbJ5rzdbQQw&X-Amz-Signature=72e79f925b97e1991e09f30feddfadad2e8f2d740e495db41c564aefdfd64cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQCRMRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTexlQAHGm6oLDXF4KiUKsAK6V9HgQtSNlPYCW92QN%2BAiEAkM4oTdgZQw84Mcua7b67Od%2BEOx00FVn3leuo8rGolhsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuTThuKnISutburQyrcAyYrzOzhUA%2BufCbM24y74b1brnc8h1Rp7r2%2BoOhQ6DYQxqEJu2%2F8FiHzjAa65hp7fZM6rPahpPNdfgIC1QU526oIOE7NK3Y8kUeubwpl6baTugKsi7azPoAH1yfVVZ6TwTnlfqCPZj6S%2FaVuVaZ1JEMrHRVIqegmOj%2FpVuV4pbtZ8s7p78i1GRiGOLdhUczUtQB%2FmdK35r7bQXh4yiIXrrZJySkNAn3mtMwd9NqL1E1ZxnfS4hkK%2BFaTSMio1agYYNOe8CxD2V8Wg9fZfB0KRc4a9RasuSf1Z0hZn5OV0lSZTDPh38fBn%2FvEfKlbvQtP94RwGWMK5PpgJ6gn%2FwFhOSnwma%2F9ot%2FJ4a2E9BNEKRkVtOBpefHbLYEW23pA7W4J2kTtayDRGl0tBFYWMCPTbzIPSzaik%2B0Va%2FoDl7o0CVF5XxezIB5nx%2F6uZcaDkOhZaayxrqo34IgSHMZbGD%2BmIQWfHPaprh%2FcFW7mY3gYZR2lcYaKUhWX%2BLyS2HmY7uNsq4Gtf%2FnPWCnySnSejibXD%2BNh06IVdtzUju9pE1AInWi8WmCL4xo1m22%2BT6COg8ji4wZLXlVMLwNKVD3pg%2BZC5KFB3QRCQ3hcmlasJKi3ut22RcDvhcnq1TOqygGzMJe%2BucMGOqUB%2BpN9o4kV5IF9AXOKJ5wvxjm3eiqmaRf7AyYnoKWvEvEHc8uayeZ%2FXJ8bK5ZphD1%2FcnzpVNCOUjmoN9twpKfVt5FBw5RgyUa9niP7vprejS8y%2BGnzjbpPeMMdQBzBc2fjmql2NEfoUgvMUJl%2BMamikjmF4LgmloDAOlu9OMaIhsvza%2BDaq6%2BrImdMYwjMkveQGMCZRpovsfz3SBDxbgbJ5rzdbQQw&X-Amz-Signature=a9bb611a5c55122695e21db6a48c4c68e98ece43ad2e769310f831a8a15d9a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQCRMRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTexlQAHGm6oLDXF4KiUKsAK6V9HgQtSNlPYCW92QN%2BAiEAkM4oTdgZQw84Mcua7b67Od%2BEOx00FVn3leuo8rGolhsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuTThuKnISutburQyrcAyYrzOzhUA%2BufCbM24y74b1brnc8h1Rp7r2%2BoOhQ6DYQxqEJu2%2F8FiHzjAa65hp7fZM6rPahpPNdfgIC1QU526oIOE7NK3Y8kUeubwpl6baTugKsi7azPoAH1yfVVZ6TwTnlfqCPZj6S%2FaVuVaZ1JEMrHRVIqegmOj%2FpVuV4pbtZ8s7p78i1GRiGOLdhUczUtQB%2FmdK35r7bQXh4yiIXrrZJySkNAn3mtMwd9NqL1E1ZxnfS4hkK%2BFaTSMio1agYYNOe8CxD2V8Wg9fZfB0KRc4a9RasuSf1Z0hZn5OV0lSZTDPh38fBn%2FvEfKlbvQtP94RwGWMK5PpgJ6gn%2FwFhOSnwma%2F9ot%2FJ4a2E9BNEKRkVtOBpefHbLYEW23pA7W4J2kTtayDRGl0tBFYWMCPTbzIPSzaik%2B0Va%2FoDl7o0CVF5XxezIB5nx%2F6uZcaDkOhZaayxrqo34IgSHMZbGD%2BmIQWfHPaprh%2FcFW7mY3gYZR2lcYaKUhWX%2BLyS2HmY7uNsq4Gtf%2FnPWCnySnSejibXD%2BNh06IVdtzUju9pE1AInWi8WmCL4xo1m22%2BT6COg8ji4wZLXlVMLwNKVD3pg%2BZC5KFB3QRCQ3hcmlasJKi3ut22RcDvhcnq1TOqygGzMJe%2BucMGOqUB%2BpN9o4kV5IF9AXOKJ5wvxjm3eiqmaRf7AyYnoKWvEvEHc8uayeZ%2FXJ8bK5ZphD1%2FcnzpVNCOUjmoN9twpKfVt5FBw5RgyUa9niP7vprejS8y%2BGnzjbpPeMMdQBzBc2fjmql2NEfoUgvMUJl%2BMamikjmF4LgmloDAOlu9OMaIhsvza%2BDaq6%2BrImdMYwjMkveQGMCZRpovsfz3SBDxbgbJ5rzdbQQw&X-Amz-Signature=9f641a521a40b686be11c66d5efb1020be87c3e3b04f52af39dd117103bd149b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQCRMRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTexlQAHGm6oLDXF4KiUKsAK6V9HgQtSNlPYCW92QN%2BAiEAkM4oTdgZQw84Mcua7b67Od%2BEOx00FVn3leuo8rGolhsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuTThuKnISutburQyrcAyYrzOzhUA%2BufCbM24y74b1brnc8h1Rp7r2%2BoOhQ6DYQxqEJu2%2F8FiHzjAa65hp7fZM6rPahpPNdfgIC1QU526oIOE7NK3Y8kUeubwpl6baTugKsi7azPoAH1yfVVZ6TwTnlfqCPZj6S%2FaVuVaZ1JEMrHRVIqegmOj%2FpVuV4pbtZ8s7p78i1GRiGOLdhUczUtQB%2FmdK35r7bQXh4yiIXrrZJySkNAn3mtMwd9NqL1E1ZxnfS4hkK%2BFaTSMio1agYYNOe8CxD2V8Wg9fZfB0KRc4a9RasuSf1Z0hZn5OV0lSZTDPh38fBn%2FvEfKlbvQtP94RwGWMK5PpgJ6gn%2FwFhOSnwma%2F9ot%2FJ4a2E9BNEKRkVtOBpefHbLYEW23pA7W4J2kTtayDRGl0tBFYWMCPTbzIPSzaik%2B0Va%2FoDl7o0CVF5XxezIB5nx%2F6uZcaDkOhZaayxrqo34IgSHMZbGD%2BmIQWfHPaprh%2FcFW7mY3gYZR2lcYaKUhWX%2BLyS2HmY7uNsq4Gtf%2FnPWCnySnSejibXD%2BNh06IVdtzUju9pE1AInWi8WmCL4xo1m22%2BT6COg8ji4wZLXlVMLwNKVD3pg%2BZC5KFB3QRCQ3hcmlasJKi3ut22RcDvhcnq1TOqygGzMJe%2BucMGOqUB%2BpN9o4kV5IF9AXOKJ5wvxjm3eiqmaRf7AyYnoKWvEvEHc8uayeZ%2FXJ8bK5ZphD1%2FcnzpVNCOUjmoN9twpKfVt5FBw5RgyUa9niP7vprejS8y%2BGnzjbpPeMMdQBzBc2fjmql2NEfoUgvMUJl%2BMamikjmF4LgmloDAOlu9OMaIhsvza%2BDaq6%2BrImdMYwjMkveQGMCZRpovsfz3SBDxbgbJ5rzdbQQw&X-Amz-Signature=456d2be9b0109ad3cdb19315872f6cdf999268b7864d2de2872edda23250b3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
