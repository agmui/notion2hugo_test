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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H53WV6J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFgDkXRw8zSdRu5%2FDcvoUaBy%2FREWwHYqHzIZ3wWLLXvhAiEAnAs4rUEYqW00cKKwHBY%2FzU8yUnaA89M8jTQ9jmp5m%2Fkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNf8dLmb2Cs0qCbK%2FyrcAw9AY3sfygcFl%2B4iGlBVJTUu7Qx24YhIPqXEzoU%2FYTpxxQjCzxViJlx%2FCPxaVmFm4RYUpDiSaoKv5tTnhf9h8bpkvXwhVSZybHIRF%2FY5%2FRJykrRr21cx16yvOYnWUwLzLVCENLSFOe%2BGYM3EkWPeG6zyvlllRnBs9Zkp8YrshTvP8EecfBHszpwxDbPxhy%2FRJ9QAMGpKm2SPwPIdJIz4Uah9lNrN4vv7VVm7kF5Zc9c1pi0p84J2aDowqxiWYJp8B1ZkrMOqE8jYbx40wcybkP4O9yBByRm%2BAhlTU53ruUJ8AXpaJqLx40fH5T72QvH9I2jB9HVjUlUQ13nqTJV5O7NcpoKlyuu3hwaDXMR8lz%2FmKxjPue2aK8jXN8kY%2BNyxAEGiE3n%2FdE56nJUiDAP0FbegEk50UfF%2BeeyGMj4fVx5vj6dzIOHp2sxjNFziyIeWCMyVEuXBWWVM8ow4EfCVtRwV6JN4Aod1a9LncPOFs%2BQn99uOFpTCQoGvh9pg1uE3%2B%2FG9OJgVtf%2BqqI8U9%2BayjsNZSWsIBx%2BEvlyiTM7UPA60c%2BmEnkeBRWAhYVxFIoev2Tyb5OI1WVRDR3Rm2VfC0ArO61VgIGpkEKOvDTF92sZfUBAua0LCH2%2FDTSDBMMqwwL0GOqUB1OJKoubpwqjyZje%2BSCnuavXs0SQMkxqstc5qWd4giW13D%2B5MYVrWSOUUlquvGgUFgWHsJJ%2FiTbxuKvZk4InPQCJSAbtl0LqOE%2FXBWPq5zm1tDRrYKwOVrFS4tlzxcOC0lBTWgilkGj21Usq1TiNz%2BKyGfa5LpAp7AaPhoAVVgdap5fCbUxp%2BtdbXlzlS%2BEfCHrOBsY8PfXLtoEgOGSr5krOzObyp&X-Amz-Signature=00d15c70086a5f8e13d246d5018f7735f0763b3204f828963ffe4cf9e1140ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H53WV6J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFgDkXRw8zSdRu5%2FDcvoUaBy%2FREWwHYqHzIZ3wWLLXvhAiEAnAs4rUEYqW00cKKwHBY%2FzU8yUnaA89M8jTQ9jmp5m%2Fkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNf8dLmb2Cs0qCbK%2FyrcAw9AY3sfygcFl%2B4iGlBVJTUu7Qx24YhIPqXEzoU%2FYTpxxQjCzxViJlx%2FCPxaVmFm4RYUpDiSaoKv5tTnhf9h8bpkvXwhVSZybHIRF%2FY5%2FRJykrRr21cx16yvOYnWUwLzLVCENLSFOe%2BGYM3EkWPeG6zyvlllRnBs9Zkp8YrshTvP8EecfBHszpwxDbPxhy%2FRJ9QAMGpKm2SPwPIdJIz4Uah9lNrN4vv7VVm7kF5Zc9c1pi0p84J2aDowqxiWYJp8B1ZkrMOqE8jYbx40wcybkP4O9yBByRm%2BAhlTU53ruUJ8AXpaJqLx40fH5T72QvH9I2jB9HVjUlUQ13nqTJV5O7NcpoKlyuu3hwaDXMR8lz%2FmKxjPue2aK8jXN8kY%2BNyxAEGiE3n%2FdE56nJUiDAP0FbegEk50UfF%2BeeyGMj4fVx5vj6dzIOHp2sxjNFziyIeWCMyVEuXBWWVM8ow4EfCVtRwV6JN4Aod1a9LncPOFs%2BQn99uOFpTCQoGvh9pg1uE3%2B%2FG9OJgVtf%2BqqI8U9%2BayjsNZSWsIBx%2BEvlyiTM7UPA60c%2BmEnkeBRWAhYVxFIoev2Tyb5OI1WVRDR3Rm2VfC0ArO61VgIGpkEKOvDTF92sZfUBAua0LCH2%2FDTSDBMMqwwL0GOqUB1OJKoubpwqjyZje%2BSCnuavXs0SQMkxqstc5qWd4giW13D%2B5MYVrWSOUUlquvGgUFgWHsJJ%2FiTbxuKvZk4InPQCJSAbtl0LqOE%2FXBWPq5zm1tDRrYKwOVrFS4tlzxcOC0lBTWgilkGj21Usq1TiNz%2BKyGfa5LpAp7AaPhoAVVgdap5fCbUxp%2BtdbXlzlS%2BEfCHrOBsY8PfXLtoEgOGSr5krOzObyp&X-Amz-Signature=c3496024db5e75db2473677840950bfa862849459e382475925c69a30f504d98&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H53WV6J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFgDkXRw8zSdRu5%2FDcvoUaBy%2FREWwHYqHzIZ3wWLLXvhAiEAnAs4rUEYqW00cKKwHBY%2FzU8yUnaA89M8jTQ9jmp5m%2Fkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNf8dLmb2Cs0qCbK%2FyrcAw9AY3sfygcFl%2B4iGlBVJTUu7Qx24YhIPqXEzoU%2FYTpxxQjCzxViJlx%2FCPxaVmFm4RYUpDiSaoKv5tTnhf9h8bpkvXwhVSZybHIRF%2FY5%2FRJykrRr21cx16yvOYnWUwLzLVCENLSFOe%2BGYM3EkWPeG6zyvlllRnBs9Zkp8YrshTvP8EecfBHszpwxDbPxhy%2FRJ9QAMGpKm2SPwPIdJIz4Uah9lNrN4vv7VVm7kF5Zc9c1pi0p84J2aDowqxiWYJp8B1ZkrMOqE8jYbx40wcybkP4O9yBByRm%2BAhlTU53ruUJ8AXpaJqLx40fH5T72QvH9I2jB9HVjUlUQ13nqTJV5O7NcpoKlyuu3hwaDXMR8lz%2FmKxjPue2aK8jXN8kY%2BNyxAEGiE3n%2FdE56nJUiDAP0FbegEk50UfF%2BeeyGMj4fVx5vj6dzIOHp2sxjNFziyIeWCMyVEuXBWWVM8ow4EfCVtRwV6JN4Aod1a9LncPOFs%2BQn99uOFpTCQoGvh9pg1uE3%2B%2FG9OJgVtf%2BqqI8U9%2BayjsNZSWsIBx%2BEvlyiTM7UPA60c%2BmEnkeBRWAhYVxFIoev2Tyb5OI1WVRDR3Rm2VfC0ArO61VgIGpkEKOvDTF92sZfUBAua0LCH2%2FDTSDBMMqwwL0GOqUB1OJKoubpwqjyZje%2BSCnuavXs0SQMkxqstc5qWd4giW13D%2B5MYVrWSOUUlquvGgUFgWHsJJ%2FiTbxuKvZk4InPQCJSAbtl0LqOE%2FXBWPq5zm1tDRrYKwOVrFS4tlzxcOC0lBTWgilkGj21Usq1TiNz%2BKyGfa5LpAp7AaPhoAVVgdap5fCbUxp%2BtdbXlzlS%2BEfCHrOBsY8PfXLtoEgOGSr5krOzObyp&X-Amz-Signature=18c93a6a89c2565280d5760ec296e19f276aca4b0fc5cdb65dbea924138625d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H53WV6J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFgDkXRw8zSdRu5%2FDcvoUaBy%2FREWwHYqHzIZ3wWLLXvhAiEAnAs4rUEYqW00cKKwHBY%2FzU8yUnaA89M8jTQ9jmp5m%2Fkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNf8dLmb2Cs0qCbK%2FyrcAw9AY3sfygcFl%2B4iGlBVJTUu7Qx24YhIPqXEzoU%2FYTpxxQjCzxViJlx%2FCPxaVmFm4RYUpDiSaoKv5tTnhf9h8bpkvXwhVSZybHIRF%2FY5%2FRJykrRr21cx16yvOYnWUwLzLVCENLSFOe%2BGYM3EkWPeG6zyvlllRnBs9Zkp8YrshTvP8EecfBHszpwxDbPxhy%2FRJ9QAMGpKm2SPwPIdJIz4Uah9lNrN4vv7VVm7kF5Zc9c1pi0p84J2aDowqxiWYJp8B1ZkrMOqE8jYbx40wcybkP4O9yBByRm%2BAhlTU53ruUJ8AXpaJqLx40fH5T72QvH9I2jB9HVjUlUQ13nqTJV5O7NcpoKlyuu3hwaDXMR8lz%2FmKxjPue2aK8jXN8kY%2BNyxAEGiE3n%2FdE56nJUiDAP0FbegEk50UfF%2BeeyGMj4fVx5vj6dzIOHp2sxjNFziyIeWCMyVEuXBWWVM8ow4EfCVtRwV6JN4Aod1a9LncPOFs%2BQn99uOFpTCQoGvh9pg1uE3%2B%2FG9OJgVtf%2BqqI8U9%2BayjsNZSWsIBx%2BEvlyiTM7UPA60c%2BmEnkeBRWAhYVxFIoev2Tyb5OI1WVRDR3Rm2VfC0ArO61VgIGpkEKOvDTF92sZfUBAua0LCH2%2FDTSDBMMqwwL0GOqUB1OJKoubpwqjyZje%2BSCnuavXs0SQMkxqstc5qWd4giW13D%2B5MYVrWSOUUlquvGgUFgWHsJJ%2FiTbxuKvZk4InPQCJSAbtl0LqOE%2FXBWPq5zm1tDRrYKwOVrFS4tlzxcOC0lBTWgilkGj21Usq1TiNz%2BKyGfa5LpAp7AaPhoAVVgdap5fCbUxp%2BtdbXlzlS%2BEfCHrOBsY8PfXLtoEgOGSr5krOzObyp&X-Amz-Signature=3e36198098fa91cc177b22573ccebbf2190a41fc131292b6afaa24221bfb5496&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H53WV6J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIFgDkXRw8zSdRu5%2FDcvoUaBy%2FREWwHYqHzIZ3wWLLXvhAiEAnAs4rUEYqW00cKKwHBY%2FzU8yUnaA89M8jTQ9jmp5m%2Fkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNf8dLmb2Cs0qCbK%2FyrcAw9AY3sfygcFl%2B4iGlBVJTUu7Qx24YhIPqXEzoU%2FYTpxxQjCzxViJlx%2FCPxaVmFm4RYUpDiSaoKv5tTnhf9h8bpkvXwhVSZybHIRF%2FY5%2FRJykrRr21cx16yvOYnWUwLzLVCENLSFOe%2BGYM3EkWPeG6zyvlllRnBs9Zkp8YrshTvP8EecfBHszpwxDbPxhy%2FRJ9QAMGpKm2SPwPIdJIz4Uah9lNrN4vv7VVm7kF5Zc9c1pi0p84J2aDowqxiWYJp8B1ZkrMOqE8jYbx40wcybkP4O9yBByRm%2BAhlTU53ruUJ8AXpaJqLx40fH5T72QvH9I2jB9HVjUlUQ13nqTJV5O7NcpoKlyuu3hwaDXMR8lz%2FmKxjPue2aK8jXN8kY%2BNyxAEGiE3n%2FdE56nJUiDAP0FbegEk50UfF%2BeeyGMj4fVx5vj6dzIOHp2sxjNFziyIeWCMyVEuXBWWVM8ow4EfCVtRwV6JN4Aod1a9LncPOFs%2BQn99uOFpTCQoGvh9pg1uE3%2B%2FG9OJgVtf%2BqqI8U9%2BayjsNZSWsIBx%2BEvlyiTM7UPA60c%2BmEnkeBRWAhYVxFIoev2Tyb5OI1WVRDR3Rm2VfC0ArO61VgIGpkEKOvDTF92sZfUBAua0LCH2%2FDTSDBMMqwwL0GOqUB1OJKoubpwqjyZje%2BSCnuavXs0SQMkxqstc5qWd4giW13D%2B5MYVrWSOUUlquvGgUFgWHsJJ%2FiTbxuKvZk4InPQCJSAbtl0LqOE%2FXBWPq5zm1tDRrYKwOVrFS4tlzxcOC0lBTWgilkGj21Usq1TiNz%2BKyGfa5LpAp7AaPhoAVVgdap5fCbUxp%2BtdbXlzlS%2BEfCHrOBsY8PfXLtoEgOGSr5krOzObyp&X-Amz-Signature=fd1d1b8108693ec56d2b5899aa9c779325778b10bdf335422649c9e25f94629e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
