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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5CCUHN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGxRAW6arem7cCuugG60xJaf1wgwvQ1nnaYrTNaNfryVAiEAtkN6EJk1kHHFDXIytCcHQ%2Fti4l6l0Z5kTdb85Sq7fFIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEbYQI52RC%2ByOsoU5CrcA3TpkIIhsKZuLE0fWCkVHG7UxDjLJGZUS6DoyXcloaV5ixMdtyopT006QRiEBNFqPZcnuBFSmIk%2F9Ga8HwusGUE9TYC8dWZlxvOVaEWbwykiZFQttMCyiFgRSZIRMAbN8QcZjbzl%2BCzxdIONsThO84bSzIeksDs69SUXz7YJcJln6QRDrO8S28TVITDZICHKTzMTNIm0SrSxeXZNXh1FH907ZtKvesMtDygLcZQcIkArS5P9D6hzOv2dxFcx%2B%2B22igh9%2B%2FrMFlTF0d3ZuqByKrFN%2FOCjnidA36%2F6AeSMhczM9caV0QbXChQzPZ7eqPl6xON8%2BSg%2BWD%2BtwuTdUewnZypUNhWLeMIFBigj2B%2BAwFFeCWhZEMhWrXwL8bcrSDBroxsHQetO2yrkKOLC64nEla8UWiP9HYMLiIvvEGfQJOJA47ZoQOpZpu0GNoZUksrpEJXpnj%2FmToyJYmccgBvcJ7fo%2B9u6bJNsuiYRrdzLNUngnv2URZN%2FdyOZ8y38XTgeky0pvs7MG3oHLEmdwtC5rKL%2FNCM3WpbLJMOyNaw74pgmhUaQMXiWaKwtKpT5KpfyPo5OyV%2FKHIn4Cn57E927tHXl3YEPqVfce3Mnp9fwbGEC126WeakhYYvQFxpwMJ6E1MMGOqUBgRYsiP%2B9KnX24qMywEXEJQJ%2B71m6O3vHjCdXxwWHMXRMBlX%2BSafNq4IlW0Pe6EYscesXQhbqE9bcfQHHaA7kqmKxr9F%2BOoFjHf0A6rL7MsP7xCsqBfgnN7LjpkBtzIF8GcCBuPWFUlxFw%2FRvZJZi%2BEsxl4z3omp7ZiJdRSI1UXFEHD9d19ZjyK2WVQA%2FpTi7tGBJzDehyUE%2BU3%2Bqkbp9ObB7mkd5&X-Amz-Signature=c2f0f1c469120d019ae56ccdb05ace98735ac9bf1c4b306956e7e46c31b9dc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5CCUHN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGxRAW6arem7cCuugG60xJaf1wgwvQ1nnaYrTNaNfryVAiEAtkN6EJk1kHHFDXIytCcHQ%2Fti4l6l0Z5kTdb85Sq7fFIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEbYQI52RC%2ByOsoU5CrcA3TpkIIhsKZuLE0fWCkVHG7UxDjLJGZUS6DoyXcloaV5ixMdtyopT006QRiEBNFqPZcnuBFSmIk%2F9Ga8HwusGUE9TYC8dWZlxvOVaEWbwykiZFQttMCyiFgRSZIRMAbN8QcZjbzl%2BCzxdIONsThO84bSzIeksDs69SUXz7YJcJln6QRDrO8S28TVITDZICHKTzMTNIm0SrSxeXZNXh1FH907ZtKvesMtDygLcZQcIkArS5P9D6hzOv2dxFcx%2B%2B22igh9%2B%2FrMFlTF0d3ZuqByKrFN%2FOCjnidA36%2F6AeSMhczM9caV0QbXChQzPZ7eqPl6xON8%2BSg%2BWD%2BtwuTdUewnZypUNhWLeMIFBigj2B%2BAwFFeCWhZEMhWrXwL8bcrSDBroxsHQetO2yrkKOLC64nEla8UWiP9HYMLiIvvEGfQJOJA47ZoQOpZpu0GNoZUksrpEJXpnj%2FmToyJYmccgBvcJ7fo%2B9u6bJNsuiYRrdzLNUngnv2URZN%2FdyOZ8y38XTgeky0pvs7MG3oHLEmdwtC5rKL%2FNCM3WpbLJMOyNaw74pgmhUaQMXiWaKwtKpT5KpfyPo5OyV%2FKHIn4Cn57E927tHXl3YEPqVfce3Mnp9fwbGEC126WeakhYYvQFxpwMJ6E1MMGOqUBgRYsiP%2B9KnX24qMywEXEJQJ%2B71m6O3vHjCdXxwWHMXRMBlX%2BSafNq4IlW0Pe6EYscesXQhbqE9bcfQHHaA7kqmKxr9F%2BOoFjHf0A6rL7MsP7xCsqBfgnN7LjpkBtzIF8GcCBuPWFUlxFw%2FRvZJZi%2BEsxl4z3omp7ZiJdRSI1UXFEHD9d19ZjyK2WVQA%2FpTi7tGBJzDehyUE%2BU3%2Bqkbp9ObB7mkd5&X-Amz-Signature=600256f47cd286a957c0cd9c02552c798d9329a4af388f9da0f7b32c1e8ef4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5CCUHN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGxRAW6arem7cCuugG60xJaf1wgwvQ1nnaYrTNaNfryVAiEAtkN6EJk1kHHFDXIytCcHQ%2Fti4l6l0Z5kTdb85Sq7fFIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEbYQI52RC%2ByOsoU5CrcA3TpkIIhsKZuLE0fWCkVHG7UxDjLJGZUS6DoyXcloaV5ixMdtyopT006QRiEBNFqPZcnuBFSmIk%2F9Ga8HwusGUE9TYC8dWZlxvOVaEWbwykiZFQttMCyiFgRSZIRMAbN8QcZjbzl%2BCzxdIONsThO84bSzIeksDs69SUXz7YJcJln6QRDrO8S28TVITDZICHKTzMTNIm0SrSxeXZNXh1FH907ZtKvesMtDygLcZQcIkArS5P9D6hzOv2dxFcx%2B%2B22igh9%2B%2FrMFlTF0d3ZuqByKrFN%2FOCjnidA36%2F6AeSMhczM9caV0QbXChQzPZ7eqPl6xON8%2BSg%2BWD%2BtwuTdUewnZypUNhWLeMIFBigj2B%2BAwFFeCWhZEMhWrXwL8bcrSDBroxsHQetO2yrkKOLC64nEla8UWiP9HYMLiIvvEGfQJOJA47ZoQOpZpu0GNoZUksrpEJXpnj%2FmToyJYmccgBvcJ7fo%2B9u6bJNsuiYRrdzLNUngnv2URZN%2FdyOZ8y38XTgeky0pvs7MG3oHLEmdwtC5rKL%2FNCM3WpbLJMOyNaw74pgmhUaQMXiWaKwtKpT5KpfyPo5OyV%2FKHIn4Cn57E927tHXl3YEPqVfce3Mnp9fwbGEC126WeakhYYvQFxpwMJ6E1MMGOqUBgRYsiP%2B9KnX24qMywEXEJQJ%2B71m6O3vHjCdXxwWHMXRMBlX%2BSafNq4IlW0Pe6EYscesXQhbqE9bcfQHHaA7kqmKxr9F%2BOoFjHf0A6rL7MsP7xCsqBfgnN7LjpkBtzIF8GcCBuPWFUlxFw%2FRvZJZi%2BEsxl4z3omp7ZiJdRSI1UXFEHD9d19ZjyK2WVQA%2FpTi7tGBJzDehyUE%2BU3%2Bqkbp9ObB7mkd5&X-Amz-Signature=c9d5eae9b05195e4f928903f846b2b32ba483fef6b2eac92175b522e586dfbb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5CCUHN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGxRAW6arem7cCuugG60xJaf1wgwvQ1nnaYrTNaNfryVAiEAtkN6EJk1kHHFDXIytCcHQ%2Fti4l6l0Z5kTdb85Sq7fFIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEbYQI52RC%2ByOsoU5CrcA3TpkIIhsKZuLE0fWCkVHG7UxDjLJGZUS6DoyXcloaV5ixMdtyopT006QRiEBNFqPZcnuBFSmIk%2F9Ga8HwusGUE9TYC8dWZlxvOVaEWbwykiZFQttMCyiFgRSZIRMAbN8QcZjbzl%2BCzxdIONsThO84bSzIeksDs69SUXz7YJcJln6QRDrO8S28TVITDZICHKTzMTNIm0SrSxeXZNXh1FH907ZtKvesMtDygLcZQcIkArS5P9D6hzOv2dxFcx%2B%2B22igh9%2B%2FrMFlTF0d3ZuqByKrFN%2FOCjnidA36%2F6AeSMhczM9caV0QbXChQzPZ7eqPl6xON8%2BSg%2BWD%2BtwuTdUewnZypUNhWLeMIFBigj2B%2BAwFFeCWhZEMhWrXwL8bcrSDBroxsHQetO2yrkKOLC64nEla8UWiP9HYMLiIvvEGfQJOJA47ZoQOpZpu0GNoZUksrpEJXpnj%2FmToyJYmccgBvcJ7fo%2B9u6bJNsuiYRrdzLNUngnv2URZN%2FdyOZ8y38XTgeky0pvs7MG3oHLEmdwtC5rKL%2FNCM3WpbLJMOyNaw74pgmhUaQMXiWaKwtKpT5KpfyPo5OyV%2FKHIn4Cn57E927tHXl3YEPqVfce3Mnp9fwbGEC126WeakhYYvQFxpwMJ6E1MMGOqUBgRYsiP%2B9KnX24qMywEXEJQJ%2B71m6O3vHjCdXxwWHMXRMBlX%2BSafNq4IlW0Pe6EYscesXQhbqE9bcfQHHaA7kqmKxr9F%2BOoFjHf0A6rL7MsP7xCsqBfgnN7LjpkBtzIF8GcCBuPWFUlxFw%2FRvZJZi%2BEsxl4z3omp7ZiJdRSI1UXFEHD9d19ZjyK2WVQA%2FpTi7tGBJzDehyUE%2BU3%2Bqkbp9ObB7mkd5&X-Amz-Signature=b38ea5f9c664852d49c2ae623d541f91f5c9a211d25a1418f916512569184c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5CCUHN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGxRAW6arem7cCuugG60xJaf1wgwvQ1nnaYrTNaNfryVAiEAtkN6EJk1kHHFDXIytCcHQ%2Fti4l6l0Z5kTdb85Sq7fFIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEbYQI52RC%2ByOsoU5CrcA3TpkIIhsKZuLE0fWCkVHG7UxDjLJGZUS6DoyXcloaV5ixMdtyopT006QRiEBNFqPZcnuBFSmIk%2F9Ga8HwusGUE9TYC8dWZlxvOVaEWbwykiZFQttMCyiFgRSZIRMAbN8QcZjbzl%2BCzxdIONsThO84bSzIeksDs69SUXz7YJcJln6QRDrO8S28TVITDZICHKTzMTNIm0SrSxeXZNXh1FH907ZtKvesMtDygLcZQcIkArS5P9D6hzOv2dxFcx%2B%2B22igh9%2B%2FrMFlTF0d3ZuqByKrFN%2FOCjnidA36%2F6AeSMhczM9caV0QbXChQzPZ7eqPl6xON8%2BSg%2BWD%2BtwuTdUewnZypUNhWLeMIFBigj2B%2BAwFFeCWhZEMhWrXwL8bcrSDBroxsHQetO2yrkKOLC64nEla8UWiP9HYMLiIvvEGfQJOJA47ZoQOpZpu0GNoZUksrpEJXpnj%2FmToyJYmccgBvcJ7fo%2B9u6bJNsuiYRrdzLNUngnv2URZN%2FdyOZ8y38XTgeky0pvs7MG3oHLEmdwtC5rKL%2FNCM3WpbLJMOyNaw74pgmhUaQMXiWaKwtKpT5KpfyPo5OyV%2FKHIn4Cn57E927tHXl3YEPqVfce3Mnp9fwbGEC126WeakhYYvQFxpwMJ6E1MMGOqUBgRYsiP%2B9KnX24qMywEXEJQJ%2B71m6O3vHjCdXxwWHMXRMBlX%2BSafNq4IlW0Pe6EYscesXQhbqE9bcfQHHaA7kqmKxr9F%2BOoFjHf0A6rL7MsP7xCsqBfgnN7LjpkBtzIF8GcCBuPWFUlxFw%2FRvZJZi%2BEsxl4z3omp7ZiJdRSI1UXFEHD9d19ZjyK2WVQA%2FpTi7tGBJzDehyUE%2BU3%2Bqkbp9ObB7mkd5&X-Amz-Signature=77af442a87cbe4949b3e9a97c3847fea0ed8b20a679223b4c3803d47b920b96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
