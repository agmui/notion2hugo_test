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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHFB6RV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CAFhSrMCnlQR1X610ZI4QZdMSx8LtJ1M4pmDYBbqEAIgK2Q72wEhiuSRP8fRpLx%2BYqMatKe7ZR3Ev4SdOpOyNpIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOa2yrvNC%2FszMYst2SrcA8RMAaC8AlzpflkkPORXQs7ERv5VbuTMxvAWpcRKXqQe3eMIGYHq7qY00dN%2BjC526gQvZOknTrnS28DQGNao%2FoahdfJ4eOVvHwnYfIt283WOUiI9AVv5YZQvsOMFgyOZCdG3nD5ql7VDv7FTYXSB5Is44XpqP9U5DR947rq1ctamNuvy0DAHAs4qfkB6KRecuVFMQcj7RX2%2F%2FuRePQfsyohnMPN6KMNbcMsoEnVP6TDXe5hkRJK%2Fty4jKFOumOfSEt82a84eAE4BE8wS0lEn262lM9EK0VgjhP3yT1%2B%2BBdrasBPW%2Frx815RzN73BQRofpS63%2FtPMzGLlEvGH1Sj9FpFHYKIvtTKMWpDu70xPsmHFE23PkqMyiQ%2B%2Be9cMPCvB3hnJEhJP7rg%2Ba0ZMtzPa738885es1FfdSodOaqjXj1u8J2hNAwMHs%2FpYcVdUIhtuLdLUyCvSw1JXgIQgt13g4%2Fad9mOQbt%2FQx2huSSsXjmoTJArG%2F0JS9mPY6LExn57QbYcXLXZ6kjDKKE8ZBmq0Z3r2iu7MQ7ME3ZYVDAI74V9oMULINwTB9vEOi26zXuXL9c%2BsX0rcP0pE26fluol4u2sZRtn4J5J8q0QHwRqSD80fs7rJnItlN6fPhS3sMI6lxb8GOqUBy%2BUfnmkVcnvcFAuzjnBeLZxcq8FIhiz%2Fg48nFKMooeBF1iUZzOei3WthpdtgyLOg6EcVs2RI8dWlUw1MBiYvc3OGUV4aEptPOVnQ8g2OHpiR3O4o%2BKjX72%2B%2B7MU447COEBO%2Bshjs7bdcTdLjVCdGDqpfFDpThk%2BM6icf1u5XNT71s8jT1RkQDPjxknkB9H7p4%2B%2BFTYTtgpRdue14OOQN3F%2BKsQLN&X-Amz-Signature=4747fadbce310e1fa12caeef74aebb3d5b3c24f2959aa1765d83e73942942094&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHFB6RV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CAFhSrMCnlQR1X610ZI4QZdMSx8LtJ1M4pmDYBbqEAIgK2Q72wEhiuSRP8fRpLx%2BYqMatKe7ZR3Ev4SdOpOyNpIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOa2yrvNC%2FszMYst2SrcA8RMAaC8AlzpflkkPORXQs7ERv5VbuTMxvAWpcRKXqQe3eMIGYHq7qY00dN%2BjC526gQvZOknTrnS28DQGNao%2FoahdfJ4eOVvHwnYfIt283WOUiI9AVv5YZQvsOMFgyOZCdG3nD5ql7VDv7FTYXSB5Is44XpqP9U5DR947rq1ctamNuvy0DAHAs4qfkB6KRecuVFMQcj7RX2%2F%2FuRePQfsyohnMPN6KMNbcMsoEnVP6TDXe5hkRJK%2Fty4jKFOumOfSEt82a84eAE4BE8wS0lEn262lM9EK0VgjhP3yT1%2B%2BBdrasBPW%2Frx815RzN73BQRofpS63%2FtPMzGLlEvGH1Sj9FpFHYKIvtTKMWpDu70xPsmHFE23PkqMyiQ%2B%2Be9cMPCvB3hnJEhJP7rg%2Ba0ZMtzPa738885es1FfdSodOaqjXj1u8J2hNAwMHs%2FpYcVdUIhtuLdLUyCvSw1JXgIQgt13g4%2Fad9mOQbt%2FQx2huSSsXjmoTJArG%2F0JS9mPY6LExn57QbYcXLXZ6kjDKKE8ZBmq0Z3r2iu7MQ7ME3ZYVDAI74V9oMULINwTB9vEOi26zXuXL9c%2BsX0rcP0pE26fluol4u2sZRtn4J5J8q0QHwRqSD80fs7rJnItlN6fPhS3sMI6lxb8GOqUBy%2BUfnmkVcnvcFAuzjnBeLZxcq8FIhiz%2Fg48nFKMooeBF1iUZzOei3WthpdtgyLOg6EcVs2RI8dWlUw1MBiYvc3OGUV4aEptPOVnQ8g2OHpiR3O4o%2BKjX72%2B%2B7MU447COEBO%2Bshjs7bdcTdLjVCdGDqpfFDpThk%2BM6icf1u5XNT71s8jT1RkQDPjxknkB9H7p4%2B%2BFTYTtgpRdue14OOQN3F%2BKsQLN&X-Amz-Signature=28c0432593a2401beb30e6ae0f29d66e32c8729bffc3687991ee96d057039b42&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHFB6RV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CAFhSrMCnlQR1X610ZI4QZdMSx8LtJ1M4pmDYBbqEAIgK2Q72wEhiuSRP8fRpLx%2BYqMatKe7ZR3Ev4SdOpOyNpIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOa2yrvNC%2FszMYst2SrcA8RMAaC8AlzpflkkPORXQs7ERv5VbuTMxvAWpcRKXqQe3eMIGYHq7qY00dN%2BjC526gQvZOknTrnS28DQGNao%2FoahdfJ4eOVvHwnYfIt283WOUiI9AVv5YZQvsOMFgyOZCdG3nD5ql7VDv7FTYXSB5Is44XpqP9U5DR947rq1ctamNuvy0DAHAs4qfkB6KRecuVFMQcj7RX2%2F%2FuRePQfsyohnMPN6KMNbcMsoEnVP6TDXe5hkRJK%2Fty4jKFOumOfSEt82a84eAE4BE8wS0lEn262lM9EK0VgjhP3yT1%2B%2BBdrasBPW%2Frx815RzN73BQRofpS63%2FtPMzGLlEvGH1Sj9FpFHYKIvtTKMWpDu70xPsmHFE23PkqMyiQ%2B%2Be9cMPCvB3hnJEhJP7rg%2Ba0ZMtzPa738885es1FfdSodOaqjXj1u8J2hNAwMHs%2FpYcVdUIhtuLdLUyCvSw1JXgIQgt13g4%2Fad9mOQbt%2FQx2huSSsXjmoTJArG%2F0JS9mPY6LExn57QbYcXLXZ6kjDKKE8ZBmq0Z3r2iu7MQ7ME3ZYVDAI74V9oMULINwTB9vEOi26zXuXL9c%2BsX0rcP0pE26fluol4u2sZRtn4J5J8q0QHwRqSD80fs7rJnItlN6fPhS3sMI6lxb8GOqUBy%2BUfnmkVcnvcFAuzjnBeLZxcq8FIhiz%2Fg48nFKMooeBF1iUZzOei3WthpdtgyLOg6EcVs2RI8dWlUw1MBiYvc3OGUV4aEptPOVnQ8g2OHpiR3O4o%2BKjX72%2B%2B7MU447COEBO%2Bshjs7bdcTdLjVCdGDqpfFDpThk%2BM6icf1u5XNT71s8jT1RkQDPjxknkB9H7p4%2B%2BFTYTtgpRdue14OOQN3F%2BKsQLN&X-Amz-Signature=0a0742df5e2b47e10d54517c8d85cc9abfd75ba10e68a4fcbd2f57ddbac9b5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHFB6RV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CAFhSrMCnlQR1X610ZI4QZdMSx8LtJ1M4pmDYBbqEAIgK2Q72wEhiuSRP8fRpLx%2BYqMatKe7ZR3Ev4SdOpOyNpIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOa2yrvNC%2FszMYst2SrcA8RMAaC8AlzpflkkPORXQs7ERv5VbuTMxvAWpcRKXqQe3eMIGYHq7qY00dN%2BjC526gQvZOknTrnS28DQGNao%2FoahdfJ4eOVvHwnYfIt283WOUiI9AVv5YZQvsOMFgyOZCdG3nD5ql7VDv7FTYXSB5Is44XpqP9U5DR947rq1ctamNuvy0DAHAs4qfkB6KRecuVFMQcj7RX2%2F%2FuRePQfsyohnMPN6KMNbcMsoEnVP6TDXe5hkRJK%2Fty4jKFOumOfSEt82a84eAE4BE8wS0lEn262lM9EK0VgjhP3yT1%2B%2BBdrasBPW%2Frx815RzN73BQRofpS63%2FtPMzGLlEvGH1Sj9FpFHYKIvtTKMWpDu70xPsmHFE23PkqMyiQ%2B%2Be9cMPCvB3hnJEhJP7rg%2Ba0ZMtzPa738885es1FfdSodOaqjXj1u8J2hNAwMHs%2FpYcVdUIhtuLdLUyCvSw1JXgIQgt13g4%2Fad9mOQbt%2FQx2huSSsXjmoTJArG%2F0JS9mPY6LExn57QbYcXLXZ6kjDKKE8ZBmq0Z3r2iu7MQ7ME3ZYVDAI74V9oMULINwTB9vEOi26zXuXL9c%2BsX0rcP0pE26fluol4u2sZRtn4J5J8q0QHwRqSD80fs7rJnItlN6fPhS3sMI6lxb8GOqUBy%2BUfnmkVcnvcFAuzjnBeLZxcq8FIhiz%2Fg48nFKMooeBF1iUZzOei3WthpdtgyLOg6EcVs2RI8dWlUw1MBiYvc3OGUV4aEptPOVnQ8g2OHpiR3O4o%2BKjX72%2B%2B7MU447COEBO%2Bshjs7bdcTdLjVCdGDqpfFDpThk%2BM6icf1u5XNT71s8jT1RkQDPjxknkB9H7p4%2B%2BFTYTtgpRdue14OOQN3F%2BKsQLN&X-Amz-Signature=edd79b7de8a44b5beaf94179cfa71ac987302484a3e6c34b99fd0913eb938b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHFB6RV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CAFhSrMCnlQR1X610ZI4QZdMSx8LtJ1M4pmDYBbqEAIgK2Q72wEhiuSRP8fRpLx%2BYqMatKe7ZR3Ev4SdOpOyNpIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOa2yrvNC%2FszMYst2SrcA8RMAaC8AlzpflkkPORXQs7ERv5VbuTMxvAWpcRKXqQe3eMIGYHq7qY00dN%2BjC526gQvZOknTrnS28DQGNao%2FoahdfJ4eOVvHwnYfIt283WOUiI9AVv5YZQvsOMFgyOZCdG3nD5ql7VDv7FTYXSB5Is44XpqP9U5DR947rq1ctamNuvy0DAHAs4qfkB6KRecuVFMQcj7RX2%2F%2FuRePQfsyohnMPN6KMNbcMsoEnVP6TDXe5hkRJK%2Fty4jKFOumOfSEt82a84eAE4BE8wS0lEn262lM9EK0VgjhP3yT1%2B%2BBdrasBPW%2Frx815RzN73BQRofpS63%2FtPMzGLlEvGH1Sj9FpFHYKIvtTKMWpDu70xPsmHFE23PkqMyiQ%2B%2Be9cMPCvB3hnJEhJP7rg%2Ba0ZMtzPa738885es1FfdSodOaqjXj1u8J2hNAwMHs%2FpYcVdUIhtuLdLUyCvSw1JXgIQgt13g4%2Fad9mOQbt%2FQx2huSSsXjmoTJArG%2F0JS9mPY6LExn57QbYcXLXZ6kjDKKE8ZBmq0Z3r2iu7MQ7ME3ZYVDAI74V9oMULINwTB9vEOi26zXuXL9c%2BsX0rcP0pE26fluol4u2sZRtn4J5J8q0QHwRqSD80fs7rJnItlN6fPhS3sMI6lxb8GOqUBy%2BUfnmkVcnvcFAuzjnBeLZxcq8FIhiz%2Fg48nFKMooeBF1iUZzOei3WthpdtgyLOg6EcVs2RI8dWlUw1MBiYvc3OGUV4aEptPOVnQ8g2OHpiR3O4o%2BKjX72%2B%2B7MU447COEBO%2Bshjs7bdcTdLjVCdGDqpfFDpThk%2BM6icf1u5XNT71s8jT1RkQDPjxknkB9H7p4%2B%2BFTYTtgpRdue14OOQN3F%2BKsQLN&X-Amz-Signature=d7e72dfead2e87ad4753ff2faca5847406f13942d633da9d9c6ea68534518899&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
