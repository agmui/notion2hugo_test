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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2TYMDU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGX2WnlPBMsC3s1BN3udx3j39VRLNd2SFQkMssZSWrE1AiAV31wOWXrbGx9gCmXt%2F6NPZc7vDjoSlQPS%2BqDLtMuE4yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMOMvO5ZjGFR9BmLBMKtwDfsvH6PwEzgytgkI8SvOnfFJ28xeHwBBtpIzrH%2F9eFH%2FY5KG49SPGVa43YzKQRM%2Bs3RvWXbpwjnVGOcS9ATe6f7zluGigSKLiuFQTB%2FOj%2BKLneGSjxDJ6IIiodIVrFQJ2Wp0FaIEMtw7u1qkSTybhZ9Ou%2FiUpDS6hXqapFU5jNngqrqYSpbih0NGpDfO1GsTzA4lGsl%2BRpWue59jqWafw%2FaxvTDrQaH8ZljSNIdgtU6Z%2BZ0ZnBF6sQdiPI4wBjstSNEOmCR1BfCUoGys0THZOv7nasJxSfOmWpSA99okEFSOVtTKO3N0ONp9zSY5dd71AL%2Bk56g3jj71sjlDq4EEIzySgX%2B1AAXWZ8ADwOzPdfEt2dMhvd1cKr8FXkpbIK9DYkOO0fjOGumK1BpoKA2%2BOGMKPm4PT9c6saVPS5YUBu27xgj5Wehk9DIORovfOsEPmgZkevClg8Z3X%2FogYUpAndpI%2BLBDyv7R2CLTLIChaMjZ09ZctE4%2FVOpXrrbQ%2FjhPiFWsx4afx7FqTzH%2FTLpQ1UmqdRfLHBh760hJyHwfnB6nD1%2BEL7qslnmlBjkmFwHqllN1TrrWEGG88e%2BYa2K72D6hHxtIRUioMIRFMrIuBIyFjirLdJVZpI%2B8B3dMwsMCGvQY6pgGA7ePc7TAUPFlziqx6OVy710e15ZP5FUfVP6n%2Fgb%2BgDj1I4t42BUU8hlqJMx3wopWhWV99FULCcCwe9N%2BkXeRlOQ%2BjXP5BipTqK22QiAlPmrPPOpZ1F23YvwEucANtdAwMuy3AWVHvlgn%2FGNbfNrYt4sxAXURiI1Ocsn1LqWCTu5eFyFG9N0PuL%2FV8SQQIifxRG%2FqcqeUX7QApn7JBgdSi0%2FWpGz%2Bz&X-Amz-Signature=37a075e7e2f8ae362bff5c7e2de83ccbf7c54de6c93670b0eaf692441e6de671&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2TYMDU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGX2WnlPBMsC3s1BN3udx3j39VRLNd2SFQkMssZSWrE1AiAV31wOWXrbGx9gCmXt%2F6NPZc7vDjoSlQPS%2BqDLtMuE4yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMOMvO5ZjGFR9BmLBMKtwDfsvH6PwEzgytgkI8SvOnfFJ28xeHwBBtpIzrH%2F9eFH%2FY5KG49SPGVa43YzKQRM%2Bs3RvWXbpwjnVGOcS9ATe6f7zluGigSKLiuFQTB%2FOj%2BKLneGSjxDJ6IIiodIVrFQJ2Wp0FaIEMtw7u1qkSTybhZ9Ou%2FiUpDS6hXqapFU5jNngqrqYSpbih0NGpDfO1GsTzA4lGsl%2BRpWue59jqWafw%2FaxvTDrQaH8ZljSNIdgtU6Z%2BZ0ZnBF6sQdiPI4wBjstSNEOmCR1BfCUoGys0THZOv7nasJxSfOmWpSA99okEFSOVtTKO3N0ONp9zSY5dd71AL%2Bk56g3jj71sjlDq4EEIzySgX%2B1AAXWZ8ADwOzPdfEt2dMhvd1cKr8FXkpbIK9DYkOO0fjOGumK1BpoKA2%2BOGMKPm4PT9c6saVPS5YUBu27xgj5Wehk9DIORovfOsEPmgZkevClg8Z3X%2FogYUpAndpI%2BLBDyv7R2CLTLIChaMjZ09ZctE4%2FVOpXrrbQ%2FjhPiFWsx4afx7FqTzH%2FTLpQ1UmqdRfLHBh760hJyHwfnB6nD1%2BEL7qslnmlBjkmFwHqllN1TrrWEGG88e%2BYa2K72D6hHxtIRUioMIRFMrIuBIyFjirLdJVZpI%2B8B3dMwsMCGvQY6pgGA7ePc7TAUPFlziqx6OVy710e15ZP5FUfVP6n%2Fgb%2BgDj1I4t42BUU8hlqJMx3wopWhWV99FULCcCwe9N%2BkXeRlOQ%2BjXP5BipTqK22QiAlPmrPPOpZ1F23YvwEucANtdAwMuy3AWVHvlgn%2FGNbfNrYt4sxAXURiI1Ocsn1LqWCTu5eFyFG9N0PuL%2FV8SQQIifxRG%2FqcqeUX7QApn7JBgdSi0%2FWpGz%2Bz&X-Amz-Signature=52b0dc5d887c54769474682db9f4cc54af6b75e1c5f12a911a4a51e1e637e99a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2TYMDU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGX2WnlPBMsC3s1BN3udx3j39VRLNd2SFQkMssZSWrE1AiAV31wOWXrbGx9gCmXt%2F6NPZc7vDjoSlQPS%2BqDLtMuE4yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMOMvO5ZjGFR9BmLBMKtwDfsvH6PwEzgytgkI8SvOnfFJ28xeHwBBtpIzrH%2F9eFH%2FY5KG49SPGVa43YzKQRM%2Bs3RvWXbpwjnVGOcS9ATe6f7zluGigSKLiuFQTB%2FOj%2BKLneGSjxDJ6IIiodIVrFQJ2Wp0FaIEMtw7u1qkSTybhZ9Ou%2FiUpDS6hXqapFU5jNngqrqYSpbih0NGpDfO1GsTzA4lGsl%2BRpWue59jqWafw%2FaxvTDrQaH8ZljSNIdgtU6Z%2BZ0ZnBF6sQdiPI4wBjstSNEOmCR1BfCUoGys0THZOv7nasJxSfOmWpSA99okEFSOVtTKO3N0ONp9zSY5dd71AL%2Bk56g3jj71sjlDq4EEIzySgX%2B1AAXWZ8ADwOzPdfEt2dMhvd1cKr8FXkpbIK9DYkOO0fjOGumK1BpoKA2%2BOGMKPm4PT9c6saVPS5YUBu27xgj5Wehk9DIORovfOsEPmgZkevClg8Z3X%2FogYUpAndpI%2BLBDyv7R2CLTLIChaMjZ09ZctE4%2FVOpXrrbQ%2FjhPiFWsx4afx7FqTzH%2FTLpQ1UmqdRfLHBh760hJyHwfnB6nD1%2BEL7qslnmlBjkmFwHqllN1TrrWEGG88e%2BYa2K72D6hHxtIRUioMIRFMrIuBIyFjirLdJVZpI%2B8B3dMwsMCGvQY6pgGA7ePc7TAUPFlziqx6OVy710e15ZP5FUfVP6n%2Fgb%2BgDj1I4t42BUU8hlqJMx3wopWhWV99FULCcCwe9N%2BkXeRlOQ%2BjXP5BipTqK22QiAlPmrPPOpZ1F23YvwEucANtdAwMuy3AWVHvlgn%2FGNbfNrYt4sxAXURiI1Ocsn1LqWCTu5eFyFG9N0PuL%2FV8SQQIifxRG%2FqcqeUX7QApn7JBgdSi0%2FWpGz%2Bz&X-Amz-Signature=d175a4492f78c394fda7c4072763703c2799df6b3be05014fc21ee60cdf214e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2TYMDU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGX2WnlPBMsC3s1BN3udx3j39VRLNd2SFQkMssZSWrE1AiAV31wOWXrbGx9gCmXt%2F6NPZc7vDjoSlQPS%2BqDLtMuE4yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMOMvO5ZjGFR9BmLBMKtwDfsvH6PwEzgytgkI8SvOnfFJ28xeHwBBtpIzrH%2F9eFH%2FY5KG49SPGVa43YzKQRM%2Bs3RvWXbpwjnVGOcS9ATe6f7zluGigSKLiuFQTB%2FOj%2BKLneGSjxDJ6IIiodIVrFQJ2Wp0FaIEMtw7u1qkSTybhZ9Ou%2FiUpDS6hXqapFU5jNngqrqYSpbih0NGpDfO1GsTzA4lGsl%2BRpWue59jqWafw%2FaxvTDrQaH8ZljSNIdgtU6Z%2BZ0ZnBF6sQdiPI4wBjstSNEOmCR1BfCUoGys0THZOv7nasJxSfOmWpSA99okEFSOVtTKO3N0ONp9zSY5dd71AL%2Bk56g3jj71sjlDq4EEIzySgX%2B1AAXWZ8ADwOzPdfEt2dMhvd1cKr8FXkpbIK9DYkOO0fjOGumK1BpoKA2%2BOGMKPm4PT9c6saVPS5YUBu27xgj5Wehk9DIORovfOsEPmgZkevClg8Z3X%2FogYUpAndpI%2BLBDyv7R2CLTLIChaMjZ09ZctE4%2FVOpXrrbQ%2FjhPiFWsx4afx7FqTzH%2FTLpQ1UmqdRfLHBh760hJyHwfnB6nD1%2BEL7qslnmlBjkmFwHqllN1TrrWEGG88e%2BYa2K72D6hHxtIRUioMIRFMrIuBIyFjirLdJVZpI%2B8B3dMwsMCGvQY6pgGA7ePc7TAUPFlziqx6OVy710e15ZP5FUfVP6n%2Fgb%2BgDj1I4t42BUU8hlqJMx3wopWhWV99FULCcCwe9N%2BkXeRlOQ%2BjXP5BipTqK22QiAlPmrPPOpZ1F23YvwEucANtdAwMuy3AWVHvlgn%2FGNbfNrYt4sxAXURiI1Ocsn1LqWCTu5eFyFG9N0PuL%2FV8SQQIifxRG%2FqcqeUX7QApn7JBgdSi0%2FWpGz%2Bz&X-Amz-Signature=04e8302cb8fcfa4660f6a34f7b9895049e4f927646dcc66c68ef5c609b1ceb84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2TYMDU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGX2WnlPBMsC3s1BN3udx3j39VRLNd2SFQkMssZSWrE1AiAV31wOWXrbGx9gCmXt%2F6NPZc7vDjoSlQPS%2BqDLtMuE4yr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMOMvO5ZjGFR9BmLBMKtwDfsvH6PwEzgytgkI8SvOnfFJ28xeHwBBtpIzrH%2F9eFH%2FY5KG49SPGVa43YzKQRM%2Bs3RvWXbpwjnVGOcS9ATe6f7zluGigSKLiuFQTB%2FOj%2BKLneGSjxDJ6IIiodIVrFQJ2Wp0FaIEMtw7u1qkSTybhZ9Ou%2FiUpDS6hXqapFU5jNngqrqYSpbih0NGpDfO1GsTzA4lGsl%2BRpWue59jqWafw%2FaxvTDrQaH8ZljSNIdgtU6Z%2BZ0ZnBF6sQdiPI4wBjstSNEOmCR1BfCUoGys0THZOv7nasJxSfOmWpSA99okEFSOVtTKO3N0ONp9zSY5dd71AL%2Bk56g3jj71sjlDq4EEIzySgX%2B1AAXWZ8ADwOzPdfEt2dMhvd1cKr8FXkpbIK9DYkOO0fjOGumK1BpoKA2%2BOGMKPm4PT9c6saVPS5YUBu27xgj5Wehk9DIORovfOsEPmgZkevClg8Z3X%2FogYUpAndpI%2BLBDyv7R2CLTLIChaMjZ09ZctE4%2FVOpXrrbQ%2FjhPiFWsx4afx7FqTzH%2FTLpQ1UmqdRfLHBh760hJyHwfnB6nD1%2BEL7qslnmlBjkmFwHqllN1TrrWEGG88e%2BYa2K72D6hHxtIRUioMIRFMrIuBIyFjirLdJVZpI%2B8B3dMwsMCGvQY6pgGA7ePc7TAUPFlziqx6OVy710e15ZP5FUfVP6n%2Fgb%2BgDj1I4t42BUU8hlqJMx3wopWhWV99FULCcCwe9N%2BkXeRlOQ%2BjXP5BipTqK22QiAlPmrPPOpZ1F23YvwEucANtdAwMuy3AWVHvlgn%2FGNbfNrYt4sxAXURiI1Ocsn1LqWCTu5eFyFG9N0PuL%2FV8SQQIifxRG%2FqcqeUX7QApn7JBgdSi0%2FWpGz%2Bz&X-Amz-Signature=f2ae8eb3d223355564aa52f29d98db70428d89029dab1c8b4d05715eaba4752c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
