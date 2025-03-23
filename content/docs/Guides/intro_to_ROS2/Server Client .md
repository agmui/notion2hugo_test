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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZSEIS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPetJJlVUtsKOihufsIs4eGIIAFt97HQ6WCGFEhoUCXAiAB1uRlbupVsC9Gf6HQiO8kk1j5bPykQ24aTdGplnrTFiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuKuI6PYT3zMUpuBKtwDEotl6eqca3DJbRlQaZ7C97cY%2Be3BjEodrYVp%2FChygLywj%2BFBLUZcXdl6zD9e6aet0HcElOi4cfLaZPN6DKGKI88WkN2qUOQuQLclpRpibnI69vlC2TML02VBYXT4RGFpXduaSK39M%2FGi0oqJcASVIz63rpGOTkVpu%2FekewIf0fUBA9sR%2Fwuz2g7ey1m6rI%2FYsWRdIq0qlzBy1MHs5XX8U2pE8MAPsbbU63HOWZjodIWgFnSwf%2Fg3AbpMUGiWNlQdqVBx%2BWiIxmc3nCbotgHbXq6D1IGCL6ihMETw7PoN7V0mJvWI8AK%2BMu8Xv%2FEqtidB2lgyyCg%2F5T5btSsS8iNB5Hu5xBScaJ9kTKPQHhAXDwUHwiq8rBhPDmSggjw3k3BNu22M9FEBnvd7DbFU8N47iRWS5oiok5WvVNrkBrBXmizT5By%2F7ah0iFxwhhVU7rGE%2BzJd4Q6cX3sTbLW5rpYBStECHpYhbD%2BB71vyF30WcOjMV4w6I6%2F0KKH7oJltcaxEe8ub6s82%2BFjTYLQ2Ecuis%2F8JPlqHSlgOa%2FBtn5OQZef7bDk4R6I4VzuW7j2yrJ1mUYL5FvBLnR6JXVsyvtNw0w0o0YH8US5mF2nIJWWSU05bJdanUwKqfMlXzK0wgeP9vgY6pgFkb3BdSdvVjOscPl2F%2Bm5XsPOmqyjxy%2FWc1fXJzWdlHSCLyGkBcj77mkht%2FTkx0bz9jelcvmrOxgNhc5up0FHmMfdc8ZyzA8pgw9ynT76N1mPzLkmwkWE6a0aGzKbhbFQHoaPxBGXxR4LV8SIpuBb4rJovfiwXVc%2B1FXVTiF2EjmyDKXDz7uTdKa3KGd7xzxoGnZY5ZAqIvDdI24go%2FOdA3nxQttu5&X-Amz-Signature=31c71e9922c1034811e154e426ea6c7c9f40b7dddeb9fe86dd8009bcf5322749&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZSEIS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPetJJlVUtsKOihufsIs4eGIIAFt97HQ6WCGFEhoUCXAiAB1uRlbupVsC9Gf6HQiO8kk1j5bPykQ24aTdGplnrTFiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuKuI6PYT3zMUpuBKtwDEotl6eqca3DJbRlQaZ7C97cY%2Be3BjEodrYVp%2FChygLywj%2BFBLUZcXdl6zD9e6aet0HcElOi4cfLaZPN6DKGKI88WkN2qUOQuQLclpRpibnI69vlC2TML02VBYXT4RGFpXduaSK39M%2FGi0oqJcASVIz63rpGOTkVpu%2FekewIf0fUBA9sR%2Fwuz2g7ey1m6rI%2FYsWRdIq0qlzBy1MHs5XX8U2pE8MAPsbbU63HOWZjodIWgFnSwf%2Fg3AbpMUGiWNlQdqVBx%2BWiIxmc3nCbotgHbXq6D1IGCL6ihMETw7PoN7V0mJvWI8AK%2BMu8Xv%2FEqtidB2lgyyCg%2F5T5btSsS8iNB5Hu5xBScaJ9kTKPQHhAXDwUHwiq8rBhPDmSggjw3k3BNu22M9FEBnvd7DbFU8N47iRWS5oiok5WvVNrkBrBXmizT5By%2F7ah0iFxwhhVU7rGE%2BzJd4Q6cX3sTbLW5rpYBStECHpYhbD%2BB71vyF30WcOjMV4w6I6%2F0KKH7oJltcaxEe8ub6s82%2BFjTYLQ2Ecuis%2F8JPlqHSlgOa%2FBtn5OQZef7bDk4R6I4VzuW7j2yrJ1mUYL5FvBLnR6JXVsyvtNw0w0o0YH8US5mF2nIJWWSU05bJdanUwKqfMlXzK0wgeP9vgY6pgFkb3BdSdvVjOscPl2F%2Bm5XsPOmqyjxy%2FWc1fXJzWdlHSCLyGkBcj77mkht%2FTkx0bz9jelcvmrOxgNhc5up0FHmMfdc8ZyzA8pgw9ynT76N1mPzLkmwkWE6a0aGzKbhbFQHoaPxBGXxR4LV8SIpuBb4rJovfiwXVc%2B1FXVTiF2EjmyDKXDz7uTdKa3KGd7xzxoGnZY5ZAqIvDdI24go%2FOdA3nxQttu5&X-Amz-Signature=c90ccc25ac3c868d5ae4dd23d7ca2cdf74765f9f3a9c0206bf897ddb43e8888b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZSEIS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPetJJlVUtsKOihufsIs4eGIIAFt97HQ6WCGFEhoUCXAiAB1uRlbupVsC9Gf6HQiO8kk1j5bPykQ24aTdGplnrTFiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuKuI6PYT3zMUpuBKtwDEotl6eqca3DJbRlQaZ7C97cY%2Be3BjEodrYVp%2FChygLywj%2BFBLUZcXdl6zD9e6aet0HcElOi4cfLaZPN6DKGKI88WkN2qUOQuQLclpRpibnI69vlC2TML02VBYXT4RGFpXduaSK39M%2FGi0oqJcASVIz63rpGOTkVpu%2FekewIf0fUBA9sR%2Fwuz2g7ey1m6rI%2FYsWRdIq0qlzBy1MHs5XX8U2pE8MAPsbbU63HOWZjodIWgFnSwf%2Fg3AbpMUGiWNlQdqVBx%2BWiIxmc3nCbotgHbXq6D1IGCL6ihMETw7PoN7V0mJvWI8AK%2BMu8Xv%2FEqtidB2lgyyCg%2F5T5btSsS8iNB5Hu5xBScaJ9kTKPQHhAXDwUHwiq8rBhPDmSggjw3k3BNu22M9FEBnvd7DbFU8N47iRWS5oiok5WvVNrkBrBXmizT5By%2F7ah0iFxwhhVU7rGE%2BzJd4Q6cX3sTbLW5rpYBStECHpYhbD%2BB71vyF30WcOjMV4w6I6%2F0KKH7oJltcaxEe8ub6s82%2BFjTYLQ2Ecuis%2F8JPlqHSlgOa%2FBtn5OQZef7bDk4R6I4VzuW7j2yrJ1mUYL5FvBLnR6JXVsyvtNw0w0o0YH8US5mF2nIJWWSU05bJdanUwKqfMlXzK0wgeP9vgY6pgFkb3BdSdvVjOscPl2F%2Bm5XsPOmqyjxy%2FWc1fXJzWdlHSCLyGkBcj77mkht%2FTkx0bz9jelcvmrOxgNhc5up0FHmMfdc8ZyzA8pgw9ynT76N1mPzLkmwkWE6a0aGzKbhbFQHoaPxBGXxR4LV8SIpuBb4rJovfiwXVc%2B1FXVTiF2EjmyDKXDz7uTdKa3KGd7xzxoGnZY5ZAqIvDdI24go%2FOdA3nxQttu5&X-Amz-Signature=486121aca0ea9b663c6ec843ff64998ee1c646181675012e72560f0745d431a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZSEIS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPetJJlVUtsKOihufsIs4eGIIAFt97HQ6WCGFEhoUCXAiAB1uRlbupVsC9Gf6HQiO8kk1j5bPykQ24aTdGplnrTFiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuKuI6PYT3zMUpuBKtwDEotl6eqca3DJbRlQaZ7C97cY%2Be3BjEodrYVp%2FChygLywj%2BFBLUZcXdl6zD9e6aet0HcElOi4cfLaZPN6DKGKI88WkN2qUOQuQLclpRpibnI69vlC2TML02VBYXT4RGFpXduaSK39M%2FGi0oqJcASVIz63rpGOTkVpu%2FekewIf0fUBA9sR%2Fwuz2g7ey1m6rI%2FYsWRdIq0qlzBy1MHs5XX8U2pE8MAPsbbU63HOWZjodIWgFnSwf%2Fg3AbpMUGiWNlQdqVBx%2BWiIxmc3nCbotgHbXq6D1IGCL6ihMETw7PoN7V0mJvWI8AK%2BMu8Xv%2FEqtidB2lgyyCg%2F5T5btSsS8iNB5Hu5xBScaJ9kTKPQHhAXDwUHwiq8rBhPDmSggjw3k3BNu22M9FEBnvd7DbFU8N47iRWS5oiok5WvVNrkBrBXmizT5By%2F7ah0iFxwhhVU7rGE%2BzJd4Q6cX3sTbLW5rpYBStECHpYhbD%2BB71vyF30WcOjMV4w6I6%2F0KKH7oJltcaxEe8ub6s82%2BFjTYLQ2Ecuis%2F8JPlqHSlgOa%2FBtn5OQZef7bDk4R6I4VzuW7j2yrJ1mUYL5FvBLnR6JXVsyvtNw0w0o0YH8US5mF2nIJWWSU05bJdanUwKqfMlXzK0wgeP9vgY6pgFkb3BdSdvVjOscPl2F%2Bm5XsPOmqyjxy%2FWc1fXJzWdlHSCLyGkBcj77mkht%2FTkx0bz9jelcvmrOxgNhc5up0FHmMfdc8ZyzA8pgw9ynT76N1mPzLkmwkWE6a0aGzKbhbFQHoaPxBGXxR4LV8SIpuBb4rJovfiwXVc%2B1FXVTiF2EjmyDKXDz7uTdKa3KGd7xzxoGnZY5ZAqIvDdI24go%2FOdA3nxQttu5&X-Amz-Signature=63d0cf8dc1ad22e8cab93df11b48b1bee0c95364bf7c452d680eb581a733a889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UZSEIS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPetJJlVUtsKOihufsIs4eGIIAFt97HQ6WCGFEhoUCXAiAB1uRlbupVsC9Gf6HQiO8kk1j5bPykQ24aTdGplnrTFiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuKuI6PYT3zMUpuBKtwDEotl6eqca3DJbRlQaZ7C97cY%2Be3BjEodrYVp%2FChygLywj%2BFBLUZcXdl6zD9e6aet0HcElOi4cfLaZPN6DKGKI88WkN2qUOQuQLclpRpibnI69vlC2TML02VBYXT4RGFpXduaSK39M%2FGi0oqJcASVIz63rpGOTkVpu%2FekewIf0fUBA9sR%2Fwuz2g7ey1m6rI%2FYsWRdIq0qlzBy1MHs5XX8U2pE8MAPsbbU63HOWZjodIWgFnSwf%2Fg3AbpMUGiWNlQdqVBx%2BWiIxmc3nCbotgHbXq6D1IGCL6ihMETw7PoN7V0mJvWI8AK%2BMu8Xv%2FEqtidB2lgyyCg%2F5T5btSsS8iNB5Hu5xBScaJ9kTKPQHhAXDwUHwiq8rBhPDmSggjw3k3BNu22M9FEBnvd7DbFU8N47iRWS5oiok5WvVNrkBrBXmizT5By%2F7ah0iFxwhhVU7rGE%2BzJd4Q6cX3sTbLW5rpYBStECHpYhbD%2BB71vyF30WcOjMV4w6I6%2F0KKH7oJltcaxEe8ub6s82%2BFjTYLQ2Ecuis%2F8JPlqHSlgOa%2FBtn5OQZef7bDk4R6I4VzuW7j2yrJ1mUYL5FvBLnR6JXVsyvtNw0w0o0YH8US5mF2nIJWWSU05bJdanUwKqfMlXzK0wgeP9vgY6pgFkb3BdSdvVjOscPl2F%2Bm5XsPOmqyjxy%2FWc1fXJzWdlHSCLyGkBcj77mkht%2FTkx0bz9jelcvmrOxgNhc5up0FHmMfdc8ZyzA8pgw9ynT76N1mPzLkmwkWE6a0aGzKbhbFQHoaPxBGXxR4LV8SIpuBb4rJovfiwXVc%2B1FXVTiF2EjmyDKXDz7uTdKa3KGd7xzxoGnZY5ZAqIvDdI24go%2FOdA3nxQttu5&X-Amz-Signature=776ab41a32153c9801ed8d7224bb2e7803d967b46416174f18361a1aaa391c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
