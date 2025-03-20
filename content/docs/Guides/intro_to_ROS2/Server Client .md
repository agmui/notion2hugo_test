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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGA3Z6W%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHDH%2BhMnLizRRfvjPgRGOvX66dvy3O8kG0lFoQIFL03gAiEAjVGl4MZE%2B57WswMTLm%2FrvmrJ8%2Bh%2FZ6uI77SlPCqs9zoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhQ99oyBWtgEvCi0ircA9ogyOAg6a%2F9Q9gEBGJesTJIqP%2BpVGX1dsTGCPw6Kbo3nLM3c%2B8vAXE6TXVt9F4jdaL01UR3AyoG%2FIku8jX9jm8%2FyPwdvs9FTDC3t9h%2BBzcHsTHNDfNK7nYkBQ9EHL9dqk5YiBStwkyH3tJQxiPxQdrOHR7LPaLuVgpZU0Od%2FayJVYKLukg0v2gejJmYJr%2FXVoc2nJhVJ5MjbauG3u2%2FofcoPlIWX2wZ6Kd24yavJfNgJ3oSJuRclrfKSAdEu%2Fxz%2Fp3jXO7Vr6FOmXV7irMf34VyR5FzXWIP%2B5w2dp8SK1nSEYx7yu3BnaJdZxQN3S7ejbv%2F4LyUROOs7MmUcemamhtHBqfI0gWXDbS4UmmkMdR2qQKXDTmZjtYwNQpmo5j8TKv1hef31ITHoRttmimZ%2FJLiObk6VKIL0s03Bs%2FYjIa6YiNhyjaQ5X72K2qqYbmomdeWkcqZ2HVB1iIYrpDihqlINkdCWoN8JTZ4bd4B3G4bAtZKXbU2Nmgvg%2Bjzm%2FowuehfoxtQ7gd3xvd7jAX193SGC9Est5jGA5HGwHqoNp%2FfQbya5j4QrKYpkJRLyRsDHVTruKUmVX9MX4fEyGdvqy%2B%2BjSef6bXvsFzB8S469KKGVIFEonHng9%2Bb6g%2FNMLSm7r4GOqUBudC0dVgkAfSiWEhF876KQDhOs4gTFE0AYbBWuBkDpd8d4mzud%2FNTf4KUsiVckm%2B0%2FAMG0puobOTKJEgnqPPM0uunq5%2B6lRs8%2FER2Ajn6JAzTY7uBiQH1dir8PCzJDXRy9KmjNmaRy%2B2nBRp6MQmoeFBFsSSNghw0t6pM6GDWVlPQhoHq7DtwbRMogQ1jZpL1NjZ%2BpxeacpLpCwRCfXuo8t6tSYYJ&X-Amz-Signature=5facae7c63deea977e11731dcb6926bfa45dcb1cc239a751da00a77f5aa88090&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGA3Z6W%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHDH%2BhMnLizRRfvjPgRGOvX66dvy3O8kG0lFoQIFL03gAiEAjVGl4MZE%2B57WswMTLm%2FrvmrJ8%2Bh%2FZ6uI77SlPCqs9zoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhQ99oyBWtgEvCi0ircA9ogyOAg6a%2F9Q9gEBGJesTJIqP%2BpVGX1dsTGCPw6Kbo3nLM3c%2B8vAXE6TXVt9F4jdaL01UR3AyoG%2FIku8jX9jm8%2FyPwdvs9FTDC3t9h%2BBzcHsTHNDfNK7nYkBQ9EHL9dqk5YiBStwkyH3tJQxiPxQdrOHR7LPaLuVgpZU0Od%2FayJVYKLukg0v2gejJmYJr%2FXVoc2nJhVJ5MjbauG3u2%2FofcoPlIWX2wZ6Kd24yavJfNgJ3oSJuRclrfKSAdEu%2Fxz%2Fp3jXO7Vr6FOmXV7irMf34VyR5FzXWIP%2B5w2dp8SK1nSEYx7yu3BnaJdZxQN3S7ejbv%2F4LyUROOs7MmUcemamhtHBqfI0gWXDbS4UmmkMdR2qQKXDTmZjtYwNQpmo5j8TKv1hef31ITHoRttmimZ%2FJLiObk6VKIL0s03Bs%2FYjIa6YiNhyjaQ5X72K2qqYbmomdeWkcqZ2HVB1iIYrpDihqlINkdCWoN8JTZ4bd4B3G4bAtZKXbU2Nmgvg%2Bjzm%2FowuehfoxtQ7gd3xvd7jAX193SGC9Est5jGA5HGwHqoNp%2FfQbya5j4QrKYpkJRLyRsDHVTruKUmVX9MX4fEyGdvqy%2B%2BjSef6bXvsFzB8S469KKGVIFEonHng9%2Bb6g%2FNMLSm7r4GOqUBudC0dVgkAfSiWEhF876KQDhOs4gTFE0AYbBWuBkDpd8d4mzud%2FNTf4KUsiVckm%2B0%2FAMG0puobOTKJEgnqPPM0uunq5%2B6lRs8%2FER2Ajn6JAzTY7uBiQH1dir8PCzJDXRy9KmjNmaRy%2B2nBRp6MQmoeFBFsSSNghw0t6pM6GDWVlPQhoHq7DtwbRMogQ1jZpL1NjZ%2BpxeacpLpCwRCfXuo8t6tSYYJ&X-Amz-Signature=67b00a02cd23eb8789c837b7bf0e5cf273454a95558d4c9ef4d695f6811372e7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGA3Z6W%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHDH%2BhMnLizRRfvjPgRGOvX66dvy3O8kG0lFoQIFL03gAiEAjVGl4MZE%2B57WswMTLm%2FrvmrJ8%2Bh%2FZ6uI77SlPCqs9zoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhQ99oyBWtgEvCi0ircA9ogyOAg6a%2F9Q9gEBGJesTJIqP%2BpVGX1dsTGCPw6Kbo3nLM3c%2B8vAXE6TXVt9F4jdaL01UR3AyoG%2FIku8jX9jm8%2FyPwdvs9FTDC3t9h%2BBzcHsTHNDfNK7nYkBQ9EHL9dqk5YiBStwkyH3tJQxiPxQdrOHR7LPaLuVgpZU0Od%2FayJVYKLukg0v2gejJmYJr%2FXVoc2nJhVJ5MjbauG3u2%2FofcoPlIWX2wZ6Kd24yavJfNgJ3oSJuRclrfKSAdEu%2Fxz%2Fp3jXO7Vr6FOmXV7irMf34VyR5FzXWIP%2B5w2dp8SK1nSEYx7yu3BnaJdZxQN3S7ejbv%2F4LyUROOs7MmUcemamhtHBqfI0gWXDbS4UmmkMdR2qQKXDTmZjtYwNQpmo5j8TKv1hef31ITHoRttmimZ%2FJLiObk6VKIL0s03Bs%2FYjIa6YiNhyjaQ5X72K2qqYbmomdeWkcqZ2HVB1iIYrpDihqlINkdCWoN8JTZ4bd4B3G4bAtZKXbU2Nmgvg%2Bjzm%2FowuehfoxtQ7gd3xvd7jAX193SGC9Est5jGA5HGwHqoNp%2FfQbya5j4QrKYpkJRLyRsDHVTruKUmVX9MX4fEyGdvqy%2B%2BjSef6bXvsFzB8S469KKGVIFEonHng9%2Bb6g%2FNMLSm7r4GOqUBudC0dVgkAfSiWEhF876KQDhOs4gTFE0AYbBWuBkDpd8d4mzud%2FNTf4KUsiVckm%2B0%2FAMG0puobOTKJEgnqPPM0uunq5%2B6lRs8%2FER2Ajn6JAzTY7uBiQH1dir8PCzJDXRy9KmjNmaRy%2B2nBRp6MQmoeFBFsSSNghw0t6pM6GDWVlPQhoHq7DtwbRMogQ1jZpL1NjZ%2BpxeacpLpCwRCfXuo8t6tSYYJ&X-Amz-Signature=987a552c13024789b0bff8cd5b887f3a6722b237d77a541a754b4afb8987a143&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGA3Z6W%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHDH%2BhMnLizRRfvjPgRGOvX66dvy3O8kG0lFoQIFL03gAiEAjVGl4MZE%2B57WswMTLm%2FrvmrJ8%2Bh%2FZ6uI77SlPCqs9zoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhQ99oyBWtgEvCi0ircA9ogyOAg6a%2F9Q9gEBGJesTJIqP%2BpVGX1dsTGCPw6Kbo3nLM3c%2B8vAXE6TXVt9F4jdaL01UR3AyoG%2FIku8jX9jm8%2FyPwdvs9FTDC3t9h%2BBzcHsTHNDfNK7nYkBQ9EHL9dqk5YiBStwkyH3tJQxiPxQdrOHR7LPaLuVgpZU0Od%2FayJVYKLukg0v2gejJmYJr%2FXVoc2nJhVJ5MjbauG3u2%2FofcoPlIWX2wZ6Kd24yavJfNgJ3oSJuRclrfKSAdEu%2Fxz%2Fp3jXO7Vr6FOmXV7irMf34VyR5FzXWIP%2B5w2dp8SK1nSEYx7yu3BnaJdZxQN3S7ejbv%2F4LyUROOs7MmUcemamhtHBqfI0gWXDbS4UmmkMdR2qQKXDTmZjtYwNQpmo5j8TKv1hef31ITHoRttmimZ%2FJLiObk6VKIL0s03Bs%2FYjIa6YiNhyjaQ5X72K2qqYbmomdeWkcqZ2HVB1iIYrpDihqlINkdCWoN8JTZ4bd4B3G4bAtZKXbU2Nmgvg%2Bjzm%2FowuehfoxtQ7gd3xvd7jAX193SGC9Est5jGA5HGwHqoNp%2FfQbya5j4QrKYpkJRLyRsDHVTruKUmVX9MX4fEyGdvqy%2B%2BjSef6bXvsFzB8S469KKGVIFEonHng9%2Bb6g%2FNMLSm7r4GOqUBudC0dVgkAfSiWEhF876KQDhOs4gTFE0AYbBWuBkDpd8d4mzud%2FNTf4KUsiVckm%2B0%2FAMG0puobOTKJEgnqPPM0uunq5%2B6lRs8%2FER2Ajn6JAzTY7uBiQH1dir8PCzJDXRy9KmjNmaRy%2B2nBRp6MQmoeFBFsSSNghw0t6pM6GDWVlPQhoHq7DtwbRMogQ1jZpL1NjZ%2BpxeacpLpCwRCfXuo8t6tSYYJ&X-Amz-Signature=81ed7c8c4c952c6f3688eb747280930d131b5684714f2b0f657ba67a035fd402&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGA3Z6W%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHDH%2BhMnLizRRfvjPgRGOvX66dvy3O8kG0lFoQIFL03gAiEAjVGl4MZE%2B57WswMTLm%2FrvmrJ8%2Bh%2FZ6uI77SlPCqs9zoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhQ99oyBWtgEvCi0ircA9ogyOAg6a%2F9Q9gEBGJesTJIqP%2BpVGX1dsTGCPw6Kbo3nLM3c%2B8vAXE6TXVt9F4jdaL01UR3AyoG%2FIku8jX9jm8%2FyPwdvs9FTDC3t9h%2BBzcHsTHNDfNK7nYkBQ9EHL9dqk5YiBStwkyH3tJQxiPxQdrOHR7LPaLuVgpZU0Od%2FayJVYKLukg0v2gejJmYJr%2FXVoc2nJhVJ5MjbauG3u2%2FofcoPlIWX2wZ6Kd24yavJfNgJ3oSJuRclrfKSAdEu%2Fxz%2Fp3jXO7Vr6FOmXV7irMf34VyR5FzXWIP%2B5w2dp8SK1nSEYx7yu3BnaJdZxQN3S7ejbv%2F4LyUROOs7MmUcemamhtHBqfI0gWXDbS4UmmkMdR2qQKXDTmZjtYwNQpmo5j8TKv1hef31ITHoRttmimZ%2FJLiObk6VKIL0s03Bs%2FYjIa6YiNhyjaQ5X72K2qqYbmomdeWkcqZ2HVB1iIYrpDihqlINkdCWoN8JTZ4bd4B3G4bAtZKXbU2Nmgvg%2Bjzm%2FowuehfoxtQ7gd3xvd7jAX193SGC9Est5jGA5HGwHqoNp%2FfQbya5j4QrKYpkJRLyRsDHVTruKUmVX9MX4fEyGdvqy%2B%2BjSef6bXvsFzB8S469KKGVIFEonHng9%2Bb6g%2FNMLSm7r4GOqUBudC0dVgkAfSiWEhF876KQDhOs4gTFE0AYbBWuBkDpd8d4mzud%2FNTf4KUsiVckm%2B0%2FAMG0puobOTKJEgnqPPM0uunq5%2B6lRs8%2FER2Ajn6JAzTY7uBiQH1dir8PCzJDXRy9KmjNmaRy%2B2nBRp6MQmoeFBFsSSNghw0t6pM6GDWVlPQhoHq7DtwbRMogQ1jZpL1NjZ%2BpxeacpLpCwRCfXuo8t6tSYYJ&X-Amz-Signature=8afbeb7fe145df98d8e4e4168c2296a4f49190382b8fbbb7d23afe430f1ec670&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
