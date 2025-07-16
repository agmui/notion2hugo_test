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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K5DVGV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDdct2AtptNVlw4Lha4N%2FdAw1iS2QJRSnV0FMg%2FPAQSaAIhAJuAO2BEMpcbLyTgZKI14y6pBOGbTv5CeyICc5gN81ePKv8DCFwQABoMNjM3NDIzMTgzODA1Igyy4k6u3xn27Bqteh0q3AMEyPEnUIy3QCNf8VxpeKK6AcOMKlLfylKzVXBOYWxrXlykONkr5gdEzT8kGJ6RguDhezPvUGQO0tGuYH44S%2F1VpfHLGL%2BRxtVg8NIs%2FFLl3mIo86Z08H%2FMgn3Y6OwHkCfhUTeB2dP4kbYnV%2FVtwKcAgm%2FbOEdzcDwmPRgkswpgNpJ0lgOY62LuO2%2BVoCGyqQAraCP54RydQfw6foEIbfjt8%2BoqvhzSgvaElS0p12o37WHnjDgCIV8a%2BspXiqpQC5QMPIHpRJ63S3CRiCoRD773Jj%2F25oct92fOSLiVi1H3RaaaJqvQsUsR%2BkqkvRurIk8ldvHBukN41v0cjWM7dhjejHA6aJbfhnc08PfSygLqgsqyOCmqwtxozc7FtkZ5sTWU%2BkWmubFkW1FSHwRWdXWAVyNcgnAmuILpavm8nKdbMRRxRwnWZwyjmsDRDXfRAcCdNoQFL%2FrsO5ONXAdVk0HaFcmvxciZpSLUWIQrbzFkAc%2FEW0d8WJ0MYZ4eNRERMZy3%2BN2gzVtKASWXAO2VmByc%2BGs6Imhks3iOp8rnrPFB2mMc6GwsoM5awvfaooJnAyYUEfHEoyEYeNol8spIpciSTxusyV8yHHQCkD92qM7FMocuP1kRzsNyKUvdLDDYk97DBjqkASPCwrHT5savLYdAc77Bo4X0xg8RIZCHgyPsa2AMOrhP7xnS51dzpElV7aQqXGPqB%2Bc58JAk%2BQb3E0StOcCP4FBas9%2B7y%2F8KaDajboB9dNzumnrcyDJ9VRfMXbLVhHhF3IdSvalS%2BFPrqbYXJpxEeYIEdCSgVpwCwFxcuZhQ3nDpuLgImI7RCQ%2BhQIEIE2F%2Balw1EeuTJ6XGd8qWrCIZErBaT9gi&X-Amz-Signature=8539f4b2481638bf89597ad1091cbb85c5490223bf787c0408acd8c85ecf3110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K5DVGV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDdct2AtptNVlw4Lha4N%2FdAw1iS2QJRSnV0FMg%2FPAQSaAIhAJuAO2BEMpcbLyTgZKI14y6pBOGbTv5CeyICc5gN81ePKv8DCFwQABoMNjM3NDIzMTgzODA1Igyy4k6u3xn27Bqteh0q3AMEyPEnUIy3QCNf8VxpeKK6AcOMKlLfylKzVXBOYWxrXlykONkr5gdEzT8kGJ6RguDhezPvUGQO0tGuYH44S%2F1VpfHLGL%2BRxtVg8NIs%2FFLl3mIo86Z08H%2FMgn3Y6OwHkCfhUTeB2dP4kbYnV%2FVtwKcAgm%2FbOEdzcDwmPRgkswpgNpJ0lgOY62LuO2%2BVoCGyqQAraCP54RydQfw6foEIbfjt8%2BoqvhzSgvaElS0p12o37WHnjDgCIV8a%2BspXiqpQC5QMPIHpRJ63S3CRiCoRD773Jj%2F25oct92fOSLiVi1H3RaaaJqvQsUsR%2BkqkvRurIk8ldvHBukN41v0cjWM7dhjejHA6aJbfhnc08PfSygLqgsqyOCmqwtxozc7FtkZ5sTWU%2BkWmubFkW1FSHwRWdXWAVyNcgnAmuILpavm8nKdbMRRxRwnWZwyjmsDRDXfRAcCdNoQFL%2FrsO5ONXAdVk0HaFcmvxciZpSLUWIQrbzFkAc%2FEW0d8WJ0MYZ4eNRERMZy3%2BN2gzVtKASWXAO2VmByc%2BGs6Imhks3iOp8rnrPFB2mMc6GwsoM5awvfaooJnAyYUEfHEoyEYeNol8spIpciSTxusyV8yHHQCkD92qM7FMocuP1kRzsNyKUvdLDDYk97DBjqkASPCwrHT5savLYdAc77Bo4X0xg8RIZCHgyPsa2AMOrhP7xnS51dzpElV7aQqXGPqB%2Bc58JAk%2BQb3E0StOcCP4FBas9%2B7y%2F8KaDajboB9dNzumnrcyDJ9VRfMXbLVhHhF3IdSvalS%2BFPrqbYXJpxEeYIEdCSgVpwCwFxcuZhQ3nDpuLgImI7RCQ%2BhQIEIE2F%2Balw1EeuTJ6XGd8qWrCIZErBaT9gi&X-Amz-Signature=dfa34fd526018a87fbe0021f882f55d4c0de1fa4a5343187bced201814d697e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K5DVGV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDdct2AtptNVlw4Lha4N%2FdAw1iS2QJRSnV0FMg%2FPAQSaAIhAJuAO2BEMpcbLyTgZKI14y6pBOGbTv5CeyICc5gN81ePKv8DCFwQABoMNjM3NDIzMTgzODA1Igyy4k6u3xn27Bqteh0q3AMEyPEnUIy3QCNf8VxpeKK6AcOMKlLfylKzVXBOYWxrXlykONkr5gdEzT8kGJ6RguDhezPvUGQO0tGuYH44S%2F1VpfHLGL%2BRxtVg8NIs%2FFLl3mIo86Z08H%2FMgn3Y6OwHkCfhUTeB2dP4kbYnV%2FVtwKcAgm%2FbOEdzcDwmPRgkswpgNpJ0lgOY62LuO2%2BVoCGyqQAraCP54RydQfw6foEIbfjt8%2BoqvhzSgvaElS0p12o37WHnjDgCIV8a%2BspXiqpQC5QMPIHpRJ63S3CRiCoRD773Jj%2F25oct92fOSLiVi1H3RaaaJqvQsUsR%2BkqkvRurIk8ldvHBukN41v0cjWM7dhjejHA6aJbfhnc08PfSygLqgsqyOCmqwtxozc7FtkZ5sTWU%2BkWmubFkW1FSHwRWdXWAVyNcgnAmuILpavm8nKdbMRRxRwnWZwyjmsDRDXfRAcCdNoQFL%2FrsO5ONXAdVk0HaFcmvxciZpSLUWIQrbzFkAc%2FEW0d8WJ0MYZ4eNRERMZy3%2BN2gzVtKASWXAO2VmByc%2BGs6Imhks3iOp8rnrPFB2mMc6GwsoM5awvfaooJnAyYUEfHEoyEYeNol8spIpciSTxusyV8yHHQCkD92qM7FMocuP1kRzsNyKUvdLDDYk97DBjqkASPCwrHT5savLYdAc77Bo4X0xg8RIZCHgyPsa2AMOrhP7xnS51dzpElV7aQqXGPqB%2Bc58JAk%2BQb3E0StOcCP4FBas9%2B7y%2F8KaDajboB9dNzumnrcyDJ9VRfMXbLVhHhF3IdSvalS%2BFPrqbYXJpxEeYIEdCSgVpwCwFxcuZhQ3nDpuLgImI7RCQ%2BhQIEIE2F%2Balw1EeuTJ6XGd8qWrCIZErBaT9gi&X-Amz-Signature=bf4d381f81f2f71fa2ed693d72399eefb7e999b18ec32b3049e5dbcf7783e5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K5DVGV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDdct2AtptNVlw4Lha4N%2FdAw1iS2QJRSnV0FMg%2FPAQSaAIhAJuAO2BEMpcbLyTgZKI14y6pBOGbTv5CeyICc5gN81ePKv8DCFwQABoMNjM3NDIzMTgzODA1Igyy4k6u3xn27Bqteh0q3AMEyPEnUIy3QCNf8VxpeKK6AcOMKlLfylKzVXBOYWxrXlykONkr5gdEzT8kGJ6RguDhezPvUGQO0tGuYH44S%2F1VpfHLGL%2BRxtVg8NIs%2FFLl3mIo86Z08H%2FMgn3Y6OwHkCfhUTeB2dP4kbYnV%2FVtwKcAgm%2FbOEdzcDwmPRgkswpgNpJ0lgOY62LuO2%2BVoCGyqQAraCP54RydQfw6foEIbfjt8%2BoqvhzSgvaElS0p12o37WHnjDgCIV8a%2BspXiqpQC5QMPIHpRJ63S3CRiCoRD773Jj%2F25oct92fOSLiVi1H3RaaaJqvQsUsR%2BkqkvRurIk8ldvHBukN41v0cjWM7dhjejHA6aJbfhnc08PfSygLqgsqyOCmqwtxozc7FtkZ5sTWU%2BkWmubFkW1FSHwRWdXWAVyNcgnAmuILpavm8nKdbMRRxRwnWZwyjmsDRDXfRAcCdNoQFL%2FrsO5ONXAdVk0HaFcmvxciZpSLUWIQrbzFkAc%2FEW0d8WJ0MYZ4eNRERMZy3%2BN2gzVtKASWXAO2VmByc%2BGs6Imhks3iOp8rnrPFB2mMc6GwsoM5awvfaooJnAyYUEfHEoyEYeNol8spIpciSTxusyV8yHHQCkD92qM7FMocuP1kRzsNyKUvdLDDYk97DBjqkASPCwrHT5savLYdAc77Bo4X0xg8RIZCHgyPsa2AMOrhP7xnS51dzpElV7aQqXGPqB%2Bc58JAk%2BQb3E0StOcCP4FBas9%2B7y%2F8KaDajboB9dNzumnrcyDJ9VRfMXbLVhHhF3IdSvalS%2BFPrqbYXJpxEeYIEdCSgVpwCwFxcuZhQ3nDpuLgImI7RCQ%2BhQIEIE2F%2Balw1EeuTJ6XGd8qWrCIZErBaT9gi&X-Amz-Signature=3de28cf6ced9018405074f43f5ab06744416790904720df6615a75f1f1c7caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K5DVGV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDdct2AtptNVlw4Lha4N%2FdAw1iS2QJRSnV0FMg%2FPAQSaAIhAJuAO2BEMpcbLyTgZKI14y6pBOGbTv5CeyICc5gN81ePKv8DCFwQABoMNjM3NDIzMTgzODA1Igyy4k6u3xn27Bqteh0q3AMEyPEnUIy3QCNf8VxpeKK6AcOMKlLfylKzVXBOYWxrXlykONkr5gdEzT8kGJ6RguDhezPvUGQO0tGuYH44S%2F1VpfHLGL%2BRxtVg8NIs%2FFLl3mIo86Z08H%2FMgn3Y6OwHkCfhUTeB2dP4kbYnV%2FVtwKcAgm%2FbOEdzcDwmPRgkswpgNpJ0lgOY62LuO2%2BVoCGyqQAraCP54RydQfw6foEIbfjt8%2BoqvhzSgvaElS0p12o37WHnjDgCIV8a%2BspXiqpQC5QMPIHpRJ63S3CRiCoRD773Jj%2F25oct92fOSLiVi1H3RaaaJqvQsUsR%2BkqkvRurIk8ldvHBukN41v0cjWM7dhjejHA6aJbfhnc08PfSygLqgsqyOCmqwtxozc7FtkZ5sTWU%2BkWmubFkW1FSHwRWdXWAVyNcgnAmuILpavm8nKdbMRRxRwnWZwyjmsDRDXfRAcCdNoQFL%2FrsO5ONXAdVk0HaFcmvxciZpSLUWIQrbzFkAc%2FEW0d8WJ0MYZ4eNRERMZy3%2BN2gzVtKASWXAO2VmByc%2BGs6Imhks3iOp8rnrPFB2mMc6GwsoM5awvfaooJnAyYUEfHEoyEYeNol8spIpciSTxusyV8yHHQCkD92qM7FMocuP1kRzsNyKUvdLDDYk97DBjqkASPCwrHT5savLYdAc77Bo4X0xg8RIZCHgyPsa2AMOrhP7xnS51dzpElV7aQqXGPqB%2Bc58JAk%2BQb3E0StOcCP4FBas9%2B7y%2F8KaDajboB9dNzumnrcyDJ9VRfMXbLVhHhF3IdSvalS%2BFPrqbYXJpxEeYIEdCSgVpwCwFxcuZhQ3nDpuLgImI7RCQ%2BhQIEIE2F%2Balw1EeuTJ6XGd8qWrCIZErBaT9gi&X-Amz-Signature=9e6c5785d5227ab8e8e5892aabba71027311a58ea767f68eec0a3cf282539e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
