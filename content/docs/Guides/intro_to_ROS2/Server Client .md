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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE55JZ42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1Rh7lU004QnPOXnfNp0zD2Ic%2FtZ9dBTSbavAo0fnSnAiBcbiSGgzP6KS%2Bm05OXba9oZ2itLTS2XjFv0MKdDwu1xSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvI35A4MCfYPPQoaKtwD2m6wHcr2gu70%2Bb7JbtNuHeWI0gj87fJ%2BGz8dQ%2BxYeGMGpCKcVjlBqSHgyjJEQ3Lf%2BMASw8rLqCY3NP7o1LMqzjdvn43RSCrklIHar1zABqa%2FTX9raRNY9sfOOXXOIYtaXEIDgbGcB8wdTL30llLLEYPBU783Y6C9JOnd6Up9slxHgzqPJ9eWjp9Ilv0b8t%2BnwYZXzyFmi25k0ww8i7lwgzP%2B1LL5ydKK5AKtjMHB4mjmI1pyikFhF%2Fa6VSUSPzLbsFBcs5lryNZ03JU20tiw5nWBAPYXYoe2PJWriKMirQ8cYFH2HX0%2FhAhlhYZLgZTz%2BVhxIdGPhhcynPNBTMY6O9zTml%2BMvpRhPGtbGGuP8hJNjV%2FVdk5aA2sRvlXuI3eDBYfA2m7xSI9z%2FUYPpjFb4BTdKKhEQQuIc3pkKN0ZC19Y7x%2BImN1y%2FoWFEObWGmL5yyKOnOADppSlByc92zsl9GCN9a6YfxOKhPJFNpo4yPEcYPNY4LLuobx7Q75%2B%2BMw%2FtfXJQb3cw9%2FoewbS7Wa%2FuUYrH1i0oy%2F3K%2BFXh0JrxOAmlJEZPTFU3R9e5FBq34Aiq5A4zY%2BTY3udO4fnHLPBB6RW7E5ZtLpo06F1j0A7wgsPKA5LVEwlXQbpb3gwwdKsvQY6pgGs1wCRngA8nzf1ec%2B%2BEomfK6kK0QwOYQviSd9V2dCqT%2BmS%2F7XWV612mYO%2FwT3trk01wHQNiX8mYV0VOHpMMMcfJTxcgKswb8DduE1MFCISiflU8nRYmPdztA8y%2FSCPg2ZxpjL8VJ37x%2BRzzlTTSYIyBo3FTnH1q%2FMUCwcYV7WXWvPs3Es64GShalfZ56ZcY4UAW%2BJsB2LJ6yjHza5YyQtCN%2FM1Cq%2B7&X-Amz-Signature=762d8425b02bf524d6ffc36ac0d9c5cbe0615ce32d6935e17ead8f9c1a080138&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE55JZ42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1Rh7lU004QnPOXnfNp0zD2Ic%2FtZ9dBTSbavAo0fnSnAiBcbiSGgzP6KS%2Bm05OXba9oZ2itLTS2XjFv0MKdDwu1xSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvI35A4MCfYPPQoaKtwD2m6wHcr2gu70%2Bb7JbtNuHeWI0gj87fJ%2BGz8dQ%2BxYeGMGpCKcVjlBqSHgyjJEQ3Lf%2BMASw8rLqCY3NP7o1LMqzjdvn43RSCrklIHar1zABqa%2FTX9raRNY9sfOOXXOIYtaXEIDgbGcB8wdTL30llLLEYPBU783Y6C9JOnd6Up9slxHgzqPJ9eWjp9Ilv0b8t%2BnwYZXzyFmi25k0ww8i7lwgzP%2B1LL5ydKK5AKtjMHB4mjmI1pyikFhF%2Fa6VSUSPzLbsFBcs5lryNZ03JU20tiw5nWBAPYXYoe2PJWriKMirQ8cYFH2HX0%2FhAhlhYZLgZTz%2BVhxIdGPhhcynPNBTMY6O9zTml%2BMvpRhPGtbGGuP8hJNjV%2FVdk5aA2sRvlXuI3eDBYfA2m7xSI9z%2FUYPpjFb4BTdKKhEQQuIc3pkKN0ZC19Y7x%2BImN1y%2FoWFEObWGmL5yyKOnOADppSlByc92zsl9GCN9a6YfxOKhPJFNpo4yPEcYPNY4LLuobx7Q75%2B%2BMw%2FtfXJQb3cw9%2FoewbS7Wa%2FuUYrH1i0oy%2F3K%2BFXh0JrxOAmlJEZPTFU3R9e5FBq34Aiq5A4zY%2BTY3udO4fnHLPBB6RW7E5ZtLpo06F1j0A7wgsPKA5LVEwlXQbpb3gwwdKsvQY6pgGs1wCRngA8nzf1ec%2B%2BEomfK6kK0QwOYQviSd9V2dCqT%2BmS%2F7XWV612mYO%2FwT3trk01wHQNiX8mYV0VOHpMMMcfJTxcgKswb8DduE1MFCISiflU8nRYmPdztA8y%2FSCPg2ZxpjL8VJ37x%2BRzzlTTSYIyBo3FTnH1q%2FMUCwcYV7WXWvPs3Es64GShalfZ56ZcY4UAW%2BJsB2LJ6yjHza5YyQtCN%2FM1Cq%2B7&X-Amz-Signature=f35b14e337025931248f94bc68fee3c7b937bd1720bfdbb85e61378bdee0eb80&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE55JZ42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1Rh7lU004QnPOXnfNp0zD2Ic%2FtZ9dBTSbavAo0fnSnAiBcbiSGgzP6KS%2Bm05OXba9oZ2itLTS2XjFv0MKdDwu1xSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvI35A4MCfYPPQoaKtwD2m6wHcr2gu70%2Bb7JbtNuHeWI0gj87fJ%2BGz8dQ%2BxYeGMGpCKcVjlBqSHgyjJEQ3Lf%2BMASw8rLqCY3NP7o1LMqzjdvn43RSCrklIHar1zABqa%2FTX9raRNY9sfOOXXOIYtaXEIDgbGcB8wdTL30llLLEYPBU783Y6C9JOnd6Up9slxHgzqPJ9eWjp9Ilv0b8t%2BnwYZXzyFmi25k0ww8i7lwgzP%2B1LL5ydKK5AKtjMHB4mjmI1pyikFhF%2Fa6VSUSPzLbsFBcs5lryNZ03JU20tiw5nWBAPYXYoe2PJWriKMirQ8cYFH2HX0%2FhAhlhYZLgZTz%2BVhxIdGPhhcynPNBTMY6O9zTml%2BMvpRhPGtbGGuP8hJNjV%2FVdk5aA2sRvlXuI3eDBYfA2m7xSI9z%2FUYPpjFb4BTdKKhEQQuIc3pkKN0ZC19Y7x%2BImN1y%2FoWFEObWGmL5yyKOnOADppSlByc92zsl9GCN9a6YfxOKhPJFNpo4yPEcYPNY4LLuobx7Q75%2B%2BMw%2FtfXJQb3cw9%2FoewbS7Wa%2FuUYrH1i0oy%2F3K%2BFXh0JrxOAmlJEZPTFU3R9e5FBq34Aiq5A4zY%2BTY3udO4fnHLPBB6RW7E5ZtLpo06F1j0A7wgsPKA5LVEwlXQbpb3gwwdKsvQY6pgGs1wCRngA8nzf1ec%2B%2BEomfK6kK0QwOYQviSd9V2dCqT%2BmS%2F7XWV612mYO%2FwT3trk01wHQNiX8mYV0VOHpMMMcfJTxcgKswb8DduE1MFCISiflU8nRYmPdztA8y%2FSCPg2ZxpjL8VJ37x%2BRzzlTTSYIyBo3FTnH1q%2FMUCwcYV7WXWvPs3Es64GShalfZ56ZcY4UAW%2BJsB2LJ6yjHza5YyQtCN%2FM1Cq%2B7&X-Amz-Signature=d186f895f21487b72a11feecd7312abde1daec16815e8e9a8bf8c00306a1f41d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE55JZ42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1Rh7lU004QnPOXnfNp0zD2Ic%2FtZ9dBTSbavAo0fnSnAiBcbiSGgzP6KS%2Bm05OXba9oZ2itLTS2XjFv0MKdDwu1xSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvI35A4MCfYPPQoaKtwD2m6wHcr2gu70%2Bb7JbtNuHeWI0gj87fJ%2BGz8dQ%2BxYeGMGpCKcVjlBqSHgyjJEQ3Lf%2BMASw8rLqCY3NP7o1LMqzjdvn43RSCrklIHar1zABqa%2FTX9raRNY9sfOOXXOIYtaXEIDgbGcB8wdTL30llLLEYPBU783Y6C9JOnd6Up9slxHgzqPJ9eWjp9Ilv0b8t%2BnwYZXzyFmi25k0ww8i7lwgzP%2B1LL5ydKK5AKtjMHB4mjmI1pyikFhF%2Fa6VSUSPzLbsFBcs5lryNZ03JU20tiw5nWBAPYXYoe2PJWriKMirQ8cYFH2HX0%2FhAhlhYZLgZTz%2BVhxIdGPhhcynPNBTMY6O9zTml%2BMvpRhPGtbGGuP8hJNjV%2FVdk5aA2sRvlXuI3eDBYfA2m7xSI9z%2FUYPpjFb4BTdKKhEQQuIc3pkKN0ZC19Y7x%2BImN1y%2FoWFEObWGmL5yyKOnOADppSlByc92zsl9GCN9a6YfxOKhPJFNpo4yPEcYPNY4LLuobx7Q75%2B%2BMw%2FtfXJQb3cw9%2FoewbS7Wa%2FuUYrH1i0oy%2F3K%2BFXh0JrxOAmlJEZPTFU3R9e5FBq34Aiq5A4zY%2BTY3udO4fnHLPBB6RW7E5ZtLpo06F1j0A7wgsPKA5LVEwlXQbpb3gwwdKsvQY6pgGs1wCRngA8nzf1ec%2B%2BEomfK6kK0QwOYQviSd9V2dCqT%2BmS%2F7XWV612mYO%2FwT3trk01wHQNiX8mYV0VOHpMMMcfJTxcgKswb8DduE1MFCISiflU8nRYmPdztA8y%2FSCPg2ZxpjL8VJ37x%2BRzzlTTSYIyBo3FTnH1q%2FMUCwcYV7WXWvPs3Es64GShalfZ56ZcY4UAW%2BJsB2LJ6yjHza5YyQtCN%2FM1Cq%2B7&X-Amz-Signature=3b6afb26606de4916b983cc1401c4f241c9e855af37ef2ba666041b806318226&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE55JZ42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1Rh7lU004QnPOXnfNp0zD2Ic%2FtZ9dBTSbavAo0fnSnAiBcbiSGgzP6KS%2Bm05OXba9oZ2itLTS2XjFv0MKdDwu1xSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvI35A4MCfYPPQoaKtwD2m6wHcr2gu70%2Bb7JbtNuHeWI0gj87fJ%2BGz8dQ%2BxYeGMGpCKcVjlBqSHgyjJEQ3Lf%2BMASw8rLqCY3NP7o1LMqzjdvn43RSCrklIHar1zABqa%2FTX9raRNY9sfOOXXOIYtaXEIDgbGcB8wdTL30llLLEYPBU783Y6C9JOnd6Up9slxHgzqPJ9eWjp9Ilv0b8t%2BnwYZXzyFmi25k0ww8i7lwgzP%2B1LL5ydKK5AKtjMHB4mjmI1pyikFhF%2Fa6VSUSPzLbsFBcs5lryNZ03JU20tiw5nWBAPYXYoe2PJWriKMirQ8cYFH2HX0%2FhAhlhYZLgZTz%2BVhxIdGPhhcynPNBTMY6O9zTml%2BMvpRhPGtbGGuP8hJNjV%2FVdk5aA2sRvlXuI3eDBYfA2m7xSI9z%2FUYPpjFb4BTdKKhEQQuIc3pkKN0ZC19Y7x%2BImN1y%2FoWFEObWGmL5yyKOnOADppSlByc92zsl9GCN9a6YfxOKhPJFNpo4yPEcYPNY4LLuobx7Q75%2B%2BMw%2FtfXJQb3cw9%2FoewbS7Wa%2FuUYrH1i0oy%2F3K%2BFXh0JrxOAmlJEZPTFU3R9e5FBq34Aiq5A4zY%2BTY3udO4fnHLPBB6RW7E5ZtLpo06F1j0A7wgsPKA5LVEwlXQbpb3gwwdKsvQY6pgGs1wCRngA8nzf1ec%2B%2BEomfK6kK0QwOYQviSd9V2dCqT%2BmS%2F7XWV612mYO%2FwT3trk01wHQNiX8mYV0VOHpMMMcfJTxcgKswb8DduE1MFCISiflU8nRYmPdztA8y%2FSCPg2ZxpjL8VJ37x%2BRzzlTTSYIyBo3FTnH1q%2FMUCwcYV7WXWvPs3Es64GShalfZ56ZcY4UAW%2BJsB2LJ6yjHza5YyQtCN%2FM1Cq%2B7&X-Amz-Signature=7daf45e66a12e1429a1ebf0612731229496a2a946b17b3f89ca3fdf39b822338&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
