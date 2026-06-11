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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCZRSPM%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD1a3tYANy%2FhfQC%2Fq1xhaRKPiVmkbfFeGDkJEnxQBmxBAIgWqSFIGaSuXDcAtNM5mQpwhVEAu7b9QHSCuKcvhvn7D0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGE3VBck374i8hqSrcA3gPd9a9lDFSzZVqYuFqIdiF6ZZ%2FADtw1%2BdJcWyU4qHsIiLlIZ0Wsbfi2D1mhjmzc0beW3U7IW5bJSpoZ3Ly0iRtZD5ks2j0DLcweECvhqLcKM7%2FVaGm3xDByw0ANdtJyjdA%2BZq8tW6VwacgJEAI%2FKXhoJHHXC%2B86PrSXC%2BM5R63WEnQx3cp9wbuniaIwSpY89o90kv%2FzXC0tyESYhyw9rvBKdoGunX1bjwm5LJTQ3d9jQVXHIB8dGfrmkx8wE7TzDrZYxMbDIVxds98Uon%2FgxEQe0zR6H5C8C8Al2Mnj1jhv1qXg%2BHWiqWlTzPojGdJ1V5VN4hAOBF8jz0xg%2BcquD%2Fhz0bdMHQBThFp3lJM9mxuCDCyB03C3x2XwXmhPR7AX9g2wr8UiqRoNcv3GwYTn2tS43cuzKi%2FOwVoo%2Fc1bBhiySWc5g9LnL5300DgkxATZD1TsybMMTN832KfWsmTSgVNJn0ZuIRq8oaR4y4tqoso85YdGVs0ZPJJZ9JfwK1l8YX3Rv0pUuSb5Dq9nzr8PlGTuV3ZVDg2lSx4qCaG7aeXk%2BJWyCxhtIuiIJfmJB81NQxIH%2FNtqFTa8dkt7n5%2BIiS01hraHc72iskzICCCsRtsU2hwtVV6cI3VZlSjMKunqNEGOqUBTD3swlJg5O9DOEuldpoQuWF%2BZAZeCyTovWEAFtnsb%2BSWtz9onKQGuGieamUS0fLn%2Ff5XOTNnpt6PMmRIWqIwFVYTTnbdY%2F1z4PWxHO65Dl9xZD9hebsBJ%2B%2BLgs8zSxDLDOuUFhJn0GL43bBslwqIx7YihIrxdvJ09vkXJGODrv1p%2B8gvBCxubPS2d9Kd2ZwkUNBcWikZcCBr0emAUtA5En1usVRf&X-Amz-Signature=92078a3ad87d29b41f90353f4e6b51b3e2b2447a68fee8f9618bd9b975899059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCZRSPM%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD1a3tYANy%2FhfQC%2Fq1xhaRKPiVmkbfFeGDkJEnxQBmxBAIgWqSFIGaSuXDcAtNM5mQpwhVEAu7b9QHSCuKcvhvn7D0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGE3VBck374i8hqSrcA3gPd9a9lDFSzZVqYuFqIdiF6ZZ%2FADtw1%2BdJcWyU4qHsIiLlIZ0Wsbfi2D1mhjmzc0beW3U7IW5bJSpoZ3Ly0iRtZD5ks2j0DLcweECvhqLcKM7%2FVaGm3xDByw0ANdtJyjdA%2BZq8tW6VwacgJEAI%2FKXhoJHHXC%2B86PrSXC%2BM5R63WEnQx3cp9wbuniaIwSpY89o90kv%2FzXC0tyESYhyw9rvBKdoGunX1bjwm5LJTQ3d9jQVXHIB8dGfrmkx8wE7TzDrZYxMbDIVxds98Uon%2FgxEQe0zR6H5C8C8Al2Mnj1jhv1qXg%2BHWiqWlTzPojGdJ1V5VN4hAOBF8jz0xg%2BcquD%2Fhz0bdMHQBThFp3lJM9mxuCDCyB03C3x2XwXmhPR7AX9g2wr8UiqRoNcv3GwYTn2tS43cuzKi%2FOwVoo%2Fc1bBhiySWc5g9LnL5300DgkxATZD1TsybMMTN832KfWsmTSgVNJn0ZuIRq8oaR4y4tqoso85YdGVs0ZPJJZ9JfwK1l8YX3Rv0pUuSb5Dq9nzr8PlGTuV3ZVDg2lSx4qCaG7aeXk%2BJWyCxhtIuiIJfmJB81NQxIH%2FNtqFTa8dkt7n5%2BIiS01hraHc72iskzICCCsRtsU2hwtVV6cI3VZlSjMKunqNEGOqUBTD3swlJg5O9DOEuldpoQuWF%2BZAZeCyTovWEAFtnsb%2BSWtz9onKQGuGieamUS0fLn%2Ff5XOTNnpt6PMmRIWqIwFVYTTnbdY%2F1z4PWxHO65Dl9xZD9hebsBJ%2B%2BLgs8zSxDLDOuUFhJn0GL43bBslwqIx7YihIrxdvJ09vkXJGODrv1p%2B8gvBCxubPS2d9Kd2ZwkUNBcWikZcCBr0emAUtA5En1usVRf&X-Amz-Signature=4bc1ece76e1819f948829e1f51fa2b3993d7253c3b7c124788a66d1252ca0b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCZRSPM%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD1a3tYANy%2FhfQC%2Fq1xhaRKPiVmkbfFeGDkJEnxQBmxBAIgWqSFIGaSuXDcAtNM5mQpwhVEAu7b9QHSCuKcvhvn7D0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGE3VBck374i8hqSrcA3gPd9a9lDFSzZVqYuFqIdiF6ZZ%2FADtw1%2BdJcWyU4qHsIiLlIZ0Wsbfi2D1mhjmzc0beW3U7IW5bJSpoZ3Ly0iRtZD5ks2j0DLcweECvhqLcKM7%2FVaGm3xDByw0ANdtJyjdA%2BZq8tW6VwacgJEAI%2FKXhoJHHXC%2B86PrSXC%2BM5R63WEnQx3cp9wbuniaIwSpY89o90kv%2FzXC0tyESYhyw9rvBKdoGunX1bjwm5LJTQ3d9jQVXHIB8dGfrmkx8wE7TzDrZYxMbDIVxds98Uon%2FgxEQe0zR6H5C8C8Al2Mnj1jhv1qXg%2BHWiqWlTzPojGdJ1V5VN4hAOBF8jz0xg%2BcquD%2Fhz0bdMHQBThFp3lJM9mxuCDCyB03C3x2XwXmhPR7AX9g2wr8UiqRoNcv3GwYTn2tS43cuzKi%2FOwVoo%2Fc1bBhiySWc5g9LnL5300DgkxATZD1TsybMMTN832KfWsmTSgVNJn0ZuIRq8oaR4y4tqoso85YdGVs0ZPJJZ9JfwK1l8YX3Rv0pUuSb5Dq9nzr8PlGTuV3ZVDg2lSx4qCaG7aeXk%2BJWyCxhtIuiIJfmJB81NQxIH%2FNtqFTa8dkt7n5%2BIiS01hraHc72iskzICCCsRtsU2hwtVV6cI3VZlSjMKunqNEGOqUBTD3swlJg5O9DOEuldpoQuWF%2BZAZeCyTovWEAFtnsb%2BSWtz9onKQGuGieamUS0fLn%2Ff5XOTNnpt6PMmRIWqIwFVYTTnbdY%2F1z4PWxHO65Dl9xZD9hebsBJ%2B%2BLgs8zSxDLDOuUFhJn0GL43bBslwqIx7YihIrxdvJ09vkXJGODrv1p%2B8gvBCxubPS2d9Kd2ZwkUNBcWikZcCBr0emAUtA5En1usVRf&X-Amz-Signature=006965d1dd5e74a8e9b25b7254aa30b4e5146b663182bc1f6c5487c65a79f49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCZRSPM%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD1a3tYANy%2FhfQC%2Fq1xhaRKPiVmkbfFeGDkJEnxQBmxBAIgWqSFIGaSuXDcAtNM5mQpwhVEAu7b9QHSCuKcvhvn7D0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGE3VBck374i8hqSrcA3gPd9a9lDFSzZVqYuFqIdiF6ZZ%2FADtw1%2BdJcWyU4qHsIiLlIZ0Wsbfi2D1mhjmzc0beW3U7IW5bJSpoZ3Ly0iRtZD5ks2j0DLcweECvhqLcKM7%2FVaGm3xDByw0ANdtJyjdA%2BZq8tW6VwacgJEAI%2FKXhoJHHXC%2B86PrSXC%2BM5R63WEnQx3cp9wbuniaIwSpY89o90kv%2FzXC0tyESYhyw9rvBKdoGunX1bjwm5LJTQ3d9jQVXHIB8dGfrmkx8wE7TzDrZYxMbDIVxds98Uon%2FgxEQe0zR6H5C8C8Al2Mnj1jhv1qXg%2BHWiqWlTzPojGdJ1V5VN4hAOBF8jz0xg%2BcquD%2Fhz0bdMHQBThFp3lJM9mxuCDCyB03C3x2XwXmhPR7AX9g2wr8UiqRoNcv3GwYTn2tS43cuzKi%2FOwVoo%2Fc1bBhiySWc5g9LnL5300DgkxATZD1TsybMMTN832KfWsmTSgVNJn0ZuIRq8oaR4y4tqoso85YdGVs0ZPJJZ9JfwK1l8YX3Rv0pUuSb5Dq9nzr8PlGTuV3ZVDg2lSx4qCaG7aeXk%2BJWyCxhtIuiIJfmJB81NQxIH%2FNtqFTa8dkt7n5%2BIiS01hraHc72iskzICCCsRtsU2hwtVV6cI3VZlSjMKunqNEGOqUBTD3swlJg5O9DOEuldpoQuWF%2BZAZeCyTovWEAFtnsb%2BSWtz9onKQGuGieamUS0fLn%2Ff5XOTNnpt6PMmRIWqIwFVYTTnbdY%2F1z4PWxHO65Dl9xZD9hebsBJ%2B%2BLgs8zSxDLDOuUFhJn0GL43bBslwqIx7YihIrxdvJ09vkXJGODrv1p%2B8gvBCxubPS2d9Kd2ZwkUNBcWikZcCBr0emAUtA5En1usVRf&X-Amz-Signature=fe5b4c7cec98c96e29f4cc7113661a7342fca6abf292f70ab2afd82d94adfeac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCZRSPM%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD1a3tYANy%2FhfQC%2Fq1xhaRKPiVmkbfFeGDkJEnxQBmxBAIgWqSFIGaSuXDcAtNM5mQpwhVEAu7b9QHSCuKcvhvn7D0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGE3VBck374i8hqSrcA3gPd9a9lDFSzZVqYuFqIdiF6ZZ%2FADtw1%2BdJcWyU4qHsIiLlIZ0Wsbfi2D1mhjmzc0beW3U7IW5bJSpoZ3Ly0iRtZD5ks2j0DLcweECvhqLcKM7%2FVaGm3xDByw0ANdtJyjdA%2BZq8tW6VwacgJEAI%2FKXhoJHHXC%2B86PrSXC%2BM5R63WEnQx3cp9wbuniaIwSpY89o90kv%2FzXC0tyESYhyw9rvBKdoGunX1bjwm5LJTQ3d9jQVXHIB8dGfrmkx8wE7TzDrZYxMbDIVxds98Uon%2FgxEQe0zR6H5C8C8Al2Mnj1jhv1qXg%2BHWiqWlTzPojGdJ1V5VN4hAOBF8jz0xg%2BcquD%2Fhz0bdMHQBThFp3lJM9mxuCDCyB03C3x2XwXmhPR7AX9g2wr8UiqRoNcv3GwYTn2tS43cuzKi%2FOwVoo%2Fc1bBhiySWc5g9LnL5300DgkxATZD1TsybMMTN832KfWsmTSgVNJn0ZuIRq8oaR4y4tqoso85YdGVs0ZPJJZ9JfwK1l8YX3Rv0pUuSb5Dq9nzr8PlGTuV3ZVDg2lSx4qCaG7aeXk%2BJWyCxhtIuiIJfmJB81NQxIH%2FNtqFTa8dkt7n5%2BIiS01hraHc72iskzICCCsRtsU2hwtVV6cI3VZlSjMKunqNEGOqUBTD3swlJg5O9DOEuldpoQuWF%2BZAZeCyTovWEAFtnsb%2BSWtz9onKQGuGieamUS0fLn%2Ff5XOTNnpt6PMmRIWqIwFVYTTnbdY%2F1z4PWxHO65Dl9xZD9hebsBJ%2B%2BLgs8zSxDLDOuUFhJn0GL43bBslwqIx7YihIrxdvJ09vkXJGODrv1p%2B8gvBCxubPS2d9Kd2ZwkUNBcWikZcCBr0emAUtA5En1usVRf&X-Amz-Signature=b5e05d22d0b0f9c86c3d07c5ceb8b6cd406cc45ab5f3f8a52bb83df5952a99ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
