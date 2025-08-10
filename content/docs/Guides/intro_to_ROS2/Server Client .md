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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLYULEW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsY7jR%2B06lOAED8mpesVEfwpcDVLVLruSU%2BSjF5j08AIhAJQKRtOMiet88LeWvG37ouH8e%2BqgYxOrln36a3a6zVebKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOH%2FHJiDWRWwZB2eYq3APe0qYxtyoGQjVdQSJOKbkp1DGbaw2jYHLSF1Ubg4cSjlw%2Bof68ehcOT4XicdRB2v3Q6uAtf%2BOvGSKzXzqZVhj0aI1%2Bm9pLjzerSDwy1fLHp3RsxbuyYNUE2UVtKeFd2LlOthZ8Iw2r7pBTfB3%2BdiKxLOsNU33U%2FPpdLE91D%2FX0fOUpJSe7356rurt2Atmx5zcr6N6Q1aH3Qz4g8s07iGKoY%2FSO75h1LbVdd0mJ0u2PnJ5FN8Yn14kNsutXLfGRui7yPa6zXdnlijJXo0JOZi0TUT263uSjoTwRouAK78DIMYQkiSTdaNDpY2YKJI%2BaS96NAWIvjAqmGkyQ1w3Lat4sLEsztDqlsc4q0iQPZRXZ%2BXc77VvipTF%2FC0ZJZQMkVxyq0nIyNMz158vky8U%2BJbAlUG3O2Wj0xjUdKQDLGz4vdysUKSUPjf5nb8DdkLOLOT81QXMDISsGofhAmN80JGWT%2FV9x2i59LNdTFB67uQRKDO33zGMeGUhbiXSpGBZcq8UGWtDy7fptiJXQpY6%2BSRqZ12UYPUSreiegF%2BUy5CA0GNdINktPkVNkqUwOhe9ObcalsVeUVVENcyt%2BSx5%2BFTfP5h7qrpgG5ad1zkQnxh6zO3tcnBeD9mddFSoPPDDc7uHEBjqkAZ37QfGNV2yklZHfxFPmzBVhujU3eEb86gLGG2SlsgQE4Js3i%2FmAotErcDc2KLL6eG5ADkYAPtkRGSid10qWTdnDuYyacsILLoT6B%2F74X7v6DgpwbGUTtL1d63eZECKUpw0qYf23BvQCNzONFQHbHgHtui3L0z66f%2FL3sr7kmlp7ZpUnN8IZqxtaDUcQtX505G0hPqOjQEvcKs0nhp%2F5bS6%2Fj2En&X-Amz-Signature=29ed6f6b4cae150d9e05863d7f5c1419600fc90ad1a8be77eee136141bdd09b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLYULEW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsY7jR%2B06lOAED8mpesVEfwpcDVLVLruSU%2BSjF5j08AIhAJQKRtOMiet88LeWvG37ouH8e%2BqgYxOrln36a3a6zVebKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOH%2FHJiDWRWwZB2eYq3APe0qYxtyoGQjVdQSJOKbkp1DGbaw2jYHLSF1Ubg4cSjlw%2Bof68ehcOT4XicdRB2v3Q6uAtf%2BOvGSKzXzqZVhj0aI1%2Bm9pLjzerSDwy1fLHp3RsxbuyYNUE2UVtKeFd2LlOthZ8Iw2r7pBTfB3%2BdiKxLOsNU33U%2FPpdLE91D%2FX0fOUpJSe7356rurt2Atmx5zcr6N6Q1aH3Qz4g8s07iGKoY%2FSO75h1LbVdd0mJ0u2PnJ5FN8Yn14kNsutXLfGRui7yPa6zXdnlijJXo0JOZi0TUT263uSjoTwRouAK78DIMYQkiSTdaNDpY2YKJI%2BaS96NAWIvjAqmGkyQ1w3Lat4sLEsztDqlsc4q0iQPZRXZ%2BXc77VvipTF%2FC0ZJZQMkVxyq0nIyNMz158vky8U%2BJbAlUG3O2Wj0xjUdKQDLGz4vdysUKSUPjf5nb8DdkLOLOT81QXMDISsGofhAmN80JGWT%2FV9x2i59LNdTFB67uQRKDO33zGMeGUhbiXSpGBZcq8UGWtDy7fptiJXQpY6%2BSRqZ12UYPUSreiegF%2BUy5CA0GNdINktPkVNkqUwOhe9ObcalsVeUVVENcyt%2BSx5%2BFTfP5h7qrpgG5ad1zkQnxh6zO3tcnBeD9mddFSoPPDDc7uHEBjqkAZ37QfGNV2yklZHfxFPmzBVhujU3eEb86gLGG2SlsgQE4Js3i%2FmAotErcDc2KLL6eG5ADkYAPtkRGSid10qWTdnDuYyacsILLoT6B%2F74X7v6DgpwbGUTtL1d63eZECKUpw0qYf23BvQCNzONFQHbHgHtui3L0z66f%2FL3sr7kmlp7ZpUnN8IZqxtaDUcQtX505G0hPqOjQEvcKs0nhp%2F5bS6%2Fj2En&X-Amz-Signature=5abfe9cb533c1457652a5fb8be199cf09c5c394367164a695e539a8ce3611019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLYULEW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsY7jR%2B06lOAED8mpesVEfwpcDVLVLruSU%2BSjF5j08AIhAJQKRtOMiet88LeWvG37ouH8e%2BqgYxOrln36a3a6zVebKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOH%2FHJiDWRWwZB2eYq3APe0qYxtyoGQjVdQSJOKbkp1DGbaw2jYHLSF1Ubg4cSjlw%2Bof68ehcOT4XicdRB2v3Q6uAtf%2BOvGSKzXzqZVhj0aI1%2Bm9pLjzerSDwy1fLHp3RsxbuyYNUE2UVtKeFd2LlOthZ8Iw2r7pBTfB3%2BdiKxLOsNU33U%2FPpdLE91D%2FX0fOUpJSe7356rurt2Atmx5zcr6N6Q1aH3Qz4g8s07iGKoY%2FSO75h1LbVdd0mJ0u2PnJ5FN8Yn14kNsutXLfGRui7yPa6zXdnlijJXo0JOZi0TUT263uSjoTwRouAK78DIMYQkiSTdaNDpY2YKJI%2BaS96NAWIvjAqmGkyQ1w3Lat4sLEsztDqlsc4q0iQPZRXZ%2BXc77VvipTF%2FC0ZJZQMkVxyq0nIyNMz158vky8U%2BJbAlUG3O2Wj0xjUdKQDLGz4vdysUKSUPjf5nb8DdkLOLOT81QXMDISsGofhAmN80JGWT%2FV9x2i59LNdTFB67uQRKDO33zGMeGUhbiXSpGBZcq8UGWtDy7fptiJXQpY6%2BSRqZ12UYPUSreiegF%2BUy5CA0GNdINktPkVNkqUwOhe9ObcalsVeUVVENcyt%2BSx5%2BFTfP5h7qrpgG5ad1zkQnxh6zO3tcnBeD9mddFSoPPDDc7uHEBjqkAZ37QfGNV2yklZHfxFPmzBVhujU3eEb86gLGG2SlsgQE4Js3i%2FmAotErcDc2KLL6eG5ADkYAPtkRGSid10qWTdnDuYyacsILLoT6B%2F74X7v6DgpwbGUTtL1d63eZECKUpw0qYf23BvQCNzONFQHbHgHtui3L0z66f%2FL3sr7kmlp7ZpUnN8IZqxtaDUcQtX505G0hPqOjQEvcKs0nhp%2F5bS6%2Fj2En&X-Amz-Signature=01cb6833b6570f6a3ed132d663b51cd44e4bc9e9b5b9d61fb67a8471cf7411cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLYULEW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsY7jR%2B06lOAED8mpesVEfwpcDVLVLruSU%2BSjF5j08AIhAJQKRtOMiet88LeWvG37ouH8e%2BqgYxOrln36a3a6zVebKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOH%2FHJiDWRWwZB2eYq3APe0qYxtyoGQjVdQSJOKbkp1DGbaw2jYHLSF1Ubg4cSjlw%2Bof68ehcOT4XicdRB2v3Q6uAtf%2BOvGSKzXzqZVhj0aI1%2Bm9pLjzerSDwy1fLHp3RsxbuyYNUE2UVtKeFd2LlOthZ8Iw2r7pBTfB3%2BdiKxLOsNU33U%2FPpdLE91D%2FX0fOUpJSe7356rurt2Atmx5zcr6N6Q1aH3Qz4g8s07iGKoY%2FSO75h1LbVdd0mJ0u2PnJ5FN8Yn14kNsutXLfGRui7yPa6zXdnlijJXo0JOZi0TUT263uSjoTwRouAK78DIMYQkiSTdaNDpY2YKJI%2BaS96NAWIvjAqmGkyQ1w3Lat4sLEsztDqlsc4q0iQPZRXZ%2BXc77VvipTF%2FC0ZJZQMkVxyq0nIyNMz158vky8U%2BJbAlUG3O2Wj0xjUdKQDLGz4vdysUKSUPjf5nb8DdkLOLOT81QXMDISsGofhAmN80JGWT%2FV9x2i59LNdTFB67uQRKDO33zGMeGUhbiXSpGBZcq8UGWtDy7fptiJXQpY6%2BSRqZ12UYPUSreiegF%2BUy5CA0GNdINktPkVNkqUwOhe9ObcalsVeUVVENcyt%2BSx5%2BFTfP5h7qrpgG5ad1zkQnxh6zO3tcnBeD9mddFSoPPDDc7uHEBjqkAZ37QfGNV2yklZHfxFPmzBVhujU3eEb86gLGG2SlsgQE4Js3i%2FmAotErcDc2KLL6eG5ADkYAPtkRGSid10qWTdnDuYyacsILLoT6B%2F74X7v6DgpwbGUTtL1d63eZECKUpw0qYf23BvQCNzONFQHbHgHtui3L0z66f%2FL3sr7kmlp7ZpUnN8IZqxtaDUcQtX505G0hPqOjQEvcKs0nhp%2F5bS6%2Fj2En&X-Amz-Signature=6e6708d42e7031dad952f39287a5abb4df5eb3632de16f8a5db83a1894d39604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLYULEW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsY7jR%2B06lOAED8mpesVEfwpcDVLVLruSU%2BSjF5j08AIhAJQKRtOMiet88LeWvG37ouH8e%2BqgYxOrln36a3a6zVebKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOH%2FHJiDWRWwZB2eYq3APe0qYxtyoGQjVdQSJOKbkp1DGbaw2jYHLSF1Ubg4cSjlw%2Bof68ehcOT4XicdRB2v3Q6uAtf%2BOvGSKzXzqZVhj0aI1%2Bm9pLjzerSDwy1fLHp3RsxbuyYNUE2UVtKeFd2LlOthZ8Iw2r7pBTfB3%2BdiKxLOsNU33U%2FPpdLE91D%2FX0fOUpJSe7356rurt2Atmx5zcr6N6Q1aH3Qz4g8s07iGKoY%2FSO75h1LbVdd0mJ0u2PnJ5FN8Yn14kNsutXLfGRui7yPa6zXdnlijJXo0JOZi0TUT263uSjoTwRouAK78DIMYQkiSTdaNDpY2YKJI%2BaS96NAWIvjAqmGkyQ1w3Lat4sLEsztDqlsc4q0iQPZRXZ%2BXc77VvipTF%2FC0ZJZQMkVxyq0nIyNMz158vky8U%2BJbAlUG3O2Wj0xjUdKQDLGz4vdysUKSUPjf5nb8DdkLOLOT81QXMDISsGofhAmN80JGWT%2FV9x2i59LNdTFB67uQRKDO33zGMeGUhbiXSpGBZcq8UGWtDy7fptiJXQpY6%2BSRqZ12UYPUSreiegF%2BUy5CA0GNdINktPkVNkqUwOhe9ObcalsVeUVVENcyt%2BSx5%2BFTfP5h7qrpgG5ad1zkQnxh6zO3tcnBeD9mddFSoPPDDc7uHEBjqkAZ37QfGNV2yklZHfxFPmzBVhujU3eEb86gLGG2SlsgQE4Js3i%2FmAotErcDc2KLL6eG5ADkYAPtkRGSid10qWTdnDuYyacsILLoT6B%2F74X7v6DgpwbGUTtL1d63eZECKUpw0qYf23BvQCNzONFQHbHgHtui3L0z66f%2FL3sr7kmlp7ZpUnN8IZqxtaDUcQtX505G0hPqOjQEvcKs0nhp%2F5bS6%2Fj2En&X-Amz-Signature=70fe1faf2137e80525af1e278bc213f075679849a662b573670cdab9f3a3e543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
