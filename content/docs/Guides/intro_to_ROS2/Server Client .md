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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFNYHI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5ff%2BwK5F1l5n2pFg6NzbgQ4cwwWuYpy%2ByE1u02HyCcAiEA6v2Gyop0DqrRaJM0demmfyPHuWlI9RPczIo69qTrT6YqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQF%2BWIQ5ZwP3Qe9pyrcAzJ9f%2FdmD%2BnBUm3A2X67fJOHunJeMo643arQbpNYVPpGx%2B4%2FxExzS2wxZ3n9uTM9bv%2BfXhcX2zyDWaROMuxAXYsuzn7ykGSlprADc8CXhEijRFwxrBRaGOJkdGcLij4Ya7HXoISNXbuxvE0iKv3xVCxc7moUpu4tsRhHW79InvijeBp2h1W%2F5cXNQNT1AIHjoieKnZY5vHNie1MBkzY0UlEkYX%2B4hooXIf9J6UY5X35DqRR2HHc9IypAOGI6fbUfWGWHgnr8thu2O0jEDar1ynAw3ZtGuVmudaiff%2FfG2BkmPSAJAFpLLUApLDKmlikYXhFGHHdrHYLRtjd5FRS68VNUwY1LPZHcu%2BHszDPRfgIeQNV2RsAnfq0RatSjOrTxlKd8W6xcrEWC%2BwOpvcmng1zql4oh9Qz015stmyQMalkyDtrUOlrcIyIEe%2F5NILeqyuDW20nRdAlbx%2F1EJyd%2BdknGmIhhZgvotM1cAXwKQhd1OwCpMCu9WJZXb9u0MJUypHF%2BnCYDt9cyIH7UzIcSy1wBNvaRFGD1ifSq4%2B1CfjRgGaJ5RUHX%2FtxX9Ky3BJrPhKGgSeobNaGbHO3eEN0M2D84GTGX9ofiBN0fNMA0jra337MwDxTP78WjAvXZMMbIzcAGOqUBnPknw85FQ13HHTANQ9Hf82n6rtcsxsYiVP92jaYEF%2FX26bsJwX7XK6dNU7BUaxx0MF3yTNAzr9IHWjEjuXxVTJgTEfEILUSPY%2FQZo4fxChEarDhzu8dSy383EXtRRmahye4cUkjTyREbwcEDSjWZvkfw8FawV%2BhExNOBkmvL3vbvTHsn%2BPjWq%2FhbVLR%2BzMpLC0RmrgEEE9R39NWtuFXMfnZcbECM&X-Amz-Signature=8fdad2f9d53ece4d2bd675ac26d0368a005920eaaf2f6642d5b4ef6885bd243d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFNYHI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5ff%2BwK5F1l5n2pFg6NzbgQ4cwwWuYpy%2ByE1u02HyCcAiEA6v2Gyop0DqrRaJM0demmfyPHuWlI9RPczIo69qTrT6YqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQF%2BWIQ5ZwP3Qe9pyrcAzJ9f%2FdmD%2BnBUm3A2X67fJOHunJeMo643arQbpNYVPpGx%2B4%2FxExzS2wxZ3n9uTM9bv%2BfXhcX2zyDWaROMuxAXYsuzn7ykGSlprADc8CXhEijRFwxrBRaGOJkdGcLij4Ya7HXoISNXbuxvE0iKv3xVCxc7moUpu4tsRhHW79InvijeBp2h1W%2F5cXNQNT1AIHjoieKnZY5vHNie1MBkzY0UlEkYX%2B4hooXIf9J6UY5X35DqRR2HHc9IypAOGI6fbUfWGWHgnr8thu2O0jEDar1ynAw3ZtGuVmudaiff%2FfG2BkmPSAJAFpLLUApLDKmlikYXhFGHHdrHYLRtjd5FRS68VNUwY1LPZHcu%2BHszDPRfgIeQNV2RsAnfq0RatSjOrTxlKd8W6xcrEWC%2BwOpvcmng1zql4oh9Qz015stmyQMalkyDtrUOlrcIyIEe%2F5NILeqyuDW20nRdAlbx%2F1EJyd%2BdknGmIhhZgvotM1cAXwKQhd1OwCpMCu9WJZXb9u0MJUypHF%2BnCYDt9cyIH7UzIcSy1wBNvaRFGD1ifSq4%2B1CfjRgGaJ5RUHX%2FtxX9Ky3BJrPhKGgSeobNaGbHO3eEN0M2D84GTGX9ofiBN0fNMA0jra337MwDxTP78WjAvXZMMbIzcAGOqUBnPknw85FQ13HHTANQ9Hf82n6rtcsxsYiVP92jaYEF%2FX26bsJwX7XK6dNU7BUaxx0MF3yTNAzr9IHWjEjuXxVTJgTEfEILUSPY%2FQZo4fxChEarDhzu8dSy383EXtRRmahye4cUkjTyREbwcEDSjWZvkfw8FawV%2BhExNOBkmvL3vbvTHsn%2BPjWq%2FhbVLR%2BzMpLC0RmrgEEE9R39NWtuFXMfnZcbECM&X-Amz-Signature=ac332734855ccb280dec20fb1871ce6aa71defde4635b48e1e233453990fe022&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFNYHI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5ff%2BwK5F1l5n2pFg6NzbgQ4cwwWuYpy%2ByE1u02HyCcAiEA6v2Gyop0DqrRaJM0demmfyPHuWlI9RPczIo69qTrT6YqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQF%2BWIQ5ZwP3Qe9pyrcAzJ9f%2FdmD%2BnBUm3A2X67fJOHunJeMo643arQbpNYVPpGx%2B4%2FxExzS2wxZ3n9uTM9bv%2BfXhcX2zyDWaROMuxAXYsuzn7ykGSlprADc8CXhEijRFwxrBRaGOJkdGcLij4Ya7HXoISNXbuxvE0iKv3xVCxc7moUpu4tsRhHW79InvijeBp2h1W%2F5cXNQNT1AIHjoieKnZY5vHNie1MBkzY0UlEkYX%2B4hooXIf9J6UY5X35DqRR2HHc9IypAOGI6fbUfWGWHgnr8thu2O0jEDar1ynAw3ZtGuVmudaiff%2FfG2BkmPSAJAFpLLUApLDKmlikYXhFGHHdrHYLRtjd5FRS68VNUwY1LPZHcu%2BHszDPRfgIeQNV2RsAnfq0RatSjOrTxlKd8W6xcrEWC%2BwOpvcmng1zql4oh9Qz015stmyQMalkyDtrUOlrcIyIEe%2F5NILeqyuDW20nRdAlbx%2F1EJyd%2BdknGmIhhZgvotM1cAXwKQhd1OwCpMCu9WJZXb9u0MJUypHF%2BnCYDt9cyIH7UzIcSy1wBNvaRFGD1ifSq4%2B1CfjRgGaJ5RUHX%2FtxX9Ky3BJrPhKGgSeobNaGbHO3eEN0M2D84GTGX9ofiBN0fNMA0jra337MwDxTP78WjAvXZMMbIzcAGOqUBnPknw85FQ13HHTANQ9Hf82n6rtcsxsYiVP92jaYEF%2FX26bsJwX7XK6dNU7BUaxx0MF3yTNAzr9IHWjEjuXxVTJgTEfEILUSPY%2FQZo4fxChEarDhzu8dSy383EXtRRmahye4cUkjTyREbwcEDSjWZvkfw8FawV%2BhExNOBkmvL3vbvTHsn%2BPjWq%2FhbVLR%2BzMpLC0RmrgEEE9R39NWtuFXMfnZcbECM&X-Amz-Signature=20d939caaebb5a4dbf27aa0e33c00bd30c89bb3b60851167d21d0364e92349da&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFNYHI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5ff%2BwK5F1l5n2pFg6NzbgQ4cwwWuYpy%2ByE1u02HyCcAiEA6v2Gyop0DqrRaJM0demmfyPHuWlI9RPczIo69qTrT6YqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQF%2BWIQ5ZwP3Qe9pyrcAzJ9f%2FdmD%2BnBUm3A2X67fJOHunJeMo643arQbpNYVPpGx%2B4%2FxExzS2wxZ3n9uTM9bv%2BfXhcX2zyDWaROMuxAXYsuzn7ykGSlprADc8CXhEijRFwxrBRaGOJkdGcLij4Ya7HXoISNXbuxvE0iKv3xVCxc7moUpu4tsRhHW79InvijeBp2h1W%2F5cXNQNT1AIHjoieKnZY5vHNie1MBkzY0UlEkYX%2B4hooXIf9J6UY5X35DqRR2HHc9IypAOGI6fbUfWGWHgnr8thu2O0jEDar1ynAw3ZtGuVmudaiff%2FfG2BkmPSAJAFpLLUApLDKmlikYXhFGHHdrHYLRtjd5FRS68VNUwY1LPZHcu%2BHszDPRfgIeQNV2RsAnfq0RatSjOrTxlKd8W6xcrEWC%2BwOpvcmng1zql4oh9Qz015stmyQMalkyDtrUOlrcIyIEe%2F5NILeqyuDW20nRdAlbx%2F1EJyd%2BdknGmIhhZgvotM1cAXwKQhd1OwCpMCu9WJZXb9u0MJUypHF%2BnCYDt9cyIH7UzIcSy1wBNvaRFGD1ifSq4%2B1CfjRgGaJ5RUHX%2FtxX9Ky3BJrPhKGgSeobNaGbHO3eEN0M2D84GTGX9ofiBN0fNMA0jra337MwDxTP78WjAvXZMMbIzcAGOqUBnPknw85FQ13HHTANQ9Hf82n6rtcsxsYiVP92jaYEF%2FX26bsJwX7XK6dNU7BUaxx0MF3yTNAzr9IHWjEjuXxVTJgTEfEILUSPY%2FQZo4fxChEarDhzu8dSy383EXtRRmahye4cUkjTyREbwcEDSjWZvkfw8FawV%2BhExNOBkmvL3vbvTHsn%2BPjWq%2FhbVLR%2BzMpLC0RmrgEEE9R39NWtuFXMfnZcbECM&X-Amz-Signature=18614b8dbbf641f1e7d831c5e8fb1cad740e7dcb462a14cb79254d873e50d239&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFNYHI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF5ff%2BwK5F1l5n2pFg6NzbgQ4cwwWuYpy%2ByE1u02HyCcAiEA6v2Gyop0DqrRaJM0demmfyPHuWlI9RPczIo69qTrT6YqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQF%2BWIQ5ZwP3Qe9pyrcAzJ9f%2FdmD%2BnBUm3A2X67fJOHunJeMo643arQbpNYVPpGx%2B4%2FxExzS2wxZ3n9uTM9bv%2BfXhcX2zyDWaROMuxAXYsuzn7ykGSlprADc8CXhEijRFwxrBRaGOJkdGcLij4Ya7HXoISNXbuxvE0iKv3xVCxc7moUpu4tsRhHW79InvijeBp2h1W%2F5cXNQNT1AIHjoieKnZY5vHNie1MBkzY0UlEkYX%2B4hooXIf9J6UY5X35DqRR2HHc9IypAOGI6fbUfWGWHgnr8thu2O0jEDar1ynAw3ZtGuVmudaiff%2FfG2BkmPSAJAFpLLUApLDKmlikYXhFGHHdrHYLRtjd5FRS68VNUwY1LPZHcu%2BHszDPRfgIeQNV2RsAnfq0RatSjOrTxlKd8W6xcrEWC%2BwOpvcmng1zql4oh9Qz015stmyQMalkyDtrUOlrcIyIEe%2F5NILeqyuDW20nRdAlbx%2F1EJyd%2BdknGmIhhZgvotM1cAXwKQhd1OwCpMCu9WJZXb9u0MJUypHF%2BnCYDt9cyIH7UzIcSy1wBNvaRFGD1ifSq4%2B1CfjRgGaJ5RUHX%2FtxX9Ky3BJrPhKGgSeobNaGbHO3eEN0M2D84GTGX9ofiBN0fNMA0jra337MwDxTP78WjAvXZMMbIzcAGOqUBnPknw85FQ13HHTANQ9Hf82n6rtcsxsYiVP92jaYEF%2FX26bsJwX7XK6dNU7BUaxx0MF3yTNAzr9IHWjEjuXxVTJgTEfEILUSPY%2FQZo4fxChEarDhzu8dSy383EXtRRmahye4cUkjTyREbwcEDSjWZvkfw8FawV%2BhExNOBkmvL3vbvTHsn%2BPjWq%2FhbVLR%2BzMpLC0RmrgEEE9R39NWtuFXMfnZcbECM&X-Amz-Signature=12bd29d119c049bc73fdf08dadc3e43b5da7545a44ca18f34e35aafce8ad4379&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
