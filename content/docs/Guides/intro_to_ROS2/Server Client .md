---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOM4IYW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF66%2BrkmLyRbOVUDdvj5v%2Bir6Nj4eRSnoTcD0KcSH2bpAiA1qM7qLKUVwR%2BH29S0G7X%2BcuF4ra2flmpyMNzu7RF3oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4G9CLgMRXGVJzH3SKtwDJPet2Cp0YzLncUKl7HDofhSCH9nAw1BR0HKLHKyIZPDxg7ClWYYd5xR0xgMyE80%2FFjxfZ47d%2BJNRegC8SuAZS5HpldR5XKfdzr1JnoRd8QOtSldYTbPhfV1KLVFNQvwgETb%2BqBMxWVPYsd1mKLEI%2Fum1RtaGoE6XJkay627fm8Ge8KzpFaWJ946d4BM8x%2BCRVNtjNupKyRe%2BCUiKz24yRmLy6cAvmKlDRZRKZEhH0dvv6T5Ds69RABeuEpKyjmz836Ee5L0JAH%2F3s2eLIbNPYt7L3HXRZBA2necDIQ35hj0rSkixJrR2LVuhHSDSQP4o92BCqFE7XETc7mKlA1vrk2FGN%2FiCoczyyY1UDDe40BTQc6RoA%2B4mBP2cXnFFX6SHcbHyGTPoYri7%2FD9CamIWBg8zop%2BBXcNzeMFfPredWREVWIGhf4P0jsjT0gPb7hEOJDgE4A5VL9ofyz34Ej10ZOLyCRQ74gMwDgjuJxq0mCwA1FEuA1gkZL7CPgN552ZP7aqymWQpLl68RaEr0re%2FToVV%2FMVWWs2uG1TDxtiPUTZVmXCnRXsfczJIb5nzcAZg3l3BykO4dYhh0LWKGK67jdF1wotCtSJNgZgoNHkoPJlRU3cRcW8%2F%2BLlfkCcw2tf%2BxAY6pgGZrD5jkJzNC8zSob%2F0S7Xa9M2EVXGlqEv8qhSUnuWW4cA4KBx3T7RDdPVvxvkkf8QJnfPvS140%2BkTVP3kYX6eYg6eHqNnV1CZxSGzLg3LOW7fMBr9wuwfxx62atyIwkJ6Hr99uudjfuQBMvFRUQI52F1VArz5CDUJi5CV4eL2WhPhdvsGYYABiLLPEwItMXRvtJNveKHjNQizFtNnMlE42xxdfMuHs&X-Amz-Signature=ec2d5552a9c4a130d614e7344975520fe19b2d26b1e6ab1d9a88fd1897408f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOM4IYW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF66%2BrkmLyRbOVUDdvj5v%2Bir6Nj4eRSnoTcD0KcSH2bpAiA1qM7qLKUVwR%2BH29S0G7X%2BcuF4ra2flmpyMNzu7RF3oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4G9CLgMRXGVJzH3SKtwDJPet2Cp0YzLncUKl7HDofhSCH9nAw1BR0HKLHKyIZPDxg7ClWYYd5xR0xgMyE80%2FFjxfZ47d%2BJNRegC8SuAZS5HpldR5XKfdzr1JnoRd8QOtSldYTbPhfV1KLVFNQvwgETb%2BqBMxWVPYsd1mKLEI%2Fum1RtaGoE6XJkay627fm8Ge8KzpFaWJ946d4BM8x%2BCRVNtjNupKyRe%2BCUiKz24yRmLy6cAvmKlDRZRKZEhH0dvv6T5Ds69RABeuEpKyjmz836Ee5L0JAH%2F3s2eLIbNPYt7L3HXRZBA2necDIQ35hj0rSkixJrR2LVuhHSDSQP4o92BCqFE7XETc7mKlA1vrk2FGN%2FiCoczyyY1UDDe40BTQc6RoA%2B4mBP2cXnFFX6SHcbHyGTPoYri7%2FD9CamIWBg8zop%2BBXcNzeMFfPredWREVWIGhf4P0jsjT0gPb7hEOJDgE4A5VL9ofyz34Ej10ZOLyCRQ74gMwDgjuJxq0mCwA1FEuA1gkZL7CPgN552ZP7aqymWQpLl68RaEr0re%2FToVV%2FMVWWs2uG1TDxtiPUTZVmXCnRXsfczJIb5nzcAZg3l3BykO4dYhh0LWKGK67jdF1wotCtSJNgZgoNHkoPJlRU3cRcW8%2F%2BLlfkCcw2tf%2BxAY6pgGZrD5jkJzNC8zSob%2F0S7Xa9M2EVXGlqEv8qhSUnuWW4cA4KBx3T7RDdPVvxvkkf8QJnfPvS140%2BkTVP3kYX6eYg6eHqNnV1CZxSGzLg3LOW7fMBr9wuwfxx62atyIwkJ6Hr99uudjfuQBMvFRUQI52F1VArz5CDUJi5CV4eL2WhPhdvsGYYABiLLPEwItMXRvtJNveKHjNQizFtNnMlE42xxdfMuHs&X-Amz-Signature=a26c48518ca9626276c8e6842386a1137d6a11e1a783ad2478d61370fce52021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOM4IYW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF66%2BrkmLyRbOVUDdvj5v%2Bir6Nj4eRSnoTcD0KcSH2bpAiA1qM7qLKUVwR%2BH29S0G7X%2BcuF4ra2flmpyMNzu7RF3oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4G9CLgMRXGVJzH3SKtwDJPet2Cp0YzLncUKl7HDofhSCH9nAw1BR0HKLHKyIZPDxg7ClWYYd5xR0xgMyE80%2FFjxfZ47d%2BJNRegC8SuAZS5HpldR5XKfdzr1JnoRd8QOtSldYTbPhfV1KLVFNQvwgETb%2BqBMxWVPYsd1mKLEI%2Fum1RtaGoE6XJkay627fm8Ge8KzpFaWJ946d4BM8x%2BCRVNtjNupKyRe%2BCUiKz24yRmLy6cAvmKlDRZRKZEhH0dvv6T5Ds69RABeuEpKyjmz836Ee5L0JAH%2F3s2eLIbNPYt7L3HXRZBA2necDIQ35hj0rSkixJrR2LVuhHSDSQP4o92BCqFE7XETc7mKlA1vrk2FGN%2FiCoczyyY1UDDe40BTQc6RoA%2B4mBP2cXnFFX6SHcbHyGTPoYri7%2FD9CamIWBg8zop%2BBXcNzeMFfPredWREVWIGhf4P0jsjT0gPb7hEOJDgE4A5VL9ofyz34Ej10ZOLyCRQ74gMwDgjuJxq0mCwA1FEuA1gkZL7CPgN552ZP7aqymWQpLl68RaEr0re%2FToVV%2FMVWWs2uG1TDxtiPUTZVmXCnRXsfczJIb5nzcAZg3l3BykO4dYhh0LWKGK67jdF1wotCtSJNgZgoNHkoPJlRU3cRcW8%2F%2BLlfkCcw2tf%2BxAY6pgGZrD5jkJzNC8zSob%2F0S7Xa9M2EVXGlqEv8qhSUnuWW4cA4KBx3T7RDdPVvxvkkf8QJnfPvS140%2BkTVP3kYX6eYg6eHqNnV1CZxSGzLg3LOW7fMBr9wuwfxx62atyIwkJ6Hr99uudjfuQBMvFRUQI52F1VArz5CDUJi5CV4eL2WhPhdvsGYYABiLLPEwItMXRvtJNveKHjNQizFtNnMlE42xxdfMuHs&X-Amz-Signature=67eb9fdf41fa7bb081018b7fb07b68b7433a5ca28126499d53e2194b7c028374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOM4IYW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF66%2BrkmLyRbOVUDdvj5v%2Bir6Nj4eRSnoTcD0KcSH2bpAiA1qM7qLKUVwR%2BH29S0G7X%2BcuF4ra2flmpyMNzu7RF3oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4G9CLgMRXGVJzH3SKtwDJPet2Cp0YzLncUKl7HDofhSCH9nAw1BR0HKLHKyIZPDxg7ClWYYd5xR0xgMyE80%2FFjxfZ47d%2BJNRegC8SuAZS5HpldR5XKfdzr1JnoRd8QOtSldYTbPhfV1KLVFNQvwgETb%2BqBMxWVPYsd1mKLEI%2Fum1RtaGoE6XJkay627fm8Ge8KzpFaWJ946d4BM8x%2BCRVNtjNupKyRe%2BCUiKz24yRmLy6cAvmKlDRZRKZEhH0dvv6T5Ds69RABeuEpKyjmz836Ee5L0JAH%2F3s2eLIbNPYt7L3HXRZBA2necDIQ35hj0rSkixJrR2LVuhHSDSQP4o92BCqFE7XETc7mKlA1vrk2FGN%2FiCoczyyY1UDDe40BTQc6RoA%2B4mBP2cXnFFX6SHcbHyGTPoYri7%2FD9CamIWBg8zop%2BBXcNzeMFfPredWREVWIGhf4P0jsjT0gPb7hEOJDgE4A5VL9ofyz34Ej10ZOLyCRQ74gMwDgjuJxq0mCwA1FEuA1gkZL7CPgN552ZP7aqymWQpLl68RaEr0re%2FToVV%2FMVWWs2uG1TDxtiPUTZVmXCnRXsfczJIb5nzcAZg3l3BykO4dYhh0LWKGK67jdF1wotCtSJNgZgoNHkoPJlRU3cRcW8%2F%2BLlfkCcw2tf%2BxAY6pgGZrD5jkJzNC8zSob%2F0S7Xa9M2EVXGlqEv8qhSUnuWW4cA4KBx3T7RDdPVvxvkkf8QJnfPvS140%2BkTVP3kYX6eYg6eHqNnV1CZxSGzLg3LOW7fMBr9wuwfxx62atyIwkJ6Hr99uudjfuQBMvFRUQI52F1VArz5CDUJi5CV4eL2WhPhdvsGYYABiLLPEwItMXRvtJNveKHjNQizFtNnMlE42xxdfMuHs&X-Amz-Signature=6685a38c32aabe0213f9e1a9d65b534af06db4e0765b81615ea6b85b8c973a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOM4IYW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF66%2BrkmLyRbOVUDdvj5v%2Bir6Nj4eRSnoTcD0KcSH2bpAiA1qM7qLKUVwR%2BH29S0G7X%2BcuF4ra2flmpyMNzu7RF3oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4G9CLgMRXGVJzH3SKtwDJPet2Cp0YzLncUKl7HDofhSCH9nAw1BR0HKLHKyIZPDxg7ClWYYd5xR0xgMyE80%2FFjxfZ47d%2BJNRegC8SuAZS5HpldR5XKfdzr1JnoRd8QOtSldYTbPhfV1KLVFNQvwgETb%2BqBMxWVPYsd1mKLEI%2Fum1RtaGoE6XJkay627fm8Ge8KzpFaWJ946d4BM8x%2BCRVNtjNupKyRe%2BCUiKz24yRmLy6cAvmKlDRZRKZEhH0dvv6T5Ds69RABeuEpKyjmz836Ee5L0JAH%2F3s2eLIbNPYt7L3HXRZBA2necDIQ35hj0rSkixJrR2LVuhHSDSQP4o92BCqFE7XETc7mKlA1vrk2FGN%2FiCoczyyY1UDDe40BTQc6RoA%2B4mBP2cXnFFX6SHcbHyGTPoYri7%2FD9CamIWBg8zop%2BBXcNzeMFfPredWREVWIGhf4P0jsjT0gPb7hEOJDgE4A5VL9ofyz34Ej10ZOLyCRQ74gMwDgjuJxq0mCwA1FEuA1gkZL7CPgN552ZP7aqymWQpLl68RaEr0re%2FToVV%2FMVWWs2uG1TDxtiPUTZVmXCnRXsfczJIb5nzcAZg3l3BykO4dYhh0LWKGK67jdF1wotCtSJNgZgoNHkoPJlRU3cRcW8%2F%2BLlfkCcw2tf%2BxAY6pgGZrD5jkJzNC8zSob%2F0S7Xa9M2EVXGlqEv8qhSUnuWW4cA4KBx3T7RDdPVvxvkkf8QJnfPvS140%2BkTVP3kYX6eYg6eHqNnV1CZxSGzLg3LOW7fMBr9wuwfxx62atyIwkJ6Hr99uudjfuQBMvFRUQI52F1VArz5CDUJi5CV4eL2WhPhdvsGYYABiLLPEwItMXRvtJNveKHjNQizFtNnMlE42xxdfMuHs&X-Amz-Signature=794abf058670f8eb509b201eb467f43eabc35440dbee96c2924018d79a8cd99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
