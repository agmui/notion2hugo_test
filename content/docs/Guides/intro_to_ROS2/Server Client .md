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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWPEQSV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGO7gUS9Jvydgz98peba2W%2FzFelQ%2Ba2Hl01K9FXcY1abAiBeTOpLNJFqPCDNfzq2Kc7CFKbISzeUqC3A%2B%2FUSzjkPOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMErrciw7YIZVwkcuXKtwDl1kbb%2B3X%2BMkCOZEgYc5Unv4pJK8tUhayb39ZwWYE15l0hKppm%2BWv3TjBRbdYPoOYgbcjAueabphYPdRHCMb89zAtit6o%2B2ovO5%2B%2B4GiHIzp9lAT726lv1bjE85wc3VwiABaj11z2cGBnqB%2Bh%2BVRHdmlB%2BUitFpbEKtYtlPFCROIKm7CKwPHGcQ9RZPr0CaOW8htB%2BMYE8EGdDAPIB9Zja6fDR0TzCDkbTOs86yjc6NINhcYbSSdv3kL%2FgtJD8O66BWFenbOxDzhedNPdbXIQDyMNRMQf3cpE%2BJBSRytZK1RhfMU7EZRCvknxjQ%2Fr4Ap9TbNKqdZ%2B5U5%2FzGtLUYvFhErCit6A5y1bgD%2FwM7xkAJmV3CO2S7eW3NvPNpqSrNVKCbCXX44lh7OHlm5rFQdDus431%2Fc8FQJi4G2iMXFvHP1eF1iNpVX1M%2BmRsMtElSqc9N77%2ByC1%2BFrM2PKDzA%2FPn4jeF8HdRBiIN6IzepFypPGJ5BlcS3UCsNULoUBq2jJOpjPF%2B6%2FtKcbyj3Wt4mbUqYmZThCQ22OBOjSvBinUed%2Fu%2FEdwt4Xd4MiCCi0cTCx0MmMBJvWT%2Fft8XIriCAKlsJIRCLFtnP29WIW%2B5nfl%2FOEqMvuCehPKiLjB6Y8w1OqFvQY6pgEUVUoZH7KhSRTxVjQPd5iL89laymWC6sDE8X4MJmyaPWWvgZ%2B1I3wfxAUnSpvA3rKecNjE5AKLog6%2FCCvNnzmojEn38pkUdKjW%2FOkiofLcUSDK4hU5%2Fu%2FOE%2FSHhFcKI6UOXPy4wOTXAnTsACTB99nLjXgW6TISAWDLdtus2IYA%2BZN5dWmIJer6da%2FK6bpYJJOAAQdWCH4hgsfeuZF2gJOY1XZyMIJg&X-Amz-Signature=d959cd640a4f7244ab34643fd0910354fa0d264140db866f56f30fd620197f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWPEQSV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGO7gUS9Jvydgz98peba2W%2FzFelQ%2Ba2Hl01K9FXcY1abAiBeTOpLNJFqPCDNfzq2Kc7CFKbISzeUqC3A%2B%2FUSzjkPOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMErrciw7YIZVwkcuXKtwDl1kbb%2B3X%2BMkCOZEgYc5Unv4pJK8tUhayb39ZwWYE15l0hKppm%2BWv3TjBRbdYPoOYgbcjAueabphYPdRHCMb89zAtit6o%2B2ovO5%2B%2B4GiHIzp9lAT726lv1bjE85wc3VwiABaj11z2cGBnqB%2Bh%2BVRHdmlB%2BUitFpbEKtYtlPFCROIKm7CKwPHGcQ9RZPr0CaOW8htB%2BMYE8EGdDAPIB9Zja6fDR0TzCDkbTOs86yjc6NINhcYbSSdv3kL%2FgtJD8O66BWFenbOxDzhedNPdbXIQDyMNRMQf3cpE%2BJBSRytZK1RhfMU7EZRCvknxjQ%2Fr4Ap9TbNKqdZ%2B5U5%2FzGtLUYvFhErCit6A5y1bgD%2FwM7xkAJmV3CO2S7eW3NvPNpqSrNVKCbCXX44lh7OHlm5rFQdDus431%2Fc8FQJi4G2iMXFvHP1eF1iNpVX1M%2BmRsMtElSqc9N77%2ByC1%2BFrM2PKDzA%2FPn4jeF8HdRBiIN6IzepFypPGJ5BlcS3UCsNULoUBq2jJOpjPF%2B6%2FtKcbyj3Wt4mbUqYmZThCQ22OBOjSvBinUed%2Fu%2FEdwt4Xd4MiCCi0cTCx0MmMBJvWT%2Fft8XIriCAKlsJIRCLFtnP29WIW%2B5nfl%2FOEqMvuCehPKiLjB6Y8w1OqFvQY6pgEUVUoZH7KhSRTxVjQPd5iL89laymWC6sDE8X4MJmyaPWWvgZ%2B1I3wfxAUnSpvA3rKecNjE5AKLog6%2FCCvNnzmojEn38pkUdKjW%2FOkiofLcUSDK4hU5%2Fu%2FOE%2FSHhFcKI6UOXPy4wOTXAnTsACTB99nLjXgW6TISAWDLdtus2IYA%2BZN5dWmIJer6da%2FK6bpYJJOAAQdWCH4hgsfeuZF2gJOY1XZyMIJg&X-Amz-Signature=871064f04e5f54ceb0b82cf8568d08cd062883bed0b6ab3a4113f175b29a9b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWPEQSV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGO7gUS9Jvydgz98peba2W%2FzFelQ%2Ba2Hl01K9FXcY1abAiBeTOpLNJFqPCDNfzq2Kc7CFKbISzeUqC3A%2B%2FUSzjkPOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMErrciw7YIZVwkcuXKtwDl1kbb%2B3X%2BMkCOZEgYc5Unv4pJK8tUhayb39ZwWYE15l0hKppm%2BWv3TjBRbdYPoOYgbcjAueabphYPdRHCMb89zAtit6o%2B2ovO5%2B%2B4GiHIzp9lAT726lv1bjE85wc3VwiABaj11z2cGBnqB%2Bh%2BVRHdmlB%2BUitFpbEKtYtlPFCROIKm7CKwPHGcQ9RZPr0CaOW8htB%2BMYE8EGdDAPIB9Zja6fDR0TzCDkbTOs86yjc6NINhcYbSSdv3kL%2FgtJD8O66BWFenbOxDzhedNPdbXIQDyMNRMQf3cpE%2BJBSRytZK1RhfMU7EZRCvknxjQ%2Fr4Ap9TbNKqdZ%2B5U5%2FzGtLUYvFhErCit6A5y1bgD%2FwM7xkAJmV3CO2S7eW3NvPNpqSrNVKCbCXX44lh7OHlm5rFQdDus431%2Fc8FQJi4G2iMXFvHP1eF1iNpVX1M%2BmRsMtElSqc9N77%2ByC1%2BFrM2PKDzA%2FPn4jeF8HdRBiIN6IzepFypPGJ5BlcS3UCsNULoUBq2jJOpjPF%2B6%2FtKcbyj3Wt4mbUqYmZThCQ22OBOjSvBinUed%2Fu%2FEdwt4Xd4MiCCi0cTCx0MmMBJvWT%2Fft8XIriCAKlsJIRCLFtnP29WIW%2B5nfl%2FOEqMvuCehPKiLjB6Y8w1OqFvQY6pgEUVUoZH7KhSRTxVjQPd5iL89laymWC6sDE8X4MJmyaPWWvgZ%2B1I3wfxAUnSpvA3rKecNjE5AKLog6%2FCCvNnzmojEn38pkUdKjW%2FOkiofLcUSDK4hU5%2Fu%2FOE%2FSHhFcKI6UOXPy4wOTXAnTsACTB99nLjXgW6TISAWDLdtus2IYA%2BZN5dWmIJer6da%2FK6bpYJJOAAQdWCH4hgsfeuZF2gJOY1XZyMIJg&X-Amz-Signature=3de12bf2e93736cad4da0634f7c2aad4bfcb91c9abb875b25474e01fbcb62d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWPEQSV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGO7gUS9Jvydgz98peba2W%2FzFelQ%2Ba2Hl01K9FXcY1abAiBeTOpLNJFqPCDNfzq2Kc7CFKbISzeUqC3A%2B%2FUSzjkPOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMErrciw7YIZVwkcuXKtwDl1kbb%2B3X%2BMkCOZEgYc5Unv4pJK8tUhayb39ZwWYE15l0hKppm%2BWv3TjBRbdYPoOYgbcjAueabphYPdRHCMb89zAtit6o%2B2ovO5%2B%2B4GiHIzp9lAT726lv1bjE85wc3VwiABaj11z2cGBnqB%2Bh%2BVRHdmlB%2BUitFpbEKtYtlPFCROIKm7CKwPHGcQ9RZPr0CaOW8htB%2BMYE8EGdDAPIB9Zja6fDR0TzCDkbTOs86yjc6NINhcYbSSdv3kL%2FgtJD8O66BWFenbOxDzhedNPdbXIQDyMNRMQf3cpE%2BJBSRytZK1RhfMU7EZRCvknxjQ%2Fr4Ap9TbNKqdZ%2B5U5%2FzGtLUYvFhErCit6A5y1bgD%2FwM7xkAJmV3CO2S7eW3NvPNpqSrNVKCbCXX44lh7OHlm5rFQdDus431%2Fc8FQJi4G2iMXFvHP1eF1iNpVX1M%2BmRsMtElSqc9N77%2ByC1%2BFrM2PKDzA%2FPn4jeF8HdRBiIN6IzepFypPGJ5BlcS3UCsNULoUBq2jJOpjPF%2B6%2FtKcbyj3Wt4mbUqYmZThCQ22OBOjSvBinUed%2Fu%2FEdwt4Xd4MiCCi0cTCx0MmMBJvWT%2Fft8XIriCAKlsJIRCLFtnP29WIW%2B5nfl%2FOEqMvuCehPKiLjB6Y8w1OqFvQY6pgEUVUoZH7KhSRTxVjQPd5iL89laymWC6sDE8X4MJmyaPWWvgZ%2B1I3wfxAUnSpvA3rKecNjE5AKLog6%2FCCvNnzmojEn38pkUdKjW%2FOkiofLcUSDK4hU5%2Fu%2FOE%2FSHhFcKI6UOXPy4wOTXAnTsACTB99nLjXgW6TISAWDLdtus2IYA%2BZN5dWmIJer6da%2FK6bpYJJOAAQdWCH4hgsfeuZF2gJOY1XZyMIJg&X-Amz-Signature=cf3223c8846912ea10aadbb57344d6f9c4129b06bcdb546654de805e41a1e90d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWPEQSV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGO7gUS9Jvydgz98peba2W%2FzFelQ%2Ba2Hl01K9FXcY1abAiBeTOpLNJFqPCDNfzq2Kc7CFKbISzeUqC3A%2B%2FUSzjkPOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMErrciw7YIZVwkcuXKtwDl1kbb%2B3X%2BMkCOZEgYc5Unv4pJK8tUhayb39ZwWYE15l0hKppm%2BWv3TjBRbdYPoOYgbcjAueabphYPdRHCMb89zAtit6o%2B2ovO5%2B%2B4GiHIzp9lAT726lv1bjE85wc3VwiABaj11z2cGBnqB%2Bh%2BVRHdmlB%2BUitFpbEKtYtlPFCROIKm7CKwPHGcQ9RZPr0CaOW8htB%2BMYE8EGdDAPIB9Zja6fDR0TzCDkbTOs86yjc6NINhcYbSSdv3kL%2FgtJD8O66BWFenbOxDzhedNPdbXIQDyMNRMQf3cpE%2BJBSRytZK1RhfMU7EZRCvknxjQ%2Fr4Ap9TbNKqdZ%2B5U5%2FzGtLUYvFhErCit6A5y1bgD%2FwM7xkAJmV3CO2S7eW3NvPNpqSrNVKCbCXX44lh7OHlm5rFQdDus431%2Fc8FQJi4G2iMXFvHP1eF1iNpVX1M%2BmRsMtElSqc9N77%2ByC1%2BFrM2PKDzA%2FPn4jeF8HdRBiIN6IzepFypPGJ5BlcS3UCsNULoUBq2jJOpjPF%2B6%2FtKcbyj3Wt4mbUqYmZThCQ22OBOjSvBinUed%2Fu%2FEdwt4Xd4MiCCi0cTCx0MmMBJvWT%2Fft8XIriCAKlsJIRCLFtnP29WIW%2B5nfl%2FOEqMvuCehPKiLjB6Y8w1OqFvQY6pgEUVUoZH7KhSRTxVjQPd5iL89laymWC6sDE8X4MJmyaPWWvgZ%2B1I3wfxAUnSpvA3rKecNjE5AKLog6%2FCCvNnzmojEn38pkUdKjW%2FOkiofLcUSDK4hU5%2Fu%2FOE%2FSHhFcKI6UOXPy4wOTXAnTsACTB99nLjXgW6TISAWDLdtus2IYA%2BZN5dWmIJer6da%2FK6bpYJJOAAQdWCH4hgsfeuZF2gJOY1XZyMIJg&X-Amz-Signature=e74b08c37bfcd5fb125de5126ed4e09ccb1b7aaffb27c763c6b4229fe4aeae78&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
