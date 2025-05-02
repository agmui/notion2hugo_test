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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVK35FK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7j5rUf7NABE3sNMV8cZSnBsfrxSiPIG0IaNTgucfL%2FQIgIIIxZYRDaHufIh6uY1gdndlXxCW%2FIMuZJpVkov41RpgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw0VjKcaDxUhGcKmircA383owgvSZyIMK4Q4%2FR1mtw38cWg03Kwx6GF6vxGrz0pXgG31wV2NhTONj4hr44ffRO%2FirB28jZmhI719YvDOyPWtfj9oI7qolqehUH0Lam%2Fn12CE35g6kU4PgOLpxoPuPVm8Svjs7egOnmj8CuADi1NtDad9H0%2FKdXqoGGaFdV6%2FVOTnZFeLvSRvayy1W1Sg%2BApgfOvQ%2FisP1k4AWFIyTV1qw9sW0PO7fO%2BPpG1aDYkH1eCpugCZnSP1%2FI2H4ACyFu1Q9n3uGIzgcC4YSKXIT436EHGTCeN8383Vpuc8MV40cSqnX6uDmKC28eYBV3oWs%2BG0uLjd%2Frw6tkNdEXBaVBJ74Lfa3hX9JH50d2%2BCirLPcmxCSbwWbb1yKmS5MjLFzG%2BDj%2F5Ycju7hoYyxXOnsSy%2BmUNqZ9OYv62285hIqf24gQshUmgRTaStU8TiPXUBJAjTNkHS8YCj1B5ZRC5hLi9GD4uUKd162H5TAcaXGGY3yqYK6TpQWcNqQd74e%2FEtG4PccWd48%2BqQpJvYfEACYFXRVVo5bNVOfF48KQtCN2G5f8XaUTZ3%2F1dZ1IF3x7Yiuf%2B69w7Ic2QXscqWYMOcehHztK0JWSxBvt11z%2Fm9ocGG%2BkRKySFTRJ4F%2FKBMMDG1MAGOqUBPwaN7EfMkazQ%2ByTCI6dGzQcgLGz4GQip3zH7lIStuWInC9N2%2FNaeyFHEiABQmQi%2B7%2BY895Ya%2BlnHwmDF4xzw8J09YvOKjPjjoJnohSEZ79LEmVB9AknZr%2BNxFNYdJZ3Z%2FOEHv8B9HhICYHbuTk7p0Vguw3Ro6QmfAWivSJCUlRjyfoTGwtwNkypCIcykrlETYSiwW7Gv33HW5TxIHs5AQhNH7e1l&X-Amz-Signature=68a63fd8fdb809cfecd50d8d4c8464cc27210a62576f9463eeb0dcedd883247f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVK35FK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7j5rUf7NABE3sNMV8cZSnBsfrxSiPIG0IaNTgucfL%2FQIgIIIxZYRDaHufIh6uY1gdndlXxCW%2FIMuZJpVkov41RpgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw0VjKcaDxUhGcKmircA383owgvSZyIMK4Q4%2FR1mtw38cWg03Kwx6GF6vxGrz0pXgG31wV2NhTONj4hr44ffRO%2FirB28jZmhI719YvDOyPWtfj9oI7qolqehUH0Lam%2Fn12CE35g6kU4PgOLpxoPuPVm8Svjs7egOnmj8CuADi1NtDad9H0%2FKdXqoGGaFdV6%2FVOTnZFeLvSRvayy1W1Sg%2BApgfOvQ%2FisP1k4AWFIyTV1qw9sW0PO7fO%2BPpG1aDYkH1eCpugCZnSP1%2FI2H4ACyFu1Q9n3uGIzgcC4YSKXIT436EHGTCeN8383Vpuc8MV40cSqnX6uDmKC28eYBV3oWs%2BG0uLjd%2Frw6tkNdEXBaVBJ74Lfa3hX9JH50d2%2BCirLPcmxCSbwWbb1yKmS5MjLFzG%2BDj%2F5Ycju7hoYyxXOnsSy%2BmUNqZ9OYv62285hIqf24gQshUmgRTaStU8TiPXUBJAjTNkHS8YCj1B5ZRC5hLi9GD4uUKd162H5TAcaXGGY3yqYK6TpQWcNqQd74e%2FEtG4PccWd48%2BqQpJvYfEACYFXRVVo5bNVOfF48KQtCN2G5f8XaUTZ3%2F1dZ1IF3x7Yiuf%2B69w7Ic2QXscqWYMOcehHztK0JWSxBvt11z%2Fm9ocGG%2BkRKySFTRJ4F%2FKBMMDG1MAGOqUBPwaN7EfMkazQ%2ByTCI6dGzQcgLGz4GQip3zH7lIStuWInC9N2%2FNaeyFHEiABQmQi%2B7%2BY895Ya%2BlnHwmDF4xzw8J09YvOKjPjjoJnohSEZ79LEmVB9AknZr%2BNxFNYdJZ3Z%2FOEHv8B9HhICYHbuTk7p0Vguw3Ro6QmfAWivSJCUlRjyfoTGwtwNkypCIcykrlETYSiwW7Gv33HW5TxIHs5AQhNH7e1l&X-Amz-Signature=b87549fe5535ac6460f140499f5448c07bb15b46523d6b69839d299a5c61c4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVK35FK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7j5rUf7NABE3sNMV8cZSnBsfrxSiPIG0IaNTgucfL%2FQIgIIIxZYRDaHufIh6uY1gdndlXxCW%2FIMuZJpVkov41RpgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw0VjKcaDxUhGcKmircA383owgvSZyIMK4Q4%2FR1mtw38cWg03Kwx6GF6vxGrz0pXgG31wV2NhTONj4hr44ffRO%2FirB28jZmhI719YvDOyPWtfj9oI7qolqehUH0Lam%2Fn12CE35g6kU4PgOLpxoPuPVm8Svjs7egOnmj8CuADi1NtDad9H0%2FKdXqoGGaFdV6%2FVOTnZFeLvSRvayy1W1Sg%2BApgfOvQ%2FisP1k4AWFIyTV1qw9sW0PO7fO%2BPpG1aDYkH1eCpugCZnSP1%2FI2H4ACyFu1Q9n3uGIzgcC4YSKXIT436EHGTCeN8383Vpuc8MV40cSqnX6uDmKC28eYBV3oWs%2BG0uLjd%2Frw6tkNdEXBaVBJ74Lfa3hX9JH50d2%2BCirLPcmxCSbwWbb1yKmS5MjLFzG%2BDj%2F5Ycju7hoYyxXOnsSy%2BmUNqZ9OYv62285hIqf24gQshUmgRTaStU8TiPXUBJAjTNkHS8YCj1B5ZRC5hLi9GD4uUKd162H5TAcaXGGY3yqYK6TpQWcNqQd74e%2FEtG4PccWd48%2BqQpJvYfEACYFXRVVo5bNVOfF48KQtCN2G5f8XaUTZ3%2F1dZ1IF3x7Yiuf%2B69w7Ic2QXscqWYMOcehHztK0JWSxBvt11z%2Fm9ocGG%2BkRKySFTRJ4F%2FKBMMDG1MAGOqUBPwaN7EfMkazQ%2ByTCI6dGzQcgLGz4GQip3zH7lIStuWInC9N2%2FNaeyFHEiABQmQi%2B7%2BY895Ya%2BlnHwmDF4xzw8J09YvOKjPjjoJnohSEZ79LEmVB9AknZr%2BNxFNYdJZ3Z%2FOEHv8B9HhICYHbuTk7p0Vguw3Ro6QmfAWivSJCUlRjyfoTGwtwNkypCIcykrlETYSiwW7Gv33HW5TxIHs5AQhNH7e1l&X-Amz-Signature=c9644aeed0b4ec1a8ca9d2af6566e7394dd9cdf35e4b3b1048b3fd560157e5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVK35FK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7j5rUf7NABE3sNMV8cZSnBsfrxSiPIG0IaNTgucfL%2FQIgIIIxZYRDaHufIh6uY1gdndlXxCW%2FIMuZJpVkov41RpgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw0VjKcaDxUhGcKmircA383owgvSZyIMK4Q4%2FR1mtw38cWg03Kwx6GF6vxGrz0pXgG31wV2NhTONj4hr44ffRO%2FirB28jZmhI719YvDOyPWtfj9oI7qolqehUH0Lam%2Fn12CE35g6kU4PgOLpxoPuPVm8Svjs7egOnmj8CuADi1NtDad9H0%2FKdXqoGGaFdV6%2FVOTnZFeLvSRvayy1W1Sg%2BApgfOvQ%2FisP1k4AWFIyTV1qw9sW0PO7fO%2BPpG1aDYkH1eCpugCZnSP1%2FI2H4ACyFu1Q9n3uGIzgcC4YSKXIT436EHGTCeN8383Vpuc8MV40cSqnX6uDmKC28eYBV3oWs%2BG0uLjd%2Frw6tkNdEXBaVBJ74Lfa3hX9JH50d2%2BCirLPcmxCSbwWbb1yKmS5MjLFzG%2BDj%2F5Ycju7hoYyxXOnsSy%2BmUNqZ9OYv62285hIqf24gQshUmgRTaStU8TiPXUBJAjTNkHS8YCj1B5ZRC5hLi9GD4uUKd162H5TAcaXGGY3yqYK6TpQWcNqQd74e%2FEtG4PccWd48%2BqQpJvYfEACYFXRVVo5bNVOfF48KQtCN2G5f8XaUTZ3%2F1dZ1IF3x7Yiuf%2B69w7Ic2QXscqWYMOcehHztK0JWSxBvt11z%2Fm9ocGG%2BkRKySFTRJ4F%2FKBMMDG1MAGOqUBPwaN7EfMkazQ%2ByTCI6dGzQcgLGz4GQip3zH7lIStuWInC9N2%2FNaeyFHEiABQmQi%2B7%2BY895Ya%2BlnHwmDF4xzw8J09YvOKjPjjoJnohSEZ79LEmVB9AknZr%2BNxFNYdJZ3Z%2FOEHv8B9HhICYHbuTk7p0Vguw3Ro6QmfAWivSJCUlRjyfoTGwtwNkypCIcykrlETYSiwW7Gv33HW5TxIHs5AQhNH7e1l&X-Amz-Signature=d2665b5bc99358d39234727cfd7368b02d3da05ef97920afb6091df256f6ab6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVK35FK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7j5rUf7NABE3sNMV8cZSnBsfrxSiPIG0IaNTgucfL%2FQIgIIIxZYRDaHufIh6uY1gdndlXxCW%2FIMuZJpVkov41RpgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw0VjKcaDxUhGcKmircA383owgvSZyIMK4Q4%2FR1mtw38cWg03Kwx6GF6vxGrz0pXgG31wV2NhTONj4hr44ffRO%2FirB28jZmhI719YvDOyPWtfj9oI7qolqehUH0Lam%2Fn12CE35g6kU4PgOLpxoPuPVm8Svjs7egOnmj8CuADi1NtDad9H0%2FKdXqoGGaFdV6%2FVOTnZFeLvSRvayy1W1Sg%2BApgfOvQ%2FisP1k4AWFIyTV1qw9sW0PO7fO%2BPpG1aDYkH1eCpugCZnSP1%2FI2H4ACyFu1Q9n3uGIzgcC4YSKXIT436EHGTCeN8383Vpuc8MV40cSqnX6uDmKC28eYBV3oWs%2BG0uLjd%2Frw6tkNdEXBaVBJ74Lfa3hX9JH50d2%2BCirLPcmxCSbwWbb1yKmS5MjLFzG%2BDj%2F5Ycju7hoYyxXOnsSy%2BmUNqZ9OYv62285hIqf24gQshUmgRTaStU8TiPXUBJAjTNkHS8YCj1B5ZRC5hLi9GD4uUKd162H5TAcaXGGY3yqYK6TpQWcNqQd74e%2FEtG4PccWd48%2BqQpJvYfEACYFXRVVo5bNVOfF48KQtCN2G5f8XaUTZ3%2F1dZ1IF3x7Yiuf%2B69w7Ic2QXscqWYMOcehHztK0JWSxBvt11z%2Fm9ocGG%2BkRKySFTRJ4F%2FKBMMDG1MAGOqUBPwaN7EfMkazQ%2ByTCI6dGzQcgLGz4GQip3zH7lIStuWInC9N2%2FNaeyFHEiABQmQi%2B7%2BY895Ya%2BlnHwmDF4xzw8J09YvOKjPjjoJnohSEZ79LEmVB9AknZr%2BNxFNYdJZ3Z%2FOEHv8B9HhICYHbuTk7p0Vguw3Ro6QmfAWivSJCUlRjyfoTGwtwNkypCIcykrlETYSiwW7Gv33HW5TxIHs5AQhNH7e1l&X-Amz-Signature=642aaaced9ceb8d2fa82b13fcf63b5deae4197da9c82d2189461e645f6aa09c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
