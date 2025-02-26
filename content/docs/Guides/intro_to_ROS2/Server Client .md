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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAIM6GF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbK0Qd06pD5TFK07QstUFAMHF4UKD26O%2BPbl%2BtwZkW3AiEA6I4EjzRdBO4aV7SQ3YdHVmzA4fLc7hUDZgmML0%2B3PE0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHE8Ggr1cyEbJ51HiSrcA%2BNv2%2FE%2BySltiDKUZKUrgbvhAlTQCzBV7uGzhoPsN6HEqCon9pV8RQc4uIQC8Xr%2FmdQpo5vZWxqb1u7%2Bn7Vk4kSWkc46NNbGCgfusf%2FGfLahPAhuSqLJqXxb%2FZXnE9wIjMNTlEootXnJJp9z7M2LCBcuH1qNE43Kx8Ka9Dzmo%2Fp6mY4%2FyMwx57vb5PW6aX8fs9jDeZARb%2Fh7HQuRfa%2F7K51DHdOYNKbDL%2BpTcU%2FbAAHvwnYmovaVir1mpoGg8XjqtSEPj0SuIH65%2FFpSQFIXROB%2FZoWdyGfoRkxVoPOZJVpokNakkaFxfv18tdLwFrxVnxPzQPHzJb6yH2sZI0rD4o%2BhmVHIQjIrnQY20ULYqujXC%2BH3D53ZvD%2BN6jjgJNj1JDZnBq6rGq8tPvOtbx663SKW0DWNzCWwfRn%2FhvPKgaFm7e0iNWMk%2B6HgxxsYh5hvQp5KVu%2FluXaiz8sEAg%2Fs%2FHfZg5wg94w%2F%2BWFirGbJI9S5sBWujhl9T%2F2MfrY%2B2lGVCWOjuiIwtyuyZ3AlAxbUMr3aPaiKuLp4hSOmz2VCqDmIEt0IKEtd98SUTqkYs4MO6FZr8ar55rRX%2FNzm%2F%2B3ILbhymGhBZv3g%2F9IQDSIaxmvbOj1BcPSA6fLNZaLGMIWI%2FL0GOqUB%2FBnNsZjTT7kNCOXqpvucI98cD6Xin6jOebVV4737ody9%2B0jZ0pLIlLgfTs4Z%2FrTLvavgfLe1FnPSBa%2BZy3JV%2F8HCm2ZAgZPjsyZ0fL1PX7bi%2BvtywybM1I1XydhFyfRNjRZjiSt1nDkci4Tp56T0jiYP9FnJhpAtKGSr1iKrc6%2F21GF3VDVc%2BsISSpv8NXcUYPaEZYoMoFO7Fgck2cgWBk99VMH1&X-Amz-Signature=adbcda77da997e2419a5ec1c8a848c490b868a9e2974582ce76bbd8a7b6d8bad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAIM6GF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbK0Qd06pD5TFK07QstUFAMHF4UKD26O%2BPbl%2BtwZkW3AiEA6I4EjzRdBO4aV7SQ3YdHVmzA4fLc7hUDZgmML0%2B3PE0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHE8Ggr1cyEbJ51HiSrcA%2BNv2%2FE%2BySltiDKUZKUrgbvhAlTQCzBV7uGzhoPsN6HEqCon9pV8RQc4uIQC8Xr%2FmdQpo5vZWxqb1u7%2Bn7Vk4kSWkc46NNbGCgfusf%2FGfLahPAhuSqLJqXxb%2FZXnE9wIjMNTlEootXnJJp9z7M2LCBcuH1qNE43Kx8Ka9Dzmo%2Fp6mY4%2FyMwx57vb5PW6aX8fs9jDeZARb%2Fh7HQuRfa%2F7K51DHdOYNKbDL%2BpTcU%2FbAAHvwnYmovaVir1mpoGg8XjqtSEPj0SuIH65%2FFpSQFIXROB%2FZoWdyGfoRkxVoPOZJVpokNakkaFxfv18tdLwFrxVnxPzQPHzJb6yH2sZI0rD4o%2BhmVHIQjIrnQY20ULYqujXC%2BH3D53ZvD%2BN6jjgJNj1JDZnBq6rGq8tPvOtbx663SKW0DWNzCWwfRn%2FhvPKgaFm7e0iNWMk%2B6HgxxsYh5hvQp5KVu%2FluXaiz8sEAg%2Fs%2FHfZg5wg94w%2F%2BWFirGbJI9S5sBWujhl9T%2F2MfrY%2B2lGVCWOjuiIwtyuyZ3AlAxbUMr3aPaiKuLp4hSOmz2VCqDmIEt0IKEtd98SUTqkYs4MO6FZr8ar55rRX%2FNzm%2F%2B3ILbhymGhBZv3g%2F9IQDSIaxmvbOj1BcPSA6fLNZaLGMIWI%2FL0GOqUB%2FBnNsZjTT7kNCOXqpvucI98cD6Xin6jOebVV4737ody9%2B0jZ0pLIlLgfTs4Z%2FrTLvavgfLe1FnPSBa%2BZy3JV%2F8HCm2ZAgZPjsyZ0fL1PX7bi%2BvtywybM1I1XydhFyfRNjRZjiSt1nDkci4Tp56T0jiYP9FnJhpAtKGSr1iKrc6%2F21GF3VDVc%2BsISSpv8NXcUYPaEZYoMoFO7Fgck2cgWBk99VMH1&X-Amz-Signature=c526b384c202d8c5db360afd702cfcc820bb191523474274a8f525cfa02fe8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAIM6GF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbK0Qd06pD5TFK07QstUFAMHF4UKD26O%2BPbl%2BtwZkW3AiEA6I4EjzRdBO4aV7SQ3YdHVmzA4fLc7hUDZgmML0%2B3PE0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHE8Ggr1cyEbJ51HiSrcA%2BNv2%2FE%2BySltiDKUZKUrgbvhAlTQCzBV7uGzhoPsN6HEqCon9pV8RQc4uIQC8Xr%2FmdQpo5vZWxqb1u7%2Bn7Vk4kSWkc46NNbGCgfusf%2FGfLahPAhuSqLJqXxb%2FZXnE9wIjMNTlEootXnJJp9z7M2LCBcuH1qNE43Kx8Ka9Dzmo%2Fp6mY4%2FyMwx57vb5PW6aX8fs9jDeZARb%2Fh7HQuRfa%2F7K51DHdOYNKbDL%2BpTcU%2FbAAHvwnYmovaVir1mpoGg8XjqtSEPj0SuIH65%2FFpSQFIXROB%2FZoWdyGfoRkxVoPOZJVpokNakkaFxfv18tdLwFrxVnxPzQPHzJb6yH2sZI0rD4o%2BhmVHIQjIrnQY20ULYqujXC%2BH3D53ZvD%2BN6jjgJNj1JDZnBq6rGq8tPvOtbx663SKW0DWNzCWwfRn%2FhvPKgaFm7e0iNWMk%2B6HgxxsYh5hvQp5KVu%2FluXaiz8sEAg%2Fs%2FHfZg5wg94w%2F%2BWFirGbJI9S5sBWujhl9T%2F2MfrY%2B2lGVCWOjuiIwtyuyZ3AlAxbUMr3aPaiKuLp4hSOmz2VCqDmIEt0IKEtd98SUTqkYs4MO6FZr8ar55rRX%2FNzm%2F%2B3ILbhymGhBZv3g%2F9IQDSIaxmvbOj1BcPSA6fLNZaLGMIWI%2FL0GOqUB%2FBnNsZjTT7kNCOXqpvucI98cD6Xin6jOebVV4737ody9%2B0jZ0pLIlLgfTs4Z%2FrTLvavgfLe1FnPSBa%2BZy3JV%2F8HCm2ZAgZPjsyZ0fL1PX7bi%2BvtywybM1I1XydhFyfRNjRZjiSt1nDkci4Tp56T0jiYP9FnJhpAtKGSr1iKrc6%2F21GF3VDVc%2BsISSpv8NXcUYPaEZYoMoFO7Fgck2cgWBk99VMH1&X-Amz-Signature=b6c5ee2644b8aff495a52b7ad0061c56a74eb20e1a09d1ff2ce2e1a55673c70a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAIM6GF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbK0Qd06pD5TFK07QstUFAMHF4UKD26O%2BPbl%2BtwZkW3AiEA6I4EjzRdBO4aV7SQ3YdHVmzA4fLc7hUDZgmML0%2B3PE0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHE8Ggr1cyEbJ51HiSrcA%2BNv2%2FE%2BySltiDKUZKUrgbvhAlTQCzBV7uGzhoPsN6HEqCon9pV8RQc4uIQC8Xr%2FmdQpo5vZWxqb1u7%2Bn7Vk4kSWkc46NNbGCgfusf%2FGfLahPAhuSqLJqXxb%2FZXnE9wIjMNTlEootXnJJp9z7M2LCBcuH1qNE43Kx8Ka9Dzmo%2Fp6mY4%2FyMwx57vb5PW6aX8fs9jDeZARb%2Fh7HQuRfa%2F7K51DHdOYNKbDL%2BpTcU%2FbAAHvwnYmovaVir1mpoGg8XjqtSEPj0SuIH65%2FFpSQFIXROB%2FZoWdyGfoRkxVoPOZJVpokNakkaFxfv18tdLwFrxVnxPzQPHzJb6yH2sZI0rD4o%2BhmVHIQjIrnQY20ULYqujXC%2BH3D53ZvD%2BN6jjgJNj1JDZnBq6rGq8tPvOtbx663SKW0DWNzCWwfRn%2FhvPKgaFm7e0iNWMk%2B6HgxxsYh5hvQp5KVu%2FluXaiz8sEAg%2Fs%2FHfZg5wg94w%2F%2BWFirGbJI9S5sBWujhl9T%2F2MfrY%2B2lGVCWOjuiIwtyuyZ3AlAxbUMr3aPaiKuLp4hSOmz2VCqDmIEt0IKEtd98SUTqkYs4MO6FZr8ar55rRX%2FNzm%2F%2B3ILbhymGhBZv3g%2F9IQDSIaxmvbOj1BcPSA6fLNZaLGMIWI%2FL0GOqUB%2FBnNsZjTT7kNCOXqpvucI98cD6Xin6jOebVV4737ody9%2B0jZ0pLIlLgfTs4Z%2FrTLvavgfLe1FnPSBa%2BZy3JV%2F8HCm2ZAgZPjsyZ0fL1PX7bi%2BvtywybM1I1XydhFyfRNjRZjiSt1nDkci4Tp56T0jiYP9FnJhpAtKGSr1iKrc6%2F21GF3VDVc%2BsISSpv8NXcUYPaEZYoMoFO7Fgck2cgWBk99VMH1&X-Amz-Signature=947235de0abe2080043f9b1c8ab4635c3e042d31f87657612a08581160a64561&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAIM6GF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbK0Qd06pD5TFK07QstUFAMHF4UKD26O%2BPbl%2BtwZkW3AiEA6I4EjzRdBO4aV7SQ3YdHVmzA4fLc7hUDZgmML0%2B3PE0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHE8Ggr1cyEbJ51HiSrcA%2BNv2%2FE%2BySltiDKUZKUrgbvhAlTQCzBV7uGzhoPsN6HEqCon9pV8RQc4uIQC8Xr%2FmdQpo5vZWxqb1u7%2Bn7Vk4kSWkc46NNbGCgfusf%2FGfLahPAhuSqLJqXxb%2FZXnE9wIjMNTlEootXnJJp9z7M2LCBcuH1qNE43Kx8Ka9Dzmo%2Fp6mY4%2FyMwx57vb5PW6aX8fs9jDeZARb%2Fh7HQuRfa%2F7K51DHdOYNKbDL%2BpTcU%2FbAAHvwnYmovaVir1mpoGg8XjqtSEPj0SuIH65%2FFpSQFIXROB%2FZoWdyGfoRkxVoPOZJVpokNakkaFxfv18tdLwFrxVnxPzQPHzJb6yH2sZI0rD4o%2BhmVHIQjIrnQY20ULYqujXC%2BH3D53ZvD%2BN6jjgJNj1JDZnBq6rGq8tPvOtbx663SKW0DWNzCWwfRn%2FhvPKgaFm7e0iNWMk%2B6HgxxsYh5hvQp5KVu%2FluXaiz8sEAg%2Fs%2FHfZg5wg94w%2F%2BWFirGbJI9S5sBWujhl9T%2F2MfrY%2B2lGVCWOjuiIwtyuyZ3AlAxbUMr3aPaiKuLp4hSOmz2VCqDmIEt0IKEtd98SUTqkYs4MO6FZr8ar55rRX%2FNzm%2F%2B3ILbhymGhBZv3g%2F9IQDSIaxmvbOj1BcPSA6fLNZaLGMIWI%2FL0GOqUB%2FBnNsZjTT7kNCOXqpvucI98cD6Xin6jOebVV4737ody9%2B0jZ0pLIlLgfTs4Z%2FrTLvavgfLe1FnPSBa%2BZy3JV%2F8HCm2ZAgZPjsyZ0fL1PX7bi%2BvtywybM1I1XydhFyfRNjRZjiSt1nDkci4Tp56T0jiYP9FnJhpAtKGSr1iKrc6%2F21GF3VDVc%2BsISSpv8NXcUYPaEZYoMoFO7Fgck2cgWBk99VMH1&X-Amz-Signature=c3d1f38474cfd20351531d10e6540e13a62b3eb3debcd6a8010f076185476c66&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
