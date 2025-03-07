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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLGW6PN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDO3GHKNXjBmehVCGrltThdZunI4Ckp9gb51JxNhyS8ewIgHxIUE3%2FNMDDSx5SBzH8qqyksAqxAHtqOKAMvXSGi56Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFKOjTUMmKN5erTYpSrcA7%2Fz9xnA8cD9S7h%2FQI4a2FHwH7dXBIaQJhOwWXAhWRhpDFlSJbCkY0eV6bG7EZ%2BWQ9MbWDeT2LhoX0DuIkhlmwYr4huuo5KzN99Nn4Z6GDFmNmNnB%2BETQV%2BoaCu5pneIAF%2BB7FLL%2FQ0jlvnpgJQQzVvzTBRH4stuG%2BF2pXUXouhtuP1hUWQLjh8z7r0e5Oj1xNPZzzG3OsTvjwSDPQ1AK%2Fj0ycfrbfsN3WLkbTXIlNMbwCXwRVs1sMX35ngllx%2BIOV8BWKMb66x4fXvdenR9fkoFtZPvQBCXjDmC6CJuB8LP6nRWr8fwkhewhqUF8rmbBwdWNP1g1QN3IWttveprjS%2BXF7Po%2F4AAlUx%2Fy3Fr4W71dciYPbmK5yD2ZDsnnbiH8ty4lr7kzQudxChDoX7coN4et2mvvGqZ%2BOb6WRphDY5%2BEb2H5LCD5AcsBkTUC1u%2BmEjyPHH1K%2FoU9kOFxbsy3MRMFnYzH2YaXkIjGCiI%2FY6PdL64Ou50mWTY3f60uxK2v%2FpaLjGX%2Fiyh53zO3pDSwxH9RJlMQC2U5vXZJ1Aa5Qzk3uJkxW9aHlCvmamkYFoH9fUXRwHh%2FxiCcEuLB%2B2K56SlWxJQG4SGULnM%2Bi18xsPHVjEcyBhUfQCuvVnZMNnfrL4GOqUBSmOPD1VxKJZe1e6EY3jT3RIUN%2BHuzpX5zSRHhQ2EEanhHlrvn11y%2BuvuiNUfpueKhxsGFGClnISr8U3hblrsjZ4W1O0FNnTZzh9bpxvu0QUNUoLKhRcY3rAA3cnBe0U8ONJPdSHxnZH1u7icp4Sier2cv0MAgSQ2Wgy0CyM1%2BjLX8UVizokXj2272QbRlS24ft4ywAciT0Beno8H7RhHb1ElfXUI&X-Amz-Signature=3929a8b55fe3b6df5a83826fe2b5dfc374c83eae9a4c5bcb90e0a8d661d2d343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLGW6PN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDO3GHKNXjBmehVCGrltThdZunI4Ckp9gb51JxNhyS8ewIgHxIUE3%2FNMDDSx5SBzH8qqyksAqxAHtqOKAMvXSGi56Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFKOjTUMmKN5erTYpSrcA7%2Fz9xnA8cD9S7h%2FQI4a2FHwH7dXBIaQJhOwWXAhWRhpDFlSJbCkY0eV6bG7EZ%2BWQ9MbWDeT2LhoX0DuIkhlmwYr4huuo5KzN99Nn4Z6GDFmNmNnB%2BETQV%2BoaCu5pneIAF%2BB7FLL%2FQ0jlvnpgJQQzVvzTBRH4stuG%2BF2pXUXouhtuP1hUWQLjh8z7r0e5Oj1xNPZzzG3OsTvjwSDPQ1AK%2Fj0ycfrbfsN3WLkbTXIlNMbwCXwRVs1sMX35ngllx%2BIOV8BWKMb66x4fXvdenR9fkoFtZPvQBCXjDmC6CJuB8LP6nRWr8fwkhewhqUF8rmbBwdWNP1g1QN3IWttveprjS%2BXF7Po%2F4AAlUx%2Fy3Fr4W71dciYPbmK5yD2ZDsnnbiH8ty4lr7kzQudxChDoX7coN4et2mvvGqZ%2BOb6WRphDY5%2BEb2H5LCD5AcsBkTUC1u%2BmEjyPHH1K%2FoU9kOFxbsy3MRMFnYzH2YaXkIjGCiI%2FY6PdL64Ou50mWTY3f60uxK2v%2FpaLjGX%2Fiyh53zO3pDSwxH9RJlMQC2U5vXZJ1Aa5Qzk3uJkxW9aHlCvmamkYFoH9fUXRwHh%2FxiCcEuLB%2B2K56SlWxJQG4SGULnM%2Bi18xsPHVjEcyBhUfQCuvVnZMNnfrL4GOqUBSmOPD1VxKJZe1e6EY3jT3RIUN%2BHuzpX5zSRHhQ2EEanhHlrvn11y%2BuvuiNUfpueKhxsGFGClnISr8U3hblrsjZ4W1O0FNnTZzh9bpxvu0QUNUoLKhRcY3rAA3cnBe0U8ONJPdSHxnZH1u7icp4Sier2cv0MAgSQ2Wgy0CyM1%2BjLX8UVizokXj2272QbRlS24ft4ywAciT0Beno8H7RhHb1ElfXUI&X-Amz-Signature=f1b1cf3afce7822c2642f0c077472b8f12a65ecc76f4bed45c0a63fcb94ffa3c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLGW6PN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDO3GHKNXjBmehVCGrltThdZunI4Ckp9gb51JxNhyS8ewIgHxIUE3%2FNMDDSx5SBzH8qqyksAqxAHtqOKAMvXSGi56Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFKOjTUMmKN5erTYpSrcA7%2Fz9xnA8cD9S7h%2FQI4a2FHwH7dXBIaQJhOwWXAhWRhpDFlSJbCkY0eV6bG7EZ%2BWQ9MbWDeT2LhoX0DuIkhlmwYr4huuo5KzN99Nn4Z6GDFmNmNnB%2BETQV%2BoaCu5pneIAF%2BB7FLL%2FQ0jlvnpgJQQzVvzTBRH4stuG%2BF2pXUXouhtuP1hUWQLjh8z7r0e5Oj1xNPZzzG3OsTvjwSDPQ1AK%2Fj0ycfrbfsN3WLkbTXIlNMbwCXwRVs1sMX35ngllx%2BIOV8BWKMb66x4fXvdenR9fkoFtZPvQBCXjDmC6CJuB8LP6nRWr8fwkhewhqUF8rmbBwdWNP1g1QN3IWttveprjS%2BXF7Po%2F4AAlUx%2Fy3Fr4W71dciYPbmK5yD2ZDsnnbiH8ty4lr7kzQudxChDoX7coN4et2mvvGqZ%2BOb6WRphDY5%2BEb2H5LCD5AcsBkTUC1u%2BmEjyPHH1K%2FoU9kOFxbsy3MRMFnYzH2YaXkIjGCiI%2FY6PdL64Ou50mWTY3f60uxK2v%2FpaLjGX%2Fiyh53zO3pDSwxH9RJlMQC2U5vXZJ1Aa5Qzk3uJkxW9aHlCvmamkYFoH9fUXRwHh%2FxiCcEuLB%2B2K56SlWxJQG4SGULnM%2Bi18xsPHVjEcyBhUfQCuvVnZMNnfrL4GOqUBSmOPD1VxKJZe1e6EY3jT3RIUN%2BHuzpX5zSRHhQ2EEanhHlrvn11y%2BuvuiNUfpueKhxsGFGClnISr8U3hblrsjZ4W1O0FNnTZzh9bpxvu0QUNUoLKhRcY3rAA3cnBe0U8ONJPdSHxnZH1u7icp4Sier2cv0MAgSQ2Wgy0CyM1%2BjLX8UVizokXj2272QbRlS24ft4ywAciT0Beno8H7RhHb1ElfXUI&X-Amz-Signature=15a4eabedd2d6419d41534daa569ebc42a0473848abdf4bbca55245658a1693e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLGW6PN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDO3GHKNXjBmehVCGrltThdZunI4Ckp9gb51JxNhyS8ewIgHxIUE3%2FNMDDSx5SBzH8qqyksAqxAHtqOKAMvXSGi56Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFKOjTUMmKN5erTYpSrcA7%2Fz9xnA8cD9S7h%2FQI4a2FHwH7dXBIaQJhOwWXAhWRhpDFlSJbCkY0eV6bG7EZ%2BWQ9MbWDeT2LhoX0DuIkhlmwYr4huuo5KzN99Nn4Z6GDFmNmNnB%2BETQV%2BoaCu5pneIAF%2BB7FLL%2FQ0jlvnpgJQQzVvzTBRH4stuG%2BF2pXUXouhtuP1hUWQLjh8z7r0e5Oj1xNPZzzG3OsTvjwSDPQ1AK%2Fj0ycfrbfsN3WLkbTXIlNMbwCXwRVs1sMX35ngllx%2BIOV8BWKMb66x4fXvdenR9fkoFtZPvQBCXjDmC6CJuB8LP6nRWr8fwkhewhqUF8rmbBwdWNP1g1QN3IWttveprjS%2BXF7Po%2F4AAlUx%2Fy3Fr4W71dciYPbmK5yD2ZDsnnbiH8ty4lr7kzQudxChDoX7coN4et2mvvGqZ%2BOb6WRphDY5%2BEb2H5LCD5AcsBkTUC1u%2BmEjyPHH1K%2FoU9kOFxbsy3MRMFnYzH2YaXkIjGCiI%2FY6PdL64Ou50mWTY3f60uxK2v%2FpaLjGX%2Fiyh53zO3pDSwxH9RJlMQC2U5vXZJ1Aa5Qzk3uJkxW9aHlCvmamkYFoH9fUXRwHh%2FxiCcEuLB%2B2K56SlWxJQG4SGULnM%2Bi18xsPHVjEcyBhUfQCuvVnZMNnfrL4GOqUBSmOPD1VxKJZe1e6EY3jT3RIUN%2BHuzpX5zSRHhQ2EEanhHlrvn11y%2BuvuiNUfpueKhxsGFGClnISr8U3hblrsjZ4W1O0FNnTZzh9bpxvu0QUNUoLKhRcY3rAA3cnBe0U8ONJPdSHxnZH1u7icp4Sier2cv0MAgSQ2Wgy0CyM1%2BjLX8UVizokXj2272QbRlS24ft4ywAciT0Beno8H7RhHb1ElfXUI&X-Amz-Signature=723ae795a64b643bc3f13f832f46558c7564ba0e9c683a3206fab0ff7d5546bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLGW6PN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDO3GHKNXjBmehVCGrltThdZunI4Ckp9gb51JxNhyS8ewIgHxIUE3%2FNMDDSx5SBzH8qqyksAqxAHtqOKAMvXSGi56Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFKOjTUMmKN5erTYpSrcA7%2Fz9xnA8cD9S7h%2FQI4a2FHwH7dXBIaQJhOwWXAhWRhpDFlSJbCkY0eV6bG7EZ%2BWQ9MbWDeT2LhoX0DuIkhlmwYr4huuo5KzN99Nn4Z6GDFmNmNnB%2BETQV%2BoaCu5pneIAF%2BB7FLL%2FQ0jlvnpgJQQzVvzTBRH4stuG%2BF2pXUXouhtuP1hUWQLjh8z7r0e5Oj1xNPZzzG3OsTvjwSDPQ1AK%2Fj0ycfrbfsN3WLkbTXIlNMbwCXwRVs1sMX35ngllx%2BIOV8BWKMb66x4fXvdenR9fkoFtZPvQBCXjDmC6CJuB8LP6nRWr8fwkhewhqUF8rmbBwdWNP1g1QN3IWttveprjS%2BXF7Po%2F4AAlUx%2Fy3Fr4W71dciYPbmK5yD2ZDsnnbiH8ty4lr7kzQudxChDoX7coN4et2mvvGqZ%2BOb6WRphDY5%2BEb2H5LCD5AcsBkTUC1u%2BmEjyPHH1K%2FoU9kOFxbsy3MRMFnYzH2YaXkIjGCiI%2FY6PdL64Ou50mWTY3f60uxK2v%2FpaLjGX%2Fiyh53zO3pDSwxH9RJlMQC2U5vXZJ1Aa5Qzk3uJkxW9aHlCvmamkYFoH9fUXRwHh%2FxiCcEuLB%2B2K56SlWxJQG4SGULnM%2Bi18xsPHVjEcyBhUfQCuvVnZMNnfrL4GOqUBSmOPD1VxKJZe1e6EY3jT3RIUN%2BHuzpX5zSRHhQ2EEanhHlrvn11y%2BuvuiNUfpueKhxsGFGClnISr8U3hblrsjZ4W1O0FNnTZzh9bpxvu0QUNUoLKhRcY3rAA3cnBe0U8ONJPdSHxnZH1u7icp4Sier2cv0MAgSQ2Wgy0CyM1%2BjLX8UVizokXj2272QbRlS24ft4ywAciT0Beno8H7RhHb1ElfXUI&X-Amz-Signature=21f57b88e2aa918bde816610d92a62352de818928b1e57b8d537c4c1bcec0471&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
