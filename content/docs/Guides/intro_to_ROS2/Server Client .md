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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCLKH3Z%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEEQydIJVOAGR0No15cz8RZ1lfOuHGeHwVFls6mghiuOAiBWNy3zQWOmiNCLyKstC0YzSGHvBfKJxS128AK7fUxOliqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbez6TXkTlL8JHCrKtwDPUYahT890EXtCwR6p%2FS%2Boj0EDZAei8WzSKfe4QNX5CDgYKOixyGZmepP5tc9QupCwKpmb%2FQtfdBDpHEbloFz%2B9KWHTlA%2B%2BEN1UtSE7x5IOQTwzlUzSjUrlLD1Ufz2RfHgnTro6TT1YhFmOnn1jjTKhs2Pj2FWTzSHOTbRsbFc5UiR%2BZ1efbqOGT4PLDXqaOjdaF3wTy0IlKk55q7o7KiFmC16WGTivxNeWNmNJQevNLi8zKH%2BjAGL%2FXzuClV4i3tTqnED9hz%2F%2BYYCaiQFHZpV9PY1xHy3ULd7t7mKj7KoR%2BOJIAYF50PS0c8iiwHTwmMAINqMyFYKS1FmY4vJWFWf7ucfLuMB%2BXwkMIanvWWOjyHrAYxmQPO9ZHzzxRiNkaPk25Hd7W3iP95iA8r5igxsxDABTmNqihGyuFYILNoVm7xYdF14RgBsVBj7UchYECfF2pj%2FtYsP0bk01ZnLsymeuHNoJxhpVNe27o7U4xkQnl33GlDaldLUljJ0RRorTA%2Bm5kWN6f5di%2F5W95csT%2BSX4uefnXZb20EbmdgdpySFbDZivxAoG099%2FLW1WsDAbeS3IcZY89mfdVsQ3f%2BhMXoXl2giJROCmGN4wk45jj7otKAWCG460p9J1QP7ogwibSEvgY6pgGAhYgU4VTKDe9ZnoZzKcApcT3pghkYx0ARQCppiZf9ovil3l2m2y%2FuJ67CaF4xSy2OT4RbQAoUXGPW%2BnGTbtbyCQt83gj5UVVmSaguq6zeVlcbe8sjXVJ4%2F4mJS2fsc9GDQFpdNIJPFH%2BolePZCp7scWAtOlCNULk1VdXxRldEg6wEosa27CDF29YB%2BGjepGwbPi5krALUEAiRZHbKrl2HuIOHrL%2Bj&X-Amz-Signature=7224137e173dac25584c636652c3835c0a19e4dcd712ea9ec8a83ef1fa6b7fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCLKH3Z%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEEQydIJVOAGR0No15cz8RZ1lfOuHGeHwVFls6mghiuOAiBWNy3zQWOmiNCLyKstC0YzSGHvBfKJxS128AK7fUxOliqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbez6TXkTlL8JHCrKtwDPUYahT890EXtCwR6p%2FS%2Boj0EDZAei8WzSKfe4QNX5CDgYKOixyGZmepP5tc9QupCwKpmb%2FQtfdBDpHEbloFz%2B9KWHTlA%2B%2BEN1UtSE7x5IOQTwzlUzSjUrlLD1Ufz2RfHgnTro6TT1YhFmOnn1jjTKhs2Pj2FWTzSHOTbRsbFc5UiR%2BZ1efbqOGT4PLDXqaOjdaF3wTy0IlKk55q7o7KiFmC16WGTivxNeWNmNJQevNLi8zKH%2BjAGL%2FXzuClV4i3tTqnED9hz%2F%2BYYCaiQFHZpV9PY1xHy3ULd7t7mKj7KoR%2BOJIAYF50PS0c8iiwHTwmMAINqMyFYKS1FmY4vJWFWf7ucfLuMB%2BXwkMIanvWWOjyHrAYxmQPO9ZHzzxRiNkaPk25Hd7W3iP95iA8r5igxsxDABTmNqihGyuFYILNoVm7xYdF14RgBsVBj7UchYECfF2pj%2FtYsP0bk01ZnLsymeuHNoJxhpVNe27o7U4xkQnl33GlDaldLUljJ0RRorTA%2Bm5kWN6f5di%2F5W95csT%2BSX4uefnXZb20EbmdgdpySFbDZivxAoG099%2FLW1WsDAbeS3IcZY89mfdVsQ3f%2BhMXoXl2giJROCmGN4wk45jj7otKAWCG460p9J1QP7ogwibSEvgY6pgGAhYgU4VTKDe9ZnoZzKcApcT3pghkYx0ARQCppiZf9ovil3l2m2y%2FuJ67CaF4xSy2OT4RbQAoUXGPW%2BnGTbtbyCQt83gj5UVVmSaguq6zeVlcbe8sjXVJ4%2F4mJS2fsc9GDQFpdNIJPFH%2BolePZCp7scWAtOlCNULk1VdXxRldEg6wEosa27CDF29YB%2BGjepGwbPi5krALUEAiRZHbKrl2HuIOHrL%2Bj&X-Amz-Signature=1b7ecc393dc53db39c682092d76745140e01ded20e0e6283cf34d7da33d16fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCLKH3Z%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEEQydIJVOAGR0No15cz8RZ1lfOuHGeHwVFls6mghiuOAiBWNy3zQWOmiNCLyKstC0YzSGHvBfKJxS128AK7fUxOliqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbez6TXkTlL8JHCrKtwDPUYahT890EXtCwR6p%2FS%2Boj0EDZAei8WzSKfe4QNX5CDgYKOixyGZmepP5tc9QupCwKpmb%2FQtfdBDpHEbloFz%2B9KWHTlA%2B%2BEN1UtSE7x5IOQTwzlUzSjUrlLD1Ufz2RfHgnTro6TT1YhFmOnn1jjTKhs2Pj2FWTzSHOTbRsbFc5UiR%2BZ1efbqOGT4PLDXqaOjdaF3wTy0IlKk55q7o7KiFmC16WGTivxNeWNmNJQevNLi8zKH%2BjAGL%2FXzuClV4i3tTqnED9hz%2F%2BYYCaiQFHZpV9PY1xHy3ULd7t7mKj7KoR%2BOJIAYF50PS0c8iiwHTwmMAINqMyFYKS1FmY4vJWFWf7ucfLuMB%2BXwkMIanvWWOjyHrAYxmQPO9ZHzzxRiNkaPk25Hd7W3iP95iA8r5igxsxDABTmNqihGyuFYILNoVm7xYdF14RgBsVBj7UchYECfF2pj%2FtYsP0bk01ZnLsymeuHNoJxhpVNe27o7U4xkQnl33GlDaldLUljJ0RRorTA%2Bm5kWN6f5di%2F5W95csT%2BSX4uefnXZb20EbmdgdpySFbDZivxAoG099%2FLW1WsDAbeS3IcZY89mfdVsQ3f%2BhMXoXl2giJROCmGN4wk45jj7otKAWCG460p9J1QP7ogwibSEvgY6pgGAhYgU4VTKDe9ZnoZzKcApcT3pghkYx0ARQCppiZf9ovil3l2m2y%2FuJ67CaF4xSy2OT4RbQAoUXGPW%2BnGTbtbyCQt83gj5UVVmSaguq6zeVlcbe8sjXVJ4%2F4mJS2fsc9GDQFpdNIJPFH%2BolePZCp7scWAtOlCNULk1VdXxRldEg6wEosa27CDF29YB%2BGjepGwbPi5krALUEAiRZHbKrl2HuIOHrL%2Bj&X-Amz-Signature=7105e4b8f756830b0fedb10773dd973d85921bc3bcc2350bd9f08e9ca3bff5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCLKH3Z%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEEQydIJVOAGR0No15cz8RZ1lfOuHGeHwVFls6mghiuOAiBWNy3zQWOmiNCLyKstC0YzSGHvBfKJxS128AK7fUxOliqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbez6TXkTlL8JHCrKtwDPUYahT890EXtCwR6p%2FS%2Boj0EDZAei8WzSKfe4QNX5CDgYKOixyGZmepP5tc9QupCwKpmb%2FQtfdBDpHEbloFz%2B9KWHTlA%2B%2BEN1UtSE7x5IOQTwzlUzSjUrlLD1Ufz2RfHgnTro6TT1YhFmOnn1jjTKhs2Pj2FWTzSHOTbRsbFc5UiR%2BZ1efbqOGT4PLDXqaOjdaF3wTy0IlKk55q7o7KiFmC16WGTivxNeWNmNJQevNLi8zKH%2BjAGL%2FXzuClV4i3tTqnED9hz%2F%2BYYCaiQFHZpV9PY1xHy3ULd7t7mKj7KoR%2BOJIAYF50PS0c8iiwHTwmMAINqMyFYKS1FmY4vJWFWf7ucfLuMB%2BXwkMIanvWWOjyHrAYxmQPO9ZHzzxRiNkaPk25Hd7W3iP95iA8r5igxsxDABTmNqihGyuFYILNoVm7xYdF14RgBsVBj7UchYECfF2pj%2FtYsP0bk01ZnLsymeuHNoJxhpVNe27o7U4xkQnl33GlDaldLUljJ0RRorTA%2Bm5kWN6f5di%2F5W95csT%2BSX4uefnXZb20EbmdgdpySFbDZivxAoG099%2FLW1WsDAbeS3IcZY89mfdVsQ3f%2BhMXoXl2giJROCmGN4wk45jj7otKAWCG460p9J1QP7ogwibSEvgY6pgGAhYgU4VTKDe9ZnoZzKcApcT3pghkYx0ARQCppiZf9ovil3l2m2y%2FuJ67CaF4xSy2OT4RbQAoUXGPW%2BnGTbtbyCQt83gj5UVVmSaguq6zeVlcbe8sjXVJ4%2F4mJS2fsc9GDQFpdNIJPFH%2BolePZCp7scWAtOlCNULk1VdXxRldEg6wEosa27CDF29YB%2BGjepGwbPi5krALUEAiRZHbKrl2HuIOHrL%2Bj&X-Amz-Signature=e8be09f8752b5612fdf51541655af19bda78e257bbc530b15fdbd8cfd4ead02c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCLKH3Z%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEEQydIJVOAGR0No15cz8RZ1lfOuHGeHwVFls6mghiuOAiBWNy3zQWOmiNCLyKstC0YzSGHvBfKJxS128AK7fUxOliqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbez6TXkTlL8JHCrKtwDPUYahT890EXtCwR6p%2FS%2Boj0EDZAei8WzSKfe4QNX5CDgYKOixyGZmepP5tc9QupCwKpmb%2FQtfdBDpHEbloFz%2B9KWHTlA%2B%2BEN1UtSE7x5IOQTwzlUzSjUrlLD1Ufz2RfHgnTro6TT1YhFmOnn1jjTKhs2Pj2FWTzSHOTbRsbFc5UiR%2BZ1efbqOGT4PLDXqaOjdaF3wTy0IlKk55q7o7KiFmC16WGTivxNeWNmNJQevNLi8zKH%2BjAGL%2FXzuClV4i3tTqnED9hz%2F%2BYYCaiQFHZpV9PY1xHy3ULd7t7mKj7KoR%2BOJIAYF50PS0c8iiwHTwmMAINqMyFYKS1FmY4vJWFWf7ucfLuMB%2BXwkMIanvWWOjyHrAYxmQPO9ZHzzxRiNkaPk25Hd7W3iP95iA8r5igxsxDABTmNqihGyuFYILNoVm7xYdF14RgBsVBj7UchYECfF2pj%2FtYsP0bk01ZnLsymeuHNoJxhpVNe27o7U4xkQnl33GlDaldLUljJ0RRorTA%2Bm5kWN6f5di%2F5W95csT%2BSX4uefnXZb20EbmdgdpySFbDZivxAoG099%2FLW1WsDAbeS3IcZY89mfdVsQ3f%2BhMXoXl2giJROCmGN4wk45jj7otKAWCG460p9J1QP7ogwibSEvgY6pgGAhYgU4VTKDe9ZnoZzKcApcT3pghkYx0ARQCppiZf9ovil3l2m2y%2FuJ67CaF4xSy2OT4RbQAoUXGPW%2BnGTbtbyCQt83gj5UVVmSaguq6zeVlcbe8sjXVJ4%2F4mJS2fsc9GDQFpdNIJPFH%2BolePZCp7scWAtOlCNULk1VdXxRldEg6wEosa27CDF29YB%2BGjepGwbPi5krALUEAiRZHbKrl2HuIOHrL%2Bj&X-Amz-Signature=949068dbb4cb938386a8335df4e9df8cadadf556516eb9fd9867dac4f692ee11&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
