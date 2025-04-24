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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIECCHQJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuap7Ul%2Bv5hzeEY6g0iaD1pp2w9ZaPztgDgPlIReHFWAiEAwz88FH%2BAsxDCYo87xoNq5BdHHVqD5I1GOhW9eWkU%2BqIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDMx0rBi1vorPL79JhircAwIfDahBpc4YDvKWaa%2FW5Y%2BrV1thr9oLz4jODZxKW%2Bm%2Fql3M74DNxNZ3gmdi4qzqxHBwwWwHuN5ePIxJZjO2T0Ng%2BKHGlCnqdIQu5gIA7%2BFIJqFtbD0HtSDeXjK7yJmcJgZOeypUebghgFgeTYbxTLTK5HCJHsZNfrFdsQJ5CEgEZIh8axvirg9%2BwxZ6mXYOuU%2BPcbxw6zCUAH3EZDyF8FqyRkJRya4pEug%2B6LDTVBb%2FoqhX%2B1bgjm7Qq2f%2FYG4cLgkydWBYvtxkp2Qt3P3BVNcGToFTftJIcDrmgGcdyIwsUeOFkuETaj3OfVyAbWjSdAn3baF%2B05fVrbV8uZji3YDqki%2BQyefDCqx7noTyeEiOWjttYqwnFcjA8l9vFrFdY769wJmsCm4ymnql2lBHpGqcTR2zD%2FJeMqZyNGIddmiJ%2BowOJcogQo9GOXxBba0lN325Sb0Bw6zWAcfvj7XYGhO21Sdz0uUFeZktdKJJ66IPZgXpAWuM0FZsqXVwrV5CPbSqwKNkf%2FKPcJd9h%2BSuFdXW9YoCJc6ciPOpAsCcPoAGwJsDhovAU72iXlbFBOwtbujQ1kiChU7fxRgIUU9u9Z9O3t5VTZdE7nj3w65lwRXIhkbSZWYCRoqUpD1cMNPaqsAGOqUBItrpLbB2gnDkqifat5F5uRGT1KkFWFNbSGITCaVUu6LCVZun0MWxrAPuR39BFSS%2BGF4h9kyzX5frtwxAs7wCS6HWQZ4fJ9IQVGsOG9QfBDZis2jf2eYtXUDQkxe2piLKNSiXmMcR3JA%2Bxia%2FHuNp5Xbsjhtn34X81ZacsIWA96rAbF%2FXlXsbwLcYQe3x8D%2B1Q01SUOs176GS0sL%2BvoIe2wBJoq6J&X-Amz-Signature=52128d8d5908319138da29e0fbce566947c2f5acd6e628a7229eb3b628cb3453&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIECCHQJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuap7Ul%2Bv5hzeEY6g0iaD1pp2w9ZaPztgDgPlIReHFWAiEAwz88FH%2BAsxDCYo87xoNq5BdHHVqD5I1GOhW9eWkU%2BqIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDMx0rBi1vorPL79JhircAwIfDahBpc4YDvKWaa%2FW5Y%2BrV1thr9oLz4jODZxKW%2Bm%2Fql3M74DNxNZ3gmdi4qzqxHBwwWwHuN5ePIxJZjO2T0Ng%2BKHGlCnqdIQu5gIA7%2BFIJqFtbD0HtSDeXjK7yJmcJgZOeypUebghgFgeTYbxTLTK5HCJHsZNfrFdsQJ5CEgEZIh8axvirg9%2BwxZ6mXYOuU%2BPcbxw6zCUAH3EZDyF8FqyRkJRya4pEug%2B6LDTVBb%2FoqhX%2B1bgjm7Qq2f%2FYG4cLgkydWBYvtxkp2Qt3P3BVNcGToFTftJIcDrmgGcdyIwsUeOFkuETaj3OfVyAbWjSdAn3baF%2B05fVrbV8uZji3YDqki%2BQyefDCqx7noTyeEiOWjttYqwnFcjA8l9vFrFdY769wJmsCm4ymnql2lBHpGqcTR2zD%2FJeMqZyNGIddmiJ%2BowOJcogQo9GOXxBba0lN325Sb0Bw6zWAcfvj7XYGhO21Sdz0uUFeZktdKJJ66IPZgXpAWuM0FZsqXVwrV5CPbSqwKNkf%2FKPcJd9h%2BSuFdXW9YoCJc6ciPOpAsCcPoAGwJsDhovAU72iXlbFBOwtbujQ1kiChU7fxRgIUU9u9Z9O3t5VTZdE7nj3w65lwRXIhkbSZWYCRoqUpD1cMNPaqsAGOqUBItrpLbB2gnDkqifat5F5uRGT1KkFWFNbSGITCaVUu6LCVZun0MWxrAPuR39BFSS%2BGF4h9kyzX5frtwxAs7wCS6HWQZ4fJ9IQVGsOG9QfBDZis2jf2eYtXUDQkxe2piLKNSiXmMcR3JA%2Bxia%2FHuNp5Xbsjhtn34X81ZacsIWA96rAbF%2FXlXsbwLcYQe3x8D%2B1Q01SUOs176GS0sL%2BvoIe2wBJoq6J&X-Amz-Signature=470f5a5792e4f360eac0ff6db522751fd26067678aae67a5e349618e6eb5ecfe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIECCHQJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuap7Ul%2Bv5hzeEY6g0iaD1pp2w9ZaPztgDgPlIReHFWAiEAwz88FH%2BAsxDCYo87xoNq5BdHHVqD5I1GOhW9eWkU%2BqIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDMx0rBi1vorPL79JhircAwIfDahBpc4YDvKWaa%2FW5Y%2BrV1thr9oLz4jODZxKW%2Bm%2Fql3M74DNxNZ3gmdi4qzqxHBwwWwHuN5ePIxJZjO2T0Ng%2BKHGlCnqdIQu5gIA7%2BFIJqFtbD0HtSDeXjK7yJmcJgZOeypUebghgFgeTYbxTLTK5HCJHsZNfrFdsQJ5CEgEZIh8axvirg9%2BwxZ6mXYOuU%2BPcbxw6zCUAH3EZDyF8FqyRkJRya4pEug%2B6LDTVBb%2FoqhX%2B1bgjm7Qq2f%2FYG4cLgkydWBYvtxkp2Qt3P3BVNcGToFTftJIcDrmgGcdyIwsUeOFkuETaj3OfVyAbWjSdAn3baF%2B05fVrbV8uZji3YDqki%2BQyefDCqx7noTyeEiOWjttYqwnFcjA8l9vFrFdY769wJmsCm4ymnql2lBHpGqcTR2zD%2FJeMqZyNGIddmiJ%2BowOJcogQo9GOXxBba0lN325Sb0Bw6zWAcfvj7XYGhO21Sdz0uUFeZktdKJJ66IPZgXpAWuM0FZsqXVwrV5CPbSqwKNkf%2FKPcJd9h%2BSuFdXW9YoCJc6ciPOpAsCcPoAGwJsDhovAU72iXlbFBOwtbujQ1kiChU7fxRgIUU9u9Z9O3t5VTZdE7nj3w65lwRXIhkbSZWYCRoqUpD1cMNPaqsAGOqUBItrpLbB2gnDkqifat5F5uRGT1KkFWFNbSGITCaVUu6LCVZun0MWxrAPuR39BFSS%2BGF4h9kyzX5frtwxAs7wCS6HWQZ4fJ9IQVGsOG9QfBDZis2jf2eYtXUDQkxe2piLKNSiXmMcR3JA%2Bxia%2FHuNp5Xbsjhtn34X81ZacsIWA96rAbF%2FXlXsbwLcYQe3x8D%2B1Q01SUOs176GS0sL%2BvoIe2wBJoq6J&X-Amz-Signature=a3358c7aaa7ca267ee7847a538d935684e5f46b6b7de6bc45058476a4992e29a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIECCHQJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuap7Ul%2Bv5hzeEY6g0iaD1pp2w9ZaPztgDgPlIReHFWAiEAwz88FH%2BAsxDCYo87xoNq5BdHHVqD5I1GOhW9eWkU%2BqIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDMx0rBi1vorPL79JhircAwIfDahBpc4YDvKWaa%2FW5Y%2BrV1thr9oLz4jODZxKW%2Bm%2Fql3M74DNxNZ3gmdi4qzqxHBwwWwHuN5ePIxJZjO2T0Ng%2BKHGlCnqdIQu5gIA7%2BFIJqFtbD0HtSDeXjK7yJmcJgZOeypUebghgFgeTYbxTLTK5HCJHsZNfrFdsQJ5CEgEZIh8axvirg9%2BwxZ6mXYOuU%2BPcbxw6zCUAH3EZDyF8FqyRkJRya4pEug%2B6LDTVBb%2FoqhX%2B1bgjm7Qq2f%2FYG4cLgkydWBYvtxkp2Qt3P3BVNcGToFTftJIcDrmgGcdyIwsUeOFkuETaj3OfVyAbWjSdAn3baF%2B05fVrbV8uZji3YDqki%2BQyefDCqx7noTyeEiOWjttYqwnFcjA8l9vFrFdY769wJmsCm4ymnql2lBHpGqcTR2zD%2FJeMqZyNGIddmiJ%2BowOJcogQo9GOXxBba0lN325Sb0Bw6zWAcfvj7XYGhO21Sdz0uUFeZktdKJJ66IPZgXpAWuM0FZsqXVwrV5CPbSqwKNkf%2FKPcJd9h%2BSuFdXW9YoCJc6ciPOpAsCcPoAGwJsDhovAU72iXlbFBOwtbujQ1kiChU7fxRgIUU9u9Z9O3t5VTZdE7nj3w65lwRXIhkbSZWYCRoqUpD1cMNPaqsAGOqUBItrpLbB2gnDkqifat5F5uRGT1KkFWFNbSGITCaVUu6LCVZun0MWxrAPuR39BFSS%2BGF4h9kyzX5frtwxAs7wCS6HWQZ4fJ9IQVGsOG9QfBDZis2jf2eYtXUDQkxe2piLKNSiXmMcR3JA%2Bxia%2FHuNp5Xbsjhtn34X81ZacsIWA96rAbF%2FXlXsbwLcYQe3x8D%2B1Q01SUOs176GS0sL%2BvoIe2wBJoq6J&X-Amz-Signature=c42732ac2f704de6279c62f3bc243bc61b18a8cd8ca0acdcac214d4a5601cd52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIECCHQJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuap7Ul%2Bv5hzeEY6g0iaD1pp2w9ZaPztgDgPlIReHFWAiEAwz88FH%2BAsxDCYo87xoNq5BdHHVqD5I1GOhW9eWkU%2BqIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDMx0rBi1vorPL79JhircAwIfDahBpc4YDvKWaa%2FW5Y%2BrV1thr9oLz4jODZxKW%2Bm%2Fql3M74DNxNZ3gmdi4qzqxHBwwWwHuN5ePIxJZjO2T0Ng%2BKHGlCnqdIQu5gIA7%2BFIJqFtbD0HtSDeXjK7yJmcJgZOeypUebghgFgeTYbxTLTK5HCJHsZNfrFdsQJ5CEgEZIh8axvirg9%2BwxZ6mXYOuU%2BPcbxw6zCUAH3EZDyF8FqyRkJRya4pEug%2B6LDTVBb%2FoqhX%2B1bgjm7Qq2f%2FYG4cLgkydWBYvtxkp2Qt3P3BVNcGToFTftJIcDrmgGcdyIwsUeOFkuETaj3OfVyAbWjSdAn3baF%2B05fVrbV8uZji3YDqki%2BQyefDCqx7noTyeEiOWjttYqwnFcjA8l9vFrFdY769wJmsCm4ymnql2lBHpGqcTR2zD%2FJeMqZyNGIddmiJ%2BowOJcogQo9GOXxBba0lN325Sb0Bw6zWAcfvj7XYGhO21Sdz0uUFeZktdKJJ66IPZgXpAWuM0FZsqXVwrV5CPbSqwKNkf%2FKPcJd9h%2BSuFdXW9YoCJc6ciPOpAsCcPoAGwJsDhovAU72iXlbFBOwtbujQ1kiChU7fxRgIUU9u9Z9O3t5VTZdE7nj3w65lwRXIhkbSZWYCRoqUpD1cMNPaqsAGOqUBItrpLbB2gnDkqifat5F5uRGT1KkFWFNbSGITCaVUu6LCVZun0MWxrAPuR39BFSS%2BGF4h9kyzX5frtwxAs7wCS6HWQZ4fJ9IQVGsOG9QfBDZis2jf2eYtXUDQkxe2piLKNSiXmMcR3JA%2Bxia%2FHuNp5Xbsjhtn34X81ZacsIWA96rAbF%2FXlXsbwLcYQe3x8D%2B1Q01SUOs176GS0sL%2BvoIe2wBJoq6J&X-Amz-Signature=dd9fd32b165719263356d75f49e0e085559ad9c475aff0e98f2019b7884afc83&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
