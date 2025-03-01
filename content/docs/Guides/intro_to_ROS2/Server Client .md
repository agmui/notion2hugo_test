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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDEMBUV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE1Aj80fIXBps78XNx8sWrG%2Fy9GzxYZ%2By93g6srvswi6AiEAoaOtwnaTntiKZ%2B0qL5FpknRZI9GuoPfDpxX1tOEN4tQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3BNlf5AcszWgU8NSrcA5zN%2Bjyt%2BHslr1Dr8Wsaajzg2%2BbS33Xn7BRUlx8DatwdYjGx%2F2cAzk5Ub5cj8Y2rsFOHHosgn9REhBvtf4NURC2tUSu9o6ro58yuJ3gmAPg4W%2BtJvj1u%2BOgk9m0s%2BQ5dVF4zVxPP0xuwfxSBi1ETOxc6blU44UHnJ8nTRZXsN1bM68qXw%2BfEsI7SfZdGLnBCpH2WAJSEyXFQNT171LEx0fKkG73BGDu8ScxBMSd6%2FuoRY0aAYjYntU87dKRRScc2%2BxUJ6SONhVuEEcMETwp2rwYAqU2pEIfH6g98uGlq%2BgqViQAPzd5hwKY3pC2NGNxrwvyL8tWDBg5%2BKKA3vH0WRNukR1oqfvtA4C%2BrLewc9nhrlhUpnDo9w0C%2Fog3u0uzotM5QvnQXHP%2BPyR2kmzvuzKoz%2B3slpURXOOwD3qLR8JtwdrS9CMU%2Bahcbi8sKFi9pIVbzTAFwjeB2WDzOeJHmR9qkw3pSpb6VPkW%2Bftvw4WUbT4ERpiS8E5b%2By7pq%2BgBMhQx2Peoa4BHRXJpC50muQHUOd%2FN%2Fk7xqQI82cod9d1VFlMymPDXC44XgbkqBbw25MZNgl%2FYbc81m%2Bpl%2BIDYhhIvPqjvRlSzJL88eE%2BJxeEdTajcK5NKvv35pv750MJXHjb4GOqUBPR%2BiUgXtNlxdLl7FAIlrWaPyVHieGEtG7M9Y9Dyzy1mxXagXISWOY0e7I38mgLO4Ngd8jrHBNKt7suUHJp72yreRvcHe1%2BXt%2FCPtuaLOQSR23drrMo5YMeulu6mjPhPAyqU6TV9JlZdJSda%2FJtKOg9PJNkiM9%2FAjy7UjKTJKX%2BH9QHaEm3z77ELHJ3aeNIKybZoW8kdg6dcuJdJ7PR2JD3dPdwBx&X-Amz-Signature=dd63414d93c5537acc8125aeb45d1a080d3b876406e06404d99a2ddbd0d41ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDEMBUV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE1Aj80fIXBps78XNx8sWrG%2Fy9GzxYZ%2By93g6srvswi6AiEAoaOtwnaTntiKZ%2B0qL5FpknRZI9GuoPfDpxX1tOEN4tQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3BNlf5AcszWgU8NSrcA5zN%2Bjyt%2BHslr1Dr8Wsaajzg2%2BbS33Xn7BRUlx8DatwdYjGx%2F2cAzk5Ub5cj8Y2rsFOHHosgn9REhBvtf4NURC2tUSu9o6ro58yuJ3gmAPg4W%2BtJvj1u%2BOgk9m0s%2BQ5dVF4zVxPP0xuwfxSBi1ETOxc6blU44UHnJ8nTRZXsN1bM68qXw%2BfEsI7SfZdGLnBCpH2WAJSEyXFQNT171LEx0fKkG73BGDu8ScxBMSd6%2FuoRY0aAYjYntU87dKRRScc2%2BxUJ6SONhVuEEcMETwp2rwYAqU2pEIfH6g98uGlq%2BgqViQAPzd5hwKY3pC2NGNxrwvyL8tWDBg5%2BKKA3vH0WRNukR1oqfvtA4C%2BrLewc9nhrlhUpnDo9w0C%2Fog3u0uzotM5QvnQXHP%2BPyR2kmzvuzKoz%2B3slpURXOOwD3qLR8JtwdrS9CMU%2Bahcbi8sKFi9pIVbzTAFwjeB2WDzOeJHmR9qkw3pSpb6VPkW%2Bftvw4WUbT4ERpiS8E5b%2By7pq%2BgBMhQx2Peoa4BHRXJpC50muQHUOd%2FN%2Fk7xqQI82cod9d1VFlMymPDXC44XgbkqBbw25MZNgl%2FYbc81m%2Bpl%2BIDYhhIvPqjvRlSzJL88eE%2BJxeEdTajcK5NKvv35pv750MJXHjb4GOqUBPR%2BiUgXtNlxdLl7FAIlrWaPyVHieGEtG7M9Y9Dyzy1mxXagXISWOY0e7I38mgLO4Ngd8jrHBNKt7suUHJp72yreRvcHe1%2BXt%2FCPtuaLOQSR23drrMo5YMeulu6mjPhPAyqU6TV9JlZdJSda%2FJtKOg9PJNkiM9%2FAjy7UjKTJKX%2BH9QHaEm3z77ELHJ3aeNIKybZoW8kdg6dcuJdJ7PR2JD3dPdwBx&X-Amz-Signature=1452838daa60bca9da12ec07e69ad7b6a8e43c1dba31852443463688dceb9f78&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDEMBUV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE1Aj80fIXBps78XNx8sWrG%2Fy9GzxYZ%2By93g6srvswi6AiEAoaOtwnaTntiKZ%2B0qL5FpknRZI9GuoPfDpxX1tOEN4tQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3BNlf5AcszWgU8NSrcA5zN%2Bjyt%2BHslr1Dr8Wsaajzg2%2BbS33Xn7BRUlx8DatwdYjGx%2F2cAzk5Ub5cj8Y2rsFOHHosgn9REhBvtf4NURC2tUSu9o6ro58yuJ3gmAPg4W%2BtJvj1u%2BOgk9m0s%2BQ5dVF4zVxPP0xuwfxSBi1ETOxc6blU44UHnJ8nTRZXsN1bM68qXw%2BfEsI7SfZdGLnBCpH2WAJSEyXFQNT171LEx0fKkG73BGDu8ScxBMSd6%2FuoRY0aAYjYntU87dKRRScc2%2BxUJ6SONhVuEEcMETwp2rwYAqU2pEIfH6g98uGlq%2BgqViQAPzd5hwKY3pC2NGNxrwvyL8tWDBg5%2BKKA3vH0WRNukR1oqfvtA4C%2BrLewc9nhrlhUpnDo9w0C%2Fog3u0uzotM5QvnQXHP%2BPyR2kmzvuzKoz%2B3slpURXOOwD3qLR8JtwdrS9CMU%2Bahcbi8sKFi9pIVbzTAFwjeB2WDzOeJHmR9qkw3pSpb6VPkW%2Bftvw4WUbT4ERpiS8E5b%2By7pq%2BgBMhQx2Peoa4BHRXJpC50muQHUOd%2FN%2Fk7xqQI82cod9d1VFlMymPDXC44XgbkqBbw25MZNgl%2FYbc81m%2Bpl%2BIDYhhIvPqjvRlSzJL88eE%2BJxeEdTajcK5NKvv35pv750MJXHjb4GOqUBPR%2BiUgXtNlxdLl7FAIlrWaPyVHieGEtG7M9Y9Dyzy1mxXagXISWOY0e7I38mgLO4Ngd8jrHBNKt7suUHJp72yreRvcHe1%2BXt%2FCPtuaLOQSR23drrMo5YMeulu6mjPhPAyqU6TV9JlZdJSda%2FJtKOg9PJNkiM9%2FAjy7UjKTJKX%2BH9QHaEm3z77ELHJ3aeNIKybZoW8kdg6dcuJdJ7PR2JD3dPdwBx&X-Amz-Signature=06c787c1476773f8c017ef6677baf16a15f28b4a65138a697bbd2409cbef6294&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDEMBUV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE1Aj80fIXBps78XNx8sWrG%2Fy9GzxYZ%2By93g6srvswi6AiEAoaOtwnaTntiKZ%2B0qL5FpknRZI9GuoPfDpxX1tOEN4tQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3BNlf5AcszWgU8NSrcA5zN%2Bjyt%2BHslr1Dr8Wsaajzg2%2BbS33Xn7BRUlx8DatwdYjGx%2F2cAzk5Ub5cj8Y2rsFOHHosgn9REhBvtf4NURC2tUSu9o6ro58yuJ3gmAPg4W%2BtJvj1u%2BOgk9m0s%2BQ5dVF4zVxPP0xuwfxSBi1ETOxc6blU44UHnJ8nTRZXsN1bM68qXw%2BfEsI7SfZdGLnBCpH2WAJSEyXFQNT171LEx0fKkG73BGDu8ScxBMSd6%2FuoRY0aAYjYntU87dKRRScc2%2BxUJ6SONhVuEEcMETwp2rwYAqU2pEIfH6g98uGlq%2BgqViQAPzd5hwKY3pC2NGNxrwvyL8tWDBg5%2BKKA3vH0WRNukR1oqfvtA4C%2BrLewc9nhrlhUpnDo9w0C%2Fog3u0uzotM5QvnQXHP%2BPyR2kmzvuzKoz%2B3slpURXOOwD3qLR8JtwdrS9CMU%2Bahcbi8sKFi9pIVbzTAFwjeB2WDzOeJHmR9qkw3pSpb6VPkW%2Bftvw4WUbT4ERpiS8E5b%2By7pq%2BgBMhQx2Peoa4BHRXJpC50muQHUOd%2FN%2Fk7xqQI82cod9d1VFlMymPDXC44XgbkqBbw25MZNgl%2FYbc81m%2Bpl%2BIDYhhIvPqjvRlSzJL88eE%2BJxeEdTajcK5NKvv35pv750MJXHjb4GOqUBPR%2BiUgXtNlxdLl7FAIlrWaPyVHieGEtG7M9Y9Dyzy1mxXagXISWOY0e7I38mgLO4Ngd8jrHBNKt7suUHJp72yreRvcHe1%2BXt%2FCPtuaLOQSR23drrMo5YMeulu6mjPhPAyqU6TV9JlZdJSda%2FJtKOg9PJNkiM9%2FAjy7UjKTJKX%2BH9QHaEm3z77ELHJ3aeNIKybZoW8kdg6dcuJdJ7PR2JD3dPdwBx&X-Amz-Signature=78988bf8fb788cbdb5d96eea24c154bf383a417977cfae2e581de7f063c5616d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDEMBUV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE1Aj80fIXBps78XNx8sWrG%2Fy9GzxYZ%2By93g6srvswi6AiEAoaOtwnaTntiKZ%2B0qL5FpknRZI9GuoPfDpxX1tOEN4tQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3BNlf5AcszWgU8NSrcA5zN%2Bjyt%2BHslr1Dr8Wsaajzg2%2BbS33Xn7BRUlx8DatwdYjGx%2F2cAzk5Ub5cj8Y2rsFOHHosgn9REhBvtf4NURC2tUSu9o6ro58yuJ3gmAPg4W%2BtJvj1u%2BOgk9m0s%2BQ5dVF4zVxPP0xuwfxSBi1ETOxc6blU44UHnJ8nTRZXsN1bM68qXw%2BfEsI7SfZdGLnBCpH2WAJSEyXFQNT171LEx0fKkG73BGDu8ScxBMSd6%2FuoRY0aAYjYntU87dKRRScc2%2BxUJ6SONhVuEEcMETwp2rwYAqU2pEIfH6g98uGlq%2BgqViQAPzd5hwKY3pC2NGNxrwvyL8tWDBg5%2BKKA3vH0WRNukR1oqfvtA4C%2BrLewc9nhrlhUpnDo9w0C%2Fog3u0uzotM5QvnQXHP%2BPyR2kmzvuzKoz%2B3slpURXOOwD3qLR8JtwdrS9CMU%2Bahcbi8sKFi9pIVbzTAFwjeB2WDzOeJHmR9qkw3pSpb6VPkW%2Bftvw4WUbT4ERpiS8E5b%2By7pq%2BgBMhQx2Peoa4BHRXJpC50muQHUOd%2FN%2Fk7xqQI82cod9d1VFlMymPDXC44XgbkqBbw25MZNgl%2FYbc81m%2Bpl%2BIDYhhIvPqjvRlSzJL88eE%2BJxeEdTajcK5NKvv35pv750MJXHjb4GOqUBPR%2BiUgXtNlxdLl7FAIlrWaPyVHieGEtG7M9Y9Dyzy1mxXagXISWOY0e7I38mgLO4Ngd8jrHBNKt7suUHJp72yreRvcHe1%2BXt%2FCPtuaLOQSR23drrMo5YMeulu6mjPhPAyqU6TV9JlZdJSda%2FJtKOg9PJNkiM9%2FAjy7UjKTJKX%2BH9QHaEm3z77ELHJ3aeNIKybZoW8kdg6dcuJdJ7PR2JD3dPdwBx&X-Amz-Signature=7295b8458edc9378b97b532dda5e8b44aab946beb44794a9693e33069924af52&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
