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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=9971564f5e0023545bba65d859bcb2d22b177866fce1840a3f9ba296587cc8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=12d5c1bd6f20ec6e50ea1b3c412ed3619f82b53a009f190d6b544d07190f0725&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=193d399eb9796aaa29d898530690b0cd9ec2bd8184fddfc7a22952c6db42fb29&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=c7137e38e77f22e56323520a7b3ab74a4be95e3ebcb5536fe1b82a1d457feff1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=ee6b87aecba946a4edcd1ea20a5a42f8f61a4693259c002bf2603cbe44861d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
