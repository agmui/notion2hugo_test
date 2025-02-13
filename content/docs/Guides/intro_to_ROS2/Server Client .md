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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TW4SHG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KM6LnKyBa%2BqFkhiau%2B0GoX205rdJkmEqBDu4m5urEQIhANJsi4F4DidSWAjUwjbhFIMM15EOcBKU2ng28Wk4nkbUKv8DCB8QABoMNjM3NDIzMTgzODA1Igzx4kMXYfeNMcP8rEwq3AMtEbdfmEwALIUH93er1TL1oO9xiwxcdkMVS3fT1CFfub55ypta%2BYd%2FE%2Bq2RTCMx81dIDnrFkiHeMzST7QazradUkS6g%2BsFhzBpfzGbRUxLs1x2QlTZZckuAM%2FEi%2BQ4XdAQMwfrYLsnMj1Za4%2FJlsQaIuMXGTwlarF9wiNGPHyzalh%2B5mETPQQoAmXJx2R1m787B1khfi23CSEfsaG74vr5jPbi5Gpu5ZAWVy%2FpthRgM%2FoJBCKL8RKhcTQmMg2%2Fn1mebf3gQAweU4HFqkKXMA6S%2FUr9E%2FaRxBIs8M4ozYZQ4Z1YMjZBhUGlIcsuscsFei27mqzjXWhC72Nq2HgMhcGesLxWkrtd3ZP6TzN5kgdsYNGQF7i7cYFYmpYBXZBQJRMD9DEprjRe3I8jnW3c3XLa2Fh2JIa4GjUUI3%2BgDcPMnp7YUurraiTZN3QWBfKqY6JuP%2BlH%2FgW87wD0%2BrjhEr3YM8tYC3lUTRKRv7%2Be1VmQwtoL2%2BVVYhxeMJL0rYo9d8YswLnQPif6igc%2FazQn%2BixrGTmvkMUK6df%2BLztxu31jka984E0qGGcCTrRoJlAuRGVZFa4GBUdrgNFWSk7pWmlFiD1dcwpVGkUK9NdC2xhulZkxFEnDoeTGIMfDWTDr2bm9BjqkASIQxPkzX3AnMAgsekTVpbigpL57E4kPHQUQH6WjlbjKRC4ftvVxVWOK0s3nzlP%2BJ8lnJ1qwnzpZVGIQ%2FZcd%2F2YE%2FULF5zDXMC2g%2BaJ8jLE8QUKuYvcZya7XFklMDpgpix7cXJX%2FbnNQKpz0tIc1%2FJOx01eYOGbt%2Fybx%2F2m8Pls0jS1g%2B7FwDZW8NQUyjU%2FzaswPKML353BvPIvINZ2Ik48Esf7w&X-Amz-Signature=2f1f7a97c1b9918922549502cc1ebfd5547819ef7b0dfc6d9cd09ec57c1caba7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TW4SHG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KM6LnKyBa%2BqFkhiau%2B0GoX205rdJkmEqBDu4m5urEQIhANJsi4F4DidSWAjUwjbhFIMM15EOcBKU2ng28Wk4nkbUKv8DCB8QABoMNjM3NDIzMTgzODA1Igzx4kMXYfeNMcP8rEwq3AMtEbdfmEwALIUH93er1TL1oO9xiwxcdkMVS3fT1CFfub55ypta%2BYd%2FE%2Bq2RTCMx81dIDnrFkiHeMzST7QazradUkS6g%2BsFhzBpfzGbRUxLs1x2QlTZZckuAM%2FEi%2BQ4XdAQMwfrYLsnMj1Za4%2FJlsQaIuMXGTwlarF9wiNGPHyzalh%2B5mETPQQoAmXJx2R1m787B1khfi23CSEfsaG74vr5jPbi5Gpu5ZAWVy%2FpthRgM%2FoJBCKL8RKhcTQmMg2%2Fn1mebf3gQAweU4HFqkKXMA6S%2FUr9E%2FaRxBIs8M4ozYZQ4Z1YMjZBhUGlIcsuscsFei27mqzjXWhC72Nq2HgMhcGesLxWkrtd3ZP6TzN5kgdsYNGQF7i7cYFYmpYBXZBQJRMD9DEprjRe3I8jnW3c3XLa2Fh2JIa4GjUUI3%2BgDcPMnp7YUurraiTZN3QWBfKqY6JuP%2BlH%2FgW87wD0%2BrjhEr3YM8tYC3lUTRKRv7%2Be1VmQwtoL2%2BVVYhxeMJL0rYo9d8YswLnQPif6igc%2FazQn%2BixrGTmvkMUK6df%2BLztxu31jka984E0qGGcCTrRoJlAuRGVZFa4GBUdrgNFWSk7pWmlFiD1dcwpVGkUK9NdC2xhulZkxFEnDoeTGIMfDWTDr2bm9BjqkASIQxPkzX3AnMAgsekTVpbigpL57E4kPHQUQH6WjlbjKRC4ftvVxVWOK0s3nzlP%2BJ8lnJ1qwnzpZVGIQ%2FZcd%2F2YE%2FULF5zDXMC2g%2BaJ8jLE8QUKuYvcZya7XFklMDpgpix7cXJX%2FbnNQKpz0tIc1%2FJOx01eYOGbt%2Fybx%2F2m8Pls0jS1g%2B7FwDZW8NQUyjU%2FzaswPKML353BvPIvINZ2Ik48Esf7w&X-Amz-Signature=64a5c71836064e37cc0803e41800e71dff875f566f4e52216289d0a2edff14a1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TW4SHG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KM6LnKyBa%2BqFkhiau%2B0GoX205rdJkmEqBDu4m5urEQIhANJsi4F4DidSWAjUwjbhFIMM15EOcBKU2ng28Wk4nkbUKv8DCB8QABoMNjM3NDIzMTgzODA1Igzx4kMXYfeNMcP8rEwq3AMtEbdfmEwALIUH93er1TL1oO9xiwxcdkMVS3fT1CFfub55ypta%2BYd%2FE%2Bq2RTCMx81dIDnrFkiHeMzST7QazradUkS6g%2BsFhzBpfzGbRUxLs1x2QlTZZckuAM%2FEi%2BQ4XdAQMwfrYLsnMj1Za4%2FJlsQaIuMXGTwlarF9wiNGPHyzalh%2B5mETPQQoAmXJx2R1m787B1khfi23CSEfsaG74vr5jPbi5Gpu5ZAWVy%2FpthRgM%2FoJBCKL8RKhcTQmMg2%2Fn1mebf3gQAweU4HFqkKXMA6S%2FUr9E%2FaRxBIs8M4ozYZQ4Z1YMjZBhUGlIcsuscsFei27mqzjXWhC72Nq2HgMhcGesLxWkrtd3ZP6TzN5kgdsYNGQF7i7cYFYmpYBXZBQJRMD9DEprjRe3I8jnW3c3XLa2Fh2JIa4GjUUI3%2BgDcPMnp7YUurraiTZN3QWBfKqY6JuP%2BlH%2FgW87wD0%2BrjhEr3YM8tYC3lUTRKRv7%2Be1VmQwtoL2%2BVVYhxeMJL0rYo9d8YswLnQPif6igc%2FazQn%2BixrGTmvkMUK6df%2BLztxu31jka984E0qGGcCTrRoJlAuRGVZFa4GBUdrgNFWSk7pWmlFiD1dcwpVGkUK9NdC2xhulZkxFEnDoeTGIMfDWTDr2bm9BjqkASIQxPkzX3AnMAgsekTVpbigpL57E4kPHQUQH6WjlbjKRC4ftvVxVWOK0s3nzlP%2BJ8lnJ1qwnzpZVGIQ%2FZcd%2F2YE%2FULF5zDXMC2g%2BaJ8jLE8QUKuYvcZya7XFklMDpgpix7cXJX%2FbnNQKpz0tIc1%2FJOx01eYOGbt%2Fybx%2F2m8Pls0jS1g%2B7FwDZW8NQUyjU%2FzaswPKML353BvPIvINZ2Ik48Esf7w&X-Amz-Signature=7e938be95bb298f403dbc62eaa9a312ee268f38594afb30c1776bdf3c30b443b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TW4SHG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KM6LnKyBa%2BqFkhiau%2B0GoX205rdJkmEqBDu4m5urEQIhANJsi4F4DidSWAjUwjbhFIMM15EOcBKU2ng28Wk4nkbUKv8DCB8QABoMNjM3NDIzMTgzODA1Igzx4kMXYfeNMcP8rEwq3AMtEbdfmEwALIUH93er1TL1oO9xiwxcdkMVS3fT1CFfub55ypta%2BYd%2FE%2Bq2RTCMx81dIDnrFkiHeMzST7QazradUkS6g%2BsFhzBpfzGbRUxLs1x2QlTZZckuAM%2FEi%2BQ4XdAQMwfrYLsnMj1Za4%2FJlsQaIuMXGTwlarF9wiNGPHyzalh%2B5mETPQQoAmXJx2R1m787B1khfi23CSEfsaG74vr5jPbi5Gpu5ZAWVy%2FpthRgM%2FoJBCKL8RKhcTQmMg2%2Fn1mebf3gQAweU4HFqkKXMA6S%2FUr9E%2FaRxBIs8M4ozYZQ4Z1YMjZBhUGlIcsuscsFei27mqzjXWhC72Nq2HgMhcGesLxWkrtd3ZP6TzN5kgdsYNGQF7i7cYFYmpYBXZBQJRMD9DEprjRe3I8jnW3c3XLa2Fh2JIa4GjUUI3%2BgDcPMnp7YUurraiTZN3QWBfKqY6JuP%2BlH%2FgW87wD0%2BrjhEr3YM8tYC3lUTRKRv7%2Be1VmQwtoL2%2BVVYhxeMJL0rYo9d8YswLnQPif6igc%2FazQn%2BixrGTmvkMUK6df%2BLztxu31jka984E0qGGcCTrRoJlAuRGVZFa4GBUdrgNFWSk7pWmlFiD1dcwpVGkUK9NdC2xhulZkxFEnDoeTGIMfDWTDr2bm9BjqkASIQxPkzX3AnMAgsekTVpbigpL57E4kPHQUQH6WjlbjKRC4ftvVxVWOK0s3nzlP%2BJ8lnJ1qwnzpZVGIQ%2FZcd%2F2YE%2FULF5zDXMC2g%2BaJ8jLE8QUKuYvcZya7XFklMDpgpix7cXJX%2FbnNQKpz0tIc1%2FJOx01eYOGbt%2Fybx%2F2m8Pls0jS1g%2B7FwDZW8NQUyjU%2FzaswPKML353BvPIvINZ2Ik48Esf7w&X-Amz-Signature=8436887a96bbbc22af355974072d3a823bc5fbe6dc7d30c05a7c691026722eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TW4SHG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8KM6LnKyBa%2BqFkhiau%2B0GoX205rdJkmEqBDu4m5urEQIhANJsi4F4DidSWAjUwjbhFIMM15EOcBKU2ng28Wk4nkbUKv8DCB8QABoMNjM3NDIzMTgzODA1Igzx4kMXYfeNMcP8rEwq3AMtEbdfmEwALIUH93er1TL1oO9xiwxcdkMVS3fT1CFfub55ypta%2BYd%2FE%2Bq2RTCMx81dIDnrFkiHeMzST7QazradUkS6g%2BsFhzBpfzGbRUxLs1x2QlTZZckuAM%2FEi%2BQ4XdAQMwfrYLsnMj1Za4%2FJlsQaIuMXGTwlarF9wiNGPHyzalh%2B5mETPQQoAmXJx2R1m787B1khfi23CSEfsaG74vr5jPbi5Gpu5ZAWVy%2FpthRgM%2FoJBCKL8RKhcTQmMg2%2Fn1mebf3gQAweU4HFqkKXMA6S%2FUr9E%2FaRxBIs8M4ozYZQ4Z1YMjZBhUGlIcsuscsFei27mqzjXWhC72Nq2HgMhcGesLxWkrtd3ZP6TzN5kgdsYNGQF7i7cYFYmpYBXZBQJRMD9DEprjRe3I8jnW3c3XLa2Fh2JIa4GjUUI3%2BgDcPMnp7YUurraiTZN3QWBfKqY6JuP%2BlH%2FgW87wD0%2BrjhEr3YM8tYC3lUTRKRv7%2Be1VmQwtoL2%2BVVYhxeMJL0rYo9d8YswLnQPif6igc%2FazQn%2BixrGTmvkMUK6df%2BLztxu31jka984E0qGGcCTrRoJlAuRGVZFa4GBUdrgNFWSk7pWmlFiD1dcwpVGkUK9NdC2xhulZkxFEnDoeTGIMfDWTDr2bm9BjqkASIQxPkzX3AnMAgsekTVpbigpL57E4kPHQUQH6WjlbjKRC4ftvVxVWOK0s3nzlP%2BJ8lnJ1qwnzpZVGIQ%2FZcd%2F2YE%2FULF5zDXMC2g%2BaJ8jLE8QUKuYvcZya7XFklMDpgpix7cXJX%2FbnNQKpz0tIc1%2FJOx01eYOGbt%2Fybx%2F2m8Pls0jS1g%2B7FwDZW8NQUyjU%2FzaswPKML353BvPIvINZ2Ik48Esf7w&X-Amz-Signature=077095761e797184b553114ea49a778c80c34fca45e72f4a9140833b935d3376&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
