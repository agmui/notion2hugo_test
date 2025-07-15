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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZEE4X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHE8L%2F9YHknTJhi8nmwjElKl3DhpOCk9Z9132Fr5ZxBwAiEAsQkECR%2B03Fs7OF%2F3obxOOo1YYx%2BZdGrpTwskdj50mHAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAaZ7INKyuYY7D1qsCrcA8bNeasy%2BpgcfV5hugWIimLiNeHhCP6eIeZ3zABPV86THQOx8Cy3fk4jG4D4shNTa%2BG%2FxpJpOxFeOx%2Ber2vC98zODgd3tbCGAt1H55gsMz5Ly5mvnihMjeFDvmSD3sCcito4hETuVNJeOWAVL2j%2BDZwhivrF62FFitThUjDjhjbw4aWiay3zsO9mTIEKvcGul6eqn90n6dawDmceVwT0EAebzqZ3%2Fvg9oKaz5tAt8ngszPkR1PXPy7RvWMivEOk9A6RusbHbmDdBJN6HncWp6z4QiLR7DNmiOHKAyGI631mrr%2BfoCO77jgUT4iKem19Q5mac3XNE2biWFxiR3Zbl4%2BS91qZmndmHkVqu16y%2B%2FSl1KSHm0Gk%2BHQhngQfZC8DETsdFM41gcSjcOk2SyYT4REp9Ia%2Bb96gJYqmpr%2BTUgLjtYSIzteNIeLNoXD4NFQD%2F88ehdoF0ykrj4Y1jw8nFGsznMxD76%2FDNrQ%2B28pvuPU1ZejURI7WvS2QUgGvX6RmzcXW9EYYOR7HpFudfejcVrILbKmb3loeGxzPCab9d0z0XRn1umVzPGZ3fZ748NkXXCtryPfCoat9HnjRppP51RzLmywprbO1TKi3yEAk9nm5oOeYsQl5hRzI%2Bm8VuMKmB2MMGOqUBfD2ZxgMMCpvaUjejoljo4WC2mvMuamEpmfAsuwG1zgspQGjmHkYqYkHCw2y0wnTLEXOi1L%2F1g7KGjjylc4OdJFY1Fa%2F1bYmLsmK04lV%2Bes7nzbWlNxmq%2BnLmAmBC%2Fxl3sZtglVqbI0CG2aiTF88uyn%2BFYt%2BJeZWV4OL3UvrgiTjpiWkpSDKRv6rXZ1SWRTKIWQ2OEWLx5XWg82wDIyZ%2BXoS5oeh3&X-Amz-Signature=138a560e1c82b3cc6cb05fda4f7c6314a9830a516f5c69a7f4034deeee221a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZEE4X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHE8L%2F9YHknTJhi8nmwjElKl3DhpOCk9Z9132Fr5ZxBwAiEAsQkECR%2B03Fs7OF%2F3obxOOo1YYx%2BZdGrpTwskdj50mHAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAaZ7INKyuYY7D1qsCrcA8bNeasy%2BpgcfV5hugWIimLiNeHhCP6eIeZ3zABPV86THQOx8Cy3fk4jG4D4shNTa%2BG%2FxpJpOxFeOx%2Ber2vC98zODgd3tbCGAt1H55gsMz5Ly5mvnihMjeFDvmSD3sCcito4hETuVNJeOWAVL2j%2BDZwhivrF62FFitThUjDjhjbw4aWiay3zsO9mTIEKvcGul6eqn90n6dawDmceVwT0EAebzqZ3%2Fvg9oKaz5tAt8ngszPkR1PXPy7RvWMivEOk9A6RusbHbmDdBJN6HncWp6z4QiLR7DNmiOHKAyGI631mrr%2BfoCO77jgUT4iKem19Q5mac3XNE2biWFxiR3Zbl4%2BS91qZmndmHkVqu16y%2B%2FSl1KSHm0Gk%2BHQhngQfZC8DETsdFM41gcSjcOk2SyYT4REp9Ia%2Bb96gJYqmpr%2BTUgLjtYSIzteNIeLNoXD4NFQD%2F88ehdoF0ykrj4Y1jw8nFGsznMxD76%2FDNrQ%2B28pvuPU1ZejURI7WvS2QUgGvX6RmzcXW9EYYOR7HpFudfejcVrILbKmb3loeGxzPCab9d0z0XRn1umVzPGZ3fZ748NkXXCtryPfCoat9HnjRppP51RzLmywprbO1TKi3yEAk9nm5oOeYsQl5hRzI%2Bm8VuMKmB2MMGOqUBfD2ZxgMMCpvaUjejoljo4WC2mvMuamEpmfAsuwG1zgspQGjmHkYqYkHCw2y0wnTLEXOi1L%2F1g7KGjjylc4OdJFY1Fa%2F1bYmLsmK04lV%2Bes7nzbWlNxmq%2BnLmAmBC%2Fxl3sZtglVqbI0CG2aiTF88uyn%2BFYt%2BJeZWV4OL3UvrgiTjpiWkpSDKRv6rXZ1SWRTKIWQ2OEWLx5XWg82wDIyZ%2BXoS5oeh3&X-Amz-Signature=5864a8ddde7fcc77ecd8fcd732d20adbbdf43de80049ee7d0144e6aa03c75758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZEE4X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHE8L%2F9YHknTJhi8nmwjElKl3DhpOCk9Z9132Fr5ZxBwAiEAsQkECR%2B03Fs7OF%2F3obxOOo1YYx%2BZdGrpTwskdj50mHAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAaZ7INKyuYY7D1qsCrcA8bNeasy%2BpgcfV5hugWIimLiNeHhCP6eIeZ3zABPV86THQOx8Cy3fk4jG4D4shNTa%2BG%2FxpJpOxFeOx%2Ber2vC98zODgd3tbCGAt1H55gsMz5Ly5mvnihMjeFDvmSD3sCcito4hETuVNJeOWAVL2j%2BDZwhivrF62FFitThUjDjhjbw4aWiay3zsO9mTIEKvcGul6eqn90n6dawDmceVwT0EAebzqZ3%2Fvg9oKaz5tAt8ngszPkR1PXPy7RvWMivEOk9A6RusbHbmDdBJN6HncWp6z4QiLR7DNmiOHKAyGI631mrr%2BfoCO77jgUT4iKem19Q5mac3XNE2biWFxiR3Zbl4%2BS91qZmndmHkVqu16y%2B%2FSl1KSHm0Gk%2BHQhngQfZC8DETsdFM41gcSjcOk2SyYT4REp9Ia%2Bb96gJYqmpr%2BTUgLjtYSIzteNIeLNoXD4NFQD%2F88ehdoF0ykrj4Y1jw8nFGsznMxD76%2FDNrQ%2B28pvuPU1ZejURI7WvS2QUgGvX6RmzcXW9EYYOR7HpFudfejcVrILbKmb3loeGxzPCab9d0z0XRn1umVzPGZ3fZ748NkXXCtryPfCoat9HnjRppP51RzLmywprbO1TKi3yEAk9nm5oOeYsQl5hRzI%2Bm8VuMKmB2MMGOqUBfD2ZxgMMCpvaUjejoljo4WC2mvMuamEpmfAsuwG1zgspQGjmHkYqYkHCw2y0wnTLEXOi1L%2F1g7KGjjylc4OdJFY1Fa%2F1bYmLsmK04lV%2Bes7nzbWlNxmq%2BnLmAmBC%2Fxl3sZtglVqbI0CG2aiTF88uyn%2BFYt%2BJeZWV4OL3UvrgiTjpiWkpSDKRv6rXZ1SWRTKIWQ2OEWLx5XWg82wDIyZ%2BXoS5oeh3&X-Amz-Signature=deef23ebc0001e334f3242c34de0538b6b3d102e974a9ae72e88b7c624db486a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZEE4X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHE8L%2F9YHknTJhi8nmwjElKl3DhpOCk9Z9132Fr5ZxBwAiEAsQkECR%2B03Fs7OF%2F3obxOOo1YYx%2BZdGrpTwskdj50mHAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAaZ7INKyuYY7D1qsCrcA8bNeasy%2BpgcfV5hugWIimLiNeHhCP6eIeZ3zABPV86THQOx8Cy3fk4jG4D4shNTa%2BG%2FxpJpOxFeOx%2Ber2vC98zODgd3tbCGAt1H55gsMz5Ly5mvnihMjeFDvmSD3sCcito4hETuVNJeOWAVL2j%2BDZwhivrF62FFitThUjDjhjbw4aWiay3zsO9mTIEKvcGul6eqn90n6dawDmceVwT0EAebzqZ3%2Fvg9oKaz5tAt8ngszPkR1PXPy7RvWMivEOk9A6RusbHbmDdBJN6HncWp6z4QiLR7DNmiOHKAyGI631mrr%2BfoCO77jgUT4iKem19Q5mac3XNE2biWFxiR3Zbl4%2BS91qZmndmHkVqu16y%2B%2FSl1KSHm0Gk%2BHQhngQfZC8DETsdFM41gcSjcOk2SyYT4REp9Ia%2Bb96gJYqmpr%2BTUgLjtYSIzteNIeLNoXD4NFQD%2F88ehdoF0ykrj4Y1jw8nFGsznMxD76%2FDNrQ%2B28pvuPU1ZejURI7WvS2QUgGvX6RmzcXW9EYYOR7HpFudfejcVrILbKmb3loeGxzPCab9d0z0XRn1umVzPGZ3fZ748NkXXCtryPfCoat9HnjRppP51RzLmywprbO1TKi3yEAk9nm5oOeYsQl5hRzI%2Bm8VuMKmB2MMGOqUBfD2ZxgMMCpvaUjejoljo4WC2mvMuamEpmfAsuwG1zgspQGjmHkYqYkHCw2y0wnTLEXOi1L%2F1g7KGjjylc4OdJFY1Fa%2F1bYmLsmK04lV%2Bes7nzbWlNxmq%2BnLmAmBC%2Fxl3sZtglVqbI0CG2aiTF88uyn%2BFYt%2BJeZWV4OL3UvrgiTjpiWkpSDKRv6rXZ1SWRTKIWQ2OEWLx5XWg82wDIyZ%2BXoS5oeh3&X-Amz-Signature=93de822bf097181fe1b1caced540a0d0f16c9d63b17ca0fed01d381d093b54d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZEE4X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHE8L%2F9YHknTJhi8nmwjElKl3DhpOCk9Z9132Fr5ZxBwAiEAsQkECR%2B03Fs7OF%2F3obxOOo1YYx%2BZdGrpTwskdj50mHAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAaZ7INKyuYY7D1qsCrcA8bNeasy%2BpgcfV5hugWIimLiNeHhCP6eIeZ3zABPV86THQOx8Cy3fk4jG4D4shNTa%2BG%2FxpJpOxFeOx%2Ber2vC98zODgd3tbCGAt1H55gsMz5Ly5mvnihMjeFDvmSD3sCcito4hETuVNJeOWAVL2j%2BDZwhivrF62FFitThUjDjhjbw4aWiay3zsO9mTIEKvcGul6eqn90n6dawDmceVwT0EAebzqZ3%2Fvg9oKaz5tAt8ngszPkR1PXPy7RvWMivEOk9A6RusbHbmDdBJN6HncWp6z4QiLR7DNmiOHKAyGI631mrr%2BfoCO77jgUT4iKem19Q5mac3XNE2biWFxiR3Zbl4%2BS91qZmndmHkVqu16y%2B%2FSl1KSHm0Gk%2BHQhngQfZC8DETsdFM41gcSjcOk2SyYT4REp9Ia%2Bb96gJYqmpr%2BTUgLjtYSIzteNIeLNoXD4NFQD%2F88ehdoF0ykrj4Y1jw8nFGsznMxD76%2FDNrQ%2B28pvuPU1ZejURI7WvS2QUgGvX6RmzcXW9EYYOR7HpFudfejcVrILbKmb3loeGxzPCab9d0z0XRn1umVzPGZ3fZ748NkXXCtryPfCoat9HnjRppP51RzLmywprbO1TKi3yEAk9nm5oOeYsQl5hRzI%2Bm8VuMKmB2MMGOqUBfD2ZxgMMCpvaUjejoljo4WC2mvMuamEpmfAsuwG1zgspQGjmHkYqYkHCw2y0wnTLEXOi1L%2F1g7KGjjylc4OdJFY1Fa%2F1bYmLsmK04lV%2Bes7nzbWlNxmq%2BnLmAmBC%2Fxl3sZtglVqbI0CG2aiTF88uyn%2BFYt%2BJeZWV4OL3UvrgiTjpiWkpSDKRv6rXZ1SWRTKIWQ2OEWLx5XWg82wDIyZ%2BXoS5oeh3&X-Amz-Signature=27cacd201a53456ee142512f972cb48b0929744fbe12effd1536f0c27da706c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
