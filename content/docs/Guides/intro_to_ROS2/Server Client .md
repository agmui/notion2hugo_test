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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F6PMSD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2CSYYxvATE7IFKAoXCEHd9uWlLtaHhzWRFaIFHVQNAiBGRvUU%2BjmHTo95kAOzMO%2BoqGRXTsimmJSKKGnl35mE4iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07zUjIBhkXmFWOR%2FKtwDKqJXe4YAtuvcBXDAavBCJQcNUxNSKjxDrBBZsyJ4Joj%2FKqXGPsEiUc0ITwyiNvUQ5UinZstZ8EcrvkcOCu%2B6CrnNSfGhzspFYsRha%2BlKr23CaP06x6ui1OkwCI9ZczX6ZFvxk4kHOw7oi3od%2BdofRNu1VWwxe080dZgvWa4Dnp8DVfl2iGyjkT8F9RBiG9qCBVDhqRxC8jseUuUTdeFqG8eMCsYNXSVi7F4Hjh5ogWw2AhPRw1vzWWnC4EXLGRlYVHHj7tIKjI3KdgCy%2BZbZirUsavtONqHBNwdT4ZEDMet%2BkAT7a8vGsMQOnDZz9FIwM4rPSuk7MwfcQg6Ow%2B9fJz%2BQoXFadH%2BFx0%2FrartMZdBb74H1VhogqF7d%2FPR9o7hWR4TP%2BDxxlbbOXEFJWn2zmP6M3CFn3hQGkqCJt6QBtirmUoXXPMnRMbCtlAUmhddYcwFb%2BDaCWyv8FQTN6HSJskp821%2FV961jrQMOvplOZZpdebW%2FJH4SRs1Dg6FjIY6SqRvqSToykMwQsNcZgVI75Q%2FgSFJ2Zj%2Bvo%2BAYn7Ps5%2B%2FI%2FoblbC34i%2FLG%2FyNJndB4vHPs3%2F2V%2BIJghN2U8qurEtTZXvrbjJcRxzlyNKM8qcsjUsuIMwgwgis%2FxrAwgOeevgY6pgEPxqnsxMUvFHTaGjOsvqDs%2FFGsKKwIMxTVgjIrMq1zE%2FAqIXPg8j3rYAsh%2BcVZidt%2FJJCq1MPJ8qVDZcAScRZynSZLIUGKN6p3kfcDOHmIAYvg5Xvy9fCdh9871Wde2Iq%2Fi4NjA4%2BcbgQNZ9NmyNc7OWso5uiIDxpEHSRp4eDkcu2oERCX4CECvPQ2XcyI6EHpkNK87KwF5AH2pyaU%2BPIQcfRbX8dW&X-Amz-Signature=37ff4cf44954454eeca31cd63372f19cbb519651a224f5ef653c2c80f44b3a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F6PMSD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2CSYYxvATE7IFKAoXCEHd9uWlLtaHhzWRFaIFHVQNAiBGRvUU%2BjmHTo95kAOzMO%2BoqGRXTsimmJSKKGnl35mE4iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07zUjIBhkXmFWOR%2FKtwDKqJXe4YAtuvcBXDAavBCJQcNUxNSKjxDrBBZsyJ4Joj%2FKqXGPsEiUc0ITwyiNvUQ5UinZstZ8EcrvkcOCu%2B6CrnNSfGhzspFYsRha%2BlKr23CaP06x6ui1OkwCI9ZczX6ZFvxk4kHOw7oi3od%2BdofRNu1VWwxe080dZgvWa4Dnp8DVfl2iGyjkT8F9RBiG9qCBVDhqRxC8jseUuUTdeFqG8eMCsYNXSVi7F4Hjh5ogWw2AhPRw1vzWWnC4EXLGRlYVHHj7tIKjI3KdgCy%2BZbZirUsavtONqHBNwdT4ZEDMet%2BkAT7a8vGsMQOnDZz9FIwM4rPSuk7MwfcQg6Ow%2B9fJz%2BQoXFadH%2BFx0%2FrartMZdBb74H1VhogqF7d%2FPR9o7hWR4TP%2BDxxlbbOXEFJWn2zmP6M3CFn3hQGkqCJt6QBtirmUoXXPMnRMbCtlAUmhddYcwFb%2BDaCWyv8FQTN6HSJskp821%2FV961jrQMOvplOZZpdebW%2FJH4SRs1Dg6FjIY6SqRvqSToykMwQsNcZgVI75Q%2FgSFJ2Zj%2Bvo%2BAYn7Ps5%2B%2FI%2FoblbC34i%2FLG%2FyNJndB4vHPs3%2F2V%2BIJghN2U8qurEtTZXvrbjJcRxzlyNKM8qcsjUsuIMwgwgis%2FxrAwgOeevgY6pgEPxqnsxMUvFHTaGjOsvqDs%2FFGsKKwIMxTVgjIrMq1zE%2FAqIXPg8j3rYAsh%2BcVZidt%2FJJCq1MPJ8qVDZcAScRZynSZLIUGKN6p3kfcDOHmIAYvg5Xvy9fCdh9871Wde2Iq%2Fi4NjA4%2BcbgQNZ9NmyNc7OWso5uiIDxpEHSRp4eDkcu2oERCX4CECvPQ2XcyI6EHpkNK87KwF5AH2pyaU%2BPIQcfRbX8dW&X-Amz-Signature=ea1014ae89a728003656a2c1cc8bc774a36f33765096ee6a9de65703019d0494&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F6PMSD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2CSYYxvATE7IFKAoXCEHd9uWlLtaHhzWRFaIFHVQNAiBGRvUU%2BjmHTo95kAOzMO%2BoqGRXTsimmJSKKGnl35mE4iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07zUjIBhkXmFWOR%2FKtwDKqJXe4YAtuvcBXDAavBCJQcNUxNSKjxDrBBZsyJ4Joj%2FKqXGPsEiUc0ITwyiNvUQ5UinZstZ8EcrvkcOCu%2B6CrnNSfGhzspFYsRha%2BlKr23CaP06x6ui1OkwCI9ZczX6ZFvxk4kHOw7oi3od%2BdofRNu1VWwxe080dZgvWa4Dnp8DVfl2iGyjkT8F9RBiG9qCBVDhqRxC8jseUuUTdeFqG8eMCsYNXSVi7F4Hjh5ogWw2AhPRw1vzWWnC4EXLGRlYVHHj7tIKjI3KdgCy%2BZbZirUsavtONqHBNwdT4ZEDMet%2BkAT7a8vGsMQOnDZz9FIwM4rPSuk7MwfcQg6Ow%2B9fJz%2BQoXFadH%2BFx0%2FrartMZdBb74H1VhogqF7d%2FPR9o7hWR4TP%2BDxxlbbOXEFJWn2zmP6M3CFn3hQGkqCJt6QBtirmUoXXPMnRMbCtlAUmhddYcwFb%2BDaCWyv8FQTN6HSJskp821%2FV961jrQMOvplOZZpdebW%2FJH4SRs1Dg6FjIY6SqRvqSToykMwQsNcZgVI75Q%2FgSFJ2Zj%2Bvo%2BAYn7Ps5%2B%2FI%2FoblbC34i%2FLG%2FyNJndB4vHPs3%2F2V%2BIJghN2U8qurEtTZXvrbjJcRxzlyNKM8qcsjUsuIMwgwgis%2FxrAwgOeevgY6pgEPxqnsxMUvFHTaGjOsvqDs%2FFGsKKwIMxTVgjIrMq1zE%2FAqIXPg8j3rYAsh%2BcVZidt%2FJJCq1MPJ8qVDZcAScRZynSZLIUGKN6p3kfcDOHmIAYvg5Xvy9fCdh9871Wde2Iq%2Fi4NjA4%2BcbgQNZ9NmyNc7OWso5uiIDxpEHSRp4eDkcu2oERCX4CECvPQ2XcyI6EHpkNK87KwF5AH2pyaU%2BPIQcfRbX8dW&X-Amz-Signature=35d0d769799f8cf19f825875a463b8f3c9dda4634b84887ee76455e6518f9324&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F6PMSD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2CSYYxvATE7IFKAoXCEHd9uWlLtaHhzWRFaIFHVQNAiBGRvUU%2BjmHTo95kAOzMO%2BoqGRXTsimmJSKKGnl35mE4iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07zUjIBhkXmFWOR%2FKtwDKqJXe4YAtuvcBXDAavBCJQcNUxNSKjxDrBBZsyJ4Joj%2FKqXGPsEiUc0ITwyiNvUQ5UinZstZ8EcrvkcOCu%2B6CrnNSfGhzspFYsRha%2BlKr23CaP06x6ui1OkwCI9ZczX6ZFvxk4kHOw7oi3od%2BdofRNu1VWwxe080dZgvWa4Dnp8DVfl2iGyjkT8F9RBiG9qCBVDhqRxC8jseUuUTdeFqG8eMCsYNXSVi7F4Hjh5ogWw2AhPRw1vzWWnC4EXLGRlYVHHj7tIKjI3KdgCy%2BZbZirUsavtONqHBNwdT4ZEDMet%2BkAT7a8vGsMQOnDZz9FIwM4rPSuk7MwfcQg6Ow%2B9fJz%2BQoXFadH%2BFx0%2FrartMZdBb74H1VhogqF7d%2FPR9o7hWR4TP%2BDxxlbbOXEFJWn2zmP6M3CFn3hQGkqCJt6QBtirmUoXXPMnRMbCtlAUmhddYcwFb%2BDaCWyv8FQTN6HSJskp821%2FV961jrQMOvplOZZpdebW%2FJH4SRs1Dg6FjIY6SqRvqSToykMwQsNcZgVI75Q%2FgSFJ2Zj%2Bvo%2BAYn7Ps5%2B%2FI%2FoblbC34i%2FLG%2FyNJndB4vHPs3%2F2V%2BIJghN2U8qurEtTZXvrbjJcRxzlyNKM8qcsjUsuIMwgwgis%2FxrAwgOeevgY6pgEPxqnsxMUvFHTaGjOsvqDs%2FFGsKKwIMxTVgjIrMq1zE%2FAqIXPg8j3rYAsh%2BcVZidt%2FJJCq1MPJ8qVDZcAScRZynSZLIUGKN6p3kfcDOHmIAYvg5Xvy9fCdh9871Wde2Iq%2Fi4NjA4%2BcbgQNZ9NmyNc7OWso5uiIDxpEHSRp4eDkcu2oERCX4CECvPQ2XcyI6EHpkNK87KwF5AH2pyaU%2BPIQcfRbX8dW&X-Amz-Signature=60d61d686a44c56f10e262a97bba9585f49b2d9713999741ba3853971d59d0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2F6PMSD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2CSYYxvATE7IFKAoXCEHd9uWlLtaHhzWRFaIFHVQNAiBGRvUU%2BjmHTo95kAOzMO%2BoqGRXTsimmJSKKGnl35mE4iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07zUjIBhkXmFWOR%2FKtwDKqJXe4YAtuvcBXDAavBCJQcNUxNSKjxDrBBZsyJ4Joj%2FKqXGPsEiUc0ITwyiNvUQ5UinZstZ8EcrvkcOCu%2B6CrnNSfGhzspFYsRha%2BlKr23CaP06x6ui1OkwCI9ZczX6ZFvxk4kHOw7oi3od%2BdofRNu1VWwxe080dZgvWa4Dnp8DVfl2iGyjkT8F9RBiG9qCBVDhqRxC8jseUuUTdeFqG8eMCsYNXSVi7F4Hjh5ogWw2AhPRw1vzWWnC4EXLGRlYVHHj7tIKjI3KdgCy%2BZbZirUsavtONqHBNwdT4ZEDMet%2BkAT7a8vGsMQOnDZz9FIwM4rPSuk7MwfcQg6Ow%2B9fJz%2BQoXFadH%2BFx0%2FrartMZdBb74H1VhogqF7d%2FPR9o7hWR4TP%2BDxxlbbOXEFJWn2zmP6M3CFn3hQGkqCJt6QBtirmUoXXPMnRMbCtlAUmhddYcwFb%2BDaCWyv8FQTN6HSJskp821%2FV961jrQMOvplOZZpdebW%2FJH4SRs1Dg6FjIY6SqRvqSToykMwQsNcZgVI75Q%2FgSFJ2Zj%2Bvo%2BAYn7Ps5%2B%2FI%2FoblbC34i%2FLG%2FyNJndB4vHPs3%2F2V%2BIJghN2U8qurEtTZXvrbjJcRxzlyNKM8qcsjUsuIMwgwgis%2FxrAwgOeevgY6pgEPxqnsxMUvFHTaGjOsvqDs%2FFGsKKwIMxTVgjIrMq1zE%2FAqIXPg8j3rYAsh%2BcVZidt%2FJJCq1MPJ8qVDZcAScRZynSZLIUGKN6p3kfcDOHmIAYvg5Xvy9fCdh9871Wde2Iq%2Fi4NjA4%2BcbgQNZ9NmyNc7OWso5uiIDxpEHSRp4eDkcu2oERCX4CECvPQ2XcyI6EHpkNK87KwF5AH2pyaU%2BPIQcfRbX8dW&X-Amz-Signature=4b06672142d86bd4ca6b1f7fdcaa69ccb1d8dd183096588cc35f485bc5b26c72&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
