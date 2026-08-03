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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDIDQFO%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCX6vdQxW1pijYL0ZIalWqvH6fuzaB7Og%2BxqBdFKlJrtgIhAIQFIrxo6wK8z0NLY2yvaCKpd%2BpnUzcOjemWwpzI%2BLGzKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnYrsugo3IagT5SUcq3AOjBJKR7zcapsDWdsxaUzQvX3KcFLjKbRh5o3zp570VDJmc4qzrhe0QkWaU5mDxLsdzGdQ0nUgBqTfhOX2Q4FZVTY6Yb%2F%2FhmcCkaEniRwcK5y%2BzEZP9qXIaAfVBtVU%2BwnDbZK%2FhEANxquUrb%2F%2Br72jay27vpx%2BiaHGw%2BdxyR4wkIXXS%2F%2FJ6GV3V5oAUaxV5zSZCyb8GnqQ9NzoqaH1qZoS1jorYWbNbHm%2BbwSazAfelVPEifgeIDjlOgqAUxnZHc1U%2Fhqs83Yic%2F%2F9JGSMk7EvUnkosPBf3Pv4cvFfONLFOxWqzBF08UEWk7eth02MaSMLN99r4k4HO%2FGBCjhOaRXb%2B6iZoblxSgMNcduDEF4IMVJFuJWu1Qor6W%2FD1miv2NmWs5wumP8kWV7WvOR2fxeptfWg6yzJoDlRIuAgFOmLaLF7cE44BqKzRD4IouPyjn73%2FdtNAW0MOaPUCfDDL4fxpEa9GYarVj7X0O36n82Nd7aZjUGQNa8LfrQ4yRhnFHqaD4Y8%2FifjHIqTMQmsGYgAIGArUWf8nIEeP6v%2FOsQUZ13Em92azsg63IU6tzw%2BcbHPJxx%2BnBpU5yYtabV5YHUrIWa8LzVYPp%2B9KFahjL0m7hQGHsRBuK9QurxkXADCm5r%2FTBjqkAVruEfpW7iDQZYl489B4z45YlePwgiCSkAUYgRp7MQoik7eWESNqNSeXPyJrg9QyPHcpzkZeoJdz6wdzp4bEvXS2r7wKJtt%2BQXdFJ1O4m4zrkdldpCvCb0w5%2BaNCmZF7Lkt7uP2WBfBst2iPdflUvEC3Z94frT9y5L3m3BVuyKPU0aLUTZtUKr0Gwgmc%2Buk%2FaD%2FKD%2FMp4oaticIFNuMAFbhc%2Fx2z&X-Amz-Signature=64c40d0c4d921b812a659487a647a9fcab2f728e267aa6e676f1e3e4b9bf8856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDIDQFO%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCX6vdQxW1pijYL0ZIalWqvH6fuzaB7Og%2BxqBdFKlJrtgIhAIQFIrxo6wK8z0NLY2yvaCKpd%2BpnUzcOjemWwpzI%2BLGzKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnYrsugo3IagT5SUcq3AOjBJKR7zcapsDWdsxaUzQvX3KcFLjKbRh5o3zp570VDJmc4qzrhe0QkWaU5mDxLsdzGdQ0nUgBqTfhOX2Q4FZVTY6Yb%2F%2FhmcCkaEniRwcK5y%2BzEZP9qXIaAfVBtVU%2BwnDbZK%2FhEANxquUrb%2F%2Br72jay27vpx%2BiaHGw%2BdxyR4wkIXXS%2F%2FJ6GV3V5oAUaxV5zSZCyb8GnqQ9NzoqaH1qZoS1jorYWbNbHm%2BbwSazAfelVPEifgeIDjlOgqAUxnZHc1U%2Fhqs83Yic%2F%2F9JGSMk7EvUnkosPBf3Pv4cvFfONLFOxWqzBF08UEWk7eth02MaSMLN99r4k4HO%2FGBCjhOaRXb%2B6iZoblxSgMNcduDEF4IMVJFuJWu1Qor6W%2FD1miv2NmWs5wumP8kWV7WvOR2fxeptfWg6yzJoDlRIuAgFOmLaLF7cE44BqKzRD4IouPyjn73%2FdtNAW0MOaPUCfDDL4fxpEa9GYarVj7X0O36n82Nd7aZjUGQNa8LfrQ4yRhnFHqaD4Y8%2FifjHIqTMQmsGYgAIGArUWf8nIEeP6v%2FOsQUZ13Em92azsg63IU6tzw%2BcbHPJxx%2BnBpU5yYtabV5YHUrIWa8LzVYPp%2B9KFahjL0m7hQGHsRBuK9QurxkXADCm5r%2FTBjqkAVruEfpW7iDQZYl489B4z45YlePwgiCSkAUYgRp7MQoik7eWESNqNSeXPyJrg9QyPHcpzkZeoJdz6wdzp4bEvXS2r7wKJtt%2BQXdFJ1O4m4zrkdldpCvCb0w5%2BaNCmZF7Lkt7uP2WBfBst2iPdflUvEC3Z94frT9y5L3m3BVuyKPU0aLUTZtUKr0Gwgmc%2Buk%2FaD%2FKD%2FMp4oaticIFNuMAFbhc%2Fx2z&X-Amz-Signature=4bdd64b8eeae10530457b1bda87055f9f1fcbde15f7f1bb234587914e3adae5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDIDQFO%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCX6vdQxW1pijYL0ZIalWqvH6fuzaB7Og%2BxqBdFKlJrtgIhAIQFIrxo6wK8z0NLY2yvaCKpd%2BpnUzcOjemWwpzI%2BLGzKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnYrsugo3IagT5SUcq3AOjBJKR7zcapsDWdsxaUzQvX3KcFLjKbRh5o3zp570VDJmc4qzrhe0QkWaU5mDxLsdzGdQ0nUgBqTfhOX2Q4FZVTY6Yb%2F%2FhmcCkaEniRwcK5y%2BzEZP9qXIaAfVBtVU%2BwnDbZK%2FhEANxquUrb%2F%2Br72jay27vpx%2BiaHGw%2BdxyR4wkIXXS%2F%2FJ6GV3V5oAUaxV5zSZCyb8GnqQ9NzoqaH1qZoS1jorYWbNbHm%2BbwSazAfelVPEifgeIDjlOgqAUxnZHc1U%2Fhqs83Yic%2F%2F9JGSMk7EvUnkosPBf3Pv4cvFfONLFOxWqzBF08UEWk7eth02MaSMLN99r4k4HO%2FGBCjhOaRXb%2B6iZoblxSgMNcduDEF4IMVJFuJWu1Qor6W%2FD1miv2NmWs5wumP8kWV7WvOR2fxeptfWg6yzJoDlRIuAgFOmLaLF7cE44BqKzRD4IouPyjn73%2FdtNAW0MOaPUCfDDL4fxpEa9GYarVj7X0O36n82Nd7aZjUGQNa8LfrQ4yRhnFHqaD4Y8%2FifjHIqTMQmsGYgAIGArUWf8nIEeP6v%2FOsQUZ13Em92azsg63IU6tzw%2BcbHPJxx%2BnBpU5yYtabV5YHUrIWa8LzVYPp%2B9KFahjL0m7hQGHsRBuK9QurxkXADCm5r%2FTBjqkAVruEfpW7iDQZYl489B4z45YlePwgiCSkAUYgRp7MQoik7eWESNqNSeXPyJrg9QyPHcpzkZeoJdz6wdzp4bEvXS2r7wKJtt%2BQXdFJ1O4m4zrkdldpCvCb0w5%2BaNCmZF7Lkt7uP2WBfBst2iPdflUvEC3Z94frT9y5L3m3BVuyKPU0aLUTZtUKr0Gwgmc%2Buk%2FaD%2FKD%2FMp4oaticIFNuMAFbhc%2Fx2z&X-Amz-Signature=2caffe84c1c5e2cb67d4aab8bfd56f92b4e17ae2f56e128555c9e3f7b6ad9d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDIDQFO%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCX6vdQxW1pijYL0ZIalWqvH6fuzaB7Og%2BxqBdFKlJrtgIhAIQFIrxo6wK8z0NLY2yvaCKpd%2BpnUzcOjemWwpzI%2BLGzKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnYrsugo3IagT5SUcq3AOjBJKR7zcapsDWdsxaUzQvX3KcFLjKbRh5o3zp570VDJmc4qzrhe0QkWaU5mDxLsdzGdQ0nUgBqTfhOX2Q4FZVTY6Yb%2F%2FhmcCkaEniRwcK5y%2BzEZP9qXIaAfVBtVU%2BwnDbZK%2FhEANxquUrb%2F%2Br72jay27vpx%2BiaHGw%2BdxyR4wkIXXS%2F%2FJ6GV3V5oAUaxV5zSZCyb8GnqQ9NzoqaH1qZoS1jorYWbNbHm%2BbwSazAfelVPEifgeIDjlOgqAUxnZHc1U%2Fhqs83Yic%2F%2F9JGSMk7EvUnkosPBf3Pv4cvFfONLFOxWqzBF08UEWk7eth02MaSMLN99r4k4HO%2FGBCjhOaRXb%2B6iZoblxSgMNcduDEF4IMVJFuJWu1Qor6W%2FD1miv2NmWs5wumP8kWV7WvOR2fxeptfWg6yzJoDlRIuAgFOmLaLF7cE44BqKzRD4IouPyjn73%2FdtNAW0MOaPUCfDDL4fxpEa9GYarVj7X0O36n82Nd7aZjUGQNa8LfrQ4yRhnFHqaD4Y8%2FifjHIqTMQmsGYgAIGArUWf8nIEeP6v%2FOsQUZ13Em92azsg63IU6tzw%2BcbHPJxx%2BnBpU5yYtabV5YHUrIWa8LzVYPp%2B9KFahjL0m7hQGHsRBuK9QurxkXADCm5r%2FTBjqkAVruEfpW7iDQZYl489B4z45YlePwgiCSkAUYgRp7MQoik7eWESNqNSeXPyJrg9QyPHcpzkZeoJdz6wdzp4bEvXS2r7wKJtt%2BQXdFJ1O4m4zrkdldpCvCb0w5%2BaNCmZF7Lkt7uP2WBfBst2iPdflUvEC3Z94frT9y5L3m3BVuyKPU0aLUTZtUKr0Gwgmc%2Buk%2FaD%2FKD%2FMp4oaticIFNuMAFbhc%2Fx2z&X-Amz-Signature=2609d2701da76e599ef2881c47806ba9987fa5f2b821d2e8e084ef63c4519a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDIDQFO%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCX6vdQxW1pijYL0ZIalWqvH6fuzaB7Og%2BxqBdFKlJrtgIhAIQFIrxo6wK8z0NLY2yvaCKpd%2BpnUzcOjemWwpzI%2BLGzKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnYrsugo3IagT5SUcq3AOjBJKR7zcapsDWdsxaUzQvX3KcFLjKbRh5o3zp570VDJmc4qzrhe0QkWaU5mDxLsdzGdQ0nUgBqTfhOX2Q4FZVTY6Yb%2F%2FhmcCkaEniRwcK5y%2BzEZP9qXIaAfVBtVU%2BwnDbZK%2FhEANxquUrb%2F%2Br72jay27vpx%2BiaHGw%2BdxyR4wkIXXS%2F%2FJ6GV3V5oAUaxV5zSZCyb8GnqQ9NzoqaH1qZoS1jorYWbNbHm%2BbwSazAfelVPEifgeIDjlOgqAUxnZHc1U%2Fhqs83Yic%2F%2F9JGSMk7EvUnkosPBf3Pv4cvFfONLFOxWqzBF08UEWk7eth02MaSMLN99r4k4HO%2FGBCjhOaRXb%2B6iZoblxSgMNcduDEF4IMVJFuJWu1Qor6W%2FD1miv2NmWs5wumP8kWV7WvOR2fxeptfWg6yzJoDlRIuAgFOmLaLF7cE44BqKzRD4IouPyjn73%2FdtNAW0MOaPUCfDDL4fxpEa9GYarVj7X0O36n82Nd7aZjUGQNa8LfrQ4yRhnFHqaD4Y8%2FifjHIqTMQmsGYgAIGArUWf8nIEeP6v%2FOsQUZ13Em92azsg63IU6tzw%2BcbHPJxx%2BnBpU5yYtabV5YHUrIWa8LzVYPp%2B9KFahjL0m7hQGHsRBuK9QurxkXADCm5r%2FTBjqkAVruEfpW7iDQZYl489B4z45YlePwgiCSkAUYgRp7MQoik7eWESNqNSeXPyJrg9QyPHcpzkZeoJdz6wdzp4bEvXS2r7wKJtt%2BQXdFJ1O4m4zrkdldpCvCb0w5%2BaNCmZF7Lkt7uP2WBfBst2iPdflUvEC3Z94frT9y5L3m3BVuyKPU0aLUTZtUKr0Gwgmc%2Buk%2FaD%2FKD%2FMp4oaticIFNuMAFbhc%2Fx2z&X-Amz-Signature=8422d260187e40f5f36c9c5b5e9d50632fc5ed78165c7d7d6389ca401d3a9fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
