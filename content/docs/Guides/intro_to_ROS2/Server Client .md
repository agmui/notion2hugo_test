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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNA4T6UW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvkqcYGM%2BYyD36wWgwX%2F3nvvyXy8DC%2B5fD9KCtQQwnQAiEAn89VhHrGBDDJxZWJwEaPNQfaO%2FpfawlJYqBlHkZg5Jgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH7d%2FOIRY7Hj4F7PVSrcA6AUU7KC%2BnOx4%2FzcMXc4UefzFDMTZE4meW9jg29DnZOIHI1OfL%2FyDMsHvKLT%2FNcSvH329fJMCMrsAfD25AN2ei4cevECBt35IZPICuKSBwHOfPMleho4SAS7dn8h%2BmI8lJgKoXQ6cuJCD%2FukS8F%2BID3XR4ISM2V%2BAuHnm%2B4H9FEffZND9w1IbctNYA6QBdD68BhM9RNPcBV0yjT2Jf409R86enyJHgyJ2E8L0s50f4sDk8SsRC44bckCGEu8xTnIeOt4Togy87NLG5yKCaTgdm9A0qxNTVpj0JeNZuWHe7%2BztWKh%2F57Rh96k4wdDSWL9mgqIAx5KsyjViLV95Kj8NzvsIRY6A2RxdBs0GjuigGctn4h6XRr8dCdINX6ziwZXvB6hAEEULyj3Ov4T1R7KryYUlCeWs%2FjLIrrmTN%2BP7fQq3CUGqPu%2BtQPKKphx835b%2Fs18t79zR3LwfgUMZlFVncc1HNf%2FwTMLXeGVEfcAbwmcYmN%2BNeWdai8Qp3%2Bu1hmJEFaFnzTsGYnjQ5gaAOxRVdKuGBx7TrOnYrpXFWyArmCk7hVs%2FnVpYmDO5ifspIU7p9L9nkbnGyVqAxQocRL0PN0pn3NvjSEHJOyDISE6XAIOSd%2BRU2b5EX0iPqyuMJrl4sAGOqUB9dBMHHcLAd2dTzwN3VF6JOeURaEXWNf8vFXrNLPPFPGmXdUYqr5eomUa3bvPevTWGmo9cq3jmM45obQashUAXepjjdZWntopAT7vO6vyj0nMFwoVtPKLr2JoISEnXProcJfHwwW5VFk4NLXfVizHLjnftsS7YbLeOyA61kvQ1lztxd0JHnftw01Vvwvq34WP4wkkOmj82idmp4CwW5bpXDIAis%2B8&X-Amz-Signature=617526c0ff29d25f0189b2285015e0bd43cb5bd03ec8c5652b998bc3422a3046&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNA4T6UW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvkqcYGM%2BYyD36wWgwX%2F3nvvyXy8DC%2B5fD9KCtQQwnQAiEAn89VhHrGBDDJxZWJwEaPNQfaO%2FpfawlJYqBlHkZg5Jgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH7d%2FOIRY7Hj4F7PVSrcA6AUU7KC%2BnOx4%2FzcMXc4UefzFDMTZE4meW9jg29DnZOIHI1OfL%2FyDMsHvKLT%2FNcSvH329fJMCMrsAfD25AN2ei4cevECBt35IZPICuKSBwHOfPMleho4SAS7dn8h%2BmI8lJgKoXQ6cuJCD%2FukS8F%2BID3XR4ISM2V%2BAuHnm%2B4H9FEffZND9w1IbctNYA6QBdD68BhM9RNPcBV0yjT2Jf409R86enyJHgyJ2E8L0s50f4sDk8SsRC44bckCGEu8xTnIeOt4Togy87NLG5yKCaTgdm9A0qxNTVpj0JeNZuWHe7%2BztWKh%2F57Rh96k4wdDSWL9mgqIAx5KsyjViLV95Kj8NzvsIRY6A2RxdBs0GjuigGctn4h6XRr8dCdINX6ziwZXvB6hAEEULyj3Ov4T1R7KryYUlCeWs%2FjLIrrmTN%2BP7fQq3CUGqPu%2BtQPKKphx835b%2Fs18t79zR3LwfgUMZlFVncc1HNf%2FwTMLXeGVEfcAbwmcYmN%2BNeWdai8Qp3%2Bu1hmJEFaFnzTsGYnjQ5gaAOxRVdKuGBx7TrOnYrpXFWyArmCk7hVs%2FnVpYmDO5ifspIU7p9L9nkbnGyVqAxQocRL0PN0pn3NvjSEHJOyDISE6XAIOSd%2BRU2b5EX0iPqyuMJrl4sAGOqUB9dBMHHcLAd2dTzwN3VF6JOeURaEXWNf8vFXrNLPPFPGmXdUYqr5eomUa3bvPevTWGmo9cq3jmM45obQashUAXepjjdZWntopAT7vO6vyj0nMFwoVtPKLr2JoISEnXProcJfHwwW5VFk4NLXfVizHLjnftsS7YbLeOyA61kvQ1lztxd0JHnftw01Vvwvq34WP4wkkOmj82idmp4CwW5bpXDIAis%2B8&X-Amz-Signature=0a40974c4943ef8cb731891bab48ac1d074332a0bb239105cd79a8acb8201aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNA4T6UW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvkqcYGM%2BYyD36wWgwX%2F3nvvyXy8DC%2B5fD9KCtQQwnQAiEAn89VhHrGBDDJxZWJwEaPNQfaO%2FpfawlJYqBlHkZg5Jgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH7d%2FOIRY7Hj4F7PVSrcA6AUU7KC%2BnOx4%2FzcMXc4UefzFDMTZE4meW9jg29DnZOIHI1OfL%2FyDMsHvKLT%2FNcSvH329fJMCMrsAfD25AN2ei4cevECBt35IZPICuKSBwHOfPMleho4SAS7dn8h%2BmI8lJgKoXQ6cuJCD%2FukS8F%2BID3XR4ISM2V%2BAuHnm%2B4H9FEffZND9w1IbctNYA6QBdD68BhM9RNPcBV0yjT2Jf409R86enyJHgyJ2E8L0s50f4sDk8SsRC44bckCGEu8xTnIeOt4Togy87NLG5yKCaTgdm9A0qxNTVpj0JeNZuWHe7%2BztWKh%2F57Rh96k4wdDSWL9mgqIAx5KsyjViLV95Kj8NzvsIRY6A2RxdBs0GjuigGctn4h6XRr8dCdINX6ziwZXvB6hAEEULyj3Ov4T1R7KryYUlCeWs%2FjLIrrmTN%2BP7fQq3CUGqPu%2BtQPKKphx835b%2Fs18t79zR3LwfgUMZlFVncc1HNf%2FwTMLXeGVEfcAbwmcYmN%2BNeWdai8Qp3%2Bu1hmJEFaFnzTsGYnjQ5gaAOxRVdKuGBx7TrOnYrpXFWyArmCk7hVs%2FnVpYmDO5ifspIU7p9L9nkbnGyVqAxQocRL0PN0pn3NvjSEHJOyDISE6XAIOSd%2BRU2b5EX0iPqyuMJrl4sAGOqUB9dBMHHcLAd2dTzwN3VF6JOeURaEXWNf8vFXrNLPPFPGmXdUYqr5eomUa3bvPevTWGmo9cq3jmM45obQashUAXepjjdZWntopAT7vO6vyj0nMFwoVtPKLr2JoISEnXProcJfHwwW5VFk4NLXfVizHLjnftsS7YbLeOyA61kvQ1lztxd0JHnftw01Vvwvq34WP4wkkOmj82idmp4CwW5bpXDIAis%2B8&X-Amz-Signature=06a088d95a360842d5abb96c7f0d029dc55933794a934d0113f7c9637a080874&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNA4T6UW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvkqcYGM%2BYyD36wWgwX%2F3nvvyXy8DC%2B5fD9KCtQQwnQAiEAn89VhHrGBDDJxZWJwEaPNQfaO%2FpfawlJYqBlHkZg5Jgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH7d%2FOIRY7Hj4F7PVSrcA6AUU7KC%2BnOx4%2FzcMXc4UefzFDMTZE4meW9jg29DnZOIHI1OfL%2FyDMsHvKLT%2FNcSvH329fJMCMrsAfD25AN2ei4cevECBt35IZPICuKSBwHOfPMleho4SAS7dn8h%2BmI8lJgKoXQ6cuJCD%2FukS8F%2BID3XR4ISM2V%2BAuHnm%2B4H9FEffZND9w1IbctNYA6QBdD68BhM9RNPcBV0yjT2Jf409R86enyJHgyJ2E8L0s50f4sDk8SsRC44bckCGEu8xTnIeOt4Togy87NLG5yKCaTgdm9A0qxNTVpj0JeNZuWHe7%2BztWKh%2F57Rh96k4wdDSWL9mgqIAx5KsyjViLV95Kj8NzvsIRY6A2RxdBs0GjuigGctn4h6XRr8dCdINX6ziwZXvB6hAEEULyj3Ov4T1R7KryYUlCeWs%2FjLIrrmTN%2BP7fQq3CUGqPu%2BtQPKKphx835b%2Fs18t79zR3LwfgUMZlFVncc1HNf%2FwTMLXeGVEfcAbwmcYmN%2BNeWdai8Qp3%2Bu1hmJEFaFnzTsGYnjQ5gaAOxRVdKuGBx7TrOnYrpXFWyArmCk7hVs%2FnVpYmDO5ifspIU7p9L9nkbnGyVqAxQocRL0PN0pn3NvjSEHJOyDISE6XAIOSd%2BRU2b5EX0iPqyuMJrl4sAGOqUB9dBMHHcLAd2dTzwN3VF6JOeURaEXWNf8vFXrNLPPFPGmXdUYqr5eomUa3bvPevTWGmo9cq3jmM45obQashUAXepjjdZWntopAT7vO6vyj0nMFwoVtPKLr2JoISEnXProcJfHwwW5VFk4NLXfVizHLjnftsS7YbLeOyA61kvQ1lztxd0JHnftw01Vvwvq34WP4wkkOmj82idmp4CwW5bpXDIAis%2B8&X-Amz-Signature=f7f09db104b50042d45d018cdd7c8a858e3d15b33aec965412a3d8ddf2d70cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNA4T6UW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvkqcYGM%2BYyD36wWgwX%2F3nvvyXy8DC%2B5fD9KCtQQwnQAiEAn89VhHrGBDDJxZWJwEaPNQfaO%2FpfawlJYqBlHkZg5Jgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH7d%2FOIRY7Hj4F7PVSrcA6AUU7KC%2BnOx4%2FzcMXc4UefzFDMTZE4meW9jg29DnZOIHI1OfL%2FyDMsHvKLT%2FNcSvH329fJMCMrsAfD25AN2ei4cevECBt35IZPICuKSBwHOfPMleho4SAS7dn8h%2BmI8lJgKoXQ6cuJCD%2FukS8F%2BID3XR4ISM2V%2BAuHnm%2B4H9FEffZND9w1IbctNYA6QBdD68BhM9RNPcBV0yjT2Jf409R86enyJHgyJ2E8L0s50f4sDk8SsRC44bckCGEu8xTnIeOt4Togy87NLG5yKCaTgdm9A0qxNTVpj0JeNZuWHe7%2BztWKh%2F57Rh96k4wdDSWL9mgqIAx5KsyjViLV95Kj8NzvsIRY6A2RxdBs0GjuigGctn4h6XRr8dCdINX6ziwZXvB6hAEEULyj3Ov4T1R7KryYUlCeWs%2FjLIrrmTN%2BP7fQq3CUGqPu%2BtQPKKphx835b%2Fs18t79zR3LwfgUMZlFVncc1HNf%2FwTMLXeGVEfcAbwmcYmN%2BNeWdai8Qp3%2Bu1hmJEFaFnzTsGYnjQ5gaAOxRVdKuGBx7TrOnYrpXFWyArmCk7hVs%2FnVpYmDO5ifspIU7p9L9nkbnGyVqAxQocRL0PN0pn3NvjSEHJOyDISE6XAIOSd%2BRU2b5EX0iPqyuMJrl4sAGOqUB9dBMHHcLAd2dTzwN3VF6JOeURaEXWNf8vFXrNLPPFPGmXdUYqr5eomUa3bvPevTWGmo9cq3jmM45obQashUAXepjjdZWntopAT7vO6vyj0nMFwoVtPKLr2JoISEnXProcJfHwwW5VFk4NLXfVizHLjnftsS7YbLeOyA61kvQ1lztxd0JHnftw01Vvwvq34WP4wkkOmj82idmp4CwW5bpXDIAis%2B8&X-Amz-Signature=ff4eb1b50306aaef7c253a6dcbbe42c674e93413342a836883cbe0459ef37229&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
