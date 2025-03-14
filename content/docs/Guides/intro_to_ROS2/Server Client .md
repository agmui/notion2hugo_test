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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGUYCG6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5DvtflG%2FIfp1slrCv1ty%2BxXkb7UTzBSJq5dDPe%2BOPAIgcgBri%2Fe9GMFpFYvvXVjL3sceCFg0nn5OOl1R6Fd6MB8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmGb6ZMedMOhc1%2FxircA2MzO1uqE5cKA3SNGZwu%2B%2BMDUK1KIoWHZ6roNmx4TXMMi%2BuQKC8eezYA23znaU8bPZaEKUAAlGmfpsUI4m5OGsDKwRH%2BbckkWsj5K%2Bq0aflhw1L9OKjWyyP0TX0UuKwvUiAigTG7V%2BlG1UqlxJ0B5WV6Rvv9dUJbW7sBd8sU%2FzvZ3TJUSV0ib18yei5M4xtpw%2Fi1KageszIcEtq3%2BU%2FrQrCdXxKNpAjG5LmBffhyNdULHbIEpARA8R7f5E88fFlWPM0D9zq9G%2FZhUz9XxBMPLFzu4vtCjpXVzCLrPuEjTiwk6D1%2F5FMKcBBO0xGg%2FNMEXi16LrbkxkL6dLjkDDtaPOg737hciSWCt67TRzZtul1NUl48OtU%2BNlpwspoHqOxhBZg4sko96zcb78H5BbIy6NP2gT9IH%2FglxQtL6t58iRKx6L0MIRZg19iDOwwNU%2FLAOlRLsRZGbC5%2FuGP1iy9mjt9QCn0RDZWf8lbv%2B1IySiitdiGzaHUBqR%2BKcjxPbOq148E6IJu1qQ5lusYRdpzHzgL0wpt3hMcKDNZRkPvjzmJbkupJijFzxYErvGK%2FC9UZNV6ID9qDOiuSzvn%2BATKIHLi8KUeqAmuC4KtA6QgMDiB%2Fu4VZ%2F%2BY98TJpQW%2FkMJW50L4GOqUBkI%2B5KrGOTN4kY%2Fm6K49rmsunz6BJQtBISIEtzA9LzbkTmVAMJqa9ZdEebSoX14B1u%2FEbiJ2DqlRP2Yj4GNWg9EF3GBWGrtYRjl%2FJdiPWQ2jNrIBd%2FynjQQxuX2oVJrPF9lzk6CHS7FL%2FtwEYs7IdkA5K53urs9l6xZ1Zbvu983g%2BDPPk1m9f0KZGV2yI4jSf1oqRBj7bQ9hPHu1tw0W6alWuKb6w&X-Amz-Signature=46998e3a9a53563f320c774635c52d514787f7060fdbf3c56c6ece1e2b2e21b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGUYCG6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5DvtflG%2FIfp1slrCv1ty%2BxXkb7UTzBSJq5dDPe%2BOPAIgcgBri%2Fe9GMFpFYvvXVjL3sceCFg0nn5OOl1R6Fd6MB8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmGb6ZMedMOhc1%2FxircA2MzO1uqE5cKA3SNGZwu%2B%2BMDUK1KIoWHZ6roNmx4TXMMi%2BuQKC8eezYA23znaU8bPZaEKUAAlGmfpsUI4m5OGsDKwRH%2BbckkWsj5K%2Bq0aflhw1L9OKjWyyP0TX0UuKwvUiAigTG7V%2BlG1UqlxJ0B5WV6Rvv9dUJbW7sBd8sU%2FzvZ3TJUSV0ib18yei5M4xtpw%2Fi1KageszIcEtq3%2BU%2FrQrCdXxKNpAjG5LmBffhyNdULHbIEpARA8R7f5E88fFlWPM0D9zq9G%2FZhUz9XxBMPLFzu4vtCjpXVzCLrPuEjTiwk6D1%2F5FMKcBBO0xGg%2FNMEXi16LrbkxkL6dLjkDDtaPOg737hciSWCt67TRzZtul1NUl48OtU%2BNlpwspoHqOxhBZg4sko96zcb78H5BbIy6NP2gT9IH%2FglxQtL6t58iRKx6L0MIRZg19iDOwwNU%2FLAOlRLsRZGbC5%2FuGP1iy9mjt9QCn0RDZWf8lbv%2B1IySiitdiGzaHUBqR%2BKcjxPbOq148E6IJu1qQ5lusYRdpzHzgL0wpt3hMcKDNZRkPvjzmJbkupJijFzxYErvGK%2FC9UZNV6ID9qDOiuSzvn%2BATKIHLi8KUeqAmuC4KtA6QgMDiB%2Fu4VZ%2F%2BY98TJpQW%2FkMJW50L4GOqUBkI%2B5KrGOTN4kY%2Fm6K49rmsunz6BJQtBISIEtzA9LzbkTmVAMJqa9ZdEebSoX14B1u%2FEbiJ2DqlRP2Yj4GNWg9EF3GBWGrtYRjl%2FJdiPWQ2jNrIBd%2FynjQQxuX2oVJrPF9lzk6CHS7FL%2FtwEYs7IdkA5K53urs9l6xZ1Zbvu983g%2BDPPk1m9f0KZGV2yI4jSf1oqRBj7bQ9hPHu1tw0W6alWuKb6w&X-Amz-Signature=615879d6afc717e5620c2333faf0a4ab045809c1f6a14580e173be7c8234971b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGUYCG6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5DvtflG%2FIfp1slrCv1ty%2BxXkb7UTzBSJq5dDPe%2BOPAIgcgBri%2Fe9GMFpFYvvXVjL3sceCFg0nn5OOl1R6Fd6MB8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmGb6ZMedMOhc1%2FxircA2MzO1uqE5cKA3SNGZwu%2B%2BMDUK1KIoWHZ6roNmx4TXMMi%2BuQKC8eezYA23znaU8bPZaEKUAAlGmfpsUI4m5OGsDKwRH%2BbckkWsj5K%2Bq0aflhw1L9OKjWyyP0TX0UuKwvUiAigTG7V%2BlG1UqlxJ0B5WV6Rvv9dUJbW7sBd8sU%2FzvZ3TJUSV0ib18yei5M4xtpw%2Fi1KageszIcEtq3%2BU%2FrQrCdXxKNpAjG5LmBffhyNdULHbIEpARA8R7f5E88fFlWPM0D9zq9G%2FZhUz9XxBMPLFzu4vtCjpXVzCLrPuEjTiwk6D1%2F5FMKcBBO0xGg%2FNMEXi16LrbkxkL6dLjkDDtaPOg737hciSWCt67TRzZtul1NUl48OtU%2BNlpwspoHqOxhBZg4sko96zcb78H5BbIy6NP2gT9IH%2FglxQtL6t58iRKx6L0MIRZg19iDOwwNU%2FLAOlRLsRZGbC5%2FuGP1iy9mjt9QCn0RDZWf8lbv%2B1IySiitdiGzaHUBqR%2BKcjxPbOq148E6IJu1qQ5lusYRdpzHzgL0wpt3hMcKDNZRkPvjzmJbkupJijFzxYErvGK%2FC9UZNV6ID9qDOiuSzvn%2BATKIHLi8KUeqAmuC4KtA6QgMDiB%2Fu4VZ%2F%2BY98TJpQW%2FkMJW50L4GOqUBkI%2B5KrGOTN4kY%2Fm6K49rmsunz6BJQtBISIEtzA9LzbkTmVAMJqa9ZdEebSoX14B1u%2FEbiJ2DqlRP2Yj4GNWg9EF3GBWGrtYRjl%2FJdiPWQ2jNrIBd%2FynjQQxuX2oVJrPF9lzk6CHS7FL%2FtwEYs7IdkA5K53urs9l6xZ1Zbvu983g%2BDPPk1m9f0KZGV2yI4jSf1oqRBj7bQ9hPHu1tw0W6alWuKb6w&X-Amz-Signature=57ca2310b8353c6cfecada63fac1abd9a1ee110690e3b7ca91ec99fd550b1fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGUYCG6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5DvtflG%2FIfp1slrCv1ty%2BxXkb7UTzBSJq5dDPe%2BOPAIgcgBri%2Fe9GMFpFYvvXVjL3sceCFg0nn5OOl1R6Fd6MB8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmGb6ZMedMOhc1%2FxircA2MzO1uqE5cKA3SNGZwu%2B%2BMDUK1KIoWHZ6roNmx4TXMMi%2BuQKC8eezYA23znaU8bPZaEKUAAlGmfpsUI4m5OGsDKwRH%2BbckkWsj5K%2Bq0aflhw1L9OKjWyyP0TX0UuKwvUiAigTG7V%2BlG1UqlxJ0B5WV6Rvv9dUJbW7sBd8sU%2FzvZ3TJUSV0ib18yei5M4xtpw%2Fi1KageszIcEtq3%2BU%2FrQrCdXxKNpAjG5LmBffhyNdULHbIEpARA8R7f5E88fFlWPM0D9zq9G%2FZhUz9XxBMPLFzu4vtCjpXVzCLrPuEjTiwk6D1%2F5FMKcBBO0xGg%2FNMEXi16LrbkxkL6dLjkDDtaPOg737hciSWCt67TRzZtul1NUl48OtU%2BNlpwspoHqOxhBZg4sko96zcb78H5BbIy6NP2gT9IH%2FglxQtL6t58iRKx6L0MIRZg19iDOwwNU%2FLAOlRLsRZGbC5%2FuGP1iy9mjt9QCn0RDZWf8lbv%2B1IySiitdiGzaHUBqR%2BKcjxPbOq148E6IJu1qQ5lusYRdpzHzgL0wpt3hMcKDNZRkPvjzmJbkupJijFzxYErvGK%2FC9UZNV6ID9qDOiuSzvn%2BATKIHLi8KUeqAmuC4KtA6QgMDiB%2Fu4VZ%2F%2BY98TJpQW%2FkMJW50L4GOqUBkI%2B5KrGOTN4kY%2Fm6K49rmsunz6BJQtBISIEtzA9LzbkTmVAMJqa9ZdEebSoX14B1u%2FEbiJ2DqlRP2Yj4GNWg9EF3GBWGrtYRjl%2FJdiPWQ2jNrIBd%2FynjQQxuX2oVJrPF9lzk6CHS7FL%2FtwEYs7IdkA5K53urs9l6xZ1Zbvu983g%2BDPPk1m9f0KZGV2yI4jSf1oqRBj7bQ9hPHu1tw0W6alWuKb6w&X-Amz-Signature=0f085c135fa02fb182fe1a8686a1f0f1f1d41f392c250f166506639a55b8a2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGUYCG6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5DvtflG%2FIfp1slrCv1ty%2BxXkb7UTzBSJq5dDPe%2BOPAIgcgBri%2Fe9GMFpFYvvXVjL3sceCFg0nn5OOl1R6Fd6MB8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmGb6ZMedMOhc1%2FxircA2MzO1uqE5cKA3SNGZwu%2B%2BMDUK1KIoWHZ6roNmx4TXMMi%2BuQKC8eezYA23znaU8bPZaEKUAAlGmfpsUI4m5OGsDKwRH%2BbckkWsj5K%2Bq0aflhw1L9OKjWyyP0TX0UuKwvUiAigTG7V%2BlG1UqlxJ0B5WV6Rvv9dUJbW7sBd8sU%2FzvZ3TJUSV0ib18yei5M4xtpw%2Fi1KageszIcEtq3%2BU%2FrQrCdXxKNpAjG5LmBffhyNdULHbIEpARA8R7f5E88fFlWPM0D9zq9G%2FZhUz9XxBMPLFzu4vtCjpXVzCLrPuEjTiwk6D1%2F5FMKcBBO0xGg%2FNMEXi16LrbkxkL6dLjkDDtaPOg737hciSWCt67TRzZtul1NUl48OtU%2BNlpwspoHqOxhBZg4sko96zcb78H5BbIy6NP2gT9IH%2FglxQtL6t58iRKx6L0MIRZg19iDOwwNU%2FLAOlRLsRZGbC5%2FuGP1iy9mjt9QCn0RDZWf8lbv%2B1IySiitdiGzaHUBqR%2BKcjxPbOq148E6IJu1qQ5lusYRdpzHzgL0wpt3hMcKDNZRkPvjzmJbkupJijFzxYErvGK%2FC9UZNV6ID9qDOiuSzvn%2BATKIHLi8KUeqAmuC4KtA6QgMDiB%2Fu4VZ%2F%2BY98TJpQW%2FkMJW50L4GOqUBkI%2B5KrGOTN4kY%2Fm6K49rmsunz6BJQtBISIEtzA9LzbkTmVAMJqa9ZdEebSoX14B1u%2FEbiJ2DqlRP2Yj4GNWg9EF3GBWGrtYRjl%2FJdiPWQ2jNrIBd%2FynjQQxuX2oVJrPF9lzk6CHS7FL%2FtwEYs7IdkA5K53urs9l6xZ1Zbvu983g%2BDPPk1m9f0KZGV2yI4jSf1oqRBj7bQ9hPHu1tw0W6alWuKb6w&X-Amz-Signature=ded221c5dec0d83ec13d4fa5c6afeae4fc259f860fd55041627b91c883608d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
