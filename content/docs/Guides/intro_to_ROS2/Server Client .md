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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MV4JXWA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDCT7oh6SNnwCsZ1txVByFKgEsKUi16YZouosrSkg3vQgIhAIrQ0Z2dajyXvUjhHkEln0OqWilJ1smrT55%2Bnrf1oMOMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO%2F%2BlYBsz7VljVvyUq3APGD%2FmEjMOlU5VVOldh1jc642iiCEI0xSWB2pJNJ7SMabvIUYXbUeIcWhgCGZg4u2A7le6DWrVDp61XGa6s1dbCK9YRkZZLzIjEZKnrcgSsXkhuzlDXUS%2FC%2FqC8oPTZnbTWL5VDLcbPjkJqXoadm7ZcX072Q3JHyG5AMOQI1VIqQhWDCRdHP6VY9Vs2eQ4IMeaPONN%2FwxBlHzoOnJyG4cXYUaFOx3p3ZNSxiAbgvFeX3vaQU4N%2FVNNDaMKAZbvQtaZNq6%2FfzVmOjP40DykJ62K0%2F9ZykwGx27A9uhgJXoST1dwA1pZ46kJt8IUaU2eTPU4Tr5cK1Q7Oh714DaOn0gS5rIELN5dwPuykQu4pzgqkmhe%2F80gIDyTjfTwepLsNkm%2FlsiJAbX1EBWpQ8%2FZREylPJwFL%2FS0YJjaK16%2B4iLHccz6P30eLkvfPE8xGIt10NBDkj6kY0N8Y0h%2Btf87WtoIjgqWADfAsO1Kn2%2BIPkf624n0Py8p4lOCHnQg3hfyH5UYtWCPTKrlHfBwn2EYmvbo%2BQObpYN16fshEHhfWKYeMoE6HTPbyi6tilr00oXQ3q8dfzQrfijaYT7rxjiZnBcVz33futeAQsXjXq%2BMBA%2FsG4649fRblywmIXUvKzzChoeC%2FBjqkAaO15kNv56oOZ%2BF676Ba4HPvu98HJWLQXcvSxoqG%2FgirBdTm%2FcLDARpWnihRvDUvY6UbgCJ%2BIBWLQJDRFSqZYDDjaliveFNghEK9Rn1%2BBM0OU1D16r03AqWB5S9qbJgjowwHblRZRVHH6KcVj1CFfuzBR%2BLmeYaUhesS4v1dYywkly7A1O9ezi3OfGHp6bFDKydSA1HSooEmEhqY9P1J0bJvwjbm&X-Amz-Signature=3be824fda9a62ddaaa72d86972b9885ce98a8fd97f3e3ac00ac075f040d9fe83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MV4JXWA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDCT7oh6SNnwCsZ1txVByFKgEsKUi16YZouosrSkg3vQgIhAIrQ0Z2dajyXvUjhHkEln0OqWilJ1smrT55%2Bnrf1oMOMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO%2F%2BlYBsz7VljVvyUq3APGD%2FmEjMOlU5VVOldh1jc642iiCEI0xSWB2pJNJ7SMabvIUYXbUeIcWhgCGZg4u2A7le6DWrVDp61XGa6s1dbCK9YRkZZLzIjEZKnrcgSsXkhuzlDXUS%2FC%2FqC8oPTZnbTWL5VDLcbPjkJqXoadm7ZcX072Q3JHyG5AMOQI1VIqQhWDCRdHP6VY9Vs2eQ4IMeaPONN%2FwxBlHzoOnJyG4cXYUaFOx3p3ZNSxiAbgvFeX3vaQU4N%2FVNNDaMKAZbvQtaZNq6%2FfzVmOjP40DykJ62K0%2F9ZykwGx27A9uhgJXoST1dwA1pZ46kJt8IUaU2eTPU4Tr5cK1Q7Oh714DaOn0gS5rIELN5dwPuykQu4pzgqkmhe%2F80gIDyTjfTwepLsNkm%2FlsiJAbX1EBWpQ8%2FZREylPJwFL%2FS0YJjaK16%2B4iLHccz6P30eLkvfPE8xGIt10NBDkj6kY0N8Y0h%2Btf87WtoIjgqWADfAsO1Kn2%2BIPkf624n0Py8p4lOCHnQg3hfyH5UYtWCPTKrlHfBwn2EYmvbo%2BQObpYN16fshEHhfWKYeMoE6HTPbyi6tilr00oXQ3q8dfzQrfijaYT7rxjiZnBcVz33futeAQsXjXq%2BMBA%2FsG4649fRblywmIXUvKzzChoeC%2FBjqkAaO15kNv56oOZ%2BF676Ba4HPvu98HJWLQXcvSxoqG%2FgirBdTm%2FcLDARpWnihRvDUvY6UbgCJ%2BIBWLQJDRFSqZYDDjaliveFNghEK9Rn1%2BBM0OU1D16r03AqWB5S9qbJgjowwHblRZRVHH6KcVj1CFfuzBR%2BLmeYaUhesS4v1dYywkly7A1O9ezi3OfGHp6bFDKydSA1HSooEmEhqY9P1J0bJvwjbm&X-Amz-Signature=0652f3e3b4b700f12d56bd2f62677e56a7926ef87cc7fc7bc9b424f6bab96b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MV4JXWA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDCT7oh6SNnwCsZ1txVByFKgEsKUi16YZouosrSkg3vQgIhAIrQ0Z2dajyXvUjhHkEln0OqWilJ1smrT55%2Bnrf1oMOMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO%2F%2BlYBsz7VljVvyUq3APGD%2FmEjMOlU5VVOldh1jc642iiCEI0xSWB2pJNJ7SMabvIUYXbUeIcWhgCGZg4u2A7le6DWrVDp61XGa6s1dbCK9YRkZZLzIjEZKnrcgSsXkhuzlDXUS%2FC%2FqC8oPTZnbTWL5VDLcbPjkJqXoadm7ZcX072Q3JHyG5AMOQI1VIqQhWDCRdHP6VY9Vs2eQ4IMeaPONN%2FwxBlHzoOnJyG4cXYUaFOx3p3ZNSxiAbgvFeX3vaQU4N%2FVNNDaMKAZbvQtaZNq6%2FfzVmOjP40DykJ62K0%2F9ZykwGx27A9uhgJXoST1dwA1pZ46kJt8IUaU2eTPU4Tr5cK1Q7Oh714DaOn0gS5rIELN5dwPuykQu4pzgqkmhe%2F80gIDyTjfTwepLsNkm%2FlsiJAbX1EBWpQ8%2FZREylPJwFL%2FS0YJjaK16%2B4iLHccz6P30eLkvfPE8xGIt10NBDkj6kY0N8Y0h%2Btf87WtoIjgqWADfAsO1Kn2%2BIPkf624n0Py8p4lOCHnQg3hfyH5UYtWCPTKrlHfBwn2EYmvbo%2BQObpYN16fshEHhfWKYeMoE6HTPbyi6tilr00oXQ3q8dfzQrfijaYT7rxjiZnBcVz33futeAQsXjXq%2BMBA%2FsG4649fRblywmIXUvKzzChoeC%2FBjqkAaO15kNv56oOZ%2BF676Ba4HPvu98HJWLQXcvSxoqG%2FgirBdTm%2FcLDARpWnihRvDUvY6UbgCJ%2BIBWLQJDRFSqZYDDjaliveFNghEK9Rn1%2BBM0OU1D16r03AqWB5S9qbJgjowwHblRZRVHH6KcVj1CFfuzBR%2BLmeYaUhesS4v1dYywkly7A1O9ezi3OfGHp6bFDKydSA1HSooEmEhqY9P1J0bJvwjbm&X-Amz-Signature=c08182cb0affc7d60278c12f833b21aa3907d53945d05be3015bbe3a5d63ac6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MV4JXWA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDCT7oh6SNnwCsZ1txVByFKgEsKUi16YZouosrSkg3vQgIhAIrQ0Z2dajyXvUjhHkEln0OqWilJ1smrT55%2Bnrf1oMOMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO%2F%2BlYBsz7VljVvyUq3APGD%2FmEjMOlU5VVOldh1jc642iiCEI0xSWB2pJNJ7SMabvIUYXbUeIcWhgCGZg4u2A7le6DWrVDp61XGa6s1dbCK9YRkZZLzIjEZKnrcgSsXkhuzlDXUS%2FC%2FqC8oPTZnbTWL5VDLcbPjkJqXoadm7ZcX072Q3JHyG5AMOQI1VIqQhWDCRdHP6VY9Vs2eQ4IMeaPONN%2FwxBlHzoOnJyG4cXYUaFOx3p3ZNSxiAbgvFeX3vaQU4N%2FVNNDaMKAZbvQtaZNq6%2FfzVmOjP40DykJ62K0%2F9ZykwGx27A9uhgJXoST1dwA1pZ46kJt8IUaU2eTPU4Tr5cK1Q7Oh714DaOn0gS5rIELN5dwPuykQu4pzgqkmhe%2F80gIDyTjfTwepLsNkm%2FlsiJAbX1EBWpQ8%2FZREylPJwFL%2FS0YJjaK16%2B4iLHccz6P30eLkvfPE8xGIt10NBDkj6kY0N8Y0h%2Btf87WtoIjgqWADfAsO1Kn2%2BIPkf624n0Py8p4lOCHnQg3hfyH5UYtWCPTKrlHfBwn2EYmvbo%2BQObpYN16fshEHhfWKYeMoE6HTPbyi6tilr00oXQ3q8dfzQrfijaYT7rxjiZnBcVz33futeAQsXjXq%2BMBA%2FsG4649fRblywmIXUvKzzChoeC%2FBjqkAaO15kNv56oOZ%2BF676Ba4HPvu98HJWLQXcvSxoqG%2FgirBdTm%2FcLDARpWnihRvDUvY6UbgCJ%2BIBWLQJDRFSqZYDDjaliveFNghEK9Rn1%2BBM0OU1D16r03AqWB5S9qbJgjowwHblRZRVHH6KcVj1CFfuzBR%2BLmeYaUhesS4v1dYywkly7A1O9ezi3OfGHp6bFDKydSA1HSooEmEhqY9P1J0bJvwjbm&X-Amz-Signature=96eecf81e72e87d721134374cf12e15696a9494a1ff17a5487d09a68019796f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MV4JXWA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDCT7oh6SNnwCsZ1txVByFKgEsKUi16YZouosrSkg3vQgIhAIrQ0Z2dajyXvUjhHkEln0OqWilJ1smrT55%2Bnrf1oMOMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO%2F%2BlYBsz7VljVvyUq3APGD%2FmEjMOlU5VVOldh1jc642iiCEI0xSWB2pJNJ7SMabvIUYXbUeIcWhgCGZg4u2A7le6DWrVDp61XGa6s1dbCK9YRkZZLzIjEZKnrcgSsXkhuzlDXUS%2FC%2FqC8oPTZnbTWL5VDLcbPjkJqXoadm7ZcX072Q3JHyG5AMOQI1VIqQhWDCRdHP6VY9Vs2eQ4IMeaPONN%2FwxBlHzoOnJyG4cXYUaFOx3p3ZNSxiAbgvFeX3vaQU4N%2FVNNDaMKAZbvQtaZNq6%2FfzVmOjP40DykJ62K0%2F9ZykwGx27A9uhgJXoST1dwA1pZ46kJt8IUaU2eTPU4Tr5cK1Q7Oh714DaOn0gS5rIELN5dwPuykQu4pzgqkmhe%2F80gIDyTjfTwepLsNkm%2FlsiJAbX1EBWpQ8%2FZREylPJwFL%2FS0YJjaK16%2B4iLHccz6P30eLkvfPE8xGIt10NBDkj6kY0N8Y0h%2Btf87WtoIjgqWADfAsO1Kn2%2BIPkf624n0Py8p4lOCHnQg3hfyH5UYtWCPTKrlHfBwn2EYmvbo%2BQObpYN16fshEHhfWKYeMoE6HTPbyi6tilr00oXQ3q8dfzQrfijaYT7rxjiZnBcVz33futeAQsXjXq%2BMBA%2FsG4649fRblywmIXUvKzzChoeC%2FBjqkAaO15kNv56oOZ%2BF676Ba4HPvu98HJWLQXcvSxoqG%2FgirBdTm%2FcLDARpWnihRvDUvY6UbgCJ%2BIBWLQJDRFSqZYDDjaliveFNghEK9Rn1%2BBM0OU1D16r03AqWB5S9qbJgjowwHblRZRVHH6KcVj1CFfuzBR%2BLmeYaUhesS4v1dYywkly7A1O9ezi3OfGHp6bFDKydSA1HSooEmEhqY9P1J0bJvwjbm&X-Amz-Signature=e7202caf37fd43d327ee7825bb526562cd1af828b6cdb1baed9fcb4f092d1a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
