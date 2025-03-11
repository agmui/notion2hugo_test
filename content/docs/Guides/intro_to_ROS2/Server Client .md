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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7ZNWZZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHJLotueRMdf8ESc5C0hOK4sagfWAQRhILstFXm4V%2FX8AiA08ujBAhkwH9qkWHmmV9xc2a3s2qHxy7zvISS2AYIZcyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA1ezKIJgJrq9YbdKtwDigTfbs3W5WBsynfA8JcLjwu4eGwxKVuZEYK6HK%2BUSCl76YiTaNgDDpEZIWYWZaw4uGed0ljm3La07Pfl%2Bs%2B9j5E9xphZFtzjUvt1RV9kZWZGAfNmuYeQXqAYPvpzGQAUJ8zHwHkL4hZAwFz2PVhYyBfQMFFC%2BMAPIEiftbOQBOYO5cV%2BRBSQBmkxsVwNXfiX9f1P0YINLBOGygq0td8sBZhBCyfgBfMfhtK9AxxHL0yy%2BWHVdBlTNZu%2BPt3amKxAbiinlIZ0qlRCp9dMSajaW27rmC0bBvVzXzoCTsHnTOLv7ox92CWX0PihrLK18JryPvRZ0S0etUSGaiHiqFaMSlvUvntBvJ7GYGiKjkPBq0ZPRIkYH0oTirJHVz0UoFqMSNp95d%2Bq0IPrfJt%2FdRNNMeJlv7fSo3b7dreNq9NsurSiPfQjAaFKgNd9O7OltAXICzbBvzjNWOst%2FWBj2WgNlyPk95p0KbfITywGx4aR4d6p0fu6WSbPS6SknoxC42SY6F4vs5aaU5Bq5Ox%2Bh4TtcfWy8JjcnUzfvPcp8sxtpPUi4Dg8sQUNX61lYP4PfO%2BQdovpl2GQzPaxM2UOEkSxxg%2Fh2a9RaJilL%2B0HXyPvZ8S4Ve3E7EtHiKNqnEYw1MrAvgY6pgE3ej5XnAmhGZl%2F59XNypwlidJL8x9j3bj1qpp%2Fl5sLD%2Bg2ph3ChrstKZoA0JAKenbNFQDOF7i21JaSEP5MgN2esqTZkesZavpzZ1PA2F2H8RCVkkhELT%2BxAqUw3qFUEp%2FVAy%2FmaharRK5NVmLHvq7umCdPNNIjviA0Pv%2FyvDMMzlwTtyk3Y1T8cSEIQxUs6BahG0elVRC32oWe4oxspKaMoRaWchZI&X-Amz-Signature=54e9f124ca7b3f635a6b2f2e452872347621b6620fc6a10b74558b3e9e5eeed0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7ZNWZZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHJLotueRMdf8ESc5C0hOK4sagfWAQRhILstFXm4V%2FX8AiA08ujBAhkwH9qkWHmmV9xc2a3s2qHxy7zvISS2AYIZcyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA1ezKIJgJrq9YbdKtwDigTfbs3W5WBsynfA8JcLjwu4eGwxKVuZEYK6HK%2BUSCl76YiTaNgDDpEZIWYWZaw4uGed0ljm3La07Pfl%2Bs%2B9j5E9xphZFtzjUvt1RV9kZWZGAfNmuYeQXqAYPvpzGQAUJ8zHwHkL4hZAwFz2PVhYyBfQMFFC%2BMAPIEiftbOQBOYO5cV%2BRBSQBmkxsVwNXfiX9f1P0YINLBOGygq0td8sBZhBCyfgBfMfhtK9AxxHL0yy%2BWHVdBlTNZu%2BPt3amKxAbiinlIZ0qlRCp9dMSajaW27rmC0bBvVzXzoCTsHnTOLv7ox92CWX0PihrLK18JryPvRZ0S0etUSGaiHiqFaMSlvUvntBvJ7GYGiKjkPBq0ZPRIkYH0oTirJHVz0UoFqMSNp95d%2Bq0IPrfJt%2FdRNNMeJlv7fSo3b7dreNq9NsurSiPfQjAaFKgNd9O7OltAXICzbBvzjNWOst%2FWBj2WgNlyPk95p0KbfITywGx4aR4d6p0fu6WSbPS6SknoxC42SY6F4vs5aaU5Bq5Ox%2Bh4TtcfWy8JjcnUzfvPcp8sxtpPUi4Dg8sQUNX61lYP4PfO%2BQdovpl2GQzPaxM2UOEkSxxg%2Fh2a9RaJilL%2B0HXyPvZ8S4Ve3E7EtHiKNqnEYw1MrAvgY6pgE3ej5XnAmhGZl%2F59XNypwlidJL8x9j3bj1qpp%2Fl5sLD%2Bg2ph3ChrstKZoA0JAKenbNFQDOF7i21JaSEP5MgN2esqTZkesZavpzZ1PA2F2H8RCVkkhELT%2BxAqUw3qFUEp%2FVAy%2FmaharRK5NVmLHvq7umCdPNNIjviA0Pv%2FyvDMMzlwTtyk3Y1T8cSEIQxUs6BahG0elVRC32oWe4oxspKaMoRaWchZI&X-Amz-Signature=48c57a428eb4f59090fe32b5d05c04a6b9cf44baafd4a78db9f5f08331deb04f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7ZNWZZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHJLotueRMdf8ESc5C0hOK4sagfWAQRhILstFXm4V%2FX8AiA08ujBAhkwH9qkWHmmV9xc2a3s2qHxy7zvISS2AYIZcyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA1ezKIJgJrq9YbdKtwDigTfbs3W5WBsynfA8JcLjwu4eGwxKVuZEYK6HK%2BUSCl76YiTaNgDDpEZIWYWZaw4uGed0ljm3La07Pfl%2Bs%2B9j5E9xphZFtzjUvt1RV9kZWZGAfNmuYeQXqAYPvpzGQAUJ8zHwHkL4hZAwFz2PVhYyBfQMFFC%2BMAPIEiftbOQBOYO5cV%2BRBSQBmkxsVwNXfiX9f1P0YINLBOGygq0td8sBZhBCyfgBfMfhtK9AxxHL0yy%2BWHVdBlTNZu%2BPt3amKxAbiinlIZ0qlRCp9dMSajaW27rmC0bBvVzXzoCTsHnTOLv7ox92CWX0PihrLK18JryPvRZ0S0etUSGaiHiqFaMSlvUvntBvJ7GYGiKjkPBq0ZPRIkYH0oTirJHVz0UoFqMSNp95d%2Bq0IPrfJt%2FdRNNMeJlv7fSo3b7dreNq9NsurSiPfQjAaFKgNd9O7OltAXICzbBvzjNWOst%2FWBj2WgNlyPk95p0KbfITywGx4aR4d6p0fu6WSbPS6SknoxC42SY6F4vs5aaU5Bq5Ox%2Bh4TtcfWy8JjcnUzfvPcp8sxtpPUi4Dg8sQUNX61lYP4PfO%2BQdovpl2GQzPaxM2UOEkSxxg%2Fh2a9RaJilL%2B0HXyPvZ8S4Ve3E7EtHiKNqnEYw1MrAvgY6pgE3ej5XnAmhGZl%2F59XNypwlidJL8x9j3bj1qpp%2Fl5sLD%2Bg2ph3ChrstKZoA0JAKenbNFQDOF7i21JaSEP5MgN2esqTZkesZavpzZ1PA2F2H8RCVkkhELT%2BxAqUw3qFUEp%2FVAy%2FmaharRK5NVmLHvq7umCdPNNIjviA0Pv%2FyvDMMzlwTtyk3Y1T8cSEIQxUs6BahG0elVRC32oWe4oxspKaMoRaWchZI&X-Amz-Signature=dafebc1b21c34c28e36c73a1b1bce1feee157cc8aee4eb558aa9aa6a50440904&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7ZNWZZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHJLotueRMdf8ESc5C0hOK4sagfWAQRhILstFXm4V%2FX8AiA08ujBAhkwH9qkWHmmV9xc2a3s2qHxy7zvISS2AYIZcyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA1ezKIJgJrq9YbdKtwDigTfbs3W5WBsynfA8JcLjwu4eGwxKVuZEYK6HK%2BUSCl76YiTaNgDDpEZIWYWZaw4uGed0ljm3La07Pfl%2Bs%2B9j5E9xphZFtzjUvt1RV9kZWZGAfNmuYeQXqAYPvpzGQAUJ8zHwHkL4hZAwFz2PVhYyBfQMFFC%2BMAPIEiftbOQBOYO5cV%2BRBSQBmkxsVwNXfiX9f1P0YINLBOGygq0td8sBZhBCyfgBfMfhtK9AxxHL0yy%2BWHVdBlTNZu%2BPt3amKxAbiinlIZ0qlRCp9dMSajaW27rmC0bBvVzXzoCTsHnTOLv7ox92CWX0PihrLK18JryPvRZ0S0etUSGaiHiqFaMSlvUvntBvJ7GYGiKjkPBq0ZPRIkYH0oTirJHVz0UoFqMSNp95d%2Bq0IPrfJt%2FdRNNMeJlv7fSo3b7dreNq9NsurSiPfQjAaFKgNd9O7OltAXICzbBvzjNWOst%2FWBj2WgNlyPk95p0KbfITywGx4aR4d6p0fu6WSbPS6SknoxC42SY6F4vs5aaU5Bq5Ox%2Bh4TtcfWy8JjcnUzfvPcp8sxtpPUi4Dg8sQUNX61lYP4PfO%2BQdovpl2GQzPaxM2UOEkSxxg%2Fh2a9RaJilL%2B0HXyPvZ8S4Ve3E7EtHiKNqnEYw1MrAvgY6pgE3ej5XnAmhGZl%2F59XNypwlidJL8x9j3bj1qpp%2Fl5sLD%2Bg2ph3ChrstKZoA0JAKenbNFQDOF7i21JaSEP5MgN2esqTZkesZavpzZ1PA2F2H8RCVkkhELT%2BxAqUw3qFUEp%2FVAy%2FmaharRK5NVmLHvq7umCdPNNIjviA0Pv%2FyvDMMzlwTtyk3Y1T8cSEIQxUs6BahG0elVRC32oWe4oxspKaMoRaWchZI&X-Amz-Signature=2d7459f19328d00a1983ab005cd83e39590961a39801276002b224f68fa13464&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7ZNWZZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHJLotueRMdf8ESc5C0hOK4sagfWAQRhILstFXm4V%2FX8AiA08ujBAhkwH9qkWHmmV9xc2a3s2qHxy7zvISS2AYIZcyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA1ezKIJgJrq9YbdKtwDigTfbs3W5WBsynfA8JcLjwu4eGwxKVuZEYK6HK%2BUSCl76YiTaNgDDpEZIWYWZaw4uGed0ljm3La07Pfl%2Bs%2B9j5E9xphZFtzjUvt1RV9kZWZGAfNmuYeQXqAYPvpzGQAUJ8zHwHkL4hZAwFz2PVhYyBfQMFFC%2BMAPIEiftbOQBOYO5cV%2BRBSQBmkxsVwNXfiX9f1P0YINLBOGygq0td8sBZhBCyfgBfMfhtK9AxxHL0yy%2BWHVdBlTNZu%2BPt3amKxAbiinlIZ0qlRCp9dMSajaW27rmC0bBvVzXzoCTsHnTOLv7ox92CWX0PihrLK18JryPvRZ0S0etUSGaiHiqFaMSlvUvntBvJ7GYGiKjkPBq0ZPRIkYH0oTirJHVz0UoFqMSNp95d%2Bq0IPrfJt%2FdRNNMeJlv7fSo3b7dreNq9NsurSiPfQjAaFKgNd9O7OltAXICzbBvzjNWOst%2FWBj2WgNlyPk95p0KbfITywGx4aR4d6p0fu6WSbPS6SknoxC42SY6F4vs5aaU5Bq5Ox%2Bh4TtcfWy8JjcnUzfvPcp8sxtpPUi4Dg8sQUNX61lYP4PfO%2BQdovpl2GQzPaxM2UOEkSxxg%2Fh2a9RaJilL%2B0HXyPvZ8S4Ve3E7EtHiKNqnEYw1MrAvgY6pgE3ej5XnAmhGZl%2F59XNypwlidJL8x9j3bj1qpp%2Fl5sLD%2Bg2ph3ChrstKZoA0JAKenbNFQDOF7i21JaSEP5MgN2esqTZkesZavpzZ1PA2F2H8RCVkkhELT%2BxAqUw3qFUEp%2FVAy%2FmaharRK5NVmLHvq7umCdPNNIjviA0Pv%2FyvDMMzlwTtyk3Y1T8cSEIQxUs6BahG0elVRC32oWe4oxspKaMoRaWchZI&X-Amz-Signature=53a7d7aa39da3e7ce357745641bab5bb7b8c83b172ec1c7c6a15912195482568&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
