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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FF543GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgRosaRzBdD0ri1gYFyaJTr%2BZgxycgu9yFe3rrrSsr5AiEA8ycISTKAbsvSR%2BPMwUACYADiN5WkzGvzpkbl9WQ5xVYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNY7bzshOy76xWm7CrcA5HqTr7fSY29DFgcmMj5qpmRVYqiqyIHqNyrKQ4HBwP4oRuNZfVPbsVJ9oKffRJERBhKLrrot9THnjCrwlSkizHsmOOh4gBr7fZHkE1e75hbSq0dSvJ%2FET6bExGQK7BVZl5mQ7HuTcchqXsurkqA%2BHytLGMoJYQm%2B%2BpfBHw%2FQohcTIOWY6SHtGJfjH%2F7O0QV5UfaygN39NJjrULATRW3Q6FZlJ6LF12jwYcIXyrHnPtOBnHoZWm4GkPvhx3y6Gs8NZrvenAh496s66Ro1BZNGds%2BxaAsdWY%2BKmvHFKOU7QASbWVcEhizdTeFafHobOZ%2FZv4ZzbeViOnKUDPgMjjzt3IsA2r2HiCgUz4eHNfj4GKxJtL32kigwyLZIahO2xOezhrPUKBSCNkmn0SAVqI6q8wNsaRu%2FttoKmcrUMsWBb4qg8G8ZTx0mx7X2%2BU0W1vg5glo7%2B9t2QReHO6HqVlRkeVUQ17U9rQLHl74fgfDmcI7tzsYD2KhfX5sq9lL4JfnHVC4cJjLVkM%2FFyY6ADze91JPb7iw3w5izaRKvyuca9%2FR7VseATHeumK%2BixruCnvzIz59DI7e00ilEVETmdgKk8ygCHSjy5RgeSkmxK5BC0uePnFDErPD4B3%2FcVHdMPWUjL4GOqUB9w7fQDjEO4ZirpZWktLBf0j7WuHmhRogo5Girc310Mct2J4OQ6H2uW4P%2BcHVSjKUrZ1Xz%2B5qhMW9a9dnSv3nycVZCINFutm%2BDxFbnYsoisNFGQc%2B5o3HJfzZxHgW%2BbzZwBK3FuW%2FwFtG98wJ0CTKJ1OKaljyaw9HK4e8eLQo9mlUhpGOArrRQwYzFi3X8UntRAfHMZ86pE%2BVXu4uyf5Jc6EuNamX&X-Amz-Signature=dfebe45dbf8b03c5cf3224a89c93f1ab3c81669c93cfdaf221bd5fc9dae022c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FF543GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgRosaRzBdD0ri1gYFyaJTr%2BZgxycgu9yFe3rrrSsr5AiEA8ycISTKAbsvSR%2BPMwUACYADiN5WkzGvzpkbl9WQ5xVYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNY7bzshOy76xWm7CrcA5HqTr7fSY29DFgcmMj5qpmRVYqiqyIHqNyrKQ4HBwP4oRuNZfVPbsVJ9oKffRJERBhKLrrot9THnjCrwlSkizHsmOOh4gBr7fZHkE1e75hbSq0dSvJ%2FET6bExGQK7BVZl5mQ7HuTcchqXsurkqA%2BHytLGMoJYQm%2B%2BpfBHw%2FQohcTIOWY6SHtGJfjH%2F7O0QV5UfaygN39NJjrULATRW3Q6FZlJ6LF12jwYcIXyrHnPtOBnHoZWm4GkPvhx3y6Gs8NZrvenAh496s66Ro1BZNGds%2BxaAsdWY%2BKmvHFKOU7QASbWVcEhizdTeFafHobOZ%2FZv4ZzbeViOnKUDPgMjjzt3IsA2r2HiCgUz4eHNfj4GKxJtL32kigwyLZIahO2xOezhrPUKBSCNkmn0SAVqI6q8wNsaRu%2FttoKmcrUMsWBb4qg8G8ZTx0mx7X2%2BU0W1vg5glo7%2B9t2QReHO6HqVlRkeVUQ17U9rQLHl74fgfDmcI7tzsYD2KhfX5sq9lL4JfnHVC4cJjLVkM%2FFyY6ADze91JPb7iw3w5izaRKvyuca9%2FR7VseATHeumK%2BixruCnvzIz59DI7e00ilEVETmdgKk8ygCHSjy5RgeSkmxK5BC0uePnFDErPD4B3%2FcVHdMPWUjL4GOqUB9w7fQDjEO4ZirpZWktLBf0j7WuHmhRogo5Girc310Mct2J4OQ6H2uW4P%2BcHVSjKUrZ1Xz%2B5qhMW9a9dnSv3nycVZCINFutm%2BDxFbnYsoisNFGQc%2B5o3HJfzZxHgW%2BbzZwBK3FuW%2FwFtG98wJ0CTKJ1OKaljyaw9HK4e8eLQo9mlUhpGOArrRQwYzFi3X8UntRAfHMZ86pE%2BVXu4uyf5Jc6EuNamX&X-Amz-Signature=91ed983262b16ebbbbab0cd83a0c92bb04254c291b340da863dc6a064bc68b76&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FF543GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgRosaRzBdD0ri1gYFyaJTr%2BZgxycgu9yFe3rrrSsr5AiEA8ycISTKAbsvSR%2BPMwUACYADiN5WkzGvzpkbl9WQ5xVYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNY7bzshOy76xWm7CrcA5HqTr7fSY29DFgcmMj5qpmRVYqiqyIHqNyrKQ4HBwP4oRuNZfVPbsVJ9oKffRJERBhKLrrot9THnjCrwlSkizHsmOOh4gBr7fZHkE1e75hbSq0dSvJ%2FET6bExGQK7BVZl5mQ7HuTcchqXsurkqA%2BHytLGMoJYQm%2B%2BpfBHw%2FQohcTIOWY6SHtGJfjH%2F7O0QV5UfaygN39NJjrULATRW3Q6FZlJ6LF12jwYcIXyrHnPtOBnHoZWm4GkPvhx3y6Gs8NZrvenAh496s66Ro1BZNGds%2BxaAsdWY%2BKmvHFKOU7QASbWVcEhizdTeFafHobOZ%2FZv4ZzbeViOnKUDPgMjjzt3IsA2r2HiCgUz4eHNfj4GKxJtL32kigwyLZIahO2xOezhrPUKBSCNkmn0SAVqI6q8wNsaRu%2FttoKmcrUMsWBb4qg8G8ZTx0mx7X2%2BU0W1vg5glo7%2B9t2QReHO6HqVlRkeVUQ17U9rQLHl74fgfDmcI7tzsYD2KhfX5sq9lL4JfnHVC4cJjLVkM%2FFyY6ADze91JPb7iw3w5izaRKvyuca9%2FR7VseATHeumK%2BixruCnvzIz59DI7e00ilEVETmdgKk8ygCHSjy5RgeSkmxK5BC0uePnFDErPD4B3%2FcVHdMPWUjL4GOqUB9w7fQDjEO4ZirpZWktLBf0j7WuHmhRogo5Girc310Mct2J4OQ6H2uW4P%2BcHVSjKUrZ1Xz%2B5qhMW9a9dnSv3nycVZCINFutm%2BDxFbnYsoisNFGQc%2B5o3HJfzZxHgW%2BbzZwBK3FuW%2FwFtG98wJ0CTKJ1OKaljyaw9HK4e8eLQo9mlUhpGOArrRQwYzFi3X8UntRAfHMZ86pE%2BVXu4uyf5Jc6EuNamX&X-Amz-Signature=11a9ab7a5728255739e1537fd5a04f28f4c9ac1d268527f8c79c87486cb51297&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FF543GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgRosaRzBdD0ri1gYFyaJTr%2BZgxycgu9yFe3rrrSsr5AiEA8ycISTKAbsvSR%2BPMwUACYADiN5WkzGvzpkbl9WQ5xVYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNY7bzshOy76xWm7CrcA5HqTr7fSY29DFgcmMj5qpmRVYqiqyIHqNyrKQ4HBwP4oRuNZfVPbsVJ9oKffRJERBhKLrrot9THnjCrwlSkizHsmOOh4gBr7fZHkE1e75hbSq0dSvJ%2FET6bExGQK7BVZl5mQ7HuTcchqXsurkqA%2BHytLGMoJYQm%2B%2BpfBHw%2FQohcTIOWY6SHtGJfjH%2F7O0QV5UfaygN39NJjrULATRW3Q6FZlJ6LF12jwYcIXyrHnPtOBnHoZWm4GkPvhx3y6Gs8NZrvenAh496s66Ro1BZNGds%2BxaAsdWY%2BKmvHFKOU7QASbWVcEhizdTeFafHobOZ%2FZv4ZzbeViOnKUDPgMjjzt3IsA2r2HiCgUz4eHNfj4GKxJtL32kigwyLZIahO2xOezhrPUKBSCNkmn0SAVqI6q8wNsaRu%2FttoKmcrUMsWBb4qg8G8ZTx0mx7X2%2BU0W1vg5glo7%2B9t2QReHO6HqVlRkeVUQ17U9rQLHl74fgfDmcI7tzsYD2KhfX5sq9lL4JfnHVC4cJjLVkM%2FFyY6ADze91JPb7iw3w5izaRKvyuca9%2FR7VseATHeumK%2BixruCnvzIz59DI7e00ilEVETmdgKk8ygCHSjy5RgeSkmxK5BC0uePnFDErPD4B3%2FcVHdMPWUjL4GOqUB9w7fQDjEO4ZirpZWktLBf0j7WuHmhRogo5Girc310Mct2J4OQ6H2uW4P%2BcHVSjKUrZ1Xz%2B5qhMW9a9dnSv3nycVZCINFutm%2BDxFbnYsoisNFGQc%2B5o3HJfzZxHgW%2BbzZwBK3FuW%2FwFtG98wJ0CTKJ1OKaljyaw9HK4e8eLQo9mlUhpGOArrRQwYzFi3X8UntRAfHMZ86pE%2BVXu4uyf5Jc6EuNamX&X-Amz-Signature=4321737319e6c27e6764d8f6d6d18cb9e71a29b1908e14c2d34721b251db8fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FF543GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgRosaRzBdD0ri1gYFyaJTr%2BZgxycgu9yFe3rrrSsr5AiEA8ycISTKAbsvSR%2BPMwUACYADiN5WkzGvzpkbl9WQ5xVYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNY7bzshOy76xWm7CrcA5HqTr7fSY29DFgcmMj5qpmRVYqiqyIHqNyrKQ4HBwP4oRuNZfVPbsVJ9oKffRJERBhKLrrot9THnjCrwlSkizHsmOOh4gBr7fZHkE1e75hbSq0dSvJ%2FET6bExGQK7BVZl5mQ7HuTcchqXsurkqA%2BHytLGMoJYQm%2B%2BpfBHw%2FQohcTIOWY6SHtGJfjH%2F7O0QV5UfaygN39NJjrULATRW3Q6FZlJ6LF12jwYcIXyrHnPtOBnHoZWm4GkPvhx3y6Gs8NZrvenAh496s66Ro1BZNGds%2BxaAsdWY%2BKmvHFKOU7QASbWVcEhizdTeFafHobOZ%2FZv4ZzbeViOnKUDPgMjjzt3IsA2r2HiCgUz4eHNfj4GKxJtL32kigwyLZIahO2xOezhrPUKBSCNkmn0SAVqI6q8wNsaRu%2FttoKmcrUMsWBb4qg8G8ZTx0mx7X2%2BU0W1vg5glo7%2B9t2QReHO6HqVlRkeVUQ17U9rQLHl74fgfDmcI7tzsYD2KhfX5sq9lL4JfnHVC4cJjLVkM%2FFyY6ADze91JPb7iw3w5izaRKvyuca9%2FR7VseATHeumK%2BixruCnvzIz59DI7e00ilEVETmdgKk8ygCHSjy5RgeSkmxK5BC0uePnFDErPD4B3%2FcVHdMPWUjL4GOqUB9w7fQDjEO4ZirpZWktLBf0j7WuHmhRogo5Girc310Mct2J4OQ6H2uW4P%2BcHVSjKUrZ1Xz%2B5qhMW9a9dnSv3nycVZCINFutm%2BDxFbnYsoisNFGQc%2B5o3HJfzZxHgW%2BbzZwBK3FuW%2FwFtG98wJ0CTKJ1OKaljyaw9HK4e8eLQo9mlUhpGOArrRQwYzFi3X8UntRAfHMZ86pE%2BVXu4uyf5Jc6EuNamX&X-Amz-Signature=ed36b3c70ab71e68724a3d516161d3cce6b05e302f705bf0fb437778cdbc7609&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
