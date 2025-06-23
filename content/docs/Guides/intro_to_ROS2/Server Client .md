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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAKPPNK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBfPvDidDsGB6l42NnrQgaiEomyA7mubgSjPGIpy4Y%2BeAiEA7YrzxYwGmI%2BdkcEUEsJ%2BOEocuufwwJpUOiynlCcuZVMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCJkCCixNvXLJ%2FaGjircA2ZqTzLTOBH1rXHCf8B4IGSuwBt2NdSRrgQqNr%2FQ7OOVZqGk5EqSM6unz49%2Fqod7dH5T80MkZndx8OhtonSStQ1PgW%2FoJkYDN%2FsauKUbqQYbmILe2bXxKxSYuBpxr0ZatUISZfcDfuRoUpkv5aLkS76QI%2FHd%2FDp7AqAPNKyM25GsVs%2F%2B9MGGX6lqLko6uuMDw1i2K%2FdVfgnMmtc5jEwg4kPXb4NuI1DvBPnrImjY6SQsUFI%2F2d%2BN7LIUDn%2F92kMT4%2B4vcaakB%2FnkHNBDoyoMn2NiJL8vZHyKfJFa6AOAIYqSPgea0jmTNj2MM4OW5pKJs5KerRVN7GYYonqxRyEfjvowzyvtk89Z5fmJmpLmZBbS7ST3dB4l%2BpKGepqmFXpEGBxX1rw6BNI2wr%2F%2BcOyGlgPKtLgy7maX7E5at5GGzD29CflUgV8hz7ePwBwETX1eNQuxZCfhancg5iqppoG%2FcPR7d8UujLri3AfVHwFyoT150G4XQGG6zujgD5ne0Zxh8LlPGviaCN1aSi09ja3%2BQjKzYxqsd0HzjkurF84FtNRQ%2FIVuYHE7HGkCwd7PD4HFCHSEh8UbbMlqxFSHG56aCHvV82GY4iYSPkkZo7r37gylqK7ijXOxa7BW6iW3MLCJ5MIGOqUBCTJPDPhtfHTh58LVI2us3LLAuhhOL1CyYEdMAkU5vJHPOVwZsowgP99tUNM7Hh3SaBWeULdLxVQXCos088nT7b3DgGXXpbYIgVxn8gNU1vspQt%2Fj1DaXRztTd23ka4z7k3rctpYQptfPrfbcewT0KUbIUVLNpiDbu582eCIugWdvM2U1pjGJ0BStOz25tzmUZvqMG0MTZy8qYtEE2KYfhj4UjIZv&X-Amz-Signature=03089e479356cb4d9fec814adc0fcc5cca750d9013315e4acd22e658ce4fce2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAKPPNK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBfPvDidDsGB6l42NnrQgaiEomyA7mubgSjPGIpy4Y%2BeAiEA7YrzxYwGmI%2BdkcEUEsJ%2BOEocuufwwJpUOiynlCcuZVMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCJkCCixNvXLJ%2FaGjircA2ZqTzLTOBH1rXHCf8B4IGSuwBt2NdSRrgQqNr%2FQ7OOVZqGk5EqSM6unz49%2Fqod7dH5T80MkZndx8OhtonSStQ1PgW%2FoJkYDN%2FsauKUbqQYbmILe2bXxKxSYuBpxr0ZatUISZfcDfuRoUpkv5aLkS76QI%2FHd%2FDp7AqAPNKyM25GsVs%2F%2B9MGGX6lqLko6uuMDw1i2K%2FdVfgnMmtc5jEwg4kPXb4NuI1DvBPnrImjY6SQsUFI%2F2d%2BN7LIUDn%2F92kMT4%2B4vcaakB%2FnkHNBDoyoMn2NiJL8vZHyKfJFa6AOAIYqSPgea0jmTNj2MM4OW5pKJs5KerRVN7GYYonqxRyEfjvowzyvtk89Z5fmJmpLmZBbS7ST3dB4l%2BpKGepqmFXpEGBxX1rw6BNI2wr%2F%2BcOyGlgPKtLgy7maX7E5at5GGzD29CflUgV8hz7ePwBwETX1eNQuxZCfhancg5iqppoG%2FcPR7d8UujLri3AfVHwFyoT150G4XQGG6zujgD5ne0Zxh8LlPGviaCN1aSi09ja3%2BQjKzYxqsd0HzjkurF84FtNRQ%2FIVuYHE7HGkCwd7PD4HFCHSEh8UbbMlqxFSHG56aCHvV82GY4iYSPkkZo7r37gylqK7ijXOxa7BW6iW3MLCJ5MIGOqUBCTJPDPhtfHTh58LVI2us3LLAuhhOL1CyYEdMAkU5vJHPOVwZsowgP99tUNM7Hh3SaBWeULdLxVQXCos088nT7b3DgGXXpbYIgVxn8gNU1vspQt%2Fj1DaXRztTd23ka4z7k3rctpYQptfPrfbcewT0KUbIUVLNpiDbu582eCIugWdvM2U1pjGJ0BStOz25tzmUZvqMG0MTZy8qYtEE2KYfhj4UjIZv&X-Amz-Signature=0afedf4398bb3e469ca634b0262d2dec6028f74e031d5d36dceef1b2defed80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAKPPNK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBfPvDidDsGB6l42NnrQgaiEomyA7mubgSjPGIpy4Y%2BeAiEA7YrzxYwGmI%2BdkcEUEsJ%2BOEocuufwwJpUOiynlCcuZVMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCJkCCixNvXLJ%2FaGjircA2ZqTzLTOBH1rXHCf8B4IGSuwBt2NdSRrgQqNr%2FQ7OOVZqGk5EqSM6unz49%2Fqod7dH5T80MkZndx8OhtonSStQ1PgW%2FoJkYDN%2FsauKUbqQYbmILe2bXxKxSYuBpxr0ZatUISZfcDfuRoUpkv5aLkS76QI%2FHd%2FDp7AqAPNKyM25GsVs%2F%2B9MGGX6lqLko6uuMDw1i2K%2FdVfgnMmtc5jEwg4kPXb4NuI1DvBPnrImjY6SQsUFI%2F2d%2BN7LIUDn%2F92kMT4%2B4vcaakB%2FnkHNBDoyoMn2NiJL8vZHyKfJFa6AOAIYqSPgea0jmTNj2MM4OW5pKJs5KerRVN7GYYonqxRyEfjvowzyvtk89Z5fmJmpLmZBbS7ST3dB4l%2BpKGepqmFXpEGBxX1rw6BNI2wr%2F%2BcOyGlgPKtLgy7maX7E5at5GGzD29CflUgV8hz7ePwBwETX1eNQuxZCfhancg5iqppoG%2FcPR7d8UujLri3AfVHwFyoT150G4XQGG6zujgD5ne0Zxh8LlPGviaCN1aSi09ja3%2BQjKzYxqsd0HzjkurF84FtNRQ%2FIVuYHE7HGkCwd7PD4HFCHSEh8UbbMlqxFSHG56aCHvV82GY4iYSPkkZo7r37gylqK7ijXOxa7BW6iW3MLCJ5MIGOqUBCTJPDPhtfHTh58LVI2us3LLAuhhOL1CyYEdMAkU5vJHPOVwZsowgP99tUNM7Hh3SaBWeULdLxVQXCos088nT7b3DgGXXpbYIgVxn8gNU1vspQt%2Fj1DaXRztTd23ka4z7k3rctpYQptfPrfbcewT0KUbIUVLNpiDbu582eCIugWdvM2U1pjGJ0BStOz25tzmUZvqMG0MTZy8qYtEE2KYfhj4UjIZv&X-Amz-Signature=3e82c03d18227ec6f2484aa91b7432937d1d7cb7012c5a127eab4035265ab1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAKPPNK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBfPvDidDsGB6l42NnrQgaiEomyA7mubgSjPGIpy4Y%2BeAiEA7YrzxYwGmI%2BdkcEUEsJ%2BOEocuufwwJpUOiynlCcuZVMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCJkCCixNvXLJ%2FaGjircA2ZqTzLTOBH1rXHCf8B4IGSuwBt2NdSRrgQqNr%2FQ7OOVZqGk5EqSM6unz49%2Fqod7dH5T80MkZndx8OhtonSStQ1PgW%2FoJkYDN%2FsauKUbqQYbmILe2bXxKxSYuBpxr0ZatUISZfcDfuRoUpkv5aLkS76QI%2FHd%2FDp7AqAPNKyM25GsVs%2F%2B9MGGX6lqLko6uuMDw1i2K%2FdVfgnMmtc5jEwg4kPXb4NuI1DvBPnrImjY6SQsUFI%2F2d%2BN7LIUDn%2F92kMT4%2B4vcaakB%2FnkHNBDoyoMn2NiJL8vZHyKfJFa6AOAIYqSPgea0jmTNj2MM4OW5pKJs5KerRVN7GYYonqxRyEfjvowzyvtk89Z5fmJmpLmZBbS7ST3dB4l%2BpKGepqmFXpEGBxX1rw6BNI2wr%2F%2BcOyGlgPKtLgy7maX7E5at5GGzD29CflUgV8hz7ePwBwETX1eNQuxZCfhancg5iqppoG%2FcPR7d8UujLri3AfVHwFyoT150G4XQGG6zujgD5ne0Zxh8LlPGviaCN1aSi09ja3%2BQjKzYxqsd0HzjkurF84FtNRQ%2FIVuYHE7HGkCwd7PD4HFCHSEh8UbbMlqxFSHG56aCHvV82GY4iYSPkkZo7r37gylqK7ijXOxa7BW6iW3MLCJ5MIGOqUBCTJPDPhtfHTh58LVI2us3LLAuhhOL1CyYEdMAkU5vJHPOVwZsowgP99tUNM7Hh3SaBWeULdLxVQXCos088nT7b3DgGXXpbYIgVxn8gNU1vspQt%2Fj1DaXRztTd23ka4z7k3rctpYQptfPrfbcewT0KUbIUVLNpiDbu582eCIugWdvM2U1pjGJ0BStOz25tzmUZvqMG0MTZy8qYtEE2KYfhj4UjIZv&X-Amz-Signature=74a033fc2fb0cd1d933457814cf0acbcd8657b4540dfa05ae6dce4c59144e4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAKPPNK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBfPvDidDsGB6l42NnrQgaiEomyA7mubgSjPGIpy4Y%2BeAiEA7YrzxYwGmI%2BdkcEUEsJ%2BOEocuufwwJpUOiynlCcuZVMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCJkCCixNvXLJ%2FaGjircA2ZqTzLTOBH1rXHCf8B4IGSuwBt2NdSRrgQqNr%2FQ7OOVZqGk5EqSM6unz49%2Fqod7dH5T80MkZndx8OhtonSStQ1PgW%2FoJkYDN%2FsauKUbqQYbmILe2bXxKxSYuBpxr0ZatUISZfcDfuRoUpkv5aLkS76QI%2FHd%2FDp7AqAPNKyM25GsVs%2F%2B9MGGX6lqLko6uuMDw1i2K%2FdVfgnMmtc5jEwg4kPXb4NuI1DvBPnrImjY6SQsUFI%2F2d%2BN7LIUDn%2F92kMT4%2B4vcaakB%2FnkHNBDoyoMn2NiJL8vZHyKfJFa6AOAIYqSPgea0jmTNj2MM4OW5pKJs5KerRVN7GYYonqxRyEfjvowzyvtk89Z5fmJmpLmZBbS7ST3dB4l%2BpKGepqmFXpEGBxX1rw6BNI2wr%2F%2BcOyGlgPKtLgy7maX7E5at5GGzD29CflUgV8hz7ePwBwETX1eNQuxZCfhancg5iqppoG%2FcPR7d8UujLri3AfVHwFyoT150G4XQGG6zujgD5ne0Zxh8LlPGviaCN1aSi09ja3%2BQjKzYxqsd0HzjkurF84FtNRQ%2FIVuYHE7HGkCwd7PD4HFCHSEh8UbbMlqxFSHG56aCHvV82GY4iYSPkkZo7r37gylqK7ijXOxa7BW6iW3MLCJ5MIGOqUBCTJPDPhtfHTh58LVI2us3LLAuhhOL1CyYEdMAkU5vJHPOVwZsowgP99tUNM7Hh3SaBWeULdLxVQXCos088nT7b3DgGXXpbYIgVxn8gNU1vspQt%2Fj1DaXRztTd23ka4z7k3rctpYQptfPrfbcewT0KUbIUVLNpiDbu582eCIugWdvM2U1pjGJ0BStOz25tzmUZvqMG0MTZy8qYtEE2KYfhj4UjIZv&X-Amz-Signature=08f52fbfd5a5310c04ffc5d2cef5494ebed2e090374705ee0cb5192b321b32ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
