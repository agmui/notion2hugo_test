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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEPKLWP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFSjNJeUXC5wV7ARRifTpluSGjPe1n9Bti7G%2BpttzyptAiEAti2f2CIBrEcpLKq4HiR%2F%2BpgJuf4PNkzewHBOoLqOPpsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDVSBkie1fZgOl4y4ircAzhSmms891GL5f3SbAuIeWcAPLdJP%2FE3ajH9Xr63dkxaQ38ljRiYTt6BRMvcUNc7nMRyq66XRT7odM8XMCWMQtDbtRHq7uxBVBt1jQYFs9KaKCs%2BW%2F7CmSdcv9o8W8hopVnoDxoEuGsXPENRnztMVK%2FP61oMwdRbJ2RbjgFSfp7%2FCo7Mmq6zTYdAHkLayOl862vc0dof%2BaZFkRvMcSozjljTPCKtnEYSWPWd7%2BZBWUE5BSX81xrwYTfK4QUQb%2B8K2uJd46R8oK8vE2KWiqW7P17iVSl3Hc5eAeVuG2%2FO5vm2wawiKVXx7hDNtHAZ7jbZmRQmPY6eY1y13vRDZTLVpjbrKC1SFCS%2FnnpSRlbNmwCGbsh1FXedrO%2BKsDLC%2FH71gZ2H4MN7TAh5%2FwCA2zZCP4xICMPW1gHsR582WFstlJu8ZSxV1k0iz53WwNcIvbUaM3b3KWsqN2MkMI1uy92olcJfpd0RsqprsuXD7kPrL6kW%2F2B%2B3opBjB5Y%2B5mFmwIYH78JFG2gIKzm3lIhhulUDF5g%2BQb2P5Gjz%2BOWjZwjIwYjDTXsmr8JVoAcpipBMPjFnCp%2BjuMHudNAjYOB6tZuwbzo7sEio3Oc9bkCHZIJTRbzndmBPybkh0baiZMgMMb%2F%2Br0GOqUBs0M5lg3F9xaGN6%2BZvSgnX0BYrb8NofktLVFVY2wCQkCsMFOjbI5FmVJ68tjvDeX6GJ%2BQ10AlwwDjlcM39HGCauIb1seUTG3Hl4J33O9CSUSUJPM8xXnxVJrJwvaLQ73DIO8w6RE6q04nNddvf%2FgAlbqFw6xjHoRaO49%2BT7sA5K6S4hP1rBoXXrRPIWcXXbFbSdiU0RmLon12Sd5ZmLdB7KYF7DM7&X-Amz-Signature=8cca1debf3a7cd14dfaf92058ad51abbeade423af4d8a110fd277205bb503a88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEPKLWP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFSjNJeUXC5wV7ARRifTpluSGjPe1n9Bti7G%2BpttzyptAiEAti2f2CIBrEcpLKq4HiR%2F%2BpgJuf4PNkzewHBOoLqOPpsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDVSBkie1fZgOl4y4ircAzhSmms891GL5f3SbAuIeWcAPLdJP%2FE3ajH9Xr63dkxaQ38ljRiYTt6BRMvcUNc7nMRyq66XRT7odM8XMCWMQtDbtRHq7uxBVBt1jQYFs9KaKCs%2BW%2F7CmSdcv9o8W8hopVnoDxoEuGsXPENRnztMVK%2FP61oMwdRbJ2RbjgFSfp7%2FCo7Mmq6zTYdAHkLayOl862vc0dof%2BaZFkRvMcSozjljTPCKtnEYSWPWd7%2BZBWUE5BSX81xrwYTfK4QUQb%2B8K2uJd46R8oK8vE2KWiqW7P17iVSl3Hc5eAeVuG2%2FO5vm2wawiKVXx7hDNtHAZ7jbZmRQmPY6eY1y13vRDZTLVpjbrKC1SFCS%2FnnpSRlbNmwCGbsh1FXedrO%2BKsDLC%2FH71gZ2H4MN7TAh5%2FwCA2zZCP4xICMPW1gHsR582WFstlJu8ZSxV1k0iz53WwNcIvbUaM3b3KWsqN2MkMI1uy92olcJfpd0RsqprsuXD7kPrL6kW%2F2B%2B3opBjB5Y%2B5mFmwIYH78JFG2gIKzm3lIhhulUDF5g%2BQb2P5Gjz%2BOWjZwjIwYjDTXsmr8JVoAcpipBMPjFnCp%2BjuMHudNAjYOB6tZuwbzo7sEio3Oc9bkCHZIJTRbzndmBPybkh0baiZMgMMb%2F%2Br0GOqUBs0M5lg3F9xaGN6%2BZvSgnX0BYrb8NofktLVFVY2wCQkCsMFOjbI5FmVJ68tjvDeX6GJ%2BQ10AlwwDjlcM39HGCauIb1seUTG3Hl4J33O9CSUSUJPM8xXnxVJrJwvaLQ73DIO8w6RE6q04nNddvf%2FgAlbqFw6xjHoRaO49%2BT7sA5K6S4hP1rBoXXrRPIWcXXbFbSdiU0RmLon12Sd5ZmLdB7KYF7DM7&X-Amz-Signature=821583e882e52eb9789e07e54c81f57e1582e15026335dcf73898e603874dce8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEPKLWP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFSjNJeUXC5wV7ARRifTpluSGjPe1n9Bti7G%2BpttzyptAiEAti2f2CIBrEcpLKq4HiR%2F%2BpgJuf4PNkzewHBOoLqOPpsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDVSBkie1fZgOl4y4ircAzhSmms891GL5f3SbAuIeWcAPLdJP%2FE3ajH9Xr63dkxaQ38ljRiYTt6BRMvcUNc7nMRyq66XRT7odM8XMCWMQtDbtRHq7uxBVBt1jQYFs9KaKCs%2BW%2F7CmSdcv9o8W8hopVnoDxoEuGsXPENRnztMVK%2FP61oMwdRbJ2RbjgFSfp7%2FCo7Mmq6zTYdAHkLayOl862vc0dof%2BaZFkRvMcSozjljTPCKtnEYSWPWd7%2BZBWUE5BSX81xrwYTfK4QUQb%2B8K2uJd46R8oK8vE2KWiqW7P17iVSl3Hc5eAeVuG2%2FO5vm2wawiKVXx7hDNtHAZ7jbZmRQmPY6eY1y13vRDZTLVpjbrKC1SFCS%2FnnpSRlbNmwCGbsh1FXedrO%2BKsDLC%2FH71gZ2H4MN7TAh5%2FwCA2zZCP4xICMPW1gHsR582WFstlJu8ZSxV1k0iz53WwNcIvbUaM3b3KWsqN2MkMI1uy92olcJfpd0RsqprsuXD7kPrL6kW%2F2B%2B3opBjB5Y%2B5mFmwIYH78JFG2gIKzm3lIhhulUDF5g%2BQb2P5Gjz%2BOWjZwjIwYjDTXsmr8JVoAcpipBMPjFnCp%2BjuMHudNAjYOB6tZuwbzo7sEio3Oc9bkCHZIJTRbzndmBPybkh0baiZMgMMb%2F%2Br0GOqUBs0M5lg3F9xaGN6%2BZvSgnX0BYrb8NofktLVFVY2wCQkCsMFOjbI5FmVJ68tjvDeX6GJ%2BQ10AlwwDjlcM39HGCauIb1seUTG3Hl4J33O9CSUSUJPM8xXnxVJrJwvaLQ73DIO8w6RE6q04nNddvf%2FgAlbqFw6xjHoRaO49%2BT7sA5K6S4hP1rBoXXrRPIWcXXbFbSdiU0RmLon12Sd5ZmLdB7KYF7DM7&X-Amz-Signature=2e53e3adc8e9e9271c0f48486a0fbf07a030f3beb944b9f511b1075525693cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEPKLWP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFSjNJeUXC5wV7ARRifTpluSGjPe1n9Bti7G%2BpttzyptAiEAti2f2CIBrEcpLKq4HiR%2F%2BpgJuf4PNkzewHBOoLqOPpsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDVSBkie1fZgOl4y4ircAzhSmms891GL5f3SbAuIeWcAPLdJP%2FE3ajH9Xr63dkxaQ38ljRiYTt6BRMvcUNc7nMRyq66XRT7odM8XMCWMQtDbtRHq7uxBVBt1jQYFs9KaKCs%2BW%2F7CmSdcv9o8W8hopVnoDxoEuGsXPENRnztMVK%2FP61oMwdRbJ2RbjgFSfp7%2FCo7Mmq6zTYdAHkLayOl862vc0dof%2BaZFkRvMcSozjljTPCKtnEYSWPWd7%2BZBWUE5BSX81xrwYTfK4QUQb%2B8K2uJd46R8oK8vE2KWiqW7P17iVSl3Hc5eAeVuG2%2FO5vm2wawiKVXx7hDNtHAZ7jbZmRQmPY6eY1y13vRDZTLVpjbrKC1SFCS%2FnnpSRlbNmwCGbsh1FXedrO%2BKsDLC%2FH71gZ2H4MN7TAh5%2FwCA2zZCP4xICMPW1gHsR582WFstlJu8ZSxV1k0iz53WwNcIvbUaM3b3KWsqN2MkMI1uy92olcJfpd0RsqprsuXD7kPrL6kW%2F2B%2B3opBjB5Y%2B5mFmwIYH78JFG2gIKzm3lIhhulUDF5g%2BQb2P5Gjz%2BOWjZwjIwYjDTXsmr8JVoAcpipBMPjFnCp%2BjuMHudNAjYOB6tZuwbzo7sEio3Oc9bkCHZIJTRbzndmBPybkh0baiZMgMMb%2F%2Br0GOqUBs0M5lg3F9xaGN6%2BZvSgnX0BYrb8NofktLVFVY2wCQkCsMFOjbI5FmVJ68tjvDeX6GJ%2BQ10AlwwDjlcM39HGCauIb1seUTG3Hl4J33O9CSUSUJPM8xXnxVJrJwvaLQ73DIO8w6RE6q04nNddvf%2FgAlbqFw6xjHoRaO49%2BT7sA5K6S4hP1rBoXXrRPIWcXXbFbSdiU0RmLon12Sd5ZmLdB7KYF7DM7&X-Amz-Signature=4e49c45a57dc7034ee12237b10af8835ebdcd6dc685fcfa29632e7b6ffb75017&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEPKLWP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFSjNJeUXC5wV7ARRifTpluSGjPe1n9Bti7G%2BpttzyptAiEAti2f2CIBrEcpLKq4HiR%2F%2BpgJuf4PNkzewHBOoLqOPpsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDVSBkie1fZgOl4y4ircAzhSmms891GL5f3SbAuIeWcAPLdJP%2FE3ajH9Xr63dkxaQ38ljRiYTt6BRMvcUNc7nMRyq66XRT7odM8XMCWMQtDbtRHq7uxBVBt1jQYFs9KaKCs%2BW%2F7CmSdcv9o8W8hopVnoDxoEuGsXPENRnztMVK%2FP61oMwdRbJ2RbjgFSfp7%2FCo7Mmq6zTYdAHkLayOl862vc0dof%2BaZFkRvMcSozjljTPCKtnEYSWPWd7%2BZBWUE5BSX81xrwYTfK4QUQb%2B8K2uJd46R8oK8vE2KWiqW7P17iVSl3Hc5eAeVuG2%2FO5vm2wawiKVXx7hDNtHAZ7jbZmRQmPY6eY1y13vRDZTLVpjbrKC1SFCS%2FnnpSRlbNmwCGbsh1FXedrO%2BKsDLC%2FH71gZ2H4MN7TAh5%2FwCA2zZCP4xICMPW1gHsR582WFstlJu8ZSxV1k0iz53WwNcIvbUaM3b3KWsqN2MkMI1uy92olcJfpd0RsqprsuXD7kPrL6kW%2F2B%2B3opBjB5Y%2B5mFmwIYH78JFG2gIKzm3lIhhulUDF5g%2BQb2P5Gjz%2BOWjZwjIwYjDTXsmr8JVoAcpipBMPjFnCp%2BjuMHudNAjYOB6tZuwbzo7sEio3Oc9bkCHZIJTRbzndmBPybkh0baiZMgMMb%2F%2Br0GOqUBs0M5lg3F9xaGN6%2BZvSgnX0BYrb8NofktLVFVY2wCQkCsMFOjbI5FmVJ68tjvDeX6GJ%2BQ10AlwwDjlcM39HGCauIb1seUTG3Hl4J33O9CSUSUJPM8xXnxVJrJwvaLQ73DIO8w6RE6q04nNddvf%2FgAlbqFw6xjHoRaO49%2BT7sA5K6S4hP1rBoXXrRPIWcXXbFbSdiU0RmLon12Sd5ZmLdB7KYF7DM7&X-Amz-Signature=f670520485ccbbeac11ce01d24415ae72d2792a2ab3f18ee00f5e24cb6b0a124&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
