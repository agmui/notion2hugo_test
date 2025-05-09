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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP7T7BV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNOZiNKFYqOlG7oeNKKhB05JHgIB0%2FR6Pcmx0tyotkhAiEAnqypPKww9o77BPteO9qjnm4fY5IviDSfwNWSv86X8%2FsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9kbNmg%2BGqMn374CrcA8BFInVi4R%2BuDZhEWsIZW%2FRoFrnsLkDeTMmkVKt%2FLBKeASz9%2Ba8Ogqfoh%2FeeSjo58CiFmhyRtoAhAw5bHNLCft%2B%2FijESdNIZ5rGZOApZJ3MSoijqPLArwF6LuitCSeZXc4cjm5tZHDVrJtwev25Wxqka%2F4MRIlEpx21mj52J1Jp2tVCWBALLV%2BpS8loBKCn3SGgJP%2BZb%2F94f1UEFbRLIAMsb4ZWSXYMHBk%2BA16lCh%2FPlWiNJKSwiuXBf6OF2SnC%2Bw5mPisaflD%2FkT7Nv3kV9tLCuz3vtFmpQGGmzpq2XYkIUz0hKzkxBzC41xoEm%2BynXVtYIrbIgKymjtW7%2FYYrVP%2BlfZfAWFDDWIfqYWXLahsBVTlsyd1Hwxn6XQ3aJoY%2Bk1JxT8XwDHhJhgQg2lk2AAFG88%2BM5%2FwO6VDk4gWMkDFPbq9Wh1yCkQkM7wS6vahxCUIBlDSExjv39%2B%2F5QhrbdnR7NLPXzxyPbUUB%2FPHPBGwLMfo8gaFkflIbLUjcTazCvEaHCdRpyn9cHk603VcO0AxstwoLj%2BFDWj2quX%2Fkpc3239rgdR9Tl9revxq4pALcB8LuDmvkfvZ3k%2By5UZ0Ngrz770kFyNGKChnc6q2Hnhq4b%2BOEElxukjzhTrnVZMNaB%2BsAGOqUBHY%2FVCdTK1Rhvo85S7nWjl5ov8zfa3wfxSS4UWYBcD7p7Gy6xr0QXk7OOF8qbwPDExnk6tOnqlshic6tzAqJBtPkVQwIvI6dWEAw7OI3p4wgsl2PFrq9mcCCLRByklLylPhCqqQSqn2xIlT%2FGRmb%2FMVDPgjUaGy1%2BEjXa%2FfGbipgL4bPr1kSBmRISFHP%2FqUMjpzAvrE%2Fjf7btApMNrk0IsxyM0nDw&X-Amz-Signature=67898faeb17df00b405d156b0e8a99aa39b76bc0e2912981d4de29f90fe247fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP7T7BV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNOZiNKFYqOlG7oeNKKhB05JHgIB0%2FR6Pcmx0tyotkhAiEAnqypPKww9o77BPteO9qjnm4fY5IviDSfwNWSv86X8%2FsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9kbNmg%2BGqMn374CrcA8BFInVi4R%2BuDZhEWsIZW%2FRoFrnsLkDeTMmkVKt%2FLBKeASz9%2Ba8Ogqfoh%2FeeSjo58CiFmhyRtoAhAw5bHNLCft%2B%2FijESdNIZ5rGZOApZJ3MSoijqPLArwF6LuitCSeZXc4cjm5tZHDVrJtwev25Wxqka%2F4MRIlEpx21mj52J1Jp2tVCWBALLV%2BpS8loBKCn3SGgJP%2BZb%2F94f1UEFbRLIAMsb4ZWSXYMHBk%2BA16lCh%2FPlWiNJKSwiuXBf6OF2SnC%2Bw5mPisaflD%2FkT7Nv3kV9tLCuz3vtFmpQGGmzpq2XYkIUz0hKzkxBzC41xoEm%2BynXVtYIrbIgKymjtW7%2FYYrVP%2BlfZfAWFDDWIfqYWXLahsBVTlsyd1Hwxn6XQ3aJoY%2Bk1JxT8XwDHhJhgQg2lk2AAFG88%2BM5%2FwO6VDk4gWMkDFPbq9Wh1yCkQkM7wS6vahxCUIBlDSExjv39%2B%2F5QhrbdnR7NLPXzxyPbUUB%2FPHPBGwLMfo8gaFkflIbLUjcTazCvEaHCdRpyn9cHk603VcO0AxstwoLj%2BFDWj2quX%2Fkpc3239rgdR9Tl9revxq4pALcB8LuDmvkfvZ3k%2By5UZ0Ngrz770kFyNGKChnc6q2Hnhq4b%2BOEElxukjzhTrnVZMNaB%2BsAGOqUBHY%2FVCdTK1Rhvo85S7nWjl5ov8zfa3wfxSS4UWYBcD7p7Gy6xr0QXk7OOF8qbwPDExnk6tOnqlshic6tzAqJBtPkVQwIvI6dWEAw7OI3p4wgsl2PFrq9mcCCLRByklLylPhCqqQSqn2xIlT%2FGRmb%2FMVDPgjUaGy1%2BEjXa%2FfGbipgL4bPr1kSBmRISFHP%2FqUMjpzAvrE%2Fjf7btApMNrk0IsxyM0nDw&X-Amz-Signature=bb52c217186edd825fc7a3f5b05e94a942898f204b5d56dae80e809eaf653f89&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP7T7BV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNOZiNKFYqOlG7oeNKKhB05JHgIB0%2FR6Pcmx0tyotkhAiEAnqypPKww9o77BPteO9qjnm4fY5IviDSfwNWSv86X8%2FsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9kbNmg%2BGqMn374CrcA8BFInVi4R%2BuDZhEWsIZW%2FRoFrnsLkDeTMmkVKt%2FLBKeASz9%2Ba8Ogqfoh%2FeeSjo58CiFmhyRtoAhAw5bHNLCft%2B%2FijESdNIZ5rGZOApZJ3MSoijqPLArwF6LuitCSeZXc4cjm5tZHDVrJtwev25Wxqka%2F4MRIlEpx21mj52J1Jp2tVCWBALLV%2BpS8loBKCn3SGgJP%2BZb%2F94f1UEFbRLIAMsb4ZWSXYMHBk%2BA16lCh%2FPlWiNJKSwiuXBf6OF2SnC%2Bw5mPisaflD%2FkT7Nv3kV9tLCuz3vtFmpQGGmzpq2XYkIUz0hKzkxBzC41xoEm%2BynXVtYIrbIgKymjtW7%2FYYrVP%2BlfZfAWFDDWIfqYWXLahsBVTlsyd1Hwxn6XQ3aJoY%2Bk1JxT8XwDHhJhgQg2lk2AAFG88%2BM5%2FwO6VDk4gWMkDFPbq9Wh1yCkQkM7wS6vahxCUIBlDSExjv39%2B%2F5QhrbdnR7NLPXzxyPbUUB%2FPHPBGwLMfo8gaFkflIbLUjcTazCvEaHCdRpyn9cHk603VcO0AxstwoLj%2BFDWj2quX%2Fkpc3239rgdR9Tl9revxq4pALcB8LuDmvkfvZ3k%2By5UZ0Ngrz770kFyNGKChnc6q2Hnhq4b%2BOEElxukjzhTrnVZMNaB%2BsAGOqUBHY%2FVCdTK1Rhvo85S7nWjl5ov8zfa3wfxSS4UWYBcD7p7Gy6xr0QXk7OOF8qbwPDExnk6tOnqlshic6tzAqJBtPkVQwIvI6dWEAw7OI3p4wgsl2PFrq9mcCCLRByklLylPhCqqQSqn2xIlT%2FGRmb%2FMVDPgjUaGy1%2BEjXa%2FfGbipgL4bPr1kSBmRISFHP%2FqUMjpzAvrE%2Fjf7btApMNrk0IsxyM0nDw&X-Amz-Signature=9dff1a2b1cee7c46e109cb921fdf5e316254351d4e16fec50ffee94ae6c0511e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP7T7BV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNOZiNKFYqOlG7oeNKKhB05JHgIB0%2FR6Pcmx0tyotkhAiEAnqypPKww9o77BPteO9qjnm4fY5IviDSfwNWSv86X8%2FsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9kbNmg%2BGqMn374CrcA8BFInVi4R%2BuDZhEWsIZW%2FRoFrnsLkDeTMmkVKt%2FLBKeASz9%2Ba8Ogqfoh%2FeeSjo58CiFmhyRtoAhAw5bHNLCft%2B%2FijESdNIZ5rGZOApZJ3MSoijqPLArwF6LuitCSeZXc4cjm5tZHDVrJtwev25Wxqka%2F4MRIlEpx21mj52J1Jp2tVCWBALLV%2BpS8loBKCn3SGgJP%2BZb%2F94f1UEFbRLIAMsb4ZWSXYMHBk%2BA16lCh%2FPlWiNJKSwiuXBf6OF2SnC%2Bw5mPisaflD%2FkT7Nv3kV9tLCuz3vtFmpQGGmzpq2XYkIUz0hKzkxBzC41xoEm%2BynXVtYIrbIgKymjtW7%2FYYrVP%2BlfZfAWFDDWIfqYWXLahsBVTlsyd1Hwxn6XQ3aJoY%2Bk1JxT8XwDHhJhgQg2lk2AAFG88%2BM5%2FwO6VDk4gWMkDFPbq9Wh1yCkQkM7wS6vahxCUIBlDSExjv39%2B%2F5QhrbdnR7NLPXzxyPbUUB%2FPHPBGwLMfo8gaFkflIbLUjcTazCvEaHCdRpyn9cHk603VcO0AxstwoLj%2BFDWj2quX%2Fkpc3239rgdR9Tl9revxq4pALcB8LuDmvkfvZ3k%2By5UZ0Ngrz770kFyNGKChnc6q2Hnhq4b%2BOEElxukjzhTrnVZMNaB%2BsAGOqUBHY%2FVCdTK1Rhvo85S7nWjl5ov8zfa3wfxSS4UWYBcD7p7Gy6xr0QXk7OOF8qbwPDExnk6tOnqlshic6tzAqJBtPkVQwIvI6dWEAw7OI3p4wgsl2PFrq9mcCCLRByklLylPhCqqQSqn2xIlT%2FGRmb%2FMVDPgjUaGy1%2BEjXa%2FfGbipgL4bPr1kSBmRISFHP%2FqUMjpzAvrE%2Fjf7btApMNrk0IsxyM0nDw&X-Amz-Signature=5e6adfb6587038600ecbffc02245222fe2b9cec0396990d480ca24caad983d13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP7T7BV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNOZiNKFYqOlG7oeNKKhB05JHgIB0%2FR6Pcmx0tyotkhAiEAnqypPKww9o77BPteO9qjnm4fY5IviDSfwNWSv86X8%2FsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT9kbNmg%2BGqMn374CrcA8BFInVi4R%2BuDZhEWsIZW%2FRoFrnsLkDeTMmkVKt%2FLBKeASz9%2Ba8Ogqfoh%2FeeSjo58CiFmhyRtoAhAw5bHNLCft%2B%2FijESdNIZ5rGZOApZJ3MSoijqPLArwF6LuitCSeZXc4cjm5tZHDVrJtwev25Wxqka%2F4MRIlEpx21mj52J1Jp2tVCWBALLV%2BpS8loBKCn3SGgJP%2BZb%2F94f1UEFbRLIAMsb4ZWSXYMHBk%2BA16lCh%2FPlWiNJKSwiuXBf6OF2SnC%2Bw5mPisaflD%2FkT7Nv3kV9tLCuz3vtFmpQGGmzpq2XYkIUz0hKzkxBzC41xoEm%2BynXVtYIrbIgKymjtW7%2FYYrVP%2BlfZfAWFDDWIfqYWXLahsBVTlsyd1Hwxn6XQ3aJoY%2Bk1JxT8XwDHhJhgQg2lk2AAFG88%2BM5%2FwO6VDk4gWMkDFPbq9Wh1yCkQkM7wS6vahxCUIBlDSExjv39%2B%2F5QhrbdnR7NLPXzxyPbUUB%2FPHPBGwLMfo8gaFkflIbLUjcTazCvEaHCdRpyn9cHk603VcO0AxstwoLj%2BFDWj2quX%2Fkpc3239rgdR9Tl9revxq4pALcB8LuDmvkfvZ3k%2By5UZ0Ngrz770kFyNGKChnc6q2Hnhq4b%2BOEElxukjzhTrnVZMNaB%2BsAGOqUBHY%2FVCdTK1Rhvo85S7nWjl5ov8zfa3wfxSS4UWYBcD7p7Gy6xr0QXk7OOF8qbwPDExnk6tOnqlshic6tzAqJBtPkVQwIvI6dWEAw7OI3p4wgsl2PFrq9mcCCLRByklLylPhCqqQSqn2xIlT%2FGRmb%2FMVDPgjUaGy1%2BEjXa%2FfGbipgL4bPr1kSBmRISFHP%2FqUMjpzAvrE%2Fjf7btApMNrk0IsxyM0nDw&X-Amz-Signature=410b49f0b9d2881ca4eb650768dfeb217ff17f93d44735b5c5cbf5c44160e273&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
