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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=ee824e15f5867ebfb71f03f2ff64262bdb788c1603666190bd247ac63b5c14a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=d9a3c17dc07b88aca9b4b0b7b0a44b948f63932e0210b09c428aada12355aacc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=f38dbd70135a90fa5ce2b2a63ef1306e875b32b5145bdd277e2dbd835791ffc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=71f5c5aabab5d80425a35f2f295e976477dc9f80979ca4845f4894f127eee6db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=5df827212354983e6fd49f2e83535a01c1a86aec6a8f7d4dfc09348b0472e83e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
