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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVGCZ66%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8tYHzZyQqrutk5f%2FvKIauXPG7H7TLWtV479ZnDieo2AiEAzbXi9gRD7fXZPGwD%2FXtc95oxGHQ2KMqcq%2FmQsebhcNcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvjj74Mx5DsBEPVTSrcA2cfXHmUH20DKH2secdLLiO4uUcti02yehKYE3il3fUQN4ALPMAUJ0bz8XIsraZVX2qXbBJGeWl6og9xXxGTbCb%2BNGQ71yIHlAD1zJj%2BDvfxqvzo1BPMWV7W%2BaXm3nUhVa34rs0UKPa70%2FzyA%2BoPM5FmOISo7gYXXT98E4CxeqnMSJUI7N8qBhfEoRaELVwKoElC0IZopdSMVNIracsUESP5R9m1L%2BQrJ4xtPX%2FAcBseh8EzyWXmy4uMtKBpLAsNVBn%2BdKTo9emhieyO%2FFUztG%2Byb6xWLP6n4fuuB%2F56uP9Rzp4vxBHOxyQ8JB1QphBrMRO8YLsFqLpl5pcu6mPLOprxgMCXkJjXpb8gqugxr78Fdbak9qMDL9GTy5Ogogs07q6FJyoNfoKMZZQamC82hQR3EcvkP%2Be1CITZos0xqljBGhuMBvskHIR6oFB1opeQpsZNQEHb6EPHkQ9adc%2BkVHHBCzSSBgWwwpXaulszYSUNURuhlQWNxyVXUuLsvbNn1mxQYiF9KlU%2BbkEGbHIOBryYiacyEVSc%2FZFtpii0Ny1bvhUnilNf0F%2BA7Tp4kjZzb9W8lQHn%2FF9RwKfQhLiLUi5wHogRdN3yupvigFodQ1aRhhaWw84CBju3UtdUMJemr8QGOqUBwkrslyvJr506WIALBGpi82ZonsPe0vp0Xdf%2FVLm4XemL%2BHgGpsQ2hYjAlv5OXsF3PM42M5lPBmGBOV2ou4ZkfFKb2e4eeAWzoMB4sH1RCWFhHBcdGJ%2BGgHy9nzl7SwW%2Bz8%2FZrov%2FE34XTdSme1hXMXlbyan7eTO7mpvS5nlaVL0X098SBhF2A4UTU4khyxsSpCSwV3JhWBG9fddrHvrmeI6XjdfN&X-Amz-Signature=4f0d36a775da76dee22187ca97a94d40755ae9512de631138490a755aa866a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVGCZ66%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8tYHzZyQqrutk5f%2FvKIauXPG7H7TLWtV479ZnDieo2AiEAzbXi9gRD7fXZPGwD%2FXtc95oxGHQ2KMqcq%2FmQsebhcNcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvjj74Mx5DsBEPVTSrcA2cfXHmUH20DKH2secdLLiO4uUcti02yehKYE3il3fUQN4ALPMAUJ0bz8XIsraZVX2qXbBJGeWl6og9xXxGTbCb%2BNGQ71yIHlAD1zJj%2BDvfxqvzo1BPMWV7W%2BaXm3nUhVa34rs0UKPa70%2FzyA%2BoPM5FmOISo7gYXXT98E4CxeqnMSJUI7N8qBhfEoRaELVwKoElC0IZopdSMVNIracsUESP5R9m1L%2BQrJ4xtPX%2FAcBseh8EzyWXmy4uMtKBpLAsNVBn%2BdKTo9emhieyO%2FFUztG%2Byb6xWLP6n4fuuB%2F56uP9Rzp4vxBHOxyQ8JB1QphBrMRO8YLsFqLpl5pcu6mPLOprxgMCXkJjXpb8gqugxr78Fdbak9qMDL9GTy5Ogogs07q6FJyoNfoKMZZQamC82hQR3EcvkP%2Be1CITZos0xqljBGhuMBvskHIR6oFB1opeQpsZNQEHb6EPHkQ9adc%2BkVHHBCzSSBgWwwpXaulszYSUNURuhlQWNxyVXUuLsvbNn1mxQYiF9KlU%2BbkEGbHIOBryYiacyEVSc%2FZFtpii0Ny1bvhUnilNf0F%2BA7Tp4kjZzb9W8lQHn%2FF9RwKfQhLiLUi5wHogRdN3yupvigFodQ1aRhhaWw84CBju3UtdUMJemr8QGOqUBwkrslyvJr506WIALBGpi82ZonsPe0vp0Xdf%2FVLm4XemL%2BHgGpsQ2hYjAlv5OXsF3PM42M5lPBmGBOV2ou4ZkfFKb2e4eeAWzoMB4sH1RCWFhHBcdGJ%2BGgHy9nzl7SwW%2Bz8%2FZrov%2FE34XTdSme1hXMXlbyan7eTO7mpvS5nlaVL0X098SBhF2A4UTU4khyxsSpCSwV3JhWBG9fddrHvrmeI6XjdfN&X-Amz-Signature=711aeacfc35cd218104570603766de5ecfac147bbc4ad9b4ee4095d6a24777de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVGCZ66%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8tYHzZyQqrutk5f%2FvKIauXPG7H7TLWtV479ZnDieo2AiEAzbXi9gRD7fXZPGwD%2FXtc95oxGHQ2KMqcq%2FmQsebhcNcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvjj74Mx5DsBEPVTSrcA2cfXHmUH20DKH2secdLLiO4uUcti02yehKYE3il3fUQN4ALPMAUJ0bz8XIsraZVX2qXbBJGeWl6og9xXxGTbCb%2BNGQ71yIHlAD1zJj%2BDvfxqvzo1BPMWV7W%2BaXm3nUhVa34rs0UKPa70%2FzyA%2BoPM5FmOISo7gYXXT98E4CxeqnMSJUI7N8qBhfEoRaELVwKoElC0IZopdSMVNIracsUESP5R9m1L%2BQrJ4xtPX%2FAcBseh8EzyWXmy4uMtKBpLAsNVBn%2BdKTo9emhieyO%2FFUztG%2Byb6xWLP6n4fuuB%2F56uP9Rzp4vxBHOxyQ8JB1QphBrMRO8YLsFqLpl5pcu6mPLOprxgMCXkJjXpb8gqugxr78Fdbak9qMDL9GTy5Ogogs07q6FJyoNfoKMZZQamC82hQR3EcvkP%2Be1CITZos0xqljBGhuMBvskHIR6oFB1opeQpsZNQEHb6EPHkQ9adc%2BkVHHBCzSSBgWwwpXaulszYSUNURuhlQWNxyVXUuLsvbNn1mxQYiF9KlU%2BbkEGbHIOBryYiacyEVSc%2FZFtpii0Ny1bvhUnilNf0F%2BA7Tp4kjZzb9W8lQHn%2FF9RwKfQhLiLUi5wHogRdN3yupvigFodQ1aRhhaWw84CBju3UtdUMJemr8QGOqUBwkrslyvJr506WIALBGpi82ZonsPe0vp0Xdf%2FVLm4XemL%2BHgGpsQ2hYjAlv5OXsF3PM42M5lPBmGBOV2ou4ZkfFKb2e4eeAWzoMB4sH1RCWFhHBcdGJ%2BGgHy9nzl7SwW%2Bz8%2FZrov%2FE34XTdSme1hXMXlbyan7eTO7mpvS5nlaVL0X098SBhF2A4UTU4khyxsSpCSwV3JhWBG9fddrHvrmeI6XjdfN&X-Amz-Signature=5646bced0f0074670baef54389dbd39fd72669206ed80af38eef5edb0e8c414a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVGCZ66%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8tYHzZyQqrutk5f%2FvKIauXPG7H7TLWtV479ZnDieo2AiEAzbXi9gRD7fXZPGwD%2FXtc95oxGHQ2KMqcq%2FmQsebhcNcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvjj74Mx5DsBEPVTSrcA2cfXHmUH20DKH2secdLLiO4uUcti02yehKYE3il3fUQN4ALPMAUJ0bz8XIsraZVX2qXbBJGeWl6og9xXxGTbCb%2BNGQ71yIHlAD1zJj%2BDvfxqvzo1BPMWV7W%2BaXm3nUhVa34rs0UKPa70%2FzyA%2BoPM5FmOISo7gYXXT98E4CxeqnMSJUI7N8qBhfEoRaELVwKoElC0IZopdSMVNIracsUESP5R9m1L%2BQrJ4xtPX%2FAcBseh8EzyWXmy4uMtKBpLAsNVBn%2BdKTo9emhieyO%2FFUztG%2Byb6xWLP6n4fuuB%2F56uP9Rzp4vxBHOxyQ8JB1QphBrMRO8YLsFqLpl5pcu6mPLOprxgMCXkJjXpb8gqugxr78Fdbak9qMDL9GTy5Ogogs07q6FJyoNfoKMZZQamC82hQR3EcvkP%2Be1CITZos0xqljBGhuMBvskHIR6oFB1opeQpsZNQEHb6EPHkQ9adc%2BkVHHBCzSSBgWwwpXaulszYSUNURuhlQWNxyVXUuLsvbNn1mxQYiF9KlU%2BbkEGbHIOBryYiacyEVSc%2FZFtpii0Ny1bvhUnilNf0F%2BA7Tp4kjZzb9W8lQHn%2FF9RwKfQhLiLUi5wHogRdN3yupvigFodQ1aRhhaWw84CBju3UtdUMJemr8QGOqUBwkrslyvJr506WIALBGpi82ZonsPe0vp0Xdf%2FVLm4XemL%2BHgGpsQ2hYjAlv5OXsF3PM42M5lPBmGBOV2ou4ZkfFKb2e4eeAWzoMB4sH1RCWFhHBcdGJ%2BGgHy9nzl7SwW%2Bz8%2FZrov%2FE34XTdSme1hXMXlbyan7eTO7mpvS5nlaVL0X098SBhF2A4UTU4khyxsSpCSwV3JhWBG9fddrHvrmeI6XjdfN&X-Amz-Signature=22e0679c6b26708880e92782c5727c32f41d47f2fa2fcc01b7b5657c2b72a5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVGCZ66%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8tYHzZyQqrutk5f%2FvKIauXPG7H7TLWtV479ZnDieo2AiEAzbXi9gRD7fXZPGwD%2FXtc95oxGHQ2KMqcq%2FmQsebhcNcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvjj74Mx5DsBEPVTSrcA2cfXHmUH20DKH2secdLLiO4uUcti02yehKYE3il3fUQN4ALPMAUJ0bz8XIsraZVX2qXbBJGeWl6og9xXxGTbCb%2BNGQ71yIHlAD1zJj%2BDvfxqvzo1BPMWV7W%2BaXm3nUhVa34rs0UKPa70%2FzyA%2BoPM5FmOISo7gYXXT98E4CxeqnMSJUI7N8qBhfEoRaELVwKoElC0IZopdSMVNIracsUESP5R9m1L%2BQrJ4xtPX%2FAcBseh8EzyWXmy4uMtKBpLAsNVBn%2BdKTo9emhieyO%2FFUztG%2Byb6xWLP6n4fuuB%2F56uP9Rzp4vxBHOxyQ8JB1QphBrMRO8YLsFqLpl5pcu6mPLOprxgMCXkJjXpb8gqugxr78Fdbak9qMDL9GTy5Ogogs07q6FJyoNfoKMZZQamC82hQR3EcvkP%2Be1CITZos0xqljBGhuMBvskHIR6oFB1opeQpsZNQEHb6EPHkQ9adc%2BkVHHBCzSSBgWwwpXaulszYSUNURuhlQWNxyVXUuLsvbNn1mxQYiF9KlU%2BbkEGbHIOBryYiacyEVSc%2FZFtpii0Ny1bvhUnilNf0F%2BA7Tp4kjZzb9W8lQHn%2FF9RwKfQhLiLUi5wHogRdN3yupvigFodQ1aRhhaWw84CBju3UtdUMJemr8QGOqUBwkrslyvJr506WIALBGpi82ZonsPe0vp0Xdf%2FVLm4XemL%2BHgGpsQ2hYjAlv5OXsF3PM42M5lPBmGBOV2ou4ZkfFKb2e4eeAWzoMB4sH1RCWFhHBcdGJ%2BGgHy9nzl7SwW%2Bz8%2FZrov%2FE34XTdSme1hXMXlbyan7eTO7mpvS5nlaVL0X098SBhF2A4UTU4khyxsSpCSwV3JhWBG9fddrHvrmeI6XjdfN&X-Amz-Signature=c78e1cb0535c3ed0683078746f683d909d1a32cc5a427bfcc7583ab9e3f0916c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
